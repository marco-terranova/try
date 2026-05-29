import {
  DatabaseService
} from "./chunk-5G3PJOGU.js";
import {
  addCircleOutline,
  addIcons,
  checkmarkCircleOutline,
  closeOutline,
  cloudDownloadOutline,
  informationCircleOutline,
  pencilOutline,
  shareOutline,
  star,
  starOutline,
  timeOutline,
  trashOutline
} from "./chunk-4ITIBTO3.js";
import {
  NavigationHistoryService
} from "./chunk-R5EA4FTC.js";
import {
  ActionSheetController,
  AlertController,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonSpinner,
  IonTextarea,
  IonToggle,
  IonToolbar,
  ToastController
} from "./chunk-VSLPI6WN.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NumberValueAccessor,
  Router,
  RouterModule,
  UpperCasePipe,
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
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
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
  __async,
  __commonJS,
  __toESM
} from "./chunk-QXFS4N4X.js";

// node_modules/qrcode/lib/can-promise.js
var require_can_promise = __commonJS({
  "node_modules/qrcode/lib/can-promise.js"(exports, module) {
    "use strict";
    module.exports = function() {
      return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
    };
  }
});

// node_modules/qrcode/lib/core/utils.js
var require_utils = __commonJS({
  "node_modules/qrcode/lib/core/utils.js"(exports) {
    "use strict";
    var toSJISFunction;
    var CODEWORDS_COUNT = [
      0,
      // Not used
      26,
      44,
      70,
      100,
      134,
      172,
      196,
      242,
      292,
      346,
      404,
      466,
      532,
      581,
      655,
      733,
      815,
      901,
      991,
      1085,
      1156,
      1258,
      1364,
      1474,
      1588,
      1706,
      1828,
      1921,
      2051,
      2185,
      2323,
      2465,
      2611,
      2761,
      2876,
      3034,
      3196,
      3362,
      3532,
      3706
    ];
    exports.getSymbolSize = function getSymbolSize(version) {
      if (!version) throw new Error('"version" cannot be null or undefined');
      if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
      return version * 4 + 17;
    };
    exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
      return CODEWORDS_COUNT[version];
    };
    exports.getBCHDigit = function(data) {
      let digit = 0;
      while (data !== 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    };
    exports.setToSJISFunction = function setToSJISFunction(f) {
      if (typeof f !== "function") {
        throw new Error('"toSJISFunc" is not a valid function.');
      }
      toSJISFunction = f;
    };
    exports.isKanjiModeEnabled = function() {
      return typeof toSJISFunction !== "undefined";
    };
    exports.toSJIS = function toSJIS(kanji) {
      return toSJISFunction(kanji);
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
    "use strict";
    exports.L = { bit: 1 };
    exports.M = { bit: 0 };
    exports.Q = { bit: 3 };
    exports.H = { bit: 2 };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + string);
      }
    }
    exports.isValid = function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = __commonJS({
  "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
    "use strict";
    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    BitBuffer.prototype = {
      get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
      },
      put: function(num, length) {
        for (let i = 0; i < length; i++) {
          this.putBit((num >>> length - i - 1 & 1) === 1);
        }
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }
        if (bit) {
          this.buffer[bufIndex] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    module.exports = BitBuffer;
  }
});

// node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = __commonJS({
  "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
    "use strict";
    function BitMatrix(size) {
      if (!size || size < 1) {
        throw new Error("BitMatrix size must be defined and greater than 0");
      }
      this.size = size;
      this.data = new Uint8Array(size * size);
      this.reservedBit = new Uint8Array(size * size);
    }
    BitMatrix.prototype.set = function(row, col, value, reserved) {
      const index = row * this.size + col;
      this.data[index] = value;
      if (reserved) this.reservedBit[index] = true;
    };
    BitMatrix.prototype.get = function(row, col) {
      return this.data[row * this.size + col];
    };
    BitMatrix.prototype.xor = function(row, col, value) {
      this.data[row * this.size + col] ^= value;
    };
    BitMatrix.prototype.isReserved = function(row, col) {
      return this.reservedBit[row * this.size + col];
    };
    module.exports = BitMatrix;
  }
});

// node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = __commonJS({
  "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
    "use strict";
    var getSymbolSize = require_utils().getSymbolSize;
    exports.getRowColCoords = function getRowColCoords(version) {
      if (version === 1) return [];
      const posCount = Math.floor(version / 7) + 2;
      const size = getSymbolSize(version);
      const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      const positions = [size - 7];
      for (let i = 1; i < posCount - 1; i++) {
        positions[i] = positions[i - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports.getPositions = function getPositions(version) {
      const coords = [];
      const pos = exports.getRowColCoords(version);
      const posLength = pos.length;
      for (let i = 0; i < posLength; i++) {
        for (let j = 0; j < posLength; j++) {
          if (i === 0 && j === 0 || // top-left
          i === 0 && j === posLength - 1 || // bottom-left
          i === posLength - 1 && j === 0) {
            continue;
          }
          coords.push([pos[i], pos[j]]);
        }
      }
      return coords;
    };
  }
});

// node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = __commonJS({
  "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
    "use strict";
    var getSymbolSize = require_utils().getSymbolSize;
    var FINDER_PATTERN_SIZE = 7;
    exports.getPositions = function getPositions(version) {
      const size = getSymbolSize(version);
      return [
        // top-left
        [0, 0],
        // top-right
        [size - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size - FINDER_PATTERN_SIZE]
      ];
    };
  }
});

// node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = __commonJS({
  "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
    "use strict";
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports.isValid = function isValid(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    exports.from = function from(value) {
      return exports.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports.getPenaltyN1 = function getPenaltyN1(data) {
      const size = data.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size; col++) {
          let module2 = data.get(row, col);
          if (module2 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module2;
            sameCountCol = 1;
          }
          module2 = data.get(col, row);
          if (module2 === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module2;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports.getPenaltyN2 = function getPenaltyN2(data) {
      const size = data.size;
      let points = 0;
      for (let row = 0; row < size - 1; row++) {
        for (let col = 0; col < size - 1; col++) {
          const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0) points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports.getPenaltyN3 = function getPenaltyN3(data) {
      const size = data.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports.getPenaltyN4 = function getPenaltyN4(data) {
      let darkCount = 0;
      const modulesCount = data.data.length;
      for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
      const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern, i, j) {
      switch (maskPattern) {
        case exports.Patterns.PATTERN000:
          return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
          return i % 2 === 0;
        case exports.Patterns.PATTERN010:
          return j % 3 === 0;
        case exports.Patterns.PATTERN011:
          return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
          return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }
    exports.applyMask = function applyMask(pattern, data) {
      const size = data.size;
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (data.isReserved(row, col)) continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
      const numPatterns = Object.keys(exports.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p = 0; p < numPatterns; p++) {
        setupFormatFunc(p);
        exports.applyMask(p, data);
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p;
        }
      }
      return bestPattern;
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
    "use strict";
    var ECLevel = require_error_correction_level();
    var EC_BLOCKS_TABLE = [
      // L  M  Q  H
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      1,
      2,
      2,
      4,
      1,
      2,
      4,
      4,
      2,
      4,
      4,
      4,
      2,
      4,
      6,
      5,
      2,
      4,
      6,
      6,
      2,
      5,
      8,
      8,
      4,
      5,
      8,
      8,
      4,
      5,
      8,
      11,
      4,
      8,
      10,
      11,
      4,
      9,
      12,
      16,
      4,
      9,
      16,
      16,
      6,
      10,
      12,
      18,
      6,
      10,
      17,
      16,
      6,
      11,
      16,
      19,
      6,
      13,
      18,
      21,
      7,
      14,
      21,
      25,
      8,
      16,
      20,
      25,
      8,
      17,
      23,
      25,
      9,
      17,
      23,
      34,
      9,
      18,
      25,
      30,
      10,
      20,
      27,
      32,
      12,
      21,
      29,
      35,
      12,
      23,
      34,
      37,
      12,
      25,
      34,
      40,
      13,
      26,
      35,
      42,
      14,
      28,
      38,
      45,
      15,
      29,
      40,
      48,
      16,
      31,
      43,
      51,
      17,
      33,
      45,
      54,
      18,
      35,
      48,
      57,
      19,
      37,
      51,
      60,
      19,
      38,
      53,
      63,
      20,
      40,
      56,
      66,
      21,
      43,
      59,
      70,
      22,
      45,
      62,
      74,
      24,
      47,
      65,
      77,
      25,
      49,
      68,
      81
    ];
    var EC_CODEWORDS_TABLE = [
      // L  M  Q  H
      7,
      10,
      13,
      17,
      10,
      16,
      22,
      28,
      15,
      26,
      36,
      44,
      20,
      36,
      52,
      64,
      26,
      48,
      72,
      88,
      36,
      64,
      96,
      112,
      40,
      72,
      108,
      130,
      48,
      88,
      132,
      156,
      60,
      110,
      160,
      192,
      72,
      130,
      192,
      224,
      80,
      150,
      224,
      264,
      96,
      176,
      260,
      308,
      104,
      198,
      288,
      352,
      120,
      216,
      320,
      384,
      132,
      240,
      360,
      432,
      144,
      280,
      408,
      480,
      168,
      308,
      448,
      532,
      180,
      338,
      504,
      588,
      196,
      364,
      546,
      650,
      224,
      416,
      600,
      700,
      224,
      442,
      644,
      750,
      252,
      476,
      690,
      816,
      270,
      504,
      750,
      900,
      300,
      560,
      810,
      960,
      312,
      588,
      870,
      1050,
      336,
      644,
      952,
      1110,
      360,
      700,
      1020,
      1200,
      390,
      728,
      1050,
      1260,
      420,
      784,
      1140,
      1350,
      450,
      812,
      1200,
      1440,
      480,
      868,
      1290,
      1530,
      510,
      924,
      1350,
      1620,
      540,
      980,
      1440,
      1710,
      570,
      1036,
      1530,
      1800,
      570,
      1064,
      1590,
      1890,
      600,
      1120,
      1680,
      1980,
      630,
      1204,
      1770,
      2100,
      660,
      1260,
      1860,
      2220,
      720,
      1316,
      1950,
      2310,
      750,
      1372,
      2040,
      2430
    ];
    exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
  }
});

// node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = __commonJS({
  "node_modules/qrcode/lib/core/galois-field.js"(exports) {
    "use strict";
    var EXP_TABLE = new Uint8Array(512);
    var LOG_TABLE = new Uint8Array(256);
    (function initTables() {
      let x = 1;
      for (let i = 0; i < 255; i++) {
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1;
        if (x & 256) {
          x ^= 285;
        }
      }
      for (let i = 255; i < 512; i++) {
        EXP_TABLE[i] = EXP_TABLE[i - 255];
      }
    })();
    exports.log = function log(n) {
      if (n < 1) throw new Error("log(" + n + ")");
      return LOG_TABLE[n];
    };
    exports.exp = function exp(n) {
      return EXP_TABLE[n];
    };
    exports.mul = function mul(x, y) {
      if (x === 0 || y === 0) return 0;
      return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
    };
  }
});

// node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = __commonJS({
  "node_modules/qrcode/lib/core/polynomial.js"(exports) {
    "use strict";
    var GF = require_galois_field();
    exports.mul = function mul(p1, p2) {
      const coeff = new Uint8Array(p1.length + p2.length - 1);
      for (let i = 0; i < p1.length; i++) {
        for (let j = 0; j < p2.length; j++) {
          coeff[i + j] ^= GF.mul(p1[i], p2[j]);
        }
      }
      return coeff;
    };
    exports.mod = function mod(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i = 0; i < divisor.length; i++) {
          result[i] ^= GF.mul(divisor[i], coeff);
        }
        let offset = 0;
        while (offset < result.length && result[offset] === 0) offset++;
        result = result.slice(offset);
      }
      return result;
    };
    exports.generateECPolynomial = function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i = 0; i < degree; i++) {
        poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
      }
      return poly;
    };
  }
});

