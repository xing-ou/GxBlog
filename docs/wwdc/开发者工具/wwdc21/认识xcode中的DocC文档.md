---
title: 认识xcode中的DocC文档
tags: [wwdc, DocC]
description: Documentation Compiler。也并不单指文档编译器，而是代指整个xcode中整合的文档环境。
---
## DocC

Documentation Compiler。也并不单指文档编译器，而是代指整个xcode中整合的文档环境。

## 文档是怎么生成的？

![image-20211118181848665](https://tva1.sinaimg.cn/large/008i3skNgy1gwjh1r23pfj30yq0j0ta2.jpg)

xcode编译你的framework或者package。编译器会存储里面的public/open的API信息，然后将这些信息交给`DocC`，`DocC`再将你的`DocC Catalog`和Api接口信息结合起来。最终生成`DocC Archive`，这里面包含你的文章、教程、和文档。 

你的Target所依赖的其他库都会重复此过程，这样一来就可以把相关文档集中在一处。

## 如何生成文档

有以下3中方式生成文档： 

- Product菜单下新增了一个`Build Documentation`，点击这个生成文档。
- Build Setting中的`Build Documentation During Build`设置为YES，这样每次build时都会生成文档。
- 新增命令`xcodebuild docbuild`，可以用命令生成文档。

## 如何编写文档

```swift
/**
这是文档注释
*/

///这是文档注释
```

上面两种注释方式是告诉Swift文档编译器将该注释和下方的声明关联起来。

注释支持markdown。

DocC只会为你的framework中的public或者open的符号生成文档页面。

## 参数和返回值

```swift
/// - Parameter paramA: this is ParamA
/// - Returns: this is the func returns
```

这两个定义参数和返回值。但是如果参数多了，我们也厌倦了手动添加，此时我们可以使用`Add Documentation`功能。按住`Command键`，单击定义弹出菜单，选择`Add Documentation`。这样就能快速为你生成文档。

## 文档间互相连接

格式

```swift
///这样跳转到另一个类型的文档``SomeType``
///这样跳转到另一个类型的属性或者方法或者子类型``SomeType/SubType``
```

这样文档就会创建到对应文档的链接。

## 导出文档

![image-20211118191339699](https://tva1.sinaimg.cn/large/008i3skNgy1gwjims9i73j30i806a3yn.jpg)

导出docarchive文件，其他人双击打开，就可以在xcode的文档中心查看文档了。