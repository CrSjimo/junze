/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-define.js":
/*!*************************************************************************!*\
  !*** ../AppData/Roaming/npm/node_modules/webpack/buildin/amd-define.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-options.js":
/*!**************************************************************************!*\
  !*** ../AppData/Roaming/npm/node_modules/webpack/buildin/amd-options.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "../AppData/Roaming/npm/node_modules/webpack/buildin/module.js":
/*!*********************************************************************!*\
  !*** ../AppData/Roaming/npm/node_modules/webpack/buildin/module.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/random/dist/esm/distributions/bates.js":
/*!*************************************************************!*\
  !*** ./node_modules/random/dist/esm/distributions/bates.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation */ "./node_modules/random/dist/esm/validation.js");

/* harmony default export */ __webpack_exports__["default"] = ((random, n = 1) => {
    Object(_validation__WEBPACK_IMPORTED_MODULE_0__["numberValidator"])(n).isInt().isPositive();
    const irwinHall = random.irwinHall(n);
    return () => {
        return irwinHall() / n;
    };
});
//# sourceMappingURL=bates.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/distributions/bernoulli.js":
/*!*****************************************************************!*\
  !*** ./node_modules/random/dist/esm/distributions/bernoulli.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation */ "./node_modules/random/dist/esm/validation.js");

/* harmony default export */ __webpack_exports__["default"] = ((random, p = 0.5) => {
    Object(_validation__WEBPACK_IMPORTED_MODULE_0__["numberValidator"])(p).greaterThanOrEqual(0).lessThan(1);
    return () => {
        return Math.floor(random.next() + p);
    };
});
//# sourceMappingURL=bernoulli.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/distributions/binomial.js":
/*!****************************************************************!*\
  !*** ./node_modules/random/dist/esm/distributions/binomial.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation */ "./node_modules/random/dist/esm/validation.js");

/* harmony default export */ __webpack_exports__["default"] = ((random, n = 1, p = 0.5) => {
    Object(_validation__WEBPACK_IMPORTED_MODULE_0__["numberValidator"])(n).isInt().isPositive();
    Object(_validation__WEBPACK_IMPORTED_MODULE_0__["numberValidator"])(p).greaterThanOrEqual(0).lessThan(1);
    return () => {
        let i = 0;
        let x = 0;
        while (i++ < n) {
            if (random.next() < p) {
                x++;
            }
        }
        return x;
    };
});
//# sourceMappingURL=binomial.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/distributions/exponential.js":
/*!*******************************************************************!*\
  !*** ./node_modules/random/dist/esm/distributions/exponential.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation */ "./node_modules/random/dist/esm/validation.js");

/* harmony default export */ __webpack_exports__["default"] = ((random, lambda = 1) => {
    Object(_validation__WEBPACK_IMPORTED_MODULE_0__["numberValidator"])(lambda).isPositive();
    return () => {
        return -Math.log(1 - random.next()) / lambda;
    };
});
//# sourceMappingURL=exponential.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/distributions/geometric.js":
/*!*****************************************************************!*\
  !*** ./node_modules/random/dist/esm/distributions/geometric.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation */ "./node_modules/random/dist/esm/validation.js");

/* harmony default export */ __webpack_exports__["default"] = ((random, p = 0.5) => {
    Object(_validation__WEBPACK_IMPORTED_MODULE_0__["numberValidator"])(p).greaterThan(0).lessThan(1);
    const invLogP = 1.0 / Math.log(1.0 - p);
    return () => {
        return Math.floor(1 + Math.log(random.next()) * invLogP);
    };
});
//# sourceMappingURL=geometric.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/distributions/irwin-hall.js":
/*!******************************************************************!*\
  !*** ./node_modules/random/dist/esm/distributions/irwin-hall.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation */ "./node_modules/random/dist/esm/validation.js");

