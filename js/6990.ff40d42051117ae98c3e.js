(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[6990,4212],{1449:(e,t,s)=>{"use strict";s.d(t,{oi:()=>b,y5:()=>x,BJ:()=>g,x:()=>v});var i=s(5353),n=s(8416);s(1751);const r={formControl:"pf-v5-c-form-control",formControlIcon:"pf-v5-c-form-control__icon",formControlToggleIcon:"pf-v5-c-form-control__toggle-icon",formControlUtilities:"pf-v5-c-form-control__utilities",modifiers:{readonly:"pf-m-readonly",success:"pf-m-success",warning:"pf-m-warning",error:"pf-m-error",plain:"pf-m-plain",expanded:"pf-m-expanded",disabled:"pf-m-disabled",icon:"pf-m-icon",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal",resizeBoth:"pf-m-resize-both",status:"pf-m-status"},themeDark:"pf-v5-theme-dark"};var a=s(8296),o=s(1405),l=s(164),c=s(2472),d=s(4709),u=s(8778),p=s(3047),h=s(9957);const f={success:u.ZP,error:p.default,warning:h.ZP},m=e=>{var{status:t,customIcon:s,className:o}=e,l=(0,i._T)(e,["status","customIcon","className"]);const c=t&&f[t];return n.createElement("span",Object.assign({className:(0,a.i)(r.formControlIcon,t&&r.modifiers.status,o)},l),s||n.createElement(c,null))};var v,g;!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(v||(v={})),function(e){e.default="default",e.plain="plain"}(g||(g={}));class x extends n.Component{constructor(e){super(e),this.inputRef=n.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e,e.currentTarget.value)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,l.fi)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:t,onFocus:s}=this.props;t&&this.restoreText(),s&&s(e)},this.onBlur=e=>{const{isLeftTruncated:t,onBlur:s}=this.props;t&&this.handleResize(),s&&s(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,c.ql)(x.displayName)}}componentDidMount(){if(this.props.isLeftTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,d.p)(e.current,this.handleResize,!0),this.handleResize()}}componentWillUnmount(){this.props.isLeftTruncated&&this.observer()}render(){const e=this.props,{innerRef:t,className:s,type:l,value:d,placeholder:u,validated:p,onChange:h,onFocus:f,onBlur:v,isLeftTruncated:g,isExpanded:x,readOnly:y,readOnlyVariant:I,isRequired:C,isDisabled:z,customIcon:w,ouiaId:T,ouiaSafe:R}=e,E=(0,i._T)(e,["innerRef","className","type","value","placeholder","validated","onChange","onFocus","onBlur","isLeftTruncated","isExpanded","readOnly","readOnlyVariant","isRequired","isDisabled","customIcon","ouiaId","ouiaSafe"]),O=["success","error","warning"].includes(p);return n.createElement("span",{className:(0,a.i)(r.formControl,I&&r.modifiers.readonly,"plain"===I&&r.modifiers.plain,z&&r.modifiers.disabled,x&&r.modifiers.expanded,w&&r.modifiers.icon,O&&r.modifiers[p],s)},n.createElement("input",Object.assign({},E,{onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange,type:l,value:this.sanitizeInputValue(d),"aria-invalid":E["aria-invalid"]?E["aria-invalid"]:p===o.LD.error,required:C,disabled:z,readOnly:!!I||y,ref:t||this.inputRef,placeholder:u},(0,c.dp)(b.displayName,void 0!==T?T:this.state.ouiaStateId,R))),(w||O)&&n.createElement("span",{className:(0,a.i)(r.formControlUtilities)},w&&n.createElement(m,{customIcon:w}),O&&n.createElement(m,{status:p})))}}x.displayName="TextInputBase",x.defaultProps={"aria-label":null,isRequired:!1,validated:"default",isDisabled:!1,isExpanded:!1,type:v.text,isLeftTruncated:!1,onChange:()=>{},ouiaSafe:!0};const b=n.forwardRef(((e,t)=>n.createElement(x,Object.assign({},e,{innerRef:t}))));b.displayName="TextInput"},6990:(e,t,s)=>{"use strict";s.r(t),s.d(t,{TextInput:()=>i.oi,TextInputBase:()=>i.y5,TextInputReadOnlyVariant:()=>i.BJ,TextInputTypes:()=>i.x});var i=s(1449)},4709:(e,t,s)=>{"use strict";s.d(t,{p:()=>n});var i=s(164);const n=(e,t,s)=>{let n;if(i.Nq){const{ResizeObserver:i}=window;if(e&&i){const r=new i((e=>{s?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&t()})):Array.isArray(e)&&e.length>0&&t()}));r.observe(e),n=()=>r.unobserve(e)}else window.addEventListener("resize",t),n=()=>window.removeEventListener("resize",t)}return()=>{n&&n()}}},400:(e,t,s)=>{"use strict";s.d(t,{I:()=>a});var i=s(5353),n=s(8416);let r=0;function a({name:e,xOffset:t=0,yOffset:s=0,width:a,height:o,svgPath:l}){var c;return c=class extends n.Component{constructor(){super(...arguments),this.id="icon-title-"+r++}render(){const e=this.props,{title:r,className:c}=e,d=(0,i._T)(e,["title","className"]),u=c?`pf-v5-svg ${c}`:"pf-v5-svg",p=Boolean(r),h=[t,s,a,o].join(" ");return n.createElement("svg",Object.assign({className:u,viewBox:h,fill:"currentColor","aria-labelledby":p?this.id:null,"aria-hidden":!p||null,role:"img",width:"1em",height:"1em"},d),p&&n.createElement("title",{id:this.id},r),n.createElement("path",{d:l}))}},c.displayName=e,c}},8778:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>i});const i=(0,s(400).I)({name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0})},3047:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ExclamationCircleIcon:()=>r,ExclamationCircleIconConfig:()=>n,default:()=>a});var i=s(400);const n={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},r=(0,i.I)(n),a=r},9957:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>i});const i=(0,s(400).I)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})},1751:()=>{}}]);
//# sourceMappingURL=../sourcemaps/6990.318152e8d5a1f82808d9e1560d19a0f2.js.map