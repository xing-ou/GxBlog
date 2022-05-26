---
title: Basic之 Placeholder
tags: [flutter]
---
![headerimg](./Header.png)

我们来看看开发阶段的占位widget：Placeholder。

<!--truncate-->

## Placeholder

占位组件，代表这个组件还未开发完成，用这个占位。通常用于开发阶段。

默认placeholder会拉伸填满他的container。如果placeholder处于unbounded的空间，那么他的size根据情况是我们设置的[fallbackWidth](https://api.flutter.dev/flutter/widgets/Placeholder/fallbackWidth.html) 和 [fallbackHeight](https://api.flutter.dev/flutter/widgets/Placeholder/fallbackHeight.html).

```dart
const Placeholder(
{Key? key,
Color color = const Color(0xFF455A64),//网格线的颜色
double strokeWidth = 2.0,//网格线的宽度
double fallbackWidth = 400.0,//width是unbounded时，宽度为这个
double fallbackHeight = 400.0,//height为unbounded时，高度为这个
Widget? child}
)
```

```dart
ListView(children: [
  Placeholder(color: Colors.green,strokeWidth: 4,fallbackWidth: 50, fallbackHeight: 50,),
]
```

![image-20220526131235477](https://tva1.sinaimg.cn/large/e6c9d24egy1h2lqbd2tocj20iw0d40t5.jpg)

