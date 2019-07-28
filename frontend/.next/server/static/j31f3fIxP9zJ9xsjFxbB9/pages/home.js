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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var LandingPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LandingPage, _React$Component);

  function LandingPage() {
    _classCallCheck(this, LandingPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(LandingPage).apply(this, arguments));
  }

  _createClass(LandingPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        role: "main"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "jumbotron text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "jumbotron-heading"
      }, "Album example"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "lead text-muted"
      }, "Something short and leading about the collection below\u2014its contents, the creator, etc. Make it short and sweet, but not too short so folks don\u2019t simply skip over it entirely."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "btn btn-primary my-2"
      }, "Main call to action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "btn btn-secondary my-2"
      }, "Secondary action")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "album py-5 bg-light"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card mb-4 shadow-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "bd-placeholder-img card-img-top",
        width: "100%",
        height: "225",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid slice",
        focusable: "false",
        role: "img",
        "aria-label": "Placeholder: Thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        width: "100%",
        height: "100%",
        fill: "#55595c"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        x: "50%",
        y: "50%",
        fill: "#eceeef",
        dy: ".3em"
      }, "Thumbnail")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "card-text"
      }, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "btn-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-sm btn-outline-secondary"
      }, "View"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-sm btn-outline-secondary"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "9 mins"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card mb-4 shadow-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "bd-placeholder-img card-img-top",
        width: "100%",
        height: "225",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid slice",
        focusable: "false",
        role: "img",
        "aria-label": "Placeholder: Thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        width: "100%",
        height: "100%",
        fill: "#55595c"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        x: "50%",
        y: "50%",
        fill: "#eceeef",
        dy: ".3em"
      }, "Thumbnail")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "card-text"
      }, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "btn-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-sm btn-outline-secondary"
      }, "View"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-sm btn-outline-secondary"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "9 mins"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card mb-4 shadow-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "bd-placeholder-img card-img-top",
        width: "100%",
        height: "225",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid slice",
        focusable: "false",
        role: "img",
        "aria-label": "Placeholder: Thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        width: "100%",
        height: "100%",
        fill: "#55595c"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        x: "50%",
        y: "50%",
        fill: "#eceeef",
        dy: ".3em"
      }, "Thumbnail")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "card-text"
      }, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "btn-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-sm btn-outline-secondary"
      }, "View"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-sm btn-outline-secondary"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "9 mins"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "card mb-4 shadow-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        class: "bd-placeholder-img card-img-top",
        width: "100%",
        height: "225",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid slice",
        focusable: "false",
        role: "img",
        "aria-label": "Placeholder: Thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        width: "100%",
        height: "100%",
        fill: "#55595c"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        x: "50%",
        y: "50%",
        fill: "#eceeef",
        dy: ".3em"
      }, "Thumbnail")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "card-text"
      }, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "d-flex justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "btn-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-sm btn-outline-secondary"
      }, "View"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-sm btn-outline-secondary"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        class: "text-muted"
      }, "9 mins"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "card mb-4 shadow-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        class: "bd-placeholder-img card-img-top",
        width: "100%",
        height: "225",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid slice",
        focusable: "false",
        role: "img",
        "aria-label": "Placeholder: Thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        width: "100%",
        height: "100%",
        fill: "#55595c"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        x: "50%",
        y: "50%",
        fill: "#eceeef",
        dy: ".3em"
      }, "Thumbnail")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "card-text"
      }, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "d-flex justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "btn-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-sm btn-outline-secondary"
      }, "View"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-sm btn-outline-secondary"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        class: "text-muted"
      }, "9 mins"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "card mb-4 shadow-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        class: "bd-placeholder-img card-img-top",
        width: "100%",
        height: "225",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid slice",
        focusable: "false",
        role: "img",
        "aria-label": "Placeholder: Thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        width: "100%",
        height: "100%",
        fill: "#55595c"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        x: "50%",
        y: "50%",
        fill: "#eceeef",
        dy: ".3em"
      }, "Thumbnail")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "card-text"
      }, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "d-flex justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "btn-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-sm btn-outline-secondary"
      }, "View"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-sm btn-outline-secondary"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        class: "text-muted"
      }, "9 mins"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "card mb-4 shadow-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        class: "bd-placeholder-img card-img-top",
        width: "100%",
        height: "225",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid slice",
        focusable: "false",
        role: "img",
        "aria-label": "Placeholder: Thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        width: "100%",
        height: "100%",
        fill: "#55595c"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        x: "50%",
        y: "50%",
        fill: "#eceeef",
        dy: ".3em"
      }, "Thumbnail")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "card-text"
      }, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "d-flex justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "btn-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-sm btn-outline-secondary"
      }, "View"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-sm btn-outline-secondary"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        class: "text-muted"
      }, "9 mins"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "card mb-4 shadow-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        class: "bd-placeholder-img card-img-top",
        width: "100%",
        height: "225",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid slice",
        focusable: "false",
        role: "img",
        "aria-label": "Placeholder: Thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        width: "100%",
        height: "100%",
        fill: "#55595c"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        x: "50%",
        y: "50%",
        fill: "#eceeef",
        dy: ".3em"
      }, "Thumbnail")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "card-text"
      }, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "d-flex justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "btn-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-sm btn-outline-secondary"
      }, "View"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-sm btn-outline-secondary"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        class: "text-muted"
      }, "9 mins"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "card mb-4 shadow-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        class: "bd-placeholder-img card-img-top",
        width: "100%",
        height: "225",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid slice",
        focusable: "false",
        role: "img",
        "aria-label": "Placeholder: Thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        width: "100%",
        height: "100%",
        fill: "#55595c"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        x: "50%",
        y: "50%",
        fill: "#eceeef",
        dy: ".3em"
      }, "Thumbnail")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "card-text"
      }, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "d-flex justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "btn-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-sm btn-outline-secondary"
      }, "View"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-sm btn-outline-secondary"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        class: "text-muted"
      }, "9 mins"))))))))));
    }
  }]);

  return LandingPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ })

/******/ });