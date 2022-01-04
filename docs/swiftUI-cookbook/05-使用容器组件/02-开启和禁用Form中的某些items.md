---
title: 2、开启和禁用Form中的某些items
tags: [swiftUI]
---
表单中的某些地方可能有额外的要求，例如最小文本长度或组合大写和小写字符。我们可能想要根据 用户的输入，禁用提交按钮，直到满足所有要求。

本章，我们将创建一个登录视图，只有当用户在用户名和密码字段中输入一些内容时，提交按钮才会启用。

## Getting ready

新建要给SwiftUI项目**FormFieldDisable**

## How to do it…

1. 新建一个**LoginView**, 并添加一些状态
```swift
struct LoginView: View {
    @State private var username = ""
    @State private var password = ""
    var body: some View {
        Text("")
    }
}
```

2. 实现UI

```swift
VStack {
    Text("Dungeons and Wagons")
        .fontWeight(.heavy)
        .foregroundColor(.blue)
        .font(.largeTitle)
        .padding(.bottom, 30)
    Image(systemName: "person.circle")
         .font(.system(size: 150))
         .foregroundColor(.gray)
         .padding(.bottom,40)
    Group{
        TextField("Username", text: $username)
        SecureField("Password", text: $password)
    }.padding().overlay(RoundedRectangle(cornerRadius: 10).stroke(Color.black, lineWidth: 2))
    Button {
        print("Login clicked")
    } label: {
        Text("Login")
            .padding()
            .background((username.isEmpty || password.isEmpty) ?.gray : Color.blue)
            .foregroundColor(Color.white)
            .clipShape(Capsule())            
    }.disabled(username.isEmpty || password.isEmpty)
  }
```

3. 添加到ContentView中
```swift
struct ContentView: View {
    var body: some View {
        LoginView()
    }
}
```

![image-20211231185513737](https://tva1.sinaimg.cn/large/008i3skNgy1gxx7qu61rtj30c80p00t9.jpg)

## How it works…

**.disable（）**可以让按钮不响应事件。

我们还介绍了Group，将样式同时应用于group中的多个view。
