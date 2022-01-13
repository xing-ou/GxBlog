---
title: SwiftUI专辑065-@State
tags: [swiftUI]
---
![headerimg](./Header.png)
@State是一个property wrapper。他负责read/write一个SwiftUI管理的value，当我们write新的value时，SwiftUI会重新计算body。

我们来看一个TodoList的demo。
<!--truncate-->

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

## 深入@State

首先@State修饰后的value并不是value本身，而是一个State结构体， 这个结构体包裹着value，负责value的read和write。

我们要get这个value，可以直接使用定义的变量名，他会返回State结构体的wrappedValue字段。

你只能在View内部访问state属性，因此通常我们都将state声明为private，防止外部访问到这些state。

如果你想要将state传递给层级中的其他view，那么你需要在前面加上$，$操作符会返回State结构体的projectedValue字段。

我们可以自己来实现一个简单的@MyState。

我们先定义一个property wrapper，定义完成后，我们就可以用@MyState了

```swift
@propertyWrapper
struct MyState<T> {
    var value: T
    var wrappedValue: T {
        get {
            return value
        }
        set {
            value = newValue
        }
    }
}
```

我们先尝试使用

```swift
struct ContentView: View {
   //会报错，因为，如果我们想要这么使用，还需要为@MyState实现一个 init(wrappedValue:)的初始化方法
    @MyState var text = "hello world"
    var body: some View {
        Text("hello world")
    }
}
@propertyWrapper
struct MyState<T> {
  ...
  init(wrappedValue: T) {
    value = wrappedValue
  }
}

```

我们再尝试使用一下, 能够显示text

```swift
struct ContentView: View {
    @MyState var text = "hello world123"
    var body: some View {
        Text("\(text)")
    }
}
```

那我们再尝试一下，加个按钮修改text，能够自动改变Text么

```swift
struct ContentView: View {
    @MyState var text = "hello world123"
    var body: some View {
        VStack {
            Text("\(text)")
            Button {
              // 编译报错，提示Cannot assign to property: 'self' is immutable
              // 原因在于设置text实际上是调用wrappedValue的set方法，我们定义的MyState是结构体
              // 修改结构体需要mutating，而set方法又不能用mutating修饰
							// 不过我们可以通过使用nonmutating修饰set方法，告诉编译器我们不会修改结构体
                text = "\(Int.random(in: 0...100))"
            } label: {
                Text("change")
            }
        }
    }
}

struct MyState<T> {
    ...
    var wrappedValue: T {
       nonmutating set {
            value = newValue//加上之后，编译器错误就转移到了这里，因为我们确实改变了结构体
        }
      ...
    }
}

```

我们可以构建个引用类型，用这个引用类型再包裹T，这样就不会修改结构体了

```swift
final class Box<T> {
    var value: T
    init(_ value: T) {
        self.value = value
    }
}

@propertyWrapper
struct MyState<T> {
    var box: Box<T>
    var wrappedValue: T {
        get {
            return box.value
        }
        nonmutating set {
            box.value = newValue
        }
    }
    init(wrappedValue: T) {
        box = Box<T>(wrappedValue)
    }
}
```

好的，我们解决了编译问题，运行下，点按钮，发现Text仍然没有改变，打断点发现set方法是调用了的，看来我们还缺少一种方法，在value更新的情况下通知SwiftUI重新渲染UI。遗憾的是苹果并没有提供手动更新UI的能力。更新的能力被封装在了@State、@ObservedObject、@StateObject、@EnvironmentObject内部。我们选择@ObservedObject来模拟。

```swift
@propertyWrapper
struct MyState<T>: DynamicProperty {
    @ObservedObject var box: Box<T>
    var wrappedValue: T {
        get {
            return box.value
        }
        nonmutating set {
            box.value = newValue
        }
    }
    init(wrappedValue: T) {
        self._box = ObservedObject(wrappedValue: Box<T>(wrappedValue))
    }
}

final class Box<T>: ObservableObject {
    @Published var value: T
    init(_ value: T) {
        self.value = value
    }
}
```

![Untitled](https://tva1.sinaimg.cn/large/008i3skNgy1gybv1mqr89g306a0ck3yz.gif)

Ok，通过实现MyState，我们熟悉了propertyWrapper，也对@State有了一定的了解，不过我们的@MyState还有个东西没实现，那就是projectedValue, 如果我们使用$text，将会报错，因为我们没有实现projectedValue。我们将在学习@Binding中了解其原理，并补全实现。