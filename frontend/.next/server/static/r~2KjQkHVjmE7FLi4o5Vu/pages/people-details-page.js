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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
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

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

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

/***/ 50:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(69);


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(34);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(44);

// CONCATENATED MODULE: ./components/Projects/ProjectDetails.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ProjectDetails_ProjectDetails =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProjectDetails, _React$Component);

  function ProjectDetails(props) {
    var _this;

    _classCallCheck(this, ProjectDetails);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProjectDetails).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      activeTab: '1'
    };
    return _this;
  }

  _createClass(ProjectDetails, [{
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
      return external_react_default.a.createElement("div", {
        className: "product-page-area project-details"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "gallary-warpper"
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
      })))))))), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-8"
      }, external_react_default.a.createElement("div", {
        className: "project-description"
      }, external_react_default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, explicabo voluptate autem quisquam quia exercitationem ratione, fugiat nulla reiciendis atque unde excepturi architecto accusantium pariatur fuga sit. Praesentium, ab modi?")), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("div", {
        className: "comments"
      }, external_react_default.a.createElement("h2", null, "54 Responses"), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("div", {
        className: "comment-item-primary"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-2 text-center"
      }, external_react_default.a.createElement("div", {
        className: "comment-avatar"
      }, external_react_default.a.createElement("img", {
        src: product3,
        alt: ""
      }))), external_react_default.a.createElement("div", {
        className: "col-md-10"
      }, external_react_default.a.createElement("div", {
        className: "comment-content"
      }, external_react_default.a.createElement("h3", null, external_react_default.a.createElement("a", {
        href: ""
      }, "User name")), external_react_default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima accusamus esse, delectus alias deleniti dolorum quia laboriosam nostrum dolor nam asperiores sequi error tempora temporibus eveniet maiores mollitia vel? Harum."), external_react_default.a.createElement("p", null, "on Oc 23, 2019 11:21 AM"), external_react_default.a.createElement("div", {
        className: "like-reply pull-right"
      }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "Like"), external_react_default.a.createElement("li", null, "Reply"))))))))), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement("ul", {
        className: "right-widgets"
      }, external_react_default.a.createElement("li", null, "Share"), external_react_default.a.createElement("li", null, "Tag"), external_react_default.a.createElement("li", null, "Viewed"), external_react_default.a.createElement("li", null, "Liked"), external_react_default.a.createElement("li", null, "Favorited")), external_react_default.a.createElement("div", {
        className: "more-by-user"
      }, external_react_default.a.createElement("h3", null, "More by User"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      })))), external_react_default.a.createElement("div", {
        className: "related-projects"
      }, external_react_default.a.createElement("h3", null, "Related Projects"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      }))))))));
    }
  }]);

  return ProjectDetails;
}(external_react_default.a.Component);

;
/* harmony default export */ var Projects_ProjectDetails = (ProjectDetails_ProjectDetails);
// CONCATENATED MODULE: ./components/Projects/ProjectCard.js
function ProjectCard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProjectCard_typeof = function _typeof(obj) { return typeof obj; }; } else { ProjectCard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProjectCard_typeof(obj); }

function ProjectCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProjectCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProjectCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProjectCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProjectCard_defineProperties(Constructor, staticProps); return Constructor; }

function ProjectCard_possibleConstructorReturn(self, call) { if (call && (ProjectCard_typeof(call) === "object" || typeof call === "function")) { return call; } return ProjectCard_assertThisInitialized(self); }

function ProjectCard_getPrototypeOf(o) { ProjectCard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProjectCard_getPrototypeOf(o); }

function ProjectCard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProjectCard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProjectCard_setPrototypeOf(subClass, superClass); }

function ProjectCard_setPrototypeOf(o, p) { ProjectCard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProjectCard_setPrototypeOf(o, p); }





