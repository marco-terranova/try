import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IonContent } from '@ionic/angular/standalone';
import { DatabaseService } from '../services/database';

@Component({
  selector: 'app-area-personale',
  templateUrl: './area-personale.page.html',
  styleUrls: ['./area-personale.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonContent],
})
export class AreaPersonalePage implements OnInit {

  @ViewChild('chatBody') chatBody!: ElementRef;
  @ViewChild('carouselTrack') carouselTrack!: ElementRef;

  nomeUtente: string = '';
  emailUtente: string = '';
  isAdmin: boolean = false;
  totaleBox: number = 0;
  totaleArticoli: number = 0;
  totaleSpazi: number = 0;

  vistaCorrente: 'profilo' | 'box-eliminate' = 'profilo';
  slideIndex: number = 0;

  boxEliminate: any[] = [];
  isLoadingEliminate: boolean = false;

  showChat = false;
  chatMessages: { text: string; isUser: boolean }[] = [];
  isTyping = false;

  private faq: { key: RegExp; response: string }[] = [
    { key: /box|scatola|contenitore/i, response: 'Puoi creare e gestire le tue box dalla sezione Home. Ogni box ha un QR code univoco per identificarla e tracciarne gli spostamenti.' },
    { key: /qr|codice|scan/i, response: 'I QR code vengono generati automaticamente per ogni box. Puoi stamparli e attaccarli fisicamente, oppure scansionarli con l\'app per accedere al contenuto.' },
    { key: /elimina|cestino|cancell/i, response: 'Le box eliminate restano nel cestino per 30 giorni. Puoi visualizzarle e recuperarle dalla sezione Box Eliminate del tuo profilo.' },
    { key: /transit|zona|spostamento/i, response: 'La Transit Zone mostra lo storico completo degli spostamenti delle tue box, con data, ora e posizione.' },
    { key: /spazio|archivio|armadio|geofence/i, response: 'Puoi organizzare le box in spazi fisici con geolocalizzazione. La geofence ti avvisa quando una box lascia un\'area consentita.' },
    { key: /esporta|pdf|csv|backup/i, response: 'Dalla sezione Esporta Archivio puoi scaricare l\'intero inventario in formato PDF o CSV per tenerne una copia.' },
    { key: /informazioni|account|profilo/i, response: 'Nella sezione Informazioni puoi modificare i tuoi dati personali, email e preferenze dell\'account.' },
    { key: /numero|conta|quanti/i, response: `Al momento hai ${this.totaleBox} box e ${this.totaleArticoli} articoli nel tuo archivio.` },
    { key: /ciao|salve|hey|buongiorno|buonasera/i, response: 'Ciao! 👋 Sono l\'assistente virtuale di PeekBox. Come posso aiutarti oggi?' },
    { key: /grazie|thanks|grazie mille/i, response: 'Di nulla! 😊 Se hai altre domande, sono qui per aiutarti.' },
    { key: /aiuto|help|cosa|funzioni|funzionalit/i, response: 'Posso aiutarti con: box e QR code, eliminazioni, transit zone, spazi e geofence, esportazione archivio, e impostazioni account. Cosa ti interessa?' },
  ];

  private fallbackResponse = 'Non ho capito la tua domanda. Prova a chiedermi informazioni su box, QR code, eliminazioni, spazi o esportazione archivio!';

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private dbService: DatabaseService,
    private alertCtrl: AlertController
  ) {}

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

    this.dbService.getArmadi(utenteId).subscribe({
      next: (res: any) => {
        this.totaleSpazi = Array.isArray(res) ? res.length : 0;
      },
      error: (err) => {
        console.error('Errore caricamento armadi', err);
      }
    });
  }

  navForward(path: string) {
    this.navCtrl.navigateForward(path);
  }

  vaiHome() {
    this.navCtrl.navigateBack('/home');
  }

  vaiAdmin() {
    this.navCtrl.navigateForward('/admin');
  }

  vaiBoxEliminate() {
    this.vistaCorrente = 'box-eliminate';
    this.caricaBoxEliminate();
  }

  caricaBoxEliminate() {
    const utenteId = localStorage.getItem('utente_id');
    if (!utenteId) return;
    this.isLoadingEliminate = true;
    this.dbService.getBoxEliminate(utenteId).subscribe({
      next: (res: any) => {
        this.boxEliminate = res.box_eliminate || [];
        this.isLoadingEliminate = false;
      },
      error: (err) => {
        console.error('Errore caricamento box eliminate', err);
        this.boxEliminate = [];
        this.isLoadingEliminate = false;
      }
    });
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

  toggleChat() {
    this.showChat = !this.showChat;
    if (this.showChat && this.chatMessages.length === 0) {
      setTimeout(() => {
        this.chatMessages.push({
          text: 'Ciao! 👋 Sono l\'assistente virtuale di PeekBox. Come posso aiutarti? Puoi chiedermi informazioni su box, QR code, eliminazioni, spazi e molto altro!',
          isUser: false
        });
        this.scrollChatBottom();
      }, 600);
    }
  }

  sendMessage(text: string) {
    const msg = (text || '').trim();
    if (!msg || this.isTyping) return;
    this.chatMessages.push({ text: msg, isUser: true });
    this.scrollChatBottom();
    this.isTyping = true;
    const delay = 400 + Math.random() * 1200;
    setTimeout(() => {
      const response = this.getResponse(msg);
      this.chatMessages.push({ text: response, isUser: false });
      this.isTyping = false;
      this.scrollChatBottom();
    }, delay);
  }

  private getResponse(input: string): string {
    const lower = input.toLowerCase();
    for (const item of this.faq) {
      if (item.key.test(lower)) return item.response;
    }
    return this.fallbackResponse;
  }

  onCarouselScroll() {
    const el = this.carouselTrack?.nativeElement;
    if (!el) return;
    const cards = el.querySelectorAll('.cs-card');
    const center = el.scrollLeft + el.offsetWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card: HTMLElement, i: number) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(center - cardCenter);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    this.slideIndex = closest;
  }

  private scrollChatBottom() {
    setTimeout(() => {
      if (this.chatBody?.nativeElement) {
        this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
      }
    }, 50);
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
