import { Component, ViewChild, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

interface Slide {
  img: string;
  title: string;
  desc: string;
  color: string;
}

@Component({
  selector: 'app-benvenuto',
  templateUrl: './benvenuto.page.html',
  styleUrls: ['./benvenuto.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
})
export class BenvenutoPage implements OnDestroy {
  @ViewChild('stageRef', { static: false }) stageRef!: ElementRef<HTMLElement>;

  current = 0;
  showCarousel = false;
  private timer?: ReturnType<typeof setInterval>;

  slides: Slide[] = [
    { img: 'assets/icon/slide1.jpg', title: 'Panoramica completa', desc: 'Appena apri PeekBox trovi tutto ciò che conta: il numero di box tracciati, gli ultimi aggiornamenti e le statistiche del tuo inventario. Un dashboard progettato per darti il controllo in un colpo d\'occhio, senza dover navigare tra mille schermate. Ogni dato è aggiornato in tempo reale e accessibile con un tap. Da qui puoi monitorare il flusso dei tuoi beni, verificare le posizioni e accedere velocemente a ogni funzione senza mai perdere la vista d\'insieme. Il tuo inventario vive in un unico punto di controllo pensato per farti risparmiare tempo.', color: '#3AABDB' },
    { img: 'assets/icon/slide2.jpg', title: 'Scansione QR Code', desc: 'Stampa il QR Code univoco del box, attaccalo sulla scatola e il gioco è fatto. Basta inquadrare con la fotocamera del telefono per aprire il profilo digitale: vedi subito il contenuto, le foto e la posizione esatta. Gli errori di trascrizione e le etichette scritte a mano diventano un ricordo. Il QR Code resiste nel tempo e si può ri-stampare quando serve. Il tutto senza bisogno di connessione: funziona anche offline grazie alla scansione locale.', color: '#7DC740' },
    { img: 'assets/icon/slide3.jpg', title: 'Catalogo organizzato', desc: 'Dimentica le scatole impilate senza senso in cantina o in magazzino. Con PeekBox ogni box ha un nome, una foto, una categoria e una posizione precisa. Puoi raggrupparli per ambienti, tipologie o priorità. Il sistema ti permette di filtrare e ordinare tutto con pochi tocchi, trovando qualsiasi oggetto senza dover aprire una scatola fisica. Il tuo magazzino è finalmente digitale, ordinato e sempre consultabile da qualsiasi dispositivo.', color: '#14b8a6' },
    { img: 'assets/icon/slide4.jpg', title: 'Ricerca intelligente', desc: 'Basta frugare tra gli scaffali o aprire scatole a caso per cercare un oggetto. Digita il nome, una categoria o una posizione e PeekBox mostra i risultati mentre scrivi, con suggerimenti intelligenti basati sulle tue ricerche precedenti. Puoi filtrare per data di inserimento, spazio di appartenenza o stato di archiviazione. I risultati sono ordinati per pertinenza e includono la posizione esatta, cosí da sapere subito dove andare. Ritrovare non è mai stato così immediato.', color: '#a855f7' },
    { img: 'assets/icon/slide5.jpg', title: 'Dettaglio contenuti', desc: 'Apri il profilo digitale di un box e scopri esattamente cosa contiene: foto ad alta risoluzione, quantità precise, note personali e una cronologia completa di ogni movimento. Ogni volta che aggiungi, rimuovi o sposti un oggetto, il sistema registra automaticamente la data e la posizione. Non serve aprire fisicamente la scatola per sapere cosa c\'è dentro. Hai tutto sullo schermo, anche a distanza di mesi, con la certezza di dati sempre aggiornati.', color: '#3AABDB' },
    { img: 'assets/icon/slide6.jpg', title: 'Tracciamento GPS', desc: 'Ogni scansione del QR Code registra la posizione del box e aggiorna la mappa in tempo reale. Cosí sai sempre dove si trova ogni oggetto, anche se l\'hai spostato settimane fa. Questo è particolarmente utile per chi gestisce piú sedi, magazzini o traslochi frequenti. Il sistema crea uno storico degli spostamenti consultabile in qualsiasi momento. Zero oggetti smarriti, zero doppie scatole comprate per errore e zero tempo perso a cercare.', color: '#5A9E2A' },
  ];

  constructor() {
    this.timer = setInterval(() => this.next(), 12000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  prev() {
    this.current = this.current === 0 ? this.slides.length - 1 : this.current - 1;
    this.resetTimer();
  }

  next() {
    this.current = this.current === this.slides.length - 1 ? 0 : this.current + 1;
    this.resetTimer();
  }

  goTo(i: number) {
    this.current = i;
    this.resetTimer();
  }

  toggleCarousel() {
    this.showCarousel = !this.showCarousel;
  }

  private resetTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.next(), 12000);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const stage = this.stageRef?.nativeElement;
    if (!stage) return;
    const px = ((e.clientX / window.innerWidth) - 0.5) * 2;
    const py = ((e.clientY / window.innerHeight) - 0.5) * 2;
    stage.style.setProperty('--px', px.toFixed(3));
    stage.style.setProperty('--py', py.toFixed(3));
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const stage = this.stageRef?.nativeElement;
    if (stage) {
      stage.style.setProperty('--px', '0');
      stage.style.setProperty('--py', '0');
    }
  }
}
