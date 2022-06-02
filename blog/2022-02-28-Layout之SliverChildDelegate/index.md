---
title: Layout之 SliverChildDelegate 
tags: [flutter]
---
![headerimg](./Header.png)

上一章我们看了Sliver。知道了一些Sliver需要通过SliverChildDelegate来提供要显示的内容。

这里就详细看看SliverChildDelegate的功能，看看所有的参数到底能干什么。

# SliverChildDelegate

这是一个抽象类。用来给Sliver提供数据。他有2个子类

- [SliverChildBuilderDelegate](https://api.flutter.dev/flutter/widgets/SliverChildBuilderDelegate-class.html)
- [SliverChildListDelegate](https://api.flutter.dev/flutter/widgets/SliverChildListDelegate-class.html)

### SliverChildListDelegate

通过List提供child。

```dart
SliverChildListDelegate(
  //所有的children
List<Widget> children,
   //为true,child会包裹在AutomaticKeepAlive  widgets中
{bool addAutomaticKeepAlives = true,
 //为true,child会包裹在RepaintBoundary widgets中
bool addRepaintBoundaries = true,
 //Semantic相关
bool addSemanticIndexes = true,
SemanticIndexCallback semanticIndexCallback = _kDefaultSemanticIndexCallback,
int semanticIndexOffset = 0}
)
```

### SliverChildBuilderDelegate

通过builder函数创建children

```dart
const SliverChildBuilderDelegate(
  //
NullableIndexedWidgetBuilder builder,
  //根据Key获取index，如果未提供，当从children的顺序发生更改时，child可能不会映射到其现有的RenderObject 。这可能会导致状态丢失。
{ChildIndexGetter? findChildIndexCallback,
 //child的数量，如果为null，那么将在builder第一个返回null时结束
int? childCount,
 //为true,child会包裹在AutomaticKeepAlive  widgets中
bool addAutomaticKeepAlives = true,
  //为true,child会包裹在RepaintBoundary widgets中
bool addRepaintBoundaries = true,
 //语意相关
bool addSemanticIndexes = true,
SemanticIndexCallback semanticIndexCallback = _kDefaultSemanticIndexCallback,
int semanticIndexOffset = 0}
)
```

