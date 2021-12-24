"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[1572],{3905:function(e,t,n){n.d(t,{Zo:function(){return w},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=i.createContext({}),u=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},w=function(e){var t=u(e.components);return i.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,w=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(a,".").concat(f)]||p[f]||s[f]||o;return n?i.createElement(d,l(l({ref:t},w),{},{components:n})):i.createElement(d,l({ref:t},w))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7042:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return w},default:function(){return p}});var i=n(3117),r=n(102),o=(n(7294),n(3905)),l=["components"],c={title:"7\u3001\u4f7f\u7528ViewBuilder\u6765\u5206\u79bb\u5c55\u793a",tags:["swiftUI"]},a=void 0,u={unversionedId:"swiftUI-cookbook/\u7b2c\u4e00\u7ae0-\u4f7f\u7528\u57fa\u672c\u7684 SwiftUI \u89c6\u56fe\u548c\u63a7\u4ef6/\u4f7f\u7528ViewBuilder\u6765\u5206\u79bb\u5c55\u793a",id:"swiftUI-cookbook/\u7b2c\u4e00\u7ae0-\u4f7f\u7528\u57fa\u672c\u7684 SwiftUI \u89c6\u56fe\u548c\u63a7\u4ef6/\u4f7f\u7528ViewBuilder\u6765\u5206\u79bb\u5c55\u793a",title:"7\u3001\u4f7f\u7528ViewBuilder\u6765\u5206\u79bb\u5c55\u793a",description:"Apple\u5bf9ViewBuilder\u7684\u5b9a\u4e49\u662f: \u4e00\u4e2a\u81ea\u5b9a\u4e49\u53c2\u6570, \u80fd\u591f\u4ece\u95ed\u5305\u4e2d\u6784\u5efaViews\u3002",source:"@site/docs/swiftUI-cookbook/01-\u7b2c\u4e00\u7ae0-\u4f7f\u7528\u57fa\u672c\u7684 SwiftUI \u89c6\u56fe\u548c\u63a7\u4ef6/07-\u4f7f\u7528ViewBuilder\u6765\u5206\u79bb\u5c55\u793a.md",sourceDirName:"swiftUI-cookbook/01-\u7b2c\u4e00\u7ae0-\u4f7f\u7528\u57fa\u672c\u7684 SwiftUI \u89c6\u56fe\u548c\u63a7\u4ef6",slug:"/swiftUI-cookbook/\u7b2c\u4e00\u7ae0-\u4f7f\u7528\u57fa\u672c\u7684 SwiftUI \u89c6\u56fe\u548c\u63a7\u4ef6/\u4f7f\u7528ViewBuilder\u6765\u5206\u79bb\u5c55\u793a",permalink:"/docs/swiftUI-cookbook/\u7b2c\u4e00\u7ae0-\u4f7f\u7528\u57fa\u672c\u7684 SwiftUI \u89c6\u56fe\u548c\u63a7\u4ef6/\u4f7f\u7528ViewBuilder\u6765\u5206\u79bb\u5c55\u793a",editUrl:"https://github.com/xing-ou/GxBlog/docs/swiftUI-cookbook/01-\u7b2c\u4e00\u7ae0-\u4f7f\u7528\u57fa\u672c\u7684 SwiftUI \u89c6\u56fe\u548c\u63a7\u4ef6/07-\u4f7f\u7528ViewBuilder\u6765\u5206\u79bb\u5c55\u793a.md",tags:[{label:"swiftUI",permalink:"/docs/tags/swift-ui"}],version:"current",sidebarPosition:7,frontMatter:{title:"7\u3001\u4f7f\u7528ViewBuilder\u6765\u5206\u79bb\u5c55\u793a",tags:["swiftUI"]},sidebar:"swiftUI-cookbook",previous:{title:"6\u3001\u81ea\u5b9a\u4e49ViewModifier",permalink:"/docs/swiftUI-cookbook/\u7b2c\u4e00\u7ae0-\u4f7f\u7528\u57fa\u672c\u7684 SwiftUI \u89c6\u56fe\u548c\u63a7\u4ef6/\u81ea\u5b9a\u4e49ViewModifier"},next:{title:"8\u3001\u4f7f\u7528SF Symbols\u663e\u793a\u7b80\u5355\u56fe\u5f62",permalink:"/docs/swiftUI-cookbook/\u7b2c\u4e00\u7ae0-\u4f7f\u7528\u57fa\u672c\u7684 SwiftUI \u89c6\u56fe\u548c\u63a7\u4ef6/\u4f7f\u7528SF-Symbols\u663e\u793a\u7b80\u5355\u56fe\u5f62"}},w=[{value:"Getting ready",id:"getting-ready",children:[],level:2},{value:"How to do it\u2026",id:"how-to-do-it",children:[],level:2},{value:"ViewBuilder",id:"viewbuilder",children:[],level:2}],s={toc:w};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apple\u5bf9ViewBuilder\u7684\u5b9a\u4e49\u662f: \u4e00\u4e2a\u81ea\u5b9a\u4e49\u53c2\u6570, \u80fd\u591f\u4ece\u95ed\u5305\u4e2d\u6784\u5efaViews\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06\u516c\u5171View\u62bd\u79bb\u51fa\u6765\uff0c\u4ee5ViewBuilder\u4f5c\u4e3a\u53c2\u6570\uff0c\u6765\u5b9e\u73b0\u5dee\u5f02\u3002"),(0,o.kt)("p",null,"\u672c\u7ae0\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2aSwiftUI View\uff1a",(0,o.kt)("strong",{parentName:"p"},"BlueCircle"),"\uff0c\u5b83\u4f1a\u5728content\u7684\u53f3\u8fb9\u653e\u7f6e\u4e00\u4e2ablue circle\u3002"),(0,o.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2aSwiftUI\u5de5\u7a0b\uff1a",(0,o.kt)("strong",{parentName:"p"},"UsingViewBuilder"),"\u3002"),(0,o.kt)("h2",{id:"how-to-do-it"},"How to do it\u2026"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u6587\u4ef6"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9SwiftUI View"),(0,o.kt)("li",{parentName:"ol"},"\u53d6\u540d",(0,o.kt)("strong",{parentName:"li"},"BlueCircle")),(0,o.kt)("li",{parentName:"ol"},"\u5220\u9664",(0,o.kt)("strong",{parentName:"li"},"BlueCircle_Previews")),(0,o.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4ee3\u7801")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"struct BlueCircle<Content: View>: View {\n    let content: Content\n    \n    init(@ViewBuilder content: () -> Content) {\n        self.content = content()\n    }\n    \n    var body: some View {\n        HStack {\n            content\n            Spacer()\n            Circle().fill(Color.blue).frame(width: 20, height: 30)\n        }.padding()\n    }\n}\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00ContentView\uff0c\u4f7f\u7528BlueCircle")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'struct ContentView: View {\n    var body: some View {\n        BlueCircle {\n            Text("some text here")\n            Rectangle().fill(Color.red).frame(width: 40, height: 40)\n        }\n        BlueCircle {\n            Text("hello world")\n        }\n    }\n}\n')),(0,o.kt)("p",null,"\u6700\u7ec8\u5f97\u5230\u7ed3\u679c"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxoqchw6tej30hi0z0q3f.jpg",alt:"image-20211224104842400"})),(0,o.kt)("h2",{id:"viewbuilder"},"ViewBuilder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@resultBuilder struct ViewBuilder\nstatic func buildBlock<Content>(_ content: Content) -> Content where Content : View\nstatic func buildBlock<C0, C1>(_ c0: C0, _ c1: C1) -> TupleView<(C0, C1)> where C0 : View, C1 : View\n....\n//\u6211\u4eec\u53ef\u4ee5\u770b\u5230ViewBuilder\u652f\u6301\u7684\u6700\u5927\u53c2\u6570\u4e3aC0\u5230C9,\u603b\u517110\u4e2aView\n//\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u5f53\u6211\u4eec\u6dfb\u52a0\u8d85\u8fc710\u4e2a\u5b50View\u540e\u4f1a\u62a5\u9519\u7684\u539f\u56e0\uff0c\u6b64\u65f6\u6211\u4eec\u9700\u8981\u7528Group\u6765\u51cf\u5c11\u76f4\u63a5\u5b50View\u7684\u6570\u91cf\nstatic func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9>(_ c0: C0, _ c1: C1, _ c2: C2, _ c3: C3, _ c4: C4, _ c5: C5, _ c6: C6, _ c7: C7, _ c8: C8, _ c9: C9) -> TupleView<(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9)> where C0 : View, C1 : View, C2 : View, C3 : View, C4 : View, C5 : View, C6 : View, C7 : View, C8 : View, C9 : View\n")))}p.isMDXComponent=!0}}]);