---
title: 4、用修饰符的delay创建一组动画
tags: [swiftUI]
---

目前已经是SwiftUI 3 了，但仍然无法将不同的动画连接在一起以创建一组动画。这肯定会在以后的 SwiftUI 版本中修复，但目前，我们可以使用延迟来实现一组动画。

我们知道，定义动画有两种方法：

- 使用**.animation()**修饰符
- 使用**withAnimation**函数

本章，我们将看到如何使用**.animation()**修饰符来创建一组动画，我们将在下一章中介绍**withAnimation**函数来创建一组动画。

## Getting ready

首先，创建一个新的项目：**DelayedAnimations**

## How to do it…

此次我们将创建一个长方形，并加上一组动画：

- 修改y offset
- 修改scale
- 围绕x轴的一个3D旋转

1. 创建我们的长方形
```swift
struct ContentView: View {
    let duration = 1.0
    @State var change = false
    
    var body: some View {
        VStack(spacing: 30) {
            Rectangle()
                .fill(.blue)
                .offset(y: change ? -300 : 0)
                .animation(.easeInOut(duration: duration).delay(0), value: change)
                .scaleEffect(change ? 0.5 : 1)
                .animation(.easeInOut(duration: duration).delay(duration), value: change)
                .rotation3DEffect(change ? .degrees(45) : .degrees(0), axis: (x: 1, y: 0, z: 0))
                .animation(.easeInOut(duration: duration).delay( 2 * duration), value: change)
                .frame(width: 200, height: 200)
        }
    }
}
```

2. 创建一个按钮，触发动画
```swift
Button  {
    change.toggle()
} label: {
    Text("Animate")
        .fontWeight(.heavy)
        .foregroundColor(.white)
        .padding()
        .background(.green)
        .cornerRadius(5)
}
```

![image-20220111114426505](https://tva1.sinaimg.cn/large/008i3skNgy1gy9l40cqryj30bu0oumxd.jpg)

## How it works…

当我们定义动画的时候，我们可以给他一个延迟。

每一个animate都是基于之前的修饰符进行动画的。

首先执行的是offset动画，结束后，第二个动画刚开始，他是基于当前offset进行scaleEffect。同理第三个rotation3DEffect。
