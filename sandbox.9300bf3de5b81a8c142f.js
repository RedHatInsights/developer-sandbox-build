__load_plugin_entry__("sandbox",(()=>{"use strict";var e,t,r,a,n,o,d,c,i,l,s,f,u,p,m,h,y,b,v,g,P,x,w,S={8574:(e,t,r)=>{var a={"./RootApp":()=>Promise.all([r.e(17),r.e(3345),r.e(8067),r.e(5216)]).then((()=>()=>r(4748)))},n=(e,t)=>(r.R=t,t=r.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),o=(e,t)=>{if(r.S){var a="default",n=r.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[a]=e,r.I(a,t)}};r.d(t,{get:()=>n,init:()=>o})}},k={};function E(e){var t=k[e];if(void 0!==t)return t.exports;var r=k[e]={id:e,loaded:!1,exports:{}};return S[e](r,r.exports,E),r.loaded=!0,r.exports}return E.m=S,E.c=k,E.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return E.d(t,{a:t}),t},E.d=(e,t)=>{for(var r in t)E.o(t,r)&&!E.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},E.f={},E.e=e=>Promise.all(Object.keys(E.f).reduce(((t,r)=>(E.f[r](e,t),t)),[])),E.u=e=>"js/"+({3459:"NoPermissionsPage",4781:"SandboxPage",5216:"exposed-./RootApp",5308:"ExperimentalPage"}[e]||e)+"."+{17:"90102d6e5573e764569c",53:"8e1cdbfb8fd34a8424d2",98:"0e3e65886d9d9eb0285f",323:"06169c5ff0c599ab20a1",819:"9c815af51916185b7f6b",957:"9e21de9329287c8e03ed",1037:"24ca55fe62a248ff946f",1039:"20eeff7d0f87de827481",1132:"99bb161ee4e26d98210a",1187:"690616e947c5cdc05d87",1295:"f2025142c255ed28f0fb",1537:"660943d817ddbc9b6933",1872:"cd2ee282a1e9c4c4c2b1",1998:"5c4ab14a6f060c9af2ad",2007:"aab2b4f2ec9e5f8cde18",2061:"019c3c69e673b942caf5",2160:"2428e3cd5a4bc55ac80f",2398:"b46ffeab5d04df3d2bf0",2505:"56c9c5a012fd4df8bf3f",2648:"7000c1e03c050c4b1666",3200:"9c815af51916185b7f6b",3205:"277666b86887e82b7943",3338:"9e21de9329287c8e03ed",3418:"24ca55fe62a248ff946f",3459:"9335e072eb760f9bed9b",3568:"690616e947c5cdc05d87",3676:"f2025142c255ed28f0fb",3790:"78c78389cef9abf3f4a6",3918:"660943d817ddbc9b6933",4317:"7af26cd66d89bf281122",4371:"11a6d10b0cff6e1b0e7b",4388:"aab2b4f2ec9e5f8cde18",4428:"7eb2a96f463978f52414",4442:"019c3c69e673b942caf5",4510:"70879f7926b034d5b1a3",4779:"b46ffeab5d04df3d2bf0",4781:"e4142bb778031a32e468",4921:"1577986189ccf5d48261",5216:"3960e1e1aa85d5db65fa",5308:"aa3372016feff2a736ee",5586:"277666b86887e82b7943",5995:"e75a6de21cecf3af463b",6539:"3af8e49ce3f235b949b5",6698:"7af26cd66d89bf281122",6752:"11a6d10b0cff6e1b0e7b",7302:"1577986189ccf5d48261",7503:"b131efb898c2c3865d0b",7717:"0e3e65886d9d9eb0285f",7931:"31a1d8b87c9e155ef329",8067:"74c4c5269723971a0dc7",8181:"33bb105ffbe1d9e98d10",8376:"e75a6de21cecf3af463b",8792:"7e86c117bb8291efa45b",8920:"3af8e49ce3f235b949b5",9501:"eb67e7f570288fb0dff5",9779:"2428e3cd5a4bc55ac80f",9884:"b131efb898c2c3865d0b"}[e]+".js",E.miniCssF=e=>"css/"+{3459:"NoPermissionsPage",4781:"SandboxPage",5216:"exposed-./RootApp"}[e]+"."+{3459:"8233c7a68adbd9dd0364",4781:"e658b67b37055bbf079b",5216:"e81bbca1f1595892dff1"}[e]+".css",E.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),E.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),E.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="sandbox:",E.l=(r,a,n,o)=>{if(e[r])e[r].push(a);else{var d,c;if(void 0!==n)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var s=i[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+n){d=s;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,E.nc&&d.setAttribute("nonce",E.nc),d.setAttribute("data-webpack",t+n),d.src=r),e[r]=[a];var f=(t,a)=>{d.onerror=d.onload=null,clearTimeout(u);var n=e[r];if(delete e[r],d.parentNode&&d.parentNode.removeChild(d),n&&n.forEach((e=>e(a))),t)return t(a)},u=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),c&&document.head.appendChild(d)}},E.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},E.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{E.S={};var e={},t={};E.I=(r,a)=>{a||(a=[]);var n=t[r];if(n||(n=t[r]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[r])return e[r];E.o(E.S,r)||(E.S[r]={});var o=E.S[r],d="sandbox",c=(e,t,r,a)=>{var n=o[e]=o[e]||{},c=n[t];(!c||!c.loaded&&(!a!=!c.eager?a:d>c.from))&&(n[t]={get:r,from:d,eager:!!a})},i=[];return"default"===r&&(c("@patternfly/react-core/dist/dynamic/components/Alert","^5.0.0",(()=>Promise.all([E.e(4510),E.e(7931),E.e(3790),E.e(3345),E.e(7628),E.e(98)]).then((()=>()=>E(6243))))),c("@patternfly/react-core/dist/dynamic/components/Button","^5.0.0",(()=>Promise.all([E.e(4510),E.e(3345),E.e(1295)]).then((()=>()=>E(1295))))),c("@patternfly/react-core/dist/dynamic/components/Card","^5.0.0",(()=>Promise.all([E.e(4510),E.e(9501),E.e(3345),E.e(957)]).then((()=>()=>E(9501))))),c("@patternfly/react-core/dist/dynamic/components/Divider","^5.0.0",(()=>Promise.all([E.e(7931),E.e(8181),E.e(3345),E.e(7628),E.e(1537)]).then((()=>()=>E(8181))))),c("@patternfly/react-core/dist/dynamic/components/Form","^5.0.0",(()=>Promise.all([E.e(4510),E.e(1872),E.e(3345),E.e(4317)]).then((()=>()=>E(1872))))),c("@patternfly/react-core/dist/dynamic/components/HelperText","^5.0.0",(()=>Promise.all([E.e(323),E.e(3345),E.e(7302)]).then((()=>()=>E(323))))),c("@patternfly/react-core/dist/dynamic/components/List","^5.0.0",(()=>Promise.all([E.e(8792),E.e(3345),E.e(819)]).then((()=>()=>E(8792))))),c("@patternfly/react-core/dist/dynamic/components/Modal","^5.0.0",(()=>Promise.all([E.e(4510),E.e(7931),E.e(3790),E.e(1998),E.e(3345),E.e(7628),E.e(4442)]).then((()=>()=>E(1998))))),c("@patternfly/react-core/dist/dynamic/components/Page","^5.0.0",(()=>Promise.all([E.e(4510),E.e(7931),E.e(53),E.e(3345),E.e(7628),E.e(6539)]).then((()=>()=>E(53))))),c("@patternfly/react-core/dist/dynamic/components/Spinner","^5.0.0",(()=>Promise.all([E.e(3345),E.e(8376)]).then((()=>()=>E(8376))))),c("@patternfly/react-core/dist/dynamic/components/Text","^5.0.0",(()=>Promise.all([E.e(4510),E.e(3345),E.e(3568)]).then((()=>()=>E(3568))))),c("@patternfly/react-core/dist/dynamic/components/TextInput","^5.0.0",(()=>Promise.all([E.e(4510),E.e(7931),E.e(3345),E.e(7628),E.e(7503)]).then((()=>()=>E(7503))))),c("@patternfly/react-core/dist/dynamic/components/Title","^5.0.0",(()=>Promise.all([E.e(4510),E.e(3345),E.e(2007)]).then((()=>()=>E(2007))))),c("@patternfly/react-core/dist/dynamic/layouts/Bullseye","^5.0.0",(()=>Promise.all([E.e(3345),E.e(2398)]).then((()=>()=>E(17))))),c("@patternfly/react-core/dist/dynamic/layouts/Flex","^5.0.0",(()=>Promise.all([E.e(7931),E.e(1132),E.e(3345),E.e(7628),E.e(6752)]).then((()=>()=>E(1132))))),c("@patternfly/react-core/dist/dynamic/layouts/Gallery","^5.0.0",(()=>Promise.all([E.e(3345),E.e(3418)]).then((()=>()=>E(3418))))),c("@patternfly/react-core/dist/dynamic/layouts/Grid","^5.0.0",(()=>Promise.all([E.e(7931),E.e(4428),E.e(3345),E.e(7628),E.e(5586)]).then((()=>()=>E(4428))))),c("@patternfly/react-icons/dist/dynamic/icons/check-icon","^5.0.0",(()=>Promise.all([E.e(3345),E.e(9779)]).then((()=>()=>E(9779))))),c("axios","0.27.2",(()=>E.e(2505).then((()=>()=>E(2505))))),c("react-router-dom","^6.8.0",(()=>Promise.all([E.e(2648),E.e(3345),E.e(7628)]).then((()=>()=>E(2648)))))),e[r]=i.length?Promise.all(i).then((()=>e[r]=1)):1}}})(),E.p="/apps/sandbox/",r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},a=(e,t)=>{e=r(e),t=r(t);for(var a=0;;){if(a>=e.length)return a<t.length&&"u"!=(typeof t[a])[0];var n=e[a],o=(typeof n)[0];if(a>=t.length)return"u"==o;var d=t[a],c=(typeof d)[0];if(o!=c)return"o"==o&&"n"==c||"s"==c||"u"==o;if("o"!=o&&"u"!=o&&n!=d)return n<d;a++}},n=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,r+="u"==(typeof(c=e[o]))[0]?"-":(a>0?".":"")+(a=2,c);return r}var d=[];for(o=1;o<e.length;o++){var c=e[o];d.push(0===c?"not("+i()+")":1===c?"("+i()+" || "+i()+")":2===c?d.pop()+" "+d.pop():n(c))}return i();function i(){return d.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,t)=>{if(0 in e){t=r(t);var a=e[0],n=a<0;n&&(a=-a-1);for(var d=0,c=1,i=!0;;c++,d++){var l,s,f=c<e.length?(typeof e[c])[0]:"";if(d>=t.length||"o"==(s=(typeof(l=t[d]))[0]))return!i||("u"==f?c>a&&!n:""==f!=n);if("u"==s){if(!i||"u"!=f)return!1}else if(i)if(f==s)if(c<=a){if(l!=e[c])return!1}else{if(n?l>e[c]:l<e[c])return!1;l!=e[c]&&(i=!1)}else if("s"!=f&&"n"!=f){if(n||c<=a)return!1;i=!1,c--}else{if(c<=a||s<f!=n)return!1;i=!1}else"s"!=f&&"n"!=f&&(i=!1,c--)}}var u=[],p=u.pop.bind(u);for(d=1;d<e.length;d++){var m=e[d];u.push(1==m?p()|p():2==m?p()&p():m?o(m,t):!p())}return!!p()},d=(e,t)=>e&&E.o(e,t),c=e=>(e.loaded=1,e.get()),i=e=>Object.keys(e).reduce(((t,r)=>(e[r].eager&&(t[r]=e[r]),t)),{}),l=(e,t,r,n)=>{var d=n?i(e[t]):e[t];return(t=Object.keys(d).reduce(((e,t)=>!o(r,t)||e&&!a(e,t)?e:t),0))&&d[t]},s=(e,t,r)=>{var n=r?i(e[t]):e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&a(e,t)?t:e),0)},f=(e,t,r,a)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+n(a)+")",u=(e,t,r,a,o)=>{var d=e[r];return"No satisfying version ("+n(a)+")"+(o?" for eager consumption":"")+" of shared module "+r+" found in shared scope "+t+".\nAvailable versions: "+Object.keys(d).map((e=>e+" from "+d[e].from)).join(", ")},p=e=>{throw new Error(e)},m=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},y=(e,t,r)=>r?r():((e,t)=>p("Shared module "+t+" doesn't exist in shared scope "+e))(e,t),b=(h=e=>function(t,r,a,n,o){var d=E.I(t);return d&&d.then&&!a?d.then(e.bind(e,t,E.S[t],r,!1,n,o)):e(t,E.S[t],r,a,n,o)})(((e,t,r,a,n,o)=>{if(!d(t,r))return y(e,r,o);var i=l(t,r,n,a);return i?c(i):o?o():void p(u(t,e,r,n,a))})),v=h(((e,t,r,a,n,i)=>{if(!d(t,r))return y(e,r,i);var l=s(t,r,a);return o(n,l)||m(f(t,r,l,n)),c(t[r][l])})),g={},P={3345:()=>v("default","react",!1,[1,18,2,0]),7628:()=>v("default","react-dom",!1,[1,18,2,0]),208:()=>b("default","@patternfly/react-core/dist/dynamic/components/Text",!1,[1,5,0,0],(()=>Promise.all([E.e(4510),E.e(1187)]).then((()=>()=>E(3568))))),2e3:()=>b("default","@patternfly/react-core/dist/dynamic/layouts/Grid",!1,[1,5,0,0],(()=>Promise.all([E.e(7931),E.e(4428),E.e(7628),E.e(3205)]).then((()=>()=>E(4428))))),2982:()=>b("default","@patternfly/react-core/dist/dynamic/components/Button",!1,[1,5,0,0],(()=>Promise.all([E.e(4510),E.e(3676)]).then((()=>()=>E(1295))))),3068:()=>b("default","@patternfly/react-core/dist/dynamic/components/Title",!1,[1,5,0,0],(()=>Promise.all([E.e(4510),E.e(4388)]).then((()=>()=>E(2007))))),3168:()=>b("default","@patternfly/react-core/dist/dynamic/components/TextInput",!1,[1,5,0,0],(()=>Promise.all([E.e(4510),E.e(7931),E.e(7628),E.e(9884)]).then((()=>()=>E(7503))))),3780:()=>b("default","@patternfly/react-core/dist/dynamic/components/Alert",!1,[1,5,0,0],(()=>Promise.all([E.e(4510),E.e(7931),E.e(3790),E.e(7628),E.e(7717)]).then((()=>()=>E(6243))))),4015:()=>b("default","@patternfly/react-icons/dist/dynamic/icons/check-icon",!1,[1,5,0,0],(()=>E.e(2160).then((()=>()=>E(9779))))),4088:()=>b("default","axios",!1,[2,0,27,2],(()=>E.e(2505).then((()=>()=>E(2505))))),5464:()=>b("default","@patternfly/react-core/dist/dynamic/layouts/Bullseye",!1,[1,5,0,0],(()=>E.e(4779).then((()=>()=>E(17))))),6213:()=>v("default","react-router-dom",!1,[1,6,18,0],(()=>Promise.all([E.e(2648),E.e(7628)]).then((()=>()=>E(2648))))),7178:()=>b("default","@patternfly/react-core/dist/dynamic/components/Form",!1,[1,5,0,0],(()=>Promise.all([E.e(4510),E.e(1872),E.e(6698)]).then((()=>()=>E(1872))))),9504:()=>b("default","@patternfly/react-core/dist/dynamic/components/Modal",!1,[1,5,0,0],(()=>Promise.all([E.e(4510),E.e(7931),E.e(3790),E.e(1998),E.e(7628),E.e(2061)]).then((()=>()=>E(1998))))),9694:()=>v("default","@scalprum/react-core",!1,[0]),9704:()=>b("default","@patternfly/react-core/dist/dynamic/components/Spinner",!1,[1,5,0,0],(()=>E.e(5995).then((()=>()=>E(8376))))),6228:()=>b("default","@patternfly/react-core/dist/dynamic/layouts/Flex",!1,[1,5,0,0],(()=>Promise.all([E.e(7931),E.e(1132),E.e(7628),E.e(4371)]).then((()=>()=>E(1132))))),2984:()=>b("default","@patternfly/react-core/dist/dynamic/components/Page",!1,[1,5,0,0],(()=>Promise.all([E.e(4510),E.e(7931),E.e(53),E.e(7628),E.e(8920)]).then((()=>()=>E(53))))),2832:()=>b("default","@patternfly/react-core/dist/dynamic/components/Divider",!1,[1,5,0,0],(()=>Promise.all([E.e(7931),E.e(8181),E.e(7628),E.e(3918)]).then((()=>()=>E(8181))))),1414:()=>b("default","@patternfly/react-core/dist/dynamic/components/Card",!1,[1,5,0,0],(()=>Promise.all([E.e(4510),E.e(9501),E.e(3338)]).then((()=>()=>E(9501))))),2506:()=>b("default","@patternfly/react-core/dist/dynamic/components/List",!1,[1,5,0,0],(()=>Promise.all([E.e(8792),E.e(3200)]).then((()=>()=>E(8792))))),3584:()=>b("default","@patternfly/react-core/dist/dynamic/layouts/Gallery",!1,[1,5,0,0],(()=>E.e(1037).then((()=>()=>E(3418))))),8152:()=>b("default","@patternfly/react-core/dist/dynamic/components/HelperText",!1,[1,5,0,0],(()=>Promise.all([E.e(323),E.e(4921)]).then((()=>()=>E(323))))),670:()=>v("default","@unleash/proxy-client-react",!1,[1,4,2,2]),7319:()=>v("default","react-router-dom",!1,[1,6,3,0],(()=>E.e(2648).then((()=>()=>E(2648)))))},x={3345:[3345],3459:[7319],4781:[6228,2984,2832,1414,2506,3584,8152,670],7628:[7628],8067:[208,2e3,2982,3068,3168,3780,4015,4088,5464,6213,7178,9504,9694,9704]},w={},E.f.consumes=(e,t)=>{E.o(x,e)&&x[e].forEach((e=>{if(E.o(g,e))return t.push(g[e]);if(!w[e]){var r=t=>{g[e]=0,E.m[e]=r=>{delete E.c[e],r.exports=t()}};w[e]=!0;var a=t=>{delete g[e],E.m[e]=r=>{throw delete E.c[e],t}};try{var n=P[e]();n.then?t.push(g[e]=n.then(r).catch(a)):r(n)}catch(e){a(e)}}}))},(()=>{if("undefined"!=typeof document){var e={3020:0};E.f.miniCss=(t,r)=>{e[t]?r.push(e[t]):0!==e[t]&&{3459:1,4781:1,5216:1}[t]&&r.push(e[t]=(e=>new Promise(((t,r)=>{var a=E.miniCssF(e),n=E.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=(d=r[a]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(n===e||n===t))return d}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var d;if((n=(d=o[a]).getAttribute("data-href"))===e||n===t)return d}})(a,n))return t();((e,t,r,a,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",E.nc&&(o.nonce=E.nc),o.onerror=o.onload=r=>{if(o.onerror=o.onload=null,"load"===r.type)a();else{var d=r&&r.type,c=r&&r.target&&r.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+d+": "+c+")");i.name="ChunkLoadError",i.code="CSS_CHUNK_LOAD_FAILED",i.type=d,i.request=c,o.parentNode&&o.parentNode.removeChild(o),n(i)}},o.href=t,document.head.appendChild(o)})(e,n,0,t,r)})))(t).then((()=>{e[t]=0}),(r=>{throw delete e[t],r})))}}})(),(()=>{var e={3020:0};E.f.j=(t,r)=>{var a=E.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(3345|7628)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var o=E.p+E.u(t),d=new Error;E.l(o,(r=>{if(E.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,n,[o,d,c]=r,i=0;if(o.some((t=>0!==e[t]))){for(a in d)E.o(d,a)&&(E.m[a]=d[a]);c&&c(E)}for(t&&t(r);i<o.length;i++)n=o[i],E.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunksandbox=self.webpackChunksandbox||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),E(8574)})());