---
title: 第二章、hello world
tags: [WebAssembly, wat]
description: webassembly中的Hello world
---

向人们教授 WebAssembly 比较困难，部分来源于有很多地方可以开始。如果他们是 C/C++ 开发人员，那么这可能是开始讨论框架的合理位置。但是你也可以独立于你用来生成它的语言来谈论 WebAssembly 的机制。在本章中，我将采用这种方法。在开始建立与高级语言的联系之前，我们将在接下来的几章中逐步学习低级细节。这些细节最初看起来很简单和令人困惑，但我们正在研究基本机制，这最终不是您将要工作的地方。让我们首先考虑为什么我们不能从大多数编程书籍开始。

在`第 1 章中`，当我讨论 asm.js 时，我介绍了大多数人用新的编程语言或技术编写的第一个程序。我们称该程序为“Hello, World!” 。许多高质量的编程书籍以该示例开头，因为它让读者了解正在发生的事情，而无需深入研究细节。它很有趣，很有力量，是确保读者正确设置工具的好方法。

```c
#include <stdio.h>

int main() {
  printf("Hello, World!\n");
  return 0;
}
```

不幸的是，WebAssembly 无法打印到控制台，因此我们无法以这种方式开始。

等等，什么？

我会给你一点时间来消化这句话，也许再读几遍，以确保它表达了你的想法。

相信吗？使困惑？

是的，可以说 WebAssembly 没有办法打印到控制台、读取文件或打开网络连接……除非你给它一个办法。

如果您检查`示例 2-1`，您将知道问题所在。为了使该程序工作，它需要一个标准库中的`printf()`函数。使 C 程序可移植性高的部分原因是在各种平台上都存在诸如此类的标准库。所谓的*便携式操作系统接口* (POSIX)库将这些通用功能扩展到控制台之外，还包括文件操作、信号处理、消息传递等。应用程序将写入诸如 POSIX 之类的 API，但可执行文件将需要一个静态或动态库，以提供适合在目标平台上运行的调用方法的行为。这将是您计划使用的操作系统的本机可执行文件格式。

这就是为什么我说 WebAssembly 使代码具有可移植性，但我们还需要其他东西来帮助我们使应用程序具有可移植性。我们将在整本书中重新讨论这个主题，但现在你知道 WebAssembly 没有直接的方法来写入控制台就足够了。

## WebAssembly 文本格式 (Wat)

我们已经提到二进制格式 (Wasm) 旨在加快传输、加载和验证 WebAssembly 模块的速度。我们将在`第 3 章`更正式地介绍模块，但现在只需将它们视为部署单元，如 Java 中的库或 Jar 文件。还有一种描述模块行为的文本格式，更易于人类阅读。虽然没有什么能阻止您手工编写文本格式的代码，但您不太可能这样做。这种格式有时也被称为“Wast”，但这是原始名称。许多工具都支持这两种风格，人们经常将两者混淆。我们将坚持使用 Wat 及其后缀*.wat*。

在`示例 2-2 中`我们看到了一个完整的、有效的 Wasm 模块，用 Wat 表示。这种类似 Lisp 的格式,通过其签名定义了函数和堆栈机器指令集合。WebAssembly 抽象机是一个虚拟堆栈机，我将在下面进一步解释这个概念。大多数编译后的软件都变成了特定硬件架构的可执行格式。如果您的目标是 Intel x86 机器，则将从高级语言转换为将在该芯片上运行的一系列指令。如果没有某种模拟器，它将无法在其他任何地方运行。Java 和 .NET 等平台有一个中间字节码表示，由移植到各种平台的运行时环境解释。WebAssembly 指令更像是这样，但涉及通过一小组指令操作堆栈。最终，这些指令将在 WebAssembly 主机中执行时映射到特定芯片的指令。

```wat title="例 2-2。一个简单的 WebAssembly 文本文件"
(module
    (func $how_old (param $year_now i32) (param $year_born i32) (result i32) ;;1
        get_local $year_now
        get_local $year_born
        i32.sub)

    (export "how_old" (func $how_old)) ;;1
)
```

