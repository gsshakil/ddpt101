(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{13:function(e,t,a){e.exports=a(263)},263:function(e,t,a){"use strict";var r=a(30),l=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(264)),o=l(a(69)),c=l(a(15)),i=l(a(16)),s=l(a(24)),m=l(a(25)),u=l(a(26)),p=l(a(57)),f=l(a(22)),d=a(142),h=r(a(0)),v=(l(a(4)),r(a(68))),E=a(34);var y=function(e){function t(){var e,a,r,l,n,i;(0,c.default)(this,t);for(var u=arguments.length,h=new Array(u),y=0;y<u;y++)h[y]=arguments[y];return a=(0,s.default)(this,(e=(0,m.default)(t)).call.apply(e,[this].concat(h))),(0,f.default)((0,p.default)((0,p.default)(a)),"formatUrls",(r=function(e,t){return{href:e&&"object"===(0,o.default)(e)?(0,d.format)(e):e,as:t&&"object"===(0,o.default)(t)?(0,d.format)(t):t}},l=null,n=null,i=null,function(e,t){if(e===l&&t===n)return i;var a=r(e,t);return l=e,n=t,i=a,a})),(0,f.default)((0,p.default)((0,p.default)(a)),"linkClicked",function(e){var t=e.currentTarget,r=t.nodeName,l=t.target;if("A"!==r||!(l&&"_self"!==l||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var n=a.formatUrls(a.props.href,a.props.as),o=n.href,c=n.as;if(function(e){var t=(0,d.parse)(e,!1,!0),a=(0,d.parse)((0,E.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(o)){var i=window.location.pathname;o=(0,d.resolve)(i,o),c=c?(0,d.resolve)(i,c):o,e.preventDefault();var s=a.props.scroll;null==s&&(s=c.indexOf("#")<0);var m=a.props.replace?"replace":"push";v.default[m](o,c,{shallow:a.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){a.props.onError&&a.props.onError(e)})}}}),a}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,n.default)(this.props.href)!==(0,n.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,a=(0,d.resolve)(e,t);v.default.prefetch(a)}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),r=a.href,l=a.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var n=h.Children.only(t),o={onClick:function(t){n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==n.type||"href"in n.props)||(o.href=l||r),o.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,v._rewriteUrlForNextExport)(o.href)),h.default.cloneElement(n,o)}}]),t}(h.Component);t.default=y},264:function(e,t,a){e.exports=a(265)},265:function(e,t,a){var r=a(5),l=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return l.stringify.apply(l,arguments)}},538:function(e,t,a){__NEXT_REGISTER_PAGE("/project-details",function(){return e.exports=a(541),{page:e.exports.default}})},541:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r);a(13);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,i(t).apply(this,arguments))}var a,r,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,l.a.Component),a=t,(r=[{key:"render",value:function(){return l.a.createElement("div",{className:"product-page-area project-details"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"gallary-warpper"},l.a.createElement("div",{id:"img-1",className:"zoomWrapper single-zoom"},l.a.createElement("a",{href:"#"},l.a.createElement("div",{className:"zoomWrapper"},l.a.createElement("img",{id:"zoom1",src:"https://via.placeholder.com/150","data-zoom-image":"https://via.placeholder.com/150",alt:""})))),l.a.createElement("div",{className:"single-zoom-thumb"},l.a.createElement("div",{className:"bx-wrapper"},l.a.createElement("div",{className:"bx-viewport","aria-live":"polite"},l.a.createElement("ul",{className:"zoom-slider",id:"gallery_01"},l.a.createElement("li",{"aria-hidden":"false"},l.a.createElement("a",{href:"#",className:"elevatezoom-gallery active","data-image":"https://via.placeholder.com/150","data-zoom-image":"https://via.placeholder.com/150"},l.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""}))),l.a.createElement("li",{"aria-hidden":"false"},l.a.createElement("a",{href:"#",className:"elevatezoom-gallery","data-image":"https://via.placeholder.com/150","data-zoom-image":"https://via.placeholder.com/150"},l.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""}))),l.a.createElement("li",{"aria-hidden":"false"},l.a.createElement("a",{href:"#",className:"elevatezoom-gallery","data-image":"https://via.placeholder.com/150","data-zoom-image":"https://via.placeholder.com/150"},l.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""}))),l.a.createElement("li",{"aria-hidden":"true"},l.a.createElement("a",{href:"#",className:"elevatezoom-gallery","data-image":"https://via.placeholder.com/150","data-zoom-image":"https://via.placeholder.com/150"},l.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""}))),l.a.createElement("li",{"aria-hidden":"true"},l.a.createElement("a",{href:"#",className:"elevatezoom-gallery","data-image":"https://via.placeholder.com/150","data-zoom-image":"https://via.placeholder.com/150"},l.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""}))))),l.a.createElement("div",{className:"bx-controls bx-has-controls-direction"},l.a.createElement("div",{className:"bx-controls-direction"},l.a.createElement("a",{className:"bx-prev disabled",href:""},l.a.createElement("i",{className:"fa fa-chevron-left"})),l.a.createElement("a",{className:"bx-next",href:""},l.a.createElement("i",{className:"fa fa-chevron-right"})))))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"project-description"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, explicabo voluptate autem quisquam quia exercitationem ratione, fugiat nulla reiciendis atque unde excepturi architecto accusantium pariatur fuga sit. Praesentium, ab modi?")),l.a.createElement("hr",null),l.a.createElement("div",{className:"comments"},l.a.createElement("h2",null,"54 Responses"),l.a.createElement("hr",null),l.a.createElement("div",{className:"comment-item-primary"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-2 text-center"},l.a.createElement("div",{className:"comment-avatar"},l.a.createElement("img",{src:"https://via.placeholder.com/50",alt:""}))),l.a.createElement("div",{className:"col-md-10"},l.a.createElement("div",{className:"comment-content"},l.a.createElement("h3",null,l.a.createElement("a",{href:""},"User name")),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima accusamus esse, delectus alias deleniti dolorum quia laboriosam nostrum dolor nam asperiores sequi error tempora temporibus eveniet maiores mollitia vel? Harum."),l.a.createElement("p",null,"on Oc 23, 2019 11:21 AM"),l.a.createElement("div",{className:"like-reply pull-right"},l.a.createElement("ul",null,l.a.createElement("li",null,"Like"),l.a.createElement("li",null,"Reply"))))))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("ul",{className:"right-widgets"},l.a.createElement("li",null,"Share"),l.a.createElement("li",null,"Tag"),l.a.createElement("li",null,"Viewed"),l.a.createElement("li",null,"Liked"),l.a.createElement("li",null,"Favorited")),l.a.createElement("div",{className:"more-by-user"},l.a.createElement("h3",null,"More by User"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""})),l.a.createElement("li",null,l.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""})),l.a.createElement("li",null,l.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""})),l.a.createElement("li",null,l.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""})))),l.a.createElement("div",{className:"related-projects"},l.a.createElement("h3",null,"Related Projects"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""})),l.a.createElement("li",null,l.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""})),l.a.createElement("li",null,l.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""})),l.a.createElement("li",null,l.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""}))))))))}}])&&o(a.prototype,r),n&&o(a,n),t}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,d(t).apply(this,arguments))}var a,r,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,l.a.Component),a=t,(r=[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m,null))}}])&&p(a.prototype,r),n&&p(a,n),t}();t.default=v}},[[538,1,0]]]);