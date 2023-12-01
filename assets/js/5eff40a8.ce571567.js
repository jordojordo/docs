"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const l={sidebar_label:"Build and Run",title:""},a="Build and run",o={unversionedId:"writing-policies/rego/open-policy-agent/build-and-run",id:"version-1.8/writing-policies/rego/open-policy-agent/build-and-run",title:"",description:"In the previous section we have written our Rego policy. The structure",source:"@site/versioned_docs/version-1.8/writing-policies/rego/open-policy-agent/03-build-and-run.md",sourceDirName:"writing-policies/rego/open-policy-agent",slug:"/writing-policies/rego/open-policy-agent/build-and-run",permalink:"/1.8/writing-policies/rego/open-policy-agent/build-and-run",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/writing-policies/rego/open-policy-agent/03-build-and-run.md",tags:[],version:"1.8",lastUpdatedAt:1701461294,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Build and Run",title:""},sidebar:"docs",previous:{title:"Create a New Policy",permalink:"/1.8/writing-policies/rego/open-policy-agent/create-policy"},next:{title:"Distribute",permalink:"/1.8/writing-policies/rego/open-policy-agent/distribute"}},p={},u=[{value:"Build",id:"build",level:2},{value:"Run",id:"run",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-and-run"},"Build and run"),(0,i.kt)("p",null,"In the previous section we have written our Rego policy. The structure\nlooks as the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 data\n\u2502\xa0\xa0 \u251c\u2500\u2500 default-ns.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 other-ns.json\n\u251c\u2500\u2500 policy.rego\n\u2514\u2500\u2500 request.rego\n\n1 directory, 4 files\n")),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("p",null,"We have our policy, now let's go ahead and build it. We do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ opa build -t wasm -e policy/main policy.rego request.rego\n")),(0,i.kt)("p",null,"What this does is build the rego policy, with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"wasm"),". We want  to build the policy for the ",(0,i.kt)("inlineCode",{parentName:"li"},"wasm")," target."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entrypoint"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"policy/main"),". The entry point is the ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," rule\ninside the ",(0,i.kt)("inlineCode",{parentName:"li"},"policy")," package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"policy.rego"),": build and include the ",(0,i.kt)("inlineCode",{parentName:"li"},"policy.rego")," file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request.rego"),": build and include the ",(0,i.kt)("inlineCode",{parentName:"li"},"request.rego")," file.")),(0,i.kt)("p",null,"After the build is complete, ",(0,i.kt)("inlineCode",{parentName:"p"},"opa build")," will have generated a\n",(0,i.kt)("inlineCode",{parentName:"p"},"bundle.tar.gz")," file. You can extract it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ tar -xf bundle.tar.gz /policy.wasm\n")),(0,i.kt)("p",null,"Now the tree looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},".\n\u251c\u2500\u2500 bundle.tar.gz\n\u251c\u2500\u2500 data\n\u2502\xa0\xa0 \u251c\u2500\u2500 default-ns.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 other-ns.json\n\u251c\u2500\u2500 policy.rego\n\u251c\u2500\u2500 policy.wasm\n\u2514\u2500\u2500 request.rego\n\n1 directory, 6 file\n")),(0,i.kt)("p",null,"We have our precious ",(0,i.kt)("inlineCode",{parentName:"p"},"policy.wasm")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ file policy.wasm\npolicy.wasm: WebAssembly (wasm) binary module version 0x1 (MVP)\n")),(0,i.kt)("p",null,"Now it's time to execute it! Let's go on."),(0,i.kt)("h2",{id:"run"},"Run"),(0,i.kt)("p",null,"We are going to use ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl")," in order to run the policy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ kwctl run -e opa --request-path data/other-ns.json policy.wasm | jq\n{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": true\n}\n')),(0,i.kt)("p",null,"This request is accepted by the policy, since this is the request\npointing to the ",(0,i.kt)("inlineCode",{parentName:"p"},"other")," namespace."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"execution-mode"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"opa"),". Rego policies can be targeting Open Policy\nAgent or Gatekeeper: we must tell ",(0,i.kt)("inlineCode",{parentName:"li"},"kwctl")," what kind of policy we are\nrunning.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request-path"),": the location of the recorded request ",(0,i.kt)("inlineCode",{parentName:"li"},"kwctl")," will\nsend to the policy to evaluate.")),(0,i.kt)("p",null,"Now let's try to evaluate the request that creates the pod inside the\n",(0,i.kt)("inlineCode",{parentName:"p"},"default")," namespace:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ kwctl run -e opa --request-path data/default-ns.json policy.wasm | jq\n{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": false,\n  "status": {\n    "message": "it is forbidden to use the default namespace"\n  }\n}\n')),(0,i.kt)("p",null,"In this case, the policy is rejecting the request, and giving a reason\nback to the API server that will be returned to the user or API consumer."))}d.isMDXComponent=!0}}]);