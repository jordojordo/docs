"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[3879],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_label:"Cluster operators",title:"Testing for cluster operators",description:"An introduction to testing Kubewarden policies for cluster operators."},i=void 0,s={unversionedId:"testing-policies/cluster-operators",id:"version-1.8/testing-policies/cluster-operators",title:"Testing for cluster operators",description:"An introduction to testing Kubewarden policies for cluster operators.",source:"@site/versioned_docs/version-1.8/testing-policies/03-cluster-operators.md",sourceDirName:"testing-policies",slug:"/testing-policies/cluster-operators",permalink:"/1.8/testing-policies/cluster-operators",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/testing-policies/03-cluster-operators.md",tags:[],version:"1.8",lastUpdatedAt:1701461294,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Cluster operators",title:"Testing for cluster operators",description:"An introduction to testing Kubewarden policies for cluster operators."},sidebar:"docs",previous:{title:"Policy authors",permalink:"/1.8/testing-policies/policy-authors"},next:{title:"Publish to Artifact Hub",permalink:"/1.8/distributing-policies/publish-policy-to-artifact-hub"}},l={},p=[{value:"A testing example",id:"a-testing-example",level:2},{value:"Create <code>AdmissionReview</code> requests",id:"create-admissionreview-requests",level:3},{value:"Test the policy",id:"test-the-policy",level:3},{value:"Automation",id:"automation",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As a Kubernetes cluster operator, you will want to perform testing against Kubewarden policies you want to use."),(0,a.kt)("p",null,"You will have questions like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What are the correct policy settings to get the validation/mutation outcome I need?"),(0,a.kt)("li",{parentName:"ul"},"How can I be sure everything will keep working as expected when:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"I upgrade the policy to a newer version"),(0,a.kt)("li",{parentName:"ul"},"I add/change some Kubernetes resources"),(0,a.kt)("li",{parentName:"ul"},"I change the configuration parameters of the policy"),(0,a.kt)("li",{parentName:"ul"},"and so on?")))),(0,a.kt)("p",null,"Kubewarden has a utility, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kwctl"},(0,a.kt)("inlineCode",{parentName:"a"},"kwctl")),", that allows testing of the policies outside of Kubernetes."),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl")," we invoke it with following inputs:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A WebAssembly binary file URI of the policy to be run.\nThe Kubewarden policy can be loaded from the local filesystem ",(0,a.kt)("inlineCode",{parentName:"li"},"file://"),", an HTTP(s) server ",(0,a.kt)("inlineCode",{parentName:"li"},"https://"),", or an OCI registry ",(0,a.kt)("inlineCode",{parentName:"li"},"registry://"),"."),(0,a.kt)("li",{parentName:"ol"},"The admission request object to be evaluated.\nYou provide it with the ",(0,a.kt)("inlineCode",{parentName:"li"},"--request-path")," argument.\nUse ",(0,a.kt)("inlineCode",{parentName:"li"},"stdin")," by setting ",(0,a.kt)("inlineCode",{parentName:"li"},"--request-path")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"-"),"."),(0,a.kt)("li",{parentName:"ol"},"You provide run time policy settings as inline JSON via ",(0,a.kt)("inlineCode",{parentName:"li"},"--settings-json")," flag. Or with a JSON or YAML file from the filesystem using ",(0,a.kt)("inlineCode",{parentName:"li"},"--settings-path"),".")),(0,a.kt)("p",null,"After the test ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl")," prints the ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidationResponse")," object to the standard output."),(0,a.kt)("p",null,"You can download pre-built binaries of ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl")," from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kwctl/releases"},"here"),"."),(0,a.kt)("h2",{id:"a-testing-example"},"A testing example"),(0,a.kt)("p",null,"This section describes how to test the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/psp-apparmor"},"psp-apparmor")," policy with different configurations and validation request objects."),(0,a.kt)("h3",{id:"create-admissionreview-requests"},"Create ",(0,a.kt)("inlineCode",{parentName:"h3"},"AdmissionReview")," requests"),(0,a.kt)("p",null,"We have to create files holding the ",(0,a.kt)("inlineCode",{parentName:"p"},"AdmissionReview")," objects to test the policy."),(0,a.kt)("p",null,"You can create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"pod-req-no-specific-apparmor-profile.json")," with the following contents:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("code",null,"pod-req-no-specific-apparmor-profile.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "kind": {\n    "kind": "Pod",\n    "version": "v1"\n  },\n  "object": {\n    "metadata": {\n      "name": "no-apparmor"\n    },\n    "spec": {\n      "containers": [\n        {\n          "image": "nginx",\n          "name": "nginx"\n        }\n      ]\n    }\n  },\n  "operation": "CREATE",\n  "requestKind": {"version": "v1", "kind": "Pod"},\n  "userInfo": {\n    "username": "alice",\n    "uid": "alice-uid",\n    "groups": ["system:authenticated"]\n  }\n}\n'))),(0,a.kt)("p",null,"This request tries to create a Pod that doesn't specify any AppArmor profile to be used.\nBecause it doesn't have an ",(0,a.kt)("inlineCode",{parentName:"p"},"annotation")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"container.apparmor.security.beta.kubernetes.io/<container-name>")," key."),(0,a.kt)("p",null,"You can create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"pod-req-apparmor-unconfined.json")," with the\nfollowing contents:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("code",null,"pod-req-apparmor-unconfined.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "kind": {\n    "kind": "Pod",\n    "version": "v1"\n  },\n  "object": {\n    "metadata": {\n      "name": "privileged-pod",\n      "annotations": {\n        "container.apparmor.security.beta.kubernetes.io/nginx": "unconfined"\n      }\n    },\n    "spec": {\n      "containers": [\n        {\n          "image": "nginx",\n          "name": "nginx"\n        }\n      ]\n    }\n  },\n  "operation": "CREATE",\n  "requestKind": {"version": "v1", "kind": "Pod"},\n  "userInfo": {\n    "username": "alice",\n    "uid": "alice-uid",\n    "groups": ["system:authenticated"]\n  }\n}\n'))),(0,a.kt)("p",null,"This request tries to create a Pod with a container called ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx")," running with the ",(0,a.kt)("inlineCode",{parentName:"p"},"unconfined")," AppArmor profile.\nNote that, running in ",(0,a.kt)("inlineCode",{parentName:"p"},"unconfined")," mode is a bad security practice."),(0,a.kt)("p",null,"Now you can create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"pod-req-apparmor-custom.json")," with the following contents:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("code",null,"pod-req-apparmor-custom.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "kind": {\n    "kind": "Pod",\n    "version": "v1"\n  },\n  "object": {\n    "metadata": {\n      "name": "privileged-pod",\n      "annotations": {\n        "container.apparmor.security.beta.kubernetes.io/nginx": "localhost/nginx-custom"\n      }\n    },\n    "spec": {\n      "containers": [\n        {\n          "image": "nginx",\n          "name": "nginx"\n        }\n      ]\n    }\n  },\n  "operation": "CREATE",\n  "requestKind": {"version": "v1", "kind": "Pod"},\n  "userInfo": {\n    "username": "alice",\n    "uid": "alice-uid",\n    "groups": ["system:authenticated"]\n  }\n}\n'))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"These are all simplified ",(0,a.kt)("inlineCode",{parentName:"p"},"AdmissionReview")," objects.\nWe have only the fields relevant to our testing of the policy.")),(0,a.kt)("h3",{id:"test-the-policy"},"Test the policy"),(0,a.kt)("p",null,"Now we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl")," to test the creation of a Pod not specifying an AppArmor profile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ kwctl run \\\n    --request-path pod-req-no-specific-apparmor-profile.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4 \\\n    | jq\n")),(0,a.kt)("p",null,"The policy will accept the request and produce output like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": true\n}\n')),(0,a.kt)("p",null,"The policy will instead reject the creation of a Pod with an\n",(0,a.kt)("inlineCode",{parentName:"p"},"unconfined")," AppArmor profile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'$ kwctl run \\\n    --request-path pod-req-apparmor-unconfined.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4 \\\n    | jq\n{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": false,\n  "status": {\n    "message": "These AppArmor profiles are not allowed: [\\"unconfined\\"]"\n  }\n}\n')),(0,a.kt)("p",null,"Both times we ran the policy ",(0,a.kt)("strong",{parentName:"p"},"without")," providing any kind of setting. As the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/psp-apparmor#configuration"},"policy's documentation")," states, this results in preventing the usage of non-default profiles."),(0,a.kt)("p",null,"The Pod using a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx")," profile gets rejected by the policy too:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'$ kwctl run \\\n    --request-path pod-req-apparmor-custom.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4 \\\n    | jq\n{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": false,\n  "status": {\n    "message": "These AppArmor profiles are not allowed: [\\"localhost/nginx-custom\\"]"\n  }\n}\n')),(0,a.kt)("p",null,"You can change the default behavior, allowing some chosen AppArmor to be used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'$ kwctl run \\\n    --request-path pod-req-apparmor-custom.json \\\n    --settings-json \'{"allowed_profiles": ["runtime/default", "localhost/nginx-custom"]}\' \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4 \\\n    | jq\n')),(0,a.kt)("p",null,"Now the request succeeds:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": true\n}\n')),(0,a.kt)("h2",{id:"automation"},"Automation"),(0,a.kt)("p",null,"All these steps, shown above, can be automated using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bats-core/bats-core"},"bats"),"."),(0,a.kt)("p",null,"You can write a series of tests and integrate their execution inside your existing CI and CD pipelines."),(0,a.kt)("p",null,'The commands above can be "wrapped" into a ',(0,a.kt)("inlineCode",{parentName:"p"},"bats")," test:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"A ",(0,a.kt)("code",null,"bats"),"test"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'@test "all is good" {\n  run kwctl run \\\n    --request-path pod-req-no-specific-apparmor-profile.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  # request accepted\n  [ $(expr "$output" : \'.*"allowed":true.*\') -ne 0 ]\n}\n\n@test "reject" {\n  run kwctl run \\\n    --request-path pod-req-apparmor-custom.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  # request rejected\n  [ $(expr "$output" : \'.*"allowed":false.*\') -ne 0 ]\n}\n'))),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"bats")," code above is in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"e2e.bats"),", we can run the test as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ bats e2e.bats\n \u2713 all is good\n \u2713 reject\n\n2 tests, 0 failures\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/1.8/writing-policies/go/e2e-tests"},"This")," section has more about writing end-to-end tests for your policies."))}d.isMDXComponent=!0}}]);