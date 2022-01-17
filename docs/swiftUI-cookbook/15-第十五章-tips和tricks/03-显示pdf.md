---
title: 3、显示pdf
tags: [swiftUI]
---

我们使用**PDFKit**的PdfView显示pdf。不过SwiftUI要用得将其包裹为View。

## Getting ready

首先，新建一个项目：**PDFReader**

## How to do it…

1. 定义我们包裹的View
```swift
struct PDFKitView: UIViewRepresentable {
    let url: URL
    func makeUIView(context:UIViewRepresentableContext <PDFKitView>) -> PDFView {
        let pdfView = PDFView()
        pdfView.document = PDFDocument(url: self.url)
        return pdfView
    }

    func updateUIView(_ uiView: PDFView, context: UIViewRepresentableContext<PDFKitView>) {

    }
}
```

2. 显示
```swift
struct ContentView: View {
    let documentURL = Bundle.main.url(forResource: "PDFBook", withExtension: "pdf")!
    var body: some View {
        VStack(alignment: .leading) {
            Text("The Waking Lights")
                .font(.largeTitle)
            Text("By Urna Semper")
                .font(.title)
            PDFKitView(url: documentURL)
        }
    }
}
```

## How it works…

很简单，就是一个wrap。
