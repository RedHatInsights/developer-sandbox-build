(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[6030],{7685:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Alert:()=>N,AlertActionCloseButton:()=>_,AlertActionLink:()=>A,AlertContext:()=>h,AlertGroup:()=>P,AlertVariant:()=>T});var a=n(5353),i=n(8416),l=n(8296);n(1754);const s={alert:"pf-v5-c-alert",alertAction:"pf-v5-c-alert__action",alertActionGroup:"pf-v5-c-alert__action-group",alertDescription:"pf-v5-c-alert__description",alertIcon:"pf-v5-c-alert__icon",alertTitle:"pf-v5-c-alert__title",alertToggle:"pf-v5-c-alert__toggle",alertToggleIcon:"pf-v5-c-alert__toggle-icon",button:"pf-v5-c-button",modifiers:{custom:"pf-m-custom",success:"pf-m-success",danger:"pf-m-danger",warning:"pf-m-warning",info:"pf-m-info",inline:"pf-m-inline",plain:"pf-m-plain",expandable:"pf-m-expandable",expanded:"pf-m-expanded",truncate:"pf-m-truncate"},themeDark:"pf-v5-theme-dark"};var r=n(9818),o=n(8778),c=n(3047),u=n(9957),d=n(3688),m=n(4143);const v={success:o.ZP,danger:c.default,warning:u.ZP,info:d.ZP,custom:m.ZP},p=e=>{var{variant:t,customIcon:n,className:r=""}=e,o=(0,a._T)(e,["variant","customIcon","className"]);const c=v[t];return c?i.createElement("div",Object.assign({},o,{className:(0,l.i)(s.alertIcon,r)}),n||i.createElement(c,null)):null};var f=n(164),g=n(2472);const h=i.createContext(null),b="--pf-v5-c-alert__title--max-lines";var C=n(5824),E=n(4335),L=n(3174);const x=e=>{var{"aria-label":t="",variantLabel:n,onToggleExpand:r,isExpanded:o=!1}=e,c=(0,a._T)(e,["aria-label","variantLabel","onToggleExpand","isExpanded"]);const{title:u,variantLabel:d}=i.useContext(h);return i.createElement(E.zx,Object.assign({variant:E.Wu.plain,onClick:r,"aria-expanded":o,"aria-label":""===t?`Toggle ${n||d} alert: ${u}`:t},c),i.createElement("span",{className:(0,l.i)(s.alertToggleIcon)},i.createElement(L.ZP,{"aria-hidden":"true"})))};var T;x.displayName="AlertToggleExpandButton",function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.custom="custom"}(T||(T={}));const N=e=>{var{variant:t=T.custom,isInline:n=!1,isPlain:o=!1,isLiveRegion:c=!1,variantLabel:u=`${(0,f.kC)(t)} alert:`,actionClose:d,actionLinks:m,title:v,component:E="h4",children:L="",className:O="",ouiaId:_,ouiaSafe:A=!0,timeout:I=!1,timeoutAnimation:k=3e3,onTimeout:w=(()=>{}),truncateTitle:P=0,tooltipPosition:M,customIcon:y,isExpandable:R=!1,toggleAriaLabel:S=`${(0,f.kC)(t)} alert details`,onMouseEnter:Z=(()=>{}),onMouseLeave:j=(()=>{}),id:z}=e,$=(0,a._T)(e,["variant","isInline","isPlain","isLiveRegion","variantLabel","actionClose","actionLinks","title","component","children","className","ouiaId","ouiaSafe","timeout","timeoutAnimation","onTimeout","truncateTitle","tooltipPosition","customIcon","isExpandable","toggleAriaLabel","onMouseEnter","onMouseLeave","id"]);const G=(0,g.S$)(N.displayName,_,A,t),B=i.createElement(i.Fragment,null,i.createElement("span",{className:(0,l.i)(r.Z.screenReader)},u),v),D=i.useRef(null),W=E,X=i.useRef(),[H,q]=(0,i.useState)(!1);i.useEffect((()=>{if(!D.current||!P)return;D.current.style.setProperty(b,P.toString());const e=D.current&&D.current.offsetHeight<D.current.scrollHeight;H!==e&&q(e)}),[D,P,H]);const[F,U]=(0,i.useState)(!1),[V,J]=(0,i.useState)(!0),[K,Q]=(0,i.useState)(),[Y,ee]=(0,i.useState)(),te=F&&V&&!K&&!Y;i.useEffect((()=>{const e=!0===I?8e3:Number(I);if(e>0){const t=setTimeout((()=>U(!0)),e);return()=>clearTimeout(t)}}),[I]),i.useEffect((()=>{const e=()=>{X.current&&(X.current.contains(document.activeElement)?(ee(!0),J(!1)):Y&&ee(!1))};return document.addEventListener("focus",e,!0),()=>document.removeEventListener("focus",e,!0)}),[Y]),i.useEffect((()=>{if(!1===Y||!1===K){const e=setTimeout((()=>J(!0)),k);return()=>clearTimeout(e)}}),[Y,K,k]),i.useEffect((()=>{te&&w()}),[te,w]);const[ne,ae]=(0,i.useState)(!1);if(te)return null;const ie=i.createElement(W,Object.assign({},H&&{tabIndex:0},{ref:D,className:(0,l.i)(s.alertTitle,P&&s.modifiers.truncate)}),B);return i.createElement("div",Object.assign({ref:X,className:(0,l.i)(s.alert,n&&s.modifiers.inline,o&&s.modifiers.plain,R&&s.modifiers.expandable,ne&&s.modifiers.expanded,s.modifiers[t],O)},G,c&&{"aria-live":"polite","aria-atomic":"false"},{onMouseEnter:e=>{Q(!0),J(!1),Z(e)},onMouseLeave:e=>{Q(!1),j(e)},id:z},$),R&&i.createElement(h.Provider,{value:{title:v,variantLabel:u}},i.createElement("div",{className:(0,l.i)(s.alertToggle)},i.createElement(x,{isExpanded:ne,onToggleExpand:()=>{ae(!ne)},"aria-label":S}))),i.createElement(p,{variant:t,customIcon:y}),H?i.createElement(C.u,{content:B,position:M},ie):ie,d&&i.createElement(h.Provider,{value:{title:v,variantLabel:u}},i.createElement("div",{className:(0,l.i)(s.alertAction)},d)),L&&(!R||R&&ne)&&i.createElement("div",{className:(0,l.i)(s.alertDescription)},L),m&&i.createElement("div",{className:(0,l.i)(s.alertActionGroup)},m))};N.displayName="Alert";var O=n(4307);const _=e=>{var{className:t,onClose:n=(()=>{}),"aria-label":l="",variantLabel:s}=e,r=(0,a._T)(e,["className","onClose","aria-label","variantLabel"]);return i.createElement(h.Consumer,null,(({title:e,variantLabel:a})=>i.createElement(E.zx,Object.assign({variant:E.Wu.plain,onClick:n,"aria-label":""===l?`Close ${s||a} alert: ${e}`:l,className:t},r),i.createElement(O.ZP,null))))};_.displayName="AlertActionCloseButton";const A=e=>{var{className:t="",children:n}=e,l=(0,a._T)(e,["className","children"]);return i.createElement(E.zx,Object.assign({variant:E.Wu.link,isInline:!0,className:t},l),n)};A.displayName="AlertActionLink";var I=n(1051);n(1235);const k="pf-m-toast",w=e=>{var{className:t,children:n,isToast:s,isLiveRegion:r,onOverflowClick:o,overflowMessage:c}=e,u=(0,a._T)(e,["className","children","isToast","isLiveRegion","onOverflowClick","overflowMessage"]);return i.createElement("ul",Object.assign({role:"list","aria-live":r?"polite":null,"aria-atomic":!r&&null,className:(0,l.i)("pf-v5-c-alert-group",t,s?k:"")},u),i.Children.toArray(n).map(((e,t)=>{var n;return i.createElement("li",{key:(null===(n=e.props)||void 0===n?void 0:n.id)||t},e)})),c&&i.createElement("li",null,i.createElement("button",{onClick:o,className:(0,l.i)("pf-v5-c-alert-group__overflow-button")},c)))};w.displayName="AlertGroupInline";class P extends i.Component{constructor(){super(...arguments),this.state={container:void 0}}componentDidMount(){const e=document.createElement("div"),t=this.getTargetElement();this.setState({container:e}),t.appendChild(e)}componentWillUnmount(){const e=this.getTargetElement();this.state.container&&e.removeChild(this.state.container)}getTargetElement(){const e=this.props.appendTo;return"function"==typeof e?e():e||document.body}render(){const e=this.props,{className:t,children:n,isToast:l,isLiveRegion:s,onOverflowClick:r,overflowMessage:o,"aria-label":c,appendTo:u}=e,d=(0,a._T)(e,["className","children","isToast","isLiveRegion","onOverflowClick","overflowMessage","aria-label","appendTo"]),m=i.createElement(w,Object.assign({onOverflowClick:r,className:t,isToast:l,isLiveRegion:s,overflowMessage:o,"aria-label":c},d),n);if(!this.props.isToast)return m;const v=this.state.container;return f.Nq&&v?I.createPortal(m,v):null}}P.displayName="AlertGroup"},4143:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a});const a=(0,n(400).I)({name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0})},3688:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a});const a=(0,n(400).I)({name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0})},4307:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a});const a=(0,n(400).I)({name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0})},9818:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(1177);const a={hidden:"pf-v5-u-hidden",hiddenOnLg:"pf-v5-u-hidden-on-lg",hiddenOnMd:"pf-v5-u-hidden-on-md",hiddenOnSm:"pf-v5-u-hidden-on-sm",hiddenOnXl:"pf-v5-u-hidden-on-xl",hiddenOn_2xl:"pf-v5-u-hidden-on-2xl",screenReader:"pf-v5-u-screen-reader",screenReaderOnLg:"pf-v5-u-screen-reader-on-lg",screenReaderOnMd:"pf-v5-u-screen-reader-on-md",screenReaderOnSm:"pf-v5-u-screen-reader-on-sm",screenReaderOnXl:"pf-v5-u-screen-reader-on-xl",screenReaderOn_2xl:"pf-v5-u-screen-reader-on-2xl",visible:"pf-v5-u-visible",visibleOnLg:"pf-v5-u-visible-on-lg",visibleOnMd:"pf-v5-u-visible-on-md",visibleOnSm:"pf-v5-u-visible-on-sm",visibleOnXl:"pf-v5-u-visible-on-xl",visibleOn_2xl:"pf-v5-u-visible-on-2xl"}},5467:()=>{},1235:()=>{},1754:()=>{},9854:()=>{},1177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/6030.ea5e1035d9df2aa0ab152cf32ee3c66f.js.map