var ProjectCard_ProjectCard =
/*#__PURE__*/
function (_React$Component) {
  ProjectCard_inherits(ProjectCard, _React$Component);

  function ProjectCard() {
    var _this;

    ProjectCard_classCallCheck(this, ProjectCard);

    _this = ProjectCard_possibleConstructorReturn(this, ProjectCard_getPrototypeOf(ProjectCard).call(this));
    _this.state = {
      modal: false
    };
    _this.toggle = _this.toggle.bind(ProjectCard_assertThisInitialized(_this));
    return _this;
  }

  ProjectCard_createClass(ProjectCard, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  }, {
    key: "render",
    value: function render(props) {
      return external_react_default.a.createElement("div", {
        className: "project-card"
      }, external_react_default.a.createElement("div", {
        className: "content"
      }, external_react_default.a.createElement("div", {
        className: "avatar"
      }, external_react_default.a.createElement("img", {
        src: this.props.projectImage,
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "card-content"
      }, external_react_default.a.createElement("div", {
        className: "inside-content",
        onClick: this.toggle
      }, external_react_default.a.createElement("div", {
        className: "centered-content"
      }, external_react_default.a.createElement("h3", null, this.props.projectTitle), external_react_default.a.createElement("div", {
        className: "by"
      }, external_react_default.a.createElement("img", {
        src: this.props.byAvatar,
        alt: ""
      }), external_react_default.a.createElement("h4", null, this.props.byUserName)), external_react_default.a.createElement("ul", {
        className: "categories"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: ""
      }, this.props.category)), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: ""
      }, this.props.category)), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: ""
      }, this.props.category))), external_react_default.a.createElement("div", {
        className: "date-time"
      }, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-time infinite wobble"
      }), this.props.dateTime))))), external_react_default.a.createElement("ul", {
        className: "project-card-footer"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: ""
      }, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-favorite infinite wobble"
      }))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: ""
      }, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-comments infinite wobble"
      }), " ", this.props.commentCount)), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: ""
      }, external_react_default.a.createElement("i", {
        className: "zmdi zmdi-eye infinite wobble"
      }), " ", this.props.viewCount))), external_react_default.a.createElement(external_reactstrap_["Modal"], {
        className: "project-detail-modal",
        isOpen: this.state.modal,
        toggle: this.toggle
      }, external_react_default.a.createElement(external_reactstrap_["ModalHeader"], {
        toggle: this.toggle
      }, external_react_default.a.createElement("div", {
        className: "byAvatar"
      }, external_react_default.a.createElement("img", {
        src: this.props.byAvatar,
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "byContent"
      }, external_react_default.a.createElement("h3", null, external_react_default.a.createElement("a", {
        href: ""
      }, "Project Title")), this.props.byUserName, " on Oct 23, 2019 12:34 PM"), external_react_default.a.createElement("div", {
        className: "button-group"
      }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_reactstrap_["Button"], {
        className: "btn btn-info"
      }, "Like")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_reactstrap_["Button"], {
        className: "btn btn-info"
      }, "Favorite"))))), external_react_default.a.createElement(external_reactstrap_["ModalBody"], null, external_react_default.a.createElement(Projects_ProjectDetails, null))));
    }
  }]);

  return ProjectCard;
}(external_react_default.a.Component);

;
/* harmony default export */ var Projects_ProjectCard = __webpack_exports__["a"] = (ProjectCard_ProjectCard);

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

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

// EXTERNAL MODULE: ./components/Projects/ProjectCard.js + 1 modules
var ProjectCard = __webpack_require__(54);

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
/* harmony default export */ var Products_ProductCard = (ProductCard_ProductCard);
// CONCATENATED MODULE: ./components/Jobs/JobCard.js
function JobCard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { JobCard_typeof = function _typeof(obj) { return typeof obj; }; } else { JobCard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return JobCard_typeof(obj); }

function JobCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function JobCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function JobCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) JobCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) JobCard_defineProperties(Constructor, staticProps); return Constructor; }

function JobCard_possibleConstructorReturn(self, call) { if (call && (JobCard_typeof(call) === "object" || typeof call === "function")) { return call; } return JobCard_assertThisInitialized(self); }

function JobCard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function JobCard_getPrototypeOf(o) { JobCard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return JobCard_getPrototypeOf(o); }

function JobCard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) JobCard_setPrototypeOf(subClass, superClass); }

function JobCard_setPrototypeOf(o, p) { JobCard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return JobCard_setPrototypeOf(o, p); }




var JobCard_JobCard =
/*#__PURE__*/
function (_React$Component) {
  JobCard_inherits(JobCard, _React$Component);

  function JobCard() {
    JobCard_classCallCheck(this, JobCard);

    return JobCard_possibleConstructorReturn(this, JobCard_getPrototypeOf(JobCard).apply(this, arguments));
  }

  JobCard_createClass(JobCard, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "job-card"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/job-details"
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("h3", null, "Job Title"))), external_react_default.a.createElement("h5", null, "Job Type"), external_react_default.a.createElement("h5", null, "Job Location"), external_react_default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, natus totam aliquid veniam odio sapiente soluta illo sequi, debitis culpa reiciendis blanditiis optio quae repellendus dolores dolor ducimus ipsa harum."), external_react_default.a.createElement("h5", null, "Job Qualification"), external_react_default.a.createElement("h5", null, "Required Skills"), external_react_default.a.createElement("h5", null, "Sallary/Budget"));
    }
  }]);

  return JobCard;
}(external_react_default.a.Component);

;
/* harmony default export */ var Jobs_JobCard = (JobCard_JobCard);
// CONCATENATED MODULE: ./components/Academy/LearningPathCard.js



var LearningPathCard_LearningPathCard = function LearningPathCard() {
  return external_react_default.a.createElement("div", {
    className: "learning-path-card"
  }, external_react_default.a.createElement("div", {
    className: "lpc-image"
  }, external_react_default.a.createElement("img", {
    src: "https://via.placeholder.com/150",
    alt: ""
  })), external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/learning-path-details"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("h3", null, "Learning Path Title"))), external_react_default.a.createElement("h5", null, "Categury"), external_react_default.a.createElement("h5", null, "6 Courses, 7 Tests"), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("p", null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis iusto accusantium consectetur voluptas suscipit quibusdam expedita nemo, ut, eius consequatur fugit necessitatibus distinctio laborum. Nostrum doloribus sed ab delectus eos?"), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("h5", null, "Price"), external_react_default.a.createElement("button", {
    className: "btn btn-outline-info"
  }, "Join")));
};

