---
title: dart之 Class
tags: [dart]
---
![headerimg](./Header.png)

我们再来看看dart的Class。

<!--truncate-->
## Classes

### 构造器

我们通过构造器创建对象。构造器名称可以是ClassName或者类ClassName.xxx。比如:创建Point对象，我们可以用 `Point()` 或者 `Point.fromJson()` 。

```dart
var p1 = Point(2, 2);
var p2 = Point.fromJson({'x': 1, 'y': 2});
```

#### 构造器便捷初始化

```dart
class Point {
  double x = 0;
  double y = 0;

  Point(double x, double y) {
    this.x = x;
    this.y = y;
  }
}
等价于
class Point {
  double x = 0;
  double y = 0;

  Point(this.x, this.y);
}
```

#### 默认构造器

如果你没有声明构造器，那么会提供一个默认构造器，他是无参的，会调用父类的无参构造器。

#### 构造器不继承

子类不会继承父类的构造器。

#### 命名构造器

```dart
class Point {
  final double x;
  final double y;
  // Named constructor
  Point.origin(double xOrigin, double yOrigin) {
    this.x = xOrigin;
    this.y = yOrigin;
  }
}
```

#### Initializer list

Initializer list可以在constructor body运行前初始化实例变量。

```dart
Point.fromJson(Map<String, double> json)
    : x = json['x']!,
      y = json['y']! {
  print('In Point.fromJson(): ($x, $y)');
}
我们可以用这种函数来校验参数
Point.withAssert(this.x, this.y) : assert(x >= 0) {
  print('In Point.withAssert(): ($x, $y)');
}  
```

#### 调用父类的非默认构造器

默认情况下，子类的构造器会调用父类的无参默认构造器。父类构造器会在子类构造器body的开始处调用。如果子类构造器使用了`initializer list`，那么`initializer list`会在父类构造器之前调用。执行顺序如下:

1. initializer list
2. 父类的无参构造器
3. 子类构造器

如果父类没有无参构造器，你必须手动指定调用的父类构造器，指定方式如下：

```dart
class Person {
  String? firstName;

  Person.fromJson(Map data) {
    print('in Person');
  }
}

class Employee extends Person {
  // Person没有默认构造器
  // 所以我们需要手动指定子类调用的父类的构造器 super.fromJson(data).
  Employee.fromJson(Map data) : super.fromJson(data) {
    print('in Employee');
  }
}
```

 ```dart
class Vector2d {
  final double x;
  final double y;

  Vector2d(this.x, this.y);
}

class Vector3d extends Vector2d {
  final double z;

  // 调用父类构造器的便捷初始化方法，等价于
  // Vector3d(final double x, final double y, this.z) : super(x, y);
  Vector3d(super.x, super.y, this.z);
}
 ```

#### redirecting constructor

有时，有的构造器的目的只是调用同一个class中的另一个构造器。

`redirecting constructor`的函数体是空的。用冒号指定代理的构造器。

```dart
class Point {
  double x, y;

  // The main constructor for this class.
  Point(this.x, this.y);

  // Delegates to the main constructor.
  Point.alongXAxis(double x) : this(x, 0);
}
```

#### Constant constructors

如果你生成的对象永远不会改变，那么你可以让那些对象成为编译时常量(const)。所以你定义一个`const` constructor，然后让所有的实例变量都是final。

```dart
class ImmutablePoint {
  static const ImmutablePoint origin = ImmutablePoint(0, 0);

  final double x, y;

  const ImmutablePoint(this.x, this.y);
}
```

#### Factory constructors

用 `factory` 关键字修饰的构造器代表：这个构造器并不总是返回这个Class的新对象，比如：可能返回的是cache中的对象，或者返回的是这个class的子类。

### methods

#### Instance methods

实例方法可以访问实例变量和this

```dart
import 'dart:math';

class Point {
  final double x;
  final double y;

  Point(this.x, this.y);

  double distanceTo(Point other) {
    var dx = x - other.x;
    var dy = y - other.y;
    return sqrt(dx * dx + dy * dy);
  }
}
```

#### 运算符方法

下面是dart允许定义的运算符方法

| `<`  | `+`  | `|`  | `>>>` |
| ---- | ---- | ---- | ----- |
| `>`  | `/`  | `^`  | `[]`  |
| `<=` | `~/` | `&`  | `[]=` |
| `>=` | `*`  | `<<` | `~`   |
| `–`  | `%`  | `>>` | `==`  |

```dart
class Vector {
  final int x, y;

  Vector(this.x, this.y);

  Vector operator +(Vector v) => Vector(x + v.x, y + v.y);
  Vector operator -(Vector v) => Vector(x - v.x, y - v.y);
}

void main() {
  final v = Vector(2, 3);
  final w = Vector(2, 2);

  assert(v + w == Vector(4, 5));
  assert(v - w == Vector(0, 1));
}
```

#### Getters 和 setters

下面是getter和setter的定义

```dart
class Rectangle {
  double left, top, width, height;

  Rectangle(this.left, this.top, this.width, this.height);

  // Define two calculated properties: right and bottom.
  double get right => left + width;
  set right(double value) => left = value - width;
  double get bottom => top + height;
  set bottom(double value) => top = value - height;
}

void main() {
  var rect = Rectangle(3, 4, 20, 15);
  assert(rect.left == 3);
  rect.right = 12;
  assert(rect.left == -8);
}
```

