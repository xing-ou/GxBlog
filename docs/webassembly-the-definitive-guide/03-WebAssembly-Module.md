---
title: 第三章、WebAssembly Module
tags: [WebAssembly, Module]
description: webassembly中的Module结构
---
操作系统运行的程序通常都是编译后的格式。每个操作系统都有自己的格式，它定义了从哪里开始、哪些数据是必需的，以及针对不同函数的指令是什么。

WebAssembly 也是一样的。

在本章中，我们将查看它是如何打包的，以及主机如何知道怎么处理它。

软件工程师可能会在整个职业生涯中忽略程序在是如何加载和执行的。他们的世界都是从main函数开始和结束的，`int main(int argc, char **argv)`或`static void main(String []args)`甚至`if __name__ == "__main__":`，这些是众所周知的 C、Java 和 Python 程序的入口点，因此这是程序员承担控制流责任的地方。然而，在程序启动之前和退出之后，操作系统或程序运行时需要设置和销毁可执行结构。加载器进程需要知道指令从哪里开始、数据元素如何初始化、需要加载哪些其他模块或库等等。

这些细节通常由可执行文件的性质决定。在 Linux 上，这是由 Executable and Linkable Format (ELF)  定义的，在 Windows 上，它是 Portable Executable (PE) 格式，在 macOS 上，它是 Mach-O 格式。这些显然是特定于平台的格式。更加可移植的系统，如 Java 和 .NET 使用中间字节码表示，但仍然有一个定义好的结构，它们用于类似的目的。

WebAssembly MVP 的主要设计考虑之一是定义模块结构，以便 WebAssembly 主机知道在执行部署单元时要查找和验证什么以及从哪里开始。

## 模块结构

最基本的 WebAssembly 模块是一个空模块。

```wat title="例 3-1。一个空的但有效的 WebAssembly 模块"
(module)
```

显然看的不多，但是可以转换成二进制形式。

```shell
brian@tweezer ~/g/w/s/ch03> wat2wasm empty.wat
brian@tweezer ~/g/w/s/ch03> ls -alF
total 16
drwxr-xr-x  4 brian  staff  128 Dec 21 14:45 ./
drwxr-xr-x  4 brian  staff  128 Dec 14 12:37 ../
-rw-r--r--  1 brian  staff    8 Dec 21 14:45 empty.wasm
-rw-r--r--  1 brian  staff    8 Dec 14 12:37 empty.wat
```

操作系统通常从文件的前几个字节中识别文件格式。它们通常被称为`magic number`。对于 WebAssembly，字节被*\0asm*编码为`0x00 0x61 0x73 0x6D`表示字符*a*、*s*和*m 的*十六进制值 。后面跟着版本号 1（由 bytes 表示`0x01 0x00 0x00 0x00`）。

对于查看Module的命令行，你可以有多种选择，但是推荐 Wabt 工具包中的 wasm-objdump 。

```shell
brian@tweezer ~/g/w/s/ch03> wasm-objdump -x empty.wasm

empty.wasm:	file format wasm 0x1

Section Details:
```

## 探索Module section

下面是Module section列表：

| Id   | Name       | Description                        |
| :--- | :--------- | :--------------------------------- |
| 0    | Custom     | 供第三方使用的调试或元数据信息     |
| 1    | Type       | 模块中使用的Type definitions       |
| 2    | Import     | 模块使用的导入元素                 |
| 3    | Function   | 与模块中的函数关联的类型签名       |
| 4    | Table      | 定义模块使用的间接、不可变引用的表 |
| 5    | Memory     | 模块使用的线性内存结构             |
| 6    | Global     | 全局变量                           |
| 7    | Export     | 模块提供的导出元素                 |
| 8    | Start      | 可选的用于初始化Module的start函数  |
| 9    | Element    | 由模块定义的元素                   |
| 10   | Code       | 模块定义的函数体                   |
| 11   | Data       | 模块定义的数据元素                 |
| 12   | Data Count | 模块定义的数据元素的数量           |

这是我们之前的例子：

