(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{13:function(e,t,a){e.exports=a(263)},234:function(e,t,a){__NEXT_REGISTER_PAGE("/brands",function(){return e.exports=a(527),{page:e.exports.default}})},263:function(e,t,a){"use strict";var r=a(30),n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(264)),l=n(a(69)),c=n(a(15)),i=n(a(16)),s=n(a(24)),u=n(a(25)),m=n(a(26)),d=n(a(57)),p=n(a(22)),f=a(142),b=r(a(0)),y=(n(a(4)),r(a(68))),h=a(34);var v=function(e){function t(){var e,a,r,n,o,i;(0,c.default)(this,t);for(var m=arguments.length,b=new Array(m),v=0;v<m;v++)b[v]=arguments[v];return a=(0,s.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(b))),(0,p.default)((0,d.default)((0,d.default)(a)),"formatUrls",(r=function(e,t){return{href:e&&"object"===(0,l.default)(e)?(0,f.format)(e):e,as:t&&"object"===(0,l.default)(t)?(0,f.format)(t):t}},n=null,o=null,i=null,function(e,t){if(e===n&&t===o)return i;var a=r(e,t);return n=e,o=t,i=a,a})),(0,p.default)((0,d.default)((0,d.default)(a)),"linkClicked",function(e){var t=e.currentTarget,r=t.nodeName,n=t.target;if("A"!==r||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),l=o.href,c=o.as;if(function(e){var t=(0,f.parse)(e,!1,!0),a=(0,f.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(l)){var i=window.location.pathname;l=(0,f.resolve)(i,l),c=c?(0,f.resolve)(i,c):l,e.preventDefault();var s=a.props.scroll;null==s&&(s=c.indexOf("#")<0);var u=a.props.replace?"replace":"push";y.default[u](l,c,{shallow:a.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){a.props.onError&&a.props.onError(e)})}}}),a}return(0,m.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,a=(0,f.resolve)(e,t);y.default.prefetch(a)}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),r=a.href,n=a.as;"string"==typeof t&&(t=b.default.createElement("a",null,t));var o=b.Children.only(t),l={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(l.href=n||r),l.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(l.href=(0,y._rewriteUrlForNextExport)(l.href)),b.default.cloneElement(o,l)}}]),t}(b.Component);t.default=v},264:function(e,t,a){e.exports=a(265)},265:function(e,t,a){var r=a(5),n=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},498:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=(a(4),a(502)),l=a(500),c=a(501),i=a(1),s=a.n(i),u=a(150),m=a.n(u),d=a(281),p=a(485),f=a(114),b=a(486),y=a(298),h=n.a.forwardRef(function(e,t){e.checked;var a=e.classes,r=e.className,o=e.control,l=e.disabled,c=(e.inputRef,e.label),i=e.labelPlacement,u=void 0===i?"end":i,f=(e.name,e.onChange,e.value,m()(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),h=Object(p.a)(),v=l;void 0===v&&void 0!==o.props.disabled&&(v=o.props.disabled),void 0===v&&h&&(v=h.disabled);var E={disabled:v};return["checked","name","onChange","value","inputRef"].forEach(function(t){void 0===o.props[t]&&void 0!==e[t]&&(E[t]=e[t])}),n.a.createElement("label",s()({className:Object(d.a)(a.root,r,"end"!==u&&a["labelPlacement".concat(Object(y.a)(u))],v&&a.disabled),ref:t},f),n.a.cloneElement(o,E),n.a.createElement(b.a,{component:"span",className:Object(d.a)(a.label,v&&a.disabled)},c))}),v=Object(f.a)(function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}},{name:"MuiFormControlLabel"})(h),E=a(19),g=a.n(E),k=a(428),O=a(492),w=n.a.forwardRef(function(e,t){var a=e.edge,r=void 0!==a&&a,o=e.children,l=e.classes,c=e.className,i=e.color,u=void 0===i?"default":i,p=e.disabled,f=void 0!==p&&p,b=e.disableFocusRipple,h=void 0!==b&&b,v=e.size,E=void 0===v?"medium":v,g=m()(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return n.a.createElement(O.a,s()({className:Object(d.a)(l.root,c,"default"!==u&&l["color".concat(Object(y.a)(u))],f&&l.disabled,"small"===E&&l["size".concat(Object(y.a)(E))],"start"===r&&l.edgeStart,"end"===r&&l.edgeEnd),centerRipple:!0,focusRipple:!h,disabled:f,ref:t},g),n.a.createElement("span",{className:l.label},o))}),A=Object(f.a)(function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(k.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(k.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(k.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},{name:"MuiIconButton"})(w),C=n.a.forwardRef(function(e,t){var a=e.autoFocus,r=e.checked,o=e.checkedIcon,l=e.classes,c=e.className,i=e.defaultChecked,u=e.disabled,f=e.icon,b=e.id,y=e.inputProps,h=e.inputRef,v=e.name,E=e.onBlur,k=e.onChange,O=e.onFocus,w=e.readOnly,C=e.required,N=e.tabIndex,j=e.type,_=e.value,S=m()(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),x=n.a.useRef(null!=r).current,P=n.a.useState(Boolean(i)),D=g()(P,2),R=D[0],I=D[1],T=Object(p.a)(),B=u;T&&void 0===B&&(B=T.disabled);var F=x?r:R,z="checkbox"===j||"radio"===j;return n.a.createElement(A,s()({component:"span",className:Object(d.a)(l.root,c,F&&l.checked,B&&l.disabled),disabled:B,tabIndex:null,role:void 0,onFocus:function(e){O&&O(e),T&&T.onFocus&&T.onFocus(e)},onBlur:function(e){E&&E(e),T&&T.onBlur&&T.onBlur(e)},ref:t},S),F?o:f,n.a.createElement("input",s()({autoFocus:a,checked:r,defaultChecked:i,className:l.input,disabled:B,id:z&&b,name:v,onChange:function(e){var t=e.target.checked;x||I(t),k&&k(e,t)},readOnly:w,ref:h,required:C,tabIndex:N,type:j,value:_},y)))}),N=Object(f.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0}},{name:"PrivateSwitchBase"})(C),j=a(429),_=Object(j.a)(n.a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),S=Object(j.a)(n.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),x=Object(j.a)(n.a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),P=n.a.createElement(S,null),D=n.a.createElement(_,null),R=n.a.createElement(x,null),I=n.a.forwardRef(function(e,t){var a=e.checkedIcon,r=void 0===a?P:a,o=e.classes,l=e.color,c=void 0===l?"secondary":l,i=e.icon,u=void 0===i?D:i,p=e.indeterminate,f=void 0!==p&&p,b=e.indeterminateIcon,h=void 0===b?R:b,v=e.inputProps,E=m()(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps"]);return n.a.createElement(N,s()({type:"checkbox",checkedIcon:f?h:r,classes:{root:Object(d.a)(o.root,o["color".concat(Object(y.a)(c))],f&&o.indeterminate),checked:o.checked,disabled:o.disabled},color:c,inputProps:s()({"data-indeterminate":f},v),icon:f?h:u,ref:t},E))}),T=Object(f.a)(function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(k.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(k.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}},{name:"MuiCheckbox"})(I);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var $=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),z(this,L(t).apply(this,arguments))}var a,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,n.a.Component),a=t,(r=[{key:"render",value:function(){var e={width:"100%"},t={marginBottom:"-10px"};return n.a.createElement("div",{className:"people-filter"},n.a.createElement(o.a,{style:e,label:"Enter Keywords",margin:"normal"}),n.a.createElement(o.a,{style:e,label:"Enter Location",margin:"normal"}),n.a.createElement(o.a,{style:e,label:"Enter Skills",margin:"normal"}),n.a.createElement("div",{className:"occupation-filter"},n.a.createElement(l.a,{component:"legend"},"Select Specialities"),n.a.createElement(c.a,null,n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"2D Animation"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"3D Animation"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"3D Modeling"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Account Management"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Advertising"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Animation"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Apparel"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Architecture"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Art Direction"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Branding & Corporate Identity"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"CGI"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Commercial & Industrial Products"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Communication Design"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Compositing"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Concept Art"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Consumer Electronics"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Content Strategy"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Copywriting & Editing"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Costume Design"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Creative Direction"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Design Management"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Design Research"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Desktop & Office Products"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"DIY"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"E-Commerce"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Engineering"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Entertainment"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Event Design"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Exhibit Design"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Fabrication"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Fashion Design"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Game Design"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Graphic Design"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Illustration"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Information Architecture"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Interior Design"}),n.a.createElement(v,{style:t,control:n.a.createElement(T,{color:"primary",value:"checkedA"}),label:"Internet Applications"}))))}}])&&F(a.prototype,r),i&&F(a,i),t}();t.a=$},527:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(13),l=a.n(o),c=a(498);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,m(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,n.a.Component),a=t,(r=[{key:"render",value:function(){return n.a.createElement("div",{className:"people-card"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"avatar"},n.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""})),n.a.createElement("div",{className:"user-info"},n.a.createElement(l.a,{href:"/people-details-page"},n.a.createElement("a",null,n.a.createElement("h2",{className:"name"},"Jhon Doe"))),n.a.createElement("p",{className:"occupation"},"Architect, Serial Enterprenur"),n.a.createElement("p",{className:"location"},"Dhaka, Bangladesh")),n.a.createElement("div",{className:"bio"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit...."))),n.a.createElement("div",{className:"button-group"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("button",{className:"btn btn-outline-info btn-lg"},"Connect")),n.a.createElement("li",null,n.a.createElement("button",{className:"btn btn-outline-success btn-lg"},"Message")))))}}])&&s(a.prototype,r),o&&s(a,o),t}(),f=function(){return n.a.createElement("div",{className:"people-list"},n.a.createElement("div",{className:"top-banner"},n.a.createElement("div",{className:"content"},n.a.createElement("h1",null,"Connect with Creative Professionals"),n.a.createElement("p",{className:"m-b-sm"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates unde alias incidunt deleniti fugiat iure quod perferendis officia labore corporis, quasi a accusamus soluta laudantium ipsa necessitatibus tenetur ducimus?"),n.a.createElement("button",{className:"btn btn-outline-light"},"Create Your Profile"))),n.a.createElement("div",{className:"list-wrapper"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-3 p-r"},n.a.createElement("div",{className:"filter-wrapper"},n.a.createElement(c.a,null))),n.a.createElement("div",{className:"col-md-9"},n.a.createElement("div",{className:"people-card-wrapper"},n.a.createElement("div",{className:"row m-b-sm"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement(p,null)),n.a.createElement("div",{className:"col-md-4"},n.a.createElement(p,null)),n.a.createElement("div",{className:"col-md-4"},n.a.createElement(p,null))),n.a.createElement("div",{className:"row m-b-sm"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement(p,null)),n.a.createElement("div",{className:"col-md-4"},n.a.createElement(p,null)),n.a.createElement("div",{className:"col-md-4"},n.a.createElement(p,null))))))))};function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,v(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,n.a.Component),a=t,(r=[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(f,null))}}])&&y(a.prototype,r),o&&y(a,o),t}();t.default=g}},[[234,1,0]]]);