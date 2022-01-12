"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[9248],{3905:function(e,t,n){n.d(t,{Zo:function(){return w},kt:function(){return d}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},w=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,w=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?i.createElement(f,a(a({ref:t},w),{},{components:n})):i.createElement(f,a({ref:t},w))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1781:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return w},default:function(){return u}});var i=n(3117),o=n(102),r=(n(7294),n(3905)),a=["components"],c={title:"3\u3001\u9884\u89c8View\u5d4c\u5165NavigationView",tags:["swiftUI"]},l=void 0,s={unversionedId:"swiftUI-cookbook/\u7b2c\u56db\u7ae0-SwiftUI\u7684\u9884\u89c8/\u9884\u89c8View\u5d4c\u5165NavigationView",id:"swiftUI-cookbook/\u7b2c\u56db\u7ae0-SwiftUI\u7684\u9884\u89c8/\u9884\u89c8View\u5d4c\u5165NavigationView",title:"3\u3001\u9884\u89c8View\u5d4c\u5165NavigationView",description:"\u6709\u4e9bView\u81ea\u8eab\u5e76\u4e0d\u5305\u542bNavigationView\uff0c\u4f46\u662f\u4ed6\u53c8\u5c5e\u4e8eNavigationView stack\u4e2d\u7684\u4e00\u90e8\u5206\u3002",source:"@site/docs/swiftUI-cookbook/04-\u7b2c\u56db\u7ae0-SwiftUI\u7684\u9884\u89c8/03-\u9884\u89c8View\u5d4c\u5165NavigationView.md",sourceDirName:"swiftUI-cookbook/04-\u7b2c\u56db\u7ae0-SwiftUI\u7684\u9884\u89c8",slug:"/swiftUI-cookbook/\u7b2c\u56db\u7ae0-SwiftUI\u7684\u9884\u89c8/\u9884\u89c8View\u5d4c\u5165NavigationView",permalink:"/docs/swiftUI-cookbook/\u7b2c\u56db\u7ae0-SwiftUI\u7684\u9884\u89c8/\u9884\u89c8View\u5d4c\u5165NavigationView",editUrl:"https://github.com/xing-ou/GxBlog/docs/swiftUI-cookbook/04-\u7b2c\u56db\u7ae0-SwiftUI\u7684\u9884\u89c8/03-\u9884\u89c8View\u5d4c\u5165NavigationView.md",tags:[{label:"swiftUI",permalink:"/docs/tags/swift-ui"}],version:"current",sidebarPosition:3,frontMatter:{title:"3\u3001\u9884\u89c8View\u5d4c\u5165NavigationView",tags:["swiftUI"]},sidebar:"swiftUI-cookbook",previous:{title:"2\u3001\u9884\u89c8\u52a8\u6001\u5b57\u4f53dynamicTypeSize",permalink:"/docs/swiftUI-cookbook/\u7b2c\u56db\u7ae0-SwiftUI\u7684\u9884\u89c8/\u9884\u89c8\u52a8\u6001\u5b57\u4f53dynamicTypeSize"},next:{title:"4\u3001\u9884\u89c8\u4e0d\u540c\u8bbe\u5907\u4e0a\u7684\u5e03\u5c40",permalink:"/docs/swiftUI-cookbook/\u7b2c\u56db\u7ae0-SwiftUI\u7684\u9884\u89c8/\u9884\u89c8\u4e0d\u540c\u8bbe\u5907\u4e0a\u7684\u5e03\u5c40"}},w=[{value:"Getting ready",id:"getting-ready",children:[],level:2},{value:"How to do it",id:"how-to-do-it",children:[],level:2},{value:"How it works",id:"how-it-works",children:[],level:2}],p={toc:w};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6709\u4e9bView\u81ea\u8eab\u5e76\u4e0d\u5305\u542bNavigationView\uff0c\u4f46\u662f\u4ed6\u53c8\u5c5e\u4e8eNavigationView stack\u4e2d\u7684\u4e00\u90e8\u5206\u3002\n\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u8981\u770b\u5bfc\u822a\u680f\u7684\u8bdd\uff0c\u5c31\u9700\u8981\u8fd0\u884cApp\u5e76\u5bfc\u822a\u5230\u5bf9\u5e94\u754c\u9762\u3002\n\u4e0d\u8fc7\uff0c\u9884\u89c8\u63d0\u4f9b\u4e86\u4e00\u79cd\u8282\u7701\u65f6\u95f4\u7684\u65b9\u5f0f\u6765\u5b9e\u65f6\u67e5\u770b UI \u66f4\u6539\uff0c\u800c\u65e0\u9700\u91cd\u65b0\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,r.kt)("p",null,"\u6211\u4eec\u5148\u521b\u5efa\u4e00\u4e2aSwiftUI\u5de5\u7a0b\uff1a",(0,r.kt)("strong",{parentName:"p"},"PreviewingInNavigationView")),(0,r.kt)("h2",{id:"how-to-do-it"},"How to do it"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u66ff\u6362\u9ed8\u8ba4\u7684Text\u4e3a\u4ee5\u4e0b\u4ee3\u7801")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'struct ContentView: View {\n    var body: some View {\n        NavigationView {\n            VStack {\n                NavigationLink(destination: SecondView(someText: "Sample text")) {\n                    Text("Go to second view")\n                        .foregroundColor(Color.white)\n                        .padding()\n                        .background(Color.black)\n                        .cornerRadius(25)\n                }\n\n            }.navigationBarTitle("Previews", displayMode: .inline)\n        }\n    }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5b9e\u73b0\u62a5\u9519\u7684",(0,r.kt)("strong",{parentName:"li"},"SecondView"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'\nstruct SecondView: View {\n    var someText: String\n        var body: some View {\n            Text(someText)\n                .navigationBarTitle("Second View ", displayMode: .inline)\n        }\n}\n\n///\u8fd9\u4e2apreview\uff0c\u5e76\u6ca1\u6709\u770b\u5230\u8bbe\u7f6e\u7684\u5bfc\u822a\u680ftitle, \u6211\u4eec\u9700\u8981\u8fd0\u884c\u540e\u8fdb\u5165\u8fd9\u4e2a\u754c\u9762\u624d\u80fd\u770b\u5230\nstruct SecondView_Previews: PreviewProvider {\n    static var previews: some View {\n        SecondView()\n    }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539SecondView_Previews\uff0c\u5d4c\u5165NavigationView")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'struct SecondView_Previews: PreviewProvider {\n    static var previews: some View {\n        NavigationView {\n            SecondView(someText: "Testting")\n        }\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxw231yqswj30dy0r8wew.jpg",alt:"image-20211230185348484"})),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"\u5904\u4e8e\u5bfc\u822a\u6808\u91cc\u7684\u754c\u9762\u7684",(0,r.kt)("strong",{parentName:"p"},".navigationBarTitle()"),"\uff0c\u9884\u89c8\u662f\u770b\u4e0d\u89c1\uff0c\u6211\u4eec\u53ef\u4ee5\u4fee\u6539\u9884\u89c8\u7684\u4ee3\u7801\uff0c\u5c06\u5176\u5d4c\u5165NavigationView\u5c31\u80fd\u770b\u5230\u4e86\u3002"))}u.isMDXComponent=!0}}]);