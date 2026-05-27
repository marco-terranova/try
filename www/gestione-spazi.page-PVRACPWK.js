import {
  AlertController
} from "./chunk-UWSSEREE.js";
import {
  DatabaseService
} from "./chunk-5G3PJOGU.js";
import {
  add,
  addCircleOutline,
  addIcons,
  archiveOutline,
  chatbubblesOutline,
  checkmarkOutline,
  closeOutline,
  home,
  pencilOutline,
  qrCodeOutline,
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
  NavigationHistoryService
} from "./chunk-R5EA4FTC.js";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar
} from "./chunk-VSLPI6WN.js";
import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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

// src/app/gestione-spazi/gestione-spazi.page.ts
function GestioneSpaziPage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Caricamento spazi...");
    \u0275\u0275elementEnd()();
  }
}
function GestioneSpaziPage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Nessuno spazio creato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Crea il tuo primo spazio qui sopra per iniziare a organizzare le box.");
    \u0275\u0275elementEnd()();
  }
}
function GestioneSpaziPage_div_19_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275element(2, "ion-icon", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39)(6, "button", 40);
    \u0275\u0275listener("click", function GestioneSpaziPage_div_19_div_1_div_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const spazio_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.avviaModificaSpazio(spazio_r2));
    });
    \u0275\u0275element(7, "ion-icon", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 42);
    \u0275\u0275listener("click", function GestioneSpaziPage_div_19_div_1_div_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const spazio_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confermaEliminaSpazio(spazio_r2));
    });
    \u0275\u0275element(9, "ion-icon", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const spazio_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(spazio_r2.nome);
  }
}
function GestioneSpaziPage_div_19_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function GestioneSpaziPage_div_19_div_1_div_2_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.nomeModificaSpazio, $event) || (ctx_r2.nomeModificaSpazio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function GestioneSpaziPage_div_19_div_1_div_2_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r4);
      const spazio_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.salvaModificaSpazio(spazio_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 46)(3, "button", 47);
    \u0275\u0275listener("click", function GestioneSpaziPage_div_19_div_1_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const spazio_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.salvaModificaSpazio(spazio_r2));
    });
    \u0275\u0275element(4, "ion-icon", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 49);
    \u0275\u0275listener("click", function GestioneSpaziPage_div_19_div_1_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.annullaModifica());
    });
    \u0275\u0275element(6, "ion-icon", 50);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.nomeModificaSpazio);
  }
}
function GestioneSpaziPage_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, GestioneSpaziPage_div_19_div_1_div_1_Template, 10, 1, "div", 33)(2, GestioneSpaziPage_div_19_div_1_div_2_Template, 7, 1, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const spazio_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.spazioInModifica !== spazio_r2.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.spazioInModifica === spazio_r2.id);
  }
}
function GestioneSpaziPage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, GestioneSpaziPage_div_19_div_1_Template, 3, 2, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.gliArmadi);
  }
}
var _GestioneSpaziPage = class _GestioneSpaziPage {
  constructor(alertCtrl, dbService, router, navHistory) {
    this.alertCtrl = alertCtrl;
    this.dbService = dbService;
    this.router = router;
    this.navHistory = navHistory;
    this.nomeUtente = "";
    this.utenteId = null;
    this.gliArmadi = [];
    this.isLoadingSpazi = false;
    this.nuovoNomeSpazio = "";
    this.spazioInModifica = null;
    this.nomeModificaSpazio = "";
    addIcons({
      "archive-outline": archiveOutline,
      "add-circle-outline": addCircleOutline,
      "pencil-outline": pencilOutline,
      "trash-outline": trashOutline,
      "checkmark-outline": checkmarkOutline,
      "close-outline": closeOutline,
      "home": home,
      "chatbubbles-outline": chatbubblesOutline,
      "qr-code-outline": qrCodeOutline,
      "add": add
    });
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.utenteId = localStorage.getItem("utente_id");
    this.nomeUtente = (localStorage.getItem("utente_nome") || "").toUpperCase();
    this.caricaSpazi();
  }
  caricaSpazi() {
    if (!this.utenteId)
      return;
    this.isLoadingSpazi = true;
    this.gliArmadi = [];
    this.dbService.getArmadi(this.utenteId).subscribe({
      next: (res) => {
        this.gliArmadi = res.armadi || res || [];
        this.isLoadingSpazi = false;
      },
      error: () => {
        this.isLoadingSpazi = false;
      }
    });
  }
  aggiungiSpazio() {
    const nome = this.nuovoNomeSpazio.trim();
    if (!nome || !this.utenteId)
      return;
    this.dbService.creaArmadio(nome, this.utenteId).subscribe({
      next: (res) => {
        const nuovoId = res.id || res.id_armadio || Date.now();
        this.gliArmadi = [...this.gliArmadi, { id: nuovoId, nome }];
        this.nuovoNomeSpazio = "";
      },
      error: () => {
      }
    });
  }
  avviaModificaSpazio(spazio) {
    this.spazioInModifica = spazio.id;
    this.nomeModificaSpazio = spazio.nome;
  }
  salvaModificaSpazio(spazio) {
    const nuovoNome = this.nomeModificaSpazio.trim();
    if (!nuovoNome) {
      this.annullaModifica();
      return;
    }
    spazio.nome = nuovoNome;
    this.annullaModifica();
  }
  annullaModifica() {
    this.spazioInModifica = null;
    this.nomeModificaSpazio = "";
  }
  confermaEliminaSpazio(spazio) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Elimina Spazio",
        message: `Sei sicuro di voler eliminare "${spazio.nome}"?`,
        buttons: [
          { text: "Annulla", role: "cancel" },
          { text: "Elimina", role: "destructive", handler: () => this.eliminaSpazio(spazio) }
        ]
      });
      yield alert.present();
    });
  }
  eliminaSpazio(spazio) {
    this.dbService.eliminaArmadio(spazio.id).subscribe({
      next: () => {
        this.gliArmadi = this.gliArmadi.filter((a) => a.id !== spazio.id);
      },
      error: () => {
      }
    });
  }
  goBack() {
    this.navHistory.back("/area-personale");
  }
  vaiHome() {
    this.navHistory.navTo("/home");
  }
  navTo(route) {
    this.navHistory.navTo(route);
  }
};
_GestioneSpaziPage.\u0275fac = function GestioneSpaziPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GestioneSpaziPage)(\u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(DatabaseService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NavigationHistoryService));
};
_GestioneSpaziPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GestioneSpaziPage, selectors: [["app-gestione-spazi"]], decls: 42, vars: 6, consts: [[1, "ion-no-border"], [1, "peek-toolbar"], [1, "header-inner"], [1, "header-top"], [1, "header-greet"], ["src", "assets/icon/logoTitolo1.png", "alt", "PeekBox", 1, "header-logo"], [1, "header-greeting"], [1, "nome-verde"], [1, "page-wrapper"], [1, "add-space-row"], ["type", "text", "placeholder", "Nome nuovo spazio (es. Garage, Cantina...)", 1, "add-space-input", 3, "ngModelChange", "ngModel"], [1, "btn-add-space", 3, "click", "disabled"], ["name", "add-circle-outline"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "spaces-list", 4, "ngIf"], [1, "floating-nav"], [1, "nav-glow"], [1, "nav-item", 3, "click"], ["name", "home"], ["name", "chatbubbles-outline"], [1, "nav-fab-wrapper"], [1, "nav-fab", 3, "click"], ["name", "add"], ["name", "qr-code-outline"], [1, "avatar-circle-nav"], [1, "loading-state"], [1, "spinner"], [1, "empty-state"], [1, "empty-icon"], [1, "spaces-list"], ["class", "space-card", 4, "ngFor", "ngForOf"], [1, "space-card"], ["class", "space-card-view", 4, "ngIf"], ["class", "space-card-edit", 4, "ngIf"], [1, "space-card-view"], [1, "space-icon-wrap"], ["name", "archive-outline"], [1, "space-nome"], [1, "space-actions"], [1, "btn-edit-space", 3, "click"], ["name", "pencil-outline"], [1, "btn-delete-space", 3, "click"], ["name", "trash-outline"], [1, "space-card-edit"], ["type", "text", 1, "edit-space-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "edit-actions"], [1, "btn-confirm-edit", 3, "click"], ["name", "checkmark-outline"], [1, "btn-cancel-edit", 3, "click"], ["name", "close-outline"]], template: function GestioneSpaziPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275element(5, "img", 5);
    \u0275\u0275elementStart(6, "h1", 6);
    \u0275\u0275text(7, "GESTIONE ");
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9, "SPAZI");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(10, "ion-content")(11, "div", 8)(12, "div", 9)(13, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function GestioneSpaziPage_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.nuovoNomeSpazio, $event) || (ctx.nuovoNomeSpazio = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275listener("click", function GestioneSpaziPage_Template_button_click_14_listener() {
      return ctx.aggiungiSpazio();
    });
    \u0275\u0275element(15, "ion-icon", 12);
    \u0275\u0275text(16, " Aggiungi ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, GestioneSpaziPage_div_17_Template, 4, 0, "div", 13)(18, GestioneSpaziPage_div_18_Template, 7, 0, "div", 14)(19, GestioneSpaziPage_div_19_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 16);
    \u0275\u0275element(21, "div", 17);
    \u0275\u0275elementStart(22, "div", 18);
    \u0275\u0275listener("click", function GestioneSpaziPage_Template_div_click_22_listener() {
      return ctx.vaiHome();
    });
    \u0275\u0275element(23, "ion-icon", 19);
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 18);
    \u0275\u0275listener("click", function GestioneSpaziPage_Template_div_click_26_listener() {
      return ctx.navTo("/box-ricevute");
    });
    \u0275\u0275element(27, "ion-icon", 20);
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "Avvisi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 21)(31, "button", 22);
    \u0275\u0275listener("click", function GestioneSpaziPage_Template_button_click_31_listener() {
      return ctx.navTo("/crea-box");
    });
    \u0275\u0275element(32, "ion-icon", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 18);
    \u0275\u0275listener("click", function GestioneSpaziPage_Template_div_click_33_listener() {
      return ctx.navTo("/scan-qr");
    });
    \u0275\u0275element(34, "ion-icon", 24);
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "Scan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 18);
    \u0275\u0275listener("click", function GestioneSpaziPage_Template_div_click_37_listener() {
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
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx.nuovoNomeSpazio);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx.nuovoNomeSpazio);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.isLoadingSpazi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoadingSpazi && ctx.gliArmadi.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoadingSpazi && ctx.gliArmadi.length > 0);
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate1(" ", ctx.nomeUtente ? ctx.nomeUtente.charAt(0).toUpperCase() : "U", " ");
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  RouterModule,
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon
], styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\nion-header[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n}\nion-toolbar.peek-toolbar[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --border-width: 0;\n  padding: 0;\n}\n.header-inner[_ngcontent-%COMP%] {\n  padding: 16px clamp(20px, 3.5vw, 56px) 10px;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0;\n}\n.header-greet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-greet[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n  height: 32px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-greet[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.header-greet[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]:active {\n  opacity: 0.55;\n}\n.header-greeting[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A) !important;\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent !important;\n  background-clip: text !important;\n  font-weight: 900 !important;\n  text-shadow: 0px 4px 10px rgba(125, 199, 64, 0.3);\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #F4F7F9 !important;\n  --overflow: auto;\n  --padding-bottom: 100px;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  padding: 16px clamp(20px, 3.5vw, 56px) 20px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  box-sizing: border-box;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n}\n.add-space-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  background: #FFFFFF;\n  border-radius: 50px;\n  padding: 8px 8px 8px 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  flex-shrink: 0;\n}\n.add-space-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  color: #0F172A;\n}\n.add-space-input[_ngcontent-%COMP%]::placeholder {\n  color: #4A7A94;\n}\n.btn-add-space[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  color: #FFFFFF;\n  border: none;\n  border-radius: 50px;\n  padding: 10px 18px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(125, 199, 64, 0.35);\n  transition: transform 0.15s;\n}\n.btn-add-space[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.btn-add-space[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.btn-add-space[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n}\n.spaces-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow-y: auto;\n}\n.space-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.space-card-view[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 18px;\n}\n.space-icon-wrap[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: rgba(58, 171, 219, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.space-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #3AABDB;\n}\n.space-nome[_ngcontent-%COMP%] {\n  flex: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #0F172A;\n}\n.space-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-edit-space[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-edit-space[_ngcontent-%COMP%]:hover {\n  background: rgba(58, 171, 219, 0.2);\n}\n.btn-delete-space[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(239, 68, 68, 0.08);\n  color: #EF4444;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-delete-space[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.16);\n}\n.space-card-edit[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: rgba(58, 171, 219, 0.04);\n}\n.edit-space-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1.5px solid rgba(58, 171, 219, 0.4);\n  border-radius: 12px;\n  padding: 9px 14px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  color: #0F172A;\n  outline: none;\n}\n.edit-space-input[_ngcontent-%COMP%]:focus {\n  border-color: #3AABDB;\n}\n.edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-confirm-edit[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  color: #FFFFFF;\n  font-size: 1.1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.btn-cancel-edit[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(74, 122, 148, 0.1);\n  color: #4A7A94;\n  font-size: 1.1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 60px 20px;\n  color: #4A7A94;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid rgba(58, 171, 219, 0.18);\n  border-top-color: #3AABDB;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 6px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4A7A94;\n  font-size: 0.88rem;\n  margin: 0;\n}\n.floating-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 18px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: calc(100% - 32px);\n  max-width: 520px;\n  height: 66px;\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border-radius: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.95);\n  box-shadow: 0 8px 32px rgba(58, 171, 219, 0.13), 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 8px;\n  z-index: 1000;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 55%;\n  height: 22px;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(58, 171, 219, 0.22),\n      transparent 70%);\n  pointer-events: none;\n  z-index: -1;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 18px;\n  transition: background 0.2s;\n  text-decoration: none;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  color: #3AABDB;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #3AABDB;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:not(.active):hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -26px;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  border: none !important;\n  background:\n    linear-gradient(\n      135deg,\n      #A8FF78,\n      #7DC740) !important;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 25px rgba(125, 199, 64, 0.4) !important;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  color: #FFFFFF !important;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) translateY(-3px);\n  box-shadow: 0 15px 30px rgba(125, 199, 64, 0.5) !important;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.floating-nav[_ngcontent-%COMP%]   .avatar-circle-nav[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.12);\n  color: #3AABDB;\n  font-size: 0.8rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid rgba(58, 171, 219, 0.4);\n}\n@media (max-width: 399px) {\n  .page-wrapper[_ngcontent-%COMP%] {\n    padding: 12px clamp(20px, 3.5vw, 56px) 16px;\n  }\n  .add-space-row[_ngcontent-%COMP%] {\n    padding: 6px 6px 6px 14px;\n  }\n  .btn-add-space[_ngcontent-%COMP%] {\n    padding: 8px 14px;\n    font-size: 0.78rem;\n  }\n  .space-card-view[_ngcontent-%COMP%] {\n    padding: 12px 14px;\n    gap: 10px;\n  }\n  .space-nome[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .btn-edit-space[_ngcontent-%COMP%], \n   .btn-delete-space[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n}\n@media (min-width: 768px) {\n  .page-wrapper[_ngcontent-%COMP%] {\n    padding: 18px clamp(20px, 3.5vw, 56px) 24px;\n  }\n}\n@media (min-width: 1024px) {\n  .page-wrapper[_ngcontent-%COMP%] {\n    padding: 20px clamp(20px, 3.5vw, 56px) 28px;\n  }\n}\n/*# sourceMappingURL=gestione-spazi.page.css.map */'] });
var GestioneSpaziPage = _GestioneSpaziPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GestioneSpaziPage, [{
    type: Component,
    args: [{ selector: "app-gestione-spazi", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
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
          <h1 class="header-greeting">GESTIONE <span class="nome-verde">SPAZI</span></h1>\r
        </div>\r
      </div>\r
    </div>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content>\r
  <div class="page-wrapper">\r
\r
    <!-- Aggiungi nuovo spazio -->\r
    <div class="add-space-row">\r
      <input\r
        type="text"\r
        class="add-space-input"\r
        [(ngModel)]="nuovoNomeSpazio"\r
        placeholder="Nome nuovo spazio (es. Garage, Cantina...)"\r
      />\r
      <button class="btn-add-space" (click)="aggiungiSpazio()" [disabled]="!nuovoNomeSpazio">\r
        <ion-icon name="add-circle-outline"></ion-icon>\r
        Aggiungi\r
      </button>\r
    </div>\r
\r
    <!-- Loading -->\r
    <div *ngIf="isLoadingSpazi" class="loading-state">\r
      <div class="spinner"></div>\r
      <p>Caricamento spazi...</p>\r
    </div>\r
\r
    <!-- Empty -->\r
    <div *ngIf="!isLoadingSpazi && gliArmadi.length === 0" class="empty-state">\r
      <div class="empty-icon">\u{1F4E6}</div>\r
      <h3>Nessuno spazio creato</h3>\r
      <p>Crea il tuo primo spazio qui sopra per iniziare a organizzare le box.</p>\r
    </div>\r
\r
    <!-- Spaces list -->\r
    <div *ngIf="!isLoadingSpazi && gliArmadi.length > 0" class="spaces-list">\r
      <div *ngFor="let spazio of gliArmadi" class="space-card">\r
\r
        <!-- View mode -->\r
        <div *ngIf="spazioInModifica !== spazio.id" class="space-card-view">\r
          <div class="space-icon-wrap">\r
            <ion-icon name="archive-outline"></ion-icon>\r
          </div>\r
          <span class="space-nome">{{ spazio.nome }}</span>\r
          <div class="space-actions">\r
            <button class="btn-edit-space" (click)="avviaModificaSpazio(spazio)">\r
              <ion-icon name="pencil-outline"></ion-icon>\r
            </button>\r
            <button class="btn-delete-space" (click)="confermaEliminaSpazio(spazio)">\r
              <ion-icon name="trash-outline"></ion-icon>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Edit mode -->\r
        <div *ngIf="spazioInModifica === spazio.id" class="space-card-edit">\r
          <input\r
            type="text"\r
            class="edit-space-input"\r
            [(ngModel)]="nomeModificaSpazio"\r
            (keyup.enter)="salvaModificaSpazio(spazio)"\r
          />\r
          <div class="edit-actions">\r
            <button class="btn-confirm-edit" (click)="salvaModificaSpazio(spazio)">\r
              <ion-icon name="checkmark-outline"></ion-icon>\r
            </button>\r
            <button class="btn-cancel-edit" (click)="annullaModifica()">\r
              <ion-icon name="close-outline"></ion-icon>\r
            </button>\r
          </div>\r
        </div>\r
\r
      </div>\r
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
</div>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&display=swap";\n\n/* src/app/gestione-spazi/gestione-spazi.page.scss */\n:host {\n  display: block;\n}\nion-header {\n  --background: #F4F7F9;\n}\nion-toolbar.peek-toolbar {\n  --background: #F4F7F9;\n  --border-width: 0;\n  padding: 0;\n}\n.header-inner {\n  padding: 16px clamp(20px, 3.5vw, 56px) 10px;\n}\n.header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0;\n}\n.header-greet {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-greet .header-logo {\n  height: 32px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-greet .header-logo:hover {\n  opacity: 0.75;\n}\n.header-greet .header-logo:active {\n  opacity: 0.55;\n}\n.header-greeting {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A) !important;\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent !important;\n  background-clip: text !important;\n  font-weight: 900 !important;\n  text-shadow: 0px 4px 10px rgba(125, 199, 64, 0.3);\n}\nion-content {\n  --background: #F4F7F9 !important;\n  --overflow: auto;\n  --padding-bottom: 100px;\n}\n.page-wrapper {\n  padding: 16px clamp(20px, 3.5vw, 56px) 20px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  box-sizing: border-box;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n}\n.add-space-row {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  background: #FFFFFF;\n  border-radius: 50px;\n  padding: 8px 8px 8px 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  flex-shrink: 0;\n}\n.add-space-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  color: #0F172A;\n}\n.add-space-input::placeholder {\n  color: #4A7A94;\n}\n.btn-add-space {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  color: #FFFFFF;\n  border: none;\n  border-radius: 50px;\n  padding: 10px 18px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(125, 199, 64, 0.35);\n  transition: transform 0.15s;\n}\n.btn-add-space ion-icon {\n  font-size: 1.1rem;\n}\n.btn-add-space:active {\n  transform: scale(0.96);\n}\n.btn-add-space:disabled {\n  opacity: 0.4;\n}\n.spaces-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow-y: auto;\n}\n.space-card {\n  background: #FFFFFF;\n  border-radius: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.space-card-view {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 18px;\n}\n.space-icon-wrap {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: rgba(58, 171, 219, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.space-icon-wrap ion-icon {\n  font-size: 1.2rem;\n  color: #3AABDB;\n}\n.space-nome {\n  flex: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #0F172A;\n}\n.space-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-edit-space {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-edit-space:hover {\n  background: rgba(58, 171, 219, 0.2);\n}\n.btn-delete-space {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(239, 68, 68, 0.08);\n  color: #EF4444;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-delete-space:hover {\n  background: rgba(239, 68, 68, 0.16);\n}\n.space-card-edit {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: rgba(58, 171, 219, 0.04);\n}\n.edit-space-input {\n  flex: 1;\n  border: 1.5px solid rgba(58, 171, 219, 0.4);\n  border-radius: 12px;\n  padding: 9px 14px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  color: #0F172A;\n  outline: none;\n}\n.edit-space-input:focus {\n  border-color: #3AABDB;\n}\n.edit-actions {\n  display: flex;\n  gap: 6px;\n}\n.btn-confirm-edit {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  color: #FFFFFF;\n  font-size: 1.1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.btn-cancel-edit {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(74, 122, 148, 0.1);\n  color: #4A7A94;\n  font-size: 1.1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 60px 20px;\n  color: #4A7A94;\n}\n.loading-state .spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid rgba(58, 171, 219, 0.18);\n  border-top-color: #3AABDB;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.empty-state .empty-icon {\n  font-size: 3.5rem;\n  margin-bottom: 12px;\n}\n.empty-state h3 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 6px;\n}\n.empty-state p {\n  color: #4A7A94;\n  font-size: 0.88rem;\n  margin: 0;\n}\n.floating-nav {\n  position: fixed;\n  bottom: 18px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: calc(100% - 32px);\n  max-width: 520px;\n  height: 66px;\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border-radius: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.95);\n  box-shadow: 0 8px 32px rgba(58, 171, 219, 0.13), 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 8px;\n  z-index: 1000;\n}\n.floating-nav .nav-glow {\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 55%;\n  height: 22px;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(58, 171, 219, 0.22),\n      transparent 70%);\n  pointer-events: none;\n  z-index: -1;\n}\n.floating-nav .nav-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 18px;\n  transition: background 0.2s;\n  text-decoration: none;\n}\n.floating-nav .nav-item ion-icon {\n  font-size: 1.35rem;\n  color: #3AABDB;\n}\n.floating-nav .nav-item span {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #3AABDB;\n}\n.floating-nav .nav-item:not(.active):hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.floating-nav .nav-fab-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -26px;\n}\n.floating-nav .nav-fab-wrapper .nav-fab {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  border: none !important;\n  background:\n    linear-gradient(\n      135deg,\n      #A8FF78,\n      #7DC740) !important;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 25px rgba(125, 199, 64, 0.4) !important;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.floating-nav .nav-fab-wrapper .nav-fab ion-icon {\n  font-size: 1.7rem;\n  color: #FFFFFF !important;\n}\n.floating-nav .nav-fab-wrapper .nav-fab:hover {\n  transform: scale(1.1) translateY(-3px);\n  box-shadow: 0 15px 30px rgba(125, 199, 64, 0.5) !important;\n}\n.floating-nav .nav-fab-wrapper .nav-fab:active {\n  transform: scale(0.95);\n}\n.floating-nav .avatar-circle-nav {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.12);\n  color: #3AABDB;\n  font-size: 0.8rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid rgba(58, 171, 219, 0.4);\n}\n@media (max-width: 399px) {\n  .page-wrapper {\n    padding: 12px clamp(20px, 3.5vw, 56px) 16px;\n  }\n  .add-space-row {\n    padding: 6px 6px 6px 14px;\n  }\n  .btn-add-space {\n    padding: 8px 14px;\n    font-size: 0.78rem;\n  }\n  .space-card-view {\n    padding: 12px 14px;\n    gap: 10px;\n  }\n  .space-nome {\n    font-size: 0.85rem;\n  }\n  .btn-edit-space,\n  .btn-delete-space {\n    width: 32px;\n    height: 32px;\n  }\n}\n@media (min-width: 768px) {\n  .page-wrapper {\n    padding: 18px clamp(20px, 3.5vw, 56px) 24px;\n  }\n}\n@media (min-width: 1024px) {\n  .page-wrapper {\n    padding: 20px clamp(20px, 3.5vw, 56px) 28px;\n  }\n}\n/*# sourceMappingURL=gestione-spazi.page.css.map */\n'] }]
  }], () => [{ type: AlertController }, { type: DatabaseService }, { type: Router }, { type: NavigationHistoryService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GestioneSpaziPage, { className: "GestioneSpaziPage", filePath: "src/app/gestione-spazi/gestione-spazi.page.ts", lineNumber: 29 });
})();
export {
  GestioneSpaziPage
};
//# sourceMappingURL=gestione-spazi.page-PVRACPWK.js.map
