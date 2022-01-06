---
title: 4、使用TabView
tags: [swiftUI]
---

NavigationView比较适合有层次的数据，但不太适合不想关的数据。TabView就是用来组织这种数据的。

## Getting ready

新建一个SwiftUI项目：**UsingTabViews**

## How to do it…

1. 新建一个**HomeView**
```swift
let games = ["Doom", "Final F","Cyberpunk", "avengers", "animal trivia", "sudoku", "snakes and ladders", "Power rangers", "ultimate frisbee","football", "soccer", "much more"]

struct HomeView: View {
    var body: some View {
        NavigationView {
            List {
                ForEach(games, id: \.self) { game in
                    Text(game).padding()
                }
            }.navigationBarTitle("Best Games for 2021", displayMode: .inline)
        }
    }
}
```

2. 新建一个**CurrenciesView**
```swift
struct Currency: Identifiable {
    let id = UUID()
    var name: String
    var image: String
}

var currencies = [
    Currency(name: "Dollar", image: "dollarsign.circle.fill"),
    Currency(name: "Sterling", image: "sterlingsign.circle.fill"),
    Currency(name: "Euro", image: "eurosign.circle.fill"),
    Currency(name: "Yen", image: "yensign.circle.fill"),
    Currency(name: "Naira", image: "nairasign.circle.fill"),
]
struct CurrenciesView: View {
    var body: some View {
        NavigationView {
            VStack {
                ForEach(currencies) { currency in
                    HStack {
                        Group {
                            Text(currency.name)
                            Spacer()
                            Image(systemName: currency.image)
                        }.font(Font.system(size: 40, design: .default))
                        .padding()
                    }
                }
            }.navigationBarTitle("Currencies")
        }
    }
}
```

3. 打开**ContentView.swift**，使用TabView
```swift
struct ContentView: View {
    var body: some View {
        TabView {
            HomeView().tabItem {
                Label("Home", systemImage: "house.fill")
            }
            CurrenciesView().tabItem {
                Label("Currencies", systemImage: "coloncurrencysign.circle.fill")
            }
        }
    }
}
```

![image-20220105002641933](https://tva1.sinaimg.cn/large/008i3skNly1gy23syy5yej30im132dh8.jpg)

## How it works…

我们使用TabView定义tab的内容。

使用**.tabItem()** 定义tabbar的内容。

ios14以后TabView还可以用作**UIPageViewController**。

```swift
TabView {

}.tabViewStyle(.page)
