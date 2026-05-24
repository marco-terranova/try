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
app.use(express.json());
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

function verificaAccessoBoxScrittura(boxId, userId, res, cb) {
    const sql = `
        SELECT box.id, box.rif_armadio, armadi.rif_utente
        FROM box
        JOIN armadi ON box.rif_armadio = armadi.id
        WHERE box.id = ? AND box.data_eliminazione IS NULL
    `;

    db.get(sql, [boxId], (err, box) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!box) return res.status(404).json({ error: "Box non trovata." });

        if (String(box.rif_utente) === String(userId)) {
            return cb(box);
        }

        db.get(
            `SELECT ruolo FROM condivisioni_armadio
             WHERE rif_armadio = ?
               AND rif_ospite = ?
               AND stato = 'accettata'
               AND ruolo = 'editor'`,
            [box.rif_armadio, userId],
            (shareErr, share) => {
                if (shareErr) return res.status(500).json({ error: shareErr.message });
                if (!share) return res.status(403).json({ error: "Serve il ruolo editor per modificare questa box." });
                cb(box);
            }
        );
    });
}

app.get('/', (req, res) => {
    res.send('🚀 Backend PeekBox v3 attivo — GPS + Profili + Ripristina Box!');
});

// ─────────────────────────────────────────────
// UTENTI
// ─────────────────────────────────────────────

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
    const sql = `
        SELECT box.*, armadi.nome as nome_armadio, armadi.rif_utente
        FROM box
        JOIN armadi ON box.rif_armadio = armadi.id
        WHERE box.id = ?
    `;
    db.get(sql, [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: "Box non trovata." });
        if (String(row.rif_utente) !== String(req.user.id))
            return res.status(403).json({ error: "Non autorizzato." });
        res.json({ box: row });
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
    db.run(
        'INSERT INTO box (nome, descrizione, rif_armadio, is_preferito, moving_mode) VALUES (?, ?, ?, ?, ?)',
        [nome, descrizione, rif_armadio, is_preferito ? 1 : 0, moving_mode ? 1 : 0],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ id: this.lastID });
        }
    );
});

app.put('/api/box/preferito/:id', verificaToken, (req, res) => {
    const { is_preferito } = req.body;
    db.run('UPDATE box SET is_preferito = ? WHERE id = ?', [is_preferito ? 1 : 0, req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Stato preferito aggiornato!" });
    });
});

