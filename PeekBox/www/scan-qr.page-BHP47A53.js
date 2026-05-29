import {
  add,
  addIcons,
  alertCircleOutline,
  apertureOutline,
  arrowForwardOutline,
  cameraReverseOutline,
  chatbubblesOutline,
  home,
  homeOutline,
  imageOutline,
  keypadOutline,
  optionsOutline,
  personOutline,
  qrCodeOutline,
  scan,
  searchOutline,
  shieldCheckmarkOutline,
  stopCircleOutline,
  videocamOutline
} from "./chunk-4ITIBTO3.js";
import {
  NavigationHistoryService
} from "./chunk-R5EA4FTC.js";
import {
  IonContent,
  IonIcon
} from "./chunk-VSLPI6WN.js";
import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgIf,
  NgModel,
  Router,
  RouterModule,
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
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

// src/app/scan-qr/scan-qr.page.ts
var _c0 = ["videoEl"];
var _c1 = ["canvasEl"];
function ScanQrPage_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "div", 53);
    \u0275\u0275elementEnd();
  }
}
function ScanQrPage_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "ion-icon", 55);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "La fotocamera \xE8 spenta");
    \u0275\u0275elementEnd()();
  }
}
function ScanQrPage_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "ion-icon", 57);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.cameraError);
  }
}
var _ScanQrPage = class _ScanQrPage {
  constructor(router, navHistory) {
    this.router = router;
    this.navHistory = navHistory;
    this.isScanning = false;
    this.manualCode = "";
    this.cameraError = null;
    this.nomeUtente = "";
    this.stream = null;
    this.animFrameId = null;
    addIcons({
      add,
      alertCircleOutline,
      apertureOutline,
      arrowForwardOutline,
      cameraReverseOutline,
      chatbubblesOutline,
      home,
      homeOutline,
      imageOutline,
      keypadOutline,
      optionsOutline,
      personOutline,
      qrCodeOutline,
      scan,
      searchOutline,
      shieldCheckmarkOutline,
      stopCircleOutline,
      videocamOutline
    });
  }
  ngOnInit() {
    this.loadJsQR();
  }
  ionViewWillEnter() {
    this.nomeUtente = (localStorage.getItem("utente_nome") || "").toUpperCase();
  }
  ngOnDestroy() {
    this.stopScanning();
  }
  loadJsQR() {
    if (window.jsQR)
      return;
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js";
    document.head.appendChild(script);
  }
  toggleCamera() {
    if (this.isScanning) {
      this.stopScanning();
    } else {
      this.startScanning();
    }
  }
  startScanning() {
    return __async(this, null, function* () {
      this.cameraError = null;
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        this.cameraError = "Il tuo browser non supporta la fotocamera.";
        return;
      }
      try {
        this.stream = yield navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false
        });
      } catch (err) {
        if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
          this.cameraError = "Accesso alla fotocamera negato. Abilita il permesso nelle impostazioni del browser.";
        } else if (err.name === "NotFoundError") {
          this.cameraError = "Nessuna fotocamera trovata sul dispositivo.";
        } else {
          this.cameraError = "Impossibile avviare la fotocamera: " + err.message;
        }
        return;
      }
      this.isScanning = true;
      setTimeout(() => {
        const video = this.videoElRef?.nativeElement;
        if (video) {
          video.srcObject = this.stream;
          video.play();
          this.scheduleQrTick();
        }
      }, 50);
    });
  }
  stopScanning() {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (this.stream) {
      this.stream.getTracks().forEach((t) => t.stop());
      this.stream = null;
    }
    const video = this.videoElRef?.nativeElement;
    if (video) {
      video.srcObject = null;
    }
    this.isScanning = false;
  }
  scheduleQrTick() {
    this.animFrameId = requestAnimationFrame(() => this.qrTick());
  }
  extractBoxId(input) {
    const trimmed = input.trim();
    if (trimmed.includes("?") && trimmed.includes("box=")) {
      try {
        const urlParams = new URLSearchParams(trimmed.substring(trimmed.indexOf("?")));
        const boxParam = urlParams.get("box");
        if (boxParam) {
          return boxParam;
        }
      } catch (e) {
        console.error("Error parsing scanned URL:", e);
      }
    }
    return trimmed;
  }
  qrTick() {
    const video = this.videoElRef?.nativeElement;
    const canvas = this.canvasElRef?.nativeElement;
    if (!video || !canvas || !this.isScanning)
      return;
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      const ctx = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const jsQRFn = window.jsQR;
      if (jsQRFn) {
        const code = jsQRFn(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert"
        });
        if (code?.data) {
          this.stopScanning();
          const boxId = this.extractBoxId(code.data);
          this.router.navigate(["/dettaglio-box", boxId.toUpperCase()]);
          return;
        }
      }
    }
    if (this.isScanning)
      this.scheduleQrTick();
  }
  openGallery() {
  }
  submitManualCode() {
    const code = this.manualCode.trim();
    if (!code)
      return;
    const boxId = this.extractBoxId(code);
    this.router.navigate(["/dettaglio-box", boxId.toUpperCase()]);
  }
  navTo(route) {
    this.navHistory.navTo(route);
  }
};
_ScanQrPage.\u0275fac = function ScanQrPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScanQrPage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NavigationHistoryService));
};
_ScanQrPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScanQrPage, selectors: [["app-scan-qr"]], viewQuery: function ScanQrPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
    \u0275\u0275viewQuery(_c1, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.videoElRef = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasElRef = _t.first);
  }
}, decls: 78, vars: 13, consts: [["videoEl", ""], ["canvasEl", ""], [1, "bg-light-saas", 3, "fullscreen"], [1, "page-wrapper"], [1, "top-compact-bar"], [1, "logo-group"], ["src", "assets/icon/logoTitolo1.png", "alt", "PeekBox", 1, "header-logo", 2, "cursor", "pointer", 3, "click"], [1, "title-group"], [1, "header-greeting"], [1, "nome-verde"], [1, "profile-compact"], [1, "avatar-compact"], ["name", "qr-code-outline"], [1, "scan-plancia-grid"], [1, "quadrante-card", "viewport-card"], [1, "quadrante-header"], [1, "icon-cerchio", "verde"], ["name", "aperture-outline"], [1, "camera-preview-container"], ["autoplay", "", "playsinline", "", "muted", "", 1, "camera-video-stream"], [1, "hidden"], ["class", "scanner-target-box", 4, "ngIf"], ["class", "camera-off-placeholder", 4, "ngIf"], ["class", "camera-error-placeholder", 4, "ngIf"], [1, "btn-fotocamera-toggle", 3, "click"], [3, "name"], [1, "quadrante-card", "controls-card"], [1, "icon-cerchio", "azzurro"], ["name", "options-outline"], [1, "utility-actions-layout"], [1, "quick-tools-row"], [1, "tool-btn-premium", 3, "click"], ["name", "image-outline"], [1, "manual-input-section"], [1, "section-mini-title"], [1, "custom-input-group-premium"], ["name", "keypad-outline", 1, "prefix-icon"], ["type", "text", "placeholder", "Codice Box (es. PBX-9812)", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-submit-code-green", 3, "click", "disabled"], ["name", "arrow-forward-outline"], [1, "info-footer-box"], ["name", "shield-checkmark-outline", 1, "color-green"], [1, "floating-nav"], [1, "nav-glow"], [1, "nav-item", 3, "click"], ["name", "home"], ["name", "chatbubbles-outline"], [1, "nav-fab-wrapper"], [1, "nav-fab", 3, "click"], ["name", "add"], [1, "nav-item", "active"], [1, "avatar-circle-nav"], [1, "scanner-target-box"], [1, "laser-line-anim"], [1, "camera-off-placeholder"], ["name", "camera-reverse-outline"], [1, "camera-error-placeholder"], ["name", "alert-circle-outline"]], template: function ScanQrPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "img", 6);
    \u0275\u0275listener("click", function ScanQrPage_Template_img_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.navTo("/home"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7)(6, "h1", 8);
    \u0275\u0275text(7, "SCANSIONE ");
    \u0275\u0275elementStart(8, "span", 9);
    \u0275\u0275text(9, "RAPIDA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 10)(11, "div", 11);
    \u0275\u0275element(12, "ion-icon", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14)(15, "div", 15)(16, "div", 16);
    \u0275\u0275element(17, "ion-icon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h3");
    \u0275\u0275text(19, "Inquadra il QR Code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 18);
    \u0275\u0275element(21, "video", 19, 0)(23, "canvas", 20, 1);
    \u0275\u0275template(25, ScanQrPage_div_25_Template, 2, 0, "div", 21)(26, ScanQrPage_div_26_Template, 4, 0, "div", 22)(27, ScanQrPage_div_27_Template, 4, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 24);
    \u0275\u0275listener("click", function ScanQrPage_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleCamera());
    });
    \u0275\u0275element(29, "ion-icon", 25);
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 26)(33, "div", 15)(34, "div", 27);
    \u0275\u0275element(35, "ion-icon", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "h3");
    \u0275\u0275text(37, "Opzioni Alternative");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 29)(39, "div", 30)(40, "button", 31);
    \u0275\u0275listener("click", function ScanQrPage_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openGallery());
    });
    \u0275\u0275element(41, "ion-icon", 32);
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43, "Galleria");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 33)(45, "label", 34);
    \u0275\u0275text(46, "Inserimento Manuale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 35);
    \u0275\u0275element(48, "ion-icon", 36);
    \u0275\u0275elementStart(49, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ScanQrPage_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.manualCode, $event) || (ctx.manualCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function ScanQrPage_Template_input_keyup_enter_49_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.submitManualCode());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 38);
    \u0275\u0275listener("click", function ScanQrPage_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.submitManualCode());
    });
    \u0275\u0275element(51, "ion-icon", 39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 40);
    \u0275\u0275element(53, "ion-icon", 41);
    \u0275\u0275elementStart(54, "p");
    \u0275\u0275text(55, "Sincronizzazione cifrata e istantanea con l'inventario database di PeekBox.");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(56, "div", 42);
    \u0275\u0275element(57, "div", 43);
    \u0275\u0275elementStart(58, "div", 44);
    \u0275\u0275listener("click", function ScanQrPage_Template_div_click_58_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.navTo("/home"));
    });
    \u0275\u0275element(59, "ion-icon", 45);
    \u0275\u0275elementStart(60, "span");
    \u0275\u0275text(61, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 44);
    \u0275\u0275listener("click", function ScanQrPage_Template_div_click_62_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.navTo("/box-ricevute"));
    });
    \u0275\u0275element(63, "ion-icon", 46);
    \u0275\u0275elementStart(64, "span");
    \u0275\u0275text(65, "Avvisi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 47)(67, "button", 48);
    \u0275\u0275listener("click", function ScanQrPage_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.navTo("/crea-box"));
    });
    \u0275\u0275element(68, "ion-icon", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 50);
    \u0275\u0275element(70, "ion-icon", 12);
    \u0275\u0275elementStart(71, "span");
    \u0275\u0275text(72, "Scan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 44);
    \u0275\u0275listener("click", function ScanQrPage_Template_div_click_73_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.navTo("/area-personale"));
    });
    \u0275\u0275elementStart(74, "div", 51);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span");
    \u0275\u0275text(77, "Profilo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(21);
    \u0275\u0275classProp("hidden", !ctx.isScanning);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.isScanning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isScanning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.cameraError);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx.isScanning);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx.isScanning ? "stop-circle-outline" : "videocam-outline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.isScanning ? "Spegni Fotocamera" : "Accendi Fotocamera");
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx.manualCode);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx.manualCode);
    \u0275\u0275advance(25);
    \u0275\u0275textInterpolate1(" ", ctx.nomeUtente ? ctx.nomeUtente.charAt(0).toUpperCase() : "U", " ");
  }
}, dependencies: [
  CommonModule,
  NgIf,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  RouterModule,
  IonContent,
  IonIcon
], styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.ion-page[_ngcontent-%COMP%] {\n  contain: layout !important;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --padding-bottom: 110px;\n}\n.bg-light-saas[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  padding: 16px clamp(20px, 3.5vw, 56px) 24px;\n  width: 100%;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n}\n.top-compact-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 0 10px;\n  gap: 10px;\n  width: 100%;\n}\n.logo-group[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n  height: 32px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.logo-group[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.logo-group[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]:active {\n  opacity: 0.55;\n}\n.title-group[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n}\n.header-greeting[_ngcontent-%COMP%] {\n  font-family:\n    "Poppins",\n    "Montserrat",\n    sans-serif !important;\n  font-weight: 800 !important;\n  font-size: 1.15rem !important;\n  color: #0F172A !important;\n  letter-spacing: 0.5px !important;\n  margin: 0 !important;\n  line-height: 1 !important;\n}\n.nome-verde[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A) !important;\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent !important;\n  background-clip: text !important;\n  font-weight: 900 !important;\n  text-shadow: 0px 4px 10px rgba(125, 199, 64, 0.3);\n}\n.profile-compact[_ngcontent-%COMP%]   .avatar-compact[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.12);\n  color: #3AABDB;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid rgba(58, 171, 219, 0.25);\n}\n.profile-compact[_ngcontent-%COMP%]   .avatar-compact[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.scan-plancia-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 6px;\n  padding: 0;\n}\n@media (min-width: 700px) {\n  .scan-plancia-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.quadrante-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 24px;\n  padding: 11px;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);\n  border: 1px solid rgba(58, 171, 219, 0.12);\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  aspect-ratio: 1;\n}\n.quadrante-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.quadrante-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 0;\n}\n.icon-cerchio[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.icon-cerchio[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n.icon-cerchio.verde[_ngcontent-%COMP%] {\n  background: rgba(125, 199, 64, 0.12);\n  color: #7DC740;\n}\n.icon-cerchio.azzurro[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.12);\n  color: #3AABDB;\n}\n.camera-preview-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: 16px;\n  overflow: hidden;\n  background: #0F172A;\n  border: 1px solid rgba(58, 171, 219, 0.12);\n  max-height: 70vh;\n  padding: 2px;\n}\n.camera-video-stream[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.camera-video-stream.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.scanner-target-box[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n}\n.scanner-target-box[_ngcontent-%COMP%]   .laser-line-anim[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 60%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #7DC740,\n      transparent);\n  border-radius: 2px;\n  animation: _ngcontent-%COMP%_laserScan 2s ease-in-out infinite;\n  box-shadow: 0 0 8px rgba(125, 199, 64, 0.6);\n}\n@keyframes _ngcontent-%COMP%_laserScan {\n  0% {\n    top: 20%;\n  }\n  50% {\n    top: 78%;\n  }\n  100% {\n    top: 20%;\n  }\n}\n.camera-off-placeholder[_ngcontent-%COMP%], \n.camera-error-placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.camera-off-placeholder[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], \n.camera-error-placeholder[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.camera-off-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.camera-error-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  text-align: center;\n  max-width: 80%;\n  margin: 0;\n}\n.camera-error-placeholder[_ngcontent-%COMP%] {\n  color: rgba(239, 68, 68, 0.8);\n}\n.btn-fotocamera-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 12px;\n  border-radius: 14px;\n  border: none;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 700;\n  cursor: pointer;\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n  transition: all 0.2s;\n}\n.btn-fotocamera-toggle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.btn-fotocamera-toggle.active[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  color: #EF4444;\n}\n.btn-fotocamera-toggle[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.95);\n}\n.btn-fotocamera-toggle[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.utility-actions-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.quick-tools-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.tool-btn-premium[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border-radius: 12px;\n  border: none;\n  background: rgba(58, 171, 219, 0.08);\n  color: #3AABDB;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tool-btn-premium[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.tool-btn-premium[_ngcontent-%COMP%]:hover {\n  background: #3AABDB;\n  color: #fff;\n}\n.tool-btn-premium[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.manual-input-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.section-mini-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #4A7A94;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.custom-input-group-premium[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: rgba(58, 171, 219, 0.04);\n  border: 1px solid rgba(58, 171, 219, 0.12);\n  border-radius: 12px;\n  padding: 4px 4px 4px 12px;\n  gap: 8px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.custom-input-group-premium[_ngcontent-%COMP%]:focus-within {\n  border-color: #3AABDB;\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.08);\n}\n.custom-input-group-premium[_ngcontent-%COMP%]   .prefix-icon[_ngcontent-%COMP%] {\n  color: #4A7A94;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.custom-input-group-premium[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  color: #0F172A;\n  padding: 8px 0;\n}\n.custom-input-group-premium[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(74, 122, 148, 0.7);\n}\n.custom-input-group-premium[_ngcontent-%COMP%]   .btn-submit-code-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #A8FF78,\n      #7DC740);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: all 0.2s;\n}\n.custom-input-group-premium[_ngcontent-%COMP%]   .btn-submit-code-green[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.custom-input-group-premium[_ngcontent-%COMP%]   .btn-submit-code-green[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.custom-input-group-premium[_ngcontent-%COMP%]   .btn-submit-code-green[_ngcontent-%COMP%]:not(:disabled):hover {\n  transform: scale(1.08);\n}\n.custom-input-group-premium[_ngcontent-%COMP%]   .btn-submit-code-green[_ngcontent-%COMP%]:not(:disabled):active {\n  transform: scale(0.94);\n}\n.info-footer-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 12px 14px;\n  background: rgba(125, 199, 64, 0.06);\n  border-radius: 12px;\n  border: 1px solid rgba(125, 199, 64, 0.12);\n}\n.info-footer-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.info-footer-box[_ngcontent-%COMP%]   .color-green[_ngcontent-%COMP%] {\n  color: #7DC740;\n}\n.info-footer-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.75rem;\n  color: #4A7A94;\n  margin: 0;\n  line-height: 1.45;\n}\n.floating-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 18px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: calc(100% - 32px);\n  max-width: 520px;\n  height: 66px;\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border-radius: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.95);\n  box-shadow: 0 8px 32px rgba(58, 171, 219, 0.13), 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 8px;\n  z-index: 1000;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 55%;\n  height: 22px;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(58, 171, 219, 0.22),\n      transparent 70%);\n  pointer-events: none;\n  z-index: -1;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 18px;\n  transition: background 0.2s;\n  text-decoration: none;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  color: #3AABDB;\n  transition: color 0.2s;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #3AABDB;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #0284C7;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0284C7;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:not(.active):hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -26px;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  border: none !important;\n  background:\n    linear-gradient(\n      135deg,\n      #A8FF78,\n      #7DC740) !important;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 25px rgba(125, 199, 64, 0.4) !important;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  color: #ffffff !important;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) translateY(-3px);\n  box-shadow: 0 15px 30px rgba(125, 199, 64, 0.5) !important;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-fab-wrapper[_ngcontent-%COMP%]   .nav-fab[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.floating-nav[_ngcontent-%COMP%]   .avatar-circle-nav[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.12);\n  color: #3AABDB;\n  font-size: 0.8rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid rgba(58, 171, 219, 0.4);\n  transition: all 0.2s;\n}\n.floating-nav[_ngcontent-%COMP%]   .avatar-circle-nav.active[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.18);\n  color: #0284C7;\n  border-color: #0284C7;\n  box-shadow: 0 2px 8px rgba(58, 171, 219, 0.3);\n}\n/*# sourceMappingURL=scan-qr.page.css.map */'] });
var ScanQrPage = _ScanQrPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScanQrPage, [{
    type: Component,
    args: [{ selector: "app-scan-qr", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      IonContent,
      IonIcon
    ], template: `<ion-content [fullscreen]="true" class="bg-light-saas">
  <div class="page-wrapper">

    <div class="top-compact-bar">
      <div class="logo-group">
        <img
          src="assets/icon/logoTitolo1.png"
          alt="PeekBox"
          class="header-logo"
          (click)="navTo('/home')"
          style="cursor: pointer;"
        />
      </div>
      <div class="title-group">
        <h1 class="header-greeting">SCANSIONE <span class="nome-verde">RAPIDA</span></h1>
      </div>
      <div class="profile-compact">
        <div class="avatar-compact">
          <ion-icon name="qr-code-outline"></ion-icon>
        </div>
      </div>
    </div>

    <div class="scan-plancia-grid">

      <div class="quadrante-card viewport-card">
        <div class="quadrante-header">
          <div class="icon-cerchio verde">
            <ion-icon name="aperture-outline"></ion-icon>
          </div>
          <h3>Inquadra il QR Code</h3>
        </div>

        <div class="camera-preview-container">
          <!-- Video stream reale -->
          <video #videoEl autoplay playsinline muted
            class="camera-video-stream"
            [class.hidden]="!isScanning"></video>

          <!-- Canvas nascosto usato da jsQR per decodificare -->
          <canvas #canvasEl class="hidden"></canvas>

          <!-- Mirino animato sopra il video -->
          <div class="scanner-target-box" *ngIf="isScanning">
            <div class="laser-line-anim"></div>
          </div>

          <!-- Placeholder fotocamera spenta -->
          <div class="camera-off-placeholder" *ngIf="!isScanning">
            <ion-icon name="camera-reverse-outline"></ion-icon>
            <p>La fotocamera \xE8 spenta</p>
          </div>

          <!-- Errore permesso -->
          <div class="camera-error-placeholder" *ngIf="cameraError">
            <ion-icon name="alert-circle-outline"></ion-icon>
            <p>{{ cameraError }}</p>
          </div>
        </div>

        <button class="btn-fotocamera-toggle" [class.active]="isScanning" (click)="toggleCamera()">
          <ion-icon [name]="isScanning ? 'stop-circle-outline' : 'videocam-outline'"></ion-icon>
          <span>{{ isScanning ? 'Spegni Fotocamera' : 'Accendi Fotocamera' }}</span>
        </button>
      </div>

      <div class="quadrante-card controls-card">
        <div class="quadrante-header">
          <div class="icon-cerchio azzurro">
            <ion-icon name="options-outline"></ion-icon>
          </div>
          <h3>Opzioni Alternative</h3>
        </div>

        <div class="utility-actions-layout">
          <div class="quick-tools-row">
            <button class="tool-btn-premium" (click)="openGallery()">
              <ion-icon name="image-outline"></ion-icon>
              <span>Galleria</span>
            </button>
          </div>

          <div class="manual-input-section">
            <label class="section-mini-title">Inserimento Manuale</label>
            <div class="custom-input-group-premium">
              <ion-icon name="keypad-outline" class="prefix-icon"></ion-icon>
              <input type="text" placeholder="Codice Box (es. PBX-9812)" [(ngModel)]="manualCode" (keyup.enter)="submitManualCode()">
              <button class="btn-submit-code-green" (click)="submitManualCode()" [disabled]="!manualCode">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>

        <div class="info-footer-box">
          <ion-icon name="shield-checkmark-outline" class="color-green"></ion-icon>
          <p>Sincronizzazione cifrata e istantanea con l'inventario database di PeekBox.</p>
        </div>
      </div>

    </div>
  </div>
</ion-content>

<div class="floating-nav">
  <div class="nav-glow"></div>

  <div class="nav-item" (click)="navTo('/home')">
    <ion-icon name="home"></ion-icon>
    <span>Home</span>
  </div>

  <div class="nav-item" (click)="navTo('/box-ricevute')">
    <ion-icon name="chatbubbles-outline"></ion-icon>
    <span>Avvisi</span>
  </div>

  <div class="nav-fab-wrapper">
    <button class="nav-fab" (click)="navTo('/crea-box')">
      <ion-icon name="add"></ion-icon>
    </button>
  </div>

  <div class="nav-item active">
    <ion-icon name="qr-code-outline"></ion-icon>
    <span>Scan</span>
  </div>

  <div class="nav-item" (click)="navTo('/area-personale')">
    <div class="avatar-circle-nav">
      {{ nomeUtente ? nomeUtente.charAt(0).toUpperCase() : 'U' }}
    </div>
    <span>Profilo</span>
  </div>
</div>
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&display=swap";\n\n/* src/app/scan-qr/scan-qr.page.scss */\n:host {\n  display: block;\n}\n.ion-page {\n  contain: layout !important;\n}\nion-content {\n  --background: #F4F7F9;\n  --padding-bottom: 110px;\n}\n.bg-light-saas {\n  --background: #F4F7F9;\n}\n.page-wrapper {\n  padding: 16px clamp(20px, 3.5vw, 56px) 24px;\n  width: 100%;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n}\n.top-compact-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 0 10px;\n  gap: 10px;\n  width: 100%;\n}\n.logo-group .header-logo {\n  height: 32px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.logo-group .header-logo:hover {\n  opacity: 0.75;\n}\n.logo-group .header-logo:active {\n  opacity: 0.55;\n}\n.title-group {\n  flex: 1;\n  text-align: left;\n}\n.header-greeting {\n  font-family:\n    "Poppins",\n    "Montserrat",\n    sans-serif !important;\n  font-weight: 800 !important;\n  font-size: 1.15rem !important;\n  color: #0F172A !important;\n  letter-spacing: 0.5px !important;\n  margin: 0 !important;\n  line-height: 1 !important;\n}\n.nome-verde {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A) !important;\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent !important;\n  background-clip: text !important;\n  font-weight: 900 !important;\n  text-shadow: 0px 4px 10px rgba(125, 199, 64, 0.3);\n}\n.profile-compact .avatar-compact {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.12);\n  color: #3AABDB;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid rgba(58, 171, 219, 0.25);\n}\n.profile-compact .avatar-compact ion-icon {\n  font-size: 1.1rem;\n}\n.scan-plancia-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 6px;\n  padding: 0;\n}\n@media (min-width: 700px) {\n  .scan-plancia-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.quadrante-card {\n  background: #FFFFFF;\n  border-radius: 24px;\n  padding: 11px;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);\n  border: 1px solid rgba(58, 171, 219, 0.12);\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  aspect-ratio: 1;\n}\n.quadrante-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.quadrante-header h3 {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 0;\n}\n.icon-cerchio {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.icon-cerchio ion-icon {\n  font-size: 1.15rem;\n}\n.icon-cerchio.verde {\n  background: rgba(125, 199, 64, 0.12);\n  color: #7DC740;\n}\n.icon-cerchio.azzurro {\n  background: rgba(58, 171, 219, 0.12);\n  color: #3AABDB;\n}\n.camera-preview-container {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: 16px;\n  overflow: hidden;\n  background: #0F172A;\n  border: 1px solid rgba(58, 171, 219, 0.12);\n  max-height: 70vh;\n  padding: 2px;\n}\n.camera-video-stream {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.camera-video-stream.hidden {\n  display: none;\n}\n.hidden {\n  display: none !important;\n}\n.scanner-target-box {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n}\n.scanner-target-box .laser-line-anim {\n  position: absolute;\n  width: 60%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #7DC740,\n      transparent);\n  border-radius: 2px;\n  animation: laserScan 2s ease-in-out infinite;\n  box-shadow: 0 0 8px rgba(125, 199, 64, 0.6);\n}\n@keyframes laserScan {\n  0% {\n    top: 20%;\n  }\n  50% {\n    top: 78%;\n  }\n  100% {\n    top: 20%;\n  }\n}\n.camera-off-placeholder,\n.camera-error-placeholder {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.camera-off-placeholder ion-icon,\n.camera-error-placeholder ion-icon {\n  font-size: 2.5rem;\n}\n.camera-off-placeholder p,\n.camera-error-placeholder p {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  text-align: center;\n  max-width: 80%;\n  margin: 0;\n}\n.camera-error-placeholder {\n  color: rgba(239, 68, 68, 0.8);\n}\n.btn-fotocamera-toggle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 12px;\n  border-radius: 14px;\n  border: none;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 700;\n  cursor: pointer;\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n  transition: all 0.2s;\n}\n.btn-fotocamera-toggle ion-icon {\n  font-size: 1.2rem;\n}\n.btn-fotocamera-toggle.active {\n  background: rgba(239, 68, 68, 0.08);\n  color: #EF4444;\n}\n.btn-fotocamera-toggle:hover {\n  filter: brightness(0.95);\n}\n.btn-fotocamera-toggle:active {\n  transform: scale(0.97);\n}\n.utility-actions-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.quick-tools-row {\n  display: flex;\n  gap: 10px;\n}\n.tool-btn-premium {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border-radius: 12px;\n  border: none;\n  background: rgba(58, 171, 219, 0.08);\n  color: #3AABDB;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tool-btn-premium ion-icon {\n  font-size: 1rem;\n}\n.tool-btn-premium:hover {\n  background: #3AABDB;\n  color: #fff;\n}\n.tool-btn-premium:active {\n  transform: scale(0.96);\n}\n.manual-input-section {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.section-mini-title {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #4A7A94;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.custom-input-group-premium {\n  display: flex;\n  align-items: center;\n  background: rgba(58, 171, 219, 0.04);\n  border: 1px solid rgba(58, 171, 219, 0.12);\n  border-radius: 12px;\n  padding: 4px 4px 4px 12px;\n  gap: 8px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.custom-input-group-premium:focus-within {\n  border-color: #3AABDB;\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.08);\n}\n.custom-input-group-premium .prefix-icon {\n  color: #4A7A94;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.custom-input-group-premium input {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  color: #0F172A;\n  padding: 8px 0;\n}\n.custom-input-group-premium input::placeholder {\n  color: rgba(74, 122, 148, 0.7);\n}\n.custom-input-group-premium .btn-submit-code-green {\n  background:\n    linear-gradient(\n      135deg,\n      #A8FF78,\n      #7DC740);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: all 0.2s;\n}\n.custom-input-group-premium .btn-submit-code-green ion-icon {\n  font-size: 1.1rem;\n}\n.custom-input-group-premium .btn-submit-code-green:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.custom-input-group-premium .btn-submit-code-green:not(:disabled):hover {\n  transform: scale(1.08);\n}\n.custom-input-group-premium .btn-submit-code-green:not(:disabled):active {\n  transform: scale(0.94);\n}\n.info-footer-box {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 12px 14px;\n  background: rgba(125, 199, 64, 0.06);\n  border-radius: 12px;\n  border: 1px solid rgba(125, 199, 64, 0.12);\n}\n.info-footer-box ion-icon {\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.info-footer-box .color-green {\n  color: #7DC740;\n}\n.info-footer-box p {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.75rem;\n  color: #4A7A94;\n  margin: 0;\n  line-height: 1.45;\n}\n.floating-nav {\n  position: fixed;\n  bottom: 18px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: calc(100% - 32px);\n  max-width: 520px;\n  height: 66px;\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border-radius: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.95);\n  box-shadow: 0 8px 32px rgba(58, 171, 219, 0.13), 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 8px;\n  z-index: 1000;\n}\n.floating-nav .nav-glow {\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 55%;\n  height: 22px;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(58, 171, 219, 0.22),\n      transparent 70%);\n  pointer-events: none;\n  z-index: -1;\n}\n.floating-nav .nav-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 18px;\n  transition: background 0.2s;\n  text-decoration: none;\n}\n.floating-nav .nav-item ion-icon {\n  font-size: 1.35rem;\n  color: #3AABDB;\n  transition: color 0.2s;\n}\n.floating-nav .nav-item span {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #3AABDB;\n}\n.floating-nav .nav-item.active ion-icon {\n  color: #0284C7;\n}\n.floating-nav .nav-item.active span {\n  color: #0284C7;\n}\n.floating-nav .nav-item:not(.active):hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.floating-nav .nav-fab-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -26px;\n}\n.floating-nav .nav-fab-wrapper .nav-fab {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  border: none !important;\n  background:\n    linear-gradient(\n      135deg,\n      #A8FF78,\n      #7DC740) !important;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 25px rgba(125, 199, 64, 0.4) !important;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.floating-nav .nav-fab-wrapper .nav-fab ion-icon {\n  font-size: 1.7rem;\n  color: #ffffff !important;\n}\n.floating-nav .nav-fab-wrapper .nav-fab:hover {\n  transform: scale(1.1) translateY(-3px);\n  box-shadow: 0 15px 30px rgba(125, 199, 64, 0.5) !important;\n}\n.floating-nav .nav-fab-wrapper .nav-fab:active {\n  transform: scale(0.95);\n}\n.floating-nav .avatar-circle-nav {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(58, 171, 219, 0.12);\n  color: #3AABDB;\n  font-size: 0.8rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid rgba(58, 171, 219, 0.4);\n  transition: all 0.2s;\n}\n.floating-nav .avatar-circle-nav.active {\n  background: rgba(58, 171, 219, 0.18);\n  color: #0284C7;\n  border-color: #0284C7;\n  box-shadow: 0 2px 8px rgba(58, 171, 219, 0.3);\n}\n/*# sourceMappingURL=scan-qr.page.css.map */\n'] }]
  }], () => [{ type: Router }, { type: NavigationHistoryService }], { videoElRef: [{
    type: ViewChild,
    args: ["videoEl"]
  }], canvasElRef: [{
    type: ViewChild,
    args: ["canvasEl"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScanQrPage, { className: "ScanQrPage", filePath: "src/app/scan-qr/scan-qr.page.ts", lineNumber: 47 });
})();
export {
  ScanQrPage
};
//# sourceMappingURL=scan-qr.page-BHP47A53.js.map
