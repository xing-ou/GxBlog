---
title: dart之Hello,dart
tags: [dart]
---
![headerimg](./Header.png)
工欲善其事，必先利其器。首先来安装sdk，选择IDE，然后跑起第一个Hello world程序。
<!--truncate-->

## IDE

IDE我们选择Visual studio code。怎么安装就不说了。

## SDK

因为我们要开发flutter，所以我们不单独安装dart的sdk，而是选择安装flutter，使用flutter中的dart sdk就行了。至于怎么安装flutter sdk也不说了，看官方文档去。

## 校验安装结果

```shell
#如果能够看到版本，那么安装成功
dart --version
```

## dart 命令

我们可以通过`dart help`查看命令的用法。

| Sub command | 作用                      |
| ----------- | ------------------------- |
| analyze     | 分析dart代码              |
| compile     | 编译dart代码              |
| create      | 创建dart project          |
| devtools    | 打开DevTools              |
| doc         | 生成project的文档         |
| fix         | 自动修复dart代码          |
| format      | 格式化代码                |
| migrate     | 将项目进行null safety迁移 |
| pub         | packages相关              |
| run         | 运行dart                  |
| test        | 运行项目的test            |

## 创建Project

创建一个console project

```dart
dart create helloworld
cd helloworld
dart run
```

我们创建project时还可以指定其他模板

```dart
 dart create --template console-full hello_dart_project
```

## 使用VsCode开发

1. 安装dart extension
2. 按`Command+Shift+P`, 输入dart，选择`dart: New Project`。
3. 选择模板,我们选个`console application`

最终我们得到和命令行创建项目一样的效果。

## 运行

你可以通过命令行的

```dart
dart run
```

vscode的话，在main函数顶部有`Run | Debug`，我们点击run就行了

在工具栏也有个播放按钮▶️一样的，点击也是运行。

如果我们点击，他提示我们创建` launch.json`的话，我们可以创建如下的:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Dart",//项目的config name，随便命名
            "type": "dart",//让vscode知道project的类型，这里告诉vscode这是一个dart project
            "request": "launch",//告诉vscode你想要运行project
            "program": "bin/hello_dart_project.dart"//告诉vscode程序的位置，vscode会寻找main函数，开始执行
		} ]
}
```

