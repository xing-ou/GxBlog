---
title: 4、completionBlock转化为async/await
tags: [swiftUI, async]
---

如果你有一些老的代码使用completion block的方式处理异步，我们可以将其改为使用async/await的方式。

## Getting ready

首先创建一个新项目：**PaletteGenerator**

我们将https://github.com/gscalzo/Lorikeet三方库，以源码的方式集成。

在Utils.swift中加入`import UIKit`，处理编译错误。

## How to do it…

1. 创建一个List，显示Color
```swift
extension Color: Identifiable {
    public var id: String {
        self.description
    }
}
@available(iOS 15.0, *)
struct ContentView: View {
    @State var colors: [Color] = []
    var body: some View {
        ScrollView {
            LazyVStack(spacing: 0) {
                ForEach(colors){  color in
                    Rectangle()
                        .foregroundColor(color)
                        .frame(height: 100)
                }
            }
        }.edgesIgnoringSafeArea(.vertical)
    }
}
```

2. 加入extension
```swift
extension Color {
    var lkt: Lorikeet {
        UIColor(self).lkt
    }
}

extension Lorikeet {
    func generateColorScheme(numberOfColors: Int, withRange range: HSVRange? = nil, using algorithm: Algorithm = .cie2000) async -> [Color] {
        await withCheckedContinuation({ continuation in
            generateColorScheme(numberOfColors: numberOfColors, withRange: range, using: algorithm) { colors in
                continuation.resume(returning: colors.map{ Color($0) })
            }
        })
    }
}
```

3. 生成colors
```swift
struct ContentView: View {
    @State var colors: [Color] = []
    var body: some View {
        ScrollView {
            LazyVStack(spacing: 0) {
                ForEach(colors){  color in
                    Rectangle()
                        .foregroundColor(color)
                        .frame(height: 100)
                }
            }
        }
        .edgesIgnoringSafeArea(.vertical)
        .task {
            colors = await Color.blue.lkt.generateColorScheme(numberOfColors: 10)
        }
    }
}
```

![image-20220117144110684](https://tva1.sinaimg.cn/large/008i3skNgy1gygnxqm3ikj30ca0ost99.jpg)

## How it works…

原始的generateColorScheme是通过completion block，调用成功回调。

我们通过**withCheckedContinuation**函数，将其转化为async/await函数。

如果我们的函数同时还有error, 比如：

```swift
func oldAPI(completion: (Result<[UIColor], Error>) -> Void)
```

此时我们可以使用**withCheckedThrowingContinuation**函数:

```swift
func newAPI() async throws -> [UIColor] {
    try await withCheckedThrowingContinuation { continuation in
        oldAPI { result in
            switch result {
            case .success(let value):
                continuation.resume(returning: value)
            case .failure(let error):
                continuation.resume(throwing: error)
            }
        }
    }
}
```

