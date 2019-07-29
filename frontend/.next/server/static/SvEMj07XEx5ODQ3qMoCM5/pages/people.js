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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49);


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),
/* 49 */
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

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__(40);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/FormLabel"
var FormLabel_ = __webpack_require__(42);
var FormLabel_default = /*#__PURE__*/__webpack_require__.n(FormLabel_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__(47);

// EXTERNAL MODULE: external "@material-ui/core/FormGroup"
var FormGroup_ = __webpack_require__(43);
var FormGroup_default = /*#__PURE__*/__webpack_require__.n(FormGroup_);

// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__(19);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);

// EXTERNAL MODULE: external "@material-ui/core/FormHelperText"
var FormHelperText_ = __webpack_require__(48);

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__(39);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);

// CONCATENATED MODULE: ./components/Common/PeopleFilter.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var PeopleFilter_PeopleFilter =
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
      return external_react_default.a.createElement("div", {
        className: "people-filter"
      }, external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyle,
        label: "Enter Keywords",
        margin: "normal"
      }), external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyle,
        label: "Enter Location",
        margin: "normal"
      }), external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyle,
        label: "Enter Skills",
        margin: "normal"
      }), external_react_default.a.createElement("div", {
        className: "occupation-filter"
      }, external_react_default.a.createElement(FormLabel_default.a, {
        component: "legend"
      }, "Select Specialities"), external_react_default.a.createElement(FormGroup_default.a, null, external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "2D Animation"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "3D Animation"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "3D Modeling"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Account Management"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Advertising"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Animation"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Apparel"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Architecture"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Art Direction"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Branding & Corporate Identity"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "CGI"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Commercial & Industrial Products"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Communication Design"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Compositing"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Concept Art"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Consumer Electronics"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Content Strategy"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Copywriting & Editing"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Costume Design"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Creative Direction"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Design Management"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Design Research"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Desktop & Office Products"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "DIY"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "E-Commerce"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Engineering"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Entertainment"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Event Design"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Exhibit Design"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Fabrication"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Fashion Design"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Game Design"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Graphic Design"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Illustration"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Information Architecture"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Interior Design"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        style: CheckboxStyle,
        control: external_react_default.a.createElement(Checkbox_default.a, {
          color: "primary",
          value: "checkedA"
        }),
        label: "Internet Applications"
      }))));
    }
  }]);

  return PeopleFilter;
}(external_react_default.a.Component);

;
/* harmony default export */ var Common_PeopleFilter = (PeopleFilter_PeopleFilter);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(44);

// CONCATENATED MODULE: ./components/People/PeopleCard.js
function PeopleCard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PeopleCard_typeof = function _typeof(obj) { return typeof obj; }; } else { PeopleCard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PeopleCard_typeof(obj); }

function PeopleCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PeopleCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PeopleCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) PeopleCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) PeopleCard_defineProperties(Constructor, staticProps); return Constructor; }

function PeopleCard_possibleConstructorReturn(self, call) { if (call && (PeopleCard_typeof(call) === "object" || typeof call === "function")) { return call; } return PeopleCard_assertThisInitialized(self); }

function PeopleCard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PeopleCard_getPrototypeOf(o) { PeopleCard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PeopleCard_getPrototypeOf(o); }

function PeopleCard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PeopleCard_setPrototypeOf(subClass, superClass); }

function PeopleCard_setPrototypeOf(o, p) { PeopleCard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PeopleCard_setPrototypeOf(o, p); }




var PeopleCard_PeopleCard =
/*#__PURE__*/
function (_React$Component) {
  PeopleCard_inherits(PeopleCard, _React$Component);

  function PeopleCard() {
    PeopleCard_classCallCheck(this, PeopleCard);

    return PeopleCard_possibleConstructorReturn(this, PeopleCard_getPrototypeOf(PeopleCard).apply(this, arguments));
  }

  PeopleCard_createClass(PeopleCard, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "people-card"
      }, external_react_default.a.createElement("div", {
        className: "content"
      }, external_react_default.a.createElement("div", {
        className: "avatar"
      }, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "user-info"
      }, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: "/people-details"
      }, external_react_default.a.createElement("h2", {
        className: "name"
      }, "Jhon Doe")), external_react_default.a.createElement("p", {
        className: "occupation"
      }, "Architect, Serial Enterprenur"), external_react_default.a.createElement("p", {
        className: "location"
      }, "Dhaka, Bangladesh")), external_react_default.a.createElement("div", {
        className: "bio"
      }, external_react_default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit...."))), external_react_default.a.createElement("div", {
        className: "button-group"
      }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("button", {
        className: "btn btn-outline-info btn-lg"
      }, "Connect")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("button", {
        className: "btn btn-outline-success btn-lg"
      }, "Message")))));
    }
  }]);

  return PeopleCard;
}(external_react_default.a.Component);

;
/* harmony default export */ var People_PeopleCard = (PeopleCard_PeopleCard);
// CONCATENATED MODULE: ./components/People/index.js




var People_PeopleList = function PeopleList() {
  return external_react_default.a.createElement("div", {
    className: "people-list"
  }, external_react_default.a.createElement("div", {
    className: "top-banner"
  }, external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement("h1", null, "Connect with Creative Professionals"), external_react_default.a.createElement("p", {
    className: "m-b-sm"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates unde alias incidunt deleniti fugiat iure quod perferendis officia labore corporis, quasi a accusamus soluta laudantium ipsa necessitatibus tenetur ducimus?"), external_react_default.a.createElement("button", {
    className: "btn btn-outline-light btn-lg"
  }, "Create Your Profile"))), external_react_default.a.createElement("div", {
    className: "list-wrapper"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md-3 p-r"
  }, external_react_default.a.createElement("div", {
    className: "filter-wrapper"
  }, external_react_default.a.createElement(Common_PeopleFilter, null))))));
};

/* harmony default export */ var components_People = (People_PeopleList);
// CONCATENATED MODULE: ./pages/people.js
function people_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { people_typeof = function _typeof(obj) { return typeof obj; }; } else { people_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return people_typeof(obj); }

function people_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function people_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function people_createClass(Constructor, protoProps, staticProps) { if (protoProps) people_defineProperties(Constructor.prototype, protoProps); if (staticProps) people_defineProperties(Constructor, staticProps); return Constructor; }

function people_possibleConstructorReturn(self, call) { if (call && (people_typeof(call) === "object" || typeof call === "function")) { return call; } return people_assertThisInitialized(self); }

function people_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function people_getPrototypeOf(o) { people_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return people_getPrototypeOf(o); }

function people_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) people_setPrototypeOf(subClass, superClass); }

function people_setPrototypeOf(o, p) { people_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return people_setPrototypeOf(o, p); }





var people_People =
/*#__PURE__*/
function (_React$Component) {
  people_inherits(People, _React$Component);

  function People() {
    people_classCallCheck(this, People);

    return people_possibleConstructorReturn(this, people_getPrototypeOf(People).apply(this, arguments));
  }

  people_createClass(People, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_People, null));
    }
  }]);

  return People;
}(external_react_default.a.Component);

/* harmony default export */ var people = __webpack_exports__["default"] = (people_People);

/***/ })
/******/ ]);