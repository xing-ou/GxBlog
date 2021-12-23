---
title: 4、Button以及跳转
tags: [swiftUI]
---

本章将介绍如何使用各种Button。

- Button
- EditButton
- PasteButton
- NavigationView
- NavigationLink

## Getting ready

首先，新建一个**ButtonsApp**的SwiftUI工程。

## How to do it…

1. 新建文件
2. 模板选择**SwiftUI View**
3. 输入名称**ButtonView**
4. 重复上面步骤，创建**EditButtonView**
5. 重复上面步骤，创建**PasteButtonView**
6. 重复上面步骤，创建**MenuButtonView**，(**MenuButton**已经弃用了，使用**Menu**)
7. 打开**ContentView.swift**，在body中添加一个**NavigationView**
```swift
NavigationView {
    VStack {
        NavigationLink(destination: ButtonView()) {
            Text("Buttons").padding()
        }
        NavigationLink(destination: EditButtonView()) {
            Text("EditButtons").padding()
        }
        NavigationLink(destination: MenuButtonView()) {
            Text("MenuButtons").padding()
        }
        NavigationLink(destination: PasteButtonView()) {
            Text("PasteButtons").padding()
        }
        NavigationLink(destination:
            Text("Very long text that should not be displayed in a single line because it is not good design")
                .padding()
                .navigationBarTitle(Text("Detail"))
        ) {
            Text("details about text").padding()
        }
}.navigationBarTitle(Text("Main View"), displayMode:.inline)

```

最终显示如下：

![image-20211222163022220](https://tva1.sinaimg.cn/large/008i3skNly1gxmozc7y7pj30ci0oyjrs.jpg)

8. 打开**EditButtonView.swift**，添加下面的代码，实现**EditButton**。
```swift
struct EditButtonView: View {
    @State private var animals = ["Cats", "Dogs", "Goats"]
    var body: some View {
        NavigationView {
            List {
                ForEach(animals, id: \.self) { animal in
                    Text(animal)
                }.onDelete(perform: removeAnimal)
            }
        }.navigationBarItems(trailing: EditButton())
        .navigationBarTitle(Text("EditButtonView"), displayMode: .inline)
    }
    
    func removeAnimal(at offsets: IndexSet){
        animals.remove(atOffsets: offsets)
    }
}
```

最终得到，点击右上角的Edit按钮，List会进入编辑状态。

![20211222164221](https://tva1.sinaimg.cn/large/008i3skNgy1gxmpcje8g3j305k0bedfr.jpg)

9. 打开**MenuButtonView.swift**， 添加以下代码
```swift
var body: some View {
	Text("MenuButtons are currently available on MacOS currently")
  .padding()
  .navigationBarTitle("MenuButtons", displayMode:.inline)

/*
MenuButton("country +") {
Button("USA") { print("Selected USA") }.background(Color.accentColor)
Button("India") { print("Selected India") }
}
*/
}

```

10. 打开**PasteButtonView.swift**，添加以下代码
```swift
struct PasteButtonView: View {
    var body: some View {
        VStack {
            Text("PasteButton controls how you paste in macOS but is not available in iOS. For more information, check the \"See also\" section of this recipe")
                .padding()
        }.navigationBarTitle("PasteButton", displayMode: .inline)
    }
}
```

## How it works…

**NavigationLink**必须放在**NavigationView**里使用。

 **NavigationLink** 需要两个参数**destination** 和 **label**。**destination**代表点击后跳转的View。**label**代表显示的内容。

`.navigationBarTitle`modifier给ContentView界面添加了个title。第一个参数指定title的内容，第二个参数指定title显示的模式。.inline代表在标准的navigationBar中显示。

其他几个界面也有指定`.navigationBarTitle`，但是在preview中不会显示，在运行时才会显示。

**EditButton**和**List**一起使用，让List可编辑。我们之后再学习List。

**MenuButtons**和**PasteButtons**只能在macOS中使用。MenuButtons已被弃用，可以不用看了。

PasteButton可参考官方文档中的例子。

