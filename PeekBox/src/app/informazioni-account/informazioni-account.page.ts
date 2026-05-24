import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DatabaseService } from '../services/database';
import { addIcons } from 'ionicons';
import {
  personOutline, mailOutline, banOutline, shieldCheckmarkOutline,
  saveOutline, homeOutline, searchOutline, add, scanOutline, person,
  idCardOutline, chatbubblesOutline, paperPlaneOutline, informationCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-informazioni-account',
  templateUrl: './informazioni-account.page.html',
  styleUrls: ['./informazioni-account.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, RouterModule]
})
export class InformazioniAccountPage implements OnInit {

  nome: string = '';
  email: string = '';
  nomeOriginale: string = '';

  vecchiaPassword: string = '';
  nuovaPassword: string = '';
  confermaPassword: string = '';

  datiModificati: boolean = false;
  isSaving: boolean = false;
  feedbackText: string = '';

  utenteId: string | null = null;

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private dbService: DatabaseService,
  ) {
    addIcons({
      personOutline, mailOutline, banOutline, shieldCheckmarkOutline,
      saveOutline, homeOutline, searchOutline, add, scanOutline, person,
      idCardOutline, chatbubblesOutline, paperPlaneOutline, informationCircleOutline
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.utenteId      = localStorage.getItem('utente_id');
    this.nome          = localStorage.getItem('utente_nome')  || '';
    this.email         = localStorage.getItem('utente_email') || '';
    this.nomeOriginale = this.nome;
    this.datiModificati = false;
  }

  verificaModifiche() {
    this.datiModificati =
      (this.nome !== this.nomeOriginale) ||
      (this.nuovaPassword.length > 0);
  }

  async salvaModifiche() {
    if (!this.utenteId) {
      await this.mostraToast('Sessione non valida. Effettua di nuovo il login.', 'danger');
      return;
    }

    const nomeTrimmed = (this.nome || '').trim();
    if (!nomeTrimmed) {
      await this.mostraToast('Il nome non può essere vuoto.', 'warning');
      return;
    }

    if (this.nuovaPassword.length > 0 && this.nuovaPassword !== this.confermaPassword) {
      await this.mostraToast('Le password non coincidono.', 'warning');
      return;
    }

    this.isSaving = true;
    localStorage.setItem('utente_nome', nomeTrimmed);

    this.dbService.aggiornaProfiloUtente(this.utenteId, {
      nome: nomeTrimmed,
    }).subscribe({
      next: () => {
        this.isSaving         = false;
        this.nomeOriginale    = nomeTrimmed;
        this.vecchiaPassword  = '';
        this.nuovaPassword    = '';
        this.confermaPassword = '';
        this.datiModificati   = false;
        this.mostraToast('Profilo aggiornato con successo ✅', 'success');
      },
      error: (err: any) => {
        this.isSaving = false;
        console.error('[InformazioniAccount] Errore DB:', err);
        this.mostraToast('Errore durante il salvataggio. Riprova.', 'danger');
      },
    });
  }

  async inviaFeedback() {
    if (!this.feedbackText.trim()) return;
    console.log('Feedback inviato:', this.feedbackText);
    this.feedbackText = '';
    await this.mostraToast('Grazie per il tuo feedback! 🙏', 'success');
  }

  private async mostraToast(messaggio: string, color: string) {
    const toast = await this.toastCtrl.create({
      message: messaggio,
      duration: 2500,
      color,
      position: 'bottom',
    });
    await toast.present();
  }
}
