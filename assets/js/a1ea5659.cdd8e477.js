"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[715],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var f=n.createContext({}),l=function(t){var e=n.useContext(f),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(f.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,f=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),s=l(r),m=i,I=s["".concat(f,".").concat(m)]||s[m]||p[m]||o;return r?n.createElement(I,a(a({ref:e},u),{},{components:r})):n.createElement(I,a({ref:e},u))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=s;var c={};for(var f in e)hasOwnProperty.call(e,f)&&(c[f]=e[f]);c.originalType=t,c.mdxType="string"==typeof t?t:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4936:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return f},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],c={title:"SwiftUI\u4e13\u8f91009-SwiftUI\u4e2d\u4f7f\u7528UIKit",tags:["swiftUI"]},f=void 0,l={permalink:"/2021/11/12/SwiftUI\u4e13\u8f91-009-SwiftUI\u4e2d\u4f7f\u7528UIKit",editUrl:"https://github.com/xing-ou/GxBlog/blog/2021-11-12-SwiftUI\u4e13\u8f91-009-SwiftUI\u4e2d\u4f7f\u7528UIKit/index.md",source:"@site/blog/2021-11-12-SwiftUI\u4e13\u8f91-009-SwiftUI\u4e2d\u4f7f\u7528UIKit/index.md",title:"SwiftUI\u4e13\u8f91009-SwiftUI\u4e2d\u4f7f\u7528UIKit",description:"headerimg",date:"2021-11-12T00:00:00.000Z",formattedDate:"2021\u5e7411\u670812\u65e5",tags:[{label:"swiftUI",permalink:"/tags/swift-ui"}],readingTime:1.77,truncated:!0,authors:[],prevItem:{title:"SwiftUI\u4e13\u8f91010-\u5df2\u6709App\u4e2d\u4f7f\u7528SwiftUI",permalink:"/2021/11/13/SwiftUI\u4e13\u8f91-010-\u5df2\u6709App\u4e2d\u4f7f\u7528SwiftUI"},nextItem:{title:"SwiftUI\u4e13\u8f91008-\u4f7f\u7528SF Symbols\u663e\u793a\u7b80\u5355\u56fe\u5f62",permalink:"/2021/11/11/SwiftUI\u4e13\u8f91-008-\u4f7f\u7528SFSymbols\u663e\u793a\u7b80\u5355\u56fe\u5f62"}},u={authorsImageUrls:[]},p=[],s={toc:p};function m(t){var e=t.components,c=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,c,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"headerimg",src:r(6289).Z}),"\nSwiftUI \u662f \u5728 WWDC 2019 \u4e0a\u5ba3\u5e03 \u7684\uff0c\u4ec5\u9002\u7528\u4e8e\u8fd0\u884c iOS 13 \u53ca\u66f4\u9ad8\u7248\u672c\u7684\u8bbe\u5907\u3002\u7531\u4e8e\u5176\u76f8\u5bf9\u4e0d\u6210\u719f\uff0c\u4e0e UIKit \u76f8\u6bd4\uff0cSwiftUI \u53ef\u80fd\u7f3a\u4e4f\u5e7f\u6cdb\u7684 API \u652f\u6301\u3002\u4f8b\u5982\uff0c\u622a\u81f3 2021 \u5e74 7 \u6708\uff0c\u53ea\u80fd\u4f7f\u7528 UIKit \u7684",(0,o.kt)("strong",{parentName:"p"},"UIImagePickerController"),"\u9009\u62e9\u56fe\u7247\u548c\u89c6\u9891\u3002\u56e0\u6b64\uff0c\u9700\u8981\u5728 SwiftUI \u4e2d\u5b9e\u73b0\u67d0\u4e9b UIKit API\u3002"),(0,o.kt)("p",null,"\u672c\u7ae0\uff0c\u6211\u4eec\u5c06\u770b\u770b\u5982\u4f55\u5728 SwiftUI \u4e2d\u4f7f\u7528 UIKit API\u3002\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a\u5305\u88c5",(0,o.kt)("strong",{parentName:"p"},"UIActivityIndicatorView"),"\u7684View\uff0c\u7136\u540e\u5728 SwiftUI \u4e2d\u663e\u793a\u4e00\u4e2aActivityIndicator\u3002"))}m.isMDXComponent=!0},6289:function(t,e,r){e.Z=r.p+"assets/images/Header-57db6c98c0a546f110853ebf926a3850.png"}}]);