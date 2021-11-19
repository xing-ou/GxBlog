---
title: 提升Xcode中DocC文档质量
tags: [wwdc, DocC]
description: 这篇文章主要介绍DocC的Article。
---
##  DocC的文档类型

![image-20211119150900089](https://tva1.sinaimg.cn/large/008i3skNgy1gwkh6ikmytj30jc0aqglz.jpg)

### Reference

![image-20211119151042888](https://tva1.sinaimg.cn/large/008i3skNgy1gwkh8an5hpj30ye0j6aaq.jpg)

Reference提供Api的具体信息。

### Articles

![image-20211119151201120](https://tva1.sinaimg.cn/large/008i3skNgy1gwkh9nxaaej30xi0iidh1.jpg)

`articles`没有固定的内容，他适合用来说明你的framework是如何运作的、原理等。

### Tutorials

![image-20211119151632036](https://tva1.sinaimg.cn/large/008i3skNgy1gwkhecx9msj30we0i4dgb.jpg)

通过一系列的步骤，让使用者逐步了解framework。

本文只讲article相关，另外两个在其他section中。

## 如何创建Documentation Catalog

我们在framework的target下选择新建，找到`Documentation`下的`Documentation Catalog`。

![image-20211119163124984](https://tva1.sinaimg.cn/large/008i3skNgy1gwkjk9nlm7j30kk0jaq3u.jpg)

![image-20211119163605289](https://tva1.sinaimg.cn/large/008i3skNgy1gwkjp56137j30jq0483yj.jpg)

## Top Level article

上图中带个小书本标记的表明他是一个`Article`。默认创建的这个`Article`是`top level article`，即我们文档的首页。我们可以更改这个`article`来自定义我们的首页。

如果你没有提供`Documention Catalog`,  默认的首页是所有Api信息按类型区分的一个索引页,如下: 

![image-20211119162858980](https://tva1.sinaimg.cn/large/008i3skNgy1gwkjhqt524j30yi0kkgmp.jpg)

## article的内容

我们打开`top level article`。可以看到以下内容

![image-20211119170339180](https://tva1.sinaimg.cn/large/008i3skNgy1gwkkhu0zqqj30yb0u0djd.jpg)

我们注意几点：

- `top level article`的一级header是framework的链接，通常都是默认生成的，我们不用去改，如果是普通article我们就用普通字符串就行了，此时这个article会出现在Topics下的`Articles`下。

- `Topics`是有特殊含义的，和文档的`Topics`对应。

- `Group`给了你将所有链接分组的机会。没有分完的，将出现在默认api索引页中。这个默认索引页是紧接着你的mark down之后的。`Group`的功能类似于代码里的`#pragam mark`。

  如下：最终生成framework文档被分为了`自定义Group`、`Class`等。所有未分配到你自定义的Group下的api都将按类型分配到`Classes`那些默认的中去。

  ![image-20211119172102017](https://tva1.sinaimg.cn/large/008i3skNgy1gwkkzwgzilj30bq0mqgmd.jpg)

### 添加资源

markdown中的图片拖动到Resource文件夹下，注意命名规则, 支持不同屏幕的@x表示。

- sloth@2x.png
- 如果是dark mode下的：sloth~dark@2x.png
- markdown中只用使用名字就行sloth.png

## Extension

你可以利用extension来将，比如某个Class的简介和Overview移动到单独的markdown中，这样你的代码就显得更简洁、专注。

![image-20211119173643459](https://tva1.sinaimg.cn/large/008i3skNgy1gwklg8mka1j30rk0g4t9b.jpg)

![image-20211119173714102](https://tva1.sinaimg.cn/large/008i3skNgy1gwklgr1f0aj30pg0fsdge.jpg)

当DocC生成文档的时候会将两者结合起来。

如何创建Extension:

- New FIle，在`Documentation`中选择`Extension File`, 命名为关联的Api名称。
- 修改一级标题中的链接为你想要关联的Api， 以你的framwork开头，比如`MyFramework/MyClass`
- 修改其他信息，注意这里的Topic下的`Group`，可以分组这个class下的属性和方法，和之前`top level article`的类似。

至此，这个Api的文档界面就完全自定义了。