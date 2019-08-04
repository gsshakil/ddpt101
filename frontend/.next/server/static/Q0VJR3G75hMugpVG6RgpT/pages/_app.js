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
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
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
/* 34 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),
/* 38 */
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

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(35);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(34);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(37);

// CONCATENATED MODULE: ./components/Menubar/Menubar.js






fontawesome_svg_core_["library"].add(free_brands_svg_icons_["fab"], free_solid_svg_icons_["faUsers"], free_solid_svg_icons_["faBuilding"], free_solid_svg_icons_["faProjectDiagram"], free_solid_svg_icons_["faShoppingBasket"], free_solid_svg_icons_["faTasks"], free_solid_svg_icons_["faFunnelDollar"], free_solid_svg_icons_["faUniversity"], free_solid_svg_icons_["faPollH"]);

var Menubar_MenuBar = function MenuBar() {
  return external_react_default.a.createElement("div", {
    className: "menu-bar"
  }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/people"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "users"
  }), "People"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/brands"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "building"
  }), "Brands"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/projects"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "project-diagram"
  }), "Projects"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/products"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "shopping-basket"
  }), "Products"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/jobs"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "tasks"
  }), "Jobs"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/campaigns"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "funnel-dollar"
  }), "Campaigns"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/academy"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "university"
  }), "Academy"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/apps"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "poll-h"
  }), "Apps")))));
};

/* harmony default export */ var Menubar = (Menubar_MenuBar);
// CONCATENATED MODULE: ./components/SearchBox/index.js




var SearchBox_SearchBox = function SearchBox(_ref) {
  var styleName = _ref.styleName,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      value = _ref.value;

  if (!styleName) {
    styleName = "";
  }

  if (!value) {
    value = "";
  }

  return external_react_default.a.createElement("div", {
    className: "search-bar right-side-icon bg-transparent ".concat(styleName)
  }, external_react_default.a.createElement("div", {
    className: "form-group"
  }, external_react_default.a.createElement("input", {
    className: "border-0",
    type: "search",
    placeholder: "Search...",
    onChange: onChange
  }), external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faSearch"]
  })));
};

/* harmony default export */ var components_SearchBox = (SearchBox_SearchBox);
// EXTERNAL MODULE: external "react-burger-menu"
var external_react_burger_menu_ = __webpack_require__(41);

// CONCATENATED MODULE: ./components/ProfileMenu/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ProfileMenu_ProfileMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProfileMenu, _React$Component);

  function ProfileMenu() {
    _classCallCheck(this, ProfileMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProfileMenu).apply(this, arguments));
  }

  _createClass(ProfileMenu, [{
    key: "render",
    value: function render() {
      var _this = this;

      // let profileMenuClassName;                    
      var onToggleProfileMenu = function onToggleProfileMenu() {
        profileMenuClassName = _this.state.profileMenuOpen ? 'profile-menu open' : 'profile-menu';
      };

      return external_react_default.a.createElement("div", {
        id: "outer-container"
      }, external_react_default.a.createElement(external_react_burger_menu_["elastic"], {
        right: true,
        elastic: true,
        width: 280,
        disableCloseOnEsc: true,
        pageWrapId: "page-wrap",
        outerContainerId: "outer-container"
      }, external_react_default.a.createElement("main", {
        id: "page-wrap"
      }), external_react_default.a.createElement("div", {
        className: "profile-menu"
      }, external_react_default.a.createElement("div", {
        className: "profile-wrapper"
      }, external_react_default.a.createElement("div", {
        className: "profile-image"
      }, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: "User Picture"
      })), external_react_default.a.createElement("h1", null, external_react_default.a.createElement(link_default.a, {
        href: ""
      }, external_react_default.a.createElement("a", null, "Jhon Doe"))), external_react_default.a.createElement("small", null, "20000 Credits")), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("div", {
        className: "d-flex align-items-center h-100 justify-content-center"
      }, external_react_default.a.createElement("ul", {
        className: "menu-items"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "/admin/dashboard"
      }, external_react_default.a.createElement("a", null, "Dashboard"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "/userprofile"
      }, external_react_default.a.createElement("a", null, "View Profile"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "edit-profile"
      }, external_react_default.a.createElement("a", null, "Edit Profile"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "connect-brand"
      }, external_react_default.a.createElement("a", null, "Create/Connect Brands"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "create-job"
      }, external_react_default.a.createElement("a", null, "Post a Job"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "create-shop"
      }, external_react_default.a.createElement("a", null, "Create a Shop"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "/become-instructor"
      }, external_react_default.a.createElement("a", null, "Become an Instructor"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "/account-settings"
      }, external_react_default.a.createElement("a", null, "Account Settings"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: ""
      }, external_react_default.a.createElement("a", null, "Log Out"))))))));
    }
  }]);

  return ProfileMenu;
}(external_react_default.a.Component);

