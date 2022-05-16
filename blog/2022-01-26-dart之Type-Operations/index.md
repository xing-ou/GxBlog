---
title: dart之Type & Operator
tags: [dart]
---
![headerimg](./Header.png)

我们再来看看dart的类型和操作符。

<!--truncate-->

## 内置类型

### number类型

Dart 支持两种 Number 类型：

- int
- double

###  Strings

包含的是 UTF-16 编码的字符序列。所以length是UTF-16的个数，可能和我们的可视化字符数并不一致

```dart
void main() {
  var person = "你😁";
  print("${person.length}");// 3
}
```

下面是创建字符串的方式:

```dart
void main() {
  var str1 = "hello world"; //双引号
  var str2 = 'hello world'; //单引号
  var str3 = '''hello world 
    hello world
  '''; // 创建多行文本
  var str4 = r'hello \n world'; // 原始字符串，不处理转义
  var str5 = r"hello \n world"; // 原始字符串，不处理转义
  print(str1);
  print(str2);
  print(str3);
  print(str4);
  print(str5);
}
```

字符串插值

```dart
var age = 123;
var str = "age is $age";
var str1 = "age is ${age + 1}";//dart推荐风格是变量不加{}， 表达式加{}
```

### bool类型

true和false。Dart 的类型安全不允许你使用类似 `if (nonbooleanValue)` 或者 `assert (nonbooleanValue)` 这样的代码检查布尔值。我们应该总是显示地检查布尔值，比如像下面的代码这样：

```dart
// Check for zero.
var hitPoints = 0;
assert(hitPoints <= 0);

if(3) {// error, 
  
}
```

### Lists

数组，对应其他语言中的Array。

```dart
var list1 = [1, 2, 3];//字面量
var lsit2 = List.filled(10, 34);//方法
```

字面量中还可以用spread操作符

```dart
var list = [1,2,3]
var list2 = [4,5,...list];
var lsit3 = [4, 5, 6, ...?list1];
```

字面量中还可以使用if和for

```dart
var age = 100;
var list = [1, 2, 3, if (age > 50) 99];
var list1 = [1, 2, 3, for (var i in list) i];
print(list);
print(list1);
```

###  Sets

初始化

```dart
var halogens = {'fluorine', 'chlorine', 'bromine', 'iodine', 'astatine'};
halogens.add('fluorine11');
```

同List，也支持spread操作符，if，for。

### Maps

其他语言中的Dictionary。

```dart
var gifts = {
  // Key:    Value
  'first': 'partridge',
  'second': 'turtledoves',
  'fifth': 'golden rings'
};

var nobleGases = {
  2: 'helium',
  10: 'neon',
  18: 'argon',
};
```

同List，也支持spread操作符，if，for。

###  Runes and grapheme clusters

之前说过String是UTF-16字符串。所以我们在判断字符时就不能直接操作原始字符串了。我们可以通过characters来获取unicode字符。注意导入对应的包。

```dart
import 'package:characters/characters.dart';

void main() {
  var str = "笑😁";
  print("${str.characters.length}");
}
```

###  Symbols

以#开头，是编译时常量。

## 操作符

和其他语言基本差不多

| Description              | Operator                                                     |
| ------------------------ | ------------------------------------------------------------ |
| unary postfix            | `expr++`  `expr--`  `()`  `[]`  `?[]`  `.`  `?.`  `!`        |
| unary prefix             | `-expr`  `!expr`  `~expr`  `++expr`  `--expr`   `await expr` |
| multiplicative           | `*`  `/`  `%` `~/`                                           |
| additive                 | `+`  `-`                                                     |
| shift                    | `<<`  `>>`  `>>>`                                            |
| bitwise AND              | `&`                                                          |
| bitwise XOR              | `^`                                                          |
| bitwise OR               | `|`                                                          |
| relational and type test | `>=`  `>`  `<=`  `<`  `as`  `is`  `is!`                      |
| equality                 | `==`  `!=`                                                   |
| logical AND              | `&&`                                                         |
| logical OR               | `||`                                                         |
| if null                  | `??`                                                         |
| conditional              | `expr1 ? expr2 : expr3`                                      |
| cascade                  | `..`  `?..`                                                  |
| assignment               | `=`  `*=`  `/=`  `+=`  `-=`  `&=`  `^=`  *etc.*              |

注意除法 5 / 2 = 2.5 ，不是其他语言中的整数。5 ~/ 2 = 2，这个才是结果取整数。

cascade是dart特有的操作符：

```dart
var paint = Paint()
  ..color = Colors.black
  ..strokeCap = StrokeCap.round
  ..strokeWidth = 5.0;
等价于
var paint = Paint();
paint.color = Colors.black;
paint.strokeCap = StrokeCap.round;
paint.strokeWidth = 5.0;
//如果可能为null，那么可以使用?..
var button = querySelector('#confirm') // Get an object.
  ?..text = 'Confirm' // Use its members.
  ..classes.add('important')
  ..onClick.listen((e) => window.alert('Confirmed!'));
等价于
var button = querySelector('#confirm');
button?.text = 'Confirm';
button?.classes.add('important');
button?.onClick.listen((e) => window.alert('Confirmed!'));
```
