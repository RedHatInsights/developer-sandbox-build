"use strict";(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[2869],{8844:(e,t,n)=>{n.d(t,{F:()=>l});var r=n(8416),a=n(6419),l=function(){return r.useContext(a.u)}},8780:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(8416),a=n.n(r),l=n(8483),o=n(8379);const u=function(){var e=(0,o.ZP)(o.xc.KUBE_API);return{getDeployments:function(t){return function(e,t){return n=void 0,r=void 0,l=function(){var n;return function(e,t){var n,r,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function u(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,u[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&u[0]?r.return:u[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,u[1])).done)return a;switch(r=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){o.label=u[1];break}if(6===u[0]&&o.label<a[1]){o.label=a[1],a=u;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(u);break}a[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],r=0}finally{n=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}(this,(function(r){switch(r.label){case 0:return n=function(e){return"/apis/apps/v1/namespaces/".concat(e,"/deployments ")}(t),[4,e.get(n)];case 1:return[2,r.sent().data]}}))},new((a=void 0)||(a=Promise))((function(e,t){function o(e){try{c(l.next(e))}catch(e){t(e)}}function u(e){try{c(l.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,u)}c((l=l.apply(n,r||[])).next())}));var n,r,a,l}(e,t)}}};var c=n(8844),i=n(9726),s=n(7629),f=((0,i.cn)([]),(0,i.cn)(void 0)),p=(0,i.cn)((function(e){return t=void 0,n=void 0,a=function(){var t,n;return function(e,t){var n,r,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function u(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,u[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&u[0]?r.return:u[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,u[1])).done)return a;switch(r=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){o.label=u[1];break}if(6===u[0]&&o.label<a[1]){o.label=a[1],a=u;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(u);break}a[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],r=0}finally{n=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}(this,(function(r){switch(r.label){case 0:return(t=e(f))?(n=e(s.T),console.log({signUpData:n}),n?[4,t(n.defaultUserNamespace)]:[2,void 0]):[2,void 0];case 1:return[2,r.sent()]}}))},new((r=void 0)||(r=Promise))((function(e,l){function o(e){try{c(a.next(e))}catch(e){l(e)}}function u(e){try{c(a.throw(e))}catch(e){l(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,u)}c((a=a.apply(t,n||[])).next())}));var t,n,r,a})),d=function(){var e=function(){var e=(0,c.F)()[0].status,t=u().getDeployments,n=(0,l.b9)(f),a=(0,l.Dv)(p);return(0,r.useEffect)((function(){"ready"===e&&t&&n((function(){return t}))}),[t.toString(),e]),a}(),t=(0,c.F)()[0].signupData,n=(null==t?void 0:t.consoleURL)&&(null==t?void 0:t.defaultUserNamespace)?"".concat(t.consoleURL,"topology/ns/").concat(t.defaultUserNamespace,"?view=graph"):null==t?void 0:t.consoleURL,o=(0,r.useMemo)((function(){var t;return null!==(t=null==e?void 0:e.items.map((function(e){var t,r;return a().createElement("tr",{key:e.metadata.uuid},a().createElement("td",null,e.metadata.name),a().createElement("td",null,e.metadata.creationTimestamp),a().createElement("td",null,e.spec.template.metadata.labels.app),a().createElement("td",null,e.spec.template.metadata.labels.deployment),a().createElement("td",null,null!==(r=null===(t=e.status.conditions.find((function(e){return"True"===e.status})))||void 0===t?void 0:t.type)&&void 0!==r?r:"Unknown"),a().createElement("td",null,e.spec.replicas),a().createElement("td",null,a().createElement("a",{target:"_blank",href:n,rel:"noreferrer"},"Open")))})))&&void 0!==t?t:[]}),[e]);return a().createElement("table",null,a().createElement("thead",null,a().createElement("tr",null,a().createElement("th",null,"Name"),a().createElement("th",null,"Created at"),a().createElement("th",null,"Application type"),a().createElement("th",null,"Deployment type"),a().createElement("th",null,"Status"),a().createElement("th",null,"Total replicas"),a().createElement("th",null,"Link"))),a().createElement("tbody",null,o))};const m=function(){return a().createElement(r.Suspense,{fallback:"Loading deployments"},a().createElement(d,null))}}}]);
//# sourceMappingURL=../sourcemaps/ExperimentalPage.f3d69eecba12a839ea69d571304f96e5.js.map