;
/* harmony default export */ var components_ProfileMenu = (ProfileMenu_ProfileMenu);
// CONCATENATED MODULE: ./components/Header/SaDropdown.js
function SaDropdown_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SaDropdown_typeof = function _typeof(obj) { return typeof obj; }; } else { SaDropdown_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SaDropdown_typeof(obj); }

function SaDropdown_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SaDropdown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SaDropdown_createClass(Constructor, protoProps, staticProps) { if (protoProps) SaDropdown_defineProperties(Constructor.prototype, protoProps); if (staticProps) SaDropdown_defineProperties(Constructor, staticProps); return Constructor; }

function SaDropdown_possibleConstructorReturn(self, call) { if (call && (SaDropdown_typeof(call) === "object" || typeof call === "function")) { return call; } return SaDropdown_assertThisInitialized(self); }

function SaDropdown_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SaDropdown_getPrototypeOf(o) { SaDropdown_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SaDropdown_getPrototypeOf(o); }

function SaDropdown_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SaDropdown_setPrototypeOf(subClass, superClass); }

function SaDropdown_setPrototypeOf(o, p) { SaDropdown_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SaDropdown_setPrototypeOf(o, p); }



var SaDropdown_SaDropDown =
/*#__PURE__*/
function (_React$Component) {
  SaDropdown_inherits(SaDropDown, _React$Component);

  function SaDropDown() {
    SaDropdown_classCallCheck(this, SaDropDown);

    return SaDropdown_possibleConstructorReturn(this, SaDropdown_getPrototypeOf(SaDropDown).apply(this, arguments));
  }

  SaDropdown_createClass(SaDropDown, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("ul", {
        className: "sa-content"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", null, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/50"
      }), external_react_default.a.createElement("span", null, "lorem ipsam dolor lorem ipsam dolorlorem ipsam dolorlorem ipsam dolorlorem"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", null, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/50"
      }), external_react_default.a.createElement("span", null, "lorem ipsam dolor lorem ipsam dolorlorem ipsam dolorlorem ipsam dolorlorem"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", null, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/50"
      }), external_react_default.a.createElement("span", null, "lorem ipsam dolor lorem ipsam dolorlorem ipsam dolorlorem ipsam dolorlorem"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", null, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/50"
      }), external_react_default.a.createElement("span", null, "lorem ipsam dolor lorem ipsam dolorlorem ipsam dolorlorem ipsam dolorlorem"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", null, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/50"
      }), external_react_default.a.createElement("span", null, "lorem ipsam dolor lorem ipsam dolorlorem ipsam dolorlorem ipsam dolorlorem"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", null, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/50"
      }), external_react_default.a.createElement("span", null, "lorem ipsam dolor lorem ipsam dolorlorem ipsam dolorlorem ipsam dolorlorem"))));
    }
  }]);

  return SaDropDown;
}(external_react_default.a.Component);

/* harmony default export */ var SaDropdown = (SaDropdown_SaDropDown);
// CONCATENATED MODULE: ./components/Header.js
function Header_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header_typeof = function _typeof(obj) { return typeof obj; }; } else { Header_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header_typeof(obj); }

function Header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header_createClass(Constructor, protoProps, staticProps) { if (protoProps) Header_defineProperties(Constructor.prototype, protoProps); if (staticProps) Header_defineProperties(Constructor, staticProps); return Constructor; }

function Header_possibleConstructorReturn(self, call) { if (call && (Header_typeof(call) === "object" || typeof call === "function")) { return call; } return Header_assertThisInitialized(self); }

function Header_getPrototypeOf(o) { Header_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Header_getPrototypeOf(o); }

function Header_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Header_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Header_setPrototypeOf(subClass, superClass); }

function Header_setPrototypeOf(o, p) { Header_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Header_setPrototypeOf(o, p); }






fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faUserCircle"], free_solid_svg_icons_["faStream"], free_solid_svg_icons_["faToggleOn"], free_solid_svg_icons_["faCartPlus"], free_solid_svg_icons_["faBell"], free_solid_svg_icons_["faEnvelopeOpenText"]);