/* harmony default export */ __webpack_exports__["default"] = ((random, n = 1) => {
    Object(_validation__WEBPACK_IMPORTED_MODULE_0__["numberValidator"])(n).isInt().greaterThanOrEqual(0);
    return () => {
        let sum = 0;
        for (let i = 0; i < n; ++i) {
            sum += random.next();
        }
        return sum;
    };
});
//# sourceMappingURL=irwin-hall.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/distributions/log-normal.js":
/*!******************************************************************!*\
  !*** ./node_modules/random/dist/esm/distributions/log-normal.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((random, mu = 0, sigma = 1) => {
    const normal = random.normal(mu, sigma);
    return () => {
        return Math.exp(normal());
    };
});
//# sourceMappingURL=log-normal.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/distributions/normal.js":
/*!**************************************************************!*\
  !*** ./node_modules/random/dist/esm/distributions/normal.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((random, mu = 0, sigma = 1) => {
    return () => {
        let x, y, r;
        do {
            x = random.next() * 2 - 1;
            y = random.next() * 2 - 1;
            r = x * x + y * y;
        } while (!r || r > 1);
        return mu + sigma * y * Math.sqrt((-2 * Math.log(r)) / r);
    };
});
//# sourceMappingURL=normal.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/distributions/pareto.js":
/*!**************************************************************!*\
  !*** ./node_modules/random/dist/esm/distributions/pareto.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation */ "./node_modules/random/dist/esm/validation.js");

/* harmony default export */ __webpack_exports__["default"] = ((random, alpha = 1) => {
    Object(_validation__WEBPACK_IMPORTED_MODULE_0__["numberValidator"])(alpha).greaterThanOrEqual(0);
    const invAlpha = 1.0 / alpha;
    return () => {
        return 1.0 / Math.pow(1.0 - random.next(), invAlpha);
    };
});
//# sourceMappingURL=pareto.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/distributions/poisson.js":
/*!***************************************************************!*\
  !*** ./node_modules/random/dist/esm/distributions/poisson.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation */ "./node_modules/random/dist/esm/validation.js");

const logFactorialTable = [
    0.0,
    0.0,
    0.69314718055994529,
    1.791759469228055,
    3.1780538303479458,
    4.7874917427820458,
    6.5792512120101012,
    8.5251613610654147,
    10.604602902745251,
    12.801827480081469
];
const logFactorial = (k) => {
    return logFactorialTable[k];
};
const logSqrt2PI = 0.91893853320467267;
/* harmony default export */ __webpack_exports__["default"] = ((random, lambda = 1) => {
    Object(_validation__WEBPACK_IMPORTED_MODULE_0__["numberValidator"])(lambda).isPositive();
    if (lambda < 10) {
        // inversion method
        const expMean = Math.exp(-lambda);
        return () => {
            let p = expMean;
            let x = 0;
            let u = random.next();
            while (u > p) {
                u = u - p;
                p = (lambda * p) / ++x;
            }
            return x;
        };
    }
    else {
        // generative method
        const smu = Math.sqrt(lambda);
        const b = 0.931 + 2.53 * smu;
        const a = -0.059 + 0.02483 * b;
        const invAlpha = 1.1239 + 1.1328 / (b - 3.4);
        const vR = 0.9277 - 3.6224 / (b - 2);
        return () => {
            var _a;
            while (true) {
                let u;
                let v = random.next();
                if (v <= 0.86 * vR) {
                    u = v / vR - 0.43;
                    return Math.floor(((2 * a) / (0.5 - Math.abs(u)) + b) * u + lambda + 0.445);
                }
                if (v >= vR) {
                    u = random.next() - 0.5;
                }
                else {
                    u = v / vR - 0.93;
                    u = (u < 0 ? -0.5 : 0.5) - u;
                    v = random.next() * vR;
                }
                const us = 0.5 - Math.abs(u);
                if (us < 0.013 && v > us) {
                    continue;
                }
                const k = Math.floor(((2 * a) / us + b) * u + lambda + 0.445);
                v = (v * invAlpha) / (a / (us * us) + b);
                if (k >= 10) {
                    const t = (k + 0.5) * Math.log(lambda / k) -
                        lambda -
                        logSqrt2PI +
                        k -
                        (1 / 12.0 - (1 / 360.0 - 1 / (1260.0 * k * k)) / (k * k)) / k;
                    if (Math.log(v * smu) <= t) {
                        return k;
                    }
                }
                else if (k >= 0) {
                    const f = (_a = logFactorial(k)) !== null && _a !== void 0 ? _a : 0;
                    if (Math.log(v) <= k * Math.log(lambda) - lambda - f) {
                        return k;
                    }
                }
            }
        };
    }
});
//# sourceMappingURL=poisson.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/distributions/uniform-boolean.js":
/*!***********************************************************************!*\
  !*** ./node_modules/random/dist/esm/distributions/uniform-boolean.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((random) => {
    return () => {
        return random.next() >= 0.5;
    };
});
//# sourceMappingURL=uniform-boolean.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/distributions/uniform-int.js":
/*!*******************************************************************!*\
  !*** ./node_modules/random/dist/esm/distributions/uniform-int.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation */ "./node_modules/random/dist/esm/validation.js");

