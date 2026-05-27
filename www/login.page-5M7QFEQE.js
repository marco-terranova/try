import {
  DatabaseService
} from "./chunk-5G3PJOGU.js";
import {
  AlertController,
  IonContent,
  IonInput,
  IonInputPasswordToggle
} from "./chunk-VSLPI6WN.js";
import {
  CommonModule,
  Component,
  EMPTY,
  FormsModule,
  HostListener,
  NgControlStatus,
  NgIf,
  NgModel,
  Router,
  RouterModule,
  ViewChild,
  catchError,
  setClassMetadata,
  switchMap,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
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

// src/app/login/login.page.ts
var _c0 = ["tiltCard"];
var _c1 = ["stageRef"];
function LoginPage_ng_container_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 78)(2, "div", 79)(3, "div", 80);
    \u0275\u0275listener("click", function LoginPage_ng_container_118_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tornaBenvenuto());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 81);
    \u0275\u0275element(5, "path", 82)(6, "polyline", 83)(7, "line", 84);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h1", 85);
    \u0275\u0275text(9, "Accedi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 86);
    \u0275\u0275text(11, "Inserisci le tue credenziali per continuare");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 87)(13, "div", 88)(14, "label", 89);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 90);
    \u0275\u0275element(16, "rect", 91)(17, "path", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Email ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "div", 93)(20, "ion-input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function LoginPage_ng_container_118_Template_ion_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 88)(22, "div", 95)(23, "label", 96);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 90);
    \u0275\u0275element(25, "rect", 97)(26, "path", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Password ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "button", 99);
    \u0275\u0275listener("click", function LoginPage_ng_container_118_Template_button_click_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.recuperaPassword($event));
    });
    \u0275\u0275text(29, "Password dimenticata?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 93)(31, "ion-input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function LoginPage_ng_container_118_Template_ion_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(32, "ion-input-password-toggle", 101);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(33, "div", 102);
    \u0275\u0275elementStart(34, "button", 103);
    \u0275\u0275listener("click", function LoginPage_ng_container_118_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.accedi());
    });
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "Accedi");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 104);
    \u0275\u0275element(38, "line", 105)(39, "polyline", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(40, "span", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 108)(42, "p", 109);
    \u0275\u0275text(43, "Non hai un account?");
    \u0275\u0275elementStart(44, "a", 110);
    \u0275\u0275listener("click", function LoginPage_ng_container_118_Template_a_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMode());
    });
    \u0275\u0275text(45, "Registrati gratuitamente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.password);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.loginValido);
  }
}
function LoginPage_ng_container_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 78)(2, "div", 79)(3, "div", 80);
    \u0275\u0275listener("click", function LoginPage_ng_container_119_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMode());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 81);
    \u0275\u0275element(5, "path", 82)(6, "polyline", 83)(7, "line", 84);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h1", 85);
    \u0275\u0275text(9, "Registrati");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 86);
    \u0275\u0275text(11, "Crea il tuo account PeekBox");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 87)(13, "div", 88)(14, "label", 111);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 90);
    \u0275\u0275element(16, "path", 112)(17, "circle", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Nome profilo ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "div", 93)(20, "ion-input", 114);
    \u0275\u0275twoWayListener("ngModelChange", function LoginPage_ng_container_119_Template_ion_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nomeProfilo, $event) || (ctx_r1.nomeProfilo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 88)(22, "label", 115);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 90);
    \u0275\u0275element(24, "rect", 91)(25, "path", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Email ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "div", 93)(28, "ion-input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function LoginPage_ng_container_119_Template_ion_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.emailReg, $event) || (ctx_r1.emailReg = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 88)(30, "label", 117);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 90);
    \u0275\u0275element(32, "rect", 97)(33, "path", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Password ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "div", 93)(36, "ion-input", 118);
    \u0275\u0275twoWayListener("ngModelChange", function LoginPage_ng_container_119_Template_ion_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.passwordReg, $event) || (ctx_r1.passwordReg = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(37, "ion-input-password-toggle", 101);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 119)(39, "button", 120);
    \u0275\u0275listener("click", function LoginPage_ng_container_119_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selezionaProfilo("personal"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 121);
    \u0275\u0275element(41, "path", 112)(42, "circle", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44, "Personale");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "button", 120);
    \u0275\u0275listener("click", function LoginPage_ng_container_119_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selezionaProfilo("business"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 121);
    \u0275\u0275element(47, "rect", 122)(48, "path", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50, "Business");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(51, "div", 102);
    \u0275\u0275elementStart(52, "button", 103);
    \u0275\u0275listener("click", function LoginPage_ng_container_119_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.registrati());
    });
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "Registrati");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(55, "svg", 104);
    \u0275\u0275element(56, "line", 105)(57, "polyline", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(58, "span", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nomeProfilo);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.emailReg);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.passwordReg);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("ps-btn--active", ctx_r1.tipoProfilo === "personal");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("ps-btn--active", ctx_r1.tipoProfilo === "business");
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", !ctx_r1.registerValido);
  }
}
var _LoginPage = class _LoginPage {
  get loginValido() {
    return !!this.email?.trim() && !!this.password?.trim();
  }
  get registerValido() {
    return !!this.nomeProfilo?.trim() && !!this.emailReg?.trim() && !!this.passwordReg?.trim();
  }
  constructor(alertController, dbService, router) {
    this.alertController = alertController;
    this.dbService = dbService;
    this.router = router;
    this.email = "";
    this.password = "";
    this.isRegister = false;
    this.nomeProfilo = "";
    this.emailReg = "";
    this.passwordReg = "";
    this.tipoProfilo = "personal";
    this.cardRect = null;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
  }
  // ── Card Tilt + Scene Parallax ───────────────────────
  onMouseMove(event) {
    const card = this.cardRef?.nativeElement;
    if (card) {
      this.cardRect = card.getBoundingClientRect();
      const x = (event.clientX - this.cardRect.left) / this.cardRect.width;
      const y = (event.clientY - this.cardRect.top) / this.cardRect.height;
      card.style.setProperty("--tilt-x", `${(y - 0.5) * -5}deg`);
      card.style.setProperty("--tilt-y", `${(x - 0.5) * 5}deg`);
      card.style.setProperty("--glare-x", `${x * 100}%`);
      card.style.setProperty("--glare-y", `${y * 100}%`);
    }
    const stage = this.stageRef?.nativeElement;
    if (stage) {
      const px = (event.clientX / window.innerWidth - 0.5) * 2;
      const py = (event.clientY / window.innerHeight - 0.5) * 2;
      stage.style.setProperty("--px", px.toFixed(3));
      stage.style.setProperty("--py", py.toFixed(3));
    }
  }
  onMouseLeave() {
    const card = this.cardRef?.nativeElement;
    if (card) {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
      card.style.setProperty("--glare-x", "50%");
      card.style.setProperty("--glare-y", "50%");
      this.cardRect = null;
    }
    const stage = this.stageRef?.nativeElement;
    if (stage) {
      stage.style.setProperty("--px", "0");
      stage.style.setProperty("--py", "0");
    }
  }
  // ── Mode Toggle ──────────────────────────────────────
  toggleMode() {
    this.isRegister = !this.isRegister;
  }
  // ── Login Logic ──────────────────────────────────────
  accedi() {
    this.dbService.loginUtente(this.email, this.password).pipe(switchMap((res) => {
      localStorage.setItem("token", res.token);
      localStorage.setItem("utente_id", String(res.user.id));
      localStorage.setItem("utente_nome", res.user.username);
      localStorage.setItem("utente_email", res.user.email || "");
      localStorage.setItem("tipo_profilo", res.user.tipo_profilo || "personal");
      localStorage.setItem("is_admin", res.user.is_admin ? "1" : "0");
      return this.dbService.getCondivisioniPending(String(res.user.id)).pipe(catchError(() => {
        this.router.navigateByUrl("/home", { replaceUrl: true });
        return EMPTY;
      }));
    }), catchError(() => {
      this.alertController.create({
        cssClass: "peekbox-alert",
        header: "Accesso Negato",
        message: "Email o password errati. Riprova.",
        buttons: ["OK"]
      }).then((a) => a.present());
      return EMPTY;
    })).subscribe((res) => {
      if (res.pending > 0)
        this.router.navigateByUrl("/box-ricevute", { replaceUrl: true });
      else
        this.router.navigateByUrl("/home", { replaceUrl: true });
    });
  }
  recuperaPassword(event) {
    return __async(this, null, function* () {
      event.preventDefault();
      (yield this.alertController.create({
        cssClass: "peekbox-alert",
        header: "Recupero Password",
        message: "Funzionalit\xE0 non ancora disponibile sul database fisico.",
        buttons: ["OK"]
      })).present();
    });
  }
  tornaBenvenuto() {
    this.router.navigateByUrl("/benvenuto", { replaceUrl: true });
  }
  // ── Registration Logic ───────────────────────────────
  selezionaProfilo(tipo) {
    this.tipoProfilo = tipo;
  }
  registrati() {
    return __async(this, null, function* () {
      if (!this.nomeProfilo || !this.emailReg || !this.passwordReg) {
        (yield this.alertController.create({
          cssClass: "peekbox-alert",
          header: "Errore",
          message: "Tutti i campi sono obbligatori!",
          buttons: ["OK"]
        })).present();
        return;
      }
      this.dbService.registraUtente(this.nomeProfilo, this.emailReg, this.passwordReg, this.tipoProfilo).subscribe({
        next: () => __async(this, null, function* () {
          const label = this.tipoProfilo === "personal" ? "Personale" : "Business";
          const alert = yield this.alertController.create({
            cssClass: "peekbox-alert",
            header: "Registrazione completata",
            message: `Account ${label} creato con successo.`,
            buttons: [
              {
                text: "Accedi",
                handler: () => {
                  this.email = this.emailReg;
                  this.password = this.passwordReg;
                  this.isRegister = false;
                }
              }
            ]
          });
          alert.present();
        }),
        error: () => __async(this, null, function* () {
          (yield this.alertController.create({
            cssClass: "peekbox-alert",
            header: "Errore",
            message: "Impossibile registrarsi. Email gi\xE0 presente o server offline.",
            buttons: ["OK"]
          })).present();
        })
      });
    });
  }
};
_LoginPage.\u0275fac = function LoginPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginPage)(\u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(DatabaseService), \u0275\u0275directiveInject(Router));
};
_LoginPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPage, selectors: [["app-login"]], viewQuery: function LoginPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
    \u0275\u0275viewQuery(_c1, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cardRef = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stageRef = _t.first);
  }
}, hostBindings: function LoginPage_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("mousemove", function LoginPage_mousemove_HostBindingHandler($event) {
      return ctx.onMouseMove($event);
    })("mouseleave", function LoginPage_mouseleave_HostBindingHandler() {
      return ctx.onMouseLeave();
    });
  }
}, decls: 120, vars: 4, consts: [["stageRef", ""], ["tiltCard", ""], [1, "login-content", 3, "fullscreen", "scrollY"], [1, "login-stage"], [1, "split-layout"], [1, "hero-panel"], [1, "hp-blobs"], [1, "hpb-blob", "hpb-blob--1"], [1, "hpb-blob", "hpb-blob--2"], [1, "hpb-blob", "hpb-blob--3"], [1, "hpb-blob", "hpb-blob--4"], [1, "hp-grid"], ["viewBox", "0 0 500 500", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "hp-arc"], ["d", "M-50 350 Q150 200 320 100 Q420 40 550 20", "stroke", "url(#arcGrad)", "stroke-width", "1.5", "opacity", "0.15"], ["d", "M-50 420 Q180 260 350 140 Q440 70 550 40", "stroke", "url(#arcGrad)", "stroke-width", "0.8", "opacity", "0.08"], ["id", "arcGrad", "x1", "0", "y1", "0", "x2", "1", "y2", "0"], ["offset", "0%", "stop-color", "#7DC740", "stop-opacity", "0"], ["offset", "50%", "stop-color", "#7DC740"], ["offset", "100%", "stop-color", "#3AABDB", "stop-opacity", "0"], [1, "hp-testimonial", "hp-testimonial--1"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "#7DC740", "stroke-width", "1.5", 1, "hp-t-quote"], ["d", "M9 12H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7c0 2.5-1.5 5-4 6"], ["d", "M21 12h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7c0 2.5-1.5 5-4 6"], [1, "hp-t-text"], [1, "hp-t-author"], [1, "hp-t-name"], [1, "hp-t-role"], [1, "hp-testimonial", "hp-testimonial--2"], [1, "hp-stat", "hp-stat--3"], [1, "hp-stat-icon"], ["viewBox", "0 0 20 20", "fill", "none", "stroke", "#7DC740", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "22 12 18 12 15 21 9 3 6 12 2 12"], [1, "hp-stat-body"], [1, "hp-stat-num"], [1, "hp-stat-num-accent"], [1, "hp-stat-label"], [1, "hp-testimonial"], [1, "hp-dot", "hp-dot--1"], [1, "hp-dot", "hp-dot--2"], [1, "hp-dot", "hp-dot--3"], [1, "hp-dot", "hp-dot--4"], [1, "hp-dot", "hp-dot--5"], [1, "hp-dot", "hp-dot--6"], [1, "hp-dot", "hp-dot--7"], [1, "hp-dot", "hp-dot--8"], [1, "hp-brand"], [1, "hp-brand-icon"], [1, "hp-bi-glow"], ["src", "assets/icon/logoTitolo1.png", "alt", ""], [1, "hp-bi-ring"], [1, "hp-title"], [1, "hp-t-light"], [1, "hp-t-accent"], [1, "hp-desc"], [1, "hp-badges"], [1, "hp-badge"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "#7DC740", "stroke-width", "1.5"], ["d", "M8 1.5 2.5 4.5v4c0 4.5 5.5 7 5.5 7s5.5-2.5 5.5-7v-4L8 1.5z"], ["d", "m6 8.5 1.5 1.5 3-3"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "#3AABDB", "stroke-width", "1.5"], ["cx", "8", "cy", "8", "r", "6.5"], ["d", "M8 4.5v4l3 2"], ["x", "2.5", "y", "2.5", "width", "11", "height", "11", "rx", "2"], ["d", "M6 8.5 7.5 10 10 6.5"], [1, "form-panel"], [1, "fp-blobs"], [1, "fpb-blob", "fpb-blob--1"], [1, "fpb-blob", "fpb-blob--2"], [1, "fpb-blob", "fpb-blob--3"], [1, "fpb-blob", "fpb-blob--4"], [1, "login-card"], [1, "card-glare"], [1, "card-accent"], [1, "card-pattern"], [1, "card-bubble", "card-bubble--1"], [1, "card-bubble", "card-bubble--2"], [1, "card-bubble", "card-bubble--3"], [4, "ngIf"], [1, "card-header", "card-header--center"], [1, "ch-header-row"], [1, "ch-icon-wrap", "ch-icon-back", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "#7DC740", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"], ["points", "10 17 15 12 10 7"], ["x1", "15", "y1", "12", "x2", "3", "y2", "12"], [1, "card-title"], [1, "card-sub"], [1, "card-body"], [1, "field-group"], ["for", "emailInput", 1, "field-label"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "2", "y", "4", "width", "20", "height", "16", "rx", "2"], ["d", "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"], [1, "field-input-wrap"], ["id", "emailInput", "type", "email", "placeholder", "nome@azienda.com", 1, "login-input", 3, "ngModelChange", "ngModel"], [1, "field-label-row"], ["for", "passwordInput", 1, "field-label"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], [1, "forgot-link", 3, "click"], ["id", "passwordInput", "type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "login-input", 3, "ngModelChange", "ngModel"], ["slot", "end"], [1, "card-divider"], [1, "btn-accedi", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], [1, "btn-shimmer"], [1, "card-footer"], [1, "register-link"], [1, "register-anchor", 3, "click"], ["for", "nomeInput", 1, "field-label"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["id", "nomeInput", "type", "text", "placeholder", "Il tuo nome", 1, "login-input", 3, "ngModelChange", "ngModel"], ["for", "emailRegInput", 1, "field-label"], ["id", "emailRegInput", "type", "email", "placeholder", "nome@azienda.com", 1, "login-input", 3, "ngModelChange", "ngModel"], ["for", "passwordRegInput", 1, "field-label"], ["id", "passwordRegInput", "type", "password", "placeholder", "Min. 8 caratteri", 1, "login-input", 3, "ngModelChange", "ngModel"], [1, "profile-selector"], [1, "ps-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "2"], ["d", "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"]], template: function LoginPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 2)(1, "div", 3, 0)(3, "div", 4)(4, "div", 5)(5, "div", 6);
    \u0275\u0275element(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 12);
    \u0275\u0275element(12, "path", 13)(13, "path", 14);
    \u0275\u0275elementStart(14, "defs")(15, "linearGradient", 15);
    \u0275\u0275element(16, "stop", 16)(17, "stop", 17)(18, "stop", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 20);
    \u0275\u0275element(21, "path", 21)(22, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "p", 23);
    \u0275\u0275text(24, "\u201CDa quando usiamo PeekBox abbiamo ridotto i tempi di ricerca del 70%. Straordinario.\u201D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 24)(26, "span", 25);
    \u0275\u0275text(27, "Laura Bianchi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 26);
    \u0275\u0275text(29, "Warehouse Coordinator, LogiCorp");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 20);
    \u0275\u0275element(32, "path", 21)(33, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "p", 23);
    \u0275\u0275text(35, "\u201CLa geolocalizzazione ci ha cambiato la vita. Ogni scatola \xE8 sempre al suo posto.\u201D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 24)(37, "span", 25);
    \u0275\u0275text(38, "Alessandro Conti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 26);
    \u0275\u0275text(40, "Operations Manager, MoveFast");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 28)(42, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 30);
    \u0275\u0275element(44, "polyline", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(45, "div", 32)(46, "span", 33)(47, "span", 34);
    \u0275\u0275text(48, "99.9");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, "%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 35);
    \u0275\u0275text(51, "Uptime garantito");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 20);
    \u0275\u0275element(54, "path", 21)(55, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(56, "p", 23);
    \u0275\u0275text(57, `"Finalmente un sistema che rende la gestione dell'inventario semplice e veloce"`);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 24)(59, "span", 25);
    \u0275\u0275text(60, "Marco Rossi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 26);
    \u0275\u0275text(62, "Logistics Manager, TechLog");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(63, "div", 37)(64, "div", 38)(65, "div", 39)(66, "div", 40)(67, "div", 41)(68, "div", 42)(69, "div", 43)(70, "div", 44);
    \u0275\u0275elementStart(71, "div", 45)(72, "div", 46);
    \u0275\u0275element(73, "div", 47)(74, "img", 48)(75, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "h1", 50)(77, "span", 51);
    \u0275\u0275text(78, "Peek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 52);
    \u0275\u0275text(80, "Box");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "p", 53);
    \u0275\u0275text(82, "Il tuo inventario digitale.");
    \u0275\u0275element(83, "br");
    \u0275\u0275text(84, "Organizzato, tracciato, sempre con te.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 54)(86, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(87, "svg", 56);
    \u0275\u0275element(88, "path", 57)(89, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(90, "span");
    \u0275\u0275text(91, "GDPR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(93, "svg", 59);
    \u0275\u0275element(94, "circle", 60)(95, "path", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(96, "span");
    \u0275\u0275text(97, "24/7 Supporto");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(99, "svg", 56);
    \u0275\u0275element(100, "rect", 62)(101, "path", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(102, "span");
    \u0275\u0275text(103, "SSL");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(104, "div", 64)(105, "div", 65);
    \u0275\u0275element(106, "div", 66)(107, "div", 67)(108, "div", 68)(109, "div", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 70, 1);
    \u0275\u0275element(112, "div", 71)(113, "div", 72)(114, "div", 73)(115, "div", 74)(116, "div", 75)(117, "div", 76);
    \u0275\u0275template(118, LoginPage_ng_container_118_Template, 46, 3, "ng-container", 77)(119, LoginPage_ng_container_119_Template, 59, 8, "ng-container", 77);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true)("scrollY", false);
    \u0275\u0275advance(118);
    \u0275\u0275property("ngIf", !ctx.isRegister);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isRegister);
  }
}, dependencies: [IonContent, IonInput, CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, RouterModule, IonInputPasswordToggle], styles: ['@import "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family: "Outfit", sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n.login-content[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --overflow: hidden;\n}\n.login-stage[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  min-height: 100vh;\n  overflow: hidden;\n  background: #F4F7F9;\n}\n.split-layout[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n.hero-panel[_ngcontent-%COMP%] {\n  flex: 3;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 64px;\n  animation: _ngcontent-%COMP%_hp-in 1s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.hero-panel[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 3%;\n  bottom: 3%;\n  width: 2px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      rgba(125, 199, 64, 0.4) 25%,\n      rgba(125, 199, 64, 0.5) 45%,\n      rgba(58, 171, 219, 0.35) 65%,\n      transparent);\n  box-shadow: 0 0 8px rgba(125, 199, 64, 0.15);\n}\n@keyframes _ngcontent-%COMP%_hp-in {\n  from {\n    opacity: 0;\n    transform: translateX(-36px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.hp-blobs[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n.hpb-blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  opacity: 0.45;\n}\n.hpb-blob--1[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  top: -180px;\n  right: -60px;\n  background:\n    radial-gradient(\n      circle,\n      #3AABDB,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_hpb-m1 18s ease-in-out infinite;\n}\n.hpb-blob--2[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  bottom: -140px;\n  left: -80px;\n  background:\n    radial-gradient(\n      circle,\n      #7DC740,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_hpb-m2 15s ease-in-out infinite 2s;\n}\n.hpb-blob--3[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 280px;\n  top: 30%;\n  left: 5%;\n  background:\n    radial-gradient(\n      circle,\n      #3AABDB,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_hpb-m3 20s ease-in-out infinite 4s;\n}\n.hpb-blob--4[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  top: 50%;\n  right: 10%;\n  background:\n    radial-gradient(\n      circle,\n      #7DC740,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_hpb-m4 16s ease-in-out infinite 6s;\n}\n@keyframes _ngcontent-%COMP%_hpb-m1 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n    border-radius: 50%;\n  }\n  33% {\n    transform: translate(40px, 30px) scale(1.1);\n    border-radius: 42% 58% 58% 42%/48% 52% 48% 52%;\n  }\n  66% {\n    transform: translate(-20px, 50px) scale(0.95);\n    border-radius: 55% 45% 45% 55%/52% 48% 52% 48%;\n  }\n}\n@keyframes _ngcontent-%COMP%_hpb-m2 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n    border-radius: 50%;\n  }\n  33% {\n    transform: translate(-30px, -40px) scale(1.15);\n    border-radius: 55% 45% 48% 52%/42% 58% 42% 58%;\n  }\n  66% {\n    transform: translate(30px, -20px) scale(0.9);\n    border-radius: 45% 55% 52% 48%/55% 45% 55% 45%;\n  }\n}\n@keyframes _ngcontent-%COMP%_hpb-m3 {\n  0%, 100% {\n    transform: translate(0, 0) rotate(0deg) scale(1);\n    border-radius: 50%;\n  }\n  50% {\n    transform: translate(20px, -30px) rotate(180deg) scale(1.2);\n    border-radius: 40% 60% 55% 45%/50% 45% 55% 50%;\n  }\n}\n@keyframes _ngcontent-%COMP%_hpb-m4 {\n  0%, 100% {\n    transform: translate(0, 0) rotate(0deg) scale(1);\n    border-radius: 50%;\n  }\n  50% {\n    transform: translate(-25px, 20px) rotate(-180deg) scale(1.1);\n    border-radius: 58% 42% 45% 55%/48% 52% 48% 52%;\n  }\n}\n.hp-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background-image:\n    linear-gradient(rgba(125, 199, 64, 0.015) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(125, 199, 64, 0.015) 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  mask-image:\n    radial-gradient(\n      ellipse at 30% 50%,\n      black 20%,\n      transparent 70%);\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at 30% 50%,\n      black 20%,\n      transparent 70%);\n}\n.hp-arc[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.hp-stat[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.65);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-radius: 14px;\n  padding: 14px 18px;\n  box-shadow: 0 6px 28px rgba(15, 23, 42, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.5) inset;\n  animation: _ngcontent-%COMP%_hp-float 6s ease-in-out infinite alternate;\n  transition: transform 0.08s;\n}\n.hp-stat-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(125, 199, 64, 0.06);\n  border: 1px solid rgba(125, 199, 64, 0.08);\n}\n.hp-stat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.hp-stat-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.hp-stat-num[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  font-size: 1.1rem;\n  font-weight: 900;\n  color: #0F172A;\n  letter-spacing: -0.03em;\n  line-height: 1.1;\n}\n.hp-stat-num-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hp-stat-label[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 500;\n  color: #4A7A94;\n  letter-spacing: 0.3px;\n  text-transform: uppercase;\n}\n.hp-stat--3[_ngcontent-%COMP%] {\n  top: auto;\n  bottom: 18%;\n  left: 6%;\n  animation-duration: 5.5s;\n  animation-delay: -4s;\n  transform: translateX(calc(var(--px, 0.5) * 12px - 6px)) translateY(calc(var(--py, 0.5) * -12px + 6px));\n}\n@keyframes _ngcontent-%COMP%_hp-float {\n  from {\n    transform: var(--tf-base, translateX(0) translateY(0)) translateY(0);\n  }\n  to {\n    transform: var(--tf-base, translateX(0) translateY(0)) translateY(-12px);\n  }\n}\n.hp-testimonial[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  pointer-events: none;\n  max-width: 280px;\n  background: rgba(255, 255, 255, 0.55);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border-radius: 14px;\n  padding: 14px 18px;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03), 0 0 0 1px rgba(255, 255, 255, 0.4) inset;\n  animation: _ngcontent-%COMP%_hp-float 7s ease-in-out infinite alternate;\n  transition: transform 0.08s;\n}\n.hp-testimonial--1[_ngcontent-%COMP%] {\n  top: 18%;\n  left: 5%;\n  animation-duration: 6s;\n  animation-delay: 0s;\n}\n.hp-testimonial--2[_ngcontent-%COMP%] {\n  top: 18%;\n  right: 5%;\n  animation-duration: 7s;\n  animation-delay: -2.5s;\n}\n.hp-testimonial[_ngcontent-%COMP%]:not(.hp-testimonial--1):not(.hp-testimonial--2) {\n  top: 66%;\n  right: 6%;\n  left: auto;\n  animation-direction: alternate-reverse;\n}\n.hp-t-quote[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-bottom: 6px;\n  opacity: 0.3;\n}\n.hp-t-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.78rem;\n  font-style: italic;\n  color: #0F172A;\n  line-height: 1.6;\n  opacity: 0.75;\n}\n.hp-t-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n}\n.hp-t-name[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #0F172A;\n}\n.hp-t-role[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.62rem;\n  color: #4A7A94;\n  opacity: 0.55;\n}\n.hp-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_hd-float 8s ease-in-out infinite alternate;\n  transition: transform 0.08s;\n  transform: translateX(calc(var(--px, 0.5) * 12px - 6px)) translateY(calc(var(--py, 0.5) * 12px - 6px));\n}\n.hp-dot--1[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background: rgba(125, 199, 64, 0.1);\n  top: 15%;\n  left: 12%;\n}\n.hp-dot--2[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  background: rgba(58, 171, 219, 0.12);\n  top: 15%;\n  right: 12%;\n  animation-delay: -1.5s;\n  animation-duration: 6s;\n}\n.hp-dot--3[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  background: rgba(125, 199, 64, 0.06);\n  top: 50%;\n  left: 6%;\n  animation-duration: 7s;\n  animation-delay: -3s;\n}\n.hp-dot--4[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  background: rgba(58, 171, 219, 0.08);\n  top: 50%;\n  right: 6%;\n  animation-duration: 9s;\n  animation-delay: -5s;\n}\n.hp-dot--5[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 3px;\n  background: rgba(125, 199, 64, 0.15);\n  top: 78%;\n  left: 14%;\n  animation-duration: 5s;\n  animation-delay: -2s;\n}\n.hp-dot--6[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  background: rgba(58, 171, 219, 0.06);\n  top: 78%;\n  right: 14%;\n  animation-duration: 7.5s;\n  animation-delay: -4s;\n}\n.hp-dot--7[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  background: rgba(125, 199, 64, 0.08);\n  top: 88%;\n  left: 44%;\n  animation-duration: 6s;\n  animation-delay: -6s;\n}\n.hp-dot--8[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: rgba(58, 171, 219, 0.05);\n  top: 22%;\n  left: 56%;\n  animation-duration: 8s;\n  animation-delay: -1s;\n}\n@keyframes _ngcontent-%COMP%_hd-float {\n  from {\n    transform: var(--tf-dot, translateX(0) translateY(0)) translateY(0);\n  }\n  to {\n    transform: var(--tf-dot, translateX(0) translateY(0)) translateY(-20px);\n  }\n}\n.hp-brand[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 4;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-top: -100px;\n}\n.hp-brand-icon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 54px;\n  height: 54px;\n  border-radius: 16px;\n  overflow: hidden;\n  margin-bottom: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 6px 24px rgba(125, 199, 64, 0.1), 0 0 0 1px rgba(125, 199, 64, 0.06) inset;\n  background: #ffffff;\n}\n.hp-brand-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  position: relative;\n  z-index: 2;\n}\n.hp-bi-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -40%;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(125, 199, 64, 0.15) 0%,\n      transparent 60%);\n  z-index: 0;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_bi-pulse 3s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_bi-pulse {\n  0%, 100% {\n    opacity: 0.5;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.15);\n  }\n}\n.hp-bi-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -6px;\n  border-radius: 20px;\n  border: 1.5px solid rgba(125, 199, 64, 0.08);\n  z-index: 1;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_bi-ring 4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_bi-ring {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n  50% {\n    transform: scale(1.08);\n    opacity: 0.6;\n  }\n}\n.hp-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 2.2rem;\n  font-weight: 900;\n  letter-spacing: -0.04em;\n  line-height: 1.1;\n}\n.hp-t-light[_ngcontent-%COMP%] {\n  color: #0F172A;\n}\n.hp-t-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740 0%,\n      #5A9E2A 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hp-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.92rem;\n  color: #4A7A94;\n  line-height: 1.7;\n}\n.hp-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 20px;\n  justify-content: center;\n}\n.hp-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 8px;\n  padding: 5px 10px 5px 8px;\n  border: 1px solid rgba(15, 23, 42, 0.03);\n}\n.hp-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  flex-shrink: 0;\n}\n.hp-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 600;\n  color: #4A7A94;\n  letter-spacing: 0.2px;\n}\n.form-panel[_ngcontent-%COMP%] {\n  flex: 2;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 32px 32px 56px;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fp-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) both 0.15s;\n}\n.fp-blobs[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n.fpb-blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  opacity: 0.35;\n}\n.fpb-blob--1[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  top: -200px;\n  right: -120px;\n  background:\n    radial-gradient(\n      circle,\n      #3AABDB,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_fpb-m1 18s ease-in-out infinite;\n}\n.fpb-blob--2[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  bottom: -160px;\n  left: -100px;\n  background:\n    radial-gradient(\n      circle,\n      #7DC740,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_fpb-m2 15s ease-in-out infinite 2s;\n}\n.fpb-blob--3[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 280px;\n  top: 30%;\n  left: 10%;\n  background:\n    radial-gradient(\n      circle,\n      #3AABDB,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_fpb-m3 20s ease-in-out infinite 4s;\n}\n.fpb-blob--4[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  bottom: 30%;\n  right: 10%;\n  background:\n    radial-gradient(\n      circle,\n      #7DC740,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_fpb-m4 16s ease-in-out infinite 6s;\n}\n@keyframes _ngcontent-%COMP%_fpb-m1 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n    border-radius: 50%;\n  }\n  33% {\n    transform: translate(40px, 30px) scale(1.1);\n    border-radius: 42% 58% 58% 42%/48% 52% 48% 52%;\n  }\n  66% {\n    transform: translate(-20px, 50px) scale(0.95);\n    border-radius: 55% 45% 45% 55%/52% 48% 52% 48%;\n  }\n}\n@keyframes _ngcontent-%COMP%_fpb-m2 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n    border-radius: 50%;\n  }\n  33% {\n    transform: translate(-30px, -40px) scale(1.15);\n    border-radius: 55% 45% 48% 52%/42% 58% 42% 58%;\n  }\n  66% {\n    transform: translate(30px, -20px) scale(0.9);\n    border-radius: 45% 55% 52% 48%/55% 45% 55% 45%;\n  }\n}\n@keyframes _ngcontent-%COMP%_fpb-m3 {\n  0%, 100% {\n    transform: translate(0, 0) rotate(0deg) scale(1);\n    border-radius: 50%;\n  }\n  50% {\n    transform: translate(20px, -30px) rotate(180deg) scale(1.2);\n    border-radius: 40% 60% 55% 45%/50% 45% 55% 50%;\n  }\n}\n@keyframes _ngcontent-%COMP%_fpb-m4 {\n  0%, 100% {\n    transform: translate(0, 0) rotate(0deg) scale(1);\n    border-radius: 50%;\n  }\n  50% {\n    transform: translate(-25px, 20px) rotate(-180deg) scale(1.1);\n    border-radius: 58% 42% 45% 55%/48% 52% 48% 52%;\n  }\n}\n@keyframes _ngcontent-%COMP%_fp-in {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.login-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 390px;\n  background: rgba(255, 255, 255, 0.6);\n  backdrop-filter: blur(50px);\n  -webkit-backdrop-filter: blur(50px);\n  border-radius: 28px;\n  padding: 32px 30px 24px;\n  box-shadow: 0 32px 80px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.7) inset;\n  display: flex;\n  flex-direction: column;\n  transform: perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));\n  transition: transform 0.12s ease-out;\n  overflow: hidden;\n}\n.login-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 28px;\n  padding: 1.5px;\n  background:\n    conic-gradient(\n      from 0deg at 50% 50%,\n      rgba(125, 199, 64, 0.18),\n      rgba(58, 171, 219, 0.05),\n      rgba(125, 199, 64, 0.06),\n      rgba(58, 171, 219, 0.1),\n      rgba(125, 199, 64, 0.03),\n      transparent 60%,\n      rgba(125, 199, 64, 0.18));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_border-rotate 8s linear infinite;\n}\n.login-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: -4px;\n  border-radius: 32px;\n  background:\n    conic-gradient(\n      from 0deg at 50% 50%,\n      rgba(125, 199, 64, 0.03),\n      transparent 30%,\n      rgba(58, 171, 219, 0.02),\n      transparent 70%,\n      rgba(125, 199, 64, 0.03));\n  z-index: -1;\n  filter: blur(12px);\n  animation: _ngcontent-%COMP%_border-rotate 12s linear infinite reverse;\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_border-rotate {\n  to {\n    background:\n      conic-gradient(\n        from 360deg at 50% 50%,\n        rgba(125, 199, 64, 0.18),\n        rgba(58, 171, 219, 0.05),\n        rgba(125, 199, 64, 0.06),\n        rgba(58, 171, 219, 0.1),\n        rgba(125, 199, 64, 0.03),\n        transparent 60%,\n        rgba(125, 199, 64, 0.18));\n  }\n}\n.card-glare[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 28px;\n  background:\n    radial-gradient(\n      circle at var(--glare-x, 50%) var(--glare-y, 50%),\n      rgba(255, 255, 255, 0.15) 0%,\n      transparent 60%);\n  pointer-events: none;\n  z-index: 1;\n  transition: background 0.08s;\n}\n.card-accent[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(125, 199, 64, 0.06) 15%,\n      #7DC740 50%,\n      rgba(125, 199, 64, 0.06) 85%,\n      transparent 100%);\n  background-size: 200% 100%;\n  border-radius: 28px 28px 0 0;\n  animation: _ngcontent-%COMP%_accent-slide 5s ease-in-out infinite;\n  z-index: 2;\n}\n@keyframes _ngcontent-%COMP%_accent-slide {\n  0% {\n    background-position: -100% 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: -100% 0;\n  }\n}\n.card-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 28px;\n  background-image:\n    radial-gradient(\n      circle at 80% 15%,\n      rgba(125, 199, 64, 0.04) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 20% 85%,\n      rgba(58, 171, 219, 0.04) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 1;\n}\n.card-bubble[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 1;\n  transition: transform 0.15s ease-out;\n}\n.card-bubble--1[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(125, 199, 64, 0.04),\n      transparent);\n  top: -20px;\n  right: -15px;\n  transform: translate(calc(var(--tilt-y, 0deg) * 0.3px), calc(var(--tilt-x, 0deg) * -0.3px));\n}\n.card-bubble--2[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(58, 171, 219, 0.04),\n      transparent);\n  bottom: 40px;\n  left: -10px;\n  transform: translate(calc(var(--tilt-y, 0deg) * -0.2px), calc(var(--tilt-x, 0deg) * 0.2px));\n}\n.card-bubble--3[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(125, 199, 64, 0.05),\n      transparent);\n  bottom: -10px;\n  right: 50px;\n  transform: translate(calc(var(--tilt-y, 0deg) * 0.3px), calc(var(--tilt-x, 0deg) * -0.15px));\n}\n.card-header[_ngcontent-%COMP%], \n.card-body[_ngcontent-%COMP%], \n.card-footer[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.card-header--center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 24px;\n}\n.ch-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  margin-bottom: 8px;\n}\n.ch-icon-back[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.ch-icon-back[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 6px 20px rgba(125, 199, 64, 0.1);\n}\n.ch-icon-wrap[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 199, 64, 0.1),\n      rgba(125, 199, 64, 0.03));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n  border: 1px solid rgba(125, 199, 64, 0.06);\n  box-shadow: 0 4px 12px rgba(125, 199, 64, 0.04);\n}\n.ch-icon-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 900;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740 0%,\n      #3AABDB 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: -0.03em;\n  line-height: 1.1;\n}\n.card-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.82rem;\n  color: #4A7A94;\n  line-height: 1.5;\n  margin-top: 5px;\n}\n.card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.field-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field-label-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.field-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.77rem;\n  font-weight: 700;\n  color: #0F172A;\n  padding-left: 2px;\n}\n.field-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  color: #4A7A94;\n  flex-shrink: 0;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.72rem;\n  color: #4A7A94;\n  text-decoration: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  transition: color 0.2s;\n  position: relative;\n}\n.forgot-link[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 0;\n  height: 1px;\n  background: #7DC740;\n  transition: width 0.25s;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  color: #5A9E2A;\n}\n.forgot-link[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n.field-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.65);\n  border-radius: 12px;\n  border: 1.5px solid rgba(15, 23, 42, 0.04);\n  overflow: hidden;\n  transition:\n    border-color 0.25s,\n    background 0.25s,\n    box-shadow 0.25s;\n}\n.field-input-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: #7DC740;\n  background: #fff;\n  box-shadow: 0 0 0 4px rgba(125, 199, 64, 0.08);\n}\n.login-input[_ngcontent-%COMP%] {\n  flex: 1;\n  --background: transparent;\n  --color: #0F172A;\n  --placeholder-color: #4A7A94;\n  --placeholder-opacity: 0.4;\n  --padding-start: 14px;\n  --padding-end: 12px;\n  --padding-top: 14px;\n  --padding-bottom: 14px;\n  font-family: "Outfit", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 500;\n  min-height: 48px;\n}\n.card-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(125, 199, 64, 0.07),\n      transparent);\n  margin: 2px 0;\n}\n.btn-accedi[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 15px 26px;\n  border: none;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740 0%,\n      #5A9E2A 100%);\n  color: #fff;\n  font-family: "Outfit", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 800;\n  cursor: pointer;\n  overflow: hidden;\n  box-shadow: 0 8px 24px rgba(125, 199, 64, 0.22);\n  transition: transform 0.25s, box-shadow 0.25s;\n  letter-spacing: 0.2px;\n}\n.btn-accedi[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.btn-accedi[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 16px;\n  height: 16px;\n  transition: transform 0.3s;\n}\n.btn-accedi[_ngcontent-%COMP%]   .btn-shimmer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 60%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.18),\n      transparent);\n  animation: _ngcontent-%COMP%_shimmer 3.2s ease-in-out infinite;\n}\n.btn-accedi[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: -4px;\n  border-radius: 16px;\n  background: inherit;\n  filter: blur(8px);\n  opacity: 0;\n  transition: opacity 0.3s;\n  z-index: -1;\n}\n.btn-accedi[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px) scale(1.01);\n  box-shadow: 0 16px 40px rgba(125, 199, 64, 0.32);\n}\n.btn-accedi[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: translateX(5px);\n}\n.btn-accedi[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.45;\n}\n.btn-accedi[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n  box-shadow: 0 4px 12px rgba(125, 199, 64, 0.2);\n}\n.btn-accedi[_ngcontent-%COMP%]:disabled {\n  background: rgba(15, 23, 42, 0.08);\n  color: rgba(15, 23, 42, 0.2);\n  cursor: not-allowed;\n  box-shadow: none;\n  transform: none;\n  pointer-events: none;\n}\n.btn-accedi[_ngcontent-%COMP%]:disabled   svg[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n.btn-accedi[_ngcontent-%COMP%]:disabled   .btn-shimmer[_ngcontent-%COMP%] {\n  display: none;\n}\n.btn-accedi[_ngcontent-%COMP%]:disabled::before {\n  display: none;\n}\n.btn-accedi[_ngcontent-%COMP%]:disabled:hover {\n  transform: none;\n  box-shadow: none;\n}\n.btn-accedi[_ngcontent-%COMP%]:disabled:hover   svg[_ngcontent-%COMP%] {\n  transform: none;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    left: -100%;\n  }\n  50%, 100% {\n    left: 160%;\n  }\n}\n.card-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 14px;\n  border-top: 1px solid rgba(15, 23, 42, 0.03);\n}\n.register-link[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.8rem;\n  color: #4A7A94;\n}\n.register-anchor[_ngcontent-%COMP%] {\n  color: #7DC740;\n  font-weight: 700;\n  text-decoration: none;\n  margin-left: 4px;\n  position: relative;\n  transition: color 0.2s;\n  cursor: pointer;\n}\n.register-anchor[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 0;\n  height: 1.5px;\n  background: #7DC740;\n  transition: width 0.25s;\n}\n.register-anchor[_ngcontent-%COMP%]:hover {\n  color: #5A9E2A;\n}\n.register-anchor[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n.profile-selector[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.ps-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1.5px solid rgba(15, 23, 42, 0.06);\n  background: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  font-family: "Outfit", sans-serif;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #4A7A94;\n  transition:\n    border-color 0.25s,\n    background 0.25s,\n    color 0.25s,\n    box-shadow 0.25s;\n}\n.ps-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.ps-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(125, 199, 64, 0.15);\n  background: rgba(125, 199, 64, 0.03);\n}\n.ps-btn--active[_ngcontent-%COMP%] {\n  border-color: #7DC740;\n  background: rgba(125, 199, 64, 0.06);\n  color: #5A9E2A;\n  box-shadow: 0 0 0 3px rgba(125, 199, 64, 0.08);\n}\n@media (max-width: 899px) {\n  .hero-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .form-panel[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .login-card[_ngcontent-%COMP%] {\n    max-width: 370px;\n    padding: 26px 24px 22px;\n    border-radius: 24px;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n}\n@media (max-width: 480px) {\n  .form-panel[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .login-card[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 22px 18px 18px;\n    border-radius: 20px;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .login-input[_ngcontent-%COMP%] {\n    font-size: 0.84rem;\n    --padding-start: 12px;\n    --padding-end: 10px;\n    --padding-top: 12px;\n    --padding-bottom: 12px;\n    min-height: 44px;\n  }\n  .btn-accedi[_ngcontent-%COMP%] {\n    padding: 13px 22px;\n    font-size: 0.85rem;\n  }\n  .ch-icon-wrap[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n  .ch-icon-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 17px;\n    height: 17px;\n  }\n}\n@media (hover: none) {\n  .login-card[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .btn-accedi[_ngcontent-%COMP%]:hover {\n    transform: none;\n    box-shadow: 0 8px 24px rgba(125, 199, 64, 0.22);\n  }\n  .btn-accedi[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n    transform: none;\n  }\n  .btn-accedi[_ngcontent-%COMP%]:hover::before {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=login.page.css.map */'] });
var LoginPage = _LoginPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPage, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      IonContent,
      IonInput,
      CommonModule,
      FormsModule,
      RouterModule,
      IonInputPasswordToggle
    ], template: `<ion-content [fullscreen]="true" class="login-content" [scrollY]="false">

  <div #stageRef class="login-stage">

    <!-- Split Layout -->
    <div class="split-layout">

      <!-- \u2500\u2500\u2500\u2500\u2500 LEFT: HERO PANEL \u2500\u2500\u2500\u2500\u2500 -->
      <div class="hero-panel">

        <!-- Animated blob background -->
        <div class="hp-blobs">
          <div class="hpb-blob hpb-blob--1"></div>
          <div class="hpb-blob hpb-blob--2"></div>
          <div class="hpb-blob hpb-blob--3"></div>
          <div class="hpb-blob hpb-blob--4"></div>
        </div>

        <!-- Subtle grid pattern -->
        <div class="hp-grid"></div>

        <!-- Decorative organic curve -->
        <svg class="hp-arc" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-50 350 Q150 200 320 100 Q420 40 550 20" stroke="url(#arcGrad)" stroke-width="1.5" opacity="0.15"/>
          <path d="M-50 420 Q180 260 350 140 Q440 70 550 40" stroke="url(#arcGrad)" stroke-width="0.8" opacity="0.08"/>
          <defs><linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7DC740" stop-opacity="0"/><stop offset="50%" stop-color="#7DC740"/><stop offset="100%" stop-color="#3AABDB" stop-opacity="0"/></linearGradient></defs>
        </svg>

        <!-- Floating testimonial cards -->
        <div class="hp-testimonial hp-testimonial--1">
          <svg class="hp-t-quote" viewBox="0 0 24 24" fill="none" stroke="#7DC740" stroke-width="1.5"><path d="M9 12H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7c0 2.5-1.5 5-4 6"/><path d="M21 12h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7c0 2.5-1.5 5-4 6"/></svg>
          <p class="hp-t-text">&ldquo;Da quando usiamo PeekBox abbiamo ridotto i tempi di ricerca del 70%. Straordinario.&rdquo;</p>
          <div class="hp-t-author">
            <span class="hp-t-name">Laura Bianchi</span>
            <span class="hp-t-role">Warehouse Coordinator, LogiCorp</span>
          </div>
        </div>

        <div class="hp-testimonial hp-testimonial--2">
          <svg class="hp-t-quote" viewBox="0 0 24 24" fill="none" stroke="#7DC740" stroke-width="1.5"><path d="M9 12H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7c0 2.5-1.5 5-4 6"/><path d="M21 12h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7c0 2.5-1.5 5-4 6"/></svg>
          <p class="hp-t-text">&ldquo;La geolocalizzazione ci ha cambiato la vita. Ogni scatola &egrave; sempre al suo posto.&rdquo;</p>
          <div class="hp-t-author">
            <span class="hp-t-name">Alessandro Conti</span>
            <span class="hp-t-role">Operations Manager, MoveFast</span>
          </div>
        </div>

        <div class="hp-stat hp-stat--3">
          <div class="hp-stat-icon">
            <svg viewBox="0 0 20 20" fill="none" stroke="#7DC740" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </div>
          <div class="hp-stat-body">
            <span class="hp-stat-num"><span class="hp-stat-num-accent">99.9</span>%</span>
            <span class="hp-stat-label">Uptime garantito</span>
          </div>
        </div>

        <!-- Floating testimonial -->
        <div class="hp-testimonial">
          <svg class="hp-t-quote" viewBox="0 0 24 24" fill="none" stroke="#7DC740" stroke-width="1.5"><path d="M9 12H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7c0 2.5-1.5 5-4 6"/><path d="M21 12h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7c0 2.5-1.5 5-4 6"/></svg>
          <p class="hp-t-text">"Finalmente un sistema che rende la gestione dell'inventario semplice e veloce"</p>
          <div class="hp-t-author">
            <span class="hp-t-name">Marco Rossi</span>
            <span class="hp-t-role">Logistics Manager, TechLog</span>
          </div>
        </div>

        <!-- Floating dots -->
        <div class="hp-dot hp-dot--1"></div>
        <div class="hp-dot hp-dot--2"></div>
        <div class="hp-dot hp-dot--3"></div>
        <div class="hp-dot hp-dot--4"></div>
        <div class="hp-dot hp-dot--5"></div>
        <div class="hp-dot hp-dot--6"></div>
        <div class="hp-dot hp-dot--7"></div>
        <div class="hp-dot hp-dot--8"></div>

        <!-- Main brand -->
        <div class="hp-brand">
          <div class="hp-brand-icon">
            <div class="hp-bi-glow"></div>
            <img src="assets/icon/logoTitolo1.png" alt="" />
            <div class="hp-bi-ring"></div>
          </div>
          <h1 class="hp-title">
            <span class="hp-t-light">Peek</span><span class="hp-t-accent">Box</span>
          </h1>
          <p class="hp-desc">Il tuo inventario digitale.<br>Organizzato, tracciato, sempre con te.</p>
          <div class="hp-badges">
            <div class="hp-badge">
              <svg viewBox="0 0 16 16" fill="none" stroke="#7DC740" stroke-width="1.5"><path d="M8 1.5 2.5 4.5v4c0 4.5 5.5 7 5.5 7s5.5-2.5 5.5-7v-4L8 1.5z"/><path d="m6 8.5 1.5 1.5 3-3"/></svg>
              <span>GDPR</span>
            </div>
            <div class="hp-badge">
              <svg viewBox="0 0 16 16" fill="none" stroke="#3AABDB" stroke-width="1.5"><circle cx="8" cy="8" r="6.5"/><path d="M8 4.5v4l3 2"/></svg>
              <span>24/7 Supporto</span>
            </div>
            <div class="hp-badge">
              <svg viewBox="0 0 16 16" fill="none" stroke="#7DC740" stroke-width="1.5"><rect x="2.5" y="2.5" width="11" height="11" rx="2"/><path d="M6 8.5 7.5 10 10 6.5"/></svg>
              <span>SSL</span>
            </div>
          </div>
        </div>

      </div>

      <!-- \u2500\u2500\u2500\u2500\u2500 RIGHT: LOGIN / REGISTER CARD \u2500\u2500\u2500\u2500\u2500 -->
      <div class="form-panel">
        <div class="fp-blobs">
          <div class="fpb-blob fpb-blob--1"></div>
          <div class="fpb-blob fpb-blob--2"></div>
          <div class="fpb-blob fpb-blob--3"></div>
          <div class="fpb-blob fpb-blob--4"></div>
        </div>
        <div #tiltCard class="login-card">

          <div class="card-glare"></div>
          <div class="card-accent"></div>
          <div class="card-pattern"></div>

          <div class="card-bubble card-bubble--1"></div>
          <div class="card-bubble card-bubble--2"></div>
          <div class="card-bubble card-bubble--3"></div>

          <!-- \u2500\u2500 LOGIN MODE \u2500\u2500 -->
          <ng-container *ngIf="!isRegister">
            <div class="card-header card-header--center">
              <div class="ch-header-row">
                <div class="ch-icon-wrap ch-icon-back" (click)="tornaBenvenuto()">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#7DC740" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                    <polyline points="10 17 15 12 10 7"/>
                    <line x1="15" y1="12" x2="3" y2="12"/>
                  </svg>
                </div>
              </div>
              <h1 class="card-title">Accedi</h1>
              <p class="card-sub">Inserisci le tue credenziali per continuare</p>
            </div>
            <div class="card-body">
              <div class="field-group">
                <label class="field-label" for="emailInput">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Email
                </label>
                <div class="field-input-wrap">
                  <ion-input id="emailInput" class="login-input" type="email" placeholder="nome@azienda.com" [(ngModel)]="email"></ion-input>
                </div>
              </div>
              <div class="field-group">
                <div class="field-label-row">
                  <label class="field-label" for="passwordInput">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    Password
                  </label>
                  <button class="forgot-link" (click)="recuperaPassword($event)">Password dimenticata?</button>
                </div>
                <div class="field-input-wrap">
                  <ion-input id="passwordInput" class="login-input" type="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" [(ngModel)]="password">
                    <ion-input-password-toggle slot="end"></ion-input-password-toggle>
                  </ion-input>
                </div>
              </div>
              <div class="card-divider"></div>
              <button class="btn-accedi" [disabled]="!loginValido" (click)="accedi()">
                <span>Accedi</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                <span class="btn-shimmer"></span>
              </button>
            </div>
            <div class="card-footer">
              <p class="register-link">Non hai un account?<a class="register-anchor" (click)="toggleMode()">Registrati gratuitamente</a></p>
            </div>
          </ng-container>

          <!-- \u2500\u2500 REGISTER MODE \u2500\u2500 -->
          <ng-container *ngIf="isRegister">
            <div class="card-header card-header--center">
              <div class="ch-header-row">
                <div class="ch-icon-wrap ch-icon-back" (click)="toggleMode()">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#7DC740" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                    <polyline points="10 17 15 12 10 7"/>
                    <line x1="15" y1="12" x2="3" y2="12"/>
                  </svg>
                </div>
              </div>
              <h1 class="card-title">Registrati</h1>
              <p class="card-sub">Crea il tuo account PeekBox</p>
            </div>
            <div class="card-body">
              <div class="field-group">
                <label class="field-label" for="nomeInput">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  Nome profilo
                </label>
                <div class="field-input-wrap">
                  <ion-input id="nomeInput" class="login-input" type="text" placeholder="Il tuo nome" [(ngModel)]="nomeProfilo"></ion-input>
                </div>
              </div>
              <div class="field-group">
                <label class="field-label" for="emailRegInput">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Email
                </label>
                <div class="field-input-wrap">
                  <ion-input id="emailRegInput" class="login-input" type="email" placeholder="nome@azienda.com" [(ngModel)]="emailReg"></ion-input>
                </div>
              </div>
              <div class="field-group">
                <label class="field-label" for="passwordRegInput">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Password
                </label>
                <div class="field-input-wrap">
                  <ion-input id="passwordRegInput" class="login-input" type="password" placeholder="Min. 8 caratteri" [(ngModel)]="passwordReg">
                    <ion-input-password-toggle slot="end"></ion-input-password-toggle>
                  </ion-input>
                </div>
              </div>
              <div class="profile-selector">
                <button class="ps-btn" [class.ps-btn--active]="tipoProfilo === 'personal'" (click)="selezionaProfilo('personal')">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <span>Personale</span>
                </button>
                <button class="ps-btn" [class.ps-btn--active]="tipoProfilo === 'business'" (click)="selezionaProfilo('business')">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
                  <span>Business</span>
                </button>
              </div>
              <div class="card-divider"></div>
              <button class="btn-accedi" [disabled]="!registerValido" (click)="registrati()">
                <span>Registrati</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                <span class="btn-shimmer"></span>
              </button>
            </div>
          </ng-container>

        </div>
      </div>

    </div>

  </div>

</ion-content>
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap";\n\n/* src/app/login/login.page.scss */\n:host {\n  display: block;\n  font-family: "Outfit", sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n.login-content {\n  --background: #F4F7F9;\n  --overflow: hidden;\n}\n.login-stage {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  min-height: 100vh;\n  overflow: hidden;\n  background: #F4F7F9;\n}\n.split-layout {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n.hero-panel {\n  flex: 3;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 64px;\n  animation: hp-in 1s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.hero-panel::after {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 3%;\n  bottom: 3%;\n  width: 2px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      rgba(125, 199, 64, 0.4) 25%,\n      rgba(125, 199, 64, 0.5) 45%,\n      rgba(58, 171, 219, 0.35) 65%,\n      transparent);\n  box-shadow: 0 0 8px rgba(125, 199, 64, 0.15);\n}\n@keyframes hp-in {\n  from {\n    opacity: 0;\n    transform: translateX(-36px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.hp-blobs {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n.hpb-blob {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  opacity: 0.45;\n}\n.hpb-blob--1 {\n  width: 500px;\n  height: 500px;\n  top: -180px;\n  right: -60px;\n  background:\n    radial-gradient(\n      circle,\n      #3AABDB,\n      transparent 70%);\n  animation: hpb-m1 18s ease-in-out infinite;\n}\n.hpb-blob--2 {\n  width: 400px;\n  height: 400px;\n  bottom: -140px;\n  left: -80px;\n  background:\n    radial-gradient(\n      circle,\n      #7DC740,\n      transparent 70%);\n  animation: hpb-m2 15s ease-in-out infinite 2s;\n}\n.hpb-blob--3 {\n  width: 280px;\n  height: 280px;\n  top: 30%;\n  left: 5%;\n  background:\n    radial-gradient(\n      circle,\n      #3AABDB,\n      transparent 70%);\n  animation: hpb-m3 20s ease-in-out infinite 4s;\n}\n.hpb-blob--4 {\n  width: 220px;\n  height: 220px;\n  top: 50%;\n  right: 10%;\n  background:\n    radial-gradient(\n      circle,\n      #7DC740,\n      transparent 70%);\n  animation: hpb-m4 16s ease-in-out infinite 6s;\n}\n@keyframes hpb-m1 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n    border-radius: 50%;\n  }\n  33% {\n    transform: translate(40px, 30px) scale(1.1);\n    border-radius: 42% 58% 58% 42%/48% 52% 48% 52%;\n  }\n  66% {\n    transform: translate(-20px, 50px) scale(0.95);\n    border-radius: 55% 45% 45% 55%/52% 48% 52% 48%;\n  }\n}\n@keyframes hpb-m2 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n    border-radius: 50%;\n  }\n  33% {\n    transform: translate(-30px, -40px) scale(1.15);\n    border-radius: 55% 45% 48% 52%/42% 58% 42% 58%;\n  }\n  66% {\n    transform: translate(30px, -20px) scale(0.9);\n    border-radius: 45% 55% 52% 48%/55% 45% 55% 45%;\n  }\n}\n@keyframes hpb-m3 {\n  0%, 100% {\n    transform: translate(0, 0) rotate(0deg) scale(1);\n    border-radius: 50%;\n  }\n  50% {\n    transform: translate(20px, -30px) rotate(180deg) scale(1.2);\n    border-radius: 40% 60% 55% 45%/50% 45% 55% 50%;\n  }\n}\n@keyframes hpb-m4 {\n  0%, 100% {\n    transform: translate(0, 0) rotate(0deg) scale(1);\n    border-radius: 50%;\n  }\n  50% {\n    transform: translate(-25px, 20px) rotate(-180deg) scale(1.1);\n    border-radius: 58% 42% 45% 55%/48% 52% 48% 52%;\n  }\n}\n.hp-grid {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background-image:\n    linear-gradient(rgba(125, 199, 64, 0.015) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(125, 199, 64, 0.015) 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  mask-image:\n    radial-gradient(\n      ellipse at 30% 50%,\n      black 20%,\n      transparent 70%);\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at 30% 50%,\n      black 20%,\n      transparent 70%);\n}\n.hp-arc {\n  position: absolute;\n  pointer-events: none;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.hp-stat {\n  position: absolute;\n  z-index: 3;\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.65);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-radius: 14px;\n  padding: 14px 18px;\n  box-shadow: 0 6px 28px rgba(15, 23, 42, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.5) inset;\n  animation: hp-float 6s ease-in-out infinite alternate;\n  transition: transform 0.08s;\n}\n.hp-stat-icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(125, 199, 64, 0.06);\n  border: 1px solid rgba(125, 199, 64, 0.08);\n}\n.hp-stat-icon svg {\n  width: 18px;\n  height: 18px;\n}\n.hp-stat-body {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.hp-stat-num {\n  font-family: "Outfit", sans-serif;\n  font-size: 1.1rem;\n  font-weight: 900;\n  color: #0F172A;\n  letter-spacing: -0.03em;\n  line-height: 1.1;\n}\n.hp-stat-num-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hp-stat-label {\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 500;\n  color: #4A7A94;\n  letter-spacing: 0.3px;\n  text-transform: uppercase;\n}\n.hp-stat--3 {\n  top: auto;\n  bottom: 18%;\n  left: 6%;\n  animation-duration: 5.5s;\n  animation-delay: -4s;\n  transform: translateX(calc(var(--px, 0.5) * 12px - 6px)) translateY(calc(var(--py, 0.5) * -12px + 6px));\n}\n@keyframes hp-float {\n  from {\n    transform: var(--tf-base, translateX(0) translateY(0)) translateY(0);\n  }\n  to {\n    transform: var(--tf-base, translateX(0) translateY(0)) translateY(-12px);\n  }\n}\n.hp-testimonial {\n  position: absolute;\n  z-index: 3;\n  pointer-events: none;\n  max-width: 280px;\n  background: rgba(255, 255, 255, 0.55);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border-radius: 14px;\n  padding: 14px 18px;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03), 0 0 0 1px rgba(255, 255, 255, 0.4) inset;\n  animation: hp-float 7s ease-in-out infinite alternate;\n  transition: transform 0.08s;\n}\n.hp-testimonial--1 {\n  top: 18%;\n  left: 5%;\n  animation-duration: 6s;\n  animation-delay: 0s;\n}\n.hp-testimonial--2 {\n  top: 18%;\n  right: 5%;\n  animation-duration: 7s;\n  animation-delay: -2.5s;\n}\n.hp-testimonial:not(.hp-testimonial--1):not(.hp-testimonial--2) {\n  top: 66%;\n  right: 6%;\n  left: auto;\n  animation-direction: alternate-reverse;\n}\n.hp-t-quote {\n  width: 18px;\n  height: 18px;\n  margin-bottom: 6px;\n  opacity: 0.3;\n}\n.hp-t-text {\n  margin: 0;\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.78rem;\n  font-style: italic;\n  color: #0F172A;\n  line-height: 1.6;\n  opacity: 0.75;\n}\n.hp-t-author {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n}\n.hp-t-name {\n  font-family: "Outfit", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #0F172A;\n}\n.hp-t-role {\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.62rem;\n  color: #4A7A94;\n  opacity: 0.55;\n}\n.hp-dot {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  animation: hd-float 8s ease-in-out infinite alternate;\n  transition: transform 0.08s;\n  transform: translateX(calc(var(--px, 0.5) * 12px - 6px)) translateY(calc(var(--py, 0.5) * 12px - 6px));\n}\n.hp-dot--1 {\n  width: 7px;\n  height: 7px;\n  background: rgba(125, 199, 64, 0.1);\n  top: 15%;\n  left: 12%;\n}\n.hp-dot--2 {\n  width: 4px;\n  height: 4px;\n  background: rgba(58, 171, 219, 0.12);\n  top: 15%;\n  right: 12%;\n  animation-delay: -1.5s;\n  animation-duration: 6s;\n}\n.hp-dot--3 {\n  width: 9px;\n  height: 9px;\n  background: rgba(125, 199, 64, 0.06);\n  top: 50%;\n  left: 6%;\n  animation-duration: 7s;\n  animation-delay: -3s;\n}\n.hp-dot--4 {\n  width: 5px;\n  height: 5px;\n  background: rgba(58, 171, 219, 0.08);\n  top: 50%;\n  right: 6%;\n  animation-duration: 9s;\n  animation-delay: -5s;\n}\n.hp-dot--5 {\n  width: 3px;\n  height: 3px;\n  background: rgba(125, 199, 64, 0.15);\n  top: 78%;\n  left: 14%;\n  animation-duration: 5s;\n  animation-delay: -2s;\n}\n.hp-dot--6 {\n  width: 6px;\n  height: 6px;\n  background: rgba(58, 171, 219, 0.06);\n  top: 78%;\n  right: 14%;\n  animation-duration: 7.5s;\n  animation-delay: -4s;\n}\n.hp-dot--7 {\n  width: 4px;\n  height: 4px;\n  background: rgba(125, 199, 64, 0.08);\n  top: 88%;\n  left: 44%;\n  animation-duration: 6s;\n  animation-delay: -6s;\n}\n.hp-dot--8 {\n  width: 8px;\n  height: 8px;\n  background: rgba(58, 171, 219, 0.05);\n  top: 22%;\n  left: 56%;\n  animation-duration: 8s;\n  animation-delay: -1s;\n}\n@keyframes hd-float {\n  from {\n    transform: var(--tf-dot, translateX(0) translateY(0)) translateY(0);\n  }\n  to {\n    transform: var(--tf-dot, translateX(0) translateY(0)) translateY(-20px);\n  }\n}\n.hp-brand {\n  position: relative;\n  z-index: 4;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-top: -100px;\n}\n.hp-brand-icon {\n  position: relative;\n  width: 54px;\n  height: 54px;\n  border-radius: 16px;\n  overflow: hidden;\n  margin-bottom: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 6px 24px rgba(125, 199, 64, 0.1), 0 0 0 1px rgba(125, 199, 64, 0.06) inset;\n  background: #ffffff;\n}\n.hp-brand-icon img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  position: relative;\n  z-index: 2;\n}\n.hp-bi-glow {\n  position: absolute;\n  inset: -40%;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(125, 199, 64, 0.15) 0%,\n      transparent 60%);\n  z-index: 0;\n  pointer-events: none;\n  animation: bi-pulse 3s ease-in-out infinite;\n}\n@keyframes bi-pulse {\n  0%, 100% {\n    opacity: 0.5;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.15);\n  }\n}\n.hp-bi-ring {\n  position: absolute;\n  inset: -6px;\n  border-radius: 20px;\n  border: 1.5px solid rgba(125, 199, 64, 0.08);\n  z-index: 1;\n  pointer-events: none;\n  animation: bi-ring 4s ease-in-out infinite;\n}\n@keyframes bi-ring {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n  50% {\n    transform: scale(1.08);\n    opacity: 0.6;\n  }\n}\n.hp-title {\n  margin: 0 0 8px;\n  font-size: 2.2rem;\n  font-weight: 900;\n  letter-spacing: -0.04em;\n  line-height: 1.1;\n}\n.hp-t-light {\n  color: #0F172A;\n}\n.hp-t-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740 0%,\n      #5A9E2A 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hp-desc {\n  margin: 0;\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.92rem;\n  color: #4A7A94;\n  line-height: 1.7;\n}\n.hp-badges {\n  display: flex;\n  gap: 10px;\n  margin-top: 20px;\n  justify-content: center;\n}\n.hp-badge {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 8px;\n  padding: 5px 10px 5px 8px;\n  border: 1px solid rgba(15, 23, 42, 0.03);\n}\n.hp-badge svg {\n  width: 13px;\n  height: 13px;\n  flex-shrink: 0;\n}\n.hp-badge span {\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 600;\n  color: #4A7A94;\n  letter-spacing: 0.2px;\n}\n.form-panel {\n  flex: 2;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 32px 32px 56px;\n  overflow: hidden;\n  animation: fp-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) both 0.15s;\n}\n.fp-blobs {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n.fpb-blob {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  opacity: 0.35;\n}\n.fpb-blob--1 {\n  width: 500px;\n  height: 500px;\n  top: -200px;\n  right: -120px;\n  background:\n    radial-gradient(\n      circle,\n      #3AABDB,\n      transparent 70%);\n  animation: fpb-m1 18s ease-in-out infinite;\n}\n.fpb-blob--2 {\n  width: 400px;\n  height: 400px;\n  bottom: -160px;\n  left: -100px;\n  background:\n    radial-gradient(\n      circle,\n      #7DC740,\n      transparent 70%);\n  animation: fpb-m2 15s ease-in-out infinite 2s;\n}\n.fpb-blob--3 {\n  width: 280px;\n  height: 280px;\n  top: 30%;\n  left: 10%;\n  background:\n    radial-gradient(\n      circle,\n      #3AABDB,\n      transparent 70%);\n  animation: fpb-m3 20s ease-in-out infinite 4s;\n}\n.fpb-blob--4 {\n  width: 200px;\n  height: 200px;\n  bottom: 30%;\n  right: 10%;\n  background:\n    radial-gradient(\n      circle,\n      #7DC740,\n      transparent 70%);\n  animation: fpb-m4 16s ease-in-out infinite 6s;\n}\n@keyframes fpb-m1 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n    border-radius: 50%;\n  }\n  33% {\n    transform: translate(40px, 30px) scale(1.1);\n    border-radius: 42% 58% 58% 42%/48% 52% 48% 52%;\n  }\n  66% {\n    transform: translate(-20px, 50px) scale(0.95);\n    border-radius: 55% 45% 45% 55%/52% 48% 52% 48%;\n  }\n}\n@keyframes fpb-m2 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n    border-radius: 50%;\n  }\n  33% {\n    transform: translate(-30px, -40px) scale(1.15);\n    border-radius: 55% 45% 48% 52%/42% 58% 42% 58%;\n  }\n  66% {\n    transform: translate(30px, -20px) scale(0.9);\n    border-radius: 45% 55% 52% 48%/55% 45% 55% 45%;\n  }\n}\n@keyframes fpb-m3 {\n  0%, 100% {\n    transform: translate(0, 0) rotate(0deg) scale(1);\n    border-radius: 50%;\n  }\n  50% {\n    transform: translate(20px, -30px) rotate(180deg) scale(1.2);\n    border-radius: 40% 60% 55% 45%/50% 45% 55% 50%;\n  }\n}\n@keyframes fpb-m4 {\n  0%, 100% {\n    transform: translate(0, 0) rotate(0deg) scale(1);\n    border-radius: 50%;\n  }\n  50% {\n    transform: translate(-25px, 20px) rotate(-180deg) scale(1.1);\n    border-radius: 58% 42% 45% 55%/48% 52% 48% 52%;\n  }\n}\n@keyframes fp-in {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.login-card {\n  position: relative;\n  width: 100%;\n  max-width: 390px;\n  background: rgba(255, 255, 255, 0.6);\n  backdrop-filter: blur(50px);\n  -webkit-backdrop-filter: blur(50px);\n  border-radius: 28px;\n  padding: 32px 30px 24px;\n  box-shadow: 0 32px 80px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.7) inset;\n  display: flex;\n  flex-direction: column;\n  transform: perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));\n  transition: transform 0.12s ease-out;\n  overflow: hidden;\n}\n.login-card::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 28px;\n  padding: 1.5px;\n  background:\n    conic-gradient(\n      from 0deg at 50% 50%,\n      rgba(125, 199, 64, 0.18),\n      rgba(58, 171, 219, 0.05),\n      rgba(125, 199, 64, 0.06),\n      rgba(58, 171, 219, 0.1),\n      rgba(125, 199, 64, 0.03),\n      transparent 60%,\n      rgba(125, 199, 64, 0.18));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n  pointer-events: none;\n  animation: border-rotate 8s linear infinite;\n}\n.login-card::after {\n  content: "";\n  position: absolute;\n  inset: -4px;\n  border-radius: 32px;\n  background:\n    conic-gradient(\n      from 0deg at 50% 50%,\n      rgba(125, 199, 64, 0.03),\n      transparent 30%,\n      rgba(58, 171, 219, 0.02),\n      transparent 70%,\n      rgba(125, 199, 64, 0.03));\n  z-index: -1;\n  filter: blur(12px);\n  animation: border-rotate 12s linear infinite reverse;\n  pointer-events: none;\n}\n@keyframes border-rotate {\n  to {\n    background:\n      conic-gradient(\n        from 360deg at 50% 50%,\n        rgba(125, 199, 64, 0.18),\n        rgba(58, 171, 219, 0.05),\n        rgba(125, 199, 64, 0.06),\n        rgba(58, 171, 219, 0.1),\n        rgba(125, 199, 64, 0.03),\n        transparent 60%,\n        rgba(125, 199, 64, 0.18));\n  }\n}\n.card-glare {\n  position: absolute;\n  inset: 0;\n  border-radius: 28px;\n  background:\n    radial-gradient(\n      circle at var(--glare-x, 50%) var(--glare-y, 50%),\n      rgba(255, 255, 255, 0.15) 0%,\n      transparent 60%);\n  pointer-events: none;\n  z-index: 1;\n  transition: background 0.08s;\n}\n.card-accent {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(125, 199, 64, 0.06) 15%,\n      #7DC740 50%,\n      rgba(125, 199, 64, 0.06) 85%,\n      transparent 100%);\n  background-size: 200% 100%;\n  border-radius: 28px 28px 0 0;\n  animation: accent-slide 5s ease-in-out infinite;\n  z-index: 2;\n}\n@keyframes accent-slide {\n  0% {\n    background-position: -100% 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: -100% 0;\n  }\n}\n.card-pattern {\n  position: absolute;\n  inset: 0;\n  border-radius: 28px;\n  background-image:\n    radial-gradient(\n      circle at 80% 15%,\n      rgba(125, 199, 64, 0.04) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 20% 85%,\n      rgba(58, 171, 219, 0.04) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 1;\n}\n.card-bubble {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 1;\n  transition: transform 0.15s ease-out;\n}\n.card-bubble--1 {\n  width: 80px;\n  height: 80px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(125, 199, 64, 0.04),\n      transparent);\n  top: -20px;\n  right: -15px;\n  transform: translate(calc(var(--tilt-y, 0deg) * 0.3px), calc(var(--tilt-x, 0deg) * -0.3px));\n}\n.card-bubble--2 {\n  width: 50px;\n  height: 50px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(58, 171, 219, 0.04),\n      transparent);\n  bottom: 40px;\n  left: -10px;\n  transform: translate(calc(var(--tilt-y, 0deg) * -0.2px), calc(var(--tilt-x, 0deg) * 0.2px));\n}\n.card-bubble--3 {\n  width: 30px;\n  height: 30px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(125, 199, 64, 0.05),\n      transparent);\n  bottom: -10px;\n  right: 50px;\n  transform: translate(calc(var(--tilt-y, 0deg) * 0.3px), calc(var(--tilt-x, 0deg) * -0.15px));\n}\n.card-header,\n.card-body,\n.card-footer {\n  position: relative;\n  z-index: 2;\n}\n.card-header--center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 24px;\n}\n.ch-header-row {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  margin-bottom: 8px;\n}\n.ch-icon-back {\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.ch-icon-back:hover {\n  transform: scale(1.05);\n  box-shadow: 0 6px 20px rgba(125, 199, 64, 0.1);\n}\n.ch-icon-wrap {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 199, 64, 0.1),\n      rgba(125, 199, 64, 0.03));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n  border: 1px solid rgba(125, 199, 64, 0.06);\n  box-shadow: 0 4px 12px rgba(125, 199, 64, 0.04);\n}\n.ch-icon-wrap svg {\n  width: 20px;\n  height: 20px;\n}\n.card-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 900;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740 0%,\n      #3AABDB 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: -0.03em;\n  line-height: 1.1;\n}\n.card-sub {\n  margin: 0;\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.82rem;\n  color: #4A7A94;\n  line-height: 1.5;\n  margin-top: 5px;\n}\n.card-body {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.field-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field-label-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.field-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.77rem;\n  font-weight: 700;\n  color: #0F172A;\n  padding-left: 2px;\n}\n.field-label svg {\n  width: 13px;\n  height: 13px;\n  color: #4A7A94;\n  flex-shrink: 0;\n}\n.forgot-link {\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.72rem;\n  color: #4A7A94;\n  text-decoration: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  transition: color 0.2s;\n  position: relative;\n}\n.forgot-link::after {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 0;\n  height: 1px;\n  background: #7DC740;\n  transition: width 0.25s;\n}\n.forgot-link:hover {\n  color: #5A9E2A;\n}\n.forgot-link:hover::after {\n  width: 100%;\n}\n.field-input-wrap {\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.65);\n  border-radius: 12px;\n  border: 1.5px solid rgba(15, 23, 42, 0.04);\n  overflow: hidden;\n  transition:\n    border-color 0.25s,\n    background 0.25s,\n    box-shadow 0.25s;\n}\n.field-input-wrap:focus-within {\n  border-color: #7DC740;\n  background: #fff;\n  box-shadow: 0 0 0 4px rgba(125, 199, 64, 0.08);\n}\n.login-input {\n  flex: 1;\n  --background: transparent;\n  --color: #0F172A;\n  --placeholder-color: #4A7A94;\n  --placeholder-opacity: 0.4;\n  --padding-start: 14px;\n  --padding-end: 12px;\n  --padding-top: 14px;\n  --padding-bottom: 14px;\n  font-family: "Outfit", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 500;\n  min-height: 48px;\n}\n.card-divider {\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(125, 199, 64, 0.07),\n      transparent);\n  margin: 2px 0;\n}\n.btn-accedi {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 15px 26px;\n  border: none;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740 0%,\n      #5A9E2A 100%);\n  color: #fff;\n  font-family: "Outfit", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 800;\n  cursor: pointer;\n  overflow: hidden;\n  box-shadow: 0 8px 24px rgba(125, 199, 64, 0.22);\n  transition: transform 0.25s, box-shadow 0.25s;\n  letter-spacing: 0.2px;\n}\n.btn-accedi span {\n  position: relative;\n  z-index: 1;\n}\n.btn-accedi svg {\n  position: relative;\n  z-index: 1;\n  width: 16px;\n  height: 16px;\n  transition: transform 0.3s;\n}\n.btn-accedi .btn-shimmer {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 60%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.18),\n      transparent);\n  animation: shimmer 3.2s ease-in-out infinite;\n}\n.btn-accedi::before {\n  content: "";\n  position: absolute;\n  inset: -4px;\n  border-radius: 16px;\n  background: inherit;\n  filter: blur(8px);\n  opacity: 0;\n  transition: opacity 0.3s;\n  z-index: -1;\n}\n.btn-accedi:hover {\n  transform: translateY(-3px) scale(1.01);\n  box-shadow: 0 16px 40px rgba(125, 199, 64, 0.32);\n}\n.btn-accedi:hover svg {\n  transform: translateX(5px);\n}\n.btn-accedi:hover::before {\n  opacity: 0.45;\n}\n.btn-accedi:active {\n  transform: scale(0.97);\n  box-shadow: 0 4px 12px rgba(125, 199, 64, 0.2);\n}\n.btn-accedi:disabled {\n  background: rgba(15, 23, 42, 0.08);\n  color: rgba(15, 23, 42, 0.2);\n  cursor: not-allowed;\n  box-shadow: none;\n  transform: none;\n  pointer-events: none;\n}\n.btn-accedi:disabled svg {\n  opacity: 0.2;\n}\n.btn-accedi:disabled .btn-shimmer {\n  display: none;\n}\n.btn-accedi:disabled::before {\n  display: none;\n}\n.btn-accedi:disabled:hover {\n  transform: none;\n  box-shadow: none;\n}\n.btn-accedi:disabled:hover svg {\n  transform: none;\n}\n@keyframes shimmer {\n  0% {\n    left: -100%;\n  }\n  50%, 100% {\n    left: 160%;\n  }\n}\n.card-footer {\n  margin-top: 20px;\n  padding-top: 14px;\n  border-top: 1px solid rgba(15, 23, 42, 0.03);\n}\n.register-link {\n  margin: 0;\n  text-align: center;\n  font-family: "DM Sans", sans-serif;\n  font-size: 0.8rem;\n  color: #4A7A94;\n}\n.register-anchor {\n  color: #7DC740;\n  font-weight: 700;\n  text-decoration: none;\n  margin-left: 4px;\n  position: relative;\n  transition: color 0.2s;\n  cursor: pointer;\n}\n.register-anchor::after {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 0;\n  height: 1.5px;\n  background: #7DC740;\n  transition: width 0.25s;\n}\n.register-anchor:hover {\n  color: #5A9E2A;\n}\n.register-anchor:hover::after {\n  width: 100%;\n}\n.profile-selector {\n  display: flex;\n  gap: 8px;\n}\n.ps-btn {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1.5px solid rgba(15, 23, 42, 0.06);\n  background: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  font-family: "Outfit", sans-serif;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #4A7A94;\n  transition:\n    border-color 0.25s,\n    background 0.25s,\n    color 0.25s,\n    box-shadow 0.25s;\n}\n.ps-btn svg {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.ps-btn:hover {\n  border-color: rgba(125, 199, 64, 0.15);\n  background: rgba(125, 199, 64, 0.03);\n}\n.ps-btn--active {\n  border-color: #7DC740;\n  background: rgba(125, 199, 64, 0.06);\n  color: #5A9E2A;\n  box-shadow: 0 0 0 3px rgba(125, 199, 64, 0.08);\n}\n@media (max-width: 899px) {\n  .hero-panel {\n    display: none;\n  }\n  .form-panel {\n    padding: 20px;\n  }\n  .login-card {\n    max-width: 370px;\n    padding: 26px 24px 22px;\n    border-radius: 24px;\n  }\n  .card-title {\n    font-size: 1.35rem;\n  }\n}\n@media (max-width: 480px) {\n  .form-panel {\n    padding: 16px;\n  }\n  .login-card {\n    max-width: 100%;\n    padding: 22px 18px 18px;\n    border-radius: 20px;\n  }\n  .card-title {\n    font-size: 1.2rem;\n  }\n  .login-input {\n    font-size: 0.84rem;\n    --padding-start: 12px;\n    --padding-end: 10px;\n    --padding-top: 12px;\n    --padding-bottom: 12px;\n    min-height: 44px;\n  }\n  .btn-accedi {\n    padding: 13px 22px;\n    font-size: 0.85rem;\n  }\n  .ch-icon-wrap {\n    width: 36px;\n    height: 36px;\n  }\n  .ch-icon-wrap svg {\n    width: 17px;\n    height: 17px;\n  }\n}\n@media (hover: none) {\n  .login-card {\n    transition: none;\n  }\n  .btn-accedi:hover {\n    transform: none;\n    box-shadow: 0 8px 24px rgba(125, 199, 64, 0.22);\n  }\n  .btn-accedi:hover svg {\n    transform: none;\n  }\n  .btn-accedi:hover::before {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=login.page.css.map */\n'] }]
  }], () => [{ type: AlertController }, { type: DatabaseService }, { type: Router }], { cardRef: [{
    type: ViewChild,
    args: ["tiltCard", { static: false }]
  }], stageRef: [{
    type: ViewChild,
    args: ["stageRef", { static: false }]
  }], onMouseMove: [{
    type: HostListener,
    args: ["mousemove", ["$event"]]
  }], onMouseLeave: [{
    type: HostListener,
    args: ["mouseleave"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "src/app/login/login.page.ts", lineNumber: 23 });
})();
export {
  LoginPage
};
//# sourceMappingURL=login.page-5M7QFEQE.js.map
