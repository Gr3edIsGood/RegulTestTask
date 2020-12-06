/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(".page").hide();
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(".alert").hide();
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(".main-btn").click(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(".page").is(":hidden")) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(".page").show('fast');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(".main-btn").hide();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(".page").hide('fast');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.close-btn').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(".page").hide('fast');
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.send-btn').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(".page").hide('fast');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(".alert").fadeIn('slow');
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.alert__close--btn').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(".alert").fadeOut('slow');
  });
});
jquery__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  var counter = 12; //you can initialize it with any number

  var max = 500; //you can change this

  var $total = jquery__WEBPACK_IMPORTED_MODULE_2___default()(".total");
  var submit = true;
  $total.html(counter);
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(".max").html(max);

  function count(event) {
    var total = jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target).val().length;
    $total.html(counter); //sum the textareas

    var sum = 0;
    jquery__WEBPACK_IMPORTED_MODULE_2___default()("textarea").each(function (index, item) {
      sum += jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val().length;
    });
    counter = sum;

    if (counter > max) {
      $total.css({
        color: "red"
      });
      submit = false;
    } else {
      $total.css({
        color: "black"
      });
      submit = true;
    }
  }

  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on("keyup", "textarea", count);
});

/***/ }),

/***/ "./images/aside_img-1.png":
/*!********************************!*
  !*** ./images/aside_img-1.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/aside_img-1.png");

/***/ }),

/***/ "./images/aside_img-2.png":
/*!********************************!*
  !*** ./images/aside_img-2.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/aside_img-2.png");

/***/ }),

/***/ "./images/aside_img-3.png":
/*!********************************!*
  !*** ./images/aside_img-3.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/aside_img-3.png");

/***/ }),

/***/ "./images/aside_img-4.png":
/*!********************************!*
  !*** ./images/aside_img-4.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/aside_img-4.png");

/***/ }),

/***/ "./images/aside_img-5.png":
/*!********************************!*
  !*** ./images/aside_img-5.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/aside_img-5.png");

/***/ }),

/***/ "./images/main.png":
/*!*************************!*
  !*** ./images/main.png ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/main.png");

/***/ }),