/* harmony default export */ __webpack_exports__["default"] = ((random, min = 0, max = 1) => {
    if (max === undefined) {
        max = min === undefined ? 1 : min;
        min = 0;
    }
    Object(_validation__WEBPACK_IMPORTED_MODULE_0__["numberValidator"])(min).isInt();
    Object(_validation__WEBPACK_IMPORTED_MODULE_0__["numberValidator"])(max).isInt();
    return () => {
        return Math.floor(random.next() * (max - min + 1) + min);
    };
});
//# sourceMappingURL=uniform-int.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/distributions/uniform.js":
/*!***************************************************************!*\
  !*** ./node_modules/random/dist/esm/distributions/uniform.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((random, min = 0, max = 1) => {
    return () => {
        return random.next() * (max - min) + min;
    };
});
//# sourceMappingURL=uniform.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/generators/function.js":
/*!*************************************************************!*\
  !*** ./node_modules/random/dist/esm/generators/function.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RNGFunction; });
/* harmony import */ var _rng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rng */ "./node_modules/random/dist/esm/rng.js");

class RNGFunction extends _rng__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(thunk, opts) {
        super();
        this.seed(thunk, opts);
    }
    get name() {
        return 'function';
    }
    next() {
        return this._rng();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    seed(thunk, _opts) {
        this._rng = thunk;
    }
    clone(_, opts) {
        return new RNGFunction(this._rng, opts);
    }
}
//# sourceMappingURL=function.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/generators/math-random.js":
/*!****************************************************************!*\
  !*** ./node_modules/random/dist/esm/generators/math-random.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RNGMathRandom; });
/* harmony import */ var _rng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rng */ "./node_modules/random/dist/esm/rng.js");

