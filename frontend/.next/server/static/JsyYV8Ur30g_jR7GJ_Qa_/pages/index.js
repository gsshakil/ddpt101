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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



var Home = function Home(props) {
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
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })
/******/ ]);