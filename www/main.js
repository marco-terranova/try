import {
  bootstrapLazy,
  promiseResolve
} from "./chunk-43KHWY6V.js";
import {
  NavigationHistoryService
} from "./chunk-R5EA4FTC.js";
import {
  IonApp,
  IonRouterOutlet,
  provideIonicAngular
} from "./chunk-VSLPI6WN.js";
import {
  Component,
  IonicRouteStrategy,
  PreloadAllModules,
  RouteReuseStrategy,
  Router,
  bootstrapApplication,
  catchError,
  inject,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  throwError,
  withInterceptors,
  withPreloading,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
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

// src/app/guards/auth.guard.ts
var authGuard = () => {
  const token = localStorage.getItem("token");
  if (token)
    return true;
  inject(Router).navigateByUrl("/login", { replaceUrl: true });
  return false;
};

// src/app/app.routes.ts
var routes = [
  // ── Redirect radice ───────────────────────────────────────────────
  { path: "", redirectTo: "benvenuto", pathMatch: "full" },
  // ── Rotte PUBBLICHE (no guard) ─────────────────────────────────
  {
    path: "benvenuto",
    loadComponent: () => import("./benvenuto.page-2ZAWYSZD.js").then((m) => m.BenvenutoPage)
  },
  {
    path: "login",
    loadComponent: () => import("./login.page-5M7QFEQE.js").then((m) => m.LoginPage)
  },
  {
    path: "not-found",
    loadComponent: () => import("./not-found.page-AEZCCQRG.js").then((m) => m.NotFoundPage)
  },
  // ── Rotte PROTETTE (canActivate: authGuard) ───────────────────
  {
    path: "home",
    canActivate: [authGuard],
    loadComponent: () => import("./home.page-WLVKSAYM.js").then((m) => m.HomePage)
  },
  {
    path: "crea-box",
    canActivate: [authGuard],
    loadComponent: () => import("./crea-box.page-U37FJ6TS.js").then((m) => m.CreaBoxPage)
  },
  {
    path: "dettaglio-box/:id",
    canActivate: [authGuard],
    loadComponent: () => import("./dettaglio-box.page-64UEZTZ4.js").then((m) => m.DettaglioBoxPage)
  },
  {
    path: "search",
    canActivate: [authGuard],
    loadComponent: () => import("./search.page-QMTNQGQ2.js").then((m) => m.SearchPage)
  },
  {
    path: "area-personale",
    canActivate: [authGuard],
    loadComponent: () => import("./area-personale.page-PVQDMSSE.js").then((m) => m.AreaPersonalePage)
  },
  {
    path: "gestione-spazi",
    canActivate: [authGuard],
    loadComponent: () => import("./gestione-spazi.page-PVRACPWK.js").then((m) => m.GestioneSpaziPage)
  },
  {
    path: "box-ricevute",
    canActivate: [authGuard],
    loadComponent: () => import("./box-ricevute.page-E5DPJG3M.js").then((m) => m.BoxRicevutePage)
  },
  {
    path: "tracking-box/:id",
    canActivate: [authGuard],
    loadComponent: () => import("./tracking-box.page-SQC6FLDV.js").then((m) => m.TrackingBoxPage)
  },
  {
    path: "transit-zone",
    canActivate: [authGuard],
    loadComponent: () => import("./transit-zone.page-5ESAJJXO.js").then((m) => m.TransitZonePage)
  },
  {
    path: "geofence-armadio/:id",
    canActivate: [authGuard],
    loadComponent: () => import("./geofence-armadio.page-KBBBMH67.js").then((m) => m.GeofenceArmadioPage)
  },
  {
    path: "admin",
    canActivate: [authGuard],
    loadComponent: () => import("./admin.page-2CRRHOPM.js").then((m) => m.AdminPage)
  },
  {
    path: "scan-qr",
    canActivate: [authGuard],
    loadComponent: () => import("./scan-qr.page-BHP47A53.js").then((m) => m.ScanQrPage)
  },
  {
    path: "cestino",
    canActivate: [authGuard],
    loadComponent: () => import("./cestino.page-GKYZOLMI.js").then((m) => m.CestinoPage)
  },
  {
    path: "informazioni-account",
    canActivate: [authGuard],
    loadComponent: () => import("./informazioni-account.page-2SKEBCZP.js").then((m) => m.InformazioniAccountPage)
  },
  {
    path: "esporta-archivio",
    canActivate: [authGuard],
    loadComponent: () => import("./esporta-archivio.page-EVRY3THJ.js").then((m) => m.EsportaArchivioPage)
  },
  // ── Wildcard 404 — DEVE essere l'ultima voce ─────────────────────
  { path: "**", redirectTo: "not-found" }
];

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  // L'iniezione nel costruttore avvia il tracking della history
  constructor(navHistory) {
    this.navHistory = navHistory;
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(NavigationHistoryService));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-app");
    \u0275\u0275element(1, "ion-router-outlet");
    \u0275\u0275elementEnd();
  }
}, dependencies: [IonApp, IonRouterOutlet], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [IonApp, IonRouterOutlet], template: "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n\r\n" }]
  }], () => [{ type: NavigationHistoryService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 12 });
})();

// src/app/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const token = localStorage.getItem("token");
  const authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
  return next(authReq).pipe(catchError((err) => {
    if (err.status === 401) {
      localStorage.clear();
      inject(Router).navigateByUrl("/login", { replaceUrl: true });
    }
    return throwError(() => err);
  }));
};

// node_modules/@ionic/pwa-elements/dist/esm/loader.js
var patchEsm = () => {
  return promiseResolve();
};
var defineCustomElements = (win, options) => {
  if (typeof window === "undefined") return Promise.resolve();
  return patchEsm().then(() => {
    return bootstrapLazy([["pwa-camera-modal", [[1, "pwa-camera-modal", { "facingMode": [1, "facing-mode"], "hidePicker": [4, "hide-picker"], "present": [64], "dismiss": [64] }]]], ["pwa-action-sheet", [[1, "pwa-action-sheet", { "header": [1], "cancelable": [4], "options": [16], "open": [32] }]]], ["pwa-toast", [[1, "pwa-toast", { "message": [1], "duration": [2], "closing": [32] }]]], ["pwa-camera", [[1, "pwa-camera", { "facingMode": [1, "facing-mode"], "handlePhoto": [16], "hidePicker": [4, "hide-picker"], "handleNoDeviceError": [16], "noDevicesText": [1, "no-devices-text"], "noDevicesButtonText": [1, "no-devices-button-text"], "photo": [32], "photoSrc": [32], "showShutterOverlay": [32], "flashIndex": [32], "hasCamera": [32], "rotation": [32], "deviceError": [32] }]]], ["pwa-camera-modal-instance", [[1, "pwa-camera-modal-instance", { "facingMode": [1, "facing-mode"], "hidePicker": [4, "hide-picker"], "noDevicesText": [1, "no-devices-text"], "noDevicesButtonText": [1, "no-devices-button-text"] }, [[16, "keyup", "handleBackdropKeyUp"]]]]]], options);
  });
};

// src/main.ts
defineCustomElements();
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    // Registra l'interceptor che aggiunge Bearer token e gestisce 401
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes, withPreloading(PreloadAllModules))
  ]
}).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