app.put('/api/box/moving-mode/:id', verificaToken, (req, res) => {
    const { moving_mode } = req.body;
    const sqlCheck = `
        SELECT box.id FROM box
        JOIN armadi ON box.rif_armadio = armadi.id
        WHERE box.id = ? AND armadi.rif_utente = ?
    `;
    db.get(sqlCheck, [req.params.id, req.user.id], (err, row) => {
        if (err || !row) return res.status(403).json({ error: "Non autorizzato." });
        db.run('UPDATE box SET moving_mode = ? WHERE id = ?', [moving_mode ? 1 : 0, req.params.id], function(runErr) {
            if (runErr) return res.status(500).json({ error: runErr.message });
            res.json({ message: `Moving Mode ${moving_mode ? 'attivato' : 'disattivato'}!`, moving_mode: moving_mode ? 1 : 0 });
        });
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
    const now = new Date().toISOString();
    db.run('UPDATE box SET data_eliminazione = ? WHERE id = ?', [now, req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Box spostata nel cestino!" });
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

// ─────────────────────────────────────────────
// CHECKPOINT GPS
// ─────────────────────────────────────────────

app.post('/api/checkpoint', verificaToken, (req, res) => {
    const { rif_box, latitudine, longitudine, accuratezza, label } = req.body;
    if (!rif_box || latitudine == null || longitudine == null)
        return res.status(400).json({ error: "rif_box, latitudine e longitudine sono obbligatori." });

    const sqlCheck = `
        SELECT box.id, box.moving_mode FROM box
        JOIN armadi ON box.rif_armadio = armadi.id
        WHERE box.id = ? AND armadi.rif_utente = ?
    `;
    db.get(sqlCheck, [rif_box, req.user.id], (err, boxRow) => {
        if (err || !boxRow) return res.status(403).json({ error: "Box non trovata o non autorizzato." });

        const sql = `INSERT INTO checkpoint_gps (rif_box, rif_utente, latitudine, longitudine, accuratezza, label, timestamp)
                     VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`;
        db.run(sql, [rif_box, req.user.id, latitudine, longitudine, accuratezza || null, label || null], function(runErr) {
            if (runErr) return res.status(500).json({ error: runErr.message });
            res.status(201).json({ id: this.lastID, message: "Checkpoint salvato!" });
        });
    });
});

app.get('/api/checkpoint/:boxId', verificaToken, (req, res) => {
    const sqlCheck = `
        SELECT box.id FROM box
        JOIN armadi ON box.rif_armadio = armadi.id
        WHERE box.id = ? AND armadi.rif_utente = ?
    `;
    db.get(sqlCheck, [req.params.boxId, req.user.id], (err, row) => {
        if (err || !row) return res.status(403).json({ error: "Non autorizzato." });
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
    const sqlCheck = `
        SELECT box.id FROM box
        JOIN armadi ON box.rif_armadio = armadi.id
        WHERE box.id = ? AND armadi.rif_utente = ?
    `;
    db.get(sqlCheck, [req.params.boxId, req.user.id], (err, row) => {
        if (err || !row) return res.status(403).json({ error: "Non autorizzato." });
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
    const sqlCheck = `
        SELECT box.id FROM box
        JOIN armadi ON box.rif_armadio = armadi.id
        WHERE box.id = ? AND armadi.rif_utente = ?
    `;
    db.get(sqlCheck, [req.params.boxId, req.user.id], (err, row) => {
        if (err || !row) return res.status(403).json({ error: "Non autorizzato." });
        db.run('DELETE FROM checkpoint_gps WHERE rif_box = ?', [req.params.boxId], function(runErr) {
            if (runErr) return res.status(500).json({ error: runErr.message });
            res.json({ message: `Rimossi ${this.changes} checkpoint.` });
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
    db.all('SELECT * FROM oggetti WHERE rif_box = ?', [req.params.boxId], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ oggetti: rows });
    });
});

app.post('/api/oggetti', verificaToken, (req, res) => {
    const { nome, descrizione, tipo, fragile, quantita, foto, rif_box, rif_catalogo = null } = req.body;
    db.run(`INSERT INTO oggetti (nome, descrizione, tipo, fragile, quantita, foto, rif_box, rif_catalogo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [nome, descrizione, tipo, fragile ? 1 : 0, quantita || 1, foto, rif_box, rif_catalogo], function(err) {
        if (err) return res.status(500).json({ error: "Errore salvataggio." });
        res.status(201).json({ id: this.lastID });
    });
});

// ── FIX: era mancante la ) di chiusura del return res.status(400) ──
app.put('/api/oggetti/sposta', verificaToken, (req, res) => {
    const { oggetti_ids, box_destinazione_id } = req.body;

    if (!Array.isArray(oggetti_ids) || oggetti_ids.length === 0 || !box_destinazione_id) {
        return res.status(400).json({ error: "oggetti_ids (array) e box_destinazione_id sono obbligatori." });
    }

    verificaAccessoBoxScrittura(box_destinazione_id, req.user.id, res, () => {
        const placeholders = oggetti_ids.map(() => '?').join(', ');
        db.run(
            `UPDATE oggetti SET rif_box = ? WHERE id IN (${placeholders})`,
            [box_destinazione_id, ...oggetti_ids],
            function(err) {
                if (err) return res.status(500).json({ error: err.message });
                res.json({ message: `${this.changes} oggetti spostati.`, changes: this.changes });
            }
        );
    });
});

app.put('/api/oggetti/:id', verificaToken, (req, res) => {
    const { nome, descrizione, tipo, fragile, quantita, foto } = req.body;
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
            res.json({ message: "Oggetto aggiornato!" });
        }
    );
});

app.delete('/api/oggetti/:id', verificaToken, (req, res) => {
    db.run('DELETE FROM oggetti WHERE id = ?', [req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Oggetto eliminato!" });
    });
});

// ─────────────────────────────────────────────
// RICERCA GLOBALE
// ─────────────────────────────────────────────

app.get('/api/cerca', verificaToken, (req, res) => {
    const q = `%${req.query.q || ''}%`;
    const userId = req.user.id;

    const sqlBox = `
        SELECT box.id, box.nome, 'box' as tipo, armadi.nome as contesto
        FROM box
        JOIN armadi ON box.rif_armadio = armadi.id
        WHERE armadi.rif_utente = ?
          AND box.data_eliminazione IS NULL
          AND box.nome LIKE ?
        LIMIT 20
    `;

    const sqlOggetti = `
        SELECT oggetti.id, oggetti.nome, 'oggetto' as tipo, box.nome as contesto
        FROM oggetti
        JOIN box ON oggetti.rif_box = box.id
        JOIN armadi ON box.rif_armadio = armadi.id
        WHERE armadi.rif_utente = ?
          AND box.data_eliminazione IS NULL
          AND oggetti.nome LIKE ?
        LIMIT 30
    `;

    db.all(sqlBox, [userId, q], (errBox, boxes) => {
        if (errBox) return res.status(500).json({ error: errBox.message });
        db.all(sqlOggetti, [userId, q], (errOgg, oggetti) => {
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
    db.all('SELECT id, username, email, tipo_profilo, is_admin FROM utenti ORDER BY id ASC', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ utenti: rows });
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
// AVVIO SERVER
// ─────────────────────────────────────────────

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server PeekBox attivo su http://${HOST}:${PORT}`);
});
