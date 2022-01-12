"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[2754],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(n),g=o,m=p["".concat(c,".").concat(g)]||p[g]||f[g]||i;return n?r.createElement(m,a(a({ref:e},u),{},{components:n})):r.createElement(m,a({ref:e},u))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4483:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return f},default:function(){return g}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={title:"SwiftUI\u4e13\u8f91040-\u663e\u793aconfirmationDialog",tags:["swiftUI"]},c=void 0,s={permalink:"/2021/12/13/SwiftUI\u4e13\u8f91-040-\u663e\u793aconfirmationDialog",editUrl:"https://github.com/xing-ou/GxBlog/blog/2021-12-13-SwiftUI\u4e13\u8f91-040-\u663e\u793aconfirmationDialog/index.md",source:"@site/blog/2021-12-13-SwiftUI\u4e13\u8f91-040-\u663e\u793aconfirmationDialog/index.md",title:"SwiftUI\u4e13\u8f91040-\u663e\u793aconfirmationDialog",description:"headerimg",date:"2021-12-13T00:00:00.000Z",formattedDate:"2021\u5e7412\u670813\u65e5",tags:[{label:"swiftUI",permalink:"/tags/swift-ui"}],readingTime:.91,truncated:!0,authors:[],prevItem:{title:"SwiftUI\u4e13\u8f91041-\u663e\u793asheets",permalink:"/2021/12/14/SwiftUI\u4e13\u8f91-041-\u663e\u793asheets"},nextItem:{title:"SwiftUI\u4e13\u8f91039-\u6dfb\u52a0action Button\u5230alert\u4e2d",permalink:"/2021/12/12/SwiftUI\u4e13\u8f91-039-\u6dfb\u52a0actionButton\u5230alert\u4e2d"}},u={authorsImageUrls:[]},f=[{value:"Getting ready",id:"getting-ready",children:[],level:2},{value:"How to do it",id:"how-to-do-it",children:[],level:2},{value:"How it works",id:"how-it-works",children:[],level:2}],p={toc:f};function g(t){var e=t.components,l=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"headerimg",src:n(2316).Z}),"\nConfirmation dialogs \u662f iOS 15 \u5f00\u59cb\u51fa\u73b0\u7684\u3002"),(0,i.kt)("p",null,"\u4ed6\u548cActionsheet\u7c7b\u4f3c\uff0c\u4e0d\u8fc7Actionsheet\u5df2\u7ecf\u88ab\u5e9f\u5f03\u4e86\u3002"),(0,i.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,i.kt)("p",null,"\u9996\u5148\u65b0\u5efa\u4e00\u4e2aSwiftUI\u9879\u76ee\uff1a",(0,i.kt)("strong",{parentName:"p"},"PresentingConfirmationDialogs")),(0,i.kt)("h2",{id:"how-to-do-it"},"How to do it"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e2aState\u63a7\u5236\u662f\u5426\u663e\u793aconfirmationDialog")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'@State private var showDialog = false\nvar title  = "Confirmation Dialog"\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e2a\u6309\u94ae\uff0c\u70b9\u51fb\u540e\uff0c\u663e\u793aconfirmationDialog")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'var body: some View {\n    Button("Present Confirmation Dialog") {\n        showDialog = true\n    }.confirmationDialog(title, isPresented: $showDialog) {\n        Button("Dismiss Dialog", role: .destructive) {\n\n        }\n        Button("Save") {\n\n        }\n        Button("Cancel", role: .cancel) {\n\n        }\n        Button("Print something to console") {\n            print("something")\n        }\n    } message: {\n        Text("""\n             Use Dialogs to give users alternatives for\n             completing a task\n            """)\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gy2v9afnolj309q0lit94.jpg",alt:"20220105161606"})),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,".confirmationDialog\u4fee\u9970\u7b26\u7528\u4e8e\u663e\u793a\u4e00\u4e2aconfirmationDialog\u3002title\u7528\u4e8e\u663e\u793atitle\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570binding\u63a7\u5236\u662f\u5426\u663e\u793a\uff0cactions\u63a7\u5236action btn, message\u63a7\u5236message\u7684\u663e\u793a"))}g.isMDXComponent=!0},2316:function(t,e,n){e.Z=n.p+"assets/images/Header-c239abadcae3a5a9e56adc36e57fa546.png"}}]);