/* harmony default export */ var Academy_LearningPathCard = (LearningPathCard_LearningPathCard);
// CONCATENATED MODULE: ./components/Academy/CourseCard.js



var CourseCard_CourseCard = function CourseCard() {
  return external_react_default.a.createElement("div", {
    className: "course-card"
  }, external_react_default.a.createElement("div", {
    className: "course-image"
  }, external_react_default.a.createElement("img", {
    src: "https://via.placeholder.com/150",
    alt: ""
  })), external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement(link_default.a, {
    to: "course-details"
  }, external_react_default.a.createElement("h3", null, "Course Title")), external_react_default.a.createElement("h5", null, "Categury"), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("h5", null, "Price"), external_react_default.a.createElement("button", {
    className: "btn btn-outline-info"
  }, "Join Course")));
};

/* harmony default export */ var Academy_CourseCard = (CourseCard_CourseCard);
// CONCATENATED MODULE: ./components/Academy/TestCard.js



var TestCard_TestCard = function TestCard() {
  return external_react_default.a.createElement("div", {
    className: "test-card"
  }, external_react_default.a.createElement("div", {
    className: "test-image"
  }, external_react_default.a.createElement("img", {
    src: "https://via.placeholder.com/150",
    alt: ""
  })), external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/test-details"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("h3", null, "Test Title"))), external_react_default.a.createElement("h5", null, "Categury"), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("h5", null, "Price"), external_react_default.a.createElement("button", {
    className: "btn btn-outline-info"
  }, "Taje Test")));
};

/* harmony default export */ var Academy_TestCard = (TestCard_TestCard);
// CONCATENATED MODULE: ./components/Apps/AppDetails.js
function AppDetails_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AppDetails_typeof = function _typeof(obj) { return typeof obj; }; } else { AppDetails_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AppDetails_typeof(obj); }

function AppDetails_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AppDetails_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AppDetails_createClass(Constructor, protoProps, staticProps) { if (protoProps) AppDetails_defineProperties(Constructor.prototype, protoProps); if (staticProps) AppDetails_defineProperties(Constructor, staticProps); return Constructor; }

function AppDetails_possibleConstructorReturn(self, call) { if (call && (AppDetails_typeof(call) === "object" || typeof call === "function")) { return call; } return AppDetails_assertThisInitialized(self); }

function AppDetails_getPrototypeOf(o) { AppDetails_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AppDetails_getPrototypeOf(o); }

function AppDetails_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AppDetails_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AppDetails_setPrototypeOf(subClass, superClass); }

function AppDetails_setPrototypeOf(o, p) { AppDetails_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AppDetails_setPrototypeOf(o, p); }






var AppDetails_AppDetails =
/*#__PURE__*/
function (_React$Component) {
  AppDetails_inherits(AppDetails, _React$Component);

  function AppDetails(props) {
    var _this;

    AppDetails_classCallCheck(this, AppDetails);

    _this = AppDetails_possibleConstructorReturn(this, AppDetails_getPrototypeOf(AppDetails).call(this, props));
    _this.toggle = _this.toggle.bind(AppDetails_assertThisInitialized(_this));
    _this.state = {
      activeTab: '1'
    };
    return _this;
  }

  AppDetails_createClass(AppDetails, [{
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
        className: "app-details"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement(external_reactstrap_["Nav"], {
        tabs: true
      }, external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        className: external_classnames_default()({
          active: this.state.activeTab === '1'
        }),
        onClick: function onClick() {
          _this2.toggle('1');
        }
      }, "Overview")), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
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
      }, "Support")), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        className: external_classnames_default()({
          active: this.state.activeTab === '4'
        }),
        onClick: function onClick() {
          _this2.toggle('4');
        }
      }, "Related"))), external_react_default.a.createElement(external_reactstrap_["TabContent"], {
        activeTab: this.state.activeTab
      }, external_react_default.a.createElement(external_reactstrap_["TabPane"], {
        tabId: "1"
      }, "App Image Slider", external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-8"
      }, external_react_default.a.createElement("h3", null, "Overview"), external_react_default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas inventore atque sint dolor sed quaerat excepturi quibusdam similique libero exercitationem, eaque quos corporis explicabo iusto, eligendi quae asperiores culpa officiis.")), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement("h3", null, "Additional Information")))), external_react_default.a.createElement(external_reactstrap_["TabPane"], {
        tabId: "2"
      }, external_react_default.a.createElement("p", null, "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. className aptent taciti.")), external_react_default.a.createElement(external_reactstrap_["TabPane"], {
        tabId: "3"
      }, external_react_default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit obcaecati, sequi dolorem, doloribus quis eligendi soluta quam earum possimus et at vitae perspiciatis eum, similique iste aliquid magnam neque itaque!")), external_react_default.a.createElement(external_reactstrap_["TabPane"], {
        tabId: "4"
      }, external_react_default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit obcaecati, sequi dolorem, doloribus quis eligendi soluta quam earum possimus et at vitae perspiciatis eum, similique iste aliquid magnam neque itaque!"))))));
    }
  }]);

  return AppDetails;
}(external_react_default.a.Component);

