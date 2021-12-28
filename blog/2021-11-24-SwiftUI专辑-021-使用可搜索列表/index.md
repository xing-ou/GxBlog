---
title: SwiftUI专辑021-使用可搜索列表
tags: [swiftUI]
---
![headerimg](./Header.png)
**列表**视图可以包含一个到无数个item。随着列表中item数的增加，我们通常会提供在列表中搜索特定item的能力。

本章，我们将介绍**.searchable()**修饰符并讨论如何使用它来搜索列表中的item。
<!--truncate-->
## Getting ready

首先，创建一个新的SwiftUI项目**SearchableLists**

## How to do it…

1. 准备数据
```swift
@State private var searchText = ""
let messages = [
    "Dad, can you lend me money?",
    "Nada. Does money grow on trees?",
    "What is money made out of?",
    "Paper",
    "Where does paper come from?",
    "Huh.....",
]
```

2. 添加NavigationView和List

```swift
var body: some View {
    NavigationView {
        List {
          TextField("search", text: $searchText)
            ForEach(searchResults, id: \.self) { msg in
                Text(msg)
            }
        }.navigationBarTitle("Order Number")
            .searchable(text: $searchText)
    }
}
```

3. 实现searchResults
```swift
var searchResults: [String] {
  if self.searchText.isEmpty {
      return self.messages
  } else {
      return self.messages.filter {
          $0.lowercased().contains(searchText.lowercased())
      }
  }
}
```

运行

![image-20211228111630217](https://tva1.sinaimg.cn/large/008i3skNgy1gxtdmnfnjvj30iw0qcq40.jpg)

## How it works…

**searchText**保存正在搜索的值并作为参数传递给**.searchable**修饰符。每次**searchText**的值更改时，都会计算计算属性**searchResults**。最后，在**ForEach**结构中使用**searchResults**的值来显示基于搜索文本的过滤项目列表。
