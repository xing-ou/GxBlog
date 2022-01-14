---
title: 3、Combine和Form
tags: [swiftUI, Combine]
---

本章，我们将实现一个简单的注册页面，其中包含一个用户名输入框和两个密码输入框，一个用于密码，另一个用于确认密码。

用户名最少6个字符，密码至少有八个字符，且由数字、大写字母、小写字母和特殊字符组成，例如*！*, *#* , *$*等等。此外，密码和确认密码必须匹配。当所有字段都有效时，我们可以进入下一页。

## Getting ready

首先，新建一个项目：**FormValidation**

## How to do it…

1. 首先，我们创建好我们的ViewModel
```swift
class SignupViewModel: ObservableObject {
  	//输入
    @Published var username = ""
    @Published var password = ""
    @Published var confirmPassword = ""
    //输出
    @Published var isValid = false
    @Published var usernameMessage = ""
    @Published var passwordMessage = ""
    private var cancellableSet: Set<AnyCancellable> = []
}
```

2. 我们开始准备逻辑
```swift
enum PasswordCheck {
    case valid
    case invalidLength
    case noMatch
    case weakPassword
}

extension SignupViewModel {
    // 用户名是否有效(至少6个字符)
    var usernameValidPublisher: AnyPublisher<Bool, Never> {
        return $username
            .debounce(for: 0.5, scheduler: RunLoop.main)
            .removeDuplicates()
            .map { $0.count >= 6 }
            .eraseToAnyPublisher()
    }
    //密码长度至少8位
    var validPasswordLengthPublisher: AnyPublisher<Bool, Never> {
        return $password
            .debounce(for: 0.5, scheduler: RunLoop.main, options: nil)
            .removeDuplicates()
            .map { $0.count >= 8 }
            .eraseToAnyPublisher()
    }
    //由数字和字母组成，至少有一个大写字母和一个特殊字符
    var strongPasswordPublisher: AnyPublisher<Bool, Never> {
        return $password
            .debounce(for: 0.2, scheduler: RunLoop.main, options: nil)
            .removeDuplicates()
            .map(\.isStrong)
            .eraseToAnyPublisher()
    }
    //两个密码匹配
    var matchingPasswordsPublisher: AnyPublisher<Bool, Never> {
        return Publishers.CombineLatest($password, $confirmPassword)
            .debounce(for: 0.2, scheduler: RunLoop.main, options: nil)
            .map { password, confirmedPassword in
                password == confirmedPassword
            }.eraseToAnyPublisher()
    }
    //密码有效
    var passwordValidPublisher: AnyPublisher<PasswordCheck, Never> {
        return Publishers.CombineLatest3(validPasswordLengthPublisher, strongPasswordPublisher, matchingPasswordsPublisher)
            .map { validLength, strong, matching in
                if (!validLength) { return .invalidLength }
                if (!strong) { return .weakPassword }
                if (!matching) { return .noMatch }
                return .valid
            }.eraseToAnyPublisher()
    }
    //整个Form有效
    var formValidPublisher: AnyPublisher<Bool, Never> {
        return Publishers.CombineLatest(usernameValidPublisher, passwordValidPublisher)
            .map { usernameIsValid, passwordIsValid in
                return usernameIsValid && (passwordIsValid == .valid)
            }.eraseToAnyPublisher()
    }
}

extension String {
    var isStrong: Bool {
        containsACharacter(from: .lowercaseLetters) &&//包含字母
        containsACharacter(from: .uppercaseLetters) &&
        containsACharacter(from: .decimalDigits) && //包含数字
        containsACharacter(from: .alphanumerics.inverted)
    }

    private func containsACharacter(from set: CharacterSet) -> Bool {
        rangeOfCharacter(from: set) != nil
    }
}
```

3. 开始绑定
```swift
class SignupViewModel: ObservableObject {
  ....
//绑定
init() {
    usernameValidPublisher
        .receive(on: RunLoop.main)
        .map { $0 ? "" : "Username must be at least 6 characters" }
        .assign(to: \.usernameMessage, on: self)
        .store(in: &cancellableSet)
    passwordValidPublisher
        .receive(on: RunLoop.main)
        .map { passwordCheck in
            switch passwordCheck {
            case .invalidLength:
                return "Password must be at least 8 characters long"
            case .noMatch:
                return "Passwords don't match"
            case .weakPassword:
                return "Password is too weak"
            default:
                return " "
            }
        }.assign(to: \.passwordMessage, on: self)
        .store(in: &cancellableSet)

    formValidPublisher
        .receive(on: RunLoop.main)
        .assign(to: \.isValid, on: self)
        .store(in: &cancellableSet)
}
}
```

4. 构建UI
```swift
struct CustomStyle: ViewModifier {
    func body(content: Content) -> some View {
        content
            .frame(height: 40)
            .background(Color.white)
            .cornerRadius(5)
    }
}

extension TextField {
    func custom() -> some View {
        modifier(CustomStyle())
            .autocapitalization(.none)
    }
}

extension SecureField {
    func custom() -> some View {
        modifier(CustomStyle())
    }
}

@available(iOS 15.0, *)
struct ContentView: View {
    @ObservedObject
    private var signupViewModel = SignupViewModel()

    var body: some View {
        ZStack {
            Color.yellow.opacity(0.2)
            VStack(spacing: 24) {
                VStack(alignment: .leading) {
                    Text(signupViewModel.usernameMessage)
                        .foregroundColor(.red)
                    TextField("Username", text: $signupViewModel.username)
                        .custom()
                }
                VStack(alignment: .leading) {
                    Text(signupViewModel.passwordMessage)
                        .foregroundColor(.red)
                    SecureField("Password", text: $signupViewModel.password)
                        .custom()
                    SecureField("Repeat Password", text: $signupViewModel.confirmPassword)
                        .custom()
                }
                Button {
                    print("Succesfully registered!")
                } label: {
                    Text("Register")
                        .foregroundColor(.white)
                        .frame(width: 100, height: 44)
                        .background(signupViewModel.isValid ? Color.green : Color.red)
                        .cornerRadius(10)
                }.disabled(!signupViewModel.isValid)
            }
            .padding(.horizontal, 24)
        }
        .edgesIgnoringSafeArea(.all)
    }
}
```

![Figure_10.6_B17962](https://tva1.sinaimg.cn/large/008i3skNgy1gyd888iflcj30b40b4gm2.jpg)

## How it works…

我们注意以下几点：

- 我们的每个publisher后面都有个**eraseToAnyPublisher()**, 原因是我们前面组合多个修饰符会创建一些复杂的嵌套类型，而我们希望的输出只是一个Publisher。通过eraseToAnyPublisher能将复杂的嵌套类型转换成一个Publisher。
- 我们通过 **.debounce()** ，防止用户快速输入时，产生大量的event。
- **.map(\.isStrong)**让我们能够以keypath作为参数，等价于下面的
```swift
.map { password in

    return password.isStrong

}
```

-  **Publishers.CombineLatest** 和 **Publishers.CombineLatest3**将多个publisher组合起来。