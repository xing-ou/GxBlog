---
title: Layout之 IntrinsicWidth
tags: [flutter]
---
![headerimg](./Header.png)

我们来看看布局相关widget: IntrinsicWidth。

<!--truncate-->

## IntrinsicWidth

layout child宽度为其本身大小。

尽可能避免使用它。在最坏的情况下，这个widget可能会导致树的深度为 O(N²) 的布局。

我们来看个例子:

```dart
Column(children: [
  Container(width: 100,height: 100,color: Colors.red,),
  Container(width: 200,height: 200,color: Colors.green,),
],crossAxisAlignment: CrossAxisAlignment.stretch,)
```

![IMG_46061E80DCF1-1](https://tva1.sinaimg.cn/large/e6c9d24egy1h2qmrvud5wj20u00u4q3n.jpg)

我们可以看到因为交叉轴设置为stretch，所以拉伸占满了屏幕。

限制我们使用IntrinsicWidth:

```dart
IntrinsicWidth(
    child: Column(
      children: [
        Container(
          width: 100,
          height: 100,
          color: Colors.red,
        ),
        Container(
          width: 200,
          height: 200,
          color: Colors.green,
        ),
      ],
      crossAxisAlignment: CrossAxisAlignment.stretch,
    ),
  )
```

![IMG_DDCE3463EEF0-1](https://tva1.sinaimg.cn/large/e6c9d24egy1h2qmu0kv6lj20u00uv0th.jpg)

我们看到现在宽度是最宽的Container，200。

## IntrinsicHeight

[IntrinsicHeight](https://api.flutter.dev/flutter/widgets/IntrinsicHeight-class.html)也类似，就不多说了。
