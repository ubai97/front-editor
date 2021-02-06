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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v10.14.0
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcons = function getIcons() {
    var popup = getPopup();
    return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
  };
  var getIcon = function getIcon() {
    var visibleIcon = getIcons().filter(function (icon) {
      return isVisible(icon);
    });
    return visibleIcon.length ? visibleIcon[0] : null;
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getDenyButton = function getDenyButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  };
  var getInputLabel = function getInputLabel() {
    return elementByClass(swalClasses['input-label']);
  };
  var getLoader = function getLoader() {
    return elementBySelector(".".concat(swalClasses.loader));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.display = 'none';
  };
  var setStyle = function setStyle(parent, selector, property, value) {
    var el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  var allButtonsAreHidden = function allButtonsAreHidden() {
    return !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  };
  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var loader = getLoader();
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    } // Loader


    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };

  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var setInputLabel = function setInputLabel(input, prependTo, params) {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      var label = document.createElement('label');
      var labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      addClass(label, params.customClass.inputLabel);
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    setInputLabel(rangeInput, range, params);
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    var getPadding = function getPadding(el) {
      return parseInt(window.getComputedStyle(el).paddingLeft) + parseInt(window.getComputedStyle(el).paddingRight);
    };

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + getPadding(getPopup()) + getPadding(getContent());

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, content);
      show(content, 'block'); // Content as plain text
    } else if (params.text) {
      content.textContent = params.text;
      show(content, 'block'); // No content
    } else {
      hide(content);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon && getIcon()) {
      applyStyles(getIcon(), params);
      return;
    }

    hideAllIcons();

    if (!params.icon) {
      return;
    }

    if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
      var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
      show(icon); // Custom or default content

      setContent(icon, params);
      applyStyles(icon, params); // Animate icon

      addClass(icon, params.showClass.icon);
    } else {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
    }
  };

  var hideAllIcons = function hideAllIcons() {
    var icons = getIcons();

    for (var i = 0; i < icons.length; i++) {
      hide(icons[i]);
    }
  };

  var applyStyles = function applyStyles(icon, params) {
    // Icon color
    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var setColor = function setColor(icon, params) {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (var _i = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i < _arr.length; _i++) {
      var sel = _arr[_i];
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var popup = getPopup(); // Width

    applyNumericalStyle(popup, 'width', params.width); // Padding

    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Classes


    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    } else if (typeof params.onRender === 'function') {
      params.onRender(getPopup()); // @deprecated
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Deny' button
   */

  var clickDeny = function clickDeny() {
    return getDenyButton() && getDenyButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      var _super = _createSuper(MixinSwal);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _super.apply(this, arguments);
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params, prevMixinParams) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, _extends({}, prevMixinParams, mixinParams));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  var showLoading = function showLoading(buttonToReplace) {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      /* istanbul ignore if */

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var bodyClickListenerAdded = false;
  var clickHandlers = {};
  function bindClickHandler() {
    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  var bodyClickListener = function bodyClickListener(event) {
    // 1. using .parentNode instead of event.path because of better support by old browsers https://stackoverflow.com/a/39245638
    // 2. using .parentNode instead of .parentElement because of IE11 + SVG https://stackoverflow.com/a/36270354
    for (var el = event.target; el && el !== document; el = el.parentNode) {
      for (var attr in clickHandlers) {
        var template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template: template
          });
          return;
        }
      }
    }
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    willOpen: undefined,
    didOpen: undefined,
    onRender: undefined,
    didRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    willClose: undefined,
    didClose: undefined,
    onDestroy: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass',
    onBeforeOpen: 'willOpen',
    onOpen: 'didOpen',
    onRender: 'didRender',
    onClose: 'willClose',
    onAfterClose: 'didClose',
    onDestroy: 'didDestroy'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getIcons: getIcons,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      var bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
    var target = event.target;
    var container = getContainer();

    if (isStylys(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    !(isScrollable(getContent()) && // #1944
    getContent().contains(target))) {
      return true;
    }

    return false;
  };

  var isStylys = function isStylys(event) {
    // #1786
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  var isZoom = function isZoom(event) {
    // #1891
    return event.touches && event.touches.length > 1;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast$$1, didClose) {
    if (isToast$$1) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerDidCloseAndDispose(instance, didClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    resolveValue = prepareResolveValue(resolveValue);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

    swalPromiseResolve(resolveValue);
  }

  var prepareResolveValue = function prepareResolveValue(resolveValue) {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return _extends({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose,
        willClose = innerParams.willClose,
        didClose = innerParams.didClose;
    runDidClose(popup, willClose, onClose);

    if (animationIsSupported) {
      animatePopup(instance, popup, container, didClose || onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), didClose || onAfterClose);
    }
  };

  var runDidClose = function runDidClose(popup, willClose, onClose) {
    if (willClose !== null && typeof willClose === 'function') {
      willClose(popup);
    } else if (onClose !== null && typeof onClose === 'function') {
      onClose(popup); // @deprecated
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, didClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
    setTimeout(function () {
      if (typeof didClose === 'function') {
        didClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    var params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  var getTemplateParams = function getTemplateParams(params) {
    var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }

    var templateContent = template.content || template; // IE11

    showWarningsForElements(templateContent);

    var result = _extends(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));

    return result;
  };

  var getSwalParams = function getSwalParams(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(function (param) {
      showWarningsForAttributes(param, ['name', 'value']);
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        value = false;
      }

      if (_typeof(defaultParams[paramName]) === 'object') {
        value = JSON.parse(value);
      }

      result[paramName] = value;
    });
    return result;
  };

  var getSwalButtons = function getSwalButtons(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(function (button) {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      var type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  var getSwalImage = function getSwalImage(templateContent) {
    var result = {};
    var image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };

  var getSwalIcon = function getSwalIcon(templateContent) {
    var result = {};
    var icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };

  var getSwalInput = function getSwalInput(templateContent) {
    var result = {};
    var input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }

    var inputOptions = templateContent.querySelectorAll('swal-input-option');

    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(function (option) {
        showWarningsForAttributes(option, ['value']);
        var optionValue = option.getAttribute('value');
        var optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };

  var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
    var result = {};

    for (var i in paramNames) {
      var paramName = paramNames[i];
      var tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML;
      }
    }

    return result;
  };

  var showWarningsForElements = function showWarningsForElements(template) {
    var allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(template.querySelectorAll('*')).forEach(function (el) {
      if (el.parentNode !== template) {
        // can't use template.children because of IE11
        return;
      }

      var tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
    toArray(el.attributes).forEach(function (attribute) {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    } else if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup); // @deprecated
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(function () {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    runDidOpen(popup, params);
    removeClass(container, swalClasses['no-transition']);
  };

  var runDidOpen = function runDidOpen(popup, params) {
    if (typeof params.didOpen === 'function') {
      setTimeout(function () {
        return params.didOpen(popup);
      });
    } else if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      }); // @deprecated
    }
  };

  var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup);
    setTimeout(function () {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading();
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);

      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  var isSelected = function isSelected(optionValue, inputValue) {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'confirm');
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleDenyButtonClick = function handleDenyButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'deny');
    } else {
      deny(instance, innerParams, false);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, innerParams, type
  /* type is either 'confirm' or 'deny' */
  ) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, innerParams, inputValue);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, innerParams, inputValue);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var handleInputValidator = function handleInputValidator(instance, innerParams, inputValue) {
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else {
        confirm(instance, innerParams, inputValue);
      }
    });
  };

  var deny = function deny(instance, innerParams, value) {
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      var preDenyPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
      });
      preDenyPromise.then(function (preDenyValue) {
        if (preDenyValue === false) {
          instance.hideLoading();
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      });
    } else {
      instance.closePopup({
        isDenied: true,
        value: value
      });
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      isConfirmed: true,
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown', 'Right', 'Down' // IE11
  ];
  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp', 'Left', 'Up' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).indexOf(e.key) !== -1) {
      handleArrows(e.key); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows(key) {
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();

    if (!([confirmButton, denyButton, cancelButton].indexOf(document.activeElement) !== -1)) {
      return;
    }

    var sibling = arrowKeysNextButton.indexOf(key) !== -1 ? 'nextElementSibling' : 'previousElementSibling';
    var buttonToFocus = document.activeElement[sibling];

    if (buttonToFocus) {
      buttonToFocus.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    showWarningsForParams(_extends({}, mixinParams, userParams));

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams, mixinParams) {
    var templateParams = getTemplateParams(userParams);

    var showClass = _extends({}, defaultParams.showClass, mixinParams.showClass, templateParams.showClass, userParams.showClass);

    var hideClass = _extends({}, defaultParams.hideClass, mixinParams.hideClass, templateParams.hideClass, userParams.hideClass);

    var params = _extends({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131


    params.showClass = showClass;
    params.hideClass = hideClass; // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          isDismissed: true,
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.denyButton.onclick = function () {
        return handleDenyButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);

      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }

      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };

  var focusButton = function focusButton(domCache, innerParams) {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    runDidDestroy(innerParams);
    disposeSwal(this);
  }

  var runDidDestroy = function runDidDestroy(innerParams) {
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    } else if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy(); // @deprecated
    }
  };

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance;

  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise


      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      var promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }
    }]);

    return SweetAlert;
  }(); // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '10.14.0';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.125em .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0 1.6em}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#2778c4;color:#fff;font-size:1.0625em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#d14529;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#757575;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto}.swal2-validation-message{display:none;align-items:center;justify-content:center;margin:0 -2.7em;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1;zoom:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;zoom:1;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;zoom:1;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;zoom:1;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;zoom:1;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;zoom:1;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");

/***/ }),

/***/ "./src/js/admin-post-form.js":
/*!***********************************!*\
  !*** ./src/js/admin-post-form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendors_form_builder_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendors/form-builder.min */ "./src/js/vendors/form-builder.min.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function ($, Swal) {
  var localizeData = window.fe_post_form_data,
      admin_form_builder_nonce = $('#admin_form_builder_nonce').val(),
      formBuilderContainer = false,
      current_forBuilder_controls,
      updated_forBuilder_controls,
      formBuilderOptions,
      options = {
    notify: {
      error: function error(message) {
        return Swal.fire(message, '', 'error');
      },
      success: function success(message) {
        return Swal.fire(message, '', 'success');
      },
      warning: function warning(message) {
        return Swal.fire(message);
      }
    },
    onAddField: function onAddField(fieldId) {
      var currentFieldId = fieldId,
          field = $("#".concat(fieldId)),
          field_type = field.attr('type'),
          field_count_in_form = $(".form-field[type=\"".concat(field_type, "\"]")).length;
      /**
       * Check for max of type exactable for form
       */

      if (field_type in formBuilderOptions.temp_back && 'max_in_form' in formBuilderOptions.temp_back[field_type] && formBuilderOptions.temp_back[field_type].max_in_form < field_count_in_form) {
        formBuilderContainer.actions.removeField(currentFieldId);
        Swal.fire("Oops...", formBuilderOptions.messages.max_fields_warning);
      } //TODO Add logic for pro version fields

    }
  };
  $(window).on('load', function () {
    updateFormBuilder();
  });

  function updateFormBuilder() {
    var post_type = $('#fe_settings_post_type').val();
    wp.ajax.send('fe_get_formBuilder_data', {
      data: {
        post_id: localizeData.post_id,
        post_type: post_type,
        admin_form_builder_nonce: admin_form_builder_nonce
      },
      success: function success(response) {
        console.log(response);
        var formBuilderId = "form-builder";
        $("#".concat(formBuilderId)).remove();
        $('.formBuilder-wrapper').empty().append("<div id=\"".concat(formBuilderId, "\"></div>"));
        formBuilderOptions = response.formBuilder_options;
        var templates_obj = formBuilderOptions.temp_back;
        /**
         * Creating templates using data form backend
         */

        Object.keys(templates_obj).map(function (key, index) {
          formBuilderOptions.templates[key] = function (fieldData) {
            return {
              field: templates_obj[key].field,
              onRender: function onRender() {
                $(document.getElementById(fieldData.name));
              }
            };
          };
        });
        /**
        * Init formBuilder
        */

        formBuilderContainer = $("#".concat(formBuilderId)).formBuilder(_objectSpread(_objectSpread({}, options), formBuilderOptions));
        formBuilderContainer.promise.then(function (formBuilder) {
          // Remove controls on ajax request if there do not needed
          builder_control_controls(formBuilderOptions); // Add groups

          add_groups(); // Disable pro fields

          formBuilderOptions.disable_attr.map(function (val) {
            $(document).find(val).prop('disabled', true);
          });
        });
      },
      error: function error(_error) {
        console.log(_error);
      }
    });
  }
  /**
   * Update for builder on post type update
   */


  $('#fe_settings_post_type').on('change', function (ev) {
    ev.preventDefault();
    updateFormBuilder();
  });
  /**
   * Remove controls on ajax request if there do not needed
   * @param {*} formBuilderOptions 
   */

  function builder_control_controls(formBuilderOptions) {
    current_forBuilder_controls = [];
    updated_forBuilder_controls = []; // Getting current controls

    $('.frmb-control li').each(function (index, elem) {
      var data_type = $(elem).attr('data-type');
      current_forBuilder_controls.push(data_type);
    });
    /**
     * Creat array with updated controls
     */

    Object.keys(formBuilderOptions.temp_back).map(function (key, index) {
      updated_forBuilder_controls.push(key);
    });
    /**
     *  default fields and custom fields
     */

    updated_forBuilder_controls = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(formBuilderOptions.defaultControls), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(updated_forBuilder_controls));
    /**
     * Find difference between controls
     */

    var difference = current_forBuilder_controls.filter(function (x) {
      return !updated_forBuilder_controls.includes(x);
    });
    difference.map(function (val) {
      $("[data-type=\"".concat(val, "\"]")).remove();
    });
  }
  /**
   * Adding group fields
   */


  function add_groups() {
    var controls_group = formBuilderOptions.controls_group;
    Object.keys(controls_group).map(function (key, index) {
      $("<p class=\"group-name ".concat(key, "\">").concat(controls_group[key].label, "</p>")).insertBefore("[data-type=\"".concat(controls_group[key].types[0], "\"]"));
    });
  }
});

/***/ }),

/***/ "./src/js/blocks/editor-block-editor.js":
/*!**********************************************!*\
  !*** ./src/js/blocks/editor-block-editor.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);



(function (blocks, i18n, element, blockEditor, components, compose, editor_block_data, wp) {
  if (element === undefined) {
    return;
  }

  var el = element.createElement,
      __ = i18n.__,
      AlignmentToolbar = blockEditor.AlignmentToolbar,
      ToggleControl = components.ToggleControl,
      Dropdown = components.Dropdown,
      Button = components.Button,
      BlockControls = blockEditor.BlockControls,
      Disabled = blockEditor.Disabled,
      InputControl = components.__experimentalInputControl,
      SelectControl = components.SelectControl,
      withState = compose.withState,
      translations = editor_block_data.translations,
      editor_pro_settings = editor_block_data.editor_pro_settings;
  /**
   * Message in post
   */

  if (editor_block_data.fe_show_warning_message) {
    wp.data.dispatch('core/notices').createNotice('error', // Can be one of: success, info, warning, error.
    translations.fe_edit_message, // Text string to display.
    {
      isDismissible: false,
      // Whether the user can dismiss the notice.
      // Any actions the user can perform.
      actions: [{
        url: editor_block_data.fe_edit_link,
        label: translations.fe_edit_link_text
      }]
    });
  }

  blocks.registerBlockType('bfe/bfe-block', {
    title: __('Front Editor', 'front-editor'),
    icon: 'edit',
    category: 'common',
    multiple: false,
    html: false,
    attributes: {
      editor_post_status: {
        type: 'string',
        default: 'pending'
      },
      post_image: {
        type: 'string',
        default: 'display'
      },
      post_category: {
        type: 'string',
        default: 'display'
      },
      category_show_empty: {
        type: 'boolean',
        default: true
      },
      category_multiple: {
        type: 'boolean',
        default: false
      },
      post_tags: {
        type: 'string',
        default: 'display'
      },
      tags_add_new: {
        type: 'boolean',
        default: false
      },
      wp_media_uploader: {
        type: 'boolean',
        default: false
      },
      add_new_button: {
        type: 'string',
        default: 'display'
      },
      editor_image_plugin: {
        type: 'boolean',
        default: true
      },
      editor_header_plugin: {
        type: 'boolean',
        default: true
      },
      editor_embed_plugin: {
        type: 'boolean',
        default: true
      },
      editor_list_plugin: {
        type: 'boolean',
        default: true
      },
      editor_checklist_plugin: {
        type: 'boolean',
        default: true
      },
      editor_quote_plugin: {
        type: 'boolean',
        default: true
      },
      editor_marker_plugin: {
        type: 'boolean',
        default: true
      },
      editor_code_plugin: {
        type: 'boolean',
        default: true
      },
      editor_delimiter_plugin: {
        type: 'boolean',
        default: true
      },
      editor_inlineCode_plugin: {
        type: 'boolean',
        default: true
      },
      editor_linkTool_plugin: {
        type: 'boolean',
        default: true
      },
      editor_table_plugin: {
        type: 'boolean',
        default: false
      },
      editor_warning_plugin: {
        type: 'boolean',
        default: false
      }
    },
    edit: function edit(props) {
      /**
       * Category show empty
       */
      var CategoryShowEmpty = withState({
        checked: props.attributes.category_show_empty
      })(function (_ref) {
        var checked = _ref.checked,
            setState = _ref.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: translations.show_empty_category,
          id: "category_show_empty",
          checked: checked,
          onChange: function onChange() {
            return setState(function (state) {
              props.setAttributes({
                category_show_empty: !state.checked
              });
              return {
                checked: !state.checked
              };
            });
          }
        });
      });
      /**
      * Category multiple settings
      */

      var CategoryMultiple = withState({
        checked: props.attributes.category_multiple
      })(function (_ref2) {
        var checked = _ref2.checked,
            setState = _ref2.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: "editor_table_plugin  pro_version"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: translations.category_multiple,
          id: "category_multiple",
          help: translations.only_in_pro,
          checked: checked,
          className: editor_pro_settings.category_multiple ? '' : "disabled",
          onChange: function onChange() {
            return setState(function (state) {
              props.setAttributes({
                category_multiple: !state.checked
              });
              return {
                checked: !state.checked
              };
            });
          }
        }));
      });
      /**
       * Tags can add new one
       */

      var TagsAddNew = withState({
        checked: props.attributes.tags_add_new
      })(function (_ref3) {
        var checked = _ref3.checked,
            setState = _ref3.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: translations.tags_add_new,
          id: "tags_add_new",
          checked: checked,
          onChange: function onChange() {
            return setState(function (state) {
              props.setAttributes({
                tags_add_new: !state.checked
              });
              return {
                checked: !state.checked
              };
            });
          }
        });
      });
      /**
       * WP Media Uploader can add new one
       */

      var WP_Media_Uploader = withState({
        checked: props.attributes.wp_media_uploader
      })(function (_ref4) {
        var checked = _ref4.checked,
            setState = _ref4.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: "editor_table_plugin  pro_version"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: translations.wp_media_uploader,
          id: "wp_media_uploader",
          className: editor_pro_settings.wp_media_uploader ? '' : "disabled",
          checked: checked,
          help: translations.only_in_pro,
          onChange: function onChange() {
            return setState(function (state) {
              props.setAttributes({
                wp_media_uploader: !state.checked
              });
              return {
                checked: !state.checked
              };
            });
          }
        }));
      });
      /**
       * EditorJS image plugin 
       */

      var EditorImagePlugin = withState({
        checked: props.attributes.editor_image_plugin
      })(function (_ref5) {
        var checked = _ref5.checked,
            setState = _ref5.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: "Image block",
          id: "editor_image_plugin",
          checked: checked,
          onChange: function onChange() {
            return setState(function (state) {
              props.setAttributes({
                editor_image_plugin: !state.checked
              });
              return {
                checked: !state.checked
              };
            });
          }
        });
      });
      /**
       * EditorJS header plugin 
       */

      var EditorHeaderPlugin = withState({
        checked: props.attributes.editor_header_plugin
      })(function (_ref6) {
        var checked = _ref6.checked,
            setState = _ref6.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: "Header block",
          id: "editor_header_plugin",
          checked: checked,
          onChange: function onChange() {
            return setState(function (state) {
              props.setAttributes({
                editor_header_plugin: !state.checked
              });
              return {
                checked: !state.checked
              };
            });
          }
        });
      });
      /**
       * EditorJS Embed plugin 
       */

      var EditorEmbedPlugin = withState({
        checked: props.attributes.editor_embed_plugin
      })(function (_ref7) {
        var checked = _ref7.checked,
            setState = _ref7.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: "Embed block",
          id: "editor_embed_plugin",
          checked: checked,
          onChange: function onChange() {
            return setState(function (state) {
              props.setAttributes({
                editor_embed_plugin: !state.checked
              });
              return {
                checked: !state.checked
              };
            });
          }
        });
      });
      /**
       * EditorJS list plugin 
       */

      var EditorListPlugin = withState({
        checked: props.attributes.editor_list_plugin
      })(function (_ref8) {
        var checked = _ref8.checked,
            setState = _ref8.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: "List block",
          id: "editor_list_plugin",
          checked: checked,
          onChange: function onChange() {
            return setState(function (state) {
              props.setAttributes({
                editor_list_plugin: !state.checked
              });
              return {
                checked: !state.checked
              };
            });
          }
        });
      });
      /**
       * EditorJS checklist plugin 
       */

      var EditorChecklistPlugin = withState({
        checked: props.attributes.editor_checklist_plugin
      })(function (_ref9) {
        var checked = _ref9.checked,
            setState = _ref9.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: "Checklist block",
          id: "editor_checklist_plugin",
          checked: checked,
          onChange: function onChange() {
            return setState(function (state) {
              props.setAttributes({
                editor_checklist_plugin: !state.checked
              });
              return {
                checked: !state.checked
              };
            });
          }
        });
      });
      /**
       * EditorJS Quote plugin 
       */

      var EditorQuotePlugin = withState({
        checked: props.attributes.editor_quote_plugin
      })(function (_ref10) {
        var checked = _ref10.checked,
            setState = _ref10.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: "Quote block",
          id: "editor_quote_plugin",
          checked: checked,
          onChange: function onChange() {
            return setState(function (state) {
              props.setAttributes({
                editor_quote_plugin: !state.checked
              });
              return {
                checked: !state.checked
              };
            });
          }
        });
      });
      /**
       * EditorJS marker plugin 
       */

      var EditorMarkerPlugin = withState({
        checked: props.attributes.editor_marker_plugin
      })(function (_ref11) {
        var checked = _ref11.checked,
            setState = _ref11.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: "Marker block",
          id: "editor_marker_plugin",
          checked: checked,
          onChange: function onChange() {
            return setState(function (state) {
              props.setAttributes({
                editor_marker_plugin: !state.checked
              });
              return {
                checked: !state.checked
              };
            });
          }
        });
      });
      /**
      * EditorJS code plugin 
      */

      var EditorCodePlugin = withState({
        checked: props.attributes.editor_code_plugin
      })(function (_ref12) {
        var checked = _ref12.checked,
            setState = _ref12.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: "Code block",
          id: "editor_code_plugin",
          checked: checked,
          onChange: function onChange() {
            return setState(function (state) {
              props.setAttributes({
                editor_code_plugin: !state.checked
              });
              return {
                checked: !state.checked
              };
            });
          }
        });
      });
      /**
       * EditorJS delimiter plugin 
       */

      var EditorDelimiterPlugin = withState({
        checked: props.attributes.editor_delimiter_plugin
      })(function (_ref13) {
        var checked = _ref13.checked,
            setState = _ref13.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: "Delimiter block",
          id: "editor_delimiter_plugin",
          checked: checked,
          onChange: function onChange() {
            return setState(function (state) {
              props.setAttributes({
                editor_delimiter_plugin: !state.checked
              });
              return {
                checked: !state.checked
              };
            });
          }
        });
      });
      /**
       * EditorJS table plugin 
       */

      var EditorTablePlugin = withState({
        checked: props.attributes.editor_table_plugin
      })(function (_ref14) {
        var checked = _ref14.checked,
            setState = _ref14.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: "editor_table_plugin  pro_version"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: "Table block (PRO)",
          help: translations.only_in_pro,
          id: "editor_table_plugin",
          checked: checked,
          className: editor_pro_settings.table_block ? '' : "disabled",
          onChange: function onChange() {
            return setState(function (state) {
              props.setAttributes({
                editor_table_plugin: !state.checked
              });
              return {
                checked: !state.checked
              };
            });
          }
        }));
      });
      /**
       * EditorJS Warning plugin (PRO)
       */

      var EditorWarningPlugin = withState({
        checked: props.attributes.editor_warning_plugin
      })(function (_ref15) {
        var checked = _ref15.checked,
            setState = _ref15.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: "editor_warning_plugin  pro_version"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: "Warning block (PRO)",
          help: translations.only_in_pro,
          id: "editor_warning_plugin",
          checked: checked,
          className: editor_pro_settings.warning_block ? '' : "disabled",
          onChange: function onChange() {
            return setState(function (state) {
              props.setAttributes({
                editor_warning_plugin: !state.checked
              });
              return {
                checked: !state.checked
              };
            });
          }
        }));
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "editor-block-settings"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
        className: "title"
      }, translations.title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "setting-wrap header-settings"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
        label: translations.post_status,
        value: props.attributes.editor_post_status,
        title: translations.post_status_desc,
        onChange: function onChange(value) {
          props.setAttributes({
            editor_post_status: value
          });
        },
        options: [{
          value: 'publish',
          label: translations.publish
        }, {
          value: 'pending',
          label: translations.pending
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
        label: translations.post_image,
        value: props.attributes.post_image,
        onChange: function onChange(value) {
          props.setAttributes({
            post_image: value
          });
        },
        options: [{
          value: 'display',
          label: translations.display
        }, {
          value: 'require',
          label: translations.require
        }, {
          value: 'disable',
          label: translations.disable
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
        label: translations.post_category,
        value: props.attributes.post_category,
        onChange: function onChange(value) {
          props.setAttributes({
            post_category: value
          });
        },
        options: [{
          value: 'display',
          label: translations.display
        }, {
          value: 'require',
          label: translations.require
        }, {
          value: 'disable',
          label: translations.disable
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
        label: translations.post_tags,
        value: props.attributes.post_tags,
        onChange: function onChange(value) {
          props.setAttributes({
            post_tags: value
          });
        },
        options: [{
          value: 'display',
          label: translations.display
        }, {
          value: 'require',
          label: translations.require
        }, {
          value: 'disable',
          label: translations.disable
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
        label: translations.add_new_button,
        value: props.attributes.add_new_button,
        onChange: function onChange(value) {
          props.setAttributes({
            add_new_button: value
          });
        },
        options: [{
          value: 'display',
          label: translations.display
        }, {
          value: 'always_display',
          label: translations.always_display
        }, {
          value: 'disable',
          label: translations.disable
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WP_Media_Uploader, null)), props.attributes.post_category !== 'disable' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", null, translations.category_settings_title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "setting-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CategoryShowEmpty, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CategoryMultiple, null))), props.attributes.post_tags !== 'disable' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", null, translations.tags_settings_title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "setting-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TagsAddNew, null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
        className: "title"
      }, translations.editor_settings_title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "setting-wrap editor-settings"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorImagePlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorHeaderPlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorEmbedPlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorListPlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorChecklistPlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorQuotePlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorMarkerPlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorCodePlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorDelimiterPlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorWarningPlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorTablePlugin, null)));
    },
    save: function save(props) {
      return null;
    }
  });
})(window.wp.blocks, window.wp.i18n, window.wp.element, wp.blockEditor, window.wp.components, window.wp.compose, window.editor_block_data, window.wp);

/***/ }),

/***/ "./src/js/editor.js":
/*!**************************!*\
  !*** ./src/js/editor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_editor_block_editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/editor-block-editor.js */ "./src/js/blocks/editor-block-editor.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_post_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-post-form.js */ "./src/js/admin-post-form.js");
/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */



