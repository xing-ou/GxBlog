---
title: 5、从List中删除rows
tags: [swiftUI]
---
之前我们已经知道了如何添加rows。
现在我们来学习一下如何用swipe手势删除rows。

## Getting ready

首先，我们新建一个SwiftUI项目:**ListRowDelete**

## How to do it…

1. 首先，在ContentView中准备一点数据
```swift
@State var countries = ["USA", "Canada", "England", "Cameroon", "South Africa", "Mexico" , "Japan", "South Korea"]
```

2. 在body中显示出来，并加上**onDelete**
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
        
    }
}
```

3. 实现deleteItem
```swift
private func deleteItem(at indexSet: IndexSet){
    self.countries.remove(atOffsets: indexSet)
}
```

最终结果

![image-20211226164525655](https://tva1.sinaimg.cn/large/008i3skNly1gxrbw8m86tj30jg0rsdgp.jpg)

## How it works…

我们看到了一个新的modifier: **.onDelete** 。他会在我们点击删除时，执行设置的回调。

本例中点击后会执行**deleteItem**。这个函数有一个**IndexSet**参数，他里面包含需要被删除的index。

然后我们修改数据源，移除这些Index。

当然，我们还可以通过添加**EditButton**来进入编辑模式，实现对rows的删除。
