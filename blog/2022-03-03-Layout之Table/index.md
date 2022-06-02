---
title: Layout之 Table
tags: [flutter]
---
![headerimg](./Header.png)

我们来看看布局相关widget: Table

# Table

显示表格。

```dart
Table(
{Key? key,
List<TableRow> children = const <TableRow>[],//表格的行
Map<int, TableColumnWidth>? columnWidths,
TableColumnWidth defaultColumnWidth = const FlexColumnWidth(),
TextDirection? textDirection,
TableBorder? border,
TableCellVerticalAlignment defaultVerticalAlignment = TableCellVerticalAlignment.top,
TextBaseline? textBaseline}
)
```

- `children`:表格的行

- `columnWidths`:如果有index处的width，那么使用，没有的话使用默认值defaultColumnWidth.

- `defaultColumnWidth`: 列的宽度策略

  - `FixedColumnWidth`:固定宽度，这是开销最小的

  - `FlexColumnWidth`: 固定宽度分配完了，会将剩余宽度分配给flex，如果有多个，那么根据flex均分

  - `MinColumnWidth`: 两种策略中的最小值

    ```dart
    MinColumnWidth(const FixedColumnWidth(100.0), FractionColumnWidth(0.1))
    ```

  - `MaxColumnWidth`:两种策略中的最大值

    ```dart
    MaxColumnWidth(const FixedColumnWidth(100.0), FractionColumnWidth(0.1))
    ```

  - `FractionColumnWidth`: table约束的 maxWidth的百分比

  - `IntrinsicColumnWidth`: 根据所有cell的实际大小决定宽度，开销大

- `border`: TableBorder，不只是四周的边框，还包括表格中间的分割线

- `defaultVerticalAlignment`: 默认的垂直方向对其方式

- `textBaseline`:  对其使用的baseline



## TableRow

每一行的的child数必须一致。

如果你想单独控制某个child的对其方式，使用 [TableCell](https://api.flutter.dev/flutter/widgets/TableCell-class.html)。

```dart
const TableRow(
{LocalKey? key,
Decoration? decoration,
List<Widget>? children}
)
```

## TableCell

控制table child的对其方式

```dart
const TableCell(
{Key? key,
TableCellVerticalAlignment? verticalAlignment,
required Widget child}
)
```



```dart
Table(
children: [
  TableRow(children: [
    Text("row0"),
    Text("row1"),
    Text("row2"),
  ]),
  TableRow(children: [
    Text("row4row4row4row4row4row4"),
    TableCell(child: Center(child: Text("row5"),),verticalAlignment: TableCellVerticalAlignment.middle,),
    Text("row6"),
  ]),
],
border: TableBorder.all(color: Colors.red),
)
```

![IMG_DDC2CEEF205D-1](https://tva1.sinaimg.cn/large/e6c9d24egy1h2u15tqx4ej20zo0hajsq.jpg)

