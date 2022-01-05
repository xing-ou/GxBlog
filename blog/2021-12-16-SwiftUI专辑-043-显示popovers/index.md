---
title: SwiftUI专辑043-显示popovers
tags: [swiftUI]
---
![headerimg](./Header.png)
弹出框是一种可以显示在屏幕上以提供有关特定项目的更多信息的视图。它们包括一个箭头，指向它们起源的位置。你可以点击任何其他屏幕区域以关闭弹出窗口。弹出框通常用于较大的屏幕，例如 iPad。

本文，我们将在 iPad 上创建并显示一个弹出框。
<!--truncate-->
## Getting ready

首先创建一个SwiftUI项目：**DisplayingPopovers**

## How to do it

1. 首先定义一个State控制是否显示popover
```swift
@State private var showPopover = false
```

2. 创建一个按钮，点击时显示Popover
```swift
var body: some View {
    Button("show popover") {
        self.showPopover = true
    }.popover(isPresented: $showPopover, arrowEdge: .bottom) {
        Text("Popover content displayed here")
            .font(.system(size: 40))
    }
}
```

3. 预览切换成iPad，或者直接在iPad模拟器上运行
```swift
static var previews: some View {
      ContentView()
          .previewDevice("iPad Pro (9.7-inch)")
  }
```

![008i3skNly1gy38aznqryj30o40xmdgp](https://tva1.sinaimg.cn/large/008i3skNly1gy38h48t3fj30b40fijrh.jpg)

## How it works

**.popover()**有4个参数：**isPresented**, **attachmentAnchor**, **arrowEdge**, 和 **content**.

**isPresented**控制是否显示。

**attachmentAnchor**设置弹窗锚点。

**arrowEdge**控制弹窗的小箭头方向。

**content**控制弹窗内容。