- ;;是注释
- 1是内部函数
- 2是导出的函数

这里显示的函数叫做`$how_old`，模块外部是看不见这个函数的，除非我们export出去。

注意名称区别，内部名称以`$`开头，导出的版本没有。如果有人在外部调用它，它只会执行内部函数。

该模块定义了一个函数，该函数接受两个整数参数并返回另一个整数。正如最小可行产品 (MVP)定义的那样，WebAssembly 是一个 32 位环境。您将看到，随着时间的推移，该限制正在放宽。到本书出版时，64 位 Wasm 环境很可能会以某种形式出现。话虽如此，WebAssembly 支持 32 位和 64 位整数（称为`i32`and `i64`）以及 32 位和 64 位浮点数（称为`f32`and `f64`）。

目前为止，没有您期望的字符串、对象、字典或其他数据类型。请不要担心，我们稍后会解决如何克服这些问题，但这就是我们没有执行典型的“Hello, World！”的原因之一。没有字符串！在我们引入更多想法之前，处理数字会更容易。因此，*本着*这种程序风格的*精神*，我们向您展示了足够多的内容，让您看到它的工作原理，而不会让您感到不知所措。

这个内部函数的目的是根据某人的出生年份和当前年份来计算他的年龄。现在，听到 WebAssembly 没有日期的概念，也没有默认请求当前时间的能力，您可能就不会感到惊讶了。我期待您想知道 WebAssembly 到底*能做*什么！令人高兴的是，它可以做数学。如果你给它当前年份和某人出生的年份，它绝对可以从另一个中减去一个并产生结果。

您可能知道，堆栈是软件世界中一种方便且广泛使用的数据结构。它通常被描述为就像自助餐厅里的一堆托盘。工人将把干净的托盘放在任何其他托盘的顶部。顾客会从上面拿走一张。

考虑一个空堆栈，`如图 2-1`所示。我们说我们 *将*某些东西*压入*栈顶，然后将其从栈顶*弹出*。我们只操作过这个位置，所以如果你需要遍历一个列表，这不是一个合适的数据结构。同时，我们感兴趣的东西只有一个地方可以查找，所以我们不需要指定位置、索引或键。它是一种快速有效的操作结构。

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gw4qg9rhnzj30n006cdfs.jpg" alt="image-20211106002024891"  />

回顾`示例 2-2 中`函数中的指令列表 。第一个是`get_local`。WebAssembly 主机环境将检索命名参数的值， `$year_now`然后将其推送到堆栈。假设当年为2021年，结果`如图2-2`所示:

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gw4ruxpo4bj30mw06mq32.jpg" alt="image-20211106002258235"  />

此时，WebAssembly 宿主环境将前进到第二条指令。它也是一条`get_local`指令，将检索命名参数的值`$year_born`并将其压入堆栈。堆栈现在将有两个值，但堆栈顶部指向最新推送的值。假设调用该函数的人出生于 2000 年，堆栈将 `如图 2-3 所示`:

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gw4rv2c27wj30mc08swet.jpg" alt="image-20211106002358302"  />

执行环境将继续，因为有另一条指令。这个是`i32.sub`。它表示一个`i32`值与另一个值的算术减法。因为它需要两个值才有意义，它会通过弹出栈顶的两个值来查询它们，从而导致一个空栈。然后它从第一个参数中减去第二个参数并将结果压回到堆栈顶部。结果`如图 2-4 所示`:

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gw4rv6pj46j30nm06c3yo.jpg" alt="image-20211106002530904" />

