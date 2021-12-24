---
title: 11、iOS14以上的View和Controls
tags: [swiftUI]
---
本章我们将查看

- **ProgressView**
- **ColorPicker**
- **Link**
- **Menu**

ProgressView用于显示任务的完成程度。有两种类型的ProgressView：不确定的进度视图显示一个旋转的圆圈直到任务完成，而确定的进度视图显示一个被填满的bar，以显示任务的完成程度。

ColorPicker视图允许用户从多种颜色中进行选择。

Menu视图则显示一个items列表，用户可以从中选择以执行特定操作。

## Getting ready

新建一个SwiftUI项目，**MoreViewsAndControls**

## How to do it…

1. 首先，添加一些状态
```swift
@State private var progress = 0.5
@State private var color  = Color.red
@State private var secondColor  = Color.yellow
@State private var someText = "Initial value"
```

2. 添加一个List， 在添加一个包含ProgressView的Section
```swift
List {
    Section(header: Text("ProgressViews")) {
        ProgressView("Indeterminate progressview")
        ProgressView("Downloading",value:progress, total:2)
        Button("More"){
            if(progress < 2){
                progress += 0.5
            }
        }
    }
}
```

3. 再添加另一个Section
```swift
	Section(header: Text("Labels")) {
    Label("Slow", image: "tortoise.fill")
    Label {
        Text("Fast").font(.title)
    } icon: {
        Circle()
            .fill(.orange)
            .frame(width: 40, height: 20, alignment: .center)
            .overlay {
                Text("F")
            }
    }
}
```

4. 在添加2个Section，包含**ColorPicker**和Link
```swift
Section(header: Text("ColorPicker")) {
    ColorPicker(selection: $color) {
        Text("Pick my background").background(color).padding()
    }
    ColorPicker("Picker", selection: $secondColor)
}
Section(header: Text("Link")) {
  Link("Packt Publishing", destination: URL(string: "https://www.baidu.com")!)
}
```

5. 再添加一个Section，包含TextEditor
```swift
Section(header: Text("TextEditor")) {
    TextEditor(text: $someText)
    Text("current editortext:\n\(someText)")
}
```

6. 再添加一个Section，包含Menu
```swift
Section(header: Text("Menu")) {
    Menu("Actions") {
        Button("set TextEditor text to 'magic'") {
            someText = "magic"
        }
        Button("turn first color green") {
            color = .green
        }
        Menu("Actions") {
            Button("set TextEditor text to 'number'") {
                someText = "number"
            }
            Button("turn first color red") {
                color = .red
            }
        }
    }
}
```

7. 最终，我们修改下List的显示样式
```swift
List {

...

}.listStyle(.grouped)
```

最终

![image-20211224164647811](https://tva1.sinaimg.cn/large/008i3skNgy1gxp0p1v15rj30i6100406.jpg)

## How it works…

不确定进度的进度条，不需要参数

```swift
ProgressView("Indeterminate progress view")
ProgressView()
```

确定进度的，需要提供，当前进度和总进度, 总进度不传的话默认为1.

```swift
ProgressView("Downloading",value: progress, total:2)
```

Label显示一个text和icon，我们可以使用SF symbol。

ColorPicker能够让用户选择颜色

Link用于显示一个可以点击的链接

**Menu**提供了弹窗供用户选择选项，可以添加多级，但不建议嵌套太深。

