---
title: Layout之 Transform
tags: [flutter]
---
![headerimg](./Header.png)

我们来看看布局相关widget: Transform

<!--truncate-->

## Transform

在绘制其child之前应用Transform。

与在布局之前应用旋转的[RotatedBox](https://api.flutter.dev/flutter/widgets/RotatedBox-class.html)不同，此对象仅在绘制之前应用其Transform，这意味着在计算此widget的child（以及此widget）消耗多少空间时不考虑Transform。

```dart
const Transform(
{Key? key,
required Matrix4 transform,//transform
Offset? origin,//transform的原点
AlignmentGeometry? alignment,//设置orgin的便捷方法，等价于设置origin
bool transformHitTests = true,//当执行hitTest时，是否应用transform
FilterQuality? filterQuality,//应用transform filter的质量
Widget? child}
)
```

```dart
Container(
  color: Colors.black,
  width: 200,
  height: 200,
  alignment: Alignment.center,
  child: Transform(
    // origin: Offset(10,0),
    alignment: Alignment.topLeft,
    transform: Matrix4.rotationZ(pi/4),
    child: Container(
      width: 100,
      height: 100,
      padding: const EdgeInsets.all(8.0),
      color: const Color(0xFFE8581C),
      child: const Text('Apartment for rent!'),
    ),
  ),
)
```

![IMG_600725B533C3-1](https://tva1.sinaimg.cn/large/e6c9d24egy1h2rkpkojzij20zo0qvq46.jpg)

## RotatedBox

先旋转在布局。

```dart
const RotatedBox(
{Key? key,
required int quarterTurns,//顺时针四分之一圈数
Widget? child}
)
```

```dart
Container(
  color: Colors.black,
  width: 200,
  height: 200,
  alignment: Alignment.center,
  child: RotatedBox(child: Container(
    width: 100,
    height: 100,
    padding: const EdgeInsets.all(8.0),
    color: const Color(0xFFE8581C),
    child: const Text('Apartment for rent!'),
  ),quarterTurns: 1,),
)
```



![IMG_B7B149797A8A-1](https://tva1.sinaimg.cn/large/e6c9d24egy1h2rkwhmrh9j20zo0q33zj.jpg)
