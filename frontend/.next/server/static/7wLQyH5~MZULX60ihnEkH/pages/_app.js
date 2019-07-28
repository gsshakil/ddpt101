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
/* 1 */,
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

module.exports = __webpack_require__(42);


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

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

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(2);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__(39);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__(40);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(35);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(34);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(15);

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
    className: "form-control border-0",
    type: "search",
    placeholder: placeholder,
    onChange: onChange,
    value: value
  }), external_react_default.a.createElement("button", {
    className: "search-icon"
  }, external_react_default.a.createElement("i", {
    className: "zmdi zmdi-search zmdi-hc-lg"
  }))));
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



 // import avatar1 from '../../static/logo2.png';

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

      var profileMenuClassName;

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
        src: "",
        alt: ""
      })), external_react_default.a.createElement("h1", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: ""
      }, "Jhon Doe")), external_react_default.a.createElement("small", null, "20000 Credits")), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("div", {
        className: "d-flex align-items-center h-100 justify-content-center"
      }, external_react_default.a.createElement("ul", {
        className: "menu-items"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: "/admin/dashboard",
        onClick: onToggleProfileMenu
      }, "Dashboard")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: "/userprofile",
        onClick: onToggleProfileMenu
      }, "View Profile")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: "edit-profile",
        onClick: onToggleProfileMenu
      }, "Edit Profile")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: "connect-brand",
        onClick: onToggleProfileMenu
      }, "Create/Connect Brands")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: "create-job",
        onClick: onToggleProfileMenu
      }, "Post a Job")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: "create-shop",
        onClick: onToggleProfileMenu
      }, "Create a Shop")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: "/become-instructor",
        onClick: onToggleProfileMenu
      }, "Become an Instructor")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: "/account-settings",
        onClick: onToggleProfileMenu
      }, "Account Settings")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: ""
      }, "Log Out")))))));
    }
  }]);

  return ProfileMenu;
}(external_react_default.a.Component);

;
/* harmony default export */ var components_ProfileMenu = (ProfileMenu_ProfileMenu);
// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__(37);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(36);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// CONCATENATED MODULE: ./components/MailNotification/NotificationItem.js




var NotificationItem_NotificationItem = function NotificationItem(_ref) {
  var notification = _ref.notification;
  var image = notification.image,
      badge = notification.badge,
      name = notification.name,
      time = notification.time,
      message = notification.message;
  return external_react_default.a.createElement("li", {
    className: "media"
  }, external_react_default.a.createElement("div", {
    className: "user-avatar"
  }, external_react_default.a.createElement(Avatar_default.a, {
    alt: name,
    src: image
  }), external_react_default.a.createElement("span", {
    className: "badge badge-danger rounded-circle"
  }, badge)), external_react_default.a.createElement("div", {
    className: "media-body"
  }, external_react_default.a.createElement("div", {
    className: "d-flex justify-content-between align-items-center"
  }, external_react_default.a.createElement("h5", {
    className: "text-capitalize user-name mb-0"
  }, external_react_default.a.createElement("a", {
    href: "javascript:void(0)"
  }, name)), external_react_default.a.createElement("span", {
    className: "meta-date"
  }, external_react_default.a.createElement("small", null, time))), external_react_default.a.createElement("p", {
    className: "sub-heading"
  }, message), external_react_default.a.createElement(Button_default.a, {
    className: "jr-btn jr-btn-xs text-muted"
  }, external_react_default.a.createElement("i", {
    className: "zmdi zmdi-mail-reply"
  }), external_react_default.a.createElement("span", null, "Reply")), external_react_default.a.createElement(Button_default.a, {
    className: "jr-btn jr-btn-xs text-muted"
  }, external_react_default.a.createElement("i", {
    className: "zmdi zmdi-eye"
  }), external_react_default.a.createElement("span", null, "Read"))));
};

