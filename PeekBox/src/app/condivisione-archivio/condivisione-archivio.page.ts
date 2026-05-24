import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
  IonButton, IonIcon, IonList, IonItem, IonLabel,
  IonBadge, IonSelect, IonSelectOption, IonSpinner, IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonInput,
  IonToggle,
  AlertController, ToastController
} from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  shareOutline, personAddOutline, trashOutline,
  eyeOutline, createOutline, peopleOutline, arrowBackOutline,
  refreshOutline, mailOpenOutline, shieldCheckmarkOutline,
  locationOutline, warningOutline, alertCircleOutline,
  checkmarkCircleOutline, closeCircleOutline, closeOutline,
  archiveOutline, personOutline, timeOutline, homeOutline,
  optionsOutline, chevronForwardOutline, chevronDownOutline,
  shareSocialOutline, qrCodeOutline, addOutline, mailOutline,
  checkmarkOutline
} from 'ionicons/icons';
import { DatabaseService } from '../services/database';

/**
 * CondivisioneArchivioPage — Centro di Controllo Condivisioni
 * ──────────────────────────────────────────────────────────
 * Pannello unificato per:
 *  - Gestione accessi attivi (ospiti) e archivi condivisi con l'utente
 *  - Richieste di condivisione in attesa (accetta/rifiuta)
 *  - Notifiche geofence e stato del perimetro virtuale
 *  - Invito di nuovi utenti con assegnazione ruolo
 */
@Component({
  selector: 'app-condivisione-archivio',
  templateUrl: './condivisione-archivio.page.html',
  styleUrls: ['./condivisione-archivio.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
    IonButton, IonIcon, IonList, IonItem, IonLabel,
    IonBadge, IonSelect, IonSelectOption, IonSpinner, IonCard,
    IonCardHeader, IonCardTitle, IonCardContent, IonInput,
    IonToggle
  ]
})
export class CondivisioneArchivioPage implements OnInit {

  // ── Routing ──────────────────────────────────────────────────
  armadioId!: number;
  armadioNome: string = '';
  utenteId: string | null = null;
  nomeUtente: string = '';

  // ── Tab attivo ────────────────────────────────────────────────
  activeTab: 'gestione' | 'richieste' | 'geofence' | 'invita' = 'gestione';

  // ── Dati condivisioni ─────────────────────────────────────────
  condivisioni: any[] = [];
  archividCondivisiConMe: any[] = [];
  richiesteInAttesa: any[] = [];

  // ── Invito ────────────────────────────────────────────────────
  emailOspite: string = '';
  ruoloSelezionato: 'viewer' | 'editor' = 'viewer';

  // ── Geofence ──────────────────────────────────────────────────
  hasGeofence = false;
  geofenceAttivo = false;
  raggioGeoLabel = '';
  segnalazioni: any[] = [];
  geofenceData: any = null;

