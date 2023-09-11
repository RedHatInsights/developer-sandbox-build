/*! For license information please see OopsPage.1694452870280.fa4c3476ddf7b4f552ac.js.LICENSE.txt */
(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[196],{3047:(t,r,e)=>{"use strict";e.d(r,{$O:()=>n,ZP:()=>a});const n=(0,e(400).IU)({name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0}),a=n},3400:(t,r,e)=>{"use strict";e.d(r,{Z:()=>u});var n=e(5893),a=e(3264),o=e.n(a),i=e(4184),c=e.n(i),s=e(8928);const l=o().createContext("light");var p=function(){return p=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var a in r=arguments[e])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t},p.apply(this,arguments)},f=function(t,r,e){if(e||2===arguments.length)for(var n,a=0,o=r.length;a<o;a++)!n&&a in r||(n||(n=Array.prototype.slice.call(r,0,a)),n[a]=r[a]);return t.concat(n||Array.prototype.slice.call(r))};const u=(0,s.$j)((function(t){var r=t.routerData;return{params:r&&r.params,path:r&&r.path}}),(function(){return{}}))((function(t){var r=t.path,e=t.params,a=void 0===e?{}:e,i=t.children,s=t.className,u=function(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(e[n[a]]=t[n[a]])}return e}(t,["path","params","children","className"]),h=function(){var t,e,n;if(null===(n=null===(e=null===(t=null===window||void 0===window?void 0:window.insights)||void 0===t?void 0:t.chrome)||void 0===e?void 0:e.$internal)||void 0===n?void 0:n.store){var o=window.insights.chrome.$internal.store.getState();if(r&&o)return r.split("/").reduce((function(t,r){var e,n;return 0===r.indexOf(":")?t.dynamic=p(p({},t.dynamic),((e={})["data-".concat((n=r.substr(1),n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=a[r.substr(1)],e)):t.staticPart=f(f([],t.staticPart,!0),""!==r?[r]:[],!0),t}),{staticPart:[o.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),y=h.dynamic,d=h.staticPart;return(0,n.jsx)(l.Consumer,{children:function(t){var r;void 0===t&&(t="light");var e=c()(((r={})["pf-m-".concat(t)]="dark"===t,r));return{dark:(0,n.jsx)("section",p({},u,y,{"page-type":d.join("-"),className:"".concat(c()(s,"pf-l-page__main-section pf-c-page__main-section")," ").concat(e)},{children:o().Children.map(i,(function(t){return o().cloneElement(t,{className:"pf-m-dark"})}))})),light:(0,n.jsx)("section",p({},u,y,{"page-type":d.join("-"),className:"".concat(c()(s,"pf-l-page__main-section pf-c-page__main-section"))},{children:i}))}[t]}})}))},4184:(t,r)=>{var e;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],r=0;r<arguments.length;r++){var e=arguments[r];if(e){var o=typeof e;if("string"===o||"number"===o)t.push(e);else if(Array.isArray(e)){if(e.length){var i=a.apply(null,e);i&&t.push(i)}}else if("object"===o)if(e.toString===Object.prototype.toString)for(var c in e)n.call(e,c)&&e[c]&&t.push(c);else t.push(e.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(e=function(){return a}.apply(r,[]))||(t.exports=e)}()},7418:t=>{"use strict";var r=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var r={},e=0;e<10;e++)r["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(t){return r[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,o){for(var i,c,s=a(t),l=1;l<arguments.length;l++){for(var p in i=Object(arguments[l]))e.call(i,p)&&(s[p]=i[p]);if(r){c=r(i);for(var f=0;f<c.length;f++)n.call(i,c[f])&&(s[c[f]]=i[c[f]])}}return s}},5251:(t,r,e)=>{"use strict";e(7418);var n=e(3264),a=60103;if("function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),o("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(t,r,e){var n,o={},l=null,p=null;for(n in void 0!==e&&(l=""+e),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(p=r.ref),r)c.call(r,n)&&!s.hasOwnProperty(n)&&(o[n]=r[n]);if(t&&t.defaultProps)for(n in r=t.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:a,type:t,key:l,ref:p,props:o,_owner:i.current}}r.jsx=l,r.jsxs=l},5893:(t,r,e)=>{"use strict";t.exports=e(5251)},3842:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>u});var n=e(3264),a=e.n(n),o=e(3400),i=e(5893),c=e(1242),s=e(3047),l=function(){return l=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var a in r=arguments[e])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t},l.apply(this,arguments)};const p=function(){return(0,i.jsxs)(c.EmptyState,l({variant:c.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,i.jsx)(c.EmptyStateIcon,{icon:s.$O}),(0,i.jsx)(c.Title,l({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,i.jsxs)(c.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,i.jsxs)("a",l({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))};var f=e(5140);const u=function(){var t=(0,f.Z)().appAction;return(0,n.useEffect)((function(){t("oops-page")}),[]),a().createElement(o.Z,null,a().createElement(p,null))}}}]);
//# sourceMappingURL=../sourcemaps/OopsPage.adc6260fc94354d8c423b9e01be86077.js.map