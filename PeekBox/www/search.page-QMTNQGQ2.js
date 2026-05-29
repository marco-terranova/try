import {
  DatabaseService
} from "./chunk-5G3PJOGU.js";
import {
  addIcons,
  archiveOutline,
  cubeOutline,
  home,
  person,
  search,
  searchOutline
} from "./chunk-4ITIBTO3.js";
import {
  NavigationHistoryService
} from "./chunk-R5EA4FTC.js";
import {
  IonBadge,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonSearchbar,
  IonSpinner,
  IonTitle,
  IonToolbar
} from "./chunk-VSLPI6WN.js";
import {
  CommonModule,
  Component,
  FormsModule,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  RouterLink,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
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
import "./chunk-QXFS4N4X.js";

// src/app/search/search.page.ts
var _c0 = (a0) => ["/dettaglio-box", a0];
function SearchPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "ion-spinner", 22);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Ricerca in corso...");
    \u0275\u0275elementEnd()();
  }
}
function SearchPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "ion-icon", 24);
    \u0275\u0275elementStart(2, "p", 25);
    \u0275\u0275text(3, " Digita almeno 2 caratteri per cercare tra i tuoi oggetti ");
    \u0275\u0275elementEnd()();
  }
}
function SearchPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "ion-icon", 26);
    \u0275\u0275elementStart(2, "p", 25);
    \u0275\u0275text(3, " Nessun oggetto trovato per ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1('"', ctx_r0.termineDiRicerca, '"');
  }
}
function SearchPage_ion_list_17_ion_item_3_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", r_r2.foto, \u0275\u0275sanitizeUrl);
  }
}
function SearchPage_ion_list_17_ion_item_3_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 41);
  }
}
function SearchPage_ion_list_17_ion_item_3_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r2.descrizione, " ");
  }
}
function SearchPage_ion_list_17_ion_item_3_ion_badge_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 43);
    \u0275\u0275text(1, "FRAGILE");
    \u0275\u0275elementEnd();
  }
}
function SearchPage_ion_list_17_ion_item_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 30)(1, "div", 31);
    \u0275\u0275template(2, SearchPage_ion_list_17_ion_item_3_img_2_Template, 1, 1, "img", 32)(3, SearchPage_ion_list_17_ion_item_3_ion_icon_3_Template, 1, 0, "ion-icon", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-label")(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275element(8, "ion-icon", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SearchPage_ion_list_17_ion_item_3_p_10_Template, 2, 1, "p", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 36)(12, "ion-badge", 37);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-badge", 38);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, SearchPage_ion_list_17_ion_item_3_ion_badge_16_Template, 2, 0, "ion-badge", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, r_r2.rif_box));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r2.foto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r2.foto);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.nome);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", r_r2.nome_armadio, " \xA0\u203A\xA0 ", r_r2.nome_box, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r2.descrizione);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("x", r_r2.quantita);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.tipo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r2.fragile);
  }
}
function SearchPage_ion_list_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 27)(1, "p", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SearchPage_ion_list_17_ion_item_3_Template, 17, 12, "ion-item", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r0.risultati.length, " risultat", ctx_r0.risultati.length === 1 ? "o" : "i", " trovat", ctx_r0.risultati.length === 1 ? "o" : "i", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.risultati);
  }
}
var _SearchPage = class _SearchPage {
  constructor(dbService, navHistory) {
    this.dbService = dbService;
    this.navHistory = navHistory;
    this.termineDiRicerca = "";
    this.risultati = [];
    this.cercando = false;
    this.haCercato = false;
    this.utenteId = null;
    addIcons({ searchOutline, archiveOutline, cubeOutline, home, search, person });
  }
  ionViewWillEnter() {
    this.utenteId = localStorage.getItem("utente_id");
  }
  cercaOggetti(event) {
    const termine = event.detail.value?.trim();
    this.termineDiRicerca = termine;
    if (!termine || termine.length < 2) {
      this.risultati = [];
      this.haCercato = false;
      return;
    }
    this.cercando = true;
    this.haCercato = true;
    this.dbService.cercaOggetti(this.utenteId, termine).subscribe({
      next: (res) => {
        this.risultati = res.risultati || [];
        this.cercando = false;
      },
      error: (err) => {
        console.error("Errore ricerca:", err);
        this.cercando = false;
      }
    });
  }
  pulisciRicerca() {
    this.termineDiRicerca = "";
    this.risultati = [];
    this.haCercato = false;
  }
  navTo(route) {
    this.navHistory.navTo(route);
  }
};
_SearchPage.\u0275fac = function SearchPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchPage)(\u0275\u0275directiveInject(DatabaseService), \u0275\u0275directiveInject(NavigationHistoryService));
};
_SearchPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchPage, selectors: [["app-search"]], decls: 33, vars: 5, consts: [[1, "ion-no-border"], [1, "peek-toolbar"], [1, "header-inner"], [1, "header-top"], [1, "header-greet"], ["src", "assets/icon/logoTitolo1.png", "alt", "PeekBox", 1, "header-logo", 2, "cursor", "pointer", 3, "click"], [1, "header-greeting"], [1, "nome-verde"], [1, "ion-padding", "search-content"], [1, "fw-bold", "search-page-title"], ["placeholder", "Cerca un oggetto...", "debounce", "400", "animated", "true", "data-testid", "search-input", 3, "ngModelChange", "ionInput", "ionClear", "ngModel"], ["class", "spinner-wrap", 4, "ngIf"], ["class", "stato-iniziale", 4, "ngIf"], ["lines", "none", "style", "background: transparent;", 4, "ngIf"], [1, "search-footer"], [1, "d-flex", "justify-content-around", "align-items-center", "w-100", "py-2"], [1, "d-flex", "flex-column", "align-items-center", "nav-item", 2, "cursor", "pointer", 3, "click"], ["name", "home"], [1, "d-flex", "flex-column", "align-items-center", "nav-item", "nav-item--active", 2, "cursor", "pointer"], ["name", "search"], ["name", "person"], [1, "spinner-wrap"], ["name", "crescent"], [1, "stato-iniziale"], ["name", "search-outline", 2, "font-size", "80px"], [2, "font-size", "1rem", "margin-top", "12px"], ["name", "archive-outline", 2, "font-size", "80px"], ["lines", "none", 2, "background", "transparent"], [1, "risultati-count"], ["class", "risultato-item", "data-testid", "search-result-item", 3, "routerLink", 4, "ngFor", "ngForOf"], ["data-testid", "search-result-item", 1, "risultato-item", 3, "routerLink"], ["slot", "start", 1, "foto-risultato"], [3, "src", 4, "ngIf"], ["name", "cube-outline", 4, "ngIf"], ["name", "archive-outline", 2, "vertical-align", "middle", "margin-right", "3px"], ["style", "font-size: 0.8rem; margin-top: 2px; opacity: .75;", 4, "ngIf"], ["slot", "end", 2, "display", "flex", "flex-direction", "column", "align-items", "flex-end", "gap", "4px"], ["color", "primary"], ["color", "medium", 2, "font-size", "0.75rem"], ["color", "danger", "style", "font-size: 0.75rem;", 4, "ngIf"], [3, "src"], ["name", "cube-outline"], [2, "font-size", "0.8rem", "margin-top", "2px", "opacity", ".75"], ["color", "danger", 2, "font-size", "0.75rem"]], template: function SearchPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "img", 5);
    \u0275\u0275listener("click", function SearchPage_Template_img_click_5_listener() {
      return ctx.navTo("/home");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 6);
    \u0275\u0275text(7, "CERCA ");
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9, "OGGETTI");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(10, "ion-content", 8)(11, "h2", 9);
    \u0275\u0275text(12, "Cerca Oggetti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ion-searchbar", 10);
    \u0275\u0275twoWayListener("ngModelChange", function SearchPage_Template_ion_searchbar_ngModelChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.termineDiRicerca, $event) || (ctx.termineDiRicerca = $event);
      return $event;
    });
    \u0275\u0275listener("ionInput", function SearchPage_Template_ion_searchbar_ionInput_13_listener($event) {
      return ctx.cercaOggetti($event);
    })("ionClear", function SearchPage_Template_ion_searchbar_ionClear_13_listener() {
      return ctx.pulisciRicerca();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, SearchPage_div_14_Template, 4, 0, "div", 11)(15, SearchPage_div_15_Template, 4, 0, "div", 12)(16, SearchPage_div_16_Template, 6, 1, "div", 12)(17, SearchPage_ion_list_17_Template, 4, 4, "ion-list", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-footer", 14)(19, "ion-toolbar")(20, "div", 15)(21, "div", 16);
    \u0275\u0275listener("click", function SearchPage_Template_div_click_21_listener() {
      return ctx.navTo("/home");
    });
    \u0275\u0275element(22, "ion-icon", 17);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 18);
    \u0275\u0275element(26, "ion-icon", 19);
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Cerca");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 16);
    \u0275\u0275listener("click", function SearchPage_Template_div_click_29_listener() {
      return ctx.navTo("/area-personale");
    });
    \u0275\u0275element(30, "ion-icon", 20);
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "Profilo");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx.termineDiRicerca);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.cercando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.haCercato && !ctx.cercando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.haCercato && !ctx.cercando && ctx.risultati.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.cercando && ctx.risultati.length > 0);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  NgControlStatus,
  NgModel,
  RouterModule,
  RouterLink,
  IonHeader,
  IonToolbar,
  IonContent,
  IonFooter,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonBadge,
  IonSpinner
], styles: ['@import "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family: "Outfit", sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\nion-header[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n}\nion-toolbar.peek-toolbar[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\n.header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo[_ngcontent-%COMP%] {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.header-logo[_ngcontent-%COMP%]:active {\n  opacity: 0.55;\n}\n.header-greeting[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\n.search-page-title[_ngcontent-%COMP%] {\n  color: #0F172A;\n  font-family: "Outfit", sans-serif;\n  font-weight: 900;\n  letter-spacing: -0.5px;\n  margin: 16px 0 14px;\n}\nion-searchbar[_ngcontent-%COMP%] {\n  --background: #FFFFFF;\n  --color: #0F172A;\n  --placeholder-color: rgba($mid, .6);\n  --icon-color: #3AABDB;\n  --clear-button-color: rgba($mid, .5);\n  --border-radius: 50px;\n  --box-shadow: 0 4px 16px rgba($blue, .08);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  border-radius: 50px;\n  padding: 0 0 16px 0 !important;\n}\n.stato-iniziale[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  padding: 0 20px;\n  text-align: center;\n}\n.stato-iniziale[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: rgba(58, 171, 219, 0.35) !important;\n}\n.stato-iniziale[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4A7A94 !important;\n  font-family: "DM Sans", sans-serif;\n}\n.spinner-wrap[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  text-align: center;\n}\n.spinner-wrap[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  --color: #3AABDB !important;\n  color: #3AABDB !important;\n}\n.spinner-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4A7A94 !important;\n  margin-top: 10px;\n  font-family: "DM Sans", sans-serif;\n}\n.risultati-count[_ngcontent-%COMP%] {\n  color: #4A7A94;\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.85rem;\n  margin: 4px 0 10px;\n}\n.risultato-item[_ngcontent-%COMP%] {\n  --background: rgba(255, 255, 255, 0.82);\n  --color: #0F172A;\n  --border-radius: 14px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  margin-bottom: 10px;\n  border-radius: 14px;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  border-left: 3px solid #7DC740;\n  box-shadow: 0 4px 16px rgba(58, 171, 219, 0.04);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.risultato-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #0F172A !important;\n  font-family: "Outfit", sans-serif;\n  font-weight: 700;\n}\n.risultato-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4A7A94 !important;\n  font-family: "DM Sans", sans-serif;\n}\n.foto-risultato[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 10px;\n  background: #EBF5FB;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  margin-right: 8px;\n}\n.foto-risultato[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.foto-risultato[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  color: #3AABDB;\n}\n.search-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: rgba(255, 255, 255, 0.72);\n  --color: #0F172A;\n  --border-color: rgba(58, 171, 219, 0.18);\n}\n.search-footer[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  color: #4A7A94;\n}\n.search-footer[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.search-footer[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.search-footer[_ngcontent-%COMP%]   .nav-item--active[_ngcontent-%COMP%] {\n  color: #3AABDB;\n}\n.search-footer[_ngcontent-%COMP%]   .nav-item--active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #3AABDB;\n}\n.search-footer[_ngcontent-%COMP%]   .nav-item--active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #3AABDB;\n}\n@media (max-width: 399px) {\n  .search-page-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    margin: 12px 0 10px;\n  }\n  .risultato-item[_ngcontent-%COMP%] {\n    --padding-start: 10px;\n    --padding-end: 10px;\n    --padding-top: 8px;\n    --padding-bottom: 8px;\n  }\n  .foto-risultato[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 44px;\n  }\n  .stato-iniziale[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    padding: 0 16px;\n  }\n}\n@media (min-width: 768px) {\n  .search-page-title[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n    margin: 20px 0 16px;\n  }\n  .risultato-item[_ngcontent-%COMP%] {\n    --padding-start: 16px;\n    --padding-end: 16px;\n    --padding-top: 12px;\n    --padding-bottom: 12px;\n    margin-bottom: 12px;\n  }\n  .foto-risultato[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    border-radius: 12px;\n  }\n  ion-searchbar[_ngcontent-%COMP%] {\n    --border-radius: 60px;\n  }\n}\n@media (min-width: 1024px) {\n  .search-page-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n/*# sourceMappingURL=search.page.css.map */'] });
var SearchPage = _SearchPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchPage, [{
    type: Component,
    args: [{ selector: "app-search", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonFooter,
      IonSearchbar,
      IonList,
      IonItem,
      IonLabel,
      IonIcon,
      IonBadge,
      IonSpinner
    ], template: `<ion-header class="ion-no-border">\r
  <ion-toolbar class="peek-toolbar">\r
    <div class="header-inner">\r
      <div class="header-top">\r
        <div class="header-greet">\r
          <img src="assets/icon/logoTitolo1.png" class="header-logo" alt="PeekBox" (click)="navTo('/home')" style="cursor: pointer;" />\r
          <h1 class="header-greeting">CERCA <span class="nome-verde">OGGETTI</span></h1>\r
        </div>\r
      </div>\r
    </div>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="ion-padding search-content">\r
\r
  <h2 class="fw-bold search-page-title">Cerca Oggetti</h2>\r
\r
  <!-- BARRA DI RICERCA -->\r
  <ion-searchbar\r
    [(ngModel)]="termineDiRicerca"\r
    (ionInput)="cercaOggetti($event)"\r
    (ionClear)="pulisciRicerca()"\r
    placeholder="Cerca un oggetto..."\r
    debounce="400"\r
    animated="true"\r
    data-testid="search-input">\r
  </ion-searchbar>\r
\r
  <!-- STATO: CARICAMENTO -->\r
  <div *ngIf="cercando" class="spinner-wrap">\r
    <ion-spinner name="crescent"></ion-spinner>\r
    <p>Ricerca in corso...</p>\r
  </div>\r
\r
  <!-- STATO: SCHERMATA INIZIALE -->\r
  <div *ngIf="!haCercato && !cercando" class="stato-iniziale">\r
    <ion-icon name="search-outline" style="font-size: 80px;"></ion-icon>\r
    <p style="font-size: 1rem; margin-top: 12px;">\r
      Digita almeno 2 caratteri per cercare tra i tuoi oggetti\r
    </p>\r
  </div>\r
\r
  <!-- STATO: NESSUN RISULTATO -->\r
  <div *ngIf="haCercato && !cercando && risultati.length === 0" class="stato-iniziale">\r
    <ion-icon name="archive-outline" style="font-size: 80px;"></ion-icon>\r
    <p style="font-size: 1rem; margin-top: 12px;">\r
      Nessun oggetto trovato per <strong>"{{ termineDiRicerca }}"</strong>\r
    </p>\r
  </div>\r
\r
  <!-- RISULTATI -->\r
  <ion-list *ngIf="!cercando && risultati.length > 0" lines="none" style="background: transparent;">\r
\r
    <p class="risultati-count">\r
      {{ risultati.length }} risultat{{ risultati.length === 1 ? 'o' : 'i' }} trovat{{ risultati.length === 1 ? 'o' : 'i' }}\r
    </p>\r
\r
    <ion-item\r
      *ngFor="let r of risultati"\r
      [routerLink]="['/dettaglio-box', r.rif_box]"\r
      class="risultato-item"\r
      data-testid="search-result-item">\r
\r
      <!-- Foto o placeholder -->\r
      <div slot="start" class="foto-risultato">\r
        <img *ngIf="r.foto" [src]="r.foto" />\r
        <ion-icon *ngIf="!r.foto" name="cube-outline"></ion-icon>\r
      </div>\r
\r
      <ion-label>\r
        <h2>{{ r.nome }}</h2>\r
        <p>\r
          <ion-icon name="archive-outline" style="vertical-align: middle; margin-right: 3px;"></ion-icon>\r
          {{ r.nome_armadio }} &nbsp;\u203A&nbsp; {{ r.nome_box }}\r
        </p>\r
        <p *ngIf="r.descrizione" style="font-size: 0.8rem; margin-top: 2px; opacity: .75;">\r
          {{ r.descrizione }}\r
        </p>\r
      </ion-label>\r
\r
      <div slot="end" style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">\r
        <ion-badge color="primary">x{{ r.quantita }}</ion-badge>\r
        <ion-badge color="medium" style="font-size: 0.75rem;">{{ r.tipo }}</ion-badge>\r
        <ion-badge *ngIf="r.fragile" color="danger" style="font-size: 0.75rem;">FRAGILE</ion-badge>\r
      </div>\r
\r
    </ion-item>\r
  </ion-list>\r
\r
</ion-content>\r
\r
<ion-footer class="search-footer">\r
  <ion-toolbar>\r
    <div class="d-flex justify-content-around align-items-center w-100 py-2">\r
      <div class="d-flex flex-column align-items-center nav-item" (click)="navTo('/home')" style="cursor: pointer;">\r
        <ion-icon name="home"></ion-icon>\r
        <span>Home</span>\r
      </div>\r
      <div class="d-flex flex-column align-items-center nav-item nav-item--active" style="cursor: pointer;">\r
        <ion-icon name="search"></ion-icon>\r
        <span>Cerca</span>\r
      </div>\r
      <div class="d-flex flex-column align-items-center nav-item" (click)="navTo('/area-personale')" style="cursor: pointer;">\r
        <ion-icon name="person"></ion-icon>\r
        <span>Profilo</span>\r
      </div>\r
    </div>\r
  </ion-toolbar>\r
</ion-footer>\r
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap";\n\n/* src/app/search/search.page.scss */\n:host {\n  display: block;\n  font-family: "Outfit", sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\nion-header {\n  background: #FFFFFF;\n}\nion-toolbar.peek-toolbar {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\n.header-inner {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo:hover {\n  opacity: 0.75;\n}\n.header-logo:active {\n  opacity: 0.55;\n}\n.header-greeting {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\n.search-page-title {\n  color: #0F172A;\n  font-family: "Outfit", sans-serif;\n  font-weight: 900;\n  letter-spacing: -0.5px;\n  margin: 16px 0 14px;\n}\nion-searchbar {\n  --background: #FFFFFF;\n  --color: #0F172A;\n  --placeholder-color: rgba($mid, .6);\n  --icon-color: #3AABDB;\n  --clear-button-color: rgba($mid, .5);\n  --border-radius: 50px;\n  --box-shadow: 0 4px 16px rgba($blue, .08);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  border-radius: 50px;\n  padding: 0 0 16px 0 !important;\n}\n.stato-iniziale {\n  margin-top: 60px;\n  padding: 0 20px;\n  text-align: center;\n}\n.stato-iniziale ion-icon {\n  color: rgba(58, 171, 219, 0.35) !important;\n}\n.stato-iniziale p {\n  color: #4A7A94 !important;\n  font-family: "DM Sans", sans-serif;\n}\n.spinner-wrap {\n  margin-top: 60px;\n  text-align: center;\n}\n.spinner-wrap ion-spinner {\n  --color: #3AABDB !important;\n  color: #3AABDB !important;\n}\n.spinner-wrap p {\n  color: #4A7A94 !important;\n  margin-top: 10px;\n  font-family: "DM Sans", sans-serif;\n}\n.risultati-count {\n  color: #4A7A94;\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.85rem;\n  margin: 4px 0 10px;\n}\n.risultato-item {\n  --background: rgba(255, 255, 255, 0.82);\n  --color: #0F172A;\n  --border-radius: 14px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  margin-bottom: 10px;\n  border-radius: 14px;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  border-left: 3px solid #7DC740;\n  box-shadow: 0 4px 16px rgba(58, 171, 219, 0.04);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.risultato-item ion-label h2 {\n  color: #0F172A !important;\n  font-family: "Outfit", sans-serif;\n  font-weight: 700;\n}\n.risultato-item ion-label p {\n  color: #4A7A94 !important;\n  font-family: "DM Sans", sans-serif;\n}\n.foto-risultato {\n  width: 52px;\n  height: 52px;\n  border-radius: 10px;\n  background: #EBF5FB;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  margin-right: 8px;\n}\n.foto-risultato img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.foto-risultato ion-icon {\n  font-size: 1.6rem;\n  color: #3AABDB;\n}\n.search-footer ion-toolbar {\n  --background: rgba(255, 255, 255, 0.72);\n  --color: #0F172A;\n  --border-color: rgba(58, 171, 219, 0.18);\n}\n.search-footer .nav-item {\n  color: #4A7A94;\n}\n.search-footer .nav-item ion-icon {\n  font-size: 1.6rem;\n}\n.search-footer .nav-item span {\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.search-footer .nav-item--active {\n  color: #3AABDB;\n}\n.search-footer .nav-item--active ion-icon {\n  color: #3AABDB;\n}\n.search-footer .nav-item--active span {\n  font-weight: 700;\n  color: #3AABDB;\n}\n@media (max-width: 399px) {\n  .search-page-title {\n    font-size: 1.2rem;\n    margin: 12px 0 10px;\n  }\n  .risultato-item {\n    --padding-start: 10px;\n    --padding-end: 10px;\n    --padding-top: 8px;\n    --padding-bottom: 8px;\n  }\n  .foto-risultato {\n    width: 44px;\n    height: 44px;\n  }\n  .stato-iniziale {\n    margin-top: 40px;\n    padding: 0 16px;\n  }\n}\n@media (min-width: 768px) {\n  .search-page-title {\n    font-size: 1.6rem;\n    margin: 20px 0 16px;\n  }\n  .risultato-item {\n    --padding-start: 16px;\n    --padding-end: 16px;\n    --padding-top: 12px;\n    --padding-bottom: 12px;\n    margin-bottom: 12px;\n  }\n  .foto-risultato {\n    width: 60px;\n    height: 60px;\n    border-radius: 12px;\n  }\n  ion-searchbar {\n    --border-radius: 60px;\n  }\n}\n@media (min-width: 1024px) {\n  .search-page-title {\n    font-size: 1.8rem;\n  }\n}\n/*# sourceMappingURL=search.page.css.map */\n'] }]
  }], () => [{ type: DatabaseService }, { type: NavigationHistoryService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchPage, { className: "SearchPage", filePath: "src/app/search/search.page.ts", lineNumber: 27 });
})();
export {
  SearchPage
};
//# sourceMappingURL=search.page-QMTNQGQ2.js.map
