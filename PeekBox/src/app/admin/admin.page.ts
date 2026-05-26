import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonContent, IonIcon, IonSpinner,
} from '@ionic/angular/standalone';
import { AlertController, ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  trashOutline, cubeOutline,
  people, layersOutline, pricetagOutline,
      chatbubblesOutline, checkmarkOutline,
  closeOutline, closeCircleOutline
} from 'ionicons/icons';

import { DatabaseService } from '../services/database';
import { NavigationHistoryService } from '../services/navigation-history';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.page.html',
  styleUrls: ['admin.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterModule,
    IonHeader, IonToolbar, IonContent, IonIcon, IonSpinner,
  ],
})
export class AdminPage implements OnInit {
  utenti: any[] = [];
  segnalazioni: any[] = [];
  isLoading = true;
  errore: string = '';
  activeTab: 'utenti' | 'segnalazioni' = 'utenti';

  nomeAdmin: string = '';
  utenteIdCorrente: string | null = null;

  constructor(
    private alertCtrl: AlertController,
    private dbService: DatabaseService,
    private toastCtrl: ToastController,
    private router: Router,
    private navHistory: NavigationHistoryService,
  ) {
    addIcons({
      trashOutline, cubeOutline,
      people, layersOutline, pricetagOutline,
  chatbubblesOutline, checkmarkOutline,
      closeOutline, closeCircleOutline
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.utenteIdCorrente = localStorage.getItem('utente_id');
    this.nomeAdmin = (localStorage.getItem('utente_nome') || '').toUpperCase();

    const isAdmin = localStorage.getItem('is_admin');
    if (isAdmin !== '1') {
      this.router.navigateByUrl('/home', { replaceUrl: true });
      return;
    }

    this.caricaIniziale();
  }

  private async caricaIniziale() {
    await this.caricaUtenti();
    await this.caricaSegnalazioni();
    this.isLoading = false;
  }

  caricaUtenti(): Promise<void> {
    this.isLoading = true;
    this.errore = '';

    return this.dbService.adminGetUtenti().toPromise()
      .then((res: any) => {
        this.utenti = res.utenti || [];
        this.isLoading = false;
      })
      .catch(() => {
        this.errore = 'Impossibile caricare gli utenti. Verifica di avere i permessi admin.';
        this.isLoading = false;
      });
  }

  caricaSegnalazioni(): Promise<void> {
    this.isLoading = true;
    this.errore = '';

    return this.dbService.adminGetSegnalazioni().toPromise()
      .then((res: any) => {
        this.segnalazioni = res.segnalazioni || [];
        this.isLoading = false;
      })
      .catch(() => {
        this.errore = 'Impossibile caricare le segnalazioni.';
        this.isLoading = false;
      });
  }

  cambiaTab(tab: 'utenti' | 'segnalazioni') {
    this.activeTab = tab;
    if (tab === 'segnalazioni') {
      this.caricaSegnalazioni();
    }
  }

  get segnalazioniNonLette(): number {
    return this.segnalazioni.filter(s => s.stato === 'nuova').length;
  }

  iniziale(nome: string): string {
    return (nome || '?').charAt(0).toUpperCase();
  }

  // ── Aggiunto goBack() ────────────────────────────
  goBack() { 
    this.navHistory.back('/home'); 
  }

  async confermaEliminazione(utente: any) {
    const alert = await this.alertCtrl.create({
      cssClass: 'peekbox-alert',
      header: 'Elimina Account',
      message: `Sei sicuro di voler eliminare l'account di <strong>${utente.username}</strong> (${utente.email})?<br><br>Questa azione è <strong>irreversibile</strong> e rimuoverà tutti i dati associati.`,
      buttons: [
        { text: 'Annulla', role: 'cancel' },
        {
          text: 'Elimina',
          role: 'destructive',
          handler: () => this.eliminaUtente(utente)
        }
      ]
    });
    await alert.present();
  }

  eliminaUtente(utente: any) {
    this.dbService.adminEliminaUtente(utente.id).subscribe({
      next: async () => {
        this.utenti = this.utenti.filter(u => u.id !== utente.id);
        const toast = await this.alertCtrl.create({
          cssClass: 'peekbox-alert',
          header: 'Account eliminato',
          message: `L'account di ${utente.username} è stato rimosso.`,
          buttons: ['OK']
        });
        await toast.present();
      },
      error: async (err) => {
        const msg = err?.error?.error || 'Errore durante l\'eliminazione.';
        const alert = await this.alertCtrl.create({
          cssClass: 'peekbox-alert',
          header: 'Errore',
          message: msg,
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }

  async eliminaSegnalazione(segnalazione: any) {
    const alert = await this.alertCtrl.create({
      cssClass: 'peekbox-alert',
      header: 'Elimina Segnalazione',
      message: 'Sei sicuro di voler eliminare definitivamente questa segnalazione? Questa azione è irreversibile.',
      buttons: [
        { text: 'Annulla', role: 'cancel' },
        {
          text: 'Elimina',
          role: 'destructive',
          handler: () => this._eliminaSegnalazione(segnalazione)
        }
      ]
    });
    await alert.present();
  }

  private _eliminaSegnalazione(segnalazione: any) {
    this.dbService.adminEliminaSegnalazione(segnalazione.id).subscribe({
      next: () => {
        this.segnalazioni = this.segnalazioni.filter(s => s.id !== segnalazione.id);
        this.mostraToast('Segnalazione eliminata.', 'success');
      },
      error: () => {
        this.mostraToast('Errore durante l\'eliminazione.', 'danger');
      }
    });
  }

  aggiornaStatoSegnalazione(segnalazione: any, nuovoStato: string) {
    this.dbService.adminAggiornaStatoSegnalazione(segnalazione.id, nuovoStato).subscribe({
      next: () => {
        const index = this.segnalazioni.findIndex(s => s.id === segnalazione.id);
        if (index !== -1) {
          this.segnalazioni[index].stato = nuovoStato;
        }
        this.mostraToast('Stato aggiornato.', 'success');
      },
      error: () => {
        this.mostraToast('Errore durante l\'aggiornamento.', 'danger');
      }
    });
  }

  // ── NAVBAR ──────────────────────────────────────────────────
  vaiHome() { 
    this.navHistory.navTo('/home'); 
  }
  
  vaiSearch() { 
    this.navHistory.navTo('/search'); 
  }
  
  vaiProfilo() { 
    this.navHistory.navTo('/area-personale'); 
  }

  inizialeAdmin(): string {
    return this.nomeAdmin.charAt(0) || 'A';
  }

  private mostraToast(messaggio: string, color: string = 'primary') {
    this.toastCtrl.create({
      message: messaggio,
      duration: 2500,
      color,
      position: 'bottom'
    }).then(toast => toast.present());
  }
}