#### Abstract methods

抽象方法只能出现在抽象类中。

```dart
abstract class Doer {
  void doSomething(); // Define an abstract method.
}

class EffectiveDoer extends Doer {
  void doSomething() {

  }
}
```

### Abstract classes

用`abstract`关键字定义抽象类，通常抽象类用于定义接口。

```dart
abstract class AbstractContainer {
  void updateChildren(); // Abstract method.
}
```

### 隐式的 interfaces

每个class都隐式的定义了一个interface，包含所有的instance members 和他实现的所有Interface。

如果你创建了class A，想要B的功能，但是又不想继承，那么可以实现接口B。

```dart
// A person. The implicit interface contains greet().
class Person {
  // In the interface, but visible only in this library.
  final String _name;

  // Not in the interface, since this is a constructor.
  Person(this._name);

  // In the interface.
  String greet(String who) => 'Hello, $who. I am $_name.';
}

// An implementation of the Person interface.
class Impostor implements Person {
  String get _name => '';

  String greet(String who) => 'Hi $who. Do you know who I am?';
}

String greetBob(Person person) => person.greet('Bob');

void main() {
  print(greetBob(Person('Kathy')));
  print(greetBob(Impostor()));
}
```

###  继承

使用extends关键字来继承某个class

```dart
class Television {
  void turnOn() {
    _illuminateDisplay();
    _activateIrSensor();
  }
  // ···
}

class SmartTelevision extends Television {
  void turnOn() {
    super.turnOn();
    _bootNetworkInterface();
    _initializeMemory();
    _upgradeApps();
  }
  // ···
}
```

#### 重载

使用` @override`重载方法

```dart
class Television {
  // ···
  set contrast(int value) {...}
}

class SmartTelevision extends Television {
  @override
  set contrast(num value) {...}
  // ···
}
```

#### noSuchMethod()

重载noSuchMethod方法来检测是否调用了没有的方法。

```dart
class A {
  // Unless you override noSuchMethod, using a
  // non-existent member results in a NoSuchMethodError.
  @override
  void noSuchMethod(Invocation invocation) {
    print('You tried to use a non-existent member: '
        '${invocation.memberName}');
  }
}
```

###  Extension methods

类似swift的extension，可以在不知道源码的情况下为对象添加方法

```dart
extension NumberParsing on String {
  int parseInt() {
    return int.parse(this);
  }

  double parseDouble() {
    return double.parse(this);
  }
}

```

### 枚举类型

#### 声明简单枚举

```dart
enum Color { red, green, blue }
```

#### 声明增强枚举

dart允许枚举像class一样定义实例变量、方法和常量构造器。但是有些限制：

- 实例变量必须都是 `final`
- 定义的构造器都必须是 constant constructor。
- Factory constructors只能返回固定的已知的枚举实例。
- 不能继承
- 不能重载  `index`, `hashCode`, `==`.
- 不能定义 `values` , 因为会和自动生成的static `values` getter冲突
- 枚举必须定义在开始位置。

```dart
enum Vehicle implements Comparable<Vehicle> {
  car(tires: 4, passengers: 5, carbonPerKilometer: 400),
  bus(tires: 6, passengers: 50, carbonPerKilometer: 800),
  bicycle(tires: 2, passengers: 1, carbonPerKilometer: 0);

  const Vehicle({
    required this.tires,
    required this.passengers,
    required this.carbonPerKilometer,
  });

  final int tires;
  final int passengers;
  final int carbonPerKilometer;

  int get carbonFootprint => (carbonPerKilometer / passengers).round();

  @override
  int compareTo(Vehicle other) => carbonFootprint - other.carbonFootprint;
}
```

#### 使用枚举

```dart
/// 有index
assert(Color.red.index == 0);
assert(Color.green.index == 1);
assert(Color.blue.index == 2);
//values获取所有枚举
List<Color> colors = Color.values;
assert(colors[2] == Color.blue);
//获取枚举名称
print(Color.blue.name); // 'blue'
```

### mixin

#### 定义

```dart
mixin Musical {
  bool canPlayPiano = false;
  bool canCompose = false;
  bool canConduct = false;

  void entertainMe() {
    if (canPlayPiano) {
      print('Playing piano');
    } else if (canConduct) {
      print('Waving hands');
    } else {
      print('Humming to self');
    }
  }
}
```

#### 使用

`with`关键字

```dart
class Musician extends Performer with Musical {
  // ···
}

```

#### 现在mixin使用类型

```dart
class Musician {
  // ...
}
mixin MusicalPerformer on Musician {
  // ...
}
class SingerDancer extends Musician with MusicalPerformer {
  // ...
}
```

### 类变量和类方法

```dart
class Queue {
  static const initialCapacity = 16;
  // ···
}

void main() {
  assert(Queue.initialCapacity == 16);
}
```

```dart
import 'dart:math';

class Point {
  double x, y;
  Point(this.x, this.y);

  static double distanceBetween(Point a, Point b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return sqrt(dx * dx + dy * dy);
  }
}

void main() {
  var a = Point(2, 2);
  var b = Point(4, 4);
  var distance = Point.distanceBetween(a, b);
  assert(2.8 < distance && distance < 2.9);
  print(distance);
}
```

