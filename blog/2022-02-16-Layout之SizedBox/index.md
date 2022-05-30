---
title: Layout之 SizedBox
tags: [flutter]
---
![headerimg](./Header.png)

我们来看看布局相关widget: SizedBox。

<!--truncate-->

## SizedBox

具有指定大小的Box。

如果给定一个child，这个widget会强制child具有特定的宽度和高度。如果此widget的parent不允许，这些值将被忽略。例如，如果parent是屏幕（强制child与parent大小相同）或另一个[SizedBox](https://api.flutter.dev/flutter/widgets/SizedBox-class.html)（强制其child具有特定宽度和/或高度），则会发生这种情况。这可以通过将子[SizedBox](https://api.flutter.dev/flutter/widgets/SizedBox-class.html)包装在一个允许其大小不超过parent大小的widget来解决，例如[Center](https://api.flutter.dev/flutter/widgets/Center-class.html)或[Align](https://api.flutter.dev/flutter/widgets/Align-class.html)。

如果宽度或高度为空，则此widget将尝试调整自身大小以匹配child的大小。如果child的大小取决于其parent的大小，则必须提供高度和宽度。

```dart
ColoredBox(
  color: Colors.red,
  child: SizedBox(
    width: 300,
    height: 300,
    child: Center(
      child: ColoredBox(
        color: Colors.green,
        child: SizedBox(
          width: 100,
          child: Text("helloworld"),
        ),
      ),
    ),
  ),
)
```

![IMG_3DAE1D6026D9-1](https://tva1.sinaimg.cn/large/e6c9d24egy1h2qjz6yf3jj20ub0u0756.jpg)



