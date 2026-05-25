const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const os = require('os');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = 3000;
const SECRET_KEY = "chiave_super_segreta_peekbox";

function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'localhost';
}
const HOST = process.env.HOST || getLocalIP();

app.use(cors());
app.use(express.json({ limit: '524288000' }));
app.use(express.urlencoded({ limit: '524288000', extended: true }));
app.use(express.static('public'));

app.get('/scan', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'scan.html'));
});

function verificaToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: "Accesso negato. Token mancante." });
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ error: "Token non valido o scaduto." });
        req.user = user;
        next();
    });
}

function verificaAdmin(req, res, next) {
    verificaToken(req, res, () => {
        db.get('SELECT is_admin FROM utenti WHERE id = ?', [req.user.id], (err, row) => {
            if (err || !row || row.is_admin !== 1)
                return res.status(403).json({ error: "Accesso riservato agli amministratori." });
            next();
            });
    });
}

function verificaAccessoArmadioScrittura(armadioId, userId, res, cb) {
    db.get('SELECT * FROM armadi WHERE id = ?', [armadioId], (err, armadio) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!armadio) return res.status(404).json({ error: "Archivio non trovato." });

        if (String(armadio.rif_utente) === String(userId)) {
            return cb(armadio);
        }

        db.get(
            `SELECT ruolo FROM condivisioni_armadio
             WHERE rif_armadio = ? AND rif_ospite = ? AND stato = 'accettata' AND ruolo = 'editor'`,
            [armadioId, userId],
            (shareErr, share) => {
                if (shareErr) return res.status(500).json({ error: shareErr.message });
                if (!share) return res.status(403).json({ error: "Non hai i permessi per modificare questo archivio." });
                cb(armadio);
            }
        );
    });
}

function verificaAccessoArmadioLettura(armadioId, userId, res, cb) {
    db.get('SELECT * FROM armadi WHERE id = ?', [armadioId], (err, armadio) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!armadio) return res.status(404).json({ error: "Archivio non trovato." });

        if (String(armadio.rif_utente) === String(userId)) {
            return cb(armadio);
        }

        db.get(
            `SELECT ruolo FROM condivisioni_armadio
             WHERE rif_armadio = ? AND rif_ospite = ? AND stato = 'accettata'`,
            [armadioId, userId],
            (shareErr, share) => {
                if (shareErr) return res.status(500).json({ error: shareErr.message });
                if (!share) return res.status(403).json({ error: "Non hai accesso a questo archivio." });
                cb(armadio, share.ruolo);
            }
        );
    });
}

function verificaAccessoBoxLettura(boxId, userId, res, cb) {
    db.get('SELECT * FROM box WHERE id = ?', [boxId], (err, box) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!box) return res.status(404).json({ error: "Box non trovata." });
        verificaAccessoArmadioLettura(box.rif_armadio, userId, res, (armadio, ruolo) => {
            cb(box, ruolo);
        });
    });
}

function verificaAccessoBoxScrittura(boxId, userId, res, cb) {
    db.get('SELECT * FROM box WHERE id = ?', [boxId], (err, box) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!box) return res.status(404).json({ error: "Box non trovata." });
        verificaAccessoArmadioScrittura(box.rif_armadio, userId, res, () => {
            cb();
        });
    });
}

// ─── Helper: inserisci log cronologia box ─────────────────────
function inserisciLogBox(boxId, tipo, descrizione, dettagli, cb) {
    const sql = `INSERT INTO box_log (rif_box, tipo, descrizione, dettagli) VALUES (?, ?, ?, ?)`;
    db.run(sql, [boxId, tipo, descrizione, dettagli ? JSON.stringify(dettagli) : null], function(err) {
        if (err) console.error('[box_log] Errore:', err.message);
        if (cb) cb(err);
    });
}

// ─────────────────────────────────────────────
// UTENTI
// ─────────────────────────────────────────────

app.get('/', (req, res) => {
    res.send('🚀 Backend PeekBox v3 attivo — GPS + Profili + Ripristina Box!');
});

app.post('/api/registrazione', async (req, res) => {
    const { username, email, password, tipo_profilo = 'personal' } = req.body;
    if (!username || !email || !password) return res.status(400).json({ error: "Tutti i campi sono obbligatori." });
    if (!['personal', 'business'].includes(tipo_profilo))
        return res.status(400).json({ error: "tipo_profilo non valido. Usa 'personal' o 'business'." });
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = 'INSERT INTO utenti (username, email, password, tipo_profilo) VALUES (?, ?, ?, ?)';
        db.run(sql, [username, email, hashedPassword, tipo_profilo], function(err) {
            if (err) return res.status(400).json({ error: "Email già registrata." });
            res.status(201).json({ id: this.lastID, message: "Utente creato!", tipo_profilo });
        });
    } catch (error) { res.status(500).json({ error: "Errore server." }); }
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Email e password sono obbligatorie." });
    db.get('SELECT * FROM utenti WHERE email = ?', [email], async (err, user) => {
        if (err || !user) return res.status(401).json({ error: "Credenziali non valide." });
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            const token = jwt.sign({ id: user.id, email: user.email, tipo_profilo: user.tipo_profilo }, SECRET_KEY, { expiresIn: '24h' });
            res.json({
                message: "Accesso eseguito!",
                token,
                user: { id: user.id, username: user.username, email: user.email, tipo_profilo: user.tipo_profilo, is_admin: user.is_admin === 1 }
            });
        } else {
            res.status(401).json({ error: "Credenziali non valide." });
        }
    });
});

app.put('/api/utenti/:id/profilo', verificaToken, (req, res) => {
    if (String(req.user.id) !== String(req.params.id))
        return res.status(403).json({ error: "Non autorizzato." });
    const { tipo_profilo } = req.body;
    if (!['personal', 'business'].includes(tipo_profilo))
        return res.status(400).json({ error: "tipo_profilo non valido." });
    db.run('UPDATE utenti SET tipo_profilo = ? WHERE id = ?', [tipo_profilo, req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Profilo aggiornato!", tipo_profilo });
    });
});

app.put('/api/utenti/:id', verificaToken, (req, res) => {
    if (String(req.user.id) !== String(req.params.id))
        return res.status(403).json({ error: "Non autorizzato." });
    const { nome, cognome, email } = req.body;
    db.run('UPDATE utenti SET username = COALESCE(?, username), email = COALESCE(?, email) WHERE id = ?',
        [nome || null, email || null, req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Profilo aggiornato!" });
    });
});

// ─────────────────────────────────────────────
// ARMADI
// ─────────────────────────────────────────────

app.get('/api/armadi/:utenteId', verificaToken, (req, res) => {
    if (String(req.user.id) !== String(req.params.utenteId))
        return res.status(403).json({ error: "Non autorizzato." });

    const sql = `
        SELECT a.*, NULL as ruolo_condivisione, u.username as proprietario_username
        FROM armadi a
        JOIN utenti u ON u.id = a.rif_utente
        WHERE a.rif_utente = ?

        UNION

        SELECT a.*, c.ruolo as ruolo_condivisione, u.username as proprietario_username
        FROM armadi a
        JOIN condivisioni_armadio c ON c.rif_armadio = a.id
        JOIN utenti u ON u.id = a.rif_utente
        WHERE c.rif_ospite = ?
        ORDER BY a.id ASC
    `;
    db.all(sql, [req.params.utenteId, req.params.utenteId], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ armadi: rows });
    });
});