class RNGMathRandom extends _rng__WEBPACK_IMPORTED_MODULE_0__["default"] {
    get name() {
        return 'default';
    }
    next() {
        return Math.random();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    seed(_seed, _opts) {
        // intentionally empty
    }
    clone() {
        return new RNGMathRandom();
    }
}
//# sourceMappingURL=math-random.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/index.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/random/dist/esm/index.esm.js ***!
  \***************************************************/
/*! exports provided: RNG, RNGFactory, Random, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./node_modules/random/dist/esm/random.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RNG", function() { return _random__WEBPACK_IMPORTED_MODULE_0__["RNG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RNGFactory", function() { return _random__WEBPACK_IMPORTED_MODULE_0__["RNGFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Random", function() { return _random__WEBPACK_IMPORTED_MODULE_0__["Random"]; });



/* harmony default export */ __webpack_exports__["default"] = (_random__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.esm.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/random.js":
/*!************************************************!*\
  !*** ./node_modules/random/dist/esm/random.js ***!
  \************************************************/
/*! exports provided: RNG, RNGFactory, Random, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Random", function() { return Random; });
/* harmony import */ var _rng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng */ "./node_modules/random/dist/esm/rng.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RNG", function() { return _rng__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _rng_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng-factory */ "./node_modules/random/dist/esm/rng-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RNGFactory", function() { return _rng_factory__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _distributions_uniform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distributions/uniform */ "./node_modules/random/dist/esm/distributions/uniform.js");
/* harmony import */ var _distributions_uniform_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./distributions/uniform-int */ "./node_modules/random/dist/esm/distributions/uniform-int.js");
/* harmony import */ var _distributions_uniform_boolean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./distributions/uniform-boolean */ "./node_modules/random/dist/esm/distributions/uniform-boolean.js");
/* harmony import */ var _distributions_normal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./distributions/normal */ "./node_modules/random/dist/esm/distributions/normal.js");
/* harmony import */ var _distributions_log_normal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./distributions/log-normal */ "./node_modules/random/dist/esm/distributions/log-normal.js");
/* harmony import */ var _distributions_bernoulli__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./distributions/bernoulli */ "./node_modules/random/dist/esm/distributions/bernoulli.js");
/* harmony import */ var _distributions_binomial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./distributions/binomial */ "./node_modules/random/dist/esm/distributions/binomial.js");
/* harmony import */ var _distributions_geometric__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./distributions/geometric */ "./node_modules/random/dist/esm/distributions/geometric.js");
/* harmony import */ var _distributions_poisson__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./distributions/poisson */ "./node_modules/random/dist/esm/distributions/poisson.js");
/* harmony import */ var _distributions_exponential__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./distributions/exponential */ "./node_modules/random/dist/esm/distributions/exponential.js");
/* harmony import */ var _distributions_irwin_hall__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./distributions/irwin-hall */ "./node_modules/random/dist/esm/distributions/irwin-hall.js");
/* harmony import */ var _distributions_bates__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./distributions/bates */ "./node_modules/random/dist/esm/distributions/bates.js");
/* harmony import */ var _distributions_pareto__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./distributions/pareto */ "./node_modules/random/dist/esm/distributions/pareto.js");
/* harmony import */ var _generators_math_random__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./generators/math-random */ "./node_modules/random/dist/esm/generators/math-random.js");

















/**
 * Seedable random number generator supporting many common distributions.
 *
 * Defaults to Math.random as its underlying pseudorandom number generator.
 *
 * @name Random
 * @class
 *
 * @param {RNG|function} [rng=Math.random] - Underlying pseudorandom number generator.
 */
