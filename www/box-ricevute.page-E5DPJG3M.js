import {
  require_leaflet_src
} from "./chunk-2C5JWALM.js";
import {
  DatabaseService
} from "./chunk-5G3PJOGU.js";
import {
  add,
  addIcons,
  addOutline,
  alertCircleOutline,
  archiveOutline,
  arrowBackOutline,
  chatbubblesOutline,
  checkmarkCircleOutline,
  checkmarkOutline,
  chevronForwardOutline,
  closeCircleOutline,
  closeOutline,
  home,
  homeOutline,
  locationOutline,
  mailOpenOutline,
  mailOutline,
  optionsOutline,
  peopleOutline,
  person,
  personAddOutline,
  personOutline,
  qrCodeOutline,
  refreshOutline,
  search,
  shareSocialOutline,
  timeOutline,
  trashOutline,
  warningOutline
} from "./chunk-4ITIBTO3.js";
import {
  NavigationHistoryService
} from "./chunk-R5EA4FTC.js";
import {
  AlertController,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  IonTitle,
  IonToolbar,
  ToastController
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
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
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-QXFS4N4X.js";

// src/app/box-ricevute/box-ricevute.page.ts
var L = __toESM(require_leaflet_src());
function BoxRicevutePage_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.richiestePending.length, " ");
  }
}
function BoxRicevutePage_button_20_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.contatoreNonLette, " ");
  }
}
function BoxRicevutePage_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function BoxRicevutePage_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiaTab("geofence"));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Geofencing");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BoxRicevutePage_button_20_span_3_Template, 2, 1, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.activeTab === "geofence");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.contatoreNonLette > 0);
  }
}
function BoxRicevutePage_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "ion-spinner", 34);
    \u0275\u0275elementStart(2, "p", 35);
    \u0275\u0275text(3, "Caricamento Centro di Controllo...");
    \u0275\u0275elementEnd()();
  }
}
function BoxRicevutePage_ng_container_24_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275text(2, "\u{1F4EC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 45);
    \u0275\u0275text(4, "Nessun invito in attesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 46);
    \u0275\u0275text(6, "Quando qualcuno condivide un archivio con te, comparir\xE0 qui.");
    \u0275\u0275elementEnd()();
  }
}
function BoxRicevutePage_ng_container_24_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "div", 48);
    \u0275\u0275elementStart(2, "div", 49);
    \u0275\u0275element(3, "ion-icon", 50);
    \u0275\u0275elementStart(4, "div", 51)(5, "h3", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 53);
    \u0275\u0275element(8, "ion-icon", 54);
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 53);
    \u0275\u0275element(12, "ion-icon", 55);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "span", 56);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 57)(18, "button", 58);
    \u0275\u0275listener("click", function BoxRicevutePage_ng_container_24_div_1_div_5_Template_button_click_18_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.rifiuta(r_r4));
    });
    \u0275\u0275element(19, "ion-icon", 59);
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Rifiuta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 60);
    \u0275\u0275listener("click", function BoxRicevutePage_ng_container_24_div_1_div_5_Template_button_click_22_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.accetta(r_r4));
    });
    \u0275\u0275element(23, "ion-icon", 61);
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "Accetta");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(r_r4.armadio_nome || r_r4.nome_archivio);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Da: ", r_r4.proprietario_username);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Ricevuto il: ", ctx_r0.formattaData(r_r4.creato_il));
    \u0275\u0275advance();
    \u0275\u0275classProp("role-editor", r_r4.ruolo === "editor");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r4.ruolo === "editor" ? "Editor" : "Viewer", " ");
  }
}
function BoxRicevutePage_ng_container_24_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275text(2, "\u{1F4C2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 45);
    \u0275\u0275text(4, "Nessun archivio condiviso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 46);
    \u0275\u0275text(6, "Non hai ancora accesso ad archivi condivisi da altri utenti.");
    \u0275\u0275elementEnd()();
  }
}
function BoxRicevutePage_ng_container_24_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function BoxRicevutePage_ng_container_24_div_1_div_10_Template_div_click_0_listener() {
      const a_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.apriArchivioCondiviso(a_r6));
    });
    \u0275\u0275elementStart(1, "div", 49);
    \u0275\u0275element(2, "ion-icon", 63);
    \u0275\u0275elementStart(3, "div", 51)(4, "h3", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 53);
    \u0275\u0275element(7, "ion-icon", 54);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 56);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 64);
    \u0275\u0275text(13, "Tocca per esplorare l'archivio condiviso ");
    \u0275\u0275element(14, "ion-icon", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r6.armadio_nome);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Proprietario: ", a_r6.proprietario_username);
    \u0275\u0275advance();
    \u0275\u0275classProp("role-editor", a_r6.ruolo === "editor");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r6.ruolo === "editor" ? "Editor" : "Viewer", " ");
  }
}
function BoxRicevutePage_ng_container_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "h2", 39);
    \u0275\u0275text(3, "RICHIESTE IN ATTESA");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BoxRicevutePage_ng_container_24_div_1_div_4_Template, 7, 0, "div", 40)(5, BoxRicevutePage_ng_container_24_div_1_div_5_Template, 26, 6, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 38)(7, "h2", 39);
    \u0275\u0275text(8, "ARCHIVI CONDIVISI CON TE");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, BoxRicevutePage_ng_container_24_div_1_div_9_Template, 7, 0, "div", 40)(10, BoxRicevutePage_ng_container_24_div_1_div_10_Template, 15, 5, "div", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.richiestePending.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.richiestePending);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.archiviAccettati.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.archiviAccettati);
  }
}
function BoxRicevutePage_ng_container_24_div_2_ion_select_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const armadio_r8 = ctx.$implicit;
    \u0275\u0275property("value", armadio_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", armadio_r8.nome, " ");
  }
}
function BoxRicevutePage_ng_container_24_div_2_ion_spinner_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 85);
  }
}
function BoxRicevutePage_ng_container_24_div_2_ion_icon_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 86);
  }
}
function BoxRicevutePage_ng_container_24_div_2_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275text(2, "\u{1F5C4}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 45);
    \u0275\u0275text(4, "Nessun archivio creato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 46);
    \u0275\u0275text(6, "Crea un archivio nella home per poterlo condividere.");
    \u0275\u0275elementEnd()();
  }
}
function BoxRicevutePage_ng_container_24_div_2_div_37_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function BoxRicevutePage_ng_container_24_div_2_div_37_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const armadio_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.apriConfigGeofence(armadio_r11));
    });
    \u0275\u0275element(1, "ion-icon", 101);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Geofence");
    \u0275\u0275elementEnd()();
  }
}
function BoxRicevutePage_ng_container_24_div_2_div_37_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275text(1, " Nessun ospite per questo archivio. Usa il form sopra per invitare qualcuno. ");
    \u0275\u0275elementEnd();
  }
}
function BoxRicevutePage_ng_container_24_div_2_div_37_div_16_ion_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 114);
  }
}
function BoxRicevutePage_ng_container_24_div_2_div_37_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104)(2, "div", 105);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 106)(5, "span", 107);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 108);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 109)(10, "span", 110);
    \u0275\u0275listener("click", function BoxRicevutePage_ng_container_24_div_2_div_37_div_16_Template_span_click_10_listener() {
      const guest_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(guest_r13.stato === "accettata" && ctx_r0.cambiaRuoloOspite(guest_r13));
    });
    \u0275\u0275text(11);
    \u0275\u0275template(12, BoxRicevutePage_ng_container_24_div_2_div_37_div_16_ion_icon_12_Template, 1, 0, "ion-icon", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 112);
    \u0275\u0275listener("click", function BoxRicevutePage_ng_container_24_div_2_div_37_div_16_Template_button_click_13_listener() {
      const guest_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.revocaOspite(guest_r13.id));
    });
    \u0275\u0275element(14, "ion-icon", 113);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const guest_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", guest_r13.ospite_username ? guest_r13.ospite_username.charAt(0).toUpperCase() : "O", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(guest_r13.ospite_username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(guest_r13.ospite_email || "Ospite");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("status-accepted", guest_r13.stato === "accettata")("status-pending", guest_r13.stato === "in_attesa");
    \u0275\u0275property("title", guest_r13.stato === "accettata" ? "Clicca per cambiare ruolo" : "In attesa di accettazione");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", guest_r13.stato === "accettata" ? guest_r13.ruolo === "editor" ? "Editor" : "Viewer" : "In attesa", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", guest_r13.stato === "accettata");
  }
}
function BoxRicevutePage_ng_container_24_div_2_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 88)(2, "div", 89);
    \u0275\u0275element(3, "ion-icon", 90);
    \u0275\u0275elementStart(4, "h3", 91);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 92);
    \u0275\u0275template(7, BoxRicevutePage_ng_container_24_div_2_div_37_button_7_Template, 4, 0, "button", 93);
    \u0275\u0275elementStart(8, "button", 94);
    \u0275\u0275listener("click", function BoxRicevutePage_ng_container_24_div_2_div_37_Template_button_click_8_listener() {
      const armadio_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.apriDettagliSpazio(armadio_r11));
    });
    \u0275\u0275element(9, "ion-icon", 95);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Gestisci");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 96)(13, "h4", 97);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, BoxRicevutePage_ng_container_24_div_2_div_37_div_15_Template, 2, 0, "div", 98)(16, BoxRicevutePage_ng_container_24_div_2_div_37_div_16_Template, 15, 10, "div", 99);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const armadio_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(armadio_r11.nome);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.tipoProfilo === "business");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Ospiti con accesso (", (ctx_r0.activeGuestsMap[armadio_r11.id] == null ? null : ctx_r0.activeGuestsMap[armadio_r11.id].length) || 0, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.activeGuestsMap[armadio_r11.id] || ctx_r0.activeGuestsMap[armadio_r11.id].length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.activeGuestsMap[armadio_r11.id]);
  }
}
function BoxRicevutePage_ng_container_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div", 66)(3, "h2", 67);
    \u0275\u0275element(4, "ion-icon", 68);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Condividi un Archivio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 69)(8, "label", 70);
    \u0275\u0275text(9, "Seleziona Archivio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-item", 71)(11, "ion-select", 72);
    \u0275\u0275twoWayListener("ngModelChange", function BoxRicevutePage_ng_container_24_div_2_Template_ion_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.armadioSelezionato, $event) || (ctx_r0.armadioSelezionato = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(12, BoxRicevutePage_ng_container_24_div_2_ion_select_option_12_Template, 2, 2, "ion-select-option", 73);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 69)(14, "label", 70);
    \u0275\u0275text(15, "Email dell'Ospite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 74);
    \u0275\u0275element(17, "ion-icon", 75);
    \u0275\u0275elementStart(18, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function BoxRicevutePage_ng_container_24_div_2_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.emailOspite, $event) || (ctx_r0.emailOspite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 69)(20, "label", 70);
    \u0275\u0275text(21, "Ruolo da Assegnare");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ion-item", 71)(23, "ion-select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function BoxRicevutePage_ng_container_24_div_2_Template_ion_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.ruoloSelezionato, $event) || (ctx_r0.ruoloSelezionato = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "ion-select-option", 78);
    \u0275\u0275text(25, "Sola Lettura (Viewer)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ion-select-option", 79);
    \u0275\u0275text(27, "Lettura e Scrittura (Editor)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "button", 80);
    \u0275\u0275listener("click", function BoxRicevutePage_ng_container_24_div_2_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.invitaNuovoOspite());
    });
    \u0275\u0275template(29, BoxRicevutePage_ng_container_24_div_2_ion_spinner_29_Template, 1, 0, "ion-spinner", 81)(30, BoxRicevutePage_ng_container_24_div_2_ion_icon_30_Template, 1, 0, "ion-icon", 82);
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 38)(34, "h2", 39);
    \u0275\u0275text(35, "GESTIONE DEI TUOI SPAZI");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, BoxRicevutePage_ng_container_24_div_2_div_36_Template, 7, 0, "div", 40)(37, BoxRicevutePage_ng_container_24_div_2_div_37_Template, 17, 5, "div", 83);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.armadioSelezionato);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.mieiArmadi);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailOspite);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ruoloSelezionato);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.isInviting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isInviting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isInviting);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.isInviting ? "Invio in corso..." : "Invia Invito");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.mieiArmadi.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.mieiArmadi);
  }
}
function BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_1_div_4_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 128);
    \u0275\u0275listener("click", function BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_1_div_4_button_7_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const cp_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      ctx_r0.apriGoogleMaps(cp_r15.display_lat, cp_r15.display_lng);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "ion-icon", 101);
    \u0275\u0275elementEnd();
  }
}
function BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275listener("click", function BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_1_div_4_Template_div_click_0_listener() {
      const cp_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(cp_r15.haCoordinate && ctx_r0.apriGoogleMaps(cp_r15.display_lat, cp_r15.display_lng));
    });
    \u0275\u0275element(1, "div", 123);
    \u0275\u0275elementStart(2, "div", 124)(3, "span", 125);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 126);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_1_div_4_button_7_Template, 2, 0, "button", 127);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cp_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", cp_r15.haCheckpoint ? "#7DC840" : "#3AABDB");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cp_r15.box_nome || "Box #" + cp_r15.box_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", cp_r15.armadio_nome, "", cp_r15.haCheckpoint ? " \xB7 " + ctx_r0.formattaData(cp_r15.timestamp) : " \xB7 Centro geofence");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cp_r15.haCoordinate);
  }
}
function BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "h2", 39);
    \u0275\u0275text(2, "BOX CON GEOFENCE ATTIVO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 120);
    \u0275\u0275template(4, BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_1_div_4_Template, 8, 6, "div", 121);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.checkpointsMappa);
  }
}
function BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129)(1, "div", 130);
    \u0275\u0275text(2, "\u{1F6E1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 131);
    \u0275\u0275text(4, "Tutti gli asset sono al sicuro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 46);
    \u0275\u0275text(6, "Nessuna anomalia GPS o violazione del perimetro geofence rilevata.");
    \u0275\u0275elementEnd()();
  }
}
function BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 146);
  }
}
function BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_5_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147);
    \u0275\u0275element(1, "ion-icon", 101);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Lat: ", n_r18.latitudine.toFixed(6), ", Lng: ", n_r18.longitudine.toFixed(6));
  }
}
function BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132);
    \u0275\u0275listener("click", function BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_5_Template_div_click_0_listener() {
      const n_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.segnaComeLetta(n_r18));
    });
    \u0275\u0275template(1, BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_5_span_1_Template, 1, 0, "span", 133);
    \u0275\u0275elementStart(2, "div", 134)(3, "div", 135);
    \u0275\u0275element(4, "ion-icon", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 137)(6, "div", 138)(7, "span", 139);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 140);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 141);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_5_div_13_Template, 4, 2, "div", 142);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 143)(15, "button", 144);
    \u0275\u0275listener("click", function BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_5_Template_button_click_15_listener($event) {
      const n_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.mostraInMappa(n_r18, $event));
    });
    \u0275\u0275element(16, "ion-icon", 101);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Mostra in Mappa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 145);
    \u0275\u0275listener("click", function BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_5_Template_button_click_19_listener($event) {
      const n_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.eliminaNotifica(n_r18.id, $event));
    });
    \u0275\u0275element(20, "ion-icon", 113);
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "Archivia");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const n_r18 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("alert-card--unread", !n_r18.letto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !n_r18.letto);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(n_r18.nome_archivio);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formattaData(n_r18.timestamp));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r18.messaggio);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", n_r18.latitudine);
  }
}
function BoxRicevutePage_ng_container_24_ng_container_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_1_Template, 5, 1, "div", 117);
    \u0275\u0275elementStart(2, "h2", 39);
    \u0275\u0275text(3, "ALLERTE DI SICUREZZA");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_4_Template, 7, 0, "div", 118)(5, BoxRicevutePage_ng_container_24_ng_container_3_div_4_div_5_Template, 23, 7, "div", 119);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.checkpointsMappa.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.notificheGeofence.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.notificheGeofence);
  }
}
function BoxRicevutePage_ng_container_24_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 115);
    \u0275\u0275element(2, "div", 116, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BoxRicevutePage_ng_container_24_ng_container_3_div_4_Template, 6, 3, "div", 36);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("hidden", ctx_r0.activeTab !== "geofence");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "geofence");
  }
}
function BoxRicevutePage_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BoxRicevutePage_ng_container_24_div_1_Template, 11, 4, "div", 36)(2, BoxRicevutePage_ng_container_24_div_2_Template, 38, 10, "div", 36)(3, BoxRicevutePage_ng_container_24_ng_container_3_Template, 5, 2, "ng-container", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "richieste");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "spazi");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tipoProfilo === "business");
  }
}
var _BoxRicevutePage = class _BoxRicevutePage {
  get contatoreNonLette() {
    return this.notificheGeofence.filter((n) => !n.letto).length;
  }
  constructor(dbService, router, alertCtrl, toastCtrl, navHistory) {
    this.dbService = dbService;
    this.router = router;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.navHistory = navHistory;
    this.activeTab = "richieste";
    this.isLoading = true;
    this.utenteId = null;
    this.nomeUtente = "";
    this.tipoProfilo = "personal";
    this.richiestePending = [];
    this.archiviAccettati = [];
    this.mieiArmadi = [];
    this.activeGuestsMap = {};
    this.notificheGeofence = [];
    this.emailOspite = "";
    this.ruoloSelezionato = "viewer";
    this.armadioSelezionato = null;
    this.isInviting = false;
    this.map = null;
    this.checkpointMarkers = [];
    this.checkpointsMappa = [];
    addIcons({
      "checkmark-circle-outline": checkmarkCircleOutline,
      "close-circle-outline": closeCircleOutline,
      "archive-outline": archiveOutline,
      "time-outline": timeOutline,
      "person-outline": personOutline,
      "home-outline": homeOutline,
      "arrow-back-outline": arrowBackOutline,
      "refresh-outline": refreshOutline,
      "mail-open-outline": mailOpenOutline,
      "share-social-outline": shareSocialOutline,
      "chatbubbles-outline": chatbubblesOutline,
      "qr-code-outline": qrCodeOutline,
      "people-outline": peopleOutline,
      "location-outline": locationOutline,
      "warning-outline": warningOutline,
      "alert-circle-outline": alertCircleOutline,
      "trash-outline": trashOutline,
      "person-add-outline": personAddOutline,
      "mail-outline": mailOutline,
      "checkmark-outline": checkmarkOutline,
      "chevron-forward-outline": chevronForwardOutline,
      "close-outline": closeOutline,
      "options-outline": optionsOutline,
      "add-outline": addOutline,
      "home": home,
      "add": add,
      "search": search,
      "person": person
    });
  }
  ngOnInit() {
    this.utenteId = localStorage.getItem("utente_id");
    this.nomeUtente = localStorage.getItem("utente_nome") || "Utente";
    this.tipoProfilo = localStorage.getItem("tipo_profilo") || "personal";
    this.caricaTutto();
  }
  ionViewWillEnter() {
    this.caricaTutto();
  }
  cambiaTab(tab) {
    if (tab === "geofence" && this.tipoProfilo !== "business")
      return;
    this.activeTab = tab;
    if (tab === "geofence") {
      setTimeout(() => {
        if (!this.map) {
          this.inizializzaMappa();
        }
        this.caricaCheckpointMappa();
        if (this.map)
          this.map.invalidateSize();
      }, 200);
    }
  }
  caricaTutto() {
    if (!this.utenteId)
      return;
    this.isLoading = true;
    this.dbService.getCondivisioniInAttesa(this.utenteId).subscribe({
      next: (res) => {
        this.richiestePending = res.condivisioni || [];
      },
      error: (err) => console.error("Errore richieste pending:", err)
    });
    this.dbService.getArchividCondivisiConMe(this.utenteId).subscribe({
      next: (res) => {
        this.archiviAccettati = (res.condivisioni || []).filter((c) => c.stato === "accettata");
      },
      error: (err) => console.error("Errore archivi condivisi:", err)
    });
    this.dbService.getArmadi(this.utenteId).subscribe({
      next: (res) => {
        const armadiRows = res.armadi || [];
        this.mieiArmadi = armadiRows.filter((a) => a.ruolo_condivisione === null);
        this.mieiArmadi.forEach((armadio) => {
          this.caricaOspitiArmadio(armadio.id);
        });
      },
      error: (err) => console.error("Errore caricamento armadi propri:", err)
    });
    if (this.tipoProfilo === "business") {
      this.dbService.getNotificheGeofence().subscribe({
        next: (res) => {
          this.notificheGeofence = res.notifiche || [];
          this.isLoading = false;
        },
        error: (err) => {
          console.error("Errore caricamento notifiche geofence:", err);
          this.isLoading = false;
        }
      });
    } else {
      this.isLoading = false;
    }
  }
  inizializzaMappa() {
    const el = document.querySelector(".geo-leaflet-map");
    if (!el || this.map)
      return;
    this.map = L.map(el, {
      center: [41.9028, 12.4964],
      zoom: 6,
      zoomControl: true,
      attributionControl: false
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19
    }).addTo(this.map);
  }
  caricaCheckpointMappa() {
    if (!this.utenteId)
      return;
    this.dbService.getTuttiCheckpoint(this.utenteId).subscribe({
      next: (res) => {
        this.checkpointsMappa = (res.checkpoints || []).map((cp) => {
          const display_lat = cp.latitudine ?? cp.geofence_lat;
          const display_lng = cp.longitudine ?? cp.geofence_lng;
          return __spreadProps(__spreadValues({}, cp), {
            display_lat,
            display_lng,
            haCheckpoint: cp.latitudine != null && cp.longitudine != null,
            haCoordinate: display_lat != null && display_lng != null
          });
        });
        this.aggiornaMarkerMappa();
      },
      error: (err) => console.error("Errore caricamento checkpoint mappa:", err)
    });
  }
  aggiornaMarkerMappa() {
    if (!this.map)
      return;
    this.checkpointMarkers.forEach((m) => m.remove());
    this.checkpointMarkers = [];
    const conCoordinate = this.checkpointsMappa.filter((cp) => cp.display_lat != null && cp.display_lng != null);
    if (conCoordinate.length === 0)
      return;
    const group = L.featureGroup();
    conCoordinate.forEach((cp) => {
      const color = cp.haCheckpoint ? "#7DC840" : "#3AABDB";
      const icon = L.divIcon({
        html: `<div style="width:16px;height:16px;background:${color};border:3px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.3);"></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
        className: ""
      });
      const badge = cp.haCheckpoint ? '<br/><span style="display:inline-block;background:#7DC840;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;margin-top:4px;">\u{1F6E1}\uFE0F Geofence attivo</span>' : '<br/><span style="display:inline-block;background:#3AABDB;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;margin-top:4px;">\u{1F4CD} Centro geofence</span>';
      const data = cp.timestamp ? `<br/><small>${new Date(cp.timestamp).toLocaleString("it-IT")}</small>` : "<br/><small>Nessun checkpoint GPS</small>";
      const marker2 = L.marker([cp.display_lat, cp.display_lng], { icon }).bindPopup(`
          <b>${cp.box_nome || "Box #" + cp.box_id}</b>
          <br/>${cp.armadio_nome || ""}${data}
          ${badge}
          <br/><a href="https://www.google.com/maps/search/?api=1&query=${cp.display_lat},${cp.display_lng}" target="_blank" style="color:#3AABDB;font-weight:700;text-decoration:none;">Apri in Google Maps \u2192</a>
        `);
      this.checkpointMarkers.push(marker2);
      group.addLayer(marker2);
    });
    group.addTo(this.map);
    if (conCoordinate.length === 1) {
      this.map.setView([conCoordinate[0].display_lat, conCoordinate[0].display_lng], 13);
    } else {
      this.map.fitBounds(group.getBounds().pad(0.3));
    }
  }
  apriGoogleMaps(lat, lng) {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, "_blank");
  }
  caricaOspitiArmadio(armadioId) {
    this.dbService.getCondivisioniArchivio(armadioId).subscribe({
      next: (res) => {
        this.activeGuestsMap[armadioId] = res.condivisioni || [];
      },
      error: () => {
        this.activeGuestsMap[armadioId] = [];
      }
    });
  }
  // ─── GESTIONE RICHIESTE ──────────────────────────────────────────────────
  accetta(condivisione) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        cssClass: "peekbox-alert",
        header: "Accetta Condivisione",
        message: `Vuoi accettare l'accesso all'archivio <strong>"${condivisione.armadio_nome || condivisione.nome_archivio}"</strong> condiviso da <strong>${condivisione.proprietario_username}</strong>?`,
        buttons: [
          { text: "Annulla", role: "cancel" },
          { text: "Accetta", handler: () => this.eseguiAccetta(condivisione) }
        ]
      });
      yield alert.present();
    });
  }
  eseguiAccetta(condivisione) {
    const id = condivisione.condivisione_id || condivisione.id;
    this.dbService.accettaCondivisione(id).subscribe({
      next: () => __async(this, null, function* () {
        this.richiestePending = this.richiestePending.filter((r) => (r.condivisione_id || r.id) !== id);
        this.caricaTutto();
        const toast = yield this.toastCtrl.create({ message: "Condivisione accettata!", duration: 3e3, color: "success", position: "bottom" });
        yield toast.present();
      }),
      error: (err) => __async(this, null, function* () {
        const toast = yield this.toastCtrl.create({ message: "Errore nell'accettare la condivisione.", duration: 3e3, color: "danger", position: "bottom" });
        yield toast.present();
      })
    });
  }
  rifiuta(condivisione) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        cssClass: "peekbox-alert",
        header: "Rifiuta Condivisione",
        message: `Sei sicuro di voler rifiutare l'accesso all'archivio <strong>"${condivisione.armadio_nome || condivisione.nome_archivio}"</strong>?`,
        buttons: [
          { text: "Annulla", role: "cancel" },
          { text: "Rifiuta", role: "destructive", handler: () => this.eseguiRifiuta(condivisione) }
        ]
      });
      yield alert.present();
    });
  }
  eseguiRifiuta(condivisione) {
    const id = condivisione.condivisione_id || condivisione.id;
    this.dbService.rifiutaCondivisione(id).subscribe({
      next: () => __async(this, null, function* () {
        this.richiestePending = this.richiestePending.filter((r) => (r.condivisione_id || r.id) !== id);
        this.caricaTutto();
        const toast = yield this.toastCtrl.create({ message: "Invito rifiutato.", duration: 2500, color: "medium", position: "bottom" });
        yield toast.present();
      }),
      error: () => __async(this, null, function* () {
        const toast = yield this.toastCtrl.create({ message: "Errore nel rifiutare la condivisione.", duration: 3e3, color: "danger", position: "bottom" });
        yield toast.present();
      })
    });
  }
  // ─── INVITO RAPIDO GUEST ──────────────────────────────────────────────────
  invitaNuovoOspite() {
    return __async(this, null, function* () {
      if (!this.armadioSelezionato) {
        this.mostraToast("Seleziona un archivio da condividere.", "warning");
        return;
      }
      if (!this.emailOspite.trim()) {
        this.mostraToast("Inserisci un indirizzo email valido.", "warning");
        return;
      }
      this.isInviting = true;
      this.dbService.condividiArchivio(this.armadioSelezionato, this.emailOspite.trim(), this.ruoloSelezionato).subscribe({
        next: () => __async(this, null, function* () {
          this.isInviting = false;
          this.emailOspite = "";
          this.armadioSelezionato = null;
          this.caricaTutto();
          this.mostraToast("Invito inviato con successo!", "success");
        }),
        error: (err) => __async(this, null, function* () {
          this.isInviting = false;
          this.mostraToast(err.error?.error || "Impossibile inviare l'invito.", "danger");
        })
      });
    });
  }
  cambiaRuoloOspite(guest) {
    return __async(this, null, function* () {
      const nuovoRuolo = guest.ruolo === "editor" ? "viewer" : "editor";
      this.dbService.aggiornaRuoloCondivisione(guest.id, nuovoRuolo).subscribe({
        next: () => {
          guest.ruolo = nuovoRuolo;
          this.mostraToast(`Ruolo aggiornato a ${nuovoRuolo === "editor" ? "Editor" : "Viewer"}`, "success");
        },
        error: () => this.mostraToast("Impossibile aggiornare il ruolo.", "danger")
      });
    });
  }
  revocaOspite(condivisioneId) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        cssClass: "peekbox-alert",
        header: "Revoca Accesso",
        message: "Sei sicuro di voler revocare l'accesso a questo ospite?",
        buttons: [
          { text: "Annulla", role: "cancel" },
          { text: "Revoca", role: "destructive", handler: () => {
            this.dbService.revocaCondivisione(condivisioneId).subscribe({
              next: () => {
                this.caricaTutto();
                this.mostraToast("Accesso revocato.", "success");
              },
              error: () => this.mostraToast("Errore durante la revoca.", "danger")
            });
          } }
        ]
      });
      yield alert.present();
    });
  }
  // ─── GESTIONE NOTIFICHE GEOFENCE ──────────────────────────────────────────
  segnaComeLetta(notifica) {
    this.dbService.segnaNotificaComeLetta(notifica.id).subscribe({
      next: () => {
        notifica.letto = 1;
      },
      error: (err) => console.error("Errore lettura notifica:", err)
    });
  }
  eliminaNotifica(notificaId, event) {
    event.stopPropagation();
    this.dbService.eliminaNotificaGeofence(notificaId).subscribe({
      next: () => {
        this.notificheGeofence = this.notificheGeofence.filter((n) => n.id !== notificaId);
        this.mostraToast("Notifica eliminata.", "success");
      },
      error: () => this.mostraToast("Impossibile eliminare la notifica.", "danger")
    });
  }
  mostraInMappa(notifica, event) {
    event.stopPropagation();
    if (notifica.latitudine == null || notifica.longitudine == null)
      return;
    window.open(`https://www.google.com/maps/search/?api=1&query=${notifica.latitudine},${notifica.longitudine}`, "_blank");
    this.segnaComeLetta(notifica);
  }
  // ─── NAVIGAZIONE & HELPERS ────────────────────────────────────────────────
  apriArchivioCondiviso(archivio) {
    this.router.navigate(["/home"]);
  }
  apriConfigGeofence(armadio) {
    this.router.navigate(["/geofence-armadio", armadio.id], { queryParams: { nome: armadio.nome } });
  }
  apriDettagliSpazio(armadio) {
    this.router.navigate(["/gestione-spazi"], { queryParams: { armadio: armadio.id, nome: armadio.nome } });
  }
  tornaHome() {
    this.router.navigate(["/home"]);
  }
  apriScanner() {
    this.router.navigate(["/scan-qr"]);
  }
  navTo(route) {
    this.router.navigate([route]);
  }
  formattaData(data) {
    if (!data)
      return "";
    return new Date(data).toLocaleString("it-IT", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  mostraToast(message, color = "primary") {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({ message, duration: 2500, color, position: "bottom" });
      yield toast.present();
    });
  }
};
_BoxRicevutePage.\u0275fac = function BoxRicevutePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BoxRicevutePage)(\u0275\u0275directiveInject(DatabaseService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(NavigationHistoryService));
};
_BoxRicevutePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoxRicevutePage, selectors: [["app-box-ricevute"]], decls: 47, vars: 9, consts: [["geoMapContainer", ""], [1, "ion-no-border"], [1, "peek-toolbar"], [1, "header-inner"], [1, "header-top"], [1, "header-greet"], ["src", "assets/icon/logoTitolo1.png", "alt", "PeekBox", 1, "header-logo", 2, "cursor", "pointer", 3, "click"], [1, "header-greeting"], [1, "nome-verde"], [1, "action-btn-refresh", 3, "click"], ["name", "refresh-outline"], [1, "tabs-segment-container"], [1, "tab-btn", 3, "click"], ["class", "badge-count badge-warning", 4, "ngIf"], ["class", "tab-btn", 3, "active", "click", 4, "ngIf"], [1, "peek-content"], [1, "content-inner"], ["class", "loading-wrap", 4, "ngIf"], [4, "ngIf"], [1, "floating-nav"], [1, "nav-glow"], [1, "nav-item", 3, "click"], ["name", "home"], [1, "nav-item", "active"], ["name", "chatbubbles-outline"], [1, "nav-fab-wrapper"], [1, "nav-fab", 3, "click"], ["name", "add"], ["name", "qr-code-outline"], [1, "avatar-circle"], [1, "badge-count", "badge-warning"], ["class", "badge-count badge-danger animate-pulse", 4, "ngIf"], [1, "badge-count", "badge-danger", "animate-pulse"], [1, "loading-wrap"], ["name", "crescent", "color", "primary"], [1, "loading-text"], ["class", "tab-content animate-fade-in", 4, "ngIf"], [1, "tab-content", "animate-fade-in"], [1, "sub-section"], [1, "sub-section-title"], ["class", "empty-card", 4, "ngIf"], ["class", "control-card control-card--pending", 4, "ngFor", "ngForOf"], ["class", "control-card control-card--accepted", 3, "click", 4, "ngFor", "ngForOf"], [1, "empty-card"], [1, "empty-card-icon"], [1, "empty-card-title"], [1, "empty-card-desc"], [1, "control-card", "control-card--pending"], [1, "card-glow"], [1, "control-card__header"], ["name", "mail-open-outline", 1, "card-icon", "icon-pending"], [1, "card-info"], [1, "card-title"], [1, "card-meta"], ["name", "person-outline"], ["name", "time-outline"], [1, "role-badge"], [1, "control-card__actions"], [1, "btn-action", "btn-action--danger", 3, "click"], ["name", "close-circle-outline"], [1, "btn-action", "btn-action--success", 3, "click"], ["name", "checkmark-circle-outline"], [1, "control-card", "control-card--accepted", 3, "click"], ["name", "archive-outline", 1, "card-icon", "icon-accepted"], [1, "tap-hint-text"], ["name", "chevron-forward-outline"], [1, "invite-form-card"], [1, "invite-form-title"], ["name", "person-add-outline"], [1, "form-group"], [1, "form-label"], ["lines", "none", 1, "form-item-select"], ["placeholder", "Scegli un archivio...", 1, "custom-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "input-icon-wrapper"], ["name", "mail-outline", 1, "input-icon"], ["type", "email", "placeholder", "esempio@email.com", 1, "custom-input", 3, "ngModelChange", "ngModel"], [1, "custom-select", 3, "ngModelChange", "ngModel"], ["value", "viewer"], ["value", "editor"], [1, "btn-submit-invite", 3, "click", "disabled"], ["name", "crescent", 4, "ngIf"], ["name", "share-social-outline", 4, "ngIf"], ["class", "space-card", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "crescent"], ["name", "share-social-outline"], [1, "space-card"], [1, "space-card__header"], [1, "space-card__title-row"], ["name", "archive-outline", 1, "space-icon"], [1, "space-name"], [1, "space-actions"], ["class", "btn-space-setting btn-space-setting--geo", "title", "Configura Geofence", 3, "click", 4, "ngIf"], ["title", "Gestisci Spazio", 1, "btn-space-setting", "btn-space-setting--config", 3, "click"], ["name", "options-outline"], [1, "space-guests"], [1, "guests-title"], ["class", "no-guests-hint", 4, "ngIf"], ["class", "guest-row", 4, "ngFor", "ngForOf"], ["title", "Configura Geofence", 1, "btn-space-setting", "btn-space-setting--geo", 3, "click"], ["name", "location-outline"], [1, "no-guests-hint"], [1, "guest-row"], [1, "guest-info"], [1, "guest-avatar"], [1, "guest-details"], [1, "guest-name"], [1, "guest-email"], [1, "guest-actions"], [1, "guest-status-badge", "clickable", 3, "click", "title"], ["name", "refresh-outline", "style", "font-size: 0.7rem; margin-left: 2px;", 4, "ngIf"], ["title", "Revoca accesso", 1, "btn-revoke-guest", 3, "click"], ["name", "trash-outline"], ["name", "refresh-outline", 2, "font-size", "0.7rem", "margin-left", "2px"], [1, "geo-map-section", 3, "hidden"], [1, "geo-leaflet-map"], ["class", "sub-section", 4, "ngIf"], ["class", "empty-card empty-card--secure", 4, "ngIf"], ["class", "alert-card", 3, "alert-card--unread", "click", 4, "ngFor", "ngForOf"], [1, "geo-box-list"], ["class", "geo-box-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "geo-box-row", 3, "click"], [1, "geo-box-dot"], [1, "geo-box-info"], [1, "geo-box-name"], [1, "geo-box-meta"], ["class", "geo-box-map-btn", 3, "click", 4, "ngIf"], [1, "geo-box-map-btn", 3, "click"], [1, "empty-card", "empty-card--secure"], [1, "empty-card-icon", "empty-card-icon--secure"], [1, "empty-card-title", "text-secure"], [1, "alert-card", 3, "click"], ["class", "alert-unread-dot", 4, "ngIf"], [1, "alert-card__header"], [1, "alert-icon-wrapper"], ["name", "warning-outline", 1, "alert-icon"], [1, "alert-card-info"], [1, "alert-title-row"], [1, "alert-scope"], [1, "alert-time"], [1, "alert-message"], ["class", "alert-coordinates", 4, "ngIf"], [1, "alert-card__actions"], [1, "btn-alert-action", "btn-alert-action--map", 3, "click"], [1, "btn-alert-action", "btn-alert-action--delete", 3, "click"], [1, "alert-unread-dot"], [1, "alert-coordinates"]], template: function BoxRicevutePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 1)(1, "ion-toolbar", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "img", 6);
    \u0275\u0275listener("click", function BoxRicevutePage_Template_img_click_5_listener() {
      return ctx.tornaHome();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 7);
    \u0275\u0275text(7, "CENTRO DI ");
    \u0275\u0275elementStart(8, "span", 8);
    \u0275\u0275text(9, "CONTROLLO");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 9);
    \u0275\u0275listener("click", function BoxRicevutePage_Template_button_click_10_listener() {
      return ctx.caricaTutto();
    });
    \u0275\u0275element(11, "ion-icon", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 11)(13, "button", 12);
    \u0275\u0275listener("click", function BoxRicevutePage_Template_button_click_13_listener() {
      return ctx.cambiaTab("richieste");
    });
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Richieste");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, BoxRicevutePage_span_16_Template, 2, 1, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 12);
    \u0275\u0275listener("click", function BoxRicevutePage_Template_button_click_17_listener() {
      return ctx.cambiaTab("spazi");
    });
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "I Miei Spazi");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, BoxRicevutePage_button_20_Template, 4, 3, "button", 14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "ion-content", 15)(22, "div", 16);
    \u0275\u0275template(23, BoxRicevutePage_div_23_Template, 4, 0, "div", 17)(24, BoxRicevutePage_ng_container_24_Template, 4, 3, "ng-container", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 19);
    \u0275\u0275element(26, "div", 20);
    \u0275\u0275elementStart(27, "div", 21);
    \u0275\u0275listener("click", function BoxRicevutePage_Template_div_click_27_listener() {
      return ctx.tornaHome();
    });
    \u0275\u0275element(28, "ion-icon", 22);
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 23);
    \u0275\u0275element(32, "ion-icon", 24);
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "Avvisi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 25)(36, "button", 26);
    \u0275\u0275listener("click", function BoxRicevutePage_Template_button_click_36_listener() {
      return ctx.navTo("/crea-box");
    });
    \u0275\u0275element(37, "ion-icon", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 21);
    \u0275\u0275listener("click", function BoxRicevutePage_Template_div_click_38_listener() {
      return ctx.apriScanner();
    });
    \u0275\u0275element(39, "ion-icon", 28);
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "Scan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 21);
    \u0275\u0275listener("click", function BoxRicevutePage_Template_div_click_42_listener() {
      return ctx.navTo("/area-personale");
    });
    \u0275\u0275elementStart(43, "div", 29);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "Profilo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275classProp("active", ctx.activeTab === "richieste");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.richiestePending.length > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx.activeTab === "spazi");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.tipoProfilo === "business");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
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
  IonIcon,
  IonSpinner,
  IonItem,
  IonSelect,
  IonSelectOption
], styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\nion-header[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n}\nion-toolbar.peek-toolbar[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --border-width: 0;\n  padding: 0;\n}\n.header-inner[_ngcontent-%COMP%] {\n  padding: 16px clamp(20px, 3.5vw, 56px) 10px;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.header-greet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-greet[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n  height: 32px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-greet[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.header-greet[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]:active {\n  opacity: 0.55;\n}\n.header-greeting[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A) !important;\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent !important;\n  background-clip: text !important;\n  font-weight: 900 !important;\n  text-shadow: 0px 4px 10px rgba(125, 199, 64, 0.3);\n}\n.action-btn-refresh[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #3AABDB;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.08);\n  transition: all 0.2s ease;\n}\n.action-btn-refresh[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(58, 171, 219, 0.18);\n}\n.action-btn-refresh[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.action-btn-refresh[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n.tabs-segment-container[_ngcontent-%COMP%] {\n  display: flex;\n  background: #EBF5FB;\n  padding: 4px;\n  border-radius: 50px;\n  gap: 4px;\n  margin-top: 12px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  background: transparent;\n  border: none;\n  border-radius: 50px;\n  padding: 10px 8px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #4A7A94;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  outline: none;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  color: #3AABDB;\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.12);\n}\n.badge-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 50%;\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #FFFFFF;\n  line-height: 1;\n}\n.badge-count.badge-warning[_ngcontent-%COMP%] {\n  background: #F59E0B;\n}\n.badge-count.badge-danger[_ngcontent-%COMP%] {\n  background: #EF4444;\n}\n.peek-content[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --overflow: auto;\n  --padding-bottom: 110px;\n}\n.content-inner[_ngcontent-%COMP%] {\n  padding: 16px clamp(20px, 3.5vw, 56px) 24px;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n}\n.loading-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  gap: 12px;\n}\n.loading-wrap[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  color: #4A7A94;\n  margin: 0;\n}\n.sub-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.sub-section-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: #4A7A94;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 14px;\n  padding-left: 4px;\n}\n.empty-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 28px 16px;\n  text-align: center;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 2px dashed rgba(58, 171, 219, 0.15);\n  margin-bottom: 16px;\n}\n.empty-card--secure[_ngcontent-%COMP%] {\n  border-color: rgba(125, 199, 64, 0.2);\n  background: rgba(125, 199, 64, 0.02);\n}\n.empty-card[_ngcontent-%COMP%]   .empty-card-icon[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  margin-bottom: 10px;\n}\n.empty-card[_ngcontent-%COMP%]   .empty-card-icon--secure[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_floatBox 4s ease-in-out infinite;\n}\n.empty-card[_ngcontent-%COMP%]   .empty-card-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 0 0 6px 0;\n}\n.empty-card[_ngcontent-%COMP%]   .empty-card-title.text-secure[_ngcontent-%COMP%] {\n  color: #5A9E2A;\n}\n.empty-card[_ngcontent-%COMP%]   .empty-card-desc[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  color: #4A7A94;\n  margin: 0;\n  line-height: 1.45;\n}\n.control-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 16px;\n  margin-bottom: 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  position: relative;\n  overflow: hidden;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.control-card--pending[_ngcontent-%COMP%] {\n  border-left: 4px solid #F59E0B;\n}\n.control-card--accepted[_ngcontent-%COMP%] {\n  border-left: 4px solid #7DC740;\n  cursor: pointer;\n}\n.control-card--accepted[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.control-card--accepted[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.control-card[_ngcontent-%COMP%]   .card-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -30%;\n  right: -30%;\n  width: 60%;\n  height: 60%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(58, 171, 219, 0.06),\n      transparent 70%);\n  pointer-events: none;\n  z-index: 0;\n}\n.control-card[_ngcontent-%COMP%]   .control-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  z-index: 1;\n  position: relative;\n}\n.control-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.control-card[_ngcontent-%COMP%]   .card-icon.icon-pending[_ngcontent-%COMP%] {\n  color: #F59E0B;\n}\n.control-card[_ngcontent-%COMP%]   .card-icon.icon-accepted[_ngcontent-%COMP%] {\n  color: #7DC740;\n}\n.control-card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.control-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 0 0 4px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.control-card[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.75rem;\n  color: #4A7A94;\n  margin-bottom: 3px;\n}\n.control-card[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #3AABDB;\n}\n.control-card[_ngcontent-%COMP%]   .role-badge[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n  padding: 3px 8px;\n  border-radius: 12px;\n  white-space: nowrap;\n}\n.control-card[_ngcontent-%COMP%]   .role-badge.role-editor[_ngcontent-%COMP%] {\n  background: rgba(125, 199, 64, 0.1);\n  color: #5A9E2A;\n}\n.control-card[_ngcontent-%COMP%]   .control-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 14px;\n  position: relative;\n  z-index: 2;\n}\n.control-card[_ngcontent-%COMP%]   .control-card__actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  border: none;\n  border-radius: 12px;\n  padding: 10px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.control-card[_ngcontent-%COMP%]   .control-card__actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.control-card[_ngcontent-%COMP%]   .control-card__actions[_ngcontent-%COMP%]   .btn-action--danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.control-card[_ngcontent-%COMP%]   .control-card__actions[_ngcontent-%COMP%]   .btn-action--danger[_ngcontent-%COMP%]:hover {\n  background: #EF4444;\n  color: #FFFFFF;\n}\n.control-card[_ngcontent-%COMP%]   .control-card__actions[_ngcontent-%COMP%]   .btn-action--success[_ngcontent-%COMP%] {\n  background: rgba(125, 199, 64, 0.1);\n  color: #5A9E2A;\n}\n.control-card[_ngcontent-%COMP%]   .control-card__actions[_ngcontent-%COMP%]   .btn-action--success[_ngcontent-%COMP%]:hover {\n  background: #7DC740;\n  color: #FFFFFF;\n}\n.control-card[_ngcontent-%COMP%]   .control-card__actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.control-card[_ngcontent-%COMP%]   .tap-hint-text[_ngcontent-%COMP%] {\n  margin: 10px 0 0 0;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #7DC740;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 3px;\n}\n.control-card[_ngcontent-%COMP%]   .tap-hint-text[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.invite-form-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  margin-bottom: 24px;\n}\n.invite-form-card[_ngcontent-%COMP%]   .invite-form-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #3AABDB;\n  margin: 0 0 16px 0;\n}\n.invite-form-card[_ngcontent-%COMP%]   .invite-form-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.invite-form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.invite-form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 18px;\n}\n.invite-form-card[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 800;\n  color: #4A7A94;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.invite-form-card[_ngcontent-%COMP%]   .form-item-select[_ngcontent-%COMP%] {\n  --background: #EBF5FB;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --border-radius: 12px;\n  margin-top: 4px;\n  border: 1px solid transparent;\n  transition: all 0.2s;\n}\n.invite-form-card[_ngcontent-%COMP%]   .form-item-select[_ngcontent-%COMP%]:focus-within {\n  --background: #FFFFFF;\n  border-color: #3AABDB;\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.08);\n}\n.invite-form-card[_ngcontent-%COMP%]   .form-item-select[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n  --placeholder-color: $slate-400;\n  --placeholder-opacity: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #0F172A;\n  width: 100%;\n  padding: 0;\n}\n.invite-form-card[_ngcontent-%COMP%]   .input-icon-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #EBF5FB;\n  border-radius: 12px;\n  padding: 4px 12px;\n  border: 1px solid transparent;\n  transition:\n    border-color 0.2s,\n    background-color 0.2s,\n    box-shadow 0.2s;\n}\n.invite-form-card[_ngcontent-%COMP%]   .input-icon-wrapper[_ngcontent-%COMP%]:focus-within {\n  background-color: #FFFFFF;\n  border-color: #3AABDB;\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.08);\n}\n.invite-form-card[_ngcontent-%COMP%]   .input-icon-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  color: #4A7A94;\n  font-size: 1.1rem;\n  margin-right: 8px;\n}\n.invite-form-card[_ngcontent-%COMP%]   .custom-input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  width: 100%;\n  outline: none;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  color: #0F172A;\n  padding: 8px 0;\n}\n.invite-form-card[_ngcontent-%COMP%]   .custom-input[_ngcontent-%COMP%]::placeholder {\n  color: #94A3B8;\n}\n.invite-form-card[_ngcontent-%COMP%]   .btn-submit-invite[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3AABDB,\n      #1A7FA8);\n  color: #FFFFFF;\n  border: none;\n  border-radius: 12px;\n  padding: 12px;\n  width: 100%;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(58, 171, 219, 0.25);\n  transition: transform 0.2s, box-shadow 0.2s;\n  outline: none;\n}\n.invite-form-card[_ngcontent-%COMP%]   .btn-submit-invite[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.invite-form-card[_ngcontent-%COMP%]   .btn-submit-invite[_ngcontent-%COMP%]:not(:disabled):active {\n  transform: scale(0.97);\n}\n.invite-form-card[_ngcontent-%COMP%]   .btn-submit-invite[_ngcontent-%COMP%]:not(:disabled):hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(58, 171, 219, 0.35);\n}\n.invite-form-card[_ngcontent-%COMP%]   .btn-submit-invite[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.space-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 16px;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n}\n.space-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(58, 171, 219, 0.18);\n  padding-bottom: 12px;\n  margin-bottom: 12px;\n}\n.space-card__title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.space-card__title-row[_ngcontent-%COMP%]   .space-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #3AABDB;\n  flex-shrink: 0;\n}\n.space-card__title-row[_ngcontent-%COMP%]   .space-name[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.space-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.btn-space-setting[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  border: none;\n  border-radius: 8px;\n  padding: 6px 10px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  outline: none;\n}\n.btn-space-setting[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.btn-space-setting--geo[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n}\n.btn-space-setting--geo[_ngcontent-%COMP%]:hover {\n  background: #3AABDB;\n  color: #FFFFFF;\n}\n.btn-space-setting--config[_ngcontent-%COMP%] {\n  background: rgba(125, 199, 64, 0.1);\n  color: #5A9E2A;\n}\n.btn-space-setting--config[_ngcontent-%COMP%]:hover {\n  background: #7DC740;\n  color: #FFFFFF;\n}\n.btn-space-setting[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.space-guests[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.guests-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #4A7A94;\n  margin: 0 0 4px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.no-guests-hint[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.78rem;\n  color: #4A7A94;\n  font-style: italic;\n  padding: 8px 0;\n}\n.guest-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #F4F7F9;\n  border-radius: 12px;\n  padding: 8px 12px;\n  gap: 10px;\n  transition: background-color 0.2s;\n}\n.guest-row[_ngcontent-%COMP%]:hover {\n  background: #EBF5FB;\n}\n.guest-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.guest-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.15);\n  color: #3AABDB;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n}\n.guest-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.guest-details[_ngcontent-%COMP%]   .guest-name[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #0F172A;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.guest-details[_ngcontent-%COMP%]   .guest-email[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.72rem;\n  color: #4A7A94;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.guest-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.guest-status-badge[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.guest-status-badge.status-accepted[_ngcontent-%COMP%] {\n  background: rgba(125, 199, 64, 0.1);\n  color: #5A9E2A;\n}\n.guest-status-badge.status-pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.guest-status-badge.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.guest-status-badge.clickable[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.9);\n  transform: scale(1.05);\n}\n.guest-status-badge.clickable[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.btn-revoke-guest[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #4A7A94;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px;\n  border-radius: 6px;\n  transition: all 0.2s;\n  outline: none;\n}\n.btn-revoke-guest[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.btn-revoke-guest[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.btn-revoke-guest[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n.geo-map-section[_ngcontent-%COMP%] {\n  height: 400px;\n  background: #EBF5FB;\n  border-radius: 20px;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n.geo-leaflet-map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.geo-box-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.geo-box-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #FFFFFF;\n  border-radius: 14px;\n  padding: 12px 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.geo-box-row[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);\n}\n.geo-box-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #FFFFFF;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n  flex-shrink: 0;\n}\n.geo-box-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.geo-box-name[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #0F172A;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.geo-box-meta[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.7rem;\n  color: #4A7A94;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.geo-box-map-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.geo-box-map-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.geo-box-map-btn[_ngcontent-%COMP%]:hover {\n  background: #3AABDB;\n  color: #FFFFFF;\n}\n.alert-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 16px;\n  margin-bottom: 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(239, 68, 68, 0.1);\n  position: relative;\n  transition: transform 0.2s, box-shadow 0.2s;\n  overflow: hidden;\n}\n.alert-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(239, 68, 68, 0.08);\n}\n.alert-card--unread[_ngcontent-%COMP%] {\n  border-left: 4px solid #EF4444;\n  background: rgba(239, 68, 68, 0.02);\n}\n.alert-card[_ngcontent-%COMP%]   .alert-unread-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 8px;\n  height: 8px;\n  background-color: #EF4444;\n  border-radius: 50%;\n  box-shadow: 0 0 8px #EF4444;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite ease-in-out;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-icon-wrapper[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-icon-wrapper[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-card-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 4px;\n  gap: 10px;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-title-row[_ngcontent-%COMP%]   .alert-scope[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #0F172A;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-title-row[_ngcontent-%COMP%]   .alert-time[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.72rem;\n  color: #4A7A94;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-message[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  color: #4A7A94;\n  margin: 0 0 8px 0;\n  line-height: 1.4;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-coordinates[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #EBF5FB;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.72rem;\n  color: #4A7A94;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-coordinates[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #3AABDB;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 14px;\n  border-top: 1px solid rgba(58, 171, 219, 0.18);\n  padding-top: 12px;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-card__actions[_ngcontent-%COMP%]   .btn-alert-action[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  border: none;\n  border-radius: 10px;\n  padding: 8px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  outline: none;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-card__actions[_ngcontent-%COMP%]   .btn-alert-action[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-card__actions[_ngcontent-%COMP%]   .btn-alert-action--map[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-card__actions[_ngcontent-%COMP%]   .btn-alert-action--map[_ngcontent-%COMP%]:hover {\n  background: #3AABDB;\n  color: #FFFFFF;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-card__actions[_ngcontent-%COMP%]   .btn-alert-action--delete[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-card__actions[_ngcontent-%COMP%]   .btn-alert-action--delete[_ngcontent-%COMP%]:hover {\n  background: #EF4444;\n  color: #FFFFFF;\n}\n.alert-card[_ngcontent-%COMP%]   .alert-card__actions[_ngcontent-%COMP%]   .btn-alert-action[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n@keyframes _ngcontent-%COMP%_floatBox {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 0.8;\n  }\n}\n.animate-pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 2s infinite ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out forwards;\n}\n@media (max-width: 399px) {\n  .header-inner[_ngcontent-%COMP%] {\n    padding: 12px clamp(20px, 3.5vw, 56px) 8px;\n  }\n  .header-greeting[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .content-inner[_ngcontent-%COMP%] {\n    padding: 12px clamp(20px, 3.5vw, 56px) 20px;\n  }\n  .tab-btn[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 8px 6px;\n    gap: 4px;\n  }\n  .control-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .control-card__actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .control-card__actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .space-card__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .space-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .alert-card__actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .alert-card__actions[_ngcontent-%COMP%]   .btn-alert-action[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (min-width: 768px) {\n  .header-inner[_ngcontent-%COMP%] {\n    padding: 20px clamp(20px, 3.5vw, 56px) 14px;\n  }\n  .content-inner[_ngcontent-%COMP%] {\n    padding: 18px clamp(20px, 3.5vw, 56px) 32px;\n  }\n  .header-greeting[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n@media (min-width: 1024px) {\n  .header-inner[_ngcontent-%COMP%] {\n    padding: 24px clamp(20px, 3.5vw, 56px) 16px;\n  }\n  .content-inner[_ngcontent-%COMP%] {\n    padding: 20px clamp(20px, 3.5vw, 56px) 40px;\n  }\n  .header-greeting[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n}\n/*# sourceMappingURL=box-ricevute.page.css.map */'] });
var BoxRicevutePage = _BoxRicevutePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BoxRicevutePage, [{
    type: Component,
    args: [{ selector: "app-box-ricevute", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonButtons,
      IonButton,
      IonIcon,
      IonBadge,
      IonSpinner,
      IonCard,
      IonCardHeader,
      IonCardTitle,
      IonCardContent,
      IonFooter,
      IonSegment,
      IonSegmentButton,
      IonList,
      IonItem,
      IonLabel,
      IonInput,
      IonSelect,
      IonSelectOption
    ], template: `<!-- ============================================================ -->\r
<!-- FILE: PeekBox/src/app/box-ricevute/box-ricevute.page.html  -->\r
<!-- ============================================================ -->\r
\r
<ion-header class="ion-no-border">\r
  <ion-toolbar class="peek-toolbar">\r
    <div class="header-inner">\r
      <div class="header-top">\r
        <div class="header-greet">\r
          <img src="assets/icon/logoTitolo1.png" class="header-logo" alt="PeekBox" (click)="tornaHome()" style="cursor: pointer;" />\r
          <h1 class="header-greeting">CENTRO DI <span class="nome-verde">CONTROLLO</span></h1>\r
        </div>\r
        <button class="action-btn-refresh" (click)="caricaTutto()">\r
          <ion-icon name="refresh-outline"></ion-icon>\r
        </button>\r
      </div>\r
\r
      <!-- Segment dei tab del Centro di Controllo -->\r
      <div class="tabs-segment-container">\r
        <button\r
          class="tab-btn"\r
          [class.active]="activeTab === 'richieste'"\r
          (click)="cambiaTab('richieste')"\r
        >\r
          <span>Richieste</span>\r
          <span *ngIf="richiestePending.length > 0" class="badge-count badge-warning">\r
            {{ richiestePending.length }}\r
          </span>\r
        </button>\r
\r
        <button\r
          class="tab-btn"\r
          [class.active]="activeTab === 'spazi'"\r
          (click)="cambiaTab('spazi')"\r
        >\r
          <span>I Miei Spazi</span>\r
        </button>\r
\r
        <button\r
          *ngIf="tipoProfilo === 'business'"\r
          class="tab-btn"\r
          [class.active]="activeTab === 'geofence'"\r
          (click)="cambiaTab('geofence')"\r
        >\r
          <span>Geofencing</span>\r
          <span *ngIf="contatoreNonLette > 0" class="badge-count badge-danger animate-pulse">\r
            {{ contatoreNonLette }}\r
          </span>\r
        </button>\r
      </div>\r
    </div>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="peek-content">\r
  <div class="content-inner">\r
\r
    <!-- Loading spinner -->\r
    <div *ngIf="isLoading" class="loading-wrap">\r
      <ion-spinner name="crescent" color="primary"></ion-spinner>\r
      <p class="loading-text">Caricamento Centro di Controllo...</p>\r
    </div>\r
\r
    <ng-container *ngIf="!isLoading">\r
\r
      <!-- ===================================================== -->\r
      <!-- TAB 1: RICHIESTE & SPAZI RICEVUTI                     -->\r
      <!-- ===================================================== -->\r
      <div *ngIf="activeTab === 'richieste'" class="tab-content animate-fade-in">\r
        \r
        <!-- Sotto-sezione: Inviti in attesa -->\r
        <div class="sub-section">\r
          <h2 class="sub-section-title">RICHIESTE IN ATTESA</h2>\r
          \r
          <div *ngIf="richiestePending.length === 0" class="empty-card">\r
            <div class="empty-card-icon">\u{1F4EC}</div>\r
            <h3 class="empty-card-title">Nessun invito in attesa</h3>\r
            <p class="empty-card-desc">Quando qualcuno condivide un archivio con te, comparir\xE0 qui.</p>\r
          </div>\r
\r
          <div *ngFor="let r of richiestePending" class="control-card control-card--pending">\r
            <div class="card-glow"></div>\r
            <div class="control-card__header">\r
              <ion-icon name="mail-open-outline" class="card-icon icon-pending"></ion-icon>\r
              <div class="card-info">\r
                <h3 class="card-title">{{ r.armadio_nome || r.nome_archivio }}</h3>\r
                <div class="card-meta">\r
                  <ion-icon name="person-outline"></ion-icon>\r
                  <span>Da: {{ r.proprietario_username }}</span>\r
                </div>\r
                <div class="card-meta">\r
                  <ion-icon name="time-outline"></ion-icon>\r
                  <span>Ricevuto il: {{ formattaData(r.creato_il) }}</span>\r
                </div>\r
              </div>\r
              <span class="role-badge" [class.role-editor]="r.ruolo === 'editor'">\r
                {{ r.ruolo === 'editor' ? 'Editor' : 'Viewer' }}\r
              </span>\r
            </div>\r
\r
            <div class="control-card__actions">\r
              <button class="btn-action btn-action--danger" (click)="rifiuta(r)">\r
                <ion-icon name="close-circle-outline"></ion-icon>\r
                <span>Rifiuta</span>\r
              </button>\r
              <button class="btn-action btn-action--success" (click)="accetta(r)">\r
                <ion-icon name="checkmark-circle-outline"></ion-icon>\r
                <span>Accetta</span>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Sotto-sezione: Archivi condivisi con me -->\r
        <div class="sub-section">\r
          <h2 class="sub-section-title">ARCHIVI CONDIVISI CON TE</h2>\r
          \r
          <div *ngIf="archiviAccettati.length === 0" class="empty-card">\r
            <div class="empty-card-icon">\u{1F4C2}</div>\r
            <h3 class="empty-card-title">Nessun archivio condiviso</h3>\r
            <p class="empty-card-desc">Non hai ancora accesso ad archivi condivisi da altri utenti.</p>\r
          </div>\r
\r
          <div *ngFor="let a of archiviAccettati" class="control-card control-card--accepted" (click)="apriArchivioCondiviso(a)">\r
            <div class="control-card__header">\r
              <ion-icon name="archive-outline" class="card-icon icon-accepted"></ion-icon>\r
              <div class="card-info">\r
                <h3 class="card-title">{{ a.armadio_nome }}</h3>\r
                <div class="card-meta">\r
                  <ion-icon name="person-outline"></ion-icon>\r
                  <span>Proprietario: {{ a.proprietario_username }}</span>\r
                </div>\r
              </div>\r
              <span class="role-badge" [class.role-editor]="a.ruolo === 'editor'">\r
                {{ a.ruolo === 'editor' ? 'Editor' : 'Viewer' }}\r
              </span>\r
            </div>\r
            <p class="tap-hint-text">Tocca per esplorare l'archivio condiviso <ion-icon name="chevron-forward-outline"></ion-icon></p>\r
          </div>\r
        </div>\r
\r
      </div>\r
\r
      <!-- ===================================================== -->\r
      <!-- TAB 2: I MIEI SPAZI (GESTIONE E INVITI)               -->\r
      <!-- ===================================================== -->\r
      <div *ngIf="activeTab === 'spazi'" class="tab-content animate-fade-in">\r
        \r
        <!-- Form Condividi un Archivio -->\r
        <div class="sub-section">\r
          <div class="invite-form-card">\r
            <h2 class="invite-form-title">\r
              <ion-icon name="person-add-outline"></ion-icon>\r
              <span>Condividi un Archivio</span>\r
            </h2>\r
            \r
            <div class="form-group">\r
              <label class="form-label">Seleziona Archivio</label>\r
              <ion-item lines="none" class="form-item-select">\r
                <ion-select placeholder="Scegli un archivio..." [(ngModel)]="armadioSelezionato" class="custom-select">\r
                  <ion-select-option *ngFor="let armadio of mieiArmadi" [value]="armadio.id">\r
                    {{ armadio.nome }}\r
                  </ion-select-option>\r
                </ion-select>\r
              </ion-item>\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="form-label">Email dell'Ospite</label>\r
              <div class="input-icon-wrapper">\r
                <ion-icon name="mail-outline" class="input-icon"></ion-icon>\r
                <input type="email" placeholder="esempio@email.com" [(ngModel)]="emailOspite" class="custom-input" />\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="form-label">Ruolo da Assegnare</label>\r
              <ion-item lines="none" class="form-item-select">\r
                <ion-select [(ngModel)]="ruoloSelezionato" class="custom-select">\r
                  <ion-select-option value="viewer">Sola Lettura (Viewer)</ion-select-option>\r
                  <ion-select-option value="editor">Lettura e Scrittura (Editor)</ion-select-option>\r
                </ion-select>\r
              </ion-item>\r
            </div>\r
\r
            <button class="btn-submit-invite" (click)="invitaNuovoOspite()" [disabled]="isInviting">\r
              <ion-spinner name="crescent" *ngIf="isInviting"></ion-spinner>\r
              <ion-icon name="share-social-outline" *ngIf="!isInviting"></ion-icon>\r
              <span>{{ isInviting ? 'Invio in corso...' : 'Invia Invito' }}</span>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Lista dei miei armadi e gestione ospiti -->\r
        <div class="sub-section">\r
          <h2 class="sub-section-title">GESTIONE DEI TUOI SPAZI</h2>\r
          \r
          <div *ngIf="mieiArmadi.length === 0" class="empty-card">\r
            <div class="empty-card-icon">\u{1F5C4}\uFE0F</div>\r
            <h3 class="empty-card-title">Nessun archivio creato</h3>\r
            <p class="empty-card-desc">Crea un archivio nella home per poterlo condividere.</p>\r
          </div>\r
\r
          <div *ngFor="let armadio of mieiArmadi" class="space-card">\r
            <div class="space-card__header">\r
              <div class="space-card__title-row">\r
                <ion-icon name="archive-outline" class="space-icon"></ion-icon>\r
                <h3 class="space-name">{{ armadio.nome }}</h3>\r
              </div>\r
              <div class="space-actions">\r
                <button *ngIf="tipoProfilo === 'business'" class="btn-space-setting btn-space-setting--geo" (click)="apriConfigGeofence(armadio)" title="Configura Geofence">\r
                  <ion-icon name="location-outline"></ion-icon>\r
                  <span>Geofence</span>\r
                </button>\r
                <button class="btn-space-setting btn-space-setting--config" (click)="apriDettagliSpazio(armadio)" title="Gestisci Spazio">\r
                  <ion-icon name="options-outline"></ion-icon>\r
                  <span>Gestisci</span>\r
                </button>\r
              </div>\r
            </div>\r
\r
            <!-- Ospiti attivi per questo armadio -->\r
            <div class="space-guests">\r
              <h4 class="guests-title">Ospiti con accesso ({{ activeGuestsMap[armadio.id]?.length || 0 }})</h4>\r
              \r
              <div *ngIf="!activeGuestsMap[armadio.id] || activeGuestsMap[armadio.id].length === 0" class="no-guests-hint">\r
                Nessun ospite per questo archivio. Usa il form sopra per invitare qualcuno.\r
              </div>\r
\r
              <div *ngFor="let guest of activeGuestsMap[armadio.id]" class="guest-row">\r
                <div class="guest-info">\r
                  <div class="guest-avatar">\r
                    {{ guest.ospite_username ? guest.ospite_username.charAt(0).toUpperCase() : 'O' }}\r
                  </div>\r
                  <div class="guest-details">\r
                    <span class="guest-name">{{ guest.ospite_username }}</span>\r
                    <span class="guest-email">{{ guest.ospite_email || 'Ospite' }}</span>\r
                  </div>\r
                </div>\r
                <div class="guest-actions">\r
                  <!-- Ruolo cliccabile per il salvataggio rapido -->\r
                  <span \r
                    class="guest-status-badge clickable" \r
                    [class.status-accepted]="guest.stato === 'accettata'" \r
                    [class.status-pending]="guest.stato === 'in_attesa'"\r
                    (click)="guest.stato === 'accettata' && cambiaRuoloOspite(guest)"\r
                    [title]="guest.stato === 'accettata' ? 'Clicca per cambiare ruolo' : 'In attesa di accettazione'"\r
                  >\r
                    {{ guest.stato === 'accettata' ? (guest.ruolo === 'editor' ? 'Editor' : 'Viewer') : 'In attesa' }}\r
                    <ion-icon name="refresh-outline" *ngIf="guest.stato === 'accettata'" style="font-size: 0.7rem; margin-left: 2px;"></ion-icon>\r
                  </span>\r
                  \r
                  <button class="btn-revoke-guest" (click)="revocaOspite(guest.id)" title="Revoca accesso">\r
                    <ion-icon name="trash-outline"></ion-icon>\r
                  </button>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
\r
      <!-- ===================================================== -->\r
      <!-- TAB 3: NOTIFICHE GEOFENCING                           -->\r
      <!-- ===================================================== -->\r
      <ng-container *ngIf="tipoProfilo === 'business'">\r
      <!-- MAPPA CHECKPOINT (sempre nel DOM) -->\r
      <div class="geo-map-section" [hidden]="activeTab !== 'geofence'">\r
        <div #geoMapContainer class="geo-leaflet-map"></div>\r
      </div>\r
\r
      <div *ngIf="activeTab === 'geofence'" class="tab-content animate-fade-in">\r
\r
        <!-- ELENCO BOX CON GEOFENCE ATTIVO -->\r
        <div class="sub-section" *ngIf="checkpointsMappa.length > 0">\r
          <h2 class="sub-section-title">BOX CON GEOFENCE ATTIVO</h2>\r
          <div class="geo-box-list">\r
            <div *ngFor="let cp of checkpointsMappa" class="geo-box-row" (click)="cp.haCoordinate && apriGoogleMaps(cp.display_lat, cp.display_lng)">\r
              <div class="geo-box-dot" [style.background]="cp.haCheckpoint ? '#7DC840' : '#3AABDB'"></div>\r
              <div class="geo-box-info">\r
                <span class="geo-box-name">{{ cp.box_nome || 'Box #' + cp.box_id }}</span>\r
                <span class="geo-box-meta">{{ cp.armadio_nome }}{{ cp.haCheckpoint ? ' \xB7 ' + formattaData(cp.timestamp) : ' \xB7 Centro geofence' }}</span>\r
              </div>\r
              <button class="geo-box-map-btn" *ngIf="cp.haCoordinate" (click)="apriGoogleMaps(cp.display_lat, cp.display_lng); $event.stopPropagation()">\r
                <ion-icon name="location-outline"></ion-icon>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <h2 class="sub-section-title">ALLERTE DI SICUREZZA</h2>\r
\r
        <div *ngIf="notificheGeofence.length === 0" class="empty-card empty-card--secure">\r
          <div class="empty-card-icon empty-card-icon--secure">\u{1F6E1}\uFE0F</div>\r
          <h3 class="empty-card-title text-secure">Tutti gli asset sono al sicuro</h3>\r
          <p class="empty-card-desc">Nessuna anomalia GPS o violazione del perimetro geofence rilevata.</p>\r
        </div>\r
\r
        <div *ngFor="let n of notificheGeofence" class="alert-card" [class.alert-card--unread]="!n.letto" (click)="segnaComeLetta(n)">\r
          <span class="alert-unread-dot" *ngIf="!n.letto"></span>\r
          \r
          <div class="alert-card__header">\r
            <div class="alert-icon-wrapper">\r
              <ion-icon name="warning-outline" class="alert-icon"></ion-icon>\r
            </div>\r
            <div class="alert-card-info">\r
              <div class="alert-title-row">\r
                <span class="alert-scope">{{ n.nome_archivio }}</span>\r
                <span class="alert-time">{{ formattaData(n.timestamp) }}</span>\r
              </div>\r
              <p class="alert-message">{{ n.messaggio }}</p>\r
              \r
              <div class="alert-coordinates" *ngIf="n.latitudine">\r
                <ion-icon name="location-outline"></ion-icon>\r
                <span>Lat: {{ n.latitudine.toFixed(6) }}, Lng: {{ n.longitudine.toFixed(6) }}</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="alert-card__actions">\r
            <button class="btn-alert-action btn-alert-action--map" (click)="mostraInMappa(n, $event)">\r
              <ion-icon name="location-outline"></ion-icon>\r
              <span>Mostra in Mappa</span>\r
            </button>\r
            <button class="btn-alert-action btn-alert-action--delete" (click)="eliminaNotifica(n.id, $event)">\r
              <ion-icon name="trash-outline"></ion-icon>\r
              <span>Archivia</span>\r
            </button>\r
          </div>\r
        </div>\r
\r
      </div>\r
      </ng-container>\r
\r
    </ng-container>\r
\r
  </div>\r
</ion-content>\r
\r
<!-- FLOATING BOTTOM NAV (Coerente con Home) -->\r
<div class="floating-nav">\r
  <div class="nav-glow"></div>\r
\r
  <div class="nav-item" (click)="tornaHome()">\r
    <ion-icon name="home"></ion-icon>\r
    <span>Home</span>\r
  </div>\r
\r
  <div class="nav-item active">\r
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
</div>\r
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&display=swap";\n\n/* src/app/box-ricevute/box-ricevute.page.scss */\n:host {\n  display: block;\n}\nion-header {\n  --background: #F4F7F9;\n}\nion-toolbar.peek-toolbar {\n  --background: #F4F7F9;\n  --border-width: 0;\n  padding: 0;\n}\n.header-inner {\n  padding: 16px clamp(20px, 3.5vw, 56px) 10px;\n}\n.header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.header-greet {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-greet .header-logo {\n  height: 32px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-greet .header-logo:hover {\n  opacity: 0.75;\n}\n.header-greet .header-logo:active {\n  opacity: 0.55;\n}\n.header-greeting {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A) !important;\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent !important;\n  background-clip: text !important;\n  font-weight: 900 !important;\n  text-shadow: 0px 4px 10px rgba(125, 199, 64, 0.3);\n}\n.action-btn-refresh {\n  background: #FFFFFF;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #3AABDB;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.08);\n  transition: all 0.2s ease;\n}\n.action-btn-refresh:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(58, 171, 219, 0.18);\n}\n.action-btn-refresh:active {\n  transform: scale(0.95);\n}\n.action-btn-refresh ion-icon {\n  font-size: 1.15rem;\n}\n.tabs-segment-container {\n  display: flex;\n  background: #EBF5FB;\n  padding: 4px;\n  border-radius: 50px;\n  gap: 4px;\n  margin-top: 12px;\n}\n.tab-btn {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  background: transparent;\n  border: none;\n  border-radius: 50px;\n  padding: 10px 8px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #4A7A94;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  outline: none;\n}\n.tab-btn.active {\n  background: #FFFFFF;\n  color: #3AABDB;\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.12);\n}\n.badge-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 50%;\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #FFFFFF;\n  line-height: 1;\n}\n.badge-count.badge-warning {\n  background: #F59E0B;\n}\n.badge-count.badge-danger {\n  background: #EF4444;\n}\n.peek-content {\n  --background: #F4F7F9;\n  --overflow: auto;\n  --padding-bottom: 110px;\n}\n.content-inner {\n  padding: 16px clamp(20px, 3.5vw, 56px) 24px;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n}\n.loading-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  gap: 12px;\n}\n.loading-wrap .loading-text {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  color: #4A7A94;\n  margin: 0;\n}\n.sub-section {\n  margin-bottom: 24px;\n}\n.sub-section-title {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: #4A7A94;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 14px;\n  padding-left: 4px;\n}\n.empty-card {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 28px 16px;\n  text-align: center;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 2px dashed rgba(58, 171, 219, 0.15);\n  margin-bottom: 16px;\n}\n.empty-card--secure {\n  border-color: rgba(125, 199, 64, 0.2);\n  background: rgba(125, 199, 64, 0.02);\n}\n.empty-card .empty-card-icon {\n  font-size: 2.2rem;\n  margin-bottom: 10px;\n}\n.empty-card .empty-card-icon--secure {\n  animation: floatBox 4s ease-in-out infinite;\n}\n.empty-card .empty-card-title {\n  font-family: "Poppins", sans-serif;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 0 0 6px 0;\n}\n.empty-card .empty-card-title.text-secure {\n  color: #5A9E2A;\n}\n.empty-card .empty-card-desc {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  color: #4A7A94;\n  margin: 0;\n  line-height: 1.45;\n}\n.control-card {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 16px;\n  margin-bottom: 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  position: relative;\n  overflow: hidden;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.control-card--pending {\n  border-left: 4px solid #F59E0B;\n}\n.control-card--accepted {\n  border-left: 4px solid #7DC740;\n  cursor: pointer;\n}\n.control-card--accepted:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.control-card--accepted:active {\n  transform: scale(0.98);\n}\n.control-card .card-glow {\n  position: absolute;\n  top: -30%;\n  right: -30%;\n  width: 60%;\n  height: 60%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(58, 171, 219, 0.06),\n      transparent 70%);\n  pointer-events: none;\n  z-index: 0;\n}\n.control-card .control-card__header {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  z-index: 1;\n  position: relative;\n}\n.control-card .card-icon {\n  font-size: 1.6rem;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.control-card .card-icon.icon-pending {\n  color: #F59E0B;\n}\n.control-card .card-icon.icon-accepted {\n  color: #7DC740;\n}\n.control-card .card-info {\n  flex: 1;\n  min-width: 0;\n}\n.control-card .card-title {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 0 0 4px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.control-card .card-meta {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.75rem;\n  color: #4A7A94;\n  margin-bottom: 3px;\n}\n.control-card .card-meta ion-icon {\n  font-size: 0.85rem;\n  color: #3AABDB;\n}\n.control-card .role-badge {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n  padding: 3px 8px;\n  border-radius: 12px;\n  white-space: nowrap;\n}\n.control-card .role-badge.role-editor {\n  background: rgba(125, 199, 64, 0.1);\n  color: #5A9E2A;\n}\n.control-card .control-card__actions {\n  display: flex;\n  gap: 10px;\n  margin-top: 14px;\n  position: relative;\n  z-index: 2;\n}\n.control-card .control-card__actions .btn-action {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  border: none;\n  border-radius: 12px;\n  padding: 10px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.control-card .control-card__actions .btn-action ion-icon {\n  font-size: 1.1rem;\n}\n.control-card .control-card__actions .btn-action--danger {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.control-card .control-card__actions .btn-action--danger:hover {\n  background: #EF4444;\n  color: #FFFFFF;\n}\n.control-card .control-card__actions .btn-action--success {\n  background: rgba(125, 199, 64, 0.1);\n  color: #5A9E2A;\n}\n.control-card .control-card__actions .btn-action--success:hover {\n  background: #7DC740;\n  color: #FFFFFF;\n}\n.control-card .control-card__actions .btn-action:active {\n  transform: scale(0.95);\n}\n.control-card .tap-hint-text {\n  margin: 10px 0 0 0;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #7DC740;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 3px;\n}\n.control-card .tap-hint-text ion-icon {\n  font-size: 0.8rem;\n}\n.invite-form-card {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  margin-bottom: 24px;\n}\n.invite-form-card .invite-form-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #3AABDB;\n  margin: 0 0 16px 0;\n}\n.invite-form-card .invite-form-title ion-icon {\n  font-size: 1.2rem;\n}\n.invite-form-card .form-group {\n  margin-bottom: 14px;\n}\n.invite-form-card .form-group:last-of-type {\n  margin-bottom: 18px;\n}\n.invite-form-card .form-label {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 800;\n  color: #4A7A94;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.invite-form-card .form-item-select {\n  --background: #EBF5FB;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --border-radius: 12px;\n  margin-top: 4px;\n  border: 1px solid transparent;\n  transition: all 0.2s;\n}\n.invite-form-card .form-item-select:focus-within {\n  --background: #FFFFFF;\n  border-color: #3AABDB;\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.08);\n}\n.invite-form-card .form-item-select .custom-select {\n  --placeholder-color: $slate-400;\n  --placeholder-opacity: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #0F172A;\n  width: 100%;\n  padding: 0;\n}\n.invite-form-card .input-icon-wrapper {\n  display: flex;\n  align-items: center;\n  background: #EBF5FB;\n  border-radius: 12px;\n  padding: 4px 12px;\n  border: 1px solid transparent;\n  transition:\n    border-color 0.2s,\n    background-color 0.2s,\n    box-shadow 0.2s;\n}\n.invite-form-card .input-icon-wrapper:focus-within {\n  background-color: #FFFFFF;\n  border-color: #3AABDB;\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.08);\n}\n.invite-form-card .input-icon-wrapper .input-icon {\n  color: #4A7A94;\n  font-size: 1.1rem;\n  margin-right: 8px;\n}\n.invite-form-card .custom-input {\n  border: none;\n  background: transparent;\n  width: 100%;\n  outline: none;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  color: #0F172A;\n  padding: 8px 0;\n}\n.invite-form-card .custom-input::placeholder {\n  color: #94A3B8;\n}\n.invite-form-card .btn-submit-invite {\n  background:\n    linear-gradient(\n      135deg,\n      #3AABDB,\n      #1A7FA8);\n  color: #FFFFFF;\n  border: none;\n  border-radius: 12px;\n  padding: 12px;\n  width: 100%;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(58, 171, 219, 0.25);\n  transition: transform 0.2s, box-shadow 0.2s;\n  outline: none;\n}\n.invite-form-card .btn-submit-invite:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.invite-form-card .btn-submit-invite:not(:disabled):active {\n  transform: scale(0.97);\n}\n.invite-form-card .btn-submit-invite:not(:disabled):hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(58, 171, 219, 0.35);\n}\n.invite-form-card .btn-submit-invite ion-spinner {\n  margin-right: 4px;\n}\n.space-card {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 16px;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n}\n.space-card__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(58, 171, 219, 0.18);\n  padding-bottom: 12px;\n  margin-bottom: 12px;\n}\n.space-card__title-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.space-card__title-row .space-icon {\n  font-size: 1.3rem;\n  color: #3AABDB;\n  flex-shrink: 0;\n}\n.space-card__title-row .space-name {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.space-actions {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.btn-space-setting {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  border: none;\n  border-radius: 8px;\n  padding: 6px 10px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  outline: none;\n}\n.btn-space-setting ion-icon {\n  font-size: 0.85rem;\n}\n.btn-space-setting--geo {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n}\n.btn-space-setting--geo:hover {\n  background: #3AABDB;\n  color: #FFFFFF;\n}\n.btn-space-setting--config {\n  background: rgba(125, 199, 64, 0.1);\n  color: #5A9E2A;\n}\n.btn-space-setting--config:hover {\n  background: #7DC740;\n  color: #FFFFFF;\n}\n.btn-space-setting:active {\n  transform: scale(0.95);\n}\n.space-guests {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.guests-title {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #4A7A94;\n  margin: 0 0 4px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.no-guests-hint {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.78rem;\n  color: #4A7A94;\n  font-style: italic;\n  padding: 8px 0;\n}\n.guest-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #F4F7F9;\n  border-radius: 12px;\n  padding: 8px 12px;\n  gap: 10px;\n  transition: background-color 0.2s;\n}\n.guest-row:hover {\n  background: #EBF5FB;\n}\n.guest-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.guest-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.15);\n  color: #3AABDB;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n}\n.guest-details {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.guest-details .guest-name {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #0F172A;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.guest-details .guest-email {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.72rem;\n  color: #4A7A94;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.guest-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.guest-status-badge {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.guest-status-badge.status-accepted {\n  background: rgba(125, 199, 64, 0.1);\n  color: #5A9E2A;\n}\n.guest-status-badge.status-pending {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.guest-status-badge.clickable {\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.guest-status-badge.clickable:hover {\n  filter: brightness(0.9);\n  transform: scale(1.05);\n}\n.guest-status-badge.clickable:active {\n  transform: scale(0.95);\n}\n.btn-revoke-guest {\n  background: transparent;\n  border: none;\n  color: #4A7A94;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px;\n  border-radius: 6px;\n  transition: all 0.2s;\n  outline: none;\n}\n.btn-revoke-guest ion-icon {\n  font-size: 0.95rem;\n}\n.btn-revoke-guest:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.btn-revoke-guest:active {\n  transform: scale(0.9);\n}\n.geo-map-section {\n  height: 400px;\n  background: #EBF5FB;\n  border-radius: 20px;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n.geo-leaflet-map {\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.geo-box-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.geo-box-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #FFFFFF;\n  border-radius: 14px;\n  padding: 12px 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.geo-box-row:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);\n}\n.geo-box-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #FFFFFF;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n  flex-shrink: 0;\n}\n.geo-box-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.geo-box-name {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #0F172A;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.geo-box-meta {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.7rem;\n  color: #4A7A94;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.geo-box-map-btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.geo-box-map-btn ion-icon {\n  font-size: 1.1rem;\n}\n.geo-box-map-btn:hover {\n  background: #3AABDB;\n  color: #FFFFFF;\n}\n.alert-card {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 16px;\n  margin-bottom: 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(239, 68, 68, 0.1);\n  position: relative;\n  transition: transform 0.2s, box-shadow 0.2s;\n  overflow: hidden;\n}\n.alert-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(239, 68, 68, 0.08);\n}\n.alert-card--unread {\n  border-left: 4px solid #EF4444;\n  background: rgba(239, 68, 68, 0.02);\n}\n.alert-card .alert-unread-dot {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 8px;\n  height: 8px;\n  background-color: #EF4444;\n  border-radius: 50%;\n  box-shadow: 0 0 8px #EF4444;\n  animation: pulse 1.5s infinite ease-in-out;\n}\n.alert-card .alert-card__header {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n.alert-card .alert-icon-wrapper {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.alert-card .alert-icon-wrapper .alert-icon {\n  font-size: 1.25rem;\n}\n.alert-card .alert-card-info {\n  flex: 1;\n  min-width: 0;\n}\n.alert-card .alert-title-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 4px;\n  gap: 10px;\n}\n.alert-card .alert-title-row .alert-scope {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #0F172A;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.alert-card .alert-title-row .alert-time {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.72rem;\n  color: #4A7A94;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.alert-card .alert-message {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  color: #4A7A94;\n  margin: 0 0 8px 0;\n  line-height: 1.4;\n}\n.alert-card .alert-coordinates {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #EBF5FB;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.72rem;\n  color: #4A7A94;\n}\n.alert-card .alert-coordinates ion-icon {\n  font-size: 0.8rem;\n  color: #3AABDB;\n}\n.alert-card .alert-card__actions {\n  display: flex;\n  gap: 10px;\n  margin-top: 14px;\n  border-top: 1px solid rgba(58, 171, 219, 0.18);\n  padding-top: 12px;\n}\n.alert-card .alert-card__actions .btn-alert-action {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  border: none;\n  border-radius: 10px;\n  padding: 8px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  outline: none;\n}\n.alert-card .alert-card__actions .btn-alert-action ion-icon {\n  font-size: 0.95rem;\n}\n.alert-card .alert-card__actions .btn-alert-action--map {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n}\n.alert-card .alert-card__actions .btn-alert-action--map:hover {\n  background: #3AABDB;\n  color: #FFFFFF;\n}\n.alert-card .alert-card__actions .btn-alert-action--delete {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.alert-card .alert-card__actions .btn-alert-action--delete:hover {\n  background: #EF4444;\n  color: #FFFFFF;\n}\n.alert-card .alert-card__actions .btn-alert-action:active {\n  transform: scale(0.96);\n}\n@keyframes floatBox {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 0.8;\n  }\n}\n.animate-pulse {\n  animation: pulse 2s infinite ease-in-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fade-in {\n  animation: fadeIn 0.3s ease-out forwards;\n}\n@media (max-width: 399px) {\n  .header-inner {\n    padding: 12px clamp(20px, 3.5vw, 56px) 8px;\n  }\n  .header-greeting {\n    font-size: 1rem;\n  }\n  .content-inner {\n    padding: 12px clamp(20px, 3.5vw, 56px) 20px;\n  }\n  .tab-btn {\n    font-size: 0.7rem;\n    padding: 8px 6px;\n    gap: 4px;\n  }\n  .control-card {\n    padding: 12px;\n  }\n  .control-card__actions {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .control-card__actions .btn-action {\n    width: 100%;\n  }\n  .space-card__header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .space-actions {\n    flex-wrap: wrap;\n  }\n  .alert-card__actions {\n    flex-direction: column;\n  }\n  .alert-card__actions .btn-alert-action {\n    width: 100%;\n  }\n}\n@media (min-width: 768px) {\n  .header-inner {\n    padding: 20px clamp(20px, 3.5vw, 56px) 14px;\n  }\n  .content-inner {\n    padding: 18px clamp(20px, 3.5vw, 56px) 32px;\n  }\n  .header-greeting {\n    font-size: 1.3rem;\n  }\n}\n@media (min-width: 1024px) {\n  .header-inner {\n    padding: 24px clamp(20px, 3.5vw, 56px) 16px;\n  }\n  .content-inner {\n    padding: 20px clamp(20px, 3.5vw, 56px) 40px;\n  }\n  .header-greeting {\n    font-size: 1.4rem;\n  }\n}\n/*# sourceMappingURL=box-ricevute.page.css.map */\n'] }]
  }], () => [{ type: DatabaseService }, { type: Router }, { type: AlertController }, { type: ToastController }, { type: NavigationHistoryService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoxRicevutePage, { className: "BoxRicevutePage", filePath: "src/app/box-ricevute/box-ricevute.page.ts", lineNumber: 41 });
})();
export {
  BoxRicevutePage
};
//# sourceMappingURL=box-ricevute.page-E5DPJG3M.js.map