```wat
(module
    (func $how_old (param $year_now i32) (param $year_born i32) (result i32) 
        get_local $year_now
        get_local $year_born
        i32.sub)

    (export "how_old" (func $how_old)) 
)
```

我们现在使用`wat2wasm`将其转化为二进制形式。然后使用`wasm-objdump`查看详细信息。

```shell
brian@tweezer ~/g/w/s/ch03> wasm-objdump -x hello.wasm

hello.wasm:	file format wasm 0x1

Section Details:

Type[1]:
 - type[0] (i32, i32) -> i32
Function[1]:
 - func[0] sig=0 <how_old>
Export[1]:
 - func[0] <how_old> -> "how_old"
Code[1]:
 - func[0] size=7 <how_old>
```

与我们的空模块相比，多了很多的section。首先，我们有一个`Type`定义了一个签名。它表示类型：有两个`i32`参数，返回一个`i32`类型。这是我们`how_old` 函数的签名。

接下来，我们有一个`Function`部分。将我们的类型（来自`Type`部分的类型 0 ）链接到一个命名函数。

因为我们导出我们的函数以使其可用于我们的主机环境或其他模块，所以我们看到内部函数`<how_old>`是通过 name 导出的 `"how_old"`。最后，我们有一个`Code`部分包含我们唯一函数的实际指令。