class Random {
    constructor(rng) {
        this._cache = {};
        // --------------------------------------------------------------------------
        // Uniform utility functions
        // --------------------------------------------------------------------------
        /**
         * Convenience wrapper around `this.rng.next()`
         *
         * Returns a floating point number in [0, 1).
         *
         * @return {number}
         */
        this.next = () => {
            return this._rng.next();
        };
        /**
         * Samples a uniform random floating point number, optionally specifying
         * lower and upper bounds.
         *
         * Convence wrapper around `random.uniform()`
         *
         * @param {number} [min=0] - Lower bound (float, inclusive)
         * @param {number} [max=1] - Upper bound (float, exclusive)
         * @return {number}
         */
        this.float = (min, max) => {
            return this.uniform(min, max)();
        };
        /**
         * Samples a uniform random integer, optionally specifying lower and upper
         * bounds.
         *
         * Convence wrapper around `random.uniformInt()`
         *
         * @param {number} [min=0] - Lower bound (integer, inclusive)
         * @param {number} [max=1] - Upper bound (integer, inclusive)
         * @return {number}
         */
        this.int = (min, max) => {
            return this.uniformInt(min, max)();
        };
        /**
         * Samples a uniform random integer, optionally specifying lower and upper
         * bounds.
         *
         * Convence wrapper around `random.uniformInt()`
         *
         * @alias `random.int`
         *
         * @param {number} [min=0] - Lower bound (integer, inclusive)
         * @param {number} [max=1] - Upper bound (integer, inclusive)
         * @return {number}
         */
        this.integer = (min, max) => {
            return this.uniformInt(min, max)();
        };
        /**
         * Samples a uniform random boolean value.
         *
         * Convence wrapper around `random.uniformBoolean()`
         *
         * @alias `random.boolean`
         *
         * @return {boolean}
         */
        this.bool = () => {
            return this.uniformBoolean()();
        };
        /**
         * Samples a uniform random boolean value.
         *
         * Convence wrapper around `random.uniformBoolean()`
         *
         * @return {boolean}
         */
        this.boolean = () => {
            return this.uniformBoolean()();
        };
        // --------------------------------------------------------------------------
        // Uniform distributions
        // --------------------------------------------------------------------------
        /**
         * Generates a [Continuous uniform distribution](https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)).
         *
         * @param {number} [min=0] - Lower bound (float, inclusive)
         * @param {number} [max=1] - Upper bound (float, exclusive)
         * @return {function}
         */
        this.uniform = (min, max) => {
            return this._memoize('uniform', _distributions_uniform__WEBPACK_IMPORTED_MODULE_2__["default"], min, max);
        };
        /**
         * Generates a [Discrete uniform distribution](https://en.wikipedia.org/wiki/Discrete_uniform_distribution).
         *
         * @param {number} [min=0] - Lower bound (integer, inclusive)
         * @param {number} [max=1] - Upper bound (integer, inclusive)
         * @return {function}
         */
        this.uniformInt = (min, max) => {
            return this._memoize('uniformInt', _distributions_uniform_int__WEBPACK_IMPORTED_MODULE_3__["default"], min, max);
        };
        /**
         * Generates a [Discrete uniform distribution](https://en.wikipedia.org/wiki/Discrete_uniform_distribution),
         * with two possible outcomes, `true` or `false.
         *
         * This method is analogous to flipping a coin.
         *
         * @return {function}
         */
        this.uniformBoolean = () => {
            return this._memoize('uniformBoolean', _distributions_uniform_boolean__WEBPACK_IMPORTED_MODULE_4__["default"]);
        };
        // --------------------------------------------------------------------------
        // Normal distributions
        // --------------------------------------------------------------------------
        /**
         * Generates a [Normal distribution](https://en.wikipedia.org/wiki/Normal_distribution).
         *
         * @param {number} [mu=0] - Mean
         * @param {number} [sigma=1] - Standard deviation
         * @return {function}
         */
        this.normal = (mu, sigma) => {
            return Object(_distributions_normal__WEBPACK_IMPORTED_MODULE_5__["default"])(this, mu, sigma);
        };
        /**
         * Generates a [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
         *
         * @param {number} [mu=0] - Mean of underlying normal distribution
         * @param {number} [sigma=1] - Standard deviation of underlying normal distribution
         * @return {function}
         */
        this.logNormal = (mu, sigma) => {
            return Object(_distributions_log_normal__WEBPACK_IMPORTED_MODULE_6__["default"])(this, mu, sigma);
        };
        // --------------------------------------------------------------------------
        // Bernoulli distributions
        // --------------------------------------------------------------------------
        /**
         * Generates a [Bernoulli distribution](https://en.wikipedia.org/wiki/Bernoulli_distribution).
         *
         * @param {number} [p=0.5] - Success probability of each trial.
         * @return {function}
         */
        this.bernoulli = (p) => {
            return Object(_distributions_bernoulli__WEBPACK_IMPORTED_MODULE_7__["default"])(this, p);
        };
        /**
         * Generates a [Binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution).
         *
         * @param {number} [n=1] - Number of trials.
         * @param {number} [p=0.5] - Success probability of each trial.
         * @return {function}
         */
        this.binomial = (n, p) => {
            return Object(_distributions_binomial__WEBPACK_IMPORTED_MODULE_8__["default"])(this, n, p);
        };
        /**
         * Generates a [Geometric distribution](https://en.wikipedia.org/wiki/Geometric_distribution).
         *
         * @param {number} [p=0.5] - Success probability of each trial.
         * @return {function}
         */
        this.geometric = (p) => {
            return Object(_distributions_geometric__WEBPACK_IMPORTED_MODULE_9__["default"])(this, p);
        };
        // --------------------------------------------------------------------------
        // Poisson distributions
        // --------------------------------------------------------------------------
        /**
         * Generates a [Poisson distribution](https://en.wikipedia.org/wiki/Poisson_distribution).
         *
         * @param {number} [lambda=1] - Mean (lambda > 0)
         * @return {function}
         */
        this.poisson = (lambda) => {
            return Object(_distributions_poisson__WEBPACK_IMPORTED_MODULE_10__["default"])(this, lambda);
        };
        /**
         * Generates an [Exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution).
         *
         * @param {number} [lambda=1] - Inverse mean (lambda > 0)
         * @return {function}
         */
        this.exponential = (lambda) => {
            return Object(_distributions_exponential__WEBPACK_IMPORTED_MODULE_11__["default"])(this, lambda);
        };
        // --------------------------------------------------------------------------
        // Misc distributions
        // --------------------------------------------------------------------------
        /**
         * Generates an [Irwin Hall distribution](https://en.wikipedia.org/wiki/Irwin%E2%80%93Hall_distribution).
         *
         * @param {number} [n=1] - Number of uniform samples to sum (n >= 0)
         * @return {function}
         */
        this.irwinHall = (n) => {
            return Object(_distributions_irwin_hall__WEBPACK_IMPORTED_MODULE_12__["default"])(this, n);
        };
        /**
         * Generates a [Bates distribution](https://en.wikipedia.org/wiki/Bates_distribution).
         *
         * @param {number} [n=1] - Number of uniform samples to average (n >= 1)
         * @return {function}
         */
        this.bates = (n) => {
            return Object(_distributions_bates__WEBPACK_IMPORTED_MODULE_13__["default"])(this, n);
        };
        /**
         * Generates a [Pareto distribution](https://en.wikipedia.org/wiki/Pareto_distribution).
         *
         * @param {number} [alpha=1] - Alpha
         * @return {function}
         */
        this.pareto = (alpha) => {
            return Object(_distributions_pareto__WEBPACK_IMPORTED_MODULE_14__["default"])(this, alpha);
        };
        if (rng && rng instanceof _rng__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this.use(rng);
        }
        else {
            this.use(new _generators_math_random__WEBPACK_IMPORTED_MODULE_15__["default"]());
        }
        this._cache = {};
    }
    /**
     * @member {RNG} Underlying pseudo-random number generator
     */
    get rng() {
        return this._rng;
    }
    /**
     * Creates a new `Random` instance, optionally specifying parameters to
     * set a new seed.
     *
     * @see RNG.clone
     *
     * @param {string} [seed] - Optional seed for new RNG.
     * @param {object} [opts] - Optional config for new RNG options.
     * @return {Random}
     */
    clone(...args) {
        if (args.length) {
            return new Random(Object(_rng_factory__WEBPACK_IMPORTED_MODULE_1__["default"])(...args));
        }
        else {
            return new Random(this.rng.clone());
        }
    }
    /**
     * Sets the underlying pseudorandom number generator used via
     * either an instance of `seedrandom`, a custom instance of RNG
     * (for PRNG plugins), or a string specifying the PRNG to use
     * along with an optional `seed` and `opts` to initialize the
     * RNG.
     *
     * @example
     * const random = require('random')
     *
     * random.use('example_seedrandom_string')
     * // or
     * random.use(seedrandom('kittens'))
     * // or
     * random.use(Math.random)
     *
     * @param {...*} args
     */
    use(...args) {
        this._rng = Object(_rng_factory__WEBPACK_IMPORTED_MODULE_1__["default"])(...args);
    }
    /**
     * Patches `Math.random` with this Random instance's PRNG.
     */
    patch() {
        if (this._patch) {
            throw new Error('Math.random already patched');
        }
        this._patch = Math.random;
        Math.random = this.uniform();
    }
    /**
     * Restores a previously patched `Math.random` to its original value.
     */
    unpatch() {
        if (this._patch) {
            Math.random = this._patch;
            delete this._patch;
        }
    }
    // --------------------------------------------------------------------------
    // Internal
    // --------------------------------------------------------------------------
    /**
     * Memoizes distributions to ensure they're only created when necessary.
     *
     * Returns a thunk which that returns independent, identically distributed
     * samples from the specified distribution.
     *
     * @private
     *
     * @param {string} label - Name of distribution
     * @param {function} getter - Function which generates a new distribution
     * @param {...*} args - Distribution-specific arguments
     *
     * @return {function}
     */
    _memoize(label, getter, ...args) {
        const key = `${args.join(';')}`;
        let value = this._cache[label];
        if (value === undefined || value.key !== key) {
            value = {
                key,
                distribution: getter(this, ...args)
            };
            this._cache[label] = value;
        }
        return value.distribution;
    }
}
// defaults to Math.random as its RNG
/* harmony default export */ __webpack_exports__["default"] = (new Random());
//# sourceMappingURL=random.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/rng-factory.js":
/*!*****************************************************!*\
  !*** ./node_modules/random/dist/esm/rng-factory.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! seedrandom */ "./node_modules/seedrandom/index.js");
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng */ "./node_modules/random/dist/esm/rng.js");
/* harmony import */ var _generators_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generators/function */ "./node_modules/random/dist/esm/generators/function.js");



