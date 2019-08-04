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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(34);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(44);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/Products/ProductDetails.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var ProductDetails_ProductDetails =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductDetails, _React$Component);

  function ProductDetails(props) {
    var _this;

    _classCallCheck(this, ProductDetails);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductDetails).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      activeTab: '1'
    };
    return _this;
  }

  _createClass(ProductDetails, [{
    key: "toggle",
    value: function toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("div", {
        className: "product-page-area"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "zoom-warpper"
      }, external_react_default.a.createElement("div", {
        id: "img-1",
        className: "zoomWrapper single-zoom"
      }, external_react_default.a.createElement("a", {
        href: "#"
      }, external_react_default.a.createElement("div", {
        className: "zoomWrapper"
      }, external_react_default.a.createElement("img", {
        id: "zoom1",
        src: "https://via.placeholder.com/150",
        "data-zoom-image": product1,
        alt: ""
      })))), external_react_default.a.createElement("div", {
        className: "single-zoom-thumb"
      }, external_react_default.a.createElement("div", {
        className: "bx-wrapper"
      }, external_react_default.a.createElement("div", {
        className: "bx-viewport",
        "aria-live": "polite"
      }, external_react_default.a.createElement("ul", {
        className: "zoom-slider",
        id: "gallery_01"
      }, external_react_default.a.createElement("li", {
        "aria-hidden": "false"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "elevatezoom-gallery active",
        "data-image": product1,
        "data-zoom-image": "img/product/big/1.jpg"
      }, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      }))), external_react_default.a.createElement("li", {
        "aria-hidden": "false"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "elevatezoom-gallery",
        "data-image": product1,
        "data-zoom-image": "img/product/big/2.jpg"
      }, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      }))), external_react_default.a.createElement("li", {
        "aria-hidden": "false"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "elevatezoom-gallery",
        "data-image": product1,
        "data-zoom-image": "img/product/big/3.jpg"
      }, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      }))), external_react_default.a.createElement("li", {
        "aria-hidden": "true"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "elevatezoom-gallery",
        "data-image": product1,
        "data-zoom-image": "img/product/big/6.jpg"
      }, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      }))), external_react_default.a.createElement("li", {
        "aria-hidden": "true"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "elevatezoom-gallery",
        "data-image": product1,
        "data-zoom-image": "img/product/big/7.jpg"
      }, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      }))))), external_react_default.a.createElement("div", {
        className: "bx-controls bx-has-controls-direction"
      }, external_react_default.a.createElement("div", {
        className: "bx-controls-direction"
      }, external_react_default.a.createElement("a", {
        className: "bx-prev disabled",
        href: ""
      }, external_react_default.a.createElement("i", {
        className: "fa fa-chevron-left"
      })), external_react_default.a.createElement("a", {
        className: "bx-next",
        href: ""
      }, external_react_default.a.createElement("i", {
        className: "fa fa-chevron-right"
      }))))))), external_react_default.a.createElement("div", {
        className: "p-zoom-content"
      }, external_react_default.a.createElement("div", {
        className: "p-zoom-head"
      }, external_react_default.a.createElement("h2", null, "consequences"), external_react_default.a.createElement("p", {
        className: "availability in-stock"
      }, "Availability: ", external_react_default.a.createElement("span", null, "In stock")), external_react_default.a.createElement("div", {
        className: "price-box"
      }, external_react_default.a.createElement("p", {
        className: "special-price s-one"
      }, external_react_default.a.createElement("span", {
        className: "price"
      }, "$800.00"))), external_react_default.a.createElement("div", {
        className: "p-ratings"
      }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star-o"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star-o"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star-half-o"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star-o"
      }))))), external_react_default.a.createElement("div", {
        className: "short-description"
      }, external_react_default.a.createElement("p", null, "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. className aptent taciti.")), external_react_default.a.createElement("div", {
        className: "p-product-cart"
      }, external_react_default.a.createElement("div", {
        className: "oty"
      }, external_react_default.a.createElement("span", null, "oty:"), external_react_default.a.createElement("input", {
        type: "text",
        className: "input-text qty"
      })), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#"
      }, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-shopping-cart"
      }))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#"
      }, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-favorite"
      }))))))), external_react_default.a.createElement("div", {
        className: "reviwer-area"
      }, external_react_default.a.createElement(external_reactstrap_["Nav"], {
        tabs: true
      }, external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        className: external_classnames_default()({
          active: this.state.activeTab === '1'
        }),
        onClick: function onClick() {
          _this2.toggle('1');
        }
      }, "Product Description")), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        className: external_classnames_default()({
          active: this.state.activeTab === '2'
        }),
        onClick: function onClick() {
          _this2.toggle('2');
        }
      }, "Reviews")), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        className: external_classnames_default()({
          active: this.state.activeTab === '3'
        }),
        onClick: function onClick() {
          _this2.toggle('3');
        }
      }, "Produc Tags"))), external_react_default.a.createElement(external_reactstrap_["TabContent"], {
        activeTab: this.state.activeTab
      }, external_react_default.a.createElement(external_reactstrap_["TabPane"], {
        tabId: "1"
      }, external_react_default.a.createElement("p", null, "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. className aptent taciti.")), external_react_default.a.createElement(external_reactstrap_["TabPane"], {
        tabId: "2"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-6"
      }, external_react_default.a.createElement("div", {
        className: "reviwer-info"
      }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("a", {
        href: "#"
      }, "bootexpert"), external_react_default.a.createElement("b", null, "Review by"), "bootexpert")), external_react_default.a.createElement("div", {
        className: "p-ratings"
      }, external_react_default.a.createElement("span", null, "Quality"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star-o"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star-o"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star-half-o"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star-o"
      })))), external_react_default.a.createElement("div", {
        className: "p-ratings"
      }, external_react_default.a.createElement("span", null, "price"), external_react_default.a.createElement("ul", {
        className: "re-price"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star-o"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star-o"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star-half-o"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star-o"
      })))), external_react_default.a.createElement("div", {
        className: "p-ratings"
      }, external_react_default.a.createElement("span", null, "value"), external_react_default.a.createElement("ul", {
        className: "re-price"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star-o"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star-o"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star-half-o"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "fa fa-star-o"
      }))))), external_react_default.a.createElement("div", {
        className: "col-md-6"
      }, external_react_default.a.createElement("div", {
        className: "rev-table"
      }, external_react_default.a.createElement("h3", null, "You're reviewing: ", external_react_default.a.createElement("span", null, "consequences")), external_react_default.a.createElement("h4", null, "How do you rate this product? ", external_react_default.a.createElement("em", {
        className: "required"
      }, "*")), external_react_default.a.createElement("table", {
        id: "product-review-table",
        className: "data-table"
      }, external_react_default.a.createElement("thead", null, external_react_default.a.createElement("tr", {
        className: "first last"
      }, external_react_default.a.createElement("th", null, "\xA0"), external_react_default.a.createElement("th", null, external_react_default.a.createElement("span", {
        className: "nobr"
      }, "1 star")), external_react_default.a.createElement("th", null, external_react_default.a.createElement("span", {
        className: "nobr"
      }, "2 stars")), external_react_default.a.createElement("th", null, external_react_default.a.createElement("span", {
        className: "nobr"
      }, "3 stars")), external_react_default.a.createElement("th", null, external_react_default.a.createElement("span", {
        className: "nobr"
      }, "4 stars")), external_react_default.a.createElement("th", null, external_react_default.a.createElement("span", {
        className: "nobr"
      }, "5 stars")))), external_react_default.a.createElement("tbody", null, external_react_default.a.createElement("tr", {
        className: "first odd"
      }, external_react_default.a.createElement("th", null, "Price"), external_react_default.a.createElement("td", {
        className: "value"
      }, external_react_default.a.createElement("input", {
        type: "radio",
        className: "radio"
      })), external_react_default.a.createElement("td", {
        className: "value"
      }, external_react_default.a.createElement("input", {
        type: "radio",
        className: "radio"
      })), external_react_default.a.createElement("td", {
        className: "value"
      }, external_react_default.a.createElement("input", {
        type: "radio",
        className: "radio"
      })), external_react_default.a.createElement("td", {
        className: "value"
      }, external_react_default.a.createElement("input", {
        type: "radio",
        className: "radio"
      })), external_react_default.a.createElement("td", {
        className: "value last"
      }, external_react_default.a.createElement("input", {
        type: "radio",
        className: "radio",
        id: "Price_5",
        name: "ratings[3]"
      }))), external_react_default.a.createElement("tr", {
        className: "even"
      }, external_react_default.a.createElement("th", null, "Value"), external_react_default.a.createElement("td", {
        className: "value"
      }, external_react_default.a.createElement("input", {
        type: "radio",
        className: "radio"
      })), external_react_default.a.createElement("td", {
        className: "value"
      }, external_react_default.a.createElement("input", {
        type: "radio",
        className: "radio"
      })), external_react_default.a.createElement("td", {
        className: "value"
      }, external_react_default.a.createElement("input", {
        type: "radio",
        className: "radio"
      })), external_react_default.a.createElement("td", {
        className: "value"
      }, external_react_default.a.createElement("input", {
        type: "radio",
        className: "radio"
      })), external_react_default.a.createElement("td", {
        className: "value last"
      }, external_react_default.a.createElement("input", {
        type: "radio",
        className: "radio",
        id: "Value_5",
        name: "ratings[2]"
      }))), external_react_default.a.createElement("tr", {
        className: "last odd"
      }, external_react_default.a.createElement("th", null, "Quality"), external_react_default.a.createElement("td", {
        className: "value"
      }, external_react_default.a.createElement("input", {
        type: "radio",
        className: "radio"
      })), external_react_default.a.createElement("td", {
        className: "value"
      }, external_react_default.a.createElement("input", {
        type: "radio",
        className: "radio"
      })), external_react_default.a.createElement("td", {
        className: "value"
      }, external_react_default.a.createElement("input", {
        type: "radio",
        className: "radio"
      })), external_react_default.a.createElement("td", {
        className: "value"
      }, external_react_default.a.createElement("input", {
        type: "radio",
        className: "radio"
      })), external_react_default.a.createElement("td", {
        className: "value last"
      }, external_react_default.a.createElement("input", {
        type: "radio",
        className: "radio",
        id: "Quality_5",
        name: "ratings[1]"
      }))))), external_react_default.a.createElement("div", {
        className: "re-comments"
      }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("span", null, "Nickname", external_react_default.a.createElement("span", null, "*")), external_react_default.a.createElement("input", {
        type: "text"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("span", null, "Summary of Your Review", external_react_default.a.createElement("span", null, "*")), external_react_default.a.createElement("input", {
        type: "text"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("span", null, "Review", external_react_default.a.createElement("span", null, "*")), external_react_default.a.createElement("textarea", null)))), external_react_default.a.createElement("div", {
        className: "buttons-set"
      }, external_react_default.a.createElement("button", {
        className: "button",
        type: "submit"
      }, external_react_default.a.createElement("span", null, "Submit Review"))))))), external_react_default.a.createElement(external_reactstrap_["TabPane"], {
        tabId: "3"
      }, external_react_default.a.createElement("div", {
        className: "product-tags-items"
      }, external_react_default.a.createElement("h3", null, "Other people marked this product with these tags:"), external_react_default.a.createElement("p", null, external_react_default.a.createElement("a", {
        href: "#",
        className: "p-tages"
      }, "feshion"), "(03)"), external_react_default.a.createElement("div", {
        className: "tages-form"
      }, external_react_default.a.createElement("form", {
        action: "#"
      }, external_react_default.a.createElement("label", null, "Add Your Tags:"), external_react_default.a.createElement("input", {
        type: "text"
      }), external_react_default.a.createElement("button", {
        className: "button",
        type: "submit"
      }, external_react_default.a.createElement("span", null, "add tags")))), external_react_default.a.createElement("p", {
        className: "note"
      }, "Use spaces to separate tags. Use single quotes (') for phrases."))))), external_react_default.a.createElement("div", {
        class: "single-page-rel-p"
      }, external_react_default.a.createElement("div", {
        class: "section-title section-title-2"
      }, external_react_default.a.createElement("h2", null, "Hot Deals")))));
    }
  }]);

  return ProductDetails;
}(external_react_default.a.Component);

