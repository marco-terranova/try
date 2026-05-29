import {
  AlertController,
  ToastController
} from "./chunk-UWSSEREE.js";
import {
  DatabaseService
} from "./chunk-5G3PJOGU.js";
import {
  addIcons,
  chatbubblesOutline,
  checkmarkOutline,
  closeCircleOutline,
  closeOutline,
  cubeOutline,
  layersOutline,
  people,
  pricetagOutline,
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
  IonSpinner,
  IonToolbar
} from "./chunk-VSLPI6WN.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
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
  ɵɵpipe,
  ɵɵpipeBind2,
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
  __async
} from "./chunk-QXFS4N4X.js";

// src/app/admin/admin.page.ts
function AdminPage_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.segnalazioniNonLette, " ");
  }
}
function AdminPage_div_20_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Admin");
    \u0275\u0275elementEnd();
  }
}
function AdminPage_div_20_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "Personal");
    \u0275\u0275elementEnd();
  }
}
function AdminPage_div_20_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "Business");
    \u0275\u0275elementEnd();
  }
}
function AdminPage_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275template(7, AdminPage_div_20_div_1_span_7_Template, 2, 0, "span", 23)(8, AdminPage_div_20_div_1_span_8_Template, 2, 0, "span", 24)(9, AdminPage_div_20_div_1_span_9_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 26)(13, "div", 27);
    \u0275\u0275element(14, "ion-icon", 28);
    \u0275\u0275elementStart(15, "div", 29)(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Armadi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 27);
    \u0275\u0275element(21, "ion-icon", 30);
    \u0275\u0275elementStart(22, "div", 29)(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "Box");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 27);
    \u0275\u0275element(28, "ion-icon", 31);
    \u0275\u0275elementStart(29, "div", 29)(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "Oggetti");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 32)(35, "button", 33);
    \u0275\u0275listener("click", function AdminPage_div_20_div_1_Template_button_click_35_listener() {
      const utente_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.eliminaUtente(utente_r3.id));
    });
    \u0275\u0275element(36, "ion-icon", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const utente_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", utente_r3.email == null ? null : (tmp_3_0 = utente_r3.email.charAt(0)) == null ? null : tmp_3_0.toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", utente_r3.email, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", utente_r3.is_admin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", utente_r3.piano === "personal");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", utente_r3.piano === "business");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(utente_r3.email);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(utente_r3.num_armadi ?? 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(utente_r3.num_box ?? 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(utente_r3.num_oggetti ?? 0);
  }
}
function AdminPage_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "ion-icon", 39);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Nessun utente trovato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Non ci sono utenti registrati nel sistema.");
    \u0275\u0275elementEnd()();
  }
}
function AdminPage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, AdminPage_div_20_div_1_Template, 37, 9, "div", 17)(2, AdminPage_div_20_div_2_Template, 6, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.utenti);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.utenti.length === 0 && !ctx_r0.isLoading);
  }
}
function AdminPage_div_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "ion-spinner", 47);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Caricamento segnalazioni...");
    \u0275\u0275elementEnd()();
  }
}
function AdminPage_div_21_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "ion-icon", 49);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.errore);
  }
}
function AdminPage_div_21_div_8_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1, "Feedback");
    \u0275\u0275elementEnd();
  }
}
function AdminPage_div_21_div_8_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1, "Report");
    \u0275\u0275elementEnd();
  }
}
function AdminPage_div_21_div_8_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, "Suggerimento");
    \u0275\u0275elementEnd();
  }
}
function AdminPage_div_21_div_8_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const segnalazione_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(segnalazione_r5.tipo);
  }
}
function AdminPage_div_21_div_8_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const segnalazione_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(segnalazione_r5.descrizione);
  }
}
function AdminPage_div_21_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "div", 54)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 55)(6, "span", 56)(7, "span", 57);
    \u0275\u0275template(8, AdminPage_div_21_div_8_div_1_span_8_Template, 2, 0, "span", 58)(9, AdminPage_div_21_div_8_div_1_span_9_Template, 2, 0, "span", 59)(10, AdminPage_div_21_div_8_div_1_span_10_Template, 2, 0, "span", 60)(11, AdminPage_div_21_div_8_div_1_span_11_Template, 2, 1, "span", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 62);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "span", 63);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, AdminPage_div_21_div_8_div_1_div_17_Template, 3, 1, "div", 64);
    \u0275\u0275elementStart(18, "div", 65)(19, "div", 66);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 67)(22, "h4");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p")(25, "small");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 68)(29, "span", 69);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 70);
    \u0275\u0275element(32, "ion-icon", 71);
    \u0275\u0275elementStart(33, "select", 72);
    \u0275\u0275listener("change", function AdminPage_div_21_div_8_div_1_Template_select_change_33_listener($event) {
      const segnalazione_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.aggiornaStatoSegnalazione(segnalazione_r5, $event.target.value));
    });
    \u0275\u0275elementStart(34, "option", 73);
    \u0275\u0275text(35, "Nuova");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 74);
    \u0275\u0275text(37, "In Lavorazione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 75);
    \u0275\u0275text(39, "Risolta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 76);
    \u0275\u0275text(41, "Chiusa");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "button", 77);
    \u0275\u0275listener("click", function AdminPage_div_21_div_8_div_1_Template_button_click_42_listener() {
      const segnalazione_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.eliminaSegnalazione(segnalazione_r5));
    });
    \u0275\u0275element(43, "ion-icon", 34);
    \u0275\u0275text(44, " Elimina ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const segnalazione_r5 = ctx.$implicit;
    \u0275\u0275classProp("segnalazione-nuova", segnalazione_r5.stato === "nuova");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(segnalazione_r5.titolo);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngSwitch", segnalazione_r5.tipo);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "feedback");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "report");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "suggerimento");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 32, segnalazione_r5.timestamp, "dd/MM/yyyy HH:mm"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("priorita-alta", segnalazione_r5.priorita === "alta")("priorita-media", segnalazione_r5.priorita === "media")("priorita-bassa", segnalazione_r5.priorita === "bassa");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", segnalazione_r5.priorita === "alta" ? "Alta" : segnalazione_r5.priorita === "media" ? "Media" : "Bassa", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", segnalazione_r5.descrizione);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", segnalazione_r5.email == null ? null : (tmp_16_0 = segnalazione_r5.email.charAt(0)) == null ? null : tmp_16_0.toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(segnalazione_r5.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Inviato il: ", \u0275\u0275pipeBind2(27, 35, segnalazione_r5.timestamp, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("stato-nuova", segnalazione_r5.stato === "nuova")("stato-in-lavorazione", segnalazione_r5.stato === "in_lavorazione")("stato-risolta", segnalazione_r5.stato === "risolta")("stato-chiusa", segnalazione_r5.stato === "chiusa");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", segnalazione_r5.stato === "nuova" ? "Nuova" : segnalazione_r5.stato === "in_lavorazione" ? "In Lavorazione" : segnalazione_r5.stato === "risolta" ? "Risolta" : "Chiusa", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("selected", segnalazione_r5.stato === "nuova");
    \u0275\u0275advance(2);
    \u0275\u0275property("selected", segnalazione_r5.stato === "in_lavorazione");
    \u0275\u0275advance(2);
    \u0275\u0275property("selected", segnalazione_r5.stato === "risolta");
    \u0275\u0275advance(2);
    \u0275\u0275property("selected", segnalazione_r5.stato === "chiusa");
  }
}
function AdminPage_div_21_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, AdminPage_div_21_div_8_div_1_Template, 45, 38, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.segnalazioni);
  }
}
function AdminPage_div_21_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "ion-icon", 83);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Nessuna segnalazione trovata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Gli utenti non hanno ancora inviato segnalazioni o feedback.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 84);
    \u0275\u0275text(7, "Le segnalazioni appariranno qui quando gli utenti le invieranno dalla sezione Informazioni Account.");
    \u0275\u0275elementEnd()();
  }
}
function AdminPage_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "h2");
    \u0275\u0275text(3, "Segnalazioni e Feedback");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 42);
    \u0275\u0275text(5, "Visualizza e gestisci tutte le segnalazioni inviate dagli utenti");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AdminPage_div_21_div_6_Template, 4, 0, "div", 43)(7, AdminPage_div_21_div_7_Template, 4, 1, "div", 44)(8, AdminPage_div_21_div_8_Template, 2, 1, "div", 45)(9, AdminPage_div_21_div_9_Template, 8, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.errore);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && !ctx_r0.errore && ctx_r0.segnalazioni.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && !ctx_r0.errore && ctx_r0.segnalazioni.length === 0);
  }
}
var _AdminPage = class _AdminPage {
  constructor(alertCtrl, dbService, toastCtrl, router, navHistory) {
    this.alertCtrl = alertCtrl;
    this.dbService = dbService;
    this.toastCtrl = toastCtrl;
    this.router = router;
    this.navHistory = navHistory;
    this.utenti = [];
    this.segnalazioni = [];
    this.isLoading = true;
    this.errore = "";
    this.activeTab = "utenti";
    this.nomeAdmin = "";
    this.utenteIdCorrente = null;
    addIcons({
      trashOutline,
      cubeOutline,
      people,
      layersOutline,
      pricetagOutline,
      chatbubblesOutline,
      checkmarkOutline,
      closeOutline,
      closeCircleOutline
    });
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.utenteIdCorrente = localStorage.getItem("utente_id");
    this.nomeAdmin = (localStorage.getItem("utente_nome") || "").toUpperCase();
    const isAdmin = localStorage.getItem("is_admin");
    if (isAdmin !== "1") {
      this.router.navigateByUrl("/home", { replaceUrl: true });
      return;
    }
    this.caricaIniziale();
  }
  caricaIniziale() {
    return __async(this, null, function* () {
      yield this.caricaUtenti();
      yield this.caricaSegnalazioni();
      this.isLoading = false;
    });
  }
  caricaUtenti() {
    this.isLoading = true;
    this.errore = "";
    return this.dbService.adminGetUtenti().toPromise().then((res) => {
      this.utenti = res.utenti || [];
      this.isLoading = false;
    }).catch(() => {
      this.errore = "Impossibile caricare gli utenti. Verifica di avere i permessi admin.";
      this.isLoading = false;
    });
  }
  caricaSegnalazioni() {
    this.isLoading = true;
    this.errore = "";
    return this.dbService.adminGetSegnalazioni().toPromise().then((res) => {
      this.segnalazioni = res.segnalazioni || [];
      this.isLoading = false;
    }).catch(() => {
      this.errore = "Impossibile caricare le segnalazioni.";
      this.isLoading = false;
    });
  }
  cambiaTab(tab) {
    this.activeTab = tab;
    if (tab === "segnalazioni") {
      this.caricaSegnalazioni();
    }
  }
  get segnalazioniNonLette() {
    return this.segnalazioni.filter((s) => s.stato === "nuova").length;
  }
  iniziale(nome) {
    return (nome || "?").charAt(0).toUpperCase();
  }
  // ── Aggiunto goBack() ────────────────────────────
  goBack() {
    this.navHistory.back("/home");
  }
  confermaEliminazione(utente) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        cssClass: "peekbox-alert",
        header: "Elimina Account",
        message: `Sei sicuro di voler eliminare l'account di <strong>${utente.username}</strong> (${utente.email})?<br><br>Questa azione \xE8 <strong>irreversibile</strong> e rimuover\xE0 tutti i dati associati.`,
        buttons: [
          { text: "Annulla", role: "cancel" },
          {
            text: "Elimina",
            role: "destructive",
            handler: () => this.eliminaUtente(utente)
          }
        ]
      });
      yield alert.present();
    });
  }
  eliminaUtente(utente) {
    this.dbService.adminEliminaUtente(utente.id).subscribe({
      next: () => __async(this, null, function* () {
        this.utenti = this.utenti.filter((u) => u.id !== utente.id);
        const toast = yield this.alertCtrl.create({
          cssClass: "peekbox-alert",
          header: "Account eliminato",
          message: `L'account di ${utente.username} \xE8 stato rimosso.`,
          buttons: ["OK"]
        });
        yield toast.present();
      }),
      error: (err) => __async(this, null, function* () {
        const msg = err?.error?.error || "Errore durante l'eliminazione.";
        const alert = yield this.alertCtrl.create({
          cssClass: "peekbox-alert",
          header: "Errore",
          message: msg,
          buttons: ["OK"]
        });
        yield alert.present();
      })
    });
  }
  eliminaSegnalazione(segnalazione) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        cssClass: "peekbox-alert",
        header: "Elimina Segnalazione",
        message: "Sei sicuro di voler eliminare definitivamente questa segnalazione? Questa azione \xE8 irreversibile.",
        buttons: [
          { text: "Annulla", role: "cancel" },
          {
            text: "Elimina",
            role: "destructive",
            handler: () => this._eliminaSegnalazione(segnalazione)
          }
        ]
      });
      yield alert.present();
    });
  }
  _eliminaSegnalazione(segnalazione) {
    this.dbService.adminEliminaSegnalazione(segnalazione.id).subscribe({
      next: () => {
        this.segnalazioni = this.segnalazioni.filter((s) => s.id !== segnalazione.id);
        this.mostraToast("Segnalazione eliminata.", "success");
      },
      error: () => {
        this.mostraToast("Errore durante l'eliminazione.", "danger");
      }
    });
  }
  aggiornaStatoSegnalazione(segnalazione, nuovoStato) {
    this.dbService.adminAggiornaStatoSegnalazione(segnalazione.id, nuovoStato).subscribe({
      next: () => {
        const index = this.segnalazioni.findIndex((s) => s.id === segnalazione.id);
        if (index !== -1) {
          this.segnalazioni[index].stato = nuovoStato;
        }
        this.mostraToast("Stato aggiornato.", "success");
      },
      error: () => {
        this.mostraToast("Errore durante l'aggiornamento.", "danger");
      }
    });
  }
  // ── NAVBAR ──────────────────────────────────────────────────
  vaiHome() {
    this.navHistory.navTo("/home");
  }
  vaiSearch() {
    this.navHistory.navTo("/search");
  }
  vaiProfilo() {
    this.navHistory.navTo("/area-personale");
  }
  inizialeAdmin() {
    return this.nomeAdmin.charAt(0) || "A";
  }
  mostraToast(messaggio, color = "primary") {
    this.toastCtrl.create({
      message: messaggio,
      duration: 2500,
      color,
      position: "bottom"
    }).then((toast) => toast.present());
  }
};
_AdminPage.\u0275fac = function AdminPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminPage)(\u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(DatabaseService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NavigationHistoryService));
};
_AdminPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminPage, selectors: [["app-admin"]], decls: 22, vars: 8, consts: [[1, "ion-no-border"], [1, "peek-toolbar"], [1, "header-inner"], [1, "header-top"], [1, "header-greet"], ["src", "assets/icon/logoTitolo1.png", "alt", "PeekBox", 1, "header-logo", 2, "cursor", "pointer", 3, "click"], [1, "header-greeting"], [1, "nome-verde"], [1, "tabs-segment-container"], [1, "tab-btn", 3, "click"], ["class", "badge-count badge-warning", 4, "ngIf"], [3, "fullscreen"], [1, "admin-dashboard-wrapper"], ["class", "users-list-container animate-fade-in", 4, "ngIf"], ["class", "segnalazioni-list-container animate-fade-in", 4, "ngIf"], [1, "badge-count", "badge-warning"], [1, "users-list-container", "animate-fade-in"], ["class", "user-premium-card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "user-premium-card"], [1, "user-identity"], [1, "avatar-circle"], [1, "user-details"], ["class", "role-badge admin", 4, "ngIf"], ["class", "role-badge personal", 4, "ngIf"], ["class", "role-badge business", 4, "ngIf"], [1, "user-stats-pills"], [1, "stat-pill"], ["name", "cube-outline"], [1, "stat-data"], ["name", "layers-outline"], ["name", "pricetag-outline"], [1, "user-actions"], ["title", "Elimina utente", 1, "btn-delete-ghost", 3, "click"], ["name", "trash-outline"], [1, "role-badge", "admin"], [1, "role-badge", "personal"], [1, "role-badge", "business"], [1, "empty-state"], ["name", "people-outline", 1, "empty-icon"], [1, "segnalazioni-list-container", "animate-fade-in"], [1, "section-header"], [1, "section-description"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "segnalazioni-list", 4, "ngIf"], [1, "loading-state"], ["name", "crescent"], [1, "error-state"], ["name", "alert-circle-outline"], [1, "segnalazioni-list"], ["class", "segnalazione-card", 3, "segnalazione-nuova", 4, "ngFor", "ngForOf"], [1, "segnalazione-card"], [1, "segnalazione-header"], [1, "segnalazione-info"], [1, "segnalazione-meta"], [1, "segnalazione-tipo"], [3, "ngSwitch"], ["class", "tipo-badge tipo-feedback", 4, "ngSwitchCase"], ["class", "tipo-badge tipo-report", 4, "ngSwitchCase"], ["class", "tipo-badge tipo-suggerimento", 4, "ngSwitchCase"], ["class", "tipo-badge", 4, "ngSwitchDefault"], [1, "segnalazione-data"], [1, "priorita-badge"], ["class", "segnalazione-descrizione", 4, "ngIf"], [1, "segnalazione-utente-info"], [1, "utente-avatar"], [1, "utente-dettagli"], [1, "segnalazione-actions"], [1, "stato-badge"], [1, "stato-select"], ["name", "chevron-down-outline"], [3, "change"], ["value", "nuova", 3, "selected"], ["value", "in_lavorazione", 3, "selected"], ["value", "risolta", 3, "selected"], ["value", "chiusa", 3, "selected"], [1, "btn-elimina-segnalazione", 3, "click"], [1, "tipo-badge", "tipo-feedback"], [1, "tipo-badge", "tipo-report"], [1, "tipo-badge", "tipo-suggerimento"], [1, "tipo-badge"], [1, "segnalazione-descrizione"], ["name", "chatbubbles-outline", 1, "empty-icon"], [1, "hint"]], template: function AdminPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "img", 5);
    \u0275\u0275listener("click", function AdminPage_Template_img_click_5_listener() {
      return ctx.goBack();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 6);
    \u0275\u0275text(7, "GESTIONE ");
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9, "ADEMPIMENTI");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 8)(11, "button", 9);
    \u0275\u0275listener("click", function AdminPage_Template_button_click_11_listener() {
      return ctx.cambiaTab("utenti");
    });
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Utenti");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 9);
    \u0275\u0275listener("click", function AdminPage_Template_button_click_14_listener() {
      return ctx.cambiaTab("segnalazioni");
    });
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Segnalazioni");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AdminPage_span_17_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "ion-content", 11)(19, "div", 12);
    \u0275\u0275template(20, AdminPage_div_20_Template, 3, 2, "div", 13)(21, AdminPage_div_21_Template, 10, 4, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275classProp("active", ctx.activeTab === "utenti");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx.activeTab === "segnalazioni");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.segnalazioniNonLette > 0);
    \u0275\u0275advance();
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.activeTab === "utenti");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeTab === "segnalazioni");
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  RouterModule,
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
  IonSpinner,
  DatePipe
], styles: ['\n\nion-header[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n}\nion-toolbar.peek-toolbar[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\n.header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo[_ngcontent-%COMP%] {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.header-logo[_ngcontent-%COMP%]:active {\n  opacity: 0.55;\n}\n.header-greeting[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\n.users-counter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n  color: #4A7A94;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #F4F7F9 !important;\n  --overflow: auto;\n}\n.admin-dashboard-wrapper[_ngcontent-%COMP%] {\n  padding: 40px clamp(20px, 3.5vw, 56px);\n  box-sizing: border-box;\n}\n.users-list-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.user-premium-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 24px;\n  padding: 24px 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03), 0 1px 4px rgba(0, 0, 0, 0.02);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.user-premium-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 20px 40px rgba(58, 171, 219, 0.08);\n  border-color: rgba(58, 171, 219, 0.12);\n}\n.user-identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex: 1;\n  min-width: 0;\n}\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #3AABDB,\n      #1A7FA8);\n  color: #FFFFFF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.4rem;\n  font-weight: 800;\n  flex-shrink: 0;\n  box-shadow: 0 8px 16px rgba(2, 132, 199, 0.2);\n}\n.user-details[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.user-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0F172A;\n  font-size: 1.05rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  white-space: normal;\n}\n.user-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #4A7A94;\n  font-size: 0.88rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.role-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 3px 10px;\n  border-radius: 50px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.role-badge.admin[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.12);\n  color: #1A7FA8;\n}\n.role-badge.personal[_ngcontent-%COMP%] {\n  background: rgba(125, 199, 64, 0.12);\n  color: #5A9E2A;\n}\n.role-badge.business[_ngcontent-%COMP%] {\n  background: rgba(21, 66, 92, 0.12);\n  color: #15425C;\n}\n.user-stats-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex: 1.2;\n  justify-content: center;\n}\n.stat-pill[_ngcontent-%COMP%] {\n  background: #EBF5FB;\n  padding: 10px 16px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 110px;\n  transition: background 0.2s ease;\n}\n.stat-pill[_ngcontent-%COMP%]:hover {\n  background: rgba(58, 171, 219, 0.12);\n}\n.stat-pill[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #3AABDB;\n  --color: #3AABDB;\n  flex-shrink: 0;\n}\n.stat-pill[_ngcontent-%COMP%]   .stat-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-pill[_ngcontent-%COMP%]   .stat-data[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0F172A;\n  font-size: 1.1rem;\n  font-weight: 900;\n  line-height: 1;\n}\n.stat-pill[_ngcontent-%COMP%]   .stat-data[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #4A7A94;\n  font-size: 0.68rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  margin-top: 2px;\n  letter-spacing: 0.3px;\n}\n.user-actions[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  display: flex;\n  justify-content: flex-end;\n  padding-left: 16px;\n}\n.btn-delete-ghost[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.06);\n  color: #EF4444;\n  border: none;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-delete-ghost[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #EF4444;\n  --color: $red;\n}\n.btn-delete-ghost[_ngcontent-%COMP%]:hover {\n  background: #EF4444;\n  transform: scale(1.1);\n  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.25);\n}\n.btn-delete-ghost[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  --color: #FFFFFF;\n}\n@media (max-width: 900px) {\n  .admin-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 16px;\n  }\n  .users-counter[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n    justify-content: center;\n  }\n  .user-premium-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 20px;\n    padding: 20px 24px;\n  }\n  .user-identity[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .user-stats-pills[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    width: 100%;\n  }\n  .stat-pill[_ngcontent-%COMP%] {\n    min-width: calc(33% - 8px);\n  }\n  .user-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n    padding-left: 0;\n  }\n}\n@media (max-width: 480px) {\n  .stat-pill[_ngcontent-%COMP%] {\n    min-width: calc(50% - 6px);\n  }\n}\n.tabs-segment-container[_ngcontent-%COMP%] {\n  display: flex;\n  background: #EBF5FB;\n  padding: 4px;\n  border-radius: 50px;\n  gap: 4px;\n  margin-top: 12px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  background: transparent;\n  border: none;\n  border-radius: 50px;\n  padding: 10px 8px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #4A7A94;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  outline: none;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  color: #3AABDB;\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.12);\n}\n.segnalazioni-list-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 0 0 8px 0;\n}\n.section-description[_ngcontent-%COMP%] {\n  color: #4A7A94;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.segnalazioni-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.segnalazione-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.segnalazione-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.segnalazione-card.segnalazione-nuova[_ngcontent-%COMP%] {\n  border-left: 4px solid #F59E0B;\n  background: rgba(245, 158, 11, 0.02);\n}\n.segnalazione-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.segnalazione-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.segnalazione-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px 0;\n}\n.segnalazione-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n}\n.segnalazione-tipo[_ngcontent-%COMP%], \n.segnalazione-data[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #4A7A94;\n}\n.tipo-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.tipo-feedback[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n}\n.tipo-report[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.tipo-suggerimento[_ngcontent-%COMP%] {\n  background: rgba(125, 199, 64, 0.1);\n  color: #7DC740;\n}\n.priorita-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 8px;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-left: 8px;\n}\n.priorita-alta[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.priorita-media[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.priorita-bassa[_ngcontent-%COMP%] {\n  background: rgba(125, 199, 64, 0.1);\n  color: #7DC740;\n}\n.segnalazione-descrizione[_ngcontent-%COMP%] {\n  margin: 12px 0;\n  padding: 0;\n}\n.segnalazione-descrizione[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4A7A94;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.segnalazione-utente-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 16px 0;\n  padding-top: 16px;\n  border-top: 1px solid rgba(58, 171, 219, 0.18);\n}\n.utente-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n}\n.utente-dettagli[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.utente-dettagli[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px 0;\n}\n.utente-dettagli[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4A7A94;\n  font-size: 0.75rem;\n  margin: 0;\n}\n.segnalazione-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 12px;\n  margin-top: 16px;\n  flex-wrap: wrap;\n}\n.stato-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 8px;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.stato-nuova[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n}\n.stato-in-lavorazione[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.stato-risolta[_ngcontent-%COMP%] {\n  background: rgba(125, 199, 64, 0.1);\n  color: #7DC740;\n}\n.stato-chiusa[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.stato-select[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 120px;\n}\n.stato-select[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  color: #4A7A94;\n  font-size: 1rem;\n}\n.stato-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  appearance: none;\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid rgba(58, 171, 219, 0.12);\n  border-radius: 8px;\n  background: #FFFFFF;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  color: #0F172A;\n  background-image: none;\n  background-color: #FFFFFF;\n}\n.stato-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3AABDB;\n  box-shadow: 0 0 0 2px rgba(58, 171, 219, 0.2);\n}\n.btn-elimina-segnalazione[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  color: #EF4444;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-elimina-segnalazione[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn-elimina-segnalazione[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.btn-elimina-segnalazione[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.loading-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 40px 20px;\n}\n.loading-state[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.error-state[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 20px;\n}\n.error-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 12px 0;\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4A7A94;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.error-state[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #EF4444;\n}\n.empty-state[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #4A7A94;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-style: italic;\n  color: #4A7A94;\n  margin-top: 16px;\n}\n@media (max-width: 900px) {\n  .admin-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 16px;\n  }\n  .users-counter[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n    justify-content: center;\n  }\n  .user-premium-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 20px;\n    padding: 20px 24px;\n  }\n  .user-identity[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .user-stats-pills[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    width: 100%;\n  }\n  .stat-pill[_ngcontent-%COMP%] {\n    min-width: calc(33% - 8px);\n  }\n  .user-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n    padding-left: 0;\n  }\n  .segnalazione-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .segnalazione-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 480px) {\n  .stat-pill[_ngcontent-%COMP%] {\n    min-width: calc(50% - 6px);\n  }\n  .segnalazione-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .segnalazione-utente-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=admin.page.css.map */'] });
var AdminPage = _AdminPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminPage, [{
    type: Component,
    args: [{ selector: "app-admin", standalone: true, imports: [
      CommonModule,
      RouterModule,
      IonHeader,
      IonToolbar,
      IonContent,
      IonIcon,
      IonSpinner
    ], template: `<ion-header class="ion-no-border">\r
  <ion-toolbar class="peek-toolbar">\r
    <div class="header-inner">\r
      <div class="header-top">\r
        <div class="header-greet">\r
          <img src="assets/icon/logoTitolo1.png" class="header-logo" alt="PeekBox" (click)="goBack()" style="cursor: pointer;" />\r
          <h1 class="header-greeting">GESTIONE <span class="nome-verde">ADEMPIMENTI</span></h1>\r
        </div>\r
      </div>\r
      \r
      <!-- Tabs per passare da Utenti a Segnalazioni -->\r
      <div class="tabs-segment-container">\r
        <button\r
          class="tab-btn"\r
          [class.active]="activeTab === 'utenti'"\r
          (click)="cambiaTab('utenti')"\r
        >\r
          <span>Utenti</span>\r
        </button>\r
        \r
        <button\r
          class="tab-btn"\r
          [class.active]="activeTab === 'segnalazioni'"\r
          (click)="cambiaTab('segnalazioni')"\r
        >\r
          <span>Segnalazioni</span>\r
          <span *ngIf="segnalazioniNonLette > 0" class="badge-count badge-warning">\r
            {{ segnalazioniNonLette }}\r
          </span>\r
        </button>\r
      </div>\r
    </div>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content [fullscreen]="true">\r
  <div class="admin-dashboard-wrapper">\r
    <!-- LISTA UTENTI -->\r
    <div *ngIf="activeTab === 'utenti'" class="users-list-container animate-fade-in">\r
      <div class="user-premium-card" *ngFor="let utente of utenti">\r
        <!-- IDENTIT\xC0 -->\r
        <div class="user-identity">\r
          <div class="avatar-circle">\r
            {{ utente.email?.charAt(0)?.toUpperCase() }}\r
          </div>\r
          <div class="user-details">\r
            <h3>\r
              {{ utente.email }}\r
              <span class="role-badge admin" *ngIf="utente.is_admin">Admin</span>\r
              <span class="role-badge personal" *ngIf="utente.piano === 'personal'">Personal</span>\r
              <span class="role-badge business" *ngIf="utente.piano === 'business'">Business</span>\r
            </h3>\r
            <p>{{ utente.email }}</p>\r
          </div>\r
        </div>\r
\r
        <!-- STATISTICHE -->\r
        <div class="user-stats-pills">\r
          <div class="stat-pill">\r
            <ion-icon name="cube-outline"></ion-icon>\r
            <div class="stat-data">\r
              <strong>{{ utente.num_armadi ?? 0 }}</strong>\r
              <span>Armadi</span>\r
            </div>\r
          </div>\r
          <div class="stat-pill">\r
            <ion-icon name="layers-outline"></ion-icon>\r
            <div class="stat-data">\r
              <strong>{{ utente.num_box ?? 0 }}</strong>\r
              <span>Box</span>\r
            </div>\r
          </div>\r
          <div class="stat-pill">\r
            <ion-icon name="pricetag-outline"></ion-icon>\r
            <div class="stat-data">\r
              <strong>{{ utente.num_oggetti ?? 0 }}</strong>\r
              <span>Oggetti</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- AZIONI -->\r
        <div class="user-actions">\r
          <button class="btn-delete-ghost" (click)="eliminaUtente(utente.id)" title="Elimina utente">\r
            <ion-icon name="trash-outline"></ion-icon>\r
          </button>\r
        </div>\r
      </div>\r
      \r
      <!-- Messaggio quando non ci sono utenti -->\r
      <div *ngIf="utenti.length === 0 && !isLoading" class="empty-state">\r
        <ion-icon name="people-outline" class="empty-icon"></ion-icon>\r
        <h3>Nessun utente trovato</h3>\r
        <p>Non ci sono utenti registrati nel sistema.</p>\r
      </div>\r
    </div>\r
\r
    <!-- LISTA SEGNALAZIONI -->\r
    <div *ngIf="activeTab === 'segnalazioni'" class="segnalazioni-list-container animate-fade-in">\r
      <!-- Header sezione -->\r
      <div class="section-header">\r
        <h2>Segnalazioni e Feedback</h2>\r
        <p class="section-description">Visualizza e gestisci tutte le segnalazioni inviate dagli utenti</p>\r
      </div>\r
      \r
<!-- Messaggio di caricamento o errore -->\r
<div *ngIf="isLoading" class="loading-state">\r
  <ion-spinner name="crescent"></ion-spinner>\r
  <p>Caricamento segnalazioni...</p>\r
</div>\r
\r
<div *ngIf="!isLoading && errore" class="error-state">\r
  <ion-icon name="alert-circle-outline"></ion-icon>\r
  <p>{{ errore }}</p>\r
</div>\r
\r
<!-- Lista segnalazioni -->\r
<div *ngIf="!isLoading && !errore && segnalazioni.length > 0" class="segnalazioni-list">\r
  <div class="segnalazione-card" *ngFor="let segnalazione of segnalazioni" [class.segnalazione-nuova]="segnalazione.stato === 'nuova'">\r
    <!-- Header segnalazione -->\r
    <div class="segnalazione-header">\r
      <div class="segnalazione-info">\r
        <h3>{{ segnalazione.titolo }}</h3>\r
        <div class="segnalazione-meta">\r
          <span class="segnalazione-tipo">\r
            <!-- Badge tipo segnalazione -->\r
            <span [ngSwitch]="segnalazione.tipo">\r
              <span *ngSwitchCase="'feedback'" class="tipo-badge tipo-feedback">Feedback</span>\r
              <span *ngSwitchCase="'report'" class="tipo-badge tipo-report">Report</span>\r
              <span *ngSwitchCase="'suggerimento'" class="tipo-badge tipo-suggerimento">Suggerimento</span>\r
              <span *ngSwitchDefault class="tipo-badge">{{ segnalazione.tipo }}</span>\r
            </span>\r
          </span>\r
          <span class="segnalazione-data">\r
            {{ segnalazione.timestamp | date:'dd/MM/yyyy HH:mm' }}\r
          </span>\r
        </div>\r
      </div>\r
      \r
      <!-- Badge priorit\xE0 -->\r
      <span class="priorita-badge" [class.priorita-alta]="segnalazione.priorita === 'alta'"\r
                                [class.priorita-media]="segnalazione.priorita === 'media'"\r
                                [class.priorita-bassa]="segnalazione.priorita === 'bassa'">\r
        {{ segnalazione.priorita === 'alta' ? 'Alta' : segnalazione.priorita === 'media' ? 'Media' : 'Bassa' }}\r
      </span>\r
    </div>\r
    \r
    <!-- Descrizione -->\r
    <div *ngIf="segnalazione.descrizione" class="segnalazione-descrizione">\r
      <p>{{ segnalazione.descrizione }}</p>\r
    </div>\r
    \r
    <!-- Informazioni utente -->\r
    <div class="segnalazione-utente-info">\r
      <div class="utente-avatar">\r
        {{ segnalazione.email?.charAt(0)?.toUpperCase() }}\r
      </div>\r
      <div class="utente-dettagli">\r
        <h4>{{ segnalazione.email }}</h4>\r
        <p><small>Inviato il: {{ segnalazione.timestamp | date:'dd/MM/yyyy HH:mm' }}</small></p>\r
      </div>\r
    </div>\r
    \r
    <!-- Stato e azioni -->\r
    <div class="segnalazione-actions">\r
      <!-- Badge stato -->\r
      <span class="stato-badge" \r
            [class.stato-nuova]="segnalazione.stato === 'nuova'"\r
            [class.stato-in-lavorazione]="segnalazione.stato === 'in_lavorazione'"\r
            [class.stato-risolta]="segnalazione.stato === 'risolta'"\r
            [class.stato-chiusa]="segnalazione.stato === 'chiusa'">\r
        {{ segnalazione.stato === 'nuova' ? 'Nuova' : \r
          segnalazione.stato === 'in_lavorazione' ? 'In Lavorazione' : \r
          segnalazione.stato === 'risolta' ? 'Risolta' : 'Chiusa' }}\r
      </span>\r
      \r
      <!-- Menu a tendina per cambiare stato -->\r
      <div class="stato-select">\r
        <ion-icon name="chevron-down-outline"></ion-icon>\r
        <select (change)="aggiornaStatoSegnalazione(segnalazione, $any($event).target.value)">\r
          <option value="nuova" [selected]="segnalazione.stato === 'nuova'">Nuova</option>\r
          <option value="in_lavorazione" [selected]="segnalazione.stato === 'in_lavorazione'">In Lavorazione</option>\r
          <option value="risolta" [selected]="segnalazione.stato === 'risolta'">Risolta</option>\r
          <option value="chiusa" [selected]="segnalazione.stato === 'chiusa'">Chiusa</option>\r
        </select>\r
      </div>\r
      \r
      <!-- Pulsante elimina -->\r
      <button class="btn-elimina-segnalazione" (click)="eliminaSegnalazione(segnalazione)">\r
        <ion-icon name="trash-outline"></ion-icon>\r
        Elimina\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Messaggio quando non ci sono segnalazioni -->\r
<div *ngIf="!isLoading && !errore && segnalazioni.length === 0" class="empty-state">\r
  <ion-icon name="chatbubbles-outline" class="empty-icon"></ion-icon>\r
  <h3>Nessuna segnalazione trovata</h3>\r
  <p>Gli utenti non hanno ancora inviato segnalazioni o feedback.</p>\r
  <p class="hint">Le segnalazioni appariranno qui quando gli utenti le invieranno dalla sezione Informazioni Account.</p>\r
</div>
    </div>\r
  </div>\r
</ion-content>`, styles: ['/* src/app/admin/admin.page.scss */\nion-header {\n  background: #FFFFFF;\n}\nion-toolbar.peek-toolbar {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\n.header-inner {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo:hover {\n  opacity: 0.75;\n}\n.header-logo:active {\n  opacity: 0.55;\n}\n.header-greeting {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\n.users-counter {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n  color: #4A7A94;\n}\nion-content {\n  --background: #F4F7F9 !important;\n  --overflow: auto;\n}\n.admin-dashboard-wrapper {\n  padding: 40px clamp(20px, 3.5vw, 56px);\n  box-sizing: border-box;\n}\n.users-list-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.user-premium-card {\n  background: #FFFFFF;\n  border-radius: 24px;\n  padding: 24px 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03), 0 1px 4px rgba(0, 0, 0, 0.02);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.user-premium-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 20px 40px rgba(58, 171, 219, 0.08);\n  border-color: rgba(58, 171, 219, 0.12);\n}\n.user-identity {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex: 1;\n  min-width: 0;\n}\n.avatar-circle {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #3AABDB,\n      #1A7FA8);\n  color: #FFFFFF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.4rem;\n  font-weight: 800;\n  flex-shrink: 0;\n  box-shadow: 0 8px 16px rgba(2, 132, 199, 0.2);\n}\n.user-details {\n  min-width: 0;\n}\n.user-details h3 {\n  margin: 0;\n  color: #0F172A;\n  font-size: 1.05rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  white-space: normal;\n}\n.user-details p {\n  margin: 4px 0 0;\n  color: #4A7A94;\n  font-size: 0.88rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.role-badge {\n  font-size: 0.7rem;\n  padding: 3px 10px;\n  border-radius: 50px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.role-badge.admin {\n  background: rgba(58, 171, 219, 0.12);\n  color: #1A7FA8;\n}\n.role-badge.personal {\n  background: rgba(125, 199, 64, 0.12);\n  color: #5A9E2A;\n}\n.role-badge.business {\n  background: rgba(21, 66, 92, 0.12);\n  color: #15425C;\n}\n.user-stats-pills {\n  display: flex;\n  gap: 12px;\n  flex: 1.2;\n  justify-content: center;\n}\n.stat-pill {\n  background: #EBF5FB;\n  padding: 10px 16px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 110px;\n  transition: background 0.2s ease;\n}\n.stat-pill:hover {\n  background: rgba(58, 171, 219, 0.12);\n}\n.stat-pill ion-icon {\n  font-size: 1.3rem;\n  color: #3AABDB;\n  --color: #3AABDB;\n  flex-shrink: 0;\n}\n.stat-pill .stat-data {\n  display: flex;\n  flex-direction: column;\n}\n.stat-pill .stat-data strong {\n  color: #0F172A;\n  font-size: 1.1rem;\n  font-weight: 900;\n  line-height: 1;\n}\n.stat-pill .stat-data span {\n  color: #4A7A94;\n  font-size: 0.68rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  margin-top: 2px;\n  letter-spacing: 0.3px;\n}\n.user-actions {\n  flex: 0 0 auto;\n  display: flex;\n  justify-content: flex-end;\n  padding-left: 16px;\n}\n.btn-delete-ghost {\n  background: rgba(239, 68, 68, 0.06);\n  color: #EF4444;\n  border: none;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-delete-ghost ion-icon {\n  font-size: 1.3rem;\n  color: #EF4444;\n  --color: $red;\n}\n.btn-delete-ghost:hover {\n  background: #EF4444;\n  transform: scale(1.1);\n  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.25);\n}\n.btn-delete-ghost:hover ion-icon {\n  color: #FFFFFF;\n  --color: #FFFFFF;\n}\n@media (max-width: 900px) {\n  .admin-header {\n    flex-wrap: wrap;\n    gap: 16px;\n  }\n  .users-counter {\n    order: 3;\n    width: 100%;\n    justify-content: center;\n  }\n  .user-premium-card {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 20px;\n    padding: 20px 24px;\n  }\n  .user-identity {\n    width: 100%;\n  }\n  .user-stats-pills {\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    width: 100%;\n  }\n  .stat-pill {\n    min-width: calc(33% - 8px);\n  }\n  .user-actions {\n    width: 100%;\n    justify-content: flex-end;\n    padding-left: 0;\n  }\n}\n@media (max-width: 480px) {\n  .stat-pill {\n    min-width: calc(50% - 6px);\n  }\n}\n.tabs-segment-container {\n  display: flex;\n  background: #EBF5FB;\n  padding: 4px;\n  border-radius: 50px;\n  gap: 4px;\n  margin-top: 12px;\n}\n.tab-btn {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  background: transparent;\n  border: none;\n  border-radius: 50px;\n  padding: 10px 8px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #4A7A94;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  outline: none;\n}\n.tab-btn.active {\n  background: #FFFFFF;\n  color: #3AABDB;\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.12);\n}\n.segnalazioni-list-container {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.section-header {\n  margin-bottom: 20px;\n}\n.section-header h2 {\n  font-family: "Poppins", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 0 0 8px 0;\n}\n.section-description {\n  color: #4A7A94;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.segnalazioni-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.segnalazione-card {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.segnalazione-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.segnalazione-card.segnalazione-nuova {\n  border-left: 4px solid #F59E0B;\n  background: rgba(245, 158, 11, 0.02);\n}\n.segnalazione-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.segnalazione-info {\n  flex: 1;\n  min-width: 0;\n}\n.segnalazione-info h3 {\n  font-family: "Poppins", sans-serif;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px 0;\n}\n.segnalazione-meta {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n}\n.segnalazione-tipo,\n.segnalazione-data {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #4A7A94;\n}\n.tipo-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.tipo-feedback {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n}\n.tipo-report {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.tipo-suggerimento {\n  background: rgba(125, 199, 64, 0.1);\n  color: #7DC740;\n}\n.priorita-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 8px;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-left: 8px;\n}\n.priorita-alta {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.priorita-media {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.priorita-bassa {\n  background: rgba(125, 199, 64, 0.1);\n  color: #7DC740;\n}\n.segnalazione-descrizione {\n  margin: 12px 0;\n  padding: 0;\n}\n.segnalazione-descrizione p {\n  color: #4A7A94;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.segnalazione-utente-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 16px 0;\n  padding-top: 16px;\n  border-top: 1px solid rgba(58, 171, 219, 0.18);\n}\n.utente-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n}\n.utente-dettagli {\n  flex: 1;\n}\n.utente-dettagli h4 {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px 0;\n}\n.utente-dettagli p {\n  color: #4A7A94;\n  font-size: 0.75rem;\n  margin: 0;\n}\n.segnalazione-actions {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 12px;\n  margin-top: 16px;\n  flex-wrap: wrap;\n}\n.stato-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 8px;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.stato-nuova {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n}\n.stato-in-lavorazione {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.stato-risolta {\n  background: rgba(125, 199, 64, 0.1);\n  color: #7DC740;\n}\n.stato-chiusa {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.stato-select {\n  position: relative;\n  min-width: 120px;\n}\n.stato-select ion-icon {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  color: #4A7A94;\n  font-size: 1rem;\n}\n.stato-select select {\n  appearance: none;\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid rgba(58, 171, 219, 0.12);\n  border-radius: 8px;\n  background: #FFFFFF;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  color: #0F172A;\n  background-image: none;\n  background-color: #FFFFFF;\n}\n.stato-select select:focus {\n  outline: none;\n  border-color: #3AABDB;\n  box-shadow: 0 0 0 2px rgba(58, 171, 219, 0.2);\n}\n.btn-elimina-segnalazione {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  color: #EF4444;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-elimina-segnalazione ion-icon {\n  font-size: 1rem;\n}\n.btn-elimina-segnalazione:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.btn-elimina-segnalazione:active {\n  transform: scale(0.95);\n}\n.loading-state,\n.error-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 40px 20px;\n}\n.loading-state ion-spinner {\n  margin-bottom: 16px;\n}\n.error-state ion-icon,\n.empty-state ion-icon {\n  font-size: 3rem;\n  margin-bottom: 20px;\n}\n.error-state h3,\n.empty-state h3 {\n  font-family: "Poppins", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 12px 0;\n}\n.error-state p,\n.empty-state p {\n  color: #4A7A94;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.error-state ion-icon {\n  color: #EF4444;\n}\n.empty-state ion-icon {\n  color: #4A7A94;\n}\n.hint {\n  font-size: 0.8rem;\n  font-style: italic;\n  color: #4A7A94;\n  margin-top: 16px;\n}\n@media (max-width: 900px) {\n  .admin-header {\n    flex-wrap: wrap;\n    gap: 16px;\n  }\n  .users-counter {\n    order: 3;\n    width: 100%;\n    justify-content: center;\n  }\n  .user-premium-card {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 20px;\n    padding: 20px 24px;\n  }\n  .user-identity {\n    width: 100%;\n  }\n  .user-stats-pills {\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    width: 100%;\n  }\n  .stat-pill {\n    min-width: calc(33% - 8px);\n  }\n  .user-actions {\n    width: 100%;\n    justify-content: flex-end;\n    padding-left: 0;\n  }\n  .segnalazione-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .segnalazione-actions {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 480px) {\n  .stat-pill {\n    min-width: calc(50% - 6px);\n  }\n  .segnalazione-card {\n    padding: 16px;\n  }\n  .segnalazione-utente-info {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=admin.page.css.map */\n'] }]
  }], () => [{ type: AlertController }, { type: DatabaseService }, { type: ToastController }, { type: Router }, { type: NavigationHistoryService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminPage, { className: "AdminPage", filePath: "src/app/admin/admin.page.ts", lineNumber: 29 });
})();
export {
  AdminPage
};
//# sourceMappingURL=admin.page-2CRRHOPM.js.map