/**
 * Construct an RNG with variable inputs. Used in calls to Random constructor
 * @param {...*} args - Distribution-specific arguments
 * @return RNG
 *
 * @example
 * new Random(RNGFactory(...args))
 */
/* harmony default export */ __webpack_exports__["default"] = ((...args) => {
    const [arg0 = 'default', ...rest] = args;
    switch (typeof arg0) {
        case 'object':
            if (arg0 instanceof _rng__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                return arg0;
            }
            break;
        case 'function':
            return new _generators_function__WEBPACK_IMPORTED_MODULE_2__["default"](arg0);
        case 'number':
        case 'string':
            return new _generators_function__WEBPACK_IMPORTED_MODULE_2__["default"](seedrandom__WEBPACK_IMPORTED_MODULE_0___default()(...rest));
    }
    throw new Error(`invalid RNG "${arg0}"`);
});
//# sourceMappingURL=rng-factory.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/rng.js":
/*!*********************************************!*\
  !*** ./node_modules/random/dist/esm/rng.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RNG; });
class RNG {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _seed(seed, _opts) {
        // TODO: add entropy and stuff
        if (seed === (seed || 0)) {
            return seed;
        }
        else {
            const strSeed = '' + seed;
            let s = 0;
            for (let k = 0; k < strSeed.length; ++k) {
                s ^= strSeed.charCodeAt(k) | 0;
            }
            return s;
        }
    }
}
//# sourceMappingURL=rng.js.map

/***/ }),

