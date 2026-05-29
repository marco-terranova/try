import { Component, ElementRef, ViewChild, AfterViewInit, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
  IonButton, IonIcon, IonModal, IonItem,
  IonLabel, IonCheckbox
} from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  home, search, personOutline, funnelOutline, qrCodeOutline,
  closeOutline, closeCircleOutline, cubeOutline, star, starOutline,
  addCircleOutline, camera, imageOutline, stopCircleOutline,
  videocamOutline, keypadOutline, arrowForwardOutline,
  alertCircleOutline, archiveOutline
} from 'ionicons/icons';

import { DatabaseService } from '../services/database';
import { NavigationHistoryService } from '../services/navigation-history';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
    IonButton, IonIcon, IonModal, IonItem,
    IonLabel, IonCheckbox
  ],
})
export class HomePage implements AfterViewInit {
  @HostBinding('class.panel-open') get hostPanelOpen() { return this.isScanModalOpen || this.isSearchModalOpen; }

  leMieBox: any[] = [];
  boxFiltrate: any[] = [];
  gliArmadi: any[] = [];
  leTipologie: any[] = [];
  utenteId: string | null = null;
  nomeUtente: string | null = null;

  searchQuery: string = '';
  isSearchModalOpen: boolean = false;
  activeTab: string = 'home';

  @ViewChild('searchField') searchFieldRef!: ElementRef<HTMLInputElement>;
  @ViewChild('scanVideo') scanVideoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('scanCanvas') scanCanvasRef!: ElementRef<HTMLCanvasElement>;

  isScanModalOpen: boolean = false;
  isScanning: boolean = false;
  scanError: string | null = null;
  scanCode: string = '';
  qrReady: boolean = false;

  private scanStream: MediaStream | null = null;
  private animFrameId: number | null = null;

  isFilterModalOpen: boolean = false;

  filtri = {
    soloPreferiti: false,
    idArmadio: null as number | null,
    categoria: null as string | null
  };

  constructor(
    private alertCtrl: AlertController,
    private dbService: DatabaseService,
    private router: Router,
    private navHistory: NavigationHistoryService
  ) {
    addIcons({
      'home': home, 'search': search,
      'person-outline': personOutline,
      'funnel-outline': funnelOutline,
      'qr-code-outline': qrCodeOutline,
      'close-outline': closeOutline,
      'close-circle-outline': closeCircleOutline,
      'cube-outline': cubeOutline,
      'star': star, 'star-outline': starOutline,

      'add-circle-outline': addCircleOutline,
      'camera': camera,
      'image-outline': imageOutline,
      'stop-circle-outline': stopCircleOutline,
      'videocam-outline': videocamOutline,
      'keypad-outline': keypadOutline,
      'arrow-forward-outline': arrowForwardOutline,
      'alert-circle-outline': alertCircleOutline,
      'archive-outline': archiveOutline
    });
  }

  ngAfterViewInit() {
    this.loadJsQR();
  }

  private loadJsQR() {
    if ((window as any).jsQR) { this.qrReady = true; return; }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js';
    script.onload = () => { this.qrReady = true; };
    document.head.appendChild(script);
  }

  ionViewWillEnter() {
    this.utenteId = localStorage.getItem('utente_id');
    this.nomeUtente = localStorage.getItem('utente_nome');
    if (this.utenteId) {
      this.caricaDatiDalServer(this.utenteId);
    }
  }

  navTo(route: string) { this.navHistory.navTo(route); }

  navBack() { this.navHistory.back(); }

  goHome() {
    this.activeTab = 'home';
    this.isSearchModalOpen = false;
    this.searchQuery = '';
    this.applicaFiltri();
  }

  toggleSearch() {
    if (this.isSearchModalOpen) {
      this.isSearchModalOpen = false;
      this.activeTab = 'home';
      this.searchQuery = '';
      this.applicaFiltri();
    } else {
      this.isSearchModalOpen = true;
      this.activeTab = 'search';
      setTimeout(() => this.searchFieldRef?.nativeElement?.focus(), 200);
    }
  }

  clearSearch() {
    this.searchQuery = '';
    this.applicaFiltri();
  }

  openScanModal() { this.isScanModalOpen = true; }

  closeScanModal() {
    this.stopScanCamera();
    this.scanCode = '';
    this.scanError = null;
    this.isScanModalOpen = false;
  }

  onScanPresent() {
    // La scansione parte solo quando l'utente clicca il pulsante "Scansiona"
  }

  onScanDismiss() {
    this.stopScanCamera();
  }

