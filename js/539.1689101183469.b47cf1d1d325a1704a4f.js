"use strict";(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[539],{5510:(e,t,n)=>{n.d(t,{Z:()=>W});var r=n(3264),a=n.n(r),o=n(1663),i=n(1242),u=n(5564),l=n.n(u),c=function(e){var t,n;return(l().isAxiosError(e)?(null===(n=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===n?void 0:n.message)||e.message:"object"==typeof e?null==e?void 0:e.toString():"string"==typeof e?e:"")||""},s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)},f=(0,r.lazy)((function(){return n.e(945).then(n.bind(n,1300))})),p=(0,r.lazy)((function(){return n.e(196).then(n.bind(n,3842))})),d=[{path:"no-permissions",element:(0,r.lazy)((function(){return n.e(452).then(n.bind(n,1711))}))},{path:"oops",element:p},{path:"/",element:f}],m=function(e){return void 0===e&&(e=[]),e.map((function(e){var t=e.path,n=e.element,r=e.childRoutes,i=e.elementProps;return a().createElement(o.Route,{key:t,path:t,element:a().createElement(n,s({},i))},m(r))}))};const v=function(){var e=(0,r.useMemo)((function(){return m(d)}),[d]);return a().createElement(r.Suspense,{fallback:a().createElement(i.Bullseye,null,a().createElement(i.Spinner,null))},a().createElement(o.Routes,null,e,a().createElement(o.Route,{path:"*",element:a().createElement(o.Navigate,{replace:!0,to:"/openshift/sandbox"})})))};var h=n(3719),b=n(5160),y=n(3215),g=n(5140),E=n(8446),w=n.n(E),x=n(9026),S=function(){return S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},S.apply(this,arguments)},C=l().create();C.interceptors.request.use((function(e){return S({baseURL:"https://registration-service-toolchain-host-operator.apps.sandbox.x8i5.p1.openshiftapps.com"},e)})),C.interceptors.request.use((function(e){return window.insights.chrome.auth.getToken().then((function(t){return t?S(S({},e),{headers:S({Accept:"application/json",Authorization:"Bearer ".concat(t)},e.headers)}):e}))}));var k=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function u(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}l((r=r.apply(e,t||[])).next())}))},A=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},R="/api/v1/signup",I="/api/v1/signup/verification",L=function(){return k(void 0,void 0,Promise,(function(){var e,t;return A(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,C.get(R)];case 1:return[2,n.sent().data];case 2:if(e=n.sent(),l().isAxiosError(e)&&404===(null===(t=e.response)||void 0===t?void 0:t.status))return[2,void 0];throw e;case 3:return[2]}}))}))},P=function(e,t){return k(void 0,void 0,void 0,(function(){return A(this,(function(n){switch(n.label){case 0:if(!T(e))throw"Invalid country code.";if(!q(t))throw"Invalid phone number.";return[4,C.put(I,{country_code:e,phone_number:t})];case 1:return n.sent(),[2]}}))}))},T=function(e){return/^[+]?[0-9]+$/.test(e)},q=function(e){return/^[(]?[0-9]+[)]?[-\s.]?[0-9]+[-\s./0-9]*$/im.test(e)},O=n(9225),j=n(8614),G=function(){return G=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},G.apply(this,arguments)};const N=function(e){return r.createElement("div",{className:"pf-u-pt-xl pf-u-pt-md pf-u-text-align-center"},r.createElement(i.Button,G({},e)))},M=n.p+"fonts/launch-sandbox-success.svg";var B=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function u(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}l((r=r.apply(e,t||[])).next())}))},D=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};const F=function(e){var t=e.onClose,n=e.initialStatus;r.useEffect((function(){!function(){var e="https://www.google.com/recaptcha/enterprise.js?render=".concat("6LdL7aMlAAAAALvuuAZWjwlOLRKMCIrWjOpv-U3G");if(!document.querySelector('script[src="'.concat(e,'"]'))){var t=document.createElement("script");t.type="text/javascript",t.src=e,t.async=!0,t.defer=!0,document.head.appendChild(t)}}()}),[]);var a=r.useState(n&&"unknown"!==n?n:"new"),o=a[0],u=a[1],l=r.useState(),s=l[0],f=l[1],p=r.useState(""),d=p[0],m=p[1],v=r.useState(!1),h=v[0],b=v[1],y=r.useState(""),g=y[0],E=y[1],w=r.useState(""),x=w[0],S=w[1],G=r.useState(!1),F=G[0],V=G[1],W=r.useState(!1),U=W[0],z=W[1],X=r.useState(),Z=X[0],J=X[1],H=r.useCallback((function(){return B(void 0,void 0,void 0,(function(){var e,t;return D(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,L()];case 1:return e=n.sent(),J(e),null==e?u("new"):!0===e.status.ready?u("ready"):!1===e.status.ready&&e.status.verificationRequired?u((function(e){return"verify"!==e&&"verifyCode"!==e?"verify":e})):!1===e.status.ready&&"Provisioning"===e.status.reason?u("provisioning"):u("pending-approval"),[3,3];case 2:return t=n.sent(),f(c(t)),[3,3];case 3:return[2]}}))}))}),[]);return r.useEffect((function(){if("provisioning"===o||"pending-approval"===o){var e=setInterval(H,1e3);return function(){clearInterval(e)}}}),[o]),r.createElement(i.Modal,{"data-testid":"registration-modal",variant:i.ModalVariant.small,title:"ready"===o?"Congratulations, you're ready to get started!":"Activate your free 30 days trial",isOpen:!0,onClose:function(){return t(Z)}},s?r.createElement(i.Alert,{title:"An error occurred",variant:i.AlertVariant.danger,actionClose:r.createElement(i.AlertActionCloseButton,{onClose:function(){return f(void 0)}}),isInline:!0,className:"pf-u-mb-lg"},s):null,function(){switch(o){case"new":return r.createElement(r.Fragment,null,r.createElement(i.TextContent,null,r.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.createElement("div",{className:"pf-u-pt-lg pf-u-pt-md pf-u-text-align-center"},r.createElement(i.Checkbox,{"aria-label":"Join the Red Hat Developers program",id:"accept-join",isChecked:U,onChange:function(e){return z(e)},className:"pf-u-mr-sm"}),"Join the"," ",r.createElement(i.Button,{variant:i.ButtonVariant.link,isInline:!0,component:"a",href:"https://developers.redhat.com/",target:"_blank",rel:"noopener noreferrer"},"Red Hat Developers program ",r.createElement(O.LA,null))),r.createElement(N,{isDisabled:h||!U,isLoading:h,onClick:function(){return B(void 0,void 0,void 0,(function(){var e;return D(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,4,5]),b(!0),[4,k(void 0,void 0,void 0,(function(){var e;return A(this,(function(t){switch(t.label){case 0:return[4,k(void 0,void 0,Promise,(function(){return A(this,(function(e){return[2,new Promise((function(e,t){var n=!1,r=setTimeout((function(){n=!0,t("Recaptcha timeout.")}),1e4);(null===grecaptcha||void 0===grecaptcha?void 0:grecaptcha.enterprise)?grecaptcha.enterprise.ready((function(){return k(void 0,void 0,void 0,(function(){var a;return A(this,(function(o){switch(o.label){case 0:if(n)return[3,4];clearTimeout(r),o.label=1;case 1:return o.trys.push([1,3,,4]),a=e,[4,grecaptcha.enterprise.execute("6LdL7aMlAAAAALvuuAZWjwlOLRKMCIrWjOpv-U3G",{action:"SIGNUP"})];case 2:return a.apply(void 0,[o.sent()]),[3,4];case 3:return o.sent(),t("Recaptcha failure."),[3,4];case 4:return[2]}}))}))})):t("Recaptcha failure.")}))]}))}))];case 1:return e=t.sent(),[4,C.post(R,null,{headers:{"Recaptcha-Token":e}})];case 2:return t.sent(),[2]}}))}))];case 1:return t.sent(),[4,H()];case 2:return t.sent(),[3,5];case 3:return e=t.sent(),f(c(e)),[3,5];case 4:return b(!1),[7];case 5:return[2]}}))}))}},"Activate"));case"verify":return r.createElement(r.Fragment,null,r.createElement(i.TextContent,null,r.createElement("p",null,"We are preparing your Sandbox. It will be available shortly."),r.createElement("p",null,"One more thing, to ensure your account is secure please enter a valid phone number for SMS verification.")),r.createElement(i.Form,null,r.createElement(i.Grid,{hasGutter:!0,className:"pf-u-mt-md"},r.createElement(i.GridItem,{span:3},r.createElement(i.FormGroup,{label:"Country code",isRequired:!0},r.createElement(i.TextInput,{"aria-label":"Country code",isRequired:!0,validated:!g||T(g)?"default":"error",type:"text",placeholder:"+01",minLength:1,maxLength:4,value:g,onChange:function(e){E(e)}}))),r.createElement(i.GridItem,{span:9},r.createElement(i.FormGroup,{label:"Phone number",isRequired:!0},r.createElement(i.TextInput,{"aria-label":"Phone number",isRequired:!0,validated:!x||q(x)?"default":"error",type:"tel",placeholder:"123-456-7890",minLength:6,maxLength:32,value:x,onChange:function(e){S(e)}}))))),r.createElement(N,{isDisabled:h||!T(g)||!q(x),onClick:function(){return B(void 0,void 0,void 0,(function(){var e;return D(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,3,4]),b(!0),[4,P(g,x)];case 1:return t.sent(),u("verifyCode"),[3,4];case 2:return e=t.sent(),f(c(e)),[3,4];case 3:return b(!1),[7];case 4:return[2]}}))}))}},"Next"));case"verifyCode":return r.createElement(r.Fragment,null,r.createElement(i.TextContent,null,r.createElement("p",null,"We are preparing your Sandbox. It will be available shortly."),r.createElement("p",null,'We sent a verification code to "',r.createElement("b",null,"".concat(g," ").concat(x)),'"')),r.createElement(i.Form,null,r.createElement(i.FormGroup,{label:"Verification code",isRequired:!0,className:"pf-u-mt-md pf-u-mb-md"},r.createElement(i.TextInput,{"aria-label":"Veritification code",isRequired:!0,validated:d&&6!==d.length?"error":"default",minLength:6,maxLength:6,placeholder:"XXXXXX",value:d||"",onChange:function(e){V(!1),m(e)}}))),r.createElement(i.TextContent,null,r.createElement("p",null,"No text received?"," ",r.createElement(i.Button,{isInline:!0,variant:i.ButtonVariant.link,onClick:function(){m(""),P(g,x),V(!0)}},"Resend code"),F?r.createElement(j.nQ,{className:"pf-u-ml-md",style:{color:"var(--pf-global--success-color--100)"}}):null,r.createElement("br",null),"Or"," ",r.createElement(i.Button,{isInline:!0,variant:i.ButtonVariant.link,onClick:function(){u("verify"),m("")}},"use a different phone number"))),r.createElement(N,{isDisabled:h||6!==d.length,onClick:function(){return B(void 0,void 0,void 0,(function(){var e;return D(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,4,5]),b(!0),[4,(n=d,k(void 0,void 0,void 0,(function(){return A(this,(function(e){switch(e.label){case 0:return[4,C.get("".concat(I,"/").concat(n))];case 1:return e.sent(),[2]}}))})))];case 1:return t.sent(),[4,H()];case 2:return t.sent(),[3,5];case 3:return e=t.sent(),f(c(e)||"Error while sending verification code. Please try again."),[3,5];case 4:return b(!1),[7];case 5:return[2]}var n}))}))}},"Next"));case"provisioning":return r.createElement(r.Fragment,null,r.createElement(i.TextContent,null,r.createElement("p",null,"We are preparing your Sandbox. It will be available shortly.")),r.createElement(i.Bullseye,{className:"pf-u-mt-2xl pf-u-mb-lg"},r.createElement(i.Spinner,{isSVG:!0,size:"xl"})),r.createElement(N,{isDisabled:!0},"Launch Sandbox"));case"pending-approval":return r.createElement(r.Fragment,null,r.createElement(i.TextContent,null,r.createElement("p",null,"Your Sandbox account is waiting for approval.")),r.createElement(i.Bullseye,{className:"pf-u-mt-2xl pf-u-mb-lg"},r.createElement(i.Spinner,{isSVG:!0,size:"xl"})),r.createElement(N,{onClick:function(){return t(Z)}},"Close"));case"ready":return r.createElement(r.Fragment,null,r.createElement(i.TextContent,null,r.createElement("p",null,"Your Sandbox will be activate for the next 30 days. Jump right in and start building!")),r.createElement("div",{className:"pf-u-p-md"},r.createElement("img",{src:M})),r.createElement(N,{onClick:function(){return t(Z)}},"Launch Sandbox"));default:return null}}())};const V=function(e){var t=e.children,n=r.useState(!0),a=n[0],o=n[1],i=r.useState(),u=i[0],l=i[1],s=r.useState(),f=s[0],p=s[1],d=r.useState(!1),m=d[0],v=d[1],h=r.useMemo((function(){return a?"unknown":(0,x.M)(u)}),[a,u]),b=r.useRef();b.current=function(){return e=void 0,t=void 0,r=function(){var e,t;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,L()];case 1:return e=n.sent(),w()(e,u)||l(e),p(void 0),o(!1),[3,3];case 2:return t=n.sent(),p("An error occurred retrieving registration status. ".concat(c(t))),o(!1),[3,3];case 3:return[2]}}))},new((n=void 0)||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function u(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}l((r=r.apply(e,t||[])).next())}));var e,t,n,r},r.useEffect((function(){var e;null===(e=b.current)||void 0===e||e.call(b)}),[]);var y=!m;r.useEffect((function(){if(y){var e=setInterval((function(){var e;null===(e=b.current)||void 0===e||e.call(b)}),1e4);return function(){clearInterval(e)}}}),[y]);var g=r.useMemo((function(){return{setError:p,setSignupData:l,setShowUserSignup:v}}),[]),E=r.useMemo((function(){return[{error:f,signupData:u,showUserSignup:m,status:h},g]}),[f,u,m,h,g]);return r.createElement(x.u.Provider,{value:E},m?r.createElement(F,{initialStatus:h,onClose:function(e){e&&l(e),v(!1)}}):null,t)},W=function(){var e=(0,g.Z)().updateDocumentTitle;return(0,r.useEffect)((function(){(0,h.JH)().register({notifications:y.ee}),e("Developer Sandbox")}),[]),a().createElement(r.Fragment,null,a().createElement(b.ZP,null),a().createElement(V,null,a().createElement(v,null)))}},6239:(e,t,n)=>{n.d(t,{S:()=>l});var r=n(3719),a=n(8573),o=n.n(a),i=n(4885),u=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};function l(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0,r.JH)({},u([o(),(0,i.ZP)({errorDescriptionKey:["detail","stack"]})],e,!0))}},9026:(e,t,n)=>{n.d(t,{M:()=>a,u:()=>r});var r=n(3264).createContext(null),a=function(e){return null==e?"new":!0===e.status.ready?"ready":!1===e.status.ready&&e.status.verificationRequired?"verify":!1===e.status.ready&&"Provisioning"===e.status.reason?"provisioning":"pending-approval"}}}]);
//# sourceMappingURL=../sourcemaps/539.93cd8176eef536b716f46c3a938ca25d.js.map