/* harmony default export */ var MailNotification_NotificationItem = (NotificationItem_NotificationItem);
// CONCATENATED MODULE: ./components/MailNotification/data.js
var notifications = [{
  id: 1,
  image: 'http://via.placeholder.com/256x256',
  name: "Domnic Brown",
  time: "6:19 PM",
  message: "There are many variations of passages of...",
  badge: 5
}, {
  id: 2,
  image: 'http://via.placeholder.com/256x256',
  name: "John Smith",
  time: "4:18 PM",
  message: "Lorem Ipsum is simply dummy text of the..."
}, {
  id: 3,
  image: 'http://via.placeholder.com/256x256',
  name: "John Smith",
  time: "7:10 PM",
  message: "The point of using Lorem Ipsum is that it has a...",
  badge: 8
}, {
  id: 4,
  image: 'http://via.placeholder.com/256x256',
  name: "alex dolgove",
  time: "5:10 PM",
  message: "It is a long established fact that a reader will..."
}, {
  id: 5,
  image: 'http://via.placeholder.com/256x256',
  name: "Domnic Harris",
  time: "7:35 PM",
  message: "All the Lorem Ipsum generators on the...",
  badge: 3
}];
// CONCATENATED MODULE: ./components/MailNotification/index.js




var MailNotification_MailNotification = function MailNotification() {
  $('.messages-list').slimscroll({
    height: '280px'
  });
  return external_react_default.a.createElement("div", {
    className: "messages-list"
  }, external_react_default.a.createElement("ul", {
    className: "list-unstyled"
  }, notifications.map(function (notification, index) {
    return external_react_default.a.createElement(MailNotification_NotificationItem, {
      key: index,
      notification: notification
    });
  })));
};

/* harmony default export */ var components_MailNotification = (MailNotification_MailNotification);
// CONCATENATED MODULE: ./components/SwitchAccount/index.js

 // import  from '../../../public/brand1.png';

var SwitchAccount_Cart = function Cart() {
  $('.messages-list').slimscroll({
    height: '280px'
  });
  return external_react_default.a.createElement("div", {
    className: "messages-list"
  }, external_react_default.a.createElement("div", {
    className: "d-flex align-items-center h-100 justify-content-center"
  }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
    to: ""
  }, external_react_default.a.createElement("img", {
    src: "",
    alt: ""
  }), external_react_default.a.createElement("h3", null, "Account Title"), external_react_default.a.createElement("p", null, "32 Notifications"), external_react_default.a.createElement("p", null, "22 Messages"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
    to: ""
  }, external_react_default.a.createElement("img", {
    src: "",
    alt: ""
  }), external_react_default.a.createElement("h3", null, "Account Title"), external_react_default.a.createElement("p", null, "32 Notifications"), external_react_default.a.createElement("p", null, "22 Messages"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
    to: ""
  }, external_react_default.a.createElement("img", {
    src: "",
    alt: ""
  }), external_react_default.a.createElement("h3", null, "Account Title"), external_react_default.a.createElement("p", null, "32 Notifications"), external_react_default.a.createElement("p", null, "22 Messages"))))));
};

/* harmony default export */ var components_SwitchAccount = (SwitchAccount_Cart);
// CONCATENATED MODULE: ./components/Cart/index.js


var Cart_SwitchAccount = function SwitchAccount() {
  $('.messages-list').slimscroll({
    height: '280px'
  });
  return external_react_default.a.createElement("div", {
    className: "messages-list"
  }, external_react_default.a.createElement("div", {
    className: "d-flex align-items-center h-100 justify-content-center"
  }, "Cart"));
};

/* harmony default export */ var components_Cart = (Cart_SwitchAccount);
// CONCATENATED MODULE: ./components/AppNotification/NotificationItem.js




var AppNotification_NotificationItem_NotificationItem = function NotificationItem(_ref) {
  var notification = _ref.notification;
  var icon = notification.icon,
      image = notification.image,
      title = notification.title,
      time = notification.time;
  return external_react_default.a.createElement("li", {
    className: "media"
  }, external_react_default.a.createElement(Avatar_default.a, {
    alt: image,
    src: image,
    className: "user-avatar"
  }), external_react_default.a.createElement("div", {
    className: "media-body align-self-center"
  }, external_react_default.a.createElement("p", {
    className: "sub-heading mb-0"
  }, title), external_react_default.a.createElement(Button_default.a, {
    size: "small",
    className: "jr-btn jr-btn-xs mb-0"
  }, external_react_default.a.createElement("i", {
    className: "zmdi ".concat(icon, " zmdi-hc-fw")
  })), " ", external_react_default.a.createElement("span", {
    className: "meta-date"
  }, external_react_default.a.createElement("small", null, time))));
};