app.post('/api/armadi', verificaToken, (req, res) => {
    const { nome, rif_utente } = req.body;
    db.run('INSERT INTO armadi (nome, rif_utente) VALUES (?, ?)', [nome, rif_utente], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: this.lastID });
    });
});

app.delete('/api/armadi/:id', verificaToken, (req, res) => {
    db.run('DELETE FROM armadi WHERE id = ? AND rif_utente = ?', [req.params.id, req.user.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(403).json({ error: "Non autorizzato o armadio non trovato." });
        res.json({ message: "Armadio eliminato!" });
    });
});

// ─────────────────────────────────────────────
// BOX
// ─────────────────────────────────────────────

app.get('/api/box/singola/:id', verificaToken, (req, res) => {
    verificaAccessoBoxLettura(req.params.id, req.user.id, res, (box, ruolo) => {
        const sql = `
            SELECT box.*, armadi.nome as nome_armadio, armadi.rif_utente
            FROM box
            JOIN armadi ON box.rif_armadio = armadi.id
            WHERE box.id = ?
        `;
        db.get(sql, [req.params.id], (err, row) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!row) return res.status(404).json({ error: "Box non trovata." });
            row.ruolo_condivisione = ruolo || null;
            res.json({ box: row });
        });
    });
});

app.get('/api/box/:utenteId', verificaToken, (req, res) => {
    if (String(req.user.id) !== String(req.params.utenteId))
        return res.status(403).json({ error: "Non autorizzato." });

    const sql = `
        SELECT box.*,
               CASE WHEN box.data_eliminazione IS NOT NULL THEN 1 ELSE 0 END as is_eliminated,
               CASE WHEN box.data_eliminazione IS NOT NULL THEN 1 ELSE 0 END as in_cestino,
               GROUP_CONCAT(DISTINCT oggetti.tipo) as categorie_presenti,
               MAX(oggetti.fragile) as contiene_fragili,
               COUNT(oggetti.id) as num_oggetti,
               NULL as ruolo_condivisione
        FROM box
        JOIN armadi ON box.rif_armadio = armadi.id
        LEFT JOIN oggetti ON oggetti.rif_box = box.id
        WHERE armadi.rif_utente = ?
          AND box.data_eliminazione IS NULL
        GROUP BY box.id

        UNION

        SELECT box.*,
               CASE WHEN box.data_eliminazione IS NOT NULL THEN 1 ELSE 0 END as is_eliminated,
               CASE WHEN box.data_eliminazione IS NOT NULL THEN 1 ELSE 0 END as in_cestino,
               GROUP_CONCAT(DISTINCT oggetti.tipo) as categorie_presenti,
               MAX(oggetti.fragile) as contiene_fragili,
               COUNT(oggetti.id) as num_oggetti,
               c.ruolo as ruolo_condivisione
        FROM box
        JOIN armadi ON box.rif_armadio = armadi.id
        JOIN condivisioni_armadio c ON c.rif_armadio = armadi.id
        LEFT JOIN oggetti ON oggetti.rif_box = box.id
        WHERE c.rif_ospite = ?
          AND box.data_eliminazione IS NULL
        GROUP BY box.id
    `;
    db.all(sql, [req.params.utenteId, req.params.utenteId], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ box: rows });
    });
});

app.post('/api/box', verificaToken, (req, res) => {
    const { nome, descrizione = null, rif_armadio, is_preferito, moving_mode = 0 } = req.body;

    db.get('SELECT id, rif_utente FROM armadi WHERE id = ?', [rif_armadio], (err, armadio) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!armadio) return res.status(404).json({ error: "Armadio non trovato." });

        if (String(armadio.rif_utente) !== String(req.user.id)) {
            db.get(
                `SELECT ruolo FROM condivisioni_armadio WHERE rif_armadio = ? AND rif_ospite = ? AND stato = 'accettata' AND ruolo = 'editor'`,
                [rif_armadio, req.user.id],
                (shareErr, share) => {
                    if (shareErr) return res.status(500).json({ error: shareErr.message });
                    if (!share) return res.status(403).json({ error: "Non hai i permessi per creare box in questo armadio." });
                    inserisciBox();
                }
            );
        } else {
            inserisciBox();
        }

        function inserisciBox() {
            db.run(
                'INSERT INTO box (nome, descrizione, rif_armadio, is_preferito, moving_mode) VALUES (?, ?, ?, ?, ?)',
                [nome, descrizione, rif_armadio, is_preferito ? 1 : 0, moving_mode ? 1 : 0],
                function(err) {
                    if (err) return res.status(500).json({ error: err.message });
                    res.status(201).json({ id: this.lastID });
                }
            );
        }
    });
});

app.put('/api/box/preferito/:id', verificaToken, (req, res) => {
    verificaAccessoBoxScrittura(req.params.id, req.user.id, res, () => {
        const { is_preferito } = req.body;
        db.run('UPDATE box SET is_preferito = ? WHERE id = ?', [is_preferito ? 1 : 0, req.params.id], function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Stato preferito aggiornato!" });
        });
    });
});

app.put('/api/box/moving-mode/:id', verificaToken, (req, res) => {
    verificaAccessoBoxScrittura(req.params.id, req.user.id, res, () => {
        const { moving_mode } = req.body;
        db.run('UPDATE box SET moving_mode = ? WHERE id = ?', [moving_mode ? 1 : 0, req.params.id], function(runErr) {
            if (runErr) return res.status(500).json({ error: runErr.message });
            res.json({ message: `Moving Mode ${moving_mode ? 'attivato' : 'disattivato'}!`, moving_mode: moving_mode ? 1 : 0 });
        });
    });
});

// ─── GET cronologia box ──────────────────────────────────────
app.get('/api/box/:id/log', verificaToken, (req, res) => {
    verificaAccessoBoxLettura(req.params.id, req.user.id, res, () => {
        db.all(
            `SELECT * FROM box_log WHERE rif_box = ? ORDER BY creato_il DESC LIMIT 50`,
            [req.params.id],
            (err, rows) => {
                if (err) return res.status(500).json({ error: err.message });
                res.json({ log: rows || [] });
            }
        );
    });
});

app.delete('/api/box/:id/definitivo', verificaToken, (req, res) => {
    const sqlCheck = `
        SELECT box.id FROM box
        JOIN armadi ON box.rif_armadio = armadi.id
        WHERE box.id = ? AND armadi.rif_utente = ?
          AND box.data_eliminazione IS NOT NULL
    `;
    db.get(sqlCheck, [req.params.id, req.user.id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: 'Box non trovata nel cestino o non autorizzato.' });
        db.run('DELETE FROM box WHERE id = ?', [req.params.id], function (runErr) {
            if (runErr) return res.status(500).json({ error: runErr.message });
            res.json({ message: 'Box eliminata definitivamente.', id: Number(req.params.id) });
        });
    });
});