var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  Header_inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    Header_classCallCheck(this, Header);

    _this = Header_possibleConstructorReturn(this, Header_getPrototypeOf(Header).call(this, props));
    _this.toggleSA = _this.toggleSA.bind(Header_assertThisInitialized(_this));
    _this.toggleCart = _this.toggleCart.bind(Header_assertThisInitialized(_this));
    _this.toggleBell = _this.toggleBell.bind(Header_assertThisInitialized(_this));
    _this.toggleInbox = _this.toggleInbox.bind(Header_assertThisInitialized(_this));
    _this.state = {
      dropdownOpenSA: false,
      dropdownOpenCart: false,
      dropdownOpenBell: false,
      dropdownOpenInbox: false
    };
    return _this;
  }

  Header_createClass(Header, [{
    key: "toggleSA",
    value: function toggleSA() {
      this.setState(function (prevState) {
        return {
          dropdownOpenSA: !prevState.dropdownOpenSA
        };
      });
    }
  }, {
    key: "toggleCart",
    value: function toggleCart() {
      this.setState(function (prevState) {
        return {
          dropdownOpenCart: !prevState.dropdownOpenCart
        };
      });
    }
  }, {
    key: "toggleBell",
    value: function toggleBell() {
      this.setState(function (prevState) {
        return {
          dropdownOpenBell: !prevState.dropdownOpenBell
        };
      });
    }
  }, {
    key: "toggleInbox",
    value: function toggleInbox() {
      this.setState(function (prevState) {
        return {
          dropdownOpenInbox: !prevState.dropdownOpenInbox
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("section", null, external_react_default.a.createElement("header", null, external_react_default.a.createElement("nav", {
        className: "navbar navbar-expand-md fixed-top navbar-dark"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/"
      }, external_react_default.a.createElement("a", {
        className: "nav-link"
      }, external_react_default.a.createElement("img", {
        src: "http://deepdenv1.herokuapp.com/9d1b1a3d1bfd40c2e0173de06dda6a83.png",
        height: "34px",
        alt: "logo"
      }))), external_react_default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarCollapse",
        "aria-controls": "navbarCollapse",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, external_react_default.a.createElement("span", {
        className: "navbar-toggler-icon"
      })), external_react_default.a.createElement(components_SearchBox, null), external_react_default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarCollapse"
      }, external_react_default.a.createElement("ul", {
        className: "navbar-nav mr-auto navbar-logged-in"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "/people"
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: "stream"
      })))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_reactstrap_["Dropdown"], {
        className: "icon-menu switch-account",
        isOpen: this.state.dropdownOpenSA,
        toggle: this.toggleSA
      }, external_react_default.a.createElement(external_reactstrap_["DropdownToggle"], {
        toggle: true
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: "toggle-on"
      })), external_react_default.a.createElement("div", {
        className: "dropdown-wrapper"
      }, external_react_default.a.createElement(external_reactstrap_["DropdownMenu"], null, external_react_default.a.createElement(external_reactstrap_["DropdownItem"], {
        header: true
      }, "Switch Account"), external_react_default.a.createElement(SaDropdown, null))))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_reactstrap_["Dropdown"], {
        className: "icon-menu cart",
        isOpen: this.state.dropdownOpenCart,
        toggle: this.toggleCart
      }, external_react_default.a.createElement(external_reactstrap_["DropdownToggle"], null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: "cart-plus"
      })), external_react_default.a.createElement("div", {
        className: "dropdown-wrapper"
      }, external_react_default.a.createElement(external_reactstrap_["DropdownMenu"], null, external_react_default.a.createElement(external_reactstrap_["DropdownItem"], {
        header: true
      }, "Cart"), external_react_default.a.createElement(SaDropdown, null))))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_reactstrap_["Dropdown"], {
        className: "icon-menu notification",
        isOpen: this.state.dropdownOpenBell,
        toggle: this.toggleBell
      }, external_react_default.a.createElement(external_reactstrap_["DropdownToggle"], null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: "bell"
      })), external_react_default.a.createElement(external_reactstrap_["DropdownMenu"], null, external_react_default.a.createElement(external_reactstrap_["DropdownItem"], {
        header: true
      }, "Notifications"), external_react_default.a.createElement(SaDropdown, null)))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_reactstrap_["Dropdown"], {
        className: "icon-menu inbox",
        isOpen: this.state.dropdownOpenInbox,
        toggle: this.toggleInbox
      }, external_react_default.a.createElement(external_reactstrap_["DropdownToggle"], null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: "envelope-open-text"
      })), external_react_default.a.createElement(external_reactstrap_["DropdownMenu"], null, external_react_default.a.createElement(external_reactstrap_["DropdownItem"], {
        header: true
      }, "Inbox"), external_react_default.a.createElement(SaDropdown, null)))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "/campaigns"
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: "user-circle"
      }), external_react_default.a.createElement(components_ProfileMenu, null)))))))), external_react_default.a.createElement(Menubar, null));
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
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Meta, null), external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement("div", {
        className: "main-wrapper"
      }, this.props.children));
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
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ })
/******/ ]);