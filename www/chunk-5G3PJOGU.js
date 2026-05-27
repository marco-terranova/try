import {
  HttpClient,
  HttpHeaders,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-2AAOITSV.js";

// src/environments/environment.ts
var environment = {
  production: false,
  backendPort: 3e3
};

// src/app/services/database.ts
var _DatabaseService = class _DatabaseService {
  get apiUrl() {
    return `${window.location.protocol}//${window.location.hostname}:${environment.backendPort}/api`;
  }
  constructor(http) {
    this.http = http;
  }
  getAuthHeaders() {
    const token = localStorage.getItem("token");
    return new HttpHeaders({
      "Authorization": token ? `Bearer ${token}` : ""
    });
  }
  // ─── AUTENTICAZIONE ───────────────────────────────────────
  registraUtente(username, email, pass, tipo_profilo = "personal") {
    return this.http.post(`${this.apiUrl}/registrazione`, {
      username,
      email,
      password: pass,
      tipo_profilo
    });
  }
  loginUtente(email, pass) {
    return this.http.post(`${this.apiUrl}/login`, { email, password: pass });
  }
  aggiornaTipoProfilo(utenteId, tipo_profilo) {
    return this.http.put(`${this.apiUrl}/utenti/${utenteId}/profilo`, { tipo_profilo }, { headers: this.getAuthHeaders() });
  }
  aggiornaProfiloUtente(utenteId, dati) {
    return this.http.put(`${this.apiUrl}/utenti/${utenteId}`, dati, { headers: this.getAuthHeaders() });
  }
  // ─── ARMADI ───────────────────────────────────────────────
  getArmadi(utenteId) {
    return this.http.get(`${this.apiUrl}/armadi/${utenteId}`, { headers: this.getAuthHeaders() });
  }
  creaArmadio(nome, utenteId) {
    return this.http.post(`${this.apiUrl}/armadi`, { nome, rif_utente: utenteId }, { headers: this.getAuthHeaders() });
  }
  eliminaArmadio(id) {
    return this.http.delete(`${this.apiUrl}/armadi/${id}`, { headers: this.getAuthHeaders() });
  }
  // ─── BOX ──────────────────────────────────────────────────
  getBoxSingola(id) {
    return this.http.get(`${this.apiUrl}/box/singola/${id}`, { headers: this.getAuthHeaders() });
  }
  getBox(utenteId) {
    return this.http.get(`${this.apiUrl}/box/${utenteId}`, { headers: this.getAuthHeaders() });
  }
  creaBox(nome, rif_armadio, is_preferito, moving_mode = false, descrizione = "", dimensione = "piccola") {
    return this.http.post(`${this.apiUrl}/box`, { nome, descrizione: descrizione || null, rif_armadio, is_preferito, moving_mode, dimensione }, { headers: this.getAuthHeaders() });
  }
  updatePreferito(id, is_preferito) {
    return this.http.put(`${this.apiUrl}/box/preferito/${id}`, { is_preferito }, { headers: this.getAuthHeaders() });
  }
  updateMovingMode(id, moving_mode) {
    return this.http.put(`${this.apiUrl}/box/moving-mode/${id}`, { moving_mode }, { headers: this.getAuthHeaders() });
  }
  eliminaBox(id) {
    return this.http.delete(`${this.apiUrl}/box/${id}`, { headers: this.getAuthHeaders() });
  }
  eliminaBoxDefinitivo(id) {
    return this.http.delete(`${this.apiUrl}/box/${id}/definitivo`, { headers: this.getAuthHeaders() });
  }
  ripristinaBox(id) {
    return this.http.put(`${this.apiUrl}/box/${id}/ripristina`, {}, { headers: this.getAuthHeaders() });
  }
  getBoxEliminate(utenteId) {
    return this.http.get(`${this.apiUrl}/box/eliminate/${utenteId}`, { headers: this.getAuthHeaders() });
  }
  // ─── CHECKPOINT GPS ───────────────────────────────────────
  salvaCheckpoint(rif_box, latitudine, longitudine, accuratezza, label) {
    return this.http.post(`${this.apiUrl}/checkpoint`, {
      rif_box,
      latitudine,
      longitudine,
      accuratezza,
      label
    }, { headers: this.getAuthHeaders() });
  }
  getCheckpoints(boxId) {
    return this.http.get(`${this.apiUrl}/checkpoint/${boxId}`, { headers: this.getAuthHeaders() });
  }
  getUltimoCheckpoint(boxId) {
    return this.http.get(`${this.apiUrl}/checkpoint/${boxId}/ultimo`, { headers: this.getAuthHeaders() });
  }
  getTuttiCheckpoint(utenteId) {
    return this.http.get(`${this.apiUrl}/checkpoint/tutti/${utenteId}`, { headers: this.getAuthHeaders() });
  }
  eliminaCheckpoints(boxId) {
    return this.http.delete(`${this.apiUrl}/checkpoint/${boxId}`, { headers: this.getAuthHeaders() });
  }
  // ─── SEGNALAZIONI GUEST ───────────────────────────────────
  getSegnalazioni(boxId) {
    return this.http.get(`${this.apiUrl}/box/${boxId}/segnalazioni`, { headers: this.getAuthHeaders() });
  }
  getQrToken(boxId) {
    return this.http.get(`${this.apiUrl}/box/${boxId}/qr-token`, { headers: this.getAuthHeaders() });
  }
  buildQrUrl(boxId, token) {
    const base = `${window.location.protocol}//${window.location.hostname}:${environment.backendPort}`;
    return `${base}/scan?box=${boxId}&t=${token}`;
  }
  // ─── DASHBOARD BUSINESS ───────────────────────────────────
  getDashboardBusiness(utenteId) {
    return this.http.get(`${this.apiUrl}/dashboard/business/${utenteId}`, { headers: this.getAuthHeaders() });
  }
  // ─── OGGETTI ──────────────────────────────────────────────
  getOggettiPerBox(boxId) {
    return this.http.get(`${this.apiUrl}/oggetti/${boxId}`, { headers: this.getAuthHeaders() });
  }
  creaOggetto(dati) {
    return this.http.post(`${this.apiUrl}/oggetti`, dati, { headers: this.getAuthHeaders() });
  }
  aggiornaOggetto(id, dati) {
    return this.http.put(`${this.apiUrl}/oggetti/${id}`, dati, { headers: this.getAuthHeaders() });
  }
  eliminaOggetto(id) {
    return this.http.delete(`${this.apiUrl}/oggetti/${id}`, { headers: this.getAuthHeaders() });
  }
  /** Recupera gli oggetti nel cestino per un utente */
  getOggettiEliminati(utenteId) {
    return this.http.get(`${this.apiUrl}/oggetti/eliminate/${utenteId}`, { headers: this.getAuthHeaders() });
  }
  /** Ripristina un oggetto dal cestino */
  ripristinaOggetto(id) {
    return this.http.put(`${this.apiUrl}/oggetti/${id}/ripristina`, {}, { headers: this.getAuthHeaders() });
  }
  /** Elimina definitivamente un oggetto dal cestino */
  eliminaOggettoDefinitivo(id) {
    return this.http.delete(`${this.apiUrl}/oggetti/${id}/definitivo`, { headers: this.getAuthHeaders() });
  }
  // ─── CATALOGO ELEMENTI ────────────────────────────────────
  getCatalogoCategorie() {
    return this.http.get(`${this.apiUrl}/catalogo/categorie`, { headers: this.getAuthHeaders() });
  }
  getCatalogoElementi(filtri = {}) {
    const params = new URLSearchParams();
    if (filtri.q)
      params.set("q", filtri.q);
    if (filtri.categoria)
      params.set("categoria", filtri.categoria);
    if (filtri.tag)
      params.set("tag", filtri.tag);
    if (filtri.sort)
      params.set("sort", filtri.sort);
    const query = params.toString();
    const url = query ? `${this.apiUrl}/catalogo/elementi?${query}` : `${this.apiUrl}/catalogo/elementi`;
    return this.http.get(url, { headers: this.getAuthHeaders() });
  }
  aggiungiElementoCatalogo(boxId, catalogoId, quantita = 1) {
    return this.http.post(`${this.apiUrl}/box/${boxId}/catalogo/${catalogoId}/aggiungi`, { quantita }, { headers: this.getAuthHeaders() });
  }
  // ─── TRANSIT ZONE ─────────────────────────────────────────
  spostaOggetti(oggettiIds, boxDestinazioneId) {
    const idsPuliti = oggettiIds.map(Number).filter((id) => !isNaN(id) && id > 0);
    const destId = Number(boxDestinazioneId);
    if (idsPuliti.length === 0)
      throw new Error("ID oggetti non validi");
    if (!destId || isNaN(destId) || destId <= 0)
      throw new Error("ID box destinazione non valido");
    return this.http.put(`${this.apiUrl}/oggetti/sposta`, { oggetti_ids: idsPuliti, box_destinazione_id: destId }, { headers: this.getAuthHeaders() });
  }
  spostaOggetto(idOgg, boxDestinazioneId) {
    const id = Number(idOgg);
    const dest = Number(boxDestinazioneId);
    if (!id || isNaN(id) || id <= 0)
      throw new Error("ID oggetto non valido");
    if (!dest || isNaN(dest) || dest <= 0)
      throw new Error("ID box destinazione non valido");
    return this.http.put(`${this.apiUrl}/oggetti/sposta`, { oggetti_ids: [id], box_destinazione_id: dest }, { headers: this.getAuthHeaders() });
  }
  // ─── TIPOLOGIE ────────────────────────────────────────────
  getTipologie(utenteId) {
    return this.http.get(`${this.apiUrl}/tipologie/${utenteId}`, { headers: this.getAuthHeaders() });
  }
  creaTipologia(nome, utenteId) {
    return this.http.post(`${this.apiUrl}/tipologie`, { nome, rif_utente: utenteId }, { headers: this.getAuthHeaders() });
  }
  eliminaTipologia(id) {
    return this.http.delete(`${this.apiUrl}/tipologie/${id}`, { headers: this.getAuthHeaders() });
  }
  // ─── RICERCA ──────────────────────────────────────────────
  cercaOggetti(utenteId, termine) {
    return this.http.get(`${this.apiUrl}/cerca?q=${encodeURIComponent(termine)}`, { headers: this.getAuthHeaders() });
  }
  // ─── CONDIVISIONI ARCHIVIO (RBAC) ─────────────────────────
  condividiArchivio(armadio_id, email_ospite, ruolo) {
    return this.http.post(`${this.apiUrl}/condivisioni`, { rif_armadio: armadio_id, email_ospite, ruolo }, { headers: this.getAuthHeaders() });
  }
  getCondivisioniArchivio(armadioId) {
    return this.http.get(`${this.apiUrl}/condivisioni/${armadioId}`, { headers: this.getAuthHeaders() });
  }
  getArchividCondivisiConMe(utenteId) {
    return this.http.get(`${this.apiUrl}/condivisioni/ricevute/${utenteId}`, { headers: this.getAuthHeaders() });
  }
  revocaCondivisione(condivisioneId) {
    return this.http.delete(`${this.apiUrl}/condivisioni/${condivisioneId}`, { headers: this.getAuthHeaders() });
  }
  aggiornaRuoloCondivisione(condivisioneId, ruolo) {
    return this.http.put(`${this.apiUrl}/condivisioni/${condivisioneId}/ruolo`, { ruolo }, { headers: this.getAuthHeaders() });
  }
  getBoxArchivioCondiviso(armadioId) {
    return this.http.get(`${this.apiUrl}/condivisioni/armadio/${armadioId}/box`, { headers: this.getAuthHeaders() });
  }
  getOggettiBoxCondivisa(boxId) {
    return this.http.get(`${this.apiUrl}/condivisioni/box/${boxId}/oggetti`, { headers: this.getAuthHeaders() });
  }
  getCondivisioniPending(utenteId) {
    return this.http.get(`${this.apiUrl}/condivisioni/pending/${utenteId}`, { headers: this.getAuthHeaders() });
  }
  getCondivisioniInAttesa(utenteId) {
    return this.http.get(`${this.apiUrl}/condivisioni/in-attesa/${utenteId}`, { headers: this.getAuthHeaders() });
  }
  accettaCondivisione(condivisioneId) {
    return this.http.put(`${this.apiUrl}/condivisioni/${condivisioneId}/accetta`, {}, { headers: this.getAuthHeaders() });
  }
  rifiutaCondivisione(condivisioneId) {
    return this.http.put(`${this.apiUrl}/condivisioni/${condivisioneId}/rifiuta`, {}, { headers: this.getAuthHeaders() });
  }
  // ─── GEOFENCING ───────────────────────────────────────────
  impostaGeofence(armadio_id, latitudine, longitudine, raggio_m = 100, attivo = true) {
    return this.http.post(`${this.apiUrl}/geofence`, { armadio_id, latitudine, longitudine, raggio_m, attivo }, { headers: this.getAuthHeaders() });
  }
  getGeofence(armadioId) {
    return this.http.get(`${this.apiUrl}/geofence/${armadioId}`, { headers: this.getAuthHeaders() });
  }
  eliminaGeofence(armadioId) {
    return this.http.delete(`${this.apiUrl}/geofence/${armadioId}`, { headers: this.getAuthHeaders() });
  }
  verificaGeofence(armadio_id, latitudine, longitudine) {
    return this.http.post(`${this.apiUrl}/geofence/verifica`, { armadio_id, latitudine, longitudine }, { headers: this.getAuthHeaders() });
  }
  salvaCheckpointSicuro(rif_box, latitudine, longitudine, accuratezza, label) {
    return this.http.post(`${this.apiUrl}/checkpoint/sicuro`, { rif_box, latitudine, longitudine, accuratezza, label }, { headers: this.getAuthHeaders() });
  }
  getNotificheGeofence() {
    return this.http.get(`${this.apiUrl}/geofence/notifiche`, { headers: this.getAuthHeaders() });
  }
  segnaNotificaComeLetta(id) {
    return this.http.patch(`${this.apiUrl}/geofence/notifiche/${id}/letta`, {}, { headers: this.getAuthHeaders() });
  }
  eliminaNotificaGeofence(id) {
    return this.http.delete(`${this.apiUrl}/geofence/notifiche/${id}`, { headers: this.getAuthHeaders() });
  }
  getGeofenceCheckpoints(armadioId) {
    return this.http.get(`${this.apiUrl}/geofence/${armadioId}/checkpoints`, { headers: this.getAuthHeaders() });
  }
  // ─── EXPORT ───────────────────────────────────────────────
  getExportJson(utenteId) {
    return this.http.get(`${this.apiUrl}/export/json/${utenteId}`, {
      headers: this.getAuthHeaders(),
      responseType: "blob"
    });
  }
  getExportCsv(utenteId) {
    return this.http.get(`${this.apiUrl}/export/csv/${utenteId}`, {
      headers: this.getAuthHeaders(),
      responseType: "blob"
    });
  }
  getEtichetteBox(boxId) {
    return this.http.get(`${this.apiUrl}/export/etichette/${boxId}`, {
      headers: this.getAuthHeaders()
    });
  }
  // ─── ADMIN ────────────────────────────────────────────────
  adminGetUtenti() {
    return this.http.get(`${this.apiUrl}/admin/utenti`, { headers: this.getAuthHeaders() });
  }
  adminEliminaUtente(id) {
    return this.http.delete(`${this.apiUrl}/admin/utenti/${id}`, { headers: this.getAuthHeaders() });
  }
  // ─── SEGNALAZIONI UTENTI ─────────────────────────────────
  inviaSegnalazione(dati) {
    return this.http.post(`${this.apiUrl}/segnalazioni`, dati, { headers: this.getAuthHeaders() });
  }
  adminGetSegnalazioni() {
    return this.http.get(`${this.apiUrl}/admin/segnalazioni`, { headers: this.getAuthHeaders() });
  }
  adminAggiornaStatoSegnalazione(id, stato) {
    return this.http.patch(`${this.apiUrl}/admin/segnalazioni/${id}/stato`, { stato }, { headers: this.getAuthHeaders() });
  }
  adminEliminaSegnalazione(id) {
    return this.http.delete(`${this.apiUrl}/admin/segnalazioni/${id}`, { headers: this.getAuthHeaders() });
  }
  getMieSegnalazioni() {
    return this.http.get(`${this.apiUrl}/segnalazioni/mie`, { headers: this.getAuthHeaders() });
  }
};
_DatabaseService.\u0275fac = function DatabaseService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DatabaseService)(\u0275\u0275inject(HttpClient));
};
_DatabaseService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DatabaseService, factory: _DatabaseService.\u0275fac, providedIn: "root" });
var DatabaseService = _DatabaseService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatabaseService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  environment,
  DatabaseService
};
//# sourceMappingURL=chunk-5G3PJOGU.js.map
