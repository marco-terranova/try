import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonIcon, IonSpinner, IonInput, IonToggle, IonTextarea,
  AlertController, ToastController
} from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  heartOutline,          // cuore: outline di default, diventa “attivo” via CSS
  layersOutline,         // icona armadio nella sub-header
  paperPlaneOutline,     // moving mode
  warningOutline,        // fragile badge
  cubeOutline,
  addCircleOutline,      // plus pulito
  qrCodeOutline,
  locationOutline,
  trashOutline,          // cestino filiforme (usato sia tile che item)
  trashBinOutline,
  createOutline,
  checkmarkCircleOutline,
  camera,
  closeOutline,
  barChartOutline,
  informationCircleOutline,
  cloudDownloadOutline
} from 'ionicons/icons';
import { DatabaseService } from '../services/database';
import { NavigationHistoryService } from '../services/navigation-history';

@Component({
  selector: 'app-dettaglio-box',
  templateUrl: './dettaglio-box.page.html',
  styleUrls: ['./dettaglio-box.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonContent, IonIcon, IonSpinner, IonInput, IonToggle, IonTextarea
  ]
})
export class DettaglioBoxPage implements OnInit {

  readonly MAX_OGGETTI = 20;

  boxId!: number;
  box: any = null;
  oggetti: any[] = [];
  isLoading = true;

  modaleAperta: string | null = null;

  oggettoInModifica: any = null;
  nomeOggetto     = '';
  tipoOggetto     = '';
  quantitaOggetto = 1;
  fragileOggetto  = false;
  descrizioneOggetto = '';
  fotoOggetto: string | null = null;
  isSaving = false;

  qrDataUrl: string | null = null;
  isLoadingQr = false;

