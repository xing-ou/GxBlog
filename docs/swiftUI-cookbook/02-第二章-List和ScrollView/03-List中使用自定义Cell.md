---
title: 2、List中使用自定义Cell
tags: [swiftUI]
---
如果我们每次都要用到相同的Cell，而每次都重复写一些HStack肯定不是一个好的选择，此时我们可以把这些View封装成一个Cell，增加代码的可重用性。

## Getting ready

首先，新建一个SwiftUI项目：**CustomRows**

## How to do it…

首先，把上个项目的代码复制过来。

1. 新建一个SwiftUI View文件**WeatherRow**，在这里定义cell
```swift
struct WeatherRow: View {
    var weather: WeatherInfo
    var body: some View {
        HStack {
            Image(systemName: weather.image)
                .frame(width: 50, alignment: .leading)
            Text("\(weather.temp)°F")
                .frame(width: 80, alignment: .leading)
            Text(weather.city)
        }
        .font(.system(size: 25))
        .padding()
    }
}
```

2. 如果你要预览的话，可以在**WeatherRow_Previews**增加点数据

```swift
struct WeatherRow_Previews: PreviewProvider {
    static var previews: some View {
        WeatherRow(weather: WeatherInfo(image: "snow", temp: 5, city:"New York"))
    }
}
```

3. 修改ContentView.swift，使用我们的WeatherRow
```swift
List {
    ForEach(self.weatherData) { weather in
       WeatherRow(weather: weather)
    }
}.listStyle(.grouped)

```

最终得到同样的结果：

![image-20211226155748936](https://tva1.sinaimg.cn/large/008i3skNgy1gxraiqq2f9j30iq0wowfo.jpg)

## How it works…

我们将cell的代码单独抽离到WeatherRow中，其他地方如果需要相同的View，那么就可以直接使用WeatherRow了。
