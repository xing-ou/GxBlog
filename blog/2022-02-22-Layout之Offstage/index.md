---
title: Layout之 Offstage
tags: [flutter]
---
![headerimg](./Header.png)

我们来看看布局相关widget: Offstage

<!--truncate-->

## Offstage

你可以像正常放置child，但是不会绘制任何内容，也不会让child参与hitTest，并且不占用父元素中的任何空间。

Offstage 的children 仍然是active的，能够响应焦点和键盘。

Offstage的child的动画仍然会运行，虽然看不看，但是他们仍然会消耗电池和 CPU 时间。

如果你想隐藏widget，最后是移除，而不是让他在Offstage中保持活动状态。

```dart
const Offstage(
{Key? key,
bool offstage = true,//为true，隐藏，为false，显示
Widget? child}
)
```

```dart
  bool _offstage = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("title"),
        ),
        body: Column(children: [
          Offstage(child: FlutterLogo(size: 60,),offstage: _offstage,),
          TextButton(onPressed: () {
            setState(() {
              _offstage = !_offstage;
            });
          }, child: Text("click hidden"))
        ]));
  }
```

![IMG_D1DE642B84A3-1](https://tva1.sinaimg.cn/large/e6c9d24egy1h2rf2slyufj20zo0jqmy2.jpg)