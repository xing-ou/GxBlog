---
title: 第五章、使用C/C++和WebAssembly
tags: [WebAssembly]
description: C/C++和WebAssembly是如何一起工作的
---
到目前为止，我们一直讨论的是WebAssembly 及其直相关工具和技术，这些东西对于探索webassembly提供的功能是不错的，但是如果要用这些开发新软件，那就就显得低效了。长期以来，高级编程语言使我们能不用关注低级指令的细节，我们可以用更简单、高效的、语意丰富的表达式来表示我们的逻辑。

为了真正理解 WebAssembly 提供的功能，我们应该了解众多能够编译成webassembly的语言中的一种。

并不是所有问题都适合用JavaScript解决，我们可以选择其他语言来提高性能、提高表达的清晰度或者重用现有代码。

C 语言是世界上最重要和最广泛使用的编程语言之一。C 中有大量可用的软件，其中大部分可以简单地重新编译为 WebAssembly。我们将在第 6 章讨论移植现有库，但现在我们将学习一点 C 以及如何使用它来改进我们迄今为止尝试过的一些工作。

## 使用 C 函数

C 函数在很多方面都类似于 JavaScript 函数。它可能带参数，也可能不带参数。它只能返回一个值并且不支持异常，因此错误处理通常比在 C++、Java 或 JavaScript 中更原始一些。

我们来看看年龄计算函数的 C 实现：

```c title="例 5-1。一个简单的 C 程序。"
#include <stdio.h>

int howOld(int currentYear, int yearBorn) {

  int retValue = -1;

  if(yearBorn <= currentYear) {
    retValue = currentYear - yearBorn;
  }

  return retValue;
}

int main() {
  int age = howOld(2021, 2000);

  if(age >= 0) {
    printf("You are %d!\n", age);
  } else {
    printf("You haven't been born yet.");
  }
}
```

不幸的是，计算机不理解这些高级语言，因此我们需要将它们转换为二进制机器码以供执行。如果你只做过 JavaScript 编程，这个过程可能有点陌生。作为一种解释性语言，您编写 JavaScript 并简单地运行它。东西都是有利有弊的，对开发人员来说方便的，通常在运行时会明显变慢，而 C 和 C++ 长期以来一直以性能著称。

我们编译howold.c为可执行文件:

```shell
brian@tweezer ~/g/w/s/ch05> clang howold.c
brian@tweezer ~/g/w/s/ch05> ls -laF
total 112
drwxr-xr-x  4 brian  staff    128 Feb 14 14:35 ./
drwxr-xr-x  6 brian  staff    192 Feb 14 14:32 ../
-rwxr-xr-x  1 brian  staff  49456 Feb 14 14:35 a.out*
-rw-r--r--  1 brian  staff    343 Feb 14 14:36 howold.c
```

由于历史原因，生成的可执行文件称为 *a.out*。稍后您将看到如何更改它。现在，我们可以执行程序：

```shell
brian@tweezer ~/g/w/s/ch05> ./a.out
You are 21!
```

我们讨论 clang 作为我们的示例 C 编译器的主要原因是因为它具有基于 LLVM 项目的现代、可插拔架构。您可以将其视为一个由三部分组成的过程。