app.delete('/api/box/:id', verificaToken, (req, res) => {
    verificaAccessoBoxScrittura(req.params.id, req.user.id, res, () => {
        const now = new Date().toISOString();
        db.run('UPDATE box SET data_eliminazione = ? WHERE id = ?', [now, req.params.id], function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Box spostata nel cestino!" });
        });
    });
});

app.put('/api/box/:id/ripristina', verificaToken, (req, res) => {
    const sqlCheck = `
        SELECT box.id FROM box
        JOIN armadi ON box.rif_armadio = armadi.id
        WHERE box.id = ? AND armadi.rif_utente = ?
          AND box.data_eliminazione IS NOT NULL
    `;
    db.get(sqlCheck, [req.params.id, req.user.id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: "Box non trovata nel cestino o non autorizzato." });
        db.run('UPDATE box SET data_eliminazione = NULL WHERE id = ?', [req.params.id], function(runErr) {
            if (runErr) return res.status(500).json({ error: runErr.message });
            res.json({ message: "Box ripristinata con successo!" });
        });
    });
});

app.get('/api/box/eliminate/:utenteId', verificaToken, (req, res) => {
    if (String(req.user.id) !== String(req.params.utenteId))
        return res.status(403).json({ error: "Non autorizzato." });
    const trentaGiorniFa = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    const sql = `
        SELECT box.*, armadi.nome as nome_armadio, COUNT(oggetti.id) as num_oggetti
        FROM box
        JOIN armadi ON box.rif_armadio = armadi.id
        LEFT JOIN oggetti ON oggetti.rif_box = box.id
        WHERE armadi.rif_utente = ?
          AND box.data_eliminazione IS NOT NULL
          AND box.data_eliminazione >= ?
        GROUP BY box.id
        ORDER BY box.data_eliminazione DESC
    `;
    db.all(sql, [req.params.utenteId, trentaGiorniFa], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ box_eliminate: rows });
    });
});

app.delete('/api/box/cestino/pulisci', verificaToken, (req, res) => {
    const trentaGiorniFa = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    db.run('DELETE FROM box WHERE data_eliminazione IS NOT NULL AND data_eliminazione < ?',
        [trentaGiorniFa], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: `Rimosse ${this.changes} box scadute.` });
    });
});

// ── Pulizia automatica ogni ora ──────────────────────────────
const PULIZIA_INTERVAL_MS = 60 * 60 * 1000; // 1 ora
setInterval(() => {
    const trentaGiorniFa = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    db.run('DELETE FROM box WHERE data_eliminazione IS NOT NULL AND data_eliminazione < ?',
        [trentaGiorniFa], function(err) {
        if (err) {
            console.error('[Pulizia automatica box] Errore:', err.message);
        } else if (this.changes > 0) {
            console.log(`[Pulizia automatica] Rimosse ${this.changes} box scadute.`);
        }
    });
    db.run('DELETE FROM oggetti WHERE data_eliminazione IS NOT NULL AND data_eliminazione < ?',
        [trentaGiorniFa], function(err) {
        if (err) {
            console.error('[Pulizia automatica oggetti] Errore:', err.message);
        } else if (this.changes > 0) {
            console.log(`[Pulizia automatica] Rimossi ${this.changes} oggetti scaduti.`);
        }
    });
}, PULIZIA_INTERVAL_MS);
console.log(`[Pulizia automatica] Avviata ogni ${PULIZIA_INTERVAL_MS / 60000} minuti.`);

// ─────────────────────────────────────────────
// CHECKPOINT GPS
// ─────────────────────────────────────────────

app.post('/api/checkpoint', verificaToken, (req, res) => {
    const { rif_box, latitudine, longitudine, accuratezza, label } = req.body;
    if (!rif_box || latitudine == null || longitudine == null)
        return res.status(400).json({ error: "rif_box, latitudine e longitudine sono obbligatori." });

    verificaAccessoBoxScrittura(rif_box, req.user.id, res, () => {
        const sql = `INSERT INTO checkpoint_gps (rif_box, rif_utente, latitudine, longitudine, accuratezza, label, timestamp)
                     VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`;
        db.run(sql, [rif_box, req.user.id, latitudine, longitudine, accuratezza || null, label || null], function(runErr) {
            if (runErr) return res.status(500).json({ error: runErr.message });
            res.status(201).json({ id: this.lastID, message: "Checkpoint salvato!" });
        });
    });
});

app.get('/api/checkpoint/:boxId', verificaToken, (req, res) => {
    verificaAccessoBoxLettura(req.params.boxId, req.user.id, res, () => {
        db.all(
            'SELECT * FROM checkpoint_gps WHERE rif_box = ? ORDER BY timestamp ASC',
            [req.params.boxId],
            (fetchErr, rows) => {
                if (fetchErr) return res.status(500).json({ error: fetchErr.message });
                res.json({ checkpoints: rows });
            }
        );
    });
});

app.get('/api/checkpoint/:boxId/ultimo', verificaToken, (req, res) => {
    verificaAccessoBoxLettura(req.params.boxId, req.user.id, res, () => {
        db.get(
            'SELECT * FROM checkpoint_gps WHERE rif_box = ? ORDER BY timestamp DESC LIMIT 1',
            [req.params.boxId],
            (fetchErr, checkpoint) => {
                if (fetchErr) return res.status(500).json({ error: fetchErr.message });
                res.json({ checkpoint: checkpoint || null });
            }
        );
    });
});

app.get('/api/dashboard/business/:utenteId', verificaToken, (req, res) => {
    if (String(req.user.id) !== String(req.params.utenteId))
        return res.status(403).json({ error: "Non autorizzato." });
    if (req.user.tipo_profilo !== 'business')
        return res.status(403).json({ error: "Riservato ai profili Business." });

    const sql = `
        SELECT box.id, box.nome, box.moving_mode, armadi.nome as nome_armadio,
               COUNT(oggetti.id) as num_oggetti,
               gps.latitudine as last_lat,
               gps.longitudine as last_lng,
               gps.timestamp as last_scan,
               gps.label as last_label
        FROM box
        JOIN armadi ON box.rif_armadio = armadi.id
        LEFT JOIN oggetti ON oggetti.rif_box = box.id
        LEFT JOIN (
            SELECT rif_box, latitudine, longitudine, timestamp, label
            FROM checkpoint_gps c1
            WHERE timestamp = (
                SELECT MAX(timestamp) FROM checkpoint_gps c2 WHERE c2.rif_box = c1.rif_box
            )
        ) gps ON gps.rif_box = box.id
        WHERE armadi.rif_utente = ?
          AND box.data_eliminazione IS NULL
        GROUP BY box.id
        ORDER BY gps.timestamp DESC
    `;
    db.all(sql, [req.params.utenteId], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ assets: rows });
    });
});

app.delete('/api/checkpoint/:boxId', verificaToken, (req, res) => {
    verificaAccessoBoxScrittura(req.params.boxId, req.user.id, res, () => {
        db.run('DELETE FROM checkpoint_gps WHERE rif_box = ?', [req.params.boxId], function(runErr) {
            if (runErr) return res.status(500).json({ error: runErr.message });
            res.json({ message: `Rimossi ${this.changes} checkpoint.` });
        });
    });
});

