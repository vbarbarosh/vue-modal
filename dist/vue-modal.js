var vue_modal =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/vue_modal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/vue_modal.js":
/*!**************************!*\
  !*** ./src/vue_modal.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bluebird */ "bluebird");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);




function vue_modal(props) {
  var promise_shown = null;
  var promise_hidden = null;
  var promise_resolve;
  var promise_destroyed_resolve;

  var _promise = new bluebird__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
    return promise_resolve = resolve;
  });

  var _promise_destroyed = new bluebird__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
    return promise_destroyed_resolve = resolve;
  });

  return new vue__WEBPACK_IMPORTED_MODULE_1___default.a({
    el: document.body.appendChild(document.createElement('DIV')),
    mixins: [props],
    provide: function provide() {
      return {
        modal: this
      };
    },
    methods: {
      hide: function hide() {
        var _this = this;

        if (promise_hidden) {
          return this;
        }

        promise_shown = null;
        promise_hidden = new bluebird__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
          return jquery__WEBPACK_IMPORTED_MODULE_2___default()(_this.$el).stop().fadeOut('fast', resolve);
        });
        return this;
      },
      show: function show() {
        var _this2 = this;

        if (promise_shown) {
          return this;
        }

        promise_shown = new bluebird__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
          return jquery__WEBPACK_IMPORTED_MODULE_2___default()(_this2.$el).stop().fadeIn('fast', resolve);
        });
        promise_hidden = null;
        return this;
      },
      show_if_pending: function show_if_pending() {
        return promise_resolve ? this.show() : undefined;
      },
      end: function end(retval) {
        if (!promise_resolve) {
          // XXX Simulate old behavior when `end` fn was able to call several times
          return;
        } // XXX Deprecated in favor of `return`


        return this["return"](retval);
      },
      "return": function _return(retval) {
        var _this3 = this;

        // This method should be called no more than one time
        promise_resolve(retval);
        promise_resolve = null; // `this.$destroy` cannot be called without this
        // Uncaught TypeError: Cannot read property 'beforeDestroy' of undefined

        jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.$el).fadeOut('fast', function () {
          return _this3.$destroy();
        });
        return this;
      },
      promise: function promise() {
        return _promise;
      },
      promise_destroyed: function promise_destroyed() {
        return _promise_destroyed;
      }
    },
    mounted: function mounted() {
      var _this4 = this;

      // Case when component calls `this.modal.hide()` from its `created` method.
      if (promise_hidden) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.$el).hide();
        return;
      }

      try {
        document.activeElement.blur();
      } catch (error) {}

      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.$el).hide().fadeIn('fast', function () {
        return autofocus(_this4.$el);
      });
    },
    beforeDestroy: function beforeDestroy() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.$el).remove();

      if (promise_resolve) {
        promise_resolve();
        promise_resolve = null;
      }

      promise_destroyed_resolve(_promise);
      promise_destroyed_resolve = null;
    }
  });
}

function autofocus(parent) {
  return jquery__WEBPACK_IMPORTED_MODULE_2___default()(parent).addBack().find('[autofocus]a, [autofocus] a, [autofocus]button, [autofocus] button, [autofocus]input, [autofocus] input, [autofocus]textarea, [autofocus] textarea').filter(':visible').first().focus().select();
}

/* harmony default export */ __webpack_exports__["default"] = (vue_modal);

/***/ }),

/***/ "bluebird":
/*!**************************!*\
  !*** external "Promise" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Promise;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

/******/ })["default"];