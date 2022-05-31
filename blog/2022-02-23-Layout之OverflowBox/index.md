---
title: Layout之 OverflowBox
tags: [flutter]
---
![headerimg](./Header.png)

我们来看看布局相关widget: OverflowBox

<!--truncate-->

## OverflowBox

重设parent的约束，允许child超出parent。

```dart
const OverflowBox(
{Key? key,
AlignmentGeometry alignment = Alignment.center,
double? minWidth,//重设minWidth约束，如果为null，那么用parent的minWidth
double? maxWidth,//同上
double? minHeight,//同上
double? maxHeight,//同上
Widget? child}
)
```

```dart
Container(
  width: 100,
  height: 100,
  color: Colors.red,
  child: OverflowBox(
    child: Text("helloworldhelloworldhelloworldhelloworld"),
    minWidth: 100,
    maxWidth: double.infinity,
  ),
)
```

![IMG_C250C127F6B4-1](https://tva1.sinaimg.cn/large/e6c9d24egy1h2rfqqp8kjj20zo0lpjsg.jpg)