app.get('/api/checkpoint/tutti/:utenteId', verificaToken, (req, res) => {
    if (String(req.user.id) !== String(req.params.utenteId))
        return res.status(403).json({ error: "Non autorizzato." });

    const sql = `
        SELECT DISTINCT
               box.id as box_id, box.nome as box_nome,
               armadi.nome as armadio_nome,
               cp.latitudine, cp.longitudine, cp.timestamp, cp.label,
               g.latitudine as geofence_lat, g.longitudine as geofence_lng
        FROM box
        JOIN armadi ON box.rif_armadio = armadi.id
        JOIN geofence g ON g.rif_armadio = armadi.id AND g.attivo = 1
        LEFT JOIN condivisioni_armadio c ON c.rif_armadio = armadi.id AND c.rif_ospite = ? AND c.stato = 'accettata'
        LEFT JOIN checkpoint_gps cp ON cp.id = (
            SELECT id FROM checkpoint_gps WHERE rif_box = box.id ORDER BY timestamp DESC LIMIT 1
        )
        WHERE box.data_eliminazione IS NULL
          AND (armadi.rif_utente = ? OR c.id IS NOT NULL)
        ORDER BY cp.timestamp DESC
    `;
    db.all(sql, [req.params.utenteId, req.params.utenteId], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (rows && rows.length > 0) {
            console.log('[DEBUG checkpoint/tutti] prima riga:', JSON.stringify(rows[0], null, 2));
        } else {
            console.log('[DEBUG checkpoint/tutti] nessuna riga trovata');
        }
        res.json({ checkpoints: rows });
    });
});

// ─────────────────────────────────────────────
// GEOFENCE & NOTIFICHE
// ─────────────────────────────────────────────

const R = 6371000; // Raggio terrestre in metri (per formula Haversine)

function calcolaDistanza(lat1, lng1, lat2, lng2) {
    const toRad = (deg) => deg * Math.PI / 180;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Salva/aggiorna geofence per un armadio
app.post('/api/geofence', verificaToken, (req, res) => {
    const { armadio_id, latitudine, longitudine, raggio_m, attivo } = req.body;
    if (!armadio_id || latitudine == null || longitudine == null)
        return res.status(400).json({ error: "armadio_id, latitudine e longitudine sono obbligatori." });

    verificaAccessoArmadioScrittura(armadio_id, req.user.id, res, () => {
        db.run(`INSERT INTO geofence (rif_armadio, latitudine, longitudine, raggio_m, attivo) VALUES (?, ?, ?, ?, ?)
                 ON CONFLICT(rif_armadio) DO UPDATE SET latitudine = excluded.latitudine, longitudine = excluded.longitudine,
                 raggio_m = excluded.raggio_m, attivo = excluded.attivo, creato_il = datetime('now')`,
            [armadio_id, latitudine, longitudine, raggio_m || 100, attivo !== false ? 1 : 0],
            function(err) {
                if (err) return res.status(500).json({ error: err.message });
                db.get('SELECT * FROM geofence WHERE rif_armadio = ?', [armadio_id], (getErr, geofence) => {
                    if (getErr) return res.status(500).json({ error: getErr.message });
                    res.json({ geofence, message: 'Geofence salvato!' });
                });
            }
        );
    });
});

// Ottieni geofence per armadio
app.get('/api/geofence/:armadioId', verificaToken, (req, res) => {
    verificaAccessoArmadioLettura(req.params.armadioId, req.user.id, res, () => {
        db.get('SELECT * FROM geofence WHERE rif_armadio = ?', [req.params.armadioId], (err, geofence) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ geofence: geofence || null });
        });
    });
});

// Elimina geofence
app.delete('/api/geofence/:armadioId', verificaToken, (req, res) => {
    verificaAccessoArmadioScrittura(req.params.armadioId, req.user.id, res, () => {
        db.run('DELETE FROM geofence WHERE rif_armadio = ?', [req.params.armadioId], function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Geofence rimosso.' });
        });
    });
});

// Verifica posizione rispetto al geofence (accetta armadio_id o box_id)
app.post('/api/geofence/verifica', verificaToken, (req, res) => {
    const { armadio_id, box_id, latitudine, longitudine } = req.body;
    if ((!armadio_id && !box_id) || latitudine == null || longitudine == null)
        return res.status(400).json({ error: "armadio_id o box_id, latitudine e longitudine sono obbligatori." });

    let sql, params;
    if (armadio_id) {
        sql = 'SELECT * FROM geofence WHERE rif_armadio = ?';
        params = [armadio_id];
    } else {
        sql = `SELECT g.*, b.rif_armadio FROM geofence g
                 JOIN box b ON b.rif_armadio = g.rif_armadio WHERE b.id = ?`;
        params = [box_id];
    }

    db.get(sql, params, (err, geofence) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!geofence) return res.json({ dentro_perimetro: true, motivo: 'Nessun geofence configurato.' });

        if (!geofence.attivo) return res.json({ dentro_perimetro: true, motivo: 'Geofence disattivato.' });

        const distanza = calcolaDistanza(latitudine, longitudine, geofence.latitudine, geofence.longitudine);
        const dentro = distanza <= geofence.raggio_m;
        res.json({ dentro_perimetro: dentro, distanza_m: Math.round(distanza), centro: { lat: geofence.latitudine, lng: geofence.longitudine }, raggio_m: geofence.raggio_m });
    });
});

// Salva checkpoint con verifica geofence (usato da scansione QR / tracking)
app.post('/api/checkpoint/sicuro', verificaToken, (req, res) => {
    const { rif_box, latitudine, longitudine, accuratezza, label } = req.body;
    if (!rif_box || latitudine == null || longitudine == null)
        return res.status(400).json({ error: "rif_box, latitudine e longitudine sono obbligatori." });

    verificaAccessoBoxScrittura(rif_box, req.user.id, res, () => {
        // Salva checkpoint
        db.run(`INSERT INTO checkpoint_gps (rif_box, rif_utente, latitudine, longitudine, accuratezza, label, timestamp)
                 VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`,
            [rif_box, req.user.id, latitudine, longitudine, accuratezza || null, label || null],
            function(runErr) {
                if (runErr) return res.status(500).json({ error: runErr.message });

                // Verifica geofence
                db.get(`SELECT g.*, b.rif_armadio FROM geofence g
                         JOIN box b ON b.rif_armadio = g.rif_armadio
                         WHERE b.id = ?`, [rif_box], (getErr, geofence) => {
                    if (getErr || !geofence || !geofence.attivo) {
                        return res.status(201).json({ id: this.lastID, message: 'Checkpoint salvato (nessun geofence).' });
                    }

                    const distanza = calcolaDistanza(latitudine, longitudine, geofence.latitudine, geofence.longitudine);
                    if (distanza > geofence.raggio_m) {
                        // Geofence violato — crea notifica
                        const msg = `Il box è uscito dal perimetro di sicurezza (${Math.round(distanza)}m dal centro, raggio ${geofence.raggio_m}m).`;
                        db.run(`INSERT INTO geofence_notifiche (rif_box, rif_armadio, rif_utente, latitudine, longitudine, messaggio)
                                 VALUES (?, ?, ?, ?, ?, ?)`,
                            [rif_box, geofence.rif_armadio, req.user.id, latitudine, longitudine, msg],
                            function(notifyErr) {
                                if (notifyErr) console.error('Errore creazione notifica geofence:', notifyErr.message);
                                res.status(201).json({
                                    id: this.lastID,
                                    message: 'Checkpoint salvato!',
                                    geofence_alert: { messaggio: msg }
                                });
                            }
                        );
                    } else {
                        res.status(201).json({ id: this.lastID, message: 'Checkpoint salvato. Asset nel perimetro.' });
                    }
                });
            }
        );
    });
});

