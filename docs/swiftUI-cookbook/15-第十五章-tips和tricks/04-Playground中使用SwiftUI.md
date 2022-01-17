---
title: 4、Playground中使用SwiftUI
tags: [swiftUI]
---

Playground支持UIKit，要使用SwiftUI，只需要将其包裹在UIHostingViewController中即可。

## Getting ready

新建一个Playground：**SwiftUIPlayground**

## How to do it…

1. 导入framework
```swift
import PlaygroundSupport
import SwiftUI
```

2. 编写View
```swift

extension Text {
    func customize(_ color: Color) -> some View {
        self.font(.system(.title))
            .frame(width: 300, height: 150)
            .foregroundColor(.white)
            .background(color)
            .cornerRadius(10)
    }
}

struct ContentView: View {
    var body: some View {
        VStack(spacing: 12) {
            Text("SwiftUI")
                .customize(.yellow)
            Text("in a")
                .customize(.blue)
            Text("Playground!")
                .customize(.red)
        }
    }
}

```

3. 显示
```swift
PlaygroundPage.current.liveView = UIHostingController(rootView: ContentView())
```

![Figure_15.15_B17962](https://tva1.sinaimg.cn/large/008i3skNgy1gygsevim1zj30p00gidhu.jpg)

## How it works…

Playground 支持通过 **PlaygroundPage**的  **liveView** ,渲染一个**UIViewController** 。

我们可以通过将Swiftui包裹在**UIHostingController**中即可。
