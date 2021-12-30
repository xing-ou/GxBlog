"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[3645],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return u}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=d(t),u=o,m=f["".concat(c,".").concat(u)]||f[u]||s[u]||a;return t?n.createElement(m,l(l({ref:r},p),{},{components:t})):n.createElement(m,l({ref:r},p))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5927:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var n=t(3117),o=t(102),a=(t(7294),t(3905)),l=["components"],i={title:"3\u3001\u7528ScrollViewReader\u63a7\u5236\u6eda\u52a8",tags:["swiftUI"]},c=void 0,d={unversionedId:"swiftUI-cookbook/\u7b2c\u4e09\u7ae0-\u63a2\u7d22\u9ad8\u7ea7\u7ec4\u4ef6/\u7528ScrollViewReader\u63a7\u5236\u6eda\u52a8",id:"swiftUI-cookbook/\u7b2c\u4e09\u7ae0-\u63a2\u7d22\u9ad8\u7ea7\u7ec4\u4ef6/\u7528ScrollViewReader\u63a7\u5236\u6eda\u52a8",title:"3\u3001\u7528ScrollViewReader\u63a7\u5236\u6eda\u52a8",description:"ScrollViewReader\u5141\u8bb8\u4f60\u901a\u8fc7\u4ee3\u7801\u63a7\u5236\u6eda\u52a8\u5230\u67d0\u4e2aIndex\u5904\uff0c\u8fd9\u4e2aIndex\u751a\u81f3\u53ef\u80fd\u5728\u5f53\u524d\u5c4f\u5e55\u4e2d\u5e76\u4e0d\u53ef\u89c1\u3002",source:"@site/docs/swiftUI-cookbook/03-\u7b2c\u4e09\u7ae0-\u63a2\u7d22\u9ad8\u7ea7\u7ec4\u4ef6/03-\u7528ScrollViewReader\u63a7\u5236\u6eda\u52a8.md",sourceDirName:"swiftUI-cookbook/03-\u7b2c\u4e09\u7ae0-\u63a2\u7d22\u9ad8\u7ea7\u7ec4\u4ef6",slug:"/swiftUI-cookbook/\u7b2c\u4e09\u7ae0-\u63a2\u7d22\u9ad8\u7ea7\u7ec4\u4ef6/\u7528ScrollViewReader\u63a7\u5236\u6eda\u52a8",permalink:"/docs/swiftUI-cookbook/\u7b2c\u4e09\u7ae0-\u63a2\u7d22\u9ad8\u7ea7\u7ec4\u4ef6/\u7528ScrollViewReader\u63a7\u5236\u6eda\u52a8",editUrl:"https://github.com/xing-ou/GxBlog/docs/swiftUI-cookbook/03-\u7b2c\u4e09\u7ae0-\u63a2\u7d22\u9ad8\u7ea7\u7ec4\u4ef6/03-\u7528ScrollViewReader\u63a7\u5236\u6eda\u52a8.md",tags:[{label:"swiftUI",permalink:"/docs/tags/swift-ui"}],version:"current",sidebarPosition:3,frontMatter:{title:"3\u3001\u7528ScrollViewReader\u63a7\u5236\u6eda\u52a8",tags:["swiftUI"]},sidebar:"swiftUI-cookbook",previous:{title:"2\u3001\u4f7f\u7528LazyHGrid\u548cLazyVGrid\u663e\u793a\u8868\u683c\u5185\u5bb9",permalink:"/docs/swiftUI-cookbook/\u7b2c\u4e09\u7ae0-\u63a2\u7d22\u9ad8\u7ea7\u7ec4\u4ef6/\u4f7f\u7528LazyHGrid\u548cLazyVGrid\u663e\u793a\u8868\u683c\u5185\u5bb9"},next:{title:"4\u3001\u7528List\u663e\u793a\u591a\u5c42\u7ea7\u5217\u8868",permalink:"/docs/swiftUI-cookbook/\u7b2c\u4e09\u7ae0-\u63a2\u7d22\u9ad8\u7ea7\u7ec4\u4ef6/\u7528List\u663e\u793a\u591a\u5c42\u7ea7\u5217\u8868"}},p=[{value:"Getting ready",id:"getting-ready",children:[],level:2},{value:"How to do it\u2026",id:"how-to-do-it",children:[],level:2},{value:"How it works\u2026",id:"how-it-works",children:[],level:2}],s={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ScrollViewReader"),"\u5141\u8bb8\u4f60\u901a\u8fc7\u4ee3\u7801\u63a7\u5236\u6eda\u52a8\u5230\u67d0\u4e2aIndex\u5904\uff0c\u8fd9\u4e2aIndex\u751a\u81f3\u53ef\u80fd\u5728\u5f53\u524d\u5c4f\u5e55\u4e2d\u5e76\u4e0d\u53ef\u89c1\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a\u81ea\u52a8\u6eda\u52a8\u5230\u65b0\u6dfb\u52a0\u7684item\uff0c\u81ea\u52a8\u6eda\u52a8\u5230\u6700\u8fd1\u66f4\u65b0\u7684item\u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a\u663e\u793a\u4ece A \u5230 Q \u7684\u5b57\u7b26\u5217\u8868\u3002\u5c4f\u5e55\u9876\u90e8\u7684\u6309\u94ae\u5c06\u5728\u5355\u51fb\u65f6\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u4ece\u5217\u8868\u9876\u90e8\u6eda\u52a8\u5230\u5217\u8868\u672b\u5c3e\u3002\u5c4f\u5e55\u5e95\u90e8\u7684\u53e6\u4e00\u4e2a\u6309\u94ae\u5c06\u5141\u8bb8\u6211\u4eec\u4ece\u5e95\u90e8\u5411\u4e0a\u6eda\u52a8\u5230\u5217\u8868\u4e2d\u95f4\u3002"),(0,a.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,a.kt)("p",null,"\u9996\u5148\u65b0\u5efa\u4e00\u4e2aswiftui\u9879\u76ee",(0,a.kt)("strong",{parentName:"p"},"ScrollViewReaders")),(0,a.kt)("h2",{id:"how-to-do-it"},"How to do it\u2026"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\uff1aCharacterInfo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"struct CharacterInfo: Identifiable {\n    var name: String\n    var id: Int\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u51c6\u5907\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},' let charArray = [\n    CharacterInfo(name: "a.circle.fill", id: 0),\n    CharacterInfo(name: "b.circle.fill", id: 1),\n    CharacterInfo(name: "c.circle.fill", id: 2),\n    CharacterInfo(name: "d.circle.fill", id: 3),\n    CharacterInfo(name: "e.circle.fill", id: 4),\n    CharacterInfo(name: "f.circle.fill", id: 5),\n    CharacterInfo(name: "g.circle.fill", id: 6),\n    CharacterInfo(name: "h.circle.fill", id: 7),\n    CharacterInfo(name: "i.circle.fill", id: 8),\n    CharacterInfo(name: "j.circle.fill", id: 9),\n    CharacterInfo(name: "k.circle.fill", id: 10),\n    CharacterInfo(name: "l.circle.fill", id: 11),\n    CharacterInfo(name: "m.circle.fill", id: 12),\n    CharacterInfo(name: "n.circle.fill", id: 13),\n    CharacterInfo(name: "o.circle.fill", id: 14),\n    CharacterInfo(name: "p.circle.fill", id: 15),\n    CharacterInfo(name: "q.circle.fill", id: 16),\n]\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u66ff\u6362\u9ed8\u8ba4\u7684Text\u4e3aScrollview\u548cScrollViewReader")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'var body: some View {\n    ScrollView {\n        ScrollViewReader { value in\n            Button("go to q") {\n                value.scrollTo(16)\n            }.padding().background(Color.yellow)\n        }\n    }\n}\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u5c06\u5217\u8868\u52a0\u8fdb\u53bb")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'var body: some View {\n    ScrollView {\n        ScrollViewReader { value in\n            Button("go to q") {\n                value.scrollTo(16)\n            }.padding().background(Color.yellow)\n            ForEach(charArray) { image in\n                Image(systemName: image.name)\n                    .id(image.id)\n                    .font(.largeTitle)\n                    .foregroundColor(Color.yellow)\n                    .frame(width: 90, height: 90)\n                    .background(Color.blue)\n                    .padding()\n            }\n        }\n    }\n}\n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u518d\u52a0\u4e2a\u6309\u94ae\uff0c\u6eda\u52a8\u5230G")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'\nvar body: some View {\n    ScrollView {\n        ScrollViewReader { value in\n            ....\n            Button("Go to G") { \n                        value.scrollTo(6, anchor: .bottom)\n                        }.padding().background(Color.yellow)            \n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u6700\u7ec8\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxtqebas96j309j0jh3yt.jpg",alt:"20211228183732"})),(0,a.kt)("h2",{id:"how-it-works"},"How it works\u2026"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"CharacterInfo")," \u9075\u5faa",(0,a.kt)("strong",{parentName:"p"},"Identifiable")," \u534f\u8bae\uff0c\u5305\u542b2\u4e2a\u5c5e\u6027  ",(0,a.kt)("strong",{parentName:"p"},"name")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"id"),"\u3002 ",(0,a.kt)("strong",{parentName:"p"},"id")," \u662f\u5fc5\u987b\u7684\uff0c",(0,a.kt)("strong",{parentName:"p"},"ScrollViewReader")," \u7528\u8fd9\u4e2a\u6765\u5b9a\u4f4d\u6bcf\u4e2aitem\u3002\u5c31\u884c\u4f60\u7684\u623f\u95f4\u53f7\u4e00\u6837\uff0cScrollView\u77e5\u9053\u8be5\u5f80\u4ec0\u4e48\u5730\u65b9\u6eda\u52a8\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06ScrollViewReader\u5d4c\u5957\u5728ScrollView\u4e2d\uff0c\u8fd9\u6837\u5c31\u80fd\u591f\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"scrollTo()")," \u65b9\u6cd5\u3002"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"scrollTo()")," \u65b9\u6cd5\u6709\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"anchor")," \u53c2\u6570\uff0c\u7528\u6765\u6307\u5b9a\u6211\u4eec\u60f3\u6eda\u52a8\u5230\u7684\u4f4d\u7f6e\uff0c \u4ed6\u662f\u67d0\u4e2aitem\u7684id \u3002\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7528\u6765\u6307\u5b9aItem\u6eda\u52a8\u5230\u9876\u90e8\u3001\u5e95\u90e8\u3001\u8fd8\u662f\u4e2d\u5fc3\u7b49\u3002"))}f.isMDXComponent=!0}}]);