// Ottieni tutte le notifiche geofence per l'utente loggato
app.get('/api/geofence/notifiche', verificaToken, (req, res) => {
    db.all(`SELECT n.*, a.nome as nome_archivio, b.nome as nome_box
             FROM geofence_notifiche n
             JOIN armadi a ON n.rif_armadio = a.id
             LEFT JOIN box b ON n.rif_box = b.id
             WHERE n.rif_utente = ?
             ORDER BY n.timestamp DESC`, [req.user.id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ notifiche: rows || [] });
    });
});

// Segna notifica come letta
app.patch('/api/geofence/notifiche/:id/letta', verificaToken, (req, res) => {
    db.run('UPDATE geofence_notifiche SET letto = 1 WHERE id = ? AND rif_utente = ?',
        [req.params.id, req.user.id], function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Notifica segnata come letta.' });
        }
    );
});

// Elimina notifica
app.delete('/api/geofence/notifiche/:id', verificaToken, (req, res) => {
    db.run('DELETE FROM geofence_notifiche WHERE id = ? AND rif_utente = ?',
        [req.params.id, req.user.id], function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Notifica eliminata.' });
        }
    );
});

// Ottieni checkpoints per tutti i box di un armadio (per la mappa geofence)
app.get('/api/geofence/:armadioId/checkpoints', verificaToken, (req, res) => {
    verificaAccessoArmadioLettura(req.params.armadioId, req.user.id, res, () => {
        const sql = `SELECT c.*, b.nome as nome_box, b.id as box_id
                      FROM checkpoint_gps c
                      JOIN box b ON c.rif_box = b.id
                      WHERE b.rif_armadio = ? AND b.data_eliminazione IS NULL
                      ORDER BY c.timestamp DESC`;
        db.all(sql, [req.params.armadioId], (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ checkpoints: rows || [] });
        });
    });
});

// ─────────────────────────────────────────────
// CATALOGO ELEMENTI PREDEFINITI
// ─────────────────────────────────────────────

app.get('/api/catalogo/categorie', verificaToken, (req, res) => {
    const sql = `
        SELECT c.*, COUNT(e.id) as num_elementi
        FROM catalogo_categorie c
        LEFT JOIN catalogo_elementi e
          ON e.categoria_slug = c.slug
         AND e.attivo = 1
        GROUP BY c.id
        ORDER BY c.ordine ASC, c.nome ASC
    `;

    db.all(sql, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ categorie: rows || [] });
    });
});

app.get('/api/catalogo/elementi', verificaToken, (req, res) => {
    const q = String(req.query.q || '').trim();
    const categoria = String(req.query.categoria || 'tutte').trim();
    const tag = String(req.query.tag || 'tutti').trim();
    const sort = String(req.query.sort || 'popolari').trim();

    const where = ['e.attivo = 1'];
    const params = [];

    if (categoria && categoria !== 'tutte') {
        where.push('e.categoria_slug = ?');
        params.push(categoria);
    }

    if (tag && tag !== 'tutti') {
        where.push('e.tags LIKE ?');
        params.push(`%${tag}%`);
    }

    if (q) {
        where.push('(e.nome LIKE ? OR e.descrizione LIKE ? OR e.tags LIKE ? OR c.nome LIKE ?)');
        const term = `%${q}%`;
        params.push(term, term, term, term);
    }

    const orderBy = {
        popolari: 'e.popolarita DESC, e.nome ASC',
        nome: 'e.nome ASC',
        categoria: 'c.ordine ASC, e.nome ASC',
        nuovi: 'e.id DESC'
    }[sort] || 'e.popolarita DESC, e.nome ASC';

    const sql = `
        SELECT e.*, c.nome as categoria_nome, c.ordine as categoria_ordine
        FROM catalogo_elementi e
        JOIN catalogo_categorie c ON c.slug = e.categoria_slug
        WHERE ${where.join(' AND ')}
        ORDER BY ${orderBy}
        LIMIT 160
    `;

    db.all(sql, params, (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        const elementi = (rows || []).map((row) => ({
            ...row,
            tags_array: row.tags ? String(row.tags).split(',').filter(Boolean) : []
        }));
        res.json({ elementi });
    });
});

