---
title: SwiftUI专辑050-使用渐变
tags: [swiftUI]
---
![headerimg](./Header.png)
SwiftUI 有几种渲染渐变的方式。渐变可用于填充 一个Shape，填充一个边框等。

本文，我们将了解我们可以在 SwiftUI 中使用哪些类型的渐变以及如何定义它们。
<!--truncate-->
## Getting ready

首先 ，创建一个SwiftUI工程：**GradientViews**

## How to do it…

SwiftUI有3中类型的渐变：

- Linear gradients
- Radial gradients
- Angular gradients

1. 首先，我们先添加一个自定义样式, 方便我们之后使用
```swift
extension Text {
    func bigLight() -> some View {
        font(.system(size: 80))
            .fontWeight(.thin)
            .multilineTextAlignment(.center)
            .foregroundColor(.white)
    }
}
```

2. 创建一个线性渐变View：
```swift
struct LinearGradientView: View {
    var body: some View {
        ZStack {
            LinearGradient(gradient: Gradient(colors:[.orange, .green, .blue, .black]), startPoint: .topLeading, endPoint: .bottomTrailing)
            Text("Linear Gradient")
                .bigLight()
        }
    }
}
```

3. 同理，在创建RadialGradientView
```swift
struct RadialGradientView: View {
    var body: some View {
        ZStack {
            RadialGradient(gradient:Gradient(colors:[.orange, .green,.blue, .black]), center: .center, startRadius: 20, endRadius: 500)
            Text("Radial Gradient")
                .bigLight()
        }
    }
}
```

4. 同理，再创建AngularGradientView
```swift
struct AngularGradientView: View {
    var body: some View {
        ZStack {
            AngularGradient(gradient: Gradient(colors: [.orange, .green,.blue, .black,.black, .blue,.green, .orange]),center: .center)
            Text("Angular Gradient")
                .bigLight()
        }
    }
}
```

5. 用Picker显示出来
```swift
struct ContentView: View {
    @State private var selectedGradient = 0
    @ViewBuilder var content: some View {
        switch selectedGradient {
        case 0: LinearGradientView()
        case 1: RadialGradientView()
        default: AngularGradientView()
        }
    }
    var body: some View {
        ZStack(alignment: .top) {
            content.edgesIgnoringSafeArea(.all)
            Picker(selection: $selectedGradient, label: Text("Select Gradient")) {
                    Text("Linear").tag(0)
                    Text("Radial").tag(1)
                    Text("Angular").tag(2)
                }.pickerStyle(SegmentedPickerStyle())
                .padding(.horizontal, 32)
            }
    }
}
```

​	![Figure_7.12_B17962](https://tva1.sinaimg.cn/large/008i3skNly1gy4e9kwec7j309q06ijrr.jpg)

## How it works…

每种渐变都要color参数，提供渐变的颜色。还有些额外设置，详细的查看下Api文档。