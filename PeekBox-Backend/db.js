const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const path = require("path");

const dbPath = path.resolve(__dirname, 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error("❌ Errore connessione database:", err.message);
  else console.log("✅ Connesso al database SQLite (PeekBox-Backend)");
});

db.serialize(() => {
  db.run("PRAGMA foreign_keys = ON;");

  // 1. Tabella UTENTI — con tipo_profilo ('personal' | 'business') e is_admin
  db.run(`CREATE TABLE IF NOT EXISTS utenti (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    tipo_profilo TEXT NOT NULL DEFAULT 'personal',
    is_admin INTEGER NOT NULL DEFAULT 0
  )`);

  db.run(`ALTER TABLE utenti ADD COLUMN tipo_profilo TEXT NOT NULL DEFAULT 'personal'`, (err) => {
    if (err && !err.message.includes('duplicate column')) {
      console.error("Migrazione tipo_profilo:", err.message);
    }
  });

  db.run(`ALTER TABLE utenti ADD COLUMN is_admin INTEGER NOT NULL DEFAULT 0`, (err) => {
    if (err && !err.message.includes('duplicate column')) {
      console.error("Migrazione is_admin:", err.message);
    }
  });

  // 2. Tabella ARMADI
  db.run(`CREATE TABLE IF NOT EXISTS armadi (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    rif_utente INTEGER,
    FOREIGN KEY(rif_utente) REFERENCES utenti(id) ON DELETE CASCADE
  )`);

  // 3. Tabella BOX — con moving_mode flag e descrizione
  db.run(`CREATE TABLE IF NOT EXISTS box (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    descrizione TEXT,
    rif_armadio INTEGER,
    is_preferito INTEGER DEFAULT 0,
    data_eliminazione TEXT DEFAULT NULL,
    moving_mode INTEGER DEFAULT 0,
    FOREIGN KEY(rif_armadio) REFERENCES armadi(id) ON DELETE CASCADE
  )`);

  // Migrazioni box
  db.run(`ALTER TABLE box ADD COLUMN data_eliminazione TEXT DEFAULT NULL`, (err) => {
    if (err && !err.message.includes('duplicate column')) console.error("Migrazione data_eliminazione:", err.message);
  });
  db.run(`ALTER TABLE box ADD COLUMN moving_mode INTEGER DEFAULT 0`, (err) => {
    if (err && !err.message.includes('duplicate column')) console.error("Migrazione moving_mode:", err.message);
  });
  db.run(`ALTER TABLE box ADD COLUMN descrizione TEXT`, (err) => {
    if (err && !err.message.includes('duplicate column')) console.error("Migrazione descrizione box:", err.message);
  });

  // 4. Tabella OGGETTI
  db.run(`CREATE TABLE IF NOT EXISTS oggetti (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    descrizione TEXT,
    tipo TEXT,
    fragile INTEGER DEFAULT 0,
    quantita INTEGER DEFAULT 1,
    foto TEXT,
    rif_catalogo INTEGER,
    rif_box INTEGER,
    FOREIGN KEY(rif_box) REFERENCES box(id) ON DELETE CASCADE
  )`);

  db.run(`ALTER TABLE oggetti ADD COLUMN rif_catalogo INTEGER`, (err) => {
    if (err && !err.message.includes('duplicate column')) {
      console.error("Migrazione rif_catalogo:", err.message);
    }
  });

  db.run(`ALTER TABLE oggetti ADD COLUMN data_eliminazione TEXT DEFAULT NULL`, (err) => {
    if (err && !err.message.includes('duplicate column')) {
      console.error("Migrazione data_eliminazione oggetti:", err.message);
    }
  });

  // 5. Tabella TIPOLOGIE
  db.run(`CREATE TABLE IF NOT EXISTS tipologie (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    rif_utente INTEGER,
    FOREIGN KEY(rif_utente) REFERENCES utenti(id) ON DELETE CASCADE
  )`);

  // Catalogo elementi predefiniti
  db.run(`CREATE TABLE IF NOT EXISTS catalogo_categorie (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    nome TEXT NOT NULL,
    descrizione TEXT,
    ordine INTEGER NOT NULL DEFAULT 0
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS catalogo_elementi (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    descrizione TEXT,
    categoria_slug TEXT NOT NULL,
    tags TEXT,
    foto TEXT,
    popolarita INTEGER NOT NULL DEFAULT 0,
    fragile INTEGER NOT NULL DEFAULT 0,
    attivo INTEGER NOT NULL DEFAULT 1,
    UNIQUE(nome, categoria_slug),
    FOREIGN KEY(categoria_slug) REFERENCES catalogo_categorie(slug) ON DELETE CASCADE
  )`);

  db.run(`CREATE INDEX IF NOT EXISTS idx_catalogo_elementi_categoria ON catalogo_elementi(categoria_slug)`);
  db.run(`CREATE INDEX IF NOT EXISTS idx_catalogo_elementi_popolarita ON catalogo_elementi(popolarita DESC)`);

  // 6. Tabella CHECKPOINT GPS
  db.run(`CREATE TABLE IF NOT EXISTS checkpoint_gps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rif_box INTEGER NOT NULL,
    rif_utente INTEGER NOT NULL,
    latitudine REAL NOT NULL,
    longitudine REAL NOT NULL,
    accuratezza REAL,
    label TEXT,
    timestamp TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY(rif_box) REFERENCES box(id) ON DELETE CASCADE,
    FOREIGN KEY(rif_utente) REFERENCES utenti(id) ON DELETE CASCADE
  )`);

  // 7. CONDIVISIONI ARCHIVIO
  db.run(`CREATE TABLE IF NOT EXISTS condivisioni_armadio (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rif_armadio INTEGER NOT NULL,
    rif_proprietario INTEGER NOT NULL,
    rif_ospite INTEGER NOT NULL,
    ruolo TEXT NOT NULL DEFAULT 'viewer',
    creato_il TEXT NOT NULL DEFAULT (datetime('now')),
    UNIQUE(rif_armadio, rif_ospite),
    FOREIGN KEY(rif_armadio) REFERENCES armadi(id) ON DELETE CASCADE,
    FOREIGN KEY(rif_proprietario) REFERENCES utenti(id) ON DELETE CASCADE,
    FOREIGN KEY(rif_ospite) REFERENCES utenti(id) ON DELETE CASCADE
  )`);

  db.run(`ALTER TABLE condivisioni_armadio ADD COLUMN stato TEXT NOT NULL DEFAULT 'in_attesa'`, (err) => {
    if (err && !err.message.includes('duplicate column')) {
      console.error('Migrazione stato condivisioni:', err.message);
    } else if (!err) {
      db.run(`UPDATE condivisioni_armadio SET stato = 'accettata' WHERE stato = 'in_attesa'`);
    }
  });

  // 8. GEOFENCE
  db.run(`CREATE TABLE IF NOT EXISTS geofence (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rif_armadio INTEGER NOT NULL UNIQUE,
    latitudine REAL NOT NULL,
    longitudine REAL NOT NULL,
    raggio_m REAL NOT NULL DEFAULT 100,
    attivo INTEGER NOT NULL DEFAULT 1,
    creato_il TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY(rif_armadio) REFERENCES armadi(id) ON DELETE CASCADE
  )`);

  // 9. SMART QR
  db.run(`CREATE TABLE IF NOT EXISTS qr_token (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    rif_box   INTEGER NOT NULL UNIQUE,
    token     TEXT NOT NULL UNIQUE,
    creato_il TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY(rif_box) REFERENCES box(id) ON DELETE CASCADE
  )`);

  // 10. SEGNALAZIONI GUEST
  db.run(`CREATE TABLE IF NOT EXISTS segnalazioni_guest (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    rif_box      INTEGER NOT NULL,
    latitudine   REAL,
    longitudine  REAL,
    accuratezza  REAL,
    nota         TEXT,
    ip_hash      TEXT,
    timestamp    TEXT NOT NULL DEFAULT (datetime('now')),
    notificato   INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY(rif_box) REFERENCES box(id) ON DELETE CASCADE
  )`);

  // 11. NOTIFICHE GEOFENCE
  db.run(`CREATE TABLE IF NOT EXISTS geofence_notifiche (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rif_box INTEGER NOT NULL,
    rif_armadio INTEGER NOT NULL,
    rif_utente INTEGER NOT NULL,
    latitudine REAL,
    longitudine REAL,
    messaggio TEXT NOT NULL,
    letto INTEGER NOT NULL DEFAULT 0,
    timestamp TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY(rif_box) REFERENCES box(id) ON DELETE CASCADE,
    FOREIGN KEY(rif_armadio) REFERENCES armadi(id) ON DELETE CASCADE,
    FOREIGN KEY(rif_utente) REFERENCES utenti(id) ON DELETE CASCADE
  )`);

  console.log("✅ Schema tabelle SQLite pronto (Svuotato dagli elementi predefiniti).");
  popolaCatalogoDefault();
  popolaDatiEsempio();
});

function popolaCatalogoDefault() {
  console.log("Catalogo elementi lasciato vuoto come richiesto.");
}

async function popolaDatiEsempio() {
  try {
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash('password123', saltRounds);

    db.run(
      `INSERT OR IGNORE INTO utenti (id, username, email, password, tipo_profilo) VALUES (?, ?, ?, ?, ?)`,
      [1, 'Emanuele', 'ema@example.com', hashPassword, 'personal'],
      function(err) {
        if (err) return console.error(err.message);
        if (this.changes > 0) console.log("👤 Utente di prova creato (ema@example.com)");
      }
    );
  } catch (err) {
    console.error("Errore hashing password esempio:", err);
  }
}

module.exports = db;
