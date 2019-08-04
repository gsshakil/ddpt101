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
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

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

/***/ 52:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Stepper");

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Step");

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/StepLabel");

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(45);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(46);

// EXTERNAL MODULE: external "@material-ui/core/Stepper"
var Stepper_ = __webpack_require__(57);
var Stepper_default = /*#__PURE__*/__webpack_require__.n(Stepper_);

// EXTERNAL MODULE: external "@material-ui/core/Step"
var Step_ = __webpack_require__(58);
var Step_default = /*#__PURE__*/__webpack_require__.n(Step_);

// EXTERNAL MODULE: external "@material-ui/core/StepLabel"
var StepLabel_ = __webpack_require__(59);
var StepLabel_default = /*#__PURE__*/__webpack_require__.n(StepLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(56);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(52);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__(40);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/FormLabel"
var FormLabel_ = __webpack_require__(42);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__(47);

// EXTERNAL MODULE: external "@material-ui/core/FormGroup"
var FormGroup_ = __webpack_require__(43);
var FormGroup_default = /*#__PURE__*/__webpack_require__.n(FormGroup_);

// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__(19);

// EXTERNAL MODULE: external "@material-ui/core/FormHelperText"
var FormHelperText_ = __webpack_require__(48);

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__(17);

// CONCATENATED MODULE: ./components/Products/ProductWizardStep1.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var ProductWizardStep1_ProductWizardStep1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductWizardStep1, _React$Component);

  function ProductWizardStep1() {
    _classCallCheck(this, ProductWizardStep1);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductWizardStep1).apply(this, arguments));
  }

  _createClass(ProductWizardStep1, [{
    key: "render",
    value: function render() {
      var TextFieldStyele = {
        width: '100%'
      };
      var HeadingStyle = {
        margin: '50px 0',
        padding: '10px 0',
        borderBottom: '3px solid #bf1e2d'
      };
      return external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "wizard-content"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-6 offset-md-3 text-center"
      }, external_react_default.a.createElement("h1", {
        style: HeadingStyle
      }, "PLEASE PROVIDE SOME BASIC INFORMATION OF THE PRODUCT"), external_react_default.a.createElement(FormGroup_default.a, null, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-6"
      }, external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyele,
        label: "Enter First Name",
        margin: "normal"
      })), external_react_default.a.createElement("div", {
        className: "col-md-6"
      }, external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyele,
        label: "Enter Last Name",
        margin: "normal"
      }))), external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyele,
        label: "Enter Occupation",
        margin: "normal"
      }), external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyele,
        label: "Enter Skills",
        margin: "normal"
      }), external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyele,
        label: "Enter Bio",
        margin: "normal"
      }))))));
    }
  }]);

  return ProductWizardStep1;
}(external_react_default.a.Component);

/* harmony default export */ var Products_ProductWizardStep1 = (ProductWizardStep1_ProductWizardStep1);
// CONCATENATED MODULE: ./components/Products/ProductWizardStep2.js
function ProductWizardStep2_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProductWizardStep2_typeof = function _typeof(obj) { return typeof obj; }; } else { ProductWizardStep2_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProductWizardStep2_typeof(obj); }

function ProductWizardStep2_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProductWizardStep2_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProductWizardStep2_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProductWizardStep2_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProductWizardStep2_defineProperties(Constructor, staticProps); return Constructor; }

function ProductWizardStep2_possibleConstructorReturn(self, call) { if (call && (ProductWizardStep2_typeof(call) === "object" || typeof call === "function")) { return call; } return ProductWizardStep2_assertThisInitialized(self); }

function ProductWizardStep2_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProductWizardStep2_getPrototypeOf(o) { ProductWizardStep2_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProductWizardStep2_getPrototypeOf(o); }

function ProductWizardStep2_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProductWizardStep2_setPrototypeOf(subClass, superClass); }

function ProductWizardStep2_setPrototypeOf(o, p) { ProductWizardStep2_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProductWizardStep2_setPrototypeOf(o, p); }












