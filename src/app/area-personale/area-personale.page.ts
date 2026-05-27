import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonContent, IonIcon } from '@ionic/angular/standalone';
import { DatabaseService } from '../services/database';
import { ChatbotComponent } from '../components/chatbot/chatbot.component';
import { addIcons } from 'ionicons';
import {
  shieldCheckmarkOutline, logOutOutline, trashOutline,
  timeOutline, locationOutline, informationCircleOutline,
  chevronForwardOutline, cubeOutline, personCircleOutline,
  home, add, qrCodeOutline, shareSocialOutline, closeOutline, chatbubblesOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-area-personale',
  templateUrl: './area-personale.page.html',
  styleUrls: ['./area-personale.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonHeader, IonToolbar, IonContent, IonIcon, ChatbotComponent],
})
export class AreaPersonalePage implements OnInit {

  nomeUtente: string = '';
  emailUtente: string = '';
  isAdmin: boolean = false;
  totaleBox: number = 0;
  totaleArticoli: number = 0;

  vistaCorrente: 'profilo' | 'box-eliminate' = 'profilo';

  // Box eliminate
  boxEliminate: any[] = [];
  isLoadingEliminate: boolean = false;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private dbService: DatabaseService,
    private alertCtrl: AlertController
  ) {
    addIcons({
      'shield-checkmark-outline': shieldCheckmarkOutline,
      'log-out-outline': logOutOutline,
      'trash-outline': trashOutline,
      'time-outline': timeOutline,
      'location-outline': locationOutline,
      'information-circle-outline': informationCircleOutline,
      'chevron-forward-outline': chevronForwardOutline,
      'cube-outline': cubeOutline,
      'person-circle-outline': personCircleOutline,
      'home': home,
      'add': add,
      'qr-code-outline': qrCodeOutline,
      'share-social-outline': shareSocialOutline,
      'chatbubbles-outline': chatbubblesOutline,
      'close-outline': closeOutline,
    });
  }

  ngOnInit() {
    this.caricaProfilo();
  }

  caricaProfilo() {
    this.nomeUtente = localStorage.getItem('utente_nome') || '';
    this.emailUtente = localStorage.getItem('utente_email') || '';
    this.isAdmin = localStorage.getItem('is_admin') === '1';

    const utenteId = localStorage.getItem('utente_id');
    if (!utenteId) {
      this.router.navigate(['/login']);
      return;
    }

    this.dbService.getBox(utenteId).subscribe({
      next: (res: any) => {
        const boxes = res.box || [];
        this.totaleBox = boxes.length;
        this.totaleArticoli = boxes.reduce((sum: number, b: any) => sum + (b.num_oggetti || 0), 0);
      },
      error: (err) => {
        console.error('Errore caricaProfilo', err);
      }
    });
  }

  navTo(path: string) {
    this.navCtrl.navigateForward(path);
  }

  navForward(path: string) {
    this.navCtrl.navigateForward(path);
  }

  /** Logo cliccabile: torna alla home */
  navBack() {
    this.navCtrl.navigateBack('/home');
  }

  vaiHome() {
    this.navCtrl.navigateBack('/home');
  }

  vaiAdmin() {
    this.navCtrl.navigateForward('/admin');
  }

  async confermaLogout() {
    const alert = await this.alertCtrl.create({
      header: 'Conferma Logout',
      message: 'Sei sicuro di voler uscire dal tuo account?',
      buttons: [
        { text: 'Annulla', role: 'cancel' },
        {
          text: 'Esci',
          role: 'destructive',
          handler: () => {
            localStorage.removeItem('token');
            localStorage.removeItem('utente_id');
            localStorage.removeItem('utente_nome');
            localStorage.removeItem('utente_email');
            localStorage.removeItem('tipo_profilo');
            localStorage.removeItem('is_admin');
            this.router.navigate(['/login']);
          }
        }
      ]
    });
    await alert.present();
  }

  badgeClass(dataEl: string): string {
    const giorni = this.giorniRimasti(dataEl);
    if (giorni > 15) return 'badge--blue';
    if (giorni > 7)  return 'badge--amber';
    return 'badge--red';
  }

  giorniRimasti(dataEl: string): number {
    const scadenza = new Date(dataEl);
    scadenza.setDate(scadenza.getDate() + 30);
    const diff = scadenza.getTime() - Date.now();
    return Math.max(0, Math.ceil(diff / 86400000));
  }

  percentualeScadenza(dataEl: string): number {
    const giorni = this.giorniRimasti(dataEl);
    return Math.round((giorni / 30) * 100);
  }
}
