"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[1139],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var f=n.createContext({}),u=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(f.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,f=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=i,g=s["".concat(f,".").concat(m)]||s[m]||p[m]||o;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=s;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4544:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return f},metadata:function(){return u},assets:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],c={title:"SwiftUI\u4e13\u8f91020-\u5c06\u96c6\u5408\u7ed1\u5b9a\u5230List",tags:["swiftUI"]},f=void 0,u={permalink:"/2021/11/23/SwiftUI\u4e13\u8f91-020-\u5c06\u96c6\u5408\u7ed1\u5b9a\u5230List",editUrl:"https://github.com/xing-ou/GxBlog/blog/2021-11-23-SwiftUI\u4e13\u8f91-020-\u5c06\u96c6\u5408\u7ed1\u5b9a\u5230List/index.md",source:"@site/blog/2021-11-23-SwiftUI\u4e13\u8f91-020-\u5c06\u96c6\u5408\u7ed1\u5b9a\u5230List/index.md",title:"SwiftUI\u4e13\u8f91020-\u5c06\u96c6\u5408\u7ed1\u5b9a\u5230List",description:"headerimg",date:"2021-11-23T00:00:00.000Z",formattedDate:"2021\u5e7411\u670823\u65e5",tags:[{label:"swiftUI",permalink:"/tags/swift-ui"}],readingTime:1.985,truncated:!0,authors:[],prevItem:{title:"SwiftUI\u4e13\u8f91021-\u4f7f\u7528\u53ef\u641c\u7d22\u5217\u8868",permalink:"/2021/11/24/SwiftUI\u4e13\u8f91-021-\u4f7f\u7528\u53ef\u641c\u7d22\u5217\u8868"},nextItem:{title:"SwiftUI\u4e13\u8f91019-\u6dfb\u52a0sections\u5230List\u4e2d",permalink:"/2021/11/22/SwiftUI\u4e13\u8f91-019-\u6dfb\u52a0sections\u5230List\u4e2d"}},l={authorsImageUrls:[]},p=[],s={toc:p};function m(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"headerimg",src:r(4464).Z}),"\n\u5728 SwiftUI \u4e2d\u4e00\u76f4\u53ef\u4ee5\u7f16\u8f91\u5217\u8868\uff0c\u4f46\u5728 WWDC 2021 \u548c SwiftUI 3 \u4e4b\u524d\uff0c\u8fd9\u6837\u505a\u975e\u5e38 \u6548\u7387\u4f4e\u4e0b\uff0c\u56e0\u4e3a SwiftUI \u4e0d\u652f\u6301\u7ed1\u5b9a\u5230\u96c6\u5408\u3002\u8ba9\u6211\u4eec\u5728\u96c6\u5408\u4e0a\u4f7f\u7528\u7ed1\u5b9a\u5e76\u8ba8\u8bba\u5b83\u73b0\u5728\u5982\u4f55\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u66f4\u597d\u5730\u5de5\u4f5c\u3002"))}m.isMDXComponent=!0},4464:function(e,t,r){t.Z=r.p+"assets/images/Header-4ff0963083dbcbb6a25dfbe9f0615ea2.png"}}]);