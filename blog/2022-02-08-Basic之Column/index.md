---
title: Basic之 Column
tags: [flutter]
---
![headerimg](./Header.png)

我们来看看基础布局Widget：Column。

<!--truncate-->

## Column

垂直显示一个widget数组。

如果你希望某个widget拉伸占满剩余空间，那么请用[Expanded](https://api.flutter.dev/flutter/widgets/Expanded-class.html) widget包裹它。

 [Column](https://api.flutter.dev/flutter/widgets/Column-class.html) widget 不会滚动，如果你希望滚动，请使用  [ListView](https://api.flutter.dev/flutter/widgets/ListView-class.html) 。

如果只有1个child，那么建议使用[Align](https://api.flutter.dev/flutter/widgets/Align-class.html) 或者 [Center](https://api.flutter.dev/flutter/widgets/Center-class.html) 。

### Layout algorithm

布局 [Column](https://api.flutter.dev/flutter/widgets/Column-class.html) 有以下6步：

1. 布局非flex的child，确定其大小。如果[crossAxisAlignment](https://api.flutter.dev/flutter/widgets/Flex/crossAxisAlignment.html) 是 [CrossAxisAlignment.stretch](https://api.flutter.dev/flutter/rendering/CrossAxisAlignment.html), 那么horizontal constraints 将是tight，值为传入约束的max width。
2. 计算出剩余space，根据flex的child占的份数，计算出一份flex的大小。
3. 用计算出的份数，布局flex的child，确定flex child的大小(horizontal constraints同步骤1)。
4. Column的宽度，是满足传入约束的条件下最宽child的宽度
5. Column的高度取决于mainAxisSize，如果mainAxisSize是max，那么高度是传入约束的max height，如果是min，那么高度为满足约束的情况下，所有child的高度和
6. 根据[mainAxisAlignment](https://api.flutter.dev/flutter/widgets/Flex/mainAxisAlignment.html) 和 [crossAxisAlignment](https://api.flutter.dev/flutter/widgets/Flex/crossAxisAlignment.html)确定每个child的位置。

### 属性

基本同Row一样, 很简单

```dart
Column(
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

- crossAxisAlignment： 交叉轴的对其方式，也和flex类似

  - start
  - end
  - center
  - baseline
  - stretch

- textDirection: 影响布局child的方向

- verticalDirection: 类似textDirection，只是是垂直方向。

- textBaseline：如果是基线对其，那么设置的基线

