import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-2AAOITSV.js";

// src/app/services/gps.ts
var _GpsService = class _GpsService {
  /**
   * Ottieni la posizione GPS corrente via browser Geolocation API.
   * Compatibile con Capacitor (mobile nativo) e browser (PWA/web).
   */
  getPosizione() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocalizzazione non supportata dal dispositivo."));
        return;
      }
      navigator.geolocation.getCurrentPosition((pos) => {
        resolve({
          latitudine: pos.coords.latitude,
          longitudine: pos.coords.longitude,
          accuratezza: pos.coords.accuracy
        });
      }, (err) => {
        reject(new Error(`GPS non disponibile: ${err.message}`));
      }, {
        enableHighAccuracy: true,
        timeout: 1e4,
        maximumAge: 0
      });
    });
  }
  /**
   * Costruisce il link a Google Maps per visualizzare un punto singolo.
   */
  buildGoogleMapsUrl(lat, lng) {
    return `https://www.google.com/maps?q=${lat},${lng}`;
  }
  /**
   * Costruisce il link a Google Maps per un percorso multipunto.
   * Waypoints = checkpoint intermedi, ultimo punto = destinazione.
   */
  buildPercorsoUrl(checkpoints) {
    if (checkpoints.length === 0)
      return "";
    if (checkpoints.length === 1) {
      return this.buildGoogleMapsUrl(checkpoints[0].latitudine, checkpoints[0].longitudine);
    }
    const origin = `${checkpoints[0].latitudine},${checkpoints[0].longitudine}`;
    const destination = `${checkpoints[checkpoints.length - 1].latitudine},${checkpoints[checkpoints.length - 1].longitudine}`;
    const waypoints = checkpoints.slice(1, -1).map((c) => `${c.latitudine},${c.longitudine}`).join("|");
    const waypointsParam = waypoints ? `&waypoints=${encodeURIComponent(waypoints)}` : "";
    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${waypointsParam}`;
  }
  /**
   * Calcola la distanza in metri tra due coordinate geografiche
   * usando la formula di Haversine (equivalente lato client del backend).
   */
  calcolaDistanzaMetri(lat1, lng1, lat2, lng2) {
    const R = 6371e3;
    const toRad = (deg) => deg * Math.PI / 180;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  /**
   * Verifica lato client se una posizione è dentro un geofence.
   * Utile per un controllo immediato prima della chiamata API.
   */
  isDentroGeofence(posizioneAttuale, centroFence, raggioM) {
    const dist = this.calcolaDistanzaMetri(centroFence.latitudine, centroFence.longitudine, posizioneAttuale.latitudine, posizioneAttuale.longitudine);
    return dist <= raggioM;
  }
};
_GpsService.\u0275fac = function GpsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GpsService)();
};
_GpsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GpsService, factory: _GpsService.\u0275fac, providedIn: "root" });
var GpsService = _GpsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GpsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  GpsService
};
//# sourceMappingURL=chunk-5B5KTTKB.js.map
