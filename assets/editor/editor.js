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
      editor_gallery_plugin: {
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
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: translations.category_multiple,
          id: "category_multiple",
          checked: checked,
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
        });
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
       * EditorJS image plugin 
       */

      var EditorImagePlugin = withState({
        checked: props.attributes.editor_image_plugin
      })(function (_ref4) {
        var checked = _ref4.checked,
            setState = _ref4.setState;
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
      })(function (_ref5) {
        var checked = _ref5.checked,
            setState = _ref5.setState;
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
      })(function (_ref6) {
        var checked = _ref6.checked,
            setState = _ref6.setState;
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
      })(function (_ref7) {
        var checked = _ref7.checked,
            setState = _ref7.setState;
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
      })(function (_ref8) {
        var checked = _ref8.checked,
            setState = _ref8.setState;
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
      })(function (_ref9) {
        var checked = _ref9.checked,
            setState = _ref9.setState;
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
      })(function (_ref10) {
        var checked = _ref10.checked,
            setState = _ref10.setState;
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
      })(function (_ref11) {
        var checked = _ref11.checked,
            setState = _ref11.setState;
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
      })(function (_ref12) {
        var checked = _ref12.checked,
            setState = _ref12.setState;
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
      })(function (_ref13) {
        var checked = _ref13.checked,
            setState = _ref13.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: "editor_table_plugin  pro_version"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: "Table block (PRO)",
          help: 'You need pro version.',
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
      })(function (_ref14) {
        var checked = _ref14.checked,
            setState = _ref14.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: "editor_warning_plugin  pro_version"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: "Warning block (PRO)",
          help: 'You need pro version.',
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
      /**
       * EditorJS gallery plugin 
       */

      var EditorGalleryPlugin = withState({
        checked: props.attributes.editor_gallery_plugin
      })(function (_ref15) {
        var checked = _ref15.checked,
            setState = _ref15.setState;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: "editor_gallery_plugin pro_version"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
          label: "Gallery block (PRO)",
          help: 'Will be soon',
          id: "editor_gallery_plugin",
          checked: checked,
          className: editor_pro_settings.gallery_block ? '' : "disabled",
          onChange: function onChange() {
            return setState(function (state) {
              props.setAttributes({
                editor_gallery_plugin: !state.checked
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
      })), props.attributes.post_category !== 'disable' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", null, translations.category_settings_title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "setting-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CategoryShowEmpty, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CategoryMultiple, null))), props.attributes.post_tags !== 'disable' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", null, translations.tags_settings_title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "setting-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TagsAddNew, null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
        className: "title"
      }, translations.editor_settings_title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "setting-wrap editor-settings"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorImagePlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorHeaderPlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorEmbedPlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorListPlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorChecklistPlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorQuotePlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorMarkerPlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorCodePlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorDelimiterPlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorWarningPlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorTablePlugin, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EditorGalleryPlugin, null)));
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