/***/ "./node_modules/random/dist/esm/validation.js":
/*!****************************************************!*\
  !*** ./node_modules/random/dist/esm/validation.js ***!
  \****************************************************/
/*! exports provided: numberValidator, NumberValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberValidator", function() { return numberValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValidator", function() { return NumberValidator; });
function numberValidator(num) {
    return new NumberValidator(num);
}
class NumberValidator {
    constructor(num) {
        this.isInt = () => {
            if (Number.isInteger(this.n)) {
                return this;
            }
            throw new Error(`Expected number to be an integer, got ${this.n}`);
        };
        this.isPositive = () => {
            if (this.n > 0) {
                return this;
            }
            throw new Error(`Expected number to be positive, got ${this.n}`);
        };
        this.lessThan = (v) => {
            if (this.n < v) {
                return this;
            }
            throw new Error(`Expected number to be less than ${v}, got ${this.n}`);
        };
        this.greaterThanOrEqual = (v) => {
            if (this.n >= v) {
                return this;
            }
            throw new Error(`Expected number to be greater than or equal to ${v}, got ${this.n}`);
        };
        this.greaterThan = (v) => {
            if (this.n > v) {
                return this;
            }
            throw new Error(`Expected number to be greater than ${v}, got ${this.n}`);
        };
        this.n = num;
    }
}
//# sourceMappingURL=validation.js.map

/***/ }),

