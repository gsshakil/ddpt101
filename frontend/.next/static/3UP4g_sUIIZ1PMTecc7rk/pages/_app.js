(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{203:function(e,t,n){e.exports=n(212)},204:function(e,t,n){e.exports=n(205)},205:function(e,t,n){"use strict";var r=n(24),a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=w,t.Container=t.default=void 0;var o=a(n(42)),u=a(n(43)),c=a(n(206)),i=a(n(6)),l=a(n(7)),f=a(n(21)),s=a(n(22)),p=a(n(23)),d=a(n(15)),y=r(n(12)),h=a(n(36)),m=n(28),v=n(69),b=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,v.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=w(t);return y.default.createElement(g,null,y.default.createElement(n,(0,c.default)({},r,{url:a})))}}],[{key:"getInitialProps",value:function(){var e=(0,u.default)(o.default.mark(function e(t){var n,r,a;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,m.loadGetInitialProps)(n,r);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(y.Component);t.default=b,(0,d.default)(b,"childContextTypes",{headManager:h.default.object,router:h.default.object});var g=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(y.Component);t.Container=g;var E=(0,m.execOnce)(function(){0});function w(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return E(),r},get pathname(){return E(),t},get asPath(){return E(),n},back:function(){E(),e.back()},push:function(t,n){return E(),e.push(t,n)},pushTo:function(t,n){E();var r=n?t:null,a=n||t;return e.push(r,a)},replace:function(t,n){return E(),e.replace(t,n)},replaceTo:function(t,n){E();var r=n?t:null,a=n||t;return e.replace(r,a)}}}},206:function(e,t,n){var r=n(73);function a(){return e.exports=a=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}e.exports=a},212:function(e,t,n){"use strict";var r=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=m,t.default=void 0;var a=r(n(46)),o=r(n(6)),u=r(n(7)),c=r(n(21)),i=r(n(22)),l=r(n(23)),f=r(n(15)),s=r(n(12)),p=r(n(36)),d=r(n(213)),y=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return null}}]),t}(s.default.Component);(0,f.default)(y,"contextTypes",{headManager:p.default.object});var h="next-head";function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return[s.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})]}var v=["name","httpEquiv","charSet","itemProp","property"],b=["article:tag","og:image","og:image:alt","og:image:width","og:image:height","og:image:type","og:image:secure_url","og:image:url"];var g=(0,d.default)(function(e){return e.map(function(e){return s.default.Children.toArray(e.props.children)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return s.default.Fragment&&t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse().concat(m("")).filter(Boolean).filter((t=new a.default,n=new a.default,r=new a.default,o={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(t.has(e.key))return!1;t.add(e.key)}switch(e.type){case"title":case"base":if(n.has(e.type))return!1;n.add(e.type);break;case"meta":for(var u=0,c=v.length;u<c;u++){var i=v[u];if(e.props.hasOwnProperty(i))if("charSet"===i){if(r.has(i))return!1;r.add(i)}else{var l=e.props[i],f=o[i]||new a.default;if(f.has(l)&&-1===b.indexOf(l))return!1;f.add(l),o[i]=f}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+h,r=e.key||t;return s.default.cloneElement(e,{key:r,className:n})});var t,n,r,o},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(y);t.default=g},213:function(e,t,n){"use strict";var r=n(24),a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var a,m=new d.default;function v(r){a=e((0,p.default)(m)),b.canUseDOM?t.call(r,a):n&&(a=n(a))}var b=function(e){function t(e){var n;return(0,o.default)(this,t),n=(0,u.default)(this,(0,c.default)(t).call(this,e)),t.canUseDOM||(m.add((0,f.default)((0,f.default)(n))),v((0,f.default)((0,f.default)(n)))),n}return(0,l.default)(t,e),(0,i.default)(t,null,[{key:"peek",value:function(){return a}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=a;return a=void 0,m.clear(),e}}]),(0,i.default)(t,[{key:"componentDidMount",value:function(){m.add(this),v(this)}},{key:"componentDidUpdate",value:function(){v(this)}},{key:"componentWillUnmount",value:function(){m.delete(this),v(this)}},{key:"render",value:function(){return y.default.createElement(r,null,this.props.children)}}]),t}(y.Component);return(0,s.default)(b,"canUseDOM","undefined"!=typeof window),(0,s.default)(b,"contextTypes",r.contextTypes),(0,s.default)(b,"displayName","SideEffect(".concat((0,h.getDisplayName)(r),")")),b}};var o=a(n(6)),u=a(n(21)),c=a(n(22)),i=a(n(7)),l=a(n(23)),f=a(n(74)),s=a(n(15)),p=a(n(214)),d=a(n(46)),y=r(n(12)),h=n(28)},214:function(e,t,n){var r=n(215),a=n(216),o=n(224);e.exports=function(e){return r(e)||a(e)||o()}},215:function(e,t,n){var r=n(68);e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},216:function(e,t,n){var r=n(217),a=n(221);e.exports=function(e){if(a(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},217:function(e,t,n){e.exports=n(218)},218:function(e,t,n){n(20),n(219),e.exports=n(0).Array.from},219:function(e,t,n){"use strict";var r=n(11),a=n(1),o=n(19),u=n(85),c=n(86),i=n(41),l=n(220),f=n(64);a(a.S+a.F*!n(93)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,s,p=o(e),d="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,m=void 0!==h,v=0,b=f(p);if(m&&(h=r(h,y>2?arguments[2]:void 0,2)),null==b||d==Array&&c(b))for(n=new d(t=i(p.length));t>v;v++)l(n,v,m?h(p[v],v):p[v]);else for(s=b.call(p),n=new d;!(a=s.next()).done;v++)l(n,v,m?u(s,h,[a.value,v],!0):a.value);return n.length=v,n}})},220:function(e,t,n){"use strict";var r=n(9),a=n(30);e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},221:function(e,t,n){e.exports=n(222)},222:function(e,t,n){n(27),n(20),e.exports=n(223)},223:function(e,t,n){var r=n(45),a=n(4)("iterator"),o=n(26);e.exports=n(0).isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||o.hasOwnProperty(r(t))}},224:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},225:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(233),{page:e.exports.default}})},233:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n.n(r),o=n(204),u=n.n(o),c=n(202),i=n.n(c);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,p(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("header",null,a.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},a.a.createElement(i.a,{href:"/people"},a.a.createElement("a",null,"Deepden")),a.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{className:"navbar-toggler-icon"})),a.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},a.a.createElement("ul",{className:"navbar-nav mr-auto"},a.a.createElement("li",{className:"nav-item active"},a.a.createElement(i.a,{href:"/people"},a.a.createElement("a",null,"People"))),a.a.createElement("li",{className:"nav-item active"},a.a.createElement(i.a,{href:"/brands"},a.a.createElement("a",null,"Brands"))),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.a,{href:"/projects"},a.a.createElement("a",null,"Projects"))),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.a,{href:"/products"},a.a.createElement("a",null,"Products"))),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.a,{href:"/jobs"},a.a.createElement("a",null,"Jobs"))),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.a,{href:"/academy"},a.a.createElement("a",null,"Academy"))))))))}}])&&f(n.prototype,r),o&&f(n,o),t}(),h=n(203),m=n.n(h),v=function(){return a.a.createElement(m.a,null,a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("link",{rel:"shortcut icon",href:"/static/favicon.png"}),a.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/static/nprogress.css"}),a.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/static/styles.css"}),a.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}),a.a.createElement("title",null,"Sick Fits!"))};function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,w(t).apply(this,arguments))}var n,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(v,null),a.a.createElement(y,null),this.props.children)}}])&&g(n.prototype,o),u&&g(n,u),t}();function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,P(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,u.a),n=t,(r=[{key:"render",value:function(){var e=this.props.Component;return a.a.createElement(o.Container,null,a.a.createElement(k,null,a.a.createElement(e,null)))}}])&&j(n.prototype,r),c&&j(n,c),t}();t.default=C}},[[225,1,0]]]);