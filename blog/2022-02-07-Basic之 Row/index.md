---
title: Basic之 Row
tags: [flutter]
---
![headerimg](./Header.png)

我们来看看基础布局Widget：Row。

<!--truncate-->

## Row

水平布局一个Widget数组。

如果你想让某个Widget拉伸占满水平可用空间，那么用[Expanded](https://api.flutter.dev/flutter/widgets/Expanded-class.html) widget包裹widget。

并不能滚动。而且child超出了水平可用空间，会被认为是一个error。

如果你要超出了能滚动，那么用 [ListView](https://api.flutter.dev/flutter/widgets/ListView-class.html)。

竖直方向的参见 [Column](https://api.flutter.dev/flutter/widgets/Column-class.html)  。

如果只有一个child，那么考虑用[Align](https://api.flutter.dev/flutter/widgets/Align-class.html) 或者 [Center](https://api.flutter.dev/flutter/widgets/Center-class.html) 。

### Layout algorithm

布局 [Row](https://api.flutter.dev/flutter/widgets/Row-class.html) 有以下6步：

1. 布局非flex的child，确定其大小。如果[crossAxisAlignment](https://api.flutter.dev/flutter/widgets/Flex/crossAxisAlignment.html) 是 [CrossAxisAlignment.stretch](https://api.flutter.dev/flutter/rendering/CrossAxisAlignment.html), 那么vertical constraints 将是tight，值为传入约束的max Height。
2. 计算出剩余space，根据flex的child占的份数，计算出一份flex的大小。
3. 用计算出的份数，布局flex的child，确定flex child的大小(vertical constraints同步骤1)。
4. Row的高度是最高child的高度
5. Row的宽度是由mainAxisSize决定的，如果mainAxisSize是`MainAxisSize.max`，那么宽度是传入约束的`max Width`，如果mainAxisSize是`MainAxisSize.min`，则[Row](https://api.flutter.dev/flutter/widgets/Row-class.html)的宽度是child宽度的总和（受传入约束的影响）。
6. 根据[mainAxisAlignment](https://api.flutter.dev/flutter/widgets/Flex/mainAxisAlignment.html) 和 [crossAxisAlignment](https://api.flutter.dev/flutter/widgets/Flex/crossAxisAlignment.html)确定每个child的位置。

### 属性

```dart
Row(
{Key? key,
MainAxisAlignment mainAxisAlignment = MainAxisAlignment.start,
MainAxisSize mainAxisSize = MainAxisSize.max,
CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.center,
TextDirection? textDirection,
VerticalDirection verticalDirection = VerticalDirection.down,
TextBaseline? textBaseline,
List<Widget> children = const <Widget>[]}
)
```

- `mainAxisAlignment`: 主轴对其方式，基本和flex类似，就不详细介绍了

  - start
  - end
  - center
  - spaceAround
  - spaceEvenly
  - spaceBetween

- mainAxisSize: 主轴大小

  - max： 满足约束条件下的最大可用空间
  - min: 满足约束条件的最小可用空间

  ![IMG_0804](https://tva1.sinaimg.cn/large/e6c9d24egy1h2jlnlj9b5j205k04m744.jpg)

  ![IMG_0805](https://tva1.sinaimg.cn/large/e6c9d24egy1h2jlnzqwqhj205k04ia9w.jpg)

- crossAxisAlignment： 交叉轴的对其方式，也和flex类似

  - start
  - end
  - center
  - baseline
  - stretch

- textDirection: 影响布局child的方向

- verticalDirection: 类似textDirection，只是是垂直方向。

- baseline：如果是基线对其，那么设置的基线

