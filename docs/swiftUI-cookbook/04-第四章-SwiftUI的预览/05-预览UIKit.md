---
title: 5、预览UIKit
tags: [swiftUI]
---
如果您喜欢轻松预览 UI 更改，但您的项目又只是UIkit，那么请放心 因为你也可以在构建 UIKit 应用程序时使用这个强大的功能。

本章，我们将学习如何将UIViewController和UIView包装到 SwiftUI 视图中，然后使用实时预览。

## Getting ready

首先创建个普通storyboard工程：UIKitPreview

## How to do it

1. 新建一个swift文件**ViewControllerPreview**, 遵循UIViewControllerRepresentable
```swift
import UIKit
import SwiftUI
struct ViewControllerPreview: UIViewControllerRepresentable {
    let viewControllerBuilder: () -> UIViewController
    init(_ viewControllerBuilder: @escaping () -> UIViewController) {
        self.viewControllerBuilder = viewControllerBuilder
    }

    func makeUIViewController(context: Context) -> some UIViewController {
        return self.viewControllerBuilder()
    }
    func updateUIViewController(_ uiViewController: UIViewControllerType, context: Context) {
        
    }
}
```

2. 然后创建一个preview, 然后你就可以使用这个预览任何UIViewController了
```swift
struct ViewControllerPreview_Previews: PreviewProvider {
    static var previews: some View {
        ViewControllerPreview {
            MyViewController()
        }
    }
}
```

3. 写个viewcontroller

```swift
import SnapKit
class MyViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        self.setupView()
    }
    func setupView() {
        self.view.backgroundColor = UIColor.black.withAlphaComponent(0.5)
        self.contaienrView = UIView()
        self.contaienrView.backgroundColor = UIColor.white
        self.contaienrView.layer.cornerRadius = 8
        self.view.addSubview(self.contaienrView)
        self.contaienrView.snp.makeConstraints { make in
            make.center.equalToSuperview()
            make.width.equalTo(290)
            make.height.equalTo(162)
        }
        let textColor = UIColor(red: 0x27 / 255.0, green: 0x27 / 255.0, blue: 0x55 / 255.0, alpha: 1.0)
        self.titleLabel = UILabel()
        self.titleLabel.font = UIFont.systemFont(ofSize: 15)
        self.titleLabel.textColor = textColor
        self.titleLabel.text = "是否清除所有收藏习题记录"
        self.titleLabel.numberOfLines = 2
        self.contaienrView.addSubview(self.titleLabel)
        self.titleLabel.snp.makeConstraints { make in
            make.leading.equalToSuperview().offset(20)
            make.trailing.equalToSuperview().offset(-20)
            make.top.equalToSuperview().offset(20)
            make.height.equalTo(45)
        }
        
        self.descLabel = UILabel()
        self.descLabel.textColor = textColor.withAlphaComponent(0.5)
        self.descLabel.text = "清除后当前科目无错题记录，此操作不可恢复"
        self.descLabel.font = UIFont.systemFont(ofSize: 12)
        self.contaienrView.addSubview(self.descLabel)
        self.descLabel.snp.makeConstraints { make in
            make.leading.equalToSuperview().offset(20)
            make.trailing.equalToSuperview().offset(-20)
            make.top.equalTo(self.titleLabel.snp.bottom).offset(4)
            make.height.equalTo(20)
        }
        let sepColor = UIColor(red: 0xF0/255.0, green: 0xF0/255.0, blue: 0xF0/255.0, alpha: 1.0)
        self.hLine = UIView()
        self.hLine.backgroundColor = sepColor
        self.contaienrView.addSubview(self.hLine)
        self.hLine.snp.makeConstraints { make in
            make.leading.trailing.equalToSuperview()
            make.bottom.equalToSuperview().offset(-49)
            make.height.equalTo(1)
        }
        self.vLine = UIView()
        self.vLine.backgroundColor = sepColor
        self.contaienrView.addSubview(self.vLine)
        self.vLine.snp.makeConstraints { make in
            make.centerX.equalToSuperview()
            make.bottom.equalToSuperview()
            make.width.equalTo(1)
            make.height.equalTo(49)
        }
        
        self.clearBtn = UIButton(type: .custom)
        self.clearBtn.setTitle("清除", for: .normal)
        self.clearBtn.setTitleColor(textColor.withAlphaComponent(0.5), for: .normal)
        self.clearBtn.titleLabel?.font = UIFont.systemFont(ofSize: 15)
        self.contaienrView.addSubview(self.clearBtn)
        self.clearBtn.snp.makeConstraints { make in
            make.leading.bottom.equalToSuperview()
            make.trailing.equalTo(self.vLine.snp.leading)
            make.height.equalTo(49)
        }
        self.cancelBtn = UIButton(type: .custom)
        self.cancelBtn.setTitle("取消", for: .normal)
        self.cancelBtn.setTitleColor(UIColor(red: 0x33/255.0, green: 0x77/255.0, blue: 0xFF/255.0, alpha: 1.0), for: .normal)
        self.cancelBtn.titleLabel?.font = UIFont.systemFont(ofSize: 15, weight: .medium)
        self.contaienrView.addSubview(self.cancelBtn)
        self.cancelBtn.snp.makeConstraints { make in
            make.trailing.bottom.equalToSuperview()
            make.leading.equalTo(self.vLine.snp.trailing)
            make.height.equalTo(49)
        }
    }
    
    var contaienrView: UIView!
    var titleLabel: UILabel!
    var descLabel: UILabel!
    var hLine: UIView!
    var vLine: UIView!
    var clearBtn: UIButton!
    var cancelBtn: UIButton!
}
```

![image-20211231175113346](https://tva1.sinaimg.cn/large/008i3skNgy1gxx5w8hc5aj30hc0zsdgi.jpg)

## How it works

如果你想在SwiftUI中预览UIViewController，那么需要包裹成**UIViewControllerRepresentable**。

要实现**UIViewControllerRepresentable**, 我们需要实现两个方法 **makeUIViewController** 和 **updateUIViewController**.

makeUIViewController返回UIViewController，你再这里初始化你的viewcontroller。

**updateUIViewController**负责更新状态，我们demo中没有状态需要更新，就留空了。
