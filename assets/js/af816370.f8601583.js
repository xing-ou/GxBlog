"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[871],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14931:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return g}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],o={title:"SwiftUI\u4e13\u8f91011-iOS14\u4ee5\u4e0a\u7684View\u548cControls",tags:["swiftUI"]},s=void 0,u={permalink:"/2021/11/14/SwiftUI\u4e13\u8f91-011-iOS14\u4ee5\u4e0a\u7684View\u548cControls",editUrl:"https://github.com/xing-ou/GxBlog/blog/2021-11-14-SwiftUI\u4e13\u8f91-011-iOS14\u4ee5\u4e0a\u7684View\u548cControls/index.md",source:"@site/blog/2021-11-14-SwiftUI\u4e13\u8f91-011-iOS14\u4ee5\u4e0a\u7684View\u548cControls/index.md",title:"SwiftUI\u4e13\u8f91011-iOS14\u4ee5\u4e0a\u7684View\u548cControls",description:"headerimg",date:"2021-11-14T00:00:00.000Z",formattedDate:"2021\u5e7411\u670814\u65e5",tags:[{label:"swiftUI",permalink:"/tags/swift-ui"}],readingTime:5.035,truncated:!0,authors:[],frontMatter:{title:"SwiftUI\u4e13\u8f91011-iOS14\u4ee5\u4e0a\u7684View\u548cControls",tags:["swiftUI"]},prevItem:{title:"SwiftUI\u4e13\u8f91012-\u4f7f\u7528ScrollView",permalink:"/2021/11/15/SwiftUI\u4e13\u8f91-012-\u4f7f\u7528ScrollView"},nextItem:{title:"SwiftUI\u4e13\u8f91010-\u5df2\u6709App\u4e2d\u4f7f\u7528SwiftUI",permalink:"/2021/11/13/SwiftUI\u4e13\u8f91-010-\u5df2\u6709App\u4e2d\u4f7f\u7528SwiftUI"}},c={authorsImageUrls:[]},g=[{value:"Getting ready",id:"getting-ready",level:2},{value:"How to do it\u2026",id:"how-to-do-it",level:2},{value:"How it works\u2026",id:"how-it-works",level:2},{value:"Api\u8be6\u60c5",id:"api\u8be6\u60c5",level:2},{value:"ProgressView",id:"progressview",level:3},{value:"Creating Progress View",id:"creating-progress-view",level:4},{value:"Styling Progress Views",id:"styling-progress-views",level:4},{value:"Label",id:"label",level:3},{value:"Creating a Label from Text and an Image",id:"creating-a-label-from-text-and-an-image",level:4},{value:"Creating a Label from Text and an SF Symbol",id:"creating-a-label-from-text-and-an-sf-symbol",level:4},{value:"Creating a Label from a Title and Icon",id:"creating-a-label-from-a-title-and-icon",level:4},{value:"Creating a Label from a Configuration",id:"creating-a-label-from-a-configuration",level:4},{value:"Styling Labels",id:"styling-labels",level:4},{value:"Link",id:"link",level:3},{value:"Menu",id:"menu",level:3},{value:"Creating a Menu from Content",id:"creating-a-menu-from-content",level:4},{value:"Creating a Menu with a Primary Action",id:"creating-a-menu-with-a-primary-action",level:4},{value:"Creating a Menu from a Configuration",id:"creating-a-menu-from-a-configuration",level:4},{value:"Styling a Menu",id:"styling-a-menu",level:4}],p={toc:g};function m(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"headerimg",src:n(33225).Z,width:"700",height:"250"}),"\n\u672c\u7ae0\u6211\u4eec\u5c06\u67e5\u770b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ProgressView")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ColorPicker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Link")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Menu"))),(0,i.kt)("p",null,"ProgressView\u7528\u4e8e\u663e\u793a\u4efb\u52a1\u7684\u5b8c\u6210\u7a0b\u5ea6\u3002\u6709\u4e24\u79cd\u7c7b\u578b\u7684ProgressView\uff1a\u4e0d\u786e\u5b9a\u7684\u8fdb\u5ea6\u89c6\u56fe\u663e\u793a\u4e00\u4e2a\u65cb\u8f6c\u7684\u5706\u5708\u76f4\u5230\u4efb\u52a1\u5b8c\u6210\uff0c\u800c\u786e\u5b9a\u7684\u8fdb\u5ea6\u89c6\u56fe\u663e\u793a\u4e00\u4e2a\u88ab\u586b\u6ee1\u7684bar\uff0c\u4ee5\u663e\u793a\u4efb\u52a1\u7684\u5b8c\u6210\u7a0b\u5ea6\u3002"),(0,i.kt)("p",null,"ColorPicker\u89c6\u56fe\u5141\u8bb8\u7528\u6237\u4ece\u591a\u79cd\u989c\u8272\u4e2d\u8fdb\u884c\u9009\u62e9\u3002"),(0,i.kt)("p",null,"Menu\u89c6\u56fe\u5219\u663e\u793a\u4e00\u4e2aitems\u5217\u8868\uff0c\u7528\u6237\u53ef\u4ee5\u4ece\u4e2d\u9009\u62e9\u4ee5\u6267\u884c\u7279\u5b9a\u64cd\u4f5c\u3002"),(0,i.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,i.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2aSwiftUI\u9879\u76ee\uff0c",(0,i.kt)("strong",{parentName:"p"},"MoreViewsAndControls")),(0,i.kt)("h2",{id:"how-to-do-it"},"How to do it\u2026"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9996\u5148\uff0c\u6dfb\u52a0\u4e00\u4e9b\u72b6\u6001")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'@State private var progress = 0.5\n@State private var color  = Color.red\n@State private var secondColor  = Color.yellow\n@State private var someText = "Initial value"\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2aList\uff0c \u5728\u6dfb\u52a0\u4e00\u4e2a\u5305\u542bProgressView\u7684Section")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'List {\n    Section(header: Text("ProgressViews")) {\n        ProgressView("Indeterminate progressview")\n        ProgressView("Downloading",value:progress, total:2)\n        Button("More"){\n            if(progress < 2){\n                progress += 0.5\n            }\n        }\n    }\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u518d\u6dfb\u52a0\u53e6\u4e00\u4e2aSection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'    Section(header: Text("Labels")) {\n    Label("Slow", image: "tortoise.fill")\n    Label {\n        Text("Fast").font(.title)\n    } icon: {\n        Circle()\n            .fill(.orange)\n            .frame(width: 40, height: 20, alignment: .center)\n            .overlay {\n                Text("F")\n            }\n    }\n}\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u5728\u6dfb\u52a02\u4e2aSection\uff0c\u5305\u542b",(0,i.kt)("strong",{parentName:"li"},"ColorPicker"),"\u548cLink")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'Section(header: Text("ColorPicker")) {\n    ColorPicker(selection: $color) {\n        Text("Pick my background").background(color).padding()\n    }\n    ColorPicker("Picker", selection: $secondColor)\n}\nSection(header: Text("Link")) {\n  Link("Packt Publishing", destination: URL(string: "https://www.baidu.com")!)\n}\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"\u518d\u6dfb\u52a0\u4e00\u4e2aSection\uff0c\u5305\u542bTextEditor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'Section(header: Text("TextEditor")) {\n    TextEditor(text: $someText)\n    Text("current editortext:\\n\\(someText)")\n}\n')),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"\u518d\u6dfb\u52a0\u4e00\u4e2aSection\uff0c\u5305\u542bMenu")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'Section(header: Text("Menu")) {\n    Menu("Actions") {\n        Button("set TextEditor text to \'magic\'") {\n            someText = "magic"\n        }\n        Button("turn first color green") {\n            color = .green\n        }\n        Menu("Actions") {\n            Button("set TextEditor text to \'number\'") {\n                someText = "number"\n            }\n            Button("turn first color red") {\n                color = .red\n            }\n        }\n    }\n}\n')),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"\u6700\u7ec8\uff0c\u6211\u4eec\u4fee\u6539\u4e0bList\u7684\u663e\u793a\u6837\u5f0f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"List {\n\n...\n\n}.listStyle(.grouped)\n")),(0,i.kt)("p",null,"\u6700\u7ec8"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxp0p1v15rj30i6100406.jpg",alt:"image-20211224164647811"})),(0,i.kt)("h2",{id:"how-it-works"},"How it works\u2026"),(0,i.kt)("p",null,"\u4e0d\u786e\u5b9a\u8fdb\u5ea6\u7684\u8fdb\u5ea6\u6761\uff0c\u4e0d\u9700\u8981\u53c2\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'ProgressView("Indeterminate progress view")\nProgressView()\n')),(0,i.kt)("p",null,"\u786e\u5b9a\u8fdb\u5ea6\u7684\uff0c\u9700\u8981\u63d0\u4f9b\uff0c\u5f53\u524d\u8fdb\u5ea6\u548c\u603b\u8fdb\u5ea6, \u603b\u8fdb\u5ea6\u4e0d\u4f20\u7684\u8bdd\u9ed8\u8ba4\u4e3a1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'ProgressView("Downloading",value: progress, total:2)\n')),(0,i.kt)("p",null,"Label\u663e\u793a\u4e00\u4e2atext\u548cicon\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528SF symbol\u3002"),(0,i.kt)("p",null,"ColorPicker\u80fd\u591f\u8ba9\u7528\u6237\u9009\u62e9\u989c\u8272"),(0,i.kt)("p",null,"Link\u7528\u4e8e\u663e\u793a\u4e00\u4e2a\u53ef\u4ee5\u70b9\u51fb\u7684\u94fe\u63a5"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Menu"),"\u63d0\u4f9b\u4e86\u5f39\u7a97\u4f9b\u7528\u6237\u9009\u62e9\u9009\u9879\uff0c\u53ef\u4ee5\u6dfb\u52a0\u591a\u7ea7\uff0c\u4f46\u4e0d\u5efa\u8bae\u5d4c\u5957\u592a\u6df1\u3002"),(0,i.kt)("h2",{id:"api\u8be6\u60c5"},"Api\u8be6\u60c5"),(0,i.kt)("h3",{id:"progressview"},"ProgressView"),(0,i.kt)("h4",{id:"creating-progress-view"},"Creating Progress View"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"//\u4e0d\u786e\u5b9a\u8fdb\u5ea6\u7684\ninit(label: () -> Label)\n//\u786e\u5b9a\u8fdb\u5ea6\u7684\ninit<V>(value: V?, total: V = 1.0, label: () -> Label) where CurrentValueLabel == EmptyView, V : BinaryFloatingPoint\n//\u901a\u8fc7config\u521d\u59cb\u5316\uff0c\u901a\u5e38\u7528\u5728\u81ea\u5b9a\u4e49style\u4e2d\ninit(_ configuration: ProgressViewStyleConfiguration) where Label == ProgressViewStyleConfiguration.Label, CurrentValueLabel == ProgressViewStyleConfiguration.CurrentValueLabel\n//\u6bd4\u5982\nstruct DarkBlueShadowProgressViewStyle: ProgressViewStyle {\n    func makeBody(configuration: Configuration) -> some View {\n        ProgressView(configuration)\n            .shadow(color: Color(red: 0, green: 0, blue: 0.6),\n                    radius: 4.0, x: 1.0, y: 2.0)\n    }\n}\n")),(0,i.kt)("h4",{id:"styling-progress-views"},"Styling Progress Views"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"func progressViewStyle<S>(_ style: S) -> some View where S : ProgressViewStyle\n//\u76f4\u7ebf\nstatic var linear: LinearProgressViewStyle { get }\n//\u8fd0\u884c\u770b\u6548\u679c\u4f3c\u4e4e\u662f\u548c\u4e0d\u786e\u5b9a\u8fdb\u5ea6\u7684\u90a3\u79cd\u5c0f\u83ca\u82b1\u4e00\u6837\uff0c\u770b\u4e0d\u5230\u8fdb\u5ea6\u7684\u6539\u53d8\nstatic var circular: CircularProgressViewStyle { get }\n")),(0,i.kt)("h3",{id:"label"},"Label"),(0,i.kt)("h4",{id:"creating-a-label-from-text-and-an-image"},"Creating a Label from Text and an Image"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"//title + \u672c\u5730image\ninit<S>(_ title: S, image name: String) where S : StringProtocol\n")),(0,i.kt)("h4",{id:"creating-a-label-from-text-and-an-sf-symbol"},"Creating a Label from Text and an SF Symbol"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"//title + sf symbol\ninit<S>(_ title: S, systemImage name: String) where S : StringProtocol\n")),(0,i.kt)("h4",{id:"creating-a-label-from-a-title-and-icon"},"Creating a Label from a Title and Icon"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"//title + Icon\ninit(title: () -> Title, icon: () -> Icon)\n")),(0,i.kt)("h4",{id:"creating-a-label-from-a-configuration"},"Creating a Label from a Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"init(_ configuration: LabelStyleConfiguration)\n//\u6bd4\u5982\nstruct RedBorderedLabelStyle: LabelStyle {\n    func makeBody(configuration: Configuration) -> some View {\n        Label(configuration)\n            .border(Color.red)\n    }\n}\n")),(0,i.kt)("h4",{id:"styling-labels"},"Styling Labels"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"func labelStyle<S>(_ style: S) -> some View where S : LabelStyle\n//\u53ea\u663e\u793a\u56fe\u7247\nstatic var iconOnly: IconOnlyLabelStyle { get }\n//title + icon\nstatic var titleAndIcon: TitleAndIconLabelStyle { get }\n//\u53ea\u663e\u793atitle\nstatic var titleOnly: TitleOnlyLabelStyle { get }\n")),(0,i.kt)("h3",{id:"link"},"Link"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u663e\u793a\u7684title \u548c\u8df3\u8f6c\u7684url\ninit(destination: URL, label: () -> Label)\n")),(0,i.kt)("h3",{id:"menu"},"Menu"),(0,i.kt)("h4",{id:"creating-a-menu-from-content"},"Creating a Menu from Content"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"//\u70b9\u51fb\u540e\u51fa\u73b0content\u4e2d\u7684\u9009\u9879\ninit(content: () -> Content, label: () -> Label)\n")),(0,i.kt)("h4",{id:"creating-a-menu-with-a-primary-action"},"Creating a Menu with a Primary Action"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"//\u666e\u901a\u70b9\u51fb\u4f1a\u89e6\u53d1primaryAction\uff0c\u5982\u679c\u957f\u6309\u6216\u8005\u53cc\u51fb\u5219\u663e\u793acontent\u4e2d\u7684\u9009\u9879\ninit(content: () -> Content, label: () -> Label, primaryAction: @escaping () -> Void)\n")),(0,i.kt)("h4",{id:"creating-a-menu-from-a-configuration"},"Creating a Menu from a Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"init(_ configuration: MenuStyleConfiguration)\n//\u6bd4\u5982\nstruct RedBorderMenuStyle: MenuStyle {\n    func makeBody(configuration: Configuration) -> some View {\n        Menu(configuration)\n            .border(Color.red)\n    }\n}\n")),(0,i.kt)("h4",{id:"styling-a-menu"},"Styling a Menu"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"func menuStyle<S>(_ style: S) -> some View where S : MenuStyle\n//\u9ed8\u8ba4\u7684\nstruct DefaultMenuStyle\n//\u65e0\u8fb9\u6846button\nstruct BorderlessButtonMenuStyle\n//\u6709\u8fb9\u6846\uff0c\u53ea\u80fdmacOS\u7528\nstruct BorderedButtonMenuStyle\n")))}m.isMDXComponent=!0},33225:function(e,t,n){t.Z=n.p+"assets/images/Header-38eebf26dc11ec0e2aea17d78d2d9e48.png"}}]);