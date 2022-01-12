"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[6963],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3615:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={title:"SwiftUI\u4e13\u8f91047-\u4f7f\u7528Canvas Api\u7ed8\u5236",tags:["swiftUI"]},s=void 0,p={permalink:"/2021/12/20/SwiftUI\u4e13\u8f91-047-\u4f7f\u7528CanvasApi\u7ed8\u5236",editUrl:"https://github.com/xing-ou/GxBlog/blog/2021-12-20-SwiftUI\u4e13\u8f91-047-\u4f7f\u7528CanvasApi\u7ed8\u5236/index.md",source:"@site/blog/2021-12-20-SwiftUI\u4e13\u8f91-047-\u4f7f\u7528CanvasApi\u7ed8\u5236/index.md",title:"SwiftUI\u4e13\u8f91047-\u4f7f\u7528Canvas Api\u7ed8\u5236",description:"headerimg",date:"2021-12-20T00:00:00.000Z",formattedDate:"2021\u5e7412\u670820\u65e5",tags:[{label:"swiftUI",permalink:"/tags/swift-ui"}],readingTime:2.06,truncated:!0,authors:[],prevItem:{title:"SwiftUI\u4e13\u8f91048-\u5b9e\u73b0\u4e00\u4e2a\u73af\u5f62\u8fdb\u5ea6\u6761",permalink:"/2021/12/21/SwiftUI\u4e13\u8f91-048-\u5b9e\u73b0\u4e00\u4e2a\u73af\u5f62\u8fdb\u5ea6\u6761"},nextItem:{title:"SwiftUI\u4e13\u8f91046-\u81ea\u5b9a\u4e49shape\u4e2d\u7ed8\u5236\u66f2\u7ebf",permalink:"/2021/12/19/SwiftUI\u4e13\u8f91-046-\u81ea\u5b9a\u4e49shape\u4e2d\u7ed8\u5236\u66f2\u7ebf"}},c={authorsImageUrls:[]},u=[{value:"Getting ready",id:"getting-ready",children:[],level:2},{value:"How to do it\u2026",id:"how-to-do-it",children:[],level:2},{value:"How it works\u2026",id:"how-it-works",children:[],level:2}],d={toc:u};function f(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"headerimg",src:n(7860).Z}),"\nUIkit\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u7ee7\u627fUIView\uff0c\u7136\u540e\u5728drawRect\u4e2d\u4f7f\u7528Core Graphic Api\u8fdb\u884c\u7ed8\u5236\u3002"),(0,i.kt)("p",null,"SwiftUI\u901a\u8fc7",(0,i.kt)("strong",{parentName:"p"},"Canvas"),"\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\uff0c\u6211\u4eec\u53ef\u4ee5\u5728Canvas\u4e2d\u4f7f\u7528Core Graphic \u8fdb\u884c\u7ed8\u5236\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u6765\u5b9e\u73b0\u4e00\u4e2a\u7ed8\u56feApp\u3002"),(0,i.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2aSwiftUI\u5de5\u7a0b\uff1a",(0,i.kt)("strong",{parentName:"p"},"Drawing")),(0,i.kt)("h2",{id:"how-to-do-it"},"How to do it\u2026"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9996\u5148\u6211\u4eec\u521b\u5efa\u4e2aLine\u6570\u636e\u7ed3\u6784, \u5e76\u5728ContentView\u4e2d\u589e\u52a0\u4e00\u4e2aState")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"struct Line {\n    var points: [CGPoint]\n}\nstruct ContentView: View {\n    @State var lines: [Line] = []\n    var body: some View {\n        \n    }\n}\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5728body\u4e2d\uff0c\u6211\u4eec\u52a0\u5165Canvas\uff0c\u80fd\u591f\u5c06lines\u7ed8\u5236\u51fa\u6765")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"var body: some View {\n  Canvas { ctx, size in\n      for line in self.lines {\n          var path = Path()\n          path.addLines(line.points)\n          ctx.stroke(path, with: .color(.red),style: .init(lineWidth: 5, lineCap: .round, lineJoin: .round))\n      }\n  }\n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u6211\u4eec\u6dfb\u52a0\u4e2a\u624b\u52bf\uff0c\u80fd\u591f\u6839\u636e\u624b\u52bf\uff0c\u66f4\u65b0lines")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"var body: some View {\n        Canvas { ctx, size in\n            for line in self.lines {\n                var path = Path()\n                path.addLines(line.points)\n                ctx.stroke(path, with: .color(.red),style: .init(lineWidth: 5, lineCap: .round, lineJoin: .round))\n            }\n        }.gesture(DragGesture(minimumDistance: 0, coordinateSpace: .local).onChanged({ value in\n            let position = value.location\n            if value.translation == .zero {\n                lines.append(Line(points: [position]))\n            } else{\n                guard let lastIdx = lines.indices.last else {\n                    return\n                }\n                lines[lastIdx].points.append(position)\n            }\n        }))\n    }\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gy4c3ggzlyj309q0l1aap.jpg",alt:"aaaa"})),(0,i.kt)("h2",{id:"how-it-works"},"How it works\u2026"),(0,i.kt)("p",null,"\u6574\u4e2aapp\u4e3b\u8981\u5206\u4e3a2\u90e8\u5206\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,i.kt)("strong",{parentName:"li"},"points"),"\u6570\u7ec4\u8fdb\u884c\u7ed8\u5236\uff1aCanvas\u63d0\u4f9b\u4e86\u4e00\u4e2aContext\uff0c\u6211\u4eec\u80fd\u591f\u5728\u91cc\u9762\u7528CoreGraphic APi\u8fdb\u884c\u7ed8\u5236\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2aPath\uff0c\u7136\u540e\u5c06Points\u4f20\u7ed9path , \u6700\u540e\u518dstroken\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e3a\u6bcf\u6b21\u624b\u6307\u7684\u70b9\u79fb\u52a8\u90fd\u521b\u5efa\u4e00\u4e2apoints\u6570\u7ec4\u4fdd\u5b58\u3002\u6211\u4eec\u7528\u4e86",(0,i.kt)("strong",{parentName:"li"},"DrawGesture"),"\uff0c\u5e76\u7528onChange\u76d1\u542c\u79fb\u52a8\u3002\u5982\u679c",(0,i.kt)("strong",{parentName:"li"},"translation"),"\u4e3a.zero\uff0c\u8bf4\u660e\u624b\u6307\u6309\u4e0b\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u6dfb\u52a0\u4e00\u6761\u65b0\u7684Line\u5230\u6570\u7ec4\u4e2d\u3002\u5982\u679ctranslation\u5927\u4e8ezero\uff0c\u8bf4\u660e\u624b\u6307\u5728\u79fb\u52a8\uff0c\u6b64\u65f6\u6211\u4eec\u9700\u8981\u66f4\u65b0line\u91cc\u9762\u7684points\u3002")))}f.isMDXComponent=!0},7860:function(e,t,n){t.Z=n.p+"assets/images/Header-026cf6112fdc09198797aad8a367d4f5.png"}}]);