---
title: 3、使用Image
tags: [swiftUI]
---

这一章，我们将介绍如何添加Image到View中。

## Getting ready

新建一个SwiftUI工程，叫做**ImageApp**

## How to do it…

首先让我们添加一些图片到Assert中，然后我们再介绍一些modifier来修改图片样式。

1. 替换Text为VStack
2. 从https://github.com/PacktPublishing/SwiftUI-Cookbook-2nd-Edition/tree/main/Resources/Chapter01/recipe3下载图片
3. 拖动图片到Asserts中
4. 添加一个`Image`到`VStack中`
```swift
Image("dogs1")
```

![image-20211221224926711](https://tva1.sinaimg.cn/large/008i3skNly1gxlubi8eadj30d40ou3zy.jpg)

5. 添加一个`.resizable()`modifier, 他能让SwiftUI调整图片大小以适应可以用空间。

```swift
Image("dogs1")
.resizable()
```

![image-20211221225044534](https://tva1.sinaimg.cn/large/008i3skNly1gxlucuqitnj30cy0ootae.jpg)

6. 我们看到图片被压缩了，继续添加一个`.aspectRatio`

```swift
Image("dogs1")
    .resizable()
    .aspectRatio(contentMode: .fit)
```

![image-20211221225341902](https://tva1.sinaimg.cn/large/008i3skNly1gxlufwjo2cj30cc0o8dgm.jpg)

7. 继续添加 **dog-and-nature**到`VStack`中

```swift
Image("dog-and-nature")
    .resizable()
    .aspectRatio(contentMode: .fit)
    .frame(width:300, height:200)
    .clipShape(Circle())
    .overlay(Circle().stroke(Color.blue, lineWidth: 6))
    .shadow(radius: 10)
```

8. 我们写个工具方法来获取UIImage

```swift
func getImageFromUIImage(image:String) -> UIImage {
    guard let img = UIImage(named: image) else {
        fatalError("Unable to load image")
    }
    return img
}
```

9. 然后使用UIImage来加载图片

```swift
Image(uiImage: getImageFromUIImage(image:"dog2"))
	.resizable()
	.frame(width: 200, height: 200)
	.aspectRatio(contentMode: .fit)
```

10. 最终效果

![image-20211221225942417](https://tva1.sinaimg.cn/large/008i3skNly1gxlumbs7t0j30cq0pa0u9.jpg)

## How it works…

添加`Image`到View上时，`Image`默认显示原始尺寸。图片可能大了，也可能小了。

要让`Image`适应屏幕大小，我们需要添加`.resizable`modifier。这会让`Image`缩放以占满可用空间。

为了解决缩放的拉伸问题，我们可以使用`.aspectRatio`modifier。

如果我们要限制图片大小固定为某个值，可以使用`.frame`modifier。

如果想裁剪图片为某个形状，可以使用`.clipShape`modifier。

我们还可以使用`.overlay`和`.shadow`来添加边框和阴影。

注意modifer的顺序比较重要，不同顺序的组合可能得到不一样的结果。