// node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = __commonJS({
  "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
    "use strict";
    var Polynomial = require_polynomial();
    function ReedSolomonEncoder(degree) {
      this.genPoly = void 0;
      this.degree = degree;
      if (this.degree) this.initialize(this.degree);
    }
    ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
      this.degree = degree;
      this.genPoly = Polynomial.generateECPolynomial(this.degree);
    };
    ReedSolomonEncoder.prototype.encode = function encode(data) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }
      const paddedData = new Uint8Array(data.length + this.degree);
      paddedData.set(data);
      const remainder = Polynomial.mod(paddedData, this.genPoly);
      const start = this.degree - remainder.length;
      if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
      }
      return remainder;
    };
    module.exports = ReedSolomonEncoder;
  }
});

// node_modules/qrcode/lib/core/version-check.js
var require_version_check = __commonJS({
  "node_modules/qrcode/lib/core/version-check.js"(exports) {
    "use strict";
    exports.isValid = function isValid(version) {
      return !isNaN(version) && version >= 1 && version <= 40;
    };
  }
});

// node_modules/qrcode/lib/core/regex.js
var require_regex = __commonJS({
  "node_modules/qrcode/lib/core/regex.js"(exports) {
    "use strict";
    var numeric = "[0-9]+";
    var alphanumeric = "[A-Z $%*+\\-./:]+";
    var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    kanji = kanji.replace(/u/g, "\\u");
    var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
    exports.KANJI = new RegExp(kanji, "g");
    exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    exports.BYTE = new RegExp(byte, "g");
    exports.NUMERIC = new RegExp(numeric, "g");
    exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
    var TEST_KANJI = new RegExp("^" + kanji + "$");
    var TEST_NUMERIC = new RegExp("^" + numeric + "$");
    var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    exports.testKanji = function testKanji(str) {
      return TEST_KANJI.test(str);
    };
    exports.testNumeric = function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    };
    exports.testAlphanumeric = function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    };
  }
});

// node_modules/qrcode/lib/core/mode.js
var require_mode = __commonJS({
  "node_modules/qrcode/lib/core/mode.js"(exports) {
    "use strict";
    var VersionCheck = require_version_check();
    var Regex = require_regex();
    exports.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports.MIXED = {
      bit: -1
    };
    exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
      if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid version: " + version);
      }
      if (version >= 1 && version < 10) return mode.ccBits[0];
      else if (version < 27) return mode.ccBits[1];
      return mode.ccBits[2];
    };
    exports.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr)) return exports.KANJI;
      else return exports.BYTE;
    };
    exports.toString = function toString(mode) {
      if (mode && mode.id) return mode.id;
      throw new Error("Invalid mode");
    };
    exports.isValid = function isValid(mode) {
      return mode && mode.bit && mode.ccBits;
    };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports.NUMERIC;
        case "alphanumeric":
          return exports.ALPHANUMERIC;
        case "kanji":
          return exports.KANJI;
        case "byte":
          return exports.BYTE;
        default:
          throw new Error("Unknown mode: " + string);
      }
    }
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/version.js
var require_version = __commonJS({
  "node_modules/qrcode/lib/core/version.js"(exports) {
    "use strict";
    var Utils = require_utils();
    var ECCode = require_error_correction_code();
    var ECLevel = require_error_correction_level();
    var Mode = require_mode();
    var VersionCheck = require_version_check();
    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G18_BCH = Utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode, version) {
      return Mode.getCharCountIndicator(mode, version) + 4;
    }
    function getTotalBitsFromDataArray(segments, version) {
      let totalBits = 0;
      segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports.from = function from(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode === "undefined") mode = Mode.BYTE;
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode === Mode.MIXED) return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
      switch (mode) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
          return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
      let seg;
      const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports.getEncodedBits = function getEncodedBits(version) {
      if (!VersionCheck.isValid(version) || version < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d = version << 12;
      while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
        d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
      }
      return version << 12 | d;
    };
  }
});

// node_modules/qrcode/lib/core/format-info.js
var require_format_info = __commonJS({
  "node_modules/qrcode/lib/core/format-info.js"(exports) {
    "use strict";
    var Utils = require_utils();
    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var G15_BCH = Utils.getBCHDigit(G15);
    exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
      const data = errorCorrectionLevel.bit << 3 | mask;
      let d = data << 10;
      while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
        d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
      }
      return (data << 10 | d) ^ G15_MASK;
    };
  }
});

// node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = __commonJS({
  "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
    "use strict";
    var Mode = require_mode();
    function NumericData(data) {
      this.mode = Mode.NUMERIC;
      this.data = data.toString();
    }
    NumericData.getBitsLength = function getBitsLength(length) {
      return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
    };
    NumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    NumericData.prototype.getBitsLength = function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    };
    NumericData.prototype.write = function write(bitBuffer) {
      let i, group, value;
      for (i = 0; i + 3 <= this.data.length; i += 3) {
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
      }
      const remainingNum = this.data.length - i;
      if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    };
    module.exports = NumericData;
  }
});

// node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = __commonJS({
  "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
    "use strict";
    var Mode = require_mode();
    var ALPHA_NUM_CHARS = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":"
    ];
    function AlphanumericData(data) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data;
    }
    AlphanumericData.getBitsLength = function getBitsLength(length) {
      return 11 * Math.floor(length / 2) + 6 * (length % 2);
    };
    AlphanumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    AlphanumericData.prototype.getBitsLength = function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    };
    AlphanumericData.prototype.write = function write(bitBuffer) {
      let i;
      for (i = 0; i + 2 <= this.data.length; i += 2) {
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        bitBuffer.put(value, 11);
      }
      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
      }
    };
    module.exports = AlphanumericData;
  }
});

// node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = __commonJS({
  "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
    "use strict";
    var Mode = require_mode();
    function ByteData(data) {
      this.mode = Mode.BYTE;
      if (typeof data === "string") {
        this.data = new TextEncoder().encode(data);
      } else {
        this.data = new Uint8Array(data);
      }
    }
    ByteData.getBitsLength = function getBitsLength(length) {
      return length * 8;
    };
    ByteData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    ByteData.prototype.getBitsLength = function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    };
    ByteData.prototype.write = function(bitBuffer) {
      for (let i = 0, l = this.data.length; i < l; i++) {
        bitBuffer.put(this.data[i], 8);
      }
    };
    module.exports = ByteData;
  }
});

// node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = __commonJS({
  "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
    "use strict";
    var Mode = require_mode();
    var Utils = require_utils();
    function KanjiData(data) {
      this.mode = Mode.KANJI;
      this.data = data;
    }
    KanjiData.getBitsLength = function getBitsLength(length) {
      return length * 13;
    };
    KanjiData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    KanjiData.prototype.getBitsLength = function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    };
    KanjiData.prototype.write = function(bitBuffer) {
      let i;
      for (i = 0; i < this.data.length; i++) {
        let value = Utils.toSJIS(this.data[i]);
        if (value >= 33088 && value <= 40956) {
          value -= 33088;
        } else if (value >= 57408 && value <= 60351) {
          value -= 49472;
        } else {
          throw new Error(
            "Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8"
          );
        }
        value = (value >>> 8 & 255) * 192 + (value & 255);
        bitBuffer.put(value, 13);
      }
    };
    module.exports = KanjiData;
  }
});

