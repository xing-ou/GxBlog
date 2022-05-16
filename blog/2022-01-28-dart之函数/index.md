---
title: dart之 Function
tags: [dart]
---
![headerimg](./Header.png)

我们再来看看dart的函数。

<!--truncate-->
## 函数

dart的函数风格类似c和java。

![image-20220516172132503](https://tva1.sinaimg.cn/large/e6c9d24egy1h2adbbnrs5j20ue0bm3zc.jpg)



### 参数

必须的位置参数  和（命名参数 | optional 位置参数）二选一。

必须的位置参数: name和age

```dart
void person(String name, int age) {
  
}
```

命名参数。传参时需要指定名字。可以是required或者optional。

```dart
void person(String name, {required int age}) {}//可用required表示必传
void person1(String name, {int? age}) {}//可选命名参数

void main() {
  person("123", age: 123);
  person1("123");
  person1("123", age: 123);
}
```

optional 位置参数

```dart
void person(String name, [int? age]) {}
```

可对命名参数和位置参数设置默认值

```dart
void person(String name, [int? age = 1]) {}
void person1(String name, {int? age = 2}){}
void person(String name, [int age = 1]) {}
void person1(String name, {int age = 2}) {}
```

### main函数

main函数是程序入口

```dart
void main() {
  print('Hello, World!');
}
///带参数
void main(List<String> arguments) {
  print(arguments);
}
```

### 函数作为一等公民

函数作为一等公民，所以你可以将函数作为参数传递。

```dart
void printElement(int element) {
  print(element);
}
var list = [1, 2, 3];
list.forEach(printElement);

///返回一个函数
Function applyMultiplier(num multiplier) {
  return (num value) {
    return value * multiplier;
  };
}
//函数作为参数
 void namedFunction(Function anonymousFunction) {
  // function body
}
```

也可把函数赋值给变量

```dart
var loudify = (msg) => '!!! ${msg.toUpperCase()} !!!';
assert(loudify('hello') == '!!! HELLO !!!');
```

### 匿名函数

其他语言也叫 *lambda* 或者 *closure*。

![image-20220516172414695](https://tva1.sinaimg.cn/large/e6c9d24egy1h2ade344ghj20si0680t3.jpg)



格式

```dart
(参数) {
  函数体
}
```

如果函数体只有一个表达式。可以使用箭头简写

```dart
(参数) => print("hello world")
```

### 词法作用域

```dart
bool topLevel = true;

void main() {
  var insideMain = true;

  void myFunction() {
    var insideFunction = true;

    void nestedFunction() {
      var insideNestedFunction = true;

      assert(topLevel);
      assert(insideMain);
      assert(insideFunction);
      assert(insideNestedFunction);
    }
  }
}
```

```dart
Function makeAdder(int addBy) {
  //能够访问scope中的addBy
  return (int i) => addBy + i;
}

void main() {
  // Create a function that adds 2.
  var add2 = makeAdder(2);
  // Create a function that adds 4.
  var add4 = makeAdder(4);
  assert(add2(3) == 5);
  assert(add4(3) == 7);
}
```

### 返回值

如果没有指定return什么，那么默认return null。

```dart
foo() {}
assert(foo() == null);
```
