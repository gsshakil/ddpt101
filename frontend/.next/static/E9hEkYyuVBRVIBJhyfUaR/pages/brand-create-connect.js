(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{503:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(4),n(114)),c=n(514),i=n(509),l=n(511),u=n(510),s=n(486),f=n(502),p=n(501);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,d(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e={width:"100%"};return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"wizard-content"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 offset-md-3 text-center"},o.a.createElement("h1",{style:{margin:"50px 0",padding:"10px 0",borderBottom:"3px solid #bf1e2d"}},"PLEASE PROVIDE SOME BASIC INFORMATION"),o.a.createElement(p.a,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(f.a,{style:e,label:"Enter First Name",margin:"normal"})),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(f.a,{style:e,label:"Enter Last Name",margin:"normal"}))),o.a.createElement(f.a,{style:e,label:"Enter Occupation",margin:"normal"}),o.a.createElement(f.a,{style:e,label:"Enter Skills",margin:"normal"}),o.a.createElement(f.a,{style:e,label:"Enter Bio",margin:"normal"}))))))}}])&&y(n.prototype,r),a&&y(n,a),t}();function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return r=this,o=(e=g(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==v(o)&&"function"!=typeof o?O(r):o,_(O(n),"state",{activeStep:0}),_(O(n),"handleNext",function(){n.setState(function(e){return{activeStep:e.activeStep+1}})}),_(O(n),"handleBack",function(){n.setState(function(e){return{activeStep:e.activeStep-1}})}),_(O(n),"handleReset",function(){n.setState({activeStep:0})}),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props.classes,t=["Basic Information","Work Experience","Education","Follow Topics","Follow Poeple & Brands"],n=this.state.activeStep;return o.a.createElement("div",{className:e.root,style:{width:"100%",marginBottom:"100px"}},o.a.createElement(c.a,{activeStep:n,alternativeLabel:!0},t.map(function(e){return o.a.createElement(i.a,{key:e},o.a.createElement(l.a,null,e))})),o.a.createElement("div",null,this.state.activeStep===t.length?o.a.createElement("div",null,o.a.createElement(s.a,{className:e.instructions},"All steps completed"),o.a.createElement(u.a,{onClick:this.handleReset},"Reset")):o.a.createElement("div",null,o.a.createElement(s.a,{className:e.instructions},function(e){switch(e){case 0:return o.a.createElement(E,null);case 1:return"Work Experience";case 2:return"Education";case 3:return"Follow Topics";case 4:return"Follow Poeple & Brands";default:return"Uknown stepIndex"}}(n)),o.a.createElement("div",{className:"row text-center"},o.a.createElement("div",{className:"cold-md-6 offset-md-3",style:{width:"46%",marginTop:"50px"}},o.a.createElement(u.a,{disabled:0===n,onClick:this.handleBack,className:e.backButton,style:{display:"block",float:"left",marginLeft:"50px"}},"Back"),o.a.createElement(u.a,{variant:"contained",color:"primary",onClick:this.handleNext,style:{display:"block",float:"right"}},n===t.length-1?"Finish":"Next"))))))}}])&&w(n.prototype,r),a&&w(n,a),t}();t.a=Object(a.a)(function(e){return{root:{width:"90%"},backButton:{marginRight:e.spacing.unit},instructions:{marginTop:e.spacing.unit,marginBottom:e.spacing.unit}}})(j)},512:function(e,t,n){__NEXT_REGISTER_PAGE("/brand-create-connect",function(){return e.exports=n(513),{page:e.exports.default}})},513:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(503);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,u(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(a.a,null))}}])&&i(n.prototype,r),c&&i(n,c),t}();t.default=f}},[[512,1,0]]]);