  constructor(
    private route:     ActivatedRoute,
    private router:    Router,
    private dbService: DatabaseService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private navHistory: NavigationHistoryService
  ) {
    addIcons({
      arrowBackOutline, heartOutline, layersOutline,
      paperPlaneOutline, warningOutline,
      cubeOutline, addCircleOutline, qrCodeOutline, locationOutline,
      trashOutline, trashBinOutline, createOutline, checkmarkCircleOutline,
      camera, closeOutline, barChartOutline,
      informationCircleOutline, cloudDownloadOutline
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const parsed = id ? Number(id) : NaN;
    if (!parsed || isNaN(parsed) || parsed <= 0) {
      this.toast('ID box non valido.', 'danger');
      this.navHistory.navTo('/home');
      return;
    }
    this.boxId = parsed;
    this.caricaDati();
  }

  // ─── Caricamento ────────────────────────────────────────────────────

  caricaDati() {
    this.isLoading = true;
    this.dbService.getBoxSingola(this.boxId).subscribe({
      next: (res: any) => { this.box = res.box; this.caricaOggetti(); },
      error: () => { this.isLoading = false; this.toast('Impossibile caricare il box.', 'danger'); }
    });
  }

  caricaOggetti() {
    this.dbService.getOggettiPerBox(this.boxId).subscribe({
      next: (res: any) => { this.oggetti = res.oggetti || []; this.isLoading = false; },
      error: () => { this.oggetti = []; this.isLoading = false; }
    });
  }

  // ─── Computed ─────────────────────────────────────────────────────

  get saturazionePercent(): number {
    return Math.min(100, Math.round((this.oggetti.length / this.MAX_OGGETTI) * 100));
  }

  get numFragili(): number {
    return this.oggetti.filter(o => o.fragile == 1).length;
  }

  /**
   * Restituisce true se la categoria va colorata in verde neon.
   * Riconosce: vestiti, abbigliamento, moda, clothes, clothing, fashion.
   */
  isVestiti(tipo: string): boolean {
    if (!tipo) return false;
    const t = tipo.toLowerCase();
    return ['vestiti', 'vestito', 'abbigliamento', 'moda', 'clothes', 'clothing', 'fashion']
      .some(k => t.includes(k));
  }

  // ─── Preferito ────────────────────────────────────────────────────

  togglePreferito() {
    if (!this.box) return;
    const newVal = !this.box.is_preferito;
    this.dbService.updatePreferito(this.boxId, newVal).subscribe({
      next: () => { this.box.is_preferito = newVal; this.toast(newVal ? '❤️ Aggiunto ai preferiti' : 'Rimosso dai preferiti', 'primary'); },
      error: () => this.toast('Errore aggiornamento preferito.', 'danger')
    });
  }

  // ─── Modali ─────────────────────────────────────────────────────

  apriModale(tipo: string) {
    this.modaleAperta = tipo;
    if (tipo === 'aggiungi') { this.resetFormOggetto(); }
    if (tipo === 'qr')       { this.caricaQr(); }
  }

  chiudiModale() {
    this.modaleAperta = null;
    this.oggettoInModifica = null;
    this.resetFormOggetto();
  }

  // ─── CRUD oggetti ──────────────────────────────────────────────────

  resetFormOggetto() {
    this.nomeOggetto       = '';
    this.tipoOggetto       = '';
    this.quantitaOggetto   = 1;
    this.fragileOggetto    = false;
    this.descrizioneOggetto = '';
    this.fotoOggetto       = null;
    this.oggettoInModifica = null;
  }

  apriModificaOggetto(o: any) {
    this.oggettoInModifica  = o;
    this.nomeOggetto        = o.nome || '';
    this.tipoOggetto        = o.tipo || '';
    this.quantitaOggetto    = o.quantita || 1;
    this.fragileOggetto     = o.fragile === 1;
    this.descrizioneOggetto = o.descrizione || '';
    this.fotoOggetto        = o.foto || null;
    this.modaleAperta       = 'modifica';
  }

  salvaOggetto() {
    if (!this.nomeOggetto.trim()) { this.toast('Il nome è obbligatorio.', 'warning'); return; }
    this.isSaving = true;
    const dati: any = {
      nome:        this.nomeOggetto.trim(),
      tipo:        this.tipoOggetto.trim() || null,
      quantita:    Number(this.quantitaOggetto) || 1,
      fragile:     this.fragileOggetto ? 1 : 0,
      descrizione: this.descrizioneOggetto.trim() || null,
      foto:        this.fotoOggetto || null,
      rif_box:     this.boxId
    };
    if (this.modaleAperta === 'modifica' && this.oggettoInModifica) {
      this.dbService.aggiornaOggetto(this.oggettoInModifica.id, dati).subscribe({
        next: () => { this.isSaving = false; this.caricaOggetti(); this.chiudiModale(); this.toast('✅ Oggetto aggiornato!', 'success'); },
        error: () => { this.isSaving = false; this.toast('Errore aggiornamento.', 'danger'); }
      });
    } else {
      this.dbService.creaOggetto(dati).subscribe({
        next: () => { this.isSaving = false; this.caricaOggetti(); this.chiudiModale(); this.toast('✅ Oggetto aggiunto!', 'success'); },
        error: () => { this.isSaving = false; this.toast('Errore inserimento.', 'danger'); }
      });
    }
  }

  async eliminaOggetto(o: any) {
    const alert = await this.alertCtrl.create({
      cssClass: 'peekbox-alert',
      header: 'Elimina oggetto',
      message: `Eliminare "${o.nome}"? Operazione irreversibile.`,
      buttons: [
        { text: 'Annulla', role: 'cancel' },
        { text: 'Elimina', role: 'destructive', handler: () => {
          this.dbService.eliminaOggetto(o.id).subscribe({
            next: () => { this.caricaOggetti(); this.toast('Oggetto eliminato.', 'medium'); },
            error: () => this.toast('Errore durante l\'eliminazione.', 'danger')
          });
        }}
      ]
    });
    await alert.present();
  }

  async svuotaBox() {
    if (this.oggetti.length === 0) { this.toast('Il box è già vuoto.', 'medium'); return; }
    const alert = await this.alertCtrl.create({
      cssClass: 'peekbox-alert',
      header: '⚠️ Svuota Box',
      message: `Stai per eliminare tutti i ${this.oggetti.length} oggetti. Operazione irreversibile.`,
      buttons: [
        { text: 'Annulla', role: 'cancel' },
        { text: 'Svuota tutto', role: 'destructive', handler: () => {
          const reqs = this.oggetti.map(o => this.dbService.eliminaOggetto(o.id));
          let done = 0;
          reqs.forEach(r => r.subscribe({ next: () => { done++; if (done === reqs.length) { this.caricaOggetti(); this.toast('Box svuotato.', 'success'); } } }));
        }}
      ]
    });
    await alert.present();
  }

  // ─── Foto stub ──────────────────────────────────────────────────
  scattaFoto() { this.toast('Integra PhotoService per la fotografia.', 'primary'); }

  // ─── QR Code ───────────────────────────────────────────────────

  caricaQr() {
    this.isLoadingQr = true;
    this.qrDataUrl = null;
    this.dbService.getQrToken(this.boxId).subscribe({
      next: (res: any) => {
        const url = this.dbService.buildQrUrl(this.boxId, res.token);
        this.qrDataUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(url)}`;
        this.isLoadingQr = false;
      },
      error: () => { this.isLoadingQr = false; this.toast('Impossibile generare il QR.', 'danger'); }
    });
  }

  stampaQr() {
    if (!this.qrDataUrl) return;
    const win = window.open('');
    if (win) {
      win.document.write(`<html><body style="display:flex;align-items:center;justify-content:center;height:100vh;margin:0"><img src="${this.qrDataUrl}" style="max-width:400px"/></body></html>`);
      win.document.close();
      win.print();
    }
  }

  // ─── Geofence ───────────────────────────────────────────────────

  apriGeofence() {
    if (!this.box?.rif_armadio) { this.toast('ID armadio non disponibile.', 'warning'); return; }
    this.router.navigate(['/geofence-armadio', this.box.rif_armadio], {
      queryParams: { nome: this.box.nome_armadio || '' }
    });
  }

  goBack() { this.navHistory.navTo('/home'); }

  private async toast(message: string, color = 'primary') {
    const t = await this.toastCtrl.create({ message, duration: 2400, color, position: 'bottom' });
    await t.present();
  }
}