/***/ "./index.html":
/*!********************!*
  !*** ./index.html ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./images/main.png */ "./images/main.png");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ./images/aside_img-1.png */ "./images/aside_img-1.png");
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(/*! ./images/aside_img-2.png */ "./images/aside_img-2.png");
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(/*! ./images/aside_img-3.png */ "./images/aside_img-3.png");
var ___HTML_LOADER_IMPORT_4___ = __webpack_require__(/*! ./images/aside_img-4.png */ "./images/aside_img-4.png");
var ___HTML_LOADER_IMPORT_5___ = __webpack_require__(/*! ./images/aside_img-5.png */ "./images/aside_img-5.png");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_5___);
var code = "<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\"\r\n          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Regul</title>\r\n</head>\r\n<body>\r\n\r\n    <svg style=\"display: none;\">\r\n\r\n        <symbol  id=\"X\" viewBox=\"0 0 14 14\">\r\n            <g>\r\n                <path d=\"M13.364 13.364C12.9734 13.7545 12.3403 13.7545 11.9497 13.364L6.99999 8.41421L2.05025 13.364C1.65972 13.7545 1.02656 13.7545 0.636033 13.364C0.245508 12.9734 0.245509 12.3403 0.636033 11.9497L5.58578 6.99999L0.636033 2.05025C0.245509 1.65972 0.245508 1.02656 0.636033 0.636033C1.02656 0.245508 1.65972 0.245509 2.05025 0.636033L6.99999 5.58578L11.9497 0.636033C12.3403 0.245509 12.9734 0.245508 13.364 0.636033C13.7545 1.02656 13.7545 1.65972 13.364 2.05025L8.41421 6.99999L13.364 11.9497C13.7545 12.3403 13.7545 12.9734 13.364 13.364Z\"/>\r\n            </g>\r\n         </symbol>\r\n\r\n        <symbol  id=\"star\" viewBox=\"0 0 22 22\">\r\n            <g>\r\n                <path d=\"M21.5811 8.02241C21.7827 8.64986 21.6259 9.14286 21.1333 9.52381L16.05 13.3782L17.9982 19.6527C18.2445 20.5266 17.5951 21.3333 16.789 21.3333C16.5202 21.3333 16.2739 21.2437 16.05 21.0644L10.9891 17.2101L5.92817 21.0644C5.65684 21.2484 5.32602 21.323 5.00208 21.2731C4.67813 21.2232 4.385 21.0526 4.18148 20.7955C4.05056 20.6394 3.96468 20.4504 3.93312 20.249C3.90155 20.0476 3.92548 19.8414 4.00233 19.6527L5.92817 13.423L0.844866 9.52381C0.374605 9.14286 0.217852 8.64986 0.419392 8.02241C0.598539 7.48459 1.0688 7.12605 1.58385 7.12605H7.854L9.80222 0.87395C9.95898 0.358543 10.4292 0 10.9667 0C11.5265 0 12.0192 0.380952 12.1759 0.918768L14.1241 7.12605H20.3943C20.9317 7.12605 21.402 7.48459 21.5811 8.02241Z\"/>\r\n            </g>\r\n        </symbol>\r\n\r\n        <symbol  id=\"basket\" viewBox=\"0 0 14 18\">\r\n            <g>\r\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM11 6V16H3V6H11ZM1 4H13V16C13 17.1 12.1 18 11 18H3C1.9 18 1 17.1 1 16V4Z\" fill=\"white\" fill-opacity=\"0.8\"/>\r\n            </g>\r\n        </symbol>\r\n\r\n    </svg>\r\n\r\n\r\n    <button class=\"btn main-btn\">Pop me</button>\r\n    <div class=\"page\">\r\n        <header class=\"header\">\r\n            <div class=\"header__name\">Мой отзыв</div>\r\n            <button class=\"close-btn\">\r\n                <svg>\r\n                    <use xlink:href=\"#X\"></use>\r\n                </svg>\r\n            </button>\r\n        </header>\r\n        <div class=\"container\">\r\n            <div class=\"profile\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\" class=\"profile__img\">\r\n                <div class=\"profile__text\">\r\n                    <div class=\"profile__text--title\">Фоточки в свадебном платьице</div>\r\n                    <div class=\"profile__text--name\">Алена Смирнова</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"rating\">\r\n                <div class=\"rating__items\">\r\n                    <div class=\"rating__item\">\r\n                        <div class=\"rating__item--title\">Скорость</div>\r\n                        <ul class=\"rating__item--stars\">\r\n                            <li class=\"rating__item--star star--clicked\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                            <li class=\"rating__item--star star--clicked\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                            <li class=\"rating__item--star star--clicked\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"rating__item\">\r\n                        <div class=\"rating__item--title\">Скорость отдачи видео</div>\r\n                        <ul class=\"rating__item--stars\">\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"rating__item\">\r\n                        <div class=\"rating__item--title\">Качество</div>\r\n                        <ul class=\"rating__item--stars\">\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"rating__item\">\r\n                        <div class=\"rating__item--title\">Пунктуальность</div>\r\n                        <ul class=\"rating__item--stars\">\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                            <li class=\"rating__item--star\">\r\n                                <svg>\r\n                                    <use xlink:href=\"#star\"></use>\r\n                                </svg>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <form action=\"GET\" class=\"comment\" id=\"comment\">\r\n                <textarea name=\"comment\" class=\"comment__area\" required placeholder=\"Комментарий\"></textarea>\r\n                <div class=\"counter\">\r\n                    <span class=\"total\"></span>/<span class=\"max\"></span>\r\n                </div>\r\n            </form>\r\n            <div class=\"gallery\">\r\n                <div class=\"gallery__items\">\r\n                    <div class=\"gallery__item\">\r\n                        <svg class=\"plus\">\r\n                            <use xlink:href=\"#X\"></use>\r\n                        </svg>\r\n                    </div>\r\n                    <div class=\"gallery__item\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" class=\"gallery__img\">\r\n                        <button class=\"basket__wrapper\">\r\n                            <svg>\r\n                                <use xlink:href=\"#basket\"></use>\r\n                            </svg>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"gallery__item\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" class=\"gallery__img\">\r\n                        <button class=\"basket__wrapper\">\r\n                            <svg>\r\n                                <use xlink:href=\"#basket\"></use>\r\n                            </svg>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"gallery__item\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" class=\"gallery__img\">\r\n                        <button class=\"basket__wrapper\">\r\n                            <svg>\r\n                                <use xlink:href=\"#basket\"></use>\r\n                            </svg>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"gallery__item\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" class=\"gallery__img\">\r\n                        <button class=\"basket__wrapper\">\r\n                            <svg>\r\n                                <use xlink:href=\"#basket\"></use>\r\n                            </svg>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"gallery__item\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\" class=\"gallery__img\">\r\n                        <div class=\"basket__wrapper\">\r\n                            <svg>\r\n                                <use xlink:href=\"#basket\"></use>\r\n                            </svg>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <footer class=\"footer\">\r\n            <button class=\"btn send-btn\" type=\"submit\" form=\"comment\">Отправить</button>\r\n        </footer>\r\n    </div>\r\n    <div class=\"alert\">\r\n        Спасибо,отзыв опубликован!\r\n        <button class=\"alert__close--btn\">\r\n            <svg>\r\n                <use xlink:href=\"#X\"></use>\r\n            </svg>\r\n        </button>\r\n    </div>\r\n</body>\r\n</html>";
// Exports
module.exports = code;

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./js/main.js","vendors-node_modules_html-loader_dist_runtime_getUrl_js-node_modules_jquery_dist_jquery_js"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=main.js.map