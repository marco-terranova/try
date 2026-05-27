// ─── AUTENTICAZIONE ───────────────────────────────────────

export interface UtenteLogin {
  id: number;
  username: string;
  email: string;
  tipo_profilo: 'personal' | 'business';
  is_admin: number | boolean;
}

export interface LoginResponse {
  token: string;
  user: UtenteLogin;
}

export interface PendingResponse {
  pending: number;
}

// ─── BOX ──────────────────────────────────────────────────

export interface Box {
  id: number;
  nome: string;
  rif_armadio: number | string;
  is_preferito: boolean;
  moving_mode: boolean;
  num_oggetti?: number;
  data_eliminazione?: string;
  dimensione?: 'piccola' | 'media' | 'grande' | 'pallet';
}

export const DIMENSIONI_BOX: Record<string, number> = {
  piccola: 10,
  media: 20,
  grande: 30,
  pallet: 100,
};

export interface BoxListResponse {
  box: Box[];
}

export interface BoxEliminateResponse {
  box_eliminate: Box[];
}

// ─── OGGETTI ──────────────────────────────────────────────

export interface Oggetto {
  id?: number;
  nome: string;
  descrizione?: string;
  quantita?: number;
  categoria?: string;
  tag?: string;
  rif_box?: number;
  foto_url?: string;
}

// ─── CONDIVISIONI ─────────────────────────────────────────

export interface ArchivioCondiviso {
  id: number;
  nome: string;
  ruolo: 'viewer' | 'editor';
}

export interface ArchivioCondivisiResponse {
  archivi_condivisi: ArchivioCondiviso[];
}

export interface RichiestaCondivisione {
  id: number;
  armadio_id: number;
  nome_archivio: string;
  nome_proprietario: string;
  ruolo: 'viewer' | 'editor';
  data_invio: string;
}

export interface CondivisioniInAttesaResponse {
  richieste: RichiestaCondivisione[];
}

export interface OggettiBoxCondivisaResponse {
  oggetti: Oggetto[];
  ruolo_corrente: string;
}
