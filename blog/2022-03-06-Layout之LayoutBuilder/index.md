---
title: Layout之 LayoutBuilder
tags: [flutter]
---
![headerimg](./Header.png)

我们来看看布局相关widget: LayoutBuilder

# LayoutBuilder

能够根据parent的约束，返回不同的widget。

比如，我再宽一点的屏幕，多显示一点，窄的少显示一点。

```dart
LayoutBuilder(
  builder: (BuildContext context, BoxConstraints constraints) {
    if (constraints.maxWidth > 600) {
      return _buildWideContainers();
    } else {
      return _buildNormalContainer();
    }
  },
)
  
    Widget _buildNormalContainer() {
    return Center(
      child: Container(
        height: 100.0,
        width: 100.0,
        color: Colors.red,
      ),
    );
  }

  Widget _buildWideContainers() {
    return Center(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          Container(
            height: 100.0,
            width: 100.0,
            color: Colors.red,
          ),
          Container(
            height: 100.0,
            width: 100.0,
            color: Colors.yellow,
          ),
        ],
      ),
    );
  }
  
  	
```

![image-20220602184933878](https://tva1.sinaimg.cn/large/e6c9d24egy1h2u3e3btwij20g60i0t8z.jpg)

​	![image-20220602184955606](https://tva1.sinaimg.cn/large/e6c9d24egy1h2u3egxkk2j20zk0ga3yy.jpg)