app.post('/api/box/:boxId/catalogo/:catalogoId/aggiungi', verificaToken, (req, res) => {
    const boxId = Number(req.params.boxId);
    const catalogoId = Number(req.params.catalogoId);
    const quantita = Math.max(1, Number(req.body?.quantita || 1));

    if (!boxId || !catalogoId) {
        return res.status(400).json({ error: "boxId e catalogoId sono obbligatori." });
    }

    verificaAccessoBoxScrittura(boxId, req.user.id, res, () => {
        db.get(
            `SELECT * FROM catalogo_elementi WHERE id = ? AND attivo = 1`,
            [catalogoId],
            (catalogErr, catalogo) => {
                if (catalogErr) return res.status(500).json({ error: catalogErr.message });
                if (!catalogo) return res.status(404).json({ error: "Elemento catalogo non trovato." });

                db.get(
                    `SELECT id, quantita FROM oggetti WHERE rif_box = ? AND rif_catalogo = ?`,
                    [boxId, catalogoId],
                    (existingErr, esistente) => {
                        if (existingErr) return res.status(500).json({ error: existingErr.message });

                        if (esistente) {
                            const nuovaQuantita = Number(esistente.quantita || 1) + quantita;
                            db.run(
                                `UPDATE oggetti SET quantita = ? WHERE id = ?`,
                                [nuovaQuantita, esistente.id],
                                function(updateErr) {
                                    if (updateErr) return res.status(500).json({ error: updateErr.message });
                                    return res.json({
                                        id: esistente.id,
                                        quantita: nuovaQuantita,
                                        action: 'incremented',
                                        message: "Quantita aggiornata."
                                    });
                                }
                            );
                            return;
                        }

                        db.run(
                            `INSERT INTO oggetti
                              (nome, descrizione, tipo, fragile, quantita, foto, rif_box, rif_catalogo)
                             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                            [
                                catalogo.nome,
                                catalogo.descrizione,
                                catalogo.categoria_slug,
                                catalogo.fragile ? 1 : 0,
                                quantita,
                                catalogo.foto,
                                boxId,
                                catalogoId
                            ],
                            function(insertErr) {
                                if (insertErr) return res.status(500).json({ error: insertErr.message });
                                res.status(201).json({
                                    id: this.lastID,
                                    quantita,
                                    action: 'created',
                                    message: "Elemento aggiunto alla box."
                                });
                            }
                        );
                    }
                );
            }
        );
    });
});

// ─────────────────────────────────────────────
// OGGETTI
// ─────────────────────────────────────────────

app.get('/api/oggetti/:boxId', verificaToken, (req, res) => {
    verificaAccessoBoxLettura(req.params.boxId, req.user.id, res, () => {
        db.all('SELECT * FROM oggetti WHERE rif_box = ? AND data_eliminazione IS NULL', [req.params.boxId], (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ oggetti: rows });
        });
    });
});

app.post('/api/oggetti', verificaToken, (req, res) => {
    try {
        const bodySize = JSON.stringify(req.body).length;
        if (req.body && req.body.foto) {
            console.log(`POST /api/oggetti - foto length: ${req.body.foto.length}, total body size: ${bodySize}`);
        }
        const { nome, descrizione, tipo, fragile, quantita, foto, rif_box, rif_catalogo = null } = req.body || {};
        if (!nome || !rif_box) return res.status(400).json({ error: "nome e rif_box obbligatori." });
        if (foto && foto.length > 10000000) return res.status(400).json({ error: "Foto troppo grande (max 10MB)." });
        verificaAccessoBoxScrittura(rif_box, req.user.id, res, () => {
            db.run(`INSERT INTO oggetti (nome, descrizione, tipo, fragile, quantita, foto, rif_box, rif_catalogo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [nome, descrizione, tipo, fragile ? 1 : 0, quantita || 1, foto, rif_box, rif_catalogo], function(err) {
                if (err) return res.status(500).json({ error: err.message });
                inserisciLogBox(rif_box, 'oggetto_aggiunto', `Aggiunto "${nome}" (q.tà: ${quantita || 1})`, { oggetto_id: this.lastID, nome, quantita: quantita || 1 });
                res.status(201).json({ id: this.lastID });
            });
        });
    } catch (err) {
        console.error('POST /api/oggetti - Unexpected error:', err);
        res.status(500).json({ error: err.message || 'Errore interno del server.' });
    }
});

// ── FIX: era mancante la ) di chiusura del return res.status(400) ──
app.put('/api/oggetti/sposta', verificaToken, (req, res) => {
    const { oggetti_ids, box_destinazione_id } = req.body;

    if (!Array.isArray(oggetti_ids) || oggetti_ids.length === 0 || !box_destinazione_id) {
        return res.status(400).json({ error: "oggetti_ids (array) e box_destinazione_id sono obbligatori." });
    }

    verificaAccessoBoxScrittura(box_destinazione_id, req.user.id, res, () => {
        const placeholders = oggetti_ids.map(() => '?').join(', ');
        db.all(
            `SELECT id, nome, rif_box FROM oggetti WHERE id IN (${placeholders})`,
            [...oggetti_ids],
            (selErr, oggetti) => {
                if (selErr) return res.status(500).json({ error: selErr.message });
                db.run(
                    `UPDATE oggetti SET rif_box = ? WHERE id IN (${placeholders})`,
                    [box_destinazione_id, ...oggetti_ids],
                    function(err) {
                        if (err) return res.status(500).json({ error: err.message });
                        const names = (oggetti || []).map(o => o.nome).join(', ');
                        const sorgenteIds = [...new Set((oggetti || []).map(o => o.rif_box).filter(Boolean))];
                        inserisciLogBox(box_destinazione_id, 'oggetto_spostato', `Arrivati: ${names}`, { oggetti_ids, provenienti: sorgenteIds });
                        sorgenteIds.forEach(srcId => {
                            if (srcId && Number(srcId) !== Number(box_destinazione_id)) {
                                inserisciLogBox(srcId, 'oggetto_spostato_via', `Partiti: ${names}`, { oggetti_ids, destinazione: box_destinazione_id });
                            }
                        });
                        res.json({ message: `${this.changes} oggetti spostati.`, changes: this.changes });
                    }
                );
            }
        );
    });
});

app.put('/api/oggetti/:id', verificaToken, (req, res) => {
    db.get('SELECT rif_box, nome FROM oggetti WHERE id = ?', [req.params.id], (err, oggetto) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!oggetto) return res.status(404).json({ error: "Oggetto non trovato." });

        verificaAccessoBoxScrittura(oggetto.rif_box, req.user.id, res, () => {
            const { nome, descrizione, tipo, fragile, quantita, foto } = req.body;
            if (foto && foto.length > 10000000) return res.status(400).json({ error: "Foto troppo grande (max 10MB)." });
            db.run(
                `UPDATE oggetti SET nome = COALESCE(?, nome), descrizione = COALESCE(?, descrizione),
                 tipo = COALESCE(?, tipo), fragile = COALESCE(?, fragile),
                 quantita = COALESCE(?, quantita), foto = COALESCE(?, foto)
                 WHERE id = ?`,
                [nome || null, descrizione || null, tipo || null,
                 fragile !== undefined ? (fragile ? 1 : 0) : null,
                 quantita || null, foto || null, req.params.id],
                function(err) {
                    if (err) return res.status(500).json({ error: err.message });
                    inserisciLogBox(oggetto.rif_box, 'oggetto_modificato', `Modificato "${nome || oggetto.nome}"`, { oggetto_id: Number(req.params.id) });
                    res.json({ message: "Oggetto aggiornato!" });
                }
            );
        });
    });
});

// ─── Soft-delete: sposta l'oggetto nel cestino ────────────────
app.delete('/api/oggetti/:id', verificaToken, (req, res) => {
    db.get('SELECT rif_box, nome FROM oggetti WHERE id = ?', [req.params.id], (err, oggetto) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!oggetto) return res.status(404).json({ error: "Oggetto non trovato." });

        verificaAccessoBoxScrittura(oggetto.rif_box, req.user.id, res, () => {
            db.run("UPDATE oggetti SET data_eliminazione = datetime('now') WHERE id = ?", [req.params.id], function(err) {
                if (err) return res.status(500).json({ error: err.message });
                inserisciLogBox(oggetto.rif_box, 'oggetto_eliminato', `Eliminato "${oggetto.nome}"`, { oggetto_id: Number(req.params.id) });
                console.log(`[DELETE /api/oggetti/${req.params.id}] Soft-delete eseguito.`);
                res.json({ message: "Oggetto spostato nel cestino!" });
            });
        });
    });
});

// ─── Ripristina oggetto dal cestino ──────────────────────────
app.put('/api/oggetti/:id/ripristina', verificaToken, (req, res) => {
    db.get('SELECT rif_box FROM oggetti WHERE id = ?', [req.params.id], (err, oggetto) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!oggetto) return res.status(404).json({ error: "Oggetto non trovato." });

        verificaAccessoBoxScrittura(oggetto.rif_box, req.user.id, res, () => {
            db.run('UPDATE oggetti SET data_eliminazione = NULL WHERE id = ?', [req.params.id], function(err) {
                if (err) return res.status(500).json({ error: err.message });
                res.json({ message: "Oggetto ripristinato!" });
            });
        });
    });
});

// ─── Eliminazione definitiva oggetto ─────────────────────────
app.delete('/api/oggetti/:id/definitivo', verificaToken, (req, res) => {
    db.get('SELECT rif_box FROM oggetti WHERE id = ?', [req.params.id], (err, oggetto) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!oggetto) return res.status(404).json({ error: "Oggetto non trovato." });

        verificaAccessoBoxScrittura(oggetto.rif_box, req.user.id, res, () => {
            db.run('DELETE FROM oggetti WHERE id = ?', [req.params.id], function(err) {
                if (err) return res.status(500).json({ error: err.message });
                res.json({ message: "Oggetto eliminato definitivamente!" });
            });
        });
    });
});