;
/* harmony default export */ var Products_ProductDetails = (ProductDetails_ProductDetails);
// CONCATENATED MODULE: ./components/Products/ProductCard.js
function ProductCard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProductCard_typeof = function _typeof(obj) { return typeof obj; }; } else { ProductCard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProductCard_typeof(obj); }

function ProductCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProductCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProductCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProductCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProductCard_defineProperties(Constructor, staticProps); return Constructor; }

function ProductCard_possibleConstructorReturn(self, call) { if (call && (ProductCard_typeof(call) === "object" || typeof call === "function")) { return call; } return ProductCard_assertThisInitialized(self); }

function ProductCard_getPrototypeOf(o) { ProductCard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProductCard_getPrototypeOf(o); }

function ProductCard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProductCard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProductCard_setPrototypeOf(subClass, superClass); }

function ProductCard_setPrototypeOf(o, p) { ProductCard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProductCard_setPrototypeOf(o, p); }





var ProductCard_ProductCard =
/*#__PURE__*/
function (_React$Component) {
  ProductCard_inherits(ProductCard, _React$Component);

  function ProductCard(props) {
    var _this;

    ProductCard_classCallCheck(this, ProductCard);

    _this = ProductCard_possibleConstructorReturn(this, ProductCard_getPrototypeOf(ProductCard).call(this, props));
    _this.state = {
      modal: false
    };
    _this.toggle = _this.toggle.bind(ProductCard_assertThisInitialized(_this));
    return _this;
  }

  ProductCard_createClass(ProductCard, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "product-card"
      }, external_react_default.a.createElement("div", {
        className: "single-product"
      }, external_react_default.a.createElement("div", {
        className: "product-img"
      }, external_react_default.a.createElement("span", {
        className: "hot-sale"
      }, "-13%"), external_react_default.a.createElement("a", {
        href: ""
      }, external_react_default.a.createElement("img", {
        className: "primary-img",
        alt: "",
        src: "https://via.placeholder.com/150"
      })), external_react_default.a.createElement("div", {
        className: "product-cart product-cart-res"
      }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", null, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-shopping-cart infinite wobble"
      }))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        onClick: this.toggle
      }, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-eye infinite wobble"
      }))))), external_react_default.a.createElement("div", {
        className: "ratings"
      }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-star infinite wobble"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-star infinite wobble"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-star infinite wobble"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-star infinite wobble"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-star infinite wobble"
      }))))), external_react_default.a.createElement("div", {
        className: "tab-desc"
      }, external_react_default.a.createElement("h2", {
        className: "product-name"
      }, external_react_default.a.createElement("a", {
        title: "",
        href: "#"
      }, "geistu boy est")), external_react_default.a.createElement("div", {
        className: "price-box"
      }, external_react_default.a.createElement("p", {
        className: "old-price"
      }, external_react_default.a.createElement("span", {
        className: "price"
      }, "$690.00")), external_react_default.a.createElement("p", {
        className: "special-price s-one"
      }, external_react_default.a.createElement("span", {
        className: "price"
      }, "$800.00"))))), external_react_default.a.createElement(external_reactstrap_["Modal"], {
        isOpen: this.state.modal,
        toggle: this.toggle
      }, external_react_default.a.createElement(external_reactstrap_["ModalHeader"], {
        toggle: this.toggle
      }, "Modal title"), external_react_default.a.createElement(external_reactstrap_["ModalBody"], null, external_react_default.a.createElement(Products_ProductDetails, null))));
    }
  }]);

  return ProductCard;
}(external_react_default.a.Component);