我们来看看他在[wasm code explor](https://wasdk.github.io/wasmcodeexplorer/)中的样子。

![image-20211106200449169](https://tva1.sinaimg.cn/large/008i3skNgy1gw5oodlbafj31p20cewgf.jpg)

其中红色代表的是section边界， 你也可以悬停鼠标到某个颜色上，这会显示其详细信息。

你可能注意到了，我们的变量名似乎没有出现。为了调试，你需要在` wat2wasm`命令中指定`--debug-names`。

```shell
brian@tweezer ~/g/w/s/ch03> wat2wasm hello.wat -o hellodebug.wasm --debug-names
brian@tweezer ~/g/w/s/ch03> wasm-objdump -x hellodebug.wasm

hellodebug.wasm:	file format wasm 0x1

Section Details:

Type[1]:
 - type[0] (i32, i32) -> i32
Function[1]:
 - func[0] sig=0 <how_old>
Export[1]:
 - func[0] <how_old> -> "how_old"
Code[1]:
 - func[0] size=7 <how_old>
Custom:
 - name: "name"
 - func[0] <how_old>
 - func[0] local[0] <year_now>
 - func[0] local[1] <year_born>
```

我们看到`wat2wasm `使用`Custom `section来保留函数和局部变量的详细信息。

## 使用模块

之前的代码中生成了一个`Export`部分，但正如我们在`Module section`列表看到的那样，还有一个`Import`部分用于从主机环境接收元素。

```wat title="例 3-3"
(module
    (func $log (import "imports" "log_func") (param i32)) ;;导入函数

    (func $how_old (param $year_now i32) (param $year_born i32) (result i32) ;;内部函数
        get_local $year_now
        get_local $year_born
        i32.sub)

    (func $log_how_old (param $year_now i32) (param $year_born i32) ;;调用了导入函数
       	get_local $year_now
				get_local $year_born
				call $how_old
    		call $log
    )

    (export "how_old" (func $how_old)) ;;导出函数
    (export "log_how_old" (func $log_how_old)) ;;导出函数
)
```

现在让我们生成*.wasm*， 看看他的模块结构:

```shell
brian@tweezer ~/g/w/s/ch03> wat2wasm hellolog.wat
brian@tweezer ~/g/w/s/ch03> wasm-objdump -x hellolog.wasm

hellolog.wasm:	file format wasm 0x1

Section Details:

Type[3]:
 - type[0] (i32) -> nil
 - type[1] (i32, i32) -> i32
 - type[2] (i32, i32) -> nil
Import[1]:
 - func[0] sig=0 <imports.log_func> <- imports.log_func
Function[2]:
 - func[1] sig=1 <how_old>
 - func[2] sig=2 <log_how_old>
Export[2]:
 - func[1] <how_old> -> "how_old"
 - func[2] <log_how_old> -> "log_how_old"
Code[2]:
 - func[1] size=7 <how_old>
 - func[2] size=10 <log_how_old>
```

我们第一次看到`Import` section。它被定义为具有我们尚未见过的类型。如果您查看该`Type` 部分，您将看到我们现在指定了三种类型。

第一个类型是定义在我们的Import中。我们期望主机环境给我们提供一个带i32参数的函数。这个函数的目的是以某种方式打印我们的参数。我们期望从之前在 JavaScript 端中定义的`importObject`中找到这个函数。

为了通过 提供`importObject`我们需要一些类似于`示例 3-4`所示的 HTML 代码：

```html title="例 3-4。使用 importObject实例化我们的模块"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function fetchAndInstantiate(url, importObject) {
            return fetch(url)
            .then(response => response.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes, importObject))
            .then(result => result.instance)
        }

        const importObject = {
            imports: {
                log_func: function(arg) {
                    console.log(`you are ${arg} years old`);
                }
            }            
        }
        fetchAndInstantiate("./aaa.wasm", importObject)
        .then(instance => {
            instance.exports.log_how_old(2021, 2010);
        })
    </script>
</body>
</html>
```

我们将`importObject`和`例3-3`中定义的import section做个比较。我们注意到import section中指定了一个命名空间为`imports`的叫做`log_func`的函数。而这正是我们`importObject`决定的。

我们再来看看`log_how_old`函数，他接受2个参数，调用`get_local`检索命名参数将其压入栈顶。然后用`call $how_old`指令调用我们之前的函数。该函数从另一个参数中减去一个参数，然后在堆栈顶部返回结果。此时，我们不必将该值重新推送到堆栈中，我们可以简单地调用我们命名为  `$log`的导入函数。前一个函数的结果将是这次新调用的参数。花点时间确保您了解参数、返回值和函数之间的关系。

我们还可以使用javascript API来查询import和export了哪些方法：

```js
WebAssembly.compileStreaming(fetch("./aaa.wasm"))
      .then(module => {
          const imports = WebAssembly.Module.imports(module)
          console.log(imports)
          const exports = WebAssembly.Module.exports(module)
          console.log(exports)
      })
```

最后，再让我们回顾一下`fetchAndInstantiate`函数，对于简单的模块，这很好，但是你的模块越大，有一些内置的延迟是可以消除的。性能不仅与运行时性能有关，还与加载时性能有关。

对于`fetchAndInstantiate`函数，即使我们使用 Promise 来避免阻塞主线程，我们还是先将模块读入一个 `ArrayBuffer`然后实例化它。在编译模块之前，我们实际上是在等待所有网络传输完成。

MVP 功能之一就是在字节通过网络拉取时支持编译的能力。

```js title="例 3-8。大多数时间实例化模块的推荐方法"
(async () => {
  const fetchPromise = fetch(url);
  const { instance } = await WebAssembly.instantiateStreaming(fetchPromise);
  // Use the module
  const result = instance.exports.method(param1, param2);
  console.log(result);
})();
```

请注意，上面我们不是在创建`ArrayBuffer`，而是将`Promise`传入WebAssembly的`instantiateStreaming()方法中。这允许编译器在函数出现在网络上时开始编译它们。在大多数情况下，代码编译会比网络传输更快，因此在您完成下载代码时，它应该已经通过验证并可以使用。当 JavaScript 完成下载时，通常是在验证过程开始时，因此我们看到启动时间有所改善。

目前还没有一种正式的方法来缓存 WebAssembly 模块，但这其实也是提高启动时间的一种不显眼的方式。

## 未来 ES6 Module集成

正如我们所见，虽然我们能通过 JavaScript API 来加载wasm，但它是低级和重复的，这就是我们将它封装成一个函数的原因。未来，我们希望从 HTML 中使用 WebAssembly 模块会更容易，因为它们将作为 ES6 模块提供。

目前已有相关提案。到时候我们就可以这么使用：

```js
import {something} from "./myModule.wasm";

something();
```



现在我们已经了解了 WebAssembly 二进制文件的结构，您应该可以轻松地查看一下自己的或第三方的模块。下一步是查看 WebAssembly 模块中更动态的元素，我们将首先关注`Memory`。
