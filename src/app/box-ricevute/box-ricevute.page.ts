// ============================================================
// FILE: PeekBox/src/app/box-ricevute/box-ricevute.page.ts
// ============================================================

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import {
  AlertController, ToastController,
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
  IonButton, IonIcon, IonBadge, IonSpinner, IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonFooter,
  IonSegment, IonSegmentButton, IonList, IonItem, IonLabel,
  IonInput, IonSelect, IonSelectOption
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  checkmarkCircleOutline, closeCircleOutline, archiveOutline,
  timeOutline, personOutline, homeOutline, arrowBackOutline,
  refreshOutline, mailOpenOutline, shareSocialOutline, qrCodeOutline,
  peopleOutline, locationOutline, warningOutline, alertCircleOutline,
  trashOutline, personAddOutline, mailOutline, checkmarkOutline,
  chevronForwardOutline, closeOutline, optionsOutline, addOutline,
  home, add, search, person
} from 'ionicons/icons';
import { DatabaseService } from '../services/database';
import { NavigationHistoryService } from '../services/navigation-history';

@Component({
  selector: 'app-box-ricevute',
  templateUrl: './box-ricevute.page.html',
  styleUrls: ['./box-ricevute.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, RouterModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
    IonButton, IonIcon, IonBadge, IonSpinner, IonCard,
    IonCardHeader, IonCardTitle, IonCardContent, IonFooter,
    IonSegment, IonSegmentButton, IonList, IonItem, IonLabel,
    IonInput, IonSelect, IonSelectOption
  ]
})
export class BoxRicevutePage implements OnInit {

  // Stato UI
  activeTab: 'richieste' | 'spazi' | 'geofence' = 'richieste';
  isLoading = true;
  utenteId: string | null = null;
  nomeUtente: string = '';

  get contatoreNonLette(): number {
    return this.notificheGeofence.filter(n => !n.letto).length;
  }

  // Dati Richieste
  richiestePending: any[] = [];
  archiviAccettati: any[] = [];

  // Dati I Miei Spazi (Armadi propri)
  mieiArmadi: any[] = [];
  activeGuestsMap: { [key: number]: any[] } = {};

  // Dati Notifiche Geofencing
  notificheGeofence: any[] = [];

  // Nuovo Invito
  emailOspite: string = '';
  ruoloSelezionato: 'viewer' | 'editor' = 'viewer';
  armadioSelezionato: number | null = null;
  isInviting = false;

  constructor(
    private dbService: DatabaseService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private navHistory: NavigationHistoryService
  ) {
    addIcons({
      'checkmark-circle-outline': checkmarkCircleOutline,
      'close-circle-outline': closeCircleOutline,
      'archive-outline': archiveOutline,
      'time-outline': timeOutline,
      'person-outline': personOutline,
      'home-outline': homeOutline,
      'arrow-back-outline': arrowBackOutline,
      'refresh-outline': refreshOutline,
      'mail-open-outline': mailOpenOutline,
      'share-social-outline': shareSocialOutline,
      'qr-code-outline': qrCodeOutline,
      'people-outline': peopleOutline,
      'location-outline': locationOutline,
      'warning-outline': warningOutline,
      'alert-circle-outline': alertCircleOutline,
      'trash-outline': trashOutline,
      'person-add-outline': personAddOutline,
      'mail-outline': mailOutline,
      'checkmark-outline': checkmarkOutline,
      'chevron-forward-outline': chevronForwardOutline,
      'close-outline': closeOutline,
      'options-outline': optionsOutline,
      'add-outline': addOutline,
      'home': home,
      'add': add,
      'search': search,
      'person': person
    });
  }

  ngOnInit() {
    this.utenteId = localStorage.getItem('utente_id');
    this.nomeUtente = localStorage.getItem('username') || 'Utente';
    this.caricaTutto();
  }

  ionViewWillEnter() {
    this.caricaTutto();
  }

