(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{203:function(e,t,n){e.exports=n(212)},204:function(e,t,n){e.exports=n(205)},205:function(e,t,n){"use strict";var r=n(24),o=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=g,t.Container=t.default=void 0;var a=o(n(42)),u=o(n(43)),c=o(n(206)),l=o(n(6)),i=o(n(7)),f=o(n(21)),p=o(n(22)),s=o(n(23)),y=o(n(15)),h=r(n(12)),m=o(n(36)),d=n(28),b=n(69),v=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,b.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=g(t);return h.default.createElement(E,null,h.default.createElement(n,(0,c.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:function(){var e=(0,u.default)(a.default.mark(function e(t){var n,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,d.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(h.Component);t.default=v,(0,y.default)(v,"childContextTypes",{headManager:m.default.object,router:m.default.object});var E=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(h.Component);t.Container=E;var w=(0,d.execOnce)(function(){0});function g(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return w(),r},get pathname(){return w(),t},get asPath(){return w(),n},back:function(){w(),e.back()},push:function(t,n){return w(),e.push(t,n)},pushTo:function(t,n){w();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return w(),e.replace(t,n)},replaceTo:function(t,n){w();var r=n?t:null,o=n||t;return e.replace(r,o)}}}},206:function(e,t,n){var r=n(73);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o},225:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(233),{page:e.exports.default}})},233:function(e,t,n){"use strict";n.r(t);var r=n(12),o=n.n(r),a=n(204),u=n.n(a),c=n(202),l=n.n(c),i=function(){return o.a.createElement("div",null,o.a.createElement(l.a,{href:"/sell"},o.a.createElement("a",null,"Sell!")),o.a.createElement(l.a,{href:"/"},o.a.createElement("a",null,"Home!")))},f=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"bar"},o.a.createElement("a",{href:""},"Sick Fits"),o.a.createElement(i,null)),o.a.createElement("div",{className:"sub-bar"},o.a.createElement("p",null,"Search")),o.a.createElement("div",null,"Cart"))},p=n(203),s=n.n(p),y=function(){return o.a.createElement(s.a,null,o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("link",{rel:"shortcut icon",href:"/static/favicon.png"}),o.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/static/nprogress.css"}),o.a.createElement("title",null,"Sick Fits!"))};function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,b(t).apply(this,arguments))}var n,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y,null),o.a.createElement(f,null),this.props.children)}}])&&m(n.prototype,a),u&&m(n,u),t}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),O(this,_(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,u.a),n=t,(r=[{key:"render",value:function(){var e=this.props.Component;return o.a.createElement(a.Container,null,o.a.createElement(E,null,o.a.createElement(e,null)))}}])&&g(n.prototype,r),c&&g(n,c),t}();t.default=P}},[[225,1,0]]]);