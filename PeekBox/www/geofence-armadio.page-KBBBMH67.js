import {
  require_leaflet_src
} from "./chunk-2C5JWALM.js";
import {
  GpsService
} from "./chunk-5B5KTTKB.js";
import {
  DatabaseService
} from "./chunk-5G3PJOGU.js";
import {
  addIcons,
  arrowForwardOutline,
  closeOutline,
  informationCircleOutline,
  locationOutline,
  mapOutline,
  navigateOutline,
  refreshOutline,
  saveOutline,
  shieldCheckmarkOutline,
  trashOutline,
  warningOutline
} from "./chunk-4ITIBTO3.js";
import {
  NavigationHistoryService
} from "./chunk-R5EA4FTC.js";
import {
  AlertController,
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRange,
  IonSpinner,
  IonToggle,
  ToastController
} from "./chunk-VSLPI6WN.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgIf,
  NgModel,
  NumberValueAccessor,
  Router,
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
  __async,
  __toESM
} from "./chunk-QXFS4N4X.js";

// src/app/geofence-armadio/geofence-armadio.page.ts
var L = __toESM(require_leaflet_src());
var _c0 = ["mapContainer"];
function GeofenceArmadioPage_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F6E1}\uFE0F ATTIVO");
    \u0275\u0275elementEnd();
  }
}
function GeofenceArmadioPage_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275element(1, "ion-icon", 38);
    \u0275\u0275elementStart(2, "span", 39);
    \u0275\u0275text(3, "DISATTIVO");
    \u0275\u0275elementEnd()();
  }
}
function GeofenceArmadioPage_ion_spinner_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 40);
  }
}
function GeofenceArmadioPage_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "USA GPS");
    \u0275\u0275elementEnd();
  }
}
function GeofenceArmadioPage_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function GeofenceArmadioPage_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.apriInMappa());
    });
    \u0275\u0275element(1, "ion-icon", 42);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "MAPS");
    \u0275\u0275elementEnd()();
  }
}
function GeofenceArmadioPage_ion_icon_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 43);
  }
}
function GeofenceArmadioPage_ion_spinner_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 40);
  }
}
function GeofenceArmadioPage_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function GeofenceArmadioPage_button_51_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confermaElimina());
    });
    \u0275\u0275element(1, "ion-icon", 45);
    \u0275\u0275elementEnd();
  }
}
var _GeofenceArmadioPage = class _GeofenceArmadioPage {
  get verificaRisultato() {
    if (this.verificaResult === null)
      return null;
    if (typeof this.verificaResult?.dentro_perimetro !== "undefined") {
      return this.verificaResult.dentro_perimetro === true || this.verificaResult.dentro_perimetro === 1;
    }
    return null;
  }
  constructor(route, router, dbService, gpsService, alertCtrl, toastCtrl, navHistory) {
    this.route = route;
    this.router = router;
    this.dbService = dbService;
    this.gpsService = gpsService;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.navHistory = navHistory;
    this.armadioNome = "";
    this.latitudine = null;
    this.longitudine = null;
    this.raggioM = 100;
    this.attivo = true;
    this.geofenceEsistente = null;
    this.hasGeofence = false;
    this.verificaResult = null;
    this.isVerifying = false;
    this.isLoading = false;
    this.isSaving = false;
    this.isGettingGps = false;
    this.map = null;
    this.centerMarker = null;
    this.circle = null;
    this.checkpointMarkers = [];
    this.userMarker = null;
    this.boxId = null;
    addIcons({
      "location-outline": locationOutline,
      "shield-checkmark-outline": shieldCheckmarkOutline,
      "warning-outline": warningOutline,
      "warning": warningOutline,
      "trash-outline": trashOutline,
      "save-outline": saveOutline,
      "navigate-outline": navigateOutline,
      "refresh-outline": refreshOutline,
      "arrow-forward-outline": arrowForwardOutline,
      "close-outline": closeOutline,
      "map-outline": mapOutline,
      "information-circle-outline": informationCircleOutline
    });
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    const parsedId = id ? Number(id) : NaN;
    const bId = this.route.snapshot.queryParamMap.get("boxId");
    this.boxId = bId ? Number(bId) : null;
    if (!parsedId || isNaN(parsedId) || parsedId <= 0) {
      this.mostraToast("ID archivio non valido. Torna indietro e riprova.", "danger").then(() => {
        this.chiudi();
      });
      return;
    }
    this.armadioId = parsedId;
    this.armadioNome = this.route.snapshot.queryParamMap.get("nome") || `Archivio #${this.armadioId}`;
    this.caricaGeofence();
  }
  ngAfterViewInit() {
    setTimeout(() => this.inizializzaMappa(), 300);
  }
  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  }
  inizializzaMappa() {
    if (!this.mapContainer)
      return;
    const el = this.mapContainer.nativeElement;
    this.map = L.map(el, {
      center: [41.9028, 12.4964],
      zoom: 13,
      zoomControl: true,
      attributionControl: false
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19
    }).addTo(this.map);
    this.map.on("click", (e) => {
      this.latitudine = parseFloat(e.latlng.lat.toFixed(6));
      this.longitudine = parseFloat(e.latlng.lng.toFixed(6));
      this.aggiornaMarcatoreCentro();
    });
    if (this.latitudine && this.longitudine) {
      this.aggiornaMarcatoreCentro();
    }
    this.caricaCheckpoints();
  }
  aggiornaMarcatoreCentro() {
    if (!this.map)
      return;
    if (this.centerMarker) {
      this.centerMarker.setLatLng([this.latitudine, this.longitudine]);
    } else {
      const icon = L.divIcon({
        html: '<div style="width: 20px; height: 20px; background: #3AABDB; border: 3px solid #fff; border-radius: 50%; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        className: ""
      });
      this.centerMarker = L.marker([this.latitudine, this.longitudine], { icon }).addTo(this.map);
    }
    if (this.circle) {
      this.circle.setLatLng([this.latitudine, this.longitudine]);
      this.circle.setRadius(this.raggioM);
    } else {
      this.circle = L.circle([this.latitudine, this.longitudine], {
        radius: this.raggioM,
        color: "#3AABDB",
        fillColor: "#3AABDB",
        fillOpacity: 0.1,
        weight: 2
      }).addTo(this.map);
    }
    this.map.setView([this.latitudine, this.longitudine], this.map.getZoom());
  }
  caricaCheckpoints() {
    if (!this.armadioId)
      return;
    this.dbService.getGeofenceCheckpoints(this.armadioId).subscribe({
      next: (res) => {
        const checkpoints = res.checkpoints || [];
        this.aggiungiCheckpoints(checkpoints);
      },
      error: (err) => console.error("Errore caricamento checkpoints:", err)
    });
  }
  aggiungiCheckpoints(checkpoints) {
    this.checkpointMarkers.forEach((m) => m.remove());
    this.checkpointMarkers = [];
    if (!this.map)
      return;
    if (checkpoints.length === 0)
      return;
    const group = L.featureGroup();
    const icon = L.divIcon({
      html: `<div style="width: 14px; height: 14px; background: #F59E0B; border: 2px solid #fff; border-radius: 50%; box-shadow: 0 1px 4px rgba(0,0,0,0.3);"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
      className: ""
    });
    checkpoints.forEach((cp) => {
      if (cp.latitudine == null || cp.longitudine == null)
        return;
      const marker2 = L.marker([cp.latitudine, cp.longitudine], { icon }).bindPopup(`<b>${cp.nome_box || "Box"}</b><br>${new Date(cp.timestamp).toLocaleString("it-IT")}${cp.label ? "<br>" + cp.label : ""}`);
      this.checkpointMarkers.push(marker2);
      group.addLayer(marker2);
    });
    group.addTo(this.map);
    if (this.latitudine && this.longitudine) {
      this.map.setView([this.latitudine, this.longitudine], this.map.getZoom());
    } else if (checkpoints.length > 0) {
      this.map.fitBounds(group.getBounds().pad(0.3));
    }
  }
  aggiornaMappaUtente(lat, lng) {
    if (!this.map)
      return;
    if (this.userMarker) {
      this.userMarker.setLatLng([lat, lng]);
    } else {
      const icon = L.divIcon({
        html: `<div style="width: 16px; height: 16px; background: #7DC840; border: 3px solid #fff; border-radius: 50%; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
                 <div style="width: 6px; height: 6px; background: #fff; border-radius: 50%; margin: 2px auto;"></div>
               </div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
        className: ""
      });
      this.userMarker = L.marker([lat, lng], { icon }).addTo(this.map);
    }
  }
  caricaGeofence() {
    this.isLoading = true;
    this.dbService.getGeofence(this.armadioId).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.geofenceEsistente = res.geofence;
        this.hasGeofence = !!res.geofence;
        if (res.geofence) {
          this.latitudine = res.geofence.latitudine;
          this.longitudine = res.geofence.longitudine;
          this.raggioM = res.geofence.raggio_m;
          this.attivo = res.geofence.attivo === 1;
          this.aggiornaMarcatoreCentro();
        }
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  usaPosizioneCorrcome() {
    return __async(this, null, function* () {
      this.isGettingGps = true;
      try {
        const pos = yield this.gpsService.getPosizione();
        this.latitudine = pos.latitudine;
        this.longitudine = pos.longitudine;
        this.aggiornaMarcatoreCentro();
        this.aggiornaMappaUtente(pos.latitudine, pos.longitudine);
        yield this.mostraToast(`Posizione acquisita (\xB1${Math.round(pos.accuratezza)} m)`, "success");
      } catch (err) {
        yield this.mostraToast("GPS non disponibile: " + err.message, "danger");
      } finally {
        this.isGettingGps = false;
      }
    });
  }
  salvaGeofence() {
    return __async(this, null, function* () {
      const lat = Number(this.latitudine);
      const lng = Number(this.longitudine);
      const raggio = Number(this.raggioM);
      if (isNaN(lat) || isNaN(lng) || this.latitudine === null || this.longitudine === null) {
        yield this.mostraToast("Imposta le coordinate valide prima di salvare.", "warning");
        return;
      }
      if (isNaN(raggio) || raggio < 10 || raggio > 5e4) {
        yield this.mostraToast("Il raggio deve essere tra 10 e 50.000 metri.", "warning");
        return;
      }
      this.isSaving = true;
      this.dbService.impostaGeofence(this.armadioId, lat, lng, raggio, this.attivo).subscribe({
        next: (res) => __async(this, null, function* () {
          this.isSaving = false;
          this.hasGeofence = true;
          this.geofenceEsistente = res.geofence || { armadio_id: this.armadioId, latitudine: lat, longitudine: lng, raggio_m: raggio, attivo: this.attivo ? 1 : 0 };
          yield this.mostraToast("Geofence configurato con successo!", "success");
          this.caricaGeofence();
        }),
        error: (err) => __async(this, null, function* () {
          this.isSaving = false;
          console.error("Errore salvataggio geofence:", err);
          yield this.mostraToast(err.error?.message || err.error?.error || "Errore durante il salvataggio.", "danger");
        })
      });
    });
  }
  confermaElimina() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        cssClass: "peekbox-alert",
        header: "Elimina Geofence",
        message: "Rimuovere il perimetro virtuale? Gli asset non saranno pi\xF9 monitorati.",
        buttons: [
          { text: "Annulla", role: "cancel" },
          {
            text: "Elimina",
            role: "destructive",
            handler: () => {
              this.dbService.eliminaGeofence(this.armadioId).subscribe({
                next: () => __async(this, null, function* () {
                  this.hasGeofence = false;
                  this.geofenceEsistente = null;
                  this.latitudine = null;
                  this.longitudine = null;
                  this.raggioM = 100;
                  if (this.centerMarker) {
                    this.centerMarker.remove();
                    this.centerMarker = null;
                  }
                  if (this.circle) {
                    this.circle.remove();
                    this.circle = null;
                  }
                  this.checkpointMarkers.forEach((m) => m.remove());
                  this.checkpointMarkers = [];
                  if (this.map) {
                    this.map.setView([41.9028, 12.4964], 13);
                  }
                  yield this.mostraToast("Geofence rimosso.", "medium");
                }),
                error: () => __async(this, null, function* () {
                  yield this.mostraToast("Errore durante l'eliminazione.", "danger");
                })
              });
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  verificaPosizioneLive() {
    return __async(this, null, function* () {
      if (!this.armadioId || isNaN(this.armadioId) || this.armadioId <= 0) {
        yield this.mostraToast("ID archivio non disponibile.", "warning");
        return;
      }
      this.isVerifying = true;
      this.verificaResult = null;
      try {
        const pos = yield this.gpsService.getPosizione();
        this.aggiornaMappaUtente(pos.latitudine, pos.longitudine);
        this.dbService.verificaGeofence(this.armadioId, pos.latitudine, pos.longitudine).subscribe({
          next: (res) => {
            this.isVerifying = false;
            this.verificaResult = res;
          },
          error: () => {
            this.isVerifying = false;
          }
        });
      } catch (err) {
        this.isVerifying = false;
        yield this.mostraToast("GPS non disponibile: " + err.message, "danger");
      }
    });
  }
  apriInMappa() {
    if (this.latitudine == null || this.longitudine == null)
      return;
    const url = this.gpsService.buildGoogleMapsUrl(this.latitudine, this.longitudine);
    window.open(url, "_blank");
  }
  onRaggioChange() {
    if (this.circle && this.latitudine && this.longitudine) {
      this.circle.setRadius(this.raggioM);
    }
  }
  get raggioLabel() {
    if (this.raggioM < 1e3)
      return `${this.raggioM} m`;
    return `${(this.raggioM / 1e3).toFixed(1)} km`;
  }
  mostraToast(message, color = "primary") {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({ message, duration: 2500, color, position: "bottom" });
      yield toast.present();
    });
  }
  chiudi() {
    if (this.boxId) {
      this.navHistory.navTo(`/dettaglio-box/${this.boxId}`);
    } else {
      this.navHistory.navTo("/home");
    }
  }
  navTo(route) {
    this.navHistory.navTo(route);
  }
};
_GeofenceArmadioPage.\u0275fac = function GeofenceArmadioPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GeofenceArmadioPage)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DatabaseService), \u0275\u0275directiveInject(GpsService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(NavigationHistoryService));
};
_GeofenceArmadioPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeofenceArmadioPage, selectors: [["app-geofence-armadio"]], viewQuery: function GeofenceArmadioPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mapContainer = _t.first);
  }
}, decls: 56, vars: 18, consts: [["mapContainer", ""], [1, "geo-content"], [1, "geo-backdrop", 3, "click"], [1, "geo-dialog"], [1, "geo-header"], [1, "btn-close", 3, "click"], ["name", "close-outline"], [1, "geo-status-badge"], [4, "ngIf"], ["style", "display: flex; align-items: center; justify-content: center; gap: 4px; line-height: 1;", 4, "ngIf"], [1, "geo-body"], [1, "geo-section", "geo-section--map"], [1, "leaflet-map"], [1, "map-overlay-bar"], [1, "btn-gps-main", 3, "click", "disabled"], ["name", "crescent", 4, "ngIf"], ["class", "btn-gps-main", 3, "click", 4, "ngIf"], [1, "geo-section"], [1, "coords-row"], [1, "coord-field"], ["type", "number", "placeholder", "0.000000", "step", "0.000001", 3, "ngModelChange", "ngModel"], [1, "range-field"], [1, "range-header"], [1, "range-val"], ["min", "10", "max", "5000", "step", "10", 1, "geo-range", 3, "ngModelChange", "ionChange", "ngModel"], [1, "geo-section", "geo-section--actions"], [1, "toggle-field"], [1, "toggle-info"], [1, "toggle-title"], [1, "toggle-desc"], [1, "toggle-brand", 3, "ngModelChange", "ngModel"], [1, "btns-row"], [1, "btn-save", 3, "click", "disabled"], ["name", "save-outline", 4, "ngIf"], ["class", "btn-del", 3, "click", 4, "ngIf"], [1, "geo-footer"], ["name", "information-circle-outline"], [2, "display", "flex", "align-items", "center", "justify-content", "center", "gap", "4px", "line-height", "1"], ["name", "warning", 2, "font-size", "0.85rem", "margin-top", "-1px"], [2, "display", "inline-block"], ["name", "crescent"], [1, "btn-gps-main", 3, "click"], ["name", "location-outline"], ["name", "save-outline"], [1, "btn-del", 3, "click"], ["name", "trash-outline"]], template: function GeofenceArmadioPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 1)(1, "div", 2);
    \u0275\u0275listener("click", function GeofenceArmadioPage_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chiudi());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "button", 5);
    \u0275\u0275listener("click", function GeofenceArmadioPage_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chiudi());
    });
    \u0275\u0275element(5, "ion-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7, "CONFIGURAZIONE GEOFENCE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275template(9, GeofenceArmadioPage_span_9_Template, 2, 0, "span", 8)(10, GeofenceArmadioPage_span_10_Template, 4, 0, "span", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 11);
    \u0275\u0275element(13, "div", 12, 0);
    \u0275\u0275elementStart(15, "div", 13)(16, "button", 14);
    \u0275\u0275listener("click", function GeofenceArmadioPage_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.usaPosizioneCorrcome());
    });
    \u0275\u0275template(17, GeofenceArmadioPage_ion_spinner_17_Template, 1, 0, "ion-spinner", 15)(18, GeofenceArmadioPage_span_18_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, GeofenceArmadioPage_button_19_Template, 4, 0, "button", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 17)(21, "div", 18)(22, "div", 19)(23, "label");
    \u0275\u0275text(24, "LATITUDINE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function GeofenceArmadioPage_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.latitudine, $event) || (ctx.latitudine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 19)(27, "label");
    \u0275\u0275text(28, "LONGITUDINE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function GeofenceArmadioPage_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.longitudine, $event) || (ctx.longitudine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 21)(31, "div", 22)(32, "label");
    \u0275\u0275text(33, "RAGGIO DI TOLLERANZA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 23);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "ion-range", 24);
    \u0275\u0275twoWayListener("ngModelChange", function GeofenceArmadioPage_Template_ion_range_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.raggioM, $event) || (ctx.raggioM = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function GeofenceArmadioPage_Template_ion_range_ionChange_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRaggioChange());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 25)(38, "div", 26)(39, "div", 27)(40, "span", 28);
    \u0275\u0275text(41, "Monitoraggio Attivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 29);
    \u0275\u0275text(43, "Ricevi alert se il box esce dal perimetro");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "ion-toggle", 30);
    \u0275\u0275twoWayListener("ngModelChange", function GeofenceArmadioPage_Template_ion_toggle_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.attivo, $event) || (ctx.attivo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 31)(46, "button", 32);
    \u0275\u0275listener("click", function GeofenceArmadioPage_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.salvaGeofence());
    });
    \u0275\u0275template(47, GeofenceArmadioPage_ion_icon_47_Template, 1, 0, "ion-icon", 33)(48, GeofenceArmadioPage_ion_spinner_48_Template, 1, 0, "ion-spinner", 15);
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, GeofenceArmadioPage_button_51_Template, 2, 0, "button", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 35);
    \u0275\u0275element(53, "ion-icon", 36);
    \u0275\u0275elementStart(54, "p");
    \u0275\u0275text(55, "Il sistema rileva la posizione GPS ad ogni scansione QR per garantire la sicurezza degli asset.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275classProp("active", ctx.hasGeofence && ctx.attivo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.hasGeofence && ctx.attivo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx.hasGeofence && ctx.attivo));
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx.isGettingGps);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isGettingGps);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isGettingGps);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.latitudine !== null);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.latitudine);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.longitudine);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.raggioLabel);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.raggioM);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.attivo);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isSaving || ctx.latitudine === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.hasGeofence ? "AGGIORNA" : "IMPOSTA");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.hasGeofence);
  }
}, dependencies: [
  CommonModule,
  NgIf,
  FormsModule,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  NgModel,
  IonContent,
  IonIcon,
  IonToggle,
  IonRange,
  IonSpinner
], styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n  font-family: "Poppins", sans-serif;\n}\n.geo-content[_ngcontent-%COMP%] {\n  --background: #F4F7F9 !important;\n  --overflow: auto;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.geo-backdrop[_ngcontent-%COMP%] {\n  display: none;\n}\n.geo-dialog[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  background: #FFFFFF !important;\n  width: 90%;\n  max-width: 460px;\n  border-radius: 24px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_slideUpCenter 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes _ngcontent-%COMP%_slideUpCenter {\n  from {\n    transform: translate(-50%, -40%);\n    opacity: 0;\n  }\n  to {\n    transform: translate(-50%, -50%);\n    opacity: 1;\n  }\n}\n.geo-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px 1fr 80px;\n  align-items: center;\n  padding: 18px 20px;\n  background: #FFFFFF;\n  border-bottom: 1px solid rgba(58, 171, 219, 0.1);\n}\n.geo-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  font-size: 0.85rem;\n  font-weight: 900;\n  color: #15425C;\n  letter-spacing: 0.5px;\n}\n.geo-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: none;\n  background: #F4F7F9;\n  color: #4A7A94;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 1.1rem;\n  transition: all 0.2s;\n}\n.geo-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  background: #EBF5FB;\n  color: #0F172A;\n}\n.geo-header[_ngcontent-%COMP%]   .geo-status-badge[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 800;\n  padding: 4px 10px;\n  border-radius: 50px;\n  background: rgba(239, 68, 68, 0.08);\n  color: #EF4444;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  height: fit-content;\n}\n.geo-header[_ngcontent-%COMP%]   .geo-status-badge.active[_ngcontent-%COMP%] {\n  background: rgba(125, 199, 64, 0.1);\n  color: #5A9E2A;\n}\n.geo-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.geo-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.geo-section--map[_ngcontent-%COMP%] {\n  height: 220px;\n  background: #EBF5FB;\n  border-radius: 16px;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid rgba(58, 171, 219, 0.15);\n}\n.leaflet-map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.map-overlay-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10;\n  display: flex;\n  gap: 8px;\n}\n.btn-gps-main[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid rgba(58, 171, 219, 0.2);\n  padding: 8px 14px;\n  border-radius: 10px;\n  color: #1A7FA8;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 800;\n  letter-spacing: 0.3px;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-gps-main[_ngcontent-%COMP%]:hover:not([disabled]) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);\n  border-color: #3AABDB;\n}\n.btn-gps-main[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-gps-main[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  --color: $blue;\n  width: 14px;\n  height: 14px;\n}\n.coords-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.coord-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.coord-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #4A7A94;\n  letter-spacing: 0.5px;\n}\n.coord-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid rgba(58, 171, 219, 0.12);\n  border-radius: 10px;\n  background: #F4F7F9;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #0F172A;\n}\n.coord-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3AABDB;\n  background: #FFFFFF;\n}\n.range-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.range-field[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.range-field[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #4A7A94;\n  letter-spacing: 0.5px;\n}\n.range-field[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-val[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: #3AABDB;\n}\n.geo-range[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-bottom: 0;\n  --bar-background: $surf;\n  --bar-background-active: $blue;\n  --knob-background: $blue;\n  --knob-size: 18px;\n}\n.toggle-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  background: #F4F7F9;\n  border-radius: 14px;\n  border: 1px solid rgba(58, 171, 219, 0.08);\n}\n.toggle-field[_ngcontent-%COMP%]   .toggle-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.toggle-field[_ngcontent-%COMP%]   .toggle-info[_ngcontent-%COMP%]   .toggle-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #0F172A;\n}\n.toggle-field[_ngcontent-%COMP%]   .toggle-info[_ngcontent-%COMP%]   .toggle-desc[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #4A7A94;\n}\n.toggle-brand[_ngcontent-%COMP%] {\n  --handle-background-checked: $white;\n  --background-checked: $blue !important;\n}\n.btns-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.btns-row[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 14px;\n  border-radius: 14px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  color: #FFFFFF;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 800;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(125, 199, 64, 0.25);\n  transition: all 0.2s;\n}\n.btns-row[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:hover:not([disabled]) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(125, 199, 64, 0.35);\n}\n.btns-row[_ngcontent-%COMP%]   .btn-save[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btns-row[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.btns-row[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  --color: $white;\n  width: 20px;\n  height: 20px;\n}\n.btns-row[_ngcontent-%COMP%]   .btn-del[_ngcontent-%COMP%] {\n  width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 14px;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  background: rgba(239, 68, 68, 0.05);\n  color: #EF4444;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btns-row[_ngcontent-%COMP%]   .btn-del[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: #EF4444;\n}\n.btns-row[_ngcontent-%COMP%]   .btn-del[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.geo-footer[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  background: #F4F7F9;\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  border-top: 1px solid rgba(58, 171, 219, 0.05);\n}\n.geo-footer[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #3AABDB;\n  font-size: 1rem;\n  margin-top: 2px;\n}\n.geo-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.65rem;\n  color: #4A7A94;\n  line-height: 1.4;\n}\n@media (max-width: 399px) {\n  .geo-dialog[_ngcontent-%COMP%] {\n    width: 96%;\n    border-radius: 18px;\n    transform: translate(-50%, -50%);\n  }\n  .geo-header[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n    grid-template-columns: 32px 1fr 70px;\n  }\n  .geo-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n  .geo-body[_ngcontent-%COMP%] {\n    padding: 14px;\n    gap: 14px;\n  }\n  .coords-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .btns-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btns-row[_ngcontent-%COMP%]   .btn-del[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 44px;\n  }\n  .geo-section--map[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n}\n@media (min-width: 768px) {\n  .geo-dialog[_ngcontent-%COMP%] {\n    width: 80%;\n    max-width: 520px;\n    transform: translate(-50%, -50%);\n  }\n  .geo-body[_ngcontent-%COMP%] {\n    padding: 24px;\n    gap: 22px;\n  }\n  .geo-section--map[_ngcontent-%COMP%] {\n    height: 280px;\n  }\n  .geo-header[_ngcontent-%COMP%] {\n    padding: 20px 24px;\n  }\n  .geo-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n}\n@media (min-width: 1024px) {\n  .geo-dialog[_ngcontent-%COMP%] {\n    width: 60%;\n    max-width: 560px;\n    transform: translate(-50%, -50%);\n  }\n}\n/*# sourceMappingURL=geofence-armadio.page.css.map */'] });
var GeofenceArmadioPage = _GeofenceArmadioPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeofenceArmadioPage, [{
    type: Component,
    args: [{ selector: "app-geofence-armadio", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IonContent,
      IonButton,
      IonIcon,
      IonItem,
      IonLabel,
      IonToggle,
      IonRange,
      IonSpinner,
      IonInput
    ], template: `<ion-content class="geo-content">\r
\r
  <!-- BACKDROP BLURRED -->\r
  <div class="geo-backdrop" (click)="chiudi()"></div>\r
\r
  <!-- DIALOG COMPATTO MODALE -->\r
  <div class="geo-dialog">\r
\r
    <!-- HEADER DIALOG -->\r
    <div class="geo-header">\r
      <button class="btn-close" (click)="chiudi()">\r
        <ion-icon name="close-outline"></ion-icon>\r
      </button>\r
      <h2>CONFIGURAZIONE GEOFENCE</h2>\r
      <div class="geo-status-badge" [class.active]="hasGeofence && attivo">\r
        <span *ngIf="hasGeofence && attivo">\u{1F6E1}\uFE0F ATTIVO</span>\r
        <span *ngIf="!(hasGeofence && attivo)" style="display: flex; align-items: center; justify-content: center; gap: 4px; line-height: 1;">\r
          <ion-icon name="warning" style="font-size: 0.85rem; margin-top: -1px;"></ion-icon>\r
          <span style="display: inline-block;">DISATTIVO</span>\r
        </span>\r
      </div>\r
    </div>\r
\r
    <!-- BODY DIALOG -->\r
    <div class="geo-body">\r
\r
      <!-- SEZIONE MAPPA / GPS (Leaflet) -->\r
      <div class="geo-section geo-section--map">\r
        <div #mapContainer class="leaflet-map"></div>\r
        <div class="map-overlay-bar">\r
          <button class="btn-gps-main" (click)="usaPosizioneCorrcome()" [disabled]="isGettingGps">\r
            <ion-spinner *ngIf="isGettingGps" name="crescent"></ion-spinner>\r
            <span *ngIf="!isGettingGps">USA GPS</span>\r
          </button>\r
          <button class="btn-gps-main" (click)="apriInMappa()" *ngIf="latitudine !== null">\r
            <ion-icon name="location-outline"></ion-icon>\r
            <span>MAPS</span>\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- SEZIONE COORDINATE E RAGGIO -->\r
      <div class="geo-section">\r
        <div class="coords-row">\r
          <div class="coord-field">\r
            <label>LATITUDINE</label>\r
            <input type="number" [(ngModel)]="latitudine" placeholder="0.000000" step="0.000001">\r
          </div>\r
          <div class="coord-field">\r
            <label>LONGITUDINE</label>\r
            <input type="number" [(ngModel)]="longitudine" placeholder="0.000000" step="0.000001">\r
          </div>\r
        </div>\r
\r
        <div class="range-field">\r
          <div class="range-header">\r
            <label>RAGGIO DI TOLLERANZA</label>\r
            <span class="range-val">{{ raggioLabel }}</span>\r
          </div>\r
          <ion-range min="10" max="5000" step="10" [(ngModel)]="raggioM" (ionChange)="onRaggioChange()" class="geo-range"></ion-range>\r
        </div>\r
      </div>\r
\r
      <!-- SEZIONE TOGGLE E AZIONI -->\r
      <div class="geo-section geo-section--actions">\r
        <div class="toggle-field">\r
          <div class="toggle-info">\r
            <span class="toggle-title">Monitoraggio Attivo</span>\r
            <span class="toggle-desc">Ricevi alert se il box esce dal perimetro</span>\r
          </div>\r
          <ion-toggle [(ngModel)]="attivo" class="toggle-brand"></ion-toggle>\r
        </div>\r
\r
        <div class="btns-row">\r
          <button class="btn-save" (click)="salvaGeofence()" [disabled]="isSaving || latitudine === null">\r
            <ion-icon name="save-outline" *ngIf="!isSaving"></ion-icon>\r
            <ion-spinner name="crescent" *ngIf="isSaving"></ion-spinner>\r
            <span>{{ hasGeofence ? 'AGGIORNA' : 'IMPOSTA' }}</span>\r
          </button>\r
          <button class="btn-del" *ngIf="hasGeofence" (click)="confermaElimina()">\r
            <ion-icon name="trash-outline"></ion-icon>\r
          </button>\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
    <!-- FOOTER INFO -->\r
    <div class="geo-footer">\r
      <ion-icon name="information-circle-outline"></ion-icon>\r
      <p>Il sistema rileva la posizione GPS ad ogni scansione QR per garantire la sicurezza degli asset.</p>\r
    </div>\r
\r
  </div>\r
\r
</ion-content>\r
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&display=swap";\n\n/* src/app/geofence-armadio/geofence-armadio.page.scss */\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n  font-family: "Poppins", sans-serif;\n}\n.geo-content {\n  --background: #F4F7F9 !important;\n  --overflow: auto;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.geo-backdrop {\n  display: none;\n}\n.geo-dialog {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  background: #FFFFFF !important;\n  width: 90%;\n  max-width: 460px;\n  border-radius: 24px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  animation: slideUpCenter 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes slideUpCenter {\n  from {\n    transform: translate(-50%, -40%);\n    opacity: 0;\n  }\n  to {\n    transform: translate(-50%, -50%);\n    opacity: 1;\n  }\n}\n.geo-header {\n  display: grid;\n  grid-template-columns: 40px 1fr 80px;\n  align-items: center;\n  padding: 18px 20px;\n  background: #FFFFFF;\n  border-bottom: 1px solid rgba(58, 171, 219, 0.1);\n}\n.geo-header h2 {\n  margin: 0;\n  text-align: center;\n  font-size: 0.85rem;\n  font-weight: 900;\n  color: #15425C;\n  letter-spacing: 0.5px;\n}\n.geo-header .btn-close {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: none;\n  background: #F4F7F9;\n  color: #4A7A94;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 1.1rem;\n  transition: all 0.2s;\n}\n.geo-header .btn-close:hover {\n  background: #EBF5FB;\n  color: #0F172A;\n}\n.geo-header .geo-status-badge {\n  font-size: 0.65rem;\n  font-weight: 800;\n  padding: 4px 10px;\n  border-radius: 50px;\n  background: rgba(239, 68, 68, 0.08);\n  color: #EF4444;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  height: fit-content;\n}\n.geo-header .geo-status-badge.active {\n  background: rgba(125, 199, 64, 0.1);\n  color: #5A9E2A;\n}\n.geo-body {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.geo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.geo-section--map {\n  height: 220px;\n  background: #EBF5FB;\n  border-radius: 16px;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid rgba(58, 171, 219, 0.15);\n}\n.leaflet-map {\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.map-overlay-bar {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10;\n  display: flex;\n  gap: 8px;\n}\n.btn-gps-main {\n  background: #FFFFFF;\n  border: 1px solid rgba(58, 171, 219, 0.2);\n  padding: 8px 14px;\n  border-radius: 10px;\n  color: #1A7FA8;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 800;\n  letter-spacing: 0.3px;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-gps-main:hover:not([disabled]) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);\n  border-color: #3AABDB;\n}\n.btn-gps-main[disabled] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-gps-main ion-spinner {\n  --color: $blue;\n  width: 14px;\n  height: 14px;\n}\n.coords-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.coord-field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.coord-field label {\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #4A7A94;\n  letter-spacing: 0.5px;\n}\n.coord-field input {\n  padding: 10px 12px;\n  border: 1px solid rgba(58, 171, 219, 0.12);\n  border-radius: 10px;\n  background: #F4F7F9;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #0F172A;\n}\n.coord-field input:focus {\n  outline: none;\n  border-color: #3AABDB;\n  background: #FFFFFF;\n}\n.range-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.range-field .range-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.range-field .range-header label {\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #4A7A94;\n  letter-spacing: 0.5px;\n}\n.range-field .range-header .range-val {\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: #3AABDB;\n}\n.geo-range {\n  padding-top: 0;\n  padding-bottom: 0;\n  --bar-background: $surf;\n  --bar-background-active: $blue;\n  --knob-background: $blue;\n  --knob-size: 18px;\n}\n.toggle-field {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  background: #F4F7F9;\n  border-radius: 14px;\n  border: 1px solid rgba(58, 171, 219, 0.08);\n}\n.toggle-field .toggle-info {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.toggle-field .toggle-info .toggle-title {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #0F172A;\n}\n.toggle-field .toggle-info .toggle-desc {\n  font-size: 0.6rem;\n  color: #4A7A94;\n}\n.toggle-brand {\n  --handle-background-checked: $white;\n  --background-checked: $blue !important;\n}\n.btns-row {\n  display: flex;\n  gap: 10px;\n}\n.btns-row .btn-save {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 14px;\n  border-radius: 14px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  color: #FFFFFF;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 800;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(125, 199, 64, 0.25);\n  transition: all 0.2s;\n}\n.btns-row .btn-save:hover:not([disabled]) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(125, 199, 64, 0.35);\n}\n.btns-row .btn-save[disabled] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btns-row .btn-save ion-icon {\n  font-size: 1.1rem;\n}\n.btns-row .btn-save ion-spinner {\n  --color: $white;\n  width: 20px;\n  height: 20px;\n}\n.btns-row .btn-del {\n  width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 14px;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  background: rgba(239, 68, 68, 0.05);\n  color: #EF4444;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btns-row .btn-del:hover {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: #EF4444;\n}\n.btns-row .btn-del ion-icon {\n  font-size: 1.2rem;\n}\n.geo-footer {\n  padding: 14px 20px;\n  background: #F4F7F9;\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  border-top: 1px solid rgba(58, 171, 219, 0.05);\n}\n.geo-footer ion-icon {\n  color: #3AABDB;\n  font-size: 1rem;\n  margin-top: 2px;\n}\n.geo-footer p {\n  margin: 0;\n  font-size: 0.65rem;\n  color: #4A7A94;\n  line-height: 1.4;\n}\n@media (max-width: 399px) {\n  .geo-dialog {\n    width: 96%;\n    border-radius: 18px;\n    transform: translate(-50%, -50%);\n  }\n  .geo-header {\n    padding: 14px 16px;\n    grid-template-columns: 32px 1fr 70px;\n  }\n  .geo-header h2 {\n    font-size: 0.78rem;\n  }\n  .geo-body {\n    padding: 14px;\n    gap: 14px;\n  }\n  .coords-row {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .btns-row {\n    flex-direction: column;\n  }\n  .btns-row .btn-del {\n    width: 100%;\n    height: 44px;\n  }\n  .geo-section--map {\n    height: 180px;\n  }\n}\n@media (min-width: 768px) {\n  .geo-dialog {\n    width: 80%;\n    max-width: 520px;\n    transform: translate(-50%, -50%);\n  }\n  .geo-body {\n    padding: 24px;\n    gap: 22px;\n  }\n  .geo-section--map {\n    height: 280px;\n  }\n  .geo-header {\n    padding: 20px 24px;\n  }\n  .geo-header h2 {\n    font-size: 0.95rem;\n  }\n}\n@media (min-width: 1024px) {\n  .geo-dialog {\n    width: 60%;\n    max-width: 560px;\n    transform: translate(-50%, -50%);\n  }\n}\n/*# sourceMappingURL=geofence-armadio.page.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: DatabaseService }, { type: GpsService }, { type: AlertController }, { type: ToastController }, { type: NavigationHistoryService }], { mapContainer: [{
    type: ViewChild,
    args: ["mapContainer", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeofenceArmadioPage, { className: "GeofenceArmadioPage", filePath: "src/app/geofence-armadio/geofence-armadio.page.ts", lineNumber: 32 });
})();
export {
  GeofenceArmadioPage
};
//# sourceMappingURL=geofence-armadio.page-KBBBMH67.js.map
