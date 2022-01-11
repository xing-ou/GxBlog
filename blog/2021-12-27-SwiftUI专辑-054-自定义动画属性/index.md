---
title: SwiftUI专辑054-自定义动画属性
tags: [swiftUI]
---
![headerimg](./Header.png)
上一篇文章中我们知道了，Swiftui能够对一些通用属性进行动画，比如：位置、颜色、大小等。

但如果我们想要动画的东西不属于framework的一部分呢？

在这篇文章中，我们将创建一个三角形，其高度等于宽度乘以一个比例。当我们点击三角形时，我们将该比例设置为一个随机数，从而改变高度。

我们如何让SwiftUI 能够对比例的变化进行动画呢？我们将看到所需的代码很简单，但底层引擎却相当复杂。
<!--truncate-->
## Getting ready

首先，创建一个新的项目：**AnimateTriangleShape**

## How to do it…

1. 首先，创建一个三角形**Triangle**
```swift
struct Triangle: Shape {
    var multiplier: CGFloat
    func path(in rect: CGRect) -> Path {
        Path { path in
            path.move(to: CGPoint(x: rect.minX, y: rect.maxY))
            path.addLine(to: CGPoint(x: rect.maxX, y: rect.maxY))
            path.addLine(to: CGPoint(x: rect.midX, y: rect.maxY - rect.width * multiplier))
            path.closeSubpath()
        }
    }
}
```

2. 将三角形添加到ContentView中
```swift
struct ContentView: View {
    @State var multiplier = 1.0
    var body: some View {
        Triangle(multiplier: multiplier)
            .fill(.red)
            .frame(width: 300, height: 300)
            .onTapGesture {
              
                withAnimation(.easeOut(duration: 1.0)) {
                    multiplier = .random(in: 0.3...1.5)
                }
            }
    }
}
```

3. 此时点击，虽然shape变化了，但是却没有动画，因为SwiftUI并不知道他应该animate哪个数据，因此我们添加一个**animatableData**到Triangle中, 让swiftui知道应该animate multiplier这个数据。
```swift
var animatableData: CGFloat {
    get { multiplier }
    set { multiplier = newValue }
}
```

此时点击，就能看到动画了

![image-20220111104856015](https://tva1.sinaimg.cn/large/008i3skNly1gy9jia1lgkj30c00oiglw.jpg)

## How it works…

SwiftUI只能对遵循了**Animatable**协议的组件进行动画。这意味着他应该拥有一个**animatableData**，SwiftUI从这个值里保存和获取动画的中间值。

我们可以在set方法里打印出中间值

```swift
set {
    multiplier = newValue
    print("value: \(multiplier)")
}
```

另外还注意一下，我们使用的是**withAnimation**进行动画的。
