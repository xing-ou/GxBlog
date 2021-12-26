---
title: 4、添加rows到List中
tags: [swiftUI]
---
用户对列表最常见的操作无外乎：增、删、改。
本章将介绍如何增加rows。

## Getting ready

新建一个SwiftUI工程，叫做**ListRowAdd**

## How to do it…

让我们最顶部创建一个Button，用于往列表中加rows。

1. 在**ContentView**中创建一个数组

```swift
@State var numbers = [1,2,3,4]
```

2. 添加一个**NavigationView**和一个**List**

```swift
struct ContentView: View {
    @State var numbers = [1,2,3,4]
    var body: some View {
        NavigationView {
            List {
                ForEach(numbers, id: \.self) { number in
                    Text("\(number)")
                }
            }
        }
    }
}
```

3. 给List添加一个NavigationBarTitle

```swift
.navigationTitle("NumberList")
.navigationBarTitleDisplayMode(.inline)
```

4. 给navigation bar添加一个button
```swift   
.navigationBarItems(trailing: Button("Add", action: self.addItemToRow))
```

5. 实现addItemToRow方法
```swift
private func addItemToRow() {
	self.numbers.append(Int.random(in: 5 ..< 100))
}
```

最终，我们点击add时，能够看到新的cell。

![image-20211226162149439](https://tva1.sinaimg.cn/large/008i3skNly1gxrb7om4nlj30im0nk3yw.jpg)

## How it works…

我们定义了一个State： numbers，然后使用ForEach，将numbers显示出来。

我们使用**navigationBarTitle**增加了一个navigationBar。

然后使用**navigationbartItems**在右边增加了一个按钮，并绑定点击事件。

我们在点击事件中，修改State：numbers。由于数据源变了，View自动刷新，将新添加的数字显示了出来。

上面的例子可能有点小问题，注意我们的ForEach中使用了\\.self。而ForEach的id应该是唯一的，我们的随机数可能产生相同的数字，而相同的id可能导致一些异常行为。这里只是一个例子，我们只要记住id应该具有唯一性就好。