  caricaTutto() {
    if (!this.utenteId) return;
    this.isLoading = true;

    // 1. Carica le richieste IN ATTESA
    this.dbService.getCondivisioniInAttesa(this.utenteId).subscribe({
      next: (res) => {
        this.richiestePending = res.richieste || [];
      },
      error: (err) => console.error('Errore richieste pending:', err)
    });

    // 2. Carica gli archivi CONDIVISI CON ME (già accettati)
    this.dbService.getArchividCondivisiConMe(this.utenteId).subscribe({
      next: (res) => {
        this.archiviAccettati = (res.archivi_condivisi || [])
          .filter((c: any) => c.stato === 'accettata');
      },
      error: (err) => console.error('Errore archivi condivisi:', err)
    });

    // 3. Carica gli armadi PROPRI per la gestione
    this.dbService.getArmadi(this.utenteId).subscribe({
      next: (res: any) => {
        // Filtriamo per mostrare solo gli armadi di proprietà dell'utente
        // (l'endpoint /api/armadi/:id restituisce sia propri che condivisi)
        const armadiRows = res.armadi || [];
        this.mieiArmadi = armadiRows.filter((a: any) => a.ruolo_condivisione === null);

        // Carica gli ospiti attivi per ogni armadio
        this.mieiArmadi.forEach(armadio => {
          this.caricaOspitiArmadio(armadio.id);
        });
      },
      error: (err) => console.error('Errore caricamento armadi propri:', err)
    });

    // 4. Carica le notifiche di Geofencing
    this.dbService.getNotificheGeofence().subscribe({
      next: (res: any) => {
        this.notificheGeofence = res.notifiche || [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Errore caricamento notifiche geofence:', err);
        this.isLoading = false;
      }
    });
  }

  caricaOspitiArmadio(armadioId: number) {
    this.dbService.getCondivisioniArchivio(armadioId).subscribe({
      next: (res: any) => {
        this.activeGuestsMap[armadioId] = res.condivisioni || [];
      },
      error: () => {
        this.activeGuestsMap[armadioId] = [];
      }
    });
  }

  // ─── GESTIONE RICHIESTE ──────────────────────────────────────────────────

  async accetta(condivisione: any) {
    const alert = await this.alertCtrl.create({
      cssClass: 'peekbox-alert',
      header: 'Accetta Condivisione',
      message: `Vuoi accettare l'accesso all'archivio <strong>"${condivisione.armadio_nome || condivisione.nome_archivio}"</strong> condiviso da <strong>${condivisione.proprietario_username}</strong>?`,
      buttons: [
        { text: 'Annulla', role: 'cancel' },
        {
          text: 'Accetta',
          handler: () => this.eseguiAccetta(condivisione)
        }
      ]
    });
    await alert.present();
  }

  private eseguiAccetta(condivisione: any) {
    const id = condivisione.condivisione_id || condivisione.id;
    this.dbService.accettaCondivisione(id).subscribe({
      next: async () => {
        this.richiestePending = this.richiestePending.filter(r => (r.condivisione_id || r.id) !== id);
        this.caricaTutto();

        const toast = await this.toastCtrl.create({
          message: `✅ Condivisione accettata con successo!`,
          duration: 3000,
          color: 'success',
          position: 'bottom'
        });
        await toast.present();
      },
      error: async (err) => {
        const toast = await this.toastCtrl.create({
          message: `❌ Errore nell'accettare la condivisione: ${err?.error?.error || 'riprova.'}`,
          duration: 3000,
          color: 'danger',
          position: 'bottom'
        });
        await toast.present();
      }
    });
  }

  async rifiuta(condivisione: any) {
    const alert = await this.alertCtrl.create({
      cssClass: 'peekbox-alert',
      header: 'Rifiuta Condivisione',
      message: `Sei sicuro di voler rifiutare l'accesso all'archivio <strong>"${condivisione.armadio_nome || condivisione.nome_archivio}"</strong>? L'invito verrà eliminato.`,
      buttons: [
        { text: 'Annulla', role: 'cancel' },
        {
          text: 'Rifiuta',
          role: 'destructive',
          handler: () => this.eseguiRifiuta(condivisione)
        }
      ]
    });
    await alert.present();
  }

  private eseguiRifiuta(condivisione: any) {
    const id = condivisione.condivisione_id || condivisione.id;
    this.dbService.rifiutaCondivisione(id).subscribe({
      next: async () => {
        this.richiestePending = this.richiestePending.filter(r => (r.condivisione_id || r.id) !== id);
        this.caricaTutto();

        const toast = await this.toastCtrl.create({
          message: `🗑️ Invito rifiutato ed eliminato.`,
          duration: 2500,
          color: 'medium',
          position: 'bottom'
        });
        await toast.present();
      },
      error: async (err) => {
        const toast = await this.toastCtrl.create({
          message: `❌ Errore nel rifiutare la condivisione.`,
          duration: 3000,
          color: 'danger',
          position: 'bottom'
        });
        await toast.present();
      }
    });
  }

  // ─── INVITO RAPIDO GUEST ──────────────────────────────────────────────────

  async invitaNuovoOspite() {
    if (!this.armadioSelezionato) {
      this.mostraToast('Seleziona un archivio da condividere.', 'warning');
      return;
    }
    if (!this.emailOspite.trim()) {
      this.mostraToast('Inserisci un indirizzo email valido.', 'warning');
      return;
    }

    this.isInviting = true;
    this.dbService.condividiArchivio(this.armadioSelezionato, this.emailOspite.trim(), this.ruoloSelezionato).subscribe({
      next: async (res: any) => {
        this.isInviting = false;
        this.emailOspite = '';
        this.armadioSelezionato = null;
        this.caricaTutto();
        this.mostraToast(res.message || 'Invito inviato con successo! 🎉', 'success');
      },
      error: async (err) => {
        this.isInviting = false;
        const msg = err.error?.error || 'Impossibile inviare l\'invito.';
        this.mostraToast(msg, 'danger');
      }
    });
  }

  async cambiaRuoloOspite(guest: any) {
    const nuovoRuolo: 'viewer' | 'editor' = guest.ruolo === 'editor' ? 'viewer' : 'editor';
    
    this.dbService.aggiornaRuoloCondivisione(guest.id, nuovoRuolo).subscribe({
      next: () => {
        guest.ruolo = nuovoRuolo;
        this.mostraToast(`Ruolo aggiornato a ${nuovoRuolo === 'editor' ? 'Editor' : 'Viewer'}`, 'success');
      },
      error: (err) => {
        console.error('Errore aggiornamento ruolo:', err);
        this.mostraToast('Impossibile aggiornare il ruolo sul server.', 'danger');
      }
    });
  }

  async revocaOspite(condivisioneId: number) {
    const alert = await this.alertCtrl.create({
      cssClass: 'peekbox-alert',
      header: 'Revoca Accesso',
      message: 'Sei sicuro di voler revocare l\'accesso a questo ospite? Non potrà più visualizzare o modificare le box.',
      buttons: [
        { text: 'Annulla', role: 'cancel' },
        {
          text: 'Revoca',
          role: 'destructive',
          handler: () => {
            this.dbService.revocaCondivisione(condivisioneId).subscribe({
              next: () => {
                this.caricaTutto();
                this.mostraToast('Accesso revocato.', 'success');
              },
              error: () => this.mostraToast('Errore durante la revoca dell\'accesso.', 'danger')
            });
          }
        }
      ]
    });
    await alert.present();
  }

  // ─── GESTIONE NOTIFICHE GEOFENCE ──────────────────────────────────────────

  segnaComeLetta(notifica: any) {
    this.dbService.segnaNotificaComeLetta(notifica.id).subscribe({
      next: () => {
        notifica.letto = 1;
      },
      error: (err) => console.error('Errore lettura notifica:', err)
    });
  }

  eliminaNotifica(notificaId: number, event: Event) {
    event.stopPropagation();
    this.dbService.eliminaNotificaGeofence(notificaId).subscribe({
      next: () => {
        this.notificheGeofence = this.notificheGeofence.filter(n => n.id !== notificaId);
        this.mostraToast('Notifica eliminata.', 'success');
      },
      error: () => this.mostraToast('Impossibile eliminare la notifica.', 'danger')
    });
  }

  mostraInMappa(notifica: any, event: Event) {
    event.stopPropagation();
    if (notifica.latitudine == null || notifica.longitudine == null) return;
    const url = `https://www.google.com/maps/search/?api=1&query=${notifica.latitudine},${notifica.longitudine}`;
    window.open(url, '_blank');
    this.segnaComeLetta(notifica);
  }

  // ─── NAVIGAZIONE & HELPERS ────────────────────────────────────────────────

  apriArchivioCondiviso(archivio: any) {
    // Naviga alla lista box dell'archivio condiviso
    this.router.navigate(['/dettaglio-archivio-condiviso', archivio.armadio_id || archivio.id], {
      queryParams: {
        nome: archivio.armadio_nome || archivio.nome_archivio,
        ruolo: archivio.ruolo,
        condivisa: 'true'
      }
    });
  }

  apriConfigGeofence(armadio: any) {
    this.router.navigate(['/geofence-armadio', armadio.id], {
      queryParams: { nome: armadio.nome }
    });
  }

  apriDettagliSpazio(armadio: any) {
    this.router.navigate(['/condivisione-archivio', armadio.id], {
      queryParams: { nome: armadio.nome }
    });
  }

  tornaHome() {
    this.router.navigate(['/home']);
  }

  apriScanner() {
    this.router.navigate(['/scan-qr']);
  }

  navTo(route: string) {
    this.router.navigate([route]);
  }

  formattaData(data: string): string {
    if (!data) return '';
    return new Date(data).toLocaleString('it-IT', {
      day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
    });
  }

  private async mostraToast(message: string, color: string = 'primary') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2500,
      color,
      position: 'bottom'
    });
    await toast.present();
  }
}
