"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[7656],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=n.createContext({}),g=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=g(e.components);return n.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=g(a),d=i,u=c["".concat(m,".").concat(d)]||c[d]||p[d]||r;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var g=2;g<r;g++)l[g]=a[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2767:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return g},assets:function(){return s},toc:function(){return p},default:function(){return d}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),l=["components"],o={title:"SwiftUI\u4e13\u8f91003-\u4f7f\u7528Image",tags:["swiftUI"]},m=void 0,g={permalink:"/2021/11/06/SwiftUI\u4e13\u8f91-003-\u4f7f\u7528Image",editUrl:"https://github.com/xing-ou/GxBlog/blog/2021-11-06-SwiftUI\u4e13\u8f91-003-\u4f7f\u7528Image/index.md",source:"@site/blog/2021-11-06-SwiftUI\u4e13\u8f91-003-\u4f7f\u7528Image/index.md",title:"SwiftUI\u4e13\u8f91003-\u4f7f\u7528Image",description:"headerimg",date:"2021-11-06T00:00:00.000Z",formattedDate:"2021\u5e7411\u67086\u65e5",tags:[{label:"swiftUI",permalink:"/tags/swift-ui"}],readingTime:3.67,truncated:!0,authors:[],prevItem:{title:"SwiftUI\u4e13\u8f91004-Button\u4ee5\u53ca\u8df3\u8f6c",permalink:"/2021/11/07/SwiftUI\u4e13\u8f91-004-Button\u4ee5\u53ca\u8df3\u8f6c"},nextItem:{title:"SwiftUI\u4e13\u8f91002-\u5904\u7406\u6587\u672c",permalink:"/2021/11/05/SwiftUI\u4e13\u8f91-002-\u5904\u7406\u6587\u672c"}},s={authorsImageUrls:[]},p=[{value:"Getting ready",id:"getting-ready",children:[],level:2},{value:"How to do it\u2026",id:"how-to-do-it",children:[],level:2},{value:"How it works\u2026",id:"how-it-works",children:[],level:2},{value:"Image",id:"image",children:[{value:"Creating an Image",id:"creating-an-image",children:[],level:3},{value:"Creating an Image for Use as a Control",id:"creating-an-image-for-use-as-a-control",children:[],level:3},{value:"Creating an Image for Decorative Use",id:"creating-an-image-for-decorative-use",children:[],level:3},{value:"Creating a System Symbol Image",id:"creating-a-system-symbol-image",children:[],level:3},{value:"Creating an Image from a System Representation",id:"creating-an-image-from-a-system-representation",children:[],level:3},{value:"Resizing and Scaling Images",id:"resizing-and-scaling-images",children:[],level:3},{value:"Specifying Image Rendering Behavior",id:"specifying-image-rendering-behavior",children:[],level:3}],level:2}],c={toc:p};function d(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"headerimg",src:a(7435).Z}),"\n\u8fd9\u4e00\u7ae0\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u6dfb\u52a0Image\u5230View\u4e2d\u3002"),(0,r.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,r.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2aSwiftUI\u5de5\u7a0b\uff0c\u53eb\u505a",(0,r.kt)("strong",{parentName:"p"},"ImageApp")),(0,r.kt)("h2",{id:"how-to-do-it"},"How to do it\u2026"),(0,r.kt)("p",null,"\u9996\u5148\u8ba9\u6211\u4eec\u6dfb\u52a0\u4e00\u4e9b\u56fe\u7247\u5230Assert\u4e2d\uff0c\u7136\u540e\u6211\u4eec\u518d\u4ecb\u7ecd\u4e00\u4e9bmodifier\u6765\u4fee\u6539\u56fe\u7247\u6837\u5f0f\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u66ff\u6362Text\u4e3aVStack"),(0,r.kt)("li",{parentName:"ol"},"\u4ece",(0,r.kt)("a",{parentName:"li",href:"https://github.com/PacktPublishing/SwiftUI-Cookbook-2nd-Edition/tree/main/Resources/Chapter01/recipe3%E4%B8%8B%E8%BD%BD%E5%9B%BE%E7%89%87"},"https://github.com/PacktPublishing/SwiftUI-Cookbook-2nd-Edition/tree/main/Resources/Chapter01/recipe3\u4e0b\u8f7d\u56fe\u7247")),(0,r.kt)("li",{parentName:"ol"},"\u62d6\u52a8\u56fe\u7247\u5230Asserts\u4e2d"),(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"Image"),"\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"VStack\u4e2d"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'Image("dogs1")\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNly1gxlubi8eadj30d40ou3zy.jpg",alt:"image-20211221224926711"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},".resizable()"),"modifier, \u4ed6\u80fd\u8ba9SwiftUI\u8c03\u6574\u56fe\u7247\u5927\u5c0f\u4ee5\u9002\u5e94\u53ef\u4ee5\u7528\u7a7a\u95f4\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'Image("dogs1")\n.resizable()\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNly1gxlucuqitnj30cy0ootae.jpg",alt:"image-20211221225044534"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u6211\u4eec\u770b\u5230\u56fe\u7247\u88ab\u538b\u7f29\u4e86\uff0c\u7ee7\u7eed\u6dfb\u52a0\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},".aspectRatio"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'Image("dogs1")\n    .resizable()\n    .aspectRatio(contentMode: .fit)\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNly1gxlufwjo2cj30cc0o8dgm.jpg",alt:"image-20211221225341902"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"\u7ee7\u7eed\u6dfb\u52a0 ",(0,r.kt)("strong",{parentName:"li"},"dog-and-nature"),"\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"VStack"),"\u4e2d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'Image("dog-and-nature")\n    .resizable()\n    .aspectRatio(contentMode: .fit)\n    .frame(width:300, height:200)\n    .clipShape(Circle())\n    .overlay(Circle().stroke(Color.blue, lineWidth: 6))\n    .shadow(radius: 10)\n')),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"\u6211\u4eec\u5199\u4e2a\u5de5\u5177\u65b9\u6cd5\u6765\u83b7\u53d6UIImage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'func getImageFromUIImage(image:String) -> UIImage {\n    guard let img = UIImage(named: image) else {\n        fatalError("Unable to load image")\n    }\n    return img\n}\n')),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"\u7136\u540e\u4f7f\u7528UIImage\u6765\u52a0\u8f7d\u56fe\u7247")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'Image(uiImage: getImageFromUIImage(image:"dog2"))\n    .resizable()\n    .frame(width: 200, height: 200)\n    .aspectRatio(contentMode: .fit)\n')),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"\u6700\u7ec8\u6548\u679c")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNly1gxlumbs7t0j30cq0pa0u9.jpg",alt:"image-20211221225942417"})),(0,r.kt)("h2",{id:"how-it-works"},"How it works\u2026"),(0,r.kt)("p",null,"\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"Image"),"\u5230View\u4e0a\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Image"),"\u9ed8\u8ba4\u663e\u793a\u539f\u59cb\u5c3a\u5bf8\u3002\u56fe\u7247\u53ef\u80fd\u5927\u4e86\uff0c\u4e5f\u53ef\u80fd\u5c0f\u4e86\u3002"),(0,r.kt)("p",null,"\u8981\u8ba9",(0,r.kt)("inlineCode",{parentName:"p"},"Image"),"\u9002\u5e94\u5c4f\u5e55\u5927\u5c0f\uff0c\u6211\u4eec\u9700\u8981\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},".resizable"),"modifier\u3002\u8fd9\u4f1a\u8ba9",(0,r.kt)("inlineCode",{parentName:"p"},"Image"),"\u7f29\u653e\u4ee5\u5360\u6ee1\u53ef\u7528\u7a7a\u95f4\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u7f29\u653e\u7684\u62c9\u4f38\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},".aspectRatio"),"modifier\u3002"),(0,r.kt)("p",null,"\u4f46aspectFill\u65f6\uff0c\u56fe\u7247\u53ef\u80fd\u8d85\u51fa\u8303\u56f4\uff0c\u6211\u4eec\u53ef\u4ee5\u7528",(0,r.kt)("inlineCode",{parentName:"p"},".clip()"),"\u88c1\u51cf\u6389"),(0,r.kt)("p",null,"\u5982\u679c\u6211\u4eec\u8981\u9650\u5236\u56fe\u7247\u5927\u5c0f\u56fa\u5b9a\u4e3a\u67d0\u4e2a\u503c\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},".frame"),"modifier\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u88c1\u526a\u56fe\u7247\u4e3a\u67d0\u4e2a\u5f62\u72b6\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},".clipShape"),"modifier\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},".overlay"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},".shadow"),"\u6765\u6dfb\u52a0\u8fb9\u6846\u548c\u9634\u5f71\u3002"),(0,r.kt)("p",null,"\u6ce8\u610fmodifer\u7684\u987a\u5e8f\u6bd4\u8f83\u91cd\u8981\uff0c\u4e0d\u540c\u987a\u5e8f\u7684\u7ec4\u5408\u53ef\u80fd\u5f97\u5230\u4e0d\u4e00\u6837\u7684\u7ed3\u679c\u3002"),(0,r.kt)("h2",{id:"image"},"Image"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4e2d\u8d44\u6e90\u4e2d\u521b\u5efaImage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ecebundle\u4e2d\u7684\u8d44\u6e90\u6587\u4ef6\u521b\u5efa"),(0,r.kt)("li",{parentName:"ul"},"\u4eceUIImage/NSImage\u521b\u5efa"),(0,r.kt)("li",{parentName:"ul"},"\u4eceCGImage\u521b\u5efa"),(0,r.kt)("li",{parentName:"ul"},"\u4eceSF Symbols\u521b\u5efa")),(0,r.kt)("h3",{id:"creating-an-image"},"Creating an Image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"//\u901a\u8fc7name\u521d\u59cb\u5316\uff0cbundle\u4e3anil\u9ed8\u8ba4\u4e3amain bundle\ninit(_ name: String, bundle: Bundle? = nil)\n\n")),(0,r.kt)("h3",{id:"creating-an-image-for-use-as-a-control"},"Creating an Image for Use as a Control"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"//\u548c\u4e0a\u9762\u7684\u7c7b\u4f3c\uff0c label\u7528\u4f5caccessibility\ninit(_ name: String, bundle: Bundle? = nil, label: Text)\ninit(_ cgImage: CGImage, scale: CGFloat, orientation: Image.Orientation = .up, label: Text)\n")),(0,r.kt)("h3",{id:"creating-an-image-for-decorative-use"},"Creating an Image for Decorative Use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"///\u521b\u5efa\u88c5\u9970\u6027\u7684image\uff0c\u4e0d\u4f1a\u6709accessibility\ninit(decorative name: String, bundle: Bundle? = nil)\ninit(decorative cgImage: CGImage, scale: CGFloat, orientation: Image.Orientation = .up)\n")),(0,r.kt)("h3",{id:"creating-a-system-symbol-image"},"Creating a System Symbol Image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"init(systemName: String)\n")),(0,r.kt)("h3",{id:"creating-an-image-from-a-system-representation"},"Creating an Image from a System Representation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"///\u901a\u8fc7\u5e73\u53f0\u5bf9\u5e94\u7684Image\u521d\u59cb\u5316\ninit(uiImage: UIImage)\ninit(nsImage: NSImage)\n")),(0,r.kt)("h3",{id:"resizing-and-scaling-images"},"Resizing and Scaling Images"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"/// \u62c9\u4f38\uff0cEdgeInsets\u4e2d\u95f4\u7684\u533a\u57df\u4e0d\u62c9\u4f38\uff0c\u56db\u5468\u62c9\u4f38\uff0cResizingMode\u5236\u5b9a\u4e86\u62c9\u4f38\u65b9\u5f0f\nfunc resizable(capInsets: EdgeInsets = EdgeInsets(), resizingMode: Image.ResizingMode = .stretch) -> Image\n")),(0,r.kt)("h3",{id:"specifying-image-rendering-behavior"},"Specifying Image Rendering Behavior"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"///\u8bbe\u7f6esymble image\u7684render\u65b9\u5f0f\nfunc symbolRenderingMode(_ mode: SymbolRenderingMode?) -> Image\n//\u4e24\u79cdmode: original:\u56fe\u7247\u672c\u8272 temple: \u5c06\u6240\u6709\u4e0d\u900f\u660e\u7684\u989c\u8272\u6e32\u67d3\u4e3aforgroundColor\u3002\nfunc renderingMode(_ renderingMode: Image.TemplateRenderingMode?) -> Image\n///\u6e32\u67d3\u90a3\u79cd\u9700\u8981\u63d2\u503c\u7684\u56fe\u7247\uff0c\u6307\u5b9a\u63d2\u503c\u8d28\u91cf\nfunc interpolation(_ interpolation: Image.Interpolation) -> Image\n///\u662f\u5426\u5f00\u542f\u53cd\u952f\u9f7f\nfunc antialiased(_ isAntialiased: Bool) -> Image\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNly1gxlvhx2yyuj30yq0jqwgq.jpg",alt:"image-20211221233014594"})))}d.isMDXComponent=!0},7435:function(e,t,a){t.Z=a.p+"assets/images/Header-331a531dfcad173148f16d48630bd90a.png"}}]);