var ProductWizardStep2_ProductWizardStep2 =
/*#__PURE__*/
function (_React$Component) {
  ProductWizardStep2_inherits(ProductWizardStep2, _React$Component);

  function ProductWizardStep2() {
    ProductWizardStep2_classCallCheck(this, ProductWizardStep2);

    return ProductWizardStep2_possibleConstructorReturn(this, ProductWizardStep2_getPrototypeOf(ProductWizardStep2).apply(this, arguments));
  }

  ProductWizardStep2_createClass(ProductWizardStep2, [{
    key: "render",
    value: function render() {
      var TextFieldStyele = {
        width: '100%'
      };
      var HeadingStyle = {
        margin: '50px 0',
        padding: '10px 0',
        borderBottom: '3px solid #bf1e2d'
      };
      return external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "wizard-content"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-6 offset-md-3 text-center"
      }, external_react_default.a.createElement("h1", {
        style: HeadingStyle
      }, "PLEASE PROVIDE SOME BASIC INFORMATION OF THE PROJECT"), external_react_default.a.createElement(FormGroup_default.a, null, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-6"
      }, external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyele,
        label: "Enter First Name",
        margin: "normal"
      })), external_react_default.a.createElement("div", {
        className: "col-md-6"
      }, external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyele,
        label: "Enter Last Name",
        margin: "normal"
      }))), external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyele,
        label: "Enter Occupation",
        margin: "normal"
      }), external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyele,
        label: "Enter Skills",
        margin: "normal"
      }), external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyele,
        label: "Enter Bio",
        margin: "normal"
      }))))));
    }
  }]);

  return ProductWizardStep2;
}(external_react_default.a.Component);

/* harmony default export */ var Products_ProductWizardStep2 = (ProductWizardStep2_ProductWizardStep2);
// CONCATENATED MODULE: ./components/Products/ProductWizardStep3.js
function ProductWizardStep3_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProductWizardStep3_typeof = function _typeof(obj) { return typeof obj; }; } else { ProductWizardStep3_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProductWizardStep3_typeof(obj); }

function ProductWizardStep3_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProductWizardStep3_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProductWizardStep3_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProductWizardStep3_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProductWizardStep3_defineProperties(Constructor, staticProps); return Constructor; }

function ProductWizardStep3_possibleConstructorReturn(self, call) { if (call && (ProductWizardStep3_typeof(call) === "object" || typeof call === "function")) { return call; } return ProductWizardStep3_assertThisInitialized(self); }

function ProductWizardStep3_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProductWizardStep3_getPrototypeOf(o) { ProductWizardStep3_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProductWizardStep3_getPrototypeOf(o); }

function ProductWizardStep3_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProductWizardStep3_setPrototypeOf(subClass, superClass); }

function ProductWizardStep3_setPrototypeOf(o, p) { ProductWizardStep3_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProductWizardStep3_setPrototypeOf(o, p); }












var ProductWizardStep3_ProductWizardStep3 =
/*#__PURE__*/
function (_React$Component) {
  ProductWizardStep3_inherits(ProductWizardStep3, _React$Component);

  function ProductWizardStep3() {
    ProductWizardStep3_classCallCheck(this, ProductWizardStep3);

    return ProductWizardStep3_possibleConstructorReturn(this, ProductWizardStep3_getPrototypeOf(ProductWizardStep3).apply(this, arguments));
  }

  ProductWizardStep3_createClass(ProductWizardStep3, [{
    key: "render",
    value: function render() {
      var TextFieldStyele = {
        width: '100%'
      };
      var HeadingStyle = {
        margin: '50px 0',
        padding: '10px 0',
        borderBottom: '3px solid #bf1e2d'
      };
      return external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "wizard-content"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-6 offset-md-3 text-center"
      }, external_react_default.a.createElement("h1", {
        style: HeadingStyle
      }, "PLEASE PROVIDE SOME BASIC INFORMATION OF THE PROJECT"), external_react_default.a.createElement(FormGroup_default.a, null, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-6"
      }, external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyele,
        label: "Enter First Name",
        margin: "normal"
      })), external_react_default.a.createElement("div", {
        className: "col-md-6"
      }, external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyele,
        label: "Enter Last Name",
        margin: "normal"
      }))), external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyele,
        label: "Enter Occupation",
        margin: "normal"
      }), external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyele,
        label: "Enter Skills",
        margin: "normal"
      }), external_react_default.a.createElement(TextField_default.a, {
        style: TextFieldStyele,
        label: "Enter Bio",
        margin: "normal"
      }))))));
    }
  }]);

  return ProductWizardStep3;
}(external_react_default.a.Component);

/* harmony default export */ var Products_ProductWizardStep3 = (ProductWizardStep3_ProductWizardStep3);
// CONCATENATED MODULE: ./components/Products/ProductWizard.js
function ProductWizard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProductWizard_typeof = function _typeof(obj) { return typeof obj; }; } else { ProductWizard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProductWizard_typeof(obj); }

function ProductWizard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProductWizard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProductWizard_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProductWizard_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProductWizard_defineProperties(Constructor, staticProps); return Constructor; }

function ProductWizard_possibleConstructorReturn(self, call) { if (call && (ProductWizard_typeof(call) === "object" || typeof call === "function")) { return call; } return ProductWizard_assertThisInitialized(self); }

