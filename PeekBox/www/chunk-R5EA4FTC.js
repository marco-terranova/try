import {
  Injectable,
  NavigationEnd,
  Router,
  filter,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-2AAOITSV.js";

// src/app/services/navigation-history.ts
var _NavigationHistoryService = class _NavigationHistoryService {
  constructor(router) {
    this.router = router;
    this.history = [];
    this.rootRoutes = ["/home", "/search", "/area-personale", "/box-ricevute"];
    this.excludedRoutes = ["/benvenuto", "/login", "/registrazione"];
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const url = event.urlAfterRedirects;
      if (this.excludedRoutes.some((r) => url.startsWith(r))) {
        this.history = [];
        return;
      }
      if (this.history.length > 0 && this.history[this.history.length - 1] === url) {
        return;
      }
      if (this.rootRoutes.some((r) => url === r)) {
        this.history = [url];
        return;
      }
      this.history.push(url);
    });
  }
  /**
   * Naviga a una route principale della navbar usando replaceUrl:true.
   * Questo evita di accumulare voci nella browser history del browser
   * e quindi previene il comportamento errato della freccia indietro del browser.
   */
  navTo(route) {
    this.router.navigateByUrl(route, { replaceUrl: true });
  }
  /** Restituisce true se c'è almeno una pagina precedente a cui tornare */
  canGoBack() {
    return this.history.length > 1;
  }
  /**
   * Torna alla pagina precedente nella history interna.
   * Se non c'è una pagina precedente, naviga al fallback.
   */
  back(fallback = "/home") {
    this.history.pop();
    const previousUrl = this.history.length > 0 ? this.history[this.history.length - 1] : fallback;
    this.router.navigateByUrl(previousUrl, { replaceUrl: true });
  }
  /** Svuota la history (utile al logout) */
  clearHistory() {
    this.history = [];
  }
  getHistory() {
    return [...this.history];
  }
};
_NavigationHistoryService.\u0275fac = function NavigationHistoryService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavigationHistoryService)(\u0275\u0275inject(Router));
};
_NavigationHistoryService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NavigationHistoryService, factory: _NavigationHistoryService.\u0275fac, providedIn: "root" });
var NavigationHistoryService = _NavigationHistoryService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationHistoryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Router }], null);
})();

export {
  NavigationHistoryService
};
//# sourceMappingURL=chunk-R5EA4FTC.js.map
