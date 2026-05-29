import {
  ActionSheetController,
  ToastController
} from "./chunk-UWSSEREE.js";
import {
  DatabaseService
} from "./chunk-5G3PJOGU.js";
import {
  add,
  addIcons,
  archiveOutline,
  arrowDownCircleOutline,
  arrowForwardOutline,
  chatbubblesOutline,
  checkmarkCircleOutline,
  checkmarkDoneOutline,
  chevronDownOutline,
  cubeOutline,
  home,
  qrCodeOutline,
  swapHorizontalOutline
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
  NavigationHistoryService
} from "./chunk-R5EA4FTC.js";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  IonToolbar
} from "./chunk-VSLPI6WN.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  FormsModule,
  Injectable,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-QXFS4N4X.js";

// src/app/services/export.ts
var _ExportService = class _ExportService {
  constructor(dbService) {
    this.dbService = dbService;
  }
  // ─── PDF ETICHETTE ────────────────────────────────────────
  /**
   * Genera e stampa una griglia di etichette per tutti gli oggetti
   * contenuti in una box. Ogni etichetta riporta: nome oggetto,
   * categoria, quantità, flag FRAGILE e il nome della box.
   *
   * @param boxId  ID della box di cui stampare le etichette
   */
  stampaEtichetteBox(boxId) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.dbService.getEtichetteBox(boxId).subscribe({
          next: (data) => {
            const { box, oggetti } = data;
            const html = this.buildEtichetteHtml(box, oggetti);
            this.apriFinestraStampa(html);
            resolve();
          },
          error: (err) => reject(err)
        });
      });
    });
  }
  /**
   * Costruisce l'HTML della griglia di etichette da stampare.
   * Il CSS è inlined per garantire la corretta resa in fase di print.
   */
  buildEtichetteHtml(box, oggetti) {
    const etichette = oggetti.map((ogg) => `
      <div class="etichetta">
        <div class="etichetta-header">
          <span class="etichetta-box">${this.esc(box.nome)}</span>
          ${ogg.fragile ? '<span class="fragile-badge">FRAGILE</span>' : ""}
        </div>
        <div class="etichetta-nome">${this.esc(ogg.nome)}</div>
        <div class="etichetta-footer">
          <span class="etichetta-tipo">${this.esc(ogg.tipo || "\u2014")}</span>
          <span class="etichetta-qty">Q.t\xE0: ${ogg.quantita}</span>
        </div>
        ${ogg.descrizione ? `<div class="etichetta-desc">${this.esc(ogg.descrizione)}</div>` : ""}
      </div>
    `).join("");
    return `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Etichette \u2014 ${this.esc(box.nome)}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background: #fff;
      padding: 12mm;
    }

    h1 {
      font-size: 14pt;
      margin-bottom: 8mm;
      color: #1a1a2e;
      border-bottom: 1px solid #ccc;
      padding-bottom: 4mm;
    }

    .griglia {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 6mm;
    }

    .etichetta {
      border: 1.5px solid #333;
      border-radius: 4mm;
      padding: 4mm 5mm;
      min-height: 32mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      page-break-inside: avoid;
    }

    .etichetta-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2mm;
    }

    .etichetta-box {
      font-size: 7pt;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .fragile-badge {
      background: #e53935;
      color: #fff;
      font-size: 6pt;
      font-weight: bold;
      padding: 1px 3px;
      border-radius: 2px;
    }

    .etichetta-nome {
      font-size: 11pt;
      font-weight: 700;
      color: #1a1a2e;
      line-height: 1.2;
      margin: 1mm 0;
      word-break: break-word;
    }

    .etichetta-footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 2mm;
    }

    .etichetta-tipo {
      font-size: 7.5pt;
      color: #444;
      font-style: italic;
    }

    .etichetta-qty {
      font-size: 7.5pt;
      font-weight: 600;
      color: #333;
    }

    .etichetta-desc {
      font-size: 6.5pt;
      color: #777;
      margin-top: 2mm;
      border-top: 0.5px dashed #ccc;
      padding-top: 1.5mm;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    @media print {
      body { padding: 8mm; }
      .griglia { gap: 4mm; }
    }
  </style>
</head>
<body>
  <h1>\u{1F4E6} Etichette box \u2014 ${this.esc(box.nome)} (${this.esc(box.armadio)})</h1>
  <div class="griglia">
    ${etichette}
  </div>
</body>
</html>`;
  }
  /** Apre una finestra di stampa con l'HTML generato. */
  apriFinestraStampa(html) {
    const win = window.open("", "_blank", "width=900,height=700");
    if (!win)
      return;
    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(() => {
      win.print();
      win.close();
    }, 400);
  }
  // ─── DOWNLOAD CSV ─────────────────────────────────────────
  /**
   * Scarica l'inventario in formato CSV.
   * @param utenteId  ID dell'utente autenticato
   */
  downloadCsv(utenteId) {
    this.dbService.getExportCsv(utenteId).subscribe({
      next: (blob) => {
        this.triggerDownload(blob, `peekbox-inventario.csv`, "text/csv;charset=utf-8;");
      },
      error: (err) => console.error("Errore export CSV:", err)
    });
  }
  // ─── DOWNLOAD JSON ────────────────────────────────────────
  /**
   * Scarica l'inventario in formato JSON strutturato.
   * @param utenteId  ID dell'utente autenticato
   */
  downloadJson(utenteId) {
    this.dbService.getExportJson(utenteId).subscribe({
      next: (blob) => {
        this.triggerDownload(blob, `peekbox-inventario.json`, "application/json");
      },
      error: (err) => console.error("Errore export JSON:", err)
    });
  }
  // ─── UTILITY ─────────────────────────────────────────────
  /** Innesca il download di un Blob nel browser. */
  triggerDownload(blob, filename, mimeType) {
    const url = URL.createObjectURL(new Blob([blob], { type: mimeType }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
  /** Escaping HTML di base per prevenire injection nel template PDF. */
  esc(text) {
    if (!text)
      return "";
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
};
_ExportService.\u0275fac = function ExportService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExportService)(\u0275\u0275inject(DatabaseService));
};
_ExportService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExportService, factory: _ExportService.\u0275fac, providedIn: "root" });
var ExportService = _ExportService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: DatabaseService }], null);
})();

