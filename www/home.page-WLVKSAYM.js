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
  closeCircleOutline,
  closeOutline,
  cubeOutline,
  home,
  qrCodeOutline,
  search,
  star,
  starOutline,
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
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
  IonRadio,
  IonRadioGroup,
  IonTitle,
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
  RouterLink,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/home/home.page.ts
var _c0 = (a0) => ["/dettaglio-box", a0];
function HomePage_ion_icon_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 32);
  }
}
function HomePage_button_23_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 32);
  }
}
function HomePage_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function HomePage_button_23_Template_button_click_0_listener() {
      const armadio_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.filtri.idArmadio = ctx_r2.filtri.idArmadio === armadio_r2.id ? null : armadio_r2.id;
      return \u0275\u0275resetView(ctx_r2.applicaFiltri());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, HomePage_button_23_ion_icon_3_Template, 1, 0, "ion-icon", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const armadio_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.filtri.idArmadio === armadio_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(armadio_r2.nome);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filtri.idArmadio === armadio_r2.id);
  }
}
function HomePage_button_24_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 32);
  }
}
function HomePage_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function HomePage_button_24_Template_button_click_0_listener() {
      const tipo_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.filtri.categoria = ctx_r2.filtri.categoria === tipo_r5.nome ? null : tipo_r5.nome;
      return \u0275\u0275resetView(ctx_r2.applicaFiltri());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, HomePage_button_24_ion_icon_3_Template, 1, 0, "ion-icon", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tipo_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.filtri.categoria === tipo_r5.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tipo_r5.nome);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filtri.categoria === tipo_r5.nome);
  }
}
function HomePage_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "div", 35);
    \u0275\u0275element(3, "img", 36)(4, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 38);
    \u0275\u0275text(6, "NESSUNA BOX TROVATA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 39);
    \u0275\u0275text(8, "Il tuo spazio \xE8 attualmente vuoto. Inizia a catalogare i tuoi oggetti per ritrovarli in un istante.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 40);
    \u0275\u0275listener("click", function HomePage_div_26_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navTo("/crea-box"));
    });
    \u0275\u0275element(10, "ion-icon", 41);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Crea la tua prima Box");
    \u0275\u0275elementEnd()()()();
  }
}
function HomePage_div_27_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function HomePage_div_27_button_13_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const box_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePreferito(box_r9, $event));
    });
    \u0275\u0275element(1, "ion-icon", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const box_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("is-fav", box_r9.is_preferito === 1);
    \u0275\u0275advance();
    \u0275\u0275property("name", box_r9.is_preferito === 1 ? "star" : "star-outline");
  }
}
function HomePage_div_27_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function HomePage_div_27_button_14_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const box_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confermaEliminazione(box_r9.id, $event));
    });
    \u0275\u0275element(1, "ion-icon", 57);
    \u0275\u0275elementEnd();
  }
}
function HomePage_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275element(4, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 46)(6, "h3", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 48);
    \u0275\u0275listener("click", function HomePage_div_27_Template_div_click_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(9, "span", 49);
    \u0275\u0275element(10, "ion-icon", 50);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 51);
    \u0275\u0275template(13, HomePage_div_27_button_13_Template, 2, 3, "button", 52)(14, HomePage_div_27_button_14_Template, 2, 0, "button", 53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const box_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, box_r9.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getNomeArmadio(box_r9.rif_armadio));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", box_r9.contiene_fragili && box_r9.ruolo_condivisione ? "assets/icon/box-card-fragile-share.png" : box_r9.contiene_fragili ? "assets/icon/box-card-fragile.png" : box_r9.ruolo_condivisione ? "assets/icon/box-card-share.png" : "assets/icon/box-card.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(box_r9.nome);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", box_r9.num_oggetti || 0, " oggetti ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", box_r9.ruolo_condivisione !== "viewer");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", box_r9.ruolo_condivisione !== "viewer");
  }
}
function HomePage_ng_template_29_ion_item_25_ion_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 80);
    \u0275\u0275listener("click", function HomePage_ng_template_29_ion_item_25_ion_button_4_Template_ion_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const armadio_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confermaEliminaArmadio(armadio_r13, $event));
    });
    \u0275\u0275element(1, "ion-icon", 81);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_template_29_ion_item_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 64);
    \u0275\u0275element(1, "ion-radio", 73);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, HomePage_ng_template_29_ion_item_25_ion_button_4_Template, 2, 0, "ion-button", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const armadio_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", armadio_r13.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(armadio_r13.nome);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !armadio_r13.ruolo_condivisione);
  }
}
function HomePage_ng_template_29_ion_item_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 64);
    \u0275\u0275element(1, "ion-radio", 73);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-button", 80);
    \u0275\u0275listener("click", function HomePage_ng_template_29_ion_item_37_Template_ion_button_click_4_listener($event) {
      const tipo_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confermaEliminaTipologia(tipo_r15, $event));
    });
    \u0275\u0275element(5, "ion-icon", 81);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tipo_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", tipo_r15.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tipo_r15.nome);
  }
}
function HomePage_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 58)(2, "ion-title", 59);
    \u0275\u0275text(3, "Filtri avanzati");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 60)(5, "ion-button", 61);
    \u0275\u0275listener("click", function HomePage_ng_template_29_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isFilterModalOpen = false);
    });
    \u0275\u0275element(6, "ion-icon", 62);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "ion-content", 63)(8, "ion-item", 64);
    \u0275\u0275element(9, "ion-icon", 65);
    \u0275\u0275elementStart(10, "ion-label", 66);
    \u0275\u0275text(11, "Solo Preferiti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-checkbox", 67);
    \u0275\u0275twoWayListener("ngModelChange", function HomePage_ng_template_29_Template_ion_checkbox_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filtri.soloPreferiti, $event) || (ctx_r2.filtri.soloPreferiti = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function HomePage_ng_template_29_Template_ion_checkbox_ionChange_12_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applicaFiltri());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-accordion-group")(14, "ion-accordion", 68)(15, "ion-item", 69);
    \u0275\u0275element(16, "ion-icon", 70);
    \u0275\u0275elementStart(17, "ion-label", 66);
    \u0275\u0275text(18, "Filtra per Armadio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 71)(20, "ion-radio-group", 72);
    \u0275\u0275twoWayListener("ngModelChange", function HomePage_ng_template_29_Template_ion_radio_group_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filtri.idArmadio, $event) || (ctx_r2.filtri.idArmadio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function HomePage_ng_template_29_Template_ion_radio_group_ionChange_20_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applicaFiltri());
    });
    \u0275\u0275elementStart(21, "ion-item", 64)(22, "ion-label");
    \u0275\u0275text(23, "Tutti gli Armadi");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "ion-radio", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, HomePage_ng_template_29_ion_item_25_Template, 5, 3, "ion-item", 74);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "ion-accordion", 75)(27, "ion-item", 69);
    \u0275\u0275element(28, "ion-icon", 76);
    \u0275\u0275elementStart(29, "ion-label", 66);
    \u0275\u0275text(30, "Filtra per Categoria");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 71)(32, "ion-radio-group", 72);
    \u0275\u0275twoWayListener("ngModelChange", function HomePage_ng_template_29_Template_ion_radio_group_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filtri.categoria, $event) || (ctx_r2.filtri.categoria = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function HomePage_ng_template_29_Template_ion_radio_group_ionChange_32_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applicaFiltri());
    });
    \u0275\u0275elementStart(33, "ion-item", 64)(34, "ion-label");
    \u0275\u0275text(35, "Qualsiasi Categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "ion-radio", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, HomePage_ng_template_29_ion_item_37_Template, 6, 2, "ion-item", 74);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 77)(39, "ion-button", 78);
    \u0275\u0275listener("click", function HomePage_ng_template_29_Template_ion_button_click_39_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetFiltri());
    });
    \u0275\u0275text(40, " RESETTA TUTTI I FILTRI ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filtri.soloPreferiti);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filtri.idArmadio);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", null);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.gliArmadi);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filtri.categoria);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", null);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.leTipologie);
  }
}
var _HomePage = class _HomePage {
  constructor(alertCtrl, dbService, router, navHistory) {
    this.alertCtrl = alertCtrl;
    this.dbService = dbService;
    this.router = router;
    this.navHistory = navHistory;
    this.leMieBox = [];
    this.boxFiltrate = [];
    this.gliArmadi = [];
    this.leTipologie = [];
    this.utenteId = null;
    this.nomeUtente = null;
    this.isFilterModalOpen = false;
    this.searchQuery = "";
    this.filtri = {
      soloPreferiti: false,
      idArmadio: null,
      categoria: null
    };
    addIcons({
      "add": add,
      "home": home,
      "search": search,
      "star": star,
      "star-outline": starOutline,
      "trash-outline": trashOutline,
      "cube-outline": cubeOutline,
      "archive-outline": archiveOutline,
      "close-outline": closeOutline,
      "chatbubbles-outline": chatbubblesOutline,
      "qr-code-outline": qrCodeOutline,
      "add-circle-outline": addCircleOutline,
      "close-circle-outline": closeCircleOutline
    });
  }
  navTo(route) {
    this.navHistory.navTo(route);
  }
  ionViewWillEnter() {
    this.utenteId = localStorage.getItem("utente_id");
    this.nomeUtente = localStorage.getItem("utente_nome");
    if (this.utenteId) {
      this.caricaDatiDalServer(this.utenteId);
    }
  }
  navBack() {
    this.navHistory.back();
  }
  apriScanner() {
    this.navHistory.navTo("/scan-qr");
  }
  caricaDatiDalServer(idUtente) {
    this.dbService.getArmadi(idUtente).subscribe({
      next: (res) => this.gliArmadi = res.armadi || []
    });
    this.dbService.getTipologie(idUtente).subscribe({
      next: (res) => this.leTipologie = res.tipologie || []
    });
    this.dbService.getBox(idUtente).subscribe({
      next: (res) => {
        this.leMieBox = res.box || [];
        this.applicaFiltri();
      }
    });
  }
  getNomeArmadio(id) {
    const trovato = this.gliArmadi.find((a) => a.id === id);
    return trovato ? trovato.nome : "Armadio sconosciuto";
  }
  applicaFiltri() {
    const query = this.searchQuery?.toLowerCase().trim() || "";
    this.boxFiltrate = this.leMieBox.filter((box) => {
      const matchPreferiti = !this.filtri.soloPreferiti || box.is_preferito === 1;
      const matchArmadio = !this.filtri.idArmadio || box.rif_armadio === this.filtri.idArmadio;
      const matchSearch = !query || box.nome?.toLowerCase().includes(query);
      let matchCategoria = true;
      if (this.filtri.categoria) {
        if (box.categorie_presenti) {
          const listaCategorie = box.categorie_presenti.split(",");
          matchCategoria = listaCategorie.includes(this.filtri.categoria);
        } else {
          matchCategoria = false;
        }
      }
      return matchPreferiti && matchArmadio && matchCategoria && matchSearch;
    });
  }
  resetFiltri() {
    this.filtri = { soloPreferiti: false, idArmadio: null, categoria: null };
    this.searchQuery = "";
    this.applicaFiltri();
  }
  togglePreferito(box, event) {
    event.stopPropagation();
    const nuovoStato = box.is_preferito === 1 ? false : true;
    this.dbService.updatePreferito(box.id, nuovoStato).subscribe({
      next: () => {
        box.is_preferito = nuovoStato ? 1 : 0;
        this.applicaFiltri();
      }
    });
  }
  confermaEliminazione(id, event) {
    return __async(this, null, function* () {
      event.stopPropagation();
      const alert = yield this.alertCtrl.create({
        header: "Conferma",
        message: "Vuoi davvero eliminare questa box e tutto il suo contenuto?",
        buttons: [
          { text: "Annulla", role: "cancel" },
          { text: "Elimina", role: "destructive", handler: () => this.eliminaBox(id) }
        ]
      });
      yield alert.present();
    });
  }
  eliminaBox(id) {
    this.dbService.eliminaBox(id).subscribe({
      next: () => {
        if (this.utenteId)
          this.caricaDatiDalServer(this.utenteId);
      }
    });
  }
  confermaEliminaArmadio(armadio, event) {
    return __async(this, null, function* () {
      event.stopPropagation();
      const alert = yield this.alertCtrl.create({
        header: "Elimina Armadio",
        message: `Vuoi eliminare "${armadio.nome}"? Questo canceller\xE0 anche tutte le box al suo interno.`,
        buttons: [
          { text: "Annulla", role: "cancel" },
          {
            text: "Elimina",
            role: "destructive",
            handler: () => {
              this.dbService.eliminaArmadio(armadio.id).subscribe(() => {
                if (this.utenteId)
                  this.caricaDatiDalServer(this.utenteId);
              });
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  confermaEliminaTipologia(tipo, event) {
    return __async(this, null, function* () {
      event.stopPropagation();
      const alert = yield this.alertCtrl.create({
        header: "Elimina Categoria",
        message: `Vuoi davvero eliminare la categoria "${tipo.nome}"?`,
        buttons: [
          { text: "Annulla", role: "cancel" },
          {
            text: "Elimina",
            role: "destructive",
            handler: () => {
              this.dbService.eliminaTipologia(tipo.id).subscribe(() => {
                if (this.utenteId)
                  this.caricaDatiDalServer(this.utenteId);
              });
            }
          }
        ]
      });
      yield alert.present();
    });
  }
};
_HomePage.\u0275fac = function HomePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePage)(\u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(DatabaseService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NavigationHistoryService));
};
_HomePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home"]], decls: 52, vars: 12, consts: [[1, "ion-no-border"], [1, "header-inner"], [1, "header-top"], [1, "header-greet"], ["src", "assets/icon/logoTitolo1.png", "alt", "PeekBox", 1, "header-logo", 2, "cursor", "pointer", 3, "click"], [1, "header-greeting"], [1, "nome-verde"], [1, "searchbar-container"], ["name", "search", 1, "search-icon"], ["type", "text", "placeholder", "Cerca una box...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "content-inner"], [1, "filters-action-row"], [1, "chips-scroll-container"], [1, "chip", "chip--all", 3, "click"], [1, "chip", 3, "click"], ["name", "close-circle-outline", "class", "clear-icon", 4, "ngIf"], ["class", "chip", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "bento-grid"], ["class", "empty-state-wrapper", 4, "ngIf"], ["class", "box-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [3, "didDismiss", "isOpen"], [1, "floating-nav"], [1, "nav-glow"], [1, "nav-item", "active"], ["name", "home"], [1, "nav-item", 3, "click"], ["name", "chatbubbles-outline"], [1, "nav-fab-wrapper"], [1, "nav-fab", 3, "click"], ["name", "add"], ["name", "qr-code-outline"], [1, "avatar-circle"], ["name", "close-circle-outline", 1, "clear-icon"], [1, "empty-state-wrapper"], [1, "premium-empty-state"], [1, "floating-box-container"], ["src", "assets/icon/box-card.png", "alt", "Nessuna Box", 1, "floating-box-img"], [1, "shadow-ellipse"], [1, "empty-title"], [1, "empty-subtitle"], [1, "btn-create-first", 3, "click"], ["name", "add-circle-outline"], [1, "box-card", 3, "routerLink"], [1, "card-badge"], [1, "card-image-wrapper"], ["alt", "Box", 1, "card-image", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-footer-row", 3, "click"], [1, "objects-badge"], ["name", "cube-outline"], [1, "card-actions"], ["class", "action-btn star-btn", 3, "is-fav", "click", 4, "ngIf"], ["class", "action-btn delete-btn", 3, "click", 4, "ngIf"], [1, "action-btn", "star-btn", 3, "click"], [3, "name"], [1, "action-btn", "delete-btn", 3, "click"], ["name", "trash-outline"], [1, "peek-toolbar"], [2, "color", "#15425C", "font-weight", "bold"], ["slot", "end"], [3, "click"], ["name", "close-outline", "slot", "icon-only"], [1, "ion-padding"], ["lines", "none"], ["name", "star", "slot", "start", "color", "warning"], [2, "font-weight", "bold", "color", "#15425C"], ["slot", "end", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "armadi"], ["slot", "header", "lines", "none"], ["name", "archive-outline", "slot", "start", 2, "color", "#15425C"], ["slot", "content", 1, "ion-padding-start"], [3, "ngModelChange", "ionChange", "ngModel"], ["slot", "start", 3, "value"], ["lines", "none", 4, "ngFor", "ngForOf"], ["value", "categorie"], ["name", "cube-outline", "slot", "start", 2, "color", "#15425C"], [1, "ion-padding-top"], ["expand", "block", "fill", "clear", "color", "medium", 3, "click"], ["slot", "end", "fill", "clear", "color", "danger", 3, "click", 4, "ngIf"], ["slot", "end", "fill", "clear", "color", "danger", 3, "click"], ["slot", "icon-only", "name", "trash-outline"]], template: function HomePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "img", 4);
    \u0275\u0275listener("click", function HomePage_Template_img_click_5_listener() {
      return ctx.navBack();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 5);
    \u0275\u0275text(7, "HOME ");
    \u0275\u0275elementStart(8, "span", 6);
    \u0275\u0275text(9, "PEEKBOX");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 7);
    \u0275\u0275element(11, "ion-icon", 8);
    \u0275\u0275elementStart(12, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function HomePage_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function HomePage_Template_input_ngModelChange_12_listener() {
      return ctx.applicaFiltri();
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(13, "ion-content")(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "button", 13);
    \u0275\u0275listener("click", function HomePage_Template_button_click_17_listener() {
      return ctx.resetFiltri();
    });
    \u0275\u0275text(18, "Tutte le Box");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 14);
    \u0275\u0275listener("click", function HomePage_Template_button_click_19_listener() {
      ctx.filtri.soloPreferiti = !ctx.filtri.soloPreferiti;
      return ctx.applicaFiltri();
    });
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "\u2B50 Preferiti");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, HomePage_ion_icon_22_Template, 1, 0, "ion-icon", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, HomePage_button_23_Template, 4, 4, "button", 16)(24, HomePage_button_24_Template, 4, 4, "button", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 17);
    \u0275\u0275template(26, HomePage_div_26_Template, 13, 0, "div", 18)(27, HomePage_div_27_Template, 15, 9, "div", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "ion-modal", 20);
    \u0275\u0275listener("didDismiss", function HomePage_Template_ion_modal_didDismiss_28_listener() {
      return ctx.isFilterModalOpen = false;
    });
    \u0275\u0275template(29, HomePage_ng_template_29_Template, 41, 7, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 21);
    \u0275\u0275element(31, "div", 22);
    \u0275\u0275elementStart(32, "div", 23);
    \u0275\u0275element(33, "ion-icon", 24);
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 25);
    \u0275\u0275listener("click", function HomePage_Template_div_click_36_listener() {
      return ctx.navTo("/box-ricevute");
    });
    \u0275\u0275element(37, "ion-icon", 26);
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39, "Avvisi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 27)(41, "button", 28);
    \u0275\u0275listener("click", function HomePage_Template_button_click_41_listener() {
      return ctx.navTo("/crea-box");
    });
    \u0275\u0275element(42, "ion-icon", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 25);
    \u0275\u0275listener("click", function HomePage_Template_div_click_43_listener() {
      return ctx.apriScanner();
    });
    \u0275\u0275element(44, "ion-icon", 30);
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "Scan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 25);
    \u0275\u0275listener("click", function HomePage_Template_div_click_47_listener() {
      return ctx.navTo("/area-personale");
    });
    \u0275\u0275elementStart(48, "div", 31);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span");
    \u0275\u0275text(51, "Profilo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", !ctx.filtri.soloPreferiti && !ctx.filtri.idArmadio && !ctx.filtri.categoria);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.filtri.soloPreferiti);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.filtri.soloPreferiti);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.gliArmadi);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.leTipologie);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.boxFiltrate.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.boxFiltrate);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.isFilterModalOpen);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate1(" ", ctx.nomeUtente ? ctx.nomeUtente.charAt(0).toUpperCase() : "U", " ");
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  RouterModule,
  RouterLink,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonModal,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonRadioGroup,
  IonRadio,
  IonAccordion,
  IonAccordionGroup
], styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --border-width: 0;\n  padding: 0;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --padding-bottom: 110px;\n  --overflow: auto;\n}\n.header-inner[_ngcontent-%COMP%] {\n  padding: 16px clamp(20px, 3.5vw, 56px) 10px;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.header-greet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-greet[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n  height: 32px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-greet[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.header-greet[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]:active {\n  opacity: 0.55;\n}\n.header-greeting[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A) !important;\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent !important;\n  background-clip: text !important;\n  font-weight: 900 !important;\n  text-shadow: 0px 4px 10px rgba(125, 199, 64, 0.3);\n}\n.searchbar-container[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 4px 16px;\n  box-shadow: 0 8px 24px rgba(58, 171, 219, 0.08);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  display: flex;\n  align-items: center;\n  transition: all 0.3s ease;\n  margin: 16px 0 0;\n}\n.searchbar-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: #3AABDB !important;\n  font-size: 1.35rem;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n.searchbar-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  width: 100%;\n  font-family: "Poppins", sans-serif;\n  color: #0F172A;\n  font-size: 0.95rem;\n  outline: none;\n  padding: 12px 0;\n}\n.searchbar-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #4A7A94;\n  font-weight: 500;\n}\n.searchbar-container[_ngcontent-%COMP%]:focus-within {\n  box-shadow: 0 8px 24px rgba(58, 171, 219, 0.25);\n  border-color: #3AABDB;\n  transform: translateY(-2px);\n}\n.content-inner[_ngcontent-%COMP%] {\n  padding: 16px clamp(20px, 3.5vw, 56px);\n}\n.filters-action-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.chips-scroll-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  overflow-x: auto;\n  white-space: nowrap;\n  flex: 1 1 auto;\n  min-width: 0;\n  padding-bottom: 4px;\n  scroll-behavior: smooth;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.chips-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.chip[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 16px;\n  border-radius: 50px;\n  border: 2px solid transparent;\n  background: #FFFFFF;\n  color: #4A7A94;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  transition:\n    background 0.2s,\n    color 0.2s,\n    border-color 0.2s,\n    box-shadow 0.2s;\n}\n.chip.active[_ngcontent-%COMP%] {\n  background: #3AABDB;\n  color: #FFFFFF;\n  border-color: #3AABDB;\n  box-shadow: 0 4px 14px rgba(58, 171, 219, 0.35);\n}\n.chip.chip--all[_ngcontent-%COMP%]:not(.active) {\n  color: #3AABDB;\n  border-color: rgba(58, 171, 219, 0.3);\n}\n.chip[_ngcontent-%COMP%]   .clear-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-right: -4px;\n  opacity: 0.8;\n  transition: opacity 0.2s ease;\n  flex-shrink: 0;\n}\n.chip[_ngcontent-%COMP%]:hover   .clear-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.bento-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n}\n.empty-state-wrapper[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: calc(100vh - 220px);\n  width: 100%;\n}\n.premium-empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 20px !important;\n  text-align: center;\n  background: #FFFFFF;\n  border-radius: 32px;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.02);\n  border: 2px dashed rgba(58, 171, 219, 0.2);\n  max-width: 550px !important;\n  margin: 0 auto 90px !important;\n  width: 100%;\n}\n.floating-box-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 16px !important;\n  animation: _ngcontent-%COMP%_floatBox 4s ease-in-out infinite;\n}\n.floating-box-img[_ngcontent-%COMP%] {\n  width: 130px !important;\n  position: relative;\n  z-index: 2;\n  display: block;\n}\n.shadow-ellipse[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 12px;\n  background: rgba(0, 0, 0, 0.08);\n  border-radius: 50%;\n  position: absolute;\n  bottom: -15px;\n  left: 50%;\n  transform: translateX(-50%);\n  filter: blur(4px);\n  z-index: 1;\n  animation: _ngcontent-%COMP%_shadowPulse 4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_floatBox {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes _ngcontent-%COMP%_shadowPulse {\n  0%, 100% {\n    transform: translateX(-50%) scale(1);\n    opacity: 0.8;\n  }\n  50% {\n    transform: translateX(-50%) scale(0.8);\n    opacity: 0.4;\n  }\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif !important;\n  font-size: 1.5rem !important;\n  font-weight: 900 !important;\n  color: #0F172A !important;\n  margin: 0 0 8px;\n  letter-spacing: 1px;\n}\n.empty-subtitle[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  color: #4A7A94;\n  font-size: 0.9rem !important;\n  line-height: 1.5;\n  max-width: 400px;\n  margin: 0 0 20px !important;\n}\n.btn-create-first[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  color: #FFFFFF;\n  border: none;\n  border-radius: 50px;\n  padding: 16px 32px;\n  font-family: "Poppins", sans-serif;\n  font-size: 1.05rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  box-shadow: 0 10px 25px rgba(125, 199, 64, 0.3);\n  transition: transform 0.2s, box-shadow 0.2s;\n  text-decoration: none;\n}\n.btn-create-first[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.btn-create-first[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 30px rgba(125, 199, 64, 0.4);\n}\n.btn-create-first[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.box-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  position: relative;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.box-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);\n}\n.box-card[_ngcontent-%COMP%]   .card-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: rgba(255, 255, 255, 0.9);\n  color: #15425C;\n  font-size: 0.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  z-index: 2;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.box-card[_ngcontent-%COMP%]   .card-image-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 28px 20px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F4F7F9;\n}\n.box-card[_ngcontent-%COMP%]   .card-image-wrapper[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 130px;\n  object-fit: contain;\n}\n.box-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 12px 14px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.box-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.92rem;\n  font-weight: 800;\n  color: #0F172A;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  line-height: 1.2;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.box-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.box-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-row[_ngcontent-%COMP%]   .objects-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 11px;\n  background: #EBF5FB;\n  color: #4A7A94;\n  font-size: 0.72rem;\n  font-weight: 600;\n  border-radius: 50px;\n}\n.box-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-row[_ngcontent-%COMP%]   .objects-badge[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #3AABDB;\n}\n.box-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-row[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.box-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-row[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 50%;\n  background: #F4F7F9;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    transform 0.15s ease,\n    box-shadow 0.2s ease;\n}\n.box-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-row[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #4A7A94;\n  transition: color 0.2s;\n}\n.box-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-row[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.12);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.box-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-row[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn.star-btn.is-fav[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.12);\n}\n.box-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-row[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn.star-btn.is-fav[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #3AABDB;\n}\n.box-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-row[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn.star-btn[_ngcontent-%COMP%]:hover:not(.is-fav) {\n  background: rgba(58, 171, 219, 0.08);\n}\n.box-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-row[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn.star-btn[_ngcontent-%COMP%]:hover:not(.is-fav)   ion-icon[_ngcontent-%COMP%] {\n  color: #3AABDB;\n}\n.box-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-row[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn.delete-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.08);\n}\n.box-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-row[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn.delete-btn[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%] {\n  color: #EF4444;\n}\n@media (max-width: 399px) {\n  .header-inner[_ngcontent-%COMP%] {\n    padding: 12px clamp(20px, 3.5vw, 56px) 8px;\n  }\n  .content-inner[_ngcontent-%COMP%] {\n    padding: 10px clamp(20px, 3.5vw, 56px) 20px;\n  }\n  .bento-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n  .header-greeting[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .chip[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 0.72rem;\n  }\n  .searchbar-container[_ngcontent-%COMP%] {\n    padding: 4px 12px;\n  }\n}\n@media (min-width: 768px) {\n  .header-inner[_ngcontent-%COMP%] {\n    padding: 20px clamp(20px, 3.5vw, 56px) 14px;\n  }\n  .content-inner[_ngcontent-%COMP%] {\n    padding: 18px clamp(20px, 3.5vw, 56px) 32px;\n  }\n  .bento-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n    gap: 22px;\n  }\n  .header-greeting[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n@media (min-width: 1024px) {\n  .header-inner[_ngcontent-%COMP%] {\n    padding: 24px clamp(20px, 3.5vw, 56px) 16px;\n  }\n  .content-inner[_ngcontent-%COMP%] {\n    padding: 20px clamp(20px, 3.5vw, 56px) 40px;\n  }\n  .bento-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 24px;\n  }\n  .header-greeting[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n}\n/*# sourceMappingURL=home.page.css.map */'] });
var HomePage = _HomePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonButtons,
      IonButton,
      IonIcon,
      IonFooter,
      IonModal,
      IonItem,
      IonLabel,
      IonCheckbox,
      IonRadioGroup,
      IonRadio,
      IonAccordion,
      IonAccordionGroup
    ], template: `<ion-header class="ion-no-border">\r
  <ion-toolbar>\r
    <div class="header-inner">\r
\r
      <div class="header-top">\r
        <div class="header-greet">\r
          <img src="assets/icon/logoTitolo1.png" class="header-logo" alt="PeekBox" (click)="navBack()" style="cursor: pointer;" />\r
          <h1 class="header-greeting">HOME <span class="nome-verde">PEEKBOX</span></h1>\r
        </div>\r
      </div>\r
\r
      <div class="searchbar-container">\r
        <ion-icon name="search" class="search-icon"></ion-icon>\r
        <input\r
          type="text"\r
          class="search-input"\r
          placeholder="Cerca una box..."\r
          [(ngModel)]="searchQuery"\r
          (ngModelChange)="applicaFiltri()"\r
        />\r
      </div>\r
\r
    </div>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content>\r
  <div class="content-inner">\r
\r
    <!-- RIGA FILTRI + AZIONI -->\r
    <div class="filters-action-row">\r
\r
      <!-- Chips scorrevoli a sinistra -->\r
      <div class="chips-scroll-container">\r
\r
        <button\r
          class="chip chip--all"\r
          [class.active]="!filtri.soloPreferiti && !filtri.idArmadio && !filtri.categoria"\r
          (click)="resetFiltri()"\r
        >Tutte le Box</button>\r
\r
        <button\r
          class="chip"\r
          [class.active]="filtri.soloPreferiti"\r
          (click)="filtri.soloPreferiti = !filtri.soloPreferiti; applicaFiltri()"\r
        >\r
          <span>\u2B50 Preferiti</span>\r
          <ion-icon *ngIf="filtri.soloPreferiti" name="close-circle-outline" class="clear-icon"></ion-icon>\r
        </button>\r
\r
        <button\r
          *ngFor="let armadio of gliArmadi"\r
          class="chip"\r
          [class.active]="filtri.idArmadio === armadio.id"\r
          (click)="filtri.idArmadio = (filtri.idArmadio === armadio.id ? null : armadio.id); applicaFiltri()"\r
        >\r
          <span>{{ armadio.nome }}</span>\r
          <ion-icon *ngIf="filtri.idArmadio === armadio.id" name="close-circle-outline" class="clear-icon"></ion-icon>\r
        </button>\r
\r
        <button\r
          *ngFor="let tipo of leTipologie"\r
          class="chip"\r
          [class.active]="filtri.categoria === tipo.nome"\r
          (click)="filtri.categoria = (filtri.categoria === tipo.nome ? null : tipo.nome); applicaFiltri()"\r
        >\r
          <span>{{ tipo.nome }}</span>\r
          <ion-icon *ngIf="filtri.categoria === tipo.nome" name="close-circle-outline" class="clear-icon"></ion-icon>\r
        </button>\r
\r
      </div>\r
</div>\r
\r
    <!-- Bento Grid -->\r
    <div class="bento-grid">\r
\r
      <!-- EMPTY STATE PREMIUM -->\r
      <div *ngIf="boxFiltrate.length === 0" class="empty-state-wrapper">\r
        <div class="premium-empty-state">\r
          <div class="floating-box-container">\r
            <img src="assets/icon/box-card.png" alt="Nessuna Box" class="floating-box-img" />\r
            <div class="shadow-ellipse"></div>\r
          </div>\r
          <h2 class="empty-title">NESSUNA BOX TROVATA</h2>\r
          <p class="empty-subtitle">Il tuo spazio \xE8 attualmente vuoto. Inizia a catalogare i tuoi oggetti per ritrovarli in un istante.</p>\r
          <button class="btn-create-first" (click)="navTo('/crea-box')">\r
            <ion-icon name="add-circle-outline"></ion-icon>\r
            <span>Crea la tua prima Box</span>\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Card box -->\r
      <div *ngFor="let box of boxFiltrate" class="box-card" [routerLink]="['/dettaglio-box', box.id]">\r
\r
        <span class="card-badge">{{ getNomeArmadio(box.rif_armadio) }}</span>\r
\r
        <div class="card-image-wrapper">\r
          <img\r
            class="card-image"\r
            [src]="box.contiene_fragili && box.ruolo_condivisione\r
              ? 'assets/icon/box-card-fragile-share.png'\r
              : (box.contiene_fragili\r
                  ? 'assets/icon/box-card-fragile.png'\r
                  : (box.ruolo_condivisione\r
                      ? 'assets/icon/box-card-share.png'\r
                      : 'assets/icon/box-card.png'))"\r
            alt="Box"\r
          />\r
        </div>\r
\r
        <div class="card-body">\r
          <h3 class="card-title">{{ box.nome }}</h3>\r
\r
          <div class="card-footer-row" (click)="$event.stopPropagation()">\r
            <span class="objects-badge">\r
              <ion-icon name="cube-outline"></ion-icon>\r
              {{ box.num_oggetti || 0 }} oggetti\r
            </span>\r
            <div class="card-actions">\r
              <button\r
                *ngIf="box.ruolo_condivisione !== 'viewer'"\r
                class="action-btn star-btn"\r
                [class.is-fav]="box.is_preferito === 1"\r
                (click)="togglePreferito(box, $event)"\r
              >\r
                <ion-icon [name]="box.is_preferito === 1 ? 'star' : 'star-outline'"></ion-icon>\r
              </button>\r
              <button\r
                *ngIf="box.ruolo_condivisione !== 'viewer'"\r
                class="action-btn delete-btn"\r
                (click)="confermaEliminazione(box.id, $event)"\r
              >\r
                <ion-icon name="trash-outline"></ion-icon>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- MODAL FILTRI AVANZATI -->\r
  <ion-modal [isOpen]="isFilterModalOpen" (didDismiss)="isFilterModalOpen = false">\r
    <ng-template>\r
      <ion-header class="ion-no-border">\r
  <ion-toolbar class="peek-toolbar">\r
          <ion-title style="color: #15425C; font-weight: bold;">Filtri avanzati</ion-title>\r
          <ion-buttons slot="end">\r
            <ion-button (click)="isFilterModalOpen = false">\r
              <ion-icon name="close-outline" slot="icon-only"></ion-icon>\r
            </ion-button>\r
          </ion-buttons>\r
        </ion-toolbar>\r
      </ion-header>\r
      <ion-content class="ion-padding">\r
        <ion-item lines="none">\r
          <ion-icon name="star" slot="start" color="warning"></ion-icon>\r
          <ion-label style="font-weight: bold; color: #15425C;">Solo Preferiti</ion-label>\r
          <ion-checkbox slot="end" [(ngModel)]="filtri.soloPreferiti" (ionChange)="applicaFiltri()"></ion-checkbox>\r
        </ion-item>\r
        <ion-accordion-group>\r
          <ion-accordion value="armadi">\r
            <ion-item slot="header" lines="none">\r
              <ion-icon name="archive-outline" slot="start" style="color: #15425C;"></ion-icon>\r
              <ion-label style="font-weight: bold; color: #15425C;">Filtra per Armadio</ion-label>\r
            </ion-item>\r
            <div slot="content" class="ion-padding-start">\r
              <ion-radio-group [(ngModel)]="filtri.idArmadio" (ionChange)="applicaFiltri()">\r
                <ion-item lines="none">\r
                  <ion-label>Tutti gli Armadi</ion-label>\r
                  <ion-radio slot="start" [value]="null"></ion-radio>\r
                </ion-item>\r
                <ion-item lines="none" *ngFor="let armadio of gliArmadi">\r
                  <ion-radio slot="start" [value]="armadio.id"></ion-radio>\r
                  <ion-label>{{ armadio.nome }}</ion-label>\r
                  <ion-button *ngIf="!armadio.ruolo_condivisione" slot="end" fill="clear" color="danger" (click)="confermaEliminaArmadio(armadio, $event)">\r
                    <ion-icon slot="icon-only" name="trash-outline"></ion-icon>\r
                  </ion-button>\r
                </ion-item>\r
              </ion-radio-group>\r
            </div>\r
          </ion-accordion>\r
          <ion-accordion value="categorie">\r
            <ion-item slot="header" lines="none">\r
              <ion-icon name="cube-outline" slot="start" style="color: #15425C;"></ion-icon>\r
              <ion-label style="font-weight: bold; color: #15425C;">Filtra per Categoria</ion-label>\r
            </ion-item>\r
            <div slot="content" class="ion-padding-start">\r
              <ion-radio-group [(ngModel)]="filtri.categoria" (ionChange)="applicaFiltri()">\r
                <ion-item lines="none">\r
                  <ion-label>Qualsiasi Categoria</ion-label>\r
                  <ion-radio slot="start" [value]="null"></ion-radio>\r
                </ion-item>\r
                <ion-item lines="none" *ngFor="let tipo of leTipologie">\r
                  <ion-radio slot="start" [value]="tipo.nome"></ion-radio>\r
                  <ion-label>{{ tipo.nome }}</ion-label>\r
                  <ion-button slot="end" fill="clear" color="danger" (click)="confermaEliminaTipologia(tipo, $event)">\r
                    <ion-icon slot="icon-only" name="trash-outline"></ion-icon>\r
                  </ion-button>\r
                </ion-item>\r
              </ion-radio-group>\r
            </div>\r
          </ion-accordion>\r
        </ion-accordion-group>\r
        <div class="ion-padding-top">\r
          <ion-button expand="block" fill="clear" color="medium" (click)="resetFiltri()">\r
            RESETTA TUTTI I FILTRI\r
          </ion-button>\r
        </div>\r
      </ion-content>\r
    </ng-template>\r
  </ion-modal>\r
\r
</ion-content>\r
\r
<!-- FLOATING BOTTOM NAV -->\r
<div class="floating-nav">\r
  <div class="nav-glow"></div>\r
\r
  <div class="nav-item active">\r
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
  <div class="nav-item" (click)="apriScanner()">\r
    <ion-icon name="qr-code-outline"></ion-icon>\r
    <span>Scan</span>\r
  </div>\r
\r
  <div class="nav-item" (click)="navTo('/area-personale')">\r
    <div class="avatar-circle">\r
      {{ nomeUtente ? nomeUtente.charAt(0).toUpperCase() : 'U' }}\r
    </div>\r
    <span>Profilo</span>\r
  </div>\r
</div>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&display=swap";\n\n/* src/app/home/home.page.scss */\n:host {\n  display: block;\n}\nion-toolbar {\n  --background: #F4F7F9;\n  --border-width: 0;\n  padding: 0;\n}\nion-content {\n  --background: #F4F7F9;\n  --padding-bottom: 110px;\n  --overflow: auto;\n}\n.header-inner {\n  padding: 16px clamp(20px, 3.5vw, 56px) 10px;\n}\n.header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.header-greet {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-greet .header-logo {\n  height: 32px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-greet .header-logo:hover {\n  opacity: 0.75;\n}\n.header-greet .header-logo:active {\n  opacity: 0.55;\n}\n.header-greeting {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A) !important;\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent !important;\n  background-clip: text !important;\n  font-weight: 900 !important;\n  text-shadow: 0px 4px 10px rgba(125, 199, 64, 0.3);\n}\n.searchbar-container {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 4px 16px;\n  box-shadow: 0 8px 24px rgba(58, 171, 219, 0.08);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  display: flex;\n  align-items: center;\n  transition: all 0.3s ease;\n  margin: 16px 0 0;\n}\n.searchbar-container .search-icon {\n  color: #3AABDB !important;\n  font-size: 1.35rem;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n.searchbar-container .search-input {\n  border: none;\n  background: transparent;\n  width: 100%;\n  font-family: "Poppins", sans-serif;\n  color: #0F172A;\n  font-size: 0.95rem;\n  outline: none;\n  padding: 12px 0;\n}\n.searchbar-container .search-input::placeholder {\n  color: #4A7A94;\n  font-weight: 500;\n}\n.searchbar-container:focus-within {\n  box-shadow: 0 8px 24px rgba(58, 171, 219, 0.25);\n  border-color: #3AABDB;\n  transform: translateY(-2px);\n}\n.content-inner {\n  padding: 16px clamp(20px, 3.5vw, 56px);\n}\n.filters-action-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.chips-scroll-container {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  overflow-x: auto;\n  white-space: nowrap;\n  flex: 1 1 auto;\n  min-width: 0;\n  padding-bottom: 4px;\n  scroll-behavior: smooth;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.chips-scroll-container::-webkit-scrollbar {\n  display: none;\n}\n.chip {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 16px;\n  border-radius: 50px;\n  border: 2px solid transparent;\n  background: #FFFFFF;\n  color: #4A7A94;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  transition:\n    background 0.2s,\n    color 0.2s,\n    border-color 0.2s,\n    box-shadow 0.2s;\n}\n.chip.active {\n  background: #3AABDB;\n  color: #FFFFFF;\n  border-color: #3AABDB;\n  box-shadow: 0 4px 14px rgba(58, 171, 219, 0.35);\n}\n.chip.chip--all:not(.active) {\n  color: #3AABDB;\n  border-color: rgba(58, 171, 219, 0.3);\n}\n.chip .clear-icon {\n  font-size: 1.1rem;\n  margin-right: -4px;\n  opacity: 0.8;\n  transition: opacity 0.2s ease;\n  flex-shrink: 0;\n}\n.chip:hover .clear-icon {\n  opacity: 1;\n}\n.bento-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n}\n.empty-state-wrapper {\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: calc(100vh - 220px);\n  width: 100%;\n}\n.premium-empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 20px !important;\n  text-align: center;\n  background: #FFFFFF;\n  border-radius: 32px;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.02);\n  border: 2px dashed rgba(58, 171, 219, 0.2);\n  max-width: 550px !important;\n  margin: 0 auto 90px !important;\n  width: 100%;\n}\n.floating-box-container {\n  position: relative;\n  margin-bottom: 16px !important;\n  animation: floatBox 4s ease-in-out infinite;\n}\n.floating-box-img {\n  width: 130px !important;\n  position: relative;\n  z-index: 2;\n  display: block;\n}\n.shadow-ellipse {\n  width: 100px;\n  height: 12px;\n  background: rgba(0, 0, 0, 0.08);\n  border-radius: 50%;\n  position: absolute;\n  bottom: -15px;\n  left: 50%;\n  transform: translateX(-50%);\n  filter: blur(4px);\n  z-index: 1;\n  animation: shadowPulse 4s ease-in-out infinite;\n}\n@keyframes floatBox {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes shadowPulse {\n  0%, 100% {\n    transform: translateX(-50%) scale(1);\n    opacity: 0.8;\n  }\n  50% {\n    transform: translateX(-50%) scale(0.8);\n    opacity: 0.4;\n  }\n}\n.empty-title {\n  font-family: "Poppins", sans-serif !important;\n  font-size: 1.5rem !important;\n  font-weight: 900 !important;\n  color: #0F172A !important;\n  margin: 0 0 8px;\n  letter-spacing: 1px;\n}\n.empty-subtitle {\n  font-family: "Poppins", sans-serif;\n  color: #4A7A94;\n  font-size: 0.9rem !important;\n  line-height: 1.5;\n  max-width: 400px;\n  margin: 0 0 20px !important;\n}\n.btn-create-first {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  color: #FFFFFF;\n  border: none;\n  border-radius: 50px;\n  padding: 16px 32px;\n  font-family: "Poppins", sans-serif;\n  font-size: 1.05rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  box-shadow: 0 10px 25px rgba(125, 199, 64, 0.3);\n  transition: transform 0.2s, box-shadow 0.2s;\n  text-decoration: none;\n}\n.btn-create-first:active {\n  transform: scale(0.97);\n}\n.btn-create-first:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 30px rgba(125, 199, 64, 0.4);\n}\n.btn-create-first ion-icon {\n  font-size: 1.4rem;\n}\n.box-card {\n  background: #FFFFFF;\n  border-radius: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  position: relative;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.box-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);\n}\n.box-card .card-badge {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: rgba(255, 255, 255, 0.9);\n  color: #15425C;\n  font-size: 0.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  z-index: 2;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.box-card .card-image-wrapper {\n  width: 100%;\n  padding: 28px 20px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F4F7F9;\n}\n.box-card .card-image-wrapper .card-image {\n  width: 100%;\n  max-height: 130px;\n  object-fit: contain;\n}\n.box-card .card-body {\n  padding: 12px 14px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.box-card .card-body .card-title {\n  margin: 0;\n  font-size: 0.92rem;\n  font-weight: 800;\n  color: #0F172A;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  line-height: 1.2;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.box-card .card-body .card-footer-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.box-card .card-body .card-footer-row .objects-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 11px;\n  background: #EBF5FB;\n  color: #4A7A94;\n  font-size: 0.72rem;\n  font-weight: 600;\n  border-radius: 50px;\n}\n.box-card .card-body .card-footer-row .objects-badge ion-icon {\n  font-size: 0.78rem;\n  color: #3AABDB;\n}\n.box-card .card-body .card-footer-row .card-actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.box-card .card-body .card-footer-row .card-actions .action-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 50%;\n  background: #F4F7F9;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    transform 0.15s ease,\n    box-shadow 0.2s ease;\n}\n.box-card .card-body .card-footer-row .card-actions .action-btn ion-icon {\n  font-size: 0.95rem;\n  color: #4A7A94;\n  transition: color 0.2s;\n}\n.box-card .card-body .card-footer-row .card-actions .action-btn:hover {\n  transform: scale(1.12);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.box-card .card-body .card-footer-row .card-actions .action-btn.star-btn.is-fav {\n  background: rgba(58, 171, 219, 0.12);\n}\n.box-card .card-body .card-footer-row .card-actions .action-btn.star-btn.is-fav ion-icon {\n  color: #3AABDB;\n}\n.box-card .card-body .card-footer-row .card-actions .action-btn.star-btn:hover:not(.is-fav) {\n  background: rgba(58, 171, 219, 0.08);\n}\n.box-card .card-body .card-footer-row .card-actions .action-btn.star-btn:hover:not(.is-fav) ion-icon {\n  color: #3AABDB;\n}\n.box-card .card-body .card-footer-row .card-actions .action-btn.delete-btn:hover {\n  background: rgba(239, 68, 68, 0.08);\n}\n.box-card .card-body .card-footer-row .card-actions .action-btn.delete-btn:hover ion-icon {\n  color: #EF4444;\n}\n@media (max-width: 399px) {\n  .header-inner {\n    padding: 12px clamp(20px, 3.5vw, 56px) 8px;\n  }\n  .content-inner {\n    padding: 10px clamp(20px, 3.5vw, 56px) 20px;\n  }\n  .bento-grid {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n  .header-greeting {\n    font-size: 1rem;\n  }\n  .chip {\n    padding: 6px 12px;\n    font-size: 0.72rem;\n  }\n  .searchbar-container {\n    padding: 4px 12px;\n  }\n}\n@media (min-width: 768px) {\n  .header-inner {\n    padding: 20px clamp(20px, 3.5vw, 56px) 14px;\n  }\n  .content-inner {\n    padding: 18px clamp(20px, 3.5vw, 56px) 32px;\n  }\n  .bento-grid {\n    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n    gap: 22px;\n  }\n  .header-greeting {\n    font-size: 1.3rem;\n  }\n}\n@media (min-width: 1024px) {\n  .header-inner {\n    padding: 24px clamp(20px, 3.5vw, 56px) 16px;\n  }\n  .content-inner {\n    padding: 20px clamp(20px, 3.5vw, 56px) 40px;\n  }\n  .bento-grid {\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 24px;\n  }\n  .header-greeting {\n    font-size: 1.4rem;\n  }\n}\n/*# sourceMappingURL=home.page.css.map */\n'] }]
  }], () => [{ type: AlertController }, { type: DatabaseService }, { type: Router }, { type: NavigationHistoryService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/home/home.page.ts", lineNumber: 37 });
})();
export {
  HomePage
};
//# sourceMappingURL=home.page-WLVKSAYM.js.map
