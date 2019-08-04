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
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
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
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),
/* 20 */,
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
/* 39 */,
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
/* 44 */,
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
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(60);


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Stepper");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Step");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/StepLabel");

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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

// CONCATENATED MODULE: ./components/People/PeopleWizard/WizardStep1.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var WizardStep1_WizardStep1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WizardStep1, _React$Component);

  function WizardStep1() {
    _classCallCheck(this, WizardStep1);

    return _possibleConstructorReturn(this, _getPrototypeOf(WizardStep1).apply(this, arguments));
  }

  _createClass(WizardStep1, [{
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
      }, "PLEASE PROVIDE SOME BASIC INFORMATION"), external_react_default.a.createElement(FormGroup_default.a, null, external_react_default.a.createElement("div", {
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

  return WizardStep1;
}(external_react_default.a.Component);

/* harmony default export */ var PeopleWizard_WizardStep1 = (WizardStep1_WizardStep1);
// CONCATENATED MODULE: ./components/People/PeopleWizard/index.js
function PeopleWizard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PeopleWizard_typeof = function _typeof(obj) { return typeof obj; }; } else { PeopleWizard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PeopleWizard_typeof(obj); }

function PeopleWizard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PeopleWizard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PeopleWizard_createClass(Constructor, protoProps, staticProps) { if (protoProps) PeopleWizard_defineProperties(Constructor.prototype, protoProps); if (staticProps) PeopleWizard_defineProperties(Constructor, staticProps); return Constructor; }

function PeopleWizard_possibleConstructorReturn(self, call) { if (call && (PeopleWizard_typeof(call) === "object" || typeof call === "function")) { return call; } return PeopleWizard_assertThisInitialized(self); }

function PeopleWizard_getPrototypeOf(o) { PeopleWizard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PeopleWizard_getPrototypeOf(o); }

function PeopleWizard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PeopleWizard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PeopleWizard_setPrototypeOf(subClass, superClass); }

function PeopleWizard_setPrototypeOf(o, p) { PeopleWizard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PeopleWizard_setPrototypeOf(o, p); }

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
  return ['Basic Information', 'Work Experience', 'Education', 'Follow Topics', 'Follow Poeple & Brands'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return external_react_default.a.createElement(PeopleWizard_WizardStep1, null);

    case 1:
      return 'Work Experience';

    case 2:
      return 'Education';

    case 3:
      return 'Follow Topics';

    case 4:
      return 'Follow Poeple & Brands';

    default:
      return 'Uknown stepIndex';
  }
}

var PeopleWizard_PeopleWizard =
/*#__PURE__*/
function (_React$Component) {
  PeopleWizard_inherits(PeopleWizard, _React$Component);

  function PeopleWizard() {
    var _getPrototypeOf2;

    var _this;

    PeopleWizard_classCallCheck(this, PeopleWizard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = PeopleWizard_possibleConstructorReturn(this, (_getPrototypeOf2 = PeopleWizard_getPrototypeOf(PeopleWizard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(PeopleWizard_assertThisInitialized(_this), "state", {
      activeStep: 0
    });

    _defineProperty(PeopleWizard_assertThisInitialized(_this), "handleNext", function () {
      _this.setState(function (state) {
        return {
          activeStep: state.activeStep + 1
        };
      });
    });

    _defineProperty(PeopleWizard_assertThisInitialized(_this), "handleBack", function () {
      _this.setState(function (state) {
        return {
          activeStep: state.activeStep - 1
        };
      });
    });

    _defineProperty(PeopleWizard_assertThisInitialized(_this), "handleReset", function () {
      _this.setState({
        activeStep: 0
      });
    });

    return _this;
  }

  PeopleWizard_createClass(PeopleWizard, [{
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

  return PeopleWizard;
}(external_react_default.a.Component);

/* harmony default export */ var People_PeopleWizard = (Object(styles_["withStyles"])(styles)(PeopleWizard_PeopleWizard));
// CONCATENATED MODULE: ./pages/people-seup.js
function people_seup_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { people_seup_typeof = function _typeof(obj) { return typeof obj; }; } else { people_seup_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return people_seup_typeof(obj); }

function people_seup_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function people_seup_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function people_seup_createClass(Constructor, protoProps, staticProps) { if (protoProps) people_seup_defineProperties(Constructor.prototype, protoProps); if (staticProps) people_seup_defineProperties(Constructor, staticProps); return Constructor; }

function people_seup_possibleConstructorReturn(self, call) { if (call && (people_seup_typeof(call) === "object" || typeof call === "function")) { return call; } return people_seup_assertThisInitialized(self); }

function people_seup_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function people_seup_getPrototypeOf(o) { people_seup_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return people_seup_getPrototypeOf(o); }

function people_seup_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) people_seup_setPrototypeOf(subClass, superClass); }

function people_seup_setPrototypeOf(o, p) { people_seup_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return people_seup_setPrototypeOf(o, p); }




var people_seup_PeopleSeup =
/*#__PURE__*/
function (_React$Component) {
  people_seup_inherits(PeopleSeup, _React$Component);

  function PeopleSeup() {
    people_seup_classCallCheck(this, PeopleSeup);

    return people_seup_possibleConstructorReturn(this, people_seup_getPrototypeOf(PeopleSeup).apply(this, arguments));
  }

  people_seup_createClass(PeopleSeup, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(People_PeopleWizard, null));
    }
  }]);

  return PeopleSeup;
}(external_react_default.a.Component);

/* harmony default export */ var people_seup = __webpack_exports__["default"] = (people_seup_PeopleSeup);

/***/ })
/******/ ]);