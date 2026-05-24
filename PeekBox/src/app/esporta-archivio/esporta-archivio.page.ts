import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { IonContent, IonIcon, IonSpinner } from '@ionic/angular/standalone';
import { ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  cloudDownloadOutline, filterCircleOutline, documentTextOutline,
  documentOutline, gridOutline, codeSlashOutline, sparkles,
  homeOutline, shareSocialOutline, addOutline, qrCodeOutline,
} from 'ionicons/icons';
import { firstValueFrom } from 'rxjs';

import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

import { DatabaseService } from '../services/database';

@Component({
  selector: 'app-esporta-archivio',
  templateUrl: './esporta-archivio.page.html',
  styleUrls: ['./esporta-archivio.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonContent, IonIcon, IonSpinner,
  ],
})
export class EsportaArchivioPage implements OnInit {

  nomeUtente: string = '';
  exportScope: string = '';
  exportFormat: string = '';
  isExporting: boolean = false;
  logoBase64: string = '';

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private dbService: DatabaseService,
  ) {
    addIcons({
      cloudDownloadOutline, filterCircleOutline, documentTextOutline,
      documentOutline, gridOutline, codeSlashOutline, sparkles,
      homeOutline, shareSocialOutline, addOutline, qrCodeOutline,
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.nomeUtente = (localStorage.getItem('utente_nome') || '').toUpperCase();
  }

  private async caricaLogoBase64(): Promise<void> {
    if (this.logoBase64) return;
    try {
      const response = await fetch('assets/icon/logoTitolo1.png');
      const blob = await response.blob();
      this.logoBase64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      });
    } catch {
      console.warn('[EsportaArchivio] Logo non caricato, PDF senza logo.');
      this.logoBase64 = '';
    }
  }

  setFormat(formato: string) { this.exportFormat = formato; }
  isFormValid(): boolean { return this.exportScope !== '' && this.exportFormat !== ''; }

  private async getDatiReali(): Promise<any[]> {
    const utenteId = localStorage.getItem('utente_id') || '';

    // Carica le box della home (attive + in transito, escluse quelle nel cestino)
    const resBox: any = await firstValueFrom(
      this.dbService.getBox(utenteId) as any
    );
    const boxHome: any[] = resBox?.box ?? resBox ?? [];

    let boxFiltrate: any[];

    if (this.exportScope === 'attive') {
      // Solo box attive = quelle presenti nella home (il server già esclude cestino)
      boxFiltrate = boxHome;
    } else {
      // Intero archivio = home + cestino (box eliminate soft-delete)
      const resCestino: any = await firstValueFrom(
        this.dbService.getBoxEliminate(utenteId) as any
      ).catch(() => ({ box_eliminate: [] }));
      const boxCestino: any[] = resCestino?.box_eliminate ?? [];
      boxFiltrate = [...boxHome, ...boxCestino];
    }

    const righe: any[] = [];
    for (const box of boxFiltrate) {
      try {
        // ✅ FIX 2: la risposta HTTP è { oggetti: [...] }, non un array diretto
        const resOgg: any = await firstValueFrom(
          this.dbService.getOggettiPerBox(box.id) as any
        );
        const oggetti: any[] = resOgg?.oggetti ?? resOgg ?? [];

        const contenutoStr = oggetti.length > 0
          ? oggetti.map((o: any) => o.nome || o.descrizione || '?').join(', ')
          : '— Nessun oggetto —';

        righe.push({
          box: (box.nome || '').toUpperCase(),
          contenuto: contenutoStr,
          nOggetti: oggetti.length,
          data: box.data_creazione
            ? new Date(box.data_creazione).toLocaleDateString('it-IT')
            : '—',
          spazio: box.rif_armadio || '—',
        });
      } catch {
        righe.push({
          box: (box.nome || '').toUpperCase(),
          contenuto: '(errore nel recupero oggetti)',
          nOggetti: 0,
          data: '—',
          spazio: '—',
        });
      }
    }

    return righe;
  }

  async generaReport() {
    if (!this.isFormValid() || this.isExporting) return;
    this.isExporting = true;

    try {
      const datiDaEsportare = await this.getDatiReali();

      if (this.exportFormat === 'json') {
        const jsonStr = JSON.stringify(datiDaEsportare, null, 2);
        this.triggerDownload(jsonStr, 'peekbox_archivio.json', 'application/json');

      } else if (this.exportFormat === 'csv') {
        const csvStr = this.convertiInCSV(datiDaEsportare);
        this.triggerDownload(csvStr, 'peekbox_archivio.csv', 'text/csv');

      } else if (this.exportFormat === 'pdf') {

        await this.caricaLogoBase64();

        const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });

        // 1. HEADER BRANDING CON COLORE PERSONALIZZATO
        let testoInizioX = 14;
        if (this.logoBase64 && this.logoBase64.startsWith('data:image')) {
          try {
            // Calcola proporzioni reali del logo per evitare deformazioni
            await new Promise<void>((resolve) => {
              const img = new Image();
              img.onload = () => {
                const targetH = 14; // altezza fissa in mm
                const targetW = (img.naturalWidth / img.naturalHeight) * targetH;
                doc.addImage(this.logoBase64, 'PNG', 14, 10, targetW, targetH);
                testoInizioX = 14 + targetW + 6;
                resolve();
              };
              img.onerror = () => resolve();
              img.src = this.logoBase64;
            });
          } catch (e) {
            console.warn("Esecuzione fallback testuale per l'intestazione.");
          }
        }

        // Metadati posizionati sulla destra con allineamento pulito
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(100, 116, 139);
        doc.text(`CONFIGURAZIONE: ${this.exportScope === 'tutto' ? 'TUTTO' : 'SOLO BOX ATTIVE'}`, 130, 14);
        doc.text(`DATA GENERAZIONE: ${new Date().toLocaleDateString('it-IT')}`, 130, 18);

        // Sottile linea di divisione geometrica sotto l'header
        doc.setDrawColor(58, 171, 219);
        doc.setLineWidth(0.3);
        doc.line(14, 23, 196, 23);

        // Titolo descrittivo del documento informativo
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(51, 65, 85);
        doc.text('Estratto Analitico dell\'Inventario Spazi e Contenitori', 14, 30);

        // 2. STRUTTURAZIONE DEL RIQUADRO AZZURRO (TABELLA AUTO-FIT)
        // Larghezze calibrate per distribuire il testo sulla stessa riga ed evitare accatastamenti
        autoTable(doc, {
          startY: 35,
          head: [['NOME CONTENITORE / BOX', 'ELENCO OGGETTI INTERNI', 'Q.TÀ', 'ZONA / SPAZIO']],
          body: datiDaEsportare.map((r: any) => [
            r.box,
            r.contenuto,
            r.nOggetti.toString(),
            r.spazio,
          ]),
          theme: 'striped',

          // Stile dell'intestazione azzurra PeekBox
          headStyles: {
            fillColor: [58, 171, 219],
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            fontSize: 8.5,
            cellPadding: 4
          },

          // Stile del corpo dati per massima leggibilità in linea
          bodyStyles: {
            textColor: [30, 41, 59],
            valign: 'middle', // Centratura verticale per mantenere l'allineamento sulla riga
            fontSize: 8,
            cellPadding: 4
          },

          alternateRowStyles: {
            fillColor: [248, 250, 252]
          },

          // CALIBRAZIONE MILLIMETRICA DELLE COLONNE PER IL CORRETTO AFFIANCAMENTO DEI TESTI
          columnStyles: {
            0: { cellWidth: 42, fontStyle: 'bold' },        // Spazio generoso per il nome della scatola
            1: { cellWidth: 'auto', overflow: 'linebreak' }, // Il contenuto sfrutta lo spazio rimanente in larghezza
            2: { cellWidth: 16, halign: 'center' },         // Colonna quantità ristretta
            3: { cellWidth: 36 },                           // Riferimento armadio/spazio (allargato dopo rimozione DATA)
          },

          styles: { font: 'helvetica', overflow: 'linebreak' },
          margin: { left: 14, right: 14 }
        });

        // Footer con numerazione pagine
        const totPagine = (doc as any).internal.getNumberOfPages();
        const dataOggi  = new Date().toLocaleDateString('it-IT');
        for (let i = 1; i <= totPagine; i++) {
          doc.setPage(i);
          doc.setFontSize(8);
          doc.setTextColor(148, 163, 184);
          doc.text(
            `Generato da PeekBox • ${dataOggi} — Pagina ${i} di ${totPagine}`,
            doc.internal.pageSize.getWidth() / 2,
            doc.internal.pageSize.getHeight() - 8,
            { align: 'center' }
          );
        }

        doc.save(`peekbox_report_${this.exportScope}_${new Date().toISOString().slice(0,10)}.pdf`);
      }

      const toast = await this.toastCtrl.create({
        message: '✅ Download avviato con successo!',
        duration: 2500,
        color: 'success',
        position: 'bottom',
      });
      await toast.present();

    } catch (error) {
      console.error('[EsportaArchivio] Errore generazione report:', error);
      const toast = await this.toastCtrl.create({
        message: '❌ Errore durante la generazione. Riprova.',
        duration: 2500,
        color: 'danger',
        position: 'bottom',
      });
      await toast.present();
    } finally {
      this.isExporting = false;
      this.exportScope  = '';
      this.exportFormat = '';
    }
  }

  triggerDownload(contenuto: string, nomeFile: string, tipoMime: string) {
    const blob = new Blob([contenuto], { type: tipoMime });
    const url  = window.URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = nomeFile;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  convertiInCSV(objArray: any[]): string {
    if (!objArray || objArray.length === 0) return '';
    const chiavi  = Object.keys(objArray[0]);
    const csvRows = [chiavi.join(',')];
    for (const riga of objArray) {
      const valori = chiavi.map(chiave => {
        const val = riga[chiave] != null ? riga[chiave].toString().replace(/"/g, '""') : '';
        return `"${val}"`;
      });
      csvRows.push(valori.join(','));
    }
    return csvRows.join('\n');
  }

  vaiHome() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }
}