// ─── Elenco oggetti nel cestino per utente ───────────────────
app.get('/api/oggetti/eliminate/:utenteId', verificaToken, (req, res) => {
    if (String(req.user.id) !== String(req.params.utenteId))
        return res.status(403).json({ error: "Non autorizzato." });
    const trentaGiorniFa = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    const utenteId = req.params.utenteId;
    const sql = `
        SELECT o.*, b.nome AS box_nome
        FROM oggetti o
        JOIN box b ON b.id = o.rif_box
        JOIN armadi a ON a.id = b.rif_armadio
        WHERE o.data_eliminazione IS NOT NULL
          AND a.rif_utente = ?
          AND o.data_eliminazione >= ?
        ORDER BY o.data_eliminazione DESC
    `;
    console.log(`[GET oggetti/eliminate] utenteId=${utenteId}, trentaGiorniFa=${trentaGiorniFa}`);
    db.all(sql, [utenteId, trentaGiorniFa], (err, rows) => {
        if (err) {
            console.error('[GET oggetti/eliminate] ERRORE:', err.message);
            return res.status(500).json({ error: err.message });
        }
        console.log(`[GET oggetti/eliminate] Trovati ${rows.length} oggetti.`);
        res.json({ oggetti_eliminati: rows });
    });
});

// ─────────────────────────────────────────────
// RICERCA GLOBALE
// ─────────────────────────────────────────────

app.get('/api/cerca', verificaToken, (req, res) => {
    const q = `%${req.query.q || ''}%`;
    const userId = req.user.id;

    const armadiCondivisi = `SELECT rif_armadio FROM condivisioni_armadio WHERE rif_ospite = ? AND stato = 'accettata'`;

    const sqlBox = `
        SELECT box.id, box.nome, 'box' as tipo, armadi.nome as contesto
        FROM box
        JOIN armadi ON box.rif_armadio = armadi.id
        WHERE (armadi.rif_utente = ? OR armadi.id IN (${armadiCondivisi}))
          AND box.data_eliminazione IS NULL
          AND box.nome LIKE ?
        LIMIT 20
    `;

    const sqlOggetti = `
        SELECT oggetti.id, oggetti.nome, 'oggetto' as tipo, box.nome as contesto
        FROM oggetti
        JOIN box ON oggetti.rif_box = box.id
        JOIN armadi ON box.rif_armadio = armadi.id
        WHERE (armadi.rif_utente = ? OR armadi.id IN (${armadiCondivisi}))
          AND box.data_eliminazione IS NULL
          AND oggetti.nome LIKE ?
        LIMIT 30
    `;

    db.all(sqlBox, [userId, userId, q], (errBox, boxes) => {
        if (errBox) return res.status(500).json({ error: errBox.message });
        db.all(sqlOggetti, [userId, userId, q], (errOgg, oggetti) => {
            if (errOgg) return res.status(500).json({ error: errOgg.message });
            res.json({ risultati: [...(boxes || []), ...(oggetti || [])] });
        });
    });
});

// ─────────────────────────────────────────────
// QR TOKEN
// ─────────────────────────────────────────────

app.get('/api/box/:id/qr-token', verificaToken, (req, res) => {
    const boxId = req.params.id;
    const token = jwt.sign({ box_id: boxId }, SECRET_KEY, { expiresIn: '30d' });
    res.json({ token });
});

app.get('/api/scan/:boxId', (req, res) => {
    const { token } = req.query;
    if (!token) return res.status(400).json({ error: "Token mancante." });
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        if (String(decoded.box_id) !== String(req.params.boxId))
            return res.status(403).json({ error: "Token non valido per questa box." });
        db.get('SELECT box.*, armadi.nome as nome_armadio FROM box JOIN armadi ON box.rif_armadio = armadi.id WHERE box.id = ?',
            [req.params.boxId], (err, row) => {
                if (err || !row) return res.status(404).json({ error: "Box non trovata." });
                res.json({ box: row });
            });
    } catch (e) {
        res.status(403).json({ error: "Token scaduto o non valido." });
    }
});

// ─────────────────────────────────────────────
// CONDIVISIONE ARCHIVIO
// ─────────────────────────────────────────────

// GET pending count (usato dalla login)
app.get('/api/condivisioni/pending/:utenteId', verificaToken, (req, res) => {
    db.get('SELECT COUNT(*) as count FROM condivisioni_armadio WHERE rif_ospite = ? AND stato = ?',
        [req.params.utenteId, 'in_attesa'], (err, row) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ pending: row?.count || 0 });
        });
});

// GET richieste in attesa per un utente
app.get('/api/condivisioni/in-attesa/:utenteId', verificaToken, (req, res) => {
    const sql = `
        SELECT c.id as condivisione_id, c.rif_armadio as armadio_id, a.nome as armadio_nome,
               u.username as proprietario_username, c.ruolo, c.creato_il, c.stato
        FROM condivisioni_armadio c
        JOIN armadi a ON a.id = c.rif_armadio
        JOIN utenti u ON u.id = c.rif_proprietario
        WHERE c.rif_ospite = ? AND c.stato = ?
        ORDER BY c.id DESC
    `;
    db.all(sql, [req.params.utenteId, 'in_attesa'], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ condivisioni: rows });
    });
});

// GET archivi ricevuti (con parametro utenteId — compatibilità frontend)
app.get('/api/condivisioni/ricevute/:utenteId', verificaToken, (req, res) => {
    const sql = `
        SELECT c.id as condivisione_id, c.rif_armadio as armadio_id, c.ruolo, c.stato, c.creato_il,
               a.nome as armadio_nome, u.username as proprietario_username
        FROM condivisioni_armadio c
        JOIN armadi a ON a.id = c.rif_armadio
        JOIN utenti u ON u.id = c.rif_proprietario
        WHERE c.rif_ospite = ?
        ORDER BY c.id DESC
    `;
    db.all(sql, [req.params.utenteId], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ condivisioni: rows });
    });
});

// GET ospiti di un armadio
app.get('/api/condivisioni/:armadioId', verificaToken, (req, res) => {
    const sql = `
        SELECT c.id, c.ruolo, c.stato, c.creato_il,
               u.username as ospite_username, u.email as ospite_email
        FROM condivisioni_armadio c
        JOIN utenti u ON u.id = c.rif_ospite
        WHERE c.rif_armadio = ?
        ORDER BY c.id DESC
    `;
    db.all(sql, [req.params.armadioId], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ condivisioni: rows });
    });
});

// PUT aggiorna ruolo
app.put('/api/condivisioni/:id/ruolo', verificaToken, (req, res) => {
    const { ruolo } = req.body;
    if (!['viewer', 'editor'].includes(ruolo)) return res.status(400).json({ error: "ruolo non valido." });
    db.get('SELECT * FROM condivisioni_armadio WHERE id = ? AND rif_proprietario = ?',
        [req.params.id, req.user.id], (err, row) => {
            if (err || !row) return res.status(404).json({ error: "Condivisione non trovata." });
            db.run('UPDATE condivisioni_armadio SET ruolo = ? WHERE id = ?', [ruolo, req.params.id], function(runErr) {
                if (runErr) return res.status(500).json({ error: runErr.message });
                res.json({ message: "Ruolo aggiornato!" });
            });
        });
});

