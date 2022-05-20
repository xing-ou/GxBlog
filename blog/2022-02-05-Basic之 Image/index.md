---
title: Basic之 Image
tags: [flutter]
---
![headerimg](./Header.png)

我们来看看Image。

<!--truncate-->

### Image

显示图片的Widget

```dart
const Image(
{Key? key,
required ImageProvider<Object> image,
ImageFrameBuilder? frameBuilder,
ImageLoadingBuilder? loadingBuilder,
ImageErrorWidgetBuilder? errorBuilder,
double? width, //宽度
double? height,//高度
Color? color,//如果非null，会根据colorBlendMode将color和图片像素混合
Animation<double>? opacity,
BlendMode? colorBlendMode,//混合模式
BoxFit? fit,//图片fit
AlignmentGeometry alignment = Alignment.center,//对其方式
ImageRepeat repeat = ImageRepeat.noRepeat,//repeat
Rect? centerSlice,// 定义不拉伸的区域
bool matchTextDirection = false,
bool gaplessPlayback = false,
bool isAntiAlias = false,//反锯齿
FilterQuality filterQuality = FilterQuality.low}
)
```

- alignment： 图片怎么对其。
- centerSlice： center部分水平垂直都拉伸，上下部分水平拉伸，左右部分垂直拉伸。
- color：//如果非null，会根据colorBlendMode将color和图片像素混合
- colorBlendMode： 很多，感兴趣可以看看，平时应该不常用
- errorBuilder：图片加载错误时，显示的widget
- filterQuality：渲染的quality，如果你的图片质量很高，像素也适合屏幕像素，那么渲染质量优化就没什么优化空间，这个时候你可以指定FilterQuality.none。
- fit： 如何显示image
  - contain：保持比例缩放，刚好可以容纳整个图片![img](https://flutter.github.io/assets-for-api-docs/assets/painting/box_fit_contain.png)
  - cover：保持比例缩放，刚好宽度或者高度刚好能占满容器![img](https://flutter.github.io/assets-for-api-docs/assets/painting/box_fit_cover.png)
  - fill：拉伸，占满整个容器![img](https://flutter.github.io/assets-for-api-docs/assets/painting/box_fit_fill.png)
  - fitHeight: 保持比例缩放，让高度刚好占满容器![img](https://flutter.github.io/assets-for-api-docs/assets/painting/box_fit_fitHeight.png)
  - fitWidth：保持比例缩放，让宽度刚好占满容器![img](https://flutter.github.io/assets-for-api-docs/assets/painting/box_fit_fitWidth.png)
  - none：不做任何缩放，按实际大小显示![img](https://flutter.github.io/assets-for-api-docs/assets/painting/box_fit_none.png)
  - scaleDown：如果图片大了，效果同contain，图片能放得下同none![img](https://flutter.github.io/assets-for-api-docs/assets/painting/box_fit_scaleDown.png)
- frameBuilder: 如果这个为null，图片会在第一帧准备好后立马显示出来。你可以通过设置这个来添加placeholder，或者给图片显示时添加动效，比如渐变显示。
- gaplessPlayback： 当图片改变前，是继续显示老图片(true)，还是还是空白(false)。比如，你的头像，当前显示用户A的，现在切换用户了B，但B的头像获取失败了
  - gaplessPlayback=true，显示用户A的头像
  - gaplessPlayback=false，显示空白
- height： 高度
- Width:宽度
- image： 要显示的图片
- isAntiAlias: 是否开启反锯齿
- loadingBuilder: 加载中显示的widget，builder的参数会有进度信息，如果你只是想显示一个placeholder，那么用framebuilder，因为loadingBuilder会根据进度多次刷新，如果你没用到进度就可以用frameBuilder，避免频繁更新。
- opacity: opacity的动画
- repeat: 空间足够时是否重复图片

### Image的其他构造方法

#### Image.asset

从asset中，初始化一个图片

```dart
Image.asset('icons/heart.png')
Image.asset('icons/heart.png', package: 'my_icons')  
```

```dart
Image.asset(
String name,
{Key? key,
AssetBundle? bundle,
ImageFrameBuilder? frameBuilder,
ImageErrorWidgetBuilder? errorBuilder,
....
int? cacheWidth,
int? cacheHeight}
)
```

#### Image.file

从File初始化Image

```dart
Image.file(
File file,
{Key? key,
double scale = 1.0,
ImageFrameBuilder? frameBuilder,
ImageErrorWidgetBuilder? errorBuilder,
...
int? cacheWidth,
int? cacheHeight}
)
```

#### Image.memory

从bytes初始化

```dart
Image.memory(
Uint8List bytes,
{Key? key,
double scale = 1.0,
ImageFrameBuilder? frameBuilder,
ImageErrorWidgetBuilder? errorBuilder,
 ....
int? cacheWidth,
int? cacheHeight}
)
```

#### Image.network

网络图片

```dart
Image.network(
String src,
{Key? key,
double scale = 1.0,
ImageFrameBuilder? frameBuilder,
ImageLoadingBuilder? loadingBuilder,
ImageErrorWidgetBuilder? errorBuilder,
...
Map<String, String>? headers,
int? cacheWidth,
int? cacheHeight}
)
```

### FadeInImage

FadeInImage提供了直接设置placeholder和fade in效果的Image。

```dart
const FadeInImage(
{Key? key,
required ImageProvider<Object> placeholder,// placeHolder
ImageErrorWidgetBuilder? placeholderErrorBuilder,//placeHolder错误的widget
required ImageProvider<Object> image,//image
 //fade相关
Duration fadeOutDuration = const Duration(milliseconds: 300),
Curve fadeOutCurve = Curves.easeOut,
Duration fadeInDuration = const Duration(milliseconds: 700),
Curve fadeInCurve = Curves.easeIn,
BoxFit? placeholderFit,
 ....
}
)
```

#### FadeInImage.assetNetwork

placeHolder是asset，image是Network

```dart
FadeInImage.assetNetwork(
{Key? key,
required String placeholder,
required String image,
AssetBundle? bundle,
 .....
}
)
```

#### FadeInImage.memoryNetwork

placeholder是memory，image是network

```dart
FadeInImage.memoryNetwork(
{Key? key,
required Uint8List placeholder,
required String image,
.....
}
)

```

