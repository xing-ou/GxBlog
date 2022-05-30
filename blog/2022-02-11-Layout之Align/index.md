---
title: Layout之 Align
tags: [flutter]
---
![headerimg](./Header.png)

我们来看看布局相关widget: Align。

<!--truncate-->

## Align

aligns child的widget。

如果它的尺寸受到限制并且[widthFactor](https://api.flutter.dev/flutter/widgets/Align/widthFactor.html)和[heightFactor](https://api.flutter.dev/flutter/widgets/Align/heightFactor.html)为空，则此widget将尽可能大 。如果一个维度不受约束并且相应的大小因子为空，则widget将是child的大小。如果尺寸因子不为空，则此widget的相应尺寸将是child和大小因子的乘积。例如，如果 widthFactor 是 2.0，那么这个widgett的宽度将始终是其child宽度的两倍。

```dart
const Align(
{Key? key,
AlignmentGeometry alignment = Alignment.center,
double? widthFactor,
double? heightFactor,
Widget? child}
)
```

alignment有一些常用值，我们都很熟悉，我们再来看看一些非常用值是怎么计算的。

```dart
Center(
  child: Container(
    height: 120.0,
    width: 120.0,
    color: Colors.blue[50],
    child: const Align(
      alignment: Alignment(0.2, 0.6),
      child: FlutterLogo(
        size: 60,
      ),
    ),
  ),
)
```

![image-20220530143315210](https://tva1.sinaimg.cn/large/e6c9d24egy1h2qf4irkdaj20cw0cmglk.jpg)

Alignment类使用以Container中心为原点的坐标系，如上图所示。将 根据这个坐标系将FlutterLogo 放置在 (36.0, 48.0) 处。这个坐标怎么来的呢：

(0.2 * FlutterLogo宽度/2 + FlutterLogo宽度宽度/2, 0.6 * FlutterLogo宽度高度/2 + FlutterLogo宽度高度/2) = (36.0, 48.0)。

再来看看 [FractionalOffset](https://api.flutter.dev/flutter/painting/FractionalOffset-class.html) 。它和Alignment不同，Alignment是使用中心为原点，而FractionalOffset使用左上角为原点。所以`FractionalOffset(1.0, 0.0)` 代表右上角，`FractionalOffset(0.0, 1.0)` 代表左下角。

```dart
Center(
  child: Container(
    height: 120.0,
    width: 120.0,
    color: Colors.blue[50],
    child: const Align(
      alignment: FractionalOffset(0.2, 0.6),
      child: FlutterLogo(
        size: 60,
      ),
    ),
  ),
)
```

FractionalOffset(0.2, 0.6)代表，FlutterLogo的(0.2, 0.6)和Align的(0.2, 0.6)对其。我们计算出2个点的位置

- FlutterLogo：  (0.2 * width of [FlutterLogo](https://api.flutter.dev/flutter/material/FlutterLogo-class.html), 0.6 * height of [FlutterLogo](https://api.flutter.dev/flutter/material/FlutterLogo-class.html)) = (12.0, 36.0) 
- Align：(0.2 * width of [Align](https://api.flutter.dev/flutter/widgets/Align-class.html), 0.6 * height of [Align](https://api.flutter.dev/flutter/widgets/Align-class.html)) = (24.0, 72.0) in the coordinate system of the [Align](https://api.flutter.dev/flutter/widgets/Align-class.html) widget.

他们对其后FlutterLogo的位置是(24.0, 72.0) - (12.0, 36.0) = (12.0, 36.0)。

