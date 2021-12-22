---
title: 1、layout相关控件
tags: [swiftUI]
---

本文将介绍用于布局相关的一些控件

- VStack
- HStack
- ZStack
- Spacer
- Divider

## 准备

先创建一个叫做`TheStacks`的SwiftUI工程。

## 写代码

修改ContentView里的body为以下代码, 然后resume Preview：

```swift
VStack {
            Text("VStack Item 1")
            Text("VStack Item 2")
            Text("VStack Item 3")
        }.background(Color.blue)
```

![008i3skNly1gx9ys9dvjmj30do0qwmxn](https://tva1.sinaimg.cn/large/008i3skNly1gx9ytz8862j302s05h3yb.jpg)

然后我们在添加一些Divider和Spacer。

```swift
VStack {
            Text("VStack Item 1")
            Text("VStack Item 2")
            Spacer()
            Divider().background(Color.white)
            Text("VStack Item 3")            
        }.background(Color.blue)
```

![image-20211211162833693](https://tva1.sinaimg.cn/large/008i3skNly1gx9z4p6o9kj304608it8l.jpg)

我们再在`item 3`之后加一个HStack和ZStack。

```swift
VStack {
            Text("VStack Item 1")
            Text("VStack Item 2")
            Spacer()
            Divider().background(Color.white)
            Text("VStack Item 3")
            HStack {
                Text("Item 1")
                Divider().background(Color.black)
                Text("HStack Item 2")
                Divider().background(Color.black)
                Spacer()
                Text("HStack Item 3")
            }.background(Color.red)
            ZStack {
                Text("ZStack Item 1").padding().background(Color.green).opacity(0.8)
                Text("ZStack Item 2").padding().background(Color.green).offset(x: 80, y: -400)
            }
        }.background(Color.blue)
```

![截屏2021-12-11 下午4.33.17](https://tva1.sinaimg.cn/large/008i3skNly1gx9za4cl4zj305k0b8mx9.jpg)

## 这是怎么工作的？

一个新的SwiftUI工程默认是以一个居中的Text开始的。

`body`返回一个`View`。

如果要添加竖直排列的其他View，我们用VStack替换掉默认的Text，然后添加内容。

SwiftUI的Stack使用如下步骤来决定如何显示它的内容：

1. Figure out its internal spacing and subtract that from the size proposed by its parent view.(确定子视图的大小，从父视图提供的大小中减去子视图)
2. Divide the remaining space into equal parts.(将剩余空间按剩余子视图数量等分)
3. Process the size of its least flexible view.(处理 least flexibl的视图，确定其大小)
4. Divide the remaining unclaimed space by the unallocated space, and then repeat *Step 2*.（用剩余空间减去其大小，再重复步骤2）
5. The stack then aligns its content and chooses its own size to exactly enclose its children.( stack对其他的内容，确定其自身大小，其大小是刚好包裹子视图)

添加**Spacer**可以强制View使用最大的空间。这是因为**Spacer()**是最flexible的视图，它在显示所有其他视图之后填充剩余空间。

**Divider**用来画一个占满parent宽度的水平线，这也是为什么我们加了**Divider**后，蓝色背景会撑满屏幕宽度。默认**Divider**没有颜色，我们可以通过`.background(Color)`modifier来设置。

modifier是一系列可以应用到View上的方法，换句话说：他将某些改动设置到View上，然后返回新的View。

常用的**.background(Color. black)**, **.padding()**, and **.offsets(…)**都是modifier。

**HStack**和**VStack**类似，不过他是水平从左到右显示他的内容。添加**Spacer**到**HStack**中，会让它填满水平空白区域，**Divider**也是竖直向下的。

**ZStack**和**HStack** 、 **VStack** 类似，不过是重叠他的content在已有的item上。

## There's more…

你还可以使用**.frame** modifier来调整component的width和height。

```swift
.frame(
  maxWidth: .infinity,
	maxHeight: .infinity,
	alignment: .topLeading
)
```











