---
title: 接受XCTest中的预期失败
tags: [wwdc, XCTest]
description: 出色的测试可以帮助你在发布前跟踪重要问题。但是对于无法立即解决的问题，XCTest通过XCTExpectFailure来提供更好的上下文。
---

有的时候我的的测试不通过，但是我们又不能立即解决这个问题。这就造成了在测试报告中，频繁出现失败，但是这些失败又是暂时不能解决的。

这给我们的测试报告增加了大量的噪音，影响我们对测试结果的评估。

## 传统的解决方案

### Disable 

![截屏2021-11-26 下午4.19.30](https://tva1.sinaimg.cn/large/008i3skNgy1gwsmk47jlxj30ts0f0aaj.jpg)

但是因为Disable了，所以代码不会执行，而且测试报告中也看不到该测试用例。

这让问题的跟踪变得困难。

### XCTSkip

仍然执行测试用例，直到XCTSkip被调用。

![image-20211126162424675](https://tva1.sinaimg.cn/large/008i3skNgy1gwsmp4xukvj30xk05waai.jpg)

## Xcode13的XCTExpectFailure

有了这个，你的测试会正常执行，但是测试结果有所改变

- failed变成 expect failed(灰色的叉叉)
- Test Suit的failed会变成pass  (中间是横线，不是勾勾，表示存在混合状态，pass和expect failed)

![image-20211126163705321](https://tva1.sinaimg.cn/large/008i3skNgy1gwsn2bjpfnj30gs0ewmxe.jpg)

这样Suit失败的噪音就减少了，但是bug仍然还是需要我们解决，我们只是能够更好的维护测试用例了。

### 简单使用

```swift
//我们在message中提供一个url，那么测试报告将可以通过点击bug跳转到对应url
XCTExpectFailure("<https://dev.myco.com/bug/1234> this is a bug")
```

![image-20211126163949463](https://tva1.sinaimg.cn/large/008i3skNgy1gwsn568ob3j30wm09wq3m.jpg)

### 只让部分代码使用Expect failure

![image-20211126164904729](https://tva1.sinaimg.cn/large/008i3skNgy1gwsnesmi2wj30xu09gwf0.jpg)

这样，外部的failed，仍然会让测试变成failed，内部的failed，会让测试变成expect failed。

> 当然，你可以在一个测试用例中多次使用XCTExpectFailure，而且还允许嵌套使用

### 设置failed的option

如下，设置issueMatcher，只有match了的才是expect failure

![image-20211126165229203](https://tva1.sinaimg.cn/large/008i3skNgy1gwsnibz9ebj30xs0b80tp.jpg)

你当然也可以通过Option来disable测试

![image-20211126165446615](https://tva1.sinaimg.cn/large/008i3skNgy1gwsnkqncvcj30wc0b83zb.jpg)

### strict模式

如果你的bug解决了，测试不会产生failed，此时`XCTExpectFailure`会产生一个`unmatch expected failure`错误，告诉你没有发现错误，你是不是应该将`XCTExpectFailure`相关代码移除。

这是就是`XCTExpectFailure`的strict mode。

我们再来看看，如果我们的测试有时通过，有时不通过呢？

此时，明显bug还未得到解决，我们更希望失败的时候是一个expect failed，而不是failed。

我们可以将strict设为false。这样在没有错误时,`XCTExpectFailure`不会抛出错误。有错误时，会产生一个expected failed。

![image-20211126170007240](https://tva1.sinaimg.cn/large/008i3skNgy1gwsnqa09p5j30vm06w74l.jpg)