;
/* harmony default export */ var Apps_AppDetails = (AppDetails_AppDetails);
// CONCATENATED MODULE: ./components/Apps/AppCard.js
function AppCard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AppCard_typeof = function _typeof(obj) { return typeof obj; }; } else { AppCard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AppCard_typeof(obj); }

function AppCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AppCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AppCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) AppCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) AppCard_defineProperties(Constructor, staticProps); return Constructor; }

function AppCard_possibleConstructorReturn(self, call) { if (call && (AppCard_typeof(call) === "object" || typeof call === "function")) { return call; } return AppCard_assertThisInitialized(self); }

function AppCard_getPrototypeOf(o) { AppCard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AppCard_getPrototypeOf(o); }

function AppCard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AppCard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AppCard_setPrototypeOf(subClass, superClass); }

function AppCard_setPrototypeOf(o, p) { AppCard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AppCard_setPrototypeOf(o, p); }





var AppCard_AppCard =
/*#__PURE__*/
function (_React$Component) {
  AppCard_inherits(AppCard, _React$Component);

  function AppCard(props) {
    var _this;

    AppCard_classCallCheck(this, AppCard);

    _this = AppCard_possibleConstructorReturn(this, AppCard_getPrototypeOf(AppCard).call(this, props));
    _this.state = {
      modal: false
    };
    _this.toggle = _this.toggle.bind(AppCard_assertThisInitialized(_this));
    return _this;
  }

  AppCard_createClass(AppCard, [{
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
        className: "app-card"
      }, external_react_default.a.createElement("div", {
        className: "app-image"
      }, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "content"
      }, external_react_default.a.createElement("h3", {
        onClick: this.toggle
      }, "App Title"), external_react_default.a.createElement("h5", null, "Categury"), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("h5", null, "Price"), external_react_default.a.createElement("button", {
        className: "btn btn-outline-info"
      }, "Add")), external_react_default.a.createElement(external_reactstrap_["Modal"], {
        isOpen: this.state.modal,
        toggle: this.toggle
      }, external_react_default.a.createElement(external_reactstrap_["ModalHeader"], {
        toggle: this.toggle
      }, external_react_default.a.createElement("h3", null, "App Title"), external_react_default.a.createElement("div", {
        className: "byAvatar"
      }, external_react_default.a.createElement("img", {
        src: this.props.byAvatar,
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "byContent"
      }, this.props.byUserName, " on Oct 23, 2019 12:34 PM"), external_react_default.a.createElement("div", {
        className: "button-group"
      }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_reactstrap_["Button"], {
        className: "btn btn-info"
      }, "Install")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_reactstrap_["Button"], {
        className: "btn btn-info"
      }, "Favorite"))))), external_react_default.a.createElement(external_reactstrap_["ModalBody"], null, external_react_default.a.createElement(Apps_AppDetails, null))));
    }
  }]);

  return AppCard;
}(external_react_default.a.Component);

;
/* harmony default export */ var Apps_AppCard = (AppCard_AppCard);
// CONCATENATED MODULE: ./components/Common/ConnectionCard.js
function ConnectionCard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ConnectionCard_typeof = function _typeof(obj) { return typeof obj; }; } else { ConnectionCard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ConnectionCard_typeof(obj); }

function ConnectionCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ConnectionCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ConnectionCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) ConnectionCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) ConnectionCard_defineProperties(Constructor, staticProps); return Constructor; }

function ConnectionCard_possibleConstructorReturn(self, call) { if (call && (ConnectionCard_typeof(call) === "object" || typeof call === "function")) { return call; } return ConnectionCard_assertThisInitialized(self); }

function ConnectionCard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ConnectionCard_getPrototypeOf(o) { ConnectionCard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ConnectionCard_getPrototypeOf(o); }

function ConnectionCard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ConnectionCard_setPrototypeOf(subClass, superClass); }

function ConnectionCard_setPrototypeOf(o, p) { ConnectionCard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ConnectionCard_setPrototypeOf(o, p); }




var ConnectionCard_ConnectionCard =
/*#__PURE__*/
function (_React$Component) {
  ConnectionCard_inherits(ConnectionCard, _React$Component);

  function ConnectionCard() {
    ConnectionCard_classCallCheck(this, ConnectionCard);

    return ConnectionCard_possibleConstructorReturn(this, ConnectionCard_getPrototypeOf(ConnectionCard).apply(this, arguments));
  }

  ConnectionCard_createClass(ConnectionCard, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "connection-card"
      }, external_react_default.a.createElement("div", {
        className: "content"
      }, external_react_default.a.createElement("div", {
        className: "avatar"
      }, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "user-info m-b-xs"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/people-details"
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("h3", {
        className: "name"
      }, "Jhon Doe"))), external_react_default.a.createElement("p", {
        className: "occupation"
      }, "Architect, Serial Enterprenur"), external_react_default.a.createElement("p", {
        className: "location"
      }, "Dhaka, Bangladesh"))), external_react_default.a.createElement("div", {
        className: "button-group"
      }, external_react_default.a.createElement("button", {
        className: "btn btn-outline-info"
      }, "Disconnect")));
    }
  }]);

  return ConnectionCard;
}(external_react_default.a.Component);

