"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[3292],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(r),y=o,f=u["".concat(c,".").concat(y)]||u[y]||d[y]||i;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=y;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},32836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_label:"Policy testing",title:"Policy testing",description:"The two personas using Kubewarden policies are policy authors and cluster operators.",keywords:["kubewarden","persons","policy author","cluster operator"]},s=void 0,a={unversionedId:"testing-policies/intro",id:"version-1.9/testing-policies/intro",title:"Policy testing",description:"The two personas using Kubewarden policies are policy authors and cluster operators.",source:"@site/versioned_docs/version-1.9/testing-policies/01-intro.md",sourceDirName:"testing-policies",slug:"/testing-policies/intro",permalink:"/testing-policies/intro",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/testing-policies/01-intro.md",tags:[],version:"1.9",lastUpdatedAt:1701461294,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Policy testing",title:"Policy testing",description:"The two personas using Kubewarden policies are policy authors and cluster operators.",keywords:["kubewarden","persons","policy author","cluster operator"]},sidebar:"docs",previous:{title:"Policy metadata",permalink:"/writing-policies/metadata"},next:{title:"Policy authors",permalink:"/testing-policies/policy-authors"}},c={},l=[{value:"Policy testing personas",id:"policy-testing-personas",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"policy-testing-personas"},"Policy testing personas"),(0,o.kt)("p",null,"This section covers the topic of testing Kubewarden Policies.\nWe define two personas interested in testing policies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"policy author"),": you're writing a Kubewarden Policy and you want to ensure your code behaves the way you expect.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"cluster operator"),": you found a Kubewarden Policy and you want to test and tune the policy settings before deploying it.\nMaybe you want to keep testing these settings inside of your CI/CD pipelines,..."))),(0,o.kt)("p",null,"The next sections of the documentation shows how Kubewarden policies might be tested by these personas."))}d.isMDXComponent=!0}}]);