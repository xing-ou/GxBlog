---
title: 使用DocC构建交互教程
tags: [wwdc, DocC]
description: 介绍如何使用DocC构建交互教程。
---

Tutorials是一种高度交互的文档形式，为了使编写它们变得容易，我们扩展了 markdown 以包含指令。指令为创作类似内容的教程提供了结构。

![image-20211122114154752](https://tva1.sinaimg.cn/large/008i3skNgy1gwns21jg0xj316g0msmyl.jpg)

## Table Of Contents Page

这是Tutorials的入口， 在这里定义入口界面。入口界面有一定的格式，如下：

![image-20211122114432339](https://tva1.sinaimg.cn/large/008i3skNgy1gwns4q5fj7j30hu0pcaao.jpg)

### 如何添加Table Of Contents Page?

在File->New->Documentation->Tutorial Table Of Contents File。

![image-20211122114648359](https://tva1.sinaimg.cn/large/008i3skNgy1gwns72zcykj315u0bujso.jpg)



之后我们来看看特殊指令。

## @Tutorials

Table Of Contents Page的名称，通常是你的framework或者package名称。

这个name会出现在Tutorial或者

```swift
@Tutorials(name: "SlothCreator") {}
```

### @Intro

```swift
@Tutorials(name: "SlothCreator") {
    @Intro(title: "Meet SlothCreator") {
        Create, catalog, and care for sloths using SlothCreator.
        Get started with SlothCreator by building the demo app _Slothy_.
        
        @Image(source: slothcreator-intro.png, alt: "An illustration of 3 iPhones in portrait mode, displaying the UI of finding, creating, and taking care of a sloth in Slothy — the sample app that you build in this collection of tutorials.")
    }
    ...
}
```

![image-20211122134933263](https://tva1.sinaimg.cn/large/008i3skNgy1gwnvqs2g8bj315c0piq5v.jpg)

### @Image

`@Intro`可以通过这个包含图片

### @Video

`@Intro`可以通过这个包含视频

### @Chapter

`@Intro`可以通过这个包含这个来对相关Tutorial进行分组。

```swift
@Tutorials(name: "SlothCreator") {
    
    ...
    
    @Chapter(name: "SlothCreator Essentials") {
        @Image(source: "chapter1-slothcreatorEssentials.png", alt: "A wireframe of an app interface that has an outline of a sloth and four buttons below the sloth. The buttons display the following symbols, from left to right: snowflake, fire, wind, and lightning.")
        
        Create custom sloths and edit their attributes and powers using SlothCreator.
        
        @TutorialReference(tutorial: "doc:Creating-Custom-Sloths")
    }

    ...
    
}
```

![image-20211122141835280](https://tva1.sinaimg.cn/large/008i3skNgy1gwnwkz5ae0j313m0jign6.jpg)

### @Volume

`@Intro`可以通过这个包含这个来对相关Chapter进行分组。类似于就是在Chapter底部再增加一个Header。

```swift
@Volume(name: "Climbing Higher111") {
        Taking your sloths to the next level.111
        @Image(source: haixuerequest.png, alt: "happy new year")
        @Chapter(name: "this is chapter one") {
            this chapter one detail
            
            @Image(source: haixuerequest.png, alt: "happy new year")
            
            @TutorialReference(tutorial: "doc:Tutorial001")
        }
    }
```

![image-20211122142656757](https://tva1.sinaimg.cn/large/008i3skNgy1gwnwtoidiaj30wu0u0q51.jpg)

###  @TutorialReference

`@Chapter`中用这个来代表这个Chapter下的某个Tutorial。通过`"doc:名称"`引用。会解析对应doc的名称和时长，显示在Chapter中。

```swift
 @Chapter(name: "SlothCreator Essentials") {
        @Image(source: chapter1-slothcreatorEssentials.png, alt: "A wireframe of an app interface that has an outline of a sloth and four buttons below the sloth. The buttons display the following symbols, from left to right: snowflake, fire, wind, and lightning.")
        
        Create custom sloths and edit their attributes and powers using SlothCreator.
        
        @TutorialReference(tutorial: "doc:Creating-Custom-Sloths")
  }
```

### @Resources

显示相关资源的链接，比如：代码，视频等。

![image-20211122144024298](https://tva1.sinaimg.cn/large/008i3skNgy1gwnx7oda4lj30u00w2jua.jpg)



### @Documentation

`@Resources`中用这个显示url链接。

```swift
@Resources {
        Explore more resources for learning about sloths.

        @Documentation(destination: "https://www.example.com/sloth-docs/") {
            Browse and search sloth-related documentation.

            - [SlothCreator API](https://www.example.com/sloth-docs/slothcreator/)
            - [Sloth Technical Specification](https://www.example.com/sloth-docs/sloth-spec/)
        }

  }
```

### @Downloads

`@Resources`中用这个显示下载链接。

```swift
 @Resources {
        Explore more resources for learning about sloths.

        @Downloads(destination: "https://www.example.com/sloth-downloads/") {
            Download resources that make sloth development even more fun.

            - [Sloth Wallpaper](https://www.example.com/sloth-downloads/wallpaper/)
            - [Sloth Coloring Pages](https://www.example.com/sloth-downloads/coloring/)
            - [Sloth Apps](https://www.example.com/sloth-downloads/apps/)
        }

    }
```

### @Forums

`@Resources`中用这个显示Forums。

```swift
   @Resources {
        Explore more resources for learning about sloths.

        @Forums(destination: "https://www.example.com/sloth-forums/") {
            Get support for your sloths and connect with others.

            - [SlothCreator Help: Get Assistance with Sloth Development.](https://www.example.com/sloth-forums/help/)
            - [Sloth Talk: Meet Others Who Like Sloths Too](https://www.example.com/sloth-forums/speedy/)
        }
    }
```

### @SampleCode

`@Resources`中用这个显示SampleCode。

```swift
    @Resources {
        Explore more resources for learning about sloths.

        @SampleCode(destination: "https://www.example.com/sloth-code/") {
            Download and explore sample code projects to get to know SlothCreator.

            - [SlothyRoad: Building a Fun, Yet Slow Game](https://www.example.com/sloth-code/slothyroad/)
            - [SpeedySloth: Designing a Faster, More Powerful Sloth](https://www.example.com/sloth-code/speedy/)
            - [SmoothSloth: Adding a Smooth and Glossy Coat to Your Sloth](https://www.example.com/sloth-code/smooth/)
        }
    }
```

### @Videos

`@Resources`中用这个显示多个视频链接。

```swift
@Resources {
        Explore more resources for learning about sloths.

        @Videos(destination: "https://www.example.com/sloth-videos/") {
            Watch cute videos of sloths climbing, eating, and sleeping.

            - [Treetop Breakfast](https://www.example.com/sloth-videos/breakfast/)
            - [Slow Ascent](https://www.example.com/sloth-videos/climb/)
            - [Rest Time](https://www.example.com/sloth-videos/snoozing/)
        }
    }
```

## @Tutorial

代表这是一篇Tutorial。

其中projectFiles是可以省略不设置的。分别控制下图红框的两个地方。

```swift
@Tutorial(time: 30, projectFiles: "SlothCreatorFiles.zip") {

    ...

}
```

![image-20211122144805599](https://tva1.sinaimg.cn/large/008i3skNgy1gwnxfocjr9j30wc0tuwir.jpg)

### @XcodeRequirement

控制上图中的xcode那个地方的显示。

```swift
@Tutorial(time: 30) {
    @XcodeRequirement(
        title: "Xcode 12", 
        destination: "https://developer.apple.com/download/")
    
    ...

}
```

### @Intro

控制Tutorial的Header中的部分显示。

除了加`@Image`还可以加`@Video`。

```swift
@Tutorials(name: "SlothCreator") {
    @Intro(title: "这个是简介title") {
        这个是简介内容
        @Image(source: slothcreator-intro.png, alt: "这个是简介图片")
    }
    
    ...
    
}
```



![image-20211122145226704](https://tva1.sinaimg.cn/large/008i3skNgy1gwnxk7jq5cj30q00i8q40.jpg)

### @Section

`@Tutorail`中 对一些列相关`Step`的分组。

```swift
@Tutorial(time: 30) {
    
    ...
    
    @Section(title: "Add a customization view") {
        @ContentAndMedia {
            Add the ability for users to customize sloths and select their powers.
            
            @Image(source: 01-creating-section2.png, alt: "An outline of a sloth surrounded by four power type icons. The power type icons are arranged in the following order, clockwise from the top: fire, wind, lightning, and ice.")
        }
        
        @Steps {
            @Step {
                Create a new SwiftUI View file named `CustomizedSlothView.swift`.
                
                @Code(name: "CustomizedSlothView.swift", file: 01-creating-code-02-01.swift) {
                    @Image(source: preview-01-creating-code-02-01.png, alt: "A screenshot from the Xcode preview as it would appear on iPhone, with the text, Hello, World!, centered in the middle of the display.")
                }
            }    
            
            @Step {
                
                ...
                
            }    
            
            ...
 
        }
    }
}
```

![image-20211122145730808](https://tva1.sinaimg.cn/large/008i3skNgy1gwnxph7drbj30su0huq3t.jpg)

### @ContentAndMedia

`@Section`中用来显示text 或者Image或者Video的，如上图。

### @Stack

用来分组1-3个`@ContentAndMedia`的。

```swift
    @Section(title: "Add a customization view") {
        @ContentAndMedia {
            Add the ability for users to customize sloths and select their powers.
            
            @Image(source: 01-creating-section2.png, alt: "An outline of a sloth surrounded by four power type icons. The power type icons are arranged in the following order, clockwise from the top: fire, wind, lightning, and ice.")
        }
        
        @Stack {
            @ContentAndMedia {
                ...
            }

            @ContentAndMedia {            
                ...            
            }

            @ContentAndMedia {
                ...
            }
        
        }            
        ...
 
    }
```

![image-20211122150152725](https://tva1.sinaimg.cn/large/008i3skNgy1gwnxu18yc9j30u00yh0u0.jpg)

### @Steps

定义一系列的`Step`，你往下滑动时，会自动切换不同Step的内容。

```swift
@Tutorial(time: 30) {
    
    ...
    
    @Section(title: "Add a customization view") {
        @ContentAndMedia {

            ...

        }
        
        @Steps {
            @Step {
                Create a new SwiftUI View file named `CustomizedSlothView.swift`.
                
                @Code(name: "CustomizedSlothView.swift", file: 01-creating-code-02-01.swift) {
                    @Image(source: preview-01-creating-code-02-01.png, alt: "A screenshot from the Xcode preview as it would appear on iPhone, with the text, Hello, World!, centered in the middle of the display.")
                }
            }    
            
            @Step {
                Import the `SlothCreator` package.
                
                @Code(name: "CustomizedSlothView.swift", file: 01-creating-code-02-02.swift) {
                    @Image(source: preview-01-creating-code-02-01.png, alt: "A screenshot from the Xcode preview as it would appear on iPhone, with the text, Hello, World!, centered in the middle of the display.")
                }
            }    
            
            @Step {
                Create a ``Sloth`` state variable called `sloth`.
                
                @Code(name: "CustomizedSlothView.swift", file: 01-creating-code-02-03.swift) {
                    @Image(source: preview-01-creating-code-02-01.png, alt: "A screenshot from the Xcode preview as it would appear on iPhone, with the text, Hello, World!, centered in the middle of the display.")
                }
            }    

            ...

        }
    }
}
```

![image-20211122150354741](https://tva1.sinaimg.cn/large/008i3skNgy1gwnxw4xx0cj30t00giaav.jpg)

### @Step

`@Steps`中的一步。

```swift
The following steps display your customized sloth view in the SwiftUI preview.

@Step {
    Add the `sloth` parameter to initialize the `CustomizedSlothView` in the preview provider, and pass a new `Sloth` instance for the value.
    
    @Code(name: "CustomizedSlothView.swift", file: 01-creating-code-02-07.swift) {
        @Image(source: preview-01-creating-code-02-07.png, alt: "A portrait of a generic sloth displayed in the center of the canvas.")
    }
}
```

![image-20211122150537568](https://tva1.sinaimg.cn/large/008i3skNgy1gwnxxx3jyvj30t80eu0u0.jpg)

### @Code

`@Step`中用于显示代码的。你可以在Catalog文件夹下单独建个文件夹保存demo代码。

可以有4个参数:

- `name`:  代码顶部的文件名称
- `file`: 代码内容文件
- `previousFile`: 上一步的文件，会用这个来显示diff。
- `reset` : 设为true来关闭和`previousFile`的diff显示。

```swift
@Code(name: "CustomizedSlothView.swift", file: "01-creating-code-02-07.swift") {
                    @Image(source: "preview-01-creating-code-02-07.png", alt: "A portrait of a generic sloth displayed in the center of the canvas.")
                }
```

![image-20211122151614084](https://tva1.sinaimg.cn/large/008i3skNgy1gwny8z8zxcj30t00g8wg4.jpg)



###  @Assessments

在`@Turorial`最后的给用户的一个小测验。

```swift
    @Assessments {
        @MultipleChoice {
            What element did you use to add space around and between your views?

            @Choice(isCorrect: false) {
                A: A state variable.

                @Justification(reaction: "Try again!") {
                    Remember, it's something you used to arrange views vertically.
                }
            }

            @Choice(isCorrect: true) {
                B: A `VStack` with trailing padding.

                @Justification(reaction: "That's right!") {
                    A `VStack` arranges views in a vertical line.
                }
            }

            @Choice(isCorrect: false) {
                C: trailing padding.
                @Justification(reaction: "Try again11!") {
                    Remember111, it's something you used to arrange views vertically.
                }
            }
        }  
    }
```

![image-20211122152507454](https://tva1.sinaimg.cn/large/008i3skNgy1gwnyi7ij6sj30wd0u0wfz.jpg)

### @MultipleChoice

`@Assessments`中的多选。

### @Choice

`@MultipleChoice`中的一个选项。可以包含`@Justification`和`@Image`

### @Justification

`@MultipleChoice`中的提示。