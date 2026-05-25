import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-GYVL5W3Y.js";
import {
  componentOnReady
} from "./chunk-O22TAHPR.js";
import {
  readTask,
  writeTask
} from "./chunk-OJWZRFMR.js";
import {
  __async
} from "./chunk-QXFS4N4X.js";

// node_modules/@ionic/core/dist/esm/status-tap-BfJqFSLF.js
var startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(() => __async(null, null, function* () {
            contentEl.style.setProperty("--overflow", "hidden");
            yield scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          }));
        });
      }
    });
  });
};
export {
  startStatusTap
};
//# sourceMappingURL=status-tap-BfJqFSLF-DWO6ZWYL.js.map
