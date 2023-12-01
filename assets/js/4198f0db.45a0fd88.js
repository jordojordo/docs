"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[5904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,g=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_label:"Validate doing JSON queries",title:""},o="Validate by doing JSON queries",l={unversionedId:"writing-policies/go/validation-with-queries",id:"version-1.8/writing-policies/go/validation-with-queries",title:"",description:"In the previous section, we have shown how to write a validation policy",source:"@site/versioned_docs/version-1.8/writing-policies/go/09-validation-with-queries.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/validation-with-queries",permalink:"/1.8/writing-policies/go/validation-with-queries",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/writing-policies/go/09-validation-with-queries.md",tags:[],version:"1.8",lastUpdatedAt:1701461294,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:9,frontMatter:{sidebar_label:"Validate doing JSON queries",title:""},sidebar:"docs",previous:{title:"Distributing Policy",permalink:"/1.8/writing-policies/go/distribute"},next:{title:"Introduction to Rego",permalink:"/1.8/writing-policies/rego/intro-rego"}},s={},d=[{value:"The <code>validate</code> function",id:"the-validate-function",level:2},{value:"Testing the validation code",id:"testing-the-validation-code",level:2},{value:"End to end tests",id:"end-to-end-tests",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"validate-by-doing-json-queries"},"Validate by doing JSON queries"),(0,i.kt)("p",null,"In the previous section, we have shown how to write a ",(0,i.kt)("a",{parentName:"p",href:"validation"},"validation policy"),"\npolicy by using Go types that describe Kubernetes objects."),(0,i.kt)("p",null,"There is however another way to write validation logic: by extracting the\nrelevant data from the JSON document using ad-hoc queries."),(0,i.kt)("p",null,"This ",(0,i.kt)("em",{parentName:"p"},'"jq-like"')," approach can be pretty handy when the policy has to look\ndeep inside a Kubernetes object. This is especially helpful when dealing with\ninner objects that are optional."),(0,i.kt)("p",null,"This section of the document reimplements the previous code by doing JSON queries\ninstead of unmarshaling the JSON payload into native Go types."),(0,i.kt)("h2",{id:"the-validate-function"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"validate")," function"),(0,i.kt)("p",null,"We will use the policy we just created and change its ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," function to not\nuse the Go types that define Kubernetes objects."),(0,i.kt)("p",null,"We will instead use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tidwall/gjson"},(0,i.kt)("inlineCode",{parentName:"a"},"gjson"))," library to\nextract data from the raw JSON object."),(0,i.kt)("p",null,"First of all, we have to change the requirement section. This is how the code\nhas to look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "encoding/json"\n    "fmt"\n\n    mapset "github.com/deckarep/golang-set/v2"\n    kubewarden "github.com/kubewarden/policy-sdk-go"\n    kubewarden_protocol "github.com/kubewarden/policy-sdk-go/protocol"\n    "github.com/tidwall/gjson"\n)\n')),(0,i.kt)("p",null,"The validation function has to be changed to look like that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func validate(payload []byte) ([]byte, error) {\n    // Create a ValidationRequest instance from the incoming payload\n    validationRequest := kubewarden_protocol.ValidationRequest{}\n    err := json.Unmarshal(payload, &validationRequest)\n    if err != nil {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(err.Error()),\n            kubewarden.Code(400))\n    }\n\n    // Create a Settings instance from the ValidationRequest object\n    settings, err := NewSettingsFromValidationReq(&validationRequest)\n    if err != nil {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(err.Error()),\n            kubewarden.Code(400))\n    }\n\n    // Access the **raw** JSON that describes the object\n    podJSON := validationRequest.Request.Object\n\n    // highlight-next-line\n    // NOTE 1\n    data := gjson.GetBytes(\n        podJSON,\n        "metadata.labels")\n\n    var validationErr error\n    labels := mapset.NewThreadUnsafeSet[string]()\n    data.ForEach(func(key, value gjson.Result) bool {\n        // highlight-next-line\n        // NOTE 2\n        label := key.String()\n        labels.Add(label)\n\n        // highlight-next-line\n        // NOTE 3\n        validationErr = validateLabel(label, value.String(), &settings)\n\n        // keep iterating if there are no errors\n        return validationErr == nil\n    })\n\n    // highlight-next-line\n    // NOTE 4\n    if validationErr != nil {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(validationErr.Error()),\n            kubewarden.NoCode)\n    }\n\n    // highlight-next-line\n    // NOTE 5\n    for requiredLabel := range settings.ConstrainedLabels {\n        if !labels.Contains(requiredLabel) {\n            return kubewarden.RejectRequest(\n                kubewarden.Message(fmt.Sprintf("Constrained label %s not found inside of Pod", requiredLabel)),\n                kubewarden.NoCode)\n        }\n    }\n\n    return kubewarden.AcceptRequest()\n}\n')),(0,i.kt)("p",null,"The initial part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," function is similar to the previous one. Things\nstart to change only as soon as we reach the ",(0,i.kt)("inlineCode",{parentName:"p"},"NOTE")," sections.\nLet's get through them:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We use a ",(0,i.kt)("inlineCode",{parentName:"li"},"gjson")," selector to get the ",(0,i.kt)("inlineCode",{parentName:"li"},"label")," map provided by the object\nembedded into the request"),(0,i.kt)("li",{parentName:"ol"},"We use a ",(0,i.kt)("inlineCode",{parentName:"li"},"gjson")," helper to iterate over the results of the query. If the query\nhas no results the loop will never take place."),(0,i.kt)("li",{parentName:"ol"},"We use the ",(0,i.kt)("inlineCode",{parentName:"li"},"validateLabel")," function to validate the label and its value, like\nwe did before. We're also adding the labels found inside of the Pod to a\n",(0,i.kt)("inlineCode",{parentName:"li"},"mapset.Set")," that we previously defined."),(0,i.kt)("li",{parentName:"ol"},"If the validation produced an error, we immediately return with a validation\nrejection reply."),(0,i.kt)("li",{parentName:"ol"},"Like before, we iterate over the ",(0,i.kt)("inlineCode",{parentName:"li"},"constrainedLabels")," to make sure all of them\nhave been specified inside of the Pod. The code has been slightly changed\nto make use of the ",(0,i.kt)("inlineCode",{parentName:"li"},"mapset.Set")," object we previously populated.")),(0,i.kt)("h2",{id:"testing-the-validation-code"},"Testing the validation code"),(0,i.kt)("p",null,"The unit tests do not need any change, we can run them like before:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"make test\n")),(0,i.kt)("p",null,"All of them are working as expected:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go test -v\n=== RUN   TestParseValidSettings\n--- PASS: TestParseValidSettings (0.00s)\n=== RUN   TestParseSettingsWithInvalidRegexp\n--- PASS: TestParseSettingsWithInvalidRegexp (0.00s)\n=== RUN   TestDetectValidSettings\n--- PASS: TestDetectValidSettings (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToBrokenRegexp\n--- PASS: TestDetectNotValidSettingsDueToBrokenRegexp (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToConflictingLabels\n--- PASS: TestDetectNotValidSettingsDueToConflictingLabels (0.00s)\n=== RUN   TestValidateLabel\n--- PASS: TestValidateLabel (0.00s)\nPASS\nok      github.com/kubewarden/go-policy-template    0.002s\n")),(0,i.kt)("h2",{id:"end-to-end-tests"},"End to end tests"),(0,i.kt)("p",null,"End to end test need no changes at all. Let's run them to ensure they\nare still green:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"make e2e-tests\n")),(0,i.kt)("p",null,"This is the output we will get:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"bats e2e.bats\ne2e.bats\n \u2713 accept when no settings are provided\n \u2713 accept because label is satisfying a constraint\n \u2713 accept labels are not on deny list\n \u2713 reject because label is on deny list\n \u2713 reject because label is not satisfying a constraint\n \u2713 reject because constrained label is missing\n \u2713 fail settings validation because of conflicting labels\n \u2713 fail settings validation because of invalid constraint\n\n8 tests, 0 failures\n")),(0,i.kt)("p",null,"Again, all the tests are working as expected."))}p.isMDXComponent=!0}}]);