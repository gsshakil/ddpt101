module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



var CourseCard = function CourseCard() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-image"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://via.placeholder.com/150",
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    to: "course-details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Course Title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Categury"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-outline-info"
  }, "Join Course")));
};

/* harmony default export */ __webpack_exports__["a"] = (CourseCard);

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48);
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var PeopleFilter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PeopleFilter, _React$Component);

  function PeopleFilter() {
    _classCallCheck(this, PeopleFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(PeopleFilter).apply(this, arguments));
  }

  _createClass(PeopleFilter, [{
    key: "render",
    value: function render() {
      var TextFieldStyle = {
        width: '100%'
      };
      var CheckboxStyle = {
        marginBottom: '-10px'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "people-filter"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: TextFieldStyle,
        label: "Enter Keywords",
        margin: "normal"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: TextFieldStyle,
        label: "Enter Location",
        margin: "normal"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: TextFieldStyle,
        label: "Enter Skills",
        margin: "normal"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "occupation-filter"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
        component: "legend"
      }, "Select Specialities"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "2D Animation"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "3D Animation"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "3D Modeling"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Account Management"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Advertising"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Animation"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Apparel"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Architecture"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Art Direction"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Branding & Corporate Identity"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "CGI"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Commercial & Industrial Products"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Communication Design"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Compositing"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Concept Art"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Consumer Electronics"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Content Strategy"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Copywriting & Editing"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Costume Design"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Creative Direction"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Design Management"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Design Research"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Desktop & Office Products"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "DIY"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "E-Commerce"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Engineering"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Entertainment"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Event Design"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Exhibit Design"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Fabrication"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Fashion Design"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Game Design"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Graphic Design"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Illustration"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Information Architecture"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Interior Design"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: CheckboxStyle,
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Internet Applications"
      }))));
    }
  }]);

  return PeopleFilter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["a"] = (PeopleFilter);

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



var TestCard = function TestCard() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "test-card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "test-image"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://via.placeholder.com/150",
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/test-details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Test Title"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Categury"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-outline-info"
  }, "Taje Test")));
};

/* harmony default export */ __webpack_exports__["a"] = (TestCard);

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



var LearningPathCard = function LearningPathCard() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "learning-path-card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lpc-image"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://via.placeholder.com/150",
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/learning-path-details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Learning Path Title"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Categury"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "6 Courses, 7 Tests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis iusto accusantium consectetur voluptas suscipit quibusdam expedita nemo, ut, eius consequatur fugit necessitatibus distinctio laborum. Nostrum doloribus sed ab delectus eos?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-outline-info"
  }, "Join")));
};

/* harmony default export */ __webpack_exports__["a"] = (LearningPathCard);

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(45);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(46);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__(39);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__(50);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);

// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__(18);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(52);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: ./components/Common/PeopleFilter.js
var PeopleFilter = __webpack_require__(6);

// EXTERNAL MODULE: ./components/Academy/LearningPathCard.js
var LearningPathCard = __webpack_require__(90);

// EXTERNAL MODULE: ./components/Academy/CourseCard.js
var CourseCard = __webpack_require__(3);

// EXTERNAL MODULE: ./components/Academy/TestCard.js
var TestCard = __webpack_require__(69);

// CONCATENATED MODULE: ./components/Academy/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function TabContainer(props) {
  return external_react_default.a.createElement(Typography_default.a, {
    component: "div",
    style: {
      padding: 8 * 3
    }
  }, props.children);
}

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper
    }
  };
};

