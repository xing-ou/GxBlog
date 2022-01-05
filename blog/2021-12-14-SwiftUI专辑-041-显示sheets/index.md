---
title: SwiftUI专辑041-显示sheets
tags: [swiftUI]
---
![headerimg](./Header.png)
SwiftUI使用sheets来present新的View(类似于UIKit的present功能)，允许你往下拖动，让弹出的View消失。

本章将演示如何present一个NavigationView。
<!--truncate-->
## Getting ready

首先，新建一个SwiftUI项目：**PresentingSheets**。

## How to do it

1. 首先创建2个两个State

```swift
@State private var showSheet = false
@State private var sheetWithNav = false
```

2. 创建一个按钮，点击后显示sheet
```swift
var body: some View {
    VStack {
        Button("Display Sheet") {
            self.showSheet = true
        }.sheet(isPresented: $showSheet) {

        } content: {
            SheetView()
        }
    }
}
```

3. 实现SheetView
```swift
struct SheetView: View {
    var body: some View {
        Text("This is the sheet we want to display View")
    }
}
```

运行

![image-20220105190022691](https://tva1.sinaimg.cn/large/008i3skNgy1gy2zzs3nuuj30iq11wgm6.jpg)

4. 再创建一个按钮，点了显示带导航的sheet
```swift
 Button("SheetWithNavigationBar") {
      self.sheetWithNav = true
  }.sheet(isPresented: $sheetWithNav) {

  } content: {
      SheetWithNavView(sheetWithNav: $sheetWithNav)
  }
```

5. 实现我们的SheetWithNavView
```swift
struct SheetWithNavView: View {
  //注意是@Binding
    @Binding var sheetWithNav: Bool
    var body: some View {
        NavigationView {
            Text("Sheet with navigation")
                .navigationTitle("NaviagtionTitle")
                .navigationBarTitleDisplayMode(.inline)
                .navigationBarItems(trailing: Button("Done", action: {
                    self.sheetWithNav = false
                }))
        }
    }
}

struct SheetWithNavView_Previews: PreviewProvider {
    static var previews: some View {
      //我们可以直接设置@Binding的值：.constant(true)
        SheetWithNavView(sheetWithNav: .constant(true))
    }
}
```

![image-20220105231502701](https://tva1.sinaimg.cn/large/008i3skNly1gy37cq8qwej30ji130755.jpg)

ok，现在我们点击Done，界面就会消失

## How it works

首先sheet绑定了是否展示isPresented，一个可选的onDismiss，一个要显示的View。

之后我们也演示了，如何通过传递绑定的isPresented，让弹出的View能够通过代码dismiss。

传递的时候，我们使用@Binding接受。

在preview时，对于@Binding的数据，我们可以通过.constant()来模拟，便于我们预览。