/* harmony default export */ var Common_ConnectionCard = (ConnectionCard_ConnectionCard);
// CONCATENATED MODULE: ./components/Common/MyConnections.js
function MyConnections_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MyConnections_typeof = function _typeof(obj) { return typeof obj; }; } else { MyConnections_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MyConnections_typeof(obj); }

function MyConnections_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MyConnections_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MyConnections_createClass(Constructor, protoProps, staticProps) { if (protoProps) MyConnections_defineProperties(Constructor.prototype, protoProps); if (staticProps) MyConnections_defineProperties(Constructor, staticProps); return Constructor; }

function MyConnections_possibleConstructorReturn(self, call) { if (call && (MyConnections_typeof(call) === "object" || typeof call === "function")) { return call; } return MyConnections_assertThisInitialized(self); }

function MyConnections_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MyConnections_getPrototypeOf(o) { MyConnections_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MyConnections_getPrototypeOf(o); }

function MyConnections_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MyConnections_setPrototypeOf(subClass, superClass); }

function MyConnections_setPrototypeOf(o, p) { MyConnections_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MyConnections_setPrototypeOf(o, p); }




var MyConnections_MyConnections =
/*#__PURE__*/
function (_React$Component) {
  MyConnections_inherits(MyConnections, _React$Component);

  function MyConnections() {
    MyConnections_classCallCheck(this, MyConnections);

    return MyConnections_possibleConstructorReturn(this, MyConnections_getPrototypeOf(MyConnections).apply(this, arguments));
  }

  MyConnections_createClass(MyConnections, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "my-connections"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(Common_ConnectionCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(Common_ConnectionCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(Common_ConnectionCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(Common_ConnectionCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(Common_ConnectionCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(Common_ConnectionCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(Common_ConnectionCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(Common_ConnectionCard, null))));
    }
  }]);

  return MyConnections;
}(external_react_default.a.Component);

;
/* harmony default export */ var Common_MyConnections = (MyConnections_MyConnections);
// CONCATENATED MODULE: ./components/Common/ToppicFollowingCard.js
function ToppicFollowingCard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ToppicFollowingCard_typeof = function _typeof(obj) { return typeof obj; }; } else { ToppicFollowingCard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ToppicFollowingCard_typeof(obj); }

function ToppicFollowingCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ToppicFollowingCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ToppicFollowingCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) ToppicFollowingCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) ToppicFollowingCard_defineProperties(Constructor, staticProps); return Constructor; }

function ToppicFollowingCard_possibleConstructorReturn(self, call) { if (call && (ToppicFollowingCard_typeof(call) === "object" || typeof call === "function")) { return call; } return ToppicFollowingCard_assertThisInitialized(self); }

function ToppicFollowingCard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ToppicFollowingCard_getPrototypeOf(o) { ToppicFollowingCard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ToppicFollowingCard_getPrototypeOf(o); }

function ToppicFollowingCard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ToppicFollowingCard_setPrototypeOf(subClass, superClass); }

function ToppicFollowingCard_setPrototypeOf(o, p) { ToppicFollowingCard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ToppicFollowingCard_setPrototypeOf(o, p); }




var ToppicFollowingCard_TopicFollowingCard =
/*#__PURE__*/
function (_React$Component) {
  ToppicFollowingCard_inherits(TopicFollowingCard, _React$Component);

  function TopicFollowingCard() {
    ToppicFollowingCard_classCallCheck(this, TopicFollowingCard);

    return ToppicFollowingCard_possibleConstructorReturn(this, ToppicFollowingCard_getPrototypeOf(TopicFollowingCard).apply(this, arguments));
  }

  ToppicFollowingCard_createClass(TopicFollowingCard, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "my-connections"
      }, external_react_default.a.createElement("div", {
        className: "topic-following-card"
      }, external_react_default.a.createElement("div", {
        className: "content"
      }, external_react_default.a.createElement("div", {
        className: "avatar"
      }, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "user-info"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/people-details"
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("h3", {
        className: "name"
      }, "Architecture"))))), external_react_default.a.createElement("div", {
        className: "button-group"
      }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("button", {
        className: "btn btn-outline-info"
      }, "Unfollow")))));
    }
  }]);

  return TopicFollowingCard;
}(external_react_default.a.Component);

;
/* harmony default export */ var ToppicFollowingCard = (ToppicFollowingCard_TopicFollowingCard);
// CONCATENATED MODULE: ./components/Common/TopicsFollowing.js
function TopicsFollowing_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TopicsFollowing_typeof = function _typeof(obj) { return typeof obj; }; } else { TopicsFollowing_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TopicsFollowing_typeof(obj); }

function TopicsFollowing_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TopicsFollowing_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TopicsFollowing_createClass(Constructor, protoProps, staticProps) { if (protoProps) TopicsFollowing_defineProperties(Constructor.prototype, protoProps); if (staticProps) TopicsFollowing_defineProperties(Constructor, staticProps); return Constructor; }

function TopicsFollowing_possibleConstructorReturn(self, call) { if (call && (TopicsFollowing_typeof(call) === "object" || typeof call === "function")) { return call; } return TopicsFollowing_assertThisInitialized(self); }

function TopicsFollowing_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TopicsFollowing_getPrototypeOf(o) { TopicsFollowing_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TopicsFollowing_getPrototypeOf(o); }

