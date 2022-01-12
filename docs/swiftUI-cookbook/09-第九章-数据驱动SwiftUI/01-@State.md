---
title: 1、@State
tags: [swiftUI]
---

当一个state只属于一个View，而且我们需要这个state去驱动我们的UI，那我们标记这个state为@State。

我们来看一个TodoList的demo。

## Getting ready

首先，新建一个项目**StaticTodoList**

## How to do it…

1. 新建一个Todo的model
```swift
struct Todo: Identifiable {
    let id = UUID()
    let description: String
    var done: Bool
}
```

2. 我们准备一点数据
```swift
@State var todos = [
    Todo(description: "review the first chapter", done: false),
    Todo(description: "buy wine", done: false),
    Todo(description: "paint kitchen", done: false),
    Todo(description: "cut the grass", done: false),
]
```

3. 显示出来
```swift
var body: some View {
    List($todos) { $todo in
        HStack {
            Text(todo.description).strikethrough(todo.done)
            Spacer()
            Image(systemName:todo.done ? "checkmark.square" : "square")
        }
        .contentShape(Rectangle())
        .onTapGesture {
            todo.done.toggle()
        }
    }
}
```

![Figure_9.1_B17962](https://tva1.sinaimg.cn/large/008i3skNly1gyaplbkxypj309q0jndg6.jpg)

## How it works…

注意我们使用的是$todo，而不是todo，只有用$todo才能改变todo.done，不然todo是immutable的，尝试修改todo会报编译错误。

然后我们使用了`.contentShape(Rectangle())`，这是必须的，不然只有文字和图片能够相应onTapGesture，Spacer的区域不能响应点击事件。