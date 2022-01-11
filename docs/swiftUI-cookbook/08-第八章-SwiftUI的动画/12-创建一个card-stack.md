---
title: 12、创建一个card-stack
tags: [swiftUI]
---

还记得我们自定义UICollectionLayout时做的那种卡片效果么，多个卡片叠在一起，我们可以用滑动手势将顶部卡片移走，显示出下面的卡片。现在我们用swiftui实现同样的功能。

## Getting ready

首先，创建一个新项目：**SwipeableCards**

## How to do it…

1. 首先，我们创建一个User数据结构代表每个卡片的数据
```swift
struct User: Identifiable, Equatable {
    var id: Int
    let firstName: String
    let lastName: String
    let start: Color
    let end: Color
}
```

2. 在ContentView中准备一点数据
```swift
struct ContentView: View {
    @State  private var users: [User] = [
        User(id: 0, firstName: "Mark", lastName: "Bennett", start: .red, end: .green),
        User(id: 1, firstName: "John", lastName: "Lewis", start: .green, end: .orange),
        User(id: 2, firstName: "Joan", lastName: "Mince", start: .blue, end: .green),
        User(id: 3, firstName: "Liz", lastName: "Garret", start: .orange, end: .purple),
        User(id: 4, firstName: "Lola", lastName: "Pince", start: .yellow, end: .gray),
        User(id: 5, firstName: "Jim", lastName: "Beam", start: .pink, end: .yellow),
        User(id: 6, firstName: "Tom", lastName: "Waits", start: .purple, end: .blue),
        User(id: 7, firstName: "Mike", lastName: "Rooney", start: .black, end: .gray),
        User(id: 8, firstName: "Jane", lastName: "Doe", start: .red, end: .green),
    ]
    var body: some View {
    }
}
```

3. 添加一个CardView到ContentView中
```swift
var body: some View {
    GeometryReader { geometry in
        ZStack {
            ForEach(users) { user in
                if user.id > users.maxId - 4 {
                    CardView(user: user, onRemove: { removedUser in
                        users.removeAll { $0.id == removedUser.id }
                    }).animation(.spring(), value: users)
                        .frame(width: users.cardWidth(in: geometry, userId: user.id), height: 400)
                        .offset(x: 0, y: users.cardOffset(userId: user.id))
                }
            }
        }
    }.padding()
}
```

4. 再添加一个extention计算maxId
```swift
extension Array where Element == User {
    var maxId: Int { map { $0.id }.max() ?? 0 }
    func cardOffset(userId: Int) -> Double {
        Double(count - 1 - userId) * 8.0
    }
    func cardWidth(in geometry: GeometryProxy, userId: Int) -> Double {
        geometry.size.width - cardOffset(userId: userId)
    }
}
```

5. 实现我们的CardView
```swift
extension DragGesture.Value {
    func percentage(in geometry: GeometryProxy) -> Double {
        abs(translation.width / geometry.size.width)
    }
}
struct CardView: View {
    @State private var translation: CGSize = .zero
    private var user: User
    private var onRemove: (_ user: User) -> Void
    private var threshold: CGFloat = 0.5
    init(user: User, onRemove: @escaping (_ user: User)-> Void) {
        self.user = user
        self.onRemove = onRemove
    }
    var body: some View {
        GeometryReader { geometry in
            VStack(alignment: .leading, spacing: 20) {
                Rectangle()
                    .fill(LinearGradient(gradient:Gradient(colors: [user.start, user.end]), startPoint: .topLeading, endPoint: .bottomTrailing))
                    .cornerRadius(10)
                    .frame(width: geometry.size.width - 40, height: geometry.size.height * 0.65)
                Text("\(user.firstName) \(user.lastName)")
                    .font(.title)
                    .bold()
            }.padding(20)
            .background(Color.white)
            .cornerRadius(8)
            .shadow(radius: 5)
            .animation(.spring(), value: translation)
            .offset(x: translation.width, y: 0)
            .rotationEffect(.degrees(Double(translation.width / geometry.size.width) * 20), anchor: .bottom)
            .gesture(
                DragGesture().onChanged({ value in
                    translation = value.translation
                }).onEnded({ value in
                    if value.percentage(in: geometry) > self.threshold {
                        onRemove(user)
                    } else {
                        translation = .zero
                    }
                })
            )
        }
}

```

![Figure_8.23_B17962](https://tva1.sinaimg.cn/large/008i3skNgy1gya5i4nw25j30b40b9mxi.jpg)

## How it works…

尽管代码比较长，但是还是挺简单的。

我们通过限制，只显示4个卡片,如果你想要显示更多，可修改设置

```swift
if user.id > self.users.maxId - 4 {
```

