---
title: SwiftUI专辑079-实现一个无限滚动列表
tags: [swiftUI, async]
---
![headerimg](./Header.png)
我们来实现一个无限滚动列表。
<!--truncate-->
## Getting ready

首先，新建一个项目：**CoolGifList**

由于我们要显示Gif，**AsyncImage**并不支持，我们将用**NukeUI**。

然后去https://developers.giphy.com/注册个账号，创建app，拿到apiKey。

## How to do it…

1. 首先创建我们的Model
```swift
struct Response: Codable {
    let data: [Gif]
}

struct Gif: Identifiable, Codable, Equatable {
    static func == (lhs: Gif, rhs: Gif) -> Bool {
        lhs.id == rhs.id
    }

    let id: String
    let title: String
    var url: String {
        images.downsized.url
    }
    let images: Images
}

struct Images: Codable {
    let downsized: Image
}

struct Image: Codable {
    let url: String
}
```

2. 创建一个service
```swift
struct Service {
    private let apiKey = "Your Apikey"
    private let pageSize = 10
    private let query = "cat"
    
    private let decoder: JSONDecoder = {
        let decoder = JSONDecoder()
        decoder.keyDecodingStrategy = .convertFromSnakeCase
        return decoder
    }()

    func fetchGifs(page: Int) async -> [Gif] {
        let offset = page * pageSize
        guard let url = URL(string: "https://api.giphy.com/v1/gifs/search?api_key=\(apiKey)&q=\(query)&limit=\(pageSize)&offset=\(offset)") else {
            return []
        }
        do {
            let (data, _) = try await URLSession.shared.data(from: url)
            let response = try decoder.decode(Response.self, from: data)
            return response.data
        } catch {
            print(error)
            return []
        }
    }
}
```

3. 显示和请求数据
```swift
struct ContentView: View {
    let service = Service()
    @State var gifs: [Gif] = []
    @State var page = 1
    var body: some View {
        List(gifs) { gif in
            VStack {
                LazyImage(source: gif.url).aspectRatio(contentMode: .fit)
                Text(gif.title)
            }
            .task {
               if gif == gifs.last {
                   page += 1
                   gifs += await service.fetchGifs(page: page)
                }
            }
        }
        .listStyle(.plain)
        .task {
            gifs = await service.fetchGifs(page: page)
        }
    }
}
```

![image-20220117151140247](https://tva1.sinaimg.cn/large/008i3skNgy1gygotgq3guj30c60os408.jpg)

## How it works…

我们在每个cell上也加了一个.task，但是只会在这个cell是最后一个cell时才触发，这样，当最后一个cell即将显示时，会触发service，加载下一页的数据。
