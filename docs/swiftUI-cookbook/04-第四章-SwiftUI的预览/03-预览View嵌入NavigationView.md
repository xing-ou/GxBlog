---
title: 3、预览View嵌入NavigationView
tags: [swiftUI]
---
有些View自身并不包含NavigationView，但是他又属于NavigationView stack中的一部分。
这个时候我们要看导航栏的话，就需要运行App并导航到对应界面。
不过，预览提供了一种节省时间的方式来实时查看 UI 更改，而无需重新构建应用程序。

## Getting ready

我们先创建一个SwiftUI工程：**PreviewingInNavigationView**

## How to do it

1. 替换默认的Text为以下代码
```swift
struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                NavigationLink(destination: SecondView(someText: "Sample text")) {
                    Text("Go to second view")
                        .foregroundColor(Color.white)
                        .padding()
                        .background(Color.black)
                        .cornerRadius(25)
                }

            }.navigationBarTitle("Previews", displayMode: .inline)
        }
    }
}
```

2. 实现报错的**SecondView**
```swift

struct SecondView: View {
    var someText: String
        var body: some View {
            Text(someText)
                .navigationBarTitle("Second View ", displayMode: .inline)
        }
}

///这个preview，并没有看到设置的导航栏title, 我们需要运行后进入这个界面才能看到
struct SecondView_Previews: PreviewProvider {
    static var previews: some View {
        SecondView()
    }
}
```

3. 修改SecondView_Previews，嵌入NavigationView
```swift
struct SecondView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            SecondView(someText: "Testting")
        }
    }
}
```

![image-20211230185348484](https://tva1.sinaimg.cn/large/008i3skNgy1gxw231yqswj30dy0r8wew.jpg)

## How it works

处于导航栈里的界面的**.navigationBarTitle()**，预览是看不见，我们可以修改预览的代码，将其嵌入NavigationView就能看到了。
