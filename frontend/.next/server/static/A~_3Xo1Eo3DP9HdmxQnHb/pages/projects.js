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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Projects_ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);



var Projects = function Projects(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 m-b-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 m-b-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 m-b-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 m-b-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 m-b-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 m-b-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 m-b-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 m-b-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 m-b-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 m-b-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 m-b-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ })

/******/ });