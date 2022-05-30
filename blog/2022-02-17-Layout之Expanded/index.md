---
title: Layout之 Expanded
tags: [flutter]
---
![headerimg](./Header.png)

我们来看看布局相关widget: Expanded。

<!--truncate-->

## Expanded

拉伸[Row](https://api.flutter.dev/flutter/widgets/Row-class.html), [Column](https://api.flutter.dev/flutter/widgets/Column-class.html), 或者 [Flex](https://api.flutter.dev/flutter/widgets/Flex-class.html) 的child的空间，让他们填满主轴剩余空间。如果有多个Expanded，那么会根据flex均分space。

```dart
const Expanded(
{Key? key,
int flex = 1,
required Widget child}
)
```

```dart
Row(children: [
  Expanded(child: ColoredBox(color: Colors.yellow,child: Text("aaa"),),flex: 1,),
  ColoredBox(color: Colors.red,child: Text("this is a text"),),
  Expanded(child: ColoredBox(color: Colors.blue,child: Text("bbb"),),flex: 2,),
],)
```

![IMG_D8403CDD51FE-1](https://tva1.sinaimg.cn/large/e6c9d24egy1h2qkiftdtgj20zo0d4mxy.jpg)

## Flexible

Expanded是特殊的Flexible。

```dart
//我们看到Expanded是fit参数为FlexFit.tight的Flexible
class Expanded extends Flexible {
  const Expanded({
    super.key,
    super.flex,
    required super.child,
  }) : super(fit: FlexFit.tight);
}
```

FlexFit：

- loose： child最大只能是可用空间，如果小于可用空间，那么就自身那么大
- tight:  child强制填埋了可用空间

```dart
Row(children: [
  //flex=1,最大只能占可用空间的一半
  Flexible(child: Container(height: 100,color: Colors.yellow,child:  Text("hellohellohellohellohellohellohellohellohello"),),flex: 1,),
  ColoredBox(color: Colors.red,child: Text("this is a text"),),
  //最大可用空间为一半，但是太多了，只占自身大小就行
  Flexible(child: Container(height: 100,color:Colors.blue,child: Text("hello")),flex: 1,)
])
```

![IMG_74E6B58BB73F-1](https://tva1.sinaimg.cn/large/e6c9d24egy1h2qlk0hdf6j20zo0kkdhd.jpg)

## Spacer

在 [Flex](https://api.flutter.dev/flutter/widgets/Flex-class.html) container中的空白widget。默认flex为1.

```dart
Row(
  children: const <Widget>[
    Text('Begin'),
    Spacer(), // Defaults to a flex of one.
    Text('Middle'),            
    Spacer(flex: 2),
    Text('End'),
  ],
)
```

![IMG_F0BA31069B39-1](https://tva1.sinaimg.cn/large/e6c9d24egy1h2qlnx2v6kj20zo0dg74y.jpg)



