---
title: 如何用XcodeKit编写一个XcodeExtension?
tags: [Xcode]
---
![HEADer](./Header.png)
Xcode提供了XcodeKit，来允许我们编写Xcode的扩展。但是这个Extension功能有限，只能处理当前打开的文件的源码。
我们可以用来：格式化、自动生成代码等。
常用的Extension有XCFormat，可以格式化Swift和OC代码，可以在AppStore中下载。
整体开发插件的功能还是比较简单，我们从头演示一个移除一行开头的数字的插件。

<!--truncate-->

## 创建Xcode Extension工程

### 创建一个macOS工程

![image-20211129180100344](https://tva1.sinaimg.cn/large/008i3skNgy1gww6clhtzij313a0do0u1.jpg)

这个macOS工程，对应从App Store下载完Extension后，在桌面上生成的那个App。你可以在这个App中做Extension设置相关的界面。

### 新建一个Xcode Source Editor Extention Target

![截屏2021-11-29 下午6.09.11](https://tva1.sinaimg.cn/large/008i3skNgy1gww6l504ldj313y0cydh7.jpg)

### 运行Extension Target

点击运行Extension Target，选择Xcode，此时会打开一个灰色的Xcode。

打开我们的插件的macOS工程。

选择`Editor`菜单，底部就出现了我们的自定义菜单。

![image-20211129182015367](https://tva1.sinaimg.cn/large/008i3skNgy1gww6wlndiej30tq05ct95.jpg)

如果菜单没有出现，那么请修改一下Extension Target中XcodeKit的链接方式，选择`Embed & Sign`。

![image-20211129182127182](https://tva1.sinaimg.cn/large/008i3skNgy1gww6xtzyhhj319u0k2gnk.jpg)

## Xcode Source Editor Extention

默认的`Xcode Source Editor Extention`会为你生成两个文件：

- `SourceEditorExtension`:  这个文件定义你小菜单中的内容和extension启动时的回调。
- `SourceEditorCommand`: 是小菜单中的命令对应的实现类。

### 小菜单的定义

小菜单的定义有两种方式，一种是通过`SourceEditorExtension`的代码定义。一种是通过`Info.plist`定义。代码定义的优先级更高，会覆盖Info.plist中的定义。

#### 在Info.plist中定义

![image-20211129183151859](https://tva1.sinaimg.cn/large/008i3skNgy1gww78nx1j2j318i0ceq5g.jpg)

每个命令就是小菜单中的一个命令对应。

- XCSourceEditorCommandClassName： 这个命令对应的实现类。格式是moduleName + 实现类的类名： `$(PRODUCT_MODULE_NAME).YourImplClassName`。
- XCSourceEditorCommandIdentifier：你的这个命令的一个唯一id。格式是bundleId +一个字符串： `$(PRODUCT_BUNDLE_IDENTIFIER).SourceEditorCommand`
- XCSourceEditorCommandName：菜单中出现的命令的名字

#### 在SourceEditorExtension中定义小菜单

```swift
class SourceEditorExtension: NSObject, XCSourceEditorExtension {
    
    /*
    func extensionDidFinishLaunching() {
        // If your extension needs to do any work at launch, implement this optional method.
    }
    */
    
    
    var commandDefinitions: [[XCSourceEditorCommandDefinitionKey: Any]] {
        // If your extension needs to return a collection of command definitions that differs from those in its Info.plist, implement this optional property getter.
        let command: [XCSourceEditorCommandDefinitionKey: Any] = [
            //格式moduleName.命令实现类的类名
            .classNameKey: "GxEditorToolsExtension.SourceEditorCommand",
            //格式bundleId.自定义字符串
            .identifierKey: "com.haixue.GxXcodeEditorTools.GxEditorToolsExtension.removeLinePrefixNum",
            //自定义名称
            .nameKey: "我的小菜单"
        ]
        return [command]
    }
    
}

```



![image-20211129184031347](https://tva1.sinaimg.cn/large/008i3skNgy1gww7hohzb6j30ok05gaag.jpg)



### 命令的实现

实现类都遵循`XCSourceEditorCommand`协议。

当我们点击小菜单，会通过command的`XCSourceEditorCommandClassName`找到对应的实现类。调用实现类的`func perform(...)`方法。

我们看到新建项目默认为我们生成了一个command模板SourceEditorCommand。

```swift
class SourceEditorCommand: NSObject, XCSourceEditorCommand {
    
    func perform(with invocation: XCSourceEditorCommandInvocation, completionHandler: @escaping (Error?) -> Void ) -> Void {
        // Implement your command here, invoking the completion handler when done. Pass it nil on success, and an NSError on failure.
        
        completionHandler(nil)
    }
    
}
```

### 实现我们自己的命令

```swift
import Foundation
import XcodeKit

class RemoveLinePrefixNumCommand: NSObject, XCSourceEditorCommand {
    
    func perform(with invocation: XCSourceEditorCommandInvocation, completionHandler: @escaping (Error?) -> Void ) -> Void {
        // Implement your command here, invoking the completion handler when done. Pass it nil on success, and an NSError on failure.
        let lines = invocation.buffer.lines
        let result = lines.map { "\($0)" }.map{ self.removePrefixNum(str: $0) }
        invocation.buffer.lines.removeAllObjects()
        invocation.buffer.lines.addObjects(from: result)        
        completionHandler(nil)
    }
    
    func removePrefixNum(str: String) -> String {
        var chars: [Character] = []
        //空格和数字
        let sets: Set<Character> = [" ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        var shouldCheck = true
        for c in str {
            if shouldCheck {
                if sets.contains(c) {
                    chars.append(" ")
                } else {
                    chars.append(c)
                    shouldCheck = false
                }
            } else{
                chars.append(c)
            }
        }
        return String(chars)
    }
}

```

```objective-c
//可以看到invocation有用的也只有一个Buffer对象
@interface XCSourceEditorCommandInvocation : NSObject
/** The identifier of the command the user invoked. */
@property (readonly, copy) NSString *commandIdentifier;
/** The buffer of source text on which the command can operate. */
@property (readonly, strong) XCSourceTextBuffer *buffer;
@property (copy) void (^cancellationHandler)(void);
@end
```

```objective-c
///buffer，又只能操作tab、lines、selections。
@interface XCSourceTextBuffer : NSObject

@property (readonly, copy) NSString *contentUTI;
@property (readonly) NSInteger tabWidth;
@property (readonly) NSInteger indentationWidth;
@property (readonly) BOOL usesTabsForIndentation;

@property (readonly, strong) NSMutableArray <NSString *> *lines;
@property (readonly, strong) NSMutableArray <XCSourceTextRange *> *selections;
@property (copy) NSString *completeBuffer;
@end
```

xcodeKit只能操作文本，像语法解析等都得借助别的工具来实现。

### 调试

在工程中打上断点，点击运行。

在灰色xcode中打开我们工程，点击小菜单。就会进入我们断点。

### 集成到Xcode的Editor菜单

进入**系统偏好设置**--**扩展**，选中我们的插件钩上即可

![image-20211129234423601](https://tva1.sinaimg.cn/large/008i3skNgy1gwwg9umm74j30xw0oc0uo.jpg)

### 制作安装包

`archive` ，然后选择copy app，得到一个.app

![image-20211129235140936](https://tva1.sinaimg.cn/large/008i3skNly1gwwghg4w4tj311q0lydgo.jpg)

![image-20211129235317200](https://tva1.sinaimg.cn/large/008i3skNly1gwwgj43el5j30t20jsac5.jpg)

新建一个文件夹，将.app和应用程序的提升文件一起放入，重命名提升文件为Application。

![image-20211129235452152](https://tva1.sinaimg.cn/large/008i3skNly1gwwgkqyjeaj30f405s3yh.jpg)

打开磁盘工具

![image-20211129235529816](https://tva1.sinaimg.cn/large/008i3skNly1gwwglezhl6j30li0ti75q.jpg)

![image-20211129235549564](https://tva1.sinaimg.cn/large/008i3skNly1gwwglrcau8j30v4084ab6.jpg)

选择刚刚的文件夹，就制作成了dmg。