Object(_admin_post_form_js__WEBPACK_IMPORTED_MODULE_2__["default"])(jQuery, sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./src/js/vendors/form-builder.min.js":
/*!********************************************!*\
  !*** ./src/js/vendors/form-builder.min.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/*!
 * jQuery formBuilder: https://formbuilder.online/
 * Version: 3.6.1
 * Author: Kevin Chappell <kevin.b.chappell@gmail.com>
 */
!function (e) {
  "use strict";

  !function (e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }

    r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e) && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) {
        r.d(n, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
      return n;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 33);
  }([function (t, r, n) {
    function o(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? o(Object(r), !0).forEach(function (t) {
          a(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function a(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function l(e, t) {
      if (null == e) return {};
      var r,
          n,
          o = {},
          i = Object.keys(e);

      for (n = 0; n < i.length; n++) {
        r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
      }

      return o;
    }

    n.d(r, "A", function () {
      return s;
    }), n.d(r, "C", function () {
      return c;
    }), n.d(r, "b", function () {
      return f;
    }), n.d(r, "h", function () {
      return p;
    }), n.d(r, "n", function () {
      return b;
    }), n.d(r, "c", function () {
      return h;
    }), n.d(r, "s", function () {
      return g;
    }), n.d(r, "k", function () {
      return v;
    }), n.d(r, "q", function () {
      return y;
    }), n.d(r, "t", function () {
      return O;
    }), n.d(r, "u", function () {
      return j;
    }), n.d(r, "g", function () {
      return k;
    }), n.d(r, "i", function () {
      return C;
    }), n.d(r, "B", function () {
      return E;
    }), n.d(r, "v", function () {
      return N;
    }), n.d(r, "l", function () {
      return S;
    }), n.d(r, "p", function () {
      return L;
    }), n.d(r, "m", function () {
      return T;
    }), n.d(r, "d", function () {
      return D;
    }), n.d(r, "a", function () {
      return B;
    }), n.d(r, "e", function () {
      return R;
    }), n.d(r, "r", function () {
      return F;
    }), n.d(r, "x", function () {
      return I;
    }), n.d(r, "j", function () {
      return M;
    }), n.d(r, "y", function () {
      return P;
    }), n.d(r, "o", function () {
      return z;
    }), n.d(r, "w", function () {
      return U;
    }), n.d(r, "z", function () {
      return H;
    }), window.fbLoaded = {
      js: [],
      css: []
    }, window.fbEditors = {
      quill: {},
      tinymce: {}
    };

    var s = function s(e, t) {
      void 0 === t && (t = !1);
      var r = [null, void 0, ""];

      for (var n in t && r.push(!1), e) {
        r.includes(e[n]) ? delete e[n] : Array.isArray(e[n]) && (e[n].length || delete e[n]);
      }

      return e;
    },
        u = function u(e) {
      return !["values", "enableOther", "other", "label", "subtype"].includes(e);
    },
        c = function c(e) {
      return Object.entries(e).map(function (e) {
        var t = e[0],
            r = e[1];
        return b(t) + '="' + r + '"';
      }).join(" ");
    },
        f = function f(e) {
      return Object.entries(e).map(function (e) {
        var t = e[0],
            r = e[1];
        return u(t) && Object.values(d(t, r)).join("");
      }).filter(Boolean).join(" ");
    },
        d = function d(e, t) {
      var r;
      return e = m(e), t && (Array.isArray(t) ? r = q(t.join(" ")) : ("boolean" == typeof t && (t = t.toString()), r = q(t.trim()))), {
        name: e,
        value: t = t ? '="' + r + '"' : ""
      };
    },
        p = function e(t) {
      return t.reduce(function (t, r) {
        return t.concat(Array.isArray(r) ? e(r) : r);
      }, []);
    },
        m = function m(e) {
      return {
        className: "class"
      }[e] || b(e);
    },
        b = function b(e) {
      return (e = (e = e.replace(/[^\w\s\-]/gi, "")).replace(/([A-Z])/g, function (e) {
        return "-" + e.toLowerCase();
      })).replace(/\s/g, "-").replace(/^-+/g, "");
    },
        h = function h(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    },
        g = function g(e) {
      var t = new Date().getTime();
      return (e.type || b(e.label)) + "-" + t;
    },
        v = function v(e) {
      return void 0 === e ? e : [["array", function (e) {
        return Array.isArray(e);
      }], ["node", function (e) {
        return e instanceof window.Node || e instanceof window.HTMLElement;
      }], ["component", function () {
        return e && e.dom;
      }], [_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e), function () {
        return !0;
      }]].find(function (t) {
        return t[1](e);
      })[0];
    },
        y = function e(t, r, n) {
      void 0 === r && (r = ""), void 0 === n && (n = {});
      var o = v(r),
          i = n,
          a = i.events,
          s = l(i, ["events"]),
          u = document.createElement(t),
          c = {
        string: function string(e) {
          u.innerHTML += e;
        },
        object: function object(t) {
          var r = t.tag,
              n = t.content,
              o = l(t, ["tag", "content"]);
          return u.appendChild(e(r, n, o));
        },
        node: function node(e) {
          return u.appendChild(e);
        },
        array: function array(e) {
          for (var t = 0; t < e.length; t++) {
            o = v(e[t]), c[o](e[t]);
          }
        },
        function: function _function(e) {
          e = e(), o = v(e), c[o](e);
        },
        undefined: function undefined() {}
      };

      for (var f in s) {
        if (s.hasOwnProperty(f)) {
          var d = m(f),
              p = Array.isArray(s[f]) ? E(s[f].join(" ").split(" ")).join(" ") : s[f];
          u.setAttribute(d, p);
        }
      }

      return r && c[o](r), function (e, t) {
        if (t) {
          var r = function r(_r) {
            t.hasOwnProperty(_r) && e.addEventListener(_r, function (e) {
              return t[_r](e);
            });
          };

          for (var n in t) {
            r(n);
          }
        }
      }(u, a), u;
    },
        w = function w(e) {
      var t = e.attributes,
          r = {};
      return C(t, function (e) {
        var n = t[e].value || "";
        n.match(/false|true/g) ? n = "true" === n : n.match(/undefined/g) && (n = void 0), n && (r[h(t[e].name)] = n);
      }), r;
    },
        x = function x(e) {
      for (var t = [], r = 0; r < e.length; r++) {
        var n = i(i({}, w(e[r])), {}, {
          label: e[r].textContent
        });
        t.push(n);
      }

      return t;
    },
        A = function A(e) {
      var t = [];
      if (e.length) for (var r = e[0].getElementsByTagName("value"), n = 0; n < r.length; n++) {
        t.push(r[n].textContent);
      }
      return t;
    },
        O = function O(e) {
      var t = new window.DOMParser().parseFromString(e, "text/xml"),
          r = [];
      if (t) for (var n = t.getElementsByTagName("field"), o = 0; o < n.length; o++) {
        var i = w(n[o]),
            a = n[o].getElementsByTagName("option"),
            l = n[o].getElementsByTagName("userData");
        a && a.length && (i.values = x(a)), l && l.length && (i.userData = A(l)), r.push(i);
      }
      return r;
    },
        j = function j(e) {
      var t = document.createElement("textarea");
      return t.innerHTML = e, t.textContent;
    },
        k = function k(e) {
      var t = document.createElement("textarea");
      return t.textContent = e, t.innerHTML;
    },
        q = function q(e) {
      var t = {
        '"': "&quot;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
      };
      return "string" == typeof e ? e.replace(/["&<>]/g, function (e) {
        return t[e] || e;
      }) : e;
    },
        C = function C(e, t, r) {
      for (var n = 0; n < e.length; n++) {
        t.call(r, n, e[n]);
      }
    },
        E = function E(e) {
      return e.filter(function (e, t, r) {
        return r.indexOf(e) === t;
      });
    },
        N = function N(e, t) {
      var r = t.indexOf(e);
      r > -1 && t.splice(r, 1);
    },
        S = function S(e, t) {
      var r,
          n = jQuery,
          o = [];
      return Array.isArray(e) || (e = [e]), L(e) || (o = jQuery.map(e, function (e) {
        var r = {
          dataType: "script",
          cache: !0,
          url: (t || "") + e
        };
        return jQuery.ajax(r).done(function () {
          return window.fbLoaded.js.push(e);
        });
      })), o.push(jQuery.Deferred(function (e) {
        return n(e.resolve);
      })), (r = jQuery).when.apply(r, o);
    },
        L = function L(e, t) {
      void 0 === t && (t = "js");
      var r = !1,
          n = window.fbLoaded[t];
      return r = Array.isArray(e) ? e.every(function (e) {
        return n.includes(e);
      }) : n.includes(e), r;
    },
        T = function T(t, r) {
      Array.isArray(t) || (t = [t]), t.forEach(function (t) {
        var n = "href",
            o = t,
            i = "";

        if ("object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(t) && (n = t.type || (t.style ? "inline" : "href"), i = t.id, t = "inline" == n ? t.style : t.href, o = i || t.href || t.style), !L(o, "css")) {
          if ("href" == n) {
            var a = document.createElement("link");
            a.type = "text/css", a.rel = "stylesheet", a.href = (r || "") + t, document.head.appendChild(a);
          } else e('<style type="text/css">' + t + "</style>").attr("id", i).appendTo(e(document.head));

          window.fbLoaded.css.push(o);
        }
      });
    },
        D = function D(e) {
      return e.replace(/\b\w/g, function (e) {
        return e.toUpperCase();
      });
    },
        B = function B(e, t, r) {
      return t.split(" ").forEach(function (t) {
        return e.addEventListener(t, r, !1);
      });
    },
        R = function R(e, t) {
      for (var r = t.replace(".", ""); (e = e.parentElement) && !e.classList.contains(r);) {
        ;
      }

      return e;
    },
        F = function F() {
      var e,
          t = "";
      return e = navigator.userAgent || navigator.vendor || window.opera, /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) && (t = "formbuilder-mobile"), t;
    },
        I = function I(e) {
      return e.replace(/\s/g, "-").replace(/[^a-zA-Z0-9[\]_-]/g, "");
    },
        M = function M(e) {
      return e.replace(/[^0-9]/g, "");
    },
        P = function P(e, t) {
      return t.filter(function (e) {
        return !~this.indexOf(e);
      }, e);
    },
        z = function z(e) {
      var t = (e = Array.isArray(e) ? e : [e]).map(function (e) {
        var t = e.src,
            r = e.id;
        return new Promise(function (e) {
          if (window.fbLoaded.css.includes(t)) return e(t);
          var n = y("link", null, {
            href: t,
            rel: "stylesheet",
            id: r
          });
          document.head.insertBefore(n, document.head.firstChild);
        });
      });
      return Promise.all(t);
    },
        U = function U(e) {
      var t = document.getElementById(e);
      return t.parentElement.removeChild(t);
    };

    function H(e) {
      var t = ["a", "an", "and", "as", "at", "but", "by", "for", "for", "from", "in", "into", "near", "nor", "of", "on", "onto", "or", "the", "to", "with"].map(function (e) {
        return "\\s" + e + "\\s";
      }),
          r = new RegExp("(?!" + t.join("|") + ")\\w\\S*", "g");
      return ("" + e).replace(r, function (e) {
        return e.charAt(0).toUpperCase() + e.substr(1).replace(/[A-Z]/g, function (e) {
          return " " + e;
        });
      });
    }

    var Q = {
      addEventListeners: B,
      attrString: f,
      camelCase: h,
      capitalize: D,
      closest: R,
      getContentType: v,
      escapeAttr: q,
      escapeAttrs: function escapeAttrs(e) {
        for (var t in e) {
          e.hasOwnProperty(t) && (e[t] = q(e[t]));
        }

        return e;
      },
      escapeHtml: k,
      forceNumber: M,
      forEach: C,
      getScripts: S,
      getStyles: T,
      hyphenCase: b,
      isCached: L,
      markup: y,
      merge: function e(t, r) {
        var n = Object.assign({}, t, r);

        for (var o in r) {
          n.hasOwnProperty(o) && (Array.isArray(r[o]) ? n[o] = Array.isArray(t[o]) ? E(t[o].concat(r[o])) : r[o] : "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(r[o]) ? n[o] = e(t[o], r[o]) : n[o] = r[o]);
        }

        return n;
      },
      mobileClass: F,
      nameAttr: g,
      parseAttrs: w,
      parsedHtml: j,
      parseOptions: x,
      parseUserData: A,
      parseXML: O,
      removeFromArray: N,
      safeAttr: d,
      safeAttrName: m,
      safename: I,
      subtract: P,
      trimObj: s,
      unique: E,
      validAttr: u,
      titleCase: H,
      splitObject: function splitObject(e, t) {
        var r = function r(e) {
          return function (t, r) {
            return t[r] = e[r], t;
          };
        };

        return [Object.keys(e).filter(function (e) {
          return t.includes(e);
        }).reduce(r(e), {}), Object.keys(e).filter(function (e) {
          return !t.includes(e);
        }).reduce(r(e), {})];
      }
    };
    r.f = Q;
  }, function (e, t, r) {
    r.d(t, "a", function () {
      return u;
    });
    var n = r(0),
        o = r(2),
        i = r.n(o);

    function a(e, t) {
      var r;

      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (r = function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return l(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(e);
          if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t);
        }(e)) || t && e && "number" == typeof e.length) {
          r && (e = r);
          var n = 0;
          return function () {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      return (r = e[Symbol.iterator]()).next.bind(r);
    }

    function l(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var r = 0, n = new Array(t); r < t; r++) {
        n[r] = e[r];
      }

      return n;
    }

    function s(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var u = function () {
      function e(t, r) {
        this.rawConfig = jQuery.extend({}, t), t = jQuery.extend({}, t), this.preview = r, delete t.isPreview, this.preview && delete t.required;

        for (var n = 0, o = ["label", "description", "subtype", "required", "disabled"]; n < o.length; n++) {
          var i = o[n];
          this[i] = t[i], delete t[i];
        }

        t.id || (t.name ? t.id = t.name : t.id = "control-" + Math.floor(1e7 * Math.random() + 1)), this.id = t.id, this.type = t.type, this.description && (t.title = this.description), e.controlConfig || (e.controlConfig = {});
        var a = this.subtype ? this.type + "." + this.subtype : this.type;
        this.classConfig = jQuery.extend({}, e.controlConfig[a] || {}), this.subtype && (t.type = this.subtype), this.required && (t.required = "required", t["aria-required"] = "true"), this.disabled && (t.disabled = "disabled"), this.config = t, this.configure();
      }

      e.register = function (t, r, n) {
        var o = n ? n + "." : "";
        e.classRegister || (e.classRegister = {}), Array.isArray(t) || (t = [t]);

        for (var i, l = a(t); !(i = l()).done;) {
          var s = i.value;
          -1 === s.indexOf(".") ? e.classRegister[o + s] = r : e.error("Ignoring type " + s + ". Cannot use the character '.' in a type name.");
        }
      }, e.getRegistered = function (t) {
        void 0 === t && (t = !1);
        var r = Object.keys(e.classRegister);
        return r.length ? r.filter(function (e) {
          return t ? e.indexOf(t + ".") > -1 : -1 == e.indexOf(".");
        }) : r;
      }, e.getRegisteredSubtypes = function () {
        var t = {};

        for (var r in e.classRegister) {
          if (e.classRegister.hasOwnProperty(r)) {
            var n = r.split("."),
                o = n[0],
                i = n[1];
            if (!i) continue;
            t[o] || (t[o] = []), t[o].push(i);
          }
        }

        return t;
      }, e.getClass = function (t, r) {
        var n = r ? t + "." + r : t,
            o = e.classRegister[n] || e.classRegister[t];
        return o || e.error("Invalid control type. (Type: " + t + ", Subtype: " + r + "). Please ensure you have registered it, and imported it correctly.");
      }, e.loadCustom = function (t) {
        var r = [];

        if (t && (r = r.concat(t)), window.fbControls && (r = r.concat(window.fbControls)), !this.fbControlsLoaded) {
          for (var n, o = a(r); !(n = o()).done;) {
            (0, n.value)(e, e.classRegister);
          }

          this.fbControlsLoaded = !0;
        }
      }, e.mi18n = function (e, t) {
        var r = this.definition,
            n = r.i18n || {};
        n = n[i.a.locale] || n.default || n;
        var o = this.camelCase(e),
            a = "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(n) ? n[o] || n[e] : n;
        if (a) return a;
        var l = r.mi18n;
        return "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(l) && (l = l[o] || l[e]), l || (l = o), i.a.get(l, t);
      }, e.active = function (e) {
        return !Array.isArray(this.definition.inactive) || -1 == this.definition.inactive.indexOf(e);
      }, e.label = function (e) {
        return this.mi18n(e);
      }, e.icon = function (e) {
        var t = this.definition;
        return t && "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(t.icon) ? t.icon[e] : t.icon;
      };
      var t,
          r,
          o,
          l = e.prototype;
      return l.configure = function () {}, l.build = function () {
        var e = this.config,
            t = e.label,
            r = e.type,
            o = function (e, t) {
          if (null == e) return {};
          var r,
              n,
              o = {},
              i = Object.keys(e);

          for (n = 0; n < i.length; n++) {
            r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
          }

          return o;
        }(e, ["label", "type"]);

        return this.markup(r, Object(n.u)(t), o);
      }, l.on = function (e) {
        var t = this,
            r = {
          prerender: function prerender(e) {
            return e;
          },
          render: function render(e) {
            var r = function r() {
              t.onRender && t.onRender(e);
            };

            t.css && Object(n.m)(t.css), t.js && !Object(n.p)(t.js) ? Object(n.l)(t.js).done(r) : r();
          }
        };
        return e ? r[e] : r;
      }, e.error = function (e) {
        throw new Error(e);
      }, l.markup = function (e, t, r) {
        return void 0 === t && (t = ""), void 0 === r && (r = {}), this.element = Object(n.q)(e, t, r), this.element;
      }, l.parsedHtml = function (e) {
        return Object(n.u)(e);
      }, e.camelCase = function (e) {
        return Object(n.c)(e);
      }, t = e, o = [{
        key: "definition",
        get: function get() {
          return {};
        }
      }], (r = null) && s(t.prototype, r), o && s(t, o), e;
    }();
  }, function (e, t) {
    /*!
     * mi18n - https://github.com/Draggable/mi18n
     * Version: 0.4.7
     * Author: Kevin Chappell <kevin.b.chappell@gmail.com> (http://kevin-chappell.com)
     */
    e.exports = function (e) {
      var t = {};

      function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
          i: n,
          l: !1,
          exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
      }

      return r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: n
        });
      }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        });
      }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e) && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e) for (var o in e) {
          r.d(n, o, function (t) {
            return e[t];
          }.bind(null, o));
        }
        return n;
      }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };
        return r.d(t, "a", t), t;
      }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, r.p = "", r(r.s = 7);
    }([function (e, t, r) {
      var n = "function" == typeof Symbol && "symbol" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(Symbol.iterator) ? function (e) {
        return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e);
      },
          o = r(2),
          i = r(10),
          a = Object.prototype.toString;

      function l(e) {
        return "[object Array]" === a.call(e);
      }

      function s(e) {
        return null !== e && "object" === (void 0 === e ? "undefined" : n(e));
      }

      function u(e) {
        return "[object Function]" === a.call(e);
      }

      function c(e, t) {
        if (null != e) if ("object" !== (void 0 === e ? "undefined" : n(e)) && (e = [e]), l(e)) for (var r = 0, o = e.length; r < o; r++) {
          t.call(null, e[r], r, e);
        } else for (var i in e) {
          Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
        }
      }

      e.exports = {
        isArray: l,
        isArrayBuffer: function isArrayBuffer(e) {
          return "[object ArrayBuffer]" === a.call(e);
        },
        isBuffer: i,
        isFormData: function isFormData(e) {
          return "undefined" != typeof FormData && e instanceof FormData;
        },
        isArrayBufferView: function isArrayBufferView(e) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
        },
        isString: function isString(e) {
          return "string" == typeof e;
        },
        isNumber: function isNumber(e) {
          return "number" == typeof e;
        },
        isObject: s,
        isUndefined: function isUndefined(e) {
          return void 0 === e;
        },
        isDate: function isDate(e) {
          return "[object Date]" === a.call(e);
        },
        isFile: function isFile(e) {
          return "[object File]" === a.call(e);
        },
        isBlob: function isBlob(e) {
          return "[object Blob]" === a.call(e);
        },
        isFunction: u,
        isStream: function isStream(e) {
          return s(e) && u(e.pipe);
        },
        isURLSearchParams: function isURLSearchParams(e) {
          return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
        },
        isStandardBrowserEnv: function isStandardBrowserEnv() {
          return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
        },
        forEach: c,
        merge: function e() {
          var t = {};

          function r(r, o) {
            "object" === n(t[o]) && "object" === (void 0 === r ? "undefined" : n(r)) ? t[o] = e(t[o], r) : t[o] = r;
          }

          for (var o = 0, i = arguments.length; o < i; o++) {
            c(arguments[o], r);
          }

          return t;
        },
        extend: function extend(e, t, r) {
          return c(t, function (t, n) {
            e[n] = r && "function" == typeof t ? o(t, r) : t;
          }), e;
        },
        trim: function trim(e) {
          return e.replace(/^\s*/, "").replace(/\s*$/, "");
        }
      };
    }, function (e, t, r) {
      (function (t) {
        var n = r(0),
            o = r(13),
            i = {
          "Content-Type": "application/x-www-form-urlencoded"
        };

        function a(e, t) {
          !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
        }

        var l = {
          adapter: function () {
            var e;
            return ("undefined" != typeof XMLHttpRequest || void 0 !== t) && (e = r(3)), e;
          }(),
          transformRequest: [function (e, t) {
            return o(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
          }],
          transformResponse: [function (e) {
            if ("string" == typeof e) try {
              e = JSON.parse(e);
            } catch (e) {}
            return e;
          }],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          validateStatus: function validateStatus(e) {
            return e >= 200 && e < 300;
          },
          headers: {
            common: {
              Accept: "application/json, text/plain, */*"
            }
          }
        };
        n.forEach(["delete", "get", "head"], function (e) {
          l.headers[e] = {};
        }), n.forEach(["post", "put", "patch"], function (e) {
          l.headers[e] = n.merge(i);
        }), e.exports = l;
      }).call(this, r(12));
    }, function (e, t, r) {
      e.exports = function (e, t) {
        return function () {
          for (var r = new Array(arguments.length), n = 0; n < r.length; n++) {
            r[n] = arguments[n];
          }

          return e.apply(t, r);
        };
      };
    }, function (e, t, r) {
      var n = r(0),
          o = r(14),
          i = r(16),
          a = r(17),
          l = r(18),
          s = r(4),
          u = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || r(19);

      e.exports = function (e) {
        return new Promise(function (t, c) {
          var f = e.data,
              d = e.headers;
          n.isFormData(f) && delete d["Content-Type"];
          var p = new XMLHttpRequest(),
              m = "onreadystatechange",
              b = !1;

          if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || l(e.url) || (p = new window.XDomainRequest(), m = "onload", b = !0, p.onprogress = function () {}, p.ontimeout = function () {}), e.auth) {
            var h = e.auth.username || "",
                g = e.auth.password || "";
            d.Authorization = "Basic " + u(h + ":" + g);
          }

          if (p.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p[m] = function () {
            if (p && (4 === p.readyState || b) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
              var r = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null,
                  n = {
                data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                status: 1223 === p.status ? 204 : p.status,
                statusText: 1223 === p.status ? "No Content" : p.statusText,
                headers: r,
                config: e,
                request: p
              };
              o(t, c, n), p = null;
            }
          }, p.onerror = function () {
            c(s("Network Error", e, null, p)), p = null;
          }, p.ontimeout = function () {
            c(s("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), p = null;
          }, n.isStandardBrowserEnv()) {
            var v = r(20),
                y = (e.withCredentials || l(e.url)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
            y && (d[e.xsrfHeaderName] = y);
          }

          if ("setRequestHeader" in p && n.forEach(d, function (e, t) {
            void 0 === f && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e);
          }), e.withCredentials && (p.withCredentials = !0), e.responseType) try {
            p.responseType = e.responseType;
          } catch (t) {
            if ("json" !== e.responseType) throw t;
          }
          "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
            p && (p.abort(), c(e), p = null);
          }), void 0 === f && (f = null), p.send(f);
        });
      };
    }, function (e, t, r) {
      var n = r(15);

      e.exports = function (e, t, r, o, i) {
        var a = new Error(e);
        return n(a, t, r, o, i);
      };
    }, function (e, t, r) {
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    }, function (e, t, r) {
      function n(e) {
        this.message = e;
      }

      n.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }, n.prototype.__CANCEL__ = !0, e.exports = n;
    }, function (e, t, r) {
      t.__esModule = !0, t.I18N = void 0;

      var n = "function" == typeof Symbol && "symbol" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(Symbol.iterator) ? function (e) {
        return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e);
      },
          o = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }

        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          i = r(8),
          a = {
        extension: ".lang",
        location: "assets/lang/",
        langs: ["en-US"],
        locale: "en-US",
        override: {}
      },
          l = t.I18N = function () {
        function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), this.langs = Object.create(null), this.loaded = [], this.processConfig(t);
        }

        return e.prototype.processConfig = function (e) {
          var t = this,
              r = Object.assign({}, a, e),
              n = r.location,
              o = function (e, t) {
            var r = {};

            for (var n in e) {
              t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
            }

            return r;
          }(r, ["location"]),
              i = n.replace(/\/?$/, "/");

          this.config = Object.assign({}, {
            location: i
          }, o);
          var l = this.config,
              s = l.override,
              u = l.preloaded,
              c = void 0 === u ? {} : u,
              f = Object.entries(this.langs).concat(Object.entries(s || c));
          this.langs = f.reduce(function (e, r) {
            var n = r[0],
                o = r[1];
            return e[n] = t.applyLanguage.call(t, n, o), e;
          }, {}), this.locale = this.config.locale || this.config.langs[0];
        }, e.prototype.init = function (e) {
          return this.processConfig.call(this, Object.assign({}, this.config, e)), this.setCurrent(this.locale);
        }, e.prototype.addLanguage = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          t = "string" == typeof t ? this.processFile.call(this, t) : t, this.applyLanguage.call(this, e, t), this.config.langs.push("locale");
        }, e.prototype.getValue = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
          return this.langs[t] && this.langs[t][e] || this.getFallbackValue(e);
        }, e.prototype.getFallbackValue = function (e) {
          var t = Object.values(this.langs).find(function (t) {
            return t[e];
          });
          return t && t[e];
        }, e.prototype.makeSafe = function (e) {
          var t = {
            "{": "\\{",
            "}": "\\}",
            "|": "\\|"
          };
          return e = e.replace(/\{|\}|\|/g, function (e) {
            return t[e];
          }), new RegExp(e, "g");
        }, e.prototype.put = function (e, t) {
          return this.current[e] = t;
        }, e.prototype.get = function (e, t) {
          var r = this.getValue(e);

          if (r) {
            var o = r.match(/\{[^}]+?\}/g),
                i = void 0;
            if (t && o) if ("object" === (void 0 === t ? "undefined" : n(t))) for (var a = 0; a < o.length; a++) {
              i = o[a].substring(1, o[a].length - 1), r = r.replace(this.makeSafe(o[a]), t[i] || "");
            } else r = r.replace(/\{[^}]+?\}/g, t);
            return r;
          }
        }, e.prototype.fromFile = function (e) {
          for (var t, r = e.split("\n"), n = {}, o = 0; o < r.length; o++) {
            (t = r[o].match(/^(.+?) *?= *?([^\n]+)/)) && (n[t[1]] = t[2].replace(/^\s+|\s+$/, ""));
          }

          return n;
        }, e.prototype.processFile = function (e) {
          return this.fromFile(e.replace(/\n\n/g, "\n"));
        }, e.prototype.loadLang = function (e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              r = this;
          return new Promise(function (n, o) {
            if (-1 !== r.loaded.indexOf(e) && t) return r.applyLanguage.call(r, r.langs[e]), n(r.langs[e]);
            var a = [r.config.location, e, r.config.extension].join("");
            return (0, i.get)(a).then(function (t) {
              var o = t.data,
                  i = r.processFile(o);
              return r.applyLanguage.call(r, e, i), r.loaded.push(e), n(r.langs[e]);
            }).catch(function () {
              var t = r.applyLanguage.call(r, e);
              n(t);
            });
          });
        }, e.prototype.applyLanguage = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              r = this.config.override[e] || {},
              n = this.langs[e] || {};
          return this.langs[e] = Object.assign({}, n, t, r), this.langs[e];
        }, e.prototype.setCurrent = function () {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US";
          return this.loadLang(t).then(function () {
            return e.locale = t, e.current = e.langs[t], e.current;
          });
        }, o(e, [{
          key: "getLangs",
          get: function get() {
            return this.config.langs;
          }
        }]), e;
      }();

      t.default = new l();
    }, function (e, t, r) {
      e.exports = r(9);
    }, function (e, t, r) {
      var n = r(0),
          o = r(2),
          i = r(11),
          a = r(1);

      function l(e) {
        var t = new i(e),
            r = o(i.prototype.request, t);
        return n.extend(r, i.prototype, t), n.extend(r, t), r;
      }

      var s = l(a);
      s.Axios = i, s.create = function (e) {
        return l(n.merge(a, e));
      }, s.Cancel = r(6), s.CancelToken = r(26), s.isCancel = r(5), s.all = function (e) {
        return Promise.all(e);
      }, s.spread = r(27), e.exports = s, e.exports.default = s;
    }, function (e, t, r) {
      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */
      function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
      }

      e.exports = function (e) {
        return null != e && (n(e) || function (e) {
          return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
        }(e) || !!e._isBuffer);
      };
    }, function (e, t, r) {
      var n = r(1),
          o = r(0),
          i = r(21),
          a = r(22);

      function l(e) {
        this.defaults = e, this.interceptors = {
          request: new i(),
          response: new i()
        };
      }

      l.prototype.request = function (e) {
        "string" == typeof e && (e = o.merge({
          url: arguments[0]
        }, arguments[1])), (e = o.merge(n, {
          method: "get"
        }, this.defaults, e)).method = e.method.toLowerCase();
        var t = [a, void 0],
            r = Promise.resolve(e);

        for (this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        }), this.interceptors.response.forEach(function (e) {
          t.push(e.fulfilled, e.rejected);
        }); t.length;) {
          r = r.then(t.shift(), t.shift());
        }

        return r;
      }, o.forEach(["delete", "get", "head", "options"], function (e) {
        l.prototype[e] = function (t, r) {
          return this.request(o.merge(r || {}, {
            method: e,
            url: t
          }));
        };
      }), o.forEach(["post", "put", "patch"], function (e) {
        l.prototype[e] = function (t, r, n) {
          return this.request(o.merge(n || {}, {
            method: e,
            url: t,
            data: r
          }));
        };
      }), e.exports = l;
    }, function (e, t, r) {
      var n,
          o,
          i = e.exports = {};

      function a() {
        throw new Error("setTimeout has not been defined");
      }

      function l() {
        throw new Error("clearTimeout has not been defined");
      }

      function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);

        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }

      !function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : a;
        } catch (e) {
          n = a;
        }

        try {
          o = "function" == typeof clearTimeout ? clearTimeout : l;
        } catch (e) {
          o = l;
        }
      }();
      var u,
          c = [],
          f = !1,
          d = -1;

      function p() {
        f && u && (f = !1, u.length ? c = u.concat(c) : d = -1, c.length && m());
      }

      function m() {
        if (!f) {
          var e = s(p);
          f = !0;

          for (var t = c.length; t;) {
            for (u = c, c = []; ++d < t;) {
              u && u[d].run();
            }

            d = -1, t = c.length;
          }

          u = null, f = !1, function (e) {
            if (o === clearTimeout) return clearTimeout(e);
            if ((o === l || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);

            try {
              o(e);
            } catch (t) {
              try {
                return o.call(null, e);
              } catch (t) {
                return o.call(this, e);
              }
            }
          }(e);
        }
      }

      function b(e, t) {
        this.fun = e, this.array = t;
      }

      function h() {}

      i.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) {
          t[r - 1] = arguments[r];
        }
        c.push(new b(e, t)), 1 !== c.length || f || s(m);
      }, b.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = h, i.addListener = h, i.once = h, i.off = h, i.removeListener = h, i.removeAllListeners = h, i.emit = h, i.prependListener = h, i.prependOnceListener = h, i.listeners = function (e) {
        return [];
      }, i.binding = function (e) {
        throw new Error("process.binding is not supported");
      }, i.cwd = function () {
        return "/";
      }, i.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }, i.umask = function () {
        return 0;
      };
    }, function (e, t, r) {
      var n = r(0);

      e.exports = function (e, t) {
        n.forEach(e, function (r, n) {
          n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[n]);
        });
      };
    }, function (e, t, r) {
      var n = r(4);

      e.exports = function (e, t, r) {
        var o = r.config.validateStatus;
        r.status && o && !o(r.status) ? t(n("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r);
      };
    }, function (e, t, r) {
      e.exports = function (e, t, r, n, o) {
        return e.config = t, r && (e.code = r), e.request = n, e.response = o, e;
      };
    }, function (e, t, r) {
      var n = r(0);

      function o(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }

      e.exports = function (e, t, r) {
        if (!t) return e;
        var i;
        if (r) i = r(t);else if (n.isURLSearchParams(t)) i = t.toString();else {
          var a = [];
          n.forEach(t, function (e, t) {
            null != e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, function (e) {
              n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), a.push(o(t) + "=" + o(e));
            }));
          }), i = a.join("&");
        }
        return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e;
      };
    }, function (e, t, r) {
      var n = r(0),
          o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];

      e.exports = function (e) {
        var t,
            r,
            i,
            a = {};
        return e ? (n.forEach(e.split("\n"), function (e) {
          if (i = e.indexOf(":"), t = n.trim(e.substr(0, i)).toLowerCase(), r = n.trim(e.substr(i + 1)), t) {
            if (a[t] && o.indexOf(t) >= 0) return;
            a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([r]) : a[t] ? a[t] + ", " + r : r;
          }
        }), a) : a;
      };
    }, function (e, t, r) {
      var n = r(0);
      e.exports = n.isStandardBrowserEnv() ? function () {
        var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");

        function o(e) {
          var n = e;
          return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
            href: r.href,
            protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
            host: r.host,
            search: r.search ? r.search.replace(/^\?/, "") : "",
            hash: r.hash ? r.hash.replace(/^#/, "") : "",
            hostname: r.hostname,
            port: r.port,
            pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
          };
        }

        return e = o(window.location.href), function (t) {
          var r = n.isString(t) ? o(t) : t;
          return r.protocol === e.protocol && r.host === e.host;
        };
      }() : function () {
        return !0;
      };
    }, function (e, t, r) {
      function n() {
        this.message = "String contains an invalid character";
      }

      n.prototype = new Error(), n.prototype.code = 5, n.prototype.name = "InvalidCharacterError", e.exports = function (e) {
        for (var t, r, o = String(e), i = "", a = 0, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; o.charAt(0 | a) || (l = "=", a % 1); i += l.charAt(63 & t >> 8 - a % 1 * 8)) {
          if ((r = o.charCodeAt(a += .75)) > 255) throw new n();
          t = t << 8 | r;
        }

        return i;
      };
    }, function (e, t, r) {
      var n = r(0);
      e.exports = n.isStandardBrowserEnv() ? {
        write: function write(e, t, r, o, i, a) {
          var l = [];
          l.push(e + "=" + encodeURIComponent(t)), n.isNumber(r) && l.push("expires=" + new Date(r).toGMTString()), n.isString(o) && l.push("path=" + o), n.isString(i) && l.push("domain=" + i), !0 === a && l.push("secure"), document.cookie = l.join("; ");
        },
        read: function read(e) {
          var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove: function remove(e) {
          this.write(e, "", Date.now() - 864e5);
        }
      } : {
        write: function write() {},
        read: function read() {
          return null;
        },
        remove: function remove() {}
      };
    }, function (e, t, r) {
      var n = r(0);

      function o() {
        this.handlers = [];
      }

      o.prototype.use = function (e, t) {
        return this.handlers.push({
          fulfilled: e,
          rejected: t
        }), this.handlers.length - 1;
      }, o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }, o.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }, e.exports = o;
    }, function (e, t, r) {
      var n = r(0),
          o = r(23),
          i = r(5),
          a = r(1),
          l = r(24),
          s = r(25);

      function u(e) {
        e.cancelToken && e.cancelToken.throwIfRequested();
      }

      e.exports = function (e) {
        return u(e), e.baseURL && !l(e.url) && (e.url = s(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
          delete e.headers[t];
        }), (e.adapter || a.adapter)(e).then(function (t) {
          return u(e), t.data = o(t.data, t.headers, e.transformResponse), t;
        }, function (t) {
          return i(t) || (u(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
        });
      };
    }, function (e, t, r) {
      var n = r(0);

      e.exports = function (e, t, r) {
        return n.forEach(r, function (r) {
          e = r(e, t);
        }), e;
      };
    }, function (e, t, r) {
      e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
      };
    }, function (e, t, r) {
      e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
      };
    }, function (e, t, r) {
      var n = r(6);

      function o(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        var r = this;
        e(function (e) {
          r.reason || (r.reason = new n(e), t(r.reason));
        });
      }

      o.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }, o.source = function () {
        var e;
        return {
          token: new o(function (t) {
            e = t;
          }),
          cancel: e
        };
      }, e.exports = o;
    }, function (e, t, r) {
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    }]);
  }, function (e, t, r) {
    r.d(t, "c", function () {
      return i;
    }), r.d(t, "d", function () {
      return a;
    }), r.d(t, "b", function () {
      return l;
    }), r.d(t, "a", function () {
      return s;
    });

    var n = r(2),
        o = function o() {
      return null;
    };

    r.n(n).a.addLanguage("en-US", {
      NATIVE_NAME: "English (US)",
      ENGLISH_NAME: "English",
      addOption: "Add Option +",
      allFieldsRemoved: "All fields were removed.",
      allowMultipleFiles: "Allow users to upload multiple files",
      autocomplete: "Autocomplete",
      button: "Button",
      cannotBeEmpty: "This field cannot be empty",
      checkboxGroup: "Checkbox Group",
      checkbox: "Checkbox",
      checkboxes: "Checkboxes",
      className: "Class",
      clearAllMessage: "Are you sure you want to clear all fields?",
      clear: "Clear",
      close: "Close",
      content: "Content",
      copy: "Copy To Clipboard",
      copyButton: "&#43;",
      copyButtonTooltip: "Copy",
      dateField: "Date Field",
      description: "Help Text",
      descriptionField: "Description",
      devMode: "Developer Mode",
      editNames: "Edit Names",
      editorTitle: "Form Elements",
      editXML: "Edit XML",
      enableOther: "Enable &quot;Other&quot;",
      enableOtherMsg: "Let users enter an unlisted option",
      fieldDeleteWarning: "false",
      fieldVars: "Field Variables",
      fieldNonEditable: "This field cannot be edited.",
      fieldRemoveWarning: "Are you sure you want to remove this field?",
      fileUpload: "File Upload",
      formUpdated: "Form Updated",
      getStarted: "Drag a field from the right to this area",
      header: "Header",
      hide: "Edit",
      hidden: "Hidden Input",
      inline: "Inline",
      inlineDesc: "Display {type} inline",
      label: "Label",
      labelEmpty: "Field Label cannot be empty",
      limitRole: "Limit access to one or more of the following roles:",
      mandatory: "Mandatory",
      maxlength: "Max Length",
      minOptionMessage: "This field requires a minimum of 2 options",
      minSelectionRequired: "Minimum {min} selections required",
      multipleFiles: "Multiple Files",
      name: "Name",
      no: "No",
      noFieldsToClear: "There are no fields to clear",
      number: "Number",
      off: "Off",
      on: "On",
      option: "Option",
      optionCount: "Option {count}",
      options: "Options",
      optional: "optional",
      optionLabelPlaceholder: "Label",
      optionValuePlaceholder: "Value",
      optionEmpty: "Option value required",
      other: "Other",
      paragraph: "Paragraph",
      placeholder: "Placeholder",
      "placeholders.value": "Value",
      "placeholders.label": "Label",
      "placeholders.email": "Enter your email",
      "placeholders.className": "space separated classes",
      "placeholders.password": "Enter your password",
      preview: "Preview",
      radioGroup: "Radio Group",
      radio: "Radio",
      removeMessage: "Remove Element",
      removeOption: "Remove Option",
      remove: "&#215;",
      required: "Required",
      requireValidOption: "Only accept a pre-defined Option",
      richText: "Rich Text Editor",
      roles: "Access",
      rows: "Rows",
      save: "Save",
      selectOptions: "Options",
      select: "Select",
      selectColor: "Select Color",
      selectionsMessage: "Allow Multiple Selections",
      size: "Size",
      "size.xs": "Extra Small",
      "size.sm": "Small",
      "size.m": "Default",
      "size.lg": "Large",
      style: "Style",
      "styles.btn.default": "Default",
      "styles.btn.danger": "Danger",
      "styles.btn.info": "Info",
      "styles.btn.primary": "Primary",
      "styles.btn.success": "Success",
      "styles.btn.warning": "Warning",
      subtype: "Type",
      text: "Text Field",
      textArea: "Text Area",
      toggle: "Toggle",
      warning: "Warning!",
      value: "Value",
      viewJSON: "[{&hellip;}]",
      viewXML: "&lt;/&gt;",
      yes: "Yes"
    });
    var i = {
      actionButtons: [],
      allowStageSort: !0,
      append: !1,
      controlOrder: ["autocomplete", "button", "checkbox-group", "checkbox", "date", "file", "header", "hidden", "number", "paragraph", "radio-group", "select", "text", "textarea"],
      controlPosition: "right",
      dataType: "json",
      defaultFields: [],
      disabledActionButtons: [],
      disabledAttrs: [],
      disabledFieldButtons: {},
      disabledSubtypes: {},
      disableFields: [],
      disableHTMLLabels: !1,
      disableInjectedStyle: !1,
      editOnAdd: !1,
      fields: [],
      fieldRemoveWarn: !1,
      fieldEditContainer: null,
      inputSets: [],
      notify: {
        error: function error(e) {
          console.log(e);
        },
        success: function success(e) {
          console.log(e);
        },
        warning: function warning(e) {
          console.warn(e);
        }
      },
      onAddField: function onAddField(e, t) {
        return t;
      },
      onAddOption: function onAddOption(e) {
        return e;
      },
      onClearAll: o,
      onCloseFieldEdit: o,
      onOpenFieldEdit: o,
      onSave: o,
      prepend: !1,
      replaceFields: [],
      roles: {
        1: "Administrator"
      },
      scrollToFieldOnAdd: !0,
      showActionButtons: !0,
      sortableControls: !1,
      stickyControls: {
        enable: !0,
        offset: {
          top: 5,
          bottom: "auto",
          right: "auto"
        }
      },
      subtypes: {},
      templates: {},
      typeUserAttrs: {},
      typeUserDisabledAttrs: {},
      typeUserEvents: {}
    },
        a = {
      btn: ["default", "danger", "info", "primary", "success", "warning"]
    },
        l = {
      location: "assets/lang/"
    },
        s = {};
  }, function (e, t, r) {
    r.d(t, "d", function () {
      return n;
    }), r.d(t, "f", function () {
      return i;
    }), r.d(t, "b", function () {
      return a;
    }), r.d(t, "c", function () {
      return l;
    }), r.d(t, "e", function () {
      return s;
    }), r.d(t, "a", function () {
      return c;
    });

    var n = {},
        o = {
      text: ["text", "password", "email", "color", "tel"],
      header: ["h1", "h2", "h3"],
      button: ["button", "submit", "reset"],
      paragraph: ["p", "address", "blockquote", "canvas", "output"],
      textarea: ["textarea", "quill"]
    },
        i = function i(e) {
      e.parentNode && e.parentNode.removeChild(e);
    },
        a = function a(e) {
      for (; e.firstChild;) {
        e.removeChild(e.firstChild);
      }

      return e;
    },
        l = function l(e, t, r) {
      void 0 === r && (r = !0);
      var n = [],
          o = ["none", "block"];
      r && (o = o.reverse());

      for (var i = e.length - 1; i >= 0; i--) {
        -1 !== e[i].textContent.toLowerCase().indexOf(t.toLowerCase()) ? (e[i].style.display = o[0], n.push(e[i])) : e[i].style.display = o[1];
      }

      return n;
    },
        s = ["select", "checkbox-group", "checkbox", "radio-group", "autocomplete"],
        u = new RegExp("(" + s.join("|") + ")"),
        c = function () {
      function e(e) {
        return this.optionFields = s, this.optionFieldsRegEx = u, this.subtypes = o, this.empty = a, this.filter = l, n[e] = this, n[e];
      }

      return e.prototype.onRender = function (e, t) {
        var r = this;
        e.parentElement ? t(e) : window.requestAnimationFrame(function () {
          return r.onRender(e, t);
        });
      }, e;
    }();
  }, function (e, t, r) {
    function n(e) {
      var t;
      return "function" == typeof Event ? t = new Event(e) : (t = document.createEvent("Event")).initEvent(e, !0, !0), t;
    }

    var o = {
      loaded: n("loaded"),
      viewData: n("viewData"),
      userDeclined: n("userDeclined"),
      modalClosed: n("modalClosed"),
      modalOpened: n("modalOpened"),
      formSaved: n("formSaved"),
      fieldAdded: n("fieldAdded"),
      fieldRemoved: n("fieldRemoved"),
      fieldRendered: n("fieldRendered"),
      fieldEditOpened: n("fieldEditOpened"),
      fieldEditClosed: n("fieldEditClosed")
    };
    t.a = o;
  }, function (e, t, r) {
    r.d(t, "a", function () {
      return u;
    });
    var n = r(1),
        o = r(2),
        i = r.n(o);

    function a(e, t) {
      var r;

      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (r = function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return l(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(e);
          if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t);
        }(e)) || t && e && "number" == typeof e.length) {
          r && (e = r);
          var n = 0;
          return function () {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      return (r = e[Symbol.iterator]()).next.bind(r);
    }

    function l(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var r = 0, n = new Array(t); r < t; r++) {
        n[r] = e[r];
      }

      return n;
    }

    function s(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var u = function (e) {
      var t, r, o, l, u;

      function c() {
        return e.apply(this, arguments) || this;
      }

      return r = e, (t = c).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, c.register = function (e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = []), c.customRegister = {}, c.def || (c.def = {
          icon: {},
          i18n: {}
        }), c.templates = e;
        var r = i.a.locale;
        c.def.i18n[r] || (c.def.i18n[r] = {}), n.a.register(Object.keys(e), c);

        for (var o, l = a(t); !(o = l()).done;) {
          var s = o.value,
              u = s.type;

          if (s.attrs = s.attrs || {}, !u) {
            if (!s.attrs.type) {
              this.error("Ignoring invalid custom field definition. Please specify a type property.");
              continue;
            }

            u = s.attrs.type;
          }

          var f = s.subtype || u;

          if (!e[u]) {
            var d = n.a.getClass(u, s.subtype);

            if (!d) {
              this.error("Error while registering custom field: " + u + (s.subtype ? ":" + s.subtype : "") + ". Unable to find any existing defined control or template for rendering.");
              continue;
            }

            f = s.datatype ? s.datatype : u + "-" + Math.floor(9e3 * Math.random() + 1e3), c.customRegister[f] = jQuery.extend(s, {
              type: u,
              class: d
            });
          }

          c.def.i18n[r][f] = s.label, c.def.icon[f] = s.icon;
        }
      }, c.getRegistered = function (e) {
        return void 0 === e && (e = !1), e ? n.a.getRegistered(e) : Object.keys(c.customRegister);
      }, c.lookup = function (e) {
        return c.customRegister[e];
      }, c.prototype.build = function () {
        var e = c.templates[this.type];
        if (!e) return this.error("Invalid custom control type. Please ensure you have registered it correctly as a template option.");

        for (var t = Object.assign(this.config), r = 0, n = ["label", "description", "subtype", "id", "isPreview", "required", "title", "aria-required", "type"]; r < n.length; r++) {
          var o = n[r];
          t[o] = this.config[o] || this[o];
        }

        return (e = (e = e.bind(this))(t)).js && (this.js = e.js), e.css && (this.css = e.css), this.onRender = e.onRender, {
          field: e.field,
          layout: e.layout
        };
      }, o = c, u = [{
        key: "definition",
        get: function get() {
          return c.def;
        }
      }], (l = null) && s(o.prototype, l), u && s(o, u), c;
    }(n.a);

    u.customRegister = {};
  }, function (e, t, r) {
    e.exports = function (e) {
      var t = [];
      return t.toString = function () {
        return this.map(function (t) {
          var r = function (e, t) {
            var r = e[1] || "",
                n = e[3];
            if (!n) return r;

            if (t && "function" == typeof btoa) {
              var o = (a = n, l = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l), "/*# ".concat(s, " */")),
                  i = n.sources.map(function (e) {
                return "/*# sourceURL=".concat(n.sourceRoot || "").concat(e, " */");
              });
              return [r].concat(i).concat([o]).join("\n");
            }

            var a, l, s;
            return [r].join("\n");
          }(t, e);

          return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r;
        }).join("");
      }, t.i = function (e, r, n) {
        "string" == typeof e && (e = [[null, e, ""]]);
        var o = {};
        if (n) for (var i = 0; i < this.length; i++) {
          var a = this[i][0];
          null != a && (o[a] = !0);
        }

        for (var l = 0; l < e.length; l++) {
          var s = [].concat(e[l]);
          n && o[s[0]] || (r && (s[2] ? s[2] = "".concat(r, " and ").concat(s[2]) : s[2] = r), t.push(s));
        }
      }, t;
    };
  }, function (e) {
    e.exports = JSON.parse('{"a":"formbuilder-icon-"}');
  }, function (e, t, r) {
    var n,
        o = function o() {
      return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n;
    },
        i = function () {
      var e = {};
      return function (t) {
        if (void 0 === e[t]) {
          var r = document.querySelector(t);
          if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
            r = r.contentDocument.head;
          } catch (e) {
            r = null;
          }
          e[t] = r;
        }

        return e[t];
      };
    }(),
        a = [];

    function l(e) {
      for (var t = -1, r = 0; r < a.length; r++) {
        if (a[r].identifier === e) {
          t = r;
          break;
        }
      }

      return t;
    }

    function s(e, t) {
      for (var r = {}, n = [], o = 0; o < e.length; o++) {
        var i = e[o],
            s = t.base ? i[0] + t.base : i[0],
            u = r[s] || 0,
            c = "".concat(s, " ").concat(u);
        r[s] = u + 1;
        var f = l(c),
            d = {
          css: i[1],
          media: i[2],
          sourceMap: i[3]
        };
        -1 !== f ? (a[f].references++, a[f].updater(d)) : a.push({
          identifier: c,
          updater: h(d, t),
          references: 1
        }), n.push(c);
      }

      return n;
    }

    function u(e) {
      var t = document.createElement("style"),
          n = e.attributes || {};

      if (void 0 === n.nonce) {
        var o = r.nc;
        o && (n.nonce = o);
      }

      if (Object.keys(n).forEach(function (e) {
        t.setAttribute(e, n[e]);
      }), "function" == typeof e.insert) e.insert(t);else {
        var a = i(e.insert || "head");
        if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        a.appendChild(t);
      }
      return t;
    }

    var c,
        f = (c = [], function (e, t) {
      return c[e] = t, c.filter(Boolean).join("\n");
    });

    function d(e, t, r, n) {
      var o = r ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
      if (e.styleSheet) e.styleSheet.cssText = f(t, o);else {
        var i = document.createTextNode(o),
            a = e.childNodes;
        a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }

    function p(e, t, r) {
      var n = r.css,
          o = r.media,
          i = r.sourceMap;
      if (o ? e.setAttribute("media", o) : e.removeAttribute("media"), i && btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet) e.styleSheet.cssText = n;else {
        for (; e.firstChild;) {
          e.removeChild(e.firstChild);
        }

        e.appendChild(document.createTextNode(n));
      }
    }

    var m = null,
        b = 0;

    function h(e, t) {
      var r, n, o;

      if (t.singleton) {
        var i = b++;
        r = m || (m = u(t)), n = d.bind(null, r, i, !1), o = d.bind(null, r, i, !0);
      } else r = u(t), n = p.bind(null, r, t), o = function o() {
        !function (e) {
          if (null === e.parentNode) return !1;
          e.parentNode.removeChild(e);
        }(r);
      };

      return n(e), function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          n(e = t);
        } else o();
      };
    }

    e.exports = function (e, t) {
      (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = o());
      var r = s(e = e || [], t);
      return function (e) {
        if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
          for (var n = 0; n < r.length; n++) {
            var o = l(r[n]);
            a[o].references--;
          }

          for (var i = s(e, t), u = 0; u < r.length; u++) {
            var c = l(r[u]);
            0 === a[c].references && (a[c].updater(), a.splice(c, 1));
          }

          r = i;
        }
      };
    };
  }, function (e, t, r) {
    r.d(t, "a", function () {
      return i;
    });

    var n = r(0),
        o = function o(e, t) {
      var r = e.id ? "formbuilder-" + e.type + " form-group field-" + e.id : "";

      if (e.className) {
        var n = e.className.split(" ");
        (n = n.filter(function (e) {
          return /^col-(xs|sm|md|lg)-([^\s]+)/.test(e) || e.startsWith("row-");
        })) && n.length > 0 && (r += " " + n.join(" "));

        for (var o = 0; o < n.length; o++) {
          var i = n[o];
          t.classList.remove(i);
        }
      }

      return r;
    },
        i = function () {
      function e(e, t) {
        var r = this;
        this.preview = t, this.templates = {
          label: null,
          help: null,
          default: function _default(e, t, n, i) {
            return n && t.appendChild(n), r.markup("div", [t, e], {
              className: o(i, e)
            });
          },
          noLabel: function noLabel(e, t, n, i) {
            return r.markup("div", e, {
              className: o(i, e)
            });
          },
          hidden: function hidden(e) {
            return e;
          }
        }, e && (this.templates = jQuery.extend(this.templates, e)), this.configure();
      }

      var t = e.prototype;
      return t.configure = function () {}, t.build = function (e, t, r) {
        this.preview && (t.name ? t.name = t.name + "-preview" : t.name = n.f.nameAttr(t) + "-preview"), t.id = t.name, this.data = jQuery.extend({}, t);
        var o = new e(t, this.preview),
            i = o.build();
        "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(i) && i.field || (i = {
          field: i
        });
        var a,
            l = this.label(),
            s = this.help();
        a = r && this.isTemplate(r) ? r : this.isTemplate(i.layout) ? i.layout : "default";
        var u = this.processTemplate(a, i.field, l, s);
        return o.on("prerender")(u), u.addEventListener("fieldRendered", o.on("render")), u;
      }, t.label = function () {
        var e = this.data.label || "",
            t = [n.f.parsedHtml(e)];
        return this.data.required && t.push(this.markup("span", "*", {
          className: "formbuilder-required"
        })), this.isTemplate("label") ? this.processTemplate("label", t) : this.markup("label", t, {
          for: this.data.id,
          className: "formbuilder-" + this.data.type + "-label"
        });
      }, t.help = function () {
        return this.data.description ? this.isTemplate("help") ? this.processTemplate("help", this.data.description) : this.markup("span", "?", {
          className: "tooltip-element",
          tooltip: this.data.description
        }) : null;
      }, t.isTemplate = function (e) {
        return "function" == typeof this.templates[e];
      }, t.processTemplate = function (e) {
        for (var t, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) {
          n[o - 1] = arguments[o];
        }

        var i = (t = this.templates)[e].apply(t, n.concat([this.data]));
        return i.jquery && (i = i[0]), i;
      }, t.markup = function (e, t, r) {
        return void 0 === t && (t = ""), void 0 === r && (r = {}), n.f.markup(e, t, r);
      }, e;
    }();
  }, function (e, t) {
    e.exports = function (e) {
      var t = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e);

      return null != e && ("object" == t || "function" == t);
    };
  }, function (t, r, n) {
    var o = n(1),
        i = n(4);

    function a(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var l = function (t) {
      var r, n;

      function o() {
        return t.apply(this, arguments) || this;
      }

      n = t, (r = o).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
      var l,
          s,
          u,
          c = o.prototype;
      return c.build = function () {
        var e = this,
            t = this.config,
            r = t.values,
            n = t.type,
            o = function (e, t) {
          if (null == e) return {};
          var r,
              n,
              o = {},
              i = Object.keys(e);

          for (n = 0; n < i.length; n++) {
            r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
          }

          return o;
        }(t, ["values", "type"]),
            a = function a(t) {
          var r = t.target.nextSibling.nextSibling,
              n = t.target.nextSibling,
              o = e.getActiveOption(r),
              i = new Map([[38, function () {
            var t = e.getPreviousOption(o);
            t && e.selectOption(r, t);
          }], [40, function () {
            var t = e.getNextOption(o);
            t && e.selectOption(r, t);
          }], [13, function () {
            o ? (t.target.value = o.innerHTML, n.value = o.getAttribute("value"), "none" === r.style.display ? e.showList(r, o) : e.hideList(r)) : e.config.requireValidOption && (e.isOptionValid(r, t.target.value) || (t.target.value = "", t.target.nextSibling.value = "")), t.preventDefault();
          }], [27, function () {
            e.hideList(r);
          }]]).get(t.keyCode);
          return i || (i = function i() {
            return !1;
          }), i();
        },
            l = {
          focus: function focus(t) {
            var r = t.target.nextSibling.nextSibling,
                n = Object(i.c)(r.querySelectorAll("li"), t.target.value);

            if (t.target.addEventListener("keydown", a), t.target.value.length > 0) {
              var o = n.length > 0 ? n[n.length - 1] : null;
              e.showList(r, o);
            }
          },
          blur: function blur(t) {
            t.target.removeEventListener("keydown", a);
            var r = setTimeout(function () {
              t.target.nextSibling.nextSibling.style.display = "none", clearTimeout(r);
            }, 200);

            if (e.config.requireValidOption) {
              var n = t.target.nextSibling.nextSibling;
              e.isOptionValid(n, t.target.value) || (t.target.value = "", t.target.nextSibling.value = "");
            }
          },
          input: function input(t) {
            var r = t.target.nextSibling.nextSibling;
            t.target.nextSibling.value = t.target.value;
            var n = Object(i.c)(r.querySelectorAll("li"), t.target.value);
            if (0 == n.length) e.hideList(r);else {
              var o = e.getActiveOption(r);
              o || (o = n[n.length - 1]), e.showList(r, o);
            }
          }
        },
            s = Object.assign({}, o, {
          id: o.id + "-input",
          autocomplete: "off",
          events: l
        }),
            u = Object.assign({}, o, {
          type: "hidden"
        });

        delete s.name;
        var c = [this.markup("input", null, s), this.markup("input", null, u)],
            f = r.map(function (t) {
          var r = t.label,
              n = {
            events: {
              click: function click(r) {
                var n = r.target.parentElement,
                    o = n.previousSibling.previousSibling;
                o.value = t.label, o.nextSibling.value = t.value, e.hideList(n);
              }
            },
            value: t.value
          };
          return e.markup("li", r, n);
        });
        return c.push(this.markup("ul", f, {
          id: o.id + "-list",
          className: "formbuilder-" + n + "-list"
        })), c;
      }, c.hideList = function (e) {
        this.selectOption(e, null), e.style.display = "none";
      }, c.showList = function (e, t) {
        this.selectOption(e, t), e.style.display = "block", e.style.width = e.parentElement.offsetWidth + "px";
      }, c.getActiveOption = function (e) {
        var t = e.getElementsByClassName("active-option")[0];
        return t && "none" !== t.style.display ? t : null;
      }, c.getPreviousOption = function (e) {
        var t = e;

        do {
          t = t ? t.previousSibling : null;
        } while (null != t && "none" === t.style.display);

        return t;
      }, c.getNextOption = function (e) {
        var t = e;

        do {
          t = t ? t.nextSibling : null;
        } while (null != t && "none" === t.style.display);

        return t;
      }, c.selectOption = function (e, t) {
        for (var r = e.querySelectorAll("li"), n = 0; n < r.length; n++) {
          r[n].classList.remove("active-option");
        }

        t && t.classList.add("active-option");
      }, c.isOptionValid = function (e, t) {
        for (var r = e.querySelectorAll("li"), n = !1, o = 0; o < r.length; o++) {
          if (r[o].innerHTML === t) {
            n = !0;
            break;
          }
        }

        return n;
      }, c.onRender = function (t) {
        if (this.config.userData) {
          var r = e("#" + this.config.name),
              n = r.next(),
              o = this.config.userData[0],
              i = null;
          if (n.find("li").each(function () {
            e(this).attr("value") !== o || (i = e(this).get(0));
          }), null === i) return this.config.requireValidOption ? void 0 : void r.prev().val(this.config.userData[0]);
          r.prev().val(i.innerHTML), r.val(i.getAttribute("value"));
          var a = r.next().get(0);
          "none" === a.style.display ? this.showList(a, i) : this.hideList(a);
        }

        return t;
      }, l = o, u = [{
        key: "definition",
        get: function get() {
          return {
            mi18n: {
              requireValidOption: "requireValidOption"
            }
          };
        }
      }], (s = null) && a(l.prototype, s), u && a(l, u), o;
    }(o.a);

    o.a.register("autocomplete", l);

    var s = function (e) {
      var t, r;

      function n() {
        return e.apply(this, arguments) || this;
      }

      return r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, n.prototype.build = function () {
        return {
          field: this.markup("button", this.label, this.config),
          layout: "noLabel"
        };
      }, n;
    }(o.a);

    o.a.register("button", s), o.a.register(["button", "submit", "reset"], s, "button");
    var u = n(6);

    var c = function (t) {
      var r, n;

      function o() {
        return t.apply(this, arguments) || this;
      }

      n = t, (r = o).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
      var i = o.prototype;
      return i.build = function () {
        return {
          field: this.markup("input", null, this.config),
          layout: "hidden"
        };
      }, i.onRender = function () {
        this.config.userData && e("#" + this.config.name).val(this.config.userData[0]);
      }, o;
    }(o.a);

    o.a.register("hidden", c);
    var f = n(0);

    var d = function (e) {
      var t, r;

      function n() {
        return e.apply(this, arguments) || this;
      }

      return r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, n.prototype.build = function () {
        var e = this.config,
            t = e.type,
            r = function (e, t) {
          if (null == e) return {};
          var r,
              n,
              o = {},
              i = Object.keys(e);

          for (n = 0; n < i.length; n++) {
            r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
          }

          return o;
        }(e, ["type"]),
            n = t,
            o = {
          paragraph: "p",
          header: this.subtype
        };

        return o[t] && (n = o[t]), {
          field: this.markup(n, f.f.parsedHtml(this.label), r),
          layout: "noLabel"
        };
      }, n;
    }(o.a);

    function p(e, t) {
      if (null == e) return {};
      var r,
          n,
          o = {},
          i = Object.keys(e);

      for (n = 0; n < i.length; n++) {
        r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
      }

      return o;
    }

    function m(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    o.a.register(["paragraph", "header"], d), o.a.register(["p", "address", "blockquote", "canvas", "output"], d, "paragraph"), o.a.register(["h1", "h2", "h3", "h4", "h5", "h6"], d, "header");

    var b = function (t) {
      var r, n;

      function i() {
        return t.apply(this, arguments) || this;
      }

      n = t, (r = i).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
      var a,
          l,
          s,
          u = i.prototype;
      return u.build = function () {
        var e = [],
            t = this.config,
            r = t.values,
            n = t.value,
            o = t.placeholder,
            i = t.type,
            a = t.inline,
            l = t.other,
            s = t.toggle,
            u = p(t, ["values", "value", "placeholder", "type", "inline", "other", "toggle"]),
            c = i.replace("-group", ""),
            d = "select" === i;

        if ((u.multiple || "checkbox-group" === i) && (u.name = u.name + "[]"), "checkbox-group" === i && u.required && (this.onRender = this.groupRequired), delete u.title, r) {
          o && d && e.push(this.markup("option", o, {
            disabled: null,
            selected: null
          }));

          for (var m = 0; m < r.length; m++) {
            var b = r[m];
            "string" == typeof b && (b = {
              label: b,
              value: b
            });
            var h = b,
                g = h.label,
                v = void 0 === g ? "" : g,
                y = p(h, ["label"]);

            if (y.id = u.id + "-" + m, y.selected && !o || delete y.selected, void 0 !== n && y.value === n && (y.selected = !0), d) {
              var w = this.markup("option", document.createTextNode(v), y);
              e.push(w);
            } else {
              var x = [v],
                  A = "formbuilder-" + c;
              a && (A += "-inline"), y.type = c, y.selected && (y.checked = "checked", delete y.selected);
              var O = this.markup("input", null, Object.assign({}, u, y)),
                  j = {
                for: y.id
              },
                  k = [O, this.markup("label", x, j)];
              s && (j.className = "kc-toggle", x.unshift(O, this.markup("span")), k = this.markup("label", x, j));
              var q = this.markup("div", k, {
                className: A
              });
              e.push(q);
            }
          }

          if (!d && l) {
            var C = {
              id: u.id + "-other",
              className: u.className + " other-option",
              value: ""
            },
                E = "formbuilder-" + c;
            a && (E += "-inline");
            var N = Object.assign({}, u, C);
            N.type = c;
            var S = {
              type: "text",
              events: {
                input: function input(e) {
                  var t = e.target,
                      r = t.parentElement.previousElementSibling;
                  r.value = t.value, r.name = u.id + "[]";
                }
              },
              id: C.id + "-value",
              className: "other-val"
            },
                L = this.markup("input", null, N),
                T = [document.createTextNode("Other"), this.markup("input", null, S)],
                D = this.markup("label", T, {
              for: N.id
            }),
                B = this.markup("div", [L, D], {
              className: E
            });
            e.push(B);
          }
        }

        return this.dom = "select" == i ? this.markup(c, e, Object(f.A)(u, !0)) : this.markup("div", e, {
          className: i
        }), this.dom;
      }, u.groupRequired = function () {
        for (var e = this.element.getElementsByTagName("input"), t = function t(e, _t) {
          [].forEach.call(e, function (e) {
            _t ? e.removeAttribute("required") : e.setAttribute("required", "required"), function (e, t) {
              var r = o.a.mi18n("minSelectionRequired", 1);
              t ? e.setCustomValidity("") : e.setCustomValidity(r);
            }(e, _t);
          });
        }, r = function r() {
          var r = [].some.call(e, function (e) {
            return e.checked;
          });
          t(e, r);
        }, n = e.length - 1; n >= 0; n--) {
          e[n].addEventListener("change", r);
        }

        r();
      }, u.onRender = function () {
        if (this.config.userData) {
          var t = this.config.userData.slice();
          "select" === this.config.type ? e(this.dom).val(t).prop("selected", !0) : this.config.type.endsWith("-group") && this.dom.querySelectorAll("input").forEach(function (e) {
            if (!e.classList.contains("other-val")) {
              for (var r = 0; r < t.length; r++) {
                if (e.value === t[r]) {
                  e.setAttribute("checked", !0), t.splice(r, 1);
                  break;
                }
              }

              if (e.id.endsWith("-other")) {
                var n = document.getElementById(e.id + "-value");
                if (0 === t.length) return;
                e.setAttribute("checked", !0), n.value = e.value = t[0], n.style.display = "inline-block";
              }
            }
          });
        }
      }, a = i, s = [{
        key: "definition",
        get: function get() {
          return {
            inactive: ["checkbox"],
            mi18n: {
              minSelectionRequired: "minSelectionRequired"
            }
          };
        }
      }], (l = null) && m(a.prototype, l), s && m(a, s), i;
    }(o.a);

    function h(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    o.a.register(["select", "checkbox-group", "radio-group", "checkbox"], b);

    var g = function (t) {
      var r, n;

      function o() {
        return t.apply(this, arguments) || this;
      }

      n = t, (r = o).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
      var i,
          a,
          l,
          s = o.prototype;
      return s.build = function () {
        var e = this.config.name;
        e = this.config.multiple ? e + "[]" : e;
        var t = Object.assign({}, this.config, {
          name: e
        });
        return this.dom = this.markup("input", null, t), this.dom;
      }, s.onRender = function () {
        this.config.userData && e(this.dom).val(this.config.userData[0]);
      }, i = o, l = [{
        key: "definition",
        get: function get() {
          return {
            mi18n: {
              date: "dateField",
              file: "fileUpload"
            }
          };
        }
      }], (a = null) && h(i.prototype, a), l && h(i, l), o;
    }(o.a);

    function v(e, t) {
      var r;

      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (r = function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return y(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(e);
          if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return y(e, t);
        }(e)) || t && e && "number" == typeof e.length) {
          r && (e = r);
          var n = 0;
          return function () {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      return (r = e[Symbol.iterator]()).next.bind(r);
    }

    function y(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var r = 0, n = new Array(t); r < t; r++) {
        n[r] = e[r];
      }

      return n;
    }

    function w(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    o.a.register(["text", "file", "date", "number"], g), o.a.register(["text", "password", "email", "color", "tel"], g, "text");

    var x = function (t) {
      var r, n;

      function o() {
        return t.apply(this, arguments) || this;
      }

      n = t, (r = o).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
      var i,
          a,
          l,
          s = o.prototype;
      return s.configure = function () {
        var t = this;
        this.js = this.classConfig.js || "//cdnjs.cloudflare.com/ajax/libs/file-uploader/5.14.2/jquery.fine-uploader/jquery.fine-uploader.min.js", this.css = [this.classConfig.css || "//cdnjs.cloudflare.com/ajax/libs/file-uploader/5.14.2/jquery.fine-uploader/fine-uploader-gallery.min.css", {
          type: "inline",
          id: "fineuploader-inline",
          style: "\n          .qq-uploader .qq-error-message {\n            position: absolute;\n            left: 20%;\n            top: 20px;\n            width: 60%;\n            color: #a94442;\n            background: #f2dede;\n            border: solid 1px #ebccd1;\n            padding: 15px;\n            line-height: 1.5em;\n            text-align: center;\n            z-index: 99999;\n          }\n          .qq-uploader .qq-error-message span {\n            display: inline-block;\n            text-align: left;\n          }"
        }], this.handler = this.classConfig.handler || "/upload";
        ["js", "css", "handler"].forEach(function (e) {
          return delete t.classConfig[e];
        });
        var r = this.classConfig.template || '\n      <div class="qq-uploader-selector qq-uploader qq-gallery" qq-drop-area-text="Drop files here">\n        <div class="qq-total-progress-bar-container-selector qq-total-progress-bar-container">\n          <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar"></div>\n        </div>\n        <div class="qq-upload-drop-area-selector qq-upload-drop-area" qq-hide-dropzone>\n          <span class="qq-upload-drop-area-text-selector"></span>\n        </div>\n        <div class="qq-upload-button-selector qq-upload-button">\n          <div>Upload a file</div>\n        </div>\n        <span class="qq-drop-processing-selector qq-drop-processing">\n          <span>Processing dropped files...</span>\n          <span class="qq-drop-processing-spinner-selector qq-drop-processing-spinner"></span>\n        </span>\n        <ul class="qq-upload-list-selector qq-upload-list" role="region" aria-live="polite" aria-relevant="additions removals">\n          <li>\n            <span role="status" class="qq-upload-status-text-selector qq-upload-status-text"></span>\n            <div class="qq-progress-bar-container-selector qq-progress-bar-container">\n              <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-progress-bar-selector qq-progress-bar"></div>\n            </div>\n            <span class="qq-upload-spinner-selector qq-upload-spinner"></span>\n            <div class="qq-thumbnail-wrapper">\n              <img class="qq-thumbnail-selector" qq-max-size="120" qq-server-scale>\n            </div>\n            <button type="button" class="qq-upload-cancel-selector qq-upload-cancel">X</button>\n            <button type="button" class="qq-upload-retry-selector qq-upload-retry">\n              <span class="qq-btn qq-retry-icon" aria-label="Retry"></span>\n              Retry\n            </button>\n            <div class="qq-file-info">\n              <div class="qq-file-name">\n                <span class="qq-upload-file-selector qq-upload-file"></span>\n                <span class="qq-edit-filename-icon-selector qq-btn qq-edit-filename-icon" aria-label="Edit filename"></span>\n              </div>\n              <input class="qq-edit-filename-selector qq-edit-filename" tabindex="0" type="text">\n              <span class="qq-upload-size-selector qq-upload-size"></span>\n              <button type="button" class="qq-btn qq-upload-delete-selector qq-upload-delete">\n                <span class="qq-btn qq-delete-icon" aria-label="Delete"></span>\n              </button>\n              <button type="button" class="qq-btn qq-upload-pause-selector qq-upload-pause">\n                <span class="qq-btn qq-pause-icon" aria-label="Pause"></span>\n              </button>\n              <button type="button" class="qq-btn qq-upload-continue-selector qq-upload-continue">\n                <span class="qq-btn qq-continue-icon" aria-label="Continue"></span>\n              </button>\n            </div>\n          </li>\n        </ul>\n        <dialog class="qq-alert-dialog-selector">\n          <div class="qq-dialog-message-selector"></div>\n          <div class="qq-dialog-buttons">\n            <button type="button" class="qq-cancel-button-selector">Close</button>\n          </div>\n        </dialog>\n        <dialog class="qq-confirm-dialog-selector">\n          <div class="qq-dialog-message-selector"></div>\n          <div class="qq-dialog-buttons">\n            <button type="button" class="qq-cancel-button-selector">No</button>\n            <button type="button" class="qq-ok-button-selector">Yes</button>\n          </div>\n        </dialog>\n        <dialog class="qq-prompt-dialog-selector">\n          <div class="qq-dialog-message-selector"></div>\n          <input type="text">\n          <div class="qq-dialog-buttons">\n            <button type="button" class="qq-cancel-button-selector">Cancel</button>\n            <button type="button" class="qq-ok-button-selector">Ok</button>\n          </div>\n        </dialog>\n      </div>';
        this.fineTemplate = e("<div/>").attr("id", "qq-template").html(r);
      }, s.build = function () {
        return this.input = this.markup("input", null, {
          type: "hidden",
          name: this.config.name,
          id: this.config.name
        }), this.wrapper = this.markup("div", "", {
          id: this.config.name + "-wrapper"
        }), [this.input, this.wrapper];
      }, s.onRender = function () {
        var t = e(this.wrapper),
            r = e(this.input),
            n = jQuery.extend(!0, {
          request: {
            endpoint: this.handler
          },
          deleteFile: {
            enabled: !0,
            endpoint: this.handler
          },
          chunking: {
            enabled: !0,
            concurrent: {
              enabled: !0
            },
            success: {
              endpoint: this.handler + (-1 == this.handler.indexOf("?") ? "?" : "&") + "done"
            }
          },
          resume: {
            enabled: !0
          },
          retry: {
            enableAuto: !0,
            showButton: !0
          },
          callbacks: {
            onError: function onError(r, n, o) {
              "." != o.slice(-1) && (o += ".");
              var i = e("<div />").addClass("qq-error-message").html("<span>Error processing upload: <b>" + n + "</b>.<br />Reason: " + o + "</span>").prependTo(t.find(".qq-uploader")),
                  a = window.setTimeout(function () {
                i.fadeOut(function () {
                  i.remove(), window.clearTimeout(a);
                });
              }, 6e3);
              return r;
            },
            onStatusChange: function onStatusChange(e, n, o) {
              for (var i, a = [], l = v(t.fineUploader("getUploads")); !(i = l()).done;) {
                var s = i.value;
                "upload successful" == s.status && a.push(s.name);
              }

              return r.val(a.join(", ")), {
                id: e,
                oldStatus: n,
                newStatus: o
              };
            }
          },
          template: this.fineTemplate
        }, this.classConfig);
        t.fineUploader(n);
      }, i = o, l = [{
        key: "definition",
        get: function get() {
          return {
            i18n: {
              default: "Fine Uploader"
            }
          };
        }
      }], (a = null) && w(i.prototype, a), l && w(i, l), o;
    }(g);

    function A(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    g.register("file", g, "file"), g.register("fineuploader", x, "file");

    var O = function (t) {
      var r, n;

      function o() {
        return t.apply(this, arguments) || this;
      }

      n = t, (r = o).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
      var i,
          a,
          l,
          s = o.prototype;
      return s.build = function () {
        var e = this.config,
            t = e.value,
            r = void 0 === t ? "" : t,
            n = function (e, t) {
          if (null == e) return {};
          var r,
              n,
              o = {},
              i = Object.keys(e);

          for (n = 0; n < i.length; n++) {
            r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
          }

          return o;
        }(e, ["value"]);

        return this.field = this.markup("textarea", this.parsedHtml(r), n), this.field;
      }, s.onRender = function () {
        this.config.userData && e("#" + this.config.name).val(this.config.userData[0]);
      }, s.on = function (r) {
        var n = this;
        return "prerender" == r && this.preview ? function (t) {
          n.field && (t = n.field), e(t).on("mousedown", function (e) {
            e.stopPropagation();
          });
        } : t.prototype.on.call(this, r);
      }, i = o, l = [{
        key: "definition",
        get: function get() {
          return {
            mi18n: {
              textarea: "textArea"
            }
          };
        }
      }], (a = null) && A(i.prototype, a), l && A(i, l), o;
    }(o.a);

    o.a.register("textarea", O), o.a.register("textarea", O, "textarea");

    var j = function (e) {
      var t, r;

      function n() {
        return e.apply(this, arguments) || this;
      }

      r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
      var o = n.prototype;
      return o.configure = function () {
        if (this.js = ["https://cdn.tinymce.com/4/tinymce.min.js"], this.classConfig.js) {
          var e = this.classConfig.js;
          Array.isArray(e) || (e = new Array(e)), this.js.concat(e), delete this.classConfig.js;
        }

        this.classConfig.css && (this.css = this.classConfig.css), this.editorOptions = {
          height: 250,
          paste_data_images: !0,
          plugins: ["advlist autolink lists link image charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table contextmenu paste code"],
          toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table"
        };
      }, o.build = function () {
        var e = this.config,
            t = e.value,
            r = void 0 === t ? "" : t,
            n = function (e, t) {
          if (null == e) return {};
          var r,
              n,
              o = {},
              i = Object.keys(e);

          for (n = 0; n < i.length; n++) {
            r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
          }

          return o;
        }(e, ["value"]);

        return this.field = this.markup("textarea", this.parsedHtml(r), n), n.disabled && (this.editorOptions.readonly = !0), this.field;
      }, o.onRender = function (e) {
        window.tinymce.editors[this.id] && window.tinymce.editors[this.id].remove();
        var t = jQuery.extend(this.editorOptions, this.classConfig);
        return t.target = this.field, window.tinymce.init(t), this.config.userData && window.tinymce.editors[this.id].setContent(this.parsedHtml(this.config.userData[0])), e;
      }, n;
    }(O);

    function k(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function q(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? k(Object(r), !0).forEach(function (t) {
          C(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function C(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    O.register("tinymce", j, "textarea");

    var E = function (e) {
      var t, r;

      function n() {
        return e.apply(this, arguments) || this;
      }

      r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
      var o = n.prototype;
      return o.configure = function () {
        var e = {
          modules: {
            toolbar: [[{
              header: [1, 2, !1]
            }], ["bold", "italic", "underline"], ["code-block"]]
          },
          placeholder: this.config.placeholder || "",
          theme: "snow"
        },
            t = f.f.splitObject(this.classConfig, ["css", "js"]),
            r = t[0],
            n = t[1];
        Object.assign(this, q(q({}, {
          js: "//cdn.quilljs.com/1.2.4/quill.js",
          css: "//cdn.quilljs.com/1.2.4/quill.snow.css"
        }), r)), this.editorConfig = q(q({}, e), n);
      }, o.build = function () {
        var e = this.config,
            t = (e.value, function (e, t) {
          if (null == e) return {};
          var r,
              n,
              o = {},
              i = Object.keys(e);

          for (n = 0; n < i.length; n++) {
            r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
          }

          return o;
        }(e, ["value"]));
        return this.field = this.markup("div", null, t), this.field;
      }, o.onRender = function (e) {
        var t = this.config.value || "",
            r = window.Quill.import("delta");
        window.fbEditors.quill[this.id] = {};
        var n = window.fbEditors.quill[this.id];
        return n.instance = new window.Quill(this.field, this.editorConfig), n.data = new r(), t && n.instance.setContents(window.JSON.parse(this.parsedHtml(t))), n.instance.on("text-change", function (e) {
          n.data = n.data.compose(e);
        }), e;
      }, n;
    }(O);

    O.register("quill", E, "textarea");
    u.a;
  }, function (e, t, r) {
    var n = r(20),
        o = "object" == (typeof self === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(self)) && self && self.Object === Object && self,
        i = n || o || Function("return this")();
    e.exports = i;
  }, function (e, t, r) {
    var n = r(13).Symbol;
    e.exports = n;
  }, function (e, t, r) {
    var n = r(18),
        o = r(11);

    e.exports = function (e, t, r) {
      var i = !0,
          a = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return o(r) && (i = "leading" in r ? !!r.leading : i, a = "trailing" in r ? !!r.trailing : a), n(e, t, {
        leading: i,
        maxWait: t,
        trailing: a
      });
    };
  }, function (e, t, r) {
    var n = r(9),
        o = r(17);
    "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, ""]]);
    var i = {
      attributes: {
        class: "formBuilder-injected-style"
      },
      insert: "head",
      singleton: !1
    };
    n(o, i);
    e.exports = o.locals || {};
  }, function (e, t, r) {
    r.r(t);
    var n = r(7),
        o = r.n(n)()(!1);
    o.push([e.i, "@font-face{font-family:'formbuilder-icons';src:url(\"data:application/octet-stream;base64,d09GRgABAAAAABu0AA8AAAAAMegAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABWAAAADsAAABUIIslek9TLzIAAAGUAAAAQwAAAFY+IFQTY21hcAAAAdgAAACqAAACbnpHyFBjdnQgAAAChAAAABMAAAAgBtX/BGZwZ20AAAKYAAAFkAAAC3CKkZBZZ2FzcAAACCgAAAAIAAAACAAAABBnbHlmAAAIMAAAEA4AAByklMHRx2hlYWQAABhAAAAAMwAAADYZ1vNNaGhlYQAAGHQAAAAdAAAAJAc8A2VobXR4AAAYlAAAACEAAABMRoz//2xvY2EAABi4AAAAKAAAAChJjFGYbWF4cAAAGOAAAAAgAAAAIAKGDJhuYW1lAAAZAAAAAZkAAAM5OICt5nBvc3QAABqcAAAAmwAAAN59hsARcHJlcAAAGzgAAAB6AAAAhuVBK7x4nGNgZGBg4GIwYLBjYHJx8wlh4MtJLMljkGJgYYAAkDwymzEnMz2RgQPGA8qxgGkOIGaDiAIAJjsFSAB4nGNgZN7OOIGBlYGBqYppDwMDQw+EZnzAYMjIBBRlYGVmwAoC0lxTGA68YPjkyxz0P4shijmIYRpQmBEkBwAMiQy7AHic7ZHLFYJADEXvAOIP5FOCC1e2ws6CXFlr1jSgL5OUYTiXScIMcHKBA9CKp+igfCh4vNUttd9yqf2Ol+qTrgZstGXfvl9l2BRZjaLndx41a3S20xd6juqe9Z4rAyM3JmYWVm3q+cdQ75bVGmktZcCSOvXEjVni1ixxm5Zo6lii+WOJTGCJnGCJW7ZEnrDE/84SuZP5QBZlPsDXOcDXJZBj9i1g/QFjZzHOAAB4nGNgQAMSEMgc9D8LhAESbAPdAHicrVZpd9NGFB15SZyELCULLWphxMRpsEYmbMGACUGyYyBdnK2VoIsUO+m+8Ynf4F/zZNpz6Dd+Wu8bLySQtOdwmpOjd+fN1czbZRJaktgL65GUmy/F1NYmjew8CemGTctRfCg7eyFlisnfBVEQrZbatx2HREQiULWusEQQ+x5ZmmR86FFGy7akV03KLT3pLlvjQb1V334aOsqxO6GkZjN0aD2yJVUYVaJIpj1S0qZlqPorSSu8v8LMV81QwohOImm8GcbQSN4bZ7TKaDW24yiKbLLcKFIkmuFBFHmU1RLn5IoJDMoHzZDyyqcR5cP8iKzYo5xWsEu20/y+L3mndzk/sV9vUbbkQB/Ijuzg7HQlX4RbW2HctJPtKFQRdtd3QmzZ7FT/Zo/ymkYDtysyvdCMYKl8hRArP6HM/iFZLZxP+ZJHo1qykRNB62VO7Es+gdbjiClxzRhZ0N3RCRHU/ZIzDPaYPh788d4plgsTAngcy3pHJZwIEylhczRJ2jByYCVliyqp9a6YOOV1WsRbwn7t2tGXzmjjUHdiPFsPHVs5UcnxaFKnmUyd2knNoykNopR0JnjMrwMoP6JJXm1jNYmVR9M4ZsaERCICLdxLU0EsO7GkKQTNoxm9uRumuXYtWqTJA/Xco/f05la4udNT2g70s0Z/VqdiOtgL0+lp5C/xadrlIkXp+ukZfkziQdYCMpEtNsOUgwdv/Q7Sy9eWHIXXBtju7fMrqH3WRPCkAfsb0B5P1SkJTIWYVYhWQGKta1mWydWsFqnI1HdDmla+rNMEinIcF8e+jHH9XzMzlpgSvt+J07MjLj1z7UsI0xx8m3U9mtepxXIBcWZ5TqdZlu/rNMfyA53mWZ7X6QhLW6ejLD/UaYHlRzodY3lBC5p038GQizDkAg6QMISlA0NYXoIhLBUMYbkIQ1gWYQjLJRjC8mMYwnIZhrC8rGXV1FNJ49qZWAZsQmBijh65zEXlaiq5VEK7aFRqQ54SbpVUFM+qf2WgXjzyhjmwFkiXyJpfMc6Vj0bl+NYVLW8aO1fAsepvH472OfFS1ouFPwX/1dZUJb1izcOTq/Abhp5sJ6o2qXh0TZfPVT26/l9UVFgL9BtIhVgoyrJscGcihI86nYZqoJVDzGzMPLTrdcuan8P9NzFCFlD9+DcUGgvcg05ZSVnt4KzV19uy3DuDcjgTLEkxN/P6VvgiI7PSfpFZyp6PfB5wBYxKZdhqA60VvNknMQ+Z3iTPBHFbUTZI2tjOBIkNHPOAefOdBCZh6qoN5E7hhg34BWFuwXknXKJ6oyyH7kXs8yik/Fun4kT2qGiMwLPZG2Gv70LKb3EMJDT5pX4MVBWhqRg1FdA0Um6oBl/G2bptQsYO9CMqdsOyrOLDxxb3lZJtGYR8pIjVo6Of1l6iTqrcfmYUl++dvgXBIDUxf3vfdHGQyrtayTJHbQNTtxqVU9eaQ+NVh+rmUfW94+wTOWuabronHnpf06rbwcVcLLD2bQ7SUiYX1PVhhQ2iy8WlUOplNEnvuAcYFhjQ71CKjf+r+th8nitVhdFxJN9O1LfR52AM/A/Yf0f1A9D3Y+hyDS7P95oTn2704WyZrqIX66foNzBrrblZugbc0HQD4iFHrY64yg18pwZxeqS5HOkh4GPdFeIBwCaAxeAT3bWM5lMAo/mMOT7A58xh0GQOgy3mMNhmzhrADnMY7DKHwR5zGHzBnHWAL5nDIGQOg4g5DJ4wJwB4yhwGXzGHwdfMYfANc+4DfMscBjFzGCTMYbCv6dYwzC1e0F2gtkFVoANTT1jcw+JQU2XI/o4Xhv29Qcz+wSCm/qjp9pD6Ey8M9WeDmPqLQUz9VdOdIfU3Xhjq7wYx9Q+DmPpMvxjLZQa/jHyXCgeUXWw+5++J9w/bxUC5AAEAAf//AA94nM1ZW3Bbx3nef88VwMEBDnAO7iAuBxcRoEQKV0qkAEiiREqkJJKmJFKyQNY0HVc0TSlJq9ox7TZynKgvrmcqT6dR22EznXGcTOvIE+fB6kynkpt6PHamje126pdOXyq/+KHNS2EB6r+40KwkZ9xkPJPF2QvP7v5nd//b9y+Jk5C757nb3CzhiERsxEHcxEuCJEJMkiZZMkmmyRyZJ8/Q0cnX9On52ks8UHOHSVesICcTSTmxRhKZZCKzGoOIZ8ATWSED0ejAsu7WOEdYDTtWDJeTU/v61OUQ+PrBpD5ziexID9kHeYnskOoCR4nNQkEkUE8pVCRJWUzWd0FmZ5Z6IhnPYi6+m4uSsCMaXgyC3x84RQIBZYL09XkXiNdr9x4JTr5m4ML+uLuwHWufs7KBtQcvLaz2rX5pa6u9/IWW5RmIrm6tS1378he2sFA7f/LkzIzPpyhP/96l3/2dr3/tqxfXzz/+lcdWHl1+5LeWFuvnzp6cPzl/+tTM3MzcQ7PTJ45PHRk/fGjs4IH9tcpwMTeUzfTvSKeSCTMei0b6wiFf0BcM+L0eQ3e7NKfiUBwujSVnXghmIW+YadPIlzHjU8TH9GJOY4PrtllmnWDoKmRB00UzFk8VtUIF8rGiWYwZphHL9QHXD0YsWWRkTAMKKTOmmdidb+dYXAyD7sm3B7NJuVIRLlWrG5UKPo1qu6pWb+Cb9oMN+HEg64/EQ01XyMQWvLwBezbgtD8beLN1pXWFftJ8EYfR11xq6/s4v1JpnVc1Te2NU100wMhXqt2y2ny32k70jxr+TKD1nVA8HqI/Q3o4uxrINt+/8SkjA++rrtZPqxX8udSGquHUiqYSgjrIdHLzgTqZJ2UyQqrkBPka+ZPa1f1JGnYd2Zng3GE6HovQsNsSnguC2++1cxbZbVn0eRRONjSJE3hZqOtOkeMdNo4DwkM9AC5X33wU+vqUCdVKOUJC8yQUsoeOfPXC2vmvPLa8dO7sqYeOTR0aq1b2jY7s3TNcLhULuwf70z2eI8N9XY53kzMuhLM9bqa31XBPzRULKaQjSobuKedzJdg2vtzt83b7yp/JQmkEiqzIecI4o9OSjHzOM765+db162/1Svju669/eP06/HBz88PXX7+liAnJCp3yu+1XH25uuqyyKSmApWz9l4HQnU/CmUx4ooBKWviwlDCTJRgPZ05sbm4mrl+/nths3tpssCJxHYY229Q22exWCvs2N1e3vRpoFhkp+k44U0oWCslSp8wgbyny9h+5/6B/T3TST3K1wfYBuonEURjXAQ4RIJQDuoS8J9wc4Tg0vtieKo6UC7zgY3qhAh7GLuhqRs7jLUsWEJJFpgpx0dCY+KPYc1Mozc33UO6wprlY3vryB633W+9BDgY0tfme6nKpNKdqNNBSeoOwzsRO/3frKrz86BsKE/POOCLjul95oJ94srYaBl6IgIX3g2wJgigbIInCeB8IAbB4QOQOe0Eaw4kU7VbdCgLhLQJfJxYiixa5TkQbjpfO4OnAKQKgkCOKIss9K6LaZZtsYwLmVAR/VouhIcAsYKFhs4htB6S9bqmTudt3fCzDJZpvvsvyxrV6/Vo3c3rlzcqbHRVtVG/Uo8/CG/XoBvwYC9zV/XuMIpeKpIJ+cA6Ejgc8Q2xUoLaVILgsrgtsWzbclk+hgh14q8AvecFKHKLVsUREImmihIrmJJrq1Jb8oBK3rLqXQjqVDQ+1uGTL0rZ9B2tnO8SFtS+B+kLtwLGpWrVcymbiMUN3Omemp+aOzR0+VJ2sTY7sLVXKldxQppgtppKx/nh/MKBHjajT7dzSbmcYlXuLAe1sMA4YHIojCiMaZxTOdFzUPblSIdV9i8qpi/e+vHdoj2t76MXmi738UVssc23ZRFkMoTh2BDVdLqfxRdDlst83pM3iRpX9qvBGINPuy2UCGy7sDLla32wPL84WN3C0oRutF7vzsXi2MwbPzOjKgr5N0juW9yAZR2k4QR4ip8lZskgukW+Q58hl8m1u/+RrFpSPPyOj0og0unIYhsuiOLyyDwgpFUmpjoJUyBQL9fzuwZ18tj8RDfkEymXp4o5DyYOx/eGq38Klx8wDkVqw4rXwAsfXU/G+gEcQDLfmsAs2RbDVc0O7BviM7nKqvGLNKHViJRbZaqmjhkqjslTHNe7dM7K3TvaQ8vCeMmoXgDhLRBEWCIhwDNGSFRf5l79skQO4SJLJ0szsr7tUbqC70oFfaaU2XOmfb19peVhc+w07z9pfdBY4svYbusIFxHp/9cwzc3PT01NTExNjY7Xa6OjwMCXffuFbz1/+5h/8/jPPPfPcsxvfePqpHg68sP7k2hOr53+7gwYZFnz47JmF+bnTc6dPnZx+aPqh2ZmpE1Mnjh+bmJyYPHpkbHwMkWHtYA2x4Wh1FMHC8MgwwgWGFvK53UODu3YO3IsWtyEHp1UiDuoYF/QsbPdfWiElIGw0MEOMWZ32L4+w776cNMx9NG94H1j1oCGCROP+3KYKXUeSxsy9eudqyDRD3CritjtP5TBxq3eu9nLu3OzpmfpkfaY+0FyfnH1lZub7k5N/MzPzh2xgrj4zz7omz3XnNF0dW7bRUuAXnB4PM5BphugnIfN5l93dvEIH7G7Fbd9KEbfbjlbtvjKKhV1UesmvuJtXGYCtVAlxbvktBds68ZEQ+q0E2UEGyBApkGEy2rFbUOx4sMeCYOMUzrZCFJ5Xlv1eaggewVgJ+KhHFD3LcV1z8HZJlewrbhaJyLK6bAG+L0QhzMNiImJyYSIYYaHOfJBdlBZjgABBJueswHH0VBQoVTj0Zk90P6Ss4Zc4hV/tfcqz1v6W4BFXP/uYutb5mqTKq7/C5xZqJ5ls79xpoPHeLpPVyhZ4RXHcObQTJfJBAmn4DJTJtkgi6sDDVNyFpODBkGB3TyTzWtvldd2eG8WKiaiGudzLKFPJbX9DOi90BRX5fjEUb9w5/ZmPa9y4cefnLFboRSOtK702fFC9dOd/kMHcbEcgaR6GKzfevIFz6MUb1Urz3Uo3NdolXDjUYKTwkHq+q4djWOTwkw7v9xOE/jxZUQCsPFhXiayCTZRt7bPlEE70cJqd4TTCcJrVYrHOEqvVskAsVgtavAMdGrD2qxNZqKWiURm5GDWjyIK+oMeNZ64wqGe1IHrkkQKnOQQjW8aDTqJehiG2D/Dg3dr/xbmcFtNuwC9aymen+mY89JkOV+5c/R47Ihb+4Zkx1euqIWdF9fyEoWty9z+52/SD7q3H2do8w+AIxKHOq5TYwWoj1rrioDbE2aJNWJJBlCRxFitROkUQvB6NRoEwcepsJ9CzbQ6rzDaD4XoEIs62hWOWiNm0zg5GwGgHssWuxQMUsX7Q0Ao11+uN+rVgwgxdwwZ9KRQ37zx9jf6suU5fovMslEz5WldCJgsbzRBc8qVak3CpdQUuIXzBQyd3f8Qdo3eRIzrxozV4oebtAyqEPaqE6/FzGO/hHjEQHJ98zYWCkSYCFdZx43Sdnf064kYgy+hLeB5msQL+NOP6ZLCWun8kWb9/4EINgVQs6vM6HRYZlyHqErLTW05jvIZxuxmXQDT0fK4MpbQXzCLoiOPLpVwEPO/kLucnYFER+NY/8XaBh0Gu73Zr6DZ3TD93+5w+4rmsS/nL+dFxKip86595LGEXf/F2a/Bj+NOwce7jhw3jsoedA9fWhVdRF3g0GA5yqHbACvwhWaS8wK8TgQjrEnprZBBXR34DnSWUMsBM4ajFAsTisDC5tDE24iDclwW5mGQIWELth7LX1EwNPmhluVerGxvNC43GtRvf+/TTjQq80Wi0fgp7COks5Dad/5w7tsGtqH47tvy72t/2220WSeAk2KFYZZGn6CeB1HG+qjnUOtGI060560jNZbhddcSsOkbMdaTt8Xs9deS6L+j31bPppBmLhKVgIBCc3fojGDiVSSXi0b6QFAgGjqJjn0O3Po1OfQpd+kTvqmd75P8FfHkvUBjAQMG97V7n3iz8kvx5c9zd24POHc49D7Oi3KtYn7qn/nnPnm5/qp0BNFDZnjaqG9vy9gSXKi2lytgIrKB/Ta+jj+2rBX2aleMpgXFmLcg6Bu70Md2ne1mkXixUIZ0qMIFGqfagdKNzEeODGOzGU4GbNwOFw4FbN/0TOf/Nm/7chP/mLf9E/kwiwOqc/9Yt9u7WzUCnP4+fle6TIx+JkQG6+yeZdIKzyDDewfbHJeAQJHLWNQ2sCrEu20GRibLsANViE9QVFmLaULOpYKHCKtsSh2LlRJ9qUVnEKPC8MEsEgemxgArfweFjW1TtisZZZaTrUNEiIq2VB9KyPZiW9qWskFmw6QdTlVfbZC2qbe3/T9eNdGfuoaus/tqEa7NfiKbFRle/MNEFlmpmwI/ql+3fkUqa8b6wPxZgob5P8/VU0yWEsm6Gc/OaiXU/YC304vA0i9XjKLTevFHOS14zbZgVBmXZvWYH0lYqzX+Np9MH0+nY0J49S3v3vh15bMfFp/rXIqhObRd0FPVlMXcqh4+/9kQNH35p6fzTTz7Z0R/0S29xNvIsOV6bXJgrcKLgRWsrs3uvcRntq0QFkRfY9QZQEZasQFHj5rCiZJ5jajb19FMX1ldXlhbnT544fnTs6559SzbUNyGeiotmPFUuVGi5tA8KaYYTHKCj38t5vLoodQcU2wOKaa1cShUGYRekd4GI00rlHB5CPoemTIyLkmh4GcDokNpFi/f3u7dIcz/wP5J7xG93gisQtbhAMlrf8UhgWOJ9OiiOwOO76z676vL0YR86GcpTWZDjPg8oauDxoSWPqroCIasOkgNeUCVwW3eFVNX36OCST1V1X1zSwW2JhlygnOB5n93lpKJoO/hvisBx/35CEXmnS/UB69GcPC/ZD0bgHxx2FQlanVTgabc7wLoF5fgtim7z+nFFpIpnW4f9WPO/DiAxDDR9HT7Rt5FPWbKrlg3LFHk0joePDFhhuOFJBjH4OcLz7IKSJ1P78u5hUxD8WcDjQefODkjTxSywe1tzq5VK44+dZYldXdK3dTVEVR489lFVn3Y5sZwtH04mlg9WfgA2Vacf9zsTwKliX3ND1XWVvtKcZzUYUiB2cP/0w99Cl9e9Vz3PrWIMxPzqeG2MR3FxOO2cIBKhripUREslyQhN2eKVCSvIsl0+QghzYDhny4dpWwldGBTNsim1s5Fv53y5nfE9vs5zq9ciG5EG5o/eifxwW/taI9KAjzYamDYa3arRYOb77t3u/9sYKh8hz9ccJvBCFkWdWAAkDm24gjZnAFWaE/gVBmBEjrQv+xB0otIL8jyRZWUC4Rl6AkrtFAOtnZ3h3NoXGr9QU4qxlO4ulrymBbcpbIPUXgSi7u59e1pDQ4BcQiPAbuRxhNSFrKhl2Mc4yG0qYnNTtlpluihZJwrJ5mayAKUEXUwWPpywys3OvfiZM4kSFJL4trSPLrLhnQ66wsZ3OqDwozNn2qMZwYkOjQL5XxyYz4kAAHicY2BkYGAAYoWQLZPj+W2+MnAzvwCKMNzOCL8Go////5/F/II5CMjlYGACiQIAb6wN5AB4nGNgZGBgDvqfBSRf/AcC5hcMQBEUIAwAtq0HpgAAAHicY37BwMAMwgugNC4ciWAzrUNinwLS2SD2//8Ae2MRwgAAAAAAAAABygK4AxQDhgSMBuIH6giCCOwJcAmyCpgK1gw4DQwNZA24DlIAAQAAABMAiAAWAAAAAAACAI4AngBzAAABWwtwAAAAAHicjZLPSutAFId/qVXRgqAXXB/uQhQxjRE3rgoFXbkR7FJI08mfkmbKZCrU/V35IL6BOx/Al9BX8dfpcFGKaMIk3/nOmcnMIQD28IYAy+ucY8kBdhktuYVNXHpeo7/23CbfeV5HB9rzBv2D520c49FzB3/wzBWC9hajMV49B/gbnHluYSe49bxGn3puk/95Xsd+8OR5g/7F8zYGwbvnDg5a5309nZsyL6wc9o8kjuJIhnPRVGWdVJLMbKFNIz3JdG1VVekw1ZNMm8lwVlYjZU7KVNfNjcpnVWJW/IoYKNOUupbTMFrJXalamcSq0WIHzX0eW5tJZvRELv23ZWr0WKU2LKydXnS7n/eEPps7xRwGJXIUsBAc0h7xHSNyQzBkhbByWVWiRoKKJsGMMwqXaRj3ODJGNa1iRUUOkfI5cd7wPeSckpkRKwxOyKmb0eCGJme24rrmF/U/VwycaWgWseCUu4l+Me+KpnY2cScZ/e9Bg3vuMaa1XGdxWuNOJ/yRv55b2NdFbkyT0oeuu5b2Al3e3/TpA2udouQAAAB4nG3IWw7CIBBGYX5FbK133YaLmg6jECkQpInu3mjjm+fpy1EzNbVS/zthhjk0FjBYokGLFTqsscEWO+xxwBEnnNWaxpo4DTlIFW2pSsNO+N6n5/aHy62kMXeFrE+T2+LZXao8q3lIEK7Nx1SE9HdmieyDvvogxnlrJRqmyBJMP9aaonFCVkqbqdCtUHYmjkMvRXPKL6Xep1o2rQB4nGPw3sFwIihiIyNjX+QGxp0cDBwMyQUbGVidNjEwMmiBGJu5mBg5ICw+BjCLzWkX0wGgNCeQze60i8EBwmZmcNmowtgRGLHBoSNiI3OKy0Y1EG8XRwMDI4tDR3JIBEhJJBBs5mFi5NHawfi/dQNL70YmBhcADHYj9AAA\") format(\"woff\")}[class^=\"formbuilder-icon-\"]:before,[class*=\" formbuilder-icon-\"]:before{font-family:\"formbuilder-icons\";font-style:normal;font-weight:normal;speak:never;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em}.formbuilder-icon-autocomplete:before{content:'\\e800'}.formbuilder-icon-date:before{content:'\\e801'}.formbuilder-icon-checkbox:before{content:'\\e802'}.formbuilder-icon-checkbox-group:before{content:'\\e803'}.formbuilder-icon-radio-group:before{content:'\\e804'}.formbuilder-icon-rich-text:before{content:'\\e805'}.formbuilder-icon-select:before{content:'\\e806'}.formbuilder-icon-textarea:before{content:'\\e807'}.formbuilder-icon-text:before{content:'\\e808'}.formbuilder-icon-pencil:before{content:'\\e809'}.formbuilder-icon-file:before{content:'\\e80a'}.formbuilder-icon-hidden:before{content:'\\e80b'}.formbuilder-icon-cancel:before{content:'\\e80c'}.formbuilder-icon-button:before{content:'\\e80d'}.formbuilder-icon-header:before{content:'\\e80f'}.formbuilder-icon-paragraph:before{content:'\\e810'}.formbuilder-icon-number:before{content:'\\e811'}.formbuilder-icon-copy:before{content:'\\f24d'}.form-wrap.form-builder{position:relative}.form-wrap.form-builder *{box-sizing:border-box}.form-wrap.form-builder button,.form-wrap.form-builder input,.form-wrap.form-builder select,.form-wrap.form-builder textarea{font-family:inherit;font-size:inherit;line-height:inherit}.form-wrap.form-builder input{line-height:normal}.form-wrap.form-builder textarea{overflow:auto}.form-wrap.form-builder button,.form-wrap.form-builder input,.form-wrap.form-builder select,.form-wrap.form-builder textarea{font-family:inherit;font-size:inherit;line-height:inherit}.form-wrap.form-builder .btn-group{position:relative;display:inline-block;vertical-align:middle}.form-wrap.form-builder .btn-group>.btn{position:relative;float:left}.form-wrap.form-builder .btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.form-wrap.form-builder .btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.form-wrap.form-builder .btn-group .btn+.btn,.form-wrap.form-builder .btn-group .btn+.btn-group,.form-wrap.form-builder .btn-group .btn-group+.btn,.form-wrap.form-builder .btn-group .btn-group+.btn-group{margin-left:-1px}.form-wrap.form-builder .btn-group>.btn:last-child:not(:first-child),.form-wrap.form-builder .btn-group>.dropdown-toggle:not(:first-child),.form-wrap.form-builder .btn-group .input-group .form-control:last-child,.form-wrap.form-builder .btn-group .input-group-addon:last-child,.form-wrap.form-builder .btn-group .input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.form-wrap.form-builder .btn-group .input-group-btn:first-child>.btn:not(:first-child),.form-wrap.form-builder .btn-group .input-group-btn:last-child>.btn,.form-wrap.form-builder .btn-group .input-group-btn:last-child>.btn-group>.btn,.form-wrap.form-builder .btn-group .input-group-btn:last-child>.dropdown-toggle{border-top-left-radius:0;border-bottom-left-radius:0}.form-wrap.form-builder .btn-group>.btn.active,.form-wrap.form-builder .btn-group>.btn:active,.form-wrap.form-builder .btn-group>.btn:focus,.form-wrap.form-builder .btn-group>.btn:hover{z-index:2}.form-wrap.form-builder .btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border-radius:4px}.form-wrap.form-builder .btn.btn-lg{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.form-wrap.form-builder .btn.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.form-wrap.form-builder .btn.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.form-wrap.form-builder .btn.active,.form-wrap.form-builder .btn.btn-active,.form-wrap.form-builder .btn:active{background-image:none}.form-wrap.form-builder .input-group .form-control:last-child,.form-wrap.form-builder .input-group-addon:last-child,.form-wrap.form-builder .input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.form-wrap.form-builder .input-group-btn:first-child>.btn:not(:first-child),.form-wrap.form-builder .input-group-btn:last-child>.btn,.form-wrap.form-builder .input-group-btn:last-child>.btn-group>.btn,.form-wrap.form-builder .input-group-btn:last-child>.dropdown-toggle{border-top-left-radius:0;border-bottom-left-radius:0}.form-wrap.form-builder .input-group .form-control,.form-wrap.form-builder .input-group-addon,.form-wrap.form-builder .input-group-btn{display:table-cell}.form-wrap.form-builder .input-group-lg>.form-control,.form-wrap.form-builder .input-group-lg>.input-group-addon,.form-wrap.form-builder .input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333}.form-wrap.form-builder .input-group{position:relative;display:table;border-collapse:separate}.form-wrap.form-builder .input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.form-wrap.form-builder .form-control,.form-wrap.form-builder output{font-size:14px;line-height:1.42857143;display:block}.form-wrap.form-builder textarea.form-control{height:auto}.form-wrap.form-builder .form-control{height:34px;display:block;width:100%;padding:6px 12px;font-size:14px;line-height:1.42857143;border-radius:4px}.form-wrap.form-builder .form-control:focus{outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6)}.form-wrap.form-builder .form-group{margin-left:0px;margin-bottom:15px}.form-wrap.form-builder .btn,.form-wrap.form-builder .form-control{background-image:none}.form-wrap.form-builder .pull-right{float:right}.form-wrap.form-builder .pull-left{float:left}.form-wrap.form-builder .formbuilder-required,.form-wrap.form-builder .required-asterisk{color:#c10000}.form-wrap.form-builder .formbuilder-checkbox-group input[type='checkbox'],.form-wrap.form-builder .formbuilder-checkbox-group input[type='radio'],.form-wrap.form-builder .formbuilder-radio-group input[type='checkbox'],.form-wrap.form-builder .formbuilder-radio-group input[type='radio']{margin:0 4px 0 0}.form-wrap.form-builder .formbuilder-checkbox-inline,.form-wrap.form-builder .formbuilder-radio-inline{margin-right:8px;display:inline-block;vertical-align:middle;padding-left:0}.form-wrap.form-builder .formbuilder-checkbox-inline label input[type='text'],.form-wrap.form-builder .formbuilder-radio-inline label input[type='text']{margin-top:0}.form-wrap.form-builder .formbuilder-checkbox-inline:first-child,.form-wrap.form-builder .formbuilder-radio-inline:first-child{padding-left:0}.form-wrap.form-builder .formbuilder-autocomplete-list{background-color:#fff;display:none;list-style:none;padding:0;border:1px solid #ccc;border-width:0 1px 1px;position:absolute;z-index:20;max-height:200px;overflow-y:auto}.form-wrap.form-builder .formbuilder-autocomplete-list li{display:none;cursor:default;padding:5px;margin:0;transition:background-color 200ms ease-in-out}.form-wrap.form-builder .formbuilder-autocomplete-list li:hover,.form-wrap.form-builder .formbuilder-autocomplete-list li.active-option{background-color:rgba(0,0,0,0.075)}@keyframes PLACEHOLDER{0%{height:1px}100%{height:15px}}.form-wrap.form-builder .cb-wrap{width:26%;transition:transform 250ms}.form-wrap.form-builder .cb-wrap.pull-left .form-actions{float:left}.form-wrap.form-builder .cb-wrap h4{margin-top:0;color:#666}@media (max-width: 481px){.form-wrap.form-builder .cb-wrap{width:64px}.form-wrap.form-builder .cb-wrap h4{display:none}}.form-wrap.form-builder .frmb-control{margin:0;padding:0;border-radius:5px}.form-wrap.form-builder .frmb-control li{cursor:move;list-style:none;margin:0 0 -1px 0;padding:10px;text-align:left;background:#fff;-webkit-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;box-shadow:inset 0 0 0 1px #c5c5c5}.form-wrap.form-builder .frmb-control li .control-icon{width:16px;height:auto;margin-right:10px;margin-left:0.2em;display:inline-block}.form-wrap.form-builder .frmb-control li .control-icon img,.form-wrap.form-builder .frmb-control li .control-icon svg{max-width:100%;height:auto}.form-wrap.form-builder .frmb-control li:first-child{border-radius:5px 5px 0 0;margin-top:0}.form-wrap.form-builder .frmb-control li:last-child{border-radius:0 0 5px 5px}.form-wrap.form-builder .frmb-control li::before{margin-right:10px;font-size:16px}.form-wrap.form-builder .frmb-control li:hover{background-color:#f2f2f2}.form-wrap.form-builder .frmb-control li.ui-sortable-helper{border-radius:5px;transition:box-shadow 250ms;box-shadow:2px 2px 6px 0 #666;border:1px solid #fff}.form-wrap.form-builder .frmb-control li.ui-state-highlight{width:0;overflow:hidden;padding:0;margin:0;border:0 none}.form-wrap.form-builder .frmb-control li.moving{opacity:.6}.form-wrap.form-builder .frmb-control li.formbuilder-separator{background-color:transparent;box-shadow:none;padding:0;cursor:default}.form-wrap.form-builder .frmb-control li.formbuilder-separator hr{margin:10px 0}@media (max-width: 481px){.form-wrap.form-builder .frmb-control li::before{font-size:30px}.form-wrap.form-builder .frmb-control li span{display:none}}.form-wrap.form-builder .frmb-control.sort-enabled li.ui-state-highlight{box-shadow:none;height:0;width:100%;background:radial-gradient(ellipse at center, #545454 0%, rgba(0,0,0,0) 75%);border:0 none;-webkit-clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);visibility:visible;overflow:hidden;margin:1px 0 3px;animation:PLACEHOLDER 250ms forwards}.form-wrap.form-builder .formbuilder-mobile .form-actions{width:100%}.form-wrap.form-builder .formbuilder-mobile .form-actions button{width:100%;font-size:.85em !important;display:block !important;border-radius:0 !important;margin-top:-1px;margin-left:0 !important}.form-wrap.form-builder .formbuilder-mobile .form-actions button:first-child{border-radius:5px 5px 0 0 !important;margin-top:0 !important;border-bottom:0 none}.form-wrap.form-builder .formbuilder-mobile .form-actions button:last-child{border-radius:0 0 5px 5px !important}.form-wrap.form-builder .form-actions{float:right;margin-top:5px}.form-wrap.form-builder .form-actions button{border:0 none}.form-wrap.form-builder .stage-wrap{position:relative;padding:0;margin:0;width:calc(74% - 5px)}@media (max-width: 481px){.form-wrap.form-builder .stage-wrap{width:calc(100% - 64px)}}.form-wrap.form-builder .stage-wrap.empty{border:3px dashed #ccc;background-color:rgba(255,255,255,0.25)}.form-wrap.form-builder .stage-wrap.empty::after{content:attr(data-content);position:absolute;text-align:center;top:50%;left:0;width:100%;margin-top:-1em}.form-wrap.form-builder .frmb{list-style-type:none;min-height:200px;transition:background-color 500ms ease-in-out}.form-wrap.form-builder .frmb .formbuilder-required{color:#c10000}.form-wrap.form-builder .frmb.removing{overflow:hidden}.form-wrap.form-builder .frmb>li:hover{border-color:#66afe9;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,0.1),0 0 8px rgba(102,175,233,0.6)}.form-wrap.form-builder .frmb>li:hover .field-actions{opacity:1}.form-wrap.form-builder .frmb>li:hover li :hover{background:#fefefe}.form-wrap.form-builder .frmb li{position:relative;padding:6px;clear:both;margin-left:0;margin-bottom:3px;background-color:#fff;transition:background-color 250ms ease-in-out, margin-top 400ms}.form-wrap.form-builder .frmb li.hidden-field{background-color:rgba(255,255,255,0.6)}.form-wrap.form-builder .frmb li:first-child{border-top-right-radius:5px;border-top-left-radius:5px}.form-wrap.form-builder .frmb li:first-child .field-actions .btn:last-child{border-radius:0 5px 0 0}.form-wrap.form-builder .frmb li:last-child{border-bottom-right-radius:5px;border-bottom-left-radius:5px}.form-wrap.form-builder .frmb li.no-fields label{font-weight:400}@keyframes PLACEHOLDER{0%{height:0}100%{height:15px}}.form-wrap.form-builder .frmb li.frmb-placeholder,.form-wrap.form-builder .frmb li.ui-state-highlight{height:0;padding:0;background:radial-gradient(ellipse at center, #545454 0%, rgba(0,0,0,0) 75%);border:0 none;-webkit-clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);visibility:visible;overflow:hidden;margin-bottom:3px;animation:PLACEHOLDER 250ms forwards}.form-wrap.form-builder .frmb li.moving,.form-wrap.form-builder .frmb li.ui-sortable-helper{transition:box-shadow 500ms ease-in-out;box-shadow:2px 2px 6px 0 #666;border:1px solid #fff;border-radius:5px}.form-wrap.form-builder .frmb li.disabled-field{z-index:1;position:relative;overflow:visible}.form-wrap.form-builder .frmb li.disabled-field:hover .frmb-tt{display:inline-block}.form-wrap.form-builder .frmb li.disabled-field [type='checkbox']{float:left;margin-right:10px}.form-wrap.form-builder .frmb li.disabled-field h2{border-bottom:0 none}.form-wrap.form-builder .frmb li.disabled-field label{font-size:12px;font-weight:400;color:#666}.form-wrap.form-builder .frmb li.disabled-field .prev-holder{cursor:default;line-height:28px;padding-left:5px}.form-wrap.form-builder .frmb li .close-field{position:absolute;color:#666;left:50%;bottom:6px;background:#fff;border-top:1px solid #c5c5c5;border-left:1px solid #c5c5c5;border-right:1px solid #c5c5c5;transform:translateX(-50%);padding:0 5px;border-top-right-radius:3px;border-top-left-radius:3px;cursor:pointer;transition:background-color 250ms ease-in-out}.form-wrap.form-builder .frmb li .close-field:hover{text-decoration:none}.form-wrap.form-builder .frmb li.button-field h1,.form-wrap.form-builder .frmb li.button-field h2,.form-wrap.form-builder .frmb li.button-field h3,.form-wrap.form-builder .frmb li.button-field p,.form-wrap.form-builder .frmb li.button-field canvas,.form-wrap.form-builder .frmb li.button-field output,.form-wrap.form-builder .frmb li.button-field address,.form-wrap.form-builder .frmb li.button-field blockquote,.form-wrap.form-builder .frmb li.button-field .prev-holder,.form-wrap.form-builder .frmb li.header-field h1,.form-wrap.form-builder .frmb li.header-field h2,.form-wrap.form-builder .frmb li.header-field h3,.form-wrap.form-builder .frmb li.header-field p,.form-wrap.form-builder .frmb li.header-field canvas,.form-wrap.form-builder .frmb li.header-field output,.form-wrap.form-builder .frmb li.header-field address,.form-wrap.form-builder .frmb li.header-field blockquote,.form-wrap.form-builder .frmb li.header-field .prev-holder,.form-wrap.form-builder .frmb li.paragraph-field h1,.form-wrap.form-builder .frmb li.paragraph-field h2,.form-wrap.form-builder .frmb li.paragraph-field h3,.form-wrap.form-builder .frmb li.paragraph-field p,.form-wrap.form-builder .frmb li.paragraph-field canvas,.form-wrap.form-builder .frmb li.paragraph-field output,.form-wrap.form-builder .frmb li.paragraph-field address,.form-wrap.form-builder .frmb li.paragraph-field blockquote,.form-wrap.form-builder .frmb li.paragraph-field .prev-holder{margin:0}.form-wrap.form-builder .frmb li.button-field .field-label,.form-wrap.form-builder .frmb li.header-field .field-label,.form-wrap.form-builder .frmb li.paragraph-field .field-label{display:none}.form-wrap.form-builder .frmb li.button-field.editing .field-label,.form-wrap.form-builder .frmb li.header-field.editing .field-label,.form-wrap.form-builder .frmb li.paragraph-field.editing .field-label{display:block}.form-wrap.form-builder .frmb li.paragraph-field .fld-label{min-height:150px;overflow-y:auto}.form-wrap.form-builder .frmb li.checkbox-field .field-label{display:none}.form-wrap.form-builder .frmb li.deleting,.form-wrap.form-builder .frmb li.delete:hover,.form-wrap.form-builder .frmb li:hover li.delete:hover{background-color:#fdd}.form-wrap.form-builder .frmb li.deleting .close-field,.form-wrap.form-builder .frmb li.delete:hover .close-field,.form-wrap.form-builder .frmb li:hover li.delete:hover .close-field{background-color:#fdd}.form-wrap.form-builder .frmb li.deleting{z-index:20;pointer-events:none}.form-wrap.form-builder .frmb.disabled-field{padding:0 5px}.form-wrap.form-builder .frmb.disabled-field :hover{border-color:transparent}.form-wrap.form-builder .frmb.disabled-field .form-element{float:none;margin-bottom:10px;overflow:visible;padding:5px 0;position:relative}.form-wrap.form-builder .frmb .frm-holder{display:none}.form-wrap.form-builder .frmb .tooltip{left:20px}.form-wrap.form-builder .frmb .prev-holder{display:block}.form-wrap.form-builder .frmb .prev-holder .form-group{margin:0}.form-wrap.form-builder .frmb .prev-holder .ql-editor{min-height:125px}.form-wrap.form-builder .frmb .prev-holder .form-group>label:not([class='formbuilder-checkbox-label']){display:none}.form-wrap.form-builder .frmb .prev-holder select,.form-wrap.form-builder .frmb .prev-holder input[type='text'],.form-wrap.form-builder .frmb .prev-holder textarea,.form-wrap.form-builder .frmb .prev-holder input[type='number']{background-color:#fff;border:1px solid #ccc;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.form-wrap.form-builder .frmb .prev-holder input[type='color']{width:60px;padding:2px;display:inline-block}.form-wrap.form-builder .frmb .prev-holder input[type='date']{width:auto}.form-wrap.form-builder .frmb .prev-holder select[multiple]{height:auto}.form-wrap.form-builder .frmb .prev-holder label{font-weight:normal}.form-wrap.form-builder .frmb .prev-holder input[type='number']{width:auto}.form-wrap.form-builder .frmb .prev-holder input[type='color']{width:60px;padding:2px;display:inline-block}.form-wrap.form-builder .frmb .required-asterisk{display:none}.form-wrap.form-builder .frmb .field-label,.form-wrap.form-builder .frmb .legend{color:#666;margin-bottom:5px;line-height:27px;font-size:16px;font-weight:normal}.form-wrap.form-builder .frmb .disabled-field .field-label{display:block}.form-wrap.form-builder .frmb .other-option:checked+label input{display:inline-block}.form-wrap.form-builder .frmb .other-val{margin-left:5px;display:none}.form-wrap.form-builder .frmb .field-actions{position:absolute;top:0;right:0;opacity:0}.form-wrap.form-builder .frmb .field-actions a::before{margin:0}.form-wrap.form-builder .frmb .field-actions a:hover{text-decoration:none;color:#000}.form-wrap.form-builder .frmb .field-actions .btn{display:inline-block;width:32px;height:32px;padding:0 6px;border-radius:0;border-color:#c5c5c5;background-color:#fff;color:#c5c5c5;line-height:32px;font-size:16px;border-width:0 0 1px 1px}.form-wrap.form-builder .frmb .field-actions .btn:first-child{border-bottom-left-radius:5px}.form-wrap.form-builder .frmb .field-actions .toggle-form:hover{background-color:#65aac6;color:#fff}.form-wrap.form-builder .frmb .field-actions .copy-button:hover{background-color:#6fc665;color:#fff}.form-wrap.form-builder .frmb .field-actions .del-button:hover{background-color:#c66865;color:#fff}.form-wrap.form-builder .frmb .option-actions{text-align:right;margin-top:10px;width:100%;margin-left:2%}.form-wrap.form-builder .frmb .option-actions button,.form-wrap.form-builder .frmb .option-actions a{background:#fff;padding:5px 10px;border:1px solid #c5c5c5;font-size:14px;border-radius:5px;cursor:default}.form-wrap.form-builder .frmb .sortable-options-wrap{width:81.33333333%;display:inline-block}.form-wrap.form-builder .frmb .sortable-options-wrap label{font-weight:normal}@media (max-width: 481px){.form-wrap.form-builder .frmb .sortable-options-wrap{display:block;width:100%}}.form-wrap.form-builder .frmb .radio-group-field .sortable-options li:nth-child(2) .remove{display:none}.form-wrap.form-builder .frmb .sortable-options{display:inline-block;width:100%;margin-left:2%;background:#c5c5c5;margin-bottom:0;border-radius:5px;list-style:none;padding:0}.form-wrap.form-builder .frmb .sortable-options>li{display:flex;cursor:move;margin:1px;padding-right:28px}.form-wrap.form-builder .frmb .sortable-options>li:nth-child(1) .remove{display:none}.form-wrap.form-builder .frmb .sortable-options>li .remove{position:absolute;opacity:1;right:8px;height:18px;width:18px;top:14px;font-size:12px;padding:0;color:#c10000}.form-wrap.form-builder .frmb .sortable-options>li .remove::before{margin:0}.form-wrap.form-builder .frmb .sortable-options>li .remove:hover{background-color:#c10000;text-decoration:none;color:#fff}.form-wrap.form-builder .frmb .sortable-options .option-selected{margin:0;width:5%}.form-wrap.form-builder .frmb .sortable-options input[type='text']{width:calc(44.5% - 17px);margin:0 3px;float:none}.form-wrap.form-builder .frmb .form-field .form-group{width:100%;clear:left;float:none}.form-wrap.form-builder .frmb .col-md-6 .form-elements,.form-wrap.form-builder .frmb .col-md-8 .form-elements{width:100%}.form-wrap.form-builder .frmb .field-options .add-area .add{clear:both}.form-wrap.form-builder .frmb .style-wrap button.selected{border:1px solid #000;margin-top:0;margin-right:1px;box-shadow:0 0 0 1px #fff inset;padding:1px 5px}.form-wrap.form-builder .frmb .form-elements{padding:10px 5px;background:#f7f7f7;border-radius:3px;margin:0;border:1px solid #c5c5c5}.form-wrap.form-builder .frmb .form-elements .input-wrap{width:81.33333333%;margin-left:2%;float:left}.form-wrap.form-builder .frmb .form-elements .input-wrap>input[type='checkbox']{margin-top:8px}.form-wrap.form-builder .frmb .form-elements .btn-group{margin-left:2%}.form-wrap.form-builder .frmb .form-elements .add{clear:both}.form-wrap.form-builder .frmb .form-elements [contenteditable],.form-wrap.form-builder .frmb .form-elements select[multiple]{height:auto}.form-wrap.form-builder .frmb .form-elements [contenteditable].form-control,.form-wrap.form-builder .frmb .form-elements input[type='text'],.form-wrap.form-builder .frmb .form-elements input[type='number'],.form-wrap.form-builder .frmb .form-elements input[type='date'],.form-wrap.form-builder .frmb .form-elements input[type='color'],.form-wrap.form-builder .frmb .form-elements textarea,.form-wrap.form-builder .frmb .form-elements select{transition:background 250ms ease-in-out;padding:6px 12px;border:1px solid #c5c5c5;background-color:#fff}@media (max-width: 481px){.form-wrap.form-builder .frmb .form-elements .input-wrap{width:100%;margin-left:0;float:none}}.form-wrap.form-builder .frmb .form-elements input[type='number']{width:auto}.form-wrap.form-builder .frmb .form-elements .btn-group{margin-left:2%}.col-md-6 .form-wrap.form-builder .frmb .form-elements .false-label,.col-md-8 .form-wrap.form-builder .frmb .form-elements .false-label,.col-md-6 .form-wrap.form-builder .frmb .form-elements label,.col-md-8 .form-wrap.form-builder .frmb .form-elements label{display:block}.form-wrap.form-builder .frmb .form-elements .false-label:first-child,.form-wrap.form-builder .frmb .form-elements label:first-child{width:16.66666667%;padding-top:7px;margin-bottom:0;text-align:right;font-weight:700;float:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:capitalize}@media (max-width: 481px){.form-wrap.form-builder .frmb .form-elements .false-label:first-child,.form-wrap.form-builder .frmb .form-elements label:first-child{display:block;width:auto;float:none;text-align:left}.form-wrap.form-builder .frmb .form-elements .false-label:first-child.empty-label,.form-wrap.form-builder .frmb .form-elements label:first-child.empty-label{display:none}}.form-wrap.form-builder .frmb .form-elements .false-label.multiple,.form-wrap.form-builder .frmb .form-elements .false-label.required-label,.form-wrap.form-builder .frmb .form-elements .false-label.toggle-label,.form-wrap.form-builder .frmb .form-elements .false-label.roles-label,.form-wrap.form-builder .frmb .form-elements .false-label.other-label,.form-wrap.form-builder .frmb .form-elements label.multiple,.form-wrap.form-builder .frmb .form-elements label.required-label,.form-wrap.form-builder .frmb .form-elements label.toggle-label,.form-wrap.form-builder .frmb .form-elements label.roles-label,.form-wrap.form-builder .frmb .form-elements label.other-label{text-align:left;float:none;margin-bottom:-3px;font-weight:400;width:calc(81.3333% - 23px)}.form-wrap.form-builder .frmb .form-elements input.error{border:1px solid #c10000}.form-wrap.form-builder .frmb .form-elements input.fld-maxlength{width:75px}.form-wrap.form-builder .frmb .form-elements input.field-error{background:#fefefe;border:1px solid #c5c5c5}.form-wrap.form-builder .frmb .form-elements label em{display:block;font-weight:400;font-size:0.75em}.form-wrap.form-builder .frmb .form-elements label.maxlength-label{line-height:1em}.form-wrap.form-builder .frmb .form-elements .available-roles{display:none;padding:10px;margin:10px 0;background:#e6e6e6;box-shadow:inset 0 0 2px 0 #b3b3b3}@media (max-width: 481px){.form-wrap.form-builder .frmb .form-elements .available-roles{margin-left:0}}.form-wrap.form-builder .frmb .form-elements .available-roles label{font-weight:400;width:auto;float:none;display:inline}.form-wrap.form-builder .frmb .form-elements .available-roles input{display:inline;top:auto}.form-wrap.form-builder .autocomplete-field .sortable-options .option-selected{display:none}.form-wrap.form-builder .formbuilder-mobile .field-actions{opacity:1}.form-wrap.form-builder *[tooltip]{position:relative}.form-wrap.form-builder *[tooltip]:hover:after{background:rgba(0,0,0,0.9);border-radius:5px 5px 5px 0;bottom:23px;color:#fff;content:attr(tooltip);padding:10px 5px;position:absolute;z-index:98;left:2px;width:230px;text-shadow:none;font-size:12px;line-height:1.5em;cursor:default}.form-wrap.form-builder *[tooltip]:hover:before{border:solid;border-color:#222 transparent;border-width:6px 6px 0;bottom:17px;content:'';left:2px;position:absolute;z-index:99;cursor:default}.form-wrap.form-builder .tooltip-element{visibility:visible;color:#fff;background:#000;width:16px;height:16px;border-radius:8px;display:inline-block;text-align:center;line-height:16px;margin:0 5px;font-size:12px;cursor:default}.form-wrap.form-builder .kc-toggle{padding-left:0 !important}.form-wrap.form-builder .kc-toggle span{position:relative;width:48px;height:24px;background:#e6e6e6;display:inline-block;border-radius:4px;border:1px solid #ccc;padding:2px;overflow:hidden;float:left;margin-right:5px;will-change:transform}.form-wrap.form-builder .kc-toggle span::after,.form-wrap.form-builder .kc-toggle span::before{position:absolute;display:inline-block;top:0}.form-wrap.form-builder .kc-toggle span::after{position:relative;content:'';width:50%;height:100%;left:0;border-radius:3px;background:linear-gradient(to bottom, #fff 0%, #ccc 100%);border:1px solid #999;transition:transform 100ms;transform:translateX(0)}.form-wrap.form-builder .kc-toggle span::before{border-radius:4px;top:2px;left:2px;content:'';width:calc(100% - 4px);height:18px;box-shadow:0 0 1px 1px #b3b3b3 inset;background-color:transparent}.form-wrap.form-builder .kc-toggle input{height:0;overflow:hidden;width:0;opacity:0;pointer-events:none;margin:0}.form-wrap.form-builder .kc-toggle input:checked+span::after{transform:translateX(100%)}.form-wrap.form-builder .kc-toggle input:checked+span::before{background-color:#6fc665}.form-wrap.form-builder::after{content:'';display:table;clear:both}.cb-wrap,.stage-wrap{vertical-align:top}.cb-wrap.pull-right,.stage-wrap.pull-right{float:right}.cb-wrap.pull-left,.stage-wrap.pull-left{float:left}.form-elements,.form-group,.multi-row span,textarea{display:block}.form-elements::after,.form-group::after{content:'.';display:block;height:0;clear:both;visibility:hidden}.form-elements .field-options div:hover,.frmb .legend,.frmb .prev-holder{cursor:move}.frmb-tt{display:none;position:absolute;top:0;left:0;border:1px solid #262626;background-color:#666;border-radius:5px;padding:5px;color:#fff;z-index:20;text-align:left;font-size:12px;pointer-events:none}.frmb-tt::before{border-color:#262626 transparent;bottom:-11px}.frmb-tt::before,.frmb-tt::after{content:'';position:absolute;border-style:solid;border-width:10px 10px 0;border-color:#666 transparent;display:block;width:0;z-index:1;margin-left:-10px;bottom:-10px;left:20px}.frmb-tt a{text-decoration:underline;color:#fff}.frmb li:hover .del-button,.frmb li:hover .toggle-form,.formbuilder-mobile .frmb li .del-button,.formbuilder-mobile .frmb li .toggle-form{opacity:1}.frmb-xml .ui-dialog-content{white-space:pre-wrap;word-wrap:break-word;font-size:12px;padding:0 30px;margin-top:0}.toggle-form{opacity:0}.toggle-form:hover{border-color:#ccc}.toggle-form::before{margin:0}.formb-field-vars .copy-var{display:inline-block;width:24px;height:24px;background:#b3b3b3;text-indent:-9999px}.ui-button .ui-button-text{line-height:0}.form-builder-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5);display:none;z-index:10}.form-builder-overlay.visible{display:block}.form-builder-dialog{position:absolute;border-radius:5px;background:#fff;z-index:20;transform:translate(-50%, -50%);top:0;left:0;padding:10px;box-shadow:0 3px 10px #000;min-width:166px;max-height:80%;overflow-y:scroll}.form-builder-dialog h3{margin-top:0}.form-builder-dialog.data-dialog{width:65%;background-color:#23241f}.form-builder-dialog.data-dialog pre{background:none;border:0 none;box-shadow:none;margin:0;color:#f2f2f2}.form-builder-dialog.positioned{transform:translate(-50%, -100%)}.form-builder-dialog.positioned .button-wrap::before{content:'';width:0;height:0;border-left:15px solid transparent;border-right:15px solid transparent;border-top:10px solid #fff;position:absolute;left:50%;top:100%;transform:translate(-50%, 10px)}.form-builder-dialog .button-wrap{position:relative;margin-top:10px;text-align:right;clear:both}.form-builder-dialog .button-wrap .btn{margin-left:10px}\n", ""]), t.default = o;
  }, function (e, t, r) {
    var n = r(11),
        o = r(19),
        i = r(22),
        a = Math.max,
        l = Math.min;

    e.exports = function (e, t, r) {
      var s,
          u,
          c,
          f,
          d,
          p,
          m = 0,
          b = !1,
          h = !1,
          g = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");

      function v(t) {
        var r = s,
            n = u;
        return s = u = void 0, m = t, f = e.apply(n, r);
      }

      function y(e) {
        return m = e, d = setTimeout(x, t), b ? v(e) : f;
      }

      function w(e) {
        var r = e - p;
        return void 0 === p || r >= t || r < 0 || h && e - m >= c;
      }

      function x() {
        var e = o();
        if (w(e)) return A(e);
        d = setTimeout(x, function (e) {
          var r = t - (e - p);
          return h ? l(r, c - (e - m)) : r;
        }(e));
      }

      function A(e) {
        return d = void 0, g && s ? v(e) : (s = u = void 0, f);
      }

      function O() {
        var e = o(),
            r = w(e);

        if (s = arguments, u = this, p = e, r) {
          if (void 0 === d) return y(p);
          if (h) return clearTimeout(d), d = setTimeout(x, t), v(p);
        }

        return void 0 === d && (d = setTimeout(x, t)), f;
      }

      return t = i(t) || 0, n(r) && (b = !!r.leading, c = (h = "maxWait" in r) ? a(i(r.maxWait) || 0, t) : c, g = "trailing" in r ? !!r.trailing : g), O.cancel = function () {
        void 0 !== d && clearTimeout(d), m = 0, s = p = u = d = void 0;
      }, O.flush = function () {
        return void 0 === d ? f : A(o());
      }, O;
    };
  }, function (e, t, r) {
    var n = r(13);

    e.exports = function () {
      return n.Date.now();
    };
  }, function (e, t, r) {
    (function (t) {
      var r = "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(t) && t && t.Object === Object && t;
      e.exports = r;
    }).call(this, r(21));
  }, function (e, t) {
    var r;

    r = function () {
      return this;
    }();

    try {
      r = r || new Function("return this")();
    } catch (e) {
      "object" == (typeof window === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(window)) && (r = window);
    }

    e.exports = r;
  }, function (e, t, r) {
    var n = r(11),
        o = r(23),
        i = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        u = parseInt;

    e.exports = function (e) {
      if ("number" == typeof e) return e;
      if (o(e)) return NaN;

      if (n(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = n(t) ? t + "" : t;
      }

      if ("string" != typeof e) return 0 === e ? e : +e;
      e = e.replace(i, "");
      var r = l.test(e);
      return r || s.test(e) ? u(e.slice(2), r ? 2 : 8) : a.test(e) ? NaN : +e;
    };
  }, function (e, t, r) {
    var n = r(24),
        o = r(27);

    e.exports = function (e) {
      return "symbol" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e) || o(e) && "[object Symbol]" == n(e);
    };
  }, function (e, t, r) {
    var n = r(14),
        o = r(25),
        i = r(26),
        a = n ? n.toStringTag : void 0;

    e.exports = function (e) {
      return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? o(e) : i(e);
    };
  }, function (e, t, r) {
    var n = r(14),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        l = n ? n.toStringTag : void 0;

    e.exports = function (e) {
      var t = i.call(e, l),
          r = e[l];

      try {
        e[l] = void 0;
        var n = !0;
      } catch (e) {}

      var o = a.call(e);
      return n && (t ? e[l] = r : delete e[l]), o;
    };
  }, function (e, t) {
    var r = Object.prototype.toString;

    e.exports = function (e) {
      return r.call(e);
    };
  }, function (e, t) {
    e.exports = function (e) {
      return null != e && "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e);
    };
  },,,,,, function (t, r, n) {
    n.r(r);
    n(16);

    var o = n(15),
        i = n.n(o),
        a = n(4),
        l = {},
        s = function s(e) {
      this.formData = {}, this.formID = e, this.layout = "", l[e] = this;
    },
        u = n(2),
        c = n.n(u),
        f = n(5),
        d = n(10),
        p = n(0),
        m = n(3),
        b = n(1),
        h = n(6);

    function g(e, t) {
      var r;

      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (r = function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return v(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(e);
          if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(e, t);
        }(e)) || t && e && "number" == typeof e.length) {
          r && (e = r);
          var n = 0;
          return function () {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      return (r = e[Symbol.iterator]()).next.bind(r);
    }

    function v(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var r = 0, n = new Array(t); r < t; r++) {
        n[r] = e[r];
      }

      return n;
    }

    function y(e, t) {
      if (null == e) return {};
      var r,
          n,
          o = {},
          i = Object.keys(e);

      for (n = 0; n < i.length; n++) {
        r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
      }

      return o;
    }

    var w = function () {
      function t(e, t, r) {
        this.data = l[e], this.d = a.d[e], this.doCancel = !1, this.layout = t, this.handleKeyDown = this.handleKeyDown.bind(this), this.formBuilder = r;
      }

      var r = t.prototype;
      return r.startMoving = function (e, t) {
        t.item.show().addClass("moving"), this.doCancel = !0, this.from = t.item.parent();
      }, r.stopMoving = function (t, r) {
        r.item.removeClass("moving"), this.doCancel && (r.sender && e(r.sender).sortable("cancel"), this.from.sortable("cancel")), this.save(), this.doCancel = !1;
      }, r.beforeStop = function (e, t) {
        var r = m.a.opts,
            n = this.d.stage.childNodes.length - 1,
            o = [];
        this.stopIndex = t.placeholder.index() - 1, !r.sortableControls && t.item.parent().hasClass("frmb-control") && o.push(!0), r.prepend && o.push(0 === this.stopIndex), r.append && o.push(this.stopIndex + 1 === n), this.doCancel = o.some(function (e) {
          return !0 === e;
        });
      }, r.getTypes = function (t) {
        var r = {
          type: t.attr("type")
        },
            n = e(".fld-subtype", t).val();
        return n !== r.type && (r.subtype = n), r;
      }, r.fieldOptionData = function (t) {
        var r = [],
            n = e(".sortable-options li", t);
        return n.each(function (e) {
          var t = n[e],
              o = t.querySelectorAll("input[type=text], input[type=number], select"),
              i = t.querySelectorAll("input[type=checkbox], input[type=radio]"),
              a = {};
          Object(p.i)(o, function (e) {
            var t = o[e],
                r = t.dataset.attr;
            a[r] = t.value;
          }), Object(p.i)(i, function (e) {
            var t = i[e],
                r = t.getAttribute("data-attr");
            a[r] = t.checked;
          }), r.push(a);
        }), r;
      }, r.xmlSave = function (e) {
        var t = this.prepData(e),
            r = new XMLSerializer(),
            n = ["<fields>"];
        t.forEach(function (e) {
          var t = e.values,
              r = y(e, ["values"]),
              o = ["<field " + Object(p.C)(r) + ">"];

          if (a.e.includes(e.type)) {
            var i = t.map(function (e) {
              return Object(p.q)("option", e.label, e).outerHTML;
            });
            o = o.concat(i);
          }

          o.push("</field>"), n.push(o);
        }), n.push("</fields>");
        var o = Object(p.q)("form-template", Object(p.h)(n).join(""));
        return r.serializeToString(o);
      }, r.prepData = function (t) {
        var r = [],
            n = this.d,
            o = this;
        return 0 !== t.childNodes.length && Object(p.i)(t.childNodes, function (t, i) {
          var a = e(i);

          if (!a.hasClass("disabled-field")) {
            var l = o.getTypes(a),
                s = e(".roles-field:checked", i),
                u = s.map(function (e) {
              return s[e].value;
            }).get();
            if ((l = Object.assign({}, l, o.getAttrVals(i))).subtype) if ("quill" === l.subtype) {
              var c = l.name + "-preview";

              if (window.fbEditors.quill[c]) {
                var f = window.fbEditors.quill[c].instance.getContents();
                l.value = window.JSON.stringify(f.ops);
              }
            } else if ("tinymce" === l.subtype && window.tinymce) {
              var d = l.name + "-preview";

              if (window.tinymce.editors[d]) {
                var m = window.tinymce.editors[d];
                l.value = m.getContent();
              }
            }

            if (u.length && (l.role = u.join(",")), l.className = l.className || l.class, l.className) {
              var b = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(l.className);
              b && (l.style = b[1]);
            }

            (l = Object(p.A)(l)).type && l.type.match(n.optionFieldsRegEx) && (l.values = o.fieldOptionData(a)), r.push(l);
          }
        }), r;
      }, r.getData = function (e) {
        var t = this.data;
        if (e || (e = m.a.opts.formData), !e) return !1;
        var r = {
          xml: function xml(e) {
            return Array.isArray(e) ? e : Object(p.t)(e);
          },
          json: function json(e) {
            return "string" == typeof e ? window.JSON.parse(e) : e;
          }
        };
        return t.formData = r[m.a.opts.dataType](e) || [], t.formData;
      }, r.save = function (e) {
        var t = this,
            r = this.data,
            n = this.d.stage,
            o = {
          xml: function xml(e) {
            return t.xmlSave(n, e);
          },
          json: function json(e) {
            return window.JSON.stringify(t.prepData(n), null, e && "  ");
          }
        };
        return r.formData = o[m.a.opts.dataType](e), document.dispatchEvent(f.a.formSaved), r.formData;
      }, r.incrementId = function (e) {
        var t = e.lastIndexOf("-"),
            r = parseInt(e.substring(t + 1)) + 1;
        return e.substring(0, t) + "-" + r;
      }, r.getAttrVals = function (t) {
        var r = Object.create(null),
            n = t.querySelectorAll('[class*="fld-"]');
        return Object(p.i)(n, function (t) {
          var o = n[t],
              i = Object(p.c)(o.getAttribute("name")),
              a = [[o.attributes.contenteditable, function () {
            return "xml" === m.a.opts.dataType ? Object(p.g)(o.innerHTML) : o.innerHTML;
          }], ["checkbox" === o.type, function () {
            return o.checked;
          }], ["number" === o.type && "" !== o.value, function () {
            return Number(o.value);
          }], [o.attributes.multiple, function () {
            return e(o).val();
          }], [!0, function () {
            return o.value;
          }]].find(function (e) {
            return !!e[0];
          })[1]();
          r[i] = a;
        }), r;
      }, r.updatePreview = function (t) {
        var r = this.d,
            n = t.attr("class"),
            o = t[0];

        if (!n.includes("input-control")) {
          var i = t.attr("type"),
              l = e(".prev-holder", o),
              s = Object.assign({}, this.getAttrVals(o, s), {
            type: i
          });
          i.match(r.optionFieldsRegEx) && (s.values = [], s.multiple = e('[name="multiple"]', o).is(":checked"), e(".sortable-options li", o).each(function (t, r) {
            var n = {
              selected: e(".option-selected", r).is(":checked"),
              value: e(".option-value", r).val(),
              label: e(".option-label", r).val()
            };
            s.values.push(n);
          })), (s = Object(p.A)(s, !0)).className = this.classNames(o, s), t.data("fieldData", s);
          var u = h.a.lookup(s.type),
              c = u ? u.class : b.a.getClass(s.type, s.subtype),
              d = this.layout.build(c, s);
          Object(a.b)(l[0]), l[0].appendChild(d), d.dispatchEvent(f.a.fieldRendered);
        }
      }, r.disabledTT = function (e) {
        var t = e.querySelectorAll(".disabled-field");
        Object(p.i)(t, function (e) {
          var r = t[e],
              n = c.a.get("fieldNonEditable");

          if (n) {
            var o = Object(p.q)("p", n, {
              className: "frmb-tt"
            });
            r.appendChild(o), r.addEventListener("mousemove", function (e) {
              return function (e, t) {
                var r = t.field.getBoundingClientRect(),
                    n = e.clientX - r.left - 21,
                    o = e.clientY - r.top - t.tt.offsetHeight - 12;
                t.tt.style.transform = "translate(" + n + "px, " + o + "px)";
              }(e, {
                tt: o,
                field: r
              });
            });
          }
        });
      }, r.classNames = function (t, r) {
        var n = t.querySelector(".fld-className"),
            o = t.querySelector(".btn-style"),
            i = o && o.value;

        if (n) {
          var a = r.type,
              l = n.multiple ? e(n).val() : n.value.trim().split(" "),
              s = {
            button: "btn",
            submit: "btn"
          }[a];

          if (s && i) {
            for (var u = 0; u < l.length; u++) {
              var c = new RegExp("^" + s + "-.*", "g");
              l[u].match(c) ? l.splice(u, 1, s + "-" + i) : l.push(s + "-" + i);
            }

            l.push(s);
          }

          var f = Object(p.B)(l).join(" ").trim();
          return n.value = f, f;
        }
      }, r.closeConfirm = function (e, t) {
        e || (e = document.getElementsByClassName("form-builder-overlay")[0]), e && Object(a.f)(e), t || (t = document.getElementsByClassName("form-builder-dialog")[0]), t && Object(a.f)(t), document.removeEventListener("keydown", this.handleKeyDown, !1), document.dispatchEvent(f.a.modalClosed);
      }, r.handleKeyDown = function (e) {
        27 === (e.keyCode || e.which) && (e.preventDefault(), this.closeConfirm.call(this));
      }, r.editorLayout = function (e) {
        return {
          left: {
            stage: "pull-right",
            controls: "pull-left"
          },
          right: {
            stage: "pull-left",
            controls: "pull-right"
          }
        }[e] || "";
      }, r.showOverlay = function () {
        var e = this,
            t = Object(p.q)("div", null, {
          className: "form-builder-overlay"
        });
        return document.body.appendChild(t), t.classList.add("visible"), t.addEventListener("click", function (t) {
          var r = t.target;
          return e.closeConfirm(r);
        }, !1), document.addEventListener("keydown", this.handleKeyDown, !1), t;
      }, r.confirm = function (e, t, r, n) {
        void 0 === r && (r = !1), void 0 === n && (n = "");
        var o = this,
            i = c.a.current,
            a = o.showOverlay(),
            l = Object(p.q)("button", i.yes, {
          className: "yes btn btn-success btn-sm"
        }),
            s = Object(p.q)("button", i.no, {
          className: "no btn btn-danger btn-sm"
        });
        s.onclick = function () {
          o.closeConfirm(a);
        }, l.onclick = function () {
          t(), o.closeConfirm(a);
        };
        var u = Object(p.q)("div", [s, l], {
          className: "button-wrap"
        });
        n = "form-builder-dialog " + n;
        var f = Object(p.q)("div", [e, u], {
          className: n
        });
        if (r) f.classList.add("positioned");else {
          var d = document.documentElement;
          r = {
            pageX: Math.max(d.clientWidth, window.innerWidth || 0) / 2,
            pageY: Math.max(d.clientHeight, window.innerHeight || 0) / 2
          }, f.style.position = "fixed";
        }
        return f.style.left = r.pageX + "px", f.style.top = r.pageY + "px", document.body.appendChild(f), l.focus(), f;
      }, r.dialog = function (e, t, r) {
        void 0 === t && (t = !1), void 0 === r && (r = "");
        var n = document.documentElement.clientWidth,
            o = document.documentElement.clientHeight;
        this.showOverlay(), r = "form-builder-dialog " + r;
        var i = Object(p.q)("div", e, {
          className: r
        });
        return t ? i.classList.add("positioned") : (t = {
          pageX: Math.max(n, window.innerWidth || 0) / 2,
          pageY: Math.max(o, window.innerHeight || 0) / 2
        }, i.style.position = "fixed"), i.style.left = t.pageX + "px", i.style.top = t.pageY + "px", document.body.appendChild(i), document.dispatchEvent(f.a.modalOpened), -1 !== r.indexOf("data-dialog") && document.dispatchEvent(f.a.viewData), i;
      }, r.confirmRemoveAll = function (t) {
        var r = this,
            n = t.target.id.match(/frmb-\d{13}/)[0],
            o = document.getElementById(n),
            i = c.a.current,
            a = e("li.form-field", o),
            l = t.target.getBoundingClientRect(),
            s = document.body.getBoundingClientRect(),
            u = {
          pageX: l.left + l.width / 2,
          pageY: l.top - s.top - 12
        };
        a.length ? r.confirm(i.clearAllMessage, function () {
          r.removeAllFields.call(r, o), m.a.opts.notify.success(i.allFieldsRemoved), m.a.opts.onClearAll();
        }, u) : r.dialog(i.noFieldsToClear, u);
      }, r.removeAllFields = function (e, t) {
        var r = this;
        void 0 === t && (t = !0);
        var n = c.a.current,
            o = m.a.opts,
            i = e.querySelectorAll("li.form-field"),
            l = [];
        if (!i.length) return !1;

        if (o.prepend && l.push(!0), o.append && l.push(!0), l.some(function (e) {
          return !0 === e;
        }) || (e.classList.add("empty"), e.dataset.content = n.getStarted), t) {
          e.classList.add("removing");
          var s = 0;
          Object(p.i)(i, function (e) {
            return s += i[e].offsetHeight + 3;
          }), i[0].style.marginTop = -s + "px";
          var u = setTimeout(function () {
            Object(a.b)(e).classList.remove("removing"), r.save(), clearTimeout(u);
          }, 400);
        } else Object(a.b)(e), this.save();
      }, r.setFieldOrder = function (t) {
        if (!m.a.opts.sortableControls) return !1;
        var r = window,
            n = r.sessionStorage,
            o = r.JSON,
            i = [];
        return t.children().each(function (t, r) {
          var n = e(r).data("type");
          n && i.push(n);
        }), n && n.setItem("fieldOrder", o.stringify(i)), i;
      }, r.closeAllEdit = function () {
        var t = e("> li.editing", this.d.stage),
            r = e(".toggle-form", this.d.stage),
            n = e(".frm-holder", t);
        r.removeClass("open"), t.removeClass("editing"), e(".prev-holder", t).show(), n.hide();
      }, r.toggleEdit = function (t, r) {
        void 0 === r && (r = !0);
        var n = document.getElementById(t);
        if (!n) return n;
        var o = e(".frm-holder", n),
            i = e(".prev-holder", n);
        return n.classList.toggle("editing"), e(".toggle-form", n).toggleClass("open"), r ? (i.slideToggle(250), o.slideToggle(250)) : (i.toggle(), o.toggle()), this.updatePreview(e(n)), n.classList.contains("editing") ? (this.formBuilder.currentEditPanel = o[0], m.a.opts.onOpenFieldEdit(o[0]), document.dispatchEvent(f.a.fieldEditOpened)) : (m.a.opts.onCloseFieldEdit(o[0]), document.dispatchEvent(f.a.fieldEditClosed)), n;
      }, r.getStyle = function (e, t) {
        var r;
        return void 0 === t && (t = !1), window.getComputedStyle ? r = window.getComputedStyle(e, null) : e.currentStyle && (r = e.currentStyle), t ? r[t] : r;
      }, r.stickyControls = function () {
        var t = this.d,
            r = t.controls,
            n = t.stage,
            o = e(r).parent(),
            i = r.getBoundingClientRect(),
            a = n.getBoundingClientRect().top;
        e(window).scroll(function (t) {
          var l = e(t.target).scrollTop(),
              s = {
            top: 5,
            bottom: "auto",
            right: "auto",
            left: i.left
          },
              u = Object.assign({}, s, m.a.opts.stickyControls.offset);

          if (l > a) {
            var c = Object.assign({
              position: "sticky"
            }, u),
                f = r.getBoundingClientRect(),
                d = n.getBoundingClientRect(),
                p = f.top + f.height,
                b = d.top + d.height,
                h = p === b && f.top > l;
            p > b && f.top !== d.top && o.css({
              position: "absolute",
              top: "auto",
              bottom: 0,
              right: 0,
              left: "auto"
            }), (p < b || h) && o.css(c);
          } else r.parentElement.removeAttribute("style");
        });
      }, r.showData = function () {
        var e = this.getFormData(m.a.opts.dataType, !0);
        "xml" === m.a.opts.dataType && (e = Object(p.g)(e));
        var t = Object(p.q)("code", e, {
          className: "formData-" + m.a.opts.dataType
        });
        this.dialog(Object(p.q)("pre", t), null, "data-dialog");
      }, r.removeField = function (t, r) {
        void 0 === r && (r = 250);
        var n = !1,
            o = this,
            i = this.d.stage,
            a = i.getElementsByClassName("form-field");
        if (!a.length) return m.a.opts.notify.warning("No fields to remove"), !1;
        var l = t && document.getElementById(t);

        if (!t || !l) {
          var s = [].slice.call(a).map(function (e) {
            return e.id;
          });
          m.a.opts.notify.warning("fieldID required to remove specific fields."), m.a.opts.notify.warning("Removing last field since no ID was supplied."), m.a.opts.notify.warning("Available IDs: " + s.join(", ")), t = i.lastChild.id;
        }

        var u = e(l);
        if (!l) return m.a.opts.notify.warning("Field not found"), !1;
        u.slideUp(r, function () {
          u.removeClass("deleting"), u.remove(), n = !0, o.save(), i.childNodes.length || (i.classList.add("empty"), i.dataset.content = c.a.current.getStarted);
        });
        var d = m.a.opts.typeUserEvents[l.type];
        return d && d.onremove && d.onremove(l), document.dispatchEvent(f.a.fieldRemoved), n;
      }, r.processActionButtons = function (e) {
        var t = e.label,
            r = e.events,
            n = y(e, ["label", "events"]),
            o = t,
            i = this.data;
        o = o ? c.a.current[o] || o : n.id ? c.a.current[n.id] || Object(p.d)(n.id) : "", n.id ? n.id = i.formID + "-" + n.id + "-action" : n.id = i.formID + "-action-" + Math.round(1e3 * Math.random());
        var a = Object(p.q)("button", o, n);

        if (r) {
          var l = function l(e) {
            r.hasOwnProperty(e) && a.addEventListener(e, function (t) {
              return r[e](t);
            });
          };

          for (var s in r) {
            l(s);
          }
        }

        return a;
      }, r.processSubtypes = function (e) {
        var t = m.a.opts.disabledSubtypes;

        for (var r in e) {
          e.hasOwnProperty(r) && b.a.register(e[r], b.a.getClass(r), r);
        }

        var n = b.a.getRegisteredSubtypes(),
            o = Object.entries(n).reduce(function (e, r) {
          var n = r[0],
              o = r[1];
          return e[n] = t[n] && Object(p.y)(t[n], o) || o, e;
        }, {}),
            i = {};

        for (var a in o) {
          if (o.hasOwnProperty(a)) {
            for (var l, s = [], u = g(o[a]); !(l = u()).done;) {
              var c = l.value,
                  f = b.a.getClass(a, c),
                  d = f.mi18n("subtype." + c) || f.mi18n(c) || c;
              s.push({
                label: d,
                value: c
              });
            }

            i[a] = s;
          }
        }

        return i;
      }, r.editorUI = function (e) {
        var t = this.d,
            r = this.data,
            n = e || r.formID;
        t.editorWrap = Object(p.q)("div", null, {
          id: r.formID + "-form-wrap",
          className: "form-wrap form-builder " + Object(p.r)()
        }), t.stage = Object(p.q)("ul", null, {
          id: n,
          className: "frmb stage-wrap " + r.layout.stage
        }), t.controls = Object(p.q)("ul", null, {
          id: n + "-control-box",
          className: "frmb-control"
        });
        var o = this.formActionButtons();
        t.formActions = Object(p.q)("div", o, {
          className: "form-actions btn-group"
        });
      }, r.formActionButtons = function () {
        var e = this,
            t = m.a.opts;
        return t.actionButtons.map(function (r) {
          if (r.id && -1 === t.disabledActionButtons.indexOf(r.id)) return e.processActionButtons(r);
        }).filter(Boolean);
      }, r.processOptions = function (e) {
        var t = this,
            r = e.actionButtons,
            n = e.replaceFields,
            o = y(e, ["actionButtons", "replaceFields"]),
            i = o.fieldEditContainer;
        "string" == typeof o.fieldEditContainer && (i = document.querySelector(o.fieldEditContainer));
        var a = [{
          type: "button",
          id: "clear",
          className: "clear-all btn btn-danger",
          events: {
            click: t.confirmRemoveAll.bind(t)
          }
        }, {
          type: "button",
          label: "viewJSON",
          id: "data",
          className: "btn btn-default get-data",
          events: {
            click: t.showData.bind(t)
          }
        }, {
          type: "button",
          id: "save",
          className: "btn btn-primary save-template",
          events: {
            click: function click(e) {
              t.save(), m.a.opts.onSave(e, t.data.formData);
            }
          }
        }].concat(r);
        return o.fields = o.fields.concat(n), o.disableFields = o.disableFields.concat(n.map(function (e) {
          var t = e.type;
          return t && t;
        })), "xml" === o.dataType && (o.disableHTMLLabels = !0), m.a.opts = Object.assign({}, {
          actionButtons: a
        }, {
          fieldEditContainer: i
        }, o), m.a.opts;
      }, r.input = function (e) {
        return void 0 === e && (e = {}), Object(p.q)("input", null, e);
      }, r.getFormData = function (e, t) {
        void 0 === e && (e = "js"), void 0 === t && (t = !1);
        var r = this;
        return {
          js: function js() {
            return r.prepData(r.d.stage);
          },
          xml: function xml() {
            return r.xmlSave(r.d.stage);
          },
          json: function json(e) {
            return window.JSON.stringify(r.prepData(r.d.stage), null, e && "  ");
          }
        }[e](t);
      }, t;
    }(),
        x = (n(12), n(8)),
        A = function () {
      function e(e, t) {
        this.opts = e, this.dom = t.controls, this.custom = h.a, this.getClass = b.a.getClass, this.getRegistered = b.a.getRegistered, b.a.controlConfig = e.controlConfig || {}, this.init();
      }

      var t = e.prototype;
      return t.init = function () {
        this.setupControls(), this.appendControls();
      }, t.setupControls = function () {
        var e = this,
            t = this.opts;
        b.a.loadCustom(t.controls), Object.keys(t.fields).length && h.a.register(t.templates, t.fields);
        var r = b.a.getRegistered();
        this.registeredControls = r;
        var n = h.a.getRegistered();
        n && jQuery.merge(r, n);
        var o = b.a.getRegisteredSubtypes();
        this.registeredSubtypes = o, t.sortableControls && this.dom.classList.add("sort-enabled"), this.controlList = [], this.allControls = {};

        for (var i = 0; i < r.length; i++) {
          var a = r[i],
              l = h.a.lookup(a),
              s = void 0;
          if (l) s = l.class;else if (l = {}, !(s = b.a.getClass(a)) || !s.active(a)) continue;
          var u = l.icon || s.icon(a),
              c = l.label || s.label(a),
              f = u ? "" : l.iconClassName || "" + (x.a + a.replace(/-[\d]{4}$/, ""));
          u && (c = '<span class="control-icon">' + u + "</span>" + c);
          var d = Object(p.q)("li", Object(p.q)("span", c), {
            className: f + " input-control input-control-" + i
          });
          d.dataset.type = a, this.controlList.push(a), this.allControls[a] = d;
        }

        t.inputSets.length && t.inputSets.forEach(function (t, r) {
          var n = t.name,
              o = t.label;
          n = n || Object(p.n)(o), t.icon && (o = '<span class="control-icon">' + t.icon + "</span>" + o);
          var i = Object(p.q)("li", o, {
            className: "input-set-control input-set-" + r
          });
          i.dataset.type = n, e.controlList.push(n), e.allControls[n] = i;
        });
      }, t.orderFields = function (e) {
        var t,
            r = this.opts,
            n = r.controlOrder.concat(e);
        return window.sessionStorage && (r.sortableControls ? t = window.sessionStorage.getItem("fieldOrder") : window.sessionStorage.removeItem("fieldOrder")), t ? (t = window.JSON.parse(t), t = Object(p.B)(t.concat(e)), t = Object.keys(t).map(function (e) {
          return t[e];
        })) : t = Object(p.B)(n), t.forEach(function (e) {
          var r = new RegExp("-[\\d]{4}$");

          if (e.match(r)) {
            var n = t.indexOf(e.replace(r, ""));
            -1 !== n && (t.splice(t.indexOf(e), 1), t.splice(n + 1, t.indexOf(e), e));
          }
        }), r.disableFields.length && (t = t.filter(function (e) {
          return !r.disableFields.includes(e);
        })), t.filter(Boolean);
      }, t.appendControls = function () {
        var e = this,
            t = document.createDocumentFragment();
        Object(a.b)(this.dom), this.orderFields(this.controlList).forEach(function (r) {
          var n = e.allControls[r];
          n && t.appendChild(n);
        }), this.dom.appendChild(t);
      }, e;
    }();

    function O(e, t) {
      if (null == e) return {};
      var r,
          n,
          o = {},
          i = Object.keys(e);

      for (n = 0; n < i.length; n++) {
        r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
      }

      return o;
    }

    function j(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function k(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? j(Object(r), !0).forEach(function (t) {
          q(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function q(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var C = function C(e, t, r) {
      var n = this,
          o = this,
          l = c.a.current,
          u = "frmb-" + new Date().getTime(),
          b = new s(u),
          h = new a.a(u);
      e.layout || (e.layout = d.a);
      var g = new e.layout(e.layoutTemplates, !0),
          v = new w(u, g, o),
          y = p.q;
      e = v.processOptions(e), b.layout = v.editorLayout(e.controlPosition), v.editorUI(u), b.formID = u, b.lastID = b.formID + "-fld-0";
      var j = new A(e, h),
          q = m.a.subtypes = v.processSubtypes(e.subtypes),
          C = r(h.stage),
          E = r(h.controls);
      C.sortable({
        cursor: "move",
        opacity: .9,
        revert: 150,
        beforeStop: function beforeStop(e, t) {
          return v.beforeStop.call(v, e, t);
        },
        start: function start(e, t) {
          return v.startMoving.call(v, e, t);
        },
        stop: function stop(e, t) {
          return v.stopMoving.call(v, e, t);
        },
        cancel: ["input", "select", "textarea", ".disabled-field", ".form-elements", ".btn", "button", ".is-locked"].join(", "),
        placeholder: "frmb-placeholder"
      }), e.allowStageSort || C.sortable("disable"), E.sortable({
        helper: "clone",
        opacity: .9,
        connectWith: C,
        cancel: ".formbuilder-separator",
        cursor: "move",
        scroll: !1,
        placeholder: "ui-state-highlight",
        start: function start(e, t) {
          return v.startMoving.call(v, e, t);
        },
        stop: function stop(e, t) {
          return v.stopMoving.call(v, e, t);
        },
        revert: 150,
        beforeStop: function beforeStop(e, t) {
          return v.beforeStop.call(v, e, t);
        },
        distance: 3,
        update: function update(t, r) {
          if (v.doCancel) return !1;
          r.item.parent()[0] === h.stage ? (v.doCancel = !0, N(r.item)) : (v.setFieldOrder(E), v.doCancel = !e.sortableControls);
        }
      });

      var N = function N(t) {
        if (t[0].classList.contains("input-set-control")) {
          var r = [],
              n = e.inputSets.find(function (e) {
            return Object(p.n)(e.name || e.label) === t[0].dataset.type;
          });

          if (n && n.showHeader) {
            var o = {
              type: "header",
              subtype: "h2",
              id: n.name,
              label: n.label
            };
            r.push(o);
          }

          r.push.apply(r, n.fields), r.forEach(function (e) {
            T(e, !0), (v.stopIndex || 0 === v.stopIndex) && v.stopIndex++;
          });
        } else T(t, !0);
      },
          S = r(h.editorWrap),
          L = y("div", h.controls, {
        id: b.formID + "-cb-wrap",
        className: "cb-wrap " + b.layout.controls
      });

      e.showActionButtons && L.appendChild(h.formActions), S.append(h.stage, L), "textarea" !== t.type ? r(t).append(S) : r(t).replaceWith(S), r(h.controls).on("click", "li", function (e) {
        var t = e.target,
            n = r(t).closest("li");
        v.stopIndex = void 0, N(n), v.save.call(v);
      });

      var T = function T(t, n) {
        void 0 === n && (n = !1);
        var o = {};
        if (t instanceof jQuery) {
          if (o.type = t[0].dataset.type, o.type) {
            var i = j.custom.lookup(o.type);
            if (i) o = Object.assign({}, i);else {
              var a = j.getClass(o.type);
              o.label = a.label(o.type);
            }
          } else {
            var l = t[0].attributes;
            n || (o.values = t.children().map(function (e, t) {
              return {
                label: r(t).text(),
                value: r(t).attr("value"),
                selected: Boolean(r(t).attr("selected"))
              };
            }));

            for (var s = l.length - 1; s >= 0; s--) {
              o[l[s].name] = l[s].value;
            }
          }
        } else o = Object.assign({}, t);
        o.name || (o.name = Object(p.s)(o)), n && ["text", "number", "file", "date", "select", "textarea", "autocomplete"].includes(o.type) && (o.className = o.className || "form-control");
        var u = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(o.className);
        if (u && (o.style = u[1]), n) var c = setTimeout(function () {
          document.dispatchEvent(f.a.fieldAdded), clearTimeout(c);
        }, 10);
        V(o, n), e.onAddField(b.lastID, o), h.stage.classList.remove("empty");
      },
          D = function D(t) {
        var n, o;
        (t = v.getData(t)) && t.length ? (t.forEach(function (e) {
          return T(Object(p.A)(e));
        }), h.stage.classList.remove("empty")) : e.defaultFields && e.defaultFields.length ? (e.defaultFields.forEach(function (e) {
          return T(e);
        }), h.stage.classList.remove("empty")) : e.prepend || e.append || (h.stage.classList.add("empty"), h.stage.dataset.content = c.a.get("getStarted")), n = [], o = function o(t) {
          return y("li", e[t], {
            className: "disabled-field form-" + t
          });
        }, e.prepend && !r(".disabled-field.form-prepend", h.stage).length && (n.push(!0), C.prepend(o("prepend"))), e.append && !r(".disabled-field.form-.append", h.stage).length && (n.push(!0), C.append(o("append"))), v.disabledTT(h.stage), n.some(function (e) {
          return !0 === e;
        }) && h.stage.classList.remove("empty"), v.save();
      },
          B = function B(t) {
        var r,
            n = t.type,
            o = [],
            i = function (e) {
          var t = ["required", "label", "description", "placeholder", "className", "name", "access", "value"],
              r = !["header", "paragraph", "file", "autocomplete"].concat(h.optionFields).includes(e),
              n = {
            autocomplete: t.concat(["options", "requireValidOption"]),
            button: ["label", "subtype", "style", "className", "name", "value", "access"],
            checkbox: ["required", "label", "description", "toggle", "inline", "className", "name", "access", "other", "options"],
            text: t.concat(["subtype", "maxlength"]),
            date: t,
            file: t.concat(["subtype", "multiple"]),
            header: ["label", "subtype", "className", "access"],
            hidden: ["name", "value", "access"],
            paragraph: ["label", "subtype", "className", "access"],
            number: t.concat(["min", "max", "step"]),
            select: t.concat(["multiple", "options"]),
            textarea: t.concat(["subtype", "maxlength", "rows"])
          };
          e in j.registeredSubtypes && !(e in n) && (n[e] = t.concat(["subtype"])), n["checkbox-group"] = n.checkbox, n["radio-group"] = n.checkbox;
          var o = n[e];
          return "radio-group" === e && Object(p.v)("toggle", o), ["header", "paragraph", "button"].includes(e) && Object(p.v)("description", o), r || Object(p.v)("value", o), o || t;
        }(n),
            a = {
          required: function required() {
            return Q(t);
          },
          toggle: function toggle() {
            return M("toggle", t, {
              first: c.a.get("toggle")
            });
          },
          inline: function inline() {
            var e = {
              first: c.a.get("inline"),
              second: c.a.get("inlineDesc", n.replace("-group", ""))
            };
            return M("inline", t, e);
          },
          label: function label() {
            return H("label", t);
          },
          description: function description() {
            return H("description", t);
          },
          subtype: function subtype() {
            return U("subtype", t, q[n]);
          },
          style: function style() {
            return P(t.style);
          },
          placeholder: function placeholder() {
            return H("placeholder", t);
          },
          rows: function rows() {
            return z("rows", t);
          },
          className: function className(e) {
            return H("className", t, e);
          },
          name: function name(e) {
            return H("name", t, e);
          },
          value: function value() {
            return H("value", t);
          },
          maxlength: function maxlength() {
            return z("maxlength", t);
          },
          access: function access() {
            var n = ['<div class="available-roles" ' + (t.role ? 'style="display:block"' : "") + ">"];

            for (r in e.roles) {
              if (e.roles.hasOwnProperty(r)) {
                var o = "fld-" + b.lastID + "-roles-" + r,
                    i = {
                  type: "checkbox",
                  name: "roles[]",
                  value: r,
                  id: o,
                  className: "roles-field"
                };
                s.includes(r) && (i.checked = "checked"), n.push('<label for="' + o + '">'), n.push(v.input(i).outerHTML), n.push(" " + e.roles[r] + "</label>");
              }
            }

            n.push("</div>");
            var a = {
              first: c.a.get("roles"),
              second: c.a.get("limitRole"),
              content: n.join("")
            };
            return M("access", t, a);
          },
          other: function other() {
            return M("other", t, {
              first: c.a.get("enableOther"),
              second: c.a.get("enableOtherMsg")
            });
          },
          options: function options() {
            return function (e) {
              var t,
                  r = e.type,
                  n = e.values,
                  o = [y("a", c.a.get("addOption"), {
                className: "add add-opt"
              })],
                  i = [y("label", c.a.get("selectOptions"), {
                className: "false-label"
              })],
                  a = e.multiple || "checkbox-group" === r;
              if (n && n.length) t = n.map(function (e) {
                return Object.assign({}, {
                  selected: !1
                }, e);
              });else {
                var l = [1, 2, 3];
                ["checkbox-group", "checkbox"].includes(r) && (l = [1]);
                var s = (t = l.map(function (e) {
                  var t = c.a.get("optionCount", e);
                  return {
                    selected: !1,
                    label: t,
                    value: Object(p.n)(t)
                  };
                }))[0];
                s.hasOwnProperty("selected") && "radio-group" !== r && (s.selected = !0);
              }
              var u = y("div", o, {
                className: "option-actions"
              }),
                  f = y("ol", t.map(function (e, t) {
                var n = m.a.opts.onAddOption(e, {
                  type: r,
                  index: t,
                  isMultiple: a
                });
                return W(n, a);
              }), {
                className: "sortable-options"
              }),
                  d = y("div", [f, u], {
                className: "sortable-options-wrap"
              });
              return i.push(d), y("div", i, {
                className: "form-group field-options"
              }).outerHTML;
            }(t);
          },
          requireValidOption: function requireValidOption() {
            return M("requireValidOption", t, {
              first: " ",
              second: c.a.get("requireValidOption")
            });
          },
          multiple: function multiple() {
            var e = {
              default: {
                first: "Multiple",
                second: "set multiple attribute"
              },
              file: {
                first: c.a.get("multipleFiles"),
                second: c.a.get("allowMultipleFiles")
              },
              select: {
                first: " ",
                second: c.a.get("selectionsMessage")
              }
            };
            return M("multiple", t, e[n] || e.default);
          }
        },
            s = void 0 !== t.role ? t.role.split(",") : [];

        ["min", "max", "step"].forEach(function (e) {
          a[e] = function () {
            return z(e, t);
          };
        });
        var u = ["name", "className"];

        if (Object.keys(i).forEach(function (t) {
          var r = i[t],
              l = [!0],
              s = e.disabledAttrs.includes(r);

          if (e.typeUserDisabledAttrs[n]) {
            var c = e.typeUserDisabledAttrs[n];
            l.push(!c.includes(r));
          }

          if (e.typeUserAttrs[n]) {
            var f = Object.keys(e.typeUserAttrs[n]);
            l.push(!f.includes(r));
          }

          s && !u.includes(r) && l.push(!1), l.every(Boolean) && o.push(a[r](s));
        }), e.typeUserAttrs[n]) {
          var f = function (e, t) {
            var r = [],
                n = {
              array: I,
              string: F,
              number: z,
              boolean: function boolean(e, r) {
                var n,
                    o = !1;
                return "checkbox" === e.type ? o = Boolean(!!r.hasOwnProperty("value") && r.value) : t.hasOwnProperty(e) ? o = t[e] : (r.hasOwnProperty("value") || r.hasOwnProperty("checked")) && (o = r.value || r.checked || !1), M(e, k(k({}, r), {}, ((n = {})[e] = o, n)), {
                  first: r.label
                });
              }
            };

            for (var o in e) {
              if (e.hasOwnProperty(o)) {
                var i = R(e[o]),
                    a = c.a.get(o),
                    s = e[o],
                    u = s.value || "";
                s.value = t[o] || s.value || "", s.label && (l[o] = Array.isArray(s.label) ? c.a.get.apply(c.a, s.label) || s.label[0] : s.label), n[i] && r.push(n[i](o, s)), l[o] = a, s.value = u;
              }
            }

            return r.join("");
          }(e.typeUserAttrs[n], t);

          o.push(f);
        }

        return o.join("");
      };

      function R(e) {
        return [["array", function (e) {
          return !!e.options;
        }], ["boolean", function (e) {
          return "checkbox" === e.type;
        }], [_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e.value), function () {
          return !0;
        }]].find(function (t) {
          return t[1](e);
        })[0] || "string";
      }

      function F(e, t) {
        var r = t.class,
            n = t.className,
            o = O(t, ["class", "className"]),
            i = {
          id: e + "-" + b.lastID,
          title: o.description || o.label || e.toUpperCase(),
          name: e,
          type: o.type || "text",
          className: ["fld-" + e, (r || n || "").trim()]
        },
            a = '<label for="' + i.id + '">' + (l[e] || "") + "</label>";
        return ["checkbox", "checkbox-group", "radio-group"].includes(i.type) || i.className.push("form-control"), i = Object.assign({}, o, i), '<div class="form-group ' + e + '-wrap">' + a + ('<div class="input-wrap">' + ("<input " + Object(p.b)(i) + ">") + "</div>") + "</div>";
      }

      function I(e, t) {
        var r = t.multiple,
            n = t.options,
            o = t.label,
            i = t.value,
            a = t.class,
            s = t.className,
            u = O(t, ["multiple", "options", "label", "value", "class", "className"]),
            f = Object.keys(n).map(function (e) {
          var t = {
            value: e
          },
              r = n[e],
              o = Array.isArray(r) ? c.a.get.apply(c.a, r) || r[0] : r;
          return (Array.isArray(i) ? i.includes(e) : e === i) && (t.selected = null), y("option", o, t);
        }),
            d = {
          id: e + "-" + b.lastID,
          title: u.description || o || e.toUpperCase(),
          name: e,
          className: ("fld-" + e + " form-control " + (a || s || "")).trim()
        };
        r && (d.multiple = !0);
        var p = '<label for="' + d.id + '">' + l[e] + "</label>";
        return Object.keys(u).forEach(function (e) {
          d[e] = u[e];
        }), '<div class="form-group ' + e + '-wrap">' + p + ('<div class="input-wrap">' + y("select", f, d).outerHTML + "</div>") + "</div>";
      }

      var M = function M(e, t, r) {
        void 0 === r && (r = {});

        var n = function n(t) {
          return y("label", t, {
            for: e + "-" + b.lastID
          }).outerHTML;
        },
            o = {
          type: "checkbox",
          className: "fld-" + e,
          name: e,
          id: e + "-" + b.lastID
        };

        t[e] && (o.checked = !0);
        var i = [],
            a = [y("input", null, o).outerHTML];
        return r.first && i.push(n(r.first)), r.second && a.push(" ", n(r.second)), r.content && a.push(r.content), a = y("div", a, {
          className: "input-wrap"
        }).outerHTML, y("div", i.concat(a), {
          className: "form-group " + e + "-wrap"
        }).outerHTML;
      },
          P = function P(e) {
        var t = "";
        "undefined" === e && (e = "default");
        var r = "<label>" + l.style + "</label>";
        return t += v.input({
          value: e || "default",
          type: "hidden",
          className: "btn-style"
        }).outerHTML, t += '<div class="btn-group" role="group">', m.d.btn.forEach(function (r) {
          var n = ["btn-xs", "btn", "btn-" + r];
          e === r && n.push("selected");
          var o = y("button", c.a.get("styles.btn." + r), {
            value: r,
            type: "button",
            className: n.join(" ")
          }).outerHTML;
          t += o;
        }), (t = y("div", [r, t += "</div>"], {
          className: "form-group style-wrap"
        })).outerHTML;
      },
          z = function z(e, t) {
        var r = t.class,
            n = t.className,
            o = t.value,
            i = O(t, ["class", "className", "value"])[e] || o,
            a = c.a.get(e) || e,
            l = {
          type: "number",
          value: i,
          name: e,
          placeholder: c.a.get("placeholder." + e),
          className: ("fld-" + e + " form-control " + (r || n || "")).trim(),
          id: e + "-" + b.lastID
        },
            s = v.input(Object(p.A)(l)).outerHTML;
        return y("div", ['<label for="' + l.id + '">' + a + "</label>", '<div class="input-wrap">' + s + "</div>"], {
          className: "form-group " + e + "-wrap"
        }).outerHTML;
      },
          U = function U(e, t, r) {
        var n = r.map(function (r, n) {
          var o = Object.assign({
            label: l.option + " " + n,
            value: void 0
          }, r);
          return r.value === t[e] && (o.selected = !0), o = Object(p.A)(o), y("option", o.label, o);
        }),
            o = {
          id: e + "-" + b.lastID,
          name: e,
          className: "fld-" + e + " form-control"
        },
            i = c.a.get(e) || Object(p.d)(e) || "",
            a = y("label", i, {
          for: o.id
        }),
            s = y("select", n, o),
            u = y("div", s, {
          className: "input-wrap"
        });
        return y("div", [a, u], {
          className: "form-group " + o.name + "-wrap"
        }).outerHTML;
      },
          H = function H(t, r, n) {
        void 0 === n && (n = !1);
        var o = r[t] || "",
            i = c.a.get(t);
        "label" === t && (["paragraph"].includes(r.type) ? i = c.a.get("content") : o = Object(p.u)(o));
        var a = c.a.get("placeholders." + t) || "",
            l = "";

        if (![].some(function (e) {
          return !0 === e;
        })) {
          var s = {
            name: t,
            placeholder: a,
            className: "fld-" + t + " form-control",
            id: t + "-" + b.lastID
          },
              u = y("label", i, {
            for: s.id
          }).outerHTML;
          "label" !== t || e.disableHTMLLabels ? (s.value = o, s.type = "text", l += "<input " + Object(p.b)(s) + ">") : (s.contenteditable = !0, l += y("div", o, s).outerHTML);
          var f = '<div class="input-wrap">' + l + "</div>",
              d = n ? "none" : "block";
          "value" === t && (d = r.subtype && "quill" === r.subtype && "none"), l = y("div", [u, f], {
            className: "form-group " + t + "-wrap",
            style: "display: " + d
          });
        }

        return l.outerHTML;
      },
          Q = function Q(e) {
        var t = e.type,
            r = [],
            n = "";
        return ["header", "paragraph", "button"].includes(t) && r.push(!0), r.some(function (e) {
          return !0 === e;
        }) || (n = M("required", e, {
          first: c.a.get("required")
        })), n;
      },
          V = function V(t, n) {
        void 0 === n && (n = !0), b.lastID = v.incrementId(b.lastID);
        var i = t.type || "text",
            a = t.label || (n ? l.get(i) || c.a.get("label") : "");
        "hidden" === i && (a = c.a.get(i) + ": " + t.name);
        var s = e.disabledFieldButtons[i] || t.disabledFieldButtons,
            u = [y("a", null, {
          type: "remove",
          id: "del_" + b.lastID,
          className: "del-button btn " + x.a + "cancel delete-confirm",
          title: c.a.get("removeMessage")
        }), y("a", null, {
          type: "edit",
          id: b.lastID + "-edit",
          className: "toggle-form btn " + x.a + "pencil",
          title: c.a.get("hide")
        }), y("a", null, {
          type: "copy",
          id: b.lastID + "-copy",
          className: "copy-button btn " + x.a + "copy",
          title: c.a.get("copyButtonTooltip")
        })];
        s && Array.isArray(s) && (u = u.filter(function (e) {
          return !s.includes(e.type);
        }));
        var f = [y("div", u, {
          className: "field-actions"
        })];
        f.push(y("label", Object(p.u)(a), {
          className: "field-label"
        })), f.push(y("span", " *", {
          className: "required-asterisk",
          style: t.required ? "display:inline" : ""
        }));
        var d = {
          className: "tooltip-element",
          tooltip: t.description,
          style: t.description ? "display:inline-block" : "display:none"
        };
        f.push(y("span", "?", d)), f.push(y("div", "", {
          className: "prev-holder"
        }));
        var m = y("div", [B(t), y("a", c.a.get("close"), {
          className: "close-field"
        })], {
          className: "form-elements"
        }),
            g = y("div", m, {
          id: b.lastID + "-holder",
          className: "frm-holder",
          dataFieldId: b.lastID
        });
        o.currentEditPanel = g, f.push(g);
        var w = y("li", f, {
          class: i + "-field form-field",
          type: i,
          id: b.lastID
        }),
            A = r(w);
        A.data("fieldData", {
          attrs: t
        }), void 0 !== v.stopIndex ? r("> li", h.stage).eq(v.stopIndex).before(A) : C.append(A), r(".sortable-options", A).sortable({
          update: function update() {
            return v.updatePreview(A);
          }
        }), v.updatePreview(A), e.typeUserEvents[i] && e.typeUserEvents[i].onadd && e.typeUserEvents[i].onadd(w), n && (e.editOnAdd && (v.closeAllEdit(), v.toggleEdit(b.lastID, !1)), w.scrollIntoView && e.scrollToFieldOnAdd && w.scrollIntoView({
          behavior: "smooth"
        }));
      },
          W = function W(e, t) {
        var r = {
          selected: t ? "checkbox" : "radio"
        },
            n = {
          boolean: function boolean(e, t) {
            var n = {
              value: e,
              type: r[t] || "checkbox"
            };
            return e && (n.checked = !!e), ["input", null, n];
          },
          number: function number(e) {
            return ["input", null, {
              value: e,
              type: "number"
            }];
          },
          string: function string(e, t) {
            return ["input", null, {
              value: e,
              type: "text",
              placeholder: c.a.get("placeholder." + t) || ""
            }];
          },
          array: function array(e) {
            return ["select", e.map(function (e) {
              var t = e.label,
                  r = e.value;
              return y("option", t, {
                value: r
              });
            })];
          },
          object: function object(e) {
            return [e.tag, e.content, O(e, ["tag", "content"])];
          }
        };
        e = k(k({}, {
          selected: !1,
          label: "",
          value: ""
        }), e);
        var o = Object.entries(e).map(function (e) {
          var t = e[0],
              r = e[1],
              o = Object(p.k)(r),
              i = n[o](r, t),
              a = i[0],
              l = i[1],
              s = i[2],
              u = "option-" + t + " option-attr";
          return s["data-attr"] = t, s.className = s.className ? s.className + " " + u : u, y(a, l, s);
        }),
            i = {
          className: "remove btn " + x.a + "cancel",
          title: c.a.get("removeMessage")
        };
        return o.push(y("a", null, i)), y("li", o).outerHTML;
      },
          Y = [".form-elements input", ".form-elements select", ".form-elements textarea"].join(", ");

      C.on("change blur keyup click", Y, i()(function (e) {
        if (e) {
          if ([function (e) {
            var t = e.type,
                r = e.target;
            return "keyup" === t && "className" === r.name;
          }].some(function (t) {
            return t(e);
          })) return !1;
          v.updatePreview(r(e.target).closest(".form-field")), v.save.call(v);
        }
      }, 333, {
        leading: !1
      })), C.on("click touchstart", ".remove", function (t) {
        var n = r(t.target).parents(".form-field:eq(0)"),
            o = n[0],
            i = o.getAttribute("type"),
            a = r(t.target.parentElement);
        t.preventDefault(), o.querySelector(".sortable-options").childNodes.length <= 2 && !i.includes("checkbox") ? e.notify.error("Error: " + c.a.get("minOptionMessage")) : a.slideUp("250", function () {
          a.remove(), v.updatePreview(n), v.save.call(v);
        });
      }), C.on("touchstart", "input", function (e) {
        var t = r(n);
        if (!0 === e.handled) return !1;
        if ("checkbox" === t.attr("type")) t.trigger("click");else {
          t.focus();
          var o = t.val();
          t.val(o);
        }
      }), C.on("click touchstart", ".toggle-form, .close-field", function (e) {
        if (e.stopPropagation(), e.preventDefault(), !0 === e.handled) return !1;
        var t = r(e.target).parents(".form-field:eq(0)").attr("id");
        v.toggleEdit(t), e.handled = !0;
      }), C.on("dblclick", "li.form-field", function (e) {
        if (!["select", "input", "label"].includes(e.target.tagName.toLowerCase()) && "true" !== e.target.contentEditable && (e.stopPropagation(), e.preventDefault(), !0 !== e.handled)) {
          var t = "li" == e.target.tagName ? r(e.target).attr("id") : r(e.target).closest("li.form-field").attr("id");
          v.toggleEdit(t), e.handled = !0;
        }
      }), C.on("change", '[name="subtype"]', function (e) {
        var t = r(e.target).closest("li.form-field");
        r(".value-wrap", t).toggle("quill" !== e.target.value);
      });

      if (C.on("change", [".prev-holder input", ".prev-holder select", ".prev-holder textarea"].join(", "), function (e) {
        var t;

        if (!e.target.classList.contains("other-option")) {
          var r = Object(p.e)(e.target, ".form-field");

          if (["select", "checkbox-group", "radio-group"].includes(r.type)) {
            var n = r.getElementsByClassName("option-value");
            "select" === r.type ? Object(p.i)(n, function (t) {
              n[t].parentElement.childNodes[0].checked = e.target.value === n[t].value;
            }) : (t = document.getElementsByName(e.target.name), Object(p.i)(t, function (e) {
              n[e].parentElement.childNodes[0].checked = t[e].checked;
            }));
          } else {
            var o = document.getElementById("value-" + r.id);
            o && (o.value = e.target.value);
          }

          v.save.call(v);
        }
      }), Object(p.a)(h.stage, "keyup change", function (e) {
        var t = e.target;

        if (t.classList.contains("fld-label")) {
          var r = t.value || t.innerHTML;
          Object(p.e)(t, ".form-field").querySelector(".field-label").innerHTML = Object(p.u)(r);
        }
      }), C.on("keyup", "input.error", function (e) {
        var t = e.target;
        return r(t).removeClass("error");
      }), C.on("keyup", 'input[name="description"]', function (e) {
        var t = r(e.target).parents(".form-field:eq(0)"),
            n = r(".tooltip-element", t),
            o = r(e.target).val();
        if ("" !== o) {
          if (n.length) n.attr("tooltip", o).css("display", "inline-block");else {
            var i = '<span class="tooltip-element" tooltip="' + o + '">?</span>';
            r(".field-label", t).after(i);
          }
        } else n.length && n.css("display", "none");
      }), C.on("change", ".fld-multiple", function (e) {
        var t = e.target.checked ? "checkbox" : "radio",
            n = r(".option-selected", r(e.target).closest(".form-elements"));
        return n.each(function (e) {
          return n[e].type = t;
        }), t;
      }), C.on("blur", "input.fld-name", function (e) {
        e.target.value = Object(p.x)(e.target.value), "" === e.target.value ? r(e.target).addClass("field-error").attr("placeholder", c.a.get("cannotBeEmpty")) : r(e.target).removeClass("field-error");
      }), C.on("blur", "input.fld-maxlength", function (e) {
        e.target.value = Object(p.j)(e.target.value);
      }), C.on("click touchstart", "." + x.a + "copy", function (t) {
        t.preventDefault();

        var n = r(t.target).parent().parent("li"),
            o = function (t) {
          b.lastID = v.incrementId(b.lastID);
          var n = t.attr("id"),
              o = t.attr("type"),
              i = o + "-" + new Date().getTime(),
              a = t.clone();
          return r(".fld-name", a).val(i), a.find("[id]").each(function (e, t) {
            t.id = t.id.replace(n, b.lastID);
          }), a.find("[for]").each(function (e, t) {
            var r = t.getAttribute("for").replace(n, b.lastID);
            t.setAttribute("for", r);
          }), a.attr("id", b.lastID), a.attr("name", i), a.addClass("cloned"), r(".sortable-options", a).sortable(), e.typeUserEvents[o] && e.typeUserEvents[o].onclone && e.typeUserEvents[o].onclone(a[0]), a;
        }(n);

        o.insertAfter(n), v.updatePreview(o), v.save.call(v);
      }), C.on("click touchstart", ".delete-confirm", function (t) {
        t.preventDefault();
        var n = t.target.getBoundingClientRect(),
            o = document.body.getBoundingClientRect(),
            i = {
          pageX: n.left + n.width / 2,
          pageY: n.top - o.top - 12
        },
            a = r(t.target).parents(".form-field:eq(0)").attr("id"),
            l = r(document.getElementById(a));

        if (document.addEventListener("modalClosed", function () {
          l.removeClass("deleting");
        }, !1), e.fieldRemoveWarn) {
          var s = y("h3", c.a.get("warning")),
              u = y("p", c.a.get("fieldRemoveWarning"));
          v.confirm([s, u], function () {
            return v.removeField(a);
          }, i), l.addClass("deleting");
        } else v.removeField(a);
      }), C.on("click", ".style-wrap button", function (e) {
        var t = r(e.target),
            n = t.closest(".form-elements"),
            o = t.val(),
            i = r(".btn-style", n);
        i.val(o), t.siblings(".btn").removeClass("selected"), t.addClass("selected"), v.updatePreview(i.closest(".form-field")), v.save();
      }), C.on("click", ".fld-required", function (e) {
        r(e.target).closest(".form-field").find(".required-asterisk").toggle();
      }), C.on("click", "input.fld-access", function (e) {
        var t = r(e.target).closest(".form-field").find(".available-roles"),
            n = r(e.target);
        t.slideToggle(250, function () {
          n.is(":checked") || r("input[type=checkbox]", t).removeAttr("checked");
        });
      }), C.on("click", ".add-opt", function (e) {
        e.preventDefault();
        var t = r(e.target).closest(".form-field").attr("type"),
            n = r(e.target).closest(".field-options"),
            o = r('[name="multiple"]', n),
            i = r(".option-selected:eq(0)", n),
            a = !1;
        a = o.length ? o.prop("checked") : "checkbox" === i.attr("type");
        var l = r(".sortable-options", n),
            s = m.a.opts.onAddOption({
          selected: !1,
          label: "",
          value: ""
        }, {
          type: t,
          index: l.children().length,
          isMultiple: a
        });
        l.append(W(s, a));
      }), C.on("mouseover mouseout", ".remove, .del-button", function (e) {
        return r(e.target).closest("li").toggleClass("delete");
      }), D(), e.disableInjectedStyle) {
        var X = document.getElementsByClassName("formBuilder-injected-style");
        Object(p.i)(X, function (e) {
          return Object(a.f)(X[e]);
        });
      }

      return document.dispatchEvent(f.a.loaded), o.actions = {
        getFieldTypes: function getFieldTypes(t) {
          return t ? Object(p.y)(j.getRegistered(), e.disableFields) : j.getRegistered();
        },
        clearFields: function clearFields(e) {
          return v.removeAllFields(h.stage, e);
        },
        showData: v.showData.bind(v),
        save: function save(e) {
          v.save(e), m.a.opts.onSave(v.getFormData());
        },
        addField: function addField(e, t) {
          v.stopIndex = b.formData.length ? t : void 0, T(e);
        },
        removeField: v.removeField.bind(v),
        getData: v.getFormData.bind(v),
        setData: function setData(e) {
          v.stopIndex = void 0, v.removeAllFields(h.stage, !1), D(e);
        },
        setLang: function setLang(e) {
          c.a.setCurrent.call(c.a, e).then(function () {
            h.stage.dataset.content = c.a.get("getStarted"), j.init(), h.empty(h.formActions), v.formActionButtons().forEach(function (e) {
              return h.formActions.appendChild(e);
            });
          });
        },
        toggleFieldEdit: function toggleFieldEdit(e) {
          (Array.isArray(e) ? e : [e]).forEach(function (e) {
            ["number", "string"].includes(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e)) && ("number" == typeof e ? e = h.stage.children[e].id : /^frmb-/.test(e) || (e = h.stage.querySelector(e).id), v.toggleEdit(e));
          });
        },
        toggleAllFieldEdit: function toggleAllFieldEdit() {
          Object(p.i)(h.stage.children, function (e) {
            v.toggleEdit(h.stage.children[e].id);
          });
        },
        closeAllFieldEdit: v.closeAllEdit.bind(v),
        getCurrentFieldId: function getCurrentFieldId() {
          return b.lastID;
        }
      }, h.onRender(h.controls, function () {
        var t = setTimeout(function () {
          h.stage.style.minHeight = h.controls.clientHeight + "px", e.stickyControls.enable && v.stickyControls(C), clearTimeout(t);
        }, 0);
      }), o;
    },
        E = {
      init: function init(e, t) {
        var r = jQuery.extend({}, m.c, e, !0),
            n = r.i18n,
            o = O(r, ["i18n"]);
        m.a.opts = o;
        var i = jQuery.extend({}, m.b, n, !0);
        return E.instance = {
          actions: {
            getFieldTypes: null,
            addField: null,
            clearFields: null,
            closeAllFieldEdit: null,
            getData: null,
            removeField: null,
            save: null,
            setData: null,
            setLang: null,
            showData: null,
            toggleAllFieldEdit: null,
            toggleFieldEdit: null,
            getCurrentFieldId: null
          },

          get formData() {
            return E.instance.actions.getData && E.instance.actions.getData("json");
          },

          promise: new Promise(function (e, r) {
            c.a.init(i).then(function () {
              t.each(function (e) {
                var r = new C(o, t[e], jQuery);
                jQuery(t[e]).data("formBuilder", r), Object.assign(E, r.actions), E.instance.actions = r.actions;
              }), delete E.instance.promise, e(E.instance);
            }).catch(function (e) {
              r(e), o.notify.error(e);
            });
          })
        }, E.instance;
      }
    };

    jQuery.fn.formBuilder = function (e) {
      void 0 === e && (e = {});
      var t = "string" == typeof e;

      if (!t) {
        var r = E.init(e, this);
        return Object.assign(E, r), r;
      }

      if (E[e]) {
        if ("function" == typeof E[e]) {
          for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) {
            o[i - 1] = arguments[i];
          }

          return E[e].apply(this, o);
        }

        return E[e];
      }
    };
  }]);
}(jQuery);

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map