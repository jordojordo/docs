"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1756],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(t),u=r,m=c["".concat(l,".").concat(u)]||c[u]||g[u]||a;return t?i.createElement(m,s(s({ref:n},p),{},{components:t})):i.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<a;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},45842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(87462),r=(t(67294),t(3905));const a={sidebar_label:"Define Policy Settings",title:""},s="Defining policy settings",o={unversionedId:"writing-policies/go/policy-settings",id:"version-1.7/writing-policies/go/policy-settings",title:"",description:"As a first step we will define the structure that holds the policy settings.",source:"@site/versioned_docs/version-1.7/writing-policies/go/03-policy-settings.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/policy-settings",permalink:"/1.7/writing-policies/go/policy-settings",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/go/03-policy-settings.md",tags:[],version:"1.7",lastUpdatedAt:1701461294,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Define Policy Settings",title:""},sidebar:"docs",previous:{title:"Create a New Policy",permalink:"/1.7/writing-policies/go/scaffold"},next:{title:"Write the Validation Logic",permalink:"/1.7/writing-policies/go/validation"}},l={},d=[{value:"Building <code>Settings</code> instances",id:"building-settings-instances",level:2},{value:"Implementing <code>Settings</code> validation",id:"implementing-settings-validation",level:2},{value:"Testing the settings code",id:"testing-the-settings-code",level:2}],p={toc:d},c="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"defining-policy-settings"},"Defining policy settings"),(0,r.kt)("p",null,"As a first step we will define the structure that holds the policy settings."),(0,r.kt)("p",null,"We will do that by adding this code inside of the ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.go")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "encoding/json"\n    "fmt"\n    "regexp"\n\n    mapset "github.com/deckarep/golang-set/v2"\n    kubewarden "github.com/kubewarden/policy-sdk-go"\n    kubewarden_protocol "github.com/kubewarden/policy-sdk-go/protocol"\n)\n\ntype Settings struct {\n    DeniedLabels      mapset.Set[string]        `json:"denied_labels"`\n    ConstrainedLabels map[string]*RegularExpression `json:"constrained_labels"`\n}\n\ntype RegularExpression struct {\n    *regexp.Regexp\n}\n')),(0,r.kt)("p",null,"As you can see we're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"regexp")," package to handle regular expression objects and\nwe use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/deckarep/golang-set"},(0,r.kt)("inlineCode",{parentName:"a"},"mapset.Set"))," type to store\nthe list of denied labels."),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"regexp.Regexp")," doesn't handle deserialization, we need to define a custom type to handle marshaling and unmarshalling of regular expressions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// UnmarshalText satisfies the encoding.TextMarshaler interface,\n// also used by json.Unmarshal.\nfunc (r *RegularExpression) UnmarshalText(text []byte) error {\n    nativeRegExp, err := regexp.Compile(string(text))\n    if err != nil {\n        return err\n    }\n    r.Regexp = nativeRegExp\n    return nil\n}\n\n// MarshalText satisfies the encoding.TextMarshaler interface,\n// also used by json.Marshal.\nfunc (r *RegularExpression) MarshalText() ([]byte, error) {\n    if r.Regexp != nil {\n        return []byte(r.Regexp.String()), nil\n    }\n\n    return nil, nil\n}\n")),(0,r.kt)("p",null,"Also, we define the ",(0,r.kt)("inlineCode",{parentName:"p"},"UnmarshalJSON")," method to handle the deserialization of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," struct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func (s *Settings) UnmarshalJSON(data []byte) error {\n    rawSettings := struct {\n        DeniedLabels      []string          `json:"denied_labels"`\n        ConstrainedLabels map[string]*RegularExpression `json:"constrained_labels"`\n    }{}\n\n    err := json.Unmarshal(data, &rawSettings)\n    if err != nil {\n        return err\n    }\n\n    s.DeniedLabels = mapset.NewThreadUnsafeSet[string](rawSettings.DeniedLabels...)\n    s.ConstrainedLabels = rawSettings.ConstrainedLabels\n\n    return nil\n}\n')),(0,r.kt)("h2",{id:"building-settings-instances"},"Building ",(0,r.kt)("inlineCode",{parentName:"h2"},"Settings")," instances"),(0,r.kt)("p",null,"A Kubewarden policy exposes two different functions that receive the\npolicy settings as input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"validate"),": This is the function that is invoked every time some Kubernetes\nobject has to be validated by the policy. The settings are received as part\nof the ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/kubewarden/policy-sdk-go@v0.2.1/protocol#ValidationRequest"},(0,r.kt)("inlineCode",{parentName:"a"},"ValidationRequest")),"\nobject"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"validate_settings"),": This function is called only when the policy is first\nloaded by Kubewarden. The function receives the policy settings as input and\nensures their validity.")),(0,r.kt)("p",null,"We will create a helper function that creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," object starting\nfrom the JSON payload:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func NewSettingsFromValidationReq(validationReq *kubewarden_protocol.ValidationRequest) (Settings, error) {\n    settings := Settings{}\n    err := json.Unmarshal(validationReq.Settings, &settings)\n    if err != nil {\n        return Settings{}, err\n    }\n\n    return settings, nil\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All the ",(0,r.kt)("inlineCode",{parentName:"p"},"mapset.Set")," objects are deliberately created using\ntheir ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/deckarep/golang-set?utm_source=godoc#NewThreadUnsafeSet"},"thread-unsafe variant"),".\nThe WebAssembly code is executed in a single thread, hence there are no\nconcurrency issues."),(0,r.kt)("p",{parentName:"admonition"},"Moreover, the WebAssembly standard doesn't cover\nthreads yet. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/threads"},"the official proposal"),"\nfor more details.")),(0,r.kt)("h2",{id:"implementing-settings-validation"},"Implementing ",(0,r.kt)("inlineCode",{parentName:"h2"},"Settings")," validation"),(0,r.kt)("p",null,"All Kubewarden policies have to implement\n",(0,r.kt)("a",{parentName:"p",href:"/1.7/writing-policies/#the-validate_settings-entry-point"},"settings validation"),"."),(0,r.kt)("p",null,"This can be easily done by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"Valid")," method to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," instances:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func (s *Settings) Valid() (bool, error) {\n    constrainedLabels := mapset.NewThreadUnsafeSet[string]()\n\n    for label := range s.ConstrainedLabels {\n        constrainedLabels.Add(label)\n    }\n\n    constrainedAndDenied := constrainedLabels.Intersect(s.DeniedLabels)\n    if constrainedAndDenied.Cardinality() != 0 {\n        return false,\n            fmt.Errorf("These labels cannot be constrained and denied at the same time: %v", constrainedAndDenied)\n    }\n\n    return true, nil\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Valid"),' method ensures no "denied" label is also part of the "constrained" map. The check\nis simplified by the usage of the ',(0,r.kt)("inlineCode",{parentName:"p"},"Intersect")," method provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"mapset.Set"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Valid")," method is invoked against an already instantiated ",(0,r.kt)("inlineCode",{parentName:"p"},"Setting")," object. That means\nthe validation of the regular expression provided by the user already took place\ninside of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," unmarshaller.")),(0,r.kt)("p",null,"Finally, we have to ensure the ",(0,r.kt)("inlineCode",{parentName:"p"},"validateSettings")," function that was automatically generated\nis changed to look like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func validateSettings(payload []byte) ([]byte, error) {\n    settings := Settings{}\n    err := json.Unmarshal(payload, &settings)\n    if err != nil {\n        return kubewarden.RejectSettings(\n            kubewarden.Message(fmt.Sprintf("Provided settings are not valid: %v", err)))\n    }\n\n    valid, err := settings.Valid()\n    if valid {\n        return kubewarden.AcceptSettings()\n    }\n\n    return kubewarden.RejectSettings(\n        kubewarden.Message(fmt.Sprintf("Provided settings are not valid: %v", err)))\n}\n')),(0,r.kt)("p",null,"As you can see, the function takes advantage of the helper functions provided\nby ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/policy-sdk-go"},"Kubewarden's SDK"),"."),(0,r.kt)("h2",{id:"testing-the-settings-code"},"Testing the settings code"),(0,r.kt)("p",null,"As always, it's important to have good test coverage of the code we write.\nThe code we generated comes with a series of unit tests defined inside of\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"settings_test.go")," file."),(0,r.kt)("p",null,"We will have to change the contents of this file to reflect the new behaviour of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," class."),(0,r.kt)("p",null,"We will start by including the Go packages we will use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "testing"\n\n    "encoding/json"\n\n    kubewarden_protocol "github.com/kubewarden/policy-sdk-go/protocol"\n)\n')),(0,r.kt)("p",null,"We will start by writing a unit test that ensures we can allocate a ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings"),"\ninstance from a ",(0,r.kt)("a",{parentName:"p",href:"/1.7/writing-policies/#the-validationrequest-object"},(0,r.kt)("inlineCode",{parentName:"a"},"ValidationRequest")),"\nobject:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func TestParseValidSettings(t *testing.T) {\n    settingsJSON := []byte(`\n        {\n            "denied_labels": [ "foo", "bar" ],\n            "constrained_labels": {\n                    "cost-center": "cc-\\\\d+"\n            }\n        }`)\n\n    settings := Settings{}\n    err := json.Unmarshal(settingsJSON, &settings)\n    if err != nil {\n        t.Errorf("Unexpected error %+v", err)\n    }\n\n    expected_denied_labels := []string{"foo", "bar"}\n    for _, exp := range expected_denied_labels {\n        if !settings.DeniedLabels.Contains(exp) {\n            t.Errorf("Missing value %s", exp)\n        }\n    }\n\n    re, found := settings.ConstrainedLabels["cost-center"]\n    if !found {\n        t.Error("Didn\'t find the expected constrained label")\n    }\n\n    expected_regexp := `cc-\\d+`\n    if re.String() != expected_regexp {\n        t.Errorf("Expected regexp to be %v - got %v instead",\n            expected_regexp, re.String())\n    }\n}\n')),(0,r.kt)("p",null,"Next we will define a test that ensures a ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," instance\ncannot be generated when the user provides a broken regular\nexpression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func TestParseSettingsWithInvalidRegexp(t *testing.T) {\n    settingsJSON := []byte(`\n        {\n            "denied_labels": [ "foo", "bar" ],\n            "constrained_labels": {\n                    "cost-center": "cc-[a+"\n            }\n        }`)\n\n    err := json.Unmarshal(settingsJSON, &Settings{})\n    if err == nil {\n        t.Errorf("Didn\'g get expected error")\n    }\n}\n')),(0,r.kt)("p",null,"Next we will define a test that checks the behaviour\nof the ",(0,r.kt)("a",{parentName:"p",href:"/1.7/writing-policies/#the-validate_settings-entry-point"},(0,r.kt)("inlineCode",{parentName:"a"},"validate_settings")),"\nentry-point."),(0,r.kt)("p",null,"In this case, we actually look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"SettingsValidationResponse")," object\nreturned by our ",(0,r.kt)("inlineCode",{parentName:"p"},"validateSettings")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func TestDetectValidSettings(t *testing.T) {\n    settingsJSON := []byte(`\n    {\n        "denied_labels": [ "foo", "bar" ],\n        "constrained_labels": {\n            "cost-center": "cc-\\\\d+"\n        }\n    }`)\n\n    responsePayload, err := validateSettings(settingsJSON)\n    if err != nil {\n        t.Errorf("Unexpected error %+v", err)\n    }\n\n    var response kubewarden_protocol.SettingsValidationResponse\n    if err := json.Unmarshal(responsePayload, &response); err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    if !response.Valid {\n        t.Errorf("Expected settings to be valid: %s", *response.Message)\n    }\n}\n')),(0,r.kt)("p",null,"Finally, we write two more tests to ensure the ",(0,r.kt)("inlineCode",{parentName:"p"},"validateSettings")," function\nrejects invalid settings with the right messages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func TestDetectNotValidSettingsDueToBrokenRegexp(t *testing.T) {\n    settingsJSON := []byte(`\n    {\n        "denied_labels": [ "foo", "bar" ],\n        "constrained_labels": {\n            "cost-center": "cc-[a+"\n        }\n    }\n    `)\n\n    responsePayload, err := validateSettings(settingsJSON)\n    if err != nil {\n        t.Errorf("Unexpected error %+v", err)\n    }\n\n    var response kubewarden_protocol.SettingsValidationResponse\n    if err := json.Unmarshal(responsePayload, &response); err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    if response.Valid {\n        t.Error("Expected settings to not be valid")\n    }\n\n    if *response.Message != "Provided settings are not valid: error parsing regexp: missing closing ]: `[a+`" {\n        t.Errorf("Unexpected validation error message: %s", *response.Message)\n    }\n}\n\nfunc TestDetectNotValidSettingsDueToConflictingLabels(t *testing.T) {\n    settingsJSON := []byte(`\n    {\n        "denied_labels": [ "foo", "bar", "cost-center" ],\n        "constrained_labels": {\n            "cost-center": ".*"\n        }\n    }`)\n    responsePayload, err := validateSettings(settingsJSON)\n    if err != nil {\n        t.Errorf("Unexpected error %+v", err)\n    }\n\n    var response kubewarden_protocol.SettingsValidationResponse\n    if err := json.Unmarshal(responsePayload, &response); err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    if response.Valid {\n        t.Error("Expected settings to not be valid")\n    }\n\n    if *response.Message != "Provided settings are not valid: These labels cannot be constrained and denied at the same time: Set{cost-center}" {\n        t.Errorf("Unexpected validation error message: %s", *response.Message)\n    }\n}\n')),(0,r.kt)("p",null,"Now we can run the test by using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go test -v settings.go settings_test.go\n")),(0,r.kt)("p",null,"All the tests will pass with the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"=== RUN   TestParseValidSettings\n--- PASS: TestParseValidSettings (0.00s)\n=== RUN   TestParseSettingsWithInvalidRegexp\n--- PASS: TestParseSettingsWithInvalidRegexp (0.00s)\n=== RUN   TestDetectValidSettings\n--- PASS: TestDetectValidSettings (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToBrokenRegexp\n--- PASS: TestDetectNotValidSettingsDueToBrokenRegexp (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToConflictingLabels\n--- PASS: TestDetectNotValidSettingsDueToConflictingLabels (0.00s)\nPASS\nok      command-line-arguments  0.002s\n")),(0,r.kt)("p",null,"We can now move to implement the actual validation code."))}g.isMDXComponent=!0}}]);