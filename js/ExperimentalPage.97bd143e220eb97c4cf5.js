"use strict";(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[2869],{8844:(e,t,a)=>{a.d(t,{F:()=>r});var n=a(8416),l=a(6419);const r=()=>n.useContext(l.u)},8780:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(8416),l=a.n(n),r=a(8483),s=a(8379);var c=a(8844),u=a(9726),m=a(7629);(0,u.cn)([]);const o=(0,u.cn)(void 0),p=(0,u.cn)((async e=>{const t=e(o);if(!t)return;const a=e(m.T);return console.log({signUpData:a}),a?await t(a.defaultUserNamespace):void 0})),d=()=>{const e=(()=>{const[{status:e}]=(0,c.F)(),{getDeployments:t}=(()=>{const e=(0,s.ZP)(s.xc.KUBE_API);return{getDeployments:t=>(async(e,t)=>{const a=function(e){return`/apis/apps/v1/namespaces/${e}/deployments `}(t),{data:n}=await e.get(a);return n})(e,t)}})(),a=(0,r.b9)(o),l=(0,r.Dv)(p);return(0,n.useEffect)((()=>{"ready"===e&&t&&a((()=>t))}),[t.toString(),e]),l})(),[{signupData:t}]=(0,c.F)(),a=t?.consoleURL&&t?.defaultUserNamespace?`${t.consoleURL}topology/ns/${t.defaultUserNamespace}?view=graph`:t?.consoleURL,u=(0,n.useMemo)((()=>e?.items.map((e=>l().createElement("tr",{key:e.metadata.uuid},l().createElement("td",null,e.metadata.name),l().createElement("td",null,e.metadata.creationTimestamp),l().createElement("td",null,e.spec.template.metadata.labels.app),l().createElement("td",null,e.spec.template.metadata.labels.deployment),l().createElement("td",null,e.status.conditions.find((e=>"True"===e.status))?.type??"Unknown"),l().createElement("td",null,e.spec.replicas),l().createElement("td",null,l().createElement("a",{target:"_blank",href:a,rel:"noreferrer"},"Open")))))??[]),[e]);return l().createElement("table",null,l().createElement("thead",null,l().createElement("tr",null,l().createElement("th",null,"Name"),l().createElement("th",null,"Created at"),l().createElement("th",null,"Application type"),l().createElement("th",null,"Deployment type"),l().createElement("th",null,"Status"),l().createElement("th",null,"Total replicas"),l().createElement("th",null,"Link"))),l().createElement("tbody",null,u))},i=()=>l().createElement(n.Suspense,{fallback:"Loading deployments"},l().createElement(d,null))}}]);
//# sourceMappingURL=../sourcemaps/ExperimentalPage.3521d0c626444a792af83a48f937f3c0.js.map