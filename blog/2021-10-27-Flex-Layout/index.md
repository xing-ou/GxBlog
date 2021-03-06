---
tags: [flex, css]
---
![193EADF1-38F8-4FAF-9335-A05209EC236A](./193EADF1-38F8-4FAF-9335-A05209EC236A.png)

## flex布局

flex布局由两部分组成：flex container(弹性容器)和flex item(弹性元素)组成。

<!--truncate-->

## Flex container

你可以通过`display:flex` 或者 `display:inline-flex`，来将一个元素变成弹性容器。`display:flex`声明的是块级框， `display:inline-flex`声明的是行内块级框。

当你声明一个元素是flex container时，他的每个直接子元素都变成了一个flex item。

### 排版原则

将item按照justifycontent的设置依次**沿着主轴**排列,默认不换行。

如果换行的话，那么**沿着交叉轴**方向排列下一行。

### flex container的轴

弹性容器有2个轴：主轴 和 交叉轴。

`flex-direction`定义了主轴的方向，他的取值如下：

```css
row: 水平书写方向
row-reverse: 与row相反
coulm: 垂直于主轴的书写方向
coulm-reverse:与coulm相反
```

那么交叉轴呢？交叉轴始终和主轴垂直，方向是这个方向的书写方向。

这里都是用的书写方向，而不是水平向右这类词汇，因为对于不同的书写方向row的方向也不同，比如：对于从右到左书写方向的，他的row是，从右到左。

知道了主轴和交叉轴方向后，弹性元素将沿着主轴方向布局，如果允许换行，那么新的一行沿着交叉轴方向排列。

### 换行flex-wrap

如果弹性元素在主轴方向上排列不下。默认是不会换行的，如果设置了shrink，那就缩小尺寸，否则将从边框溢出。

我们可以使用flex-wrap控制换行。他的值如下：

```
nowrap: 不换行
wrap: 沿着交叉轴方向换行
wrap-reverse: 沿着交叉轴的反方向换行
```

### flex-direction和flex-wrap的简写

`flex-flow`是flex-direction和flex-wrap的简写

### 控制空白的位置

目前为止，我们知道flex item会沿着主轴方向进行排列，如果有多行，那么行沿着交叉轴方向排列，这也意味着如果一行没占满，留有空白，那么这个空白始终出现在主轴+交叉轴的方向那。

我们可以控制这个行为，下面是相关属性：

```css
justify-content ：控制一行中，item在主轴方向上的布局方式(我个人更喜欢理解为空白的处理方式)
flex-start: item沿着主轴依次布局，（空白全在末尾）
flex-end:item沿着主轴反方向依次布局，（空白全在开头）
center: 把所有item作为一个整体居中布局。 (空白两侧等分)
space-between: 把每行第一个元素放在主轴起边， 最后一个元素放在主轴终边。然后余下的item的两侧放置等量空白, 如果没有多余空白，那么会把最后一个元素撑到外面去。
space-around: item两侧有等量的不折叠的空白。
space-evenly: 把剩余空白等分，和item依次排列。这也意味着第一个元素到主轴起边和最后一个元素到主轴终边的距离是一样的。
```