function TopicsFollowing_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TopicsFollowing_setPrototypeOf(subClass, superClass); }

function TopicsFollowing_setPrototypeOf(o, p) { TopicsFollowing_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TopicsFollowing_setPrototypeOf(o, p); }




var TopicsFollowing_TopicsFollowing =
/*#__PURE__*/
function (_React$Component) {
  TopicsFollowing_inherits(TopicsFollowing, _React$Component);

  function TopicsFollowing() {
    TopicsFollowing_classCallCheck(this, TopicsFollowing);

    return TopicsFollowing_possibleConstructorReturn(this, TopicsFollowing_getPrototypeOf(TopicsFollowing).apply(this, arguments));
  }

  TopicsFollowing_createClass(TopicsFollowing, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "topics-following"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(ToppicFollowingCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(ToppicFollowingCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(ToppicFollowingCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(ToppicFollowingCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(ToppicFollowingCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(ToppicFollowingCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(ToppicFollowingCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(ToppicFollowingCard, null))));
    }
  }]);

  return TopicsFollowing;
}(external_react_default.a.Component);

;
/* harmony default export */ var Common_TopicsFollowing = (TopicsFollowing_TopicsFollowing);
// CONCATENATED MODULE: ./components/People/PeopleDetails.js
function PeopleDetails_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PeopleDetails_typeof = function _typeof(obj) { return typeof obj; }; } else { PeopleDetails_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PeopleDetails_typeof(obj); }

function PeopleDetails_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PeopleDetails_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PeopleDetails_createClass(Constructor, protoProps, staticProps) { if (protoProps) PeopleDetails_defineProperties(Constructor.prototype, protoProps); if (staticProps) PeopleDetails_defineProperties(Constructor, staticProps); return Constructor; }

function PeopleDetails_possibleConstructorReturn(self, call) { if (call && (PeopleDetails_typeof(call) === "object" || typeof call === "function")) { return call; } return PeopleDetails_assertThisInitialized(self); }

function PeopleDetails_getPrototypeOf(o) { PeopleDetails_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PeopleDetails_getPrototypeOf(o); }

function PeopleDetails_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PeopleDetails_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PeopleDetails_setPrototypeOf(subClass, superClass); }

function PeopleDetails_setPrototypeOf(o, p) { PeopleDetails_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PeopleDetails_setPrototypeOf(o, p); }

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

