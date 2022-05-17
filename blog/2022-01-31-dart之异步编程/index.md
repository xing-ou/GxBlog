---
title: dart之 异步编程
tags: [dart]
---
![headerimg](./Header.png)

我们再来看看dart的异步相关。在了解异步前，我们需要先了解下dart的`Isolates`和`event loop`。

<!--truncate-->

之后我们了解下常用的Future、Stream、await/async、生成器。

##  Isolates

大多数计算机，甚至在移动平台上，都具有多核 CPU。为了利用所有这些内核，我们一般都会使用并发，但是并发涉及到访问共享状态，而访问共享状态经常都会导致一些错误发生。

Dart并不直接操作线程，而是封装了一个叫做isolates的东西，所有的dart代码都是在*isolates*中运行。每个 isolates都有一个线程，线程会运行这个isolates的event loop，isolates之间不共享内存，他们有自己单独的堆内存，因此也不用担心访问共享状态加锁的问题。

### main isolate

![image-20220517155140433](https://tva1.sinaimg.cn/large/e6c9d24egy1h2bgc3yrytj20bu0budg2.jpg)

通常dart app的代码都是在main isolate中执行的。

### isolate life cycle

下面的图片显示了isolate的生命周期。你的代码会注册一些event listeners ，比如响应键盘、文件I/O等等。

当isolate的初始函数返回时，如果它需要处理事件，isolate就会留下来。处理完事件后，isolate 就退出了。

![image-20220517155526963](https://tva1.sinaimg.cn/large/e6c9d24egy1h2bgfzxs6xj20bg0gqt96.jpg)

### event loop

所有的event都会放到一个event queue中，所谓的event loop就是一个循环，不断从queue中取出event交给isolate执行。

![image-20220517155817432](https://tva1.sinaimg.cn/large/e6c9d24egy1h2bgiyonbaj20uc06m74h.jpg)

![image-20220517155833263](https://tva1.sinaimg.cn/large/e6c9d24egy1h2bgj8hgruj210g0ikabe.jpg)

实际的event queue还会分的更细一点，分为event queue 和 microtask queue。在一个event执行完成后会查看microtask queue是否为空，如果不为空则取microtask执行，知道microtask queue为空，然后才是取下一个event。

![image-20220517162757633](https://tva1.sinaimg.cn/large/e6c9d24egy1h2bhduegnnj20uy0tmabc.jpg)

### 创建新的isolate

如果我们在main isolate上的某个event执行时间过长，就会影响UI的刷新，引起掉帧，卡顿。

![image-20220517161435977](https://tva1.sinaimg.cn/large/e6c9d24egy1h2bgzxc9p4j20nq0pydgs.jpg)

此时，我们可以考虑将耗时操作放到另一个isolate中执行，不影响main isolate。不同isolate通过message通信。

![image-20220517161523430](https://tva1.sinaimg.cn/large/e6c9d24egy1h2bh0qrlkmj210c0c2t9j.jpg)

我们来看个简单的demo

```dart
void main() async {
  // Read some data.
  final jsonData = await _parseInBackground();

  // Use that data
  print('Number of JSON keys: ${jsonData.length}');
}

Future<void> _readAndParseJson(SendPort p) async {
  final fileData = await File(filename).readAsString();
  final jsonData = jsonDecode(fileData);
  //退出isolate，并将数据传递给sendPort
  Isolate.exit(p, jsonData);
}

// Spawns an isolate and waits for the first message
Future<Map<String, dynamic>> _parseInBackground() async {
//首先创建一个RecivePort能接收后台isolate发过来的数据。
  final p = ReceivePort(); 
  //调用Isolate.spawn(),创建并开始另一个isolate，第二个参数是传给第一个函数的参数。
  await Isolate.spawn(_readAndParseJson, p.sendPort);
  //await RecivePort中的数据
  return await p.first as Map<String, dynamic>;
}
```

![image-20220517162303650](https://tva1.sinaimg.cn/large/e6c9d24egy1h2bh8qcsv0j21260ewgmu.jpg)

 

## Future

Future和其他语言的Promise类似。也代表将来会返回某个value的对象。

### 初始化方法

```dart
///这个两个方法都是添加一个任务到event queue的队尾，内部是通过Timer实现的
Future(FutureOr<T> computation())
Future.delayed(Duration duration, [FutureOr<T> computation()?])
  
var f = Future(() => 123);  
```

```dart
//complete with error。会生成一个microtask添加到microtask queue中。
Future.error(Object error, [StackTrace? stackTrace])
```

```dart
//会生成一个microtask添加到microtask queue中。内部是通过scheduleMicrotask实现的
Future.microtask(FutureOr<T> computation())
```

```dart
///会立马同步执行computation, 并且构造的Future在微任务队列调度完成。
Future.sync(FutureOr<T> computation())
```

```dart
//构造的Future在microtask queue里调度完成，如果传入的value是Future,那么该任务会等待到传入的Future结束后执行
Future.value([FutureOr<T>? value])
```

### 方法

```dart
/**
如果Future没有error，那么不会调catchError，Future直接complete某个value
如果Future有error，那么就会调catchError，首先调第二个参数test，判断这个catchError是否能够处理这个error，如果test返回true，那么代表能够处理，会接着调用onError，如果test返回false，那么代表不能处理, 返回一个complete 这个error的Future，如果没提供test参数，那么默认test返回true。
*/
catchError(Function onError, {bool test(Object error)?}) → Future<T>
```

```dart
// 首先Future的then()并没有将任务添加到任何队列中，它仅仅只是注册当future complete时的回调，在Future任务执行完成之后会执行该回调方法，并且会将Future的结果传递过去。在如果在调用一个Future的then()之前该Future已经complete了，那么该任务会被添加到microtask queue中
Future<R> then<R>(FutureOr<R> onValue(T value),{Function? onError})
```

```dart
// 如果Future timeout了，会执行onTimeout，如果没有提供onTimeout，会抛出TimeoutException
Future<T> timeout(Duration timeLimit,{FutureOr<T> onTimeout()?})
```

```dart
// 注册回调，只要complete就会调用，不管是complete value或者complete error。
Future<T> whenComplete(FutureOr<void> action());
```

## Stream

Stream 提供了一种接收一系列event的方法。每个event要么是value event，要么是error event。当一个流已经发出它的所有event时，会给listener发一个Done event。

有两种Stream：“单订阅”Stream和“广播”Stream。

*单订阅Stream*在流的整个生命周期内只允许一个listener。它在拥有listener之前不会开始生成event，并且当listener被取消订阅时它会停止发送event，即使event source仍然可以提供更多event。函数创建的`async*`是单订阅流，但每次调用函数都会创建一个新的此类流。

不允许在单个订阅流上listener两次，即使在第一个订阅已被取消后也是如此。



*广播Stream*允许任意数量的listener，并且在事件准备就绪时触发其event，无论是否有listener。

如果多个listener想要收听单个订阅流，请使用`asBroadcastStream`将其转换为广播 Stream。

当发送Done event时，所有的订阅者都会在接收这个event前被取消订阅。这个event发送后，已经没有了订阅者。虽然这个时候还是可以添加订阅者，但是添加后他们只会立即收到一个done event。

### Constructors

```dart
//简单Stream
Stream.empty()
Stream.error(Object error, [StackTrace? stackTrace])
Stream.value(T value)
```

```dart
/// Future
Stream.fromFuture(Future<T> future)
Stream.fromFutures(Iterable<Future<T>> futures)
Stream.fromIterable(Iterable<T> elements)
```

```dart
//其他
Stream.periodic(Duration period, [T computation(int computationCount)?])
Stream.multi(void onListen(MultiStreamController<T>), {bool isBroadcast = false})
Stream.eventTransformed(Stream source, EventSink mapSink(EventSink<T> sink))  
```

### Methods

```dart
//如果test返回true，那么Future complete true，如果没有找到true，那么complete false
any(bool test(T element)) → Future<bool>
//将订阅流转换为广播流
asBroadcastStream({void onListen(StreamSubscription<T> subscription)?, void 
onCancel(StreamSubscription<T> subscription)?}) → Stream<T>
//将每个element转换成一个Stream  
asyncExpand<E>(Stream<E>? convert(T event)) → Stream<E>
//类似map，但是convert可以返回Future, 会等Future complete
asyncMap<E>(FutureOr<E> convert(T event)) → Stream<E>
//转换
cast<R>() → Stream<R>
//element是否包含needle，通过Object.==比较
contains(Object? needle) → Future<bool>
//如果和前一个相同，那么忽略
distinct([bool equals(T previous, T next)?]) → Stream<T>
//忽略value event，只接受error和done
drain<E>([E? futureValue]) → Future<E>
//某个element
elementAt(int index) → Future<T>
//是否每个element都通过test
every(bool test(T element)) → Future<bool>
//将element转换成Iterable
expand<S>(Iterable<S> convert(T element)) → Stream<S>
//找第一个
firstWhere(bool test(T element), {T orElse()?}) → Future<T>
//不断调用combine处理element
fold<S>(S initialValue, S combine(S previous, T element)) → Future<S>
//foreach
forEach(void action(T element)) → Future
//处理错误，可以通过test过滤要处理的错误
handleError(Function onError, {bool test(dynamic error)?}) → Stream<T>
// join
join([String separator = ""]) → Future<String>
// last where
lastWhere(bool test(T element), {T orElse()?}) → Future<T>
//订阅流
listen(void onData(T event)?, {Function? onError, void onDone()?, bool? cancelOnError}) → StreamSubscription<T>
//map
map<S>(S convert(T event)) → Stream<S>
//将event pipe到streamConsumer
pipe(StreamConsumer<T> streamConsumer) → Future
//reduce
reduce(T combine(T previous, T element)) → Future<T>
//类似lastWhere，但是如果有多个element会complete error
singleWhere(bool test(T element), {T orElse()?}) → Future<T>
//skip
skip(int count) → Stream<T>
skipWhile(bool test(T element)) → Stream<T>
//take
take(int count) → Stream<T>
takeWhile(bool test(T element)) → Stream<T>
//timeout  
timeout(Duration timeLimit, {void onTimeout(EventSink<T> sink)?}) → Stream<T>
//将所有element变成List
toList() → Future<List<T>>
//将所有element变成Set
toSet() → Future<Set<T>>
//将streamTransformer应用到Stream上
transform<S>(StreamTransformer<T, S> streamTransformer) → Stream<S>
//相当于fliter
where(bool test(T event)) → Stream<T>
```

我们可以看到Stream的概念其实类似于RxSwift的Observable的概念，api也类似。

## await和async

和其他语言的类似

```dart
Future<void> checkVersion() async {
  var version = await lookUpVersion();
  // Do something with version
}
try {
  version = await lookUpVersion();
} catch (e) {
  // React to inability to look up the version
}
```

处理Stream

```dart
await for (varOrType identifier in stream) {
  // Executes each time the stream emits a value.
}
```

## 生成器Generators

分为同步生成器和异步生成器。

- **Synchronous** generator: 返回 [`Iterable`](https://api.dart.dev/stable/dart-core/Iterable-class.html) object.
- **Asynchronous** generator: 返回 [`Stream`](https://api.dart.dev/stable/dart-async/Stream-class.html) object.

```dart
Iterable<int> naturalsTo(int n) sync* {
  int k = 0;
  while (k < n) yield k++;
}
```

```dart
Stream<int> asynchronousNaturalsTo(int n) async* {
  int k = 0;
  while (k < n) yield k++;
}
```

```dart
//如果是递归的，可以通过yeild *提升性能
Iterable<int> naturalsDownFrom(int n) sync* {
  if (n > 0) {
    yield n;
    yield* naturalsDownFrom(n - 1);
  }
}
```

