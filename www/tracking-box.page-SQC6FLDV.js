import {
  GpsService
} from "./chunk-5B5KTTKB.js";
import {
  DatabaseService
} from "./chunk-5G3PJOGU.js";
import {
  addIcons,
  locationOutline,
  mapOutline,
  navigateOutline,
  refreshOutline,
  trashOutline
} from "./chunk-4ITIBTO3.js";
import {
  AlertController,
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonToggle,
  IonToolbar,
  ToastController
} from "./chunk-VSLPI6WN.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DecimalPipe,
  FormsModule,
  Location,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  SlicePipe,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
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
  __async
} from "./chunk-QXFS4N4X.js";

// src/app/tracking-box/tracking-box.page.ts
function TrackingBoxPage_ng_container_13_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-card", 24)(1, "ion-card-content")(2, "div", 25)(3, "div")(4, "h2", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-badge", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 29)(11, "div", 30)(12, "span", 31);
    \u0275\u0275text(13, "Moving Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 32);
    \u0275\u0275text(15, "Registra GPS ad ogni scansione QR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "ion-toggle", 33);
    \u0275\u0275twoWayListener("ngModelChange", function TrackingBoxPage_ng_container_13_ion_card_1_Template_ion_toggle_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.movingModeAttivo, $event) || (ctx_r3.movingModeAttivo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function TrackingBoxPage_ng_container_13_ion_card_1_Template_ion_toggle_ionChange_16_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleMovingMode($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.boxInfo.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.boxInfo.nome_armadio);
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r3.movingModeAttivo ? "warning" : "medium");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.movingModeAttivo ? "\u{1F69A} Moving" : "\u{1F4E6} Statico", " ");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.movingModeAttivo);
  }
}
function TrackingBoxPage_ng_container_13_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4, "Tappe");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.checkpoints.length - 1);
  }
}
function TrackingBoxPage_ng_container_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5, "Checkpoint");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, TrackingBoxPage_ng_container_13_div_2_div_6_Template, 5, 1, "div", 38);
    \u0275\u0275elementStart(7, "div", 35)(8, "span", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 37);
    \u0275\u0275text(11, "Ultima scansione");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.checkpoints.length);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.checkpoints.length >= 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatData(ctx_r3.checkpoints[ctx_r3.checkpoints.length - 1].timestamp));
  }
}
function TrackingBoxPage_ng_container_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1, " Storico Posizioni ");
    \u0275\u0275elementEnd();
  }
}
function TrackingBoxPage_ng_container_13_div_11_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 54);
  }
}
function TrackingBoxPage_ng_container_13_div_11_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cp_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 \xB1", \u0275\u0275pipeBind2(2, 1, cp_r6.accuratezza, "1.0-0"), "m");
  }
}
function TrackingBoxPage_ng_container_13_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275element(2, "div", 44);
    \u0275\u0275template(3, TrackingBoxPage_ng_container_13_div_11_div_1_div_3_Template, 1, 0, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 46)(5, "div", 47)(6, "span", 48);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 50);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275pipe(13, "number");
    \u0275\u0275template(14, TrackingBoxPage_ng_container_13_div_11_div_1_span_14_Template, 3, 4, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 52);
    \u0275\u0275listener("click", function TrackingBoxPage_ng_container_13_div_11_div_1_Template_button_click_15_listener() {
      const cp_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.apriPosizioneInMappa(cp_r6.latitudine, cp_r6.longitudine));
    });
    \u0275\u0275element(16, "ion-icon", 53);
    \u0275\u0275text(17, " Apri in Mappa ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cp_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const last_r8 = ctx.last;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("first", i_r7 === 0)("last", last_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cp_r6.label || "Posizione #" + (i_r7 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatData(cp_r6.timestamp));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(12, 10, cp_r6.latitudine, "1.4-4"), ", ", \u0275\u0275pipeBind2(13, 13, cp_r6.longitudine, "1.4-4"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", cp_r6.accuratezza);
  }
}
function TrackingBoxPage_ng_container_13_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, TrackingBoxPage_ng_container_13_div_11_div_1_Template, 18, 16, "div", 41);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(2, 1, ctx_r3.checkpoints, 0, ctx_r3.checkpoints.length));
  }
}
function TrackingBoxPage_ng_container_13_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275text(2, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 57);
    \u0275\u0275text(4, "Nessun checkpoint registrato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r3.movingModeAttivo ? "Il GPS verr\xE0 registrato automaticamente alla prossima scansione QR." : "Attiva il Moving Mode o aggiungi manualmente la posizione corrente.", " ");
  }
}
function TrackingBoxPage_ng_container_13_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "button", 60);
    \u0275\u0275listener("click", function TrackingBoxPage_ng_container_13_div_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.confermaResetTracking());
    });
    \u0275\u0275element(2, "ion-icon", 61);
    \u0275\u0275text(3, " Elimina storico ");
    \u0275\u0275elementEnd()();
  }
}
function TrackingBoxPage_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TrackingBoxPage_ng_container_13_ion_card_1_Template, 17, 5, "ion-card", 13)(2, TrackingBoxPage_ng_container_13_div_2_Template, 12, 3, "div", 14);
    \u0275\u0275elementStart(3, "div", 15)(4, "button", 16);
    \u0275\u0275listener("click", function TrackingBoxPage_ng_container_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.aggiungiCheckpointManuale());
    });
    \u0275\u0275element(5, "ion-icon", 17);
    \u0275\u0275text(6, " Registra Posizione ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 18);
    \u0275\u0275listener("click", function TrackingBoxPage_ng_container_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.apriPercorsoCompleto());
    });
    \u0275\u0275element(8, "ion-icon", 19);
    \u0275\u0275text(9, " Vedi Percorso ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, TrackingBoxPage_ng_container_13_div_10_Template, 2, 0, "div", 20)(11, TrackingBoxPage_ng_container_13_div_11_Template, 3, 5, "div", 21)(12, TrackingBoxPage_ng_container_13_div_12_Template, 7, 1, "div", 22)(13, TrackingBoxPage_ng_container_13_div_13_Template, 4, 0, "div", 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.boxInfo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.checkpoints.length > 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r3.checkpoints.length < 2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.checkpoints.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isLoading && ctx_r3.checkpoints.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isLoading && ctx_r3.checkpoints.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.checkpoints.length > 0);
  }
}
function TrackingBoxPage_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63);
    \u0275\u0275text(2, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 64);
    \u0275\u0275text(4, "Funzione non disponibile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 65);
    \u0275\u0275text(6, "Il tracking box \xE8 disponibile solo per account Business. Aggiorna il tuo piano per sbloccare questa funzionalit\xE0.");
    \u0275\u0275elementEnd()();
  }
}
var _TrackingBoxPage = class _TrackingBoxPage {
  constructor(route, dbService, gpsService, alertCtrl, toastCtrl, location) {
    this.route = route;
    this.dbService = dbService;
    this.gpsService = gpsService;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.location = location;
    this.boxId = null;
    this.utenteId = null;
    this.tipoProfilo = "personal";
    this.boxInfo = null;
    this.checkpoints = [];
    this.isLoading = false;
    this.movingModeAttivo = false;
    addIcons({ locationOutline, mapOutline, trashOutline, refreshOutline, navigateOutline });
  }
  tornaIndietro() {
    this.location.back();
  }
  ngOnInit() {
    this.boxId = this.route.snapshot.paramMap.get("id");
    this.utenteId = localStorage.getItem("utente_id");
    this.tipoProfilo = localStorage.getItem("tipo_profilo") || "personal";
    if (this.boxId && this.tipoProfilo === "business") {
      this.caricaBoxInfo();
      this.caricaCheckpoints();
    }
  }
  caricaBoxInfo() {
    if (!this.boxId)
      return;
    this.dbService.getBoxSingola(Number(this.boxId)).subscribe({
      next: (res) => {
        this.boxInfo = res.box;
        this.movingModeAttivo = res.box.moving_mode === 1;
      },
      error: (err) => console.error("Errore caricamento box:", err)
    });
  }
  caricaCheckpoints() {
    if (!this.boxId)
      return;
    this.isLoading = true;
    this.dbService.getCheckpoints(Number(this.boxId)).subscribe({
      next: (res) => {
        this.checkpoints = res.checkpoints || [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Errore checkpoints:", err);
        this.isLoading = false;
      }
    });
  }
  toggleMovingMode(event) {
    return __async(this, null, function* () {
      const nuovoStato = event.detail.checked;
      this.dbService.updateMovingMode(Number(this.boxId), nuovoStato).subscribe({
        next: () => __async(this, null, function* () {
          this.movingModeAttivo = nuovoStato;
          const toast = yield this.toastCtrl.create({
            message: nuovoStato ? "\u{1F69A} Moving Mode attivato! Il GPS verr\xE0 registrato ad ogni scansione." : "Moving Mode disattivato.",
            duration: 2500,
            color: nuovoStato ? "success" : "medium",
            position: "bottom"
          });
          yield toast.present();
        }),
        error: (err) => console.error("Errore toggle moving mode:", err)
      });
    });
  }
  /** Aggiunge manualmente un checkpoint con la posizione attuale e verifica geofence */
  aggiungiCheckpointManuale() {
    return __async(this, null, function* () {
      try {
        const pos = yield this.gpsService.getPosizione();
        const alert = yield this.alertCtrl.create({
          cssClass: "peekbox-alert",
          header: "Etichetta Posizione",
          message: "Aggiungi una descrizione opzionale per questo punto.",
          inputs: [{ name: "label", type: "text", placeholder: "Es. Magazzino Milano" }],
          buttons: [
            { text: "Annulla", role: "cancel" },
            {
              text: "Salva",
              handler: (data) => {
                this.dbService.salvaCheckpointSicuro(Number(this.boxId), pos.latitudine, pos.longitudine, pos.accuratezza, data.label || void 0).subscribe({
                  next: (res) => __async(this, null, function* () {
                    this.caricaCheckpoints();
                    if (res.geofence_alert) {
                      const alertGeofence = yield this.alertCtrl.create({
                        cssClass: "peekbox-alert peekbox-alert--danger",
                        header: "\u26A0\uFE0F Eccezione di Sicurezza",
                        message: res.geofence_alert.messaggio,
                        buttons: ["OK"]
                      });
                      yield alertGeofence.present();
                    } else {
                      const toast = yield this.toastCtrl.create({
                        message: "\u2705 Posizione registrata. Asset nel perimetro.",
                        duration: 2e3,
                        color: "success",
                        position: "bottom"
                      });
                      yield toast.present();
                    }
                  }),
                  error: (err) => console.error("Errore salvataggio checkpoint:", err)
                });
              }
            }
          ]
        });
        yield alert.present();
      } catch (err) {
        const alert = yield this.alertCtrl.create({
          cssClass: "peekbox-alert",
          header: "GPS non disponibile",
          message: err.message,
          buttons: ["OK"]
        });
        yield alert.present();
      }
    });
  }
  apriPosizioneInMappa(lat, lng) {
    const url = this.gpsService.buildGoogleMapsUrl(lat, lng);
    window.open(url, "_blank");
  }
  apriPercorsoCompleto() {
    if (this.checkpoints.length < 2)
      return;
    const url = this.gpsService.buildPercorsoUrl(this.checkpoints);
    window.open(url, "_blank");
  }
  confermaResetTracking() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        cssClass: "peekbox-alert",
        header: "Reset Tracking",
        message: "Eliminare tutti i checkpoint di questa box? L'operazione \xE8 irreversibile.",
        buttons: [
          { text: "Annulla", role: "cancel" },
          {
            text: "Elimina Storico",
            role: "destructive",
            handler: () => {
              this.dbService.eliminaCheckpoints(Number(this.boxId)).subscribe({
                next: () => {
                  this.checkpoints = [];
                },
                error: (err) => console.error("Errore reset:", err)
              });
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  formatData(timestamp) {
    const d = new Date(timestamp);
    return d.toLocaleDateString("it-IT", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
  }
};
_TrackingBoxPage.\u0275fac = function TrackingBoxPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrackingBoxPage)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DatabaseService), \u0275\u0275directiveInject(GpsService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(Location));
};
_TrackingBoxPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrackingBoxPage, selectors: [["app-tracking-box"]], decls: 16, vars: 2, consts: [["personalMsg", ""], [1, "ion-no-border"], [1, "peek-toolbar"], [1, "header-inner"], [1, "header-top"], [1, "header-greet"], ["src", "assets/icon/logoTitolo1.png", "alt", "PeekBox", 1, "header-logo", 2, "cursor", "pointer", 3, "click"], [1, "header-greeting"], [1, "nome-verde"], ["title", "Aggiorna", 1, "hdr-action-btn", 3, "click"], ["name", "refresh-outline"], [1, "tracking-content"], [4, "ngIf", "ngIfElse"], ["class", "box-info-card", 4, "ngIf"], ["class", "stats-row", 4, "ngIf"], [1, "azioni-row"], [1, "btn-azione", "primary", 3, "click"], ["name", "location-outline"], [1, "btn-azione", "secondary", 3, "click", "disabled"], ["name", "map-outline"], ["class", "section-title", 4, "ngIf"], ["class", "checkpoint-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "reset-row", 4, "ngIf"], [1, "box-info-card"], [1, "box-header-row"], [1, "box-nome"], [1, "box-armadio"], [1, "moving-badge", 3, "color"], [1, "moving-mode-row"], [1, "moving-mode-info"], [1, "toggle-label"], [1, "toggle-sub"], ["color", "warning", 3, "ngModelChange", "ionChange", "ngModel"], [1, "stats-row"], [1, "stat-chip"], [1, "stat-num"], [1, "stat-lbl"], ["class", "stat-chip", 4, "ngIf"], [1, "section-title"], [1, "checkpoint-list"], ["class", "checkpoint-item", 4, "ngFor", "ngForOf"], [1, "checkpoint-item"], [1, "timeline-col"], [1, "timeline-dot"], ["class", "timeline-line", 4, "ngIf"], [1, "checkpoint-body"], [1, "cp-header"], [1, "cp-label"], [1, "cp-time"], [1, "cp-coords"], [4, "ngIf"], [1, "btn-mini", 3, "click"], ["name", "navigate-outline"], [1, "timeline-line"], [1, "empty-state"], [1, "empty-icon"], [1, "empty-title"], [1, "empty-sub"], [1, "reset-row"], [1, "btn-reset", 3, "click"], ["name", "trash-outline"], [1, "personal-blocked-msg", 2, "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "height", "60vh", "text-align", "center", "padding", "40px"], [2, "font-size", "4rem", "margin-bottom", "20px"], [2, "color", "#1E293B", "margin-bottom", "10px"], [2, "color", "#64748B", "font-size", "0.95rem", "max-width", "300px"]], template: function TrackingBoxPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 1)(1, "ion-toolbar", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "img", 6);
    \u0275\u0275listener("click", function TrackingBoxPage_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.tornaIndietro());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 7);
    \u0275\u0275text(7, "TRACKING ");
    \u0275\u0275elementStart(8, "span", 8);
    \u0275\u0275text(9, "BOX");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 9);
    \u0275\u0275listener("click", function TrackingBoxPage_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.caricaCheckpoints());
    });
    \u0275\u0275element(11, "ion-icon", 10);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "ion-content", 11);
    \u0275\u0275template(13, TrackingBoxPage_ng_container_13_Template, 14, 7, "ng-container", 12)(14, TrackingBoxPage_ng_template_14_Template, 7, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const personalMsg_r10 = \u0275\u0275reference(15);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx.tipoProfilo === "business")("ngIfElse", personalMsg_r10);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  NgControlStatus,
  NgModel,
  IonHeader,
  IonToolbar,
  IonContent,
  IonCard,
  IonCardContent,
  IonBadge,
  IonToggle,
  IonIcon,
  SlicePipe,
  DecimalPipe
], styles: ['\n\n[_nghost-%COMP%] {\n  --bg: #F4F7F9;\n  --card-bg: #FFFFFF;\n  --accent: #3AABDB;\n  --warning: #7DC740;\n  --text: #0F172A;\n  --sub: #4A7A94;\n}\n.tracking-content[_ngcontent-%COMP%] {\n  --background: var(--bg);\n  --overflow: auto;\n  padding: 0 clamp(20px, 3.5vw, 56px) 40px;\n}\nion-header[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n}\nion-toolbar.peek-toolbar[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\n.header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo[_ngcontent-%COMP%] {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.header-logo[_ngcontent-%COMP%]:active {\n  opacity: 0.55;\n}\n.header-greeting[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\n.hdr-action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  color: #4A7A94;\n}\n.hdr-action-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 122, 148, 0.1);\n  color: #0F172A;\n}\n.hdr-action-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.92);\n}\n.hdr-action-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.box-info-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 18px;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  margin: 16px 0;\n  box-shadow: 0 8px 24px rgba(58, 171, 219, 0.04);\n}\n.box-info-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 18px;\n}\n.box-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.box-nome[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text);\n  margin: 0 0 4px;\n}\n.box-armadio[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--sub);\n}\n.moving-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.moving-mode-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 0 2px;\n  border-top: 1px solid rgba(58, 171, 219, 0.18);\n}\n.toggle-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text);\n  display: block;\n}\n.toggle-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--sub);\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  overflow-x: auto;\n}\n.stat-chip[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 16px;\n  background: var(--card-bg);\n  border-radius: 12px;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  gap: 2px;\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.02);\n}\n.stat-num[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--accent);\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--sub);\n  white-space: nowrap;\n}\n.azioni-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 24px;\n}\n.btn-azione[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 13px;\n  border-radius: 14px;\n  font-size: 13px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.btn-azione[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-azione[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: default;\n}\n.btn-azione.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3AABDB 0%,\n      #1A7FA8 100%);\n  color: white;\n  box-shadow: 0 4px 14px rgba(58, 171, 219, 0.2);\n}\n.btn-azione.secondary[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  color: var(--text);\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.02);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--sub);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 12px;\n}\n.checkpoint-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.checkpoint-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  padding-bottom: 16px;\n}\n.timeline-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 0 0 16px;\n  padding-top: 4px;\n}\n.timeline-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: rgba(15, 23, 42, 0.1);\n  border: 2px solid rgba(15, 23, 42, 0.2);\n  flex-shrink: 0;\n}\n.timeline-dot.first[_ngcontent-%COMP%] {\n  background: var(--accent);\n  border-color: var(--accent);\n}\n.timeline-dot.last[_ngcontent-%COMP%] {\n  background: var(--warning);\n  border-color: var(--warning);\n}\n.timeline-line[_ngcontent-%COMP%] {\n  width: 2px;\n  flex: 1;\n  background: rgba(58, 171, 219, 0.18);\n  margin-top: 4px;\n  min-height: 30px;\n}\n.checkpoint-body[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 12px 14px;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.02);\n}\n.cp-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 4px;\n}\n.cp-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text);\n}\n.cp-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--sub);\n}\n.cp-coords[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--sub);\n  font-family: monospace;\n  margin-bottom: 8px;\n}\n.btn-mini[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: var(--accent);\n  background: rgba(58, 171, 219, 0.08);\n  border: none;\n  border-radius: 8px;\n  padding: 4px 10px;\n  cursor: pointer;\n}\n.btn-mini[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  color: var(--sub);\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text);\n  margin: 0 0 8px;\n}\n.empty-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--sub);\n  line-height: 1.5;\n}\n.reset-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 24px;\n}\n.btn-reset[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #EF4444;\n  background: rgba(239, 68, 68, 0.05);\n  border: 1px solid rgba(239, 68, 68, 0.15);\n  border-radius: 10px;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.btn-reset[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n@media (max-width: 399px) {\n  .tracking-content[_ngcontent-%COMP%] {\n    padding: 0 12px 32px;\n  }\n  .box-nome[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .azioni-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .btn-azione[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .stats-row[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .stat-chip[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n  .checkpoint-body[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n}\n@media (min-width: 768px) {\n  .tracking-content[_ngcontent-%COMP%] {\n    padding: 0 24px 48px;\n  }\n  .box-info-card[_ngcontent-%COMP%] {\n    margin: 20px 0;\n  }\n  .azioni-row[_ngcontent-%COMP%] {\n    gap: 14px;\n  }\n  .stats-row[_ngcontent-%COMP%] {\n    gap: 14px;\n  }\n  .box-nome[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (min-width: 1024px) {\n  .tracking-content[_ngcontent-%COMP%] {\n    padding: 0 40px 56px;\n    max-width: min(92vw, 1200px);\n    margin: 0 auto;\n  }\n  .box-nome[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .azioni-row[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n}\n/*# sourceMappingURL=tracking-box.page.css.map */'] });
var TrackingBoxPage = _TrackingBoxPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackingBoxPage, [{
    type: Component,
    args: [{ selector: "app-tracking-box", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IonHeader,
      IonToolbar,
      IonContent,
      IonCard,
      IonCardHeader,
      IonCardTitle,
      IonCardContent,
      IonList,
      IonItem,
      IonLabel,
      IonBadge,
      IonToggle,
      IonIcon
    ], template: `<ion-header class="ion-no-border">\r
  <ion-toolbar class="peek-toolbar">\r
    <div class="header-inner">\r
      <div class="header-top">\r
        <div class="header-greet">\r
          <img src="assets/icon/logoTitolo1.png" class="header-logo" alt="PeekBox" (click)="tornaIndietro()" style="cursor: pointer;" />\r
          <h1 class="header-greeting">TRACKING <span class="nome-verde">BOX</span></h1>\r
        </div>\r
        <button class="hdr-action-btn" (click)="caricaCheckpoints()" title="Aggiorna">\r
          <ion-icon name="refresh-outline"></ion-icon>\r
        </button>\r
      </div>\r
    </div>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="tracking-content">\r
\r
  <ng-container *ngIf="tipoProfilo === 'business'; else personalMsg">\r
\r
  <!-- INFO BOX -->\r
  <ion-card class="box-info-card" *ngIf="boxInfo">\r
    <ion-card-content>\r
      <div class="box-header-row">\r
        <div>\r
          <h2 class="box-nome">{{ boxInfo.nome }}</h2>\r
          <span class="box-armadio">{{ boxInfo.nome_armadio }}</span>\r
        </div>\r
        <ion-badge [color]="movingModeAttivo ? 'warning' : 'medium'" class="moving-badge">\r
          {{ movingModeAttivo ? '\u{1F69A} Moving' : '\u{1F4E6} Statico' }}\r
        </ion-badge>\r
      </div>\r
\r
      <!-- MOVING MODE TOGGLE -->\r
      <div class="moving-mode-row">\r
        <div class="moving-mode-info">\r
          <span class="toggle-label">Moving Mode</span>\r
          <span class="toggle-sub">Registra GPS ad ogni scansione QR</span>\r
        </div>\r
        <ion-toggle\r
          [(ngModel)]="movingModeAttivo"\r
          (ionChange)="toggleMovingMode($event)"\r
          color="warning">\r
        </ion-toggle>\r
      </div>\r
    </ion-card-content>\r
  </ion-card>\r
\r
  <!-- STATISTICHE TRACKING -->\r
  <div class="stats-row" *ngIf="checkpoints.length > 0">\r
    <div class="stat-chip">\r
      <span class="stat-num">{{ checkpoints.length }}</span>\r
      <span class="stat-lbl">Checkpoint</span>\r
    </div>\r
    <div class="stat-chip" *ngIf="checkpoints.length >= 2">\r
      <span class="stat-num">{{ checkpoints.length - 1 }}</span>\r
      <span class="stat-lbl">Tappe</span>\r
    </div>\r
    <div class="stat-chip">\r
      <span class="stat-num">{{ formatData(checkpoints[checkpoints.length-1].timestamp) }}</span>\r
      <span class="stat-lbl">Ultima scansione</span>\r
    </div>\r
  </div>\r
\r
  <!-- AZIONI -->\r
  <div class="azioni-row">\r
    <button class="btn-azione primary" (click)="aggiungiCheckpointManuale()">\r
      <ion-icon name="location-outline"></ion-icon>\r
      Registra Posizione\r
    </button>\r
    <button class="btn-azione secondary" (click)="apriPercorsoCompleto()" [disabled]="checkpoints.length < 2">\r
      <ion-icon name="map-outline"></ion-icon>\r
      Vedi Percorso\r
    </button>\r
  </div>\r
\r
  <!-- LISTA CHECKPOINT -->\r
  <div class="section-title" *ngIf="checkpoints.length > 0">\r
    Storico Posizioni\r
  </div>\r
\r
  <div class="checkpoint-list" *ngIf="!isLoading && checkpoints.length > 0">\r
    <div class="checkpoint-item" *ngFor="let cp of checkpoints | slice: 0: (checkpoints.length); let i = index; let last = last">\r
      <!-- Timeline connector -->\r
      <div class="timeline-col">\r
        <div class="timeline-dot" [class.first]="i === 0" [class.last]="last"></div>\r
        <div class="timeline-line" *ngIf="!last"></div>\r
      </div>\r
\r
      <div class="checkpoint-body">\r
        <div class="cp-header">\r
          <span class="cp-label">{{ cp.label || ('Posizione #' + (i + 1)) }}</span>\r
          <span class="cp-time">{{ formatData(cp.timestamp) }}</span>\r
        </div>\r
        <div class="cp-coords">\r
          {{ cp.latitudine | number:'1.4-4' }}, {{ cp.longitudine | number:'1.4-4' }}\r
          <span *ngIf="cp.accuratezza"> \xB7 \xB1{{ cp.accuratezza | number:'1.0-0' }}m</span>\r
        </div>\r
        <button class="btn-mini" (click)="apriPosizioneInMappa(cp.latitudine, cp.longitudine)">\r
          <ion-icon name="navigate-outline"></ion-icon> Apri in Mappa\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- EMPTY STATE -->\r
  <div class="empty-state" *ngIf="!isLoading && checkpoints.length === 0">\r
    <div class="empty-icon">\u{1F4CD}</div>\r
    <p class="empty-title">Nessun checkpoint registrato</p>\r
    <p class="empty-sub">\r
      {{ movingModeAttivo\r
        ? 'Il GPS verr\xE0 registrato automaticamente alla prossima scansione QR.'\r
        : 'Attiva il Moving Mode o aggiungi manualmente la posizione corrente.' }}\r
    </p>\r
  </div>\r
\r
  <!-- RESET -->\r
  <div class="reset-row" *ngIf="checkpoints.length > 0">\r
    <button class="btn-reset" (click)="confermaResetTracking()">\r
      <ion-icon name="trash-outline"></ion-icon> Elimina storico\r
    </button>\r
  </div>\r
\r
  </ng-container>\r
\r
  <ng-template #personalMsg>\r
    <div class="personal-blocked-msg" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 60vh; text-align: center; padding: 40px;">\r
      <div style="font-size: 4rem; margin-bottom: 20px;">\u{1F512}</div>\r
      <h3 style="color: #1E293B; margin-bottom: 10px;">Funzione non disponibile</h3>\r
      <p style="color: #64748B; font-size: 0.95rem; max-width: 300px;">Il tracking box \xE8 disponibile solo per account Business. Aggiorna il tuo piano per sbloccare questa funzionalit\xE0.</p>\r
    </div>\r
  </ng-template>\r
\r
</ion-content>\r
`, styles: ['/* src/app/tracking-box/tracking-box.page.scss */\n:host {\n  --bg: #F4F7F9;\n  --card-bg: #FFFFFF;\n  --accent: #3AABDB;\n  --warning: #7DC740;\n  --text: #0F172A;\n  --sub: #4A7A94;\n}\n.tracking-content {\n  --background: var(--bg);\n  --overflow: auto;\n  padding: 0 clamp(20px, 3.5vw, 56px) 40px;\n}\nion-header {\n  background: #FFFFFF;\n}\nion-toolbar.peek-toolbar {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\n.header-inner {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo:hover {\n  opacity: 0.75;\n}\n.header-logo:active {\n  opacity: 0.55;\n}\n.header-greeting {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\n.hdr-action-btn {\n  background: none;\n  border: none;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  color: #4A7A94;\n}\n.hdr-action-btn:hover {\n  background: rgba(74, 122, 148, 0.1);\n  color: #0F172A;\n}\n.hdr-action-btn:active {\n  transform: scale(0.92);\n}\n.hdr-action-btn ion-icon {\n  font-size: 1.3rem;\n}\n.box-info-card {\n  background: var(--card-bg);\n  border-radius: 18px;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  margin: 16px 0;\n  box-shadow: 0 8px 24px rgba(58, 171, 219, 0.04);\n}\n.box-info-card ion-card-content {\n  padding: 18px;\n}\n.box-header-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.box-nome {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text);\n  margin: 0 0 4px;\n}\n.box-armadio {\n  font-size: 12px;\n  color: var(--sub);\n}\n.moving-badge {\n  font-size: 11px;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.moving-mode-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 0 2px;\n  border-top: 1px solid rgba(58, 171, 219, 0.18);\n}\n.toggle-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text);\n  display: block;\n}\n.toggle-sub {\n  font-size: 11px;\n  color: var(--sub);\n}\n.stats-row {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  overflow-x: auto;\n}\n.stat-chip {\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 16px;\n  background: var(--card-bg);\n  border-radius: 12px;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  gap: 2px;\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.02);\n}\n.stat-num {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--accent);\n}\n.stat-lbl {\n  font-size: 10px;\n  color: var(--sub);\n  white-space: nowrap;\n}\n.azioni-row {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 24px;\n}\n.btn-azione {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 13px;\n  border-radius: 14px;\n  font-size: 13px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.btn-azione ion-icon {\n  font-size: 16px;\n}\n.btn-azione:disabled {\n  opacity: 0.35;\n  cursor: default;\n}\n.btn-azione.primary {\n  background:\n    linear-gradient(\n      135deg,\n      #3AABDB 0%,\n      #1A7FA8 100%);\n  color: white;\n  box-shadow: 0 4px 14px rgba(58, 171, 219, 0.2);\n}\n.btn-azione.secondary {\n  background: var(--card-bg);\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  color: var(--text);\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.02);\n}\n.section-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--sub);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 12px;\n}\n.checkpoint-list {\n  display: flex;\n  flex-direction: column;\n}\n.checkpoint-item {\n  display: flex;\n  gap: 14px;\n  padding-bottom: 16px;\n}\n.timeline-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 0 0 16px;\n  padding-top: 4px;\n}\n.timeline-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: rgba(15, 23, 42, 0.1);\n  border: 2px solid rgba(15, 23, 42, 0.2);\n  flex-shrink: 0;\n}\n.timeline-dot.first {\n  background: var(--accent);\n  border-color: var(--accent);\n}\n.timeline-dot.last {\n  background: var(--warning);\n  border-color: var(--warning);\n}\n.timeline-line {\n  width: 2px;\n  flex: 1;\n  background: rgba(58, 171, 219, 0.18);\n  margin-top: 4px;\n  min-height: 30px;\n}\n.checkpoint-body {\n  flex: 1;\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 12px 14px;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.02);\n}\n.cp-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 4px;\n}\n.cp-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text);\n}\n.cp-time {\n  font-size: 10px;\n  color: var(--sub);\n}\n.cp-coords {\n  font-size: 11px;\n  color: var(--sub);\n  font-family: monospace;\n  margin-bottom: 8px;\n}\n.btn-mini {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: var(--accent);\n  background: rgba(58, 171, 219, 0.08);\n  border: none;\n  border-radius: 8px;\n  padding: 4px 10px;\n  cursor: pointer;\n}\n.btn-mini ion-icon {\n  font-size: 12px;\n}\n.empty-state {\n  text-align: center;\n  padding: 48px 24px;\n}\n.empty-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n  color: var(--sub);\n}\n.empty-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text);\n  margin: 0 0 8px;\n}\n.empty-sub {\n  font-size: 13px;\n  color: var(--sub);\n  line-height: 1.5;\n}\n.reset-row {\n  display: flex;\n  justify-content: center;\n  margin-top: 24px;\n}\n.btn-reset {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #EF4444;\n  background: rgba(239, 68, 68, 0.05);\n  border: 1px solid rgba(239, 68, 68, 0.15);\n  border-radius: 10px;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.btn-reset ion-icon {\n  font-size: 15px;\n}\n@media (max-width: 399px) {\n  .tracking-content {\n    padding: 0 12px 32px;\n  }\n  .box-nome {\n    font-size: 15px;\n  }\n  .azioni-row {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .btn-azione {\n    width: 100%;\n  }\n  .stats-row {\n    gap: 6px;\n  }\n  .stat-chip {\n    padding: 8px 12px;\n  }\n  .checkpoint-body {\n    padding: 10px 12px;\n  }\n}\n@media (min-width: 768px) {\n  .tracking-content {\n    padding: 0 24px 48px;\n  }\n  .box-info-card {\n    margin: 20px 0;\n  }\n  .azioni-row {\n    gap: 14px;\n  }\n  .stats-row {\n    gap: 14px;\n  }\n  .box-nome {\n    font-size: 20px;\n  }\n}\n@media (min-width: 1024px) {\n  .tracking-content {\n    padding: 0 40px 56px;\n    max-width: min(92vw, 1200px);\n    margin: 0 auto;\n  }\n  .box-nome {\n    font-size: 22px;\n  }\n  .azioni-row {\n    gap: 16px;\n  }\n}\n/*# sourceMappingURL=tracking-box.page.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: DatabaseService }, { type: GpsService }, { type: AlertController }, { type: ToastController }, { type: Location }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrackingBoxPage, { className: "TrackingBoxPage", filePath: "src/app/tracking-box/tracking-box.page.ts", lineNumber: 27 });
})();
export {
  TrackingBoxPage
};
//# sourceMappingURL=tracking-box.page-SQC6FLDV.js.map
