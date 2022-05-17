---
title: dart之 泛型
tags: [dart]
---
![headerimg](./Header.png)

我们再来看看dart的泛型。

<!--truncate-->

## 泛型

同其他语言一样，dart也支持泛型，来帮助我们处理重复代码

```dart
abstract class ObjectCache {
  Object getByKey(String key);
  void setByKey(String key, Object value);
}
abstract class StringCache {
  String getByKey(String key);
  void setByKey(String key, String value);
}
//通过泛型定义
abstract class Cache<T> {
  T getByKey(String key);
  void setByKey(String key, T value);
}
```

### collection 字面量中使用泛型

```dart
var names = <String>['Seth', 'Kathy', 'Lars'];
var uniqueNames = <String>{'Seth', 'Kathy', 'Lars'};
var pages = <String, String>{
  'index.html': 'Homepage',
  'robots.txt': 'Hints for web robots',
  'humans.txt': 'We are people, not machines'
};
```

### 构造器中使用泛型

```dart
var nameSet = Set<String>.from(names);
var views = Map<int, View>();
```

### 限制泛型类型

```dart
class Foo<T extends Object> {
  // Any type provided to Foo for T must be non-nullable.
}
```

### 泛型方法

```dart
T first<T>(List<T> ts) {
  // Do some initial work or error checking, then...
  T tmp = ts[0];
  // Do some additional checking or processing...
  return tmp;
}
```

