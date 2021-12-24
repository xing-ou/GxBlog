---
title: 7、使用ViewBuilder来分离展示
tags: [swiftUI]
---
Apple对ViewBuilder的定义是: 一个自定义参数, 能够从闭包中构建Views。

我们可以将公共View抽离出来，以ViewBuilder作为参数，来实现差异。

本章，我们将创建一个SwiftUI View：**BlueCircle**，它会在content的右边放置一个blue circle。

## Getting ready

首先，创建一个SwiftUI工程：**UsingViewBuilder**。

## How to do it…

1. 新建文件
2. 选择SwiftUI View
3. 取名**BlueCircle**
4. 删除**BlueCircle_Previews**
5. 添加代码
```swift
struct BlueCircle<Content: View>: View {
    let content: Content
    
    init(@ViewBuilder content: () -> Content) {
        self.content = content()
    }
    
    var body: some View {
        HStack {
            content
            Spacer()
            Circle().fill(Color.blue).frame(width: 20, height: 30)
        }.padding()
    }
}
```

6. 打开ContentView，使用BlueCircle
```swift
struct ContentView: View {
    var body: some View {
        BlueCircle {
            Text("some text here")
            Rectangle().fill(Color.red).frame(width: 40, height: 40)
        }
        BlueCircle {
            Text("hello world")
        }
    }
}
```

最终得到结果

![image-20211224104842400](https://tva1.sinaimg.cn/large/008i3skNgy1gxoqchw6tej30hi0z0q3f.jpg)

## ViewBuilder

```swift
@resultBuilder struct ViewBuilder
static func buildBlock<Content>(_ content: Content) -> Content where Content : View
static func buildBlock<C0, C1>(_ c0: C0, _ c1: C1) -> TupleView<(C0, C1)> where C0 : View, C1 : View
....
//我们可以看到ViewBuilder支持的最大参数为C0到C9,总共10个View
//这也是为什么当我们添加超过10个子View后会报错的原因，此时我们需要用Group来减少直接子View的数量
static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9>(_ c0: C0, _ c1: C1, _ c2: C2, _ c3: C3, _ c4: C4, _ c5: C5, _ c6: C6, _ c7: C7, _ c8: C8, _ c9: C9) -> TupleView<(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9)> where C0 : View, C1 : View, C2 : View, C3 : View, C4 : View, C5 : View, C6 : View, C7 : View, C8 : View, C9 : View
```

