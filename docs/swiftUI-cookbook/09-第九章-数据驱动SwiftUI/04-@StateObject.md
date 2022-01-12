---
title: 4、@StateObject
tags: [swiftUI]
---

一开始**@ObservedObject**是被用来把逻辑从View中分离出去的。

apple期望我们从外部传入那个对象，而不是在View内部创建这个对象。因为在内部创建的话，就将ObservedObject的生命周期和view的生命周期绑定在了一起，View销毁，ObservedObject也会被销毁。

但是实际情况是，我们的View很有可能会被不断的销毁和重建，这种销毁和重建并不是我们的逻辑，而是SwiftUI刷新界面的规则，我们无法干预。随着View的销毁和重建，内部的state也被重置了，这是一个很奇怪的行为。

apple意识到了这一点，加了个新的**@StateObject**修饰符来解决这个问题。

本文将演示这种奇怪的行为，并介绍如何使用@StateObject。

## Getting ready

首先，创建一个新的项目**Counter**

## How to do it…

1. 首先，我们新建一个Counter，相当于一个ViewModel
```swift
class Counter: ObservableObject {
    @Published var value: Int = 0
    func inc() {
        value += 1
    }

    func dec() {
        value -= 1
    }
}
```

2. 构建我们的计数器ConterView
```swift
struct CounterView: View {
    @ObservedObject var counter = Counter()
  // @StateObject var counter = Counter()
    var body: some View {
        VStack(spacing: 12) {
            Text("\(counter.value)")
            HStack(spacing: 12){
                Button {
                    counter.dec()
                } label: {
                    Text("-")
                        .padding()
                        .foregroundColor(.white)
                        .background(.red)
                }
                Button {
                    counter.inc()
                } label: {
                    Text("+")
                        .padding()
                        .foregroundColor(.white)
                        .background(.red)
                }
            }
        }
    }
}
```

3. 在ContentView中使用我们的额CounterView，并加个按钮刷新界面
```swift
struct ContentView: View {
    @State var refreshedAt: Date = Date()
    var body: some View {
        VStack(spacing:12) {
            Text("Refresh at ") + Text(refreshedAt.formatted(date: .omitted, time: .standard) )
            CounterView()
            Button {
                refreshedAt = Date()
            } label: {
                Text("Refresh")
                    .padding()
                    .foregroundColor(.white)
                    .background(.blue)
            }
        }
    }
}
```

![image-20220112170337738](https://tva1.sinaimg.cn/large/008i3skNgy1gyazyfczwuj30by0osmxf.jpg)

## How it works...

当我们点击加号，再点击refresh，我们发现计数器的值归零了。这不是我们期望的，我们只想要更新时间。

这个的原因是，当我们点击按钮，更新refreshedAt，这会重新render body，这意味着SwiftUI会销毁当前的View，重新构建，CounterView也重新构建了，内部的value被重置了。



现在我们将counter改为@StateObject：

```swift
@StateObject var counter = Counter()
```

当我们点击加号，再点击refresh，一切正常，计数器的值保留了。