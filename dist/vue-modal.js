var vue_modal;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "bluebird"
/*!**************************!*\
  !*** external "Promise" ***!
  \**************************/
(module) {

module.exports = Promise;

/***/ },

/***/ "vue"
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
(module) {

module.exports = Vue;

/***/ },

/***/ "jquery"
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
(module) {

module.exports = jQuery;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/vue_modal.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bluebird */ "bluebird");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



function vue_modal(props) {
  let promise_shown = null;
  let promise_hidden = null;
  let promise_resolve;
  let promise_destroyed_resolve;
  const promise = new (bluebird__WEBPACK_IMPORTED_MODULE_0___default())(resolve => promise_resolve = resolve);
  const promise_destroyed = new (bluebird__WEBPACK_IMPORTED_MODULE_0___default())(resolve => promise_destroyed_resolve = resolve);
  return new (vue__WEBPACK_IMPORTED_MODULE_1___default())({
    el: document.body.appendChild(document.createElement('DIV')),
    mixins: [props],
    provide: function () {
      return {
        modal: this
      };
    },
    methods: {
      hide: function () {
        if (promise_hidden) {
          return this;
        }
        promise_shown = null;
        promise_hidden = new (bluebird__WEBPACK_IMPORTED_MODULE_0___default())(resolve => jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.$el).stop().fadeOut('fast', resolve));
        return this;
      },
      show: function () {
        if (promise_shown) {
          return this;
        }
        promise_shown = new (bluebird__WEBPACK_IMPORTED_MODULE_0___default())(resolve => jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.$el).stop().fadeIn('fast', resolve));
        promise_hidden = null;
        return this;
      },
      show_if_pending: function () {
        return promise_resolve ? this.show() : undefined;
      },
      return: function (retval) {
        // This method should be called no more than one time
        promise_resolve(retval);
        promise_resolve = null;
        // `this.$destroy` cannot be called without this
        // Uncaught TypeError: Cannot read property 'beforeDestroy' of undefined
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.$el).fadeOut('fast', () => this.$destroy());
        return this;
      },
      promise: function () {
        return promise;
      },
      promise_destroyed: function () {
        return promise_destroyed;
      }
    },
    mounted: function () {
      // Case when component calls `this.modal.hide()` from its `created` method.
      if (promise_hidden) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.$el).hide();
        return;
      }
      try {
        document.activeElement.blur();
      } catch (error) {}
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.$el).hide().fadeIn('fast', () => autofocus(this.$el));
    },
    beforeDestroy: function () {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.$el).remove();
      if (promise_resolve) {
        promise_resolve();
        promise_resolve = null;
      }
      promise_destroyed_resolve(promise);
      promise_destroyed_resolve = null;
    }
  });
}
function autofocus(parent) {
  return jquery__WEBPACK_IMPORTED_MODULE_2___default()(parent).addBack().find('[autofocus]a, [autofocus] a, [autofocus]button, [autofocus] button, [autofocus]input, [autofocus] input, [autofocus]textarea, [autofocus] textarea').filter(':visible').first().focus().select();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue_modal);
})();

vue_modal = __webpack_exports__["default"];
/******/ })()
;