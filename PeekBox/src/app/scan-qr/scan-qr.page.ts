import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NavigationHistoryService } from '../services/navigation-history';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  add,
  alertCircleOutline,
  apertureOutline,
  arrowForwardOutline,
  cameraReverseOutline,
  chatbubblesOutline,
  home,
  imageOutline,
  keypadOutline,
  optionsOutline,
  qrCodeOutline,
  shieldCheckmarkOutline,
  stopCircleOutline,
  videocamOutline,
} from 'ionicons/icons';

declare const jsQR: any;

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonContent,
    IonHeader,
    IonIcon,
    IonToolbar,
  ],
})
export class ScanQrPage implements OnInit, OnDestroy {
  @ViewChild('videoEl') videoElRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasEl') canvasElRef!: ElementRef<HTMLCanvasElement>;

  isScanning = false;
  manualCode = '';
  cameraError: string | null = null;
  nomeUtente = '';

  private stream: MediaStream | null = null;
  private animFrameId: number | null = null;

  constructor(private router: Router,
    private navHistory: NavigationHistoryService) {
    addIcons({
      add,
      alertCircleOutline,
      apertureOutline,
      arrowForwardOutline,
      cameraReverseOutline,
      chatbubblesOutline,
      home,
      imageOutline,
      keypadOutline,
      optionsOutline,
      qrCodeOutline,
      shieldCheckmarkOutline,
      stopCircleOutline,
      videocamOutline,
    });
  }

  ngOnInit() {
    this.loadJsQR();
  }

  ionViewWillEnter() {
    this.nomeUtente = (localStorage.getItem('utente_nome') || '').toUpperCase();
  }

  ngOnDestroy() {
    this.stopScanning();
  }

  private loadJsQR() {
    if ((window as any).jsQR) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js';
    document.head.appendChild(script);
  }

  toggleCamera() {
    if (this.isScanning) {
      this.stopScanning();
    } else {
      this.startScanning();
    }
  }

  async startScanning() {
    this.cameraError = null;

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      this.cameraError = 'Il tuo browser non supporta la fotocamera.';
      return;
    }

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });
    } catch (err: any) {
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        this.cameraError = 'Accesso alla fotocamera negato. Abilita il permesso nelle impostazioni del browser.';
      } else if (err.name === 'NotFoundError') {
        this.cameraError = 'Nessuna fotocamera trovata sul dispositivo.';
      } else {
        this.cameraError = 'Impossibile avviare la fotocamera: ' + err.message;
      }
      return;
    }

    this.isScanning = true;

    // Aspetta il prossimo ciclo per assicurarsi che *ngIf abbia renderizzato il <video>
    setTimeout(() => {
      const video = this.videoElRef?.nativeElement;
      if (video) {
        video.srcObject = this.stream;
        video.play();
        this.scheduleQrTick();
      }
    }, 50);
  }

  stopScanning() {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (this.stream) {
      this.stream.getTracks().forEach(t => t.stop());
      this.stream = null;
    }
    const video = this.videoElRef?.nativeElement;
    if (video) {
      video.srcObject = null;
    }
    this.isScanning = false;
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
        if (boxParam) {
          return boxParam;
        }
      } catch (e) {
        console.error('Error parsing scanned URL:', e);
      }
    }
    return trimmed;
  }

  private qrTick() {
    const video = this.videoElRef?.nativeElement;
    const canvas = this.canvasElRef?.nativeElement;
    if (!video || !canvas || !this.isScanning) return;

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      const ctx = canvas.getContext('2d')!;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const jsQRFn = (window as any).jsQR;
      if (jsQRFn) {
        const code = jsQRFn(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert',
        });
        if (code?.data) {
          this.stopScanning();
          const boxId = this.extractBoxId(code.data);
          this.router.navigate(['/dettaglio-box', boxId.toUpperCase()]);
          return;
        }
      }
    }

    if (this.isScanning) this.scheduleQrTick();
  }

  openGallery() {
    // Logica galleria o picker immagine.
  }

  submitManualCode() {
    const code = this.manualCode.trim();
    if (!code) return;
    const boxId = this.extractBoxId(code);
    this.router.navigate(['/dettaglio-box', boxId.toUpperCase()]);
  }

  navTo(route: string) { this.navHistory.navTo(route); }

}
