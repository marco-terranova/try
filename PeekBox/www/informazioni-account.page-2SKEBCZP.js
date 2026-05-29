import {
  ToastController
} from "./chunk-UWSSEREE.js";
import {
  DatabaseService
} from "./chunk-5G3PJOGU.js";
import {
  add,
  addIcons,
  banOutline,
  chatbubblesOutline,
  home,
  homeOutline,
  idCardOutline,
  informationCircleOutline,
  mailOutline,
  paperPlaneOutline,
  person,
  personOutline,
  qrCodeOutline,
  saveOutline,
  scanOutline,
  search,
  searchOutline,
  shareSocialOutline,
  shieldCheckmarkOutline
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
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
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

// src/app/informazioni-account/informazioni-account.page.ts
var _InformazioniAccountPage = class _InformazioniAccountPage {
  constructor(router, toastCtrl, dbService, navHistory) {
    this.router = router;
    this.toastCtrl = toastCtrl;
    this.dbService = dbService;
    this.navHistory = navHistory;
    this.nome = "";
    this.email = "";
    this.nomeOriginale = "";
    this.vecchiaPassword = "";
    this.nuovaPassword = "";
    this.confermaPassword = "";
    this.datiModificati = false;
    this.isSaving = false;
    this.feedbackText = "";
    this.utenteId = null;
    addIcons({
      "person-outline": personOutline,
      "mail-outline": mailOutline,
      "ban-outline": banOutline,
      "shield-checkmark-outline": shieldCheckmarkOutline,
      "save-outline": saveOutline,
      "home-outline": homeOutline,
      "search-outline": searchOutline,
      "add": add,
      "scan-outline": scanOutline,
      "person": person,
      "id-card-outline": idCardOutline,
      "chatbubbles-outline": chatbubblesOutline,
      "paper-plane-outline": paperPlaneOutline,
      "information-circle-outline": informationCircleOutline,
      "home": home,
      "search": search,
      "qr-code-outline": qrCodeOutline,
      "share-social-outline": shareSocialOutline
    });
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.utenteId = localStorage.getItem("utente_id");
    this.nome = localStorage.getItem("utente_nome") || "";
    this.email = localStorage.getItem("utente_email") || "";
    this.nomeOriginale = this.nome;
    this.datiModificati = false;
  }
  verificaModifiche() {
    this.datiModificati = this.nome !== this.nomeOriginale || this.nuovaPassword.length > 0;
  }
  salvaModifiche() {
    return __async(this, null, function* () {
      if (!this.utenteId) {
        yield this.mostraToast("Sessione non valida. Effettua di nuovo il login.", "danger");
        return;
      }
      const nomeTrimmed = (this.nome || "").trim();
      if (!nomeTrimmed) {
        yield this.mostraToast("Il nome non pu\xF2 essere vuoto.", "warning");
        return;
      }
      if (this.nuovaPassword.length > 0 && this.nuovaPassword !== this.confermaPassword) {
        yield this.mostraToast("Le password non coincidono.", "warning");
        return;
      }
      this.isSaving = true;
      localStorage.setItem("utente_nome", nomeTrimmed);
      this.dbService.aggiornaProfiloUtente(this.utenteId, {
        nome: nomeTrimmed
      }).subscribe({
        next: () => {
          this.isSaving = false;
          this.nomeOriginale = nomeTrimmed;
          this.vecchiaPassword = "";
          this.nuovaPassword = "";
          this.confermaPassword = "";
          this.datiModificati = false;
          this.mostraToast("Profilo aggiornato con successo \u2705", "success");
        },
        error: (err) => {
          this.isSaving = false;
          console.error("[InformazioniAccount] Errore DB:", err);
          this.mostraToast("Errore durante il salvataggio. Riprova.", "danger");
        }
      });
    });
  }
  inviaFeedback() {
    return __async(this, null, function* () {
      if (!this.feedbackText.trim())
        return;
      try {
        yield this.dbService.inviaSegnalazione({
          tipo: "feedback",
          titolo: "Feedback dall'app",
          descrizione: this.feedbackText.trim(),
          priorita: "bassa"
        }).toPromise();
        this.feedbackText = "";
        yield this.mostraToast("Grazie per il tuo feedback! \u{1F64F}", "success");
      } catch (error) {
        yield this.mostraToast("Errore nell'invio del feedback. Riprova.", "danger");
      }
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
  navTo(route) {
    this.navHistory.navTo(route);
  }
};
_InformazioniAccountPage.\u0275fac = function InformazioniAccountPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InformazioniAccountPage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(DatabaseService), \u0275\u0275directiveInject(NavigationHistoryService));
};
_InformazioniAccountPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InformazioniAccountPage, selectors: [["app-informazioni-account"]], decls: 90, vars: 11, consts: [[1, "ion-no-border"], [1, "peek-toolbar"], [1, "header-inner"], [1, "header-top"], [1, "header-greet"], ["src", "assets/icon/logoTitolo1.png", "alt", "PeekBox", 1, "header-logo", 2, "cursor", "pointer", 3, "click"], [1, "header-greeting"], [1, "nome-verde"], [1, "bg-light-saas"], [1, "page-wrapper"], [1, "account-plancia-grid"], [1, "quadrante-card"], [1, "quadrante-header"], [1, "header-left"], [1, "icon-cerchio", "azzurro"], ["name", "id-card-outline"], [1, "form-layout-internal"], [1, "input-gruppo"], [1, "input-wrapper"], ["name", "person-outline", 1, "icon-brand"], ["type", "text", "placeholder", "Il tuo nome", 3, "ngModelChange", "input", "ngModel"], [1, "input-wrapper", "disabled-wrapper"], ["name", "mail-outline", 1, "icon-brand"], ["type", "email", "disabled", "", 3, "ngModelChange", "ngModel"], ["name", "ban-outline", 1, "ban-icon"], [1, "feedback-module"], [1, "input-wrapper", "textarea-wrapper"], ["name", "chatbubbles-outline", 1, "icon-brand"], ["placeholder", "Hai suggerimenti per il team di sviluppo? Scrivici qui...", 3, "ngModelChange", "ngModel"], [1, "btn-send-feedback", 3, "click", "disabled"], ["name", "paper-plane-outline"], [1, "quadrante-card", "destra-card"], [1, "icon-cerchio", "verde"], ["name", "shield-checkmark-outline"], [1, "form-layout-internal", "password-forms"], ["type", "password", "placeholder", "Password attuale", 3, "ngModelChange", "ngModel"], ["slot", "end"], ["type", "password", "placeholder", "Minimo 8 caratteri", 3, "ngModelChange", "ionInput", "ngModel"], ["type", "password", "placeholder", "Ripeti la password", 3, "ngModelChange", "ngModel"], [1, "password-requisiti"], ["name", "information-circle-outline"], [1, "requisiti-text"], [1, "action-area-button"], [1, "btn-submit-smart", 3, "click", "disabled"], ["name", "save-outline"], [1, "ion-no-border", "peekbox-footer"], ["slot", "bottom", 1, "transit-tab-bar"], ["tab", "home", 3, "click"], ["name", "home-outline"], ["tab", "search", 3, "click"], ["name", "search-outline"], [1, "add-button-tab", 3, "click"], [1, "transit-add-circle"], ["name", "add"], ["tab", "scan", 3, "click"], ["name", "scan-outline"], ["tab", "profile", 1, "tab-selected", 3, "click"], ["name", "person"]], template: function InformazioniAccountPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "img", 5);
    \u0275\u0275listener("click", function InformazioniAccountPage_Template_img_click_5_listener() {
      return ctx.navTo("/home");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 6);
    \u0275\u0275text(7, "INFORMAZIONI ");
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9, "ACCOUNT");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(10, "ion-content", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "div", 14);
    \u0275\u0275element(17, "ion-icon", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h3");
    \u0275\u0275text(19, "Dati Identificativi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 16)(21, "div", 17)(22, "label");
    \u0275\u0275text(23, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 18);
    \u0275\u0275element(25, "ion-icon", 19);
    \u0275\u0275elementStart(26, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function InformazioniAccountPage_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.nome, $event) || (ctx.nome = $event);
      return $event;
    });
    \u0275\u0275listener("input", function InformazioniAccountPage_Template_input_input_26_listener() {
      return ctx.verificaModifiche();
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 17)(28, "label");
    \u0275\u0275text(29, "Indirizzo Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 21);
    \u0275\u0275element(31, "ion-icon", 22);
    \u0275\u0275elementStart(32, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function InformazioniAccountPage_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "ion-icon", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 25)(35, "label");
    \u0275\u0275text(36, "Aiutaci a migliorare");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 26);
    \u0275\u0275element(38, "ion-icon", 27);
    \u0275\u0275elementStart(39, "textarea", 28);
    \u0275\u0275twoWayListener("ngModelChange", function InformazioniAccountPage_Template_textarea_ngModelChange_39_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.feedbackText, $event) || (ctx.feedbackText = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "button", 29);
    \u0275\u0275listener("click", function InformazioniAccountPage_Template_button_click_40_listener() {
      return ctx.inviaFeedback();
    });
    \u0275\u0275element(41, "ion-icon", 30);
    \u0275\u0275text(42, " Invia Feedback ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 31)(44, "div", 12)(45, "div", 32);
    \u0275\u0275element(46, "ion-icon", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "h3");
    \u0275\u0275text(48, "Gestione Password");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 34)(50, "div", 17)(51, "label");
    \u0275\u0275text(52, "Password Attuale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ion-input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function InformazioniAccountPage_Template_ion_input_ngModelChange_53_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.vecchiaPassword, $event) || (ctx.vecchiaPassword = $event);
      return $event;
    });
    \u0275\u0275element(54, "ion-input-password-toggle", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 17)(56, "label");
    \u0275\u0275text(57, "Nuova Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "ion-input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function InformazioniAccountPage_Template_ion_input_ngModelChange_58_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.nuovaPassword, $event) || (ctx.nuovaPassword = $event);
      return $event;
    });
    \u0275\u0275listener("ionInput", function InformazioniAccountPage_Template_ion_input_ionInput_58_listener() {
      return ctx.verificaModifiche();
    });
    \u0275\u0275element(59, "ion-input-password-toggle", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 17)(61, "label");
    \u0275\u0275text(62, "Conferma Nuova Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ion-input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function InformazioniAccountPage_Template_ion_input_ngModelChange_63_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.confermaPassword, $event) || (ctx.confermaPassword = $event);
      return $event;
    });
    \u0275\u0275element(64, "ion-input-password-toggle", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 39);
    \u0275\u0275element(66, "ion-icon", 40);
    \u0275\u0275elementStart(67, "div", 41)(68, "strong");
    \u0275\u0275text(69, "Requisiti Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span");
    \u0275\u0275text(71, "Minimo 8 caratteri \xB7 almeno un numero \xB7 un carattere speciale (!@#$\u2026)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "div", 42)(73, "button", 43);
    \u0275\u0275listener("click", function InformazioniAccountPage_Template_button_click_73_listener() {
      return ctx.salvaModifiche();
    });
    \u0275\u0275element(74, "ion-icon", 44);
    \u0275\u0275elementStart(75, "span");
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(77, "ion-footer", 45)(78, "ion-tab-bar", 46)(79, "ion-tab-button", 47);
    \u0275\u0275listener("click", function InformazioniAccountPage_Template_ion_tab_button_click_79_listener() {
      return ctx.navTo("/home");
    });
    \u0275\u0275element(80, "ion-icon", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "ion-tab-button", 49);
    \u0275\u0275listener("click", function InformazioniAccountPage_Template_ion_tab_button_click_81_listener() {
      return ctx.navTo("/search");
    });
    \u0275\u0275element(82, "ion-icon", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "ion-tab-button", 51);
    \u0275\u0275listener("click", function InformazioniAccountPage_Template_ion_tab_button_click_83_listener() {
      return ctx.navTo("/crea-box");
    });
    \u0275\u0275elementStart(84, "div", 52);
    \u0275\u0275element(85, "ion-icon", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "ion-tab-button", 54);
    \u0275\u0275listener("click", function InformazioniAccountPage_Template_ion_tab_button_click_86_listener() {
      return ctx.navTo("/scan-qr");
    });
    \u0275\u0275element(87, "ion-icon", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "ion-tab-button", 56);
    \u0275\u0275listener("click", function InformazioniAccountPage_Template_ion_tab_button_click_88_listener() {
      return ctx.navTo("/area-personale");
    });
    \u0275\u0275element(89, "ion-icon", 57);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(26);
    \u0275\u0275twoWayProperty("ngModel", ctx.nome);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.email);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.feedbackText);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx.feedbackText);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx.vecchiaPassword);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.nuovaPassword);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.confermaPassword);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-active", ctx.datiModificati);
    \u0275\u0275property("disabled", !ctx.datiModificati || ctx.isSaving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.isSaving ? "Salvataggio..." : "Salva Modifiche");
  }
}, dependencies: [IonContent, IonHeader, IonIcon, IonInput, IonInputPasswordToggle, IonToolbar, IonFooter, IonTabBar, IonTabButton, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CommonModule, RouterModule], styles: ['\n\nion-header[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n}\nion-toolbar.peek-toolbar[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\n.header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo[_ngcontent-%COMP%] {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.header-logo[_ngcontent-%COMP%]:active {\n  opacity: 0.55;\n}\n.header-greeting[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #F4F7F9 !important;\n  --overflow: auto;\n  --padding-bottom: 100px;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 10px clamp(20px, 3.5vw, 56px) 20px clamp(20px, 3.5vw, 56px);\n  box-sizing: border-box;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n}\n.account-plancia-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  width: 100%;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n  flex-grow: 1;\n  max-height: calc(100vh - 170px);\n}\n.quadrante-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 24px;\n  padding: 28px;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  box-sizing: border-box;\n}\n.destra-card[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  gap: 0;\n}\n.quadrante-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 25px;\n}\n.quadrante-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 0;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.icon-cerchio[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  font-size: 1.3rem;\n}\n.icon-cerchio.azzurro[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n}\n.icon-cerchio.verde[_ngcontent-%COMP%] {\n  background: rgba(125, 199, 64, 0.1);\n  color: #7DC740;\n}\n.form-layout-internal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.input-gruppo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.input-gruppo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #475569;\n  margin-left: 4px;\n}\n.password-forms[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --border-color: rgba(58, 171, 219, 0.18);\n  --border-radius: 16px;\n  --border-style: solid;\n  --border-width: 1px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n  font-size: 1.05rem;\n  color: #0F172A;\n  font-weight: 500;\n  width: 100%;\n}\n.password-forms[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]::part(native) {\n  padding: 22px 0;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #F4F7F9;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  border-radius: 16px;\n  padding: 0 16px;\n  transition: 0.3s ease;\n  width: 100%;\n  box-sizing: border-box;\n}\n.input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #3AABDB;\n  box-shadow: 0 0 0 4px rgba(58, 171, 219, 0.1);\n  background: #FFFFFF;\n}\n.input-wrapper[_ngcontent-%COMP%]   .icon-brand[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #3AABDB;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  flex-grow: 1;\n  padding: 18px 0;\n  font-size: 1.05rem;\n  color: #0F172A;\n  outline: none;\n  font-weight: 500;\n  min-width: 0;\n}\n.input-wrapper.disabled-wrapper[_ngcontent-%COMP%] {\n  background: #EBF5FB;\n  border-color: rgba(58, 171, 219, 0.18);\n}\n.input-wrapper.disabled-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #94A3B8;\n  cursor: not-allowed;\n}\n.input-wrapper.disabled-wrapper[_ngcontent-%COMP%]   .ban-icon[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex-shrink: 0;\n  color: #EF4444;\n  font-size: 1.3rem;\n}\n.password-requisiti[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: rgba(58, 171, 219, 0.06);\n  border: 1px solid rgba(58, 171, 219, 0.15);\n  border-radius: 14px;\n  padding: 14px 16px;\n  margin-top: 20px;\n}\n.password-requisiti[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #3AABDB;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.password-requisiti[_ngcontent-%COMP%]   .requisiti-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.password-requisiti[_ngcontent-%COMP%]   .requisiti-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 800;\n  color: #0F172A;\n}\n.password-requisiti[_ngcontent-%COMP%]   .requisiti-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #4A7A94;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.feedback-module[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.feedback-module[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #475569;\n  margin-left: 4px;\n}\n.textarea-wrapper[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  padding-top: 14px;\n}\n.textarea-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  flex-grow: 1;\n  font-size: 0.95rem;\n  color: #0F172A;\n  outline: none;\n  resize: none;\n  height: 70px;\n  font-family: inherit;\n  padding: 0;\n}\n.btn-send-feedback[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n  border: none;\n  padding: 12px;\n  border-radius: 14px;\n  font-weight: 800;\n  font-size: 0.95rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.btn-send-feedback[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.btn-send-feedback[_ngcontent-%COMP%]:active:not(:disabled) {\n  background: #3AABDB;\n  color: white;\n}\n.action-area-button[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  width: 100%;\n}\n.btn-submit-smart[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #EBF5FB;\n  color: #4A7A94;\n  border: none;\n  padding: 20px;\n  border-radius: 16px;\n  font-weight: 800;\n  font-size: 1.1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: not-allowed;\n  transition: all 0.3s ease;\n}\n.btn-submit-smart.is-active[_ngcontent-%COMP%] {\n  background: #7DC740;\n  color: white;\n  box-shadow: 0 8px 24px rgba(125, 199, 64, 0.35);\n  cursor: pointer;\n}\n.btn-submit-smart.is-active[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.peekbox-footer[_ngcontent-%COMP%] {\n  position: fixed !important;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 99999;\n  background: transparent !important;\n  pointer-events: none;\n}\n.peekbox-footer[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n.transit-tab-bar[_ngcontent-%COMP%] {\n  --background: #FFFFFF;\n  border-radius: 30px;\n  margin: 0 15px 15px 15px;\n  box-shadow: 0 10px 40px rgba(15, 23, 42, 0.08);\n  height: 70px;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  overflow: visible;\n}\n.transit-add-circle[_ngcontent-%COMP%] {\n  background: #3AABDB;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  color: white;\n  font-size: 2rem;\n  transform: translateY(-20px);\n  box-shadow: 0 10px 25px rgba(58, 171, 219, 0.4);\n  transition: 0.2s;\n}\n.transit-add-circle[_ngcontent-%COMP%]:active {\n  transform: translateY(-18px) scale(0.95);\n}\n.tab-selected[_ngcontent-%COMP%] {\n  color: #3AABDB !important;\n}\n@media (max-width: 399px) {\n  .page-wrapper[_ngcontent-%COMP%] {\n    padding: 10px clamp(20px, 3.5vw, 56px) 20px;\n  }\n  .account-plancia-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-height: none;\n    gap: 16px;\n  }\n  ion-content[_ngcontent-%COMP%] {\n    --overflow: auto !important;\n  }\n  .quadrante-card[_ngcontent-%COMP%] {\n    padding: 18px;\n    border-radius: 18px;\n  }\n}\n@media (max-width: 639px) {\n  .account-plancia-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-height: none;\n  }\n  ion-content[_ngcontent-%COMP%] {\n    --overflow: auto !important;\n  }\n}\n@media (min-width: 768px) {\n  .page-wrapper[_ngcontent-%COMP%] {\n    padding: 16px clamp(20px, 3.5vw, 56px) 24px;\n  }\n  .account-plancia-grid[_ngcontent-%COMP%] {\n    gap: 20px;\n    max-height: calc(100vh - 180px);\n  }\n  .quadrante-card[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n}\n@media (min-width: 1024px) {\n  .page-wrapper[_ngcontent-%COMP%] {\n    padding: 20px clamp(20px, 3.5vw, 56px) 28px;\n  }\n  .account-plancia-grid[_ngcontent-%COMP%] {\n    gap: 28px;\n    max-height: calc(100vh - 160px);\n  }\n  .quadrante-card[_ngcontent-%COMP%] {\n    padding: 36px;\n  }\n}\n/*# sourceMappingURL=informazioni-account.page.css.map */'] });
var InformazioniAccountPage = _InformazioniAccountPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InformazioniAccountPage, [{
    type: Component,
    args: [{ selector: "app-informazioni-account", standalone: true, imports: [IonContent, IonHeader, IonIcon, IonInput, IonInputPasswordToggle, IonToolbar, IonFooter, IonTabBar, IonTabButton, FormsModule, CommonModule, RouterModule], template: `<ion-header class="ion-no-border">\r
  <ion-toolbar class="peek-toolbar">\r
    <div class="header-inner">\r
      <div class="header-top">\r
        <div class="header-greet">\r
          <img src="assets/icon/logoTitolo1.png" class="header-logo" alt="PeekBox" (click)="navTo('/home')" style="cursor: pointer;" />\r
          <h1 class="header-greeting">INFORMAZIONI <span class="nome-verde">ACCOUNT</span></h1>\r
        </div>\r
      </div>\r
    </div>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="bg-light-saas">\r
  <div class="page-wrapper">\r
\r
    <div class="account-plancia-grid">\r
\r
      <!-- COLONNA SINISTRA: Dati + Feedback -->\r
      <div class="quadrante-card">\r
        <div class="quadrante-header">\r
          <div class="header-left">\r
            <div class="icon-cerchio azzurro"><ion-icon name="id-card-outline"></ion-icon></div>\r
            <h3>Dati Identificativi</h3>\r
          </div>\r
        </div>\r
\r
        <div class="form-layout-internal">\r
          <div class="input-gruppo">\r
            <label>Nome</label>\r
            <div class="input-wrapper">\r
              <ion-icon name="person-outline" class="icon-brand"></ion-icon>\r
              <input type="text" [(ngModel)]="nome" (input)="verificaModifiche()" placeholder="Il tuo nome">\r
            </div>\r
          </div>\r
\r
          <div class="input-gruppo">\r
            <label>Indirizzo Email</label>\r
            <div class="input-wrapper disabled-wrapper">\r
              <ion-icon name="mail-outline" class="icon-brand"></ion-icon>\r
              <input type="email" [(ngModel)]="email" disabled>\r
              <ion-icon name="ban-outline" class="ban-icon"></ion-icon>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="feedback-module">\r
          <label>Aiutaci a migliorare</label>\r
          <div class="input-wrapper textarea-wrapper">\r
            <ion-icon name="chatbubbles-outline" class="icon-brand"></ion-icon>\r
            <textarea [(ngModel)]="feedbackText" placeholder="Hai suggerimenti per il team di sviluppo? Scrivici qui..."></textarea>\r
          </div>\r
          <button class="btn-send-feedback" (click)="inviaFeedback()" [disabled]="!feedbackText">\r
            <ion-icon name="paper-plane-outline"></ion-icon> Invia Feedback\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- COLONNA DESTRA: Password + Requisiti + Bottone -->\r
      <div class="quadrante-card destra-card">\r
        <div class="quadrante-header">\r
          <div class="icon-cerchio verde"><ion-icon name="shield-checkmark-outline"></ion-icon></div>\r
          <h3>Gestione Password</h3>\r
        </div>\r
\r
        <div class="form-layout-internal password-forms">\r
          <div class="input-gruppo">\r
            <label>Password Attuale</label>\r
            <ion-input\r
              [(ngModel)]="vecchiaPassword"\r
              type="password"\r
              placeholder="Password attuale">\r
              <ion-input-password-toggle slot="end"></ion-input-password-toggle>\r
            </ion-input>\r
          </div>\r
\r
          <div class="input-gruppo">\r
            <label>Nuova Password</label>\r
            <ion-input\r
              [(ngModel)]="nuovaPassword"\r
              (ionInput)="verificaModifiche()"\r
              type="password"\r
              placeholder="Minimo 8 caratteri">\r
              <ion-input-password-toggle slot="end"></ion-input-password-toggle>\r
            </ion-input>\r
          </div>\r
\r
          <div class="input-gruppo">\r
            <label>Conferma Nuova Password</label>\r
            <ion-input\r
              [(ngModel)]="confermaPassword"\r
              type="password"\r
              placeholder="Ripeti la password">\r
              <ion-input-password-toggle slot="end"></ion-input-password-toggle>\r
            </ion-input>\r
          </div>\r
        </div>\r
\r
        <!-- Riquadro requisiti password: riempie lo spazio vuoto -->\r
        <div class="password-requisiti">\r
          <ion-icon name="information-circle-outline"></ion-icon>\r
          <div class="requisiti-text">\r
            <strong>Requisiti Password</strong>\r
            <span>Minimo 8 caratteri \xB7 almeno un numero \xB7 un carattere speciale (!@#$\u2026)</span>\r
          </div>\r
        </div>\r
\r
        <div class="action-area-button">\r
          <button\r
            class="btn-submit-smart"\r
            [class.is-active]="datiModificati"\r
            [disabled]="!datiModificati || isSaving"\r
            (click)="salvaModifiche()">\r
            <ion-icon name="save-outline"></ion-icon>\r
            <span>{{ isSaving ? 'Salvataggio...' : 'Salva Modifiche' }}</span>\r
          </button>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
</ion-content>\r
\r
<ion-footer class="ion-no-border peekbox-footer">\r
  <ion-tab-bar slot="bottom" class="transit-tab-bar">\r
    <ion-tab-button tab="home" (click)="navTo('/home')">\r
      <ion-icon name="home-outline"></ion-icon>\r
    </ion-tab-button>\r
    <ion-tab-button tab="search" (click)="navTo('/search')">\r
      <ion-icon name="search-outline"></ion-icon>\r
    </ion-tab-button>\r
    <ion-tab-button class="add-button-tab" (click)="navTo('/crea-box')">\r
      <div class="transit-add-circle"><ion-icon name="add"></ion-icon></div>\r
    </ion-tab-button>\r
    <ion-tab-button tab="scan" (click)="navTo('/scan-qr')">\r
      <ion-icon name="scan-outline"></ion-icon>\r
    </ion-tab-button>\r
    <ion-tab-button tab="profile" (click)="navTo('/area-personale')" class="tab-selected">\r
      <ion-icon name="person"></ion-icon>\r
    </ion-tab-button>\r
  </ion-tab-bar>\r
</ion-footer>\r
`, styles: ['/* src/app/informazioni-account/informazioni-account.page.scss */\nion-header {\n  background: #FFFFFF;\n}\nion-toolbar.peek-toolbar {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\n.header-inner {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo:hover {\n  opacity: 0.75;\n}\n.header-logo:active {\n  opacity: 0.55;\n}\n.header-greeting {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\nion-content {\n  --background: #F4F7F9 !important;\n  --overflow: auto;\n  --padding-bottom: 100px;\n}\n.page-wrapper {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 10px clamp(20px, 3.5vw, 56px) 20px clamp(20px, 3.5vw, 56px);\n  box-sizing: border-box;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n}\n.account-plancia-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  width: 100%;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n  flex-grow: 1;\n  max-height: calc(100vh - 170px);\n}\n.quadrante-card {\n  background: #FFFFFF;\n  border-radius: 24px;\n  padding: 28px;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  box-sizing: border-box;\n}\n.destra-card {\n  justify-content: flex-start;\n  gap: 0;\n}\n.quadrante-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 25px;\n}\n.quadrante-header h3 {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 0;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.icon-cerchio {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  font-size: 1.3rem;\n}\n.icon-cerchio.azzurro {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n}\n.icon-cerchio.verde {\n  background: rgba(125, 199, 64, 0.1);\n  color: #7DC740;\n}\n.form-layout-internal {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.input-gruppo {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.input-gruppo label {\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #475569;\n  margin-left: 4px;\n}\n.password-forms ion-input {\n  --background: #F4F7F9;\n  --border-color: rgba(58, 171, 219, 0.18);\n  --border-radius: 16px;\n  --border-style: solid;\n  --border-width: 1px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n  font-size: 1.05rem;\n  color: #0F172A;\n  font-weight: 500;\n  width: 100%;\n}\n.password-forms ion-input::part(native) {\n  padding: 22px 0;\n}\n.input-wrapper {\n  display: flex;\n  align-items: center;\n  background: #F4F7F9;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  border-radius: 16px;\n  padding: 0 16px;\n  transition: 0.3s ease;\n  width: 100%;\n  box-sizing: border-box;\n}\n.input-wrapper:focus-within {\n  border-color: #3AABDB;\n  box-shadow: 0 0 0 4px rgba(58, 171, 219, 0.1);\n  background: #FFFFFF;\n}\n.input-wrapper .icon-brand {\n  font-size: 1.3rem;\n  color: #3AABDB;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n.input-wrapper input {\n  border: none;\n  background: transparent;\n  flex-grow: 1;\n  padding: 18px 0;\n  font-size: 1.05rem;\n  color: #0F172A;\n  outline: none;\n  font-weight: 500;\n  min-width: 0;\n}\n.input-wrapper.disabled-wrapper {\n  background: #EBF5FB;\n  border-color: rgba(58, 171, 219, 0.18);\n}\n.input-wrapper.disabled-wrapper input {\n  color: #94A3B8;\n  cursor: not-allowed;\n}\n.input-wrapper.disabled-wrapper .ban-icon {\n  margin-left: auto;\n  flex-shrink: 0;\n  color: #EF4444;\n  font-size: 1.3rem;\n}\n.password-requisiti {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: rgba(58, 171, 219, 0.06);\n  border: 1px solid rgba(58, 171, 219, 0.15);\n  border-radius: 14px;\n  padding: 14px 16px;\n  margin-top: 20px;\n}\n.password-requisiti ion-icon {\n  font-size: 1.2rem;\n  color: #3AABDB;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.password-requisiti .requisiti-text {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.password-requisiti .requisiti-text strong {\n  font-size: 0.82rem;\n  font-weight: 800;\n  color: #0F172A;\n}\n.password-requisiti .requisiti-text span {\n  font-size: 0.78rem;\n  color: #4A7A94;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.feedback-module {\n  margin-top: auto;\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.feedback-module label {\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #475569;\n  margin-left: 4px;\n}\n.textarea-wrapper {\n  align-items: flex-start;\n  padding-top: 14px;\n}\n.textarea-wrapper textarea {\n  border: none;\n  background: transparent;\n  flex-grow: 1;\n  font-size: 0.95rem;\n  color: #0F172A;\n  outline: none;\n  resize: none;\n  height: 70px;\n  font-family: inherit;\n  padding: 0;\n}\n.btn-send-feedback {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n  border: none;\n  padding: 12px;\n  border-radius: 14px;\n  font-weight: 800;\n  font-size: 0.95rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.btn-send-feedback:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.btn-send-feedback:active:not(:disabled) {\n  background: #3AABDB;\n  color: white;\n}\n.action-area-button {\n  padding-top: 20px;\n  width: 100%;\n}\n.btn-submit-smart {\n  width: 100%;\n  background: #EBF5FB;\n  color: #4A7A94;\n  border: none;\n  padding: 20px;\n  border-radius: 16px;\n  font-weight: 800;\n  font-size: 1.1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: not-allowed;\n  transition: all 0.3s ease;\n}\n.btn-submit-smart.is-active {\n  background: #7DC740;\n  color: white;\n  box-shadow: 0 8px 24px rgba(125, 199, 64, 0.35);\n  cursor: pointer;\n}\n.btn-submit-smart.is-active:active {\n  transform: scale(0.97);\n}\n.peekbox-footer {\n  position: fixed !important;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 99999;\n  background: transparent !important;\n  pointer-events: none;\n}\n.peekbox-footer ion-tab-bar {\n  pointer-events: all;\n}\n.transit-tab-bar {\n  --background: #FFFFFF;\n  border-radius: 30px;\n  margin: 0 15px 15px 15px;\n  box-shadow: 0 10px 40px rgba(15, 23, 42, 0.08);\n  height: 70px;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  overflow: visible;\n}\n.transit-add-circle {\n  background: #3AABDB;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  color: white;\n  font-size: 2rem;\n  transform: translateY(-20px);\n  box-shadow: 0 10px 25px rgba(58, 171, 219, 0.4);\n  transition: 0.2s;\n}\n.transit-add-circle:active {\n  transform: translateY(-18px) scale(0.95);\n}\n.tab-selected {\n  color: #3AABDB !important;\n}\n@media (max-width: 399px) {\n  .page-wrapper {\n    padding: 10px clamp(20px, 3.5vw, 56px) 20px;\n  }\n  .account-plancia-grid {\n    grid-template-columns: 1fr;\n    max-height: none;\n    gap: 16px;\n  }\n  ion-content {\n    --overflow: auto !important;\n  }\n  .quadrante-card {\n    padding: 18px;\n    border-radius: 18px;\n  }\n}\n@media (max-width: 639px) {\n  .account-plancia-grid {\n    grid-template-columns: 1fr;\n    max-height: none;\n  }\n  ion-content {\n    --overflow: auto !important;\n  }\n}\n@media (min-width: 768px) {\n  .page-wrapper {\n    padding: 16px clamp(20px, 3.5vw, 56px) 24px;\n  }\n  .account-plancia-grid {\n    gap: 20px;\n    max-height: calc(100vh - 180px);\n  }\n  .quadrante-card {\n    padding: 30px;\n  }\n}\n@media (min-width: 1024px) {\n  .page-wrapper {\n    padding: 20px clamp(20px, 3.5vw, 56px) 28px;\n  }\n  .account-plancia-grid {\n    gap: 28px;\n    max-height: calc(100vh - 160px);\n  }\n  .quadrante-card {\n    padding: 36px;\n  }\n}\n/*# sourceMappingURL=informazioni-account.page.css.map */\n'] }]
  }], () => [{ type: Router }, { type: ToastController }, { type: DatabaseService }, { type: NavigationHistoryService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InformazioniAccountPage, { className: "InformazioniAccountPage", filePath: "src/app/informazioni-account/informazioni-account.page.ts", lineNumber: 24 });
})();
export {
  InformazioniAccountPage
};
//# sourceMappingURL=informazioni-account.page-2SKEBCZP.js.map
