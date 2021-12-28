---
title: SwiftUI专辑020-将集合绑定到List
tags: [swiftUI]
---
![headerimg](./Header.png)
在 SwiftUI 中一直可以编辑列表，但在 WWDC 2021 和 SwiftUI 3 之前，这样做非常 效率低下，因为 SwiftUI 不支持绑定到集合。让我们在集合上使用绑定并讨论它现在如何以及为什么更好地工作。
<!--truncate-->
## Getting ready

让我们创建一个新的SwiftUI项目**EditableListsFields**

## How to do it…

1. 首先创建一个数据结构**TodoItem**
```swift
struct TodoItem: Identifiable {
    let id = UUID()
    var title: String
    init(_ someTitle:String){
        title = someTitle
    }
}
```

2. 然后添加一个State
```swift
@State var todos = [
      TodoItem("Eat"),
      TodoItem("Sleep"),
      TodoItem("Code")
]
```

3. 替换默认的Text为List
```swift
var body: some View {
    List($todos) { $todo in
        TextField("Number", text: $todo.title)
    }
}
```

运行

![image-20211228104834018](https://tva1.sinaimg.cn/large/008i3skNly1gxtctmjiuej30w80myq3n.jpg)

## How it works…

让我们先看看 在 SwiftUI 3 之前如何处理可编辑列表。 在 SwiftUI 3 之前，可编辑项目列表的代码将使用列表索引来创建到集合的绑定，如下所示：

```swift
List(0..<todos.count) { index in
  TextField("Todo", text: $todos[index].title)
}
```

这样的代码不仅速度慢，而且编辑单个项目会导致 SwiftUI 重新渲染整个元素**列表**，从而导致 UI 闪烁和更新缓慢。

使用 SwiftUI 3，我们可以将绑定传递给元素集合，SwiftUI 将在内部处理 绑定到闭包中指定的当前元素。由于我们的整个集合都符合**Identifiable**协议，因此我们的每个列表项都可以通过其**id**参数来唯一标识；因此，从列表中添加或删除项目不会更改列表项目索引，也不会导致整个列表重新呈现。