  // ── Stato UI ──────────────────────────────────────────────────
  isLoading = false;
  isLoadingRichieste = false;
  isLoadingGeo = false;
  isInviting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dbService: DatabaseService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    addIcons({
      shareOutline, personAddOutline, trashOutline,
      eyeOutline, createOutline, peopleOutline, arrowBackOutline,
      refreshOutline, mailOpenOutline, shieldCheckmarkOutline,
      locationOutline, warningOutline, alertCircleOutline,
      checkmarkCircleOutline, closeCircleOutline, closeOutline,
      archiveOutline, personOutline, timeOutline, homeOutline,
      optionsOutline, chevronForwardOutline, chevronDownOutline,
      shareSocialOutline, qrCodeOutline, addOutline, mailOutline,
      checkmarkOutline
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.armadioId = id ? Number(id) : 0;
    this.armadioNome = this.route.snapshot.queryParamMap.get('nome') || `Archivio #${this.armadioId}`;
    this.utenteId = localStorage.getItem('utente_id');
    this.nomeUtente = localStorage.getItem('username') || '';
    this.caricaTutto();
  }

  ionViewWillEnter() {
    this.caricaTutto();
  }

  caricaTutto() {
    this.caricaCondivisioni();
    this.caricaArchividCondivisiConMe();
    this.caricaRichiesteInAttesa();
    this.caricaGeofence();
    this.caricaSegnalazioni();
  }

  // ── Accessi attivi ─────────────────────────────────────────────
  caricaCondivisioni() {
    if (!this.armadioId) return;
    this.isLoading = true;
    this.dbService.getCondivisioniArchivio(this.armadioId).subscribe({
      next: (res: any) => {
        this.condivisioni = res.condivisioni || [];
        this.isLoading = false;
      },
      error: () => { this.isLoading = false; }
    });
  }

  caricaArchividCondivisiConMe() {
    if (!this.utenteId) return;
    this.dbService.getArchividCondivisiConMe(this.utenteId).subscribe({
      next: (res: any) => { this.archividCondivisiConMe = res.archivi_condivisi || []; },
      error: () => {}
    });
  }

  apriArchivioCondiviso(archivio: any) {
    this.router.navigate(['/home'], { queryParams: { armadio_id: archivio.id || archivio.armadio_id } });
  }

  // ── Richieste in attesa ────────────────────────────────────────
  caricaRichiesteInAttesa() {
    if (!this.utenteId) return;
    this.isLoadingRichieste = true;
    this.dbService.getCondivisioniInAttesa(this.utenteId).subscribe({
      next: (res: any) => {
        this.richiesteInAttesa = res.richieste || [];
        this.isLoadingRichieste = false;
      },
      error: () => { this.isLoadingRichieste = false; }
    });
  }

  async accettaRichiesta(richiesta: any) {
    this.dbService.accettaCondivisione(richiesta.id).subscribe({
      next: async () => {
        this.richiesteInAttesa = this.richiesteInAttesa.filter(r => r.id !== richiesta.id);
        await this.mostraToast('Condivisione accettata ✅', 'success');
        this.caricaArchividCondivisiConMe();
      },
      error: async () => { await this.mostraToast('Errore nell\'accettare la richiesta.', 'danger'); }
    });
  }

  async rifiutaRichiesta(richiesta: any) {
    const alert = await this.alertCtrl.create({
      header: 'Rifiutare la richiesta?',
      message: `Rifiutare l'accesso a «${richiesta.nome_archivio || richiesta.armadio_nome}»?`,
      buttons: [
        { text: 'Annulla', role: 'cancel' },
        {
          text: 'Rifiuta',
          role: 'destructive',
          handler: () => {
            this.dbService.rifiutaCondivisione(richiesta.id).subscribe({
              next: async () => {
                this.richiesteInAttesa = this.richiesteInAttesa.filter(r => r.id !== richiesta.id);
                await this.mostraToast('Richiesta rifiutata.', 'medium');
              },
              error: async () => { await this.mostraToast('Errore durante il rifiuto.', 'danger'); }
            });
          }
        }
      ]
    });
    await alert.present();
  }

  // ── Invito ─────────────────────────────────────────────────────
  async invitaOspite() {
    if (!this.emailOspite.trim()) {
      await this.mostraToast('Inserisci un\'email valida.', 'warning');
      return;
    }
    this.isInviting = true;
    this.dbService.condividiArchivio(this.armadioId, this.emailOspite.trim(), this.ruoloSelezionato).subscribe({
      next: async (res: any) => {
        this.isInviting = false;
        this.emailOspite = '';
        this.caricaCondivisioni();
        await this.mostraToast(res.message || 'Invito inviato con successo! 🎉', 'success');
        this.activeTab = 'gestione';
      },
      error: async (err: any) => {
        this.isInviting = false;
        const msg = err.error?.error || 'Errore durante la condivisione.';
        await this.mostraToast(msg, 'danger');
      }
    });
  }

  async confermaRevoca(condivisione: any) {
    const alert = await this.alertCtrl.create({
      header: 'Revocare accesso?',
      message: `Rimuovere l'accesso di ${condivisione.ospite_username}?`,
      buttons: [
        { text: 'Annulla', role: 'cancel' },
        {
          text: 'Revoca',
          role: 'destructive',
          handler: () => {
            this.dbService.revocaCondivisione(condivisione.id).subscribe({
              next: async () => {
                this.caricaCondivisioni();
                await this.mostraToast('Accesso revocato.', 'medium');
              },
              error: async () => { await this.mostraToast('Errore durante la revoca.', 'danger'); }
            });
          }
        }
      ]
    });
    await alert.present();
  }

  // ── Geofence ───────────────────────────────────────────────────
  caricaGeofence() {
    if (!this.armadioId) return;
    this.dbService.getGeofence(this.armadioId).subscribe({
      next: (res: any) => {
        const g = res.geofence;
        if (g) {
          this.hasGeofence = true;
          this.geofenceAttivo = !!g.attivo;
          this.geofenceData = g;
          const m = g.raggio_m || 100;
          this.raggioGeoLabel = m >= 1000 ? `${(m/1000).toFixed(1)} km` : `${m} m`;
        } else {
          this.hasGeofence = false;
        }
      },
      error: () => { this.hasGeofence = false; }
    });
  }

  caricaSegnalazioni() {
    if (!this.armadioId) return;
    this.isLoadingGeo = true;
    // Carica segnalazioni geofence per l'archivio — se l'endpoint esiste
    // Fallback: array vuoto per compatibilità
    this.isLoadingGeo = false;
    this.segnalazioni = [];
  }

  onGeofenceToggle() {
    // Aggiorna lo stato attivo del geofence esistente
    if (!this.geofenceData) return;
    this.dbService.impostaGeofence(
      this.armadioId,
      this.geofenceData.latitudine,
      this.geofenceData.longitudine,
      this.geofenceData.raggio_m,
      this.geofenceAttivo
    ).subscribe({
      next: async () => {
        const stato = this.geofenceAttivo ? 'attivato' : 'disattivato';
        await this.mostraToast(`Perimetro virtuale ${stato}.`, 'primary');
      },
      error: async () => {
        this.geofenceAttivo = !this.geofenceAttivo; // rollback
        await this.mostraToast('Errore nell\'aggiornare il geofence.', 'danger');
      }
    });
  }

  rimuoviSegnalazione(s: any) {
    this.segnalazioni = this.segnalazioni.filter(x => x !== s);
  }

  apriConfigGeofence() {
    this.router.navigate(['/geofence-armadio', this.armadioId], {
      queryParams: { nome: this.armadioNome }
    });
  }

  // ── Navigazione ─────────────────────────────────────────────────
  goBack() {
    this.router.navigate(['/home']);
  }

  navTo(path: string) {
    this.router.navigate([path]);
  }

  // ── Helpers ────────────────────────────────────────────────────
  formatData(ts: string): string {
    if (!ts) return '';
    return new Date(ts).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  private async mostraToast(message: string, color: string = 'primary') {
    const toast = await this.toastCtrl.create({ message, duration: 2500, color, position: 'bottom' });
    await toast.present();
  }
}
