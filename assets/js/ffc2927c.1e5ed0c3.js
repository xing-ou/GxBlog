"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[979],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=s(n),u=i,m=k["".concat(c,".").concat(u)]||k[u]||g[u]||l;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},24634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return g}});var a=n(83117),i=n(80102),l=(n(67294),n(3905)),r=["components"],o={title:"SwiftUI\u4e13\u8f91005-\u5404\u79cdpickers",tags:["swiftUI"]},c=void 0,s={permalink:"/2021/11/08/SwiftUI\u4e13\u8f91-005-\u5404\u79cdpickers",editUrl:"https://github.com/xing-ou/GxBlog/blog/2021-11-08-SwiftUI\u4e13\u8f91-005-\u5404\u79cdpickers/index.md",source:"@site/blog/2021-11-08-SwiftUI\u4e13\u8f91-005-\u5404\u79cdpickers/index.md",title:"SwiftUI\u4e13\u8f91005-\u5404\u79cdpickers",description:"headerimg",date:"2021-11-08T00:00:00.000Z",formattedDate:"2021\u5e7411\u67088\u65e5",tags:[{label:"swiftUI",permalink:"/tags/swift-ui"}],readingTime:7.61,truncated:!0,authors:[],frontMatter:{title:"SwiftUI\u4e13\u8f91005-\u5404\u79cdpickers",tags:["swiftUI"]},prevItem:{title:"SwiftUI\u4e13\u8f91006-\u81ea\u5b9a\u4e49ViewModifier",permalink:"/2021/11/09/SwiftUI\u4e13\u8f91-006-\u81ea\u5b9a\u4e49ViewModifier"},nextItem:{title:"SwiftUI\u4e13\u8f91004-Button\u4ee5\u53ca\u8df3\u8f6c",permalink:"/2021/11/07/SwiftUI\u4e13\u8f91-004-Button\u4ee5\u53ca\u8df3\u8f6c"}},p={authorsImageUrls:[]},g=[{value:"Getting ready",id:"getting-ready",level:2},{value:"How to do it\u2026",id:"how-to-do-it",level:2},{value:"How it works\u2026",id:"how-it-works",level:2},{value:"Api\u8be6\u60c5",id:"api\u8be6\u60c5",level:2},{value:"Picker",id:"picker",level:3},{value:"Creating a Picker",id:"creating-a-picker",level:4},{value:"Styling Pickers",id:"styling-pickers",level:4},{value:"Toggle",id:"toggle",level:3},{value:"Creating a Toggle",id:"creating-a-toggle",level:4},{value:"Creating a Toggle from a Configuration",id:"creating-a-toggle-from-a-configuration",level:4},{value:"Styling a Toggle",id:"styling-a-toggle",level:4},{value:"Slider",id:"slider",level:3},{value:"Stepper",id:"stepper",level:3},{value:"Creating a Stepper",id:"creating-a-stepper",level:4},{value:"Creating a Stepper with Specified Increment and Decrement Behavior",id:"creating-a-stepper-with-specified-increment-and-decrement-behavior",level:4},{value:"DatePicker",id:"datepicker",level:3},{value:"Creating a Date Picker",id:"creating-a-date-picker",level:4},{value:"Setting Date Picker Components",id:"setting-date-picker-components",level:4},{value:"Styling Date Pickers",id:"styling-date-pickers",level:4},{value:"ColorPicker",id:"colorpicker",level:3}],k={toc:g};function u(e){var t=e.components,o=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"headerimg",src:n(21844).Z,width:"700",height:"250"}),"\npickers\u662f\u7528\u6765\u63d0\u4f9b\u7ed9\u7528\u6237\u9009\u62e9\u67d0\u4e2a\u503c\u7684\u3002\n\u672c\u6587\u5c06\u4ecb\u7ecd\u4ee5\u4e0b\u7684pickers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Picker")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Toggle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Slider")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Stepper")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"DatePicker")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ColorPicker"))),(0,l.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u65b0\u5efa\u4e00\u4e2aSwiftUI\u5de5\u7a0b\uff0c\u53eb\u505a",(0,l.kt)("strong",{parentName:"p"},"PickersApp"),"\u3002"),(0,l.kt)("h2",{id:"how-to-do-it"},"How to do it\u2026"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"ContentView.swift"),"\u521b\u5efa\u597dState\uff0c\u4ee5\u7ed1\u5b9a\u5404\u4e2apickers\u7684value\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'@State var choice = 0\n@State var showText = false\n@State var transitModes = ["Bike", "Car", "Bus"]\n@State var sliderVal: Float = 0\n@State var stepVal = 0\n@State var gameTime = Date()\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5728Body\u4e2d\u52a0\u5165\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"Form"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"Section"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"Picker"),"\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'struct ContentView: View {\n    @State var choice = 0\n    @State var showText = false\n    @State var transitModes = ["Bike", "Car", "Bus"]\n    @State var sliderVal: Float = 0\n    @State var stepVal = 0\n    @State var gameTime = Date()\n    \n    var body: some View {\n        Form {\n            Section {\n                Picker("Transit Modes", selection: $choice) {\n                    ForEach(0..<transitModes.count) { index in\n                        Text("\\(self.transitModes[index])")\n                    }\n                }.pickerStyle(.segmented)\n                Text("Current choice: \\(self.transitModes[choice])")\n            }\n        }\n    }\n}\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u518d\u6dfb\u52a0\u4e00\u4e2asection\uff0c\u52a0\u5165",(0,l.kt)("inlineCode",{parentName:"li"},"Toggle"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'Section {\n    Toggle(isOn: $showText) {\n        Text("Show Text")\n    }\n    if showText {\n        Text("The Text toggle is on")\n    }\n}\n')),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u518d\u6dfb\u52a0\u4e00\u4e2asection\uff0c\u52a0\u5165",(0,l.kt)("inlineCode",{parentName:"li"},"Slider"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'Section {\n    Slider(value: $sliderVal, in: 0...10, step: 0.001)\n    Text("Slider current value\\(sliderVal, specifier: "%.1f")")\n}\n')),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u518d\u6dfb\u52a0\u4e00\u4e2asection\uff0c\u52a0\u5165",(0,l.kt)("inlineCode",{parentName:"li"},"Stepper"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'Section {\n    Stepper("Stepper", value: $stepVal, in: 0...5)\n    Text("Stepper current value\\(stepVal)")\n}\n')),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"\u518d\u6dfb\u52a0\u4e00\u4e2asection\uff0c\u52a0\u5165",(0,l.kt)("inlineCode",{parentName:"li"},"DatePicker"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},' Section {\n    DatePicker("Please select a date", selection: $gameTime)\n}\n')),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"\u518d\u6dfb\u52a0\u4e00\u4e2asection\uff0c\u52a0\u5165",(0,l.kt)("inlineCode",{parentName:"li"},"DatePicker"),",\u518d\u9650\u5236\u4e0b\u65f6\u95f4\u8303\u56f4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'Section {\n  DatePicker("select a date", selection: $gameTime, in: Date()...)\n}\n')),(0,l.kt)("p",null,"\u6700\u7ec8\u5982\u4e0b"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxnlz3hh9zj30i80xuaba.jpg",alt:"image-20211223113151810"})),(0,l.kt)("h2",{id:"how-it-works"},"How it works\u2026"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Picker"),"\u662f\u7528\u6765\u4ece\u4e00\u7ec4\u503c\u4e2d\u9009\u62e9\u67d0\u4e00\u4e2a\u7684\uff0c\u8bbe\u7f6estyle\u4e3aSegmented\u5c31\u5f97\u5230\u4e86\u4e00\u4e2aUIKit\u7684SegmentView\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Toggle"),"\u63a7\u5236\u5f00\u548c\u5173\uff0c\u5f53\u524d\u72b6\u6001\u5b58\u50a8\u5728binding\u7684vlaue\u4e2d\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Slider"),"\u9700\u89813\u4e2a\u53c2\u6570: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"value"),": \u5f53\u524d\u503c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"in"),"\uff1a slider\u7684\u8303\u56f4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"step"),"\uff1a \u6b65\u8fdb\u7684\u503c")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Stepper"),"\u4e5f\u540cSlider\u4e00\u6837\u9700\u8981\u90a33\u4e2a\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u6700\u540e\u6f14\u793a\u4e86\u4e00\u4e0bDatePicker\u7684\u4f7f\u7528\uff0c\u6ce8\u610fbinding\u7684\u7c7b\u578b\u662fdate\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"picker\u7684style\u4f1a\u6839\u636e\u4ed6\u7684\u5bb9\u5668\u4e0d\u540c\u800c\u4e0d\u540c\u3002\u6bd4\u5982\u5728Form\u6216\u8005List\u4e2d\u7684picker\u4f1a\u548c\u5728VStack\u4e2d\u7684\u4e0d\u4e00\u6837\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},".pickerStyle"),"\u6765\u4fee\u6539\u9ed8\u8ba4style\u3002")),(0,l.kt)("h2",{id:"api\u8be6\u60c5"},"Api\u8be6\u60c5"),(0,l.kt)("h3",{id:"picker"},"Picker"),(0,l.kt)("h4",{id:"creating-a-picker"},"Creating a Picker"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"///SelectionValue\u9075\u5faaHashable\uff0c Content\u548cLabel\u90fd\u9075\u5faaView\ninit(selection: Binding<SelectionValue>, content: () -> Content, label: () -> Label)\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610fPicker\u7684\u6bcf\u4e2a\u9009\u9879\u90fd\u9700\u8981\u5e26\u4e0atag\uff0c\u800c\u4e14tag\u7684\u503c\u548c\u7c7b\u578b\u8981\u548cBinding\u7684\u53d8\u91cf\u4e00\u6837\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'enum Flavor: String, CaseIterable {\n    case chocolate\n    case vanilla\n    case strawberry\n}\nstruct ContentView: View {\n    @State var selectedFlavor: Flavor = .chocolate\n    var body: some View {\n        Form {\n            Section {\n                Picker("Flaver", selection: $selectedFlavor) {\n                   //\u6ce8\u610f\u9700\u8981\u6807\u4e0atag\uff0c\u800c\u4e14\u7c7b\u578b\u9700\u8981\u548cBinding\u7684\u4e00\u6837\n                    Text("\\(Flavor.chocolate.rawValue)").tag(Flavor.chocolate)\n                    Text("\\(Flavor.vanilla.rawValue)").tag(Flavor.vanilla)\n                    Text("\\(Flavor.strawberry.rawValue)").tag(Flavor.strawberry)\n                }.pickerStyle(.segmented)\n                Text("Current Flaver: \\(selectedFlavor.rawValue)")\n            }    \n        }\n    }\n}\n')),(0,l.kt)("p",null,"\u53ef\u80fd\u6709\u4eba\u5c31\u6709\u7591\u95ee\u4e86\uff0c\u4e3a\u4ec0\u4e48\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"how to do"),"\u90a3\u91cc\u7684Picker\u7684\u4f8b\u5b50\u5c31\u6ca1\u6709\u6253tag\u5462\uff1f"),(0,l.kt)("p",null,"\u56e0\u4e3aForEach\u4f1a\u81ea\u52a8\u4e3a\u4f60\u6253tag\uff0c\u8fd9\u4e2atag\u7684\u503c\u662f\u9075\u5faa\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"Identifiable"),"\u534f\u8bae\u7684\u5bf9\u8c61\u7684id\u5b57\u6bb5\u3002\u6240\u4ee5\u4e4b\u524d\u7684\u90a3\u4e2a\u4f8b\u5b50\u4e0d\u7528\u663e\u793a\u7684\u5e26\u4e0atag\u3002\u5982\u679c\u6211\u4eec\u8981\u6539\u5199\u4e0a\u9762\u7684\u4f8b\u5b50\u7528ForEach\u5b9e\u73b0\u5462\uff1f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'///\u9075\u5faaIdentifiable\u534f\u8bae\nenum Flavor: String, CaseIterable, Identifiable {\n    case chocolate\n    case vanilla\n    case strawberry\n    var id: Flavor { self }\n}\nstruct ContentView: View {\n    @State var selectedFlavor: Flavor = .chocolate\n    var body: some View {\n        Form {\n            Section {\n                Picker("Flaver", selection: $selectedFlavor) {\n                    // \u4e0d\u7528\u663e\u793a\u7684\u6253tag\uff0c\u9ed8\u8ba4\u7528id\u4f5c\u4e3atag\uff0cid\u548cBinding\u90fd\u662fFlavor\u7c7b\u578b\u7684\n                    // \u5f53\u7136\uff0c\u5982\u679c\u4f60\u613f\u610f\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5df1\u663e\u793a\u7684\u6307\u5b9atag\n                                        ForEach(Flavor.allCases) { flavor in\n                        Text("\\(flavor.rawValue)")\n                    }\n                }.pickerStyle(.segmented)\n                Text("Current Flaver: \\(selectedFlavor.rawValue)")\n            }    \n        }\n    }\n}\n')),(0,l.kt)("h4",{id:"styling-pickers"},"Styling Pickers"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"/// \u8bbe\u7f6epicker\u7684\u6837\u5f0f\nfunc pickerStyle<S>(_ style: S) -> some View where S : PickerStyle\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"//segment\u6837\u5f0f\nstatic var segmented: SegmentedPickerStyle { get }\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"//\u7c7b\u4f3c\u4e8eUIPicker\u7684\u90a3\u79cd\u6eda\u8f6e\u6837\u5f0f\nstatic var wheel: WheelPickerStyle { get }\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxnr4e090vj30ge0cowek.jpg",alt:"image-20211223142959083"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"//macOS\u4e0a\u7684\u52fe\u9009\u6837\u5f0f\nstatic var radioGroup: RadioGroupPickerStyle { get }\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"//\u83dc\u5355\uff0c\u7c7b\u4f3c\u4e8eUIPopoverController\uff0c\u70b9\u4e86\u51fa\u73b0\u5c0f\u5f39\u7a97\uff0c\u5305\u542b\u6240\u6709\u9009\u9879\nstatic var menu: MenuPickerStyle { get }\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxnr2qhu8rj30hs0am74h.jpg",alt:"image-20211223142823304"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"//\u6240\u6709\u9009\u9879\u90fd\u540c\u65f6\u663e\u793a\u51fa\u6765\uff0c\nstatic var inline: InlinePickerStyle { get }\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxnr1g1v55j30hi0aw74g.jpg",alt:"image-20211223142709578"})),(0,l.kt)("h3",{id:"toggle"},"Toggle"),(0,l.kt)("h4",{id:"creating-a-toggle"},"Creating a Toggle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"init(isOn: Binding<Bool>, label: () -> Label)\n...\n")),(0,l.kt)("h4",{id:"creating-a-toggle-from-a-configuration"},"Creating a Toggle from a Configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"//\u901a\u5e38\u7528\u5728\u81ea\u5b9a\u4e49ToggleStyle\u4e2d\ninit(_ configuration: ToggleStyleConfiguration)\n")),(0,l.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'struct RedBorderToggleStyle: ToggleStyle {\n    func makeBody(configuration: Configuration) -> some View {\n        Toggle(configuration)//\u901a\u8fc7cinfiguration\u521d\u59cb\u5316\n            .padding()\n            .border(Color.red)\n    }\n}\n\nToggle(isOn: $showText) {\n      Text("Show Text")\n}.toggleStyle(RedBorderToggleStyle())\n')),(0,l.kt)("h4",{id:"styling-a-toggle"},"Styling a Toggle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"func toggleStyle<S>(_ style: S) -> some View where S : ToggleStyle\n")),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u9ed8\u8ba4\u7684style"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"/// switch\u6837\u5f0f\nstatic var `switch`: SwitchToggleStyle { get }\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"/// label\u4f5c\u4e3abtn, on\u7684\u65f6\u5019\uff0c\u80cc\u666f\u8bbe\u4e3atintColor\nstatic var button: ButtonToggleStyle { get }\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxnrhzplnnj30ps0fcgm1.jpg",alt:"image-20211223144303808"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"/// \u52fe\u9009\u6846\uff0c\u53ea\u6709macOS\u6709\nstatic var checkbox: CheckboxToggleStyle { get }\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxnrj91cugj30ho04i749.jpg",alt:"image-20211223144416027"})),(0,l.kt)("h3",{id:"slider"},"Slider"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"/**\nvalue : binding\u7684\u503c\nbounds: \u503c\u7684\u8303\u56f4\nstep: \u6b65\u8fdb\u7684\u5927\u5c0f\nlabel: \u63cf\u8ff0\u7684view\nminimumValueLabel\nmaximumValueLabel\u6700\u5927\u548c\u6700\u5c0f\u7aef\u7684view\n*/\ninit<V>(value: Binding<V>, in bounds: ClosedRange<V>, step: V.Stride = 1, label: () -> Label, minimumValueLabel: () -> ValueLabel, maximumValueLabel: () -> ValueLabel, onEditingChanged: @escaping (Bool) -> Void = { _ in }) where V : BinaryFloatingPoint, V.Stride : BinaryFloatingPoint\n")),(0,l.kt)("h3",{id:"stepper"},"Stepper"),(0,l.kt)("h4",{id:"creating-a-stepper"},"Creating a Stepper"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"/**\nvalue : binding\u7684\u503c\nbounds: \u503c\u7684\u8303\u56f4\nstep: \u6b65\u8fdb\u7684\u5927\u5c0f\nlabel: \u63cf\u8ff0\u7684view\n*/\ninit<V>(value: Binding<V>, in bounds: ClosedRange<V>, step: V.Stride = 1, label: () -> Label, onEditingChanged: @escaping (Bool) -> Void = { _ in }) where V : Strideable\n")),(0,l.kt)("h4",{id:"creating-a-stepper-with-specified-increment-and-decrement-behavior"},"Creating a Stepper with Specified Increment and Decrement Behavior"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4e0d\u5728\u548c\u67d0\u4e2avalue\u7ed1\u5b9a\uff0c\u5c06\u4e24\u4e2a\u6309\u94ae\u7684\u4e8b\u4ef6\u66b4\u9732\u51fa\u6765\uff0c\u63d0\u4f9b\u7ed9\u4f60\u81ea\u5b9a\u4e49\u4f60\u7684\u903b\u8f91\ninit(label: () -> Label, onIncrement: (() -> Void)?, onDecrement: (() -> Void)?, onEditingChanged: @escaping (Bool) -> Void = { _ in })\n")),(0,l.kt)("h3",{id:"datepicker"},"DatePicker"),(0,l.kt)("h4",{id:"creating-a-date-picker"},"Creating a Date Picker"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"init(selection: Binding<Date>, displayedComponents: DatePicker<Label>.Components = [.hourAndMinute, .date], label: () -> Label)\n/// \u53ef\u4ee5\u6307\u5b9arange, start...end\ninit(selection: Binding<Date>, in range: ClosedRange<Date>, displayedComponents: DatePicker<Label>.Components = [.hourAndMinute, .date], label: () -> Label)\n/// \u53ef\u4ee5\u6307\u5b9arange, start...\ninit(selection: Binding<Date>, in range: PartialRangeFrom<Date>, displayedComponents: DatePicker<Label>.Components = [.hourAndMinute, .date], label: () -> Label)\n/// \u53ef\u4ee5\u6307\u5b9arange, ...end\ninit(selection: Binding<Date>, in range: PartialRangeThrough<Date>, displayedComponents: DatePicker<Label>.Components = [.hourAndMinute, .date], label: () -> Label)\n")),(0,l.kt)("h4",{id:"setting-date-picker-components"},"Setting Date Picker Components"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"//\u8bbe\u7f6e\u663e\u793a\u7684components\nstatic let date: DatePickerComponents// \u5e74\u6708\u65e5\nstatic let hourAndMinute: DatePickerComponents//\u5c0f\u65f6\uff0c\u5206\u949f\n")),(0,l.kt)("h4",{id:"styling-date-pickers"},"Styling Date Pickers"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"///\u8bbe\u7f6epicker\u6837\u5f0f\nfunc datePickerStyle<S>(_ style: S) -> some View where S : DatePickerStyle\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"static var wheel: WheelDatePickerStyle { get }\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxnss4kk3mj30ga0ce74g.jpg",alt:"image-20211223152724050"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"/// macOS\u4e0a\u7279\u6709\u7684\uff0c\u7c7b\u4f3c\u4e8eStepper\nstatic var stepperField: StepperFieldDatePickerStyle { get }\n/// macOS\u4e0a\u7279\u6709\u7684\nstatic var field: FieldDatePickerStyle { get }\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"static var graphical: GraphicalDatePickerStyle { get }\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxnstx1k4wj30h00hoaak.jpg",alt:"image-20211223152907356"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"///component\u4ee5\u6587\u672c\u683c\u5f0f\u663e\u793a\nstatic var compact: CompactDatePickerStyle { get }\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxnsx112spj30gu04y3yg.jpg",alt:"image-20211223153206130"})),(0,l.kt)("h3",{id:"colorpicker"},"ColorPicker"),(0,l.kt)("p",null,"\u9009\u62e9\u989c\u8272"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"///\u7ed1\u5b9aColor\ninit(selection: Binding<Color>, supportsOpacity: Bool = true, label: () -> Label)\n///\u7ed1\u5b9aCGColor\ninit(selection: Binding<CGColor>, supportsOpacity: Bool = true, label: () -> Label)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'ColorPicker(selection: $color) {\n    Text("\u9009\u62e9\u989c\u8272")\n}\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxnt5817uvj30gm03cwec.jpg",alt:"image-20211223153959117"})))}u.isMDXComponent=!0},21844:function(e,t,n){t.Z=n.p+"assets/images/Header-e4822bfc19de2ec3724540465fc94d33.png"}}]);