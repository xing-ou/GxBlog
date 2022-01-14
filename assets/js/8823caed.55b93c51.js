"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[7167],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6798:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return d}});var r=t(3117),a=t(102),l=(t(7294),t(3905)),i=["components"],o={title:"SwiftUI\u4e13\u8f91070-\u4e00\u4e2a\u5b9a\u65f6\u5668App",tags:["swiftUI","Combine"]},s=void 0,c={permalink:"/2022/01/13/SwiftUI\u4e13\u8f91-071-\u4e00\u4e2a\u5b9a\u65f6\u5668App",editUrl:"https://github.com/xing-ou/GxBlog/blog/2022-01-13-SwiftUI\u4e13\u8f91-071-\u4e00\u4e2a\u5b9a\u65f6\u5668App/index.md",source:"@site/blog/2022-01-13-SwiftUI\u4e13\u8f91-071-\u4e00\u4e2a\u5b9a\u65f6\u5668App/index.md",title:"SwiftUI\u4e13\u8f91070-\u4e00\u4e2a\u5b9a\u65f6\u5668App",description:"headerimg",date:"2022-01-13T00:00:00.000Z",formattedDate:"2022\u5e741\u670813\u65e5",tags:[{label:"swiftUI",permalink:"/tags/swift-ui"},{label:"Combine",permalink:"/tags/combine"}],readingTime:2.215,truncated:!0,authors:[],nextItem:{title:"SwiftUI\u4e13\u8f91070-Combine\u7b80\u4ecb",permalink:"/2022/01/12/SwiftUI\u4e13\u8f91-070-Combine\u7b80\u4ecb"}},u={authorsImageUrls:[]},p=[{value:"Getting ready",id:"getting-ready",children:[],level:2},{value:"How to do it\u2026",id:"how-to-do-it",children:[],level:2},{value:"How it works\u2026",id:"how-it-works",children:[],level:2}],m={toc:p};function d(e){var n=e.components,o=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"headerimg",src:t(2332).Z}),"\n\u5f53\u6211\u4eecsubscribe\u4e00\u4e2apublisher\u540e\uff0c\u8fd9\u4e2a\u7ed3\u679c\u9700\u8981\u5b58\u50a8\u5230\u67d0\u4e2a\u5730\u65b9\uff0c\u901a\u5e38\u6211\u4eec\u90fd\u662f\u901a\u8fc7\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},".store"),"\u65b9\u6cd5\u5b58\u50a8\u5728\u67d0\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"AnyCancellable Set"),"\u4e2d\u3002\u4f46\u662f\u6bcf\u4e2a\u90fd\u8fd9\u4e48\u7528\uff0c\u53ef\u80fd\u4f1a\u663e\u5f97\u6709\u70b9\u91cd\u590d\uff0c\u6211\u4eec\u5c06\u7528@ResultBuilder\u6765\u5305\u88f9\u6240\u6709\u7684subscribtion\uff0c\u5c06\u6240\u6709AnyCancellable\u653e\u5230\u540c\u4e00\u4e2aset\u4e2d\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u5b9a\u65f6\u5668\u7684\u4f8b\u5b50\u3002"),(0,l.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u65b0\u5efa\u4e00\u4e2a\u9879\u76ee\uff1a",(0,l.kt)("strong",{parentName:"p"},"StopWatch")),(0,l.kt)("h2",{id:"how-to-do-it"},"How to do it\u2026"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6784\u5efa\u6570\u636emodel")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"class StopWatchTimer: ObservableObject {\n    @Published var deciseconds: Int = 0\n    @Published var seconds: Int = 0\n    @Published var minutes: Int = 0\n    @Published var started = false\n    private var cancellableSet: Set<AnyCancellable> = []\n\n    func start() {\n    }\n\n    func stop() {\n    }\n}\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5b9e\u73b0start\u548cstop")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"func stop() {\n    cancellableSet = []\n    started = false\n}\n\nfunc start() {\n    cancellableSet.store {\n        Timer.publish(every: 0.1, on: RunLoop.main)\n            .autoconnect()\n            .sink { _ in\n                self.deciseconds = (self.deciseconds + 1)%10\n            }\n        Timer.publish(every: 1.0, on: RunLoop.main)\n            .autoconnect()\n            .sink { _ in\n                self.seconds = (self.seconds + 1)%60\n            }\n        Timer.publish(every: 60, on: RunLoop.main)\n            .autoconnect()\n            .sink { _ in\n                self.minutes = (self.minutes + 1)%60\n            }\n    }\n  started = true\n}\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"li"},"cancellableSet.store"),"\u65b9\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"typealias CancellableSet = Set<AnyCancellable>\nextension CancellableSet {\n    mutating func store(@CancellableBuilder _ cancellables: () -> [AnyCancellable]) {\n        formUnion(cancellables())\n    }\n\n    @resultBuilder\n    struct CancellableBuilder {\n        static func buildBlock(_ cancellables:AnyCancellable...) -> [AnyCancellable] {\n            return cancellables\n        }\n    }\n}\n\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u5b9e\u73b0UI")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'extension Int {\n    var formatted: String {\n        String(format: "%02d", self)\n    }\n}\n\n@available(iOS 15.0, *)\nstruct ContentView: View {\n    @StateObject private var timer = StopWatchTimer()\n    var body: some View {\n        VStack(spacing: 12) {\n            HStack(spacing: 0) {\n                Text("\\(timer.minutes.formatted)")\n                    .font(.system(size: 80))\n                    .frame(width: 100)\n                Text(":")\n                    .font(.system(size: 80))\n                Text("\\(timer.seconds.formatted)")\n                    .font(.system(size: 80))\n                    .frame(width: 100)\n                Text(":")\n                    .font(.system(size: 80))\n                Text("\\(timer.deciseconds.formatted)")\n                    .font(.system(size: 80))\n                    .frame(width: 100)\n            }\n            Button {\n                if timer.started {\n                    timer.stop()\n                } else {\n                    timer.start()\n                }\n            } label: {\n                Text(timer.started ? "Stop" : "Start")\n                    .foregroundColor(.white)\n                    .padding(.horizontal, 24)\n                    .padding(.vertical, 16)\n                    .frame(width: 100)\n                    .background(timer.started ? Color.red : Color.green)\n                    .cornerRadius(5)\n            }\n        }\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gyc7hms97sj30bw0oqgly.jpg",alt:"image-20220113180947904"})),(0,l.kt)("h2",{id:"how-it-works"},"How it works\u2026"),(0,l.kt)("p",null,"\u9996\u5148\u6211\u4eec\u5b66\u4e60\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"Timer.publish"),"\uff0c\u77e5\u9053\u4e86\u5982\u4f55\u751f\u6210\u65f6\u95f4\u3002"),(0,l.kt)("p",null,"\u7136\u540e",(0,l.kt)("strong",{parentName:"p"},".autoconnect()"),"\u8ba9publisher\u7acb\u9a6c\u5f00\u59cb\u3002"),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u4f7f\u7528\u4e86@ResultBuilder\uff0c\u8fd9\u6837\u5728builder\u95ed\u5305\u4e2d\u7684\u591a\u4e2asubscribe\u4ea7\u751f\u7684",(0,l.kt)("strong",{parentName:"p"},"AnyCancellable"),"\u5c31\u4f1a\u88ab\u6536\u96c6\u8d77\u6765\u653e\u5230cancellableSet\u4e2d\u3002"))}d.isMDXComponent=!0},2332:function(e,n,t){n.Z=t.p+"assets/images/Header-50cc8222108a8278effa3482bb92017e.png"}}]);