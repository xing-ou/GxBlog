---
title: 3、用ScrollViewReader控制滚动
tags: [swiftUI]
---

**ScrollViewReader**允许你通过代码控制滚动到某个Index处，这个Index甚至可能在当前屏幕中并不可见。

比如：自动滚动到新添加的item，自动滚动到最近更新的item等等。

在本节中，我们将创建一个显示从 A 到 Q 的字符列表。屏幕顶部的按钮将在单击时以编程方式从列表顶部滚动到列表末尾。屏幕底部的另一个按钮将允许我们从底部向上滚动到列表中间。

## Getting ready

首先新建一个swiftui项目**ScrollViewReaders**

## How to do it…

1. 首先创建一个数据结构：CharacterInfo
```swift
struct CharacterInfo: Identifiable {
    var name: String
    var id: Int
}
```

2. 准备数据
```swift
 let charArray = [
    CharacterInfo(name: "a.circle.fill", id: 0),
    CharacterInfo(name: "b.circle.fill", id: 1),
    CharacterInfo(name: "c.circle.fill", id: 2),
    CharacterInfo(name: "d.circle.fill", id: 3),
    CharacterInfo(name: "e.circle.fill", id: 4),
    CharacterInfo(name: "f.circle.fill", id: 5),
    CharacterInfo(name: "g.circle.fill", id: 6),
    CharacterInfo(name: "h.circle.fill", id: 7),
    CharacterInfo(name: "i.circle.fill", id: 8),
    CharacterInfo(name: "j.circle.fill", id: 9),
    CharacterInfo(name: "k.circle.fill", id: 10),
    CharacterInfo(name: "l.circle.fill", id: 11),
    CharacterInfo(name: "m.circle.fill", id: 12),
    CharacterInfo(name: "n.circle.fill", id: 13),
    CharacterInfo(name: "o.circle.fill", id: 14),
    CharacterInfo(name: "p.circle.fill", id: 15),
    CharacterInfo(name: "q.circle.fill", id: 16),
]
```

3. 替换默认的Text为Scrollview和ScrollViewReader
```swift
var body: some View {
    ScrollView {
        ScrollViewReader { value in
            Button("go to q") {
                value.scrollTo(16)
            }.padding().background(Color.yellow)
        }
    }
}
```

4. 将列表加进去
```swift
var body: some View {
    ScrollView {
        ScrollViewReader { value in
            Button("go to q") {
                value.scrollTo(16)
            }.padding().background(Color.yellow)
            ForEach(charArray) { image in
                Image(systemName: image.name)
                    .id(image.id)
                    .font(.largeTitle)
                    .foregroundColor(Color.yellow)
                    .frame(width: 90, height: 90)
                    .background(Color.blue)
                    .padding()
            }
        }
    }
}
```

5. 再加个按钮，滚动到G
```swift

var body: some View {
    ScrollView {
        ScrollViewReader { value in
            ....
            Button("Go to G") { 
    					value.scrollTo(6, anchor: .bottom)
						}.padding().background(Color.yellow)            
        }
    }
}
```

最终结果

![20211228183732](https://tva1.sinaimg.cn/large/008i3skNgy1gxtqebas96j309j0jh3yt.jpg)

## How it works…

 **CharacterInfo** 遵循**Identifiable** 协议，包含2个属性  **name** 和 **id**。 **id** 是必须的，**ScrollViewReader** 用这个来定位每个item。就行你的房间号一样，ScrollView知道该往什么地方滚动。

我们将ScrollViewReader嵌套在ScrollView中，这样就能够使用**scrollTo()** 方法。

 **scrollTo()** 方法有个 **anchor** 参数，用来指定我们想滚动到的位置， 他是某个item的id 。第二个参数用来指定Item滚动到顶部、底部、还是中心等。
