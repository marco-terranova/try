import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonButton, IonIcon, IonItem, IonLabel,
  IonToggle, IonRange, IonSpinner, IonInput,
  AlertController, ToastController
} from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  locationOutline, shieldCheckmarkOutline, warningOutline,
  trashOutline, saveOutline, navigateOutline, refreshOutline,
  arrowForwardOutline
} from 'ionicons/icons';
import { DatabaseService } from '../services/database';
import { NavigationHistoryService } from '../services/navigation-history';
import { GpsService } from '../services/gps';

/**
 * GeofenceArmadioPage
 * ─────────────────────
 * Configura il perimetro virtuale (geofence) attorno a una struttura logistica.
 * Il proprietario imposta il centro (latitudine/longitudine) e il raggio in metri.
 * Supporta acquisizione automatica della posizione GPS corrente come centro.
 *
 * Al momento della scansione QR (checkpoint/sicuro), il backend verifica
 * automaticamente la posizione dell'asset rispetto a questo perimetro e
 * genera un'eccezione di sicurezza in caso di anomalia.
 */
@Component({
  selector: 'app-geofence-armadio',
  templateUrl: './geofence-armadio.page.html',
  styleUrls: ['./geofence-armadio.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonContent, IonButton, IonIcon, IonItem, IonLabel,
    IonToggle, IonRange, IonSpinner, IonInput
  ]
})
export class GeofenceArmadioPage implements OnInit {

  armadioId!: number;
  armadioNome: string = '';

  // Configurazione geofence
  latitudine: number | null = null;
  longitudine: number | null = null;
  raggioM: number = 100;
  attivo: boolean = true;

  // Stato esistente
  geofenceEsistente: any = null;
  hasGeofence = false;

  // Verifica posizione corrente
  verificaResult: any = null;
  isVerifying = false;

  isLoading = false;
  isSaving = false;
  isGettingGps = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dbService: DatabaseService,
    private gpsService: GpsService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private navHistory: NavigationHistoryService
  ) {
    addIcons({ locationOutline, shieldCheckmarkOutline, warningOutline, trashOutline, saveOutline, navigateOutline, refreshOutline, arrowForwardOutline });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const parsedId = id ? Number(id) : NaN;

    if (!parsedId || isNaN(parsedId) || parsedId <= 0) {
      // ID non valido: torna indietro e avvisa
      this.mostraToast('ID archivio non valido. Torna indietro e riprova.', 'danger').then(() => {
        this.navHistory.navTo('/home');
      });
      return;
    }

    this.armadioId = parsedId;
    this.armadioNome = this.route.snapshot.queryParamMap.get('nome') || `Archivio #${this.armadioId}`;
    this.caricaGeofence();
  }

  caricaGeofence() {
    this.isLoading = true;
    this.dbService.getGeofence(this.armadioId).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        this.geofenceEsistente = res.geofence;
        this.hasGeofence = !!res.geofence;
        if (res.geofence) {
          this.latitudine = res.geofence.latitudine;
          this.longitudine = res.geofence.longitudine;
          this.raggioM = res.geofence.raggio_m;
          this.attivo = res.geofence.attivo === 1;
        }
      },
      error: () => { this.isLoading = false; }
    });
  }

  /** Acquisisce la posizione GPS corrente come centro del geofence */
  async usaPosizioneCorrcome() {
    this.isGettingGps = true;
    try {
      const pos = await this.gpsService.getPosizione();
      this.latitudine = pos.latitudine;
      this.longitudine = pos.longitudine;
      await this.mostraToast(`📍 Posizione acquisita (±${Math.round(pos.accuratezza)} m)`, 'success');
    } catch (err: any) {
      await this.mostraToast('GPS non disponibile: ' + err.message, 'danger');
    } finally {
      this.isGettingGps = false;
    }
  }

  async salvaGeofence() {
    if (this.latitudine == null || this.longitudine == null) {
      await this.mostraToast('Imposta le coordinate prima di salvare.', 'warning');
      return;
    }
    if (this.raggioM < 10 || this.raggioM > 50000) {
      await this.mostraToast('Il raggio deve essere tra 10 e 50.000 metri.', 'warning');
      return;
    }

    this.isSaving = true;
    this.dbService.impostaGeofence(this.armadioId, this.latitudine, this.longitudine, this.raggioM, this.attivo).subscribe({
      next: async () => {
        this.isSaving = false;
        this.caricaGeofence();
        await this.mostraToast('✅ Geofence configurato con successo!', 'success');
      },
      error: async (err: any) => {
        this.isSaving = false;
        await this.mostraToast(err.error?.error || 'Errore durante il salvataggio.', 'danger');
      }
    });
  }

  async confermaElimina() {
    const alert = await this.alertCtrl.create({
      cssClass: 'peekbox-alert',
      header: 'Elimina Geofence',
      message: 'Rimuovere il perimetro virtuale? Gli asset non saranno più monitorati.',
      buttons: [
        { text: 'Annulla', role: 'cancel' },
        {
          text: 'Elimina',
          role: 'destructive',
          handler: () => {
            this.dbService.eliminaGeofence(this.armadioId).subscribe({
              next: async () => {
                this.hasGeofence = false;
                this.geofenceEsistente = null;
                this.latitudine = null;
                this.longitudine = null;
                this.raggioM = 100;
                await this.mostraToast('Geofence rimosso.', 'medium');
              },
              error: async () => { await this.mostraToast('Errore durante l\'eliminazione.', 'danger'); }
            });
          }
        }
      ]
    });
    await alert.present();
  }

  /** Test in tempo reale: verifica la posizione GPS corrente rispetto al geofence */
  async verificaPosizioneLive() {
    if (!this.armadioId || isNaN(this.armadioId) || this.armadioId <= 0) {
      await this.mostraToast('ID archivio non disponibile.', 'warning');
      return;
    }
    this.isVerifying = true;
    this.verificaResult = null;
    try {
      const pos = await this.gpsService.getPosizione();
      this.dbService.verificaGeofence(this.armadioId, pos.latitudine, pos.longitudine).subscribe({
        next: (res: any) => {
          this.isVerifying = false;
          this.verificaResult = res;
        },
        error: () => { this.isVerifying = false; }
      });
    } catch (err: any) {
      this.isVerifying = false;
      await this.mostraToast('GPS non disponibile: ' + err.message, 'danger');
    }
  }

  apriInMappa() {
    if (this.latitudine == null || this.longitudine == null) return;
    const url = this.gpsService.buildGoogleMapsUrl(this.latitudine, this.longitudine);
    window.open(url, '_blank');
  }

  get raggioLabel(): string {
    if (this.raggioM < 1000) return `${this.raggioM} m`;
    return `${(this.raggioM / 1000).toFixed(1)} km`;
  }

  private async mostraToast(message: string, color: string = 'primary') {
    const toast = await this.toastCtrl.create({ message, duration: 2500, color, position: 'bottom' });
    await toast.present();
  }

  navTo(route: string) { this.navHistory.navTo(route); }

}