var PeopleDetails_PeopleDetails =
/*#__PURE__*/
function (_React$Component) {
  PeopleDetails_inherits(PeopleDetails, _React$Component);

  function PeopleDetails() {
    var _getPrototypeOf2;

    var _this;

    PeopleDetails_classCallCheck(this, PeopleDetails);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = PeopleDetails_possibleConstructorReturn(this, (_getPrototypeOf2 = PeopleDetails_getPrototypeOf(PeopleDetails)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(PeopleDetails_assertThisInitialized(_this), "state", {
      value: 0,
      valueSecondaryTabsNetwork: 0,
      valueSeacondaryTabsJobs: 0,
      valueSeacondaryTabsAcademy: 0
    });

    _defineProperty(PeopleDetails_assertThisInitialized(_this), "handleChange", function (event, value) {
      _this.setState({
        value: value
      });
    });

    _defineProperty(PeopleDetails_assertThisInitialized(_this), "handleChangeNetwork", function (event, valueSecondaryTabsNetwork) {
      _this.setState({
        valueSecondaryTabsNetwork: valueSecondaryTabsNetwork
      });
    });

    _defineProperty(PeopleDetails_assertThisInitialized(_this), "handleChangeJobs", function (event, valueSeacondaryTabsJobs) {
      _this.setState({
        valueSeacondaryTabsJobs: valueSeacondaryTabsJobs
      });
    });

    _defineProperty(PeopleDetails_assertThisInitialized(_this), "handleChangeAcadmey", function (event, valueSeacondaryTabsAcademy) {
      _this.setState({
        valueSeacondaryTabsAcademy: valueSeacondaryTabsAcademy
      });
    });

    return _this;
  }

  PeopleDetails_createClass(PeopleDetails, [{
    key: "render",
    value: function render() {
      var sizes = [{
        columns: 4,
        gutter: 10
      }, {
        mq: '360px',
        columns: 1,
        gutter: 0
      }, {
        mq: '768px',
        columns: 3,
        gutter: 10
      }, {
        mq: '1024px',
        columns: 4,
        gutter: 10
      }];
      var classes = this.props.classes;
      var _this$state = this.state,
          value = _this$state.value,
          valueSecondaryTabsNetwork = _this$state.valueSecondaryTabsNetwork,
          valueSeacondaryTabsJobs = _this$state.valueSeacondaryTabsJobs,
          valueSeacondaryTabsAcademy = _this$state.valueSeacondaryTabsAcademy;
      var headerBgStyle = {
        background: 'url{intro}'
      };
      return external_react_default.a.createElement("div", {
        className: "people-details"
      }, external_react_default.a.createElement("div", {
        className: "top-banner"
      }, external_react_default.a.createElement("div", {
        className: "profile-card"
      }, external_react_default.a.createElement("div", {
        className: "profile-image"
      }, external_react_default.a.createElement("img", {
        src: "https://via.placeholder.com/150",
        alt: "profile image"
      })), external_react_default.a.createElement("div", {
        className: "nameNbuttons"
      }, external_react_default.a.createElement("div", {
        className: "name"
      }, external_react_default.a.createElement("h1", null, "Jhon Doe"), external_react_default.a.createElement("p", null, "Architect, Serial Enterprenur"), external_react_default.a.createElement("p", null, "Dhaka, Bangladesh")), external_react_default.a.createElement("div", {
        className: "buttons"
      }, external_react_default.a.createElement("button", {
        className: "btn btn-outline-info m-r-xs"
      }, "Connect"), external_react_default.a.createElement("button", {
        className: "btn btn-outline-success"
      }, "Message"))))), external_react_default.a.createElement("div", {
        className: "people-details-b"
      }, external_react_default.a.createElement("div", {
        className: "people-passport"
      }, external_react_default.a.createElement("div", {
        className: "bio"
      }, external_react_default.a.createElement("h3", null, "About"), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("p", null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum cumque at provident repudiandae magni fuga doloribus culpa explicabo dolorum eius molestiae ipsa laudantium voluptatem similique eveniet, ipsam iure natus perferendis?")), external_react_default.a.createElement("div", {
        className: "skills"
      }, external_react_default.a.createElement("hr", null), external_react_default.a.createElement("h3", null, "Skills")), external_react_default.a.createElement("div", {
        className: "workexperience"
      }, external_react_default.a.createElement("hr", null), external_react_default.a.createElement("h3", null, "Work Experience")), external_react_default.a.createElement("div", {
        className: "education"
      }, external_react_default.a.createElement("hr", null), external_react_default.a.createElement("h3", null, "Education")), external_react_default.a.createElement("div", {
        className: "awards"
      }, external_react_default.a.createElement("hr", null), external_react_default.a.createElement("h3", null, "Awards")), external_react_default.a.createElement("div", {
        className: "certifications"
      }, external_react_default.a.createElement("hr", null), external_react_default.a.createElement("h3", null, "Certifications")), external_react_default.a.createElement("div", {
        className: "pulications"
      }, external_react_default.a.createElement("hr", null), external_react_default.a.createElement("h3", {
        className: "publications"
      }, "Publications"))), external_react_default.a.createElement("div", {
        className: "people-hall"
      }, external_react_default.a.createElement(AppBar_default.a, {
        position: "static",
        color: "default"
      }, external_react_default.a.createElement(Tabs_default.a, {
        value: value,
        onChange: this.handleChange,
        indicatorColor: "primary",
        textColor: "primary",
        scrollable: true,
        scrollButtons: "auto"
      }, external_react_default.a.createElement(Tab_default.a, {
        label: "Projects"
      }), external_react_default.a.createElement(Tab_default.a, {
        label: "Products"
      }), external_react_default.a.createElement(Tab_default.a, {
        label: "Network"
      }), external_react_default.a.createElement(Tab_default.a, {
        label: "Favorites"
      }), external_react_default.a.createElement(Tab_default.a, {
        label: "Jobs"
      }), external_react_default.a.createElement(Tab_default.a, {
        label: "Academy"
      }), external_react_default.a.createElement(Tab_default.a, {
        label: "Apps"
      }))), value === 0 && external_react_default.a.createElement(TabContainer, null, external_react_default.a.createElement("h1", null, "Projects")), value === 1 && external_react_default.a.createElement(TabContainer, null, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(Products_ProductCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(Products_ProductCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(Products_ProductCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(Products_ProductCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(Products_ProductCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(Products_ProductCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(Products_ProductCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-3 m-b-sm"
      }, external_react_default.a.createElement(Products_ProductCard, null)))), value === 2 && external_react_default.a.createElement(TabContainer, null, external_react_default.a.createElement(AppBar_default.a, {
        position: "static",
        color: "default"
      }, external_react_default.a.createElement(Tabs_default.a, {
        value: valueSecondaryTabsNetwork,
        onChange: this.handleChangeNetwork,
        indicatorColor: "primary",
        textColor: "primary",
        scrollable: true,
        scrollButtons: "auto"
      }, external_react_default.a.createElement(Tab_default.a, {
        label: "My Connections"
      }), external_react_default.a.createElement(Tab_default.a, {
        label: "Topics Following"
      }))), valueSecondaryTabsNetwork === 0 && external_react_default.a.createElement(TabContainer, null, external_react_default.a.createElement(Common_MyConnections, null)), valueSecondaryTabsNetwork === 1 && external_react_default.a.createElement(TabContainer, null, external_react_default.a.createElement(Common_TopicsFollowing, null))), value === 3 && external_react_default.a.createElement(TabContainer, null, "Item Four"), value === 4 && external_react_default.a.createElement(TabContainer, null, external_react_default.a.createElement(AppBar_default.a, {
        position: "static",
        color: "default"
      }, external_react_default.a.createElement(Tabs_default.a, {
        value: valueSeacondaryTabsJobs,
        onChange: this.handleChangeJobs,
        indicatorColor: "primary",
        textColor: "primary",
        scrollable: true,
        scrollButtons: "auto"
      }, external_react_default.a.createElement(Tab_default.a, {
        label: "Buyers Activity"
      }), external_react_default.a.createElement(Tab_default.a, {
        label: "Sellers Activity"
      }))), valueSeacondaryTabsJobs === 0 && external_react_default.a.createElement(TabContainer, null, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-12 m-b-sm"
      }, external_react_default.a.createElement(Jobs_JobCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-12 m-b-sm"
      }, external_react_default.a.createElement(Jobs_JobCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-12 m-b-sm"
      }, external_react_default.a.createElement(Jobs_JobCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-12 m-b-sm"
      }, external_react_default.a.createElement(Jobs_JobCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-12 m-b-sm"
      }, external_react_default.a.createElement(Jobs_JobCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-12 m-b-sm"
      }, external_react_default.a.createElement(Jobs_JobCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-12 m-b-sm"
      }, external_react_default.a.createElement(Jobs_JobCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-12 m-b-sm"
      }, external_react_default.a.createElement(Jobs_JobCard, null)))), valueSeacondaryTabsJobs === 1 && external_react_default.a.createElement(TabContainer, null, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-12 m-b-sm"
      }, external_react_default.a.createElement(Jobs_JobCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-12 m-b-sm"
      }, external_react_default.a.createElement(Jobs_JobCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-12 m-b-sm"
      }, external_react_default.a.createElement(Jobs_JobCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-12 m-b-sm"
      }, external_react_default.a.createElement(Jobs_JobCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-12 m-b-sm"
      }, external_react_default.a.createElement(Jobs_JobCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-12 m-b-sm"
      }, external_react_default.a.createElement(Jobs_JobCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-12 m-b-sm"
      }, external_react_default.a.createElement(Jobs_JobCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-12 m-b-sm"
      }, external_react_default.a.createElement(Jobs_JobCard, null))))), value === 5 && external_react_default.a.createElement(TabContainer, null, external_react_default.a.createElement(AppBar_default.a, {
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
        label: "My Learning Paths"
      }), external_react_default.a.createElement(Tab_default.a, {
        label: "My Courses"
      }), external_react_default.a.createElement(Tab_default.a, {
        label: "My Tests"
      }))), valueSeacondaryTabsAcademy === 0 && external_react_default.a.createElement(TabContainer, null, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_LearningPathCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_LearningPathCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_LearningPathCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_LearningPathCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_LearningPathCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_LearningPathCard, null)))), valueSeacondaryTabsAcademy === 1 && external_react_default.a.createElement(TabContainer, null, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_CourseCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_CourseCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_CourseCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_CourseCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_CourseCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_CourseCard, null))), "                                "), valueSeacondaryTabsAcademy === 2 && external_react_default.a.createElement(TabContainer, null, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_TestCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_TestCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_TestCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_TestCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_TestCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Academy_TestCard, null))))), value === 6 && external_react_default.a.createElement(TabContainer, null, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Apps_AppCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Apps_AppCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Apps_AppCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Apps_AppCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Apps_AppCard, null)), external_react_default.a.createElement("div", {
        className: "col-md-4"
      }, external_react_default.a.createElement(Apps_AppCard, null)))))));
    }
  }]);

  return PeopleDetails;
}(external_react_default.a.Component);

