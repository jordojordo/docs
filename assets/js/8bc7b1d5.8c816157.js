"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[3070],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},55141:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_label:"Quickstart",title:""},o="Rancher UI Extension",l={unversionedId:"operator-manual/ui-extension/install",id:"operator-manual/ui-extension/install",title:"",description:"This section describes how to install the Kubewarden UI as an extension of Rancher Manager.",source:"@site/docs/operator-manual/ui-extension/01-install.md",sourceDirName:"operator-manual/ui-extension",slug:"/operator-manual/ui-extension/install",permalink:"/next/operator-manual/ui-extension/install",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/operator-manual/ui-extension/01-install.md",tags:[],version:"current",lastUpdatedAt:1701461294,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Quickstart",title:""},sidebar:"docs",previous:{title:"Verification Config",permalink:"/next/operator-manual/verification-config"},next:{title:"Monitoring",permalink:"/next/operator-manual/ui-extension/metrics"}},s={},p=[{value:"Install Kubewarden UI Extension",id:"install-kubewarden-ui-extension",level:2},{value:"Install Kubewarden",id:"install-kubewarden",level:3},{value:"Post-Installation",id:"post-installation",level:2},{value:"Enabling the default Policy Server and policies",id:"enabling-the-default-policy-server-and-policies",level:3},{value:"Creating Policies",id:"creating-policies",level:3},{value:"Additional Features",id:"additional-features",level:3},{value:"Airgap Installation",id:"airgap-installation",level:2},{value:"Installation Steps",id:"installation-steps",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rancher-ui-extension"},"Rancher UI Extension"),(0,i.kt)("p",null,"This section describes how to install the Kubewarden UI as an extension of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher"},"Rancher Manager"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This requires a running instance of Rancher Manager ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.7.0")," or greater.")),(0,i.kt)("h2",{id:"install-kubewarden-ui-extension"},"Install Kubewarden UI Extension"),(0,i.kt)("p",null,"The Kubewarden UI is installed as a global extension, however, the Kubewarden controller will be installed through the Rancher UI as a cluster scoped resource."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For air-gapped installations, follow ",(0,i.kt)("a",{parentName:"p",href:"#airgap-installation"},"these steps"),".")),(0,i.kt)("p",null,'Within the Extensions page, click on the "Enable" button and select the option to add the Rancher Extensions Repository.\nOnce enabled the "Kubewarden" extension item will appear automatically.\nClick on this item to install the extension.\nOnce installed, you will then be able to install Kubewarden into your desired Cluster.'),(0,i.kt)("h3",{id:"install-kubewarden"},"Install Kubewarden"),(0,i.kt)("p",null,"Within your cluster a new menu item will appear in the side-menu for Kubewarden, this dashboard page will guide you through the installation process by completing some prerequisites."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'During the "App Install" step of the installation wizard, the "Install Kubewarden" button may remain grayed out. If this is the case, just refresh the page and navigate back to this step. ')),(0,i.kt)("h2",{id:"post-installation"},"Post-Installation"),(0,i.kt)("p",null,"After the installation is complete the dashboard page and side menu will contain new items, namely Policy Servers, Cluster Admission Policies, and Admission Policies. From here you can create Policy Servers and Policies to control behavior within your cluster."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Dashboard view")),"\n",(0,i.kt)("img",{alt:"UI Dashboard",src:a(50515).Z,width:"1296",height:"872"})),(0,i.kt)("h3",{id:"enabling-the-default-policy-server-and-policies"},"Enabling the default Policy Server and policies"),(0,i.kt)("p",null,'Within the dashboard page you can follow the "Install Chart" button to install the ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/helm-charts/tree/main/charts/kubewarden-defaults"},(0,i.kt)("inlineCode",{parentName:"a"},"kubewarden-defaults"))," Helm chart, which includes the default Policy Server and a few currated policies."),(0,i.kt)("p",null,"After installing the chart you can view the default Policy Server details with the related policies in a sortable table.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Policy Server detail view")),"\n",(0,i.kt)("img",{alt:"UI PolicyServer Detail",src:a(69614).Z,width:"1297",height:"872"})),(0,i.kt)("h3",{id:"creating-policies"},"Creating Policies"),(0,i.kt)("p",null,'When creating policies you will initially be given a "Custom Policy" option from the Policy Grid. Provide the required information for your policy\'s Name, Module, and Rules.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Creating a custom policy")),"\n",(0,i.kt)("img",{alt:"UI Policy Whitelist",src:a(68170).Z,width:"1064",height:"621"})),(0,i.kt)("p",null,"If you wish to leverage policies from ",(0,i.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/search?kind=13"},"ArtifactHub")," you will need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"artifacthub.io")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"management.cattle.io.settings/whitelist-domain"),' setting. This allows your Rancher instance to retieve package information from ArtifactHub. Use the "Add ArtifactHub To Whitelist" button to automatically add the domain, the Policy Grid will refresh with the fetched policies.  '),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ArtifactHub whitelist banner")),"\n",(0,i.kt)("img",{alt:"UI Policy Whitelist",src:a(20329).Z,width:"1064",height:"547"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Policy Grid")),"\n",(0,i.kt)("img",{alt:"UI Policy Create",src:a(75379).Z,width:"1044",height:"770"})),(0,i.kt)("h3",{id:"additional-features"},"Additional Features"),(0,i.kt)("p",null,"For installing additional features, follow the instructions in these docs to include ",(0,i.kt)("a",{parentName:"p",href:"/next/operator-manual/ui-extension/metrics"},"Metrics")," or ",(0,i.kt)("a",{parentName:"p",href:"/next/operator-manual/ui-extension/tracing"},"Tracing"),"."),(0,i.kt)("h2",{id:"airgap-installation"},"Airgap Installation"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This requires Rancher Manager version ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.8.0")," or greater.")),(0,i.kt)("p",null,"As Kubewarden is considered a Rancher Official Extension, the Rancher team provides a mechanism to automatically generate an Extension Catalog Image.\nThis will be added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-images.txt")," file when ",(0,i.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images#1-find-the-required-assets-for-your-rancher-version"},"installing Rancher Manager")," for air-gapped instances."),(0,i.kt)("p",null,"Once this image has been mirrored to a registry that is accessible to your air-gapped cluster, you will be able to import the image within the Rancher UI.\nThis creates a local Helm repository with the Kubewarden UI chart for installation."),(0,i.kt)("h3",{id:"installation-steps"},"Installation Steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"Create")," a registry secret within the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-ui-plugin-system")," namespace. Enter the domain of the image address in the ",(0,i.kt)("strong",{parentName:"p"},"Registry Domain Name")," field.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate back to the ",(0,i.kt)("strong",{parentName:"p"},"Extensions")," page (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"https://cluster-ip/dashboard/c/local/uiplugins"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the top right, click ",(0,i.kt)("strong",{parentName:"p"},"\u22ee > Manage Extension Catalogs"),".\n",(0,i.kt)("img",{alt:"Manage Catalogs",src:a(11966).Z,width:"1073",height:"378"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("strong",{parentName:"p"},"Import Extension Catalog")," button.\n",(0,i.kt)("img",{alt:"Import Catalogs",src:a(90456).Z,width:"1073",height:"378"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the image address in the ",(0,i.kt)("strong",{parentName:"p"},"Catalog Image Reference")," field.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the secret you just created from the ",(0,i.kt)("strong",{parentName:"p"},"Pull Secrets")," drop-down menu.\n",(0,i.kt)("img",{alt:"Enter Catalog Info",src:a(40542).Z,width:"1073",height:"686"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Load"),". The extension will now be ",(0,i.kt)("strong",{parentName:"p"},"Pending"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Return to the ",(0,i.kt)("strong",{parentName:"p"},"Extensions")," page.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("strong",{parentName:"p"},"Available")," tab, and click the ",(0,i.kt)("strong",{parentName:"p"},"Reload")," button to make sure that the list of extensions is up to date.\n",(0,i.kt)("img",{alt:"Install Kubewarden",src:a(54114).Z,width:"1072",height:"415"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find the Kubewarden extension you just added, and click the ",(0,i.kt)("strong",{parentName:"p"},"Install")," button."))))}u.isMDXComponent=!0},11966:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ui_airgap_01-d2d985fb2d021f60e51235c3e55f3cf0.png"},90456:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ui_airgap_02-2f84bdc1364088548a92710a9a8dc0dc.png"},40542:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ui_airgap_03-5b0f099f8c3ebe39464b851759a1b2bf.png"},54114:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ui_airgap_04-e7cee3594dfe929b482c5299294d9f42.png"},50515:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ui_dashboard-489129d9a23bc2ee68a6599f2b718efc.png"},75379:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ui_policy_create-101744e29dec0f22f4aab58f9fe17eb4.png"},68170:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ui_policy_custom-8317c1b00a8abce560225581cfb2756f.png"},20329:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ui_policy_whitelist-66c6307489b7636e59bbbc5348d29d35.png"},69614:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ui_policyserver_detail-c8fed6f264fd351f7ca84a0041239bd6.png"}}]);