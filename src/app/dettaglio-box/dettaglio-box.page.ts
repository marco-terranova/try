import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonContent, IonIcon, IonSpinner, IonInput, IonToggle, IonTextarea,
  AlertController, ToastController, ActionSheetController
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  starOutline,
  star,
  layersOutline,
  paperPlaneOutline,
  warningOutline,
  cubeOutline,
  addCircleOutline,
  qrCodeOutline,
  locationOutline,
  trashOutline,
  trashBinOutline,
  createOutline,
  checkmarkCircleOutline,
  camera,
  imageOutline,
  closeOutline,
  barChartOutline,
  informationCircleOutline,
  cloudDownloadOutline,
  shareOutline,
  home,
  shareSocialOutline,
  add,
  chevronForwardOutline,
  pricetagOutline,
  flashOutline,
  pencilOutline,
  person,
  search,
  timeOutline
} from 'ionicons/icons';
import { DatabaseService } from '../services/database';
import { NavigationHistoryService } from '../services/navigation-history';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-dettaglio-box',
  templateUrl: './dettaglio-box.page.html',
  styleUrls: ['./dettaglio-box.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, RouterModule,
    IonHeader, IonToolbar, IonContent, IonIcon, IonSpinner, IonInput, IonToggle, IonTextarea
  ]
})
export class DettaglioBoxPage implements OnInit, AfterViewInit {

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

  isLoadingQr = false;
  qrGenerato = false;

  nomeUtente = '';
  utenteId: string | null = null;

