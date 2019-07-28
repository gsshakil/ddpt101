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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(2);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(15);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(36);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(37);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(35);

// CONCATENATED MODULE: ./components/Menubar/Menubar.js






fontawesome_svg_core_["library"].add(free_brands_svg_icons_["fab"], free_solid_svg_icons_["faCheckSquare"], free_solid_svg_icons_["faCoffee"]);

var Menubar_MenuBar = function MenuBar() {
  return external_react_default.a.createElement("div", {
    className: "menu-bar"
  }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/people"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "coffee",
    spin: true
  }), "People"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/brands"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "coffee",
    pulse: true
  }), "Brands"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/projects"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "coffee"
  }), "Projects"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/products"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "coffee"
  }), "Products"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/jobs"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "coffee"
  }), "Jobs"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/campaigns"
  }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "coffee"
  }), "Campaigns")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/academy"
  }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "coffee"
  }), "Academy")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/apps"
  }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "coffee"
  }), "Apps"))));
};

/* harmony default export */ var Menubar = (Menubar_MenuBar);
// CONCATENATED MODULE: ./components/Header.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("section", null, external_react_default.a.createElement("header", null, external_react_default.a.createElement("nav", {
        className: "navbar navbar-expand-md navbar-dark bg-dark"
      }, external_react_default.a.createElement("a", {
        className: "navbar-brand",
        href: "#"
      }, "Carousel"), external_react_default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarCollapse",
        "aria-controls": "navbarCollapse",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, external_react_default.a.createElement("span", {
        className: "navbar-toggler-icon"
      })), external_react_default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarCollapse"
      }, external_react_default.a.createElement("ul", {
        className: "navbar-nav mr-auto"
      }, external_react_default.a.createElement("li", {
        className: "nav-item active"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/"
      }, external_react_default.a.createElement("a", {
        className: "nav-link",
        href: "#"
      }, "Home ", external_react_default.a.createElement("span", {
        className: "sr-only"
      }, "(current)")))), external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/people"
      }, external_react_default.a.createElement("a", {
        className: "nav-link"
      }, "People"))), external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/brands"
      }, external_react_default.a.createElement("a", {
        className: "nav-link"
      }, "Brands"))), external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/projects"
      }, external_react_default.a.createElement("a", {
        className: "nav-link"
      }, "Projects"))), external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/products"
      }, external_react_default.a.createElement("a", {
        className: "nav-link"
      }, "Products"))), external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/jobs"
      }, external_react_default.a.createElement("a", {
        className: "nav-link"
      }, "Jobs"))), external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/campaigns"
      }, external_react_default.a.createElement("a", {
        className: "nav-link"
      }, "Campaigns"))), external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/academy"
      }, external_react_default.a.createElement("a", {
        className: "nav-link"
      }, "Academy"))), external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/apps"
      }, external_react_default.a.createElement("a", {
        className: "nav-link"
      }, "Apps"))), external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/apps"
      }, external_react_default.a.createElement("a", {
        className: "nav-link"
      }, "More")))), external_react_default.a.createElement("form", {
        className: "form-inline mt-2 mt-md-0"
      }, external_react_default.a.createElement("input", {
        className: "form-control mr-sm-2",
        type: "text",
        placeholder: "Search",
        "aria-label": "Search"
      }), external_react_default.a.createElement("button", {
        className: "btn btn-outline-success my-2 my-sm-0",
        type: "submit"
      }, "Search"))))), external_react_default.a.createElement(Menubar, null));
    }
  }]);

  return Header;
}(external_react_default.a.Component);

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(9);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Meta.js



var Meta_Meta = function Meta() {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external_react_default.a.createElement("meta", {
    charSet: "utf-8"
  }), external_react_default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.png"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/styles.css"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossorigin: "anonymous"
  }), external_react_default.a.createElement("title", null, "Sick Fits!"));
};

/* harmony default export */ var components_Meta = (Meta_Meta);
// CONCATENATED MODULE: ./components/Page.js
function Page_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Page_typeof = function _typeof(obj) { return typeof obj; }; } else { Page_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Page_typeof(obj); }

function Page_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Page_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Page_createClass(Constructor, protoProps, staticProps) { if (protoProps) Page_defineProperties(Constructor.prototype, protoProps); if (staticProps) Page_defineProperties(Constructor, staticProps); return Constructor; }

function Page_possibleConstructorReturn(self, call) { if (call && (Page_typeof(call) === "object" || typeof call === "function")) { return call; } return Page_assertThisInitialized(self); }

function Page_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Page_getPrototypeOf(o) { Page_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Page_getPrototypeOf(o); }

function Page_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Page_setPrototypeOf(subClass, superClass); }

function Page_setPrototypeOf(o, p) { Page_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Page_setPrototypeOf(o, p); }





var Page_Page =
/*#__PURE__*/
function (_Component) {
  Page_inherits(Page, _Component);

  function Page() {
    Page_classCallCheck(this, Page);

    return Page_possibleConstructorReturn(this, Page_getPrototypeOf(Page).apply(this, arguments));
  }

  Page_createClass(Page, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Meta, null), external_react_default.a.createElement(components_Header, null), this.props.children);
    }
  }]);

  return Page;
}(external_react_["Component"]);

/* harmony default export */ var components_Page = (Page_Page);
// CONCATENATED MODULE: ./pages/_app.js


function _app_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app_typeof = function _typeof(obj) { return typeof obj; }; } else { _app_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app_typeof(obj); }

function _app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _app_createClass(Constructor, protoProps, staticProps) { if (protoProps) _app_defineProperties(Constructor.prototype, protoProps); if (staticProps) _app_defineProperties(Constructor, staticProps); return Constructor; }

function _app_possibleConstructorReturn(self, call) { if (call && (_app_typeof(call) === "object" || typeof call === "function")) { return call; } return _app_assertThisInitialized(self); }

function _app_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _app_getPrototypeOf(o) { _app_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _app_getPrototypeOf(o); }

function _app_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _app_setPrototypeOf(subClass, superClass); }

function _app_setPrototypeOf(o, p) { _app_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _app_setPrototypeOf(o, p); }




var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _app_inherits(MyApp, _App);

  function MyApp() {
    _app_classCallCheck(this, MyApp);

    return _app_possibleConstructorReturn(this, _app_getPrototypeOf(MyApp).apply(this, arguments));
  }

  _app_createClass(MyApp, [{
    key: "render",
    value: function render() {
      var Component = this.props.Component;
      return external_react_default.a.createElement(app_["Container"], null, external_react_default.a.createElement(components_Page, null, external_react_default.a.createElement(Component, null)));
    }
  }]);

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });