---
title: Layout之 FractionallySizedBox
tags: [flutter]
---
![headerimg](./Header.png)

我们来看看布局相关widget: FractionallySizedBox。

<!--truncate-->

## FractionallySizedBox

设置child的size为可用空间的百分比。比较简单

```dart
const FractionallySizedBox(
{Key? key,
AlignmentGeometry alignment = Alignment.center,//对其方式
double? widthFactor,//宽度百分比
double? heightFactor,//高度百分比
Widget? child}
)
```

```dart
Container(
  color: Colors.red,
  width: 300,
  height: 300,
  child: FractionallySizedBox(
    child: FractionallySizedBox(
      child: Container(color: Colors.green),
      widthFactor: 0.5,
      heightFactor: 0.5,
      alignment: Alignment.center,
    ),
  ),
)
```

![IMG_B23207F66D95-1](https://tva1.sinaimg.cn/large/e6c9d24egy1h2rdcqxmhrj20uq0u0aav.jpg)
