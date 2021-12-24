---
title: 2、创建static items List
tags: [swiftUI]
---

**List** 和ScrollView类似，都是用来显示一个Items的集合。不同的是**List**更适合处理较大的数据集，因为它们不会将整个数据集加载到内存中。

本章，我们将会用static list来显示各个城市的天气信息。

## Getting ready

新建一个SwiftUI工程：**StaticList**。

## How to do it…

1. 首先创建一个数据结构来存储天气信息
```swift
struct WeatherInfo: Identifiable {
    var id = UUID()
    var image: String
    var temp: Int
    var city: String
}
```

2. 在ContenView中准备天气数据
```swift
let weatherData: [WeatherInfo] = [
    WeatherInfo(image: "snow", temp: 5, city:"NewYork"),
    WeatherInfo(image: "cloud", temp:5, city:"KansasCity"),
    WeatherInfo(image: "sun.max", temp: 80, city:"SanFrancisco"),
    WeatherInfo(image: "snow", temp: 5,city:"Chicago"),
    WeatherInfo(image: "cloud.rain", temp: 49,city:"Washington DC"),
    WeatherInfo(image: "cloud.heavyrain", temp: 60,city:"Seattle"),
    WeatherInfo(image: "sun.min", temp: 75,city:"Baltimore"),
    WeatherInfo(image: "sun.dust", temp: 65,city:"Austin"),
    WeatherInfo(image: "sunset", temp: 78,city:"Houston"),
    WeatherInfo(image: "moon", temp: 80,city:"Boston"),
    WeatherInfo(image: "moon.circle", temp: 45,city:"denver"),
    WeatherInfo(image: "cloud.snow", temp: 8,city:"Philadelphia"),
    WeatherInfo(image: "cloud.hail", temp: 5,city:"Memphis"),
    WeatherInfo(image: "cloud.sleet", temp:5,city:"Nashville"),
    WeatherInfo(image: "sun.max", temp: 80, city:"SanFrancisco"),
    WeatherInfo(image: "cloud.sun", temp: 5,city:"Atlanta"),
    WeatherInfo(image: "wind", temp: 88, city:"LasVegas"),
    WeatherInfo(image: "cloud.rain", temp: 60,city:"Phoenix"),
    ]
```

3. 添加List，用ForEach显示每个天气信息
```swift
List {
  ForEach(self.weatherData) { weather in
      HStack {
          Image(systemName: weather.image).frame(width: 50, alignment: .leading)
          Text("\(weather.temp)°F").frame(width: 80, alignment:.leading)
          Text(weather.city)
      }.font(.system(size: 25))
      .padding()
  }
}.listStyle(.grouped)
```

最终显示：

![image-20211224182243081](https://tva1.sinaimg.cn/large/008i3skNgy1gxp3gwbp7wj30is0sejsg.jpg)

## How it works…

首先我们创建**WeatherInfo**结构体，并让其遵循**Identifiable**协议，这样使用ForEach的时候就不用指定id了。

然后每个item使用HStack来显示其中的内容。
