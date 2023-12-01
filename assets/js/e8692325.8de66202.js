"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7939],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||r;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_label:"Verification Config",title:""},o="Verification Config",l={unversionedId:"operator-manual/verification-config",id:"version-1.8/operator-manual/verification-config",title:"",description:"Example",source:"@site/versioned_docs/version-1.8/operator-manual/verification-config.md",sourceDirName:"operator-manual",slug:"/operator-manual/verification-config",permalink:"/1.8/operator-manual/verification-config",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/operator-manual/verification-config.md",tags:[],version:"1.8",lastUpdatedAt:1701461294,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{sidebar_label:"Verification Config",title:""},sidebar:"docs",previous:{title:"Custom Resources Definitions (CRDs)",permalink:"/1.8/operator-manual/CRDs"},next:{title:"Quickstart",permalink:"/1.8/operator-manual/ui-extension/install"}},s={},c=[{value:"Example",id:"example",level:2},{value:"Format",id:"format",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"verification-config"},"Verification Config"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Here you can see an example of a configuration for verifying\nsignatures using the Sigstore workflow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: v1\n\nallOf:\n  - kind: githubAction\n    owner: kubewarden   # mandatory\n    repo: policy-server # optional\n    annotations:  # optional\n      env: prod\n\nanyOf: # at least `anyOf.minimumMatches` are required to match\n  minimumMatches: 2 # default is 1\n  signatures:\n  - kind: pubKey\n    owner: alice # optional\n    key: | # mandatory\n         -----BEGIN PUBLIC KEY-----\n         MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEQiTy5S+2JFvVlhUwWPLziM7iTM2j\n         byLgh2IjpNQN0Uio/9pZOTP/CsJmXoUNshfpTUHd3OxgHgz/6adtf2nBwQ==\n         -----END PUBLIC KEY-----\n    annotations:  # optional\n      env: prod\n  - kind: genericIssuer\n    issuer: https://github.com/login/oauth\n    subject:\n      equal: alice@example.com\n  - kind: genericIssuer\n    issuer: https://token.actions.githubusercontent.com\n    subject:\n      equal: https://github.com/bob/app-example/.github/workflows/release.yml@refs/heads/main\n    annotations:  # optional\n      env: prod\n  - kind: genericIssuer\n    issuer: https://token.actions.githubusercontent.com\n    subject:\n      urlPrefix: https://github.com/bob # <- it will be post-fixed with `/` for security reasons\n")),(0,a.kt)("h2",{id:"format"},"Format"),(0,a.kt)("p",null,"The config has 2 root keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"allOf"),": All verification info listed here must be satisfied for accepting a\ncontainer image as signed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"anyOf"),": At least ",(0,a.kt)("inlineCode",{parentName:"li"},"anyOf.minimumMatches")," of all info listed here must be\nsatisfied for accepting a container image as signed.")),(0,a.kt)("p",null,"These two root keys accept an array of keys of type ",(0,a.kt)("inlineCode",{parentName:"p"},"kind"),".\nA full list of accepted keys based on different use cases is given below."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pubKey"),": for signatures performed with traditional public/private key\ncryptography."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"githubAction"),": for signatures performed with Sigstore's keyless workflow\ninside GitHub Actions. Kubewarden checks this information against the x509\ncertificate extension ",(0,a.kt)("inlineCode",{parentName:"li"},"workflow_repository")," created by the OpenID Connect of\nGithub, and not only the ",(0,a.kt)("inlineCode",{parentName:"li"},"issuer")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"subject"),". Hence, it is strongly\nrecommended to use this ",(0,a.kt)("inlineCode",{parentName:"li"},"kind")," if dealing with GitHub Actions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"genericIssuer"),": for signatures performed with Sigstore's keyless worfklow,\nwhere the user needs to validate the certificate ",(0,a.kt)("inlineCode",{parentName:"li"},"issuer")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"subject")," on\ntheir own.\nIt accepts a ",(0,a.kt)("inlineCode",{parentName:"li"},"subject"),", which can be:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"equal"),": the value passed here must match exactly against the ",(0,a.kt)("inlineCode",{parentName:"li"},"subject")," in\nthe signing certificate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"urlPrefix"),": the value passed here is post-fixed with ",(0,a.kt)("inlineCode",{parentName:"li"},"/")," to prevent\ntypo-squatting, and must be a prefix of the ",(0,a.kt)("inlineCode",{parentName:"li"},"subject")," in the signing\ncertificate.")))),(0,a.kt)("p",null,"the ",(0,a.kt)("inlineCode",{parentName:"p"},"kind")," key optionally accepts an ",(0,a.kt)("inlineCode",{parentName:"p"},"annotations")," key, with a list of\nkey-values, that must be present in the signature."))}m.isMDXComponent=!0}}]);