var Academy_AcademyLanding =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AcademyLanding, _React$Component);

  function AcademyLanding() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AcademyLanding);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AcademyLanding)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      valueSeacondaryTabsAcademy: 0
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeAcadmey", function (event, valueSeacondaryTabsAcademy) {
      _this.setState({
        valueSeacondaryTabsAcademy: valueSeacondaryTabsAcademy
      });
    });

    return _this;
  }

  _createClass(AcademyLanding, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          value = _this$state.value,
          valueSecondaryTabsNetwork = _this$state.valueSecondaryTabsNetwork,
          valueSeacondaryTabsJobs = _this$state.valueSeacondaryTabsJobs,
          valueSeacondaryTabsAcademy = _this$state.valueSeacondaryTabsAcademy;
      return external_react_default.a.createElement("div", {
        className: "academy-landing"
      }, external_react_default.a.createElement("div", {
        className: "top-banner"
      }, external_react_default.a.createElement("div", {
        className: "content"
      }, external_react_default.a.createElement("h1", null, "Discover Courses, Learning Paths and Preparation Tests"), external_react_default.a.createElement("p", {
        className: "m-b-sm"
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates unde alias incidunt deleniti fugiat iure quod perferendis officia labore corporis, quasi a accusamus soluta laudantium ipsa necessitatibus tenetur ducimus?"), external_react_default.a.createElement("button", {
        className: "btn btn-outline-light btn-lg"
      }, "Become an Instructor"))), external_react_default.a.createElement(AppBar_default.a, {
        position: "static",
        color: "default"
      }, external_react_default.a.createElement(Tabs_default.a, {
        value: valueSeacondaryTabsAcademy,
        onChange: this.handleChangeAcadmey,
        indicatorColor: "primary",
        textColor: "primary",
        scrollable: true,
        scrollButtons: "auto"
      }, external_react_default.a.createElement(Tab_default.a, {
        label: "Learning Paths"
      }), external_react_default.a.createElement(Tab_default.a, {
        label: "Courses"
      }), external_react_default.a.createElement(Tab_default.a, {
        label: "Tests"
      }))), valueSeacondaryTabsAcademy === 0 && external_react_default.a.createElement(TabContainer, null, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-3"
      }, external_react_default.a.createElement("div", {
        className: "filter-wrapper p-r"
      }, external_react_default.a.createElement(PeopleFilter["a" /* default */], null))), external_react_default.a.createElement("div", {
        className: "col-md-9"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(LearningPathCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(LearningPathCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(LearningPathCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(LearningPathCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(LearningPathCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(LearningPathCard["a" /* default */], null)))))), valueSeacondaryTabsAcademy === 1 && external_react_default.a.createElement(TabContainer, null, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-3"
      }, external_react_default.a.createElement("div", {
        className: "filter-wrapper p-r"
      }, external_react_default.a.createElement(PeopleFilter["a" /* default */], null))), external_react_default.a.createElement("div", {
        className: "col-md-9"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(CourseCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(CourseCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(CourseCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(CourseCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(CourseCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(CourseCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(CourseCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(CourseCard["a" /* default */], null)))))), valueSeacondaryTabsAcademy === 2 && external_react_default.a.createElement(TabContainer, null, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-3"
      }, external_react_default.a.createElement("div", {
        className: "filter-wrapper p-r"
      }, external_react_default.a.createElement(PeopleFilter["a" /* default */], null))), external_react_default.a.createElement("div", {
        className: "col-md-9"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(TestCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(TestCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(TestCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(TestCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(TestCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(TestCard["a" /* default */], null)), external_react_default.a.createElement("div", {
        className: "col-md-4 m-b-sm"
      }, external_react_default.a.createElement(TestCard["a" /* default */], null)))))));
    }
  }]);

  return AcademyLanding;
}(external_react_default.a.Component);

;
/* harmony default export */ var components_Academy = (Object(styles_["withStyles"])(styles)(Academy_AcademyLanding));
// CONCATENATED MODULE: ./pages/academy.js
function academy_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { academy_typeof = function _typeof(obj) { return typeof obj; }; } else { academy_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return academy_typeof(obj); }

function academy_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function academy_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function academy_createClass(Constructor, protoProps, staticProps) { if (protoProps) academy_defineProperties(Constructor.prototype, protoProps); if (staticProps) academy_defineProperties(Constructor, staticProps); return Constructor; }

function academy_possibleConstructorReturn(self, call) { if (call && (academy_typeof(call) === "object" || typeof call === "function")) { return call; } return academy_assertThisInitialized(self); }

function academy_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function academy_getPrototypeOf(o) { academy_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return academy_getPrototypeOf(o); }

function academy_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) academy_setPrototypeOf(subClass, superClass); }

function academy_setPrototypeOf(o, p) { academy_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return academy_setPrototypeOf(o, p); }




var academy_Academy =
/*#__PURE__*/
function (_React$Component) {
  academy_inherits(Academy, _React$Component);

  function Academy() {
    academy_classCallCheck(this, Academy);

    return academy_possibleConstructorReturn(this, academy_getPrototypeOf(Academy).apply(this, arguments));
  }

  academy_createClass(Academy, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Academy, null));
    }
  }]);

  return Academy;
}(external_react_default.a.Component);

/* harmony default export */ var academy = __webpack_exports__["default"] = (academy_Academy);

/***/ })

/******/ });