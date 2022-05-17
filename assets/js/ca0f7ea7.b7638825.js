"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[6846],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,g=s["".concat(p,".").concat(m)]||s[m]||l[m]||i;return n?r.createElement(g,o(o({ref:t},f),{},{components:n})):r.createElement(g,o({ref:t},f))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},50158:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],c={title:"SwiftUI\u4e13\u8f91047-\u4f7f\u7528Canvas Api\u7ed8\u5236",tags:["swiftUI"]},p=void 0,u={permalink:"/2021/12/20/SwiftUI\u4e13\u8f91-047-\u4f7f\u7528CanvasApi\u7ed8\u5236",editUrl:"https://github.com/xing-ou/GxBlog/blog/2021-12-20-SwiftUI\u4e13\u8f91-047-\u4f7f\u7528CanvasApi\u7ed8\u5236/index.md",source:"@site/blog/2021-12-20-SwiftUI\u4e13\u8f91-047-\u4f7f\u7528CanvasApi\u7ed8\u5236/index.md",title:"SwiftUI\u4e13\u8f91047-\u4f7f\u7528Canvas Api\u7ed8\u5236",description:"headerimg",date:"2021-12-20T00:00:00.000Z",formattedDate:"2021\u5e7412\u670820\u65e5",tags:[{label:"swiftUI",permalink:"/tags/swift-ui"}],readingTime:2.06,truncated:!0,authors:[],frontMatter:{title:"SwiftUI\u4e13\u8f91047-\u4f7f\u7528Canvas Api\u7ed8\u5236",tags:["swiftUI"]},prevItem:{title:"SwiftUI\u4e13\u8f91048-\u5b9e\u73b0\u4e00\u4e2a\u73af\u5f62\u8fdb\u5ea6\u6761",permalink:"/2021/12/21/SwiftUI\u4e13\u8f91-048-\u5b9e\u73b0\u4e00\u4e2a\u73af\u5f62\u8fdb\u5ea6\u6761"},nextItem:{title:"SwiftUI\u4e13\u8f91046-\u81ea\u5b9a\u4e49shape\u4e2d\u7ed8\u5236\u66f2\u7ebf",permalink:"/2021/12/19/SwiftUI\u4e13\u8f91-046-\u81ea\u5b9a\u4e49shape\u4e2d\u7ed8\u5236\u66f2\u7ebf"}},f={authorsImageUrls:[]},l=[],s={toc:l};function m(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"headerimg",src:n(29443).Z,width:"700",height:"250"}),"\nUIkit\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u7ee7\u627fUIView\uff0c\u7136\u540e\u5728drawRect\u4e2d\u4f7f\u7528Core Graphic Api\u8fdb\u884c\u7ed8\u5236\u3002"),(0,i.kt)("p",null,"SwiftUI\u901a\u8fc7",(0,i.kt)("strong",{parentName:"p"},"Canvas"),"\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\uff0c\u6211\u4eec\u53ef\u4ee5\u5728Canvas\u4e2d\u4f7f\u7528Core Graphic \u8fdb\u884c\u7ed8\u5236\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u6765\u5b9e\u73b0\u4e00\u4e2a\u7ed8\u56feApp\u3002"))}m.isMDXComponent=!0},29443:function(e,t,n){t.Z=n.p+"assets/images/Header-026cf6112fdc09198797aad8a367d4f5.png"}}]);