import {
  DatabaseService
} from "./chunk-5G3PJOGU.js";
import {
  add,
  addIcons,
  businessOutline,
  checkmarkCircleOutline,
  createOutline,
  cubeOutline,
  homeOutline,
  listOutline,
  locationOutline,
  personOutline,
  scanOutline,
  searchOutline
} from "./chunk-4ITIBTO3.js";
import {
  NavigationHistoryService
} from "./chunk-R5EA4FTC.js";
import {
  AlertController,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonTabBar,
  IonTabButton,
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
  RadioControlValueAccessor,
  Router,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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

// src/app/crea-box/crea-box.page.ts
function CreaBoxPage_ion_select_option_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const armadio_r1 = ctx.$implicit;
    \u0275\u0275property("value", armadio_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", armadio_r1.nome, " ");
  }
}
function CreaBoxPage_label_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 35)(1, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function CreaBoxPage_label_83_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.dimensione, $event) || (ctx_r2.dimensione = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 37);
    \u0275\u0275element(3, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275text(5, "Pallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 41);
    \u0275\u0275text(7, "max 100");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.dimensione === "pallet");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.dimensione);
  }
}
var _CreaBoxPage = class _CreaBoxPage {
  constructor(alertController, router, dbService, navHistory) {
    this.alertController = alertController;
    this.router = router;
    this.dbService = dbService;
    this.navHistory = navHistory;
    this.nome_box = "";
    this.descrizione = "";
    this.rif_armadio = "";
    this.is_preferito = false;
    this.dimensione = "piccola";
    this.armadi_disponibili = [];
    this.utenteId = "";
    this.tipoProfilo = "personal";
    addIcons({
      add,
      businessOutline,
      checkmarkCircleOutline,
      createOutline,
      cubeOutline,
      homeOutline,
      listOutline,
      locationOutline,
      personOutline,
      scanOutline,
      searchOutline
    });
  }
  ngOnInit() {
    this.utenteId = localStorage.getItem("utente_id") || "";
    this.tipoProfilo = localStorage.getItem("tipo_profilo") || "personal";
    if (this.utenteId) {
      this.caricaArmadi();
    }
  }
  caricaArmadi() {
    this.dbService.getArmadi(this.utenteId).subscribe({
      next: (res) => {
        this.armadi_disponibili = res.armadi || [];
      },
      error: (err) => console.error(err)
    });
  }
  aggiungiArmadio(event) {
    return __async(this, null, function* () {
      event.preventDefault();
      const alert = yield this.alertController.create({
        cssClass: "peekbox-alert",
        header: "Nuovo Spazio",
        inputs: [{ name: "nome_armadio", type: "text", placeholder: "Es. Ripostiglio, Garage..." }],
        buttons: [
          { text: "Annulla", role: "cancel" },
          {
            text: "Aggiungi",
            handler: (dati) => {
              if (dati.nome_armadio?.trim()) {
                this.dbService.creaArmadio(dati.nome_armadio.trim(), this.utenteId).subscribe({
                  next: (res) => {
                    this.caricaArmadi();
                    this.rif_armadio = res.id.toString();
                  },
                  error: (err) => console.error(err)
                });
              }
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  salvaNuovaBox() {
    if (!this.nome_box || !this.rif_armadio)
      return;
    this.dbService.creaBox(this.nome_box, this.rif_armadio, this.is_preferito, false, this.descrizione, this.dimensione).subscribe({
      next: () => {
        this.navHistory.navTo("/home");
      },
      error: (err) => console.error(err)
    });
  }
  navTo(route) {
    this.navHistory.navTo(route);
  }
};
_CreaBoxPage.\u0275fac = function CreaBoxPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreaBoxPage)(\u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DatabaseService), \u0275\u0275directiveInject(NavigationHistoryService));
};
_CreaBoxPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreaBoxPage, selectors: [["app-crea-box"]], decls: 105, vars: 15, consts: [[1, "ion-no-border"], [1, "peek-toolbar"], [1, "header-inner"], [1, "header-top"], [1, "header-greet"], ["src", "assets/icon/logoTitolo1.png", "alt", "PeekBox", 1, "header-logo", 2, "cursor", "pointer", 3, "click"], [1, "header-greeting"], [1, "nome-verde"], [1, "bg-light-saas"], [1, "page-wrapper"], [1, "create-plancia-grid"], [1, "quadrante-card"], [1, "quadrante-header"], [1, "icon-cerchio", "azzurro"], ["name", "create-outline"], [1, "form-layout-internal", "filled-height"], [1, "input-gruppo"], [1, "input-wrapper"], ["name", "cube-outline"], ["type", "text", "placeholder", "Es. Abbigliamento Invernale", 3, "ngModelChange", "ngModel"], [1, "input-gruppo", "flex-expand"], [1, "input-wrapper", "textarea-wrapper", "full-grow"], ["name", "list-outline"], ["placeholder", "Cosa metterai all'interno? (es. maglioni, sciarpe, giubbotti di lana...)", 3, "ngModelChange", "ngModel"], [1, "quadrante-card", "space-setup-card"], [1, "icon-cerchio", "verde"], ["name", "location-outline"], [1, "layout-split-dx"], [1, "label-row"], ["type", "button", 1, "new-space-link", 3, "click"], [1, "input-wrapper", "select-wrapper"], ["name", "business-outline"], ["placeholder", "Seleziona uno spazio", "interface", "popover", 1, "select-spazio", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "dimensioni-grid"], [1, "dim-card"], ["type", "radio", "name", "dimensione", "value", "piccola", 3, "ngModelChange", "ngModel"], [1, "dim-visual"], [1, "stack-3d"], [1, "cube", "p"], [1, "dim-nome"], [1, "dim-cap"], [1, "dim-glow"], ["type", "radio", "name", "dimensione", "value", "media", 3, "ngModelChange", "ngModel"], [1, "cube", "m"], ["type", "radio", "name", "dimensione", "value", "grande", 3, "ngModelChange", "ngModel"], [1, "cube", "g"], ["class", "dim-card", 3, "active", 4, "ngIf"], [1, "box-preview-render-frame", "giant-view"], [1, "glow-effect"], ["src", "assets/icon/box-icon.png", "alt", "Box Preview", 1, "box-render-asset-giant"], [1, "action-area-button"], [1, "btn-submit-premium-green", 3, "click", "disabled"], ["name", "checkmark-circle-outline"], ["slot", "bottom", 1, "custom-tab-bar"], ["tab", "home", 3, "click"], ["name", "home-outline"], ["tab", "search", 3, "click"], ["name", "search-outline"], [1, "add-button-tab", 3, "click"], [1, "add-btn-circle", "active-btn"], ["name", "add"], ["tab", "scan", 3, "click"], ["name", "scan-outline"], ["tab", "profile", 3, "click"], ["name", "person-outline"], [3, "value"], ["type", "radio", "name", "dimensione", "value", "pallet", 3, "ngModelChange", "ngModel"], [1, "pallet-3d"]], template: function CreaBoxPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "img", 5);
    \u0275\u0275listener("click", function CreaBoxPage_Template_img_click_5_listener() {
      return ctx.navTo("/home");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 6);
    \u0275\u0275text(7, "CREA ");
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9, "BOX");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(10, "ion-content", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13);
    \u0275\u0275element(16, "ion-icon", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h3");
    \u0275\u0275text(18, "Identit\xE0 Box");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 15)(20, "div", 16)(21, "label");
    \u0275\u0275text(22, "Nome del Contenitore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 17);
    \u0275\u0275element(24, "ion-icon", 18);
    \u0275\u0275elementStart(25, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function CreaBoxPage_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.nome_box, $event) || (ctx.nome_box = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 20)(27, "label");
    \u0275\u0275text(28, "Note / Tag di Contenuto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 21);
    \u0275\u0275element(30, "ion-icon", 22);
    \u0275\u0275elementStart(31, "textarea", 23);
    \u0275\u0275twoWayListener("ngModelChange", function CreaBoxPage_Template_textarea_ngModelChange_31_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.descrizione, $event) || (ctx.descrizione = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(32, "div", 24)(33, "div", 12)(34, "div", 25);
    \u0275\u0275element(35, "ion-icon", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "h3");
    \u0275\u0275text(37, "Collocazione e Anteprima");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 27)(39, "div", 16)(40, "div", 28)(41, "label");
    \u0275\u0275text(42, "Riferimento Spazio / Armadio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 29);
    \u0275\u0275listener("click", function CreaBoxPage_Template_button_click_43_listener($event) {
      return ctx.aggiungiArmadio($event);
    });
    \u0275\u0275text(44, "+ Nuovo spazio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 30);
    \u0275\u0275element(46, "ion-icon", 31);
    \u0275\u0275elementStart(47, "ion-select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function CreaBoxPage_Template_ion_select_ngModelChange_47_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.rif_armadio, $event) || (ctx.rif_armadio = $event);
      return $event;
    });
    \u0275\u0275template(48, CreaBoxPage_ion_select_option_48_Template, 2, 2, "ion-select-option", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 16)(50, "label");
    \u0275\u0275text(51, "Dimensione Box");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 34)(53, "label", 35)(54, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function CreaBoxPage_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.dimensione, $event) || (ctx.dimensione = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 37)(56, "div", 38);
    \u0275\u0275element(57, "div", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "span", 40);
    \u0275\u0275text(59, "Piccola");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 41);
    \u0275\u0275text(61, "max 10");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "label", 35)(64, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function CreaBoxPage_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.dimensione, $event) || (ctx.dimensione = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 37)(66, "div", 38);
    \u0275\u0275element(67, "div", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "span", 40);
    \u0275\u0275text(69, "Media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 41);
    \u0275\u0275text(71, "max 20");
    \u0275\u0275elementEnd();
    \u0275\u0275element(72, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "label", 35)(74, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function CreaBoxPage_Template_input_ngModelChange_74_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.dimensione, $event) || (ctx.dimensione = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 37)(76, "div", 38);
    \u0275\u0275element(77, "div", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "span", 40);
    \u0275\u0275text(79, "Grande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 41);
    \u0275\u0275text(81, "max 30");
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275template(83, CreaBoxPage_label_83_Template, 9, 3, "label", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 48);
    \u0275\u0275element(85, "div", 49)(86, "img", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 51)(88, "button", 52);
    \u0275\u0275listener("click", function CreaBoxPage_Template_button_click_88_listener() {
      return ctx.salvaNuovaBox();
    });
    \u0275\u0275element(89, "ion-icon", 53);
    \u0275\u0275elementStart(90, "span");
    \u0275\u0275text(91, "Registra nel Sistema");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(92, "ion-footer", 0)(93, "ion-tab-bar", 54)(94, "ion-tab-button", 55);
    \u0275\u0275listener("click", function CreaBoxPage_Template_ion_tab_button_click_94_listener() {
      return ctx.navTo("/home");
    });
    \u0275\u0275element(95, "ion-icon", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "ion-tab-button", 57);
    \u0275\u0275listener("click", function CreaBoxPage_Template_ion_tab_button_click_96_listener() {
      return ctx.navTo("/search");
    });
    \u0275\u0275element(97, "ion-icon", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "ion-tab-button", 59);
    \u0275\u0275listener("click", function CreaBoxPage_Template_ion_tab_button_click_98_listener() {
      return ctx.navTo("/crea-box");
    });
    \u0275\u0275elementStart(99, "div", 60);
    \u0275\u0275element(100, "ion-icon", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "ion-tab-button", 62);
    \u0275\u0275listener("click", function CreaBoxPage_Template_ion_tab_button_click_101_listener() {
      return ctx.navTo("/scan-qr");
    });
    \u0275\u0275element(102, "ion-icon", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "ion-tab-button", 64);
    \u0275\u0275listener("click", function CreaBoxPage_Template_ion_tab_button_click_103_listener() {
      return ctx.navTo("/area-personale");
    });
    \u0275\u0275element(104, "ion-icon", 65);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(25);
    \u0275\u0275twoWayProperty("ngModel", ctx.nome_box);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.descrizione);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx.rif_armadio);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.armadi_disponibili);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx.dimensione === "piccola");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.dimensione);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("active", ctx.dimensione === "media");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.dimensione);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("active", ctx.dimensione === "grande");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.dimensione);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx.tipoProfilo === "business");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx.nome_box || !ctx.rif_armadio);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  DefaultValueAccessor,
  RadioControlValueAccessor,
  NgControlStatus,
  NgModel,
  RouterModule,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonTabBar,
  IonTabButton,
  IonToolbar
], styles: ['\n\nion-header[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n}\nion-toolbar.peek-toolbar[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\n.header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo[_ngcontent-%COMP%] {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.header-logo[_ngcontent-%COMP%]:active {\n  opacity: 0.55;\n}\n.header-greeting[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\nion-content.bg-light-saas[_ngcontent-%COMP%] {\n  --background: #F4F7F9 !important;\n  --overflow: auto;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 15px clamp(20px, 3.5vw, 56px) 110px clamp(20px, 3.5vw, 56px);\n  box-sizing: border-box;\n}\n.create-plancia-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  width: 100%;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n  flex-grow: 1;\n  max-height: calc(100vh - 185px);\n}\n.quadrante-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 24px;\n  padding: 28px;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.02);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  box-sizing: border-box;\n}\n.quadrante-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 22px;\n}\n.quadrante-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 0;\n}\n.icon-cerchio[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  font-size: 1.25rem;\n}\n.icon-cerchio.azzurro[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n}\n.icon-cerchio.verde[_ngcontent-%COMP%] {\n  background: rgba(125, 199, 64, 0.1);\n  color: #7DC740;\n}\n.form-layout-internal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-layout-internal.filled-height[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  min-height: 0;\n}\n.layout-split-dx[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  min-height: 0;\n}\n.input-gruppo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.input-gruppo.flex-expand[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  min-height: 0;\n}\n.input-gruppo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #475569;\n  margin-left: 4px;\n}\n.label-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.new-space-link[_ngcontent-%COMP%] {\n  border: 0;\n  background: rgba(125, 199, 64, 0.12);\n  color: #5A9E2A;\n  border-radius: 999px;\n  padding: 5px 12px;\n  font-size: 0.72rem;\n  font-weight: 800;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #F4F7F9;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  border-radius: 16px;\n  padding: 0 16px;\n  transition: 0.3s ease;\n}\n.input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #3AABDB;\n  box-shadow: 0 0 0 4px rgba(58, 171, 219, 0.1);\n  background: white;\n}\n.input-wrapper[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #4A7A94;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  flex-grow: 1;\n  padding: 16px 0;\n  font-size: 0.95rem;\n  color: #0F172A;\n  outline: none;\n  font-weight: 500;\n  min-width: 0;\n}\n.input-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  flex-grow: 1;\n  font-size: 0.95rem;\n  color: #0F172A;\n  outline: none;\n  font-weight: 500;\n  resize: none;\n  height: 100%;\n  min-width: 0;\n  font-family: inherit;\n  padding-top: 16px;\n}\n.input-wrapper.textarea-wrapper[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.input-wrapper.full-grow[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 100%;\n  min-height: 140px;\n}\n.input-wrapper.select-wrapper[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.select-spazio[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  min-height: 51px;\n  --background: transparent;\n  --padding-start: 0;\n  --padding-end: 12px;\n  --placeholder-color: #4A7A94;\n  --color: #0F172A;\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.box-preview-render-frame.giant-view[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  min-height: 180px;\n  background: #F4F7F9;\n  border-radius: 20px;\n  border: 1px dashed rgba(58, 171, 219, 0.18);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n  margin-top: 5px;\n}\n.box-preview-render-frame.giant-view[_ngcontent-%COMP%]   .glow-effect[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 220px;\n  height: 120px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.13);\n  filter: blur(26px);\n}\n.box-preview-render-frame.giant-view[_ngcontent-%COMP%]   .box-render-asset-giant[_ngcontent-%COMP%] {\n  height: 145px;\n  width: auto;\n  object-fit: contain;\n  filter: drop-shadow(0 12px 24px rgba(15, 23, 42, 0.08));\n  z-index: 2;\n  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.box-preview-render-frame.giant-view[_ngcontent-%COMP%]:hover   .box-render-asset-giant[_ngcontent-%COMP%] {\n  transform: scale(1.06) rotate(1deg);\n}\n.action-area-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 100%;\n}\n.btn-submit-premium-green[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #7DC740;\n  color: white;\n  border: none;\n  padding: 18px;\n  border-radius: 16px;\n  font-weight: 800;\n  font-size: 1.05rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 8px 22px rgba(125, 199, 64, 0.3);\n  cursor: pointer;\n  transition: 0.2s;\n}\n.btn-submit-premium-green[_ngcontent-%COMP%]:disabled {\n  background: #CBEFAD;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.btn-submit-premium-green[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.97);\n}\n.custom-tab-bar[_ngcontent-%COMP%] {\n  --background: #FFFFFF;\n  border-top: 1px solid rgba(58, 171, 219, 0.18);\n  padding-bottom: 5px;\n}\n.add-btn-circle[_ngcontent-%COMP%] {\n  background: #3AABDB;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  color: white;\n  font-size: 1.8rem;\n  transform: translateY(-10px);\n  box-shadow: 0 4px 10px rgba(58, 171, 219, 0.3);\n}\n.active-btn[_ngcontent-%COMP%] {\n  background: #7DC740 !important;\n  box-shadow: 0 4px 12px rgba(125, 199, 64, 0.3) !important;\n}\n@media (max-width: 760px) {\n  .page-wrapper[_ngcontent-%COMP%] {\n    padding: 10px clamp(20px, 3.5vw, 56px) 96px;\n  }\n  .create-plancia-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 14px;\n    overflow-y: auto;\n    max-height: calc(100vh - 145px);\n    padding-bottom: 6px;\n  }\n  .quadrante-card[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 0;\n    padding: 20px;\n  }\n  .dimensioni-grid[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 12px;\n  }\n  .dim-card[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    padding: 20px 10px 14px;\n    border: 2px solid rgba(58, 171, 219, 0.18);\n    border-radius: 20px;\n    cursor: pointer;\n    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n    background: #FFFFFF;\n    text-align: center;\n    position: relative;\n    overflow: hidden;\n    -webkit-user-select: none;\n    user-select: none;\n  }\n  .dim-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .dim-card[_ngcontent-%COMP%]   .dim-glow[_ngcontent-%COMP%] {\n    position: absolute;\n    inset: 0;\n    border-radius: inherit;\n    background:\n      linear-gradient(\n        135deg,\n        rgba(125, 199, 64, 0.06),\n        transparent 55%);\n    opacity: 0;\n    transition: opacity 0.35s ease;\n    pointer-events: none;\n  }\n  .dim-card[_ngcontent-%COMP%]   .dim-visual[_ngcontent-%COMP%] {\n    height: 72px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    z-index: 1;\n  }\n  .dim-card[_ngcontent-%COMP%]   .dim-nome[_ngcontent-%COMP%] {\n    font-weight: 800;\n    font-size: 0.85rem;\n    color: #0F172A;\n    position: relative;\n    z-index: 1;\n    transition: color 0.3s ease;\n    letter-spacing: 0.5px;\n  }\n  .dim-card[_ngcontent-%COMP%]   .dim-cap[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    color: #4A7A94;\n    font-weight: 700;\n    letter-spacing: 0.5px;\n    text-transform: uppercase;\n    position: relative;\n    z-index: 1;\n    transition: color 0.3s ease;\n  }\n  .dim-card[_ngcontent-%COMP%]:hover {\n    border-color: #3AABDB;\n    transform: translateY(-3px);\n    box-shadow: 0 12px 32px rgba(58, 171, 219, 0.12);\n  }\n  .dim-card.active[_ngcontent-%COMP%] {\n    border-color: #7DC740;\n    box-shadow: 0 8px 28px rgba(125, 199, 64, 0.18);\n    transform: translateY(-2px);\n  }\n  .dim-card.active[_ngcontent-%COMP%]   .dim-glow[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  .dim-card.active[_ngcontent-%COMP%]   .dim-nome[_ngcontent-%COMP%] {\n    color: #5A9E2A;\n  }\n  .dim-card.active[_ngcontent-%COMP%]   .dim-cap[_ngcontent-%COMP%] {\n    color: #7DC740;\n  }\n  .dim-card.active[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]   .cf[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        135deg,\n        #CAE4B0,\n        #B8D9A0);\n  }\n  .dim-card.active[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]   .ct[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        135deg,\n        #D8EDC4,\n        #CAE4B0);\n  }\n  .dim-card.active[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]   .cs[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        135deg,\n        #A8C890,\n        #9ABD82);\n  }\n  .dim-card.active[_ngcontent-%COMP%]   .pallet-3d[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        180deg,\n        #D8EDC4,\n        #CAE4B0);\n    border-color: #7DC740;\n  }\n  .dim-card.active[_ngcontent-%COMP%]   .pallet-3d[_ngcontent-%COMP%]::before, \n   .dim-card.active[_ngcontent-%COMP%]   .pallet-3d[_ngcontent-%COMP%]::after {\n    background:\n      linear-gradient(\n        180deg,\n        #CAE4B0,\n        #B8D9A0);\n  }\n  .stack-3d[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 64px;\n    height: 64px;\n  }\n  .cube[_ngcontent-%COMP%] {\n    position: relative;\n    transform-style: preserve-3d;\n    transform: rotateX(-26deg) rotateY(34deg);\n    transition: transform 0.4s ease;\n  }\n  .cube[_ngcontent-%COMP%]   .cf[_ngcontent-%COMP%], \n   .cube[_ngcontent-%COMP%]   .ct[_ngcontent-%COMP%], \n   .cube[_ngcontent-%COMP%]   .cs[_ngcontent-%COMP%] {\n    position: absolute;\n    backface-visibility: hidden;\n    transition: background 0.3s ease;\n  }\n  .cube[_ngcontent-%COMP%]   .cf[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        135deg,\n        #E8DEC9,\n        #DDD0B5);\n    border: 1.5px solid rgba(180, 160, 130, 0.4);\n  }\n  .cube[_ngcontent-%COMP%]   .ct[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        135deg,\n        #F5EDE0,\n        #E8DEC9);\n    border: 1.5px solid rgba(180, 160, 130, 0.3);\n  }\n  .cube[_ngcontent-%COMP%]   .cs[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        135deg,\n        #C9BCA0,\n        #BEB096);\n    border: 1.5px solid rgba(160, 140, 110, 0.4);\n  }\n  .cube.p[_ngcontent-%COMP%]   .cf[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 22px;\n    transform: translateZ(15px);\n  }\n  .cube.p[_ngcontent-%COMP%]   .ct[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    transform: rotateX(90deg) translateZ(-4px);\n  }\n  .cube.p[_ngcontent-%COMP%]   .cs[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 22px;\n    transform: rotateY(90deg) translateZ(-4px);\n  }\n  .cube.m[_ngcontent-%COMP%]   .cf[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 28px;\n    transform: translateZ(19px);\n  }\n  .cube.m[_ngcontent-%COMP%]   .ct[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n    transform: rotateX(90deg) translateZ(-5px);\n  }\n  .cube.m[_ngcontent-%COMP%]   .cs[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 28px;\n    transform: rotateY(90deg) translateZ(-5px);\n  }\n  .cube.g[_ngcontent-%COMP%]   .cf[_ngcontent-%COMP%] {\n    width: 46px;\n    height: 34px;\n    transform: translateZ(23px);\n  }\n  .cube.g[_ngcontent-%COMP%]   .ct[_ngcontent-%COMP%] {\n    width: 46px;\n    height: 46px;\n    transform: rotateX(90deg) translateZ(-6px);\n  }\n  .cube.g[_ngcontent-%COMP%]   .cs[_ngcontent-%COMP%] {\n    width: 46px;\n    height: 34px;\n    transform: rotateY(90deg) translateZ(-6px);\n  }\n  .dim-card[_ngcontent-%COMP%]:hover   .cube[_ngcontent-%COMP%] {\n    transform: rotateX(-26deg) rotateY(34deg) scale(1.08);\n  }\n  .pallet-3d[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 14px;\n    background:\n      linear-gradient(\n        180deg,\n        #DDD0B5,\n        #C9BCA0);\n    border: 2px solid rgba(180, 160, 130, 0.5);\n    border-radius: 4px;\n    position: relative;\n    transition: all 0.3s ease;\n  }\n  .pallet-3d[_ngcontent-%COMP%]::before {\n    content: "";\n    position: absolute;\n    bottom: -10px;\n    left: 8px;\n    width: 10px;\n    height: 10px;\n    background:\n      linear-gradient(\n        180deg,\n        #C9BCA0,\n        #BEB096);\n    border: 1.5px solid rgba(160, 140, 110, 0.4);\n    border-top: none;\n    border-radius: 0 0 3px 3px;\n    transition: background 0.3s ease;\n  }\n  .pallet-3d[_ngcontent-%COMP%]::after {\n    content: "";\n    position: absolute;\n    bottom: -10px;\n    right: 8px;\n    width: 10px;\n    height: 10px;\n    background:\n      linear-gradient(\n        180deg,\n        #C9BCA0,\n        #BEB096);\n    border: 1.5px solid rgba(160, 140, 110, 0.4);\n    border-top: none;\n    border-radius: 0 0 3px 3px;\n    transition: background 0.3s ease;\n  }\n  .dim-card[_ngcontent-%COMP%]:hover   .pallet-3d[_ngcontent-%COMP%] {\n    transform: translateY(-2px) scale(1.04);\n  }\n  .cube[_ngcontent-%COMP%]   .cf[_ngcontent-%COMP%]::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 6px;\n    background: rgba(190, 170, 130, 0.35);\n    border-radius: 1px;\n  }\n  .box-preview-render-frame.giant-view[_ngcontent-%COMP%] {\n    min-height: 210px;\n  }\n  .box-preview-render-frame.giant-view[_ngcontent-%COMP%]   .box-render-asset-giant[_ngcontent-%COMP%] {\n    height: 130px;\n  }\n}\n/*# sourceMappingURL=crea-box.page.css.map */'] });
var CreaBoxPage = _CreaBoxPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreaBoxPage, [{
    type: Component,
    args: [{ selector: "app-crea-box", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      IonContent,
      IonFooter,
      IonHeader,
      IonIcon,
      IonSelect,
      IonSelectOption,
      IonTabBar,
      IonTabButton,
      IonToolbar
    ], template: `<ion-header class="ion-no-border">\r
  <ion-toolbar class="peek-toolbar">\r
    <div class="header-inner">\r
      <div class="header-top">\r
        <div class="header-greet">\r
          <img src="assets/icon/logoTitolo1.png" class="header-logo" alt="PeekBox" (click)="navTo('/home')" style="cursor: pointer;" />\r
          <h1 class="header-greeting">CREA <span class="nome-verde">BOX</span></h1>\r
        </div>\r
      </div>\r
    </div>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="bg-light-saas">\r
  <div class="page-wrapper">\r
\r
    <div class="create-plancia-grid">\r
\r
      <div class="quadrante-card">\r
        <div class="quadrante-header">\r
          <div class="icon-cerchio azzurro">\r
            <ion-icon name="create-outline"></ion-icon>\r
          </div>\r
          <h3>Identit\xE0 Box</h3>\r
        </div>\r
\r
        <div class="form-layout-internal filled-height">\r
          <div class="input-gruppo">\r
            <label>Nome del Contenitore</label>\r
            <div class="input-wrapper">\r
              <ion-icon name="cube-outline"></ion-icon>\r
              <input type="text" [(ngModel)]="nome_box" placeholder="Es. Abbigliamento Invernale">\r
            </div>\r
          </div>\r
\r
          <div class="input-gruppo flex-expand">\r
            <label>Note / Tag di Contenuto</label>\r
            <div class="input-wrapper textarea-wrapper full-grow">\r
              <ion-icon name="list-outline"></ion-icon>\r
              <textarea [(ngModel)]="descrizione" placeholder="Cosa metterai all'interno? (es. maglioni, sciarpe, giubbotti di lana...)"></textarea>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="quadrante-card space-setup-card">\r
        <div class="quadrante-header">\r
          <div class="icon-cerchio verde">\r
            <ion-icon name="location-outline"></ion-icon>\r
          </div>\r
          <h3>Collocazione e Anteprima</h3>\r
        </div>\r
\r
        <div class="layout-split-dx">\r
          <div class="input-gruppo">\r
            <div class="label-row">\r
              <label>Riferimento Spazio / Armadio</label>\r
              <button type="button" class="new-space-link" (click)="aggiungiArmadio($event)">+ Nuovo spazio</button>\r
            </div>\r
            <div class="input-wrapper select-wrapper">\r
              <ion-icon name="business-outline"></ion-icon>\r
              <ion-select\r
                class="select-spazio"\r
                [(ngModel)]="rif_armadio"\r
                placeholder="Seleziona uno spazio"\r
                interface="popover"\r
              >\r
                <ion-select-option *ngFor="let armadio of armadi_disponibili" [value]="armadio.id">\r
                  {{ armadio.nome }}\r
                </ion-select-option>\r
              </ion-select>\r
            </div>\r
          </div>\r
\r
          <div class="input-gruppo">\r
            <label>Dimensione Box</label>\r
            <div class="dimensioni-grid">\r
              <label class="dim-card" [class.active]="dimensione === 'piccola'">\r
                <input type="radio" name="dimensione" value="piccola" [(ngModel)]="dimensione">\r
                <div class="dim-visual">\r
                  <div class="stack-3d">\r
                    <div class="cube p"></div>\r
                  </div>\r
                </div>\r
                <span class="dim-nome">Piccola</span>\r
                <span class="dim-cap">max 10</span>\r
                <div class="dim-glow"></div>\r
              </label>\r
              <label class="dim-card" [class.active]="dimensione === 'media'">\r
                <input type="radio" name="dimensione" value="media" [(ngModel)]="dimensione">\r
                <div class="dim-visual">\r
                  <div class="stack-3d">\r
                    <div class="cube m"></div>\r
                  </div>\r
                </div>\r
                <span class="dim-nome">Media</span>\r
                <span class="dim-cap">max 20</span>\r
                <div class="dim-glow"></div>\r
              </label>\r
              <label class="dim-card" [class.active]="dimensione === 'grande'">\r
                <input type="radio" name="dimensione" value="grande" [(ngModel)]="dimensione">\r
                <div class="dim-visual">\r
                  <div class="stack-3d">\r
                    <div class="cube g"></div>\r
                  </div>\r
                </div>\r
                <span class="dim-nome">Grande</span>\r
                <span class="dim-cap">max 30</span>\r
                <div class="dim-glow"></div>\r
              </label>\r
              <label class="dim-card" [class.active]="dimensione === 'pallet'" *ngIf="tipoProfilo === 'business'">\r
                <input type="radio" name="dimensione" value="pallet" [(ngModel)]="dimensione">\r
                <div class="dim-visual">\r
                  <div class="pallet-3d"></div>\r
                </div>\r
                <span class="dim-nome">Pallet</span>\r
                <span class="dim-cap">max 100</span>\r
                <div class="dim-glow"></div>\r
              </label>\r
            </div>\r
          </div>\r
\r
          <div class="box-preview-render-frame giant-view">\r
            <div class="glow-effect"></div>\r
            <img src="assets/icon/box-icon.png" alt="Box Preview" class="box-render-asset-giant">\r
          </div>\r
        </div>\r
\r
        <div class="action-area-button">\r
          <button class="btn-submit-premium-green" (click)="salvaNuovaBox()" [disabled]="!nome_box || !rif_armadio">\r
            <ion-icon name="checkmark-circle-outline"></ion-icon>\r
            <span>Registra nel Sistema</span>\r
          </button>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
</ion-content>\r
\r
<ion-footer class="ion-no-border">\r
  <ion-tab-bar slot="bottom" class="custom-tab-bar">\r
    <ion-tab-button tab="home" (click)="navTo('/home')"><ion-icon name="home-outline"></ion-icon></ion-tab-button>\r
    <ion-tab-button tab="search" (click)="navTo('/search')"><ion-icon name="search-outline"></ion-icon></ion-tab-button>\r
    <ion-tab-button class="add-button-tab" (click)="navTo('/crea-box')">\r
      <div class="add-btn-circle active-btn"><ion-icon name="add"></ion-icon></div>\r
    </ion-tab-button>\r
    <ion-tab-button tab="scan" (click)="navTo('/scan-qr')"><ion-icon name="scan-outline"></ion-icon></ion-tab-button>\r
    <ion-tab-button tab="profile" (click)="navTo('/area-personale')"><ion-icon name="person-outline"></ion-icon></ion-tab-button>\r
  </ion-tab-bar>\r
</ion-footer>\r
`, styles: ['/* src/app/crea-box/crea-box.page.scss */\nion-header {\n  background: #FFFFFF;\n}\nion-toolbar.peek-toolbar {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\n.header-inner {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo:hover {\n  opacity: 0.75;\n}\n.header-logo:active {\n  opacity: 0.55;\n}\n.header-greeting {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\nion-content.bg-light-saas {\n  --background: #F4F7F9 !important;\n  --overflow: auto;\n}\n.page-wrapper {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 15px clamp(20px, 3.5vw, 56px) 110px clamp(20px, 3.5vw, 56px);\n  box-sizing: border-box;\n}\n.create-plancia-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  width: 100%;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n  flex-grow: 1;\n  max-height: calc(100vh - 185px);\n}\n.quadrante-card {\n  background: #FFFFFF;\n  border-radius: 24px;\n  padding: 28px;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.02);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  box-sizing: border-box;\n}\n.quadrante-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 22px;\n}\n.quadrante-header h3 {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 0;\n}\n.icon-cerchio {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  font-size: 1.25rem;\n}\n.icon-cerchio.azzurro {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n}\n.icon-cerchio.verde {\n  background: rgba(125, 199, 64, 0.1);\n  color: #7DC740;\n}\n.form-layout-internal {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-layout-internal.filled-height {\n  flex-grow: 1;\n  min-height: 0;\n}\n.layout-split-dx {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  min-height: 0;\n}\n.input-gruppo {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.input-gruppo.flex-expand {\n  flex-grow: 1;\n  min-height: 0;\n}\n.input-gruppo label {\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #475569;\n  margin-left: 4px;\n}\n.label-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.new-space-link {\n  border: 0;\n  background: rgba(125, 199, 64, 0.12);\n  color: #5A9E2A;\n  border-radius: 999px;\n  padding: 5px 12px;\n  font-size: 0.72rem;\n  font-weight: 800;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.input-wrapper {\n  display: flex;\n  align-items: center;\n  background: #F4F7F9;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  border-radius: 16px;\n  padding: 0 16px;\n  transition: 0.3s ease;\n}\n.input-wrapper:focus-within {\n  border-color: #3AABDB;\n  box-shadow: 0 0 0 4px rgba(58, 171, 219, 0.1);\n  background: white;\n}\n.input-wrapper ion-icon {\n  font-size: 1.2rem;\n  color: #4A7A94;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n.input-wrapper input {\n  border: none;\n  background: transparent;\n  flex-grow: 1;\n  padding: 16px 0;\n  font-size: 0.95rem;\n  color: #0F172A;\n  outline: none;\n  font-weight: 500;\n  min-width: 0;\n}\n.input-wrapper textarea {\n  border: none;\n  background: transparent;\n  flex-grow: 1;\n  font-size: 0.95rem;\n  color: #0F172A;\n  outline: none;\n  font-weight: 500;\n  resize: none;\n  height: 100%;\n  min-width: 0;\n  font-family: inherit;\n  padding-top: 16px;\n}\n.input-wrapper.textarea-wrapper {\n  align-items: flex-start;\n}\n.input-wrapper.full-grow {\n  flex-grow: 1;\n  height: 100%;\n  min-height: 140px;\n}\n.input-wrapper.select-wrapper {\n  padding-right: 4px;\n}\n.select-spazio {\n  flex-grow: 1;\n  min-height: 51px;\n  --background: transparent;\n  --padding-start: 0;\n  --padding-end: 12px;\n  --placeholder-color: #4A7A94;\n  --color: #0F172A;\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.box-preview-render-frame.giant-view {\n  flex-grow: 1;\n  min-height: 180px;\n  background: #F4F7F9;\n  border-radius: 20px;\n  border: 1px dashed rgba(58, 171, 219, 0.18);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n  margin-top: 5px;\n}\n.box-preview-render-frame.giant-view .glow-effect {\n  position: absolute;\n  width: 220px;\n  height: 120px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.13);\n  filter: blur(26px);\n}\n.box-preview-render-frame.giant-view .box-render-asset-giant {\n  height: 145px;\n  width: auto;\n  object-fit: contain;\n  filter: drop-shadow(0 12px 24px rgba(15, 23, 42, 0.08));\n  z-index: 2;\n  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.box-preview-render-frame.giant-view:hover .box-render-asset-giant {\n  transform: scale(1.06) rotate(1deg);\n}\n.action-area-button {\n  margin-top: 20px;\n  width: 100%;\n}\n.btn-submit-premium-green {\n  width: 100%;\n  background: #7DC740;\n  color: white;\n  border: none;\n  padding: 18px;\n  border-radius: 16px;\n  font-weight: 800;\n  font-size: 1.05rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 8px 22px rgba(125, 199, 64, 0.3);\n  cursor: pointer;\n  transition: 0.2s;\n}\n.btn-submit-premium-green:disabled {\n  background: #CBEFAD;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.btn-submit-premium-green:active:not(:disabled) {\n  transform: scale(0.97);\n}\n.custom-tab-bar {\n  --background: #FFFFFF;\n  border-top: 1px solid rgba(58, 171, 219, 0.18);\n  padding-bottom: 5px;\n}\n.add-btn-circle {\n  background: #3AABDB;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  color: white;\n  font-size: 1.8rem;\n  transform: translateY(-10px);\n  box-shadow: 0 4px 10px rgba(58, 171, 219, 0.3);\n}\n.active-btn {\n  background: #7DC740 !important;\n  box-shadow: 0 4px 12px rgba(125, 199, 64, 0.3) !important;\n}\n@media (max-width: 760px) {\n  .page-wrapper {\n    padding: 10px clamp(20px, 3.5vw, 56px) 96px;\n  }\n  .create-plancia-grid {\n    grid-template-columns: 1fr;\n    gap: 14px;\n    overflow-y: auto;\n    max-height: calc(100vh - 145px);\n    padding-bottom: 6px;\n  }\n  .quadrante-card {\n    height: auto;\n    min-height: 0;\n    padding: 20px;\n  }\n  .dimensioni-grid {\n    display: flex;\n    gap: 12px;\n  }\n  .dim-card {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    padding: 20px 10px 14px;\n    border: 2px solid rgba(58, 171, 219, 0.18);\n    border-radius: 20px;\n    cursor: pointer;\n    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n    background: #FFFFFF;\n    text-align: center;\n    position: relative;\n    overflow: hidden;\n    -webkit-user-select: none;\n    user-select: none;\n  }\n  .dim-card input {\n    display: none;\n  }\n  .dim-card .dim-glow {\n    position: absolute;\n    inset: 0;\n    border-radius: inherit;\n    background:\n      linear-gradient(\n        135deg,\n        rgba(125, 199, 64, 0.06),\n        transparent 55%);\n    opacity: 0;\n    transition: opacity 0.35s ease;\n    pointer-events: none;\n  }\n  .dim-card .dim-visual {\n    height: 72px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    z-index: 1;\n  }\n  .dim-card .dim-nome {\n    font-weight: 800;\n    font-size: 0.85rem;\n    color: #0F172A;\n    position: relative;\n    z-index: 1;\n    transition: color 0.3s ease;\n    letter-spacing: 0.5px;\n  }\n  .dim-card .dim-cap {\n    font-size: 0.65rem;\n    color: #4A7A94;\n    font-weight: 700;\n    letter-spacing: 0.5px;\n    text-transform: uppercase;\n    position: relative;\n    z-index: 1;\n    transition: color 0.3s ease;\n  }\n  .dim-card:hover {\n    border-color: #3AABDB;\n    transform: translateY(-3px);\n    box-shadow: 0 12px 32px rgba(58, 171, 219, 0.12);\n  }\n  .dim-card.active {\n    border-color: #7DC740;\n    box-shadow: 0 8px 28px rgba(125, 199, 64, 0.18);\n    transform: translateY(-2px);\n  }\n  .dim-card.active .dim-glow {\n    opacity: 1;\n  }\n  .dim-card.active .dim-nome {\n    color: #5A9E2A;\n  }\n  .dim-card.active .dim-cap {\n    color: #7DC740;\n  }\n  .dim-card.active .cube .cf {\n    background:\n      linear-gradient(\n        135deg,\n        #CAE4B0,\n        #B8D9A0);\n  }\n  .dim-card.active .cube .ct {\n    background:\n      linear-gradient(\n        135deg,\n        #D8EDC4,\n        #CAE4B0);\n  }\n  .dim-card.active .cube .cs {\n    background:\n      linear-gradient(\n        135deg,\n        #A8C890,\n        #9ABD82);\n  }\n  .dim-card.active .pallet-3d {\n    background:\n      linear-gradient(\n        180deg,\n        #D8EDC4,\n        #CAE4B0);\n    border-color: #7DC740;\n  }\n  .dim-card.active .pallet-3d::before,\n  .dim-card.active .pallet-3d::after {\n    background:\n      linear-gradient(\n        180deg,\n        #CAE4B0,\n        #B8D9A0);\n  }\n  .stack-3d {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 64px;\n    height: 64px;\n  }\n  .cube {\n    position: relative;\n    transform-style: preserve-3d;\n    transform: rotateX(-26deg) rotateY(34deg);\n    transition: transform 0.4s ease;\n  }\n  .cube .cf,\n  .cube .ct,\n  .cube .cs {\n    position: absolute;\n    backface-visibility: hidden;\n    transition: background 0.3s ease;\n  }\n  .cube .cf {\n    background:\n      linear-gradient(\n        135deg,\n        #E8DEC9,\n        #DDD0B5);\n    border: 1.5px solid rgba(180, 160, 130, 0.4);\n  }\n  .cube .ct {\n    background:\n      linear-gradient(\n        135deg,\n        #F5EDE0,\n        #E8DEC9);\n    border: 1.5px solid rgba(180, 160, 130, 0.3);\n  }\n  .cube .cs {\n    background:\n      linear-gradient(\n        135deg,\n        #C9BCA0,\n        #BEB096);\n    border: 1.5px solid rgba(160, 140, 110, 0.4);\n  }\n  .cube.p .cf {\n    width: 30px;\n    height: 22px;\n    transform: translateZ(15px);\n  }\n  .cube.p .ct {\n    width: 30px;\n    height: 30px;\n    transform: rotateX(90deg) translateZ(-4px);\n  }\n  .cube.p .cs {\n    width: 30px;\n    height: 22px;\n    transform: rotateY(90deg) translateZ(-4px);\n  }\n  .cube.m .cf {\n    width: 38px;\n    height: 28px;\n    transform: translateZ(19px);\n  }\n  .cube.m .ct {\n    width: 38px;\n    height: 38px;\n    transform: rotateX(90deg) translateZ(-5px);\n  }\n  .cube.m .cs {\n    width: 38px;\n    height: 28px;\n    transform: rotateY(90deg) translateZ(-5px);\n  }\n  .cube.g .cf {\n    width: 46px;\n    height: 34px;\n    transform: translateZ(23px);\n  }\n  .cube.g .ct {\n    width: 46px;\n    height: 46px;\n    transform: rotateX(90deg) translateZ(-6px);\n  }\n  .cube.g .cs {\n    width: 46px;\n    height: 34px;\n    transform: rotateY(90deg) translateZ(-6px);\n  }\n  .dim-card:hover .cube {\n    transform: rotateX(-26deg) rotateY(34deg) scale(1.08);\n  }\n  .pallet-3d {\n    width: 60px;\n    height: 14px;\n    background:\n      linear-gradient(\n        180deg,\n        #DDD0B5,\n        #C9BCA0);\n    border: 2px solid rgba(180, 160, 130, 0.5);\n    border-radius: 4px;\n    position: relative;\n    transition: all 0.3s ease;\n  }\n  .pallet-3d::before {\n    content: "";\n    position: absolute;\n    bottom: -10px;\n    left: 8px;\n    width: 10px;\n    height: 10px;\n    background:\n      linear-gradient(\n        180deg,\n        #C9BCA0,\n        #BEB096);\n    border: 1.5px solid rgba(160, 140, 110, 0.4);\n    border-top: none;\n    border-radius: 0 0 3px 3px;\n    transition: background 0.3s ease;\n  }\n  .pallet-3d::after {\n    content: "";\n    position: absolute;\n    bottom: -10px;\n    right: 8px;\n    width: 10px;\n    height: 10px;\n    background:\n      linear-gradient(\n        180deg,\n        #C9BCA0,\n        #BEB096);\n    border: 1.5px solid rgba(160, 140, 110, 0.4);\n    border-top: none;\n    border-radius: 0 0 3px 3px;\n    transition: background 0.3s ease;\n  }\n  .dim-card:hover .pallet-3d {\n    transform: translateY(-2px) scale(1.04);\n  }\n  .cube .cf::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 6px;\n    background: rgba(190, 170, 130, 0.35);\n    border-radius: 1px;\n  }\n  .box-preview-render-frame.giant-view {\n    min-height: 210px;\n  }\n  .box-preview-render-frame.giant-view .box-render-asset-giant {\n    height: 130px;\n  }\n}\n/*# sourceMappingURL=crea-box.page.css.map */\n'] }]
  }], () => [{ type: AlertController }, { type: Router }, { type: DatabaseService }, { type: NavigationHistoryService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreaBoxPage, { className: "CreaBoxPage", filePath: "src/app/crea-box/crea-box.page.ts", lineNumber: 54 });
})();
export {
  CreaBoxPage
};
//# sourceMappingURL=crea-box.page-U37FJ6TS.js.map
