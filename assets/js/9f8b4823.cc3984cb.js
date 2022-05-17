"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[7947],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(t),c=r,m=g["".concat(d,".").concat(c)]||g[c]||u[c]||i;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},96693:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),o=["components"],l={title:"SwiftUI\u4e13\u8f91066-@Binding",tags:["swiftUI"]},d=void 0,s={permalink:"/2022/01/08/SwiftUI\u4e13\u8f91-066-@Binding",editUrl:"https://github.com/xing-ou/GxBlog/blog/2022-01-08-SwiftUI\u4e13\u8f91-066-@Binding/index.md",source:"@site/blog/2022-01-08-SwiftUI\u4e13\u8f91-066-@Binding/index.md",title:"SwiftUI\u4e13\u8f91066-@Binding",description:"headerimg",date:"2022-01-08T00:00:00.000Z",formattedDate:"2022\u5e741\u67088\u65e5",tags:[{label:"swiftUI",permalink:"/tags/swift-ui"}],readingTime:6.77,truncated:!0,authors:[],frontMatter:{title:"SwiftUI\u4e13\u8f91066-@Binding",tags:["swiftUI"]},prevItem:{title:"SwiftUI\u4e13\u8f91067-@ObservedObject",permalink:"/2022/01/09/SwiftUI\u4e13\u8f91-067-@ObservedObject"},nextItem:{title:"SwiftUI\u4e13\u8f91065-@State",permalink:"/2022/01/07/SwiftUI\u4e13\u8f91-065-@State"}},p={authorsImageUrls:[]},u=[{value:"Getting ready",id:"getting-ready",level:2},{value:"How to do it\u2026",id:"how-to-do-it",level:2},{value:"How it works\u2026",id:"how-it-works",level:2},{value:"\u6df1\u5165\u4e86\u89e3@Binding",id:"\u6df1\u5165\u4e86\u89e3binding",level:2},{value:"\u8865\u5168@MyState",id:"\u8865\u5168mystate",level:3},{value:"\u5b9e\u73b0dynamicMemberLookup",id:"\u5b9e\u73b0dynamicmemberlookup",level:3}],g={toc:u};function c(e){var n=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"headerimg",src:t(71173).Z,width:"700",height:"250"}),"\n\u6211\u4eec\u4e0a\u4e00\u7bc7\u8bb2\u4e86@State\uff0c\u5982\u679c\u6211\u4eec\u6709\u5176\u4ed6VIew\u8981\u4fee\u6539\u6211\u4eec\u7684State\u5462\uff1f"),(0,i.kt)("p",null,"\u5728TodoList demo \u4e2d\uff0ctodos array\u662fstruct\uff0c\u662f\u503c\u7c7b\u578b\uff0c\u5982\u679c\u6211\u4eec\u4f20\u9012state\u5230child view\uff0c\u90a3\u4e48\u4f20\u9012\u7684\u662f\u503c\u7684copy\u3002\u5f53child view\u4fee\u6539array\u65f6\uff0c\u5e76\u4e0d\u80fd\u53cd\u6620\u5230parent view\u7684array\u4e2d\uff0c\u6240\u4ee5\u4e5f\u770b\u4e0d\u5230\u53d8\u5316\u3002"),(0,i.kt)("p",null,"SwiftUI\u901a\u8fc7",(0,i.kt)("strong",{parentName:"p"},"@Binding"),"\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5176\u672c\u8d28\u4e0a\u53ef\u4ee5\u770b\u6210\u662f\u751f\u6210\u4e00\u4e2a\u5bf9get\u548cset\u65b9\u6cd5\u7684\u5c01\u88c5struct\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u5c06\u6cbf\u7528\u4e0a\u4e00\u4e2aTodoList\u7684demo\u6765\u770b\u770b@Binding\u7684\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,i.kt)("p",null,"\u6cbf\u7528\u4e0a\u4e00\u4e2aTodoList\u7684\u9879\u76ee\uff0c\u5982\u679c\u4f60\u65b0\u5efa\u9879\u76ee\u7684\u8bdd\uff0c\u53ef\u4ee5\u62f7\u8d1d\u5982\u4e0b\u4ee3\u7801\u5230\u9879\u76ee\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'struct Todo: Identifiable {\n    let id = UUID()\n    let description: String\n    var done: Bool\n}\n\n@available(iOS 15.0, *)\nstruct ContentView: View {\n    @State var todos = [\n        Todo(description: "review the first chapter", done: false),\n        Todo(description: "buy wine", done: false),\n        Todo(description: "paint kitchen", done: false),\n        Todo(description: "cut the grass", done: false),\n    ]    \n    var body: some View {\n        List($todos) { $todo in\n            HStack {\n                Text(todo.description).strikethrough(todo.done)\n                Spacer()\n                Image(systemName:todo.done ? "checkmark.square" : "square")\n            }\n            .contentShape(Rectangle())\n            .onTapGesture {\n                todo.done.toggle()\n            }\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"how-to-do-it"},"How to do it\u2026"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684View\u6765\u6dfb\u52a0\u65b0\u7684todo")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'@available(iOS 15.0, *)\nstruct InputTodoView: View {\n    @Binding var todos: [Todo]\n    @State private var newTodoDescription: String = ""\n    var body: some View {\n        HStack {\n            TextField("Todo", text: $newTodoDescription)\n                .textFieldStyle(.roundedBorder)\n            Spacer()\n            Button {\n                guard !newTodoDescription.isEmpty else { return }\n                todos.append(Todo(description: newTodoDescription, done: false))\n                newTodoDescription = ""\n            } label: {\n                Text("Add")\n                    .padding(.horizontal, 16)\n                    .padding(.vertical, 8)\n                    .foregroundColor(.white)\n                    .background(.green)\n                    .cornerRadius(5)\n            }\n        }.frame(height: 60)\n        .padding(.horizontal, 24)\n        .padding(.bottom, 30)\n        .background(Color.gray)\n    }\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5c06InputTodoView\u6dfb\u52a0\u5230\u754c\u9762\u4e0a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'var body: some View {\n    ZStack(alignment: .bottom) {\n        List($todos) { $todo in\n            HStack {\n                Text(todo.description).strikethrough(todo.done)\n                Spacer()\n                Image(systemName:todo.done ? "checkmark.square" : "square")\n            }\n            .contentShape(Rectangle())\n            .onTapGesture {\n                todo.done.toggle()\n            }\n        }\n        InputTodoView(todos: $todos)\n    }.edgesIgnoringSafeArea(.bottom)        \n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gyapo5ymqsj309q0jdq3i.jpg",alt:"Figure_9.2_B17962"})),(0,i.kt)("h2",{id:"how-it-works"},"How it works\u2026"),(0,i.kt)("p",null,"\u5c31\u50cf\u6211\u4eec\u5f00\u5934\u8bf4\u7684\u90a3\u6837\uff0cchildren\u8981\u4fee\u6539parent\u7684state\uff0cparent\u76f4\u63a5\u5427state\u4f20\u9012\u7ed9children\u662f\u4e0d\u884c\u7684\uff0c\u56e0\u4e3a\u4f20\u9012\u7684\u662f\u503c\u7684copy\u3002"),(0,i.kt)("p",null,"SwiftUI\u4f7f\u7528",(0,i.kt)("strong",{parentName:"p"},"@Binding")," \u521b\u5efa\u4e00\u4e2a\u53cc\u5411\u7ed1\u5b9a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parent\u7684\u53d8\u5316\u4f1a\u53cd\u5e94\u5230children\u4e0a"),(0,i.kt)("li",{parentName:"ul"},"children\u7684\u53d8\u5316\u4e5f\u4f1a\u53cd\u6620\u5230parent\u4e0a")),(0,i.kt)("p",null,"\u6211\u4eec\u5728children\u58f0\u660estate\u65f6\uff0c\u4f7f\u7528@Binding\uff0cparent\u4f20\u5165\u65f6\u4f20\u7684\u662f$state\uff0c\u800c\u4e0d\u662fstate\u3002$\u64cd\u4f5c\u7b26\u7684\u610f\u601d\u662f\u83b7\u53d6State\u7ed3\u6784\u4f53\u4e2d\u7684projectedValue\u5c5e\u6027\u3002\u6211\u4eec\u53ef\u4ee5\u770b\u5230State\u7ed3\u6784\u4f53\u7684projectedValue\u6b63\u662f\u4e00\u4e2aBinding\u7c7b\u578b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"var projectedValue: Binding<Value> { get }\n")),(0,i.kt)("h2",{id:"\u6df1\u5165\u4e86\u89e3binding"},"\u6df1\u5165\u4e86\u89e3@Binding"),(0,i.kt)("p",null,"\u6211\u4eec\u9996\u5148\u6765\u770b\u770b\uff0cBinding\u7ed3\u6784\u4f53\u7684Api"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"@frozen @propertyWrapper @dynamicMemberLookup struct Binding<Value>\n// Creating a Binding\ninit<V>(Binding<V>)\ninit(get: @escaping () -> Value, set: @escaping (Value, Transaction) -> Void)\ninit(get: @escaping () -> Value, set: @escaping (Value) -> Void)\n")),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u52302\u70b9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Binding\u662f\u80fd\u591f\u8fdb\u884cdynamicMemberLookup\uff0c\u4e5f\u5c31\u662f\u8bf4\u6211\u4eec\u80fd\u591f\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"$state.someproperty"),"\u8fd9\u6837\u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u8bbf\u95ee\uff0c\u8fd9\u8fd4\u56de\u4ec0\u4e48\u5462\uff1f\u5f97\u770b\u4ed6\u7684subscript\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff0c\u6211\u4eec\u7a0d\u540e\u518d\u770b"),(0,i.kt)("li",{parentName:"ul"},"\u6211\u4eec\u770b\u5230\u521d\u59cb\u5316\u65b9\u6cd5\uff0c\u5c31\u662fget\u548cset\u65b9\u6cd5\uff0c\u6b63\u5982\u5f00\u5934\u8bf4\u7684\u90a3\u6837\u3002\u53ef\u4ee5\u628aBinding\u770b\u6210\u662fget\u548cset\u65b9\u6cd5\u7684\u4e00\u4e2a\u5c01\u88c5\u3002")),(0,i.kt)("p",null,"\u6709\u4e86\u8fd9\u4e24\u70b9\u4e86\u89e3\uff0c\u6211\u4eec\u6765\u5b9e\u73b0\u4e00\u4e2a\u6211\u4eec\u81ea\u5df1\u7684@MyBinding\u3002"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u5b9a\u4e49\u4e00\u4e2aproperty wrapper\uff0c\u5305\u542b\u4e00\u4e2aget\u548cset\u65b9\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"@propertyWrapper\nstruct MyBinding<T> {\n    private let getValue: () -> T\n    private let setValue: (T) -> Void\n    var wrappedValue: T {\n        get {\n            return getValue()\n        }\n        nonmutating set {\n            setValue(newValue)\n        }\n    }\n    \n    var projectedValue: Self { self }\n    \n    init(getValue: @escaping () -> T, setValue: @escaping (T) -> Void) {\n        self.getValue = getValue\n        self.setValue = setValue\n    }\n}\n")),(0,i.kt)("h3",{id:"\u8865\u5168mystate"},"\u8865\u5168@MyState"),(0,i.kt)("p",null,"\u6211\u4eec\u6765\u7528\u4e00\u4e0b\u8bd5\u4e00\u8bd5\uff0c\u8865\u5168\u4e0b\u4e0a\u4e00\u7bc7\u6587\u7ae0\u7684@MyState"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'final class Box<T>: ObservableObject {\n    @Published var value: T\n    init(_ value: T) {\n        self.value = value\n    }\n}\n// highlight-start\n@propertyWrapper\nstruct MyBinding<T> {\n    private let getValue: () -> T\n    private let setValue: (T) -> Void\n    var wrappedValue: T {\n        get {\n            return getValue()\n        }\n        nonmutating set {\n            setValue(newValue)\n        }\n    }\n    \n    var projectedValue: Self { self }\n    \n    init(getValue: @escaping () -> T, setValue: @escaping (T) -> Void) {\n        self.getValue = getValue\n        self.setValue = setValue\n    }\n}\n// highlight-end\n@propertyWrapper\nstruct MyState<T>: DynamicProperty {\n    @ObservedObject var box: Box<T>\n    var wrappedValue: T {\n        get {\n            return box.value\n        }\n        nonmutating set {\n            box.value = newValue\n        }\n    }\n  // highlight-start\n    var projectedValue: MyBinding<T> {\n        return MyBinding {\n            return box.value\n        } setValue: { newValue in\n            box.value = newValue\n        }\n    }\n  // highlight-end\n    init(wrappedValue: T) {\n        self._box = ObservedObject(wrappedValue: Box<T>(wrappedValue))\n    }\n}\n// highlight-start\nstruct ChildView: View {\n  //\u4f7f\u7528\u6211\u4eec\u81ea\u5df1MyBinding\n    @MyBinding var text: String\n    var body: some View {\n        VStack {\n            Text("this is children: \\(text)")\n            Button {\n                text = "\\(Int.random(in: 200...300))"\n            } label: {\n                Text("change from child")\n            }\n        }\n    }\n}\n// highlight-end\n@available(iOS 15.0, *)\nstruct ContentView: View {\n    @MyState var text = "hello world123"\n    var body: some View {\n        VStack {\n            Text("\\(text)")\n            Button {\n                text = "\\(Int.random(in: 0...100))"\n            } label: {\n                Text("change")\n            }\n            ChildView(text: $text)\n        }\n    }\n}\n\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gybwbbyagxg306a0ckmy0.gif",alt:"Untitled"})),(0,i.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u8865\u5168\u4e86@MyState\uff0c\u80fd\u591f\u4f7f\u7528$text\u4e86\u3002"),(0,i.kt)("h3",{id:"\u5b9e\u73b0dynamicmemberlookup"},"\u5b9e\u73b0dynamicMemberLookup"),(0,i.kt)("p",null,"Ok\uff0c\u6211\u4eec\u521a\u521a\u80fd\u591f\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"$text"),"\u4e86\uff0c\u4f46\u662f\u5982\u679c\u6211\u4eec\u60f3\u8981\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"$state.somePropert"),"\u5462, \u6211\u4eec\u8bd5\u4e00\u8bd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'struct ChildView: View {\n  // highlight-start\n  //\u6211\u4eec\u6539\u4e0bchidlrenView\uff0c\u663e\u793a\u5b57\u7b26\u4e32\u7684\u6570\u91cf\uff0c\u4e5f\u5c31\u662ftext.count\n    @MyBinding var textCount: Int\n    // highlight-end\n    var body: some View {\n        VStack {\n            Text("this show textCount: \\(textCount)")\n        }\n    }\n}\n\nstruct ContentView: View {\n    @MyState var text = "hello world123"\n    var body: some View {\n        VStack {\n            Text("\\(text)")\n            Button {\n                text = "\\(Int.random(in: 0...100))"\n            } label: {\n                Text("change")\n            }\n            // highlight-start\n          // \u6539\u4e0b\u4f20\u53c2\uff0c\u4f46\u662f\u62a5\u9519\u4e86\uff0c\u56e0\u4e3a\u6211\u4eec\u7684MyBinding\u4e0d\u652f\u6301\u8fd9\u79cd\u8bed\u6cd5\n            ChildView(textCount: $text.count)\n            // highlight-end\n        }\n    }\n}\n')),(0,i.kt)("p",null,"\u6240\u4ee5\uff0c\u6211\u4eec\u7528dynamicMemberLookup\u4fee\u9970\u4e0bMyBinding\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"@propertyWrapper\n// highlight-start\n@dynamicMemberLookup\n// highlight-end\nstruct MyBinding<T> {\n    ...\n  // highlight-start\n    subscript<Sub>(dynamicMember keyPath: WritableKeyPath<T, Sub>) -> MyBinding<Sub> {\n        return MyBinding<Sub> {\n            return self.wrappedValue[keyPath: keyPath]\n        } setValue: { newValue in\n            self.wrappedValue[keyPath: keyPath] = newValue\n        }\n    }\n  // highlight-end\n}\n")),(0,i.kt)("p",null,"\u6211\u4eec\u6765\u7528\u4e00\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'struct ChildView: View {\n    @MyBinding var name: String\n    var body: some View {\n        VStack {\n            Text("name is: \\(name)")\n            Button {\n                name = "child\\(Int.random(in: 1...100))"\n            } label: {\n                Text("\u70b9\u51fb\u4fee\u6539name")\n            }\n        }\n    }\n}\n\nstruct Person {\n    var name = ""\n    var age = 20\n}\n\n@available(iOS 15.0, *)\nstruct ContentView: View {\n    @MyState var person = Person(name:"hello")\n    var body: some View {\n        VStack {\n            Text("person name:\\(person.name) age: \\(person.age)")\n            Button {\n                person.name = "parent\\(Int.random(in: 200...300))"\n            } label: {\n                Text("change")\n            }\n            ChildView(name: $person.name)\n        }\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gybzwh2oflg306a0ckq3z.gif",alt:"Untitled"})),(0,i.kt)("p",null,"\u4e0d\u9519\uff0c\u6211\u4eec\u6210\u529f\u4f7f\u7528\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"$person.name"),"\u3002"),(0,i.kt)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u5bf9Binding\u5df2\u7ecf\u6709\u4e86\u4e00\u5b9a\u7684\u4e86\u89e3\uff0c\u4e5f\u77e5\u9053\u4e86$\u64cd\u4f5c\u7b26\u7684\u539f\u7406\uff0c\u4ee5\u53ca$state.someProperty\u7684\u539f\u7406\u3002"))}c.isMDXComponent=!0},71173:function(e,n,t){n.Z=t.p+"assets/images/Header-c6659082b5772ba27aad4cc183212d91.png"}}]);