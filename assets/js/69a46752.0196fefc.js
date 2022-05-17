"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[2807],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64274:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],l={title:"SwiftUI\u4e13\u8f91074-\u8c03\u8bd5Combine",tags:["swiftUI","Combine"]},c=void 0,u={permalink:"/2022/01/16/SwiftUI\u4e13\u8f91-074-\u8c03\u8bd5Combine",editUrl:"https://github.com/xing-ou/GxBlog/blog/2022-01-16-SwiftUI\u4e13\u8f91-074-\u8c03\u8bd5Combine/index.md",source:"@site/blog/2022-01-16-SwiftUI\u4e13\u8f91-074-\u8c03\u8bd5Combine/index.md",title:"SwiftUI\u4e13\u8f91074-\u8c03\u8bd5Combine",description:"headerimg",date:"2022-01-16T00:00:00.000Z",formattedDate:"2022\u5e741\u670816\u65e5",tags:[{label:"swiftUI",permalink:"/tags/swift-ui"},{label:"Combine",permalink:"/tags/combine"}],readingTime:1.915,truncated:!0,authors:[],frontMatter:{title:"SwiftUI\u4e13\u8f91074-\u8c03\u8bd5Combine",tags:["swiftUI","Combine"]},prevItem:{title:"SwiftUI\u4e13\u8f91075-SwiftUI\u4e2d\u4f7f\u7528async\u51fd\u6570",permalink:"/2022/01/17/SwiftUI\u4e13\u8f91-075-SwiftUI\u4e2d\u4f7f\u7528async\u51fd\u6570"},nextItem:{title:"SwiftUI\u4e13\u8f91073-Combine\u548c\u7f51\u7edc\u8bf7\u6c42",permalink:"/2022/01/15/SwiftUI\u4e13\u8f91-073-Combine\u548c\u7f51\u7edc\u8bf7\u6c42"}},p={authorsImageUrls:[]},s=[{value:"Getting ready",id:"getting-ready",level:2},{value:"How to do it\u2026",id:"how-to-do-it",level:2},{value:"How it works\u2026",id:"how-it-works",level:2}],f={toc:s};function m(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"headerimg",src:n(84048).Z,width:"700",height:"250"}),"\n\u672c\u7ae0\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u8c03\u8bd5Combine Stream\u7684\u4e09\u79cd\u65b9\u6cd5\u3002\u6211\u627f\u8ba4\u8fd9\u4e09\u4e2a\u90fd\u6709\u70b9\u57fa\u7840\u3002\u4f46\u662f\uff0c\u5b83\u4eec\u662f\u4e00\u4e2a\u8d77\u70b9\uff0c\u5e94\u8be5\u8db3\u4ee5\u5e2e\u52a9\u6211\u4eec\u4e86\u89e3\u5982\u4f55\u5904\u7406stream\u4e2d\u7684\u9519\u8bef\u3002"),(0,o.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,o.kt)("p",null,"\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u9879\u76ee",(0,o.kt)("strong",{parentName:"p"},"DebuggingCombine")),(0,o.kt)("h2",{id:"how-to-do-it"},"How to do it\u2026"),(0,o.kt)("p",null,"\u6211\u4eec\u5c06\u76f4\u63a5\u521b\u5efa3\u4e2a\u6309\u94ae\uff0c\u6765\u5c1d\u8bd5\u8c03\u8bd5Combine\u76843\u79cd\u65b9\u5f0f\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5148\u521b\u5efa\u4e00\u4e2a\u5305\u542b3\u4e2a\u4e8b\u4ef6\u7684model")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"class ReactiveObject {\n    private var cancellableSet: Set<AnyCancellable> = []\n    func handleEvents() {\n\n    }\n\n    func printDebug() {\n\n    }\n\n    func breakPoint() {\n\n    }\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"ContentView\u4e2d\u52a0\u51653\u4e2a\u6309\u94ae\uff0c\u8c03\u7528\u8fd93\u4e2a\u51fd\u6570")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'struct ContentView: View {\n    var reactiveObject = ReactiveObject()\n    var body: some View {\n        VStack(spacing: 24) {\n            Button {\n                reactiveObject.handleEvents()\n            } label: {\n                Text("HandleEvents")\n                    .foregroundColor(.white)\n                    .frame(width: 200, height: 50)\n                    .background(Color.green)\n            }\n\n            Button {\n                reactiveObject.printDebug()\n            } label: {\n                Text("Print")\n                    .foregroundColor(.white)\n                    .frame(width: 200, height: 50)\n                    .background(Color.orange)\n            }\n\n            Button {\n                reactiveObject.breakPoint()\n            } label: {\n                Text("Breakpoint")\n                    .foregroundColor(.white)\n                    .frame(width: 200, height: 50)\n                    .background(Color.red)\n            }\n        }\n    }\n}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u5b9e\u73b0\u6211\u4eec\u76843\u4e2a\u51fd\u6570")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'func handleEvents() {\n    let subject = PassthroughSubject<String, Never>()\n    subject\n    .handleEvents(receiveSubscription: {\n        print("Receive subscription: \\($0)")\n    }, receiveOutput: {\n        print("Received output: \\($0)")\n    }, receiveCompletion: {\n        print("Receive completion: \\($0)")\n    }, receiveCancel: {\n        print("Receive cancel")\n    }, receiveRequest: {\n        print("Receive request: \\($0)")\n    })\n    .sink { _ in }\n    .store(in: &cancellableSet)\n    subject.send("New Message!")\n}\n\nfunc printDebug() {\n    let subject = PassthroughSubject<String, Never>()\n    subject\n    .print("Print")\n    .sink { _ in }\n    .store(in: &cancellableSet)\n    subject.send("New Message!")\n}\n\nfunc breakPoint() {\n    (1..<10).publisher\n    .breakpoint(receiveOutput: {\n        $0 == 7\n    }) { $0 == .finished }\n    .sink { _ in }\n    .store(in: &cancellableSet)\n}\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gydagxexplj30b4074glt.jpg",alt:"Figure_10.10_B17962"})),(0,o.kt)("h2",{id:"how-it-works"},"How it works\u2026"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},".handleEvents()"),"\u63d0\u4f9b\u4e86\u5728\u63a5\u6536\u5404\u79cd\u503c\u65f6\u7684\u81ea\u5b9a\u4e49\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},".print()")," \u662f.handleEvents()\u7684\u4e00\u4e2a\u7b80\u5355\u6253\u5370\u7684\u7248\u672c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},".breakpoint()"),"\u4f1a\u5728\u6ee1\u8db3\u6761\u4ef6\u65f6\u8fdb\u5165\u65ad\u70b9\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\u63a8\u8350\u4e0b",(0,o.kt)("a",{parentName:"p",href:"http://timelane.tools/%E8%BF%99%E4%B8%AA%E5%B7%A5%E5%85%B7%EF%BC%8C%E8%AE%A9%E4%BD%A0%E8%83%BD%E5%A4%9F%E5%8F%AF%E8%A7%86%E5%8C%96%E6%95%B0%E6%8D%AE%E6%B5%81%E3%80%82"},"http://timelane.tools/\u8fd9\u4e2a\u5de5\u5177\uff0c\u8ba9\u4f60\u80fd\u591f\u53ef\u89c6\u5316\u6570\u636e\u6d41\u3002")))}m.isMDXComponent=!0},84048:function(e,t,n){t.Z=n.p+"assets/images/Header-d24ba7885b014d6c20621e42ef8c3cef.png"}}]);