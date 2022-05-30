---
title: Layout之 Padding
tags: [flutter]
---
![headerimg](./Header.png)

我们来看看布局相关widget: Padding。

<!--truncate-->

## Padding

当将布局约束传递给child时，Padding会根据padding缩小约束，导致child以更小的尺寸进行layout。然后 Padding 将自身调整到其child的大小，并由 padding 膨胀，从而有效地在子级周围创建空白空间。

```dart
const Padding(
{Key? key,
required EdgeInsetsGeometry padding,
Widget? child}
)
```

很简单的一个widget

```dart
const Card(
  child: Padding(
    padding: EdgeInsets.all(16.0),
    child: Text('Hello World!'),
  ),
)
```

![image-20220530152731064](https://tva1.sinaimg.cn/large/e6c9d24egy1h2qgoy5mi5j20cu08gt8l.jpg)



