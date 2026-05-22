import "./chunk-QXFS4N4X.js";

// node_modules/ionicons/dist/esm-es5/index-5514a13d.js
var queuePending = false;
var win = typeof window !== "undefined" ? window : {};
var doc = win.document || { head: {} };
var plt = { $flags$: 0, $resourcesUrl$: "", jmp: function(e) {
  return e();
}, raf: function(e) {
  return requestAnimationFrame(e);
}, ael: function(e, t, r, n) {
  return e.addEventListener(t, r, n);
}, rel: function(e, t, r, n) {
  return e.removeEventListener(t, r, n);
}, ce: function(e, t) {
  return new CustomEvent(e, t);
} };
var promiseResolve = function(e) {
  return Promise.resolve(e);
};
var supportsConstructableStylesheets = (function() {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})();
var consoleError = function(e, t) {
  return (0, console.error)(e, t);
};
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = function(e, t) {
  return function(r) {
    e.push(r);
    if (!queuePending) {
      queuePending = true;
      if (t && plt.$flags$ & 4) {
        nextTick(flush);
      } else {
        plt.raf(flush);
      }
    }
  };
};
var consume = function(e) {
  for (var t = 0; t < e.length; t++) {
    try {
      e[t](performance.now());
    } catch (e2) {
      consoleError(e2);
    }
  }
  e.length = 0;
};
var flush = function() {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = function(e) {
  return promiseResolve().then(e);
};
var writeTask = queueTask(queueDomWrites, true);

// node_modules/ionicons/dist/esm-es5/utils-ccb924b9.js
var CACHED_MAP;
var getIconMap = function() {
  if (typeof window === "undefined") {
    return /* @__PURE__ */ new Map();
  } else {
    if (!CACHED_MAP) {
      var r = window;
      r.Ionicons = r.Ionicons || {};
      CACHED_MAP = r.Ionicons.map = r.Ionicons.map || /* @__PURE__ */ new Map();
    }
    return CACHED_MAP;
  }
};
var addIcons = function(r) {
  var t = getIconMap();
  Object.keys(r).forEach((function(e) {
    return t.set(e, r[e]);
  }));
};
export {
  addIcons
};
//# sourceMappingURL=ionicons.js.map
