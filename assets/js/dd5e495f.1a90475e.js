"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_label:"Context aware policies",title:"Context aware policies",description:"A description of Kubewarden context aware policies, what they are and how they are useful.",keywords:["kubewarden","context-aware policy","clusteradmissionpolicy","admissionpolicy","admissionrequest","cluster administrator"]},i=void 0,s={unversionedId:"explanations/context-aware-policies",id:"explanations/context-aware-policies",title:"Context aware policies",description:"A description of Kubewarden context aware policies, what they are and how they are useful.",source:"@site/docs/explanations/context-aware-policies.md",sourceDirName:"explanations",slug:"/explanations/context-aware-policies",permalink:"/next/explanations/context-aware-policies",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/explanations/context-aware-policies.md",tags:[],version:"current",lastUpdatedAt:1701461294,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{sidebar_label:"Context aware policies",title:"Context aware policies",description:"A description of Kubewarden context aware policies, what they are and how they are useful.",keywords:["kubewarden","context-aware policy","clusteradmissionpolicy","admissionpolicy","admissionrequest","cluster administrator"]},sidebar:"docs",previous:{title:"Distributing policies",permalink:"/next/distributing-policies"},next:{title:"Kubewarden vs OPA Gatekeeper",permalink:"/next/explanations/opa-comparison"}},c={},l=[{value:"Further readings",id:"further-readings",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Developers can create policies that fetch information from a Kubernetes cluster at run time.\nThese are context aware policies.\nContext aware policies can determine whether an ",(0,a.kt)("inlineCode",{parentName:"p"},"AdmissionRequest")," is acceptable using information from resources deployed in the cluster."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Context aware policies are only available in Kubewarden versions \u2265 v1.6.0.")),(0,a.kt)("p",null,"Resources a policy can access in the cluster is controlled by the policy server's ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/service-accounts/"},"Service Account"),".\nA cluster administrator controls what a policy can access via Kubernetes RBAC rules.\nContext aware policies have only ",(0,a.kt)("strong",{parentName:"p"},"read")," access to the requested resources."),(0,a.kt)("p",null,"For security reasons, only ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," policies can fetch information from the Kubernetes cluster.\nThis is because ",(0,a.kt)("inlineCode",{parentName:"p"},"AdmissionPolicy")," resources can be deployed by unprivileged users.\nIf a context aware policy is deployed as an ",(0,a.kt)("inlineCode",{parentName:"p"},"AdmissionPolicy")," all attempts to access Kubernetes resources are blocked and reported to the cluster administrator."),(0,a.kt)("p",null,"By default, all the cluster resources are blocked.\nA Kubewarden administrator defines which Kubernetes resources each context aware policy is allowed to read.\nThis is done in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," definition using the field ",(0,a.kt)("inlineCode",{parentName:"p"},"contextAwareResources")," ."),(0,a.kt)("p",null,"The following example deploys a policy that requires access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Pod")," resources:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: context-aware-policy\n  namespace: default\nspec:\n  policyServer: default\n  module: "registry://ghcr.io/kubewarden/policies/context-aware-policy:v1.0.0"\n  settings: {}\n  contextAwareResources:\n    - apiVersion: "apps/v1"\n      kind: "deployment"\n    - apiVersion: "v1"\n      kind: "pod"\n  rules:\n    - apiGroups: ["apps"]\n      apiVersions: ["v1"]\n      resources: ["deployment"]\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: false\n')),(0,a.kt)("p",null,"Once deployed, this policy can read the data of the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pod")," resources."),(0,a.kt)("p",null,"Policy authors provide lists of Kubernetes resources for their context aware policy.\nThis is done by annotating the policy.\nKubewarden administrators view policy metadata using the ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl inspect")," command.\nThey can get a list of resources the policy needs access to.\nAn administrator uses this list to populate the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," definition."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"To prevent system abuse, Kubewarden administrators must review the resources the policy will access."),(0,a.kt)("p",{parentName:"admonition"},"For example, a policy evaluating ingress objects would have good reasons to read the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ingress")," resources defined in the cluster.\nThe same policy can't justify having access to ",(0,a.kt)("inlineCode",{parentName:"p"},"Secret")," resources."),(0,a.kt)("p",{parentName:"admonition"},"Policies should have the least access needed to function correctly.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Kubernetes resources are identified by ",(0,a.kt)("inlineCode",{parentName:"p"},"apiVersion")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kind"),"."),(0,a.kt)("p",{parentName:"admonition"},"Usually, ",(0,a.kt)("inlineCode",{parentName:"p"},"apiVersion")," is a string in the format ",(0,a.kt)("inlineCode",{parentName:"p"},"<api>/<version>"),".\nResources from the ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," API group (Pod, Service, and others) should not define the group name, ",(0,a.kt)("inlineCode",{parentName:"p"},"<api>"),".\nThey should only define the ",(0,a.kt)("inlineCode",{parentName:"p"},"<version>")," (for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"v1"),")."),(0,a.kt)("p",{parentName:"admonition"},"For a core resource, the first will not work, the second will."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-console"},'- apiVersion: "core/v1"\n  kind: "pod"\n')),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-console"},'- apiVersion: "v1"\n  kind: "pod"\n')),(0,a.kt)("p",{parentName:"admonition"},"All other Kubernetes resources need the full definition: ",(0,a.kt)("inlineCode",{parentName:"p"},"<api>/<version>"),".")),(0,a.kt)("h2",{id:"further-readings"},"Further readings"),(0,a.kt)("p",null,"More detailed information about context aware policies can be found in ",(0,a.kt)("a",{parentName:"p",href:"/next/writing-policies/spec/context-aware-policies"},"this section"),"\nof our reference documentation."))}u.isMDXComponent=!0}}]);