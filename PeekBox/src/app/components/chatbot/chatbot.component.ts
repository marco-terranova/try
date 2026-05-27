import { Component, ViewChild, ElementRef, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatabaseService } from '../../services/database';
import { environment } from '../../../environments/environment';
import { firstValueFrom } from 'rxjs';

interface ChatMessage {
  text: string;
  isUser: boolean;
}

interface CercaRisultato {
  id: number;
  nome: string;
  tipo: 'box' | 'oggetto';
  contesto: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent {
  showChat = false;
  chatMessages: ChatMessage[] = [];
  isTyping = false;
  @ViewChild('chatBody', { static: false }) chatBodyRef!: ElementRef;
  private welcomeShown = false;

  constructor(
    private dbService: DatabaseService,
    private http: HttpClient
  ) {}

  private get apiBase(): string {
    return `${window.location.protocol}//${window.location.hostname}:${environment.backendPort}/api`;
  }

  private get authHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ Authorization: token ? `Bearer ${token}` : '' });
  }

  toggleChat() {
    this.showChat = !this.showChat;
    if (this.showChat) {
      if (!this.welcomeShown) {
        this.welcomeShown = true;
        this.chatMessages.push({
          text: 'Ciao! Sono l\'assistente di PeekBox 🤖\n\nSono qui per aiutarti a gestire le tue box e i tuoi oggetti. Chiedimi pure qualsiasi informazione sul tuo profilo!\n\nDigita "aiuto" per scoprire tutte le domande a cui posso rispondere.',
          isUser: false,
        });
      }
      setTimeout(() => this.scrollChatBottom(), 100);
    }
  }

  async sendMessage(text: string) {
    const msg = text?.trim();
    if (!msg || this.isTyping) return;

    this.chatMessages.push({ text: msg, isUser: true });
    this.isTyping = true;
    setTimeout(() => this.scrollChatBottom(), 50);

    const risposta = await this.processMessage(msg);

    this.chatMessages.push({ text: risposta, isUser: false });
    this.isTyping = false;
    setTimeout(() => this.scrollChatBottom(), 50);
  }

  private scrollChatBottom() {
    try {
      this.chatBodyRef.nativeElement.scrollTop = this.chatBodyRef.nativeElement.scrollHeight;
    } catch {}
  }

  // ─── INTENT PARSING ──────────────────────────────────────

  private async processMessage(msg: string): Promise<string> {
    const lower = msg.toLowerCase().trim();
    const utenteId = localStorage.getItem('utente_id');

    if (!utenteId) {
      return '⚠️ Utente non autenticato. Effettua il login per usare l\'assistente.';
    }

    if (lower === 'aiuto' || lower === 'help' || lower === 'cosa sai fare' || lower === 'comandi' || lower === 'cosa puoi fare') {
      return this.helpResponse();
    }

    const cercaMatch = this.estraiTermineRicerca(lower);
    if (cercaMatch) {
      return await this.cercaOggettiResponse(utenteId, cercaMatch);
    }

    if (lower.includes('cestin') || lower.includes('eliminat') || lower.includes('cancell') || lower.includes('cestino')) {
      return await this.cestinoResponse(utenteId);
    }

    if (lower.includes('preferit') || lower.includes('preferite') || lower.includes('preferiti')) {
      return await this.preferiteResponse(utenteId);
    }

    if (lower.includes('transit') || lower.includes('moving') || lower.includes('in moviment') || lower.includes('spostament')) {
      return await this.transitResponse(utenteId);
    }

    if ((lower.includes('box') || lower.includes('scatol')) && (lower.includes('quant') || lower.includes('conta') || lower.includes('total') || lower.includes('ho'))) {
      return await this.boxResponse(utenteId);
    }

    if (lower.includes('oggett') || lower.includes('articol') || lower.includes('oggetti') || lower.includes('cose che ho')) {
      return await this.oggettiResponse(utenteId);
    }

    if (lower.includes('condivis') || lower.includes('condivid') || lower.includes('con chi') || lower.includes('condivision') || lower.includes('in comune')) {
      return await this.condivisioniResponse(utenteId);
    }

    if (lower.includes('spazi') || lower.includes('armadi') || lower.includes('archivi') || lower.includes('luoghi') || lower.includes('dove tengo')) {
      return await this.spaziResponse(utenteId);
    }

    if (lower.includes('totali') || lower.includes('riepilog') || lower.includes('stat') || lower.includes('dashboard') || lower.includes('sommario') || lower.includes('riassunto')) {
      return await this.totaliResponse(utenteId);
    }

    if (lower.includes('posizion') || lower.includes('dov') || lower.includes('checkpoint') || (lower.includes('ultim') && lower.includes('box'))) {
      return await this.posizioneBoxResponse(utenteId);
    }

    if (lower === 'box' || (lower.includes('box') && !lower.includes('quant') && !lower.includes('preferit'))) {
      return await this.boxResponse(utenteId);
    }

    return (
      'Non ho capito la tua richiesta.\n\n' +
      'Digita "aiuto" per vedere l\'elenco completo di ciò che posso fare per te.'
    );
  }

  private estraiTermineRicerca(lower: string): string | null {
    const pattern = /(?:cerca|trova|dov'[eè]|dove\s+(?:si\s+)?trova|dov[ée]\s+|dov[ée]\s*[èe]\s*|che\s+cos'[eè]\s*|cos'[eè]\s+)(.+)/i;
    const match = lower.match(pattern);
    if (match && match[1].trim().length >= 2) {
      return match[1].trim();
    }
    if (lower.includes('posizione') || lower.includes('dove sta')) {
      const after = lower.replace(/posizione\s+(di\s+)?/, '').replace(/dove\s+sta\s+/, '').trim();
      if (after.length >= 2) return after;
    }
    return null;
  }

  // ─── HELP ─────────────────────────────────────────────────

  private helpResponse(): string {
    return (
      '🤖 Ecco cosa posso fare per te:\n\n' +
      '📦 Box\n' +
      '  "Quante box ho?" — numero totale di box\n' +
      '  "Box preferite?" — elenco delle tue box preferite\n' +
      '  "Box in transito?" — box in modalità moving\n' +
      '  "Cestino?" — box eliminate\n' +
      '  "Posizione box?" — ultima posizione GPS delle tue box\n\n' +
      '📋 Oggetti\n' +
      '  "Quanti oggetti ho?" — totale articoli in tutte le box\n' +
      '  "Cerca [nome]?" — cerca un oggetto o una box per nome\n' +
      '  "Dove si trova [oggetto]?" — trova in quale box si trova un oggetto\n\n' +
      '🤝 Condivisioni\n' +
      '  "Condivisioni?" — chi condivide con te e con chi\n\n' +
      '🏠 Spazi\n' +
      '  "Spazi?" — i tuoi armadi e archivi\n\n' +
      '📊 Riepilogo\n' +
      '  "Totali?" — riepilogo completo del tuo profilo\n\n' +
      'Digita una delle domande per iniziare! 🚀'
    );
  }

  // ─── BOX ──────────────────────────────────────────────────

  private async boxResponse(utenteId: string): Promise<string> {
    try {
      const res: any = await firstValueFrom(this.dbService.getBox(utenteId));
      const boxes = res?.box || [];
      const totale = boxes.length;
      const preferite = boxes.filter((b: any) => b.is_preferito).length;
      const inTransito = boxes.filter((b: any) => b.moving_mode).length;

      if (totale === 0) {
        return '📦 Non hai ancora creato nessuna box. Vai su "Crea Box" per iniziare!';
      }

      return (
        `📦 Hai ${totale} box in totale.\n` +
        `⭐ ${preferite} preferite\n` +
        `🚚 ${inTransito} in transito\n` +
        `📁 ${totale - preferite - inTransito} standard\n\n` +
        'Per maggiori dettagli prova: "box preferite", "box in transito" o "cestino".'
      );
    } catch {
      return '❌ Errore nel recupero delle box. Riprova più tardi.';
    }
  }

  private async preferiteResponse(utenteId: string): Promise<string> {
    try {
      const res: any = await firstValueFrom(this.dbService.getBox(utenteId));
      const preferite = (res?.box || []).filter((b: any) => b.is_preferito);

      if (preferite.length === 0) {
        return '⭐ Non hai box preferite. Apri una box e clicca sulla stellina per aggiungerla ai preferiti.';
      }

      const nomi = preferite.map((b: any, i: number) => `${i + 1}. ${b.nome}`).join('\n');
      return `⭐ Box Preferite (${preferite.length})\n\n${nomi}`;
    } catch {
      return '❌ Errore nel recupero delle box preferite.';
    }
  }

  private async transitResponse(utenteId: string): Promise<string> {
    try {
      const res: any = await firstValueFrom(this.dbService.getBox(utenteId));
      const inTransito = (res?.box || []).filter((b: any) => b.moving_mode);

      if (inTransito.length === 0) {
        return '🚚 Nessuna box in transito al momento.';
      }

      const nomi = inTransito.map((b: any, i: number) => `${i + 1}. ${b.nome}`).join('\n');
      return `🚚 Box in Transito (${inTransito.length})\n\n${nomi}\n\nLe box in transito sono quelle che hai spostato o stai spostando da un luogo all\'altro.`;
    } catch {
      return '❌ Errore nel recupero delle box in transito.';
    }
  }

  private async cestinoResponse(utenteId: string): Promise<string> {
    try {
      const res: any = await firstValueFrom(this.dbService.getBoxEliminate(utenteId));
      const eliminate = res?.box_eliminate || [];

      if (eliminate.length === 0) {
        return '🗑️ Nessuna box eliminata. Il cestino è vuoto.';
      }

      const nomi = eliminate.map((b: any, i: number) => `${i + 1}. ${b.nome}`).join('\n');
      return `🗑️ Box Eliminate (${eliminate.length})\n\n${nomi}\n\nVerranno rimosse definitivamente dopo 30 giorni dall'eliminazione.`;
    } catch {
      return '❌ Errore nel recupero del cestino.';
    }
  }

  // ─── OGGETTI ──────────────────────────────────────────────

  private async oggettiResponse(utenteId: string): Promise<string> {
    try {
      const res: any = await firstValueFrom(this.dbService.getBox(utenteId));
      const boxes = res?.box || [];
      const totaleOggetti = boxes.reduce((sum: number, b: any) => sum + (b.num_oggetti || 0), 0);
      const boxConOggetti = boxes.filter((b: any) => (b.num_oggetti || 0) > 0).length;

      if (totaleOggetti === 0) {
        return '📋 Non hai ancora inserito oggetti nelle tue box. Aggiungili dalla sezione box!';
      }

      return (
        `📋 Hai ${totaleOggetti} oggetti in totale.\n` +
        `Distribuiti in ${boxConOggetti} box su ${boxes.length}.\n` +
        `Media di ~${boxes.length > 0 ? Math.round(totaleOggetti / boxes.length) : 0} oggetti per box.\n\n` +
        'Per cercare un oggetto specifico, prova: "Cerca [nome oggetto]".'
      );
    } catch {
      return '❌ Errore nel conteggio degli oggetti.';
    }
  }

  // ─── CONDIVISIONI ─────────────────────────────────────────

  private async condivisioniResponse(utenteId: string): Promise<string> {
    try {
      const [condRes, pendingRes, ricevuteRes]: any[] = await Promise.all([
        firstValueFrom(this.dbService.getArmadi(utenteId)),
        firstValueFrom(this.dbService.getCondivisioniPending(utenteId)),
        firstValueFrom(this.dbService.getArchividCondivisiConMe(utenteId)),
      ]);

      const armadi = condRes?.armadi || [];
      const condivisiDaMe = armadi.filter((a: any) => a.ruolo_condivisione === null);
      const pending = pendingRes?.pending || 0;
      const ricevute = ricevuteRes?.archivi_condivisi || [];

      let lines = '🤝 Condivisioni\n\n';

      if (condivisiDaMe.length === 0 && ricevute.length === 0 && pending === 0) {
        lines += 'Non hai ancora condiviso nulla. Condividi un archivio dalla sezione "Gestione Spazi".';
        return lines;
      }

      if (condivisiDaMe.length > 0) {
        lines += `I tuoi archivi:\n`;
        for (const a of condivisiDaMe) {
          lines += `  ${a.nome}\n`;
        }
        lines += '\n';
      }

      if (ricevute.length > 0) {
        lines += `Archivi condivisi con te:\n`;
        for (const r of ricevute) {
          lines += `  ${r.nome} (${r.ruolo === 'editor' ? 'modifica' : 'solo lettura'})\n`;
        }
        lines += '\n';
      }

      if (pending > 0) {
        lines += `Hai ${pending} richiesta${pending > 1 ? 'e' : ''} di condivisione in attesa.\n\n`;
      }

      lines += '💡 Vai su "Gestione Spazi" per gestire le condivisioni.';
      return lines;
    } catch {
      return '❌ Errore nel recupero delle condivisioni.';
    }
  }

  // ─── SPAZI ────────────────────────────────────────────────

  private async spaziResponse(utenteId: string): Promise<string> {
    try {
      const [armadiRes, boxRes]: any[] = await Promise.all([
        firstValueFrom(this.dbService.getArmadi(utenteId)),
        firstValueFrom(this.dbService.getBox(utenteId)),
      ]);

      const armadi = armadiRes?.armadi || [];
      const boxes = boxRes?.box || [];

      if (armadi.length === 0) {
        return '🏠 Non hai ancora creato spazi. Vai su "Gestione Spazi" per crearne uno.';
      }

      let lines = `🏠 I tuoi spazi (${armadi.length})\n\n`;
      for (const a of armadi) {
        const boxCount = boxes.filter((b: any) => String(b.rif_armadio) === String(a.id)).length;
        const proprietario = a.ruolo_condivisione ? ` (di ${a.proprietario_username})` : '';
        lines += `  ${a.nome}${proprietario} — ${boxCount} box\n`;
      }

      return lines;
    } catch {
      return '❌ Errore nel recupero degli spazi.';
    }
  }

  // ─── TOTALI ──────────────────────────────────────────────

  private async totaliResponse(utenteId: string): Promise<string> {
    try {
      const [boxRes, armadiRes]: any[] = await Promise.all([
        firstValueFrom(this.dbService.getBox(utenteId)),
        firstValueFrom(this.dbService.getArmadi(utenteId)),
      ]);

      const boxes = boxRes?.box || [];
      const armadi = armadiRes?.armadi || [];
      const totOggetti = boxes.reduce((sum: number, b: any) => sum + (b.num_oggetti || 0), 0);
      const preferite = boxes.filter((b: any) => b.is_preferito).length;
      const inTransito = boxes.filter((b: any) => b.moving_mode).length;

      if (boxes.length === 0 && armadi.length === 0) {
        return '📊 Il tuo profilo è ancora vuoto. Crea un armadio e aggiungi le tue box per iniziare!';
      }

      return (
        '📊 Riepilogo del tuo profilo\n\n' +
        `🏠 Spazi: ${armadi.length}\n` +
        `📦 Box totali: ${boxes.length}\n` +
        `⭐ Preferite: ${preferite}\n` +
        `🚚 In transito: ${inTransito}\n` +
        `📋 Oggetti totali: ${totOggetti}\n` +
        `📦 Media oggetti/box: ${boxes.length > 0 ? Math.round(totOggetti / boxes.length) : 0}`
      );
    } catch {
      return '❌ Errore nel recupero dei dati. Riprova più tardi.';
    }
  }

  // ─── CERCA OGGETTI ───────────────────────────────────────

  private async cercaOggettiResponse(utenteId: string, termine: string): Promise<string> {
    try {
      const res: any = await firstValueFrom(
        this.http.get(`${this.apiBase}/cerca?q=${encodeURIComponent(termine)}`, { headers: this.authHeaders })
      );
      const risultati: CercaRisultato[] = res?.risultati || [];

      if (risultati.length === 0) {
        return `🔍 Non ho trovato nulla per "${termine}".\n\nProva con un termine diverso o verifica di aver scritto correttamente il nome.`;
      }

      const oggetti = risultati.filter(r => r.tipo === 'oggetto');
      const boxes = risultati.filter(r => r.tipo === 'box');

      let lines = `🔍 Ho trovato ${risultati.length} risultato${risultati.length > 1 ? 'i' : ''} per "${termine}":\n\n`;

      if (oggetti.length > 0) {
        lines += `📋 Oggetti (${oggetti.length}):\n`;
        for (const o of oggetti) {
          lines += `  ${o.nome} — si trova in "${o.contesto}"\n`;
        }
        lines += '\n';
      }

      if (boxes.length > 0) {
        lines += `📦 Box (${boxes.length}):\n`;
        for (const b of boxes) {
          lines += `  ${b.nome} — archivio: "${b.contesto}"\n`;
        }
        lines += '\n';
      }

      lines += 'Per sapere dove si trova un oggetto nel dettaglio, scrivi: "Dove si trova [nome oggetto]?".';
      return lines;
    } catch {
      return '❌ Errore durante la ricerca. Riprova più tardi.';
    }
  }

  private async doveSiTrovaOggettoResponse(utenteId: string, termine: string): Promise<string> {
    try {
      const res: any = await firstValueFrom(
        this.http.get(`${this.apiBase}/cerca?q=${encodeURIComponent(termine)}`, { headers: this.authHeaders })
      );
      const risultati: CercaRisultato[] = res?.risultati || [];
      const oggetti = risultati.filter(r => r.tipo === 'oggetto');

      if (oggetti.length === 0) {
        const boxes = risultati.filter(r => r.tipo === 'box');
        if (boxes.length > 0) {
          return `🔍 "${termine}" corrisponde a ${boxes.length > 0 ? 'una' : ''} box, non a un oggetto.\n\nLa box "${boxes[0].nome}" si trova nell'archivio "${boxes[0].contesto}".\n\nPer cercare oggetti, usa: "Cerca [nome oggetto]".`;
        }
        return `🔍 Non ho trovato nessun oggetto chiamato "${termine}".\n\nProva con un termine diverso.`;
      }

      if (oggetti.length === 1) {
        const o = oggetti[0];
        return await this.dettaglioPosizioneOggetto(utenteId, o);
      }

      let lines = `🔍 Ho trovato ${oggetti.length} oggetti per "${termine}":\n\n`;
      for (const o of oggetti) {
        lines += `  ${o.nome} — si trova in "${o.contesto}"\n`;
      }
      lines += '\nSe vuoi più dettagli, specifica meglio il nome dell\'oggetto.';
      return lines;
    } catch {
      return '❌ Errore durante la ricerca. Riprova più tardi.';
    }
  }

  private async dettaglioPosizioneOggetto(utenteId: string, oggetto: CercaRisultato): Promise<string> {
    try {
      const boxRes: any = await firstValueFrom(this.dbService.getBox(utenteId));
      const boxes = boxRes?.box || [];
      const boxTrovata = boxes.find((b: any) => b.nome.toLowerCase() === oggetto.contesto.toLowerCase());

      if (!boxTrovata) {
        return `📋 L'oggetto "${oggetto.nome}" si trova nella box "${oggetto.contesto}".`;
      }

      let risposta = `📋 L'oggetto "${oggetto.nome}" si trova:\n\n`;

      try {
        const singolaRes: any = await firstValueFrom(this.dbService.getBoxSingola(boxTrovata.id));
        const dettagli = singolaRes?.box;
        if (dettagli) {
          risposta += `📦 Box: ${dettagli.nome}\n`;
          risposta += `🏠 Archivio: ${dettagli.nome_armadio}\n`;
        }
      } catch {
        risposta += `📦 Box: ${oggetto.contesto}\n`;
      }

      try {
        const cpRes: any = await firstValueFrom(
          this.http.get(`${this.apiBase}/checkpoint/${boxTrovata.id}/ultimo`, { headers: this.authHeaders })
        );
        if (cpRes && cpRes.latitudine) {
          const lat = cpRes.latitudine;
          const lng = cpRes.longitudine;
          const label = cpRes.label || '';
          risposta += `📍 Posizione: ${lat}, ${lng}${label ? ` (${label})` : ''}\n`;
          risposta += `🕐 Ultimo aggiornamento: ${cpRes.timestamp ? new Date(cpRes.timestamp).toLocaleString('it-IT') : 'N/D'}`;
        } else {
          risposta += `📍 Nessuna posizione GPS registrata per questa box.`;
        }
      } catch {
        risposta += `📍 Nessuna posizione GPS registrata per questa box.`;
      }

      return risposta;
    } catch {
      return `📋 L'oggetto "${oggetto.nome}" si trova nella box "${oggetto.contesto}".`;
    }
  }

  // ─── POSIZIONE BOX ───────────────────────────────────────

  private async posizioneBoxResponse(utenteId: string): Promise<string> {
    try {
      const cpRes: any = await firstValueFrom(
        this.http.get(`${this.apiBase}/checkpoint/tutti/${utenteId}`, { headers: this.authHeaders })
      );
      const checkpoints = cpRes?.checkpoints || [];

      if (checkpoints.length === 0) {
        return '📍 Nessuna posizione GPS registrata. Scansiona il QR code di una box per registrarne la posizione.';
      }

      const perBox = new Map<string, any>();
      for (const cp of checkpoints) {
        if (!perBox.has(cp.box_nome) || new Date(cp.timestamp) > new Date(perBox.get(cp.box_nome).timestamp)) {
          perBox.set(cp.box_nome, cp);
        }
      }

      let lines = `📍 Ultime posizioni (${perBox.size} box)\n\n`;
      let idx = 1;
      for (const [nome, cp] of perBox) {
        const label = cp.label ? ` (${cp.label})` : '';
        lines += `${idx}. ${nome}\n   Archivio: ${cp.armadio_nome}\n   Posizione: ${cp.latitudine}, ${cp.longitudine}${label}\n\n`;
        idx++;
      }

      return lines.trim();
    } catch {
      return '❌ Errore nel recupero delle posizioni. Riprova più tardi.';
    }
  }
}
