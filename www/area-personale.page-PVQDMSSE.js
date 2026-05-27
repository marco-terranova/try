import {
  AlertController
} from "./chunk-UWSSEREE.js";
import {
  DatabaseService,
  environment
} from "./chunk-5G3PJOGU.js";
import {
  add,
  addIcons,
  chatbubblesOutline,
  chevronForwardOutline,
  closeOutline,
  cubeOutline,
  home,
  informationCircleOutline,
  locationOutline,
  logOutOutline,
  personCircleOutline,
  qrCodeOutline,
  shareSocialOutline,
  shieldCheckmarkOutline,
  timeOutline,
  trashOutline
} from "./chunk-4ITIBTO3.js";
import "./chunk-QZD35OHH.js";
import "./chunk-W7NNY2EY.js";
import "./chunk-YLZQGFKX.js";
import "./chunk-PR7SIM3B.js";
import "./chunk-RT2MVNNC.js";
import "./chunk-Z7NU4PDE.js";
import "./chunk-CP2EOGJ7.js";
import "./chunk-FNXMZBUR.js";
import "./chunk-IL2GRLAC.js";
import "./chunk-L5H2I7KE.js";
import "./chunk-VOBJCNOY.js";
import "./chunk-AX4DESTC.js";
import "./chunk-F3JJ4YWB.js";
import "./chunk-QOQL43QQ.js";
import "./chunk-IWO643NX.js";
import "./chunk-IVBL4Y7V.js";
import "./chunk-SHN3YRK4.js";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar
} from "./chunk-VSLPI6WN.js";
import {
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  HttpHeaders,
  NavController,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  ViewChild,
  firstValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-2AAOITSV.js";
import "./chunk-WX3UGKUY.js";
import "./chunk-ZANXXOCD.js";
import "./chunk-246BTOSI.js";
import "./chunk-GOVNEWKT.js";
import "./chunk-5NFAA243.js";
import "./chunk-YIMR4ORA.js";
import "./chunk-6GY55RSK.js";
import "./chunk-7D2IXJO2.js";
import "./chunk-FZZSIR43.js";
import "./chunk-X4NBNE3H.js";
import "./chunk-KZNT2LA2.js";
import "./chunk-2DRUHDYH.js";
import "./chunk-YAS4LRVC.js";
import {
  __async
} from "./chunk-QXFS4N4X.js";

// src/app/components/chatbot/chatbot.component.ts
var _c0 = ["chatBody"];
function ChatbotComponent__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 20);
    \u0275\u0275elementEnd();
  }
}
function ChatbotComponent__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "line", 21)(2, "line", 22);
    \u0275\u0275elementEnd();
  }
}
function ChatbotComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r2 = ctx.$implicit;
    \u0275\u0275classProp("cm--u", msg_r2.isUser);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r2.isUser ? "\u{1F464}" : "\u{1F916}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r2.text);
  }
}
function ChatbotComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 27)(2, "div", 27)(3, "div", 27);
    \u0275\u0275elementEnd();
  }
}
var _ChatbotComponent = class _ChatbotComponent {
  constructor(dbService, http) {
    this.dbService = dbService;
    this.http = http;
    this.showChat = false;
    this.chatMessages = [];
    this.isTyping = false;
    this.welcomeShown = false;
  }
  get apiBase() {
    return `${window.location.protocol}//${window.location.hostname}:${environment.backendPort}/api`;
  }
  get authHeaders() {
    const token = localStorage.getItem("token");
    return new HttpHeaders({ Authorization: token ? `Bearer ${token}` : "" });
  }
  toggleChat() {
    this.showChat = !this.showChat;
    if (this.showChat) {
      if (!this.welcomeShown) {
        this.welcomeShown = true;
        this.chatMessages.push({
          text: `Ciao! Sono l'assistente di PeekBox \u{1F916}

Sono qui per aiutarti a gestire le tue box e i tuoi oggetti. Chiedimi pure qualsiasi informazione sul tuo profilo!

Digita "aiuto" per scoprire tutte le domande a cui posso rispondere.`,
          isUser: false
        });
      }
      setTimeout(() => this.scrollChatBottom(), 100);
    }
  }
  sendMessage(text) {
    return __async(this, null, function* () {
      const msg = text?.trim();
      if (!msg || this.isTyping)
        return;
      this.chatMessages.push({ text: msg, isUser: true });
      this.isTyping = true;
      setTimeout(() => this.scrollChatBottom(), 50);
      const risposta = yield this.processMessage(msg);
      this.chatMessages.push({ text: risposta, isUser: false });
      this.isTyping = false;
      setTimeout(() => this.scrollChatBottom(), 50);
    });
  }
  scrollChatBottom() {
    try {
      this.chatBodyRef.nativeElement.scrollTop = this.chatBodyRef.nativeElement.scrollHeight;
    } catch {
    }
  }
  // ─── INTENT PARSING ──────────────────────────────────────
  processMessage(msg) {
    return __async(this, null, function* () {
      const lower = msg.toLowerCase().trim();
      const utenteId = localStorage.getItem("utente_id");
      if (!utenteId) {
        return "\u26A0\uFE0F Utente non autenticato. Effettua il login per usare l'assistente.";
      }
      if (lower === "aiuto" || lower === "help" || lower === "cosa sai fare" || lower === "comandi" || lower === "cosa puoi fare") {
        return this.helpResponse();
      }
      const cercaMatch = this.estraiTermineRicerca(lower);
      if (cercaMatch) {
        return yield this.cercaOggettiResponse(utenteId, cercaMatch);
      }
      if (lower.includes("cestin") || lower.includes("eliminat") || lower.includes("cancell") || lower.includes("cestino")) {
        return yield this.cestinoResponse(utenteId);
      }
      if (lower.includes("preferit") || lower.includes("preferite") || lower.includes("preferiti")) {
        return yield this.preferiteResponse(utenteId);
      }
      if (lower.includes("transit") || lower.includes("moving") || lower.includes("in moviment") || lower.includes("spostament")) {
        return yield this.transitResponse(utenteId);
      }
      if ((lower.includes("box") || lower.includes("scatol")) && (lower.includes("quant") || lower.includes("conta") || lower.includes("total") || lower.includes("ho"))) {
        return yield this.boxResponse(utenteId);
      }
      if (lower.includes("oggett") || lower.includes("articol") || lower.includes("oggetti") || lower.includes("cose che ho")) {
        return yield this.oggettiResponse(utenteId);
      }
      if (lower.includes("condivis") || lower.includes("condivid") || lower.includes("con chi") || lower.includes("condivision") || lower.includes("in comune")) {
        return yield this.condivisioniResponse(utenteId);
      }
      if (lower.includes("spazi") || lower.includes("armadi") || lower.includes("archivi") || lower.includes("luoghi") || lower.includes("dove tengo")) {
        return yield this.spaziResponse(utenteId);
      }
      if (lower.includes("totali") || lower.includes("riepilog") || lower.includes("stat") || lower.includes("dashboard") || lower.includes("sommario") || lower.includes("riassunto")) {
        return yield this.totaliResponse(utenteId);
      }
      if (lower.includes("posizion") || lower.includes("dov") || lower.includes("checkpoint") || lower.includes("ultim") && lower.includes("box")) {
        return yield this.posizioneBoxResponse(utenteId);
      }
      if (lower === "box" || lower.includes("box") && !lower.includes("quant") && !lower.includes("preferit")) {
        return yield this.boxResponse(utenteId);
      }
      return `Non ho capito la tua richiesta.

Digita "aiuto" per vedere l'elenco completo di ci\xF2 che posso fare per te.`;
    });
  }
  estraiTermineRicerca(lower) {
    const pattern = /(?:cerca|trova|dov'[eè]|dove\s+(?:si\s+)?trova|dov[ée]\s+|dov[ée]\s*[èe]\s*|che\s+cos'[eè]\s*|cos'[eè]\s+)(.+)/i;
    const match = lower.match(pattern);
    if (match && match[1].trim().length >= 2) {
      return match[1].trim();
    }
    if (lower.includes("posizione") || lower.includes("dove sta")) {
      const after = lower.replace(/posizione\s+(di\s+)?/, "").replace(/dove\s+sta\s+/, "").trim();
      if (after.length >= 2)
        return after;
    }
    return null;
  }
  // ─── HELP ─────────────────────────────────────────────────
  helpResponse() {
    return '\u{1F916} Ecco cosa posso fare per te:\n\n\u{1F4E6} Box\n  "Quante box ho?" \u2014 numero totale di box\n  "Box preferite?" \u2014 elenco delle tue box preferite\n  "Box in transito?" \u2014 box in modalit\xE0 moving\n  "Cestino?" \u2014 box eliminate\n  "Posizione box?" \u2014 ultima posizione GPS delle tue box\n\n\u{1F4CB} Oggetti\n  "Quanti oggetti ho?" \u2014 totale articoli in tutte le box\n  "Cerca [nome]?" \u2014 cerca un oggetto o una box per nome\n  "Dove si trova [oggetto]?" \u2014 trova in quale box si trova un oggetto\n\n\u{1F91D} Condivisioni\n  "Condivisioni?" \u2014 chi condivide con te e con chi\n\n\u{1F3E0} Spazi\n  "Spazi?" \u2014 i tuoi armadi e archivi\n\n\u{1F4CA} Riepilogo\n  "Totali?" \u2014 riepilogo completo del tuo profilo\n\nDigita una delle domande per iniziare! \u{1F680}';
  }
  // ─── BOX ──────────────────────────────────────────────────
  boxResponse(utenteId) {
    return __async(this, null, function* () {
      try {
        const res = yield firstValueFrom(this.dbService.getBox(utenteId));
        const boxes = res?.box || [];
        const totale = boxes.length;
        const preferite = boxes.filter((b) => b.is_preferito).length;
        const inTransito = boxes.filter((b) => b.moving_mode).length;
        if (totale === 0) {
          return '\u{1F4E6} Non hai ancora creato nessuna box. Vai su "Crea Box" per iniziare!';
        }
        return `\u{1F4E6} Hai ${totale} box in totale.
\u2B50 ${preferite} preferite
\u{1F69A} ${inTransito} in transito
\u{1F4C1} ${totale - preferite - inTransito} standard

Per maggiori dettagli prova: "box preferite", "box in transito" o "cestino".`;
      } catch {
        return "\u274C Errore nel recupero delle box. Riprova pi\xF9 tardi.";
      }
    });
  }
  preferiteResponse(utenteId) {
    return __async(this, null, function* () {
      try {
        const res = yield firstValueFrom(this.dbService.getBox(utenteId));
        const preferite = (res?.box || []).filter((b) => b.is_preferito);
        if (preferite.length === 0) {
          return "\u2B50 Non hai box preferite. Apri una box e clicca sulla stellina per aggiungerla ai preferiti.";
        }
        const nomi = preferite.map((b, i) => `${i + 1}. ${b.nome}`).join("\n");
        return `\u2B50 Box Preferite (${preferite.length})

${nomi}`;
      } catch {
        return "\u274C Errore nel recupero delle box preferite.";
      }
    });
  }
  transitResponse(utenteId) {
    return __async(this, null, function* () {
      try {
        const res = yield firstValueFrom(this.dbService.getBox(utenteId));
        const inTransito = (res?.box || []).filter((b) => b.moving_mode);
        if (inTransito.length === 0) {
          return "\u{1F69A} Nessuna box in transito al momento.";
        }
        const nomi = inTransito.map((b, i) => `${i + 1}. ${b.nome}`).join("\n");
        return `\u{1F69A} Box in Transito (${inTransito.length})

${nomi}

Le box in transito sono quelle che hai spostato o stai spostando da un luogo all'altro.`;
      } catch {
        return "\u274C Errore nel recupero delle box in transito.";
      }
    });
  }
  cestinoResponse(utenteId) {
    return __async(this, null, function* () {
      try {
        const res = yield firstValueFrom(this.dbService.getBoxEliminate(utenteId));
        const eliminate = res?.box_eliminate || [];
        if (eliminate.length === 0) {
          return "\u{1F5D1}\uFE0F Nessuna box eliminata. Il cestino \xE8 vuoto.";
        }
        const nomi = eliminate.map((b, i) => `${i + 1}. ${b.nome}`).join("\n");
        return `\u{1F5D1}\uFE0F Box Eliminate (${eliminate.length})

${nomi}

Verranno rimosse definitivamente dopo 30 giorni dall'eliminazione.`;
      } catch {
        return "\u274C Errore nel recupero del cestino.";
      }
    });
  }
  // ─── OGGETTI ──────────────────────────────────────────────
  oggettiResponse(utenteId) {
    return __async(this, null, function* () {
      try {
        const res = yield firstValueFrom(this.dbService.getBox(utenteId));
        const boxes = res?.box || [];
        const totaleOggetti = boxes.reduce((sum, b) => sum + (b.num_oggetti || 0), 0);
        const boxConOggetti = boxes.filter((b) => (b.num_oggetti || 0) > 0).length;
        if (totaleOggetti === 0) {
          return "\u{1F4CB} Non hai ancora inserito oggetti nelle tue box. Aggiungili dalla sezione box!";
        }
        return `\u{1F4CB} Hai ${totaleOggetti} oggetti in totale.
Distribuiti in ${boxConOggetti} box su ${boxes.length}.
Media di ~${boxes.length > 0 ? Math.round(totaleOggetti / boxes.length) : 0} oggetti per box.

Per cercare un oggetto specifico, prova: "Cerca [nome oggetto]".`;
      } catch {
        return "\u274C Errore nel conteggio degli oggetti.";
      }
    });
  }
  // ─── CONDIVISIONI ─────────────────────────────────────────
  condivisioniResponse(utenteId) {
    return __async(this, null, function* () {
      try {
        const [condRes, pendingRes, ricevuteRes] = yield Promise.all([
          firstValueFrom(this.dbService.getArmadi(utenteId)),
          firstValueFrom(this.dbService.getCondivisioniPending(utenteId)),
          firstValueFrom(this.dbService.getArchividCondivisiConMe(utenteId))
        ]);
        const armadi = condRes?.armadi || [];
        const condivisiDaMe = armadi.filter((a) => a.ruolo_condivisione === null);
        const pending = pendingRes?.pending || 0;
        const ricevute = ricevuteRes?.archivi_condivisi || [];
        let lines = "\u{1F91D} Condivisioni\n\n";
        if (condivisiDaMe.length === 0 && ricevute.length === 0 && pending === 0) {
          lines += 'Non hai ancora condiviso nulla. Condividi un archivio dalla sezione "Gestione Spazi".';
          return lines;
        }
        if (condivisiDaMe.length > 0) {
          lines += `I tuoi archivi:
`;
          for (const a of condivisiDaMe) {
            lines += `  ${a.nome}
`;
          }
          lines += "\n";
        }
        if (ricevute.length > 0) {
          lines += `Archivi condivisi con te:
`;
          for (const r of ricevute) {
            lines += `  ${r.nome} (${r.ruolo === "editor" ? "modifica" : "solo lettura"})
`;
          }
          lines += "\n";
        }
        if (pending > 0) {
          lines += `Hai ${pending} richiesta${pending > 1 ? "e" : ""} di condivisione in attesa.

`;
        }
        lines += '\u{1F4A1} Vai su "Gestione Spazi" per gestire le condivisioni.';
        return lines;
      } catch {
        return "\u274C Errore nel recupero delle condivisioni.";
      }
    });
  }
  // ─── SPAZI ────────────────────────────────────────────────
  spaziResponse(utenteId) {
    return __async(this, null, function* () {
      try {
        const [armadiRes, boxRes] = yield Promise.all([
          firstValueFrom(this.dbService.getArmadi(utenteId)),
          firstValueFrom(this.dbService.getBox(utenteId))
        ]);
        const armadi = armadiRes?.armadi || [];
        const boxes = boxRes?.box || [];
        if (armadi.length === 0) {
          return '\u{1F3E0} Non hai ancora creato spazi. Vai su "Gestione Spazi" per crearne uno.';
        }
        let lines = `\u{1F3E0} I tuoi spazi (${armadi.length})

`;
        for (const a of armadi) {
          const boxCount = boxes.filter((b) => String(b.rif_armadio) === String(a.id)).length;
          const proprietario = a.ruolo_condivisione ? ` (di ${a.proprietario_username})` : "";
          lines += `  ${a.nome}${proprietario} \u2014 ${boxCount} box
`;
        }
        return lines;
      } catch {
        return "\u274C Errore nel recupero degli spazi.";
      }
    });
  }
  // ─── TOTALI ──────────────────────────────────────────────
  totaliResponse(utenteId) {
    return __async(this, null, function* () {
      try {
        const [boxRes, armadiRes] = yield Promise.all([
          firstValueFrom(this.dbService.getBox(utenteId)),
          firstValueFrom(this.dbService.getArmadi(utenteId))
        ]);
        const boxes = boxRes?.box || [];
        const armadi = armadiRes?.armadi || [];
        const totOggetti = boxes.reduce((sum, b) => sum + (b.num_oggetti || 0), 0);
        const preferite = boxes.filter((b) => b.is_preferito).length;
        const inTransito = boxes.filter((b) => b.moving_mode).length;
        if (boxes.length === 0 && armadi.length === 0) {
          return "\u{1F4CA} Il tuo profilo \xE8 ancora vuoto. Crea un armadio e aggiungi le tue box per iniziare!";
        }
        return `\u{1F4CA} Riepilogo del tuo profilo

\u{1F3E0} Spazi: ${armadi.length}
\u{1F4E6} Box totali: ${boxes.length}
\u2B50 Preferite: ${preferite}
\u{1F69A} In transito: ${inTransito}
\u{1F4CB} Oggetti totali: ${totOggetti}
\u{1F4E6} Media oggetti/box: ${boxes.length > 0 ? Math.round(totOggetti / boxes.length) : 0}`;
      } catch {
        return "\u274C Errore nel recupero dei dati. Riprova pi\xF9 tardi.";
      }
    });
  }
  // ─── CERCA OGGETTI ───────────────────────────────────────
  cercaOggettiResponse(utenteId, termine) {
    return __async(this, null, function* () {
      try {
        const res = yield firstValueFrom(this.http.get(`${this.apiBase}/cerca?q=${encodeURIComponent(termine)}`, { headers: this.authHeaders }));
        const risultati = res?.risultati || [];
        if (risultati.length === 0) {
          return `\u{1F50D} Non ho trovato nulla per "${termine}".

Prova con un termine diverso o verifica di aver scritto correttamente il nome.`;
        }
        const oggetti = risultati.filter((r) => r.tipo === "oggetto");
        const boxes = risultati.filter((r) => r.tipo === "box");
        let lines = `\u{1F50D} Ho trovato ${risultati.length} risultato${risultati.length > 1 ? "i" : ""} per "${termine}":

`;
        if (oggetti.length > 0) {
          lines += `\u{1F4CB} Oggetti (${oggetti.length}):
`;
          for (const o of oggetti) {
            lines += `  ${o.nome} \u2014 si trova in "${o.contesto}"
`;
          }
          lines += "\n";
        }
        if (boxes.length > 0) {
          lines += `\u{1F4E6} Box (${boxes.length}):
`;
          for (const b of boxes) {
            lines += `  ${b.nome} \u2014 archivio: "${b.contesto}"
`;
          }
          lines += "\n";
        }
        lines += 'Per sapere dove si trova un oggetto nel dettaglio, scrivi: "Dove si trova [nome oggetto]?".';
        return lines;
      } catch {
        return "\u274C Errore durante la ricerca. Riprova pi\xF9 tardi.";
      }
    });
  }
  doveSiTrovaOggettoResponse(utenteId, termine) {
    return __async(this, null, function* () {
      try {
        const res = yield firstValueFrom(this.http.get(`${this.apiBase}/cerca?q=${encodeURIComponent(termine)}`, { headers: this.authHeaders }));
        const risultati = res?.risultati || [];
        const oggetti = risultati.filter((r) => r.tipo === "oggetto");
        if (oggetti.length === 0) {
          const boxes = risultati.filter((r) => r.tipo === "box");
          if (boxes.length > 0) {
            return `\u{1F50D} "${termine}" corrisponde a ${boxes.length > 0 ? "una" : ""} box, non a un oggetto.

La box "${boxes[0].nome}" si trova nell'archivio "${boxes[0].contesto}".

Per cercare oggetti, usa: "Cerca [nome oggetto]".`;
          }
          return `\u{1F50D} Non ho trovato nessun oggetto chiamato "${termine}".

Prova con un termine diverso.`;
        }
        if (oggetti.length === 1) {
          const o = oggetti[0];
          return yield this.dettaglioPosizioneOggetto(utenteId, o);
        }
        let lines = `\u{1F50D} Ho trovato ${oggetti.length} oggetti per "${termine}":

`;
        for (const o of oggetti) {
          lines += `  ${o.nome} \u2014 si trova in "${o.contesto}"
`;
        }
        lines += "\nSe vuoi pi\xF9 dettagli, specifica meglio il nome dell'oggetto.";
        return lines;
      } catch {
        return "\u274C Errore durante la ricerca. Riprova pi\xF9 tardi.";
      }
    });
  }
  dettaglioPosizioneOggetto(utenteId, oggetto) {
    return __async(this, null, function* () {
      try {
        const boxRes = yield firstValueFrom(this.dbService.getBox(utenteId));
        const boxes = boxRes?.box || [];
        const boxTrovata = boxes.find((b) => b.nome.toLowerCase() === oggetto.contesto.toLowerCase());
        if (!boxTrovata) {
          return `\u{1F4CB} L'oggetto "${oggetto.nome}" si trova nella box "${oggetto.contesto}".`;
        }
        let risposta = `\u{1F4CB} L'oggetto "${oggetto.nome}" si trova:

`;
        try {
          const singolaRes = yield firstValueFrom(this.dbService.getBoxSingola(boxTrovata.id));
          const dettagli = singolaRes?.box;
          if (dettagli) {
            risposta += `\u{1F4E6} Box: ${dettagli.nome}
`;
            risposta += `\u{1F3E0} Archivio: ${dettagli.nome_armadio}
`;
          }
        } catch {
          risposta += `\u{1F4E6} Box: ${oggetto.contesto}
`;
        }
        try {
          const cpRes = yield firstValueFrom(this.http.get(`${this.apiBase}/checkpoint/${boxTrovata.id}/ultimo`, { headers: this.authHeaders }));
          if (cpRes && cpRes.latitudine) {
            const lat = cpRes.latitudine;
            const lng = cpRes.longitudine;
            const label = cpRes.label || "";
            risposta += `\u{1F4CD} Posizione: ${lat}, ${lng}${label ? ` (${label})` : ""}
`;
            risposta += `\u{1F550} Ultimo aggiornamento: ${cpRes.timestamp ? new Date(cpRes.timestamp).toLocaleString("it-IT") : "N/D"}`;
          } else {
            risposta += `\u{1F4CD} Nessuna posizione GPS registrata per questa box.`;
          }
        } catch {
          risposta += `\u{1F4CD} Nessuna posizione GPS registrata per questa box.`;
        }
        return risposta;
      } catch {
        return `\u{1F4CB} L'oggetto "${oggetto.nome}" si trova nella box "${oggetto.contesto}".`;
      }
    });
  }
  // ─── POSIZIONE BOX ───────────────────────────────────────
  posizioneBoxResponse(utenteId) {
    return __async(this, null, function* () {
      try {
        const cpRes = yield firstValueFrom(this.http.get(`${this.apiBase}/checkpoint/tutti/${utenteId}`, { headers: this.authHeaders }));
        const checkpoints = cpRes?.checkpoints || [];
        if (checkpoints.length === 0) {
          return "\u{1F4CD} Nessuna posizione GPS registrata. Scansiona il QR code di una box per registrarne la posizione.";
        }
        const perBox = /* @__PURE__ */ new Map();
        for (const cp of checkpoints) {
          if (!perBox.has(cp.box_nome) || new Date(cp.timestamp) > new Date(perBox.get(cp.box_nome).timestamp)) {
            perBox.set(cp.box_nome, cp);
          }
        }
        let lines = `\u{1F4CD} Ultime posizioni (${perBox.size} box)

`;
        let idx = 1;
        for (const [nome, cp] of perBox) {
          const label = cp.label ? ` (${cp.label})` : "";
          lines += `${idx}. ${nome}
   Archivio: ${cp.armadio_nome}
   Posizione: ${cp.latitudine}, ${cp.longitudine}${label}

`;
          idx++;
        }
        return lines.trim();
      } catch {
        return "\u274C Errore nel recupero delle posizioni. Riprova pi\xF9 tardi.";
      }
    });
  }
};
_ChatbotComponent.\u0275fac = function ChatbotComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChatbotComponent)(\u0275\u0275directiveInject(DatabaseService), \u0275\u0275directiveInject(HttpClient));
};
_ChatbotComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatbotComponent, selectors: [["app-chatbot"]], viewQuery: function ChatbotComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chatBodyRef = _t.first);
  }
}, decls: 23, vars: 10, consts: [["chatBody", ""], ["chatInputRef", ""], [1, "chat-fab", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "22", "height", "22", 4, "ngIf"], [1, "chat-panel"], [1, "cph"], [1, "cph-ico"], [1, "cph-i"], [1, "cph-n"], [1, "cph-s"], [1, "chat-body"], ["class", "cm", 3, "cm--u", 4, "ngFor", "ngForOf"], ["class", "cm-t", 4, "ngIf"], [1, "chat-f"], ["placeholder", "Scrivi...", 1, "cfi", 3, "keydown.enter", "disabled"], [1, "cfs", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "16", "height", "16"], ["x1", "22", "y1", "2", "x2", "11", "y2", "13"], ["points", "22 2 15 22 11 13 2 9 22 2"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "22", "height", "22"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "cm"], [1, "cm-a"], [1, "cm-b"], [1, "cm-t"], [1, "ctd"]], template: function ChatbotComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function ChatbotComponent_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleChat());
    });
    \u0275\u0275template(1, ChatbotComponent__svg_svg_1_Template, 2, 0, "svg", 3)(2, ChatbotComponent__svg_svg_2_Template, 3, 0, "svg", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "span", 6);
    \u0275\u0275text(6, "\u{1F916}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "span", 8);
    \u0275\u0275text(9, "Assistente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 9);
    \u0275\u0275text(11, "Online");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 10, 0);
    \u0275\u0275template(14, ChatbotComponent_div_14_Template, 5, 4, "div", 11)(15, ChatbotComponent_div_15_Template, 4, 0, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 13)(17, "input", 14, 1);
    \u0275\u0275listener("keydown.enter", function ChatbotComponent_Template_input_keydown_enter_17_listener() {
      \u0275\u0275restoreView(_r1);
      const chatInputRef_r3 = \u0275\u0275reference(18);
      ctx.sendMessage(chatInputRef_r3.value);
      return \u0275\u0275resetView(chatInputRef_r3.value = "");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 15);
    \u0275\u0275listener("click", function ChatbotComponent_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const chatInputRef_r3 = \u0275\u0275reference(18);
      ctx.sendMessage(chatInputRef_r3.value);
      return \u0275\u0275resetView(chatInputRef_r3.value = "");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 16);
    \u0275\u0275element(21, "line", 17)(22, "polygon", 18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("chat-fab--active", ctx.showChat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.showChat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showChat);
    \u0275\u0275advance();
    \u0275\u0275classProp("chat-panel--open", ctx.showChat);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx.chatMessages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isTyping);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isTyping);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isTyping);
  }
}, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.chat-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 100px;\n  right: 24px;\n  width: 54px;\n  height: 54px;\n  border-radius: 50%;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #A8FF78,\n      #7DC740);\n  color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 6px 20px rgba(125, 199, 64, 0.4);\n  cursor: pointer;\n  z-index: 999;\n  transition:\n    transform 0.2s,\n    box-shadow 0.2s,\n    opacity 0.3s;\n}\n.chat-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n  box-shadow: 0 10px 28px rgba(125, 199, 64, 0.5);\n}\n.chat-fab[_ngcontent-%COMP%]:active {\n  transform: scale(0.94);\n}\n.chat-fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n}\n.chat-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 164px;\n  right: 24px;\n  width: 340px;\n  max-height: 460px;\n  background: #FFFFFF;\n  border-radius: 20px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  display: flex;\n  flex-direction: column;\n  z-index: 998;\n  transform: translateY(20px);\n  opacity: 0;\n  pointer-events: none;\n  transition: transform 0.3s ease, opacity 0.3s ease;\n}\n.chat-panel--open[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n  pointer-events: all;\n}\n.cph[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 18px 12px;\n  border-bottom: 1px solid rgba(58, 171, 219, 0.18);\n}\n.cph[_ngcontent-%COMP%]   .cph-ico[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.cph[_ngcontent-%COMP%]   .cph-i[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.cph[_ngcontent-%COMP%]   .cph-i[_ngcontent-%COMP%]   .cph-n[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #0F172A;\n}\n.cph[_ngcontent-%COMP%]   .cph-i[_ngcontent-%COMP%]   .cph-s[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #7DC740;\n  font-weight: 600;\n}\n.chat-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 300px;\n}\n.chat-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.chat-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.chat-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(58, 171, 219, 0.18);\n  border-radius: 4px;\n}\n.cm[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  max-width: 90%;\n}\n.cm--u[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  flex-direction: row-reverse;\n}\n.cm[_ngcontent-%COMP%]   .cm-a[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.cm[_ngcontent-%COMP%]   .cm-b[_ngcontent-%COMP%] {\n  background: #EBF5FB;\n  padding: 8px 13px;\n  border-radius: 14px 14px 14px 4px;\n  font-size: 0.82rem;\n  color: #0F172A;\n  line-height: 1.45;\n  word-break: break-word;\n  white-space: pre-line;\n}\n.cm--u[_ngcontent-%COMP%]   .cm-b[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3AABDB,\n      #1A7FA8);\n  color: #FFFFFF;\n  border-radius: 14px 14px 4px 14px;\n}\n.cm-t[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  padding: 8px 14px;\n}\n.cm-t[_ngcontent-%COMP%]   .ctd[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #94A3B8;\n  animation: _ngcontent-%COMP%_chat-bounce 1.2s ease-in-out infinite;\n}\n.cm-t[_ngcontent-%COMP%]   .ctd[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.cm-t[_ngcontent-%COMP%]   .ctd[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes _ngcontent-%COMP%_chat-bounce {\n  0%, 80%, 100% {\n    transform: scale(0.6);\n    opacity: 0.4;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.chat-f[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 10px 14px 14px;\n  border-top: 1px solid rgba(58, 171, 219, 0.18);\n}\n.chat-f[_ngcontent-%COMP%]   .cfi[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1.5px solid rgba(58, 171, 219, 0.18);\n  border-radius: 50px;\n  padding: 8px 14px;\n  font-size: 0.82rem;\n  outline: none;\n  background: #F4F7F9;\n  color: #0F172A;\n  font-family: inherit;\n}\n.chat-f[_ngcontent-%COMP%]   .cfi[_ngcontent-%COMP%]:focus {\n  border-color: #3AABDB;\n}\n.chat-f[_ngcontent-%COMP%]   .cfi[_ngcontent-%COMP%]::placeholder {\n  color: #94A3B8;\n}\n.chat-f[_ngcontent-%COMP%]   .cfs[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #A8FF78,\n      #7DC740);\n  color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.15s;\n  flex-shrink: 0;\n}\n.chat-f[_ngcontent-%COMP%]   .cfs[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n}\n.chat-f[_ngcontent-%COMP%]   .cfs[_ngcontent-%COMP%]:active {\n  transform: scale(0.92);\n}\n.chat-f[_ngcontent-%COMP%]   .cfs[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=chatbot.component.css.map */"] });
var ChatbotComponent = _ChatbotComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatbotComponent, [{
    type: Component,
    args: [{ selector: "app-chatbot", standalone: true, imports: [CommonModule], template: `<button class="chat-fab" (click)="toggleChat()" [class.chat-fab--active]="showChat">
  <svg *ngIf="!showChat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  <svg *ngIf="showChat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
</button>

<div class="chat-panel" [class.chat-panel--open]="showChat">
  <div class="cph">
    <span class="cph-ico">\u{1F916}</span>
    <div class="cph-i">
      <span class="cph-n">Assistente</span>
      <span class="cph-s">Online</span>
    </div>
  </div>
  <div class="chat-body" #chatBody>
    <div *ngFor="let msg of chatMessages" class="cm" [class.cm--u]="msg.isUser">
      <span class="cm-a">{{ msg.isUser ? '\u{1F464}' : '\u{1F916}' }}</span>
      <div class="cm-b">{{ msg.text }}</div>
    </div>
    <div *ngIf="isTyping" class="cm-t">
      <div class="ctd"></div><div class="ctd"></div><div class="ctd"></div>
    </div>
  </div>
  <div class="chat-f">
    <input class="cfi" #chatInputRef (keydown.enter)="sendMessage(chatInputRef.value); chatInputRef.value = ''" placeholder="Scrivi..." [disabled]="isTyping" />
    <button class="cfs" (click)="sendMessage(chatInputRef.value); chatInputRef.value = ''" [disabled]="isTyping">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
    </button>
  </div>
</div>
`, styles: ["/* src/app/components/chatbot/chatbot.component.scss */\n.chat-fab {\n  position: fixed;\n  bottom: 100px;\n  right: 24px;\n  width: 54px;\n  height: 54px;\n  border-radius: 50%;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #A8FF78,\n      #7DC740);\n  color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 6px 20px rgba(125, 199, 64, 0.4);\n  cursor: pointer;\n  z-index: 999;\n  transition:\n    transform 0.2s,\n    box-shadow 0.2s,\n    opacity 0.3s;\n}\n.chat-fab:hover {\n  transform: scale(1.08);\n  box-shadow: 0 10px 28px rgba(125, 199, 64, 0.5);\n}\n.chat-fab:active {\n  transform: scale(0.94);\n}\n.chat-fab svg {\n  display: block;\n}\n.chat-panel {\n  position: fixed;\n  bottom: 164px;\n  right: 24px;\n  width: 340px;\n  max-height: 460px;\n  background: #FFFFFF;\n  border-radius: 20px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  display: flex;\n  flex-direction: column;\n  z-index: 998;\n  transform: translateY(20px);\n  opacity: 0;\n  pointer-events: none;\n  transition: transform 0.3s ease, opacity 0.3s ease;\n}\n.chat-panel--open {\n  transform: translateY(0);\n  opacity: 1;\n  pointer-events: all;\n}\n.cph {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 18px 12px;\n  border-bottom: 1px solid rgba(58, 171, 219, 0.18);\n}\n.cph .cph-ico {\n  font-size: 1.5rem;\n}\n.cph .cph-i {\n  display: flex;\n  flex-direction: column;\n}\n.cph .cph-i .cph-n {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #0F172A;\n}\n.cph .cph-i .cph-s {\n  font-size: 0.7rem;\n  color: #7DC740;\n  font-weight: 600;\n}\n.chat-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 300px;\n}\n.chat-body::-webkit-scrollbar {\n  width: 4px;\n}\n.chat-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.chat-body::-webkit-scrollbar-thumb {\n  background: rgba(58, 171, 219, 0.18);\n  border-radius: 4px;\n}\n.cm {\n  display: flex;\n  gap: 8px;\n  max-width: 90%;\n}\n.cm--u {\n  align-self: flex-end;\n  flex-direction: row-reverse;\n}\n.cm .cm-a {\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.cm .cm-b {\n  background: #EBF5FB;\n  padding: 8px 13px;\n  border-radius: 14px 14px 14px 4px;\n  font-size: 0.82rem;\n  color: #0F172A;\n  line-height: 1.45;\n  word-break: break-word;\n  white-space: pre-line;\n}\n.cm--u .cm-b {\n  background:\n    linear-gradient(\n      135deg,\n      #3AABDB,\n      #1A7FA8);\n  color: #FFFFFF;\n  border-radius: 14px 14px 4px 14px;\n}\n.cm-t {\n  display: flex;\n  gap: 4px;\n  padding: 8px 14px;\n}\n.cm-t .ctd {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #94A3B8;\n  animation: chat-bounce 1.2s ease-in-out infinite;\n}\n.cm-t .ctd:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.cm-t .ctd:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes chat-bounce {\n  0%, 80%, 100% {\n    transform: scale(0.6);\n    opacity: 0.4;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.chat-f {\n  display: flex;\n  gap: 8px;\n  padding: 10px 14px 14px;\n  border-top: 1px solid rgba(58, 171, 219, 0.18);\n}\n.chat-f .cfi {\n  flex: 1;\n  border: 1.5px solid rgba(58, 171, 219, 0.18);\n  border-radius: 50px;\n  padding: 8px 14px;\n  font-size: 0.82rem;\n  outline: none;\n  background: #F4F7F9;\n  color: #0F172A;\n  font-family: inherit;\n}\n.chat-f .cfi:focus {\n  border-color: #3AABDB;\n}\n.chat-f .cfi::placeholder {\n  color: #94A3B8;\n}\n.chat-f .cfs {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #A8FF78,\n      #7DC740);\n  color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.15s;\n  flex-shrink: 0;\n}\n.chat-f .cfs:hover {\n  transform: scale(1.08);\n}\n.chat-f .cfs:active {\n  transform: scale(0.92);\n}\n.chat-f .cfs svg {\n  display: block;\n}\n/*# sourceMappingURL=chatbot.component.css.map */\n"] }]
  }], () => [{ type: DatabaseService }, { type: HttpClient }], { chatBodyRef: [{
    type: ViewChild,
    args: ["chatBody", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatbotComponent, { className: "ChatbotComponent", filePath: "src/app/components/chatbot/chatbot.component.ts", lineNumber: 27 });
})();

// src/app/area-personale/area-personale.page.ts
function AreaPersonalePage_ng_container_12_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "ion-icon", 54);
    \u0275\u0275text(2, " Amministratore ");
    \u0275\u0275elementEnd();
  }
}
function AreaPersonalePage_ng_container_12_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function AreaPersonalePage_ng_container_12_div_73_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vaiAdmin());
    });
    \u0275\u0275elementStart(1, "div", 56);
    \u0275\u0275element(2, "ion-icon", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40)(4, "span", 41);
    \u0275\u0275text(5, "Pannello Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 42);
    \u0275\u0275text(7, "Accedi al pannello di controllo amministrativo");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "ion-icon", 43);
    \u0275\u0275elementEnd();
  }
}
function AreaPersonalePage_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 21)(2, "div", 22)(3, "div", 23)(4, "div", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AreaPersonalePage_ng_container_12_div_11_Template, 3, 0, "div", 28);
    \u0275\u0275elementStart(12, "div", 29)(13, "div", 30)(14, "span", 31);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 32);
    \u0275\u0275text(17, "Box");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "div", 33);
    \u0275\u0275elementStart(19, "div", 30)(20, "span", 31);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 32);
    \u0275\u0275text(23, "Articoli");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "button", 34);
    \u0275\u0275listener("click", function AreaPersonalePage_ng_container_12_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confermaLogout());
    });
    \u0275\u0275element(25, "ion-icon", 35);
    \u0275\u0275text(26, " Esci dall'account ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 36)(28, "div", 37);
    \u0275\u0275listener("click", function AreaPersonalePage_ng_container_12_Template_div_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navForward("/informazioni-account"));
    });
    \u0275\u0275elementStart(29, "div", 38);
    \u0275\u0275element(30, "ion-icon", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 40)(32, "span", 41);
    \u0275\u0275text(33, "Informazioni Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 42);
    \u0275\u0275text(35, "Visualizza e modifica i tuoi dati personali");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(36, "ion-icon", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 37);
    \u0275\u0275listener("click", function AreaPersonalePage_ng_container_12_Template_div_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navForward("/cestino"));
    });
    \u0275\u0275elementStart(38, "div", 44);
    \u0275\u0275element(39, "ion-icon", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 40)(41, "span", 41);
    \u0275\u0275text(42, "Box Eliminate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 42);
    \u0275\u0275text(44, "Recupera o cancella definitivamente le tue scatole");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(45, "ion-icon", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 37);
    \u0275\u0275listener("click", function AreaPersonalePage_ng_container_12_Template_div_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navForward("/transit-zone"));
    });
    \u0275\u0275elementStart(47, "div", 46);
    \u0275\u0275element(48, "ion-icon", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 40)(50, "span", 41);
    \u0275\u0275text(51, "Transit Zone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 42);
    \u0275\u0275text(53, "Gestisci le spedizioni e i pacchi in transito");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(54, "ion-icon", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 37);
    \u0275\u0275listener("click", function AreaPersonalePage_ng_container_12_Template_div_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navForward("/gestione-spazi"));
    });
    \u0275\u0275elementStart(56, "div", 48);
    \u0275\u0275element(57, "ion-icon", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 40)(59, "span", 41);
    \u0275\u0275text(60, "Gestione Spazi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 42);
    \u0275\u0275text(62, "Aggiungi, modifica o elimina i tuoi spazi");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(63, "ion-icon", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 37);
    \u0275\u0275listener("click", function AreaPersonalePage_ng_container_12_Template_div_click_64_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navForward("/esporta-archivio"));
    });
    \u0275\u0275elementStart(65, "div", 50);
    \u0275\u0275element(66, "ion-icon", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 40)(68, "span", 41);
    \u0275\u0275text(69, "Esporta Archivio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 42);
    \u0275\u0275text(71, "Scarica una copia completa del tuo inventario");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(72, "ion-icon", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(73, AreaPersonalePage_ng_container_12_div_73_Template, 9, 0, "div", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.nomeUtente ? ctx_r1.nomeUtente.charAt(0).toUpperCase() : "U", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.nomeUtente || "Utente");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.emailUtente || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAdmin);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.totaleBox);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.totaleArticoli);
    \u0275\u0275advance(52);
    \u0275\u0275property("ngIf", ctx_r1.isAdmin);
  }
}
function AreaPersonalePage_ng_container_13_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "div", 68);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Caricamento in corso...");
    \u0275\u0275elementEnd()();
  }
}
function AreaPersonalePage_ng_container_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Nessuna box eliminata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Il tuo cestino \xE8 vuoto. Le box eliminate appariranno qui per 30 giorni.");
    \u0275\u0275elementEnd()();
  }
}
function AreaPersonalePage_ng_container_13_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "h3", 75);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 76);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 77);
    \u0275\u0275element(7, "div", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 79);
    \u0275\u0275element(9, "ion-icon", 80);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const box_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(box_r4.nome);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.badgeClass(box_r4.data_eliminazione));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.giorniRimasti(box_r4.data_eliminazione), " gg rimasti ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.percentualeScadenza(box_r4.data_eliminazione), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Eliminata il ", \u0275\u0275pipeBind2(11, 6, box_r4.data_eliminazione, "dd/MM/yyyy"), " ");
  }
}
function AreaPersonalePage_ng_container_13_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275template(1, AreaPersonalePage_ng_container_13_div_11_div_1_Template, 12, 9, "div", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.boxEliminate);
  }
}
function AreaPersonalePage_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 58)(2, "div", 59)(3, "h1", 60);
    \u0275\u0275element(4, "ion-icon", 61);
    \u0275\u0275text(5, " BOX ELIMINATE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 62);
    \u0275\u0275text(7, "Le box vengono rimosse definitivamente dopo 30 giorni dall'eliminazione.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 63);
    \u0275\u0275template(9, AreaPersonalePage_ng_container_13_div_9_Template, 4, 0, "div", 64)(10, AreaPersonalePage_ng_container_13_div_10_Template, 7, 0, "div", 65)(11, AreaPersonalePage_ng_container_13_div_11_Template, 2, 1, "div", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingEliminate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingEliminate && ctx_r1.boxEliminate.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingEliminate && ctx_r1.boxEliminate.length > 0);
  }
}
var _AreaPersonalePage = class _AreaPersonalePage {
  constructor(router, navCtrl, dbService, alertCtrl) {
    this.router = router;
    this.navCtrl = navCtrl;
    this.dbService = dbService;
    this.alertCtrl = alertCtrl;
    this.nomeUtente = "";
    this.emailUtente = "";
    this.isAdmin = false;
    this.totaleBox = 0;
    this.totaleArticoli = 0;
    this.vistaCorrente = "profilo";
    this.boxEliminate = [];
    this.isLoadingEliminate = false;
    addIcons({
      "shield-checkmark-outline": shieldCheckmarkOutline,
      "log-out-outline": logOutOutline,
      "trash-outline": trashOutline,
      "time-outline": timeOutline,
      "location-outline": locationOutline,
      "information-circle-outline": informationCircleOutline,
      "chevron-forward-outline": chevronForwardOutline,
      "cube-outline": cubeOutline,
      "person-circle-outline": personCircleOutline,
      "home": home,
      "add": add,
      "qr-code-outline": qrCodeOutline,
      "share-social-outline": shareSocialOutline,
      "chatbubbles-outline": chatbubblesOutline,
      "close-outline": closeOutline
    });
  }
  ngOnInit() {
    this.caricaProfilo();
  }
  caricaProfilo() {
    this.nomeUtente = localStorage.getItem("utente_nome") || "";
    this.emailUtente = localStorage.getItem("utente_email") || "";
    this.isAdmin = localStorage.getItem("is_admin") === "1";
    const utenteId = localStorage.getItem("utente_id");
    if (!utenteId) {
      this.router.navigate(["/login"]);
      return;
    }
    this.dbService.getBox(utenteId).subscribe({
      next: (res) => {
        const boxes = res.box || [];
        this.totaleBox = boxes.length;
        this.totaleArticoli = boxes.reduce((sum, b) => sum + (b.num_oggetti || 0), 0);
      },
      error: (err) => {
        console.error("Errore caricaProfilo", err);
      }
    });
  }
  navTo(path) {
    this.navCtrl.navigateForward(path);
  }
  navForward(path) {
    this.navCtrl.navigateForward(path);
  }
  /** Logo cliccabile: torna alla home */
  navBack() {
    this.navCtrl.navigateBack("/home");
  }
  vaiHome() {
    this.navCtrl.navigateBack("/home");
  }
  vaiAdmin() {
    this.navCtrl.navigateForward("/admin");
  }
  confermaLogout() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Conferma Logout",
        message: "Sei sicuro di voler uscire dal tuo account?",
        buttons: [
          { text: "Annulla", role: "cancel" },
          {
            text: "Esci",
            role: "destructive",
            handler: () => {
              localStorage.removeItem("token");
              localStorage.removeItem("utente_id");
              localStorage.removeItem("utente_nome");
              localStorage.removeItem("utente_email");
              localStorage.removeItem("tipo_profilo");
              localStorage.removeItem("is_admin");
              this.router.navigate(["/login"]);
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  badgeClass(dataEl) {
    const giorni = this.giorniRimasti(dataEl);
    if (giorni > 15)
      return "badge--blue";
    if (giorni > 7)
      return "badge--amber";
    return "badge--red";
  }
  giorniRimasti(dataEl) {
    const scadenza = new Date(dataEl);
    scadenza.setDate(scadenza.getDate() + 30);
    const diff = scadenza.getTime() - Date.now();
    return Math.max(0, Math.ceil(diff / 864e5));
  }
  percentualeScadenza(dataEl) {
    const giorni = this.giorniRimasti(dataEl);
    return Math.round(giorni / 30 * 100);
  }
};
_AreaPersonalePage.\u0275fac = function AreaPersonalePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AreaPersonalePage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(DatabaseService), \u0275\u0275directiveInject(AlertController));
};
_AreaPersonalePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AreaPersonalePage, selectors: [["app-area-personale"]], decls: 37, vars: 3, consts: [[1, "ion-no-border"], [1, "peek-toolbar"], [1, "header-inner"], [1, "header-top"], [1, "header-greet"], ["src", "assets/icon/logoTitolo1.png", "alt", "PeekBox", 1, "header-logo", 2, "cursor", "pointer", 3, "click"], [1, "header-greeting"], [1, "nome-verde"], [1, "page-wrapper"], [4, "ngIf"], [1, "floating-nav"], [1, "nav-glow"], [1, "nav-item", 3, "click"], ["name", "home"], ["name", "chatbubbles-outline"], [1, "nav-fab-wrapper"], [1, "nav-fab", 3, "click"], ["name", "add"], ["name", "qr-code-outline"], [1, "nav-item", "active"], [1, "avatar-circle-nav", "active"], [1, "profile-layout"], [1, "sidebar-card"], [1, "avatar-wrap"], [1, "avatar-circle-large"], [1, "avatar-glow"], [1, "user-name"], [1, "user-email"], ["class", "user-badge", 4, "ngIf"], [1, "stats-row"], [1, "stat-item"], [1, "stat-num"], [1, "stat-lbl"], [1, "stat-divider"], [1, "logout-btn", 3, "click"], ["name", "log-out-outline"], [1, "actions-grid"], [1, "action-card", 3, "click"], [1, "option-icon-wrap", 2, "background", "rgba(58,171,219,0.12)"], ["name", "information-circle-outline", 2, "color", "#3AABDB"], [1, "option-text"], [1, "option-title"], [1, "option-sub"], ["name", "chevron-forward-outline", 1, "option-arrow"], [1, "option-icon-wrap", 2, "background", "rgba(220,53,69,0.10)"], ["name", "trash-outline", 2, "color", "#dc3545"], [1, "option-icon-wrap", 2, "background", "rgba(125,199,64,0.12)"], ["name", "time-outline", 2, "color", "#7DC740"], [1, "option-icon-wrap", 2, "background", "rgba(102,126,234,0.12)"], ["name", "location-outline", 2, "color", "#667EEA"], [1, "option-icon-wrap", 2, "background", "rgba(245,166,35,0.12)"], ["name", "cube-outline", 2, "color", "#F5A623"], ["class", "action-card action-card--admin", 3, "click", 4, "ngIf"], [1, "user-badge"], ["name", "shield-checkmark-outline"], [1, "action-card", "action-card--admin", 3, "click"], [1, "option-icon-wrap", 2, "background", "rgba(21,66,92,0.12)"], ["name", "shield-checkmark-outline", 2, "color", "#15425C"], [1, "elim-page-wrapper"], [1, "floating-box-card"], [1, "titolo-eliminate"], ["name", "trash-outline", 1, "elim-title-icon"], [1, "info-text"], [1, "box-list-container"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "eliminated-grid", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "empty-state"], [1, "empty-icon"], [1, "eliminated-grid"], ["class", "eliminated-card", 4, "ngFor", "ngForOf"], [1, "eliminated-card"], [1, "elim-card-header"], [1, "elim-box-name"], [1, "elim-badge", 3, "ngClass"], [1, "elim-progress-bar"], [1, "elim-progress-fill"], [1, "elim-date"], ["name", "time-outline"]], template: function AreaPersonalePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "img", 5);
    \u0275\u0275listener("click", function AreaPersonalePage_Template_img_click_5_listener() {
      return ctx.navBack();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 6);
    \u0275\u0275text(7, "AREA ");
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9, "PERSONALE");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(10, "ion-content")(11, "div", 8);
    \u0275\u0275template(12, AreaPersonalePage_ng_container_12_Template, 74, 7, "ng-container", 9)(13, AreaPersonalePage_ng_container_13_Template, 12, 3, "ng-container", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "app-chatbot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 10);
    \u0275\u0275element(16, "div", 11);
    \u0275\u0275elementStart(17, "div", 12);
    \u0275\u0275listener("click", function AreaPersonalePage_Template_div_click_17_listener() {
      return ctx.vaiHome();
    });
    \u0275\u0275element(18, "ion-icon", 13);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 12);
    \u0275\u0275listener("click", function AreaPersonalePage_Template_div_click_21_listener() {
      return ctx.navTo("/box-ricevute");
    });
    \u0275\u0275element(22, "ion-icon", 14);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Avvisi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 15)(26, "button", 16);
    \u0275\u0275listener("click", function AreaPersonalePage_Template_button_click_26_listener() {
      return ctx.navTo("/crea-box");
    });
    \u0275\u0275element(27, "ion-icon", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 12);
    \u0275\u0275listener("click", function AreaPersonalePage_Template_div_click_28_listener() {
      return ctx.navTo("/scan-qr");
    });
    \u0275\u0275element(29, "ion-icon", 18);
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "Scan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 19)(33, "div", 20);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "Profilo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx.vistaCorrente === "profilo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.vistaCorrente === "box-eliminate");
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate1(" ", ctx.nomeUtente ? ctx.nomeUtente.charAt(0).toUpperCase() : "U", " ");
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, IonHeader, IonToolbar, IonContent, IonIcon, ChatbotComponent, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\nion-toolbar.peek-toolbar[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --overflow: auto;\n  --padding-bottom: 110px;\n}\n.header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo[_ngcontent-%COMP%] {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.header-logo[_ngcontent-%COMP%]:active {\n  opacity: 0.55;\n}\n.header-greeting[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  padding: 24px clamp(20px, 3.5vw, 56px) 40px;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 200px);\n}\n.profile-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  align-items: stretch;\n  flex: 1;\n}\n@media (max-width: 900px) {\n  .profile-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.sidebar-card[_ngcontent-%COMP%] {\n  width: 300px;\n  flex-shrink: 0;\n  background: #FFFFFF;\n  border-radius: 28px;\n  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.03);\n  padding: 36px 28px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 16px;\n}\n@media (max-width: 900px) {\n  .sidebar-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4px;\n}\n.avatar-wrap[_ngcontent-%COMP%]   .avatar-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(58, 171, 219, 0.25),\n      transparent 70%);\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_pulse-glow 3s ease-in-out infinite;\n}\n.avatar-circle-large[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #3AABDB,\n      #7DC740);\n  color: #FFFFFF;\n  font-size: 2.4rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 24px rgba(58, 171, 219, 0.4);\n  position: relative;\n  z-index: 1;\n}\n@keyframes _ngcontent-%COMP%_pulse-glow {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.7;\n  }\n  50% {\n    transform: scale(1.12);\n    opacity: 1;\n  }\n}\n.user-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #0F172A;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.user-email[_ngcontent-%COMP%] {\n  margin: -8px 0 0;\n  font-size: 0.83rem;\n  color: #4A7A94;\n}\n.user-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 14px;\n  background: rgba(21, 66, 92, 0.08);\n  color: #15425C;\n  font-size: 0.72rem;\n  font-weight: 700;\n  border-radius: 50px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.user-badge[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.72);\n  border-radius: 18px;\n  padding: 16px 0;\n  margin-top: 4px;\n}\n.stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-num[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 900;\n  color: #0F172A;\n  line-height: 1;\n}\n.stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #4A7A94;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.stats-row[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background: rgba(58, 171, 219, 0.18);\n}\n.logout-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  margin-top: auto;\n  padding: 13px 20px;\n  border: 2px solid rgba(239, 68, 68, 0.2);\n  border-radius: 50px;\n  background: rgba(239, 68, 68, 0.05);\n  color: #EF4444;\n  font-size: 0.88rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition:\n    background 0.2s,\n    border-color 0.2s,\n    transform 0.15s;\n}\n.logout-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: rgba(239, 68, 68, 0.4);\n  transform: translateY(-2px);\n}\n.actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  flex: 1;\n  align-content: stretch;\n}\n@media (max-width: 768px) {\n  .actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.action-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px 28px;\n  background: #FFFFFF;\n  border-radius: 24px;\n  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.03);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  height: 100%;\n  box-sizing: border-box;\n}\n.action-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 32px rgba(58, 171, 219, 0.12);\n}\n.action-card--admin[_ngcontent-%COMP%] {\n  border: 1.5px solid rgba(21, 66, 92, 0.15);\n}\n.action-card[_ngcontent-%COMP%]   .option-icon-wrap[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 15px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.action-card[_ngcontent-%COMP%]   .option-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.action-card[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.action-card[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%]   .option-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0F172A;\n}\n.action-card[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%]   .option-sub[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #4A7A94;\n  line-height: 1.4;\n}\n.action-card[_ngcontent-%COMP%]   .option-arrow[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #4A7A94;\n  flex-shrink: 0;\n  transition: color 0.2s, transform 0.2s;\n}\n.action-card[_ngcontent-%COMP%]:hover:not(.action-card--placeholder)   .option-arrow[_ngcontent-%COMP%] {\n  color: #3AABDB;\n  transform: translateX(3px);\n}\n.elim-page-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 110px);\n  padding: 0;\n}\n.elim-page-wrapper[_ngcontent-%COMP%]   .floating-box-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 32px;\n  padding: 26px 24px 20px;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  flex-grow: 1;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.elim-page-wrapper[_ngcontent-%COMP%]   .floating-box-card[_ngcontent-%COMP%]   .titolo-eliminate[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif !important;\n  font-weight: 900 !important;\n  font-size: 1.8rem;\n  text-transform: uppercase !important;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A) !important;\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent !important;\n  margin: 0 0 6px;\n  line-height: 1.1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.elim-page-wrapper[_ngcontent-%COMP%]   .floating-box-card[_ngcontent-%COMP%]   .titolo-eliminate[_ngcontent-%COMP%]   .elim-title-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  flex-shrink: 0;\n}\n.elim-page-wrapper[_ngcontent-%COMP%]   .floating-box-card[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: #4A7A94;\n  font-size: 0.88rem;\n}\n.elim-page-wrapper[_ngcontent-%COMP%]   .floating-box-card[_ngcontent-%COMP%]   .box-list-container[_ngcontent-%COMP%] {\n  max-height: 450px;\n  overflow-y: auto !important;\n  padding-right: 10px;\n  flex: 1;\n}\n.elim-page-wrapper[_ngcontent-%COMP%]   .floating-box-card[_ngcontent-%COMP%]   .box-list-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.elim-page-wrapper[_ngcontent-%COMP%]   .floating-box-card[_ngcontent-%COMP%]   .box-list-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.elim-page-wrapper[_ngcontent-%COMP%]   .floating-box-card[_ngcontent-%COMP%]   .box-list-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(125, 199, 64, 0.3);\n  border-radius: 4px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 60px 20px;\n  color: #4A7A94;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid rgba(58, 171, 219, 0.18);\n  border-top-color: #3AABDB;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 6px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4A7A94;\n  font-size: 0.88rem;\n  margin: 0;\n}\n.eliminated-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 16px;\n}\n.eliminated-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.03);\n  padding: 20px 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n}\n.eliminated-card[_ngcontent-%COMP%]   .elim-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.eliminated-card[_ngcontent-%COMP%]   .elim-card-header[_ngcontent-%COMP%]   .elim-box-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0F172A;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.eliminated-card[_ngcontent-%COMP%]   .elim-card-header[_ngcontent-%COMP%]   .elim-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 50px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.eliminated-card[_ngcontent-%COMP%]   .elim-card-header[_ngcontent-%COMP%]   .elim-badge.badge--blue[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.12);\n  color: #1A7FA8;\n}\n.eliminated-card[_ngcontent-%COMP%]   .elim-card-header[_ngcontent-%COMP%]   .elim-badge.badge--amber[_ngcontent-%COMP%] {\n  background: rgba(21, 66, 92, 0.08);\n  color: #15425C;\n}\n.eliminated-card[_ngcontent-%COMP%]   .elim-card-header[_ngcontent-%COMP%]   .elim-badge.badge--red[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #EF4444;\n}\n.eliminated-card[_ngcontent-%COMP%]   .elim-progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5px;\n  background: #EBF5FB;\n  border-radius: 50px;\n  overflow: hidden;\n}\n.eliminated-card[_ngcontent-%COMP%]   .elim-progress-bar[_ngcontent-%COMP%]   .elim-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #3AABDB,\n      #15425C);\n  border-radius: 50px;\n  transition: width 0.4s ease;\n}\n.eliminated-card[_ngcontent-%COMP%]   .elim-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin: 0;\n  font-size: 0.78rem;\n  color: #4A7A94;\n}\n.eliminated-card[_ngcontent-%COMP%]   .elim-date[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.floating-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 18px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: calc(100% - 32px);\n  max-width: 520px;\n  height: 66px;\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border-radius: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.95);\n  box-shadow: 0 8px 32px rgba(58, 171, 219, 0.13), 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 8px;\n  z-index: 1000;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 55%;\n  height: 22px;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(58, 171, 219, 0.22),\n      transparent 70%);\n  pointer-events: none;\n  z-index: -1;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 18px;\n  transition: background 0.2s;\n  text-decoration: none;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  color: #3AABDB;\n  transition: color 0.2s;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #3AABDB;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #0284C7;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0284C7;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:not(.active):hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -26px;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  border: none !important;\n  background:\n    linear-gradient(\n      135deg,\n      #A8FF78,\n      #7DC740) !important;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 25px rgba(125, 199, 64, 0.4) !important;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  color: #FFFFFF !important;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) translateY(-3px);\n  box-shadow: 0 15px 30px rgba(125, 199, 64, 0.5) !important;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.floating-nav[_ngcontent-%COMP%]   .avatar-circle-nav[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.12);\n  color: #3AABDB;\n  font-size: 0.8rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid rgba(58, 171, 219, 0.4);\n  transition: all 0.2s;\n}\n.floating-nav[_ngcontent-%COMP%]   .avatar-circle-nav.active[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.18);\n  color: #0284C7;\n  border-color: #0284C7;\n  box-shadow: 0 2px 8px rgba(58, 171, 219, 0.3);\n}\n/*# sourceMappingURL=area-personale.page.css.map */'] });
var AreaPersonalePage = _AreaPersonalePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AreaPersonalePage, [{
    type: Component,
    args: [{ selector: "app-area-personale", standalone: true, imports: [CommonModule, RouterModule, IonHeader, IonToolbar, IonContent, IonIcon, ChatbotComponent], template: `<ion-header class="ion-no-border">
  <ion-toolbar class="peek-toolbar">
    <div class="header-inner">
      <div class="header-top">
        <div class="header-greet">
          <img src="assets/icon/logoTitolo1.png" class="header-logo" alt="PeekBox" (click)="navBack()" style="cursor: pointer;" />
          <h1 class="header-greeting">AREA <span class="nome-verde">PERSONALE</span></h1>
        </div>
      </div>
    </div>
  </ion-toolbar>
</ion-header>

<ion-content>
  <div class="page-wrapper">

    <!-- ======================== VISTA PROFILO ======================== -->
    <ng-container *ngIf="vistaCorrente === 'profilo'">

      <div class="profile-layout">

        <!-- ===== COLONNA SINISTRA: Scheda Utente ===== -->
        <div class="sidebar-card">

          <div class="avatar-wrap">
            <div class="avatar-circle-large">
              {{ nomeUtente ? nomeUtente.charAt(0).toUpperCase() : 'U' }}
            </div>
            <div class="avatar-glow"></div>
          </div>

          <h2 class="user-name">{{ nomeUtente || 'Utente' }}</h2>
          <p class="user-email">{{ emailUtente || '\u2014' }}</p>

          <div class="user-badge" *ngIf="isAdmin">
            <ion-icon name="shield-checkmark-outline"></ion-icon>
            Amministratore
          </div>

          <div class="stats-row">
            <div class="stat-item">
              <span class="stat-num">{{ totaleBox }}</span>
              <span class="stat-lbl">Box</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-num">{{ totaleArticoli }}</span>
              <span class="stat-lbl">Articoli</span>
            </div>
          </div>

          <button class="logout-btn" (click)="confermaLogout()">
            <ion-icon name="log-out-outline"></ion-icon>
            Esci dall'account
          </button>

        </div>

        <!-- ===== COLONNA DESTRA: Actions Grid ===== -->
        <div class="actions-grid">

          <div class="action-card" (click)="navForward('/informazioni-account')">
            <div class="option-icon-wrap" style="background: rgba(58,171,219,0.12);">
              <ion-icon name="information-circle-outline" style="color: #3AABDB;"></ion-icon>
            </div>
            <div class="option-text">
              <span class="option-title">Informazioni Account</span>
              <span class="option-sub">Visualizza e modifica i tuoi dati personali</span>
            </div>
            <ion-icon name="chevron-forward-outline" class="option-arrow"></ion-icon>
          </div>

          <div class="action-card" (click)="navForward('/cestino')">
            <div class="option-icon-wrap" style="background: rgba(220,53,69,0.10);">
              <ion-icon name="trash-outline" style="color: #dc3545;"></ion-icon>
            </div>
            <div class="option-text">
              <span class="option-title">Box Eliminate</span>
              <span class="option-sub">Recupera o cancella definitivamente le tue scatole</span>
            </div>
            <ion-icon name="chevron-forward-outline" class="option-arrow"></ion-icon>
          </div>

          <div class="action-card" (click)="navForward('/transit-zone')">
            <div class="option-icon-wrap" style="background: rgba(125,199,64,0.12);">
              <ion-icon name="time-outline" style="color: #7DC740;"></ion-icon>
            </div>
            <div class="option-text">
              <span class="option-title">Transit Zone</span>
              <span class="option-sub">Gestisci le spedizioni e i pacchi in transito</span>
            </div>
            <ion-icon name="chevron-forward-outline" class="option-arrow"></ion-icon>
          </div>

          <div class="action-card" (click)="navForward('/gestione-spazi')">
            <div class="option-icon-wrap" style="background: rgba(102,126,234,0.12);">
              <ion-icon name="location-outline" style="color: #667EEA;"></ion-icon>
            </div>
            <div class="option-text">
              <span class="option-title">Gestione Spazi</span>
              <span class="option-sub">Aggiungi, modifica o elimina i tuoi spazi</span>
            </div>
            <ion-icon name="chevron-forward-outline" class="option-arrow"></ion-icon>
          </div>

          <div class="action-card" (click)="navForward('/esporta-archivio')">
            <div class="option-icon-wrap" style="background: rgba(245,166,35,0.12);">
              <ion-icon name="cube-outline" style="color: #F5A623;"></ion-icon>
            </div>
            <div class="option-text">
              <span class="option-title">Esporta Archivio</span>
              <span class="option-sub">Scarica una copia completa del tuo inventario</span>
            </div>
            <ion-icon name="chevron-forward-outline" class="option-arrow"></ion-icon>
          </div>

          <div class="action-card action-card--admin" *ngIf="isAdmin" (click)="vaiAdmin()">
            <div class="option-icon-wrap" style="background: rgba(21,66,92,0.12);">
              <ion-icon name="shield-checkmark-outline" style="color: #15425C;"></ion-icon>
            </div>
            <div class="option-text">
              <span class="option-title">Pannello Admin</span>
              <span class="option-sub">Accedi al pannello di controllo amministrativo</span>
            </div>
            <ion-icon name="chevron-forward-outline" class="option-arrow"></ion-icon>
          </div>

        </div>
      </div>

    </ng-container>

    <!-- ======================== VISTA BOX ELIMINATE ======================== -->
    <ng-container *ngIf="vistaCorrente === 'box-eliminate'">

      <div class="elim-page-wrapper">

        <div class="floating-box-card">

          <h1 class="titolo-eliminate"><ion-icon name="trash-outline" class="elim-title-icon"></ion-icon> BOX ELIMINATE</h1>
          <p class="info-text">Le box vengono rimosse definitivamente dopo 30 giorni dall'eliminazione.</p>

          <div class="box-list-container">

            <div *ngIf="isLoadingEliminate" class="loading-state">
              <div class="spinner"></div>
              <p>Caricamento in corso...</p>
            </div>

            <div *ngIf="!isLoadingEliminate && boxEliminate.length === 0" class="empty-state">
              <div class="empty-icon">\u2705</div>
              <h3>Nessuna box eliminata</h3>
              <p>Il tuo cestino \xE8 vuoto. Le box eliminate appariranno qui per 30 giorni.</p>
            </div>

            <div *ngIf="!isLoadingEliminate && boxEliminate.length > 0" class="eliminated-grid">
              <div *ngFor="let box of boxEliminate" class="eliminated-card">
                <div class="elim-card-header">
                  <h3 class="elim-box-name">{{ box.nome }}</h3>
                  <span class="elim-badge" [ngClass]="badgeClass(box.data_eliminazione)">
                    {{ giorniRimasti(box.data_eliminazione) }} gg rimasti
                  </span>
                </div>
                <div class="elim-progress-bar">
                  <div class="elim-progress-fill" [style.width.%]="percentualeScadenza(box.data_eliminazione)"></div>
                </div>
                <p class="elim-date">
                  <ion-icon name="time-outline"></ion-icon>
                  Eliminata il {{ box.data_eliminazione | date:'dd/MM/yyyy' }}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </ng-container>

  </div>

  <app-chatbot></app-chatbot>

</ion-content>

<!-- FLOATING BOTTOM NAV \u2014 identica alla homepage -->
<div class="floating-nav">
  <div class="nav-glow"></div>

  <div class="nav-item" (click)="vaiHome()">
    <ion-icon name="home"></ion-icon>
    <span>Home</span>
  </div>

  <div class="nav-item" (click)="navTo('/box-ricevute')">
    <ion-icon name="chatbubbles-outline"></ion-icon>
    <span>Avvisi</span>
  </div>

  <div class="nav-fab-wrapper">
    <button class="nav-fab" (click)="navTo('/crea-box')">
      <ion-icon name="add"></ion-icon>
    </button>
  </div>

  <div class="nav-item" (click)="navTo('/scan-qr')">
    <ion-icon name="qr-code-outline"></ion-icon>
    <span>Scan</span>
  </div>

  <div class="nav-item active">
    <div class="avatar-circle-nav active">
      {{ nomeUtente ? nomeUtente.charAt(0).toUpperCase() : 'U' }}
    </div>
    <span>Profilo</span>
  </div>
</div>
`, styles: ['/* src/app/area-personale/area-personale.page.scss */\n:host {\n  display: block;\n}\nion-toolbar.peek-toolbar {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\nion-content {\n  --background: #F4F7F9;\n  --overflow: auto;\n  --padding-bottom: 110px;\n}\n.header-inner {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo:hover {\n  opacity: 0.75;\n}\n.header-logo:active {\n  opacity: 0.55;\n}\n.header-greeting {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\n.page-wrapper {\n  padding: 24px clamp(20px, 3.5vw, 56px) 40px;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 200px);\n}\n.profile-layout {\n  display: flex;\n  gap: 32px;\n  align-items: stretch;\n  flex: 1;\n}\n@media (max-width: 900px) {\n  .profile-layout {\n    flex-direction: column;\n  }\n}\n.sidebar-card {\n  width: 300px;\n  flex-shrink: 0;\n  background: #FFFFFF;\n  border-radius: 28px;\n  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.03);\n  padding: 36px 28px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 16px;\n}\n@media (max-width: 900px) {\n  .sidebar-card {\n    width: 100%;\n  }\n}\n.avatar-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4px;\n}\n.avatar-wrap .avatar-glow {\n  position: absolute;\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(58, 171, 219, 0.25),\n      transparent 70%);\n  pointer-events: none;\n  animation: pulse-glow 3s ease-in-out infinite;\n}\n.avatar-circle-large {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #3AABDB,\n      #7DC740);\n  color: #FFFFFF;\n  font-size: 2.4rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 24px rgba(58, 171, 219, 0.4);\n  position: relative;\n  z-index: 1;\n}\n@keyframes pulse-glow {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.7;\n  }\n  50% {\n    transform: scale(1.12);\n    opacity: 1;\n  }\n}\n.user-name {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #0F172A;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.user-email {\n  margin: -8px 0 0;\n  font-size: 0.83rem;\n  color: #4A7A94;\n}\n.user-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 14px;\n  background: rgba(21, 66, 92, 0.08);\n  color: #15425C;\n  font-size: 0.72rem;\n  font-weight: 700;\n  border-radius: 50px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.user-badge ion-icon {\n  font-size: 0.9rem;\n}\n.stats-row {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.72);\n  border-radius: 18px;\n  padding: 16px 0;\n  margin-top: 4px;\n}\n.stats-row .stat-item {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.stats-row .stat-item .stat-num {\n  font-size: 1.8rem;\n  font-weight: 900;\n  color: #0F172A;\n  line-height: 1;\n}\n.stats-row .stat-item .stat-lbl {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #4A7A94;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.stats-row .stat-divider {\n  width: 1px;\n  height: 40px;\n  background: rgba(58, 171, 219, 0.18);\n}\n.logout-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  margin-top: auto;\n  padding: 13px 20px;\n  border: 2px solid rgba(239, 68, 68, 0.2);\n  border-radius: 50px;\n  background: rgba(239, 68, 68, 0.05);\n  color: #EF4444;\n  font-size: 0.88rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition:\n    background 0.2s,\n    border-color 0.2s,\n    transform 0.15s;\n}\n.logout-btn ion-icon {\n  font-size: 1.1rem;\n}\n.logout-btn:hover {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: rgba(239, 68, 68, 0.4);\n  transform: translateY(-2px);\n}\n.actions-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  flex: 1;\n  align-content: stretch;\n}\n@media (max-width: 768px) {\n  .actions-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.action-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px 28px;\n  background: #FFFFFF;\n  border-radius: 24px;\n  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.03);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  height: 100%;\n  box-sizing: border-box;\n}\n.action-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 32px rgba(58, 171, 219, 0.12);\n}\n.action-card--admin {\n  border: 1.5px solid rgba(21, 66, 92, 0.15);\n}\n.action-card .option-icon-wrap {\n  width: 50px;\n  height: 50px;\n  border-radius: 15px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.action-card .option-icon-wrap ion-icon {\n  font-size: 1.6rem;\n}\n.action-card .option-text {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.action-card .option-text .option-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0F172A;\n}\n.action-card .option-text .option-sub {\n  font-size: 0.74rem;\n  color: #4A7A94;\n  line-height: 1.4;\n}\n.action-card .option-arrow {\n  font-size: 1.1rem;\n  color: #4A7A94;\n  flex-shrink: 0;\n  transition: color 0.2s, transform 0.2s;\n}\n.action-card:hover:not(.action-card--placeholder) .option-arrow {\n  color: #3AABDB;\n  transform: translateX(3px);\n}\n.elim-page-wrapper {\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 110px);\n  padding: 0;\n}\n.elim-page-wrapper .floating-box-card {\n  background: #FFFFFF;\n  border-radius: 32px;\n  padding: 26px 24px 20px;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  flex-grow: 1;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.elim-page-wrapper .floating-box-card .titolo-eliminate {\n  font-family: "Poppins", sans-serif !important;\n  font-weight: 900 !important;\n  font-size: 1.8rem;\n  text-transform: uppercase !important;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A) !important;\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent !important;\n  margin: 0 0 6px;\n  line-height: 1.1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.elim-page-wrapper .floating-box-card .titolo-eliminate .elim-title-icon {\n  font-size: 1.6rem;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  flex-shrink: 0;\n}\n.elim-page-wrapper .floating-box-card .info-text {\n  margin: 0 0 20px;\n  color: #4A7A94;\n  font-size: 0.88rem;\n}\n.elim-page-wrapper .floating-box-card .box-list-container {\n  max-height: 450px;\n  overflow-y: auto !important;\n  padding-right: 10px;\n  flex: 1;\n}\n.elim-page-wrapper .floating-box-card .box-list-container::-webkit-scrollbar {\n  width: 4px;\n}\n.elim-page-wrapper .floating-box-card .box-list-container::-webkit-scrollbar-track {\n  background: transparent;\n}\n.elim-page-wrapper .floating-box-card .box-list-container::-webkit-scrollbar-thumb {\n  background: rgba(125, 199, 64, 0.3);\n  border-radius: 4px;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 60px 20px;\n  color: #4A7A94;\n}\n.loading-state .spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid rgba(58, 171, 219, 0.18);\n  border-top-color: #3AABDB;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.empty-state .empty-icon {\n  font-size: 3.5rem;\n  margin-bottom: 12px;\n}\n.empty-state h3 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 6px;\n}\n.empty-state p {\n  color: #4A7A94;\n  font-size: 0.88rem;\n  margin: 0;\n}\n.eliminated-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 16px;\n}\n.eliminated-card {\n  background: #FFFFFF;\n  border-radius: 20px;\n  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.03);\n  padding: 20px 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n}\n.eliminated-card .elim-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.eliminated-card .elim-card-header .elim-box-name {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0F172A;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.eliminated-card .elim-card-header .elim-badge {\n  padding: 4px 12px;\n  border-radius: 50px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.eliminated-card .elim-card-header .elim-badge.badge--blue {\n  background: rgba(58, 171, 219, 0.12);\n  color: #1A7FA8;\n}\n.eliminated-card .elim-card-header .elim-badge.badge--amber {\n  background: rgba(21, 66, 92, 0.08);\n  color: #15425C;\n}\n.eliminated-card .elim-card-header .elim-badge.badge--red {\n  background: rgba(239, 68, 68, 0.12);\n  color: #EF4444;\n}\n.eliminated-card .elim-progress-bar {\n  width: 100%;\n  height: 5px;\n  background: #EBF5FB;\n  border-radius: 50px;\n  overflow: hidden;\n}\n.eliminated-card .elim-progress-bar .elim-progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #3AABDB,\n      #15425C);\n  border-radius: 50px;\n  transition: width 0.4s ease;\n}\n.eliminated-card .elim-date {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin: 0;\n  font-size: 0.78rem;\n  color: #4A7A94;\n}\n.eliminated-card .elim-date ion-icon {\n  font-size: 0.85rem;\n}\n.floating-nav {\n  position: fixed;\n  bottom: 18px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: calc(100% - 32px);\n  max-width: 520px;\n  height: 66px;\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border-radius: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.95);\n  box-shadow: 0 8px 32px rgba(58, 171, 219, 0.13), 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 8px;\n  z-index: 1000;\n}\n.floating-nav .nav-glow {\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 55%;\n  height: 22px;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(58, 171, 219, 0.22),\n      transparent 70%);\n  pointer-events: none;\n  z-index: -1;\n}\n.floating-nav .nav-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 18px;\n  transition: background 0.2s;\n  text-decoration: none;\n}\n.floating-nav .nav-item ion-icon {\n  font-size: 1.35rem;\n  color: #3AABDB;\n  transition: color 0.2s;\n}\n.floating-nav .nav-item span {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #3AABDB;\n}\n.floating-nav .nav-item.active ion-icon {\n  color: #0284C7;\n}\n.floating-nav .nav-item.active span {\n  color: #0284C7;\n}\n.floating-nav .nav-item:not(.active):hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.floating-nav .nav-fab-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -26px;\n}\n.floating-nav .nav-fab-wrapper .nav-fab {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  border: none !important;\n  background:\n    linear-gradient(\n      135deg,\n      #A8FF78,\n      #7DC740) !important;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 25px rgba(125, 199, 64, 0.4) !important;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.floating-nav .nav-fab-wrapper .nav-fab ion-icon {\n  font-size: 1.7rem;\n  color: #FFFFFF !important;\n}\n.floating-nav .nav-fab-wrapper .nav-fab:hover {\n  transform: scale(1.1) translateY(-3px);\n  box-shadow: 0 15px 30px rgba(125, 199, 64, 0.5) !important;\n}\n.floating-nav .nav-fab-wrapper .nav-fab:active {\n  transform: scale(0.95);\n}\n.floating-nav .avatar-circle-nav {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.12);\n  color: #3AABDB;\n  font-size: 0.8rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid rgba(58, 171, 219, 0.4);\n  transition: all 0.2s;\n}\n.floating-nav .avatar-circle-nav.active {\n  background: rgba(58, 171, 219, 0.18);\n  color: #0284C7;\n  border-color: #0284C7;\n  box-shadow: 0 2px 8px rgba(58, 171, 219, 0.3);\n}\n/*# sourceMappingURL=area-personale.page.css.map */\n'] }]
  }], () => [{ type: Router }, { type: NavController }, { type: DatabaseService }, { type: AlertController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AreaPersonalePage, { className: "AreaPersonalePage", filePath: "src/app/area-personale/area-personale.page.ts", lineNumber: 24 });
})();
export {
  AreaPersonalePage
};
//# sourceMappingURL=area-personale.page-PVQDMSSE.js.map