![image-20211108230917850](https://tva1.sinaimg.cn/large/008i3skNgy1gw858xzgtuj30ze0diwf5.jpg)

源码经由`Parser`变成一个中间表示(IR)，IR是一种假的指令集。使用IR表达逻辑，交给`Optimizer`处理。优化过程涉及一个或多个转换，这些转换能够根据IR表达的逻辑使代码更快或更高效，比如：循环展开、无用代码删除、常量表达式的计算等等。最后交给`backend`生成特定平台的机器码。

这些层中的任何一层都可以换成其他东西。正如我上面提到的，Rust、Julia 和 Swift 等语言使用 LLVM 基础架构。这使语言作者不必每次都从头开始。他们只用编写新的前端解析器，然后利用大部分现有的`Optimizer`和`backend`。编译器研究人员可以开发新的优化并单独测试它们，然后再将它们用于任意输入语言的 IR。对于我们来说，`Backend`是最重要的可交换层。在 Linux 或 Windows 上，可以使用相同的前两层的本机版本，但都会有一个特定于平台的`Backend`。

您通常通过称为交叉编译的过程，来生成与计算机本机运行时不同的后端。这对于针对可能未安装开发人员工具链的嵌入式系统很有用。这在持续集成和交付系统中也很有用，您可以从同一构建环境中指定多个平台，否则，您可能需要为每个目标平台提供一个单独的构建环境。

Emscripten 工具链是为 asm.js 工作而开发的，它基于 LLVM 和 clang，因此它只需要输出 JavaScript 的可优化子集，即可允许 C 程序在浏览器中运行。当 WebAssembly 指令集和运行平台确定后，本质上，他们只需要添加一个 WebAssembly 后端就行了。我们将在下一章介绍这个工具链，但希望您能了解如何将高级语言编译为通用形式，然后进一步转换为有效的本地表示。

我们安装的 LLVM 应该原生支持 WebAssembly 作为后端。要查看的话，请尝试以下操作：

```shell
brian@tweezer ~/g/w/s/ch05> llc --version
LLVM (http://llvm.org/):
  LLVM version 11.0.1
  Optimized build.
  Default target: x86_64-apple-darwin20.2.0
  Host CPU: skylake

  Registered Targets:
    aarch64    - AArch64 (little endian)
    aarch64_32 - AArch64 (little endian ILP32)
    aarch64_be - AArch64 (big endian)
    arm        - ARM
    arm64      - ARM64 (little endian)
    arm64_32   - ARM64 (little endian ILP32)
    nvptx      - NVIDIA PTX 32-bit
    nvptx64    - NVIDIA PTX 64-bit
    ppc32      - PowerPC 32
    ppc64      - PowerPC 64
    ppc64le    - PowerPC 64 LE
    r600       - AMD GPUs HD2XXX-HD6XXX
    riscv32    - 32-bit RISC-V
    riscv64    - 64-bit RISC-V
    wasm32     - WebAssembly 32-bit
    wasm64     - WebAssembly 64-bit
    x86        - 32-bit X86: Pentium-Pro and above
    x86-64     - 64-bit X86: EM64T and AMD64
    xcore      - XCore
```

为了简化使用，我们去掉main函数，只保留`howold函数`。

```c
int howOld(int currentYear, int yearBorn) {

  int retValue = -1;

  if(yearBorn <= currentYear) {
    retValue = currentYear - yearBorn;
  }

  return retValue;
}
```

然后将其编译为webassembly:

```shell
brian@tweezer ~/g/w/s/ch05> clang --target=wasm32 -nostdlib -Wl,--no-entry 
-Wl,--export-all howold2.c -o howold.wasm
```

`--target=wasm32`指令指定输出为 32 位 WebAssembly 平台。`-nostdlib`告诉它不需要链接标准库。`--no-entry`和`--export-all`指令告诉链接器，我们没有`main()`函数，并保留所有的函数用于export。如果没有后者，优化过程可能会移除未使用的函数，因为我们没有调用它。`-o howold.wasm`指定输出文件的名称。

我们使用wasm-objdump查看一下输出:

```shell
brian@tweezer ~/g/w/s/ch05> wasm-objdump -x howold.wasm

howold.wasm:	file format wasm 0x1

Section Details:

Type[2]:
 - type[0] () -> nil
 - type[1] (i32, i32) -> i32
Function[2]:
 - func[0] sig=0 <__wasm_call_ctors>
 - func[1] sig=1 <howOld>
Memory[1]:
 - memory[0] pages: initial=2
Global[7]:
 - global[0] i32 mutable=1 <__stack_pointer> - init i32=66560
 - global[1] i32 mutable=0 <__dso_handle> - init i32=1024
 - global[2] i32 mutable=0 <__data_end> - init i32=1024
 - global[3] i32 mutable=0 <__global_base> - init i32=1024
 - global[4] i32 mutable=0 <__heap_base> - init i32=66560
 - global[5] i32 mutable=0 <__memory_base> - init i32=0
 - global[6] i32 mutable=0 <__table_base> - init i32=1
Export[9]:
 - memory[0] -> "memory"
 - func[0] <__wasm_call_ctors> -> "__wasm_call_ctors"
 - func[1] <howOld> -> "howOld"
 - global[1] -> "__dso_handle"
 - global[2] -> "__data_end"
 - global[3] -> "__global_base"
 - global[4] -> "__heap_base"
 - global[5] -> "__memory_base"
 - global[6] -> "__table_base"
Code[2]:
 - func[0] size=2 <__wasm_call_ctors>
 - func[1] size=134 <howOld>
Custom:
 - name: "name"
 - func[0] <__wasm_call_ctors>
 - func[1] <howOld>
 - global[0] <__stack_pointer>
Custom:
 - name: "producers"
```

好了，我们写个html来使用它:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="container" class="container" style="width: 80%">
      <h1>How Old Are You?</h1>
      <label for="year" id="yearborn" class="form-label">Year Born</label>
      <input type="range" class="form-range" id="year" name="year" value="0" />
      <div class="form-label">You are: <span id="age"></span></div>
    </div>
    <script>
      function fetchAndInstantiate(url, importObject) {
        return fetch(url)
          .then((response) => response.arrayBuffer())
          .then((bytes) => WebAssembly.instantiate(bytes, importObject))
          .then((result) => result.instance);
      }
      var d = new Date();
      var currentYear = d.getFullYear();
      var slider = document.getElementById("year");
      var yearBorn = document.getElementById("yearborn");
      var ageSpan = document.getElementById("age");

      fetchAndInstantiate("howold.wasm").then(function (instance) {
        slider.setAttribute("min", currentYear - 100);
        slider.setAttribute("max", currentYear);

        var updateLabels = function (val, age) {
          yearBorn.innerText = "Year Born: " + val;
          ageSpan.innerText = age;
        };

        var listener = function () {
          var age = instance.exports.howOld(currentYear, slider.value);
          updateLabels(slider.value, age);
        };

        slider.onchange = listener;
        slider.oninput = listener;
        slider.value = "1972";

        updateLabels(1972, 49);
      });
    </script>
  </body>
</html>

```

## 事情变得复杂

我已经向您展示了一个简单的示例，该示例将几个数字传递给一个只返回一个数字的函数。这与我们迄今为止所做的没有本质上的不同。

更复杂的 C 程序将难以如此简单地映射到您所接触的平台。比如：我们的“Hello, World!”中`printf()`函数就是浏览器没有的功能。还有一个问题是 C 程序的内存是如何分配和清理的。在我们正在探索的这个世界中，将各种编译的文件链接在一起的过程也有着根本的不同。

好消息是，这些问题中的大部分都可以通过工具和运行时平台来处理。坏消息是细节很快变得相当复杂。如果您之前从未接触过任何 C 编程，这里面将会有许多新的概念。这本书不能教你所有的东西，但我会尽量强调这种语言和 WebAssembly之间的特定交互。

想象一个简单的函数，它不带参数并返回一个数组的总和。`例 5-5`就是这样一个例子。在这段代码中，我们没有参数，编译器可以知道数组需要多大内存，因为我们用十个数字对其进行初始化。

```c title="例 5-5。一个简单的 C 函数"
int addArray() {
  int retValue = 0;
  int array[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

  for(int i = 0; i < 10; i++) {
    retValue += array[i];
  }

  return retValue;
}
```

如果我们尝试编译这个程序，我们可能会遇到警告，因为 clang 期望有一个`main()`函数。因为它找不到具有此名称的方法，所以它无法将所有内容链接到独立运行时。

```shell
brian@tweezer ~/g/w/s/ch05> clang simple.c -o simple.o
Undefined symbols for architecture x86_64:
  "_main", referenced from:
     implicit entry/start for main executable
ld: symbol(s) not found for architecture x86_64
clang-11: error: linker command failed with exit code 1 (use -v to see invocation)
```

别担心，很容易解决。我们可以简单地告诉 clang只是编译代码，但不将其与`-c`选项链接：

```shell
brian@tweezer ~/g/w/s/ch05> clang -c simple.c -o simple.o
brian@tweezer ~/g/w/s/ch05> ls -laF simple.*
-rw-r--r--  1 brian  staff   170 Feb 19 15:27 simple.c
-rw-r--r--  1 brian  staff  1060 Feb 19 15:43 simple.o
```

这生成了一个.o文件，其中包含函数定义。我们可以使用`nm` 命令查看:

```shell
brian@tweezer ~/g/w/s/ch05> nm -a simple.o
                 U ___stack_chk_fail
                 U ___stack_chk_guard
0000000000000000 T _addArray
                 U _memcpy
00000000000000a0 s l___const.addArray.array
```

起初这看起来可能会令人困惑，不过解释下后你就能明白。我们的函数，`addArray()`被定义为目标文件中的文本段符号。带有`U`符号类型的三个项目表示它们是未定义的。这些特定符号指的是出于安全原因自动链接的一些缓冲区溢出保护方法以及将内存从一个位置复制到另一个位置的功能。需要定义这些函数才能使代码可执行，这正是链接阶段和可重用库（如 libc）所提供的功能。

好的，我们最终得到一个不完整的可执行文件。如果我们提供一个`main()`方法并链接可执行文件，我们可以演示一下， `例 5-6 中`:

```c title="例 5-6。调用我们函数的main()方法。"
#include <stdio.h>

extern int addArray();

int main() {
  int sum = addArray();

  printf("The array sum is: %d\n", sum);
}
```

注意我们必须告诉编译器我们`addArray()`函数的定义，因为它没有在这个文件中定义。该 `extern`关键字表明其他地方有一个没有参数和返回一个整数的函数。因此，可以将此函数的执行结果赋值给名为`sum` 的整数。然后将其传递到`printf()` 函数中，将其格式化一下，输出累计总和。

为了构建可执行文件，我们编译*simplemain.c*和*simple.c* 文件并将结果存储在名为*simplemain*的可执行文件中 。现在没有了编译警告，因为我们确实为该方法提供了`main()`函数。

```shell
brian@tweezer ~/g/w/s/ch05> clang simplemain.c simple.c -o simplemain
brian@tweezer ~/g/w/s/ch05> ls -laF simplemain
-rwxr-xr-x  1 brian  staff  49640 Feb 19 16:01 simplemain*
brian@tweezer ~/g/w/s/ch05> ./simplemain
The array sum is: 45
```

如果我们在最终的可执行文件上使用 `nm` ，您会注意到我们已经提供了这次所需的一切。程序运行时，未定义的符号应由动态库提供。它们被排除在二进制文件之外以减小可执行文件大小。

```shell
brian@tweezer ~/g/w/s/ch05> nm -a simplemain
                 U ___stack_chk_fail
                 U ___stack_chk_guard
0000000100008018 d __dyld_private
0000000100000000 T __mh_execute_header
0000000100003ea0 T _addArray
0000000100003e70 T _main
                 U _memcpy
                 U _printf
                 U dyld_stub_binder
```

现在我们有了一个工作程序，让我们回到`例 5-5 中`所示的函数。我们使用了字面量语法来初始化数组 ，没有指定数组需要多大，这是有效的，因为编译器可以计算出来。在内存中，它分配了足够的内存来保存这么多整数。这种分配是在栈上完成的，因此当我们从函数返回时，不需要额外的清理工作。我们最终在内存中获得了足够大的位置来存储我们要汇总的数字，如下图所示:

![image-20211112000518190](https://tva1.sinaimg.cn/large/008i3skNgy1gwbnq5eaygj30j603c0so.jpg)

如果我们告诉编译器它需要多大，然后给它更多的数字，会发生什么？在`例 5-7 中`我们告诉编译器我们数组中只需要五个整数，然后给它十个。通过以下讨论，我希望向您展示编译器如何通过提供错误反馈来帮助您在编辑代码时找到更正确的解决方案，这发生在我们尝试运行代码之前。

```c title="例 5-7。包含错误的版本"
int addArray() {
  int retValue = 0;
  int array[5] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

  for(int i = 0; i < 10; i++) {
    retValue += array[i];
  }

  return retValue;
}
```

幸运的是，这对于编译器来说也很容易检测到。它会指出我们是愚蠢的，并给我们一个警告。

```shell
brian@tweezer ~/g/w/s/ch05> clang -c simple.c -o simple.o
  int array[5] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
                                 ^
1 warning generated.
```

如果我们想从我们的函数中返回一个数组会发生什么？在 `示例 5-8 中`我们尝试这样做，但很快发现它不起作用。

```c title="例 5-8。从函数返回数组失败。"
int[] generateArray() {
  int array[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
  return array;
}
```

尽管我们所做的看起来是合理的，但编译器再次通知我们我们做得不对。

```shell
brian@tweezer ~/g/w/s/ch05> clang -c simple2.c -o simple2.o
simple2.c:1:22: error: brackets are not allowed here; to declare an array, place the
brackets after the identifier
int[] generateArray() {
   ~~                ^
                     []
simple2.c:1:20: error: function cannot return array type 'int []'
int[] generateArray() {
                   ^
simple2.c:3:10: warning: incompatible pointer to integer conversion returning 'int [10]'
from a function with result type 'int' [-Wint-conversion]
  return array;
         ^~~~~
simple2.c:3:10: warning: address of stack memory associated with local variable 'array'
returned [-Wreturn-stack-address]
  return array;
         ^~~~~
2 warnings and 2 errors generated.
```

数组名称是 C 中的特殊变量。它们是内存中存储这些值的连续内存块的地址的占位符。我们可以引入一个指向整数的指针，并将其分配给数组开头的位置。为了访问该位置的值，我们必须使用解引用运算符`*`。

```c title="例 5-9。使用指向数组的指针"
#include <stdio.h>

void generateArray() {
  int array[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
  int * a = array;
  printf("a is %p\n", a);
  printf("The first value is: %d\n", *(a));
  printf("The second value is: %d\n", *(a + 1));
  printf("The third value is: %d\n", *(a + 2));
}

int main() {
  generateArray();
}
```

数组中的第一个值位于数组的开头，因此我们可以使用`*a`. 第二个整数间隔了一个内存地址，因此我们在基址上加个1，再取值。第三个值间隔两个内存。

编译我们的程序并运行它，查看输出。您`a`地址的值和我可能不太相同，但看起来应该相似。

```shell
brian@tweezer ~/g/w/s/ch05> clang simple3.c -o simple3
brian@tweezer ~/g/w/s/ch05> ./simple3
a is 0x7ffeef3a9720
The first value is: 0
The second value is: 1
The third value is: 2
```

编译器在`示例 5-8 中报错的原因 是因为您无法像我们尝试的那样返回数组。相反，您必须返回一个指针。

我们在`例 5-10 中`再次尝试返回我们的数组:

```c title="例 5-10。从函数返回数组的另一个失败尝试。"
#include <stdio.h>

int * generateArray() {
  int array[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
  return array;
}

int main() {
  int * a = generateArray();
  printf("a is %p\n", a);
  printf("The first value is: %d\n", *a);
  printf("The second value is: %d\n", *(a + 1));
  printf("The third value is: %d\n", *(a + 2));
}
```

再一次，我们失败了。

```shell
brian@tweezer ~/g/w/s/ch05> clang simple4.c -o simple4
simple4.c:5:10: warning: address of stack memory associated with local variable
'array' returned [-Wreturn-stack-address]
  return array;
         ^~~~~
1 warning generated.
```

这次编译器告诉我们，我们正在返回对栈中内存的引用。如果你还记得我上面所说的关于当我们从函数返回时会发生什么。我们的指针指向的是在我们有机会使用它之前就将被丢弃的内存。

这就是为什么我们需要在堆上分配内存的能力。它会一直有效，直到我们告诉 C 运行时我们不再需要它。在堆上分配内存的最简单方法是使用 `malloc()`函数。

我们终于在`例 5-11 中`得到了一个有效的代码示例。 `malloc()`函数由C标准库提供，因此我们在其定义中包含另一个头文件。我们需要告诉这个函数分配多少内存，所以我们使用整数大小的一些倍数。好消息是我们现在也可以创建任意大的数组。您可以在这里看到我们将大小加倍到 20，然后迭代 0 到 19 之间的数字以填充我们的数组。最后我们返回结果，并在`main()` 方法赋值给一个`int *`。 尽管我们现在指向的是堆而不是栈，但它的行为就像我们在`示例 5-9`中的`int *`一样。

```c
#include <stdio.h>
#include <stdlib.h>

int * generateArray() {
  int * array = (int *) malloc(sizeof(int) * 20);
  for(int i = 0; i < 20; i++) {
    array[i] = i;
  }

  return array;
}

int main() {
  int * a = generateArray();
  printf("a is %p\n", a);
  printf("The first value is: %d\n", *a);
  printf("The second value is: %d\n", *(a + 1));
  printf("The third value is: %d\n", *(a + 2));
}
```

编译和运行我们的新程序，终于给了我们一些乐趣。

```shell
brian@tweezer ~/g/w/s/ch05> clang simple5.c -o simple5
brian@tweezer ~/g/w/s/ch05> ./simple5
a is 0x7fae22c059e0
The first value is: 0
The second value is: 1
The third value is: 2
```

然而，我们的程序中仍然存在一个缺陷。因为我们打印出结果然后就退出了，似乎并没有什么问题，但却是产生了一种让 C 程序员（及其用户）发疯的问题：我们忘记释放我们分配的内了！如果这是一个服务器或一个长时间运行的程序，并且我们多次调用我们的函数，我们最终可能会耗尽内存。

为了解决这个问题，我们只需要调用`free()`函数来告诉运行时我们已经完成了该内存的使用。一旦我们这样做了，我们就不能再碰它了。下面列举了在用 C 编写程序时需要考虑的许多问题中的一些。

- 在分配之前不要使用内存。
- 分配的内存要确保它们足够大。
- 完成后不要忘记释放内存。
- 释放内存后不要使用它。

忘记这些规则中的任何一条都可能导致您的程序崩溃或内存不足。如果这看起来很麻烦，您会喜欢 Java、Python 和 JavaScript 等语言，它们为您缓解了其中的一些问题。不利的一面是通常存在性能问题，这就是 Rust 如此引人注目的原因。它为您提供了像 C 这样的语言的速度，而没有像 C 这样的语言的危险。我们将在`第 10 章`介绍 Rust 。

在那之前，我们需要弄清楚所有这些对 WebAssembly 意味着什么。

## C/C++ 和 WebAssembly

在下一节中，我将使用基于 Petter Strandmark 提供的示例项目演示更复杂的基础设施，以便将 clang 和 WebAssembly 结合起来。在下一章中，我们将介绍 Emscripten 工具链，以便更轻松地将现有代码移植到 WebAssembly。最终，我们将引入 WebAssembly 服务接口 (WASI) 来处理这些细节，但在那之前，我们需要一些基础设施来帮助我们克服目前所遇到的障碍。

这个基础设施有几个部分，但它在很大程度上是独立的，我认为还是比较好理解的。出于目前不值得深入研究的原因，我们将使用 C++ 版本的 clang 编译器。我们也没有时间在本章中教你 C++，所以我不会专注于太多细节。然而，在某些情况下，我们需要让 C++ 代码表现得像 C。

我们将从一些 C/C++ 代码开始。这两种语言非常相关，但是 C++ 提供了面向对象的编程特性，可以更容易地使用自然概念（例如订单、帐户、用户等）对领域进行建模。在`示例 5-12 中`您可以看到我们将要使用的一些功能。为了使事情易于管理，此时我不会向您展示所有内容。

```c++ title="例 5-12。一些 C/C++ 函数供我们调用"
#include "nanolibc/libc.h"
#include "nanolibc/libc_extra.h"

#define WASM_EXPORT __attribute__((visibility("default"))) extern "C"

WASM_EXPORT int* get_memory_for_int_array(int size) {
  return new int[size];
}

WASM_EXPORT void free_memory_for_int_array(int* arr) {
  delete[] arr;
}

WASM_EXPORT void mergeSort(char *p, int length) {
  int c, d, swap;

  for(c = 0; c < length - 1; c++ ) {
    for( d = 0; d < length - c - 1; d++) {
      if(p[d] > p[d+1]) {
	swap = p[d];
	p[d] = p[d+1];
	p[d+1] = swap;
      }
    }
  }
}

WASM_EXPORT void reverse(unsigned char* p, int len) {
   for( int i = 0; i < len / 2; i++ ) {
     unsigned char temp = p[i];
     p[i] = p[len - i - 1];
     p[len - i - 1] = temp;
   }
}
```

首先你得明白`#include` 包含的代码。此代码使用一个非常小的实现，为我们提供libc库的`malloc()`， `free()`甚至`printf()`（暂时先不管这个函数）。C/C++ 中的头文件允许我们声明函数的签名，以便编译器知道会发生什么。

正如你在`例 5-13 中`看到的，我们有一组可供我们链接的函数。为了确保它们在 C 函数中可见，我们使用`extern "C"`关键字来防止 C++ 编译器修改它们的名称。

```c++
#ifndef _NANOLIB_C_H
#define _NANOLIB_C_H
#include <stdarg.h>
#include <stddef.h>

extern "C" {
  void* memcpy(void* dest, const void* src, size_t count);
  void* memset (void * dest, int value, size_t count);

  int puts ( const char * str );
  int printf(const char* format, ...);
  int sprintf(char* buffer, const char* format, ...);
  int snprintf(char* buffer, size_t count, const char* format, ...);
  int vsnprintf(char* buffer, size_t count, const char* format, va_list va);

  void* malloc(size_t amount);
  void* realloc(void *ptr, size_t size);
  void* calloc(size_t num, size_t size);
  void free(void* mem);
}

#endif
```

回顾`示例 5-12`我们有一个叫做`get_memory_for_int_array()`的方法 ，它接受一个`size`参数来告诉我们要分配多少内存。如果您仔细查看实现，它使用的是 C++ 的`new`运算符。我们假设这与`malloc()`的含义相同。通过使用`delete`运算符， `free_memory_for_int_array()`函数的作用类似于 `free()`。

有一个`#define`宏可以为这些函数提供外部可见性，以确保它们可用于我们将要调用它们的 JavaScript 代码。

我们接下来有一个函数，它提供了一个归并排序的实现，另一个函数用于反转数字数组。

C/C++ 应用程序和库的构建系统不像 Rust 的 cargo 命令那样现代和友好，但它们是可靠和灵活的。我们将使用一个简单的基于*Makefile*的方法。这是我们没有时间深入讨论的另一个细节，简单来说他就是定义了一组规则来构建目标。当源代码更改时，它会导致重新评估依赖项并构建任何需要构建的东西。如果您想了解它是如何工作的，可以通过本书的 Git Repo获得该文件的内容。

为了构建我们的代码，我们将使用 make 命令，它会让我们知道它是如何进行的。

```shell
brian@tweezer ~/g/w/s/c/helloworld> make
... Lots of noise goes by...
brian@tweezer ~/g/w/s/c/helloworld> ls -laF *.wasm
-rwxr-xr-x  1 brian  staff  5309 Feb 19 20:03 library.wasm*
```

我将留给您自己详细探索该模块的内容，但我想重点介绍其中的一些要点。注意我们的模块导出了自己的内存。您可以更改此行为，从 JavaScript 端导入`Memory`的实例，但我们现在不打算这样做。

目前你需要关注的是，我们的 C/C++ 代码有一个 libc 的微小实现，它将从一个导出的`Memory`实例中分配和释放内存。

```shell
brian@tweezer ~/g/w/s/c/helloworld> wasm-objdump -x library.wasm
...
Export[11]:
 - memory[0] -> "memory"
 - func[1] <get_memory_for_int_array> -> "get_memory_for_int_array"
 - func[14] <_Znam> -> "_Znam"
 - func[3] <free_memory_for_int_array> -> "free_memory_for_int_array"
 - func[16] <_ZdaPv> -> "_ZdaPv"
 - func[5] <debug_dump_memory> -> "debug_dump_memory"
 - func[7] <mergeSort> -> "mergeSort"
 - func[8] <reverse> -> "reverse"
 - func[9] <helloWorld> -> "helloWorld"
 - func[11] <_Znwm> -> "_Znwm"
 - func[15] <_ZdlPv> -> "_ZdlPv"
...
```

接下来，我们将需要一些 HTML 代码来调用我们的 C/C++ 。大部分结构与我们之前看到的相似，但我将在`示例 5-14 中`重点介绍您需要了解的部分。

```html
<script>
let wasm;

...

WebAssembly.instantiateStreaming(fetch('library.wasm'), importObject).then(
  function(obj) { 1
    wasm = obj; 2

    const ptr = wasm.instance.exports.get_memory_for_int_array(10); 3
    const memory = new Uint8Array(wasm.instance.exports.memory.buffer); 4
    const nums = memory.subarray(ptr); 5

    for(var i = 0; i < 10; i++) {
      nums[i] = i;
    }

    console.log(nums);

    wasm.instance.exports.reverse(ptr, 10); 6

    console.log(nums);

    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 7

    shuffleArray(arr);

    for(var i = 0; i < 10; i++) {
      nums[i] = arr[i];
    }

    console.log(nums);

    wasm.instance.exports.mergeSort(ptr, 10); 8

    console.log(nums);

    wasm.instance.exports.free_memory_for_int_array(ptr); 9

    ...
}

</script>

```

1. 与往常相同的方式创建Module
2. 一旦可用，我们希望在其他地方访问模块实例。
3. 模块中为十个整数初始化了足够的空间。我们捕获返回的“指针”。
4. 底层缓冲区用`Uint8Array`.
5. `Uint8Array`创建一个 sub-来覆盖先前返回的“指针”所引用的部分。
6. 模块中的`reverse()`方法被调用。
7. 我们依靠 JavaScript 功能来打乱一些数据。
8. 该`mergeSort()`方法是通过对“指针”的引用来调用的。
9. 内存在Module端被释放。

我们首先像之前所做的那样启动 HTTP Server。module的使用和加载都和之前一样。一旦module实例可用，我们将变量分配给在此块的词法范围之外定义的另一个变量，以便我们可以在其他地方使用它。

因为我们代码的 C/C++ 端不知道发生了什么，我们必须从它的角度分配足够的内存来存储 JavaScript 端的一些数据。以前我们只是直接将数据写入导出的`Memory`实例中。因为我们要模拟指针，所以我们必须在这一侧创建一些看起来合适的东西。我们调用该`get_memory_for_int_array()` 函数并要求它分配十个整数空间。该函数在 C/C++ 端返回一个指针。正如您之前看到的那样，它不是直接引用堆中的某个位置。相反，它是小型 libc 实现将数据分配到的底层缓冲区的索引。当我们将它传回另一侧时，我们将使用此引用作为内存中的偏移量。

我们`ArrayBuffer`用一个`Uint8Array`包装器将底层包围起来，这样我们就可以很容易地从这一边写出 8 位整数。如果您重新查看`示例 5-12 中`的代码，您可能会注意到我们的排序和反转函数接受`char *`。通过在`ints`、`chars`、 addresses、booleans 等 之间进行自动类型转换，C 可以非常灵活。它非常灵活，而且经常有很多问题。这些`chars`不能大于 8 位，因此它们的最大大小为 255。为了方便，我们用 一个`Uint8Array`包装缓冲区。

下一步是调用`reverse()`函数。

为了展示排序功能，我们需要一些打乱的数据。

一个新创建的数组被填充、打乱并输出到控制台。

当我们返回 JavaScript 时，我们将结果转储到控制台，然后释放我们分配的内存，因为我们不再使用它。

## 最后， WebAssembly 中的“Hello, world!”

我们还有很多东西要向您展示，但是，现在是我兑现给您一个“Hello，World！”承诺的时候了。为了简单起见，我不会有一个典型的`main()`程序。相反，我会将这个行为作为*library.cpp*文件中的另一个函数公开。`示例 5-15`向您展示了这是多么简单。

```c++ title="例 5-15 C/C++ 代码中的hello world函数"
WASM_EXPORT void helloWorld() {
  printf("Hello, World!\n");
}
```

如果我在 HTML 中的其他代码之后添加对这个新函数的调用，您可以看到下面的结果。

![image-20211112011139530](https://tva1.sinaimg.cn/large/008i3skNgy1gwbpn5hln1j30za07ogmn.jpg)

这到底是怎么做到的！？！如果它这么容易，为什么我们要等到`第五章`结束才能看到它？

让我向您展示`示例 5-16 中`HTML 中的更多细节 。有一个新的函数调用`get_memory()`，它只返回一个`Uint8Array`实例。有`decoder`和 `encoder`变量可用于在字符串UTF-8 表示之间进行转换。有一个函数 `charPtrToString()`可以将“字符指针”（即 C 字符串）转换为 UTF-8 字符串供 JavaScript 使用。

再往下，我们有一个被调用的`printString()`函数，它将JavaScript 字符串输出到控制台。我们 的`importObject`配置了一个`print_string`，该方法 将在输出到控制台之前将“字符指针”转换为字符串。 `importObject`，你还记得吗，能够使我们与我们的模块实例共享功能和数据。

```html title="例 5-16。Hello, World!的幕后工作"
<script>
function get_memory() {
  return new Uint8Array(wasm.instance.exports.memory.buffer);
}

const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder("utf-8");

function charPtrToString(str) {
  const memory = get_memory();
  let length=0;
  for (; memory[str + length] !== 0 ;++length) {}
  return decoder.decode(memory.subarray(str, str + length));
}

let printString = function(str) {
  console.log(str);
};

const importObject = {
  env: {
    print_string: function(str) {
      printString(charPtrToString(str));
    }
  }
};
...
</script>
```

这是 JavaScript 这边的。在 C/C++ 方面，我们在 `示例 5-17 中`看到，*nanolibc/libc_extra.h*头文件定义了一个名为的函数`print_string()`，该函数采用`char *`.

```c++ title="例 5-17。将 JavaScript 函数公开为 C 函数。"
#ifndef _NANOLIB_C_EXTRA_H
#define _NANOLIB_C_EXTRA_H

extern "C" {
  // Will be provided by Javascript.
  void print_string(const char* str);
}

#endif
```

`printf()`在*nanolibc* 目录中有一个文件定义了我们的实例。那里的细节很复杂，所以我不想深入研究，但我会指出它调用`puts()`将 a`char *`放到输出控制台。通常，这是操作系统提供的低级服务，但根据您目前所见，一旦我们在`示例 5-18 中`连接了最后一部分，我们的 JavaScript 处理程序就会将其路由到其控制台。

```c++ title="例 5-18。将 JavaScript 函数公开为 C 函数。"
int puts ( const char * str ) {
  print_string(str); 
  return 0;
}
```

终于，我们看到了这是如何运作的。我们的函数调用`printf()` , printf又调用`puts()`，而`puts`被定义为调用javascript提供的函数。关于将 C/C++ 与 WebAssembly 结合使用，还有更多需要了解的内容，但这是后续章节的主题。在那之前，您刚刚跨越了一个重要的鸿沟，了解 WebAssembly 如何在幕后工作。接下来我们将学习如何将现有软件移植到浏览器中运行。