// src/app/transit-zone/transit-zone.page.ts
function TransitZonePage_ion_spinner_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 48);
  }
}
function TransitZonePage_ion_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 49);
  }
}
function TransitZonePage_div_48_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(obj_r2.descrizione);
  }
}
function TransitZonePage_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("dragstart", function TransitZonePage_div_48_Template_div_dragstart_0_listener($event) {
      const obj_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragStart($event, obj_r2, "sorgente"));
    })("click", function TransitZonePage_div_48_Template_div_click_0_listener() {
      const obj_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selezionaOggetto(obj_r2, "sorgente"));
    });
    \u0275\u0275elementStart(1, "div", 51);
    \u0275\u0275element(2, "ion-icon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52)(4, "span", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TransitZonePage_div_48_span_6_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "ion-icon", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(obj_r2.nome);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", obj_r2.descrizione);
  }
}
function TransitZonePage_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "ion-icon", 16);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Nessun oggetto");
    \u0275\u0275elementEnd()();
  }
}
function TransitZonePage_div_59_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(obj_r5.descrizione);
  }
}
function TransitZonePage_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("dragstart", function TransitZonePage_div_59_Template_div_dragstart_0_listener($event) {
      const obj_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragStart($event, obj_r5, "destinazione"));
    })("click", function TransitZonePage_div_59_Template_div_click_0_listener() {
      const obj_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selezionaOggetto(obj_r5, "destinazione"));
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275element(2, "ion-icon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52)(4, "span", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TransitZonePage_div_59_span_6_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "ion-icon", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r5 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(obj_r5.nome);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", obj_r5.descrizione);
  }
}
function TransitZonePage_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "ion-icon", 62);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Trascina qui gli oggetti");
    \u0275\u0275elementEnd()();
  }
}
var _TransitZonePage = class _TransitZonePage {
  constructor(dbService, exportService, toastCtrl, actionSheetCtrl, router, route, navHistory) {
    this.dbService = dbService;
    this.exportService = exportService;
    this.toastCtrl = toastCtrl;
    this.actionSheetCtrl = actionSheetCtrl;
    this.router = router;
    this.route = route;
    this.navHistory = navHistory;
    this.nomeUtente = "";
    this.utenteId = null;
    this.tutteLeBox = [];
    this.boxSorgente = null;
    this.boxDestinazione = null;
    this.boxSorgenteId = null;
    this.boxDestinazioneId = null;
    this.oggettiSorgente = [];
    this.oggettiDestinazione = [];
    this.isLoading = false;
    this.isSaving = false;
    this.isTransferring = false;
    this.draggedItem = null;
    this.dragOverZone = null;
    this.isDragOverSorgente = false;
    this.isDragOverDestinazione = false;
    addIcons({
      "home": home,
      "add": add,
      "qr-code-outline": qrCodeOutline,
      "chatbubbles-outline": chatbubblesOutline,
      "swap-horizontal-outline": swapHorizontalOutline,
      "archive-outline": archiveOutline,
      "checkmark-circle-outline": checkmarkCircleOutline,
      "arrow-forward-outline": arrowForwardOutline,
      "cube-outline": cubeOutline,
      "chevron-down-outline": chevronDownOutline,
      "arrow-down-circle-outline": arrowDownCircleOutline,
      "checkmark-done-outline": checkmarkDoneOutline
    });
  }
  ngOnInit() {
    this.aggiornaUtente();
    const boxPreselezionata = this.route.snapshot.queryParamMap.get("boxSorgenteId");
    if (boxPreselezionata) {
      this.boxSorgenteId = Number(boxPreselezionata);
    }
    if (this.utenteId) {
      this.caricaBox(this.boxSorgenteId ?? void 0);
    }
  }
  ionViewWillEnter() {
    this.aggiornaUtente();
  }
  ngOnDestroy() {
  }
  aggiornaUtente() {
    this.nomeUtente = localStorage.getItem("utente_nome") || "";
    this.utenteId = localStorage.getItem("utente_id");
  }
  // ─── CARICAMENTO BOX ────────────────────────────────────────
  caricaBox(preselezioneId) {
    if (!this.utenteId)
      return;
    this.dbService.getBox(this.utenteId).subscribe({
      next: (res) => {
        this.tutteLeBox = res.box || [];
        if (preselezioneId && this.tutteLeBox.some((b) => b.id === preselezioneId)) {
          this.boxSorgente = this.tutteLeBox.find((b) => b.id === preselezioneId) || null;
          this.caricaOggettiSorgente();
        }
      },
      error: (err) => console.error("Errore caricamento box:", err)
    });
  }
  get boxDisponibiliDestinazione() {
    return this.tutteLeBox.filter((b) => b.id !== this.boxSorgenteId);
  }
  // ─── SELEZIONE BOX VIA ACTION SHEET ─────────────────────────
  apriSelezioneBox(tipo) {
    return __async(this, null, function* () {
      const boxDisponibili = tipo === "destinazione" ? this.tutteLeBox.filter((b) => b.id !== this.boxSorgenteId) : this.tutteLeBox;
      if (boxDisponibili.length === 0) {
        yield this.mostraToast("\u26A0\uFE0F Nessuna box disponibile.", "warning");
        return;
      }
      const buttons = boxDisponibili.map((box) => ({
        text: box.nome,
        handler: () => {
          if (tipo === "sorgente") {
            this.boxSorgente = box;
            this.boxSorgenteId = box.id;
            this.oggettiSorgente = [];
            this.caricaOggettiSorgente();
          } else {
            this.boxDestinazione = box;
            this.boxDestinazioneId = box.id;
            this.oggettiDestinazione = [];
            this.caricaOggettiDestinazione();
          }
        }
      }));
      buttons.push({ text: "Annulla", handler: () => {
      } });
      const sheet = yield this.actionSheetCtrl.create({
        header: tipo === "sorgente" ? "Seleziona Box Sorgente" : "Seleziona Box Destinazione",
        buttons,
        cssClass: "transit-action-sheet"
      });
      yield sheet.present();
    });
  }
  // ─── SWAP BOX ───────────────────────────────────────────────
  swapBoxes() {
    const tmpBox = this.boxSorgente;
    const tmpId = this.boxSorgenteId;
    const tmpOgg = [...this.oggettiSorgente];
    this.boxSorgente = this.boxDestinazione;
    this.boxSorgenteId = this.boxDestinazioneId;
    this.oggettiSorgente = [...this.oggettiDestinazione];
    this.boxDestinazione = tmpBox;
    this.boxDestinazioneId = tmpId;
    this.oggettiDestinazione = tmpOgg;
  }
  // ─── CARICAMENTO OGGETTI ─────────────────────────────────────
  onBoxSorgenteChange() {
    this.oggettiSorgente = [];
    if (this.boxSorgenteId) {
      this.caricaOggettiSorgente();
    }
  }
  onBoxDestinazioneChange() {
    this.oggettiDestinazione = [];
    if (this.boxDestinazioneId) {
      this.caricaOggettiDestinazione();
    }
  }
  caricaOggettiSorgente() {
    if (!this.boxSorgenteId)
      return;
    this.isLoading = true;
    this.dbService.getOggettiPerBox(this.boxSorgenteId).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.oggettiSorgente = res.oggetti || [];
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  caricaOggettiDestinazione() {
    if (!this.boxDestinazioneId)
      return;
    this.dbService.getOggettiPerBox(this.boxDestinazioneId).subscribe({
      next: (res) => {
        this.oggettiDestinazione = res.oggetti || [];
      },
      error: (err) => console.error("Errore caricamento destinazione:", err)
    });
  }
  // ─── VALIDAZIONE ─────────────────────────────────────────────
  validaDestinazione() {
    return __async(this, null, function* () {
      if (!this.boxDestinazioneId || isNaN(Number(this.boxDestinazioneId))) {
        yield this.mostraToast("\u26A0\uFE0F Seleziona prima una box di destinazione valida!", "warning");
        return false;
      }
      return true;
    });
  }
  // ─── SPOSTAMENTO SINGOLO (click o drag) ─────────────────────
  selezionaOggetto(ogg, zona) {
    return __async(this, null, function* () {
      if (zona === "sorgente") {
        yield this.spostaInDestinazione(ogg);
      }
    });
  }
  spostaInDestinazione(ogg) {
    return __async(this, null, function* () {
      if (!(yield this.validaDestinazione()))
        return;
      if (this.isSaving)
        return;
      const idOgg = Number(ogg.id);
      if (isNaN(idOgg) || idOgg <= 0) {
        yield this.mostraToast("\u274C Oggetto con ID non valido.", "danger");
        return;
      }
      const idx = this.oggettiSorgente.findIndex((o) => o.id === ogg.id);
      if (idx === -1)
        return;
      this.oggettiSorgente.splice(idx, 1);
      this.isSaving = true;
      this.dbService.spostaOggetto(idOgg, Number(this.boxDestinazioneId)).subscribe({
        next: () => __async(this, null, function* () {
          this.isSaving = false;
          const oggettoSpostato = __spreadProps(__spreadValues({}, ogg), { _appenaArrivato: true });
          this.oggettiDestinazione.push(oggettoSpostato);
          setTimeout(() => {
            oggettoSpostato._appenaArrivato = false;
          }, 3e3);
          yield this.mostraToast(`\u2705 "${ogg.nome}" spostato!`, "success");
        }),
        error: (err) => __async(this, null, function* () {
          this.isSaving = false;
          this.oggettiSorgente.splice(idx, 0, ogg);
          const serverMsg = err?.error?.error || err?.message || "Errore sconosciuto";
          yield this.mostraToast(`\u274C Spostamento fallito (${err.status}): ${serverMsg}`, "danger");
        })
      });
    });
  }
  // ─── CONFERMA TRASFERIMENTO MULTIPLO ────────────────────────
  confermaTrasferimento() {
    return __async(this, null, function* () {
      if (this.oggettiDestinazione.length === 0 || this.isTransferring)
        return;
      if (!(yield this.validaDestinazione()))
        return;
      this.isTransferring = true;
      try {
        yield this.mostraToast(`\u2705 Trasferimento completato! ${this.oggettiDestinazione.length} oggetti nella nuova box.`, "success");
        this.oggettiDestinazione = [];
        this.boxDestinazione = null;
        this.boxDestinazioneId = null;
      } catch (err) {
        yield this.mostraToast("\u274C Errore durante il trasferimento.", "danger");
      } finally {
        this.isTransferring = false;
      }
    });
  }
  // ─── DRAG & DROP ─────────────────────────────────────────────
  onDragStart(event, item, zona) {
    this.draggedItem = { item, zona };
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", String(item.id));
    }
  }
  onDragOver(event, zona) {
    event.preventDefault();
    if (event.dataTransfer)
      event.dataTransfer.dropEffect = "move";
    this.dragOverZone = zona;
    this.isDragOverSorgente = zona === "sorgente";
    this.isDragOverDestinazione = zona === "destinazione";
  }
  onDragLeave(zona) {
    this.dragOverZone = null;
    if (zona === "sorgente")
      this.isDragOverSorgente = false;
    if (zona === "destinazione")
      this.isDragOverDestinazione = false;
  }
  onDrop(event, zonaTarget) {
    return __async(this, null, function* () {
      event.preventDefault();
      this.dragOverZone = null;
      this.isDragOverSorgente = false;
      this.isDragOverDestinazione = false;
      if (!this.draggedItem)
        return;
      if (this.draggedItem.zona === zonaTarget) {
        this.draggedItem = null;
        return;
      }
      if (zonaTarget === "destinazione" && !(yield this.validaDestinazione())) {
        this.draggedItem = null;
        return;
      }
      yield this.eseguiSpostamento(this.draggedItem.item, this.draggedItem.zona, zonaTarget);
      this.draggedItem = null;
    });
  }
  onTouchStart(event, item, zona) {
    this.draggedItem = { item, zona };
  }
  onTouchEnd(event, _zona) {
    return __async(this, null, function* () {
      if (!this.draggedItem)
        return;
      const touch = event.changedTouches[0];
      const zonaTarget = this.getZonaDalPunto(touch.clientX, touch.clientY);
      if (zonaTarget && zonaTarget !== this.draggedItem.zona) {
        if (zonaTarget === "destinazione" && !(yield this.validaDestinazione())) {
          this.draggedItem = null;
          return;
        }
        yield this.eseguiSpostamento(this.draggedItem.item, this.draggedItem.zona, zonaTarget);
      }
      this.draggedItem = null;
      this.dragOverZone = null;
    });
  }
  getZonaDalPunto(x, y) {
    const zone = [
      { id: "zona-sorgente", zona: "sorgente" },
      { id: "zona-destinazione", zona: "destinazione" }
    ];
    for (const z of zone) {
      const el = document.getElementById(z.id);
      if (!el)
        continue;
      const rect = el.getBoundingClientRect();
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom)
        return z.zona;
    }
    return null;
  }
  eseguiSpostamento(item, _zonaFrom, zonaTo) {
    return __async(this, null, function* () {
      if (zonaTo === "destinazione") {
        yield this.spostaInDestinazione(item);
      }
    });
  }
  // ─── EXPORT ──────────────────────────────────────────────────
  stampaEtichette() {
    return __async(this, null, function* () {
      if (!this.boxSorgenteId) {
        yield this.mostraToast("Seleziona prima una box sorgente.", "warning");
        return;
      }
      try {
        yield this.exportService.stampaEtichetteBox(this.boxSorgenteId);
      } catch {
        yield this.mostraToast("Errore generazione etichette.", "danger");
      }
    });
  }
  downloadCsv() {
    if (this.utenteId)
      this.exportService.downloadCsv(this.utenteId);
  }
  downloadJson() {
    if (this.utenteId)
      this.exportService.downloadJson(this.utenteId);
  }
  // ─── UTILITY ─────────────────────────────────────────────────
  mostraToast(message, color = "primary") {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({ message, duration: 2500, color, position: "bottom" });
      yield toast.present();
    });
  }
  vaiHome() {
    this.router.navigateByUrl("/home", { replaceUrl: true });
  }
  navTo(route) {
    this.navHistory.navTo(route);
  }
};
_TransitZonePage.\u0275fac = function TransitZonePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TransitZonePage)(\u0275\u0275directiveInject(DatabaseService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(ActionSheetController), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(NavigationHistoryService));
};
_TransitZonePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransitZonePage, selectors: [["app-transit-zone"]], decls: 83, vars: 19, consts: [[1, "ion-no-border"], [1, "peek-toolbar"], [1, "header-inner"], [1, "header-top"], [1, "header-greet"], ["src", "assets/icon/logoTitolo1.png", "alt", "PeekBox", 1, "header-logo"], [1, "header-greeting"], [1, "nome-verde"], [1, "btn-conferma-transfer-header", 3, "click", "disabled"], ["name", "crescent", 4, "ngIf"], ["name", "checkmark-done-outline", 4, "ngIf"], [1, "transit-saas"], [1, "transit-wrapper"], [1, "box-selectors-row"], [1, "box-selector-card", 3, "click"], [1, "selector-icon", "sorgente-icon"], ["name", "archive-outline"], [1, "selector-info"], [1, "selector-label"], [1, "selector-nome"], ["name", "chevron-down-outline", 1, "chevron-icon"], [1, "swap-btn", 3, "click"], ["name", "swap-horizontal-outline"], [1, "selector-icon", "destinazione-icon"], ["name", "cube-outline"], [1, "transit-columns-grid"], [1, "transit-column", 3, "dragover", "dragleave", "drop"], [1, "column-header", "sorgente"], [1, "col-title-row"], [1, "col-dot", "sorgente-dot"], [1, "col-count"], [1, "oggetti-list"], ["class", "oggetto-chip", "draggable", "true", 3, "dragstart", "click", 4, "ngFor", "ngForOf"], ["class", "empty-col-state", 4, "ngIf"], [1, "column-header", "destinazione"], [1, "col-dot", "destinazione-dot"], ["class", "oggetto-chip destinazione-chip", "draggable", "true", 3, "dragstart", "click", 4, "ngFor", "ngForOf"], ["class", "empty-col-state drop-hint", 4, "ngIf"], [1, "floating-nav"], [1, "nav-glow"], [1, "nav-item", 3, "click"], ["name", "home"], ["name", "chatbubbles-outline"], [1, "nav-fab-wrapper"], [1, "nav-fab", 3, "click"], ["name", "add"], ["name", "qr-code-outline"], [1, "avatar-circle-nav"], ["name", "crescent"], ["name", "checkmark-done-outline"], ["draggable", "true", 1, "oggetto-chip", 3, "dragstart", "click"], [1, "chip-icon"], [1, "chip-info"], [1, "chip-nome"], ["class", "chip-desc", 4, "ngIf"], ["name", "arrow-forward-outline", 1, "chip-arrow"], [1, "chip-desc"], [1, "empty-col-state"], ["draggable", "true", 1, "oggetto-chip", "destinazione-chip", 3, "dragstart", "click"], [1, "chip-icon", "destinazione-icon-chip"], ["name", "checkmark-circle-outline", 1, "chip-check"], [1, "empty-col-state", "drop-hint"], ["name", "arrow-down-circle-outline"]], template: function TransitZonePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275element(5, "img", 5);
    \u0275\u0275elementStart(6, "h1", 6);
    \u0275\u0275text(7, "TRANSIT ");
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9, "ZONE");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275listener("click", function TransitZonePage_Template_button_click_10_listener() {
      return ctx.confermaTrasferimento();
    });
    \u0275\u0275template(11, TransitZonePage_ion_spinner_11_Template, 1, 0, "ion-spinner", 9)(12, TransitZonePage_ion_icon_12_Template, 1, 0, "ion-icon", 10);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(15, "ion-content", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14);
    \u0275\u0275listener("click", function TransitZonePage_Template_div_click_18_listener() {
      return ctx.apriSelezioneBox("sorgente");
    });
    \u0275\u0275elementStart(19, "div", 15);
    \u0275\u0275element(20, "ion-icon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "span", 18);
    \u0275\u0275text(23, "Da:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 19);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "ion-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 21);
    \u0275\u0275listener("click", function TransitZonePage_Template_div_click_27_listener() {
      return ctx.swapBoxes();
    });
    \u0275\u0275element(28, "ion-icon", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 14);
    \u0275\u0275listener("click", function TransitZonePage_Template_div_click_29_listener() {
      return ctx.apriSelezioneBox("destinazione");
    });
    \u0275\u0275elementStart(30, "div", 23);
    \u0275\u0275element(31, "ion-icon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 17)(33, "span", 18);
    \u0275\u0275text(34, "A:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 19);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(37, "ion-icon", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 25)(39, "div", 26);
    \u0275\u0275listener("dragover", function TransitZonePage_Template_div_dragover_39_listener($event) {
      return ctx.onDragOver($event, "sorgente");
    })("dragleave", function TransitZonePage_Template_div_dragleave_39_listener() {
      return ctx.onDragLeave("sorgente");
    })("drop", function TransitZonePage_Template_div_drop_39_listener($event) {
      return ctx.onDrop($event, "sorgente");
    });
    \u0275\u0275elementStart(40, "div", 27)(41, "div", 28);
    \u0275\u0275element(42, "span", 29);
    \u0275\u0275elementStart(43, "h3");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "span", 30);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 31);
    \u0275\u0275template(48, TransitZonePage_div_48_Template, 8, 2, "div", 32)(49, TransitZonePage_div_49_Template, 4, 0, "div", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 26);
    \u0275\u0275listener("dragover", function TransitZonePage_Template_div_dragover_50_listener($event) {
      return ctx.onDragOver($event, "destinazione");
    })("dragleave", function TransitZonePage_Template_div_dragleave_50_listener() {
      return ctx.onDragLeave("destinazione");
    })("drop", function TransitZonePage_Template_div_drop_50_listener($event) {
      return ctx.onDrop($event, "destinazione");
    });
    \u0275\u0275elementStart(51, "div", 34)(52, "div", 28);
    \u0275\u0275element(53, "span", 35);
    \u0275\u0275elementStart(54, "h3");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "span", 30);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 31);
    \u0275\u0275template(59, TransitZonePage_div_59_Template, 8, 2, "div", 36)(60, TransitZonePage_div_60_Template, 4, 0, "div", 37);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(61, "div", 38);
    \u0275\u0275element(62, "div", 39);
    \u0275\u0275elementStart(63, "div", 40);
    \u0275\u0275listener("click", function TransitZonePage_Template_div_click_63_listener() {
      return ctx.vaiHome();
    });
    \u0275\u0275element(64, "ion-icon", 41);
    \u0275\u0275elementStart(65, "span");
    \u0275\u0275text(66, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 40);
    \u0275\u0275listener("click", function TransitZonePage_Template_div_click_67_listener() {
      return ctx.navTo("/box-ricevute");
    });
    \u0275\u0275element(68, "ion-icon", 42);
    \u0275\u0275elementStart(69, "span");
    \u0275\u0275text(70, "Avvisi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 43)(72, "button", 44);
    \u0275\u0275listener("click", function TransitZonePage_Template_button_click_72_listener() {
      return ctx.navTo("/crea-box");
    });
    \u0275\u0275element(73, "ion-icon", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 40);
    \u0275\u0275listener("click", function TransitZonePage_Template_div_click_74_listener() {
      return ctx.navTo("/scan-qr");
    });
    \u0275\u0275element(75, "ion-icon", 46);
    \u0275\u0275elementStart(76, "span");
    \u0275\u0275text(77, "Scan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 40);
    \u0275\u0275listener("click", function TransitZonePage_Template_div_click_78_listener() {
      return ctx.navTo("/area-personale");
    });
    \u0275\u0275elementStart(79, "div", 47);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span");
    \u0275\u0275text(82, "Profilo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx.oggettiDestinazione.length === 0 || ctx.isTransferring);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isTransferring);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isTransferring);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.isTransferring ? "Trasferimento..." : "Conferma");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((ctx.boxSorgente == null ? null : ctx.boxSorgente.nome) || "Seleziona Box");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((ctx.boxDestinazione == null ? null : ctx.boxDestinazione.nome) || "Seleziona Box");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("drag-over-active", ctx.isDragOverSorgente);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx.boxSorgente == null ? null : ctx.boxSorgente.nome) || "Sorgente");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.oggettiSorgente.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.oggettiSorgente);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.oggettiSorgente.length === 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("drag-over-active", ctx.isDragOverDestinazione);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx.boxDestinazione == null ? null : ctx.boxDestinazione.nome) || "Destinazione");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.oggettiDestinazione.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.oggettiDestinazione);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.oggettiDestinazione.length === 0);
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate1(" ", ctx.nomeUtente ? ctx.nomeUtente.charAt(0).toUpperCase() : "U", " ");
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  RouterModule,
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonSpinner
], styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&display=swap";\n\n\n\nion-content.transit-saas[_ngcontent-%COMP%] {\n  --background: #F4F7F9 !important;\n  --overflow: auto;\n}\n.transit-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 15px clamp(20px, 3.5vw, 56px) 20px;\n  box-sizing: border-box;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n}\n.transit-columns-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 15px;\n  flex-grow: 0;\n  height: 420px;\n  min-height: 0;\n}\n.transit-column[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  border: 1.5px solid rgba(58, 171, 219, 0.18);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.03);\n  transition: border-color 0.25s, box-shadow 0.25s;\n  overflow-y: auto;\n  height: 100%;\n  box-sizing: border-box;\n}\n.transit-column.drag-over-active[_ngcontent-%COMP%] {\n  border-color: rgba(58, 171, 219, 0.5);\n  box-shadow: 0 0 0 4px rgba(58, 171, 219, 0.1), 0 8px 32px rgba(58, 171, 219, 0.08);\n  background: rgba(58, 171, 219, 0.02);\n}\n.box-selectors-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 18px;\n  flex-shrink: 0;\n}\n.box-selector-card[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #FFFFFF;\n  border: 1.5px solid rgba(58, 171, 219, 0.18);\n  border-radius: 18px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.03);\n}\n.box-selector-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(58, 171, 219, 0.4);\n  box-shadow: 0 4px 16px rgba(58, 171, 219, 0.08);\n}\n.box-selector-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.selector-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.selector-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.selector-icon.sorgente-icon[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n}\n.selector-icon.destinazione-icon[_ngcontent-%COMP%] {\n  background: rgba(125, 199, 64, 0.1);\n  color: #7DC740;\n}\n.selector-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.selector-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #4A7A94;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.selector-nome[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #0F172A;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chevron-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4A7A94;\n  flex-shrink: 0;\n}\n.swap-btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s ease, transform 0.3s ease;\n  color: #3AABDB;\n}\n.swap-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.swap-btn[_ngcontent-%COMP%]:active {\n  background: rgba(58, 171, 219, 0.15);\n  transform: rotate(180deg);\n}\n.column-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  flex-shrink: 0;\n}\n.col-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.col-title-row[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 110px;\n}\n.col-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.col-dot.sorgente-dot[_ngcontent-%COMP%] {\n  background: #3AABDB;\n}\n.col-dot.destinazione-dot[_ngcontent-%COMP%] {\n  background: #7DC740;\n}\n.col-count[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #4A7A94;\n  background: #F4F7F9;\n  border-radius: 50px;\n  padding: 3px 10px;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n}\n.oggetti-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  flex: 1;\n}\n.oggetto-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  background: #F4F7F9;\n  border-radius: 12px;\n  border: 1.5px solid transparent;\n  cursor: grab;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.oggetto-chip[_ngcontent-%COMP%]:hover {\n  border-color: rgba(58, 171, 219, 0.3);\n  background: white;\n  box-shadow: 0 4px 14px rgba(58, 171, 219, 0.08);\n  transform: translateY(-1px);\n}\n.oggetto-chip[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n  transform: scale(0.97);\n}\n.oggetto-chip.destinazione-chip[_ngcontent-%COMP%]:hover {\n  border-color: rgba(125, 199, 64, 0.3);\n  box-shadow: 0 4px 14px rgba(125, 199, 64, 0.08);\n}\n.chip-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 9px;\n  background: rgba(58, 171, 219, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.chip-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #3AABDB;\n}\n.destinazione-icon-chip[_ngcontent-%COMP%] {\n  background: rgba(125, 199, 64, 0.1);\n}\n.destinazione-icon-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #7DC740;\n}\n.chip-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.chip-nome[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #0F172A;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chip-desc[_ngcontent-%COMP%] {\n  font-size: 0.67rem;\n  color: #4A7A94;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chip-arrow[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(58, 171, 219, 0.5);\n  flex-shrink: 0;\n}\n.chip-check[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #7DC740;\n  flex-shrink: 0;\n}\n.empty-col-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 32px 16px;\n  text-align: center;\n  color: #CBD5E1;\n  flex: 1;\n}\n.empty-col-state[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.empty-col-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.empty-col-state.drop-hint[_ngcontent-%COMP%] {\n  border: 2px dashed rgba(58, 171, 219, 0.2);\n  border-radius: 18px;\n  color: rgba(58, 171, 219, 0.4);\n  background: rgba(58, 171, 219, 0.02);\n  animation: _ngcontent-%COMP%_drop-pulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_drop-pulse {\n  0%, 100% {\n    border-color: rgba(58, 171, 219, 0.2);\n    background: rgba(58, 171, 219, 0.02);\n  }\n  50% {\n    border-color: rgba(58, 171, 219, 0.4);\n    background: rgba(58, 171, 219, 0.05);\n  }\n}\nion-header[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n}\nion-toolbar.peek-toolbar[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --border-width: 0;\n  padding: 0;\n}\n.header-inner[_ngcontent-%COMP%] {\n  padding: 16px clamp(20px, 3.5vw, 56px) 10px;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0;\n}\n.header-greet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-greet[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n  height: 32px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-greet[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.header-greet[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]:active {\n  opacity: 0.55;\n}\n.header-greeting[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A) !important;\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent !important;\n  background-clip: text !important;\n  font-weight: 900 !important;\n  text-shadow: 0px 4px 10px rgba(125, 199, 64, 0.3);\n}\n.btn-conferma-transfer-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  color: white;\n  border: none;\n  padding: 10px 18px;\n  border-radius: 50px;\n  font-weight: 800;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  box-shadow: 0 4px 16px rgba(90, 158, 42, 0.35);\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.btn-conferma-transfer-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.btn-conferma-transfer-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: white !important;\n}\n.btn-conferma-transfer-header[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  --color: white;\n  width: 16px;\n  height: 16px;\n}\n.btn-conferma-transfer-header[_ngcontent-%COMP%]:disabled {\n  background: #D1FAB7;\n  color: rgba(15, 23, 42, 0.4);\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.btn-conferma-transfer-header[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.97);\n  box-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\n.floating-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 18px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: calc(100% - 32px);\n  max-width: 520px;\n  height: 66px;\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border-radius: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.95);\n  box-shadow: 0 8px 32px rgba(58, 171, 219, 0.13), 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 8px;\n  z-index: 1000;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 55%;\n  height: 22px;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(58, 171, 219, 0.22),\n      transparent 70%);\n  pointer-events: none;\n  z-index: -1;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 18px;\n  transition: background 0.2s;\n  text-decoration: none;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  color: #3AABDB;\n  transition: color 0.2s;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #3AABDB;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #1A7FA8;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1A7FA8;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:not(.active):hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -26px;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  border: none !important;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A) !important;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 25px rgba(90, 158, 42, 0.4) !important;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  color: #FFFFFF !important;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) translateY(-3px);\n  box-shadow: 0 15px 30px rgba(90, 158, 42, 0.5) !important;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.floating-nav[_ngcontent-%COMP%]   .avatar-circle-nav[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.12);\n  color: #3AABDB;\n  font-size: 0.8rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid rgba(58, 171, 219, 0.4);\n  transition: all 0.2s;\n}\n.floating-nav[_ngcontent-%COMP%]   .avatar-circle-nav.active[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.18);\n  color: #1A7FA8;\n  border-color: #1A7FA8;\n  box-shadow: 0 2px 8px rgba(58, 171, 219, 0.3);\n}\n@media (max-width: 480px) {\n  .transit-columns-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .box-selectors-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .swap-btn[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n  }\n}\n/*# sourceMappingURL=transit-zone.page.css.map */'] });
var TransitZonePage = _TransitZonePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransitZonePage, [{
    type: Component,
    args: [{ selector: "app-transit-zone", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      IonContent,
      IonHeader,
      IonToolbar,
      IonIcon,
      IonSelect,
      IonSelectOption,
      IonSpinner
    ], template: `<ion-header class="ion-no-border">\r
  <ion-toolbar class="peek-toolbar">\r
    <div class="header-inner">\r
      <div class="header-top">\r
        <div class="header-greet">\r
          <img src="assets/icon/logoTitolo1.png" class="header-logo" alt="PeekBox" />\r
          <h1 class="header-greeting">TRANSIT <span class="nome-verde">ZONE</span></h1>\r
        </div>\r
        <button class="btn-conferma-transfer-header"\r
                [disabled]="oggettiDestinazione.length === 0 || isTransferring"\r
                (click)="confermaTrasferimento()">\r
          <ion-spinner name="crescent" *ngIf="isTransferring"></ion-spinner>\r
          <ion-icon name="checkmark-done-outline" *ngIf="!isTransferring"></ion-icon>\r
          <span>{{ isTransferring ? 'Trasferimento...' : 'Conferma' }}</span>\r
        </button>\r
      </div>\r
    </div>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="transit-saas">\r
  <div class="transit-wrapper">\r
\r
    <!-- \u2500\u2500 SELETTORE BOX SORGENTE / DESTINAZIONE \u2500\u2500 -->\r
    <div class="box-selectors-row">\r
\r
      <div class="box-selector-card" (click)="apriSelezioneBox('sorgente')">\r
        <div class="selector-icon sorgente-icon">\r
          <ion-icon name="archive-outline"></ion-icon>\r
        </div>\r
        <div class="selector-info">\r
          <span class="selector-label">Da:</span>\r
          <span class="selector-nome">{{ boxSorgente?.nome || 'Seleziona Box' }}</span>\r
        </div>\r
        <ion-icon name="chevron-down-outline" class="chevron-icon"></ion-icon>\r
      </div>\r
\r
      <div class="swap-btn" (click)="swapBoxes()">\r
        <ion-icon name="swap-horizontal-outline"></ion-icon>\r
      </div>\r
\r
      <div class="box-selector-card" (click)="apriSelezioneBox('destinazione')">\r
        <div class="selector-icon destinazione-icon">\r
          <ion-icon name="cube-outline"></ion-icon>\r
        </div>\r
        <div class="selector-info">\r
          <span class="selector-label">A:</span>\r
          <span class="selector-nome">{{ boxDestinazione?.nome || 'Seleziona Box' }}</span>\r
        </div>\r
        <ion-icon name="chevron-down-outline" class="chevron-icon"></ion-icon>\r
      </div>\r
\r
    </div>\r
\r
    <!-- \u2500\u2500 GRIGLIA DUE COLONNE \u2500\u2500 -->\r
    <div class="transit-columns-grid">\r
\r
      <!-- COLONNA SORGENTE -->\r
      <div class="transit-column"\r
           [class.drag-over-active]="isDragOverSorgente"\r
           (dragover)="onDragOver($event, 'sorgente')"\r
           (dragleave)="onDragLeave('sorgente')"\r
           (drop)="onDrop($event, 'sorgente')">\r
\r
        <div class="column-header sorgente">\r
          <div class="col-title-row">\r
            <span class="col-dot sorgente-dot"></span>\r
            <h3>{{ boxSorgente?.nome || 'Sorgente' }}</h3>\r
          </div>\r
          <span class="col-count">{{ oggettiSorgente.length }}</span>\r
        </div>\r
\r
        <div class="oggetti-list">\r
          <div class="oggetto-chip"\r
               *ngFor="let obj of oggettiSorgente"\r
               draggable="true"\r
               (dragstart)="onDragStart($event, obj, 'sorgente')"\r
               (click)="selezionaOggetto(obj, 'sorgente')">\r
            <div class="chip-icon">\r
              <ion-icon name="cube-outline"></ion-icon>\r
            </div>\r
            <div class="chip-info">\r
              <span class="chip-nome">{{ obj.nome }}</span>\r
              <span class="chip-desc" *ngIf="obj.descrizione">{{ obj.descrizione }}</span>\r
            </div>\r
            <ion-icon name="arrow-forward-outline" class="chip-arrow"></ion-icon>\r
          </div>\r
\r
          <div class="empty-col-state" *ngIf="oggettiSorgente.length === 0">\r
            <ion-icon name="archive-outline"></ion-icon>\r
            <span>Nessun oggetto</span>\r
          </div>\r
        </div>\r
\r
      </div>\r
\r
      <!-- COLONNA DESTINAZIONE -->\r
      <div class="transit-column"\r
           [class.drag-over-active]="isDragOverDestinazione"\r
           (dragover)="onDragOver($event, 'destinazione')"\r
           (dragleave)="onDragLeave('destinazione')"\r
           (drop)="onDrop($event, 'destinazione')">\r
\r
        <div class="column-header destinazione">\r
          <div class="col-title-row">\r
            <span class="col-dot destinazione-dot"></span>\r
            <h3>{{ boxDestinazione?.nome || 'Destinazione' }}</h3>\r
          </div>\r
          <span class="col-count">{{ oggettiDestinazione.length }}</span>\r
        </div>\r
\r
        <div class="oggetti-list">\r
          <div class="oggetto-chip destinazione-chip"\r
               *ngFor="let obj of oggettiDestinazione"\r
               draggable="true"\r
               (dragstart)="onDragStart($event, obj, 'destinazione')"\r
               (click)="selezionaOggetto(obj, 'destinazione')">\r
            <div class="chip-icon destinazione-icon-chip">\r
              <ion-icon name="cube-outline"></ion-icon>\r
            </div>\r
            <div class="chip-info">\r
              <span class="chip-nome">{{ obj.nome }}</span>\r
              <span class="chip-desc" *ngIf="obj.descrizione">{{ obj.descrizione }}</span>\r
            </div>\r
            <ion-icon name="checkmark-circle-outline" class="chip-check"></ion-icon>\r
          </div>\r
\r
          <div class="empty-col-state drop-hint" *ngIf="oggettiDestinazione.length === 0">\r
            <ion-icon name="arrow-down-circle-outline"></ion-icon>\r
            <span>Trascina qui gli oggetti</span>\r
          </div>\r
        </div>\r
\r
      </div>\r
\r
    </div>\r
\r
\r
  </div>\r
</ion-content>\r
\r
<!-- \u2500\u2500 FLOATING BOTTOM NAV \u2500\u2500 -->\r
<div class="floating-nav">\r
  <div class="nav-glow"></div>\r
\r
  <div class="nav-item" (click)="vaiHome()">\r
    <ion-icon name="home"></ion-icon>\r
    <span>Home</span>\r
  </div>\r
\r
  <div class="nav-item" (click)="navTo('/box-ricevute')">\r
    <ion-icon name="chatbubbles-outline"></ion-icon>\r
    <span>Avvisi</span>\r
  </div>\r
\r
  <div class="nav-fab-wrapper">\r
    <button class="nav-fab" (click)="navTo('/crea-box')">\r
      <ion-icon name="add"></ion-icon>\r
    </button>\r
  </div>\r
\r
  <div class="nav-item" (click)="navTo('/scan-qr')">\r
    <ion-icon name="qr-code-outline"></ion-icon>\r
    <span>Scan</span>\r
  </div>\r
\r
  <div class="nav-item" (click)="navTo('/area-personale')">\r
    <div class="avatar-circle-nav">\r
      {{ nomeUtente ? nomeUtente.charAt(0).toUpperCase() : 'U' }}\r
    </div>\r
    <span>Profilo</span>\r
  </div>\r
</div>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&display=swap";\n\n/* src/app/transit-zone/transit-zone.page.scss */\nion-content.transit-saas {\n  --background: #F4F7F9 !important;\n  --overflow: auto;\n}\n.transit-wrapper {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 15px clamp(20px, 3.5vw, 56px) 20px;\n  box-sizing: border-box;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n}\n.transit-columns-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 15px;\n  flex-grow: 0;\n  height: 420px;\n  min-height: 0;\n}\n.transit-column {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  border: 1.5px solid rgba(58, 171, 219, 0.18);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.03);\n  transition: border-color 0.25s, box-shadow 0.25s;\n  overflow-y: auto;\n  height: 100%;\n  box-sizing: border-box;\n}\n.transit-column.drag-over-active {\n  border-color: rgba(58, 171, 219, 0.5);\n  box-shadow: 0 0 0 4px rgba(58, 171, 219, 0.1), 0 8px 32px rgba(58, 171, 219, 0.08);\n  background: rgba(58, 171, 219, 0.02);\n}\n.box-selectors-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 18px;\n  flex-shrink: 0;\n}\n.box-selector-card {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #FFFFFF;\n  border: 1.5px solid rgba(58, 171, 219, 0.18);\n  border-radius: 18px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.03);\n}\n.box-selector-card:hover {\n  border-color: rgba(58, 171, 219, 0.4);\n  box-shadow: 0 4px 16px rgba(58, 171, 219, 0.08);\n}\n.box-selector-card:active {\n  transform: scale(0.98);\n}\n.selector-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.selector-icon ion-icon {\n  font-size: 1.1rem;\n}\n.selector-icon.sorgente-icon {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n}\n.selector-icon.destinazione-icon {\n  background: rgba(125, 199, 64, 0.1);\n  color: #7DC740;\n}\n.selector-info {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.selector-label {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #4A7A94;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.selector-nome {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #0F172A;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chevron-icon {\n  font-size: 1rem;\n  color: #4A7A94;\n  flex-shrink: 0;\n}\n.swap-btn {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s ease, transform 0.3s ease;\n  color: #3AABDB;\n}\n.swap-btn ion-icon {\n  font-size: 1.3rem;\n}\n.swap-btn:active {\n  background: rgba(58, 171, 219, 0.15);\n  transform: rotate(180deg);\n}\n.column-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  flex-shrink: 0;\n}\n.col-title-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.col-title-row h3 {\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 110px;\n}\n.col-dot {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.col-dot.sorgente-dot {\n  background: #3AABDB;\n}\n.col-dot.destinazione-dot {\n  background: #7DC740;\n}\n.col-count {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #4A7A94;\n  background: #F4F7F9;\n  border-radius: 50px;\n  padding: 3px 10px;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n}\n.oggetti-list {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  flex: 1;\n}\n.oggetto-chip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  background: #F4F7F9;\n  border-radius: 12px;\n  border: 1.5px solid transparent;\n  cursor: grab;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.oggetto-chip:hover {\n  border-color: rgba(58, 171, 219, 0.3);\n  background: white;\n  box-shadow: 0 4px 14px rgba(58, 171, 219, 0.08);\n  transform: translateY(-1px);\n}\n.oggetto-chip:active {\n  cursor: grabbing;\n  transform: scale(0.97);\n}\n.oggetto-chip.destinazione-chip:hover {\n  border-color: rgba(125, 199, 64, 0.3);\n  box-shadow: 0 4px 14px rgba(125, 199, 64, 0.08);\n}\n.chip-icon {\n  width: 28px;\n  height: 28px;\n  border-radius: 9px;\n  background: rgba(58, 171, 219, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.chip-icon ion-icon {\n  font-size: 0.85rem;\n  color: #3AABDB;\n}\n.destinazione-icon-chip {\n  background: rgba(125, 199, 64, 0.1);\n}\n.destinazione-icon-chip ion-icon {\n  color: #7DC740;\n}\n.chip-info {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.chip-nome {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #0F172A;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chip-desc {\n  font-size: 0.67rem;\n  color: #4A7A94;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chip-arrow {\n  font-size: 1rem;\n  color: rgba(58, 171, 219, 0.5);\n  flex-shrink: 0;\n}\n.chip-check {\n  font-size: 1rem;\n  color: #7DC740;\n  flex-shrink: 0;\n}\n.empty-col-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 32px 16px;\n  text-align: center;\n  color: #CBD5E1;\n  flex: 1;\n}\n.empty-col-state ion-icon {\n  font-size: 2rem;\n}\n.empty-col-state span {\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.empty-col-state.drop-hint {\n  border: 2px dashed rgba(58, 171, 219, 0.2);\n  border-radius: 18px;\n  color: rgba(58, 171, 219, 0.4);\n  background: rgba(58, 171, 219, 0.02);\n  animation: drop-pulse 2s ease-in-out infinite;\n}\n@keyframes drop-pulse {\n  0%, 100% {\n    border-color: rgba(58, 171, 219, 0.2);\n    background: rgba(58, 171, 219, 0.02);\n  }\n  50% {\n    border-color: rgba(58, 171, 219, 0.4);\n    background: rgba(58, 171, 219, 0.05);\n  }\n}\nion-header {\n  --background: #F4F7F9;\n}\nion-toolbar.peek-toolbar {\n  --background: #F4F7F9;\n  --border-width: 0;\n  padding: 0;\n}\n.header-inner {\n  padding: 16px clamp(20px, 3.5vw, 56px) 10px;\n}\n.header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0;\n}\n.header-greet {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-greet .header-logo {\n  height: 32px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-greet .header-logo:hover {\n  opacity: 0.75;\n}\n.header-greet .header-logo:active {\n  opacity: 0.55;\n}\n.header-greeting {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A) !important;\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent !important;\n  background-clip: text !important;\n  font-weight: 900 !important;\n  text-shadow: 0px 4px 10px rgba(125, 199, 64, 0.3);\n}\n.btn-conferma-transfer-header {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  color: white;\n  border: none;\n  padding: 10px 18px;\n  border-radius: 50px;\n  font-weight: 800;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  box-shadow: 0 4px 16px rgba(90, 158, 42, 0.35);\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.btn-conferma-transfer-header span {\n  color: white !important;\n}\n.btn-conferma-transfer-header ion-icon {\n  font-size: 1rem;\n  color: white !important;\n}\n.btn-conferma-transfer-header ion-spinner {\n  --color: white;\n  width: 16px;\n  height: 16px;\n}\n.btn-conferma-transfer-header:disabled {\n  background: #D1FAB7;\n  color: rgba(15, 23, 42, 0.4);\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.btn-conferma-transfer-header:active:not(:disabled) {\n  transform: scale(0.97);\n  box-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\n.floating-nav {\n  position: fixed;\n  bottom: 18px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: calc(100% - 32px);\n  max-width: 520px;\n  height: 66px;\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border-radius: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.95);\n  box-shadow: 0 8px 32px rgba(58, 171, 219, 0.13), 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 8px;\n  z-index: 1000;\n}\n.floating-nav .nav-glow {\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 55%;\n  height: 22px;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(58, 171, 219, 0.22),\n      transparent 70%);\n  pointer-events: none;\n  z-index: -1;\n}\n.floating-nav .nav-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 18px;\n  transition: background 0.2s;\n  text-decoration: none;\n}\n.floating-nav .nav-item ion-icon {\n  font-size: 1.35rem;\n  color: #3AABDB;\n  transition: color 0.2s;\n}\n.floating-nav .nav-item span {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #3AABDB;\n}\n.floating-nav .nav-item.active ion-icon {\n  color: #1A7FA8;\n}\n.floating-nav .nav-item.active span {\n  color: #1A7FA8;\n}\n.floating-nav .nav-item:not(.active):hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.floating-nav .nav-fab-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -26px;\n}\n.floating-nav .nav-fab-wrapper .nav-fab {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  border: none !important;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A) !important;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 25px rgba(90, 158, 42, 0.4) !important;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.floating-nav .nav-fab-wrapper .nav-fab ion-icon {\n  font-size: 1.7rem;\n  color: #FFFFFF !important;\n}\n.floating-nav .nav-fab-wrapper .nav-fab:hover {\n  transform: scale(1.1) translateY(-3px);\n  box-shadow: 0 15px 30px rgba(90, 158, 42, 0.5) !important;\n}\n.floating-nav .nav-fab-wrapper .nav-fab:active {\n  transform: scale(0.95);\n}\n.floating-nav .avatar-circle-nav {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.12);\n  color: #3AABDB;\n  font-size: 0.8rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid rgba(58, 171, 219, 0.4);\n  transition: all 0.2s;\n}\n.floating-nav .avatar-circle-nav.active {\n  background: rgba(58, 171, 219, 0.18);\n  color: #1A7FA8;\n  border-color: #1A7FA8;\n  box-shadow: 0 2px 8px rgba(58, 171, 219, 0.3);\n}\n@media (max-width: 480px) {\n  .transit-columns-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .box-selectors-row {\n    flex-direction: column;\n  }\n  .swap-btn {\n    transform: rotate(90deg);\n  }\n}\n/*# sourceMappingURL=transit-zone.page.css.map */\n'] }]
  }], () => [{ type: DatabaseService }, { type: ExportService }, { type: ToastController }, { type: ActionSheetController }, { type: Router }, { type: ActivatedRoute }, { type: NavigationHistoryService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransitZonePage, { className: "TransitZonePage", filePath: "src/app/transit-zone/transit-zone.page.ts", lineNumber: 32 });
})();
export {
  TransitZonePage
};
//# sourceMappingURL=transit-zone.page-5ESAJJXO.js.map
