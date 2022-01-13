---
title: 2、@Binding
tags: [swiftUI]
---

我们上一篇讲了@State，如果我们有其他VIew要修改我们的State呢？

在TodoList demo 中，todos array是struct，是值类型，如果我们传递state到child view，那么传递的是值的copy。当child view修改array时，并不能反映到parent view的array中，所以也看不到变化。

SwiftUI通过**@Binding**解决这个问题，其本质上可以看成是生成一个对get和set方法的封装struct。

我们将沿用上一个TodoList的demo来看看@Binding的使用。

## Getting ready

沿用上一个TodoList的项目，如果你新建项目的话，可以拷贝如下代码到项目。

```swift
struct Todo: Identifiable {
    let id = UUID()
    let description: String
    var done: Bool
}

@available(iOS 15.0, *)
struct ContentView: View {
    @State var todos = [
        Todo(description: "review the first chapter", done: false),
        Todo(description: "buy wine", done: false),
        Todo(description: "paint kitchen", done: false),
        Todo(description: "cut the grass", done: false),
    ]    
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
}
```

## How to do it…

1. 创建一个新的View来添加新的todo
```swift
@available(iOS 15.0, *)
struct InputTodoView: View {
    @Binding var todos: [Todo]
    @State private var newTodoDescription: String = ""
    var body: some View {
        HStack {
            TextField("Todo", text: $newTodoDescription)
                .textFieldStyle(.roundedBorder)
            Spacer()
            Button {
                guard !newTodoDescription.isEmpty else { return }
                todos.append(Todo(description: newTodoDescription, done: false))
                newTodoDescription = ""
            } label: {
                Text("Add")
                    .padding(.horizontal, 16)
                    .padding(.vertical, 8)
                    .foregroundColor(.white)
                    .background(.green)
                    .cornerRadius(5)
            }
        }.frame(height: 60)
        .padding(.horizontal, 24)
        .padding(.bottom, 30)
        .background(Color.gray)
    }
}
```

2. 将InputTodoView添加到界面上
```swift
var body: some View {
    ZStack(alignment: .bottom) {
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
        InputTodoView(todos: $todos)
    }.edgesIgnoringSafeArea(.bottom)        
}
```

![Figure_9.2_B17962](https://tva1.sinaimg.cn/large/008i3skNgy1gyapo5ymqsj309q0jdq3i.jpg)

## How it works…

就像我们开头说的那样，children要修改parent的state，parent直接吧state传递给children是不行的，因为传递的是值的copy。

SwiftUI使用**@Binding** 创建一个双向绑定

- parent的变化会反应到children上
- children的变化也会反映到parent上

我们在children声明state时，使用@Binding，parent传入时传的是$state，而不是state。$操作符的意思是获取State结构体中的projectedValue属性。我们可以看到State结构体的projectedValue正是一个Binding类型。

```swift
var projectedValue: Binding<Value> { get }
```