// node_modules/dijkstrajs/dijkstra.js
var require_dijkstra = __commonJS({
  "node_modules/dijkstrajs/dijkstra.js"(exports, module) {
    "use strict";
    var dijkstra = {
      single_source_shortest_paths: function(graph, s, d) {
        var predecessors = {};
        var costs = {};
        costs[s] = 0;
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open.empty()) {
          closest = open.pop();
          u = closest.value;
          cost_of_s_to_u = closest.cost;
          adjacent_nodes = graph[u] || {};
          for (v in adjacent_nodes) {
            if (adjacent_nodes.hasOwnProperty(v)) {
              cost_of_e = adjacent_nodes[v];
              cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
              cost_of_s_to_v = costs[v];
              first_visit = typeof costs[v] === "undefined";
              if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                costs[v] = cost_of_s_to_u_plus_cost_of_e;
                open.push(v, cost_of_s_to_u_plus_cost_of_e);
                predecessors[v] = u;
              }
            }
          }
        }
        if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
          var msg = ["Could not find a path from ", s, " to ", d, "."].join("");
          throw new Error(msg);
        }
        return predecessors;
      },
      extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while (u) {
          nodes.push(u);
          predecessor = predecessors[u];
          u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
      },
      find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(
          predecessors,
          d
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(opts) {
          var T = dijkstra.PriorityQueue, t = {}, key;
          opts = opts || {};
          for (key in T) {
            if (T.hasOwnProperty(key)) {
              t[key] = T[key];
            }
          }
          t.queue = [];
          t.sorter = opts.sorter || T.default_sorter;
          return t;
        },
        default_sorter: function(a, b) {
          return a.cost - b.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(value, cost) {
          var item = { value, cost };
          this.queue.push(item);
          this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    if (typeof module !== "undefined") {
      module.exports = dijkstra;
    }
  }
});

// node_modules/qrcode/lib/core/segments.js
var require_segments = __commonJS({
  "node_modules/qrcode/lib/core/segments.js"(exports) {
    "use strict";
    var Mode = require_mode();
    var NumericData = require_numeric_data();
    var AlphanumericData = require_alphanumeric_data();
    var ByteData = require_byte_data();
    var KanjiData = require_kanji_data();
    var Regex = require_regex();
    var Utils = require_utils();
    var dijkstra = require_dijkstra();
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex, mode, str) {
      const segments = [];
      let result;
      while ((result = regex.exec(str)) !== null) {
        segments.push({
          data: result[0],
          index: result.index,
          mode,
          length: result[0].length
        });
      }
      return segments;
    }
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length, mode) {
      switch (mode) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
          return KanjiData.getBitsLength(length);
        case Mode.BYTE:
          return ByteData.getBitsLength(length);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      const nodes = [];
      for (let i = 0; i < segs.length; i++) {
        const seg = segs[i];
        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.ALPHANUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.KANJI:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
            break;
          case Mode.BYTE:
            nodes.push([
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version) {
      const table = {};
      const graph = { start: {} };
      let prevNodeIds = ["start"];
      for (let i = 0; i < nodes.length; i++) {
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for (let j = 0; j < nodeGroup.length; j++) {
          const node = nodeGroup[j];
          const key = "" + i + j;
          currentNodeIds.push(key);
          table[key] = { node, lastCount: 0 };
          graph[key] = {};
          for (let n = 0; n < prevNodeIds.length; n++) {
            const prevNodeId = prevNodeIds[n];
            if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
              table[prevNodeId].lastCount += node.length;
            } else {
              if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n = 0; n < prevNodeIds.length; n++) {
        graph[prevNodeIds[n]].end = 0;
      }
      return { map: graph, table };
    }
    function buildSingleSegment(data, modesHint) {
      let mode;
      const bestMode = Mode.getBestModeForData(data);
      mode = Mode.from(modesHint, bestMode);
      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }
      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);
        case Mode.KANJI:
          return new KanjiData(data);
        case Mode.BYTE:
          return new ByteData(data);
      }
    }
    exports.fromArray = function fromArray(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports.fromString = function fromString(data, version) {
      const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version);
      const path = dijkstra.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i = 1; i < path.length - 1; i++) {
        optimizedSegs.push(graph.table[path[i]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    exports.rawSplit = function rawSplit(data) {
      return exports.fromArray(
        getSegmentsFromString(data, Utils.isKanjiModeEnabled())
      );
    };
  }
});

// node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = __commonJS({
  "node_modules/qrcode/lib/core/qrcode.js"(exports) {
    "use strict";
    var Utils = require_utils();
    var ECLevel = require_error_correction_level();
    var BitBuffer = require_bit_buffer();
    var BitMatrix = require_bit_matrix();
    var AlignmentPattern = require_alignment_pattern();
    var FinderPattern = require_finder_pattern();
    var MaskPattern = require_mask_pattern();
    var ECCode = require_error_correction_code();
    var ReedSolomonEncoder = require_reed_solomon_encoder();
    var Version = require_version();
    var FormatInfo = require_format_info();
    var Mode = require_mode();
    var Segments = require_segments();
    function setupFinderPattern(matrix, version) {
      const size = matrix.size;
      const pos = FinderPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -1; r <= 7; r++) {
          if (row + r <= -1 || size <= row + r) continue;
          for (let c = -1; c <= 7; c++) {
            if (col + c <= -1 || size <= col + c) continue;
            if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupTimingPattern(matrix) {
      const size = matrix.size;
      for (let r = 8; r < size - 8; r++) {
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
      }
    }
    function setupAlignmentPattern(matrix, version) {
      const pos = AlignmentPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -2; r <= 2; r++) {
          for (let c = -2; c <= 2; c++) {
            if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupVersionInfo(matrix, version) {
      const size = matrix.size;
      const bits = Version.getEncodedBits(version);
      let row, col, mod;
      for (let i = 0; i < 18; i++) {
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
      }
    }
    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      const size = matrix.size;
      const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      let i, mod;
      for (i = 0; i < 15; i++) {
        mod = (bits >> i & 1) === 1;
        if (i < 6) {
          matrix.set(i, 8, mod, true);
        } else if (i < 8) {
          matrix.set(i + 1, 8, mod, true);
        } else {
          matrix.set(size - 15 + i, 8, mod, true);
        }
        if (i < 8) {
          matrix.set(8, size - i - 1, mod, true);
        } else if (i < 9) {
          matrix.set(8, 15 - i - 1 + 1, mod, true);
        } else {
          matrix.set(8, 15 - i - 1, mod, true);
        }
      }
      matrix.set(size - 8, 8, 1, true);
    }
    function setupData(matrix, data) {
      const size = matrix.size;
      let inc = -1;
      let row = size - 1;
      let bitIndex = 7;
      let byteIndex = 0;
      for (let col = size - 1; col > 0; col -= 2) {
        if (col === 6) col--;
        while (true) {
          for (let c = 0; c < 2; c++) {
            if (!matrix.isReserved(row, col - c)) {
              let dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
              }
              matrix.set(row, col - c, dark);
              bitIndex--;
              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || size <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    function createData(version, errorCorrectionLevel, segments) {
      const buffer = new BitBuffer();
      segments.forEach(function(data) {
        buffer.put(data.mode.bit, 4);
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        data.write(buffer);
      });
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
      }
      const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
      for (let i = 0; i < remainingByte; i++) {
        buffer.put(i % 2 ? 17 : 236, 8);
      }
      return createCodewords(buffer, version, errorCorrectionLevel);
    }
    function createCodewords(bitBuffer, version, errorCorrectionLevel) {
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewords = totalCodewords - ecTotalCodewords;
      const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
      const blocksInGroup2 = totalCodewords % ecTotalBlocks;
      const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
      const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
      const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
      const rs = new ReedSolomonEncoder(ecCount);
      let offset = 0;
      const dcData = new Array(ecTotalBlocks);
      const ecData = new Array(ecTotalBlocks);
      let maxDataSize = 0;
      const buffer = new Uint8Array(bitBuffer.buffer);
      for (let b = 0; b < ecTotalBlocks; b++) {
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        dcData[b] = buffer.slice(offset, offset + dataSize);
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      }
      const data = new Uint8Array(totalCodewords);
      let index = 0;
      let i, r;
      for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          if (i < dcData[r].length) {
            data[index++] = dcData[r][i];
          }
        }
      }
      for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          data[index++] = ecData[r][i];
        }
      }
      return data;
    }
    function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
      let segments;
      if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
      } else if (typeof data === "string") {
        let estimatedVersion = version;
        if (!estimatedVersion) {
          const rawSegments = Segments.rawSplit(data);
          estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        segments = Segments.fromString(data, estimatedVersion || 40);
      } else {
        throw new Error("Invalid data");
      }
      const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
      if (!bestVersion) {
        throw new Error("The amount of data is too big to be stored in a QR Code");
      }
      if (!version) {
        version = bestVersion;
      } else if (version < bestVersion) {
        throw new Error(
          "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
        );
      }
      const dataBits = createData(version, errorCorrectionLevel, segments);
      const moduleCount = Utils.getSymbolSize(version);
      const modules = new BitMatrix(moduleCount);
      setupFinderPattern(modules, version);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version);
      setupFormatInfo(modules, errorCorrectionLevel, 0);
      if (version >= 7) {
        setupVersionInfo(modules, version);
      }
      setupData(modules, dataBits);
      if (isNaN(maskPattern)) {
        maskPattern = MaskPattern.getBestMask(
          modules,
          setupFormatInfo.bind(null, modules, errorCorrectionLevel)
        );
      }
      MaskPattern.applyMask(maskPattern, modules);
      setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
      return {
        modules,
        version,
        errorCorrectionLevel,
        maskPattern,
        segments
      };
    }
    exports.create = function create(data, options) {
      if (typeof data === "undefined" || data === "") {
        throw new Error("No input text");
      }
      let errorCorrectionLevel = ECLevel.M;
      let version;
      let mask;
      if (typeof options !== "undefined") {
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
          Utils.setToSJISFunction(options.toSJISFunc);
        }
      }
      return createSymbol(data, version, errorCorrectionLevel, mask);
    };
  }
});

// node_modules/qrcode/lib/renderer/utils.js
var require_utils2 = __commonJS({
  "node_modules/qrcode/lib/renderer/utils.js"(exports) {
    "use strict";
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      let hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
          return [c, c];
        }));
      }
      if (hexCode.length === 6) hexCode.push("F", "F");
      const hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    exports.getOptions = function getOptions(options) {
      if (!options) options = {};
      if (!options.color) options.color = {};
      const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      const width = options.width && options.width >= 21 ? options.width : void 0;
      const scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };
    exports.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };
    exports.getImageWidth = function getImageWidth(qrSize, opts) {
      const scale = exports.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
      const size = qr.modules.size;
      const data = qr.modules.data;
      const scale = exports.getScale(size, opts);
      const symbolSize = Math.floor((size + opts.margin * 2) * scale);
      const scaledMargin = opts.margin * scale;
      const palette = [opts.color.light, opts.color.dark];
      for (let i = 0; i < symbolSize; i++) {
        for (let j = 0; j < symbolSize; j++) {
          let posDst = (i * symbolSize + j) * 4;
          let pxColor = opts.color.light;
          if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i - scaledMargin) / scale);
            const jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
  }
});

// node_modules/qrcode/lib/renderer/canvas.js
var require_canvas = __commonJS({
  "node_modules/qrcode/lib/renderer/canvas.js"(exports) {
    "use strict";
    var Utils = require_utils2();
    function clearCanvas(ctx, canvas, size) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!canvas.style) canvas.style = {};
      canvas.height = size;
      canvas.width = size;
      canvas.style.height = size + "px";
      canvas.style.width = size + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports.render = function render(qrData, canvas, options) {
      let opts = options;
      let canvasEl = canvas;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!canvas) {
        canvasEl = getCanvasElement();
      }
      opts = Utils.getOptions(opts);
      const size = Utils.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image = ctx.createImageData(size, size);
      Utils.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!opts) opts = {};
      const canvasEl = exports.render(qrData, canvas, opts);
      const type = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type, rendererOpts.quality);
    };
  }
});

// node_modules/qrcode/lib/renderer/svg-tag.js
var require_svg_tag = __commonJS({
  "node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
    "use strict";
    var Utils = require_utils2();
    function getColorAttrib(color, attrib) {
      const alpha = color.a / 255;
      const str = attrib + '="' + color.hex + '"';
      return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
    }
    function svgCmd(cmd, x, y) {
      let str = cmd + x;
      if (typeof y !== "undefined") str += " " + y;
      return str;
    }
    function qrToPath(data, size, margin) {
      let path = "";
      let moveBy = 0;
      let newRow = false;
      let lineLength = 0;
      for (let i = 0; i < data.length; i++) {
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
          lineLength++;
          if (!(i > 0 && col > 0 && data[i - 1])) {
            path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
            moveBy = 0;
            newRow = false;
          }
          if (!(col + 1 < size && data[i + 1])) {
            path += svgCmd("h", lineLength);
            lineLength = 0;
          }
        } else {
          moveBy++;
        }
      }
      return path;
    }
    exports.render = function render(qrData, options, cb) {
      const opts = Utils.getOptions(options);
      const size = qrData.modules.size;
      const data = qrData.modules.data;
      const qrcodesize = size + opts.margin * 2;
      const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
      const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
      const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
      const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
      const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
      if (typeof cb === "function") {
        cb(null, svgTag);
      }
      return svgTag;
    };
  }
});

// node_modules/qrcode/lib/browser.js
var require_browser = __commonJS({
  "node_modules/qrcode/lib/browser.js"(exports) {
    "use strict";
    var canPromise = require_can_promise();
    var QRCode2 = require_qrcode();
    var CanvasRenderer = require_canvas();
    var SvgRenderer = require_svg_tag();
    function renderCanvas(renderFunc, canvas, text, opts, cb) {
      const args = [].slice.call(arguments, 1);
      const argsNum = args.length;
      const isLastArgCb = typeof args[argsNum - 1] === "function";
      if (!isLastArgCb && !canPromise()) {
        throw new Error("Callback required as last argument");
      }
      if (isLastArgCb) {
        if (argsNum < 2) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 2) {
          cb = text;
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 3) {
          if (canvas.getContext && typeof cb === "undefined") {
            cb = opts;
            opts = void 0;
          } else {
            cb = opts;
            opts = text;
            text = canvas;
            canvas = void 0;
          }
        }
      } else {
        if (argsNum < 1) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 1) {
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 2 && !canvas.getContext) {
          opts = text;
          text = canvas;
          canvas = void 0;
        }
        return new Promise(function(resolve, reject) {
          try {
            const data = QRCode2.create(text, opts);
            resolve(renderFunc(data, canvas, opts));
          } catch (e) {
            reject(e);
          }
        });
      }
      try {
        const data = QRCode2.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
      } catch (e) {
        cb(e);
      }
    }
    exports.create = QRCode2.create;
    exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
    exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
    exports.toString = renderCanvas.bind(null, function(data, _, opts) {
      return SvgRenderer.render(data, opts);
    });
  }
});

// src/types/models.ts
var DIMENSIONI_BOX = {
  piccola: 10,
  media: 20,
  grande: 30,
  pallet: 100
};

