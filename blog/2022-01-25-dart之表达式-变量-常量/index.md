---
title: dart之Expressions & Variables & Constants
tags: [dart]
---
![headerimg](./Header.png)

我们之前已经设置好了环境，现在开始来看看如何创建变量。

<!--truncate-->

## 注释

dart的注释基本和其他语言一样.

```dart
// 单行注释
 /* 多行注释 */
/// 文档注释
/**
 * 文档注释
 */
```

## Statements和Expressions

### Statements

简单的语句是以分号结尾的。

```dart
print('Hello,world');
```

复杂的语句使用大括号包裹代码块。

```dart
if (someCondition) {
// code block
}
```

### Expressions

表达式通常是一个值，或者能被计算为一个值。

值可以是number、String或者其他类型。也可以是变量，比如: x。

```dart
42
3+2
'Hello, world' 
 x
```

## 操作符

- +
- -
- *
- /， 需要注意除法，比如:`22 / 7`,如果是其他语言结果是3， 但是dart是`3.142857142857143`。如果你想要整除，那么用`22 ~/ 7`。
- % : 取余
- 括号增加优先级，((8000 / (5 * 10)) - 32) ~/ (29 % 5)
- 。。。等等

## Variables

定义变量

```dart
int number = 10;//指定类型
var someNumber = 10;//自动推断类型
```

## Constants

编译时常量。且赋的值也只能是常量或者常量表达式，如果是对象，不能改变对象属性。

const还可以用来创建常量值

```dart
const baz = [1,2,3];// baz = [4,5,6] ==> failed
var foo = const [1,2,3]; // foo = [4,5,6] ==> ok, foo[1] = 999 ==> failed
```

## final

运行时常量。只能被赋值一次。

如果修饰对象的话，可以修改对象的字段(const 不能)。







