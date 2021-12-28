---
title: 1、使用LazyHStack和LazyVStack
tags: [swiftUI]
---

SwiftUI 2.0 引入了**LazyHStack**和**LazyVStack**。它们的使用类似于常规的**HStack**和**VStack**，但提供了延迟加载。仅在content在设备的屏幕上变得可见前，List才开始加载content，允许用户无缝地滚动浏览大型数据集，没有明显的 UI 延迟或较长的加载时间。让我们创建一个demo来看看它在实践中是如何工作的。

## Getting ready

首先创建一个Swiftui工程：**LazyStacks**

## How to do it…

1. 首先我们创建一个Cell：ListRow，他会在初始化时打印一些信息
```swift
struct ListRow: View {
    let id: Int
    let type: String
    init(id: Int, type: String){
        print("Loading \(type) item \(id)")
        self.id = id
        self.type = type
    }

    var body: some View {
        Text("\(type) \(id)").padding()
    }
}
```

2. 添加VStack， ScrollView， LazyHStack

```swift
var body: some View {
    VStack {
        ScrollView(.horizontal) {
            LazyHStack {
                ForEach(1 ... 10000, id: \.self) { item in
                    ListRow(id: item, type:"Horizontal")
                }
            }
        }.frame(height: 100, alignment: .center)
    }
}
```

3. 再添加一个ScrollView， LazyVStack
```swift
ScrollView {
    LazyVStack {
        ForEach(1 ... 10000, id: \.self) { item in
            ListRow(id: item, type: "Vertical")
        }
    }.border(Color.blue)
}
```

运行

![20211228124742](https://tva1.sinaimg.cn/large/008i3skNgy1gxtga3v1pej30a30jq0t7.jpg)

当我们滚动时，能在控制台看到对应的初始化信息。

## How it works…

正如我们在本节的介绍中提到的，**LazyHStack**和**LazyVStack**视图相对于常规**HStack**和**VStack**视图的主要优点是前者在显示item之前才加载它们，而后者在运行时一次加载所有item。

我们在滚动时，看到控制台显示初始化log，这是延迟加载。只有即将显示在屏幕上的item才会被初始化。
