---
title: 5、显示context menus
tags: [swiftUI]
---

context menus是一个弹出菜单，用于显示开发人员预期用户可能会执行的操作。context menus在 iOS 上是通过 3D Touch 触发和 macOS 上的右键单击触发。

context menus由一组在隐式**HStack 中**水平显示的按钮**组成**。

## Getting ready

首先，创建一个新的SwiftUI项目：**DisplayingContextMenus**

## How to do it

1. 首先定义一个State
```swift
@State private var bulbColor = Color.red
```

2. 定义个Image
```swift
Image(systemName: "lightbulb.fill")
      .font(.system(size: 60))
      .foregroundColor(self.bulbColor)
```

3. 添加contextMemu
```swift
var body: some View {
    Image(systemName: "lightbulb.fill")
        .font(.system(size: 60))
        .foregroundColor(self.bulbColor)
        .contextMenu {
            Button("Yellow Bulb"){
                self.bulbColor = Color.yellow
            }
            Button("Blue Bulb"){
                self.bulbColor = Color.blue
            }
            Button("Green Bulb"){
                self.bulbColor = Color.green
            }
        }
}
```

最终结果，长按图片:

![image-20220105233301390](https://tva1.sinaimg.cn/large/008i3skNgy1gy37vfiqnvj30d00qugm6.jpg)

## How it works

**.contextMenu()** 修饰符可以添加到任何View上。

当我们长按View时，会弹出ContextMenu。