;
/* harmony default export */ var Products_ProductCard = __webpack_exports__["a"] = (ProductCard_ProductCard);

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(78);


/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("reactstrap");

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

/***/ 44:
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./components/Common/PeopleFilter.js
var PeopleFilter = __webpack_require__(6);

// EXTERNAL MODULE: ./components/Products/ProductCard.js + 1 modules
var ProductCard = __webpack_require__(21);

// CONCATENATED MODULE: ./components/Products/index.js





var Products_ProductList = function ProductList() {
  return external_react_default.a.createElement("div", {
    className: "project-list"
  }, external_react_default.a.createElement("div", {
    className: "top-banner"
  }, external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement("h1", null, "Shop Creative Products"), external_react_default.a.createElement("p", {
    className: "m-b-sm"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates unde alias incidunt deleniti fugiat iure quod perferendis officia labore corporis, quasi a accusamus soluta laudantium ipsa necessitatibus tenetur ducimus?"), external_react_default.a.createElement(link_default.a, {
    to: "create-shop",
    className: "btn btn-outline-light btn-lg"
  }, "Create Your Shop"))), external_react_default.a.createElement("div", {
    className: "list-wrapper"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md-3 p-r"
  }, external_react_default.a.createElement("div", {
    className: "filter-wrapper"
  }, external_react_default.a.createElement(PeopleFilter["a" /* default */], null))), external_react_default.a.createElement("div", {
    className: "col-md-9"
  }, external_react_default.a.createElement("div", {
    className: "people-card-wrapper"
  }, external_react_default.a.createElement("div", {
    className: "row m-b-sm"
  }, external_react_default.a.createElement("div", {
    className: "col-md-4"
  }, external_react_default.a.createElement(ProductCard["a" /* default */], null)), external_react_default.a.createElement("div", {
    className: "col-md-4"
  }, external_react_default.a.createElement(ProductCard["a" /* default */], null)), external_react_default.a.createElement("div", {
    className: "col-md-4"
  }, external_react_default.a.createElement(ProductCard["a" /* default */], null))), external_react_default.a.createElement("div", {
    className: "row m-b-sm"
  }, external_react_default.a.createElement("div", {
    className: "col-md-4"
  }, external_react_default.a.createElement(ProductCard["a" /* default */], null)), external_react_default.a.createElement("div", {
    className: "col-md-4"
  }, external_react_default.a.createElement(ProductCard["a" /* default */], null)), external_react_default.a.createElement("div", {
    className: "col-md-4"
  }, external_react_default.a.createElement(ProductCard["a" /* default */], null))))))));
};

/* harmony default export */ var components_Products = (Products_ProductList);
// CONCATENATED MODULE: ./pages/products.js



var products_Products = function Products(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Products, null));
};

/* harmony default export */ var products = __webpack_exports__["default"] = (products_Products);

/***/ })

/******/ });