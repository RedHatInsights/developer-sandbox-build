__load_plugin_entry__("sandbox",(()=>{"use strict";var e,t,r,a,n,o,d,c,l,i,s,f,u,p,m,b,h,y,v,g,P={1877:(e,t,r)=>{var a={"./RootApp":()=>Promise.all([r.e(8446),r.e(1060),r.e(8416),r.e(8613),r.e(8178)]).then((()=>()=>r(9138)))},n=(e,t)=>(r.R=t,t=r.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),o=(e,t)=>{if(r.S){var a="default",n=r.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[a]=e,r.I(a,t)}};r.d(t,{get:()=>n,init:()=>o})}},x={};function w(e){var t=x[e];if(void 0!==t)return t.exports;var r=x[e]={id:e,loaded:!1,exports:{}};return P[e](r,r.exports,w),r.loaded=!0,r.exports}return w.m=P,w.c=x,w.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return w.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,w.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"==typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"==typeof r.then)return r}var n=Object.create(null);w.r(n);var o={};e=e||[null,t({}),t([]),t(t)];for(var d=2&a&&r;"object"==typeof d&&!~e.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,w.d(n,o),n},w.d=(e,t)=>{for(var r in t)w.o(t,r)&&!w.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((t,r)=>(w.f[r](e,t),t)),[])),w.u=e=>"js/"+({2869:"ExperimentalPage",7945:"SandboxPage",8178:"exposed-./RootApp",9452:"NoPermissionsPage"}[e]||e)+"."+{97:"3db670bed74d29f5f29a",164:"c76829475b6e82dd59e9",306:"d7493d274909b9ef1d64",544:"df8d2a0c390d43ccc847",556:"46e9d550b6fef0a67b2a",776:"e3924ca5d765fcf1e757",923:"1b68b3f8f8cc93415f09",1026:"84a8fd8d801312bf5b82",1051:"2bce571d9ea725b5554a",1060:"0aaabab19d681e49902a",1076:"86cfd3bf95a30957b619",1338:"27cbae0f314e6425763a",1468:"9ddf484b79802d2c3c7c",2080:"f80ca6f767a74eaee980",2295:"cee5c1d47bcee8dfbb56",2816:"b53ba3bb2cf38de324f3",2842:"798eebf91b797cd00228",2869:"97bd143e220eb97c4cf5",2886:"a0e804c67b87a96fabf0",2902:"b760ca59984122e0f2f5",3251:"268ccdc8026d9442d896",3552:"68d729e7eb285bf71120",3699:"bb2a75540314682324bb",3810:"a20c075fcf70e4e1a17d",3935:"6b015d8044d84d891c53",4146:"f866e06c988f861a9178",4680:"5e5b416866a3a83fb254",4957:"a069fcd61b768dbfa5d7",5145:"c42664d4d5fbfafad622",5241:"05a3150236c8c0184c08",5748:"8d28a64b79f5de6b347f",5975:"a873e6682c21fd815bbd",6183:"96c24a25483be90182b9",6375:"686c1d7b2347fa6cb197",7294:"da7e6a0f28d40c62898a",7326:"277fbdf3cbf40467bda7",7355:"1836d34b60e00f20c448",7400:"92aed9761b859f8508e5",7794:"157edc22a7e5a81fe247",7879:"6551501da297d60690b8",7888:"2a70e1a390e4cc849f35",7891:"d77a5fb8d09a73f543bc",7945:"194d0762ccc6076a45cb",7955:"9bc72b8ed866a18e825c",8178:"6435f72737202b5f40a7",8199:"2998d3b4719b70175fe0",8214:"d5e2e390f841724fb470",8232:"1aefd82ea894c5ac95c9",8299:"88d5592863e7a76072ba",8416:"f6ba3459e4503634bdbb",8446:"550d2b0f38cd48441d1e",8534:"1295f1e01114b7ced996",8537:"dae88cb94419802ed779",8613:"e20e94cb20faec143fa9",8614:"fdb50f4e251cf83732c7",8754:"3edfd813771d81130604",8805:"79b1cf06473df97f61c3",8992:"f95e003eb3b42e1c33f2",9219:"332c28383d52b9c72b6e",9452:"e70ed145e8bde8c3c93a",9669:"76697fa8cab4d103849c",9818:"e1bc4a95a52aba2fc650",9835:"79f778dcfedd66686a98",9868:"ca1d784f3956ddfb13f9"}[e]+".js",w.miniCssF=e=>"css/"+{7945:"SandboxPage",8178:"exposed-./RootApp",9452:"NoPermissionsPage"}[e]+"."+{7945:"e658b67b37055bbf079b",8178:"da77d7d7567d16acf0a8",9452:"8233c7a68adbd9dd0364"}[e]+".css",w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),w.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},a="sandbox:",w.l=(e,t,n,o)=>{if(r[e])r[e].push(t);else{var d,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),i=0;i<l.length;i++){var s=l[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==a+n){d=s;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,w.nc&&d.setAttribute("nonce",w.nc),d.setAttribute("data-webpack",a+n),d.src=e),r[e]=[t];var f=(t,a)=>{d.onerror=d.onload=null,clearTimeout(u);var n=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),n&&n.forEach((e=>e(a))),t)return t(a)},u=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),c&&document.head.appendChild(d)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},w.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{w.S={};var e={},t={};w.I=(r,a)=>{a||(a=[]);var n=t[r];if(n||(n=t[r]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[r])return e[r];w.o(w.S,r)||(w.S[r]={});var o=w.S[r],d="sandbox",c=(e,t,r,a)=>{var n=o[e]=o[e]||{},c=n[t];(!c||!c.loaded&&(!a!=!c.eager?a:d>c.from))&&(n[t]={get:r,from:d,eager:!!a})},l=[];return"default"===r&&(c("@patternfly/react-core/dist/dynamic/components/Alert","^5.0.0",(()=>Promise.all([w.e(7794),w.e(164),w.e(5748),w.e(8416),w.e(1051),w.e(5145)]).then((()=>()=>w(7685))))),c("@patternfly/react-core/dist/dynamic/components/Button","^5.0.0",(()=>Promise.all([w.e(7794),w.e(8416),w.e(1468)]).then((()=>()=>w(1468))))),c("@patternfly/react-core/dist/dynamic/components/Card","^5.0.0",(()=>Promise.all([w.e(7794),w.e(556),w.e(8416),w.e(5241)]).then((()=>()=>w(556))))),c("@patternfly/react-core/dist/dynamic/components/Divider","^5.0.0",(()=>Promise.all([w.e(164),w.e(3699),w.e(8416),w.e(1051),w.e(8992)]).then((()=>()=>w(3699))))),c("@patternfly/react-core/dist/dynamic/components/Form","^5.0.0",(()=>Promise.all([w.e(7794),w.e(2295),w.e(8416),w.e(9835)]).then((()=>()=>w(2295))))),c("@patternfly/react-core/dist/dynamic/components/HelperText","^5.0.0",(()=>Promise.all([w.e(6375),w.e(8416),w.e(1338)]).then((()=>()=>w(6375))))),c("@patternfly/react-core/dist/dynamic/components/List","^5.0.0",(()=>Promise.all([w.e(7879),w.e(8416),w.e(776)]).then((()=>()=>w(7879))))),c("@patternfly/react-core/dist/dynamic/components/Modal","^5.0.0",(()=>Promise.all([w.e(7794),w.e(164),w.e(5748),w.e(7326),w.e(8416),w.e(1051),w.e(8232)]).then((()=>()=>w(7326))))),c("@patternfly/react-core/dist/dynamic/components/Page","^5.0.0",(()=>Promise.all([w.e(7794),w.e(164),w.e(544),w.e(8416),w.e(1051),w.e(1076)]).then((()=>()=>w(544))))),c("@patternfly/react-core/dist/dynamic/components/Spinner","^5.0.0",(()=>Promise.all([w.e(8416),w.e(2842)]).then((()=>()=>w(2842))))),c("@patternfly/react-core/dist/dynamic/components/Text","^5.0.0",(()=>Promise.all([w.e(7794),w.e(8416),w.e(2902)]).then((()=>()=>w(2902))))),c("@patternfly/react-core/dist/dynamic/components/TextInput","^5.0.0",(()=>Promise.all([w.e(7794),w.e(164),w.e(8416),w.e(1051),w.e(3552)]).then((()=>()=>w(3552))))),c("@patternfly/react-core/dist/dynamic/components/Title","^5.0.0",(()=>Promise.all([w.e(7794),w.e(8416),w.e(7355)]).then((()=>()=>w(7355))))),c("@patternfly/react-core/dist/dynamic/layouts/Bullseye","^5.0.0",(()=>Promise.all([w.e(8416),w.e(8805)]).then((()=>()=>w(8805))))),c("@patternfly/react-core/dist/dynamic/layouts/Flex","^5.0.0",(()=>Promise.all([w.e(164),w.e(9868),w.e(8416),w.e(1051),w.e(8299)]).then((()=>()=>w(9868))))),c("@patternfly/react-core/dist/dynamic/layouts/Gallery","^5.0.0",(()=>Promise.all([w.e(8416),w.e(4680)]).then((()=>()=>w(4680))))),c("@patternfly/react-core/dist/dynamic/layouts/Grid","^5.0.0",(()=>Promise.all([w.e(164),w.e(4957),w.e(8416),w.e(1051),w.e(2816)]).then((()=>()=>w(4957))))),c("@patternfly/react-icons/dist/dynamic/icons/check-icon","^5.0.0",(()=>Promise.all([w.e(8416),w.e(8614)]).then((()=>()=>w(8614))))),c("@scalprum/react-core","0.5.1",(()=>Promise.all([w.e(8446),w.e(7891),w.e(8416)]).then((()=>()=>w(7891))))),c("@unleash/proxy-client-react","4.2.2",(()=>Promise.all([w.e(2080),w.e(8416)]).then((()=>()=>w(2080))))),c("axios","0.27.2",(()=>w.e(9669).then((()=>()=>w(9669))))),c("react-dom","18.2.0",(()=>Promise.all([w.e(3935),w.e(8416)]).then((()=>()=>w(3935))))),c("react-router-dom","^6.8.0",(()=>Promise.all([w.e(9818),w.e(8416),w.e(1051)]).then((()=>()=>w(5689))))),c("react","18.2.0",(()=>w.e(7294).then((()=>()=>w(7294)))))),e[r]=l.length?Promise.all(l).then((()=>e[r]=1)):1}}})(),w.p="/beta/apps/sandbox/",n=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},o=(e,t)=>{e=n(e),t=n(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var a=e[r],o=(typeof a)[0];if(r>=t.length)return"u"==o;var d=t[r],c=(typeof d)[0];if(o!=c)return"o"==o&&"n"==c||"s"==c||"u"==o;if("o"!=o&&"u"!=o&&a!=d)return a<d;r++}},d=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var a=1,n=1;n<e.length;n++)a--,r+="u"==(typeof(c=e[n]))[0]?"-":(a>0?".":"")+(a=2,c);return r}var o=[];for(n=1;n<e.length;n++){var c=e[n];o.push(0===c?"not("+l()+")":1===c?"("+l()+" || "+l()+")":2===c?o.pop()+" "+o.pop():d(c))}return l();function l(){return o.pop().replace(/^\((.+)\)$/,"$1")}},c=(e,t)=>{if(0 in e){t=n(t);var r=e[0],a=r<0;a&&(r=-r-1);for(var o=0,d=1,l=!0;;d++,o++){var i,s,f=d<e.length?(typeof e[d])[0]:"";if(o>=t.length||"o"==(s=(typeof(i=t[o]))[0]))return!l||("u"==f?d>r&&!a:""==f!=a);if("u"==s){if(!l||"u"!=f)return!1}else if(l)if(f==s)if(d<=r){if(i!=e[d])return!1}else{if(a?i>e[d]:i<e[d])return!1;i!=e[d]&&(l=!1)}else if("s"!=f&&"n"!=f){if(a||d<=r)return!1;l=!1,d--}else{if(d<=r||s<f!=a)return!1;l=!1}else"s"!=f&&"n"!=f&&(l=!1,d--)}}var u=[],p=u.pop.bind(u);for(o=1;o<e.length;o++){var m=e[o];u.push(1==m?p()|p():2==m?p()&p():m?c(m,t):!p())}return!!p()},l=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&o(e,t)?t:e),0)},i=(e,t,r,a)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+d(a)+")",s=(e,t,r,a)=>{var n=l(e,r);return c(a,n)||u(i(e,r,n,a)),p(e[r][n])},f=(e,t,r)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!c(r,t)||e&&!o(e,t)?e:t),0))&&a[t]},u=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},p=e=>(e.loaded=1,e.get()),b=(m=e=>function(t,r,a,n){var o=w.I(t);return o&&o.then?o.then(e.bind(e,t,w.S[t],r,a,n)):e(t,w.S[t],r,a,n)})(((e,t,r,a,n)=>t&&w.o(t,r)?s(t,0,r,a):n())),h=m(((e,t,r,a,n)=>{var o=t&&w.o(t,r)&&f(t,r,a);return o?p(o):n()})),y={},v={8416:()=>b("default","react",[1,18,2,0],(()=>w.e(7294).then((()=>()=>w(7294))))),1051:()=>b("default","react-dom",[1,18,2,0],(()=>w.e(3935).then((()=>()=>w(3935))))),1454:()=>h("default","@patternfly/react-core/dist/dynamic/components/Button",[1,5,0,0],(()=>Promise.all([w.e(7794),w.e(9219)]).then((()=>()=>w(1468))))),1925:()=>h("default","@patternfly/react-core/dist/dynamic/components/Modal",[1,5,0,0],(()=>Promise.all([w.e(7794),w.e(164),w.e(5748),w.e(7326),w.e(1051),w.e(306)]).then((()=>()=>w(7326))))),2092:()=>h("default","@patternfly/react-core/dist/dynamic/components/Form",[1,5,0,0],(()=>Promise.all([w.e(7794),w.e(2295),w.e(7888)]).then((()=>()=>w(2295))))),2247:()=>h("default","@patternfly/react-icons/dist/dynamic/icons/check-icon",[1,5,0,0],(()=>w.e(2886).then((()=>()=>w(8614))))),2693:()=>h("default","@patternfly/react-core/dist/dynamic/components/Spinner",[1,5,0,0],(()=>w.e(97).then((()=>()=>w(2842))))),3721:()=>h("default","@patternfly/react-core/dist/dynamic/layouts/Grid",[1,5,0,0],(()=>Promise.all([w.e(164),w.e(4957),w.e(1051),w.e(8754)]).then((()=>()=>w(4957))))),4025:()=>b("default","@scalprum/react-core",[0],(()=>w.e(7891).then((()=>()=>w(7891))))),4129:()=>h("default","@patternfly/react-core/dist/dynamic/components/Text",[1,5,0,0],(()=>Promise.all([w.e(7794),w.e(8537)]).then((()=>()=>w(2902))))),4440:()=>h("default","@patternfly/react-core/dist/dynamic/components/Alert",[1,5,0,0],(()=>Promise.all([w.e(7794),w.e(164),w.e(5748),w.e(1051),w.e(923)]).then((()=>()=>w(7685))))),5564:()=>h("default","axios",[2,0,27,2],(()=>w.e(9669).then((()=>()=>w(9669))))),8087:()=>h("default","@patternfly/react-core/dist/dynamic/layouts/Bullseye",[1,5,0,0],(()=>w.e(1026).then((()=>()=>w(8805))))),8947:()=>b("default","react-router-dom",[1,6,18,0],(()=>Promise.all([w.e(9818),w.e(1051)]).then((()=>()=>w(5689))))),8956:()=>h("default","@patternfly/react-core/dist/dynamic/components/Title",[1,5,0,0],(()=>Promise.all([w.e(7794),w.e(7400)]).then((()=>()=>w(7355))))),9389:()=>h("default","@patternfly/react-core/dist/dynamic/components/TextInput",[1,5,0,0],(()=>Promise.all([w.e(7794),w.e(164),w.e(1051),w.e(8199)]).then((()=>()=>w(3552))))),6530:()=>h("default","@patternfly/react-core/dist/dynamic/layouts/Flex",[1,5,0,0],(()=>Promise.all([w.e(164),w.e(9868),w.e(1051),w.e(3810)]).then((()=>()=>w(9868))))),1693:()=>h("default","@patternfly/react-core/dist/dynamic/components/Page",[1,5,0,0],(()=>Promise.all([w.e(7794),w.e(164),w.e(544),w.e(1051),w.e(8534)]).then((()=>()=>w(544))))),2006:()=>h("default","@patternfly/react-core/dist/dynamic/components/Divider",[1,5,0,0],(()=>Promise.all([w.e(164),w.e(3699),w.e(1051),w.e(4146)]).then((()=>()=>w(3699))))),9266:()=>h("default","@patternfly/react-core/dist/dynamic/components/Card",[1,5,0,0],(()=>Promise.all([w.e(7794),w.e(556),w.e(8214)]).then((()=>()=>w(556))))),7399:()=>h("default","@patternfly/react-core/dist/dynamic/components/List",[1,5,0,0],(()=>Promise.all([w.e(7879),w.e(5975)]).then((()=>()=>w(7879))))),8507:()=>h("default","@patternfly/react-core/dist/dynamic/layouts/Gallery",[1,5,0,0],(()=>w.e(3251).then((()=>()=>w(4680))))),5795:()=>h("default","@patternfly/react-core/dist/dynamic/components/HelperText",[1,5,0,0],(()=>Promise.all([w.e(6375),w.e(6183)]).then((()=>()=>w(6375))))),7246:()=>b("default","@unleash/proxy-client-react",[1,4,2,2],(()=>w.e(2080).then((()=>()=>w(2080))))),2294:()=>b("default","react-router-dom",[1,6,3,0],(()=>w.e(9818).then((()=>()=>w(5689)))))},g={1051:[1051],7945:[6530,1693,2006,9266,7399,8507,5795,7246],8416:[8416],8613:[1454,1925,2092,2247,2693,3721,4025,4129,4440,5564,8087,8947,8956,9389],9452:[2294]},w.f.consumes=(e,t)=>{w.o(g,e)&&g[e].forEach((e=>{if(w.o(y,e))return t.push(y[e]);var r=t=>{y[e]=0,w.m[e]=r=>{delete w.c[e],r.exports=t()}},a=t=>{delete y[e],w.m[e]=r=>{throw delete w.c[e],t}};try{var n=v[e]();n.then?t.push(y[e]=n.then(r).catch(a)):r(n)}catch(e){a(e)}}))},(()=>{if("undefined"!=typeof document){var e={9451:0};w.f.miniCss=(t,r)=>{e[t]?r.push(e[t]):0!==e[t]&&{7945:1,8178:1,9452:1}[t]&&r.push(e[t]=(e=>new Promise(((t,r)=>{var a=w.miniCssF(e),n=w.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=(d=r[a]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(n===e||n===t))return d}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var d;if((n=(d=o[a]).getAttribute("data-href"))===e||n===t)return d}})(a,n))return t();((e,t,r,a,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=r=>{if(o.onerror=o.onload=null,"load"===r.type)a();else{var d=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=d,l.request=c,o.parentNode&&o.parentNode.removeChild(o),n(l)}},o.href=t,document.head.appendChild(o)})(e,n,0,t,r)})))(t).then((()=>{e[t]=0}),(r=>{throw delete e[t],r})))}}})(),(()=>{var e={9451:0};w.f.j=(t,r)=>{var a=w.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(1051|8416)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var o=w.p+w.u(t),d=new Error;w.l(o,(r=>{if(w.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,n,[o,d,c]=r,l=0;if(o.some((t=>0!==e[t]))){for(a in d)w.o(d,a)&&(w.m[a]=d[a]);c&&c(w)}for(t&&t(r);l<o.length;l++)n=o[l],w.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunksandbox=self.webpackChunksandbox||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),w(1877)})());