---
title: 3、显示confirmationDialog
tags: [swiftUI]
---

Confirmation dialogs 是 iOS 15 开始出现的。

他和Actionsheet类似，不过Actionsheet已经被废弃了。

## Getting ready

首先新建一个SwiftUI项目：**PresentingConfirmationDialogs**

## How to do it

1. 定义个State控制是否显示confirmationDialog
```swift
@State private var showDialog = false
var title  = "Confirmation Dialog"
```

2. 添加个按钮，点击后，显示confirmationDialog
```swift
var body: some View {
    Button("Present Confirmation Dialog") {
        showDialog = true
    }.confirmationDialog(title, isPresented: $showDialog) {
        Button("Dismiss Dialog", role: .destructive) {

        }
        Button("Save") {

        }
        Button("Cancel", role: .cancel) {

        }
        Button("Print something to console") {
            print("something")
        }
    } message: {
        Text("""
             Use Dialogs to give users alternatives for
             completing a task
            """)
    }
}
```

![20220105161606](https://tva1.sinaimg.cn/large/008i3skNgy1gy2v9afnolj309q0lit94.jpg)

## How it works

.confirmationDialog修饰符用于显示一个confirmationDialog。title用于显示title，第二个参数binding控制是否显示，actions控制action btn, message控制message的显示