![图像](https://tva1.sinaimg.cn/large/008i3skNgy1gr2tjs3h9ij31400sf4ci.jpg)

如果没有多余空白，页不允许换行，那么将溢出，justify-content对溢出也有影响

![图像](https://tva1.sinaimg.cn/large/008i3skNgy1gr2tp24qdrj313x0ot134.jpg)

### 一行中如何对齐元素

上面justify-content的例子有点特殊，因为他们的item的高度都是相等的，以至于我们忽略了，如果item也有不同高度时的情况。

如果item有不同的高度，那么item在交叉轴方向上应该如何布局嘞？

他受下面的属性控制：

```css
align-items : 定义一行中，item在交叉轴上的布局方式
flex-start: 沿着交叉轴起边对其
flex-end: 沿着交叉轴终边对其
center: 在一行中垂直居中对其
stretch: 全部拉伸填满交叉轴方向
baseline: 各个item基线对其
```

![图像](https://tva1.sinaimg.cn/large/008i3skNgy1gr2u1epaxhj30dz12gq8x.jpg)

### 交叉轴对齐方式覆盖

刚刚讲了align-items是item在一行中交叉轴上的布局方式。但有时我们可能存在特异化需求，比如奇数位置上的item是flex-start, 偶数位置上是flex-end。

`align-self`便是用于覆盖align-items属性的值，和align-items不同的是，align-self是声明在flex item上的，覆盖了flex container上的align-items属性。

由于是覆盖align-items，所以他的取值和align-items是一样的，作用也是一样的。



### 多个行的布局方式

如果允许换行，那么久可能出现多个行的情况，默认情况下，多个行是沿着交叉轴方向依次排列。但我们可以改变这个行为。

`align-content`属性指定了交叉轴方向上的额外空间如何分配到各个行之间。

他的取值和justify-content类似，多了个stretch。

```css
align-content: 
flex-start : 沿着交叉轴起边依次排列行,(空白在末尾)
flex-end : 沿着交叉轴终边开始依次排列行，(空白在开头)
center: 把各个行作为一个整体，居中排列
space-between: 第一行放在交叉轴起边，最后一行放在交叉轴终边，剩余空间等分和item依次排列
space-around: item两边有等量的不折叠的空白
space-evenly: item两边有等量空白
stretch: 等分空白，每一行拉伸等量空白空间。
```



![图像](https://tva1.sinaimg.cn/large/008i3skNgy1gr2ujy594dj30u00zp1kx.jpg)



## Flex item

刚刚我们说的除了align-self，其他都是应用在container上的属性。接下来，我们再看看应用在item上的属性。

除了align-self，还有flex, flex-grow, flex-shrink, flex-basis, order。

其中flex是flex-grow flex-shrink flex-basis的缩写。

我们可能遇到出现的结果和想象的不一样的情况，这个大多数有2个原因：

1. 对属性含义的误解
2. 忽略各个情况下的默认值

弹性元素还有：外边距不折叠的特性。float和clear对弹性元素不起作用。

Vertical-align对弹性元素没有作用，vertical-align是文本属性中的一员，用于控制文本在文本行框中的垂直方向上的对其方式。所以你item指定了vertical-align:bottom，那么只是item中的文本在文本行框中底部对齐，而不是把item推向container的底部。

绝对定位对item也有影响。如果某个item使用了绝对定位，那么这个item将从文档流移除，不会参与弹性布局。虽然他从文档流中移除了，但是justify-content和align-self还是会影响绝对定位元素。比如：align-self:center，那么绝对定位item会在弹性容器中交叉轴方向居中。

### Flex-basis

含义：根据增长因子或者缩减因子分配多余或者缺少空间之前，弹性元素的大小。

不鼓励：单独使用，建议用flex简写

```css
flex-basis:
auto: width ==> min-width => content
<length>: 指定长度,比如200px
<percentage>: 百分比，相对于弹性container
```

注意：flex-basis的默认值是auto，但是如果你指定了flex属性，省略了flex-basis，那么flex-basis是0%。

### Flex-grow

含义：有多余空间时是否允许增大，以及如何分配剩余空间。

不鼓励：单独使用，建议用flex简写

负数无效。

下面看看container宽750，有3个100px的item：

![图像](https://tva1.sinaimg.cn/large/008i3skNgy1gr2w7s8g6fj30w20u01bu.jpg)

如果我们换成flex:1, flex:1, flex:3呢？我们看到又是分配的全部空间，而不是剩余空间。为什么呢？这就和默认值有关了。

如果我们单独设flex-grow，没有设置flex，和flex-basis，那么这个时候flex-basis是auto。也就是在分配剩余空间前，item占用width的空间，所以得到剩余空间是450px。

如果指定了flex:1， 但是省略了flex-basis，那么flex-basis是0，也就是说在分配剩余空间前，item不占空间，3个item都不占空间，那么剩余空间就是整个空间的大小，所以看到的是按比例分配。

### Flex-shrink

翻译：空间不够放置所有弹性元素，而且弹性容器不能增加尺寸也不允许换行时，如何分配“缺少空间”。

不鼓励：单独使用，建议用flex简写

那么如何分配呢？首先得计算出缩减比例，缩减比例不仅和shrink有关，还和item宽度有关。

![图像](https://tva1.sinaimg.cn/large/008i3skNgy1gr2x0tya2wj30zv07c408.jpg)

最终item的宽度为

120/(150 * 1 + 250 * 1+ 200 *1) * 1 

Width = itemWidth * shrink * 缩小比例。

### flex

之前说了flex是flex-grow flex-shrink flex-basis的简写，推荐使用这个。

唯一需要注意的是他的默认值。省略flex-basis的话是0 而不是auto。

### order

定义item的顺序。