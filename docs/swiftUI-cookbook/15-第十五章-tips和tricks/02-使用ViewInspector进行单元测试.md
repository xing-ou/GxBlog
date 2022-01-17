---
title: 2、使用ViewInspector进行单元测试
tags: [swiftUI]
---

**XCTest**和**XCUITest**是成熟的框架，所以你希望 SwiftUI 有类似的东西。

不幸的是，SwiftUI 没有来自 Apple 的任何测试功能。要测试 SwiftUI 视图，您可以依赖本质上不稳定的**UI**测试，或者使用上一章讲的快照测试。

然而，开源的美妙之处在于，给定一个问题，社区会以某种方式找到解决方案。SwiftUI 单元测试和**ViewInspector**就是这种情况，这是一个用于检查和测试 SwiftUI 视图的框架。

## Getting ready

首先，新建一个项目：**TestingSwiftUI**

引入**ViewInspector**， `pod 'ViewInspector'`

## How to do it…

我们实现一个选择国家的功能，有多个按钮，每个代表一个国家，选择对应国家后，底部的文案会变成对应的国家。

1. 我们首先实现功能
```swift
struct ContentView: View {
    private let countries = [
        "USA",
        "France",
        "Germany",
        "Italy"
    ]

    @State var originCountry: Int = 0
    
    var body: some View {
        VStack(spacing: 12) {
            Text("What is your country of origin?")
            HStack(spacing: 12) {
                ForEach(0..<countries.count) { idx in
                    Button {
                        originCountry = idx
                    } label: {
                        Text(countries[idx])
                            .frame(width: 80, height: 40)
                            .background((originCountry == idx ? Color.red : Color.blue).opacity(0.6))
                            .cornerRadius(5)
                            .foregroundColor(.white)
                    }
                }
            }
            Spacer()
            Text(countries[originCountry])
                .font(.system(size: 40))
            Spacer()
        }
    }
}
```

![Figure_15.12_B17962](https://tva1.sinaimg.cn/large/008i3skNgy1gygrh2if8yj30go0gimxs.jpg)

2. 我们开始写测试, 首先应该默认显示USA
```swift
//导入ViewInspector
import ViewInspector
extension ContentView: Inspectable { }//遵循Inspectable协议

class TheStacksTests: XCTestCase {
    func testStartWithUSASelected() throws {
         let view = ContentView()
         let buttons = try view.inspect().vStack().hStack(1).forEach(0)
         XCTAssertEqual(try buttons.button(0).labelView().text().string(), "USA")
         XCTAssertEqual(try buttons.button(1).labelView().text().string(), "France")
         XCTAssertEqual(try buttons.button(2).labelView().text().string(), "Germany")
         XCTAssertEqual(try buttons.button(3).labelView().text().string(), "Italy")

         let country = try view.inspect().vStack().text(3)
         XCTAssertEqual(try country.string(), "USA")
     }

}
```

3. 当我们点击按钮时，应该显示对应的国家。这个功能依赖@State变量，不幸的是，ViewInspector当前还不支持@State变量，我们必须手动修改下ContentView的代码来克服这个限制。
```swift   
struct ContentView: View {
    //...
    var didAppear: ((Self) -> Void)?
    var body: some View {
       VStack(spacing: 12) {
        //...
        }
        .onAppear { didAppear?(self) }
    }
}
```

4. 现在我们可以编写我们的测试了
```swift
func testSelectItaly() throws {
    var view = ContentView()
    let exp = view.on(\.didAppear) { view in
        XCTAssertEqual(try view.actualView().originCountry, 0)
        try view.actualView().inspect().vStack().hStack(1).forEach(0).button(3).tap()
        XCTAssertEqual(try view.actualView().originCountry, 3)
    }
    ViewHosting.host(view: view)
    wait(for: [exp], timeout: 0.1)
}
```

## How it works…

最重要的是extension, 我们的View需要遵循**Inspectable**协议。

我们调用**inspect()**后会得到一个View层级结构，我们可以按照源码中的index去获取对应的组件。

```swift
try view.inspect().vStack().text(0)
try view.inspect().vStack().hStack(1)
try view.inspect().vStack().spacer(2)
try view.inspect().vStack().text(3)
```

如果存在交互，那就没这么简单了，我们必须增加一个闭包来捕获actual view ，之后我们才能在测试的闭包中使用actual view 。

```swift
let exp = view.on(\.didAppear) { view in
	XCTAssertEqual(try view.actualView().originCountry, 0)
	try view.actualView().inspect().vStack().hStack(1).forEach(0).button(3).tap()
  XCTAssertEqual(try view.actualView().originCountry, 3)
}
```
