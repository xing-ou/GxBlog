---
title: SwiftUI专辑033-在Form中显示隐藏sections
tags: [swiftUI]
---
![headerimg](./Header.png)
Form提供了一种从用户那里获取信息的方法。但是表格很长时，用户在完成时会感到气馁，提交表格的人很少 意味着您的调查数据更少，您的应用程序注册更少，或者提供您收集的任何数据的人更少。

本章，我们将学习如何根据用户的输入显示/隐藏Form的附加地址部分。
<!--truncate-->
## Getting ready

新建一个SwiftUI项目：**SignUp**

## How to do it…

1. 新建一个**SignUpView**，并添加state
```swift 
struct SignUpView: View {
    @State private var fname = ""
    @State private var lname = ""
    @State private var street = ""
    @State private var city = ""
    @State private var zip = ""
    @State private var lessThanTwo = false
    @State private var username = ""
    @State private var password = ""
    var body: some View {
        Text(/*@START_MENU_TOKEN@*/"Hello, World!"/*@END_MENU_TOKEN@*/)
    }
}
```

2. 添加一个Form
```swift
var body: some View {
    NavigationView {
        Form {

        }.navigationTitle("Sign up")
    }
}
```

3. 添加一个section到Form里
```swift
Section(header: Text("Names")){
    TextField("First Name", text: $fname)
    TextField("Last Name" , text: $lname)
}
```

4. 再添加一个section
```swift
Section(header: Text("Current Address")){
    TextField("Street Address" , text: $street)
    TextField("City" , text: $city)
    TextField("Zip" , text: $zip)
}
```

5. 在zip后添加一个Toggle, 如果勾选了，才显示第三个section
```swift
Toggle(isOn: $lessThanTwo){
    Text("Have you lived here for 2+ years")
}
```

6. 添加第三个section，根据是否勾选显示和隐藏
```swift
if !lessThanTwo{
    Section(header: Text("Previous Address")) {
        TextField("Street Address" , text: $street)
        TextField("City" , text: $city)
        TextField("Zip" , text: $zip)
    }
}
```

7. 在添加一个section
```swift
Section(header:Text("Create Account Info")) {
    TextField("Create Username" , text: $username)
    SecureField("Password", text: $password)
}
```

8. 最后添加一个提交按钮
```swift
Button("Submit") {
    print("Form submit action here")
}
```

最终，当我们打开toggle时，不会显示不需要填写的section

![20211231183357](https://tva1.sinaimg.cn/large/008i3skNgy1gxx755o5a4j30af0l0gm2.jpg)

## How it works…

我们使用**if**条件语句来显示或隐藏表单中的部分字段。例如，仅当**lessThanTwo**变量的值设置为**true**时，才会显示表单的**Previous Address**部分。
