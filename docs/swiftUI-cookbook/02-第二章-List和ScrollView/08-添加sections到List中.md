---
title: 8、添加sections到List中
tags: [swiftUI]
---
本章我们将用section实现一个静态List。

## Getting ready

首先，我们新建一个SwiftUI项目**ListWithSections**

## How to do it…

1. 首先添加一个**NavigationView**，和List。
```swift
NavigationView {
    List {

    }.navigationTitle("Continents and Countries")
        .navigationBarTitleDisplayMode(.inline)                
}
```

2. 添加sections到List中
```swift
 List {
    Section(header: Text("Africa")) {
        Text("Nigeria")
        Text("Ghana")
        Text("Kenya")
        Text("Senegal")
    }
    Section(header: Text("Europe")) {
        Text("Spain")
        Text("France")
        Text("Sweden")
        Text("Finland")
        Text("UK")
    }
}
```

运行，我们将看到

![image-20211226173605636](https://tva1.sinaimg.cn/large/008i3skNly1gxrdcyfgwnj30jo0u4t9t.jpg)

## How it works…

**Section**用来将items组合成group。

section可以通过一个可选的header，用于显示在group的顶部。