  constructor(
    private route:     ActivatedRoute,
    private router:    Router,
    private dbService: DatabaseService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private navHistory: NavigationHistoryService
  ) {
    addIcons({
      'arrow-back-outline': arrowBackOutline,
      'star-outline': starOutline,
      'star': star,
      'layers-outline': layersOutline,
      'paper-plane-outline': paperPlaneOutline,
      'warning-outline': warningOutline,
      'cube-outline': cubeOutline,
      'add-circle-outline': addCircleOutline,
      'qr-code-outline': qrCodeOutline,
      'location-outline': locationOutline,
      'trash-outline': trashOutline,
      'trash-bin-outline': trashBinOutline,
      'create-outline': createOutline,
      'checkmark-circle-outline': checkmarkCircleOutline,
      'camera': camera,
      'image-outline': imageOutline,
      'close-outline': closeOutline,
      'bar-chart-outline': barChartOutline,
      'information-circle-outline': informationCircleOutline,
      'cloud-download-outline': cloudDownloadOutline,
      'share-outline': shareOutline,
      'home': home,
      'share-social-outline': shareSocialOutline,
      'add': add,
      'chevron-forward-outline': chevronForwardOutline,
      'pricetag-outline': pricetagOutline,
      'flash-outline': flashOutline,
      'pencil-outline': pencilOutline,
      'person': person,
      'search': search,
      'time-outline': timeOutline
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

  ngAfterViewInit() {}

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
      next: () => { this.box.is_preferito = newVal; this.toast(newVal ? '⭐ Aggiunto ai preferiti' : 'Rimosso dai preferiti', 'primary'); },
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
    this.qrGenerato = false;
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
        next: () => { this.isSaving = false; this.caricaOggetti(); this.chiudiModale(); this.toast('Oggetto aggiornato!', 'success'); },
        error: () => { this.isSaving = false; this.toast('Errore aggiornamento.', 'danger'); }
      });
    } else {
      this.dbService.creaOggetto(dati).subscribe({
        next: () => { this.isSaving = false; this.caricaOggetti(); this.chiudiModale(); this.toast('Oggetto aggiunto!', 'success'); },
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
      header: 'Svuota Box',
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

  ionViewWillEnter() {
    this.utenteId = localStorage.getItem('utente_id');
    this.nomeUtente = (localStorage.getItem('utente_nome') || '').toUpperCase();
  }

  // ─── Foto — Action Sheet Custom Premium ──────────────────────────

  async apriSceltaFoto() {
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'peekbox-photo-sheet',
      header: '📷  Aggiungi Foto',
      buttons: [
        {
          text: '📸  Scatta Foto',
          cssClass: 'sheet-btn-camera',
          handler: () => {
            this.scattaFotoNativa();
          }
        },
        {
          text: '🖼️  Scegli dalla Galleria',
          cssClass: 'sheet-btn-gallery',
          handler: () => {
            this.scegliDaGalleria();
          }
        },
        {
          text: 'Annulla',
          role: 'cancel',
          cssClass: 'sheet-btn-cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  private async scattaFotoNativa() {
    try {
      const { Camera, CameraSource, CameraResultType } = await import('@capacitor/camera');
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera,
        quality: 90
      });
      if (photo.base64String) {
        this.fotoOggetto = `data:image/jpeg;base64,${photo.base64String}`;
      }
    } catch {
      const input = document.getElementById('foto-input') as HTMLInputElement;
      if (input) {
        input.setAttribute('capture', 'environment');
        input.click();
      }
    }
  }

  private async scegliDaGalleria() {
    try {
      const { Camera, CameraSource, CameraResultType } = await import('@capacitor/camera');
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Base64,
        source: CameraSource.Photos,
        quality: 90
      });
      if (photo.base64String) {
        this.fotoOggetto = `data:image/jpeg;base64,${photo.base64String}`;
      }
    } catch {
      const input = document.getElementById('foto-input') as HTMLInputElement;
      if (input) {
        input.removeAttribute('capture');
        input.click();
      }
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.fotoOggetto = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  rimuoviFoto(event: Event) {
    event.stopPropagation();
    this.fotoOggetto = null;
    const input = document.getElementById('foto-input') as HTMLInputElement;
    if (input) input.value = '';
  }

  // ─── QR Code (qrcode lib, client-side) ─────────────────────────────

  caricaQr() {
    this.isLoadingQr = true;
    this.qrGenerato = false;
    this.dbService.getQrToken(this.boxId).subscribe({
      next: async (res: any) => {
        const url = this.dbService.buildQrUrl(this.boxId, res.token);
        setTimeout(async () => {
          try {
            const canvas = document.getElementById('qr-canvas') as HTMLCanvasElement;
            if (canvas) {
              await QRCode.toCanvas(canvas, url, {
                width: 220,
                margin: 2,
                color: { dark: '#0F172A', light: '#FFFFFF' }
              });
              this.qrGenerato = true;
            }
          } catch (e) {
            this.toast('Errore generazione QR.', 'danger');
          }
          this.isLoadingQr = false;
        }, 100);
      },
      error: () => { this.isLoadingQr = false; this.toast('Impossibile generare il QR.', 'danger'); }
    });
  }

  scaricaQr() {
    const canvas = document.getElementById('qr-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `QR_Box_${this.boxId}_${this.box?.nome || 'box'}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.toast('QR Code scaricato!', 'success');
  }

  async condividiLink() {
    const url = window.location.origin + `/dettaglio-box/${this.boxId}`;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      this.toast('Link copiato negli appunti!', 'success');
    } else {
      this.toast(url, 'medium');
    }
  }

  // ─── Geofence ───────────────────────────────────────────────────

  apriGeofence() {
    if (!this.box?.rif_armadio) { this.toast('ID armadio non disponibile.', 'warning'); return; }
    this.router.navigate(['/geofence-armadio', this.box.rif_armadio], {
      queryParams: { 
        nome: this.box.nome_armadio || '',
        boxId: this.boxId
      }
    });
  }

  goBack() { this.navHistory.navTo('/home'); }
  vaiHome() { this.navHistory.navTo('/home'); }
  navTo(route: string) { this.navHistory.navTo(route); }

  private async toast(message: string, color = 'primary') {
    const t = await this.toastCtrl.create({ message, duration: 2400, color, position: 'bottom' });
    await t.present();
  }
}
