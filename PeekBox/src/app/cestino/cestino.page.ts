import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonContent, IonIcon,
  AlertController, ToastController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  home, add, qrCodeOutline,
  trashOutline, trashBinOutline, timeOutline,
  shareSocialOutline, refreshOutline,
  person, search
} from 'ionicons/icons';
import { DatabaseService } from '../services/database';
import { NavigationHistoryService } from '../services/navigation-history';

@Component({
  selector: 'app-cestino',
  templateUrl: './cestino.page.html',
  styleUrls: ['./cestino.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DatePipe,
    IonHeader, IonToolbar, IonContent, IonIcon
  ]
})
export class CestinoPage implements OnInit {

  nomeUtente: string = '';
  utenteId: string | null = null;
  boxEliminate: any[] = [];
  isLoading = true;

  constructor(
    private dbService: DatabaseService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private navHistory: NavigationHistoryService
  ) {
    addIcons({
      'home': home,
      'add': add,
      'qr-code-outline': qrCodeOutline,
      'trash-outline': trashOutline,
      'trash-bin-outline': trashBinOutline,
      'time-outline': timeOutline,
      'share-social-outline': shareSocialOutline,
      'refresh-outline': refreshOutline,
      'person': person,
      'search': search
    });
  }

  ngOnInit() {
    this.aggiornaUtente();
    this.caricaBoxEliminate();
  }

  /** Aggiorna dati utente ad ogni visita della pagina */
  ionViewWillEnter() {
    this.aggiornaUtente();
  }

  private aggiornaUtente() {
    this.nomeUtente = localStorage.getItem('utente_nome') || '';
    this.utenteId   = localStorage.getItem('utente_id');
  }

  caricaBoxEliminate() {
    this.isLoading = true;
    this.boxEliminate = [];
    if (!this.utenteId) { this.isLoading = false; return; }

    this.dbService.getBoxEliminate(this.utenteId).subscribe({
      next: (res: any) => {
        const trentaMs = 30 * 24 * 60 * 60 * 1000;
        const ora = Date.now();
        this.boxEliminate = (res.box_eliminate || []).filter((b: any) => {
          const diff = ora - new Date(b.data_eliminazione).getTime();
          return diff <= trentaMs;
        });
        this.isLoading = false;
      },
      error: () => { this.isLoading = false; }
    });
  }

  recuperaBox(box: any) {
    this.boxEliminate = this.boxEliminate.filter(b => b.id !== box.id);
    this.mostraToast('Box recuperata e tornata in Homepage! ✅', 'success');

    this.dbService.ripristinaBox(box.id).subscribe({
      next: () => {
        console.log(`[Cestino] Box ${box.id} ripristinata nel DB.`);
      },
      error: (err: any) => {
        console.error('[Cestino] Errore ripristino, rollback UI:', err);
        this.boxEliminate = [box, ...this.boxEliminate];
        this.mostraToast('Errore durante il recupero. La box è stata rimessa nel cestino.', 'danger');
      }
    });
  }

  async eliminaDefinitivamente(box: any) {
    const alert = await this.alertCtrl.create({
      cssClass: 'peekbox-alert',
      header: 'Conferma Eliminazione',
      message: "Sei sicuro di voler eliminare definitivamente questa box? L'azione non è reversibile.",
      buttons: [
        { text: 'Annulla', role: 'cancel' },
        {
          text: 'Elimina',
          role: 'destructive',
          handler: () => {
            this.boxEliminate = this.boxEliminate.filter(b => b.id !== box.id);
            this.mostraToast('Box eliminata definitivamente.', 'danger');

            this.dbService.eliminaBoxDefinitivo(box.id).subscribe({
              next: () => {
                console.log(`[Cestino] Box ${box.id} eliminata fisicamente dal DB.`);
              },
              error: (err: any) => {
                console.error('[Cestino] Errore eliminazione definitiva, rollback UI:', err);
                this.boxEliminate = [box, ...this.boxEliminate];
                this.mostraToast("Errore durante l'eliminazione. La box è stata ripristinata nel cestino.", 'danger');
              }
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async mostraToast(messaggio: string, color: string) {
    const toast = await this.toastCtrl.create({
      message: messaggio,
      duration: 2500,
      color,
      position: 'bottom'
    });
    await toast.present();
  }

  private parsaData(dataStr: string | Date): number {
    if (dataStr instanceof Date) return dataStr.getTime();
    if (!dataStr) return 0;
    if (typeof dataStr === 'string' && dataStr.includes('/')) {
      const [giorno, mese, anno] = dataStr.split('/');
      return new Date(`${anno}-${mese}-${giorno}T00:00:00`).getTime();
    }
    return new Date(dataStr).getTime();
  }

  calcolaPercentualeScadenza(dataEliminazione: string | Date): number {
    const dataElim = this.parsaData(dataEliminazione as string);
    if (!dataElim) return 0;
    const oggi = Date.now();
    const msInGiorno = 1000 * 60 * 60 * 24;
    const giorniTrascorsi = Math.floor((oggi - dataElim) / msInGiorno);
    let percentuale = (giorniTrascorsi / 30) * 100;
    if (percentuale > 100) percentuale = 100;
    if (percentuale < 0)   percentuale = 0;
    if (giorniTrascorsi >= 1 && percentuale < 5) percentuale = 5;
    return percentuale;
  }

  giorniRimasti(dataEliminazione: string): number {
    const dataElim = this.parsaData(dataEliminazione);
    if (!dataElim) return 0;
    const oggi = Date.now();
    const msInGiorno = 1000 * 60 * 60 * 24;
    const giorniTrascorsi = Math.floor((oggi - dataElim) / msInGiorno);
    return Math.max(0, 30 - giorniTrascorsi);
  }

  /** Naviga alla home senza sporcare la history del browser */
  vaiHome() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }
  navTo(route: string) { this.navHistory.navTo(route); }

}
