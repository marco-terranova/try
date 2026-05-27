import {
  DatabaseService
} from "./chunk-5G3PJOGU.js";
import {
  add,
  addIcons,
  chatbubblesOutline,
  cubeOutline,
  home,
  qrCodeOutline,
  refreshOutline,
  timeOutline,
  trashBinOutline,
  trashOutline
} from "./chunk-4ITIBTO3.js";
import {
  NavigationHistoryService
} from "./chunk-R5EA4FTC.js";
import {
  AlertController,
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar,
  ToastController
} from "./chunk-VSLPI6WN.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
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
  __async
} from "./chunk-QXFS4N4X.js";

// src/app/cestino/cestino.page.ts
function CestinoPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Caricamento in corso...");
    \u0275\u0275elementEnd()();
  }
}
function CestinoPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275element(2, "ion-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Cestino Vuoto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Non ci sono elementi eliminati. Il tuo spazio \xE8 perfettamente in ordine.");
    \u0275\u0275elementEnd()();
  }
}
function CestinoPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "ion-icon", 32);
    \u0275\u0275text(2, " Box ");
    \u0275\u0275elementEnd();
  }
}
function CestinoPage_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275element(5, "ion-icon", 38);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 39)(9, "div", 40);
    \u0275\u0275element(10, "div", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 42)(12, "button", 43);
    \u0275\u0275listener("click", function CestinoPage_div_17_div_1_Template_button_click_12_listener() {
      const box_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.recuperaBox(box_r2));
    });
    \u0275\u0275element(13, "ion-icon", 44);
    \u0275\u0275text(14, " Recupera ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 45);
    \u0275\u0275listener("click", function CestinoPage_div_17_div_1_Template_button_click_15_listener() {
      const box_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.eliminaDefinitivamente(box_r2));
    });
    \u0275\u0275element(16, "ion-icon", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const box_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(box_r2.nome);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Eliminata il ", \u0275\u0275pipeBind2(7, 5, box_r2.data_eliminazione, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r2.giorniRimasti(box_r2.data_eliminazione) + " giorni rimasti");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r2.calcolaPercentualeScadenza(box_r2.data_eliminazione), "%");
  }
}
function CestinoPage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, CestinoPage_div_17_div_1_Template, 17, 8, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.boxEliminate);
  }
}
function CestinoPage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "ion-icon", 47);
    \u0275\u0275text(2, " Oggetti ");
    \u0275\u0275elementEnd();
  }
}
function CestinoPage_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275element(5, "ion-icon", 38);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 48);
    \u0275\u0275element(9, "ion-icon", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 39)(12, "div", 40);
    \u0275\u0275element(13, "div", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 42)(15, "button", 43);
    \u0275\u0275listener("click", function CestinoPage_div_19_div_1_Template_button_click_15_listener() {
      const ogg_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.recuperaOggetto(ogg_r5));
    });
    \u0275\u0275element(16, "ion-icon", 44);
    \u0275\u0275text(17, " Recupera ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 45);
    \u0275\u0275listener("click", function CestinoPage_div_19_div_1_Template_button_click_18_listener() {
      const ogg_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.eliminaOggettoDefinitivamente(ogg_r5));
    });
    \u0275\u0275element(19, "ion-icon", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ogg_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ogg_r5.nome);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Eliminato il ", \u0275\u0275pipeBind2(7, 6, ogg_r5.data_eliminazione, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" da ", ogg_r5.box_nome, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r2.giorniRimasti(ogg_r5.data_eliminazione) + " giorni rimasti");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r2.calcolaPercentualeScadenza(ogg_r5.data_eliminazione), "%");
  }
}
function CestinoPage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, CestinoPage_div_19_div_1_Template, 20, 9, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.oggettiEliminati);
  }
}
var _CestinoPage = class _CestinoPage {
  constructor(dbService, router, alertCtrl, toastCtrl, navHistory) {
    this.dbService = dbService;
    this.router = router;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.navHistory = navHistory;
    this.nomeUtente = "";
    this.utenteId = null;
    this.boxEliminate = [];
    this.oggettiEliminati = [];
    this.isLoading = true;
    addIcons({
      "home": home,
      "add": add,
      "qr-code-outline": qrCodeOutline,
      "trash-outline": trashOutline,
      "trash-bin-outline": trashBinOutline,
      "time-outline": timeOutline,
      "chatbubbles-outline": chatbubblesOutline,
      "refresh-outline": refreshOutline,
      "cube-outline": cubeOutline
    });
  }
  ngOnInit() {
    this.aggiornaUtente();
    this.caricaEliminati();
  }
  /** Ricarica dati ad ogni visita della pagina */
  ionViewWillEnter() {
    this.aggiornaUtente();
    if (this.utenteId)
      this.caricaEliminati();
  }
  aggiornaUtente() {
    this.nomeUtente = localStorage.getItem("utente_nome") || "";
    this.utenteId = localStorage.getItem("utente_id");
  }
  caricaEliminati() {
    this.isLoading = true;
    this.boxEliminate = [];
    this.oggettiEliminati = [];
    if (!this.utenteId) {
      this.isLoading = false;
      return;
    }
    const trentaMs = 30 * 24 * 60 * 60 * 1e3;
    const ora = Date.now();
    this.dbService.getBoxEliminate(this.utenteId).subscribe({
      next: (res) => {
        this.boxEliminate = (res.box_eliminate || []).filter((b) => {
          const diff = ora - new Date(b.data_eliminazione).getTime();
          return diff <= trentaMs;
        });
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
    this.dbService.getOggettiEliminati(this.utenteId).subscribe({
      next: (res) => {
        this.oggettiEliminati = (res.oggetti_eliminati || []).filter((o) => {
          const diff = ora - new Date(o.data_eliminazione).getTime();
          return diff <= trentaMs;
        });
      },
      error: () => {
      }
    });
  }
  recuperaBox(box) {
    this.boxEliminate = this.boxEliminate.filter((b) => b.id !== box.id);
    this.mostraToast("Box recuperata e tornata in Homepage! \u2705", "success");
    this.dbService.ripristinaBox(box.id).subscribe({
      next: () => {
        console.log(`[Cestino] Box ${box.id} ripristinata nel DB.`);
      },
      error: (err) => {
        console.error("[Cestino] Errore ripristino, rollback UI:", err);
        this.boxEliminate = [box, ...this.boxEliminate];
        this.mostraToast("Errore durante il recupero. La box \xE8 stata rimessa nel cestino.", "danger");
      }
    });
  }
  recuperaOggetto(ogg) {
    this.oggettiEliminati = this.oggettiEliminati.filter((o) => o.id !== ogg.id);
    this.mostraToast("Oggetto recuperato e tornato nella box originale! \u2705", "success");
    this.dbService.ripristinaOggetto(ogg.id).subscribe({
      next: () => {
        console.log(`[Cestino] Oggetto ${ogg.id} ripristinato nel DB.`);
      },
      error: (err) => {
        console.error("[Cestino] Errore ripristino oggetto, rollback UI:", err);
        this.oggettiEliminati = [ogg, ...this.oggettiEliminati];
        this.mostraToast("Errore durante il recupero dell'oggetto.", "danger");
      }
    });
  }
  eliminaDefinitivamente(box) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        cssClass: "peekbox-alert",
        header: "Conferma Eliminazione",
        message: "Sei sicuro di voler eliminare definitivamente questa box? L'azione non \xE8 reversibile.",
        buttons: [
          { text: "Annulla", role: "cancel" },
          {
            text: "Elimina",
            role: "destructive",
            handler: () => {
              this.boxEliminate = this.boxEliminate.filter((b) => b.id !== box.id);
              this.mostraToast("Box eliminata definitivamente.", "danger");
              this.dbService.eliminaBoxDefinitivo(box.id).subscribe({
                next: () => {
                  console.log(`[Cestino] Box ${box.id} eliminata fisicamente dal DB.`);
                },
                error: (err) => {
                  console.error("[Cestino] Errore eliminazione definitiva, rollback UI:", err);
                  this.boxEliminate = [box, ...this.boxEliminate];
                  this.mostraToast("Errore durante l'eliminazione. La box \xE8 stata ripristinata nel cestino.", "danger");
                }
              });
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  eliminaOggettoDefinitivamente(ogg) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        cssClass: "peekbox-alert",
        header: "Conferma Eliminazione",
        message: "Sei sicuro di voler eliminare definitivamente questo oggetto? L'azione non \xE8 reversibile.",
        buttons: [
          { text: "Annulla", role: "cancel" },
          {
            text: "Elimina",
            role: "destructive",
            handler: () => {
              this.oggettiEliminati = this.oggettiEliminati.filter((o) => o.id !== ogg.id);
              this.mostraToast("Oggetto eliminato definitivamente.", "danger");
              this.dbService.eliminaOggettoDefinitivo(ogg.id).subscribe({
                next: () => {
                  console.log(`[Cestino] Oggetto ${ogg.id} eliminato fisicamente dal DB.`);
                },
                error: (err) => {
                  console.error("[Cestino] Errore eliminazione definitiva oggetto, rollback UI:", err);
                  this.oggettiEliminati = [ogg, ...this.oggettiEliminati];
                  this.mostraToast("Errore durante l'eliminazione dell'oggetto.", "danger");
                }
              });
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  mostraToast(messaggio, color) {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: messaggio,
        duration: 2500,
        color,
        position: "bottom"
      });
      yield toast.present();
    });
  }
  parsaData(dataStr) {
    if (dataStr instanceof Date)
      return dataStr.getTime();
    if (!dataStr)
      return 0;
    if (typeof dataStr === "string" && dataStr.includes("/")) {
      const [giorno, mese, anno] = dataStr.split("/");
      return (/* @__PURE__ */ new Date(`${anno}-${mese}-${giorno}T00:00:00`)).getTime();
    }
    return new Date(dataStr).getTime();
  }
  calcolaPercentualeScadenza(dataEliminazione) {
    const dataElim = this.parsaData(dataEliminazione);
    if (!dataElim)
      return 0;
    const oggi = Date.now();
    const msInGiorno = 1e3 * 60 * 60 * 24;
    const giorniTrascorsi = Math.floor((oggi - dataElim) / msInGiorno);
    let percentuale = giorniTrascorsi / 30 * 100;
    if (percentuale > 100)
      percentuale = 100;
    if (percentuale < 0)
      percentuale = 0;
    if (giorniTrascorsi >= 1 && percentuale < 5)
      percentuale = 5;
    return percentuale;
  }
  giorniRimasti(dataEliminazione) {
    const dataElim = this.parsaData(dataEliminazione);
    if (!dataElim)
      return 0;
    const oggi = Date.now();
    const msInGiorno = 1e3 * 60 * 60 * 24;
    const giorniTrascorsi = Math.floor((oggi - dataElim) / msInGiorno);
    return Math.max(0, 30 - giorniTrascorsi);
  }
  /** Naviga alla home senza sporcare la history del browser */
  vaiHome() {
    this.router.navigateByUrl("/home", { replaceUrl: true });
  }
  navTo(route) {
    this.navHistory.navTo(route);
  }
};
_CestinoPage.\u0275fac = function CestinoPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CestinoPage)(\u0275\u0275directiveInject(DatabaseService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(NavigationHistoryService));
};
_CestinoPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CestinoPage, selectors: [["app-cestino"]], decls: 42, vars: 8, consts: [[1, "ion-no-border"], [1, "peek-toolbar"], [1, "header-inner"], [1, "header-top"], [1, "header-greet"], ["src", "assets/icon/logoTitolo1.png", "alt", "PeekBox", 1, "header-logo"], [1, "header-greeting"], [3, "fullscreen"], [1, "page-wrapper"], [1, "floating-box-card"], [1, "info-text"], ["name", "trash-outline", 1, "info-icon"], ["class", "loading-state", 4, "ngIf"], ["class", "premium-empty-state", 4, "ngIf"], ["class", "section-label", 4, "ngIf"], ["class", "box-list-container", 4, "ngIf"], [1, "floating-nav"], [1, "nav-glow"], [1, "nav-item", 3, "click"], ["name", "home"], ["name", "chatbubbles-outline"], [1, "nav-fab-wrapper"], [1, "nav-fab", 3, "click"], ["name", "add"], ["name", "qr-code-outline"], [1, "avatar-circle-nav"], [1, "loading-state"], [1, "spinner"], [1, "premium-empty-state"], [1, "empty-icon-glow"], ["name", "trash-bin-outline"], [1, "section-label"], ["name", "cube-outline"], [1, "box-list-container"], ["class", "box-card-compact", 4, "ngFor", "ngForOf"], [1, "box-card-compact"], [1, "box-info"], [1, "box-date"], ["name", "time-outline"], [1, "box-progress-center"], [1, "progress-container", 3, "title"], [1, "progress-fill"], [1, "box-actions-inline"], [1, "btn-restore-mini", 3, "click"], ["name", "refresh-outline"], [1, "btn-delete-mini", 3, "click"], ["name", "trash-outline"], ["name", "document-text-outline"], [1, "box-origin"]], template: function CestinoPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275element(5, "img", 5);
    \u0275\u0275elementStart(6, "h1", 6);
    \u0275\u0275text(7, "CESTINO");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(8, "ion-content", 7)(9, "div", 8)(10, "div", 9)(11, "p", 10);
    \u0275\u0275element(12, "ion-icon", 11);
    \u0275\u0275text(13, " Box e oggetti vengono rimossi definitivamente dopo 30 giorni dall'eliminazione. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CestinoPage_div_14_Template, 4, 0, "div", 12)(15, CestinoPage_div_15_Template, 7, 0, "div", 13)(16, CestinoPage_div_16_Template, 3, 0, "div", 14)(17, CestinoPage_div_17_Template, 2, 1, "div", 15)(18, CestinoPage_div_18_Template, 3, 0, "div", 14)(19, CestinoPage_div_19_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 16);
    \u0275\u0275element(21, "div", 17);
    \u0275\u0275elementStart(22, "div", 18);
    \u0275\u0275listener("click", function CestinoPage_Template_div_click_22_listener() {
      return ctx.vaiHome();
    });
    \u0275\u0275element(23, "ion-icon", 19);
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 18);
    \u0275\u0275listener("click", function CestinoPage_Template_div_click_26_listener() {
      return ctx.navTo("/box-ricevute");
    });
    \u0275\u0275element(27, "ion-icon", 20);
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "Avvisi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 21)(31, "button", 22);
    \u0275\u0275listener("click", function CestinoPage_Template_button_click_31_listener() {
      return ctx.navTo("/crea-box");
    });
    \u0275\u0275element(32, "ion-icon", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 18);
    \u0275\u0275listener("click", function CestinoPage_Template_div_click_33_listener() {
      return ctx.navTo("/scan-qr");
    });
    \u0275\u0275element(34, "ion-icon", 24);
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "Scan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 18);
    \u0275\u0275listener("click", function CestinoPage_Template_div_click_37_listener() {
      return ctx.navTo("/area-personale");
    });
    \u0275\u0275elementStart(38, "div", 25);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "Profilo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.boxEliminate.length === 0 && ctx.oggettiEliminati.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.boxEliminate.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.boxEliminate.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.oggettiEliminati.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.oggettiEliminati.length > 0);
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate1(" ", ctx.nomeUtente ? ctx.nomeUtente.charAt(0).toUpperCase() : "U", " ");
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  RouterModule,
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
  DatePipe
], styles: ['\n\nion-header[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n}\nion-toolbar.peek-toolbar[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\n.header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo[_ngcontent-%COMP%] {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.header-logo[_ngcontent-%COMP%]:active {\n  opacity: 0.55;\n}\n.header-greeting[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --overflow: auto;\n  --padding-bottom: 110px;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  padding: 12px clamp(20px, 3.5vw, 56px) 100px;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n}\n.floating-box-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 32px;\n  padding: 25px;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.03);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.info-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 18px;\n  color: #4A7A94;\n  font-size: 0.88rem;\n  font-family: "Poppins", sans-serif;\n  line-height: 1.4;\n}\n.info-text[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #3AABDB;\n  flex-shrink: 0;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  padding: 50px 20px;\n  color: #4A7A94;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border: 3px solid #EBF5FB;\n  border-top-color: #3AABDB;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.premium-empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.premium-empty-state[_ngcontent-%COMP%]   .empty-icon-glow[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.05);\n  color: #3AABDB;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.5rem;\n  margin-bottom: 20px;\n  box-shadow: 0 0 30px rgba(58, 171, 219, 0.1);\n}\n.premium-empty-state[_ngcontent-%COMP%]   .empty-icon-glow[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.premium-empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 1.4rem;\n  color: #0F172A;\n  margin: 0 0 8px;\n  font-weight: 800;\n}\n.premium-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4A7A94;\n  font-size: 0.95rem;\n  line-height: 1.5;\n  max-width: 300px;\n  margin: 0;\n}\n.section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #4A7A94;\n  margin: 16px 0 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.section-label[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.box-origin[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #4A7A94;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-family: "Poppins", sans-serif;\n}\n.box-origin[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.box-list-container[_ngcontent-%COMP%] {\n  max-height: 420px;\n  overflow-y: auto !important;\n  padding-right: 4px;\n}\n.box-list-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.box-list-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.box-list-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(125, 199, 64, 0.35);\n  border-radius: 4px;\n}\n.box-card-compact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #FFFFFF;\n  border-radius: 16px;\n  padding: 16px 20px;\n  margin-bottom: 12px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  gap: 20px;\n  transition: box-shadow 0.2s;\n}\n.box-card-compact[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.box-card-compact[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);\n}\n.box-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 150px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.box-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #0F172A;\n  font-weight: 800;\n  text-transform: uppercase;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.box-progress-center[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  max-width: 350px;\n  padding: 0 15px;\n}\n.box-date[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #4A7A94;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-family: "Poppins", sans-serif;\n}\n.box-date[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n.progress-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background-color: #EBF5FB;\n  border-radius: 10px;\n  overflow: hidden;\n  cursor: default;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #A8FF78,\n      #EF4444);\n  border-radius: 10px;\n  transition: width 0.5s ease-in-out;\n  min-width: 3%;\n}\n.box-actions-inline[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.btn-restore-mini[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n  border: none;\n  padding: 8px 12px;\n  border-radius: 20px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.15s, background 0.2s;\n  white-space: nowrap;\n}\n.btn-restore-mini[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.btn-restore-mini[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.btn-restore-mini[_ngcontent-%COMP%]:hover {\n  background: rgba(58, 171, 219, 0.18);\n}\n.btn-delete-mini[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n  border: none;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  font-size: 1.1rem;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: transform 0.15s, background 0.2s;\n}\n.btn-delete-mini[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn-delete-mini[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.btn-delete-mini[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.2);\n}\n.floating-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 18px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: calc(100% - 32px);\n  max-width: 520px;\n  height: 66px;\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border-radius: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.95);\n  box-shadow: 0 8px 32px rgba(58, 171, 219, 0.13), 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 8px;\n  z-index: 1000;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 55%;\n  height: 22px;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(58, 171, 219, 0.22),\n      transparent 70%);\n  pointer-events: none;\n  z-index: -1;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 18px;\n  transition: background 0.2s;\n  text-decoration: none;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  color: #3AABDB;\n  transition: color 0.2s;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #3AABDB;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #1A7FA8;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1A7FA8;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:not(.active):hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -26px;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  border: none !important;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A) !important;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 25px rgba(90, 158, 42, 0.4) !important;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  color: #FFFFFF !important;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) translateY(-3px);\n  box-shadow: 0 15px 30px rgba(90, 158, 42, 0.5) !important;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.floating-nav[_ngcontent-%COMP%]   .avatar-circle-nav[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.12);\n  color: #3AABDB;\n  font-size: 0.8rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid rgba(58, 171, 219, 0.4);\n  transition: all 0.2s;\n}\n.floating-nav[_ngcontent-%COMP%]   .avatar-circle-nav.active[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.18);\n  color: #1A7FA8;\n  border-color: #1A7FA8;\n  box-shadow: 0 2px 8px rgba(58, 171, 219, 0.3);\n}\n@media (max-width: 399px) {\n  .page-wrapper[_ngcontent-%COMP%] {\n    padding: 10px clamp(20px, 3.5vw, 56px) 90px;\n  }\n  .floating-box-card[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 20px;\n  }\n  .box-card-compact[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n    padding: 14px 16px;\n  }\n  .box-progress-center[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0;\n    width: 100%;\n  }\n  .box-actions-inline[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .box-list-container[_ngcontent-%COMP%] {\n    max-height: 320px;\n  }\n}\n@media (min-width: 768px) {\n  .page-wrapper[_ngcontent-%COMP%] {\n    padding: 16px clamp(20px, 3.5vw, 56px) 110px;\n  }\n  .floating-box-card[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n  .box-list-container[_ngcontent-%COMP%] {\n    max-height: 520px;\n  }\n}\n@media (min-width: 1024px) {\n  .page-wrapper[_ngcontent-%COMP%] {\n    padding: 20px clamp(20px, 3.5vw, 56px) 110px;\n  }\n  .floating-box-card[_ngcontent-%COMP%] {\n    padding: 36px;\n  }\n  .box-list-container[_ngcontent-%COMP%] {\n    max-height: 600px;\n  }\n}\n/*# sourceMappingURL=cestino.page.css.map */'] });
var CestinoPage = _CestinoPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CestinoPage, [{
    type: Component,
    args: [{ selector: "app-cestino", standalone: true, imports: [
      CommonModule,
      RouterModule,
      DatePipe,
      IonHeader,
      IonToolbar,
      IonContent,
      IonIcon
    ], template: `<ion-header class="ion-no-border">\r
  <ion-toolbar class="peek-toolbar">\r
    <div class="header-inner">\r
      <div class="header-top">\r
        <div class="header-greet">\r
          <img src="assets/icon/logoTitolo1.png" class="header-logo" alt="PeekBox" />\r
          <h1 class="header-greeting">CESTINO</h1>\r
        </div>\r
      </div>\r
    </div>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content [fullscreen]="true">\r
  <div class="page-wrapper">\r
\r
    <div class="floating-box-card">\r
\r
      <p class="info-text">\r
        <ion-icon name="trash-outline" class="info-icon"></ion-icon>\r
        Box e oggetti vengono rimossi definitivamente dopo 30 giorni dall'eliminazione.\r
      </p>\r
\r
      <!-- LOADING -->\r
      <div *ngIf="isLoading" class="loading-state">\r
        <div class="spinner"></div>\r
        <p>Caricamento in corso...</p>\r
      </div>\r
\r
      <!-- PREMIUM EMPTY STATE -->\r
      <div class="premium-empty-state" *ngIf="!isLoading && boxEliminate.length === 0 && oggettiEliminati.length === 0">\r
        <div class="empty-icon-glow">\r
          <ion-icon name="trash-bin-outline"></ion-icon>\r
        </div>\r
        <h2>Cestino Vuoto</h2>\r
        <p>Non ci sono elementi eliminati. Il tuo spazio \xE8 perfettamente in ordine.</p>\r
      </div>\r
\r
      <!-- LISTA BOX ELIMINATE -->\r
      <div class="section-label" *ngIf="boxEliminate.length > 0">\r
        <ion-icon name="cube-outline"></ion-icon> Box\r
      </div>\r
      <div class="box-list-container" *ngIf="boxEliminate.length > 0">\r
\r
        <div class="box-card-compact" *ngFor="let box of boxEliminate">\r
\r
          <div class="box-info">\r
            <h3>{{ box.nome }}</h3>\r
            <span class="box-date">\r
              <ion-icon name="time-outline"></ion-icon>\r
              Eliminata il {{ box.data_eliminazione | date:'dd/MM/yyyy' }}\r
            </span>\r
          </div>\r
\r
          <div class="box-progress-center">\r
            <div class="progress-container"\r
                 [title]="giorniRimasti(box.data_eliminazione) + ' giorni rimasti'">\r
              <div class="progress-fill"\r
                   [style.width.%]="calcolaPercentualeScadenza(box.data_eliminazione)">\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="box-actions-inline">\r
            <button class="btn-restore-mini" (click)="recuperaBox(box)">\r
              <ion-icon name="refresh-outline"></ion-icon> Recupera\r
            </button>\r
            <button class="btn-delete-mini" (click)="eliminaDefinitivamente(box)">\r
              <ion-icon name="trash-outline"></ion-icon>\r
            </button>\r
          </div>\r
\r
        </div>\r
\r
      </div>\r
\r
      <!-- LISTA OGGETTI ELIMINATI -->\r
      <div class="section-label" *ngIf="oggettiEliminati.length > 0">\r
        <ion-icon name="document-text-outline"></ion-icon> Oggetti\r
      </div>\r
      <div class="box-list-container" *ngIf="oggettiEliminati.length > 0">\r
\r
        <div class="box-card-compact" *ngFor="let ogg of oggettiEliminati">\r
\r
          <div class="box-info">\r
            <h3>{{ ogg.nome }}</h3>\r
            <span class="box-date">\r
              <ion-icon name="time-outline"></ion-icon>\r
              Eliminato il {{ ogg.data_eliminazione | date:'dd/MM/yyyy' }}\r
            </span>\r
            <span class="box-origin">\r
              <ion-icon name="cube-outline"></ion-icon>\r
              da {{ ogg.box_nome }}\r
            </span>\r
          </div>\r
\r
          <div class="box-progress-center">\r
            <div class="progress-container"\r
                 [title]="giorniRimasti(ogg.data_eliminazione) + ' giorni rimasti'">\r
              <div class="progress-fill"\r
                   [style.width.%]="calcolaPercentualeScadenza(ogg.data_eliminazione)">\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="box-actions-inline">\r
            <button class="btn-restore-mini" (click)="recuperaOggetto(ogg)">\r
              <ion-icon name="refresh-outline"></ion-icon> Recupera\r
            </button>\r
            <button class="btn-delete-mini" (click)="eliminaOggettoDefinitivamente(ogg)">\r
              <ion-icon name="trash-outline"></ion-icon>\r
            </button>\r
          </div>\r
\r
        </div>\r
\r
      </div>\r
\r
    </div>\r
\r
  </div>\r
</ion-content>\r
\r
<!-- FLOATING BOTTOM NAV \u2014 identica alla homepage -->\r
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
</div>\r
`, styles: ['/* src/app/cestino/cestino.page.scss */\nion-header {\n  background: #FFFFFF;\n}\nion-toolbar.peek-toolbar {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\n.header-inner {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo:hover {\n  opacity: 0.75;\n}\n.header-logo:active {\n  opacity: 0.55;\n}\n.header-greeting {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\nion-content {\n  --background: #F4F7F9;\n  --overflow: auto;\n  --padding-bottom: 110px;\n}\n.page-wrapper {\n  padding: 12px clamp(20px, 3.5vw, 56px) 100px;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n}\n.floating-box-card {\n  background: #FFFFFF;\n  border-radius: 32px;\n  padding: 25px;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.03);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.info-text {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 18px;\n  color: #4A7A94;\n  font-size: 0.88rem;\n  font-family: "Poppins", sans-serif;\n  line-height: 1.4;\n}\n.info-text .info-icon {\n  font-size: 1.2rem;\n  color: #3AABDB;\n  flex-shrink: 0;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  padding: 50px 20px;\n  color: #4A7A94;\n}\n.loading-state .spinner {\n  width: 34px;\n  height: 34px;\n  border: 3px solid #EBF5FB;\n  border-top-color: #3AABDB;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.premium-empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.premium-empty-state .empty-icon-glow {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.05);\n  color: #3AABDB;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.5rem;\n  margin-bottom: 20px;\n  box-shadow: 0 0 30px rgba(58, 171, 219, 0.1);\n}\n.premium-empty-state .empty-icon-glow ion-icon {\n  font-size: 2.5rem;\n}\n.premium-empty-state h2 {\n  font-family: "Poppins", sans-serif;\n  font-size: 1.4rem;\n  color: #0F172A;\n  margin: 0 0 8px;\n  font-weight: 800;\n}\n.premium-empty-state p {\n  color: #4A7A94;\n  font-size: 0.95rem;\n  line-height: 1.5;\n  max-width: 300px;\n  margin: 0;\n}\n.section-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #4A7A94;\n  margin: 16px 0 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.section-label ion-icon {\n  font-size: 1rem;\n}\n.box-origin {\n  font-size: 0.75rem;\n  color: #4A7A94;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-family: "Poppins", sans-serif;\n}\n.box-origin ion-icon {\n  font-size: 0.8rem;\n}\n.box-list-container {\n  max-height: 420px;\n  overflow-y: auto !important;\n  padding-right: 4px;\n}\n.box-list-container::-webkit-scrollbar {\n  width: 4px;\n}\n.box-list-container::-webkit-scrollbar-track {\n  background: transparent;\n}\n.box-list-container::-webkit-scrollbar-thumb {\n  background: rgba(125, 199, 64, 0.35);\n  border-radius: 4px;\n}\n.box-card-compact {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #FFFFFF;\n  border-radius: 16px;\n  padding: 16px 20px;\n  margin-bottom: 12px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  gap: 20px;\n  transition: box-shadow 0.2s;\n}\n.box-card-compact:last-child {\n  margin-bottom: 0;\n}\n.box-card-compact:hover {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);\n}\n.box-info {\n  flex: 1;\n  min-width: 150px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.box-info h3 {\n  margin: 0;\n  font-size: 1rem;\n  color: #0F172A;\n  font-weight: 800;\n  text-transform: uppercase;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.box-progress-center {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  max-width: 350px;\n  padding: 0 15px;\n}\n.box-date {\n  font-size: 0.78rem;\n  color: #4A7A94;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-family: "Poppins", sans-serif;\n}\n.box-date ion-icon {\n  font-size: 0.82rem;\n}\n.progress-container {\n  width: 100%;\n  height: 8px;\n  background-color: #EBF5FB;\n  border-radius: 10px;\n  overflow: hidden;\n  cursor: default;\n}\n.progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #A8FF78,\n      #EF4444);\n  border-radius: 10px;\n  transition: width 0.5s ease-in-out;\n  min-width: 3%;\n}\n.box-actions-inline {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.btn-restore-mini {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n  border: none;\n  padding: 8px 12px;\n  border-radius: 20px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.15s, background 0.2s;\n  white-space: nowrap;\n}\n.btn-restore-mini ion-icon {\n  font-size: 0.95rem;\n}\n.btn-restore-mini:active {\n  transform: scale(0.95);\n}\n.btn-restore-mini:hover {\n  background: rgba(58, 171, 219, 0.18);\n}\n.btn-delete-mini {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n  border: none;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  font-size: 1.1rem;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: transform 0.15s, background 0.2s;\n}\n.btn-delete-mini ion-icon {\n  font-size: 1rem;\n}\n.btn-delete-mini:active {\n  transform: scale(0.95);\n}\n.btn-delete-mini:hover {\n  background: rgba(239, 68, 68, 0.2);\n}\n.floating-nav {\n  position: fixed;\n  bottom: 18px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: calc(100% - 32px);\n  max-width: 520px;\n  height: 66px;\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border-radius: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.95);\n  box-shadow: 0 8px 32px rgba(58, 171, 219, 0.13), 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 8px;\n  z-index: 1000;\n}\n.floating-nav .nav-glow {\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 55%;\n  height: 22px;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(58, 171, 219, 0.22),\n      transparent 70%);\n  pointer-events: none;\n  z-index: -1;\n}\n.floating-nav .nav-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 18px;\n  transition: background 0.2s;\n  text-decoration: none;\n}\n.floating-nav .nav-item ion-icon {\n  font-size: 1.35rem;\n  color: #3AABDB;\n  transition: color 0.2s;\n}\n.floating-nav .nav-item span {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #3AABDB;\n}\n.floating-nav .nav-item.active ion-icon {\n  color: #1A7FA8;\n}\n.floating-nav .nav-item.active span {\n  color: #1A7FA8;\n}\n.floating-nav .nav-item:not(.active):hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.floating-nav .nav-fab-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -26px;\n}\n.floating-nav .nav-fab-wrapper .nav-fab {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  border: none !important;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A) !important;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 25px rgba(90, 158, 42, 0.4) !important;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.floating-nav .nav-fab-wrapper .nav-fab ion-icon {\n  font-size: 1.7rem;\n  color: #FFFFFF !important;\n}\n.floating-nav .nav-fab-wrapper .nav-fab:hover {\n  transform: scale(1.1) translateY(-3px);\n  box-shadow: 0 15px 30px rgba(90, 158, 42, 0.5) !important;\n}\n.floating-nav .nav-fab-wrapper .nav-fab:active {\n  transform: scale(0.95);\n}\n.floating-nav .avatar-circle-nav {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.12);\n  color: #3AABDB;\n  font-size: 0.8rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid rgba(58, 171, 219, 0.4);\n  transition: all 0.2s;\n}\n.floating-nav .avatar-circle-nav.active {\n  background: rgba(58, 171, 219, 0.18);\n  color: #1A7FA8;\n  border-color: #1A7FA8;\n  box-shadow: 0 2px 8px rgba(58, 171, 219, 0.3);\n}\n@media (max-width: 399px) {\n  .page-wrapper {\n    padding: 10px clamp(20px, 3.5vw, 56px) 90px;\n  }\n  .floating-box-card {\n    padding: 16px;\n    border-radius: 20px;\n  }\n  .box-card-compact {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n    padding: 14px 16px;\n  }\n  .box-progress-center {\n    max-width: 100%;\n    padding: 0;\n    width: 100%;\n  }\n  .box-actions-inline {\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .box-list-container {\n    max-height: 320px;\n  }\n}\n@media (min-width: 768px) {\n  .page-wrapper {\n    padding: 16px clamp(20px, 3.5vw, 56px) 110px;\n  }\n  .floating-box-card {\n    padding: 30px;\n  }\n  .box-list-container {\n    max-height: 520px;\n  }\n}\n@media (min-width: 1024px) {\n  .page-wrapper {\n    padding: 20px clamp(20px, 3.5vw, 56px) 110px;\n  }\n  .floating-box-card {\n    padding: 36px;\n  }\n  .box-list-container {\n    max-height: 600px;\n  }\n}\n/*# sourceMappingURL=cestino.page.css.map */\n'] }]
  }], () => [{ type: DatabaseService }, { type: Router }, { type: AlertController }, { type: ToastController }, { type: NavigationHistoryService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CestinoPage, { className: "CestinoPage", filePath: "src/app/cestino/cestino.page.ts", lineNumber: 30 });
})();
export {
  CestinoPage
};
//# sourceMappingURL=cestino.page-GKYZOLMI.js.map
