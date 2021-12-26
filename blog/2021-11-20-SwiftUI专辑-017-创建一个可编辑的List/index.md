---
title: SwiftUI专辑017-创建一个可编辑的List
tags: [swiftUI]
---
![headerimg](./Header.png)
本章我们将演示，如何通过EditButton来让列表进入可编辑模式。
<!--truncate-->
## Getting ready

新建一个SwiftUI项目**ListRowEdit**

## How to do it…

我们将沿用上个例子的代码

1. 复制上个项目中ContentView中的代码过来
```swift
struct ContentView: View {
    @State var countries = ["USA", "Canada", "England", "Cameroon", "South Africa", "Mexico" , "Japan", "South Korea"]
    var body: some View {
        NavigationView {
            List {
                ForEach(countries, id: \.self) { country in
                    Text(country)
                }.onDelete(perform: self.deleteItem)
            }.navigationTitle("Countries")
                .navigationBarTitleDisplayMode(.inline)
        }
    }
   
    func deleteItem(at indexSet: IndexSet) {
        self.countries.remove(atOffsets: indexSet)
    }
}
```

2. 为navigation bar添加一个editButton
```swift
.navigationBarItems(trailing: EditButton())
```

3. 点击Edit按钮，进入编辑模式，点击“-” ，将出现delete按钮，选择delete，将删除Item

![image-20211226165934238](https://tva1.sinaimg.cn/large/008i3skNly1gxrcaycba8j30hi0j8q3g.jpg)

## How it works…

**.navigationBarItems(trailing: EditButton())**在右上角增加了一个按钮。点击后，将在每个Cell前出现一个减号。点击减号，将出现delete按钮，选择delete将删除cell。
