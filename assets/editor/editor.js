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



(function (blocks, i18n, element, blockEditor, components, compose, editor_block_data) {
  var el = element.createElement,
      __ = i18n.__,
      AlignmentToolbar = blockEditor.AlignmentToolbar,
      FormToggle = components.FormToggle,
      Dropdown = components.Dropdown,
      Button = components.Button,
      BlockControls = blockEditor.BlockControls,
      SelectControl = components.SelectControl,
      withState = compose.withState,
      translations = editor_block_data.translations;
  blocks.registerBlockType('bfe/bfe-block', {
    title: __('Front Editor', 'front-editor'),
    icon: 'edit',
    category: 'common',
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
      post_tags: {
        type: 'string',
        default: 'display'
      }
    },
    example: {},
    edit: function edit(props) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "editor-block-settings"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
        className: "title"
      }, translations.title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "setting-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
        label: translations.post_status,
        value: props.attributes.editor_post_status //title={translations.post_status_desc}
        ,
        onChange: function onChange(value) {
          props.setAttributes({
            editor_post_status: value
          });
        },
        options: [{
          value: 'pending',
          label: translations.pending
        }, {
          value: 'publish',
          label: translations.publish
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
      })));
    },
    save: function save(props) {
      return null;
    }
  });
})(window.wp.blocks, window.wp.i18n, window.wp.element, wp.blockEditor, window.wp.components, window.wp.compose, window.editor_block_data);

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