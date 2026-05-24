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
  arrowForwardOutline, closeOutline, mapOutline, informationCircleOutline
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

  /** Computed: true = dentro, false = fuori, null = non ancora verificato */
  get verificaRisultato(): boolean | null {
    if (this.verificaResult === null) return null;
    if (typeof this.verificaResult?.dentro_perimetro !== 'undefined') {
      return this.verificaResult.dentro_perimetro === true || this.verificaResult.dentro_perimetro === 1;
    }
    return null;
  }

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
    addIcons({
      'location-outline': locationOutline,
      'shield-checkmark-outline': shieldCheckmarkOutline,
      'warning-outline': warningOutline,
      'warning': warningOutline,
      'trash-outline': trashOutline,
      'save-outline': saveOutline,
      'navigate-outline': navigateOutline,
      'refresh-outline': refreshOutline,
      'arrow-forward-outline': arrowForwardOutline,
      'close-outline': closeOutline,
      'map-outline': mapOutline,
      'information-circle-outline': informationCircleOutline
    });
  }

  boxId: number | null = null;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const parsedId = id ? Number(id) : NaN;

    // Recupero opzionale del boxId per tornare indietro correttamente
    const bId = this.route.snapshot.queryParamMap.get('boxId');
    this.boxId = bId ? Number(bId) : null;

    if (!parsedId || isNaN(parsedId) || parsedId <= 0) {
      // ID non valido: torna indietro e avvisa
      this.mostraToast('ID archivio non valido. Torna indietro e riprova.', 'danger').then(() => {
        this.chiudi();
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
    // Conversione esplicita a numero per evitare errori di tipo stringa da input
    const lat = Number(this.latitudine);
    const lng = Number(this.longitudine);
    const raggio = Number(this.raggioM);

    if (isNaN(lat) || isNaN(lng) || this.latitudine === null || this.longitudine === null) {
      await this.mostraToast('Imposta le coordinate valide prima di salvare.', 'warning');
      return;
    }
    
    if (isNaN(raggio) || raggio < 10 || raggio > 50000) {
      await this.mostraToast('Il raggio deve essere tra 10 e 50.000 metri.', 'warning');
      return;
    }

    this.isSaving = true;
    // Assicuriamoci che i valori passati siano numeri
    this.dbService.impostaGeofence(this.armadioId, lat, lng, raggio, this.attivo).subscribe({
      next: async (res: any) => {
        this.isSaving = false;
        // Aggiorna lo stato locale con la risposta del server
        this.hasGeofence = true;
        this.geofenceEsistente = res.geofence || { armadio_id: this.armadioId, latitudine: lat, longitudine: lng, raggio_m: raggio, attivo: this.attivo ? 1 : 0 };
        
        await this.mostraToast('✅ Geofence configurato con successo!', 'success');
        // Ricarica per sicurezza per allineare tutto lo stato
        this.caricaGeofence();
      },
      error: async (err: any) => {
        this.isSaving = false;
        console.error('Errore salvataggio geofence:', err);
        await this.mostraToast(err.error?.message || err.error?.error || 'Errore durante il salvataggio.', 'danger');
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

  chiudi() {
    if (this.boxId) {
      this.navHistory.navTo(`/dettaglio-box/${this.boxId}`);
    } else {
      this.navHistory.navTo('/home');
    }
  }

  navTo(route: string) { this.navHistory.navTo(route); }

}
