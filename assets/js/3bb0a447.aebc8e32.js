"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[9043],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),p=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return i.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return t?i.createElement(g,o(o({ref:n},l),{},{components:t})):i.createElement(g,o({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88790:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const a={sidebar_label:"Mutating policies",title:"Mutating policies",description:"Explains mutating policies in the context of Kubewarden",keywords:["kubewarden policy mutating kubernetes clusteradmissionpolicy admissionpolicy"]},o=void 0,s={unversionedId:"tasksDir/mutating-policies",id:"tasksDir/mutating-policies",title:"Mutating policies",description:"Explains mutating policies in the context of Kubewarden",source:"@site/docs/tasksDir/mutating-policies.md",sourceDirName:"tasksDir",slug:"/tasksDir/mutating-policies",permalink:"/next/tasksDir/mutating-policies",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/tasksDir/mutating-policies.md",tags:[],version:"current",lastUpdatedAt:1701461294,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{sidebar_label:"Mutating policies",title:"Mutating policies",description:"Explains mutating policies in the context of Kubewarden",keywords:["kubewarden policy mutating kubernetes clusteradmissionpolicy admissionpolicy"]},sidebar:"docs",previous:{title:"Verifying Kubewarden",permalink:"/next/security/verifying-kubewarden"},next:{title:"Distributing policies",permalink:"/next/distributing-policies"}},u={},p=[],l={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mutating policies receive an object request and rebuild this incoming object\n(mutate it) into a new request, according to the defined values in the settings\nof the policy. The request will proceed through the Kubernetes API, potentially being\nevaluated by other policies."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"To prevent system abuse, Kubewarden administrators should review mutating\npolicies: mutating policies could for example modify a workload, such that it\nallows for privileged container creation."),(0,r.kt)("p",{parentName:"admonition"},"If in doubt, split policies into mutating, and validating policies, instead of\nwriting or deploying policies that both validate and mutate. This is particularly\nimportant when using a DSL (such as Rego) to build complex policies.")),(0,r.kt)("p",null,"If you want to allow the behavior of mutating requests,\nset the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy.mutating")," field to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"However, if you set the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy.mutating")," field to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),",\nthe mutated requests will be rejected.\nFor example, create the following ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"mutating")," field set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Command\nkubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-user-group\nspec:\n  module: "registry://ghcr.io/kubewarden/policies/user-group-psp:v0.1.5"\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: true\n  settings:\n    run_as_user:\n      rule: "MustRunAs"\n      ranges:\n        - min: 1000\n          max: 2000\n        - min: 3000\n          max: 4000\n    run_as_group:\n      rule: "RunAsAny"\n    supplemental_groups:\n      rule: "RunAsAny"\nEOF\n\n# Output\nclusteradmissionpolicy.policies.kubewarden.io/psp-user-group created\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/user-group-psp-policy"},(0,r.kt)("inlineCode",{parentName:"a"},"psp-user-group"))," policy is used to control users and groups in containers and can mutate the requests.\nIn the example above, the ",(0,r.kt)("inlineCode",{parentName:"p"},"runAsUser")," field is set and it will be added to the container ",(0,r.kt)("inlineCode",{parentName:"p"},"securityContext")," section."),(0,r.kt)("p",null,"As the ",(0,r.kt)("inlineCode",{parentName:"p"},"mutating")," field is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the following request will be applied successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Command\nkubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: pause-user-group\nspec:\n  containers:\n    - name: pause\n      image: registry.k8s.io/pause\nEOF\n\n# Output\npod/pause-user-group created\n")),(0,r.kt)("p",null,"Once the request is applied, you can see the results of the container's ",(0,r.kt)("inlineCode",{parentName:"p"},"securityContext"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Command\nkubectl get pods pause-user-group -o jsonpath='{ .spec.containers[].securityContext }'\n\n# Output\n{\"runAsUser\":1000}\n")),(0,r.kt)("p",null,"Now, modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," by setting the field ",(0,r.kt)("inlineCode",{parentName:"p"},"mutating")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Command\nkubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-user-group\nspec:\n  module: "registry://ghcr.io/kubewarden/policies/user-group-psp:v0.1.5"\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: false\n  settings:\n    run_as_user:\n      rule: "MustRunAs"\n      ranges:\n        - min: 1000\n          max: 2000\n        - min: 3000\n          max: 4000\n    run_as_group:\n      rule: "RunAsAny"\n    supplemental_groups:\n      rule: "RunAsAny"\nEOF\n\n# Output\nclusteradmissionpolicy.policies.kubewarden.io/psp-user-group configured\n')),(0,r.kt)("p",null,"As the ",(0,r.kt)("inlineCode",{parentName:"p"},"mutating")," field is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the following request will fail:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Command\nkubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: pause-user-group\nspec:\n  containers:\n    - name: pause\n      image: registry.k8s.io/pause\nEOF\n\n# Output\nError from server: error when creating ".\\\\pause-user-group.yaml": admission webhook "psp-user-group.kubewarden.admission" denied the request: Request rejected by policy psp-user-group. The policy attempted to mutate the request, but it is currently configured to not allow mutations.\n')),(0,r.kt)("p",null,"In conclusion, you can see Kubewarden replicates the same behavior as the deprecated Kubernetes Pod Security Polices (PSP)."))}d.isMDXComponent=!0}}]);