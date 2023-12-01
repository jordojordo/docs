"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[6447],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),d=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),g=i,h=c["".concat(r,".").concat(g)]||c[g]||u[g]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=g;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<s;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},73047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const s={sidebar_label:"Write the Validation Logic",title:""},o="Writing the validation logic",l={unversionedId:"writing-policies/go/validation",id:"version-1.7/writing-policies/go/validation",title:"",description:"It's now time to write the actual validation logic. This is done",source:"@site/versioned_docs/version-1.7/writing-policies/go/04-validation.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/validation",permalink:"/1.7/writing-policies/go/validation",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/go/04-validation.md",tags:[],version:"1.7",lastUpdatedAt:1701461294,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Write the Validation Logic",title:""},sidebar:"docs",previous:{title:"Define Policy Settings",permalink:"/1.7/writing-policies/go/policy-settings"},next:{title:"End-to-end testing",permalink:"/1.7/writing-policies/go/e2e-tests"}},r={},d=[{value:"The <code>validate</code> function",id:"the-validate-function",level:2},{value:"Testing the validation code",id:"testing-the-validation-code",level:2},{value:"Fix the broken unit test",id:"fix-the-broken-unit-test",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"writing-the-validation-logic"},"Writing the validation logic"),(0,i.kt)("p",null,"It's now time to write the actual validation logic. This is done\ninside of the ",(0,i.kt)("inlineCode",{parentName:"p"},"validate.go")," file."),(0,i.kt)("p",null,"The validation logic needs to extract the relevant information\nfrom the incoming ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," object and then, based on the input\nand the policy settings, return a response."),(0,i.kt)("p",null,"The incoming payload is a JSON object (as described ",(0,i.kt)("a",{parentName:"p",href:"../spec/validating-policies"},"here"),") and\nthe relevant data can be extracted from it in two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Unmarshal the JSON data into native Go types"),(0,i.kt)("li",{parentName:"ol"},"Perform JSON queries (something similar to ",(0,i.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},(0,i.kt)("inlineCode",{parentName:"a"},"jq")),")")),(0,i.kt)("p",null,"This section of the documentation focuses on the first approach: relying on native\nGo types. The second approach is described ",(0,i.kt)("a",{parentName:"p",href:"validation-with-queries"},"later"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Relying on Kubernetes objects instead of doing jq-like searches\nleads to bigger WebAssembly modules being produced.\nA policy using Kubernetes objects can be around 1.5 Mb versus the 300 Kb of\na policy that uses gjson."),(0,i.kt)("p",{parentName:"admonition"},"Leaving the WebAssembly module dimension aside, the policy using Kubernetes\nobjects will take significantly more time during its first execution.\nSubsequent invocations will be fast because Kubewarden leverages Wasmtime's\ncache feature.\nThe first execution can take approximatively 21 seconds with kwctl, later executions\ntake close to 1.5 seconds.\nKubewarden Policy Server will just have a slower start-up time, policy evaluation times are not going to be affected by the usage of Kubernetes objects.")),(0,i.kt)("h2",{id:"the-validate-function"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"validate")," function"),(0,i.kt)("p",null,"The scaffolded policy already has a ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," function and we will need to make\nvery few changes to it."),(0,i.kt)("p",null,"This is how the function has to look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func validate(payload []byte) ([]byte, error) {\n    // highlight-next-line\n    // NOTE 1\n    // Create a ValidationRequest instance from the incoming payload\n    validationRequest := kubewarden_protocol.ValidationRequest{}\n    err := json.Unmarshal(payload, &validationRequest)\n    if err != nil {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(err.Error()),\n            kubewarden.Code(400))\n    }\n\n    // highlight-next-line\n    // NOTE 2\n    // Create a Settings instance from the ValidationRequest object\n    settings, err := NewSettingsFromValidationReq(&validationRequest)\n    if err != nil {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(err.Error()),\n            kubewarden.Code(400))\n    }\n\n    // highlight-next-line\n    // NOTE 3\n    // Access the **raw** JSON that describes the object\n    podJSON := validationRequest.Request.Object\n\n    // highlight-next-line\n    // NOTE 4\n    // Try to create a Pod instance using the RAW JSON we got from the\n    // ValidationRequest.\n    pod := &corev1.Pod{}\n    if err := json.Unmarshal([]byte(podJSON), pod); err != nil {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(\n                fmt.Sprintf("Cannot decode Pod object: %s", err.Error())),\n            kubewarden.Code(400))\n    }\n\n    logger.DebugWithFields("validating pod object", func(e onelog.Entry) {\n        e.String("name", pod.Metadata.Name)\n        e.String("namespace", pod.Metadata.Namespace)\n    })\n\n    // highlight-next-line\n    // NOTE 5\n    for label, value := range pod.Metadata.Labels {\n        if err := validateLabel(label, value, &settings); err != nil {\n            return kubewarden.RejectRequest(\n                kubewarden.Message(err.Error()),\n                kubewarden.NoCode)\n        }\n    }\n\n    return kubewarden.AcceptRequest()\n}\n')),(0,i.kt)("p",null,"The code has some ",(0,i.kt)("inlineCode",{parentName:"p"},"NOTE")," sections inside of it, let's get through them:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We create a ",(0,i.kt)("inlineCode",{parentName:"li"},"kubewarden_protocol.ValidationRequest")," by unmarshaling the\nJSON payload"),(0,i.kt)("li",{parentName:"ol"},"We create a ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," object by using the function we previously defined\ninside of the ",(0,i.kt)("inlineCode",{parentName:"li"},"settings.go")," file."),(0,i.kt)("li",{parentName:"ol"},"We access the raw JSON representation of the Pod that is part of the ",(0,i.kt)("inlineCode",{parentName:"li"},"ValidationRequest"),"."),(0,i.kt)("li",{parentName:"ol"},"We unmarshal the Pod object"),(0,i.kt)("li",{parentName:"ol"},"We iterate over the labels of the Pod. We use a new function called ",(0,i.kt)("inlineCode",{parentName:"li"},"validateLabel"),"\nto identify labels that are violating the policy")),(0,i.kt)("p",null,"Let's define the ",(0,i.kt)("inlineCode",{parentName:"p"},"validateLabel")," function at the bottom of the ",(0,i.kt)("inlineCode",{parentName:"p"},"validate.go")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func validateLabel(label, value string, settings *Settings) error {\n    if settings.DeniedLabels.Contains(label) {\n        return fmt.Errorf("Label %s is on the deny list", label)\n    }\n\n    regExp, found := settings.ConstrainedLabels[label]\n    if found {\n        // This is a constrained label\n        if !regExp.Match([]byte(value)) {\n            return fmt.Errorf("The value of %s doesn\'t pass user-defined constraint", label)\n        }\n    }\n\n    return nil\n}\n')),(0,i.kt)("h2",{id:"testing-the-validation-code"},"Testing the validation code"),(0,i.kt)("p",null,"It's now time to write some unit tests to ensure the validation code is behaving\nproperly. These tests are going to be located inside of the ",(0,i.kt)("inlineCode",{parentName:"p"},"validate_test.go"),"\nfile."),(0,i.kt)("p",null,"We will replace the contents of the generated file to match the following\nones:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "regexp"\n    "testing"\n\n    "encoding/json"\n\n    mapset "github.com/deckarep/golang-set/v2"\n    corev1 "github.com/kubewarden/k8s-objects/api/core/v1"\n    metav1 "github.com/kubewarden/k8s-objects/apimachinery/pkg/apis/meta/v1"\n    kubewarden_protocol "github.com/kubewarden/policy-sdk-go/protocol"\n    kubewarden_testing "github.com/kubewarden/policy-sdk-go/testing"\n)\n\nfunc TestValidateLabel(t *testing.T) {\n    // highlight-next-line\n    // NOTE 1\n    cases := []struct {\n        podLabels         map[string]string\n        deniedLabels      mapset.Set[string]\n        constrainedLabels map[string]*RegularExpression\n        expectedIsValid   bool\n    }{\n        {\n            // highlight-next-line\n            // Pod has no labels -> should be accepted\n            podLabels:         map[string]string{},\n            deniedLabels:      mapset.NewThreadUnsafeSet[string]("owner"),\n            constrainedLabels: map[string]*RegularExpression{},\n            expectedIsValid:   true,\n        },\n        {\n            // highlight-next-line\n            // Pod has labels, none is denied -> should be accepted\n            podLabels: map[string]string{\n                "hello": "world",\n            },\n            deniedLabels:      mapset.NewThreadUnsafeSet[string]("owner"),\n            constrainedLabels: map[string]*RegularExpression{},\n            expectedIsValid:   true,\n        },\n        {\n            // highlight-next-line\n            // Pod has labels, one is denied -> should be rejected\n            podLabels: map[string]string{\n                "hello": "world",\n            },\n            deniedLabels:      mapset.NewThreadUnsafeSet[string]("hello"),\n            constrainedLabels: map[string]*RegularExpression{},\n            expectedIsValid:   false,\n        },\n        {\n            // highlight-next-line\n            // Pod has labels, one has constraint that is respected -> should be accepted\n            podLabels: map[string]string{\n                "cc-center": "team-123",\n            },\n            deniedLabels: mapset.NewThreadUnsafeSet[string]("hello"),\n            constrainedLabels: map[string]*RegularExpression{\n                "cc-center": {\n                    Regexp: regexp.MustCompile(`team-\\d+`),\n                },\n            },\n            expectedIsValid: true,\n        },\n        {\n            // highlight-next-line\n            // Pod has labels, one has constraint that are not respected -> should be rejected\n            podLabels: map[string]string{\n                "cc-center": "team-kubewarden",\n            },\n            deniedLabels: mapset.NewThreadUnsafeSet[string]("hello"),\n            constrainedLabels: map[string]*RegularExpression{\n                "cc-center": {\n                    Regexp: regexp.MustCompile(`team-\\d+`),\n                },\n            },\n            expectedIsValid: false,\n        },\n        {\n            // highlight-next-line\n            // Settings have a constraint, pod doesn\'t have this label -> should be rejected\n            podLabels: map[string]string{\n                "owner": "team-kubewarden",\n            },\n            deniedLabels: mapset.NewThreadUnsafeSet[string]("hello"),\n            constrainedLabels: map[string]*RegularExpression{\n                "cc-center": {\n                    Regexp: regexp.MustCompile(`team-\\d+`),\n                },\n            },\n            expectedIsValid: false,\n        },\n    }\n\n    // highlight-next-line\n    // NOTE 2\n    for _, testCase := range cases {\n        settings := Settings{\n            DeniedLabels:      testCase.deniedLabels,\n            ConstrainedLabels: testCase.constrainedLabels,\n        }\n\n        pod := corev1.Pod{\n            Metadata: &metav1.ObjectMeta{\n                Name:      "test-pod",\n                Namespace: "default",\n                Labels:    testCase.podLabels,\n            },\n        }\n\n        payload, err := kubewarden_testing.BuildValidationRequest(&pod, &settings)\n        if err != nil {\n            t.Errorf("Unexpected error: %+v", err)\n        }\n\n        responsePayload, err := validate(payload)\n        if err != nil {\n            t.Errorf("Unexpected error: %+v", err)\n        }\n\n        var response kubewarden_protocol.ValidationResponse\n        if err := json.Unmarshal(responsePayload, &response); err != nil {\n            t.Errorf("Unexpected error: %+v", err)\n        }\n\n        if testCase.expectedIsValid && !response.Accepted {\n            t.Errorf("Unexpected rejection: msg %s - code %d with pod labels: %v, denied labels: %v, constrained labels: %v",\n                *response.Message, *response.Code, testCase.podLabels, testCase.deniedLabels, testCase.constrainedLabels)\n        }\n\n        if !testCase.expectedIsValid && response.Accepted {\n            t.Errorf("Unexpected acceptance with pod labels: %v, denied labels: %v, constrained labels: %v",\n                testCase.podLabels, testCase.deniedLabels, testCase.constrainedLabels)\n        }\n    }\n}\n')),(0,i.kt)("p",null,'The test uses a "test-case driven" approach. We start by defining a ',(0,i.kt)("inlineCode",{parentName:"p"},"struct")," that\nholds the data needed by a test case, see ",(0,i.kt)("inlineCode",{parentName:"p"},"NOTE 1"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"struct {\n        podLabels         map[string]string\n        deniedLabels      mapset.Set[string]\n        constrainedLabels map[string]*RegularExpression\n        expectedIsValid   bool\n}\n")),(0,i.kt)("p",null,"We then declare several test cases, each one is highlighted in the code\nsnippet from above."),(0,i.kt)("p",null,"For example, a Pod that has no labels should always be considered valid. This is tested\nwith these input values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'{\n  podLabels:         map[string]string{},\n  deniedLabels:      mapset.NewThreadUnsafeSet[string]("owner"),\n  constrainedLabels: map[string]*RegularExpression{},\n  expectedIsValid:   true,\n}\n')),(0,i.kt)("p",null,"The test keeps defining new scenarios in this way until we reach ",(0,i.kt)("inlineCode",{parentName:"p"},"NOTE 2"),".\nThis is where we iterate over the different test cases and perform the following code:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"BasicSettings")," object by using the data provided by the ",(0,i.kt)("inlineCode",{parentName:"li"},"testCase")),(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"Pod")," object, assign to it the labels defined inside of the ",(0,i.kt)("inlineCode",{parentName:"li"},"testCase")),(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"payload")," object. This is done using a helper function of the Kubewarden SDK:\n",(0,i.kt)("inlineCode",{parentName:"li"},"kubewarden_testing.BuildValidationRequest"),". This function takes as input the object\nthe request is about (the ",(0,i.kt)("inlineCode",{parentName:"li"},"Pod")," in our case) and the object that describes the settings (the\n",(0,i.kt)("inlineCode",{parentName:"li"},"BasicSettings")," instance in our case)"),(0,i.kt)("li",{parentName:"ol"},"Finally, the code invokes our ",(0,i.kt)("inlineCode",{parentName:"li"},"validate")," function and performs a check against its\noutcome")),(0,i.kt)("p",null,"We can now run all the unit tests, including the one defined inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"settings_test.go"),",\nby using this simple command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"make test\n")),(0,i.kt)("p",null,"This will produce the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'go test -v\n=== RUN   TestParseValidSettings\n--- PASS: TestParseValidSettings (0.00s)\n=== RUN   TestParseSettingsWithInvalidRegexp\n--- PASS: TestParseSettingsWithInvalidRegexp (0.00s)\n=== RUN   TestDetectValidSettings\n--- PASS: TestDetectValidSettings (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToBrokenRegexp\n--- PASS: TestDetectNotValidSettingsDueToBrokenRegexp (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToConflictingLabels\n--- PASS: TestDetectNotValidSettingsDueToConflictingLabels (0.00s)\n=== RUN   TestValidateLabel\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\n    validate_test.go:134: Unexpected acceptance with pod labels: map[owner:team-kubewarden], denied labels: Set{hello}, constrained labels: map[cc-center:team-\\d+]\n--- FAIL: TestValidateLabel (0.00s)\nFAIL\nexit status 1\nFAIL    github.com/kubewarden/go-policy-template        0.003s\nmake: *** [Makefile:29: test] Error 1\n')),(0,i.kt)("p",null,"As we can see all the ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," tests are passing, but there's one test case of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"TestValidateLabel")," that is not:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"validate_test.go:134: Unexpected acceptance with pod labels: map[owner:team-kubewarden], denied labels: Set{hello}, constrained labels: map[cc-center:team-\\d+]\n")),(0,i.kt)("p",null,"In this scenario, our policy settings dictate that Pods must have a label with\na key ",(0,i.kt)("inlineCode",{parentName:"p"},"cc-center")," that satisfies the ",(0,i.kt)("inlineCode",{parentName:"p"},"team-\\d+")," regular expression.\nThe Pod being tested doesn't have this label, hence it should be rejected. This\nisn't happening however."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You might be wondering why the output of the unit tests features\nlines like ",(0,i.kt)("inlineCode",{parentName:"p"},'NATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}')),(0,i.kt)("p",{parentName:"admonition"},"This output is produced by the ",(0,i.kt)("inlineCode",{parentName:"p"},"logger")," statements used inside of the policy. This happens\nonly when the code is run outside of the WebAssembly context. This does not happen when\nthe policy is evaluated by Kubewarden, in that context the ",(0,i.kt)("inlineCode",{parentName:"p"},"logger")," statements will emit\nOpenTelemetry events instead.")),(0,i.kt)("h3",{id:"fix-the-broken-unit-test"},"Fix the broken unit test"),(0,i.kt)("p",null,"To fix the broken test we just discovered we have to make a small change inside\nof our validation function."),(0,i.kt)("p",null,"Currently the core of our validation logic is made by the following lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"for label, value := range pod.Metadata.Labels {\n    if err := validateLabel(label, value, &settings); err != nil {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(err.Error()),\n            kubewarden.NoCode)\n    }\n}\n")),(0,i.kt)("p",null,"Here we iterate over each label to ensure that it is not denied and\nthat it doesn't violate one of the constraints specified by the user.\nHowever, we are not making sure that the Pod has all the labels specified inside\nof the ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings.ConstrainedLabels"),"."),(0,i.kt)("p",null,"Let's add some new code, right after the ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop shown above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'for requiredLabel := range settings.ConstrainedLabels {\n    _, found := pod.Metadata.Labels[requiredLabel]\n    if !found {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(fmt.Sprintf(\n                "Constrained label %s not found inside of Pod",\n                requiredLabel),\n            ),\n            kubewarden.NoCode)\n    }\n}\n')),(0,i.kt)("p",null,"Let's run the unit tests again:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"make test\n")),(0,i.kt)("p",null,"This will produce the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'go test -v\n=== RUN   TestParseValidSettings\n--- PASS: TestParseValidSettings (0.00s)\n=== RUN   TestParseSettingsWithInvalidRegexp\n--- PASS: TestParseSettingsWithInvalidRegexp (0.00s)\n=== RUN   TestDetectValidSettings\n--- PASS: TestDetectValidSettings (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToBrokenRegexp\n--- PASS: TestDetectNotValidSettingsDueToBrokenRegexp (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToConflictingLabels\n--- PASS: TestDetectNotValidSettingsDueToConflictingLabels (0.00s)\n=== RUN   TestValidateLabel\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\n--- PASS: TestValidateLabel (0.00s)\nPASS\nok      github.com/kubewarden/go-policy-template        0.003s\n')),(0,i.kt)("p",null,"As you can see, this time all the tests are passing.\nWe can now move to the next step, write some end-to-end tests."))}u.isMDXComponent=!0}}]);