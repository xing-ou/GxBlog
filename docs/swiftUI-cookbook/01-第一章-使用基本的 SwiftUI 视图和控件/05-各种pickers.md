---
title: 5、各种pickers
tags: [swiftUI]
---
pickers是用来提供给用户选择某个值的。
本文将介绍以下的pickers

- **Picker**
- **Toggle**
- **Slider**
- **Stepper**
- **DatePicker**

## Getting ready

首先，新建一个SwiftUI工程，叫做**PickersApp**。

## How to do it…

1. 在**ContentView.swift**创建好State，以绑定各个pickers的value。
```swift
@State var choice = 0
@State var showText = false
@State var transitModes = ["Bike", "Car", "Bus"]
@State var sliderVal: Float = 0
@State var stepVal = 0
@State var gameTime = Date()
```

2. 在Body中加入一个`Form`、`Section`、`Picker`。
```swift
struct ContentView: View {
    @State var choice = 0
    @State var showText = false
    @State var transitModes = ["Bike", "Car", "Bus"]
    @State var sliderVal: Float = 0
    @State var stepVal = 0
    @State var gameTime = Date()
    
    var body: some View {
        Form {
            Section {
                Picker("Transit Modes", selection: $choice) {
                    ForEach(0..<transitModes.count) { index in
                        Text("\(self.transitModes[index])")
                    }
                }.pickerStyle(.segmented)
                Text("Current choice: \(self.transitModes[choice])")
            }
        }
    }
}
```

3. 再添加一个section，加入`Toggle`
```swift
Section {
    Toggle(isOn: $showText) {
        Text("Show Text")
    }
    if showText {
        Text("The Text toggle is on")
    }
}
```

4. 再添加一个section，加入`Slider`
```swift
Section {
	Slider(value: $sliderVal, in: 0...10, step: 0.001)
	Text("Slider current value\(sliderVal, specifier: "%.1f")")
}
```

5. 再添加一个section，加入`Stepper`
```swift
Section {
    Stepper("Stepper", value: $stepVal, in: 0...5)
    Text("Stepper current value\(stepVal)")
}
```

6. 再添加一个section，加入`DatePicker`
```swift
 Section {
	DatePicker("Please select a date", selection: $gameTime)
}
```

7. 再添加一个section，加入`DatePicker`,再限制下时间范围

```swift
Section {
  DatePicker("select a date", selection: $gameTime, in: Date()...)
}
```

最终如下

![image-20211223113151810](https://tva1.sinaimg.cn/large/008i3skNgy1gxnlz3hh9zj30i80xuaba.jpg)

## How it works…

`Picker`是用来从一组值中选择某一个的，设置style为Segmented就得到了一个UIKit的SegmentView。

`Toggle`控制开和关，当前状态存储在binding的vlaue中。

`Slider`需要3个参数: 

- **value**: 当前值
- **in**： slider的范围
- **step**： 步进的值

`Stepper`也同Slider一样需要那3个参数。

最后演示了一下DatePicker的使用，注意binding的类型是date。

> picker的style会根据他的容器不同而不同。比如在Form或者List中的picker会和在VStack中的不一样。
>
> 我们可以通过`.pickerStyle`来修改默认style。