/* harmony default export */ var People_PeopleDetails = (Object(styles_["withStyles"])(styles)(PeopleDetails_PeopleDetails));
// CONCATENATED MODULE: ./pages/people-details-page.js
function people_details_page_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { people_details_page_typeof = function _typeof(obj) { return typeof obj; }; } else { people_details_page_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return people_details_page_typeof(obj); }

function people_details_page_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function people_details_page_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function people_details_page_createClass(Constructor, protoProps, staticProps) { if (protoProps) people_details_page_defineProperties(Constructor.prototype, protoProps); if (staticProps) people_details_page_defineProperties(Constructor, staticProps); return Constructor; }

function people_details_page_possibleConstructorReturn(self, call) { if (call && (people_details_page_typeof(call) === "object" || typeof call === "function")) { return call; } return people_details_page_assertThisInitialized(self); }

function people_details_page_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function people_details_page_getPrototypeOf(o) { people_details_page_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return people_details_page_getPrototypeOf(o); }

function people_details_page_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) people_details_page_setPrototypeOf(subClass, superClass); }

function people_details_page_setPrototypeOf(o, p) { people_details_page_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return people_details_page_setPrototypeOf(o, p); }





var people_details_page_PeopleDetailsPage =
/*#__PURE__*/
function (_React$Component) {
  people_details_page_inherits(PeopleDetailsPage, _React$Component);

  function PeopleDetailsPage() {
    people_details_page_classCallCheck(this, PeopleDetailsPage);

    return people_details_page_possibleConstructorReturn(this, people_details_page_getPrototypeOf(PeopleDetailsPage).apply(this, arguments));
  }

  people_details_page_createClass(PeopleDetailsPage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(People_PeopleDetails, null));
    }
  }]);

  return PeopleDetailsPage;
}(external_react_default.a.Component);

/* harmony default export */ var people_details_page = __webpack_exports__["default"] = (people_details_page_PeopleDetailsPage);

/***/ })

/******/ });