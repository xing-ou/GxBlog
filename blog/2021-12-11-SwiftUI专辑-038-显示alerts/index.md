---
title: SwiftUI专辑038-显示alerts
tags: [swiftUI]
---
![headerimg](./Header.png)
一种显示重要信息的常用View是：Alert。

iOS 13 和 14 显示Alert的方式被废弃了。iOS 15介绍了全新的显示alerts的方式。

我们两种都看一看。先看iOS15的，再看老版本的。
<!--truncate-->
## Getting ready

首先，新建个SwiftUI项目：**PresentingAlerts**

## How to do it

1. 创建一个State, 控制alert的显示和隐藏
```swift
@State private var showSubmitAlert = false
```

2. 添加一个Button，点击后，弹出alert
```swift
var body: some View {
    Button("show alert") {
        self.showSubmitAlert = true
    }.alert("Confirm Actions", isPresented: $showSubmitAlert) {
        Button("Ok", role: .cancel) {
            print("clicked ok")
        }
    } message: {
        Text("Are you sure you want to submit the form")
    }
}
```

![20220105144429](https://tva1.sinaimg.cn/large/008i3skNly1gy2slzd7mlj309q0k7t8u.jpg)

3. 再看看老的Alert是怎么用的
```swift
Button("show old alert") {
      self.showSubmitAlert = true
  }.alert(isPresented: $showSubmitAlert) {
      Alert(title: Text("Old Confirm Actions"),
            message: Text("Are you sure you want to submit the old form"),
            dismissButton: .default(Text("ok")))
  }
```

## How it works

### iOS 15

你通过**.alert** 修饰符，绑定到是否展示，然后提供title，message， actions。

### iOS 13 and 14

你通过**.alert** 修饰符，绑定到是否展示，然后返回一个Alert。

在这个Alert中设置title， message 和actions
