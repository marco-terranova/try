import {
  addIcons,
  homeOutline
} from "./chunk-4ITIBTO3.js";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar
} from "./chunk-VSLPI6WN.js";
import {
  CommonModule,
  Component,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
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

// src/app/not-found/not-found.page.ts
var _NotFoundPage = class _NotFoundPage {
  constructor(router) {
    this.router = router;
    addIcons({ homeOutline });
  }
  vaiHome() {
    this.router.navigateByUrl("/home", { replaceUrl: true });
  }
};
_NotFoundPage.\u0275fac = function NotFoundPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotFoundPage)(\u0275\u0275directiveInject(Router));
};
_NotFoundPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundPage, selectors: [["app-not-found"]], decls: 20, vars: 0, consts: [[1, "ion-no-border"], [1, "peek-toolbar"], [1, "header-inner"], [1, "header-top"], [1, "header-greet"], ["src", "assets/icon/logoTitolo1.png", "alt", "PeekBox", 1, "header-logo", 2, "cursor", "pointer", 3, "click"], [1, "header-greeting"], [1, "nome-verde"], [1, "nf-root"], [1, "nf-code"], [1, "nf-title"], [1, "nf-sub"], [1, "nf-btn", 3, "click"], ["name", "home-outline"]], template: function NotFoundPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "img", 5);
    \u0275\u0275listener("click", function NotFoundPage_Template_img_click_5_listener() {
      return ctx.vaiHome();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 6)(7, "span", 7);
    \u0275\u0275text(8, "404");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(9, "ion-content")(10, "div", 8)(11, "div", 9);
    \u0275\u0275text(12, "404");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h1", 10);
    \u0275\u0275text(14, "Pagina non trovata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 11);
    \u0275\u0275text(16, "L'indirizzo che hai cercato non esiste nell'app.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 12);
    \u0275\u0275listener("click", function NotFoundPage_Template_button_click_17_listener() {
      return ctx.vaiHome();
    });
    \u0275\u0275element(18, "ion-icon", 13);
    \u0275\u0275text(19, " Torna alla Home ");
    \u0275\u0275elementEnd()()();
  }
}, dependencies: [CommonModule, IonContent, IonHeader, IonIcon, IonToolbar], styles: ['\n\nion-header[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n}\nion-toolbar.peek-toolbar[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\n.header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo[_ngcontent-%COMP%] {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.header-logo[_ngcontent-%COMP%]:active {\n  opacity: 0.55;\n}\n.header-greeting[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\n[_nghost-%COMP%] {\n  display: block;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --overflow: auto;\n}\n.nf-root[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 85vh;\n  gap: 16px;\n  padding: 32px clamp(20px, 3.5vw, 56px);\n  text-align: center;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.nf-code[_ngcontent-%COMP%] {\n  font-size: clamp(4rem, 20vw, 7rem);\n  font-weight: 900;\n  color: #3AABDB;\n  line-height: 1;\n  letter-spacing: -4px;\n  opacity: 0.85;\n}\n.nf-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: #15425C;\n}\n.nf-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.88rem;\n  font-weight: 400;\n  color: #4A7A94;\n  line-height: 1.65;\n  max-width: 300px;\n}\n.nf-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 13px 28px;\n  border: none;\n  border-radius: 50px;\n  background: #3AABDB;\n  color: #FFFFFF;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.92rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 6px 18px rgba(58, 171, 219, 0.3);\n  transition: transform 0.2s, box-shadow 0.2s;\n  margin-top: 8px;\n}\n.nf-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n.nf-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 24px rgba(58, 171, 219, 0.42);\n}\n@media (max-width: 399px) {\n  .nf-root[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n    gap: 12px;\n  }\n  .nf-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .nf-sub[_ngcontent-%COMP%] {\n    font-size: 0.82rem;\n  }\n  .nf-btn[_ngcontent-%COMP%] {\n    padding: 11px 22px;\n    font-size: 0.85rem;\n  }\n}\n@media (min-width: 768px) {\n  .nf-root[_ngcontent-%COMP%] {\n    gap: 20px;\n    padding: 40px 32px;\n  }\n  .nf-title[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .nf-sub[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    max-width: 400px;\n  }\n  .nf-btn[_ngcontent-%COMP%] {\n    padding: 15px 34px;\n    font-size: 1rem;\n  }\n}\n@media (min-width: 1024px) {\n  .nf-root[_ngcontent-%COMP%] {\n    gap: 24px;\n  }\n  .nf-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .nf-sub[_ngcontent-%COMP%] {\n    font-size: 1.05rem;\n    max-width: 480px;\n  }\n}\n/*# sourceMappingURL=not-found.page.css.map */'] });
var NotFoundPage = _NotFoundPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundPage, [{
    type: Component,
    args: [{ selector: "app-not-found", standalone: true, imports: [CommonModule, IonContent, IonHeader, IonIcon, IonToolbar], template: `<ion-header class="ion-no-border">\r
  <ion-toolbar class="peek-toolbar">\r
    <div class="header-inner">\r
      <div class="header-top">\r
        <div class="header-greet">\r
          <img src="assets/icon/logoTitolo1.png" class="header-logo" alt="PeekBox" (click)="vaiHome()" style="cursor: pointer;" />\r
          <h1 class="header-greeting"><span class="nome-verde">404</span></h1>\r
        </div>\r
      </div>\r
    </div>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content>\r
  <div class="nf-root">\r
    <div class="nf-code">404</div>\r
    <h1 class="nf-title">Pagina non trovata</h1>\r
    <p class="nf-sub">L'indirizzo che hai cercato non esiste nell'app.</p>\r
    <button class="nf-btn" (click)="vaiHome()">\r
      <ion-icon name="home-outline"></ion-icon>\r
      Torna alla Home\r
    </button>\r
  </div>\r
</ion-content>\r
`, styles: ['/* src/app/not-found/not-found.page.scss */\nion-header {\n  background: #FFFFFF;\n}\nion-toolbar.peek-toolbar {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\n.header-inner {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo:hover {\n  opacity: 0.75;\n}\n.header-logo:active {\n  opacity: 0.55;\n}\n.header-greeting {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\n:host {\n  display: block;\n}\nion-content {\n  --background: #F4F7F9;\n  --overflow: auto;\n}\n.nf-root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 85vh;\n  gap: 16px;\n  padding: 32px clamp(20px, 3.5vw, 56px);\n  text-align: center;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.nf-code {\n  font-size: clamp(4rem, 20vw, 7rem);\n  font-weight: 900;\n  color: #3AABDB;\n  line-height: 1;\n  letter-spacing: -4px;\n  opacity: 0.85;\n}\n.nf-title {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: #15425C;\n}\n.nf-sub {\n  margin: 0;\n  font-size: 0.88rem;\n  font-weight: 400;\n  color: #4A7A94;\n  line-height: 1.65;\n  max-width: 300px;\n}\n.nf-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 13px 28px;\n  border: none;\n  border-radius: 50px;\n  background: #3AABDB;\n  color: #FFFFFF;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.92rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 6px 18px rgba(58, 171, 219, 0.3);\n  transition: transform 0.2s, box-shadow 0.2s;\n  margin-top: 8px;\n}\n.nf-btn ion-icon {\n  font-size: 1.05rem;\n}\n.nf-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 24px rgba(58, 171, 219, 0.42);\n}\n@media (max-width: 399px) {\n  .nf-root {\n    padding: 24px 16px;\n    gap: 12px;\n  }\n  .nf-title {\n    font-size: 1.1rem;\n  }\n  .nf-sub {\n    font-size: 0.82rem;\n  }\n  .nf-btn {\n    padding: 11px 22px;\n    font-size: 0.85rem;\n  }\n}\n@media (min-width: 768px) {\n  .nf-root {\n    gap: 20px;\n    padding: 40px 32px;\n  }\n  .nf-title {\n    font-size: 1.6rem;\n  }\n  .nf-sub {\n    font-size: 1rem;\n    max-width: 400px;\n  }\n  .nf-btn {\n    padding: 15px 34px;\n    font-size: 1rem;\n  }\n}\n@media (min-width: 1024px) {\n  .nf-root {\n    gap: 24px;\n  }\n  .nf-title {\n    font-size: 1.8rem;\n  }\n  .nf-sub {\n    font-size: 1.05rem;\n    max-width: 480px;\n  }\n}\n/*# sourceMappingURL=not-found.page.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundPage, { className: "NotFoundPage", filePath: "src/app/not-found/not-found.page.ts", lineNumber: 15 });
})();
export {
  NotFoundPage
};
//# sourceMappingURL=not-found.page-AEZCCQRG.js.map
