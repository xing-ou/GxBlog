---
title: 9、SwiftUI中使用UIKit
tags: [swiftUI]
---

SwiftUI 是 在 WWDC 2019 上宣布 的，仅适用于运行 iOS 13 及更高版本的设备。由于其相对不成熟，与 UIKit 相比，SwiftUI 可能缺乏广泛的 API 支持。例如，截至 2021 年 7 月，只能使用 UIKit 的**UIImagePickerController**选择图片和视频。因此，需要在 SwiftUI 中实现某些 UIKit API。

本章，我们将看看如何在 SwiftUI 中使用 UIKit API。我们将创建一个包装**UIActivityIndicatorView**的View，然后在 SwiftUI 中显示一个ActivityIndicator。

## Getting ready

新建一个SwiftUI工程，叫做**UIKitToSwiftUI**

## How to do it…

我们能够通过**UIViewRepresentable**协议来在SwiftUI中显示UIKit View。

1. 新建文件，选择`Swift File`，命名**ActivityIndicator**
2. 替换**import Foundation**为**import SwiftUI**
```swift
import SwiftUI
```

3. 修改**ActivityIndicator**遵循**UIViewRepresentable**协议

```swift
struct ActivityIndicator: UIViewRepresentable {
    var animating: Bool
    func updateUIView(_ activityIndicator: UIActivityIndicatorView, context: Context) {
        if self.animating {
            activityIndicator.startAnimating()
        } else {
            activityIndicator.stopAnimating()
        }
    }

    func makeUIView(context: Context) -> UIActivityIndicatorView {
        return UIActivityIndicatorView()
    }
}
```

4. 打开ContentView.swift，使用我们刚刚的**ActivityIndicator**

```swift
struct ContentView: View {
    @State var animated = false
    var body: some View {
        VStack {
            ActivityIndicator(animating: animated)                
            HStack {
                Toggle(isOn: $animated) {
                    Text("Toggle Activity")
                }
            }
        }
    }
}
```

最终结果：

![image-20211224150803446](https://tva1.sinaimg.cn/large/008i3skNgy1gxoxubn99dj30eq0uaglt.jpg)

## How it works…

我们通过实现**UIViewRepresentable**协议来将UIKit View包裹为一个SwiftUI View。

在 **ActivityIndicator.swift** 文件中，我们实现了一个 struct， 遵循**UIViewRepresentable**协议。

协议要求我们实现 **makeUIView** 和 **updateUIView** 这两个函数。

 **makeUIView** 负责创建和准备View

 **updateUIView** 负责当animation改变时更新 **UIView**。
