"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[4678],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),f=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=f(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=f(r),d=i,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var f=2;f<o;f++)a[f]=r[f];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1984:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return f},toc:function(){return s}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=["components"],l={title:"SwiftUI\u4e13\u8f91006-\u81ea\u5b9a\u4e49ViewModifier",tags:["swiftUI"]},c=void 0,f={permalink:"/2021/11/09/SwiftUI\u4e13\u8f91-006-\u81ea\u5b9a\u4e49ViewModifier",editUrl:"https://github.com/xing-ou/GxBlog/blog/2021-11-09-SwiftUI\u4e13\u8f91-006-\u81ea\u5b9a\u4e49ViewModifier/index.md",source:"@site/blog/2021-11-09-SwiftUI\u4e13\u8f91-006-\u81ea\u5b9a\u4e49ViewModifier/index.md",title:"SwiftUI\u4e13\u8f91006-\u81ea\u5b9a\u4e49ViewModifier",description:"headerimg",date:"2021-11-09T00:00:00.000Z",formattedDate:"2021\u5e7411\u67089\u65e5",tags:[{label:"swiftUI",permalink:"/tags/swift-ui"}],readingTime:1.29,truncated:!0,authors:[],frontMatter:{title:"SwiftUI\u4e13\u8f91006-\u81ea\u5b9a\u4e49ViewModifier",tags:["swiftUI"]},prevItem:{title:"SwiftUI\u4e13\u8f91007-\u4f7f\u7528ViewBuilder\u6765\u5206\u79bb\u5c55\u793a",permalink:"/2021/11/10/SwiftUI\u4e13\u8f91-007-\u4f7f\u7528ViewBuilder\u6765\u5206\u79bb\u5c55\u793a"},nextItem:{title:"SwiftUI\u4e13\u8f91005-\u5404\u79cdpickers",permalink:"/2021/11/08/SwiftUI\u4e13\u8f91-005-\u5404\u79cdpickers"}},p={authorsImageUrls:[]},s=[{value:"Getting ready",id:"getting-ready",level:2},{value:"How to do it\u2026",id:"how-to-do-it",level:2},{value:"How it works\u2026",id:"how-it-works",level:2}],u={toc:s};function d(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"headerimg",src:r(66084).Z,width:"700",height:"250"}),"\nSwiftUI\u4e3a\u4f60\u63d0\u4f9b\u4e86\u81ea\u5b9a\u4e49modifiers\u7684\u80fd\u529b\u3002\n\u4f60\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49modifiers\u5c06\u591a\u4e2amodifiers\u5408\u6210\u4e00\u4e2a\u3002\n\u672c\u7ae0\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49modifier\uff0c\u4ed6\u80fd\u591f\u4e3aTextView\u6dfb\u52a0\u5706\u89d2\u548c\u80cc\u666f\u3002"),(0,o.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,o.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2aSwiftUI\u5de5\u7a0b",(0,o.kt)("strong",{parentName:"p"},"UsingViewModifiers"),"\u3002"),(0,o.kt)("h2",{id:"how-to-do-it"},"How to do it\u2026"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4fee\u6539",(0,o.kt)("strong",{parentName:"li"},"ContentView"),"\u4e2d\u7684text\u4e3a",(0,o.kt)("strong",{parentName:"li"},"Perfect"),"\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'Text("Perfect")\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"ContentView.swift"),"\u4e2d\uff0c\u65b0\u5efa\u4e00\u4e2astruct\uff0c\u9075\u5faa",(0,o.kt)("strong",{parentName:"li"},"ViewModifier"),"\uff0c\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570",(0,o.kt)("strong",{parentName:"li"},"Color"),"\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"struct BackgroundStyle: ViewModifier {\n    var bgColor: Color\n    func body(content: Content) -> some View{\n        content\n        .frame(width:UIScreen.main.bounds.width * 0.3)\n        .foregroundColor(Color.black)\n        .padding()\n        .background(bgColor)\n        .cornerRadius(CGFloat(20))\n    }\n}\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u4e3aText\u6dfb\u52a0\u4e00\u4e2a",(0,o.kt)("strong",{parentName:"li"},"modifier"),"\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'Text("Perfect").modifier(BackgroundStyle(bgColor:.blue))\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u5f53\u7136\uff0c\u5982\u679c\u4f60\u4e0d\u60f3\u7528",(0,o.kt)("strong",{parentName:"li"},"modifier"),", \u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2aextension\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"extension View {\n    func backgroundStyle(color: Color) -> some View{\n        self.modifier(BackgroundStyle(bgColor: color))\n    }\n}\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"\u5c06\u6211\u4eec\u7684modifier\u4fee\u6539\u4e3a\u521a\u521a\u7684extension")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'Text("Perfect").backgroundStyle(color: Color.red)\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxo31sxp0vj30fg0v80t3.jpg",alt:"image-20211223212239097"})),(0,o.kt)("h2",{id:"how-it-works"},"How it works\u2026"),(0,o.kt)("p",null,"\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"p"},"ViewModifier"),"\u901a\u8fc7\u4fee\u6539\u539f\u6765\u4fee\u9970\u7684View\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u7684View  \u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u901a\u8fc7\u9075\u5faaViewModifier\u534f\u8bae\u6765\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49modifier\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7.modifier()\u6765\u5e94\u7528\u6211\u4eec\u81ea\u5b9a\u4e49\u7684modifier\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7extension\u6765\u6dfb\u52a0\u66f4\u65b9\u4fbf\u7684Api\u3002"))}d.isMDXComponent=!0},66084:function(e,t,r){t.Z=r.p+"assets/images/Header-e9bab21e68fe9829dde278252daea272.png"}}]);