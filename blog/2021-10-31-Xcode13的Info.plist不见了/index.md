---
title: Xcode13的Info.plist不见了?
tags: [杂谈]
---
![Header](./Header.png)
创建新的SwiftUI项目，发现Info.plist不见了？

哦~~~，原来是Xcode13引起的。
<!--truncate-->
查看[Xcode13 Release Note](https://developer.apple.com/documentation/xcode-release-notes/xcode-13-release-notes)，可以看到

> Projects created from several templates no longer require configuration files such as entitlements and `Info.plist` files. Configure common fields in the target’s Info tab, and build settings in the project editor. These files are added to the project when additional fields are used. (68254857)

原来新的模板不在创建Info.plist了，Info.plist的功能转移到`Target->Info`下了。

![image-20211124115621173](https://tva1.sinaimg.cn/large/008i3skNgy1gwq3pltcx9j311o0oyjub.jpg)



在Info中修改相关设置。如果你添加了一个自定义Key，那么系统会帮你创建一个Info.plist来包含你的自定义key-value。

你也可以自己直接新建。

![image-20211124115550252](https://tva1.sinaimg.cn/large/008i3skNgy1gwq3p3sf3lj319g05agm4.jpg)

非SwiftUI项目中还是存在Info.plist，但是大部分内容还是都移动到了`Target->Info`中。Info.plist只保留了部分Key-Value。

![image-20211124115901894](https://tva1.sinaimg.cn/large/008i3skNgy1gwq3sea29cj316g0dcwg7.jpg)