function ProductWizard_getPrototypeOf(o) { ProductWizard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProductWizard_getPrototypeOf(o); }

function ProductWizard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProductWizard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProductWizard_setPrototypeOf(subClass, superClass); }

function ProductWizard_setPrototypeOf(o, p) { ProductWizard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProductWizard_setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var styles = function styles(theme) {
  return {
    root: {
      width: '90%'
    },
    backButton: {
      marginRight: theme.spacing.unit
    },
    instructions: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit
    }
  };
};

function getSteps() {
  return ['Project Information', 'Upload Files', 'Share'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return external_react_default.a.createElement(ProjectWizardStep1, null);

    case 1:
      return external_react_default.a.createElement(ProjectWizardStep2, null);

    case 2:
      return external_react_default.a.createElement(ProjectWizardStep3, null);

    default:
      return 'Uknown stepIndex';
  }
}

var ProductWizard_ProductWizard =
/*#__PURE__*/
function (_React$Component) {
  ProductWizard_inherits(ProductWizard, _React$Component);

  function ProductWizard() {
    var _getPrototypeOf2;

    var _this;

    ProductWizard_classCallCheck(this, ProductWizard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = ProductWizard_possibleConstructorReturn(this, (_getPrototypeOf2 = ProductWizard_getPrototypeOf(ProductWizard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(ProductWizard_assertThisInitialized(_this), "state", {
      activeStep: 0
    });

    _defineProperty(ProductWizard_assertThisInitialized(_this), "handleNext", function () {
      _this.setState(function (state) {
        return {
          activeStep: state.activeStep + 1
        };
      });
    });

    _defineProperty(ProductWizard_assertThisInitialized(_this), "handleBack", function () {
      _this.setState(function (state) {
        return {
          activeStep: state.activeStep - 1
        };
      });
    });

    _defineProperty(ProductWizard_assertThisInitialized(_this), "handleReset", function () {
      _this.setState({
        activeStep: 0
      });
    });

    return _this;
  }

  ProductWizard_createClass(ProductWizard, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var steps = getSteps();
      var activeStep = this.state.activeStep;
      var WizardContainerStyle = {
        width: '100%',
        marginBottom: '100px'
      };
      var ButtonContainerStyle = {
        width: '46%',
        marginTop: '50px'
      };
      var ButtonBackStyle = {
        display: 'block',
        float: 'left',
        marginLeft: '50px'
      };
      var ButtonNextStyle = {
        display: 'block',
        float: 'right'
      };
      return external_react_default.a.createElement("div", {
        className: classes.root,
        style: WizardContainerStyle
      }, external_react_default.a.createElement(Stepper_default.a, {
        activeStep: activeStep,
        alternativeLabel: true
      }, steps.map(function (label) {
        return external_react_default.a.createElement(Step_default.a, {
          key: label
        }, external_react_default.a.createElement(StepLabel_default.a, null, label));
      })), external_react_default.a.createElement("div", null, this.state.activeStep === steps.length ? external_react_default.a.createElement("div", null, external_react_default.a.createElement(Typography_default.a, {
        className: classes.instructions
      }, "All steps completed"), external_react_default.a.createElement(Button_default.a, {
        onClick: this.handleReset
      }, "Reset")) : external_react_default.a.createElement("div", null, external_react_default.a.createElement(Typography_default.a, {
        className: classes.instructions
      }, getStepContent(activeStep)), external_react_default.a.createElement("div", {
        className: "row text-center"
      }, external_react_default.a.createElement("div", {
        className: "cold-md-6 offset-md-3",
        style: ButtonContainerStyle
      }, external_react_default.a.createElement(Button_default.a, {
        disabled: activeStep === 0,
        onClick: this.handleBack,
        className: classes.backButton,
        style: ButtonBackStyle
      }, "Back"), external_react_default.a.createElement(Button_default.a, {
        variant: "contained",
        color: "primary",
        onClick: this.handleNext,
        style: ButtonNextStyle
      }, activeStep === steps.length - 1 ? 'Finish' : 'Next'))))));
    }
  }]);

  return ProductWizard;
}(external_react_default.a.Component);

/* harmony default export */ var Products_ProductWizard = __webpack_exports__["a"] = (Object(styles_["withStyles"])(styles)(ProductWizard_ProductWizard));

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Products_ProductWizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ProductSubmit =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductSubmit, _React$Component);

  function ProductSubmit() {
    _classCallCheck(this, ProductSubmit);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductSubmit).apply(this, arguments));
  }

  _createClass(ProductSubmit, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Products_ProductWizard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null));
    }
  }]);

  return ProductSubmit;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductSubmit);

/***/ })

/******/ });