/* harmony default export */ var AppNotification_NotificationItem = (AppNotification_NotificationItem_NotificationItem);
// CONCATENATED MODULE: ./components/AppNotification/data.js
var data_notifications = [{
  image: 'http://via.placeholder.com/256x256',
  title: "Stella Johnson has recently posted an album",
  time: "4:10 PM",
  icon: "zmdi-thumb-up text-blue"
}, {
  image: 'http://via.placeholder.com/256x256',
  title: "Alex Brown has shared Martin Guptil's post",
  time: "5:18 PM",
  icon: "zmdi-comment-text text-grey"
}, {
  image: 'http://via.placeholder.com/256x256',
  title: "Domnic Brown has sent you a group invitation for Global Health",
  time: "5:36 PM",
  icon: "zmdi-card-giftcard text-info"
}, {
  image: 'http://via.placeholder.com/256x256',
  title: "John Smith has birthday today",
  time: "5:54 PM",
  icon: "zmdi-cake text-warning"
}, {
  image: 'http://via.placeholder.com/256x256',
  title: "Chris has updated his profile picture",
  time: "5:25 PM",
  icon: "zmdi-account-box-o text-grey"
}];
// CONCATENATED MODULE: ./components/AppNotification/index.js




var AppNotification_AppNotification = function AppNotification() {
  $('.messages-list').slimscroll({
    height: '280px'
  });
  return external_react_default.a.createElement("div", {
    className: "messages-list"
  }, external_react_default.a.createElement("ul", {
    className: "list-unstyled"
  }, data_notifications.map(function (notification, index) {
    return external_react_default.a.createElement(AppNotification_NotificationItem, {
      key: index,
      notification: notification
    });
  })));
};

/* harmony default export */ var components_AppNotification = (AppNotification_AppNotification);
// EXTERNAL MODULE: external "@material-ui/core/Menu"
var Menu_ = __webpack_require__(38);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// CONCATENATED MODULE: ./components/dashboard/Common/CardMenu.js
function CardMenu_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CardMenu_typeof = function _typeof(obj) { return typeof obj; }; } else { CardMenu_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CardMenu_typeof(obj); }

function CardMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CardMenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CardMenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) CardMenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) CardMenu_defineProperties(Constructor, staticProps); return Constructor; }

function CardMenu_possibleConstructorReturn(self, call) { if (call && (CardMenu_typeof(call) === "object" || typeof call === "function")) { return call; } return CardMenu_assertThisInitialized(self); }

function CardMenu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CardMenu_getPrototypeOf(o) { CardMenu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CardMenu_getPrototypeOf(o); }

function CardMenu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CardMenu_setPrototypeOf(subClass, superClass); }

function CardMenu_setPrototypeOf(o, p) { CardMenu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CardMenu_setPrototypeOf(o, p); }




var CardMenu_CardMenu =
/*#__PURE__*/
function (_React$Component) {
  CardMenu_inherits(CardMenu, _React$Component);

  function CardMenu() {
    CardMenu_classCallCheck(this, CardMenu);

    return CardMenu_possibleConstructorReturn(this, CardMenu_getPrototypeOf(CardMenu).apply(this, arguments));
  }

  CardMenu_createClass(CardMenu, [{
    key: "render",
    value: function render() {
      var ITEM_HEIGHT = 40;
      var options = ['Update Data', 'Detailed Log', 'Statistics', 'Clear Data'];
      var _this$props = this.props,
          menuState = _this$props.menuState,
          anchorEl = _this$props.anchorEl,
          handleRequestClose = _this$props.handleRequestClose;
      return external_react_default.a.createElement(Menu_default.a, {
        id: "long-menu",
        anchorEl: anchorEl,
        open: menuState,
        onClose: handleRequestClose,
        style: {
          maxHeight: ITEM_HEIGHT * 4.5
        },
        MenuListProps: {
          style: {
            width: 150,
            paddingTop: 0,
            paddingBottom: 0
          }
        }
      }, options.map(function (option) {
        return external_react_default.a.createElement(Menu_["MenuItem"], {
          key: option,
          onClick: handleRequestClose
        }, option);
      }));
    }
  }]);

  return CardMenu;
}(external_react_default.a.Component);