app.post('/api/condivisioni', verificaToken, (req, res) => {
    const { rif_armadio, email_ospite, ruolo = 'viewer' } = req.body;
    if (!rif_armadio || !email_ospite) return res.status(400).json({ error: "rif_armadio e email_ospite obbligatori." });
    if (!['viewer', 'editor'].includes(ruolo)) return res.status(400).json({ error: "ruolo non valido." });

    db.get('SELECT id FROM utenti WHERE email = ?', [email_ospite], (err, ospite) => {
        if (err || !ospite) return res.status(404).json({ error: "Utente ospite non trovato." });
        if (String(ospite.id) === String(req.user.id)) return res.status(400).json({ error: "Non puoi condividere con te stesso." });

        db.get('SELECT id FROM armadi WHERE id = ? AND rif_utente = ?', [rif_armadio, req.user.id], (errA, armadio) => {
            if (errA || !armadio) return res.status(403).json({ error: "Armadio non trovato o non sei il proprietario." });

            db.get('SELECT id FROM condivisioni_armadio WHERE rif_armadio = ? AND rif_ospite = ?',
                [rif_armadio, ospite.id], (errC, existing) => {
                    if (existing) return res.status(409).json({ error: "Condivisione già esistente per questo utente." });

                    db.run('INSERT INTO condivisioni_armadio (rif_armadio, rif_proprietario, rif_ospite, ruolo, stato) VALUES (?, ?, ?, ?, ?)',
                        [rif_armadio, req.user.id, ospite.id, ruolo, 'in_attesa'], function(runErr) {
                            if (runErr) return res.status(500).json({ error: runErr.message });
                            res.status(201).json({ id: this.lastID, message: "Invito inviato!" });
                        });
                });
        });
    });
});

app.get('/api/condivisioni/ricevute', verificaToken, (req, res) => {
    const sql = `
        SELECT c.*, a.nome as nome_armadio, u.username as nome_proprietario
        FROM condivisioni_armadio c
        JOIN armadi a ON a.id = c.rif_armadio
        JOIN utenti u ON u.id = c.rif_proprietario
        WHERE c.rif_ospite = ?
        ORDER BY c.id DESC
    `;
    db.all(sql, [req.user.id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ condivisioni: rows });
    });
});

app.get('/api/condivisioni/inviate', verificaToken, (req, res) => {
    const sql = `
        SELECT c.*, a.nome as nome_armadio, u.username as nome_ospite
        FROM condivisioni_armadio c
        JOIN armadi a ON a.id = c.rif_armadio
        JOIN utenti u ON u.id = c.rif_ospite
        WHERE c.rif_proprietario = ?
        ORDER BY c.id DESC
    `;
    db.all(sql, [req.user.id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ condivisioni: rows });
    });
});

app.put('/api/condivisioni/:id/accetta', verificaToken, (req, res) => {
    db.get('SELECT * FROM condivisioni_armadio WHERE id = ? AND rif_ospite = ?',
        [req.params.id, req.user.id], (err, row) => {
            if (err || !row) return res.status(404).json({ error: "Condivisione non trovata." });
            db.run('UPDATE condivisioni_armadio SET stato = ? WHERE id = ?', ['accettata', req.params.id], function(runErr) {
                if (runErr) return res.status(500).json({ error: runErr.message });
                res.json({ message: "Condivisione accettata!" });
            });
        });
});

app.put('/api/condivisioni/:id/rifiuta', verificaToken, (req, res) => {
    db.get('SELECT * FROM condivisioni_armadio WHERE id = ? AND rif_ospite = ?',
        [req.params.id, req.user.id], (err, row) => {
            if (err || !row) return res.status(404).json({ error: "Condivisione non trovata." });
            db.run('UPDATE condivisioni_armadio SET stato = ? WHERE id = ?', ['rifiutata', req.params.id], function(runErr) {
                if (runErr) return res.status(500).json({ error: runErr.message });
                res.json({ message: "Condivisione rifiutata." });
            });
        });
});

app.delete('/api/condivisioni/:id', verificaToken, (req, res) => {
    db.run('DELETE FROM condivisioni_armadio WHERE id = ? AND (rif_proprietario = ? OR rif_ospite = ?)',
        [req.params.id, req.user.id, req.user.id], function(err) {
            if (err) return res.status(500).json({ error: err.message });
            if (this.changes === 0) return res.status(404).json({ error: "Condivisione non trovata." });
            res.json({ message: "Condivisione rimossa." });
        });
});

// ─────────────────────────────────────────────
// ADMIN
// ─────────────────────────────────────────────

app.get('/api/admin/utenti', verificaAdmin, (req, res) => {
    db.all(`
        SELECT 
            u.*,
            COALESCE(armadi_count.armadi, 0) as num_armadi,
            COALESCE(box_count.box, 0) as num_box,
            COALESCE(oggetti_count.oggetti, 0) as num_oggetti
        FROM utenti u
        LEFT JOIN (
            SELECT rif_utente, COUNT(*) as armadi 
            FROM armadi 
            GROUP BY rif_utente
        ) armadi_count ON u.id = armadi_count.rif_utente
        LEFT JOIN (
            SELECT a.rif_utente, COUNT(*) as box 
            FROM box b
            JOIN armadi a ON b.rif_armadio = a.id
            WHERE b.data_eliminazione IS NULL
            GROUP BY a.rif_utente
        ) box_count ON u.id = box_count.rif_utente
        LEFT JOIN (
            SELECT a.rif_utente, COUNT(*) as oggetti 
            FROM oggetti o
            JOIN box b ON o.rif_box = b.id
            JOIN armadi a ON b.rif_armadio = a.id
            WHERE o.data_eliminazione IS NULL
            GROUP BY a.rif_utente
        ) oggetti_count ON u.id = oggetti_count.rif_utente
        ORDER BY u.id ASC
    `, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ utenti: rows });
    });
});
});
});

app.get('/api/admin/stats', verificaAdmin, (req, res) => {
    db.get('SELECT COUNT(*) as tot_utenti FROM utenti', [], (err1, u) => {
        db.get('SELECT COUNT(*) as tot_box FROM box WHERE data_eliminazione IS NULL', [], (err2, b) => {
            db.get('SELECT COUNT(*) as tot_oggetti FROM oggetti', [], (err3, o) => {
                res.json({
                    tot_utenti: u?.tot_utenti || 0,
                    tot_box: b?.tot_box || 0,
                    tot_oggetti: o?.tot_oggetti || 0
                });
            });
        });
    });
});

// ─────────────────────────────────────────────
// GLOBAL ERROR HANDLER (cattura errori da body-parser e route handlers)
// ─────────────────────────────────────────────
app.use((err, req, res, next) => {
    console.error('GLOBAL ERROR:', err);
    const status = err.status || 500;
    res.status(status).json({ error: err.message || 'Errore interno del server.' });
});

// ─────────────────────────────────────────────
// AVVIO SERVER
// ─────────────────────────────────────────────

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server PeekBox attivo su http://${HOST}:${PORT}`);
});
