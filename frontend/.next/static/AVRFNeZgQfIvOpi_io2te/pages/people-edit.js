(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{301:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=(a(4),a(114)),i=a(514),l=a(509),c=a(511),s=a(510),d=a(486),p=a(502),u=a(501);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,y(t).apply(this,arguments))}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o.a.Component),a=t,(n=[{key:"render",value:function(){var e={width:"100%"};return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"wizard-content"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 offset-md-3 text-center"},o.a.createElement("h1",{style:{margin:"50px 0",padding:"10px 0",borderBottom:"3px solid #bf1e2d"}},"PLEASE PROVIDE SOME BASIC INFORMATION"),o.a.createElement(u.a,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(p.a,{style:e,label:"Enter First Name",margin:"normal"})),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(p.a,{style:e,label:"Enter Last Name",margin:"normal"}))),o.a.createElement(p.a,{style:e,label:"Enter Occupation",margin:"normal"}),o.a.createElement(p.a,{style:e,label:"Enter Skills",margin:"normal"}),o.a.createElement(p.a,{style:e,label:"Enter Bio",margin:"normal"}))))))}}])&&b(a.prototype,n),r&&b(a,r),t}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var k=function(e){function t(){var e,a,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return n=this,o=(e=E(t)).call.apply(e,[this].concat(i)),a=!o||"object"!==g(o)&&"function"!=typeof o?O(n):o,w(O(a),"state",{activeStep:0}),w(O(a),"handleNext",function(){a.setState(function(e){return{activeStep:e.activeStep+1}})}),w(O(a),"handleBack",function(){a.setState(function(e){return{activeStep:e.activeStep-1}})}),w(O(a),"handleReset",function(){a.setState({activeStep:0})}),a}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,o.a.Component),a=t,(n=[{key:"render",value:function(){var e=this.props.classes,t=["Basic Information","Work Experience","Education","Follow Topics","Follow Poeple & Brands"],a=this.state.activeStep;return o.a.createElement("div",{className:e.root,style:{width:"100%",marginBottom:"100px"}},o.a.createElement(i.a,{activeStep:a,alternativeLabel:!0},t.map(function(e){return o.a.createElement(l.a,{key:e},o.a.createElement(c.a,null,e))})),o.a.createElement("div",null,this.state.activeStep===t.length?o.a.createElement("div",null,o.a.createElement(d.a,{className:e.instructions},"All steps completed"),o.a.createElement(s.a,{onClick:this.handleReset},"Reset")):o.a.createElement("div",null,o.a.createElement(d.a,{className:e.instructions},function(e){switch(e){case 0:return o.a.createElement(h,null);case 1:return"Work Experience";case 2:return"Education";case 3:return"Follow Topics";case 4:return"Follow Poeple & Brands";default:return"Uknown stepIndex"}}(a)),o.a.createElement("div",{className:"row text-center"},o.a.createElement("div",{className:"cold-md-6 offset-md-3",style:{width:"46%",marginTop:"50px"}},o.a.createElement(s.a,{disabled:0===a,onClick:this.handleBack,className:e.backButton,style:{display:"block",float:"left",marginLeft:"50px"}},"Back"),o.a.createElement(s.a,{variant:"contained",color:"primary",onClick:this.handleNext,style:{display:"block",float:"right"}},a===t.length-1?"Finish":"Next"))))))}}])&&x(a.prototype,n),r&&x(a,r),t}();t.a=Object(r.a)(function(e){return{root:{width:"90%"},backButton:{marginRight:e.spacing.unit},instructions:{marginTop:e.spacing.unit,marginBottom:e.spacing.unit}}})(k)},509:function(e,t,a){"use strict";var n=a(1),o=a.n(n),r=a(150),i=a.n(r),l=a(0),c=a.n(l),s=(a(4),a(281)),d=(a(10),a(114)),p=c.a.forwardRef(function(e,t){var a=e.active,n=void 0!==a&&a,r=e.alternativeLabel,l=e.children,d=e.classes,p=e.className,u=e.completed,m=void 0!==u&&u,b=e.connector,f=e.disabled,y=void 0!==f&&f,v=e.index,h=e.last,g=e.orientation,x=i()(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","index","last","orientation"]),E=Object(s.a)(d.root,d[g],p,r&&d.alternativeLabel,m&&d.completed);return c.a.createElement("div",o()({className:E,ref:t},x),b&&r&&0!==v&&c.a.cloneElement(b,{orientation:g,alternativeLabel:r,index:v,active:n,completed:m,disabled:y}),c.a.Children.map(l,function(e){return c.a.isValidElement(e)?c.a.cloneElement(e,o()({active:n,alternativeLabel:r,completed:m,disabled:y,last:h,icon:v+1,orientation:g},e.props)):null}))});t.a=Object(d.a)({root:{},horizontal:{paddingLeft:8,paddingRight:8,"&:first-child":{paddingLeft:0},"&:last-child":{paddingRight:0}},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}},{name:"MuiStep"})(p)},510:function(e,t,a){"use strict";var n=a(150),o=a.n(n),r=a(1),i=a.n(r),l=a(0),c=a.n(l),s=(a(4),a(281)),d=a(114),p=a(428),u=a(492),m=a(298),b=c.a.forwardRef(function(e,t){var a=e.children,n=e.classes,r=e.className,l=e.color,d=void 0===l?"default":l,p=e.component,b=void 0===p?"button":p,f=e.disabled,y=void 0!==f&&f,v=e.disableFocusRipple,h=void 0!==v&&v,g=e.focusVisibleClassName,x=e.fullWidth,E=void 0!==x&&x,O=e.size,S=void 0===O?"medium":O,w=e.type,k=void 0===w?"button":w,j=e.variant,C=void 0===j?"text":j,N=o()(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","size","type","variant"]),L="text"===C,P="outlined"===C,R="contained"===C,_="primary"===d,z="secondary"===d,T=Object(s.a)(n.root,r,L&&[n.text,_&&n.textPrimary,z&&n.textSecondary],P&&[n.outlined,_&&n.outlinedPrimary,z&&n.outlinedSecondary],R&&[n.contained,_&&n.containedPrimary,z&&n.containedSecondary],"medium"!==S&&n["size".concat(Object(m.a)(S))],y&&n.disabled,E&&n.fullWidth,"inherit"===d&&n.colorInherit);return c.a.createElement(u.a,i()({className:T,component:b,disabled:y,focusRipple:!h,focusVisibleClassName:Object(s.a)(n.focusVisible,g),ref:t,type:k},N),c.a.createElement("span",{className:n.label},a))});t.a=Object(d.a)(function(e){return{root:i()({lineHeight:1.75},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(p.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 16px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(p.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(p.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(p.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(p.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},sizeSmall:{padding:"4px 8px",fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}},{name:"MuiButton"})(b)},511:function(e,t,a){"use strict";var n=a(1),o=a.n(n),r=a(150),i=a.n(r),l=a(0),c=a.n(l),s=(a(4),a(281)),d=a(114),p=a(486),u=a(429),m=Object(u.a)(c.a.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),b=Object(u.a)(c.a.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),f=a(499),y=c.a.createElement("circle",{cx:"12",cy:"12",r:"12"}),v=c.a.forwardRef(function(e,t){var a=e.completed,n=void 0!==a&&a,o=e.icon,r=e.active,i=void 0!==r&&r,l=e.error,d=void 0!==l&&l,p=e.classes;return"number"==typeof o||"string"==typeof o?d?c.a.createElement(b,{className:Object(s.a)(p.root,p.error),ref:t}):n?c.a.createElement(m,{className:Object(s.a)(p.root,p.completed),ref:t}):c.a.createElement(f.a,{className:Object(s.a)(p.root,i&&p.active),ref:t},y,c.a.createElement("text",{className:p.text,x:"12",y:"16",textAnchor:"middle"},o)):o}),h=Object(d.a)(function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$active":{color:e.palette.primary.main},"&$completed":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}},{name:"MuiStepIcon"})(v),g=c.a.forwardRef(function(e,t){var a=e.active,n=void 0!==a&&a,r=e.alternativeLabel,l=void 0!==r&&r,d=e.children,u=e.classes,m=e.className,b=e.completed,f=void 0!==b&&b,y=e.disabled,v=void 0!==y&&y,g=e.error,x=void 0!==g&&g,E=e.icon,O=(e.last,e.optional),S=e.orientation,w=void 0===S?"horizontal":S,k=e.StepIconComponent,j=e.StepIconProps,C=i()(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),N=k;return E&&!N&&(N=h),c.a.createElement("span",o()({className:Object(s.a)(u.root,u[w],m,v&&u.disabled,l&&u.alternativeLabel,x&&u.error),ref:t},C),E||N?c.a.createElement("span",{className:Object(s.a)(u.iconContainer,l&&u.alternativeLabel)},c.a.createElement(N,o()({completed:f,active:n,error:x,icon:E},j))):null,c.a.createElement("span",{className:u.labelContainer},c.a.createElement(p.a,{variant:"body2",component:"span",className:Object(s.a)(u.label,l&&u.alternativeLabel,f&&u.completed,n&&u.active,x&&u.error),display:"block"},d),O))});g.muiName="StepLabel";t.a=Object(d.a)(function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}},{name:"MuiStepLabel"})(g)},514:function(e,t,a){"use strict";var n=a(1),o=a.n(n),r=a(150),i=a.n(r),l=a(0),c=a.n(l),s=(a(4),a(281)),d=a(114),p=a(488),u=c.a.forwardRef(function(e,t){var a=e.active,n=e.alternativeLabel,r=void 0!==n&&n,l=e.classes,d=e.className,p=e.completed,u=e.disabled,m=(e.index,e.orientation),b=void 0===m?"horizontal":m,f=i()(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return c.a.createElement("div",o()({className:Object(s.a)(l.root,l[b],d,r&&l.alternativeLabel,a&&l.active,p&&l.completed,u&&l.disabled),ref:t},f),c.a.createElement("span",{className:Object(s.a)(l.line,"vertical"===b?l.lineVertical:l.lineHorizontal)}))}),m=Object(d.a)(function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}},{name:"MuiStepConnector"})(u),b=c.a.createElement(m,null),f=c.a.forwardRef(function(e,t){var a=e.activeStep,n=void 0===a?0:a,r=e.alternativeLabel,l=void 0!==r&&r,d=e.children,u=e.classes,m=e.className,f=e.connector,y=void 0===f?b:f,v=e.nonLinear,h=void 0!==v&&v,g=e.orientation,x=void 0===g?"horizontal":g,E=i()(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),O=Object(s.a)(u.root,u[x],m,l&&u.alternativeLabel),S=c.a.isValidElement(y)?c.a.cloneElement(y,{orientation:x}):null,w=c.a.Children.toArray(d),k=w.map(function(e,t){var a={alternativeLabel:l,connector:y,last:t+1===w.length,orientation:x},r={index:t,active:!1,completed:!1,disabled:!1};return n===t?r.active=!0:!h&&n>t?r.completed=!0:!h&&n<t&&(r.disabled=!0),[!l&&S&&0!==t&&c.a.cloneElement(S,o()({key:t},r)),c.a.cloneElement(e,o()({},a,r,e.props))]});return c.a.createElement(p.a,o()({square:!0,elevation:0,className:O,ref:t},E),k)});t.a=Object(d.a)({root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}},{name:"MuiStepper"})(f)},517:function(e,t,a){__NEXT_REGISTER_PAGE("/people-edit",function(){return e.exports=a(518),{page:e.exports.default}})},518:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(301);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,s(t).apply(this,arguments))}var a,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.Component),a=t,(n=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(r.a,null))}}])&&l(a.prototype,n),i&&l(a,i),t}();t.default=p}},[[517,1,0]]]);