"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[1392],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},w={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(n),f=i,d=s["".concat(c,".").concat(f)]||s[f]||w[f]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4557:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return w},default:function(){return f}});var r=n(3117),i=n(102),l=(n(7294),n(3905)),o=["components"],a={title:"SwiftUI\u4e13\u8f91007-\u4f7f\u7528ViewBuilder\u6765\u5206\u79bb\u5c55\u793a",tags:["swiftUI"]},c=void 0,u={permalink:"/2021/11/10/SwiftUI\u4e13\u8f91-007-\u4f7f\u7528ViewBuilder\u6765\u5206\u79bb\u5c55\u793a",editUrl:"https://github.com/xing-ou/GxBlog/blog/2021-11-10-SwiftUI\u4e13\u8f91-007-\u4f7f\u7528ViewBuilder\u6765\u5206\u79bb\u5c55\u793a/index.md",source:"@site/blog/2021-11-10-SwiftUI\u4e13\u8f91-007-\u4f7f\u7528ViewBuilder\u6765\u5206\u79bb\u5c55\u793a/index.md",title:"SwiftUI\u4e13\u8f91007-\u4f7f\u7528ViewBuilder\u6765\u5206\u79bb\u5c55\u793a",description:"headerimg",date:"2021-11-10T00:00:00.000Z",formattedDate:"2021\u5e7411\u670810\u65e5",tags:[{label:"swiftUI",permalink:"/tags/swift-ui"}],readingTime:1.895,truncated:!0,authors:[],prevItem:{title:"SwiftUI\u4e13\u8f91008-\u4f7f\u7528SF Symbols\u663e\u793a\u7b80\u5355\u56fe\u5f62",permalink:"/2021/11/11/SwiftUI\u4e13\u8f91-008-\u4f7f\u7528SFSymbols\u663e\u793a\u7b80\u5355\u56fe\u5f62"},nextItem:{title:"SwiftUI\u4e13\u8f91006-\u81ea\u5b9a\u4e49ViewModifier",permalink:"/2021/11/09/SwiftUI\u4e13\u8f91-006-\u81ea\u5b9a\u4e49ViewModifier"}},p={authorsImageUrls:[]},w=[{value:"Getting ready",id:"getting-ready",children:[],level:2},{value:"How to do it\u2026",id:"how-to-do-it",children:[],level:2},{value:"ViewBuilder",id:"viewbuilder",children:[],level:2}],s={toc:w};function f(e){var t=e.components,a=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"headerimg",src:n(852).Z}),"\nApple\u5bf9ViewBuilder\u7684\u5b9a\u4e49\u662f: \u4e00\u4e2a\u81ea\u5b9a\u4e49\u53c2\u6570, \u80fd\u591f\u4ece\u95ed\u5305\u4e2d\u6784\u5efaViews\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06\u516c\u5171View\u62bd\u79bb\u51fa\u6765\uff0c\u4ee5ViewBuilder\u4f5c\u4e3a\u53c2\u6570\uff0c\u6765\u5b9e\u73b0\u5dee\u5f02\u3002"),(0,l.kt)("p",null,"\u672c\u7ae0\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2aSwiftUI View\uff1a",(0,l.kt)("strong",{parentName:"p"},"BlueCircle"),"\uff0c\u5b83\u4f1a\u5728content\u7684\u53f3\u8fb9\u653e\u7f6e\u4e00\u4e2ablue circle\u3002"),(0,l.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2aSwiftUI\u5de5\u7a0b\uff1a",(0,l.kt)("strong",{parentName:"p"},"UsingViewBuilder"),"\u3002"),(0,l.kt)("h2",{id:"how-to-do-it"},"How to do it\u2026"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9SwiftUI View"),(0,l.kt)("li",{parentName:"ol"},"\u53d6\u540d",(0,l.kt)("strong",{parentName:"li"},"BlueCircle")),(0,l.kt)("li",{parentName:"ol"},"\u5220\u9664",(0,l.kt)("strong",{parentName:"li"},"BlueCircle_Previews")),(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4ee3\u7801")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"struct BlueCircle<Content: View>: View {\n    let content: Content\n    \n    init(@ViewBuilder content: () -> Content) {\n        self.content = content()\n    }\n    \n    var body: some View {\n        HStack {\n            content\n            Spacer()\n            Circle().fill(Color.blue).frame(width: 20, height: 30)\n        }.padding()\n    }\n}\n")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"\u6253\u5f00ContentView\uff0c\u4f7f\u7528BlueCircle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'struct ContentView: View {\n    var body: some View {\n        BlueCircle {\n            Text("some text here")\n            Rectangle().fill(Color.red).frame(width: 40, height: 40)\n        }\n        BlueCircle {\n            Text("hello world")\n        }\n    }\n}\n')),(0,l.kt)("p",null,"\u6700\u7ec8\u5f97\u5230\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxoqchw6tej30hi0z0q3f.jpg",alt:"image-20211224104842400"})),(0,l.kt)("h2",{id:"viewbuilder"},"ViewBuilder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"@resultBuilder struct ViewBuilder\nstatic func buildBlock<Content>(_ content: Content) -> Content where Content : View\nstatic func buildBlock<C0, C1>(_ c0: C0, _ c1: C1) -> TupleView<(C0, C1)> where C0 : View, C1 : View\n....\n//\u6211\u4eec\u53ef\u4ee5\u770b\u5230ViewBuilder\u652f\u6301\u7684\u6700\u5927\u53c2\u6570\u4e3aC0\u5230C9,\u603b\u517110\u4e2aView\n//\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u5f53\u6211\u4eec\u6dfb\u52a0\u8d85\u8fc710\u4e2a\u5b50View\u540e\u4f1a\u62a5\u9519\u7684\u539f\u56e0\uff0c\u6b64\u65f6\u6211\u4eec\u9700\u8981\u7528Group\u6765\u51cf\u5c11\u76f4\u63a5\u5b50View\u7684\u6570\u91cf\nstatic func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9>(_ c0: C0, _ c1: C1, _ c2: C2, _ c3: C3, _ c4: C4, _ c5: C5, _ c6: C6, _ c7: C7, _ c8: C8, _ c9: C9) -> TupleView<(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9)> where C0 : View, C1 : View, C2 : View, C3 : View, C4 : View, C5 : View, C6 : View, C7 : View, C8 : View, C9 : View\n")))}f.isMDXComponent=!0},852:function(e,t,n){t.Z=n.p+"assets/images/Header-38344b7cc642a8ed808189212184aeaf.png"}}]);