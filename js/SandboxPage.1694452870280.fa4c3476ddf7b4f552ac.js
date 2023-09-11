"use strict";(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[945],{1300:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var a=n(3264),r=n.n(a),l=n(1242);const o=n.p+"fonts/Logo-Red_Hat-Developer-A-Standard-RGB.svg",i=function(e){var t=e.children,n=e.icon,r=e.title;return a.createElement(l.PageSection,{variant:l.PageSectionVariants.light,className:"pf-u-p-xl"},a.createElement(l.Flex,{direction:{default:"column",sm:"row"},spaceItems:{default:"spaceItemsMd",sm:"spaceItemsXl"},alignItems:{sm:"alignItemsFlexStart"},flexWrap:{default:"nowrap"}},a.createElement(l.FlexItem,{style:{flexShrink:0}},n),a.createElement(l.Divider,{orientation:{default:"horizontal",sm:"vertical"}}),a.createElement(l.FlexItem,null,a.createElement(l.TextContent,null,a.createElement(l.Text,{component:l.TextVariants.h1},r),a.createElement(l.Text,{component:l.TextVariants.p},t)))))},c=function(){return a.createElement(i,{title:"Red Hat Developer Sandbox",icon:a.createElement("img",{src:o,style:{height:64}})},"Try Red Hat's products and technologies without setup or configuration.")},s=n.p+"fonts/2021_RHD__illustration_A.svg",u=function(){return r().createElement(l.Card,null,r().createElement(l.CardBody,{className:"how-it-works"},r().createElement(l.TextContent,null,r().createElement(l.Text,{component:l.TextVariants.h1},"How it works"),r().createElement(l.Text,{component:l.TextVariants.p},"The sandbox provides you with a private OpenShift environment in a shared, multi-tenant OpenShift cluster that is pre-configured with a set of developer tools. You can easily create containers from your source code or Dockerfile, build new applications using the samples and stacks provided, add services such as databases from our templates catalog, deploy Helm charts, and much more. Discover the rich capabilities of the full developer experience on OpenShift with the sandbox.")),r().createElement("img",{src:s,className:"pf-u-w-75 pf-u-pt-md pf-u-pb-md"}),r().createElement("div",{className:"how-it-works__viz"},r().createElement("div",null,"Import your code"),r().createElement("div",null),r().createElement("div",null,"Deploy and share your application"),r().createElement("div",null),r().createElement("div",null,"Play, experiment, and learn"))))};var p=n(8614);const d=n.p+"fonts/sandbox-hero-graphic.svg";var m=n(9026),f=function(){return a.useContext(m.u)},h=n(7434),v=n(4635),b=n(1277),g=function(){return a.createElement(p.ZP,{style:{color:"var(--pf-global--primary-color--100)"}})},E={"pending-approval":"Pending approval",provisioning:"Preparing your Sandbox"};const y=function(){var e=a.useState(),t=e[0],n=e[1],r=a.useState(!1),o=r[0],i=r[1],c=f(),s=c[0],u=c[1],p=u.setShowUserSignup,m=u.refreshSignupData;return a.createElement(a.Fragment,null,a.createElement(l.Card,null,a.createElement(l.CardBody,null,a.createElement(l.Grid,{hasGutter:!0},a.createElement(l.GridItem,{md:4,order:{md:"1"},style:{alignSelf:"center"},className:"pf-u-text-align-center"},a.createElement("img",{src:d,style:{maxHeight:200},className:"pf-u-display-block pf-u-m-auto pf-u-mb-lg pf-u-mb-auto-on-md"})),a.createElement(l.GridItem,{md:8},a.createElement(l.Title,{headingLevel:"h1"},"Start exploring Developer Sandbox for free"),a.createElement(l.List,{isPlain:!0,className:"pf-u-p-md pf-u-pt-lg pf-u-pb-lg"},a.createElement(l.ListItem,{icon:a.createElement(g,null)},"Instant access to a free pre-configured for learning and experimenting with OpenShift, Kubernetes, and containers."),a.createElement(l.ListItem,{icon:a.createElement(g,null)},"Built in, pre-configured, developer tooling combined with a set of sample applications enables immediate productivity with minimal effort."),a.createElement(l.ListItem,{icon:a.createElement(g,null)},"Includes Kubernetes-hosted Jupyter Notebooks for Python-based AI/ML modeling."),a.createElement(l.ListItem,{icon:a.createElement(g,null)},"Learn how to use OpenShift with guided tutorials and sample applications."),a.createElement(l.ListItem,{icon:a.createElement(g,null)},"Includes an instance of Red Hat OpenShift Dev Spaces, a cloud hosted IDE, to enable a consistent, rapid application development experience, all within the browser.")),t?a.createElement(l.Alert,{title:"An error occurred",variant:l.AlertVariant.danger,actionClose:a.createElement(l.AlertActionCloseButton,{onClose:function(){return n(void 0)}}),isInline:!0,className:"pf-u-mb-lg"},t):null,a.createElement(h.Z,{isDisabled:o||"pending-approval"===s.status||"provisioning"===s.status,isLoading:o||"provisioning"===s.status,onClick:function(){return e=void 0,t=void 0,r=function(){var e;return function(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}}(this,(function(t){switch(t.label){case 0:if("new"!==s.status)return[3,7];t.label=1;case 1:return t.trys.push([1,4,5,6]),n(void 0),i(!0),[4,(0,v.IU)()];case 2:return t.sent(),[4,m()];case 3:return t.sent(),[3,6];case 4:return e=t.sent(),n((0,b.N3)(e)),[3,6];case 5:return i(!1),[7];case 6:return[3,8];case 7:p(!0),t.label=8;case 8:return[2]}}))},new((a=void 0)||(a=Promise))((function(n,l){function o(e){try{c(r.next(e))}catch(e){l(e)}}function i(e){try{c(r.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,i)}c((r=r.apply(e,t||[])).next())}));var e,t,a,r},className:"pf-u-w-100 pf-u-w-initial-on-sm",analytics:{event:"DevSandbox Signup Start"}},E[s.status]||"Get started"),a.createElement(h.Z,{variant:l.ButtonVariant.link,component:"a",href:"https://developers.redhat.com/developer-sandbox",target:"_blank",rel:"noopener",className:"pf-u-w-100 pf-u-w-initial-on-sm",style:{display:"inline-block",whiteSpace:"initial"},analytics:{event:"DevSandbox Learn More"}},"Learn more about the Developer Sandbox"))))))},x=n.p+"fonts/Product_Icon-Red_Hat-OpenShift-RGB.svg",w=n.p+"fonts/Product_Icon-Red_Hat-OpenShift_Data_Science-RGB.svg",S=n.p+"fonts/Product_Icon-Red_Hat-OpenShift_Dev_Spaces-RGB.svg",I=function(e){var t=e.title,n=e.subtitle,r=e.description,o=e.iconUrl,i=e.learnMoreUrl,c=e.launchUrl;return a.createElement(l.Card,{className:"pf-u-h-100"},a.createElement(l.CardHeader,null,a.createElement("img",{src:o,style:{width:48},className:"pf-u-mr-md"}),a.createElement(l.TextContent,null,a.createElement(l.Text,{component:l.TextVariants.h2},t),n)),a.createElement(l.CardBody,null,r),a.createElement(l.CardFooter,null,c?a.createElement(h.Z,{component:"a",href:c,className:"pf-u-mr-md",target:"_blank",rel:"noopener",analytics:{event:"DevSandbox Service Launch",properties:{name:"".concat(t," ").concat(n),url:c}}},"Launch"):null,a.createElement(h.Z,{variant:l.ButtonVariant.link,component:"a",href:i,target:"_blank",rel:"noopener",isInline:!0,analytics:{event:"DevSandbox Service Learn",properties:{name:"".concat(t," ").concat(n),url:i}}},"Learn more")))};var k=function(){return k=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},k.apply(this,arguments)};const D=function(e){var t,n=e.isDisabled,r=(t=f()[0].signupData,a.useMemo((function(){return[{title:"Red Hat",subtitle:"OpenShift",description:"A cloud-native application platform with everything you need to manage your development life cycle securely, including standardized workflows, support for multiple environments, continuous integration, and release management.",iconUrl:x,learnMoreUrl:"https://developers.redhat.com/products/openshift/overview",launchUrl:(null==t?void 0:t.consoleURL)&&(null==t?void 0:t.defaultUserNamespace)?"".concat(null==t?void 0:t.consoleURL,"/add/ns/").concat(null==t?void 0:t.defaultUserNamespace):null==t?void 0:t.consoleURL},{title:"Red Hat",subtitle:"Dev Spaces",description:"A collaborative Kubernetes-native solution for rapid application development that delivers consistent developer environments on Red Hat OpenShift to allow anyone with a browser to contribute code in under two minutes.",iconUrl:S,learnMoreUrl:"https://developers.redhat.com/products/openshift-dev-spaces/overview",launchUrl:null==t?void 0:t.cheDashboardURL},{title:"Red Hat",subtitle:"Data Science",description:"Red Hat OpenShift Data Science is a part of the Red Hat OpenShift AI portfolio and provides tools across the AI/ML lifecycle.",iconUrl:w,learnMoreUrl:"https://developers.redhat.com/products/red-hat-openshift-data-science/overview",launchUrl:null==t?void 0:t.rhodsMemberURL}]}),[t]));return a.createElement(l.Gallery,{hasGutter:!0,minWidths:{default:"330px"}},r.map((function(e){return a.createElement(l.GalleryItem,{key:e.title},a.createElement(I,k({},e,{launchUrl:n?void 0:e.launchUrl})))})))},L=function(){var e=f()[0],t=e.status,n=e.error,a="ready"!==t;return r().createElement(r().Fragment,null,r().createElement(c,null),r().createElement(l.PageSection,{className:"pf-u-p-xl"},"unknown"===t?r().createElement(l.Bullseye,null,r().createElement(l.Spinner,null)):r().createElement(l.Flex,{direction:{default:"column"},spaceItems:{default:"spaceItemsXl"}},n?r().createElement(l.Alert,{title:"An error occurred",variant:l.AlertVariant.danger,className:"pf-u-mb-lg",style:{boxShadow:"var(--pf-global--BoxShadow--sm)"}},n):null,a?r().createElement(r().Fragment,null,r().createElement(y,null),r().createElement(u,null)):r().createElement(r().Fragment,null,r().createElement(l.TextContent,null,r().createElement(l.Text,{component:l.TextVariants.h1},"Available services"),r().createElement(l.Text,{component:l.TextVariants.p},"Now that your Sandbox is activated, these are all the cool things that are available to you, right in your Sandbox!")),r().createElement(D,null)))))}}}]);
//# sourceMappingURL=../sourcemaps/SandboxPage.ab441251181709bd1c98578f2181a6fa.js.map