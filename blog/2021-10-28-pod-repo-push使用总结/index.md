---
tags: [pod, cocoapods]
title: pod repo push使用总结
---

![90088193-C7B8-4466-9DB9-DE681F7BF357](./90088193-C7B8-4466-9DB9-DE681F7BF357.png)

我们在修改完lib库后的最后一步就是使用`pod repo push`，将新的版本推到仓库里。

可是有时候会遇到各种奇怪的问题，导致一直push不成功，这里总结下使用方式。
<!--truncate-->
### 使用方式

```shell
pod repo push <仓库> xxx.podspec
```

### 使用pod lib lint检查

在push前，我们最好使用`pod lib lint`检查一下，因为这个命令可以提前暴露出push时会遇到的问题。

#### --allow-warnings

最常用的选项，忽略警告

#### --fail-fast

建议加上，遇到error可以立马结束，这样就不用在很长很长的log里找到底是什么error。

#### --no-subspecs

如果有很多subspec，可以加上这个，能快点。

#### --skip-import-validation

跳过import校验。通常我们遇到下面的错误时，可以跳过对能否import的校验

```shell
 - NOTE  | [iOS] xcodebuild:  ld: warning: ignoring file xxx/xx/x.a, missing required architecture x86_64 in file xxx/xx/
 - NOTE  | [iOS] xcodebuild:  ld: warning: ignoring file xxx/xx/x.a, missing required architecture i386 in file xxx/xx/
```

#### --sources

指定source，如果error是某个lib找不到，那么就通过这个指定这个lib的source, 可以指定多个，用逗号隔开。

```shell
--sources="http://my-private/xxx/CocoapodsRepos.git,https://github.com/CocoaPods/Specs.git"
```

### 使用pod repo push

一般能通过pod lib lint的，基本上push都没啥问题。不建议不lint直接push，因为push产生的Log会很长很长，如果遇到error将很难发现问题。一般常用的option：

#### --allow-warnings

最常用的选项，忽略警告

#### --sources

指定source，如果error是某个lib找不到，那么就通过这个指定这个lib的source, 可以指定多个，用逗号隔开。

#### --skip-import-validation

跳过import校验

### 其他

有时候还会遇到一些奇奇怪怪的问题。比如：能编译过，但是lint/push时都报compile Error，最后发现是RealReachability的header中会少一些宏定义，代码中又引用了这些宏，最终全部替换掉就能正常push。

总之，先lint，用`--fail-fast`尽快找到错误提示，完成修改。