此时，没有更多指令要执行，我们在堆栈顶部只剩下一个值。在 [示例 2-2 中，](https://learning.oreilly.com/library/view/webassembly-the-definitive/9781492089834/ch02.html#wasm_tdg:ex02-02)我们看到我们的函数定义了一个`i32`返回值。堆栈顶部的任何内容都将作为调用该函数的结果返回。

将两个数字相加似乎需要做很多工作，但考虑到我们已经以平台中立的方式表达了事件的数学序列。当代码最终在运行时主机中转换为本地指令时，这些值将被加载到 CPU 寄存器中，并且一条指令将使用 CPU 指令集的机制将它们加在一起。我们不必担心目标平台的细节或特性，但转换过程将在适当的时候快速且容易地进行。然而，在此之前，我们需要将我们的文本格式转换为其二进制表示。

## 将 Wat 转换为 Wasm

任何担任程序员时间不长的人都会注意到我们的实现存在各种潜在问题。我们没有处理有人反转参数以便函数返回负数的情况。为了使示例保持简单，我们只是忽略了这些东西。虽然这不是一个非常令人兴奋的功能，但我们已经研究了通过 WebAssembly 的原生文本格式表达一些基本行为的机制。下一步是将其转换为二进制可执行形式。执行此操作有多种选择，但我们将重点介绍两种方法。

第一个不需要您安装任何东西。事实上，您可以继续调用您的函数来查看它的工作情况！如果您访问 [*https://webassembly.github.io/wabt/demo/wat2wasm/index.html，*](https://webassembly.github.io/wabt/demo/wat2wasm/index.html)您将看到一个多面板站点。左上角代表一个*.wat* 文件。右上角代表已编译的*.wat*文件的带注释的十六进制转储。左下角代表使用 API 调用行为的 JavaScript 代码，我们将在后面更全面地介绍。右下角代表执行代码的输出。

将`示例 2-2 中`的代码复制并粘贴到标有*WAT 的*左上方面板中。这将导致文本格式转换为二进制格式。假设您没有任何拼写错误，您还可以通过按 同一面板上的“*下载”*按钮来下载二进制格式。不要担心这样做。

现在，将`示例 2-3 中`的代码复制到左下方的面板中。这将调用大多数现代浏览器（和 Node.js）中可用的 WebAssembly JavaScript API。我们稍后会详细讨论它，但现在我们正在检索二进制模块的字节（此处可通过`wasmModule`变量获得）并获取对该`how_old`函数的引用， 以便我们可以调用它。如您所见，该函数可以像任何其他 JavaScript 函数一样被调用。这样做的结果将通过`console.log()`右下面板打印出来。

```js title="例 2-3。一些 JavaScript 来调用我们的函数"
const wasmInstance = new WebAssembly.Instance(wasmModule, {});
const { how_old } = wasmInstance.exports;
console.log(how_old(2021, 2000));
```

如果一切顺利，您应该会看到21。尝试更改当前年份和出生年份参数的日期，并确保我们的数学是正确的。

此时，您可以下载该文件的二进制版本。默认情况下，它将被称为*test.wasm*但您可以将其重命名为您喜欢的任何名称。我们将其称为*hello.wasm*。

生成这种二进制形式的另一个选项是使用 WebAssembly 二进制工具包 (WABT)。此安装包含一个名为 wat2wasm 的命令。它按照名称进行操作并将文本文件转换为二进制格式。

```shell
brian@tweezer ~/g/w/s/ch02> wat2wasm hello.wat
brian@tweezer ~/g/w/s/ch02> ls -alF
total 24
drwxr-xr-x  5 brian  staff  160 Sep 13 12:54 ./
drwxr-xr-x  3 brian  staff   96 Sep 13 12:05 ../
-rw-r--r--  1 brian  staff   76 Sep 13 12:07 hello.c
-rw-r--r--  1 brian  staff   45 Sep 13 12:54 hello.wasm
-rw-r--r--  1 brian  staff  200 Sep 13 12:52 hello.wat
```

仔细看。你的眼睛不会欺骗你。它没有做很多事情，二进制格式只有 45 个字节长！现在我们不在浏览器中，我们需要一种执行函数的方法。使用 Node.js 中的 JavaScript API 很容易做到这一点，但我们将使用不同的方法来展示一系列选择。

## 在 Repl 中运行 Wasm

另一种工具是wasm3，一个c写的WebAssembly解释器。它允许在命令行或通过通常称为一个“REPL”一个交互模式下，运行WASM模块和功能。

让我们执行下面的命令：

```shell
brian@tweezer ~/g/w/build> wasm3 --repl $HOME/hello.wasm
wasm3> how_old 2021 2000
Result: 21
wasm3> how_old 2021 1980
Result: 41
wasm3> $how_old 2021 2000
Error: function lookup failed ('$how_old')
wasm3> how_old 1980 2021
Result: 4294967255
wasm3>
```

请注意，我只能调用导出的函数，而不能调用内部函数。 .要退出 repl，您只需键入 CTRL-C 或 CTRL-D。

## 在浏览器中运行 Wasm

在我们的下一个演示中，我将向您展示如何使用 JavaScript API 在浏览器中调用behavior。我们暂时不会介绍 API，但您会看到一个基本示例。有更复杂的方法来编译模块和参数化它们，但首先我们先学会爬，然后学会走路，最后我们再跑。

```js title="例 2-4。在 JavaScript 中实例化一个 Wasm 模块"
function fetchAndInstantiate(url, importObject) {
    return fetch(url).then(response =>
        response.arrayBuffer()
    ).then(bytes =>
        WebAssembly.instantiate(bytes, importObject)
    ).then(results =>
        results.instance
    );
}
```

一旦该函数可用，就可以很容易地从 HTML 中使用。在 `示例 2-5 中`您可以看到该过程是如何工作的。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="bootstrap.min.css">
    <title>Hello, World! (Sort of)</title>
    <script src="utils.js"></script>
  </head>
  <body>
    <div class="container">
      <h1>Hello, World! (Sort of)</h1>
      I think you are <span id="age"></span> years old.
    </div>

    <script>
      fetchAndInstantiate('hello.wasm').then(function(instance) {
	  var ho = instance.exports.how_old(2021,2000);
	  var ageEl = document.getElementById('age');
	  ageEl.innerText=ho;
      });
    </script>
  </body>
</html>
```

在这个例子中，我们建立了一个 id 为 `"age"`的`<span>`。它目前是空的。我们将用调用 WebAssembly 函数的结果填充它。我们的 HTML 文件的其余部分没有什么奇怪的。我们在`<head>`元素中包含了可重用的实例化代码 。在这个文件的底部，我们看到一个`<script>`调用该`fetchAndInstantiate()`函数的嵌入 元素。它传入对*hello.wasm*文件的本地引用，因此我们也必须通过 HTTP 提供它。

该函数返回一个`Promise`。resolve后，我们会收到实例化的 Wasm 模块实例的副本，并且能够调用通过模块的导出部分公开的方法。请注意，我们传入的是常规的 JavaScript 数字文字，但这些都可以传递到函数中。数字*21*通过调用过程返回，然后存储在我们之前提到`innerText`的空值中 `<span>`。

我们需要通过 HTTP 提供 HTML、JavaScript 和 Wasm 模块以在浏览器中运行。您可以使用**python3**（启动服务器并指定要侦听的端口。

```shell
brian@tweezer ~/g/w/s/ch02> python3 -m http.server 10003
Serving HTTP on :: port 10003 (http://[::]:10003/) ...
```

如果您打开浏览器并将其指向 [*http://localhost:10003/index.html*](http://localhost:10003/index.html)，您应该会在浏览器中看到[如图 2-6 所示的内容](https://learning.oreilly.com/library/view/webassembly-the-definitive/9781492089834/ch02.html#wasm_tdg:img-02-06)。随意更改嵌入`<script>`元素中的参数并验证它是否继续工作。

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gw4rvb667sj30vi0h8wfg.jpg" alt="image-20211106005945627" />

我们显然还有很多东西需要学习，但您现在已经看到了相当于“Hello, World!”的内容。示例希望让你了解 了WebAssembly 是如何工作的基础知识。