/***/ "./node_modules/seedrandom/index.js":
/*!******************************************!*\
  !*** ./node_modules/seedrandom/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(/*! ./lib/alea */ "./node_modules/seedrandom/lib/alea.js");

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = __webpack_require__(/*! ./lib/xor128 */ "./node_modules/seedrandom/lib/xor128.js");

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = __webpack_require__(/*! ./lib/xorwow */ "./node_modules/seedrandom/lib/xorwow.js");

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = __webpack_require__(/*! ./lib/xorshift7 */ "./node_modules/seedrandom/lib/xorshift7.js");

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = __webpack_require__(/*! ./lib/xor4096 */ "./node_modules/seedrandom/lib/xor4096.js");

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = __webpack_require__(/*! ./lib/tychei */ "./node_modules/seedrandom/lib/tychei.js");

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = __webpack_require__(/*! ./seedrandom */ "./node_modules/seedrandom/seedrandom.js");

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;


/***/ }),

/***/ "./node_modules/seedrandom/lib/alea.js":
/*!*********************************************!*\
  !*** ./node_modules/seedrandom/lib/alea.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = String(data);
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.alea = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../AppData/Roaming/npm/node_modules/webpack/buildin/module.js */ "../AppData/Roaming/npm/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/tychei.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/tychei.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
};

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.tychei = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../AppData/Roaming/npm/node_modules/webpack/buildin/module.js */ "../AppData/Roaming/npm/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xor128.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xor128.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor128 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../AppData/Roaming/npm/node_modules/webpack/buildin/module.js */ "../AppData/Roaming/npm/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xor4096.js":
/*!************************************************!*\
  !*** ./node_modules/seedrandom/lib/xor4096.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
};

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor4096 = impl;
}

})(
  this,                                     // window object or global
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../AppData/Roaming/npm/node_modules/webpack/buildin/module.js */ "../AppData/Roaming/npm/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xorshift7.js":
/*!**************************************************!*\
  !*** ./node_modules/seedrandom/lib/xorshift7.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v, w;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, w, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      w = X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) w = X[7] = -1; else w = X[j];

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorshift7 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../AppData/Roaming/npm/node_modules/webpack/buildin/module.js */ "../AppData/Roaming/npm/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xorwow.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xorwow.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorwow = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "../AppData/Roaming/npm/node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../AppData/Roaming/npm/node_modules/webpack/buildin/module.js */ "../AppData/Roaming/npm/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/seedrandom.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/seedrandom.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright 2019 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (global, pool, math) {
//
// The following constants are related to IEEE 754 limits.
//

var width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; }
  prng.quick = function() { return arc4.g(4) / 0x100000000; }
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); }
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
};

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ( true && module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = __webpack_require__(/*! crypto */ 0);
  } catch (ex) {}
} else if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return seedrandom; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


// End anonymous scope, and pass initial values.
})(
  // global: `self` in browsers (including strict mode and web workers),
  // otherwise `this` in Node and other environments
  (typeof self !== 'undefined') ? self : this,
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const random = __webpack_require__(/*! random */ "./node_modules/random/dist/esm/index.esm.js");

function calcDate(){
    const leaveDate = new Date("2021-04-28 00:00:00");
    const nowDate = new Date();
    return Math.floor((nowDate - leaveDate)/(1000*86400));
}

function calcChar(){
    return String.fromCharCode(random.default.int(0x4e00,0x9fff));
}

const container = document.getElementById("junze");
container.textContent = `俊泽不在的第${calcDate()}天，${calcChar()}他。`



/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map