// src/app/dettaglio-box/dettaglio-box.page.ts
var QRCode = __toESM(require_browser());
function DettaglioBoxPage_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function DettaglioBoxPage_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePreferito());
    });
    \u0275\u0275element(1, "ion-icon", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hdr-action-btn--active-star", ctx_r1.box == null ? null : ctx_r1.box.is_preferito);
    \u0275\u0275advance();
    \u0275\u0275property("name", (ctx_r1.box == null ? null : ctx_r1.box.is_preferito) ? "star" : "star-outline");
  }
}
function DettaglioBoxPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "ion-spinner", 18);
    \u0275\u0275elementStart(2, "p", 19);
    \u0275\u0275text(3, "Caricamento in corso...");
    \u0275\u0275elementEnd()();
  }
}
function DettaglioBoxPage_div_16_div_12_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 59);
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", o_r4.foto, \u0275\u0275sanitizeUrl);
  }
}
function DettaglioBoxPage_div_16_div_12_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "ion-icon", 61);
    \u0275\u0275elementEnd();
  }
}
function DettaglioBoxPage_div_16_div_12_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "button", 63);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_16_div_12_div_1_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const o_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.apriModificaOggetto(o_r4));
    });
    \u0275\u0275element(2, "ion-icon", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 65);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_16_div_12_div_1_div_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const o_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.eliminaOggetto(o_r4));
    });
    \u0275\u0275element(4, "ion-icon", 66);
    \u0275\u0275elementEnd()();
  }
}
function DettaglioBoxPage_div_16_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52);
    \u0275\u0275template(2, DettaglioBoxPage_div_16_div_12_div_1_img_2_Template, 1, 1, "img", 53)(3, DettaglioBoxPage_div_16_div_12_div_1_div_3_Template, 2, 0, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 55)(5, "span", 56);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 57);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, DettaglioBoxPage_div_16_div_12_div_1_div_9_Template, 5, 0, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", o_r4.foto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !o_r4.foto);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r4.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Q.t\xE0: ", o_r4.quantita || 1, " ", o_r4.fragile ? "\u2022 \u26A0\uFE0F Fragile" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isViewer);
  }
}
function DettaglioBoxPage_div_16_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, DettaglioBoxPage_div_16_div_12_div_1_Template, 10, 6, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.oggetti);
  }
}
function DettaglioBoxPage_div_16_div_13_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_16_div_13_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.isSatura && ctx_r1.apriModale("aggiungi"));
    });
    \u0275\u0275element(1, "ion-icon", 73);
    \u0275\u0275text(2, " Aggiungi Oggetto ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("btn--disabled", ctx_r1.isSatura);
  }
}
function DettaglioBoxPage_div_16_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68);
    \u0275\u0275text(2, "\u{1F4E5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 69);
    \u0275\u0275text(4, "Nessun oggetto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 70);
    \u0275\u0275text(6, "Il box \xE8 vuoto, aggiungi il primo articolo!");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, DettaglioBoxPage_div_16_div_13_button_7_Template, 3, 2, "button", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !ctx_r1.isViewer);
  }
}
function DettaglioBoxPage_div_16_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_16_div_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(!ctx_r1.isSatura && ctx_r1.apriModale("aggiungi"));
    });
    \u0275\u0275elementStart(1, "div", 75);
    \u0275\u0275text(2, "\u2795");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4, "Aggiungi");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("action-btn-card--disabled", ctx_r1.isSatura);
    \u0275\u0275property("title", ctx_r1.isSatura ? "Box satura. Elimina oggetti per aggiungerne di nuovi." : "");
  }
}
function DettaglioBoxPage_div_16_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 33);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_16_ng_container_22_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.apriGeofence());
    });
    \u0275\u0275elementStart(2, "div", 76);
    \u0275\u0275text(3, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5, "Geofence");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function DettaglioBoxPage_div_16_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_16_div_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.svuotaBox());
    });
    \u0275\u0275elementStart(1, "div", 78);
    \u0275\u0275text(2, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4, "Svuota");
    \u0275\u0275elementEnd()();
  }
}
function DettaglioBoxPage_div_16_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 23)(2, "div", 24);
    \u0275\u0275text(3, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 39);
    \u0275\u0275text(5, "Note");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 80);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.box.descrizione);
  }
}
function DettaglioBoxPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "div", 23)(4, "div", 24);
    \u0275\u0275text(5, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25)(7, "h2", 26);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 27);
    \u0275\u0275text(11, "LISTA ARTICOLI CATALOGATI");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, DettaglioBoxPage_div_16_div_12_Template, 2, 1, "div", 28)(13, DettaglioBoxPage_div_16_div_13_Template, 8, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 30)(15, "div", 31);
    \u0275\u0275template(16, DettaglioBoxPage_div_16_div_16_Template, 5, 3, "div", 32);
    \u0275\u0275elementStart(17, "div", 33);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_16_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.apriModale("qr"));
    });
    \u0275\u0275elementStart(18, "div", 34);
    \u0275\u0275text(19, "\u{1F532}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 35);
    \u0275\u0275text(21, "QR Code");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, DettaglioBoxPage_div_16_ng_container_22_Template, 6, 0, "ng-container", 36)(23, DettaglioBoxPage_div_16_div_23_Template, 5, 0, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 38)(25, "div", 23)(26, "div", 24);
    \u0275\u0275text(27, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "h2", 39);
    \u0275\u0275text(29, "Statistiche");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 40)(31, "div", 41)(32, "span");
    \u0275\u0275text(33, "Saturazione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 42);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 43);
    \u0275\u0275element(37, "div", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 45)(39, "div", 46)(40, "span");
    \u0275\u0275text(41, "Oggetti totali:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 47);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(44, DettaglioBoxPage_div_16_div_44_Template, 8, 1, "div", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, (ctx_r1.box == null ? null : ctx_r1.box.nome) || "Inventario"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.oggetti.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.oggetti.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.isViewer);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.tipoProfilo === "business");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isViewer);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", ctx_r1.saturazionePercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.saturazionePercent, "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.totaleElementi, " / ", ctx_r1.maxCapienza);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.box == null ? null : ctx_r1.box.descrizione);
  }
}
function DettaglioBoxPage_div_17_img_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 105);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.fotoOggetto, \u0275\u0275sanitizeUrl);
  }
}
function DettaglioBoxPage_div_17_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275text(1, "\u{1F4F7}");
    \u0275\u0275elementEnd();
  }
}
function DettaglioBoxPage_div_17_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 107);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_17_button_12_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rimuoviFoto($event));
    });
    \u0275\u0275element(1, "ion-icon", 85);
    \u0275\u0275elementEnd();
  }
}
function DettaglioBoxPage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chiudiModale());
    });
    \u0275\u0275elementStart(1, "div", 82);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 83)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 84);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chiudiModale());
    });
    \u0275\u0275element(6, "ion-icon", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 86)(8, "div", 87)(9, "div", 88);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_17_Template_div_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.apriSceltaFoto());
    });
    \u0275\u0275template(10, DettaglioBoxPage_div_17_img_10_Template, 1, 1, "img", 89)(11, DettaglioBoxPage_div_17_div_11_Template, 2, 0, "div", 90)(12, DettaglioBoxPage_div_17_button_12_Template, 2, 0, "button", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 92)(14, "div", 93)(15, "span", 94);
    \u0275\u0275text(16, "Fragile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 95);
    \u0275\u0275text(18, "Oggetto delicato");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ion-toggle", 96);
    \u0275\u0275twoWayListener("ngModelChange", function DettaglioBoxPage_div_17_Template_ion_toggle_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.fragileOggetto, $event) || (ctx_r1.fragileOggetto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 97)(21, "div", 98)(22, "label");
    \u0275\u0275text(23, "Nome Oggetto *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 99);
    \u0275\u0275twoWayListener("ngModelChange", function DettaglioBoxPage_div_17_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nomeOggetto, $event) || (ctx_r1.nomeOggetto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 98)(26, "label");
    \u0275\u0275text(27, "Categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function DettaglioBoxPage_div_17_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tipoOggetto, $event) || (ctx_r1.tipoOggetto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 98)(30, "label");
    \u0275\u0275text(31, "Quantit\xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 101);
    \u0275\u0275twoWayListener("ngModelChange", function DettaglioBoxPage_div_17_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.quantitaOggetto, $event) || (ctx_r1.quantitaOggetto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 98)(34, "label");
    \u0275\u0275text(35, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "textarea", 102);
    \u0275\u0275twoWayListener("ngModelChange", function DettaglioBoxPage_div_17_Template_textarea_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.descrizioneOggetto, $event) || (ctx_r1.descrizioneOggetto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 103);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_17_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.salvaOggetto());
    });
    \u0275\u0275element(38, "ion-icon", 104);
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.modaleAperta === "modifica" ? "Modifica Oggetto" : "Nuovo Oggetto");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.fotoOggetto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.fotoOggetto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fotoOggetto);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fragileOggetto);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nomeOggetto);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tipoOggetto);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.quantitaOggetto);
    \u0275\u0275property("min", 1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.descrizioneOggetto);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isSaving ? "Salvataggio..." : "Salva Oggetto");
  }
}
function DettaglioBoxPage_div_18_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275element(1, "ion-spinner", 121);
    \u0275\u0275elementEnd();
  }
}
function DettaglioBoxPage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chiudiModale());
    });
    \u0275\u0275elementStart(1, "div", 108);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_18_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 83)(3, "h2");
    \u0275\u0275text(4, "QR Code Box");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 84);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chiudiModale());
    });
    \u0275\u0275element(6, "ion-icon", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 109)(8, "p", 110);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 111);
    \u0275\u0275template(12, DettaglioBoxPage_div_18_div_12_Template, 2, 0, "div", 112);
    \u0275\u0275element(13, "canvas", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 114);
    \u0275\u0275text(15, "Scansiona il codice per identificare rapidamente il box nel sistema.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 115)(17, "button", 116);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_18_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scaricaQr());
    });
    \u0275\u0275element(18, "ion-icon", 117);
    \u0275\u0275text(19, " Scarica PNG ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 118);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_18_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.condividiLink());
    });
    \u0275\u0275element(21, "ion-icon", 119);
    \u0275\u0275text(22, " Copia Link ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 4, (ctx_r1.box == null ? null : ctx_r1.box.nome) || ""));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingQr);
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx_r1.isLoadingQr ? "none" : "block");
  }
}
function DettaglioBoxPage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chiudiModale());
    });
    \u0275\u0275elementStart(1, "div", 122);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 83)(3, "h2");
    \u0275\u0275text(4, "Cronologia Box");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 84);
    \u0275\u0275listener("click", function DettaglioBoxPage_div_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chiudiModale());
    });
    \u0275\u0275element(6, "ion-icon", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 123)(8, "div", 124);
    \u0275\u0275text(9, "\u{1F552}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 125);
    \u0275\u0275text(11, "Movimenti Recenti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 126);
    \u0275\u0275text(13, " Qui verranno visualizzati i log di accesso, le modifiche agli oggetti e i cambi di posizione del box nel tempo. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 127)(15, "span", 128);
    \u0275\u0275text(16, "Nessun log recente");
    \u0275\u0275elementEnd()()()()();
  }
}
var _DettaglioBoxPage = class _DettaglioBoxPage {
  constructor(route, router, dbService, alertCtrl, toastCtrl, actionSheetCtrl, navHistory) {
    this.route = route;
    this.router = router;
    this.dbService = dbService;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.actionSheetCtrl = actionSheetCtrl;
    this.navHistory = navHistory;
    this.tipoProfilo = "personal";
    this.box = null;
    this.oggetti = [];
    this.isLoading = true;
    this.isViewer = false;
    this.modaleAperta = null;
    this.oggettoInModifica = null;
    this.nomeOggetto = "";
    this.tipoOggetto = "";
    this.quantitaOggetto = 1;
    this.fragileOggetto = false;
    this.descrizioneOggetto = "";
    this.fotoOggetto = null;
    this.isSaving = false;
    this.isLoadingQr = false;
    this.qrGenerato = false;
    this.nomeUtente = "";
    this.utenteId = null;
    addIcons({
      "star-outline": starOutline,
      "star": star,
      "add-circle-outline": addCircleOutline,
      "trash-outline": trashOutline,
      "checkmark-circle-outline": checkmarkCircleOutline,
      "close-outline": closeOutline,
      "information-circle-outline": informationCircleOutline,
      "cloud-download-outline": cloudDownloadOutline,
      "share-outline": shareOutline,
      "pencil-outline": pencilOutline,
      "time-outline": timeOutline
    });
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    const parsed = id ? Number(id) : NaN;
    if (!parsed || isNaN(parsed) || parsed <= 0) {
      this.toast("ID box non valido.", "danger");
      this.navHistory.navTo("/home");
      return;
    }
    this.boxId = parsed;
    this.caricaDati();
  }
  ngAfterViewInit() {
  }
  // ─── Caricamento ────────────────────────────────────────────────────
  caricaDati() {
    this.isLoading = true;
    this.dbService.getBoxSingola(this.boxId).subscribe({
      next: (res) => {
        this.box = res.box;
        this.isViewer = this.box?.ruolo_condivisione === "viewer";
        this.caricaOggetti();
      },
      error: () => {
        this.isLoading = false;
        this.toast("Impossibile caricare il box.", "danger");
      }
    });
  }
  caricaOggetti() {
    this.dbService.getOggettiPerBox(this.boxId).subscribe({
      next: (res) => {
        this.oggetti = res.oggetti || [];
        this.isLoading = false;
      },
      error: () => {
        this.oggetti = [];
        this.isLoading = false;
      }
    });
  }
  // ─── Computed ─────────────────────────────────────────────────────
  get maxCapienza() {
    return DIMENSIONI_BOX[this.box?.dimensione || "piccola"] || 10;
  }
  get totaleElementi() {
    return this.oggetti.reduce((sum, o) => sum + (Number(o.quantita) || 1), 0);
  }
  get saturazionePercent() {
    return Math.min(100, Math.round(this.totaleElementi / this.maxCapienza * 100));
  }
  get isSatura() {
    return this.totaleElementi >= this.maxCapienza;
  }
  get numFragili() {
    return this.oggetti.filter((o) => o.fragile == 1).length;
  }
  isVestiti(tipo) {
    if (!tipo)
      return false;
    const t = tipo.toLowerCase();
    return ["vestiti", "vestito", "abbigliamento", "moda", "clothes", "clothing", "fashion"].some((k) => t.includes(k));
  }
  // ─── Preferito ────────────────────────────────────────────────────
  togglePreferito() {
    if (!this.box || this.isViewer)
      return;
    const newVal = !this.box.is_preferito;
    this.dbService.updatePreferito(this.boxId, newVal).subscribe({
      next: () => {
        this.box.is_preferito = newVal;
        this.toast(newVal ? "\u2B50 Aggiunto ai preferiti" : "Rimosso dai preferiti", "primary");
      },
      error: () => this.toast("Errore aggiornamento preferito.", "danger")
    });
  }
  // ─── Modali ─────────────────────────────────────────────────────
  apriModale(tipo) {
    if (tipo === "aggiungi" && this.isViewer)
      return;
    if (tipo === "modifica" && this.isViewer)
      return;
    this.modaleAperta = tipo;
    if (tipo === "aggiungi") {
      this.resetFormOggetto();
    }
    if (tipo === "qr") {
      this.caricaQr();
    }
  }
  chiudiModale() {
    this.modaleAperta = null;
    this.oggettoInModifica = null;
    this.qrGenerato = false;
    this.resetFormOggetto();
  }
  // ─── CRUD oggetti ──────────────────────────────────────────────────
  resetFormOggetto() {
    this.nomeOggetto = "";
    this.tipoOggetto = "";
    this.quantitaOggetto = 1;
    this.fragileOggetto = false;
    this.descrizioneOggetto = "";
    this.fotoOggetto = null;
    this.oggettoInModifica = null;
  }
  apriModificaOggetto(o) {
    if (this.isViewer)
      return;
    this.oggettoInModifica = o;
    this.nomeOggetto = o.nome || "";
    this.tipoOggetto = o.tipo || "";
    this.quantitaOggetto = o.quantita || 1;
    this.fragileOggetto = o.fragile === 1;
    this.descrizioneOggetto = o.descrizione || "";
    this.fotoOggetto = o.foto || null;
    this.modaleAperta = "modifica";
  }
  salvaOggetto() {
    if (!this.nomeOggetto.trim()) {
      this.toast("Il nome \xE8 obbligatorio.", "warning");
      return;
    }
    if (this.isSatura) {
      this.toast(`Box satura (${this.totaleElementi}/${this.maxCapienza}). Elimina oggetti per aggiungerne nuovi.`, "danger");
      return;
    }
    this.isSaving = true;
    const dati = {
      nome: this.nomeOggetto.trim(),
      tipo: this.tipoOggetto.trim() || null,
      quantita: Number(this.quantitaOggetto) || 1,
      fragile: this.fragileOggetto ? 1 : 0,
      descrizione: this.descrizioneOggetto.trim() || null,
      foto: this.fotoOggetto || null,
      rif_box: this.boxId
    };
    if (this.modaleAperta === "modifica" && this.oggettoInModifica) {
      this.dbService.aggiornaOggetto(this.oggettoInModifica.id, dati).subscribe({
        next: () => {
          this.isSaving = false;
          this.caricaOggetti();
          this.chiudiModale();
          this.toast("Oggetto aggiornato!", "success");
        },
        error: (err) => {
          this.isSaving = false;
          this.toast(err.error?.error || "Errore aggiornamento.", "danger");
        }
      });
    } else {
      this.dbService.creaOggetto(dati).subscribe({
        next: () => {
          this.isSaving = false;
          this.caricaOggetti();
          this.chiudiModale();
          this.toast("Oggetto aggiunto!", "success");
        },
        error: (err) => {
          this.isSaving = false;
          this.toast(err.error?.error || "Errore inserimento.", "danger");
        }
      });
    }
  }
  eliminaOggetto(o) {
    return __async(this, null, function* () {
      if (this.isViewer)
        return;
      const alert = yield this.alertCtrl.create({
        cssClass: "peekbox-alert",
        header: "Elimina oggetto",
        message: `Eliminare "${o.nome}"? Verr\xE0 spostato nel cestino.`,
        buttons: [
          { text: "Annulla", role: "cancel" },
          { text: "Elimina", role: "destructive", handler: () => {
            this.dbService.eliminaOggetto(o.id).subscribe({
              next: () => {
                this.caricaOggetti();
                this.toast("Oggetto eliminato.", "medium");
              },
              error: () => this.toast("Errore durante l'eliminazione.", "danger")
            });
          } }
        ]
      });
      yield alert.present();
    });
  }
  svuotaBox() {
    return __async(this, null, function* () {
      if (this.isViewer)
        return;
      if (this.oggetti.length === 0) {
        this.toast("Il box \xE8 gi\xE0 vuoto.", "medium");
        return;
      }
      const alert = yield this.alertCtrl.create({
        cssClass: "peekbox-alert",
        header: "Svuota Box",
        message: `Stai per eliminare tutti i ${this.oggetti.length} oggetti. Operazione irreversibile.`,
        buttons: [
          { text: "Annulla", role: "cancel" },
          { text: "Svuota tutto", role: "destructive", handler: () => {
            const reqs = this.oggetti.map((o) => this.dbService.eliminaOggetto(o.id));
            let done = 0;
            reqs.forEach((r) => r.subscribe({ next: () => {
              done++;
              if (done === reqs.length) {
                this.caricaOggetti();
                this.toast("Box svuotato.", "success");
              }
            } }));
          } }
        ]
      });
      yield alert.present();
    });
  }
  ionViewWillEnter() {
    this.tipoProfilo = localStorage.getItem("tipo_profilo") || "personal";
    this.utenteId = localStorage.getItem("utente_id");
    this.nomeUtente = (localStorage.getItem("utente_nome") || "").toUpperCase();
  }
  // ─── Foto — Action Sheet Custom Premium ──────────────────────────
  apriSceltaFoto() {
    return __async(this, null, function* () {
      const actionSheet = yield this.actionSheetCtrl.create({
        cssClass: "peekbox-photo-sheet",
        header: "\u{1F4F7}  Aggiungi Foto",
        buttons: [
          {
            text: "\u{1F4F8}  Scatta Foto",
            cssClass: "sheet-btn-camera",
            handler: () => {
              this.scattaFotoNativa();
            }
          },
          {
            text: "\u{1F5BC}\uFE0F  Scegli dalla Galleria",
            cssClass: "sheet-btn-gallery",
            handler: () => {
              this.scegliDaGalleria();
            }
          },
          {
            text: "Annulla",
            role: "cancel",
            cssClass: "sheet-btn-cancel"
          }
        ]
      });
      yield actionSheet.present();
    });
  }
  scattaFotoNativa() {
    return __async(this, null, function* () {
      try {
        const { Camera, CameraSource, CameraResultType } = yield import("./esm-6IXSAVRR.js");
        const photo = yield Camera.getPhoto({
          resultType: CameraResultType.Base64,
          source: CameraSource.Camera,
          quality: 90
        });
        if (photo.base64String) {
          this.fotoOggetto = `data:image/jpeg;base64,${photo.base64String}`;
        }
      } catch {
        const input = document.getElementById("foto-input");
        if (input) {
          input.setAttribute("capture", "environment");
          input.click();
        }
      }
    });
  }
  scegliDaGalleria() {
    return __async(this, null, function* () {
      try {
        const { Camera, CameraSource, CameraResultType } = yield import("./esm-6IXSAVRR.js");
        const photo = yield Camera.getPhoto({
          resultType: CameraResultType.Base64,
          source: CameraSource.Photos,
          quality: 90
        });
        if (photo.base64String) {
          this.fotoOggetto = `data:image/jpeg;base64,${photo.base64String}`;
        }
      } catch {
        const input = document.getElementById("foto-input");
        if (input) {
          input.removeAttribute("capture");
          input.click();
        }
      }
    });
  }
  onFileSelected(event) {
    const input = event.target;
    if (!input.files || input.files.length === 0)
      return;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.fotoOggetto = e.target?.result;
    };
    reader.readAsDataURL(file);
  }
  rimuoviFoto(event) {
    event.stopPropagation();
    this.fotoOggetto = null;
    const input = document.getElementById("foto-input");
    if (input)
      input.value = "";
  }
  // ─── QR Code (qrcode lib, client-side) ─────────────────────────────
  caricaQr() {
    this.isLoadingQr = true;
    this.qrGenerato = false;
    this.dbService.getQrToken(this.boxId).subscribe({
      next: (res) => __async(this, null, function* () {
        const url = this.dbService.buildQrUrl(this.boxId, res.token);
        setTimeout(() => __async(this, null, function* () {
          try {
            const canvas = document.getElementById("qr-canvas");
            if (canvas) {
              yield QRCode.toCanvas(canvas, url, {
                width: 220,
                margin: 2,
                color: { dark: "#0F172A", light: "#FFFFFF" }
              });
              this.qrGenerato = true;
            }
          } catch (e) {
            this.toast("Errore generazione QR.", "danger");
          }
          this.isLoadingQr = false;
        }), 100);
      }),
      error: () => {
        this.isLoadingQr = false;
        this.toast("Impossibile generare il QR.", "danger");
      }
    });
  }
  scaricaQr() {
    const canvas = document.getElementById("qr-canvas");
    if (!canvas)
      return;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `QR_Box_${this.boxId}_${this.box?.nome || "box"}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.toast("QR Code scaricato!", "success");
  }
  condividiLink() {
    return __async(this, null, function* () {
      const url = window.location.origin + `/dettaglio-box/${this.boxId}`;
      if (navigator.clipboard) {
        yield navigator.clipboard.writeText(url);
        this.toast("Link copiato negli appunti!", "success");
      } else {
        this.toast(url, "medium");
      }
    });
  }
  // ─── Geofence ───────────────────────────────────────────────────
  apriGeofence() {
    if (!this.box?.rif_armadio) {
      this.toast("ID armadio non disponibile.", "warning");
      return;
    }
    this.router.navigate(["/geofence-armadio", this.box.rif_armadio], {
      queryParams: {
        nome: this.box.nome_armadio || "",
        boxId: this.boxId
      }
    });
  }
  goBack() {
    this.navHistory.navTo("/home");
  }
  vaiHome() {
    this.navHistory.navTo("/home");
  }
  navTo(route) {
    this.navHistory.navTo(route);
  }
  toast(message, color = "primary") {
    return __async(this, null, function* () {
      const t = yield this.toastCtrl.create({ message, duration: 2400, color, position: "bottom" });
      yield t.present();
    });
  }
};
_DettaglioBoxPage.\u0275fac = function DettaglioBoxPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DettaglioBoxPage)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DatabaseService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(ActionSheetController), \u0275\u0275directiveInject(NavigationHistoryService));
};
_DettaglioBoxPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DettaglioBoxPage, selectors: [["app-dettaglio-box"]], decls: 20, vars: 6, consts: [[1, "ion-no-border"], [1, "peek-toolbar"], [1, "header-inner"], [1, "header-top"], [1, "header-greet"], ["src", "assets/icon/logoTitolo1.png", "alt", "PeekBox", 1, "header-logo", 2, "cursor", "pointer", 3, "click"], [1, "header-greeting"], [1, "nome-verde"], [1, "header-actions"], ["title", "Cronologia Box", 1, "hdr-action-btn", 3, "click"], ["name", "time-outline"], ["class", "hdr-action-btn", 3, "hdr-action-btn--active-star", "click", 4, "ngIf"], ["class", "page-loading", "style", "display: flex; flex-direction: column; align-items: center; justify-content: center; height: 60vh; gap: 15px;", 4, "ngIf"], ["class", "page-content", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "hdr-action-btn", 3, "click"], [3, "name"], [1, "page-loading", 2, "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "height", "60vh", "gap", "15px"], ["name", "crescent", "color", "primary"], [2, "font-weight", "600", "color", "#64748B"], [1, "page-content"], [1, "main-container", 2, "padding-top", "40px"], [1, "pb-card"], [1, "card-header"], [1, "card-icon-wrap"], [2, "flex", "1"], [1, "card-title", 2, "margin-bottom", "2px"], [2, "font-size", "0.7rem", "color", "#64748B", "font-weight", "600"], ["class", "inventory-list", 4, "ngIf"], ["class", "inventory-empty", "style", "text-align: center; padding: 40px 20px;", 4, "ngIf"], [1, "right-col"], [1, "actions-grid"], ["class", "action-btn-card", 3, "action-btn-card--disabled", "title", "click", 4, "ngIf"], [1, "action-btn-card", 3, "click"], [1, "action-icon", 2, "background", "rgba(58,171,219,0.1)", "color", "#3AABDB"], [1, "action-label"], [4, "ngIf"], ["class", "action-btn-card action-btn-card--danger", 3, "click", 4, "ngIf"], [1, "pb-card", "stats-section"], [1, "card-title"], [1, "stat-row"], [1, "stat-info"], [1, "val"], [1, "progress-bg"], [1, "progress-fill"], [1, "stat-row", 2, "margin-top", "10px"], [2, "display", "flex", "justify-content", "space-between", "font-size", "0.85rem", "color", "#64748B"], [2, "font-weight", "700", "color", "#1E293B"], ["class", "pb-card", "style", "margin-top: 24px;", 4, "ngIf"], [1, "inventory-list"], ["class", "item-row", 4, "ngFor", "ngForOf"], [1, "item-row"], [1, "item-img-wrap"], [3, "src", 4, "ngIf"], ["class", "item-placeholder", "style", "background: rgba(58,171,219,0.05); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;", 4, "ngIf"], [1, "item-info"], [1, "item-name"], [1, "item-meta"], ["class", "item-actions", 4, "ngIf"], [3, "src"], [1, "item-placeholder", 2, "background", "rgba(58,171,219,0.05)", "width", "100%", "height", "100%", "display", "flex", "align-items", "center", "justify-content", "center"], ["name", "information-circle-outline", 2, "font-size", "1.4rem", "color", "#3AABDB"], [1, "item-actions"], [1, "btn-action", "btn-action--edit", 3, "click"], ["name", "pencil-outline"], [1, "btn-action", "btn-action--del", 3, "click"], ["name", "trash-outline"], [1, "inventory-empty", 2, "text-align", "center", "padding", "40px 20px"], [2, "font-size", "3rem", "margin-bottom", "15px"], [2, "margin", "0", "font-size", "1.1rem", "color", "#1E293B"], [2, "color", "#64748B", "font-size", "0.9rem", "margin", "10px 0 20px"], ["class", "btn-save-oggetto", "style", "width: auto; padding: 12px 24px; margin: 0 auto;", 3, "btn--disabled", "click", 4, "ngIf"], [1, "btn-save-oggetto", 2, "width", "auto", "padding", "12px 24px", "margin", "0 auto", 3, "click"], ["name", "add-circle-outline"], [1, "action-btn-card", 3, "click", "title"], [1, "action-icon", 2, "background", "rgba(125,199,64,0.1)", "color", "#7DC740"], [1, "action-icon", 2, "background", "rgba(139,92,246,0.1)", "color", "#8B5CF6"], [1, "action-btn-card", "action-btn-card--danger", 3, "click"], [1, "action-icon", 2, "background", "rgba(239,68,68,0.08)", "color", "#dc3545"], [1, "pb-card", 2, "margin-top", "24px"], [2, "margin", "0", "font-size", "0.9rem", "color", "#475569", "line-height", "1.6"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "btn-close", 3, "click"], ["name", "close-outline"], [1, "modal-body"], [1, "modal-col-left"], [1, "photo-upload-zone", 3, "click"], ["class", "preview-img", 3, "src", 4, "ngIf"], ["class", "upload-hint", 4, "ngIf"], ["class", "btn-action btn-action--del", "style", "position: absolute; top: 10px; right: 10px;", 3, "click", 4, "ngIf"], [2, "margin-top", "20px", "display", "flex", "align-items", "center", "justify-content", "space-between", "background", "#F8FAFC", "padding", "12px", "border-radius", "12px"], [2, "display", "flex", "flex-direction", "column"], [2, "font-size", "0.9rem", "font-weight", "700", "color", "#1E293B"], [2, "font-size", "0.75rem", "color", "#64748B"], ["color", "primary", 3, "ngModelChange", "ngModel"], [1, "modal-col-right"], [1, "form-group"], ["type", "text", "placeholder", "Es. Lampada", 1, "input-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Es. Elettronica", 1, "input-control", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "input-control", 3, "ngModelChange", "ngModel", "min"], ["rows", "3", "placeholder", "Dettagli aggiuntivi...", 1, "input-control", 3, "ngModelChange", "ngModel"], [1, "btn-save-oggetto", 3, "click", "disabled"], ["name", "checkmark-circle-outline"], [1, "preview-img", 3, "src"], [1, "upload-hint"], [1, "btn-action", "btn-action--del", 2, "position", "absolute", "top", "10px", "right", "10px", 3, "click"], [1, "modal-content", 2, "max-width", "450px", 3, "click"], [1, "qr-container"], [2, "font-weight", "800", "color", "#7DC740", "font-size", "1.2rem", "margin-bottom", "20px"], [1, "qr-canvas-wrap"], ["style", "padding: 40px;", 4, "ngIf"], ["id", "qr-canvas"], [2, "color", "#64748B", "font-size", "0.85rem", "margin-bottom", "25px"], [1, "qr-actions"], [1, "btn-qr", "btn-qr--primary", 3, "click"], ["name", "cloud-download-outline", "slot", "start"], [1, "btn-qr", "btn-qr--secondary", 3, "click"], ["name", "share-outline", "slot", "start"], [2, "padding", "40px"], ["name", "crescent"], [1, "modal-content", 2, "max-width", "500px", 3, "click"], [2, "padding", "30px", "text-align", "center"], [2, "font-size", "3.5rem", "margin-bottom", "20px"], [2, "color", "#1E293B", "margin-bottom", "10px"], [2, "color", "#64748B", "font-size", "0.9rem", "line-height", "1.6"], [2, "margin-top", "25px", "padding", "15px", "background", "#F8FAFC", "border-radius", "12px", "border", "1px dashed #E2E8F0"], [2, "font-size", "0.8rem", "color", "#94A3B8", "font-weight", "600", "text-transform", "uppercase"]], template: function DettaglioBoxPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "img", 5);
    \u0275\u0275listener("click", function DettaglioBoxPage_Template_img_click_5_listener() {
      return ctx.goBack();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 6);
    \u0275\u0275text(7, "DETTAGLIO ");
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9, "BOX");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 8)(11, "button", 9);
    \u0275\u0275listener("click", function DettaglioBoxPage_Template_button_click_11_listener() {
      return ctx.apriModale("history");
    });
    \u0275\u0275element(12, "ion-icon", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, DettaglioBoxPage_button_13_Template, 2, 3, "button", 11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(14, "ion-content");
    \u0275\u0275template(15, DettaglioBoxPage_div_15_Template, 4, 0, "div", 12)(16, DettaglioBoxPage_div_16_Template, 45, 14, "div", 13)(17, DettaglioBoxPage_div_17_Template, 41, 12, "div", 14)(18, DettaglioBoxPage_div_18_Template, 23, 6, "div", 14)(19, DettaglioBoxPage_div_19_Template, 17, 0, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", !ctx.isViewer);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.modaleAperta === "aggiungi" || ctx.modaleAperta === "modifica");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.modaleAperta === "qr");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.modaleAperta === "history");
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  MinValidator,
  NgModel,
  RouterModule,
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
  IonSpinner,
  IonToggle,
  UpperCasePipe
], styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  --page-bg: #F8FAFC;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: var(--page-bg) !important;\n  --overflow: auto;\n  font-family: "Poppins", sans-serif;\n}\nion-header[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n}\nion-toolbar.peek-toolbar[_ngcontent-%COMP%] {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\n.header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo[_ngcontent-%COMP%] {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.header-logo[_ngcontent-%COMP%]:active {\n  opacity: 0.55;\n}\n.header-greeting[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.hdr-action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  color: #4A7A94;\n}\n.hdr-action-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 122, 148, 0.1);\n  color: #0F172A;\n}\n.hdr-action-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.92);\n}\n.hdr-action-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding: 20px clamp(20px, 3.5vw, 56px);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n}\n@media (max-width: 900px) {\n  .main-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.pb-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 24px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(0, 0, 0, 0.02);\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.pb-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 40px rgba(58, 171, 219, 0.15);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.card-header[_ngcontent-%COMP%]   .card-icon-wrap[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: rgba(58, 171, 219, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n}\n.card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #15425C;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin: 0;\n}\n.inventory-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-height: 500px;\n  overflow-y: auto;\n  padding-right: 4px;\n}\n.inventory-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.inventory-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n}\n.item-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 16px;\n  background: #F1F5F9;\n  border-radius: 18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.item-row[_ngcontent-%COMP%]:hover {\n  background: #FFFFFF;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  transform: translateX(4px);\n}\n.item-row[_ngcontent-%COMP%]   .item-img-wrap[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: #FFFFFF;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.item-row[_ngcontent-%COMP%]   .item-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.item-row[_ngcontent-%COMP%]   .item-img-wrap[_ngcontent-%COMP%]   .item-placeholder[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.item-row[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.item-row[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0F172A;\n  display: block;\n}\n.item-row[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #4A7A94;\n  font-weight: 500;\n}\n.item-row[_ngcontent-%COMP%]   .item-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.item-row[_ngcontent-%COMP%]   .item-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.item-row[_ngcontent-%COMP%]   .item-actions[_ngcontent-%COMP%]   .btn-action--edit[_ngcontent-%COMP%] {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n}\n.item-row[_ngcontent-%COMP%]   .item-actions[_ngcontent-%COMP%]   .btn-action--del[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  color: #EF4444;\n}\n.item-row[_ngcontent-%COMP%]   .item-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.action-btn-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 18px;\n  padding: 20px 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 12px;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.action-btn-card[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.action-btn-card[_ngcontent-%COMP%]   .action-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #0F172A;\n}\n.action-btn-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 40px rgba(58, 171, 219, 0.15);\n  border-color: #3AABDB;\n  filter: drop-shadow(0 0 10px rgba(58, 171, 219, 0.2));\n}\n.action-btn-card[_ngcontent-%COMP%]:hover   .action-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.action-btn-card--danger[_ngcontent-%COMP%]:hover {\n  border-color: #EF4444;\n  filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.2));\n}\n.action-btn-card--danger[_ngcontent-%COMP%]:hover   .action-label[_ngcontent-%COMP%] {\n  color: #EF4444;\n}\n.action-btn-card--disabled[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  cursor: not-allowed;\n  pointer-events: auto;\n}\n.action-btn-card--disabled[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);\n  border-color: rgba(0, 0, 0, 0.03);\n  filter: none;\n}\n.action-btn-card--disabled[_ngcontent-%COMP%]:hover   .action-icon[_ngcontent-%COMP%] {\n  transform: none;\n}\n.btn--disabled[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.stats-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.stat-row[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.stat-row[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #4A7A94;\n  text-transform: uppercase;\n}\n.stat-row[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  color: #3AABDB;\n}\n.stat-row[_ngcontent-%COMP%]   .progress-bg[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #F1F5F9;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.stat-row[_ngcontent-%COMP%]   .progress-bg[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #3AABDB,\n      #1A7FA8);\n  border-radius: 10px;\n  transition: width 0.6s ease;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: white;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  width: 90%;\n  max-width: 800px;\n  border-radius: 24px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid #F1F5F9;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #0F172A;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  background: #E2E8F0;\n  transform: rotate(90deg);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  gap: 30px;\n}\n@media (max-width: 600px) {\n  .modal-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.photo-upload-zone[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  background: #F8FAFC;\n  border: 2px dashed #E2E8F0;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.photo-upload-zone[_ngcontent-%COMP%]:hover {\n  border-color: #3AABDB;\n  background: rgba(58, 171, 219, 0.02);\n}\n.photo-upload-zone[_ngcontent-%COMP%]   .preview-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 18px;\n}\n.photo-upload-zone[_ngcontent-%COMP%]   .upload-hint[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #4A7A94;\n  text-transform: uppercase;\n  margin-bottom: 6px;\n}\n.form-group[_ngcontent-%COMP%]   .input-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.form-group[_ngcontent-%COMP%]   .input-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3AABDB;\n  background: #FFFFFF;\n  box-shadow: 0 0 0 4px rgba(58, 171, 219, 0.1);\n}\n.btn-save-oggetto[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background: #3AABDB;\n  color: #FFFFFF;\n  border: none;\n  border-radius: 12px;\n  font-weight: 800;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.btn-save-oggetto[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(58, 171, 219, 0.3);\n}\n.btn-save-oggetto[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.qr-container[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n}\n.qr-container[_ngcontent-%COMP%]   .qr-canvas-wrap[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  padding: 20px;\n  border-radius: 18px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);\n  display: inline-block;\n  margin-bottom: 20px;\n}\n.qr-container[_ngcontent-%COMP%]   .qr-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.qr-container[_ngcontent-%COMP%]   .qr-actions[_ngcontent-%COMP%]   .btn-qr[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 12px;\n  border: none;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.qr-container[_ngcontent-%COMP%]   .qr-actions[_ngcontent-%COMP%]   .btn-qr--primary[_ngcontent-%COMP%] {\n  background: #3AABDB;\n  color: #FFFFFF;\n}\n.qr-container[_ngcontent-%COMP%]   .qr-actions[_ngcontent-%COMP%]   .btn-qr--secondary[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  color: #0F172A;\n}\n.qr-container[_ngcontent-%COMP%]   .qr-actions[_ngcontent-%COMP%]   .btn-qr[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  opacity: 0.9;\n}\n/*# sourceMappingURL=dettaglio-box.page.css.map */'] });
var DettaglioBoxPage = _DettaglioBoxPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DettaglioBoxPage, [{
    type: Component,
    args: [{ selector: "app-dettaglio-box", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      IonHeader,
      IonToolbar,
      IonContent,
      IonIcon,
      IonSpinner,
      IonInput,
      IonToggle,
      IonTextarea
    ], template: `<ion-header class="ion-no-border">\r
  <ion-toolbar class="peek-toolbar">\r
    <div class="header-inner">\r
      <div class="header-top">\r
        <div class="header-greet">\r
          <img src="assets/icon/logoTitolo1.png" class="header-logo" alt="PeekBox" (click)="goBack()" style="cursor: pointer;" />\r
          <h1 class="header-greeting">DETTAGLIO <span class="nome-verde">BOX</span></h1>\r
        </div>\r
        <div class="header-actions">\r
          <button class="hdr-action-btn" (click)="apriModale('history')" title="Cronologia Box">\r
            <ion-icon name="time-outline"></ion-icon>\r
          </button>\r
          <button *ngIf="!isViewer" class="hdr-action-btn" [class.hdr-action-btn--active-star]="box?.is_preferito" (click)="togglePreferito()">\r
            <ion-icon [name]="box?.is_preferito ? 'star' : 'star-outline'"></ion-icon>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content>\r
  <!-- Loading -->\r
  <div class="page-loading" *ngIf="isLoading" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 60vh; gap: 15px;">\r
    <ion-spinner name="crescent" color="primary"></ion-spinner>\r
    <p style="font-weight: 600; color: #64748B;">Caricamento in corso...</p>\r
  </div>\r
\r
  <div class="page-content" *ngIf="!isLoading">\r
    \r
    <div class="main-container" style="padding-top: 40px;">\r
      \r
      <!-- COLONNA SINISTRA: INVENTARIO -->\r
      <div class="pb-card">\r
        <div class="card-header">\r
          <div class="card-icon-wrap">\u{1F4E6}</div>\r
          <div style="flex: 1;">\r
            <h2 class="card-title" style="margin-bottom: 2px;">{{ (box?.nome || 'Inventario') | uppercase }}</h2>\r
            <span style="font-size: 0.7rem; color: #64748B; font-weight: 600;">LISTA ARTICOLI CATALOGATI</span>\r
          </div>\r
        </div>\r
\r
        <div class="inventory-list" *ngIf="oggetti.length > 0">\r
          <div class="item-row" *ngFor="let o of oggetti">\r
            <div class="item-img-wrap">\r
              <img *ngIf="o.foto" [src]="o.foto" />\r
              <div *ngIf="!o.foto" class="item-placeholder" style="background: rgba(58,171,219,0.05); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">\r
                <ion-icon name="information-circle-outline" style="font-size: 1.4rem; color: #3AABDB;"></ion-icon>\r
              </div>\r
            </div>\r
            <div class="item-info">\r
              <span class="item-name">{{ o.nome }}</span>\r
              <span class="item-meta">Q.t\xE0: {{ o.quantita || 1 }} {{ o.fragile ? '\u2022 \u26A0\uFE0F Fragile' : '' }}</span>\r
            </div>\r
            <div class="item-actions" *ngIf="!isViewer">\r
              <button class="btn-action btn-action--edit" (click)="apriModificaOggetto(o)">\r
                <ion-icon name="pencil-outline"></ion-icon>\r
              </button>\r
              <button class="btn-action btn-action--del" (click)="eliminaOggetto(o)">\r
                <ion-icon name="trash-outline"></ion-icon>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="inventory-empty" *ngIf="oggetti.length === 0" style="text-align: center; padding: 40px 20px;">\r
          <div style="font-size: 3rem; margin-bottom: 15px;">\u{1F4E5}</div>\r
          <h3 style="margin: 0; font-size: 1.1rem; color: #1E293B;">Nessun oggetto</h3>\r
          <p style="color: #64748B; font-size: 0.9rem; margin: 10px 0 20px;">Il box \xE8 vuoto, aggiungi il primo articolo!</p>\r
          <button *ngIf="!isViewer" class="btn-save-oggetto" [class.btn--disabled]="isSatura" (click)="!isSatura && apriModale('aggiungi')" style="width: auto; padding: 12px 24px; margin: 0 auto;">\r
            <ion-icon name="add-circle-outline"></ion-icon>\r
            Aggiungi Oggetto\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- COLONNA DESTRA: AZIONI E STATS -->\r
      <div class="right-col">\r
        \r
        <div class="actions-grid">\r
          <div class="action-btn-card" *ngIf="!isViewer" [class.action-btn-card--disabled]="isSatura" (click)="!isSatura && apriModale('aggiungi')" [title]="isSatura ? 'Box satura. Elimina oggetti per aggiungerne di nuovi.' : ''">\r
            <div class="action-icon" style="background: rgba(125,199,64,0.1); color: #7DC740;">\u2795</div>\r
            <span class="action-label">Aggiungi</span>\r
          </div>\r
          \r
          <div class="action-btn-card" (click)="apriModale('qr')">\r
            <div class="action-icon" style="background: rgba(58,171,219,0.1); color: #3AABDB;">\u{1F532}</div>\r
            <span class="action-label">QR Code</span>\r
          </div>\r
\r
          <ng-container *ngIf="tipoProfilo === 'business'">\r
            <div class="action-btn-card" (click)="apriGeofence()">\r
              <div class="action-icon" style="background: rgba(139,92,246,0.1); color: #8B5CF6;">\u{1F4CD}</div>\r
              <span class="action-label">Geofence</span>\r
            </div>\r
          </ng-container>\r
\r
          <div class="action-btn-card action-btn-card--danger" *ngIf="!isViewer" (click)="svuotaBox()">\r
            <div class="action-icon" style="background: rgba(239,68,68,0.08); color: #dc3545;">\u{1F5D1}\uFE0F</div>\r
            <span class="action-label">Svuota</span>\r
          </div>\r
        </div>\r
\r
        <div class="pb-card stats-section">\r
          <div class="card-header">\r
            <div class="card-icon-wrap">\u{1F4CA}</div>\r
            <h2 class="card-title">Statistiche</h2>\r
          </div>\r
          \r
          <div class="stat-row">\r
            <div class="stat-info">\r
              <span>Saturazione</span>\r
              <span class="val">{{ saturazionePercent }}%</span>\r
            </div>\r
            <div class="progress-bg">\r
              <div class="progress-fill" [style.width.%]="saturazionePercent"></div>\r
            </div>\r
          </div>\r
\r
          <div class="stat-row" style="margin-top: 10px;">\r
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #64748B;">\r
              <span>Oggetti totali:</span>\r
              <span style="font-weight: 700; color: #1E293B;">{{ totaleElementi }} / {{ maxCapienza }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="pb-card" style="margin-top: 24px;" *ngIf="box?.descrizione">\r
          <div class="card-header">\r
            <div class="card-icon-wrap">\u{1F4DD}</div>\r
            <h2 class="card-title">Note</h2>\r
          </div>\r
          <p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">{{ box.descrizione }}</p>\r
        </div>\r
\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  <!-- MODALE AGGIUNGI/MODIFICA -->\r
  <div class="modal-overlay" *ngIf="modaleAperta === 'aggiungi' || modaleAperta === 'modifica'" (click)="chiudiModale()">\r
    <div class="modal-content" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h2>{{ modaleAperta === 'modifica' ? 'Modifica Oggetto' : 'Nuovo Oggetto' }}</h2>\r
        <button class="btn-close" (click)="chiudiModale()">\r
          <ion-icon name="close-outline"></ion-icon>\r
        </button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="modal-col-left">\r
          <div class="photo-upload-zone" (click)="apriSceltaFoto()">\r
            <img *ngIf="fotoOggetto" [src]="fotoOggetto" class="preview-img" />\r
            <div *ngIf="!fotoOggetto" class="upload-hint">\u{1F4F7}</div>\r
            <button *ngIf="fotoOggetto" class="btn-action btn-action--del" style="position: absolute; top: 10px; right: 10px;" (click)="rimuoviFoto($event)">\r
              <ion-icon name="close-outline"></ion-icon>\r
            </button>\r
          </div>\r
          \r
          <div style="margin-top: 20px; display: flex; align-items: center; justify-content: space-between; background: #F8FAFC; padding: 12px; border-radius: 12px;">\r
            <div style="display: flex; flex-direction: column;">\r
              <span style="font-size: 0.9rem; font-weight: 700; color: #1E293B;">Fragile</span>\r
              <span style="font-size: 0.75rem; color: #64748B;">Oggetto delicato</span>\r
            </div>\r
            <ion-toggle [(ngModel)]="fragileOggetto" color="primary"></ion-toggle>\r
          </div>\r
        </div>\r
\r
        <div class="modal-col-right">\r
          <div class="form-group">\r
            <label>Nome Oggetto *</label>\r
            <input type="text" class="input-control" [(ngModel)]="nomeOggetto" placeholder="Es. Lampada">\r
          </div>\r
          <div class="form-group">\r
            <label>Categoria</label>\r
            <input type="text" class="input-control" [(ngModel)]="tipoOggetto" placeholder="Es. Elettronica">\r
          </div>\r
          <div class="form-group">\r
            <label>Quantit\xE0</label>\r
            <input type="number" class="input-control" [(ngModel)]="quantitaOggetto" [min]="1">\r
          </div>\r
          <div class="form-group">\r
            <label>Note</label>\r
            <textarea class="input-control" [(ngModel)]="descrizioneOggetto" rows="3" placeholder="Dettagli aggiuntivi..."></textarea>\r
          </div>\r
          <button class="btn-save-oggetto" (click)="salvaOggetto()" [disabled]="isSaving">\r
            <ion-icon name="checkmark-circle-outline"></ion-icon>\r
            <span>{{ isSaving ? 'Salvataggio...' : 'Salva Oggetto' }}</span>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- MODALE QR CODE -->\r
  <div class="modal-overlay" *ngIf="modaleAperta === 'qr'" (click)="chiudiModale()">\r
    <div class="modal-content" style="max-width: 450px;" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h2>QR Code Box</h2>\r
        <button class="btn-close" (click)="chiudiModale()">\r
          <ion-icon name="close-outline"></ion-icon>\r
        </button>\r
      </div>\r
      <div class="qr-container">\r
        <p style="font-weight: 800; color: #7DC740; font-size: 1.2rem; margin-bottom: 20px;">{{ (box?.nome || '') | uppercase }}</p>\r
        \r
        <div class="qr-canvas-wrap">\r
          <div *ngIf="isLoadingQr" style="padding: 40px;">\r
            <ion-spinner name="crescent"></ion-spinner>\r
          </div>\r
          <canvas id="qr-canvas" [style.display]="isLoadingQr ? 'none' : 'block'"></canvas>\r
        </div>\r
\r
        <p style="color: #64748B; font-size: 0.85rem; margin-bottom: 25px;">Scansiona il codice per identificare rapidamente il box nel sistema.</p>\r
\r
        <div class="qr-actions">\r
          <button class="btn-qr btn-qr--primary" (click)="scaricaQr()">\r
            <ion-icon name="cloud-download-outline" slot="start"></ion-icon>\r
            Scarica PNG\r
          </button>\r
          <button class="btn-qr btn-qr--secondary" (click)="condividiLink()">\r
            <ion-icon name="share-outline" slot="start"></ion-icon>\r
            Copia Link\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- MODALE CRONOLOGIA -->\r
  <div class="modal-overlay" *ngIf="modaleAperta === 'history'" (click)="chiudiModale()">\r
    <div class="modal-content" style="max-width: 500px;" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h2>Cronologia Box</h2>\r
        <button class="btn-close" (click)="chiudiModale()">\r
          <ion-icon name="close-outline"></ion-icon>\r
        </button>\r
      </div>\r
      <div style="padding: 30px; text-align: center;">\r
        <div style="font-size: 3.5rem; margin-bottom: 20px;">\u{1F552}</div>\r
        <h3 style="color: #1E293B; margin-bottom: 10px;">Movimenti Recenti</h3>\r
        <p style="color: #64748B; font-size: 0.9rem; line-height: 1.6;">\r
          Qui verranno visualizzati i log di accesso, le modifiche agli oggetti e i cambi di posizione del box nel tempo.\r
        </p>\r
        <div style="margin-top: 25px; padding: 15px; background: #F8FAFC; border-radius: 12px; border: 1px dashed #E2E8F0;">\r
          <span style="font-size: 0.8rem; color: #94A3B8; font-weight: 600; text-transform: uppercase;">Nessun log recente</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
</ion-content>\r
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap";\n\n/* src/app/dettaglio-box/dettaglio-box.page.scss */\n:host {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  --page-bg: #F8FAFC;\n}\nion-content {\n  --background: var(--page-bg) !important;\n  --overflow: auto;\n  font-family: "Poppins", sans-serif;\n}\nion-header {\n  background: #FFFFFF;\n}\nion-toolbar.peek-toolbar {\n  --background: #F4F7F9;\n  --border-width: 0;\n}\n.header-inner {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px clamp(20px, 3.5vw, 56px) 6px;\n}\n.header-greet {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-logo {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.header-logo:hover {\n  opacity: 0.75;\n}\n.header-logo:active {\n  opacity: 0.55;\n}\n.header-greeting {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-size: 1.15rem;\n  color: #0F172A;\n  letter-spacing: 0.5px;\n  margin: 0;\n  line-height: 1;\n}\n.nome-verde {\n  background:\n    linear-gradient(\n      135deg,\n      #7DC740,\n      #5A9E2A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 900;\n  text-shadow: 0 2px 8px rgba(125, 199, 64, 0.25);\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.hdr-action-btn {\n  background: none;\n  border: none;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  color: #4A7A94;\n}\n.hdr-action-btn:hover {\n  background: rgba(74, 122, 148, 0.1);\n  color: #0F172A;\n}\n.hdr-action-btn:active {\n  transform: scale(0.92);\n}\n.hdr-action-btn ion-icon {\n  font-size: 1.3rem;\n}\n.main-container {\n  padding: 20px clamp(20px, 3.5vw, 56px);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  max-width: min(92vw, 1400px);\n  margin: 0 auto;\n}\n@media (max-width: 900px) {\n  .main-container {\n    grid-template-columns: 1fr;\n  }\n}\n.pb-card {\n  background: #FFFFFF;\n  border-radius: 24px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(0, 0, 0, 0.02);\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.pb-card:hover {\n  box-shadow: 0 12px 40px rgba(58, 171, 219, 0.15);\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.card-header .card-icon-wrap {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: rgba(58, 171, 219, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n}\n.card-header .card-title {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #15425C;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin: 0;\n}\n.inventory-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-height: 500px;\n  overflow-y: auto;\n  padding-right: 4px;\n}\n.inventory-list::-webkit-scrollbar {\n  width: 4px;\n}\n.inventory-list::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n}\n.item-row {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 16px;\n  background: #F1F5F9;\n  border-radius: 18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.item-row:hover {\n  background: #FFFFFF;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  transform: translateX(4px);\n}\n.item-row .item-img-wrap {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: #FFFFFF;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.item-row .item-img-wrap img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.item-row .item-img-wrap .item-placeholder {\n  font-size: 1.4rem;\n}\n.item-row .item-info {\n  flex: 1;\n}\n.item-row .item-info .item-name {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0F172A;\n  display: block;\n}\n.item-row .item-info .item-meta {\n  font-size: 0.75rem;\n  color: #4A7A94;\n  font-weight: 500;\n}\n.item-row .item-actions {\n  display: flex;\n  gap: 8px;\n}\n.item-row .item-actions .btn-action {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.item-row .item-actions .btn-action--edit {\n  background: rgba(58, 171, 219, 0.1);\n  color: #3AABDB;\n}\n.item-row .item-actions .btn-action--del {\n  background: rgba(239, 68, 68, 0.08);\n  color: #EF4444;\n}\n.item-row .item-actions .btn-action:hover {\n  transform: scale(1.1);\n}\n.actions-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.action-btn-card {\n  background: #FFFFFF;\n  border-radius: 18px;\n  padding: 20px 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 12px;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.action-btn-card .action-icon {\n  width: 50px;\n  height: 50px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.action-btn-card .action-label {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #0F172A;\n}\n.action-btn-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 40px rgba(58, 171, 219, 0.15);\n  border-color: #3AABDB;\n  filter: drop-shadow(0 0 10px rgba(58, 171, 219, 0.2));\n}\n.action-btn-card:hover .action-icon {\n  transform: scale(1.1);\n}\n.action-btn-card--danger:hover {\n  border-color: #EF4444;\n  filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.2));\n}\n.action-btn-card--danger:hover .action-label {\n  color: #EF4444;\n}\n.action-btn-card--disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  pointer-events: auto;\n}\n.action-btn-card--disabled:hover {\n  transform: none;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);\n  border-color: rgba(0, 0, 0, 0.03);\n  filter: none;\n}\n.action-btn-card--disabled:hover .action-icon {\n  transform: none;\n}\n.btn--disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.stats-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.stat-row .stat-info {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.stat-row .stat-info span {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #4A7A94;\n  text-transform: uppercase;\n}\n.stat-row .stat-info .val {\n  color: #3AABDB;\n}\n.stat-row .progress-bg {\n  height: 8px;\n  background: #F1F5F9;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.stat-row .progress-bg .progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #3AABDB,\n      #1A7FA8);\n  border-radius: 10px;\n  transition: width 0.6s ease;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: white;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-content {\n  background: #FFFFFF;\n  width: 90%;\n  max-width: 800px;\n  border-radius: 24px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  border: 1px solid rgba(58, 171, 219, 0.18);\n}\n.modal-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid #F1F5F9;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-header h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #0F172A;\n}\n.modal-header .btn-close {\n  background: #F1F5F9;\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.modal-header .btn-close:hover {\n  background: #E2E8F0;\n  transform: rotate(90deg);\n}\n.modal-body {\n  padding: 24px;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  gap: 30px;\n}\n@media (max-width: 600px) {\n  .modal-body {\n    grid-template-columns: 1fr;\n  }\n}\n.photo-upload-zone {\n  aspect-ratio: 1;\n  background: #F8FAFC;\n  border: 2px dashed #E2E8F0;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.photo-upload-zone:hover {\n  border-color: #3AABDB;\n  background: rgba(58, 171, 219, 0.02);\n}\n.photo-upload-zone .preview-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 18px;\n}\n.photo-upload-zone .upload-hint {\n  text-align: center;\n  font-size: 2.5rem;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group label {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #4A7A94;\n  text-transform: uppercase;\n  margin-bottom: 6px;\n}\n.form-group .input-control {\n  width: 100%;\n  padding: 12px 16px;\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.form-group .input-control:focus {\n  outline: none;\n  border-color: #3AABDB;\n  background: #FFFFFF;\n  box-shadow: 0 0 0 4px rgba(58, 171, 219, 0.1);\n}\n.btn-save-oggetto {\n  width: 100%;\n  padding: 14px;\n  background: #3AABDB;\n  color: #FFFFFF;\n  border: none;\n  border-radius: 12px;\n  font-weight: 800;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 12px rgba(58, 171, 219, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.btn-save-oggetto:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(58, 171, 219, 0.3);\n}\n.btn-save-oggetto:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.qr-container {\n  padding: 40px;\n  text-align: center;\n}\n.qr-container .qr-canvas-wrap {\n  background: #FFFFFF;\n  padding: 20px;\n  border-radius: 18px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);\n  display: inline-block;\n  margin-bottom: 20px;\n}\n.qr-container .qr-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.qr-container .qr-actions .btn-qr {\n  padding: 10px 20px;\n  border-radius: 12px;\n  border: none;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.qr-container .qr-actions .btn-qr--primary {\n  background: #3AABDB;\n  color: #FFFFFF;\n}\n.qr-container .qr-actions .btn-qr--secondary {\n  background: #F1F5F9;\n  color: #0F172A;\n}\n.qr-container .qr-actions .btn-qr:hover {\n  transform: translateY(-2px);\n  opacity: 0.9;\n}\n/*# sourceMappingURL=dettaglio-box.page.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: DatabaseService }, { type: AlertController }, { type: ToastController }, { type: ActionSheetController }, { type: NavigationHistoryService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DettaglioBoxPage, { className: "DettaglioBoxPage", filePath: "src/app/dettaglio-box/dettaglio-box.page.ts", lineNumber: 39 });
})();
export {
  DettaglioBoxPage
};
//# sourceMappingURL=dettaglio-box.page-64UEZTZ4.js.map