/* harmony default export */ var Common_CardMenu = (CardMenu_CardMenu);
// CONCATENATED MODULE: ./components/dashboard/Common/CardHeader/index.js
function CardHeader_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CardHeader_typeof = function _typeof(obj) { return typeof obj; }; } else { CardHeader_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CardHeader_typeof(obj); }

function CardHeader_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CardHeader_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CardHeader_createClass(Constructor, protoProps, staticProps) { if (protoProps) CardHeader_defineProperties(Constructor.prototype, protoProps); if (staticProps) CardHeader_defineProperties(Constructor, staticProps); return Constructor; }

function CardHeader_possibleConstructorReturn(self, call) { if (call && (CardHeader_typeof(call) === "object" || typeof call === "function")) { return call; } return CardHeader_assertThisInitialized(self); }

function CardHeader_getPrototypeOf(o) { CardHeader_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CardHeader_getPrototypeOf(o); }

function CardHeader_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CardHeader_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CardHeader_setPrototypeOf(subClass, superClass); }

function CardHeader_setPrototypeOf(o, p) { CardHeader_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CardHeader_setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CardHeader_CardHeader =
/*#__PURE__*/
function (_React$Component) {
  CardHeader_inherits(CardHeader, _React$Component);

  function CardHeader() {
    var _this;

    CardHeader_classCallCheck(this, CardHeader);

    _this = CardHeader_possibleConstructorReturn(this, CardHeader_getPrototypeOf(CardHeader).call(this));

    _defineProperty(CardHeader_assertThisInitialized(_this), "onOptionMenuSelect", function (event) {
      _this.setState({
        menuState: true,
        anchorEl: event.currentTarget
      });
    });

    _defineProperty(CardHeader_assertThisInitialized(_this), "handleRequestClose", function () {
      _this.setState({
        menuState: false
      });
    });

    _this.state = {
      anchorEl: undefined,
      menuState: false
    };
    return _this;
  }

  CardHeader_createClass(CardHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          heading = _this$props.heading,
          subHeading = _this$props.subHeading;
      var styleName = this.props.styleName;

      if (!styleName) {
        styleName = "";
      }

      var _this$state = this.state,
          anchorEl = _this$state.anchorEl,
          menuState = _this$state.menuState;
      return external_react_default.a.createElement("div", {
        className: "jr-card-header d-flex ".concat(styleName)
      }, external_react_default.a.createElement("div", {
        className: "mr-auto"
      }, external_react_default.a.createElement("h3", {
        className: "card-heading"
      }, heading), subHeading && external_react_default.a.createElement("p", {
        className: "sub-heading"
      }, subHeading)), external_react_default.a.createElement(IconButton_default.a, {
        className: "size-30",
        onClick: this.onOptionMenuSelect.bind(this)
      }, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-chevron-down"
      })), external_react_default.a.createElement(Common_CardMenu, {
        menuState: menuState,
        anchorEl: anchorEl,
        handleRequestClose: this.handleRequestClose.bind(this)
      }));
    }
  }]);

  return CardHeader;
}(external_react_default.a.Component);

/* harmony default export */ var Common_CardHeader = (CardHeader_CardHeader);
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

function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import React from 'react';
// import Link from 'next/link';
// export default class Header extends React.Component{
//   render(){
//     return(
//       <div> 
//         <header>
//           <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//             <Link href="/"><a>Deepden</a></Link>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarCollapse">
//               <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                   <Link href="/people"><a>People</a></Link>                  
//                 </li>
//                 <li className="nav-item active">
//                   <Link href="/brands"><a>Brands</a></Link>                  
//                 </li>
//                 <li className="nav-item">
//                   <Link href="/projects"><a>Projects</a></Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link href="/products"><a>Products</a></Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link href="/jobs"><a>Jobs</a></Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link href="/campaigns"><a>Campaigns</a></Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link href="/academy"><a>Academy</a></Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </header>
//       </div>
//     );
//   }
// } 





 // import {COLLAPSED_DRAWER, FIXED_DRAWER} from './constants/ActionTypes';







 // import logo2 from '../static/logo2.png';

