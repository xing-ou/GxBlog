---
title: Layout之 Stack
tags: [flutter]
---
![headerimg](./Header.png)

我们来看看布局相关widget: Stack

# Stack

[Stack](https://api.flutter.dev/flutter/widgets/Stack-class.html) widget的child分为*positioned* 和 *non-positioned*。Positioned 是指那么被包裹在[Positioned](https://api.flutter.dev/flutter/widgets/Positioned-class.html) widget中的child。Stack会调整自己大小，包裹所有的non-positioned children。non-positioned children的位置是根据alignment参数确定的。然后positioned children再根据自己的 top, right, bottom,left放置到Stack中。

Stack按照List中的顺序绘制children，所以第一个绘制在底部。如果你想更改绘制的顺序，那么更改他们在List中的顺序就行了，不过这个时候最好提供Key，这样他们就只是移动而不用重新绘制。

```dart
Stack(
{Key? key,
 //non-positioned children的对其方式
AlignmentGeometry alignment = AlignmentDirectional.topStart,
TextDirection? textDirection,
 //如何确定non-positioned的Size
StackFit fit = StackFit.loose,
Clip clipBehavior = Clip.hardEdge,
List<Widget> children = const <Widget>[]}
)
```

- `fit`: 如何确定non-positioned的Size
  - `expand`: Stack传递给child的约束会被设置成允许的最大size，比如Stack的约束是10<width<100, 0<height<600，那么non-positioned children的size就是(100,600)。
  - `loose`:Stack传递给child的约束是宽松的。比如stack的约束是固定宽高(350, 600)。那么non-positioned children的size就是(0<width<350, 0<height<600)。
  - `passthrough`: stack透传约束。

```dart
Container(
  width: 300,
  height: 300,
  color: Colors.red,
  child: Stack(
    alignment: Alignment.bottomCenter,
    children: [
      Container(color: Colors.green,child: Text("hhelloelhellohellolo"),),
      Container(width: 100,height: 100,color: Colors.blue,),
      Positioned(child: Text("helloworld"),top: 50,left: 50,)
    ],
  ),
)
```

![IMG_7566D5F2D22D-1](https://tva1.sinaimg.cn/large/e6c9d24egy1h2tzpljmahj20zo0sgdgn.jpg)

# IndexedStack

类似Stack，但是只显示index处的child。

```dart
IndexedStack(
{Key? key,
AlignmentGeometry alignment = AlignmentDirectional.topStart,
TextDirection? textDirection,
StackFit sizing = StackFit.loose,
int? index = 0,
List<Widget> children = const <Widget>[]}
)
```

```dart
Container(
      width: 300,
      height: 300,
      color: Colors.red,
      child: IndexedStack(
        index: 1,
        alignment: Alignment.bottomCenter,
        children: [
          Container(color: Colors.green,child: Text("hhelloelhellohellolo"),),
          Container(width: 100,height: 100,color: Colors.blue,),
          Positioned(child: Text("helloworld"),top: 50,left: 50,)
        ],
      ),
    )
```

![IMG_088B006D2DB4-1](https://tva1.sinaimg.cn/large/e6c9d24egy1h2tzstpio5j20zo0qy0td.jpg)
