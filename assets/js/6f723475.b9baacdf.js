"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1802],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85030:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_label:"Requirements",title:""},i="Requirements",s={unversionedId:"operator-manual/airgap/requirements",id:"version-1.8/operator-manual/airgap/requirements",title:"",description:"1. Private registry that supports OCI artifacts, here you can find a list of supported OCI registries. It will be used for storing the container images and policies.",source:"@site/versioned_docs/version-1.8/operator-manual/airgap/01-requirements.md",sourceDirName:"operator-manual/airgap",slug:"/operator-manual/airgap/requirements",permalink:"/1.8/operator-manual/airgap/requirements",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/operator-manual/airgap/01-requirements.md",tags:[],version:"1.8",lastUpdatedAt:1701461294,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Requirements",title:""},sidebar:"docs",previous:{title:"Tracing Quickstart",permalink:"/1.8/operator-manual/telemetry/tracing/quickstart"},next:{title:"Installation",permalink:"/1.8/operator-manual/airgap/install"}},l={},p=[],u={toc:p},c="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"requirements"},"Requirements"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Private registry that supports OCI artifacts, ",(0,a.kt)("a",{parentName:"li",href:"../../distributing-policies/oci-registries-support"},"here")," you can find a list of supported OCI registries. It will be used for storing the container images and policies."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/kwctl"},"kwctl")," 1.3.1 or above"),(0,a.kt)("li",{parentName:"ol"},"docker v20.10.6 or above")))}m.isMDXComponent=!0}}]);