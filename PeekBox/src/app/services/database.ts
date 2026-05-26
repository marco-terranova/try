import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {
  LoginResponse, PendingResponse,
  BoxListResponse, BoxEliminateResponse,
  Oggetto, ArchivioCondivisiResponse,
  CondivisioniInAttesaResponse, OggettiBoxCondivisaResponse
} from '../../types/models';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private get apiUrl(): string {
    return `${window.location.protocol}//${window.location.hostname}:${environment.backendPort}/api`;
  }

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }

  // ─── AUTENTICAZIONE ───────────────────────────────────────

  registraUtente(username: string, email: string, pass: string, tipo_profilo: 'personal' | 'business' = 'personal') {
    return this.http.post(`${this.apiUrl}/registrazione`, {
      username, email, password: pass, tipo_profilo
    });
  }

  loginUtente(email: string, pass: string) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, password: pass });
  }

  aggiornaTipoProfilo(utenteId: string, tipo_profilo: 'personal' | 'business') {
    return this.http.put(`${this.apiUrl}/utenti/${utenteId}/profilo`,
      { tipo_profilo }, { headers: this.getAuthHeaders() });
  }

  aggiornaProfiloUtente(utenteId: string, dati: { nome?: string; cognome?: string; email?: string }) {
    return this.http.put(
      `${this.apiUrl}/utenti/${utenteId}`,
      dati,
      { headers: this.getAuthHeaders() }
    );
  }

  // ─── ARMADI ───────────────────────────────────────────────

  getArmadi(utenteId: string) {
    return this.http.get(`${this.apiUrl}/armadi/${utenteId}`, { headers: this.getAuthHeaders() });
  }

  creaArmadio(nome: string, utenteId: string) {
    return this.http.post(`${this.apiUrl}/armadi`, { nome, rif_utente: utenteId }, { headers: this.getAuthHeaders() });
  }

  eliminaArmadio(id: number) {
    return this.http.delete(`${this.apiUrl}/armadi/${id}`, { headers: this.getAuthHeaders() });
  }

  // ─── BOX ──────────────────────────────────────────────────

  getBoxSingola(id: number) {
    return this.http.get(`${this.apiUrl}/box/singola/${id}`, { headers: this.getAuthHeaders() });
  }

  getBox(utenteId: string) {
    return this.http.get<BoxListResponse>(`${this.apiUrl}/box/${utenteId}`, { headers: this.getAuthHeaders() });
  }

  creaBox(nome: string, rif_armadio: string, is_preferito: boolean, moving_mode: boolean = false, descrizione: string = '') {
    return this.http.post(`${this.apiUrl}/box`, { nome, descrizione: descrizione || null, rif_armadio, is_preferito, moving_mode }, { headers: this.getAuthHeaders() });
  }

  updatePreferito(id: number, is_preferito: boolean) {
    return this.http.put(`${this.apiUrl}/box/preferito/${id}`, { is_preferito }, { headers: this.getAuthHeaders() });
  }

  updateMovingMode(id: number, moving_mode: boolean) {
    return this.http.put(`${this.apiUrl}/box/moving-mode/${id}`, { moving_mode }, { headers: this.getAuthHeaders() });
  }

  eliminaBox(id: number) {
    return this.http.delete(`${this.apiUrl}/box/${id}`, { headers: this.getAuthHeaders() });
  }

  eliminaBoxDefinitivo(id: number) {
    return this.http.delete(`${this.apiUrl}/box/${id}/definitivo`, { headers: this.getAuthHeaders() });
  }

  ripristinaBox(id: number) {
    return this.http.put(`${this.apiUrl}/box/${id}/ripristina`, {}, { headers: this.getAuthHeaders() });
  }

  getBoxEliminate(utenteId: string) {
    return this.http.get<BoxEliminateResponse>(`${this.apiUrl}/box/eliminate/${utenteId}`, { headers: this.getAuthHeaders() });
  }

  // ─── CHECKPOINT GPS ───────────────────────────────────────

  salvaCheckpoint(rif_box: number, latitudine: number, longitudine: number, accuratezza?: number, label?: string) {
    return this.http.post(`${this.apiUrl}/checkpoint`, {
      rif_box, latitudine, longitudine, accuratezza, label
    }, { headers: this.getAuthHeaders() });
  }

  getCheckpoints(boxId: number) {
    return this.http.get(`${this.apiUrl}/checkpoint/${boxId}`, { headers: this.getAuthHeaders() });
  }

  getUltimoCheckpoint(boxId: number) {
    return this.http.get(`${this.apiUrl}/checkpoint/${boxId}/ultimo`, { headers: this.getAuthHeaders() });
  }

  getTuttiCheckpoint(utenteId: string) {
    return this.http.get(`${this.apiUrl}/checkpoint/tutti/${utenteId}`, { headers: this.getAuthHeaders() });
  }

  eliminaCheckpoints(boxId: number) {
    return this.http.delete(`${this.apiUrl}/checkpoint/${boxId}`, { headers: this.getAuthHeaders() });
  }

  // ─── SEGNALAZIONI GUEST ───────────────────────────────────

  getSegnalazioni(boxId: number) {
    return this.http.get(`${this.apiUrl}/box/${boxId}/segnalazioni`, { headers: this.getAuthHeaders() });
  }

  getQrToken(boxId: number) {
    return this.http.get(`${this.apiUrl}/box/${boxId}/qr-token`, { headers: this.getAuthHeaders() });
  }

  buildQrUrl(boxId: number, token: string): string {
    const base = `${window.location.protocol}//${window.location.hostname}:${environment.backendPort}`;
    return `${base}/scan?box=${boxId}&t=${token}`;
  }

  // ─── DASHBOARD BUSINESS ───────────────────────────────────

  getDashboardBusiness(utenteId: string) {
    return this.http.get(`${this.apiUrl}/dashboard/business/${utenteId}`, { headers: this.getAuthHeaders() });
  }

  // ─── OGGETTI ──────────────────────────────────────────────

  getOggettiPerBox(boxId: number) {
    return this.http.get(`${this.apiUrl}/oggetti/${boxId}`, { headers: this.getAuthHeaders() });
  }

  creaOggetto(dati: Oggetto) {
    return this.http.post(`${this.apiUrl}/oggetti`, dati, { headers: this.getAuthHeaders() });
  }

  aggiornaOggetto(id: number, dati: Partial<Oggetto>) {
    return this.http.put(`${this.apiUrl}/oggetti/${id}`, dati, { headers: this.getAuthHeaders() });
  }

  eliminaOggetto(id: number) {
    return this.http.delete(`${this.apiUrl}/oggetti/${id}`, { headers: this.getAuthHeaders() });
  }

  /** Recupera gli oggetti nel cestino per un utente */
  getOggettiEliminati(utenteId: string) {
    return this.http.get(`${this.apiUrl}/oggetti/eliminate/${utenteId}`, { headers: this.getAuthHeaders() });
  }

  /** Ripristina un oggetto dal cestino */
  ripristinaOggetto(id: number) {
    return this.http.put(`${this.apiUrl}/oggetti/${id}/ripristina`, {}, { headers: this.getAuthHeaders() });
  }

  /** Elimina definitivamente un oggetto dal cestino */
  eliminaOggettoDefinitivo(id: number) {
    return this.http.delete(`${this.apiUrl}/oggetti/${id}/definitivo`, { headers: this.getAuthHeaders() });
  }

  // ─── CATALOGO ELEMENTI ────────────────────────────────────

  getCatalogoCategorie() {
    return this.http.get(`${this.apiUrl}/catalogo/categorie`, { headers: this.getAuthHeaders() });
  }

  getCatalogoElementi(filtri: { q?: string; categoria?: string; tag?: string; sort?: string } = {}) {
    const params = new URLSearchParams();
    if (filtri.q) params.set('q', filtri.q);
    if (filtri.categoria) params.set('categoria', filtri.categoria);
    if (filtri.tag) params.set('tag', filtri.tag);
    if (filtri.sort) params.set('sort', filtri.sort);
    const query = params.toString();
    const url = query ? `${this.apiUrl}/catalogo/elementi?${query}` : `${this.apiUrl}/catalogo/elementi`;
    return this.http.get(url, { headers: this.getAuthHeaders() });
  }

  aggiungiElementoCatalogo(boxId: number, catalogoId: number, quantita: number = 1) {
    return this.http.post(
      `${this.apiUrl}/box/${boxId}/catalogo/${catalogoId}/aggiungi`,
      { quantita },
      { headers: this.getAuthHeaders() }
    );
  }

  // ─── TRANSIT ZONE ─────────────────────────────────────────

  spostaOggetti(oggettiIds: number[], boxDestinazioneId: number) {
    const idsPuliti = oggettiIds.map(Number).filter(id => !isNaN(id) && id > 0);
    const destId    = Number(boxDestinazioneId);
    if (idsPuliti.length === 0) throw new Error('ID oggetti non validi');
    if (!destId || isNaN(destId) || destId <= 0) throw new Error('ID box destinazione non valido');
    return this.http.put(
      `${this.apiUrl}/oggetti/sposta`,
      { oggetti_ids: idsPuliti, box_destinazione_id: destId },
      { headers: this.getAuthHeaders() }
    );
  }

  spostaOggetto(idOgg: number, boxDestinazioneId: number) {
    const id   = Number(idOgg);
    const dest = Number(boxDestinazioneId);
    if (!id || isNaN(id) || id <= 0) throw new Error('ID oggetto non valido');
    if (!dest || isNaN(dest) || dest <= 0) throw new Error('ID box destinazione non valido');
    return this.http.put(
      `${this.apiUrl}/oggetti/sposta`,
      { oggetti_ids: [id], box_destinazione_id: dest },
      { headers: this.getAuthHeaders() }
    );
  }

  // ─── TIPOLOGIE ────────────────────────────────────────────

  getTipologie(utenteId: string) {
    return this.http.get(`${this.apiUrl}/tipologie/${utenteId}`, { headers: this.getAuthHeaders() });
  }

  creaTipologia(nome: string, utenteId: string) {
    return this.http.post(`${this.apiUrl}/tipologie`, { nome, rif_utente: utenteId }, { headers: this.getAuthHeaders() });
  }

  eliminaTipologia(id: number) {
    return this.http.delete(`${this.apiUrl}/tipologie/${id}`, { headers: this.getAuthHeaders() });
  }

  // ─── RICERCA ──────────────────────────────────────────────

  cercaOggetti(utenteId: string, termine: string) {
    return this.http.get(
      `${this.apiUrl}/cerca/${utenteId}?q=${encodeURIComponent(termine)}`,
      { headers: this.getAuthHeaders() }
    );
  }

  // ─── CONDIVISIONI ARCHIVIO (RBAC) ─────────────────────────

  condividiArchivio(armadio_id: number, email_ospite: string, ruolo: 'viewer' | 'editor') {
    return this.http.post(`${this.apiUrl}/condivisioni`,
      { rif_armadio: armadio_id, email_ospite, ruolo }, { headers: this.getAuthHeaders() });
  }

  getCondivisioniArchivio(armadioId: number) {
    return this.http.get(`${this.apiUrl}/condivisioni/${armadioId}`,
      { headers: this.getAuthHeaders() });
  }

  getArchividCondivisiConMe(utenteId: string) {
    return this.http.get<ArchivioCondivisiResponse>(
      `${this.apiUrl}/condivisioni/ricevute/${utenteId}`,
      { headers: this.getAuthHeaders() });
  }

  revocaCondivisione(condivisioneId: number) {
    return this.http.delete(`${this.apiUrl}/condivisioni/${condivisioneId}`,
      { headers: this.getAuthHeaders() });
  }

  aggiornaRuoloCondivisione(condivisioneId: number, ruolo: 'viewer' | 'editor') {
    return this.http.put(`${this.apiUrl}/condivisioni/${condivisioneId}/ruolo`,
      { ruolo }, { headers: this.getAuthHeaders() });
  }

  getBoxArchivioCondiviso(armadioId: number) {
    return this.http.get(`${this.apiUrl}/condivisioni/armadio/${armadioId}/box`,
      { headers: this.getAuthHeaders() });
  }

  getOggettiBoxCondivisa(boxId: number) {
    return this.http.get<OggettiBoxCondivisaResponse>(
      `${this.apiUrl}/condivisioni/box/${boxId}/oggetti`,
      { headers: this.getAuthHeaders() });
  }

  getCondivisioniPending(utenteId: string) {
    return this.http.get<PendingResponse>(
      `${this.apiUrl}/condivisioni/pending/${utenteId}`,
      { headers: this.getAuthHeaders() });
  }

  getCondivisioniInAttesa(utenteId: string) {
    return this.http.get<CondivisioniInAttesaResponse>(
      `${this.apiUrl}/condivisioni/in-attesa/${utenteId}`,
      { headers: this.getAuthHeaders() });
  }

  accettaCondivisione(condivisioneId: number) {
    return this.http.put(
      `${this.apiUrl}/condivisioni/${condivisioneId}/accetta`,
      {}, { headers: this.getAuthHeaders() });
  }

  rifiutaCondivisione(condivisioneId: number) {
    return this.http.put(
      `${this.apiUrl}/condivisioni/${condivisioneId}/rifiuta`,
      {}, { headers: this.getAuthHeaders() });
  }

  // ─── GEOFENCING ───────────────────────────────────────────

  impostaGeofence(armadio_id: number, latitudine: number, longitudine: number, raggio_m: number = 100, attivo: boolean = true) {
    return this.http.post(`${this.apiUrl}/geofence`,
      { armadio_id, latitudine, longitudine, raggio_m, attivo },
      { headers: this.getAuthHeaders() });
  }

  getGeofence(armadioId: number) {
    return this.http.get(`${this.apiUrl}/geofence/${armadioId}`,
      { headers: this.getAuthHeaders() });
  }

  eliminaGeofence(armadioId: number) {
    return this.http.delete(`${this.apiUrl}/geofence/${armadioId}`,
      { headers: this.getAuthHeaders() });
  }

  verificaGeofence(armadio_id: number, latitudine: number, longitudine: number) {
    return this.http.post(`${this.apiUrl}/geofence/verifica`,
      { armadio_id, latitudine, longitudine },
      { headers: this.getAuthHeaders() });
  }

  salvaCheckpointSicuro(rif_box: number, latitudine: number, longitudine: number, accuratezza?: number, label?: string) {
    return this.http.post(`${this.apiUrl}/checkpoint/sicuro`,
      { rif_box, latitudine, longitudine, accuratezza, label },
      { headers: this.getAuthHeaders() });
  }

  getNotificheGeofence() {
    return this.http.get(`${this.apiUrl}/geofence/notifiche`,
      { headers: this.getAuthHeaders() });
  }

  segnaNotificaComeLetta(id: number) {
    return this.http.patch(`${this.apiUrl}/geofence/notifiche/${id}/letta`,
      {}, { headers: this.getAuthHeaders() });
  }

  eliminaNotificaGeofence(id: number) {
    return this.http.delete(`${this.apiUrl}/geofence/notifiche/${id}`,
      { headers: this.getAuthHeaders() });
  }

  getGeofenceCheckpoints(armadioId: number) {
    return this.http.get(`${this.apiUrl}/geofence/${armadioId}/checkpoints`,
      { headers: this.getAuthHeaders() });
  }

  // ─── EXPORT ───────────────────────────────────────────────

  getExportJson(utenteId: string) {
    return this.http.get(`${this.apiUrl}/export/json/${utenteId}`, {
      headers: this.getAuthHeaders(), responseType: 'blob'
    });
  }

  getExportCsv(utenteId: string) {
    return this.http.get(`${this.apiUrl}/export/csv/${utenteId}`, {
      headers: this.getAuthHeaders(), responseType: 'blob'
    });
  }

  getEtichetteBox(boxId: number) {
    return this.http.get(`${this.apiUrl}/export/etichette/${boxId}`, {
      headers: this.getAuthHeaders()
    });
  }

  // ─── ADMIN ────────────────────────────────────────────────
  adminGetUtenti() {
    return this.http.get(`${this.apiUrl}/admin/utenti`, { headers: this.getAuthHeaders() });
  }

  adminEliminaUtente(id: number) {
    return this.http.delete(`${this.apiUrl}/admin/utenti/${id}`, { headers: this.getAuthHeaders() });
  }

  // ─── SEGNALAZIONI UTENTI ─────────────────────────────────
  inviaSegnalazione(dati: any) {
    return this.http.post(`${this.apiUrl}/segnalazioni`, dati, { headers: this.getAuthHeaders() });
  }

  adminGetSegnalazioni() {
    return this.http.get(`${this.apiUrl}/admin/segnalazioni`, { headers: this.getAuthHeaders() });
  }

  adminAggiornaStatoSegnalazione(id: number, stato: string) {
    return this.http.patch(`${this.apiUrl}/admin/segnalazioni/${id}/stato`, { stato }, { headers: this.getAuthHeaders() });
  }

  adminEliminaSegnalazione(id: number) {
    return this.http.delete(`${this.apiUrl}/admin/segnalazioni/${id}`, { headers: this.getAuthHeaders() });
  }

  getMieSegnalazioni() {
    return this.http.get(`${this.apiUrl}/segnalazioni/mie`, { headers: this.getAuthHeaders() });
  }
}
