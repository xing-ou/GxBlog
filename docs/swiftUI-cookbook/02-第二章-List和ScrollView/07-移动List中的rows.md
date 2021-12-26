---
title: 7、移动List中的rows
tags: [swiftUI]
---
本章我们将实现一个List， 允许用户移动，重新组织rows。

## Getting ready

首先创建一个新的SwiftUI项目**MovingListRows**

## How to do it…

1. 还是准备数据
```swift
@State var countries = ["USA", "Canada", "England", "Cameroon", "South Africa", "Mexico" , "Japan", "South Korea"]
```

2. 构建一个NavigationView, EditButton, List，只是ForEach的时候我们添加上**onMove**
```swift
struct ContentView: View {
    @State var countries = ["USA", "Canada", "England", "Cameroon", "South Africa", "Mexico" , "Japan", "South Korea"]
    var body: some View {
        NavigationView {
            List {
                ForEach(countries, id: \.self) { country in
                    Text(country)
                }.onMove(perform: self.moveRow)
            }.navigationTitle("Countries")
                .navigationBarTitleDisplayMode(.inline)
                .navigationBarItems(trailing: EditButton())
        }
    }
   
    private func moveRow(source: IndexSet, destination: Int){
            
    }
}
```

3. 实现moveRow
```swift
private func moveRow(source: IndexSet, destination: Int){	
  countries.move(fromOffsets: source, toOffset: destination)
}
```

当我们点击Edit时

![image-20211226171317473](https://tva1.sinaimg.cn/large/008i3skNly1gxrcp8ng6zj30ig0r03zb.jpg)

## How it works…

首先我们需要一个EditButton来进入编辑模式。

在ForEach时，我们提供onMove这个modifier，当我们移动时会触发对应回调。

**moveRow**函数有两个参数，**source** 和**destination**。分别代表当前index和移动后的index。

在回调中，我们修改数据源移动数据位置。
