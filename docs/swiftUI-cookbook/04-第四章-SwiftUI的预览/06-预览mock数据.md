---
title: 6、预览mock数据
tags: [swiftUI]
---
通常我们获取数据是通过 API 调用。但这可能很耗时，并很快成为瓶颈。更快的选择是仅在构建时提供一些mock数据。

本章我们将在**Preview Content**文件夹下存储一些json，来模拟Api调用。

## Getting ready

首先新建一个SwiftUI项目**UsingMockDataForPreviews**

## How to do it

1. 首先准备一个json文件: insetsData.json
```swift
[
  {
      "id": 1,
    "imageName": "honeybee",
    "name": "Honey bee",
    "habitat": "Tropical climates",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida arcu ac. Felis imperdiet proin fermentum leo vel. Et netus et malesuada fames. Amet nisl suscipit adipiscing bibendum est ultricies integer."
  },
  {
      "id": 2,
    "imageName": "greenbrownfly",
    "name": "Green Fly",
    "habitat": "warm and moist climates",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida arcu ac. Felis imperdiet proin fermentum leo vel. Et netus et malesuada fames. Amet nisl suscipit adipiscing bibendum est ultricies integer."
  },
  {
      "id": 3,
    "imageName": "greenbug",
    "name": "Green bug",
    "habitat": "orchards and gardens",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida arcu ac. Felis imperdiet proin fermentum leo vel. Et netus et malesuada fames. Amet nisl suscipit adipiscing bibendum est ultricies integer."
  },
  {
      "id": 4,
    "imageName": "blackbeatle",
    "name": "Black Beatle",
    "habitat": "Tropical climates",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida arcu ac. Felis imperdiet proin fermentum leo vel. Et netus et malesuada fames. Amet nisl suscipit adipiscing bibendum est ultricies integer."
  },
  {
      "id": 5,
    "imageName": "brownspider",
    "name": "Brown Spider",
    "habitat": "warm and moist climates",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida arcu ac. Felis imperdiet proin fermentum leo vel. Et netus et malesuada fames. Amet nisl suscipit adipiscing bibendum est ultricies integer."
  },
  {
      "id": 6,
    "imageName": "bluedragonfly",
    "name": "Blue Dragonfly",
    "habitat": "around lakes and streams",
    "description": "Lorem ipsum dolor sit amet, consecte"
  },
  {
      "id": 7,
    "imageName": "brownblackbutterfly",
    "name": "Brown Black Butterfly",
    "habitat": "deciduous forests",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida arcu ac. Felis imperdiet proin fermentum leo vel. Et netus et malesuada fames. Amet nisl suscipit adipiscing bibendum est ultricies integer."
  },
  {
      "id": 8,
    "imageName": "grasshopper",
    "name": "Grasshopper",
    "habitat": "dry open habitat with lots of grass",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida arcu ac. Felis imperdiet proin fermentum leo vel. Et netus et malesuada fames. Amet nisl suscipit adipiscing bibendum est ultricies integer."
  }
]
```

2. 创建一个model和json对应
```swift
struct Insect : Decodable, Identifiable{
    var id: Int
    var imageName: String
    var name:String
    var habitat:String
    var description:String
}

let testInsect = Insect(id: 1, imageName: "grasshopper", name: "grass", habitat: "rocks", description: "none")

```

3. 在**ContentView.swift**中增加UI代码,显示数据
```swift
struct ContentView: View {
    var insects:[Insect] = []
    var body: some View {
        NavigationView {
            List {
                ForEach(insects) { insect in
                    HStack {
                        Image(insect.imageName)
                            .resizable()
                            .aspectRatio(contentMode: .fit)
                            .clipShape(Rectangle())
                            .frame(width: 100, height: 80)
                        VStack(alignment: .leading) {
                            Text(insect.name).font(.title)
                            Text(insect.habitat)
                        }.padding(.vertical)
                    }
                }

            }.navigationBarTitle("Insects")
        }
    }
}
```

4. 在预览中传入mock数据
```swift
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(insects: Self.testInsects)
    }
    
    static var testInsects : [Insect]{
        guard let url = Bundle.main.url(forResource:"insetsData", withExtension: "json"),
            let data = try? Data(contentsOf: url) else{
                return[]
        }
        let decoder  = JSONDecoder()
        let array = try?decoder.decode([Insect].self, from: data)
        return array ??  [testInsect]
    }
}
```

![image-20211231181222575](https://tva1.sinaimg.cn/large/008i3skNgy1gxx6iafb9cj30dk0qc0tt.jpg)

## How it works

在preview中，我们读取json文件，然后转成modle数组，得到mock数据。

然后将Mock数据传给View显示。
