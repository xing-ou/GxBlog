---
title: 1、SwiftUI的截屏测试
tags: [swiftUI]
---

snapshot test 包含2个步骤：

- 在某个state下，截下屏幕图片
- 截下的图片和通用state正常图片对比是否一致

## Getting ready

首先，新建一个项目：**SnapshotTestingSwiftUI**

导入SnapshotTesting， `pod 'SnapshotTesting', '~> 1.9.0'`

## How to do it…

我们将用三张卡实现一个简单的视图，模拟三张不同的信用卡。

然后，我们将运行snapshot test得到一张标准的图片，这是一个我们预计正确的图像，以防止我们意外更改该视图。

最后，我们将更改卡片的顺序，看看运行测试时会发生什么。以下是步骤：

1. 首先准备数据和view
```swift
struct ContentView: View {
    let cards: [(title: String, color: Color)] = [
        ("Visa Card", .yellow),
        ("Mastercard Credit Card", .red),
        ("Apple Credit Card", .black),
    ]
    var body: some View {
        VStack(spacing: 16) {
            ForEach(0..<cards.count) { index in
                Text(cards[index].title)
                    .font(.system(.title))
                    .frame(maxWidth: .infinity, maxHeight: .infinity)
                    .foregroundColor(.white)
                    .background(cards[index].color)
                    .cornerRadius(16)
            }
        }.padding(.horizontal, 16)
    }
}
```

此时，我们的app长这样

![image-20220117155400912](https://tva1.sinaimg.cn/large/008i3skNgy1gygq1iuh6fj30c20ow0td.jpg)

2. 写好测试，运行一次，此时因为没有标准图片，会失败，此时会生成一张图片当做标准图片，我们再次运行，有了标准图片作比较，测试通过
```swift
extension Snapshotting where Value:View, Format == UIImage {
    public static func image(on config: ViewImageConfig) -> Snapshotting {
        Snapshotting<UIViewController,UIImage>.image(on:config)
            .pullback(UIHostingController.init(rootView:))
    }
}

class TheStacksTests: XCTestCase {

    override class func setUp() {
            diffTool = "ksdiff"
    }

    func testContentView() throws {
        assertSnapshot(matching: ContentView(), as: .image(on: .iPhoneXsMax))
    }
}
```

3. 我们修改一下state的顺序, 再运行下测试, 将失败，并在控制台打印出两个图片位置
```swift
 let cards: [(title: String, color: Color)] = [
    ("Mastercard Credit Card", .red),
   ("Visa Card", .yellow),
    ("Apple Credit Card", .black),
]
```

4. 你还可以通过**Kaleidoscope** ，运行命令直接查看两张图片的对比.

## How it works…

Swift Snapshot Testing 有一种机制叫做  **pullback**, 代表我们想要测试的component上要执行的test operation 。比如一个 SwiftUI **View**, 被转换成library已经支持的test operation( **UIViewController** 和 **UIImage**)

我们的demo中,  component 已经支持的是 **UIViewController**, 所以 **pullback** 会桥接我们的 **View** t到**UIViewController**, 把他嵌入一个 **UIHostingController**.

我们来看看整个流程：

首先，你得决定您将使用哪种设备进行测试。这是因为截图密度取决于设备屏幕的密度，例如，使用 iPhone 13 Pro Max 截取的截图无法与使用 SE 2 截取的截图进行比较。

然后，您还必须运行一次测试以创建参考图片。

之后，您必须检查快照是否符合您的预期。

你还可以通过工具比较图像，发现差异，比如： Kaleidoscope 。

最后是**diffTool**全局变量，如果你设置了，那么测试失败的消息中会以这个字符串开头。

如果设置了**diffTool**全局变量，内容会在测试失败的消息中呈现出来

![image-20220117161631726](https://tva1.sinaimg.cn/large/008i3skNgy1gygqoya13qj30w80gkq5i.jpg)