  private async startScanCamera() {
    this.scanError = null;
    if (!navigator.mediaDevices?.getUserMedia) {
      this.scanError = 'Il tuo browser non supporta la fotocamera.';
      return;
    }
    try {
      this.scanStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });
    } catch (err: any) {
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        this.scanError = 'Accesso alla fotocamera negato. Abilita il permesso nelle impostazioni del browser.';
      } else if (err.name === 'NotFoundError') {
        this.scanError = 'Nessuna fotocamera trovata sul dispositivo.';
      } else {
        this.scanError = 'Impossibile avviare la fotocamera: ' + err.message;
      }
      return;
    }
    this.isScanning = true;
    setTimeout(() => {
      const video = this.scanVideoRef?.nativeElement;
      if (!video) return;
      video.srcObject = this.scanStream;
      video.play().catch(() => {});
      this.scheduleQrTick();
    }, 100);
  }

  private stopScanCamera() {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (this.scanStream) {
      this.scanStream.getTracks().forEach(t => t.stop());
      this.scanStream = null;
    }
    const video = this.scanVideoRef?.nativeElement;
    if (video) { video.srcObject = null; }
    this.isScanning = false;
  }

  toggleCameraScan() {
    if (this.isScanning) {
      this.stopScanCamera();
    } else {
      this.startScanCamera();
    }
  }

  private scheduleQrTick() {
    this.animFrameId = requestAnimationFrame(() => this.qrTick());
  }

  private extractBoxId(input: string): string {
    const trimmed = input.trim();
    if (trimmed.includes('?') && trimmed.includes('box=')) {
      try {
        const urlParams = new URLSearchParams(trimmed.substring(trimmed.indexOf('?')));
        const boxParam = urlParams.get('box');
        if (boxParam) return boxParam;
      } catch (e) { /* ignore */ }
    }
    return trimmed;
  }

  private qrTick() {
    const video = this.scanVideoRef?.nativeElement;
    const canvas = this.scanCanvasRef?.nativeElement;
    if (!video || !canvas || !this.isScanning) return;
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      const ctx = canvas.getContext('2d')!;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      if (this.qrReady) {
        const jsQRFn = (window as any).jsQR;
        if (jsQRFn) {
          const code = jsQRFn(imageData.data, imageData.width, imageData.height, { inversionAttempts: 'dontInvert' });
          if (code?.data) {
            this.stopScanCamera();
            this.closeScanModal();
            const boxId = this.extractBoxId(code.data);
            this.router.navigate(['/dettaglio-box', boxId.toUpperCase()]);
            return;
          }
        }
      }
    }
    if (this.isScanning) this.scheduleQrTick();
  }

  galleryScan() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      this.stopScanCamera();
      const img = new Image();
      img.onload = () => {
        const c = document.createElement('canvas');
        const ctx = c.getContext('2d')!;
        const maxDim = 1024;
        let w = img.width, h = img.height;
        if (w > maxDim || h > maxDim) {
          const ratio = Math.min(maxDim / w, maxDim / h);
          w = Math.round(w * ratio);
          h = Math.round(h * ratio);
        }
        c.width = w; c.height = h;
        ctx.drawImage(img, 0, 0, w, h);
        const imageData = ctx.getImageData(0, 0, w, h);
        const jsQRFn = (window as any).jsQR;
        if (jsQRFn) {
          const code = jsQRFn(imageData.data, w, h, { inversionAttempts: 'dontInvert' });
          if (code?.data) {
            this.closeScanModal();
            const boxId = this.extractBoxId(code.data);
            this.router.navigate(['/dettaglio-box', boxId.toUpperCase()]);
            return;
          }
        }
        this.scanError = 'Nessun QR Code trovato nell\'immagine.';
      };
      img.src = URL.createObjectURL(file);
    };
    input.click();
  }

  submitScanCode() {
    const code = this.scanCode.trim();
    if (!code) return;
    this.closeScanModal();
    const boxId = this.extractBoxId(code);
    this.router.navigate(['/dettaglio-box', boxId.toUpperCase()]);
  }

  openFilterModal() { this.isFilterModalOpen = true; }

  closeFilterModal() { this.isFilterModalOpen = false; }

  applyFilters() {
    this.applicaFiltri();
  }

  resetFilters() {
    this.filtri = { soloPreferiti: false, idArmadio: null, categoria: null };
    this.searchQuery = '';
    this.applicaFiltri();
  }

  caricaDatiDalServer(idUtente: string) {
    this.dbService.getArmadi(idUtente).subscribe({
      next: (res: any) => this.gliArmadi = res.armadi || []
    });
    this.dbService.getTipologie(idUtente).subscribe({
      next: (res: any) => this.leTipologie = res.tipologie || []
    });
    this.dbService.getBox(idUtente).subscribe({
      next: (res: any) => {
        this.leMieBox = res.box || [];
        this.applicaFiltri();
      }
    });
  }

  getNomeArmadio(id: number): string {
    const trovato = this.gliArmadi.find(a => a.id === id);
    return trovato ? trovato.nome : 'Armadio sconosciuto';
  }

  applicaFiltri() {
    const query = this.searchQuery?.toLowerCase().trim() || '';
    this.boxFiltrate = this.leMieBox.filter(box => {
      const matchPreferiti = !this.filtri.soloPreferiti || box.is_preferito === 1;
      const matchArmadio = !this.filtri.idArmadio || box.rif_armadio === this.filtri.idArmadio;
      const matchSearch = !query || box.nome?.toLowerCase().includes(query);
      let matchCategoria = true;
      if (this.filtri.categoria) {
        if (box.categorie_presenti) {
          const listaCategorie = box.categorie_presenti.split(',');
          matchCategoria = listaCategorie.includes(this.filtri.categoria);
        } else {
          matchCategoria = false;
        }
      }
      return matchPreferiti && matchArmadio && matchCategoria && matchSearch;
    });
  }
}