"use strict";(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[2080],{2080:(t,e,r)=>{r.r(e),r.d(e,{FlagContext:()=>A,FlagProvider:()=>D,InMemoryStorageProvider:()=>d,LocalStorageProvider:()=>p,UnleashClient:()=>O,default:()=>D,useFlag:()=>j,useFlags:()=>H,useFlagsStatus:()=>_,useUnleashClient:()=>V,useUnleashContext:()=>K,useVariant:()=>M});var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},o=function(){return o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o.apply(this,arguments)};function i(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))}function s(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}"function"==typeof SuppressedError&&SuppressedError;var a={exports:{}};function c(){}c.prototype={on:function(t,e,r){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:r}),this},once:function(t,e,r){var n=this;function o(){n.off(t,o),e.apply(r,arguments)}return o._=e,this.on(t,o,r)},emit:function(t){for(var e=[].slice.call(arguments,1),r=((this.e||(this.e={}))[t]||[]).slice(),n=0,o=r.length;n<o;n++)r[n].fn.apply(r[n].ctx,e);return this},off:function(t,e){var r=this.e||(this.e={}),n=r[t],o=[];if(n&&e)for(var i=0,s=n.length;i<s;i++)n[i].fn!==e&&n[i].fn._!==e&&o.push(n[i]);return o.length?r[t]=o:delete r[t],this}},a.exports=c;var u=a.exports.TinyEmitter=c,l=function(t){return null!=t[1]},h=function(){},f=function(){function t(t){var e=t.onError,r=t.onSent,n=t.appName,o=t.metricsInterval,i=t.disableMetrics,s=void 0!==i&&i,a=t.url,c=t.clientKey,u=t.fetch,l=t.headerName,f=t.customHeaders,d=void 0===f?{}:f;this.onError=e,this.onSent=r||h,this.disabled=s,this.metricsInterval=1e3*o,this.appName=n,this.url=a instanceof URL?a:new URL(a),this.clientKey=c,this.bucket=this.createEmptyBucket(),this.fetch=u,this.headerName=l,this.customHeaders=d}return t.prototype.start=function(){var t=this;if(this.disabled)return!1;"number"==typeof this.metricsInterval&&this.metricsInterval>0&&setTimeout((function(){t.startTimer(),t.sendMetrics()}),2e3)},t.prototype.stop=function(){this.timer&&(clearTimeout(this.timer),delete this.timer)},t.prototype.createEmptyBucket=function(){return{start:new Date,stop:null,toggles:{}}},t.prototype.getHeaders=function(){var t,e=((t={})[this.headerName]=this.clientKey,t.Accept="application/json",t["Content-Type"]="application/json",t);return Object.entries(this.customHeaders).filter(l).forEach((function(t){var r=t[0],n=t[1];return e[r]=n})),e},t.prototype.sendMetrics=function(){return i(this,void 0,void 0,(function(){var t,e,r;return s(this,(function(n){switch(n.label){case 0:if(t="".concat(this.url,"/client/metrics"),e=this.getPayload(),this.bucketIsEmpty(e))return[2];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.fetch(t,{cache:"no-cache",method:"POST",headers:this.getHeaders(),body:JSON.stringify(e)})];case 2:return n.sent(),this.onSent(e),[3,4];case 3:return r=n.sent(),console.error("Unleash: unable to send feature metrics",r),this.onError(r),[3,4];case 4:return[2]}}))}))},t.prototype.count=function(t,e){return!(this.disabled||!this.bucket||(this.assertBucket(t),this.bucket.toggles[t][e?"yes":"no"]++,0))},t.prototype.countVariant=function(t,e){return!(this.disabled||!this.bucket||(this.assertBucket(t),this.bucket.toggles[t].variants[e]?this.bucket.toggles[t].variants[e]+=1:this.bucket.toggles[t].variants[e]=1,0))},t.prototype.assertBucket=function(t){if(this.disabled||!this.bucket)return!1;this.bucket.toggles[t]||(this.bucket.toggles[t]={yes:0,no:0,variants:{}})},t.prototype.startTimer=function(){var t=this;this.timer=setInterval((function(){t.sendMetrics()}),this.metricsInterval)},t.prototype.bucketIsEmpty=function(t){return 0===Object.keys(t.bucket.toggles).length},t.prototype.getPayload=function(){var t=o(o({},this.bucket),{stop:new Date});return this.bucket=this.createEmptyBucket(),{bucket:t,appName:this.appName,instanceId:"browser"}},t}(),d=function(){function t(){this.store=new Map}return t.prototype.save=function(t,e){return i(this,void 0,void 0,(function(){return s(this,(function(r){return this.store.set(t,e),[2]}))}))},t.prototype.get=function(t){return i(this,void 0,void 0,(function(){return s(this,(function(e){return[2,this.store.get(t)]}))}))},t}(),p=function(){function t(){this.prefix="unleash:repository"}return t.prototype.save=function(t,e){return i(this,void 0,void 0,(function(){var r,n;return s(this,(function(o){r=JSON.stringify(e),n="".concat(this.prefix,":").concat(t);try{window.localStorage.setItem(n,r)}catch(t){console.error(t)}return[2]}))}))},t.prototype.get=function(t){try{var e="".concat(this.prefix,":").concat(t),r=window.localStorage.getItem(e);return r?JSON.parse(r):void 0}catch(t){console.error(t)}},t}();let v;const g=new Uint8Array(16);function y(){if(!v&&(v="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!v))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return v(g)}const m=[];for(let t=0;t<256;++t)m.push((t+256).toString(16).slice(1));var b={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function w(t,e,r){if(b.randomUUID&&!e&&!t)return b.randomUUID();const n=(t=t||{}).random||(t.rng||y)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(let t=0;t<16;++t)e[r+t]=n[t];return e}return function(t,e=0){return m[t[e+0]]+m[t[e+1]]+m[t[e+2]]+m[t[e+3]]+"-"+m[t[e+4]]+m[t[e+5]]+"-"+m[t[e+6]]+m[t[e+7]]+"-"+m[t[e+8]]+m[t[e+9]]+"-"+m[t[e+10]]+m[t[e+11]]+m[t[e+12]]+m[t[e+13]]+m[t[e+14]]+m[t[e+15]]}(n)}var x=function(){function t(){}return t.prototype.generateEventId=function(){return w()},t.prototype.createImpressionEvent=function(t,e,r,n,i,s){var a=this.createBaseEvent(t,e,r,n,i);return s?o(o({},a),{variant:s}):a},t.prototype.createBaseEvent=function(t,e,r,n,o){return{eventType:n,eventId:this.generateEventId(),context:t,enabled:e,featureName:r,impressionData:o}},t}(),E=["userId","sessionId","remoteAddress","currentTime"],S="error",k="ready",I="impression",C={name:"disabled",enabled:!1,feature_enabled:!1},T="repo",O=function(t){function e(e){var r=e.storageProvider,n=e.url,i=e.clientKey,s=e.disableRefresh,a=void 0!==s&&s,c=e.refreshInterval,u=void 0===c?30:c,l=e.metricsInterval,h=void 0===l?30:l,v=e.disableMetrics,g=void 0!==v&&v,y=e.appName,m=e.environment,b=void 0===m?"default":m,w=e.context,E=e.fetch,k=void 0===E?function(){try{if("undefined"!=typeof window&&"fetch"in window)return fetch.bind(window);if("fetch"in globalThis)return fetch.bind(globalThis)}catch(t){console.error('Unleash failed to resolve "fetch"',t)}}():E,I=e.createAbortController,C=void 0===I?function(){try{if("undefined"!=typeof window&&"AbortController"in window)return function(){return new window.AbortController};if("fetch"in globalThis)return function(){return new globalThis.AbortController}}catch(t){console.error('Unleash failed to resolve "AbortController" factory',t)}}():I,T=e.bootstrap,O=e.bootstrapOverride,U=void 0===O||O,N=e.headerName,A=void 0===N?"Authorization":N,R=e.customHeaders,P=void 0===R?{}:R,D=e.impressionDataAll,j=void 0!==D&&D,H=e.usePOSTrequests,_=void 0!==H&&H,M=t.call(this)||this;if(M.toggles=[],M.etag="",M.readyEventEmitted=!1,M.usePOSTrequests=!1,M.started=!1,!n)throw new Error("url is required");if(!i)throw new Error("clientKey is required");if(!y)throw new Error("appName is required.");return M.eventsHandler=new x,M.impressionDataAll=j,M.toggles=T&&T.length>0?T:[],M.url=n instanceof URL?n:new URL(n),M.clientKey=i,M.headerName=A,M.customHeaders=P,M.storage=r||("undefined"!=typeof window?new p:new d),M.refreshInterval=a?0:1e3*u,M.context=o({appName:y,environment:b},w),M.usePOSTrequests=_,M.sdkState="initializing",M.ready=new Promise((function(t){M.init().then(t).catch((function(e){console.error(e),M.sdkState="error",M.emit(S,e),t()}))})),k||console.error('Unleash: You must either provide your own "fetch" implementation or run in an environment where "fetch" is available.'),C||console.error('Unleash: You must either provide your own "AbortController" implementation or run in an environment where "AbortController" is available.'),M.fetch=k,M.createAbortController=C,M.bootstrap=T&&T.length>0?T:void 0,M.bootstrapOverride=U,M.metrics=new f({onError:M.emit.bind(M,S),onSent:M.emit.bind(M,"sent"),appName:y,metricsInterval:h,disableMetrics:g,url:M.url,clientKey:i,fetch:k,headerName:A,customHeaders:P}),M}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),e.prototype.getAllToggles=function(){return function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}([],this.toggles,!0)},e.prototype.isEnabled=function(t){var e,r=this.toggles.find((function(e){return e.name===t})),n=!!r&&r.enabled;if(this.metrics.count(t,n),(null==r?void 0:r.impressionData)||this.impressionDataAll){var o=this.eventsHandler.createImpressionEvent(this.context,n,t,"isEnabled",null!==(e=null==r?void 0:r.impressionData)&&void 0!==e?e:void 0);this.emit(I,o)}return n},e.prototype.getVariant=function(t){var e,r=this.toggles.find((function(e){return e.name===t})),n=(null==r?void 0:r.enabled)||!1,i=r?r.variant:C;if(i.name&&this.metrics.countVariant(t,i.name),this.metrics.count(t,n),(null==r?void 0:r.impressionData)||this.impressionDataAll){var s=this.eventsHandler.createImpressionEvent(this.context,n,t,"getVariant",null!==(e=null==r?void 0:r.impressionData)&&void 0!==e?e:void 0,i.name);this.emit(I,s)}return o(o({},i),{feature_enabled:n})},e.prototype.updateContext=function(t){return i(this,void 0,void 0,(function(){var e,r=this;return s(this,(function(n){switch(n.label){case 0:return(t.appName||t.environment)&&console.warn("appName and environment are static. They can't be updated with updateContext."),e={environment:this.context.environment,appName:this.context.appName,sessionId:this.context.sessionId},this.context=o(o({},e),t),this.timerRef||this.readyEventEmitted?[4,this.fetchToggles()]:[3,2];case 1:return n.sent(),[3,4];case 2:return this.started?[4,new Promise((function(t){var e=function(){r.fetchToggles().then((function(){r.off(k,e),t()}))};r.once(k,e)}))]:[3,4];case 3:n.sent(),n.label=4;case 4:return[2]}}))}))},e.prototype.getContext=function(){return o({},this.context)},e.prototype.setContextField=function(t,e){var r,n;if(E.includes(t))this.context=o(o({},this.context),((r={})[t]=e,r));else{var i=o(o({},this.context.properties),((n={})[t]=e,n));this.context=o(o({},this.context),{properties:i})}this.timerRef&&this.fetchToggles()},e.prototype.init=function(){return i(this,void 0,void 0,(function(){var t,e;return s(this,(function(r){switch(r.label){case 0:return[4,this.resolveSessionId()];case 1:return t=r.sent(),this.context=o({sessionId:t},this.context),e=this,[4,this.storage.get(T)];case 2:return e.toggles=r.sent()||[],!this.bootstrap||!this.bootstrapOverride&&0!==this.toggles.length?[3,4]:[4,this.storage.save(T,this.bootstrap)];case 3:r.sent(),this.toggles=this.bootstrap,this.emit(k),r.label=4;case 4:return this.sdkState="healthy",this.emit("initialized"),[2]}}))}))},e.prototype.start=function(){return i(this,void 0,void 0,(function(){var t,e=this;return s(this,(function(r){switch(r.label){case 0:return this.started=!0,this.timerRef?(console.error("Unleash SDK has already started, if you want to restart the SDK you should call client.stop() before starting again."),[2]):[4,this.ready];case 1:return r.sent(),this.metrics.start(),t=this.refreshInterval,[4,this.fetchToggles()];case 2:return r.sent(),t>0&&(this.timerRef=setInterval((function(){return e.fetchToggles()}),t)),[2]}}))}))},e.prototype.stop=function(){this.timerRef&&(clearInterval(this.timerRef),this.timerRef=void 0),this.metrics.stop()},e.prototype.resolveSessionId=function(){return i(this,void 0,void 0,(function(){var t;return s(this,(function(e){switch(e.label){case 0:return this.context.sessionId?[2,this.context.sessionId]:[4,this.storage.get("sessionId")];case 1:return(t=e.sent())?[3,3]:(t=Math.floor(1e9*Math.random()),[4,this.storage.save("sessionId",t)]);case 2:e.sent(),e.label=3;case 3:return[2,t]}}))}))},e.prototype.getHeaders=function(){var t,e=((t={})[this.headerName]=this.clientKey,t.Accept="application/json",t["Content-Type"]="application/json",t);return this.etag&&(e["If-None-Match"]=this.etag),Object.entries(this.customHeaders).filter(l).forEach((function(t){var r=t[0],n=t[1];return e[r]=n})),e},e.prototype.storeToggles=function(t){return i(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return this.toggles=t,this.emit("update"),[4,this.storage.save(T,t)];case 1:return e.sent(),[2]}}))}))},e.prototype.fetchToggles=function(){return i(this,void 0,void 0,(function(){var t,e,r,n,o,i,a,c;return s(this,(function(s){switch(s.label){case 0:if(!this.fetch)return[3,9];this.abortController&&this.abortController.abort(),this.abortController=this.createAbortController&&this.createAbortController(),t=this.abortController?this.abortController.signal:void 0,s.label=1;case 1:return s.trys.push([1,7,8,9]),e=this.usePOSTrequests,r=e?this.url:function(t,e){var r=new URL(t.toString());return Object.entries(e).filter(l).forEach((function(t){var e=t[0],n=t[1];"properties"===e&&n?Object.entries(n).filter(l).forEach((function(t){var e=t[0],n=t[1];return r.searchParams.append("properties[".concat(e,"]"),n)})):r.searchParams.append(e,n)})),r}(this.url,this.context),n=e?"POST":"GET",o=e?JSON.stringify({context:this.context}):void 0,[4,this.fetch(r.toString(),{method:n,cache:"no-cache",headers:this.getHeaders(),body:o,signal:t})];case 2:return i=s.sent(),"error"===this.sdkState&&i.status<400&&(this.sdkState="healthy",this.emit("recovered")),i.ok&&304!==i.status?(this.etag=i.headers.get("ETag")||"",[4,i.json()]):[3,5];case 3:return a=s.sent(),[4,this.storeToggles(a.toggles)];case 4:return s.sent(),"healthy"!==this.sdkState&&(this.sdkState="healthy"),this.bootstrap||this.readyEventEmitted||(this.emit(k),this.readyEventEmitted=!0),[3,6];case 5:i.ok||304===i.status||(console.error("Unleash: Fetching feature toggles did not have an ok response"),this.sdkState="error",this.emit(S,{type:"HttpError",code:i.status})),s.label=6;case 6:return[3,9];case 7:return c=s.sent(),console.error("Unleash: unable to fetch feature toggles",c),this.sdkState="error",this.emit(S,c),[3,9];case 8:return this.abortController=null,[7];case 9:return[2]}}))}))},e}(u),U=r(8416),N=r.t(U,2);const A=U.createContext(null),R={bootstrap:[],disableRefresh:!0,disableMetrics:!0,url:"http://localhost",appName:"offline",clientKey:"not-used"},P=N.startTransition||(t=>t()),D=({config:t,children:e,unleashClient:r,startClient:n=!0})=>{const o=t||R,i=U.useRef(r||new O(o)),[s,a]=U.useState(!!(r?null!=t&&t.bootstrap&&!1!==(null==t?void 0:t.bootstrapOverride):o.bootstrap&&!1!==o.bootstrapOverride)),[c,u]=U.useState(null);U.useEffect((()=>{!o&&!r&&console.error("You must provide either a config or an unleash client to the flag provider.\n        If you are initializing the client in useEffect, you can avoid this warning\n        by checking if the client exists before rendering.");const t=t=>{P((()=>{u((e=>e||t))}))},e=t=>{P((()=>{u(null)}))};let s;const c=()=>{s=setTimeout((()=>{P((()=>{a(!0)}))}),0)};return i.current.on("ready",c),i.current.on("error",t),i.current.on("recovered",e),n&&(i.current.stop(),i.current.start()),function(){i.current&&(i.current.off("error",t),i.current.off("ready",c),i.current.off("recovered",e),i.current.stop()),s&&clearTimeout(s)}}),[]);const l=async t=>{await i.current.updateContext(t)},h=t=>i.current.isEnabled(t),f=t=>i.current.getVariant(t),d=(t,e,r)=>i.current.on(t,e,r),p=U.useMemo((()=>({on:d,updateContext:l,isEnabled:h,getVariant:f,client:i.current,flagsReady:s,flagsError:c,setFlagsReady:a,setFlagsError:u})),[s,c]);return U.createElement(A.Provider,{value:p},e)},j=t=>{const{isEnabled:e,client:r}=(0,U.useContext)(A),[n,o]=(0,U.useState)(!!e(t)),i=(0,U.useRef)();return i.current=n,(0,U.useEffect)((()=>{if(!r)return;const n=()=>{const r=e(t);r!==i.current&&(i.current=r,o(!!r))},s=()=>{const r=e(t);i.current=r,o(r)};return r.on("update",n),r.on("ready",s),()=>{r.off("update",n),r.off("ready",s)}}),[r]),n},H=()=>{const{client:t}=(0,U.useContext)(A),[e,r]=(0,U.useState)(t.getAllToggles());return(0,U.useEffect)((()=>{const e=()=>{r(t.getAllToggles())};return t.on("update",e),()=>{t.off("update",e)}}),[]),e},_=()=>{const{flagsReady:t,flagsError:e}=(0,U.useContext)(A);return{flagsReady:t,flagsError:e}},M=t=>{const{getVariant:e,client:r}=(0,U.useContext)(A),[n,o]=(0,U.useState)(e(t)),i=(0,U.useRef)({name:n.name,enabled:n.enabled});return i.current=n,(0,U.useEffect)((()=>{if(!r)return;const n=()=>{const r=e(t);((t,e)=>{var r,n,o,i;return!(t.name===(null==e?void 0:e.name)&&t.enabled===(null==e?void 0:e.enabled)&&t.feature_enabled===(null==e?void 0:e.feature_enabled)&&(null==(r=t.payload)?void 0:r.type)===(null==(n=null==e?void 0:e.payload)?void 0:n.type)&&(null==(o=t.payload)?void 0:o.value)===(null==(i=null==e?void 0:e.payload)?void 0:i.value))})(i.current,r)&&(o(r),i.current=r)},s=()=>{const r=e(t);i.current.name=null==r?void 0:r.name,i.current.enabled=null==r?void 0:r.enabled,o(r)};return r.on("update",n),r.on("ready",s),()=>{r.off("update",n),r.off("ready",s)}}),[r]),n||{}},K=()=>{const{updateContext:t}=(0,U.useContext)(A);return t},V=()=>{const{client:t}=(0,U.useContext)(A);return t}}}]);
//# sourceMappingURL=../sourcemaps/2080.cb0e4204a0aa731ef35411805afad3f2.js.map