var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  Header_inherits(Header, _React$Component);

  function Header() {
    var _this;

    Header_classCallCheck(this, Header);

    _this = Header_possibleConstructorReturn(this, Header_getPrototypeOf(Header).call(this));

    Header_defineProperty(Header_assertThisInitialized(_this), "onAppNotificationSelect", function () {
      _this.setState({
        appNotification: !_this.state.appNotification
      });
    });

    Header_defineProperty(Header_assertThisInitialized(_this), "onSwitchAccountSelect", function () {
      _this.setState({
        switchAccount: !_this.state.switchAccount
      });
    });

    Header_defineProperty(Header_assertThisInitialized(_this), "onCartSelect", function () {
      _this.setState({
        cart: !_this.state.cart
      });
    });

    Header_defineProperty(Header_assertThisInitialized(_this), "onMailNotificationSelect", function () {
      _this.setState({
        mailNotification: !_this.state.mailNotification
      });
    });

    Header_defineProperty(Header_assertThisInitialized(_this), "onSearchBoxSelect", function () {
      _this.setState({
        searchBox: !_this.state.searchBox
      });
    });

    Header_defineProperty(Header_assertThisInitialized(_this), "handleRequestClose", function () {
      _this.setState({
        switchAccount: false,
        cart: false,
        mailNotification: false,
        appNotification: false,
        searchBox: false
      });
    });

    _this.state = {
      searchBox: false,
      searchText: '',
      switchAccount: false,
      cart: false,
      mailNotification: false,
      appNotification: false
    };
    return _this;
  }

  Header_createClass(Header, [{
    key: "updateSearchText",
    value: function updateSearchText(evt) {
      this.setState({
        searchText: evt.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      // let profileMenuClassName;                    
      // const onToggleProfileMenu = () => {
      //     console.log("Profile Menu Working....");
      //     profileMenuClassName = this.state.profileMenuOpen ? 'profile-menu open' : 'profile-menu'; 
      // }
      // const {onToggleCollapsedNav, drawerType} = this.props;        
      // const drawerStyle = drawerType.includes(FIXED_DRAWER) ? "d-block d-xl-none" : drawerType.includes(COLLAPSED_DRAWER) ? "d-block" : "d-none";
      return external_react_default.a.createElement(AppBar_default.a, {
        className: "app-main-header"
      }, external_react_default.a.createElement(Toolbar_default.a, {
        className: "app-toolbar",
        disableGutters: false
      }, external_react_default.a.createElement("a", {
        className: "app-logo",
        href: "#/"
      }, external_react_default.a.createElement("img", {
        src: "",
        alt: "deepden",
        title: "deepden"
      })), external_react_default.a.createElement(components_SearchBox, {
        styleName: "d-none d-sm-block",
        placeholder: "",
        onChange: this.updateSearchText.bind(this),
        value: this.state.searchText
      }), external_react_default.a.createElement("ul", {
        className: "header-menu"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: "/create-job"
      }, "Post a Job")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: "/create-shop"
      }, "Create a Shop")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: "/create-brand"
      }, "Promote Business")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: "/become-instructor"
      }, "Become an Instructor"))), external_react_default.a.createElement("ul", {
        className: "header-notifications list-inline ml-auto"
      }, external_react_default.a.createElement("li", {
        className: "d-inline-block d-sm-none list-inline-item"
      }, external_react_default.a.createElement(external_reactstrap_["Dropdown"], {
        className: "quick-menu nav-searchbox",
        isOpen: this.state.searchBox,
        toggle: this.onSearchBoxSelect.bind(this)
      }, external_react_default.a.createElement(external_reactstrap_["DropdownToggle"], {
        className: "d-inline-block",
        tag: "span",
        "data-toggle": "dropdown"
      }, external_react_default.a.createElement(IconButton_default.a, {
        className: "icon-btn size-30"
      }, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-search zmdi-hc-fw"
      }))), external_react_default.a.createElement(external_reactstrap_["DropdownMenu"], {
        right: true,
        className: "p-0"
      }, external_react_default.a.createElement(components_SearchBox, {
        styleName: "search-dropdown",
        placeholder: "",
        onChange: this.updateSearchText.bind(this),
        value: this.state.searchText
      })))), external_react_default.a.createElement("li", {
        className: "list-inline-item"
      }, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: "/news-feed"
      }, external_react_default.a.createElement(IconButton_default.a, {
        className: "icon-btn size-30",
        "aria-label": "Menu"
      }, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-home icon-profile-menu infinite wobble"
      }), external_react_default.a.createElement("span", {
        className: "menu-icon"
      }))), external_react_default.a.createElement(components_ProfileMenu, null)), external_react_default.a.createElement("li", {
        className: "list-inline-item switch-account"
      }, external_react_default.a.createElement(external_reactstrap_["Dropdown"], {
        className: "quick-menu",
        isOpen: this.state.switchAccount,
        toggle: this.onSwitchAccountSelect.bind(this)
      }, external_react_default.a.createElement(external_reactstrap_["DropdownToggle"], {
        className: "d-inline-block",
        tag: "span",
        "data-toggle": "dropdown"
      }, external_react_default.a.createElement(IconButton_default.a, {
        className: "icon-btn size-30"
      }, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-account-box-mail infinite wobble"
      }))), external_react_default.a.createElement(external_reactstrap_["DropdownMenu"], {
        right: true
      }, external_react_default.a.createElement(Common_CardHeader, {
        styleName: "align-items-center",
        heading: "SwitchAccount"
      }), external_react_default.a.createElement(components_SwitchAccount, null)))), external_react_default.a.createElement("li", {
        className: "list-inline-item cart"
      }, external_react_default.a.createElement(external_reactstrap_["Dropdown"], {
        className: "quick-menu",
        isOpen: this.state.cart,
        toggle: this.onCartSelect.bind(this)
      }, external_react_default.a.createElement(external_reactstrap_["DropdownToggle"], {
        className: "d-inline-block",
        tag: "span",
        "data-toggle": "dropdown"
      }, external_react_default.a.createElement(IconButton_default.a, {
        className: "icon-btn size-30"
      }, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-shopping-cart icon-alert infinite wobble"
      }))), external_react_default.a.createElement(external_reactstrap_["DropdownMenu"], {
        right: true
      }, external_react_default.a.createElement(Common_CardHeader, {
        styleName: "align-items-center",
        heading: "Cart"
      }), external_react_default.a.createElement(components_Cart, null)))), external_react_default.a.createElement("li", {
        className: "list-inline-item app-tour"
      }, external_react_default.a.createElement(external_reactstrap_["Dropdown"], {
        className: "quick-menu",
        isOpen: this.state.appNotification,
        toggle: this.onAppNotificationSelect.bind(this)
      }, external_react_default.a.createElement(external_reactstrap_["DropdownToggle"], {
        className: "d-inline-block",
        tag: "span",
        "data-toggle": "dropdown"
      }, external_react_default.a.createElement(IconButton_default.a, {
        className: "icon-btn size-30"
      }, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-notifications-active icon-alert animated infinite wobble"
      }))), external_react_default.a.createElement(external_reactstrap_["DropdownMenu"], {
        right: true
      }, external_react_default.a.createElement(Common_CardHeader, {
        styleName: "align-items-center",
        heading: "Notifications"
      }), external_react_default.a.createElement(components_AppNotification, null)))), external_react_default.a.createElement("li", {
        className: "list-inline-item mail-tour"
      }, external_react_default.a.createElement(external_reactstrap_["Dropdown"], {
        className: "quick-menu",
        isOpen: this.state.mailNotification,
        toggle: this.onMailNotificationSelect.bind(this)
      }, external_react_default.a.createElement(external_reactstrap_["DropdownToggle"], {
        className: "d-inline-block",
        tag: "span",
        "data-toggle": "dropdown"
      }, external_react_default.a.createElement(IconButton_default.a, {
        className: "icon-btn size-30"
      }, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-comment-alt-text icon-alert zmdi-hc-fw"
      }))), external_react_default.a.createElement(external_reactstrap_["DropdownMenu"], {
        right: true
      }, external_react_default.a.createElement(Common_CardHeader, {
        styleName: "align-items-center",
        heading: "Messages"
      }), external_react_default.a.createElement(components_MailNotification, null)))), external_react_default.a.createElement("li", {
        className: "list-inline-item btn-profile-menu"
      }, external_react_default.a.createElement(IconButton_default.a, {
        className: "icon-btn size-30",
        "aria-label": "Menu",
        onClick: onToggleProfileMenu
      }, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-account-circle icon-profile-menu infinite wobble"
      }), external_react_default.a.createElement("span", {
        className: "menu-icon"
      }))))));
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

/***/ })
/******/ ]);