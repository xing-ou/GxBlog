"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[2791],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1826:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],s={title:"1\u3001Combine\u7b80\u4ecb",tags:["swiftUI","Combine"]},l=void 0,c={unversionedId:"swiftUI-cookbook/\u7b2c\u5341\u7ae0-SwiftUI\u548cCombine/Combine\u7b80\u4ecb",id:"swiftUI-cookbook/\u7b2c\u5341\u7ae0-SwiftUI\u548cCombine/Combine\u7b80\u4ecb",title:"1\u3001Combine\u7b80\u4ecb",description:"\u6211\u4eec\u8fd8\u662f\u6765\u770b\u4e2aCoreLocation\u7684\u4f8b\u5b50\u3002",source:"@site/docs/swiftUI-cookbook/10-\u7b2c\u5341\u7ae0-SwiftUI\u548cCombine/01-Combine\u7b80\u4ecb.md",sourceDirName:"swiftUI-cookbook/10-\u7b2c\u5341\u7ae0-SwiftUI\u548cCombine",slug:"/swiftUI-cookbook/\u7b2c\u5341\u7ae0-SwiftUI\u548cCombine/Combine\u7b80\u4ecb",permalink:"/docs/swiftUI-cookbook/\u7b2c\u5341\u7ae0-SwiftUI\u548cCombine/Combine\u7b80\u4ecb",draft:!1,editUrl:"https://github.com/xing-ou/GxBlog/docs/swiftUI-cookbook/10-\u7b2c\u5341\u7ae0-SwiftUI\u548cCombine/01-Combine\u7b80\u4ecb.md",tags:[{label:"swiftUI",permalink:"/docs/tags/swift-ui"},{label:"Combine",permalink:"/docs/tags/combine"}],version:"current",sidebarPosition:1,frontMatter:{title:"1\u3001Combine\u7b80\u4ecb",tags:["swiftUI","Combine"]},sidebar:"swiftUI-cookbook",previous:{title:"5\u3001@EnvironmentObject",permalink:"/docs/swiftUI-cookbook/\u7b2c\u4e5d\u7ae0-\u6570\u636e\u9a71\u52a8SwiftUI/@EnvironmentObject"},next:{title:"2\u3001\u4e00\u4e2a\u5b9a\u65f6\u5668App",permalink:"/docs/swiftUI-cookbook/\u7b2c\u5341\u7ae0-SwiftUI\u548cCombine/\u4e00\u4e2a\u5b9a\u65f6\u5668App"}},u={},p=[{value:"Getting ready",id:"getting-ready",level:2},{value:"How to do it\u2026",id:"how-to-do-it",level:2},{value:"How it works\u2026",id:"how-it-works",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6211\u4eec\u8fd8\u662f\u6765\u770b\u4e2a",(0,a.kt)("strong",{parentName:"p"},"CoreLocation"),"\u7684\u4f8b\u5b50\u3002"),(0,a.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,a.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2a\u9879\u76ee\uff1a",(0,a.kt)("strong",{parentName:"p"},"CombineCoreLocationManager")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PROJECT")," > ",(0,a.kt)("strong",{parentName:"p"},"Info"),"\u4e2d\u6dfb\u52a0\u83b7\u53d6\u5b9a\u4f4d\u6743\u9650Key\uff1a",(0,a.kt)("strong",{parentName:"p"},"NSLocationWhenInUseUsageDescription")),(0,a.kt)("h2",{id:"how-to-do-it"},"How to do it\u2026"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9996\u5148\u5b9e\u73b0\u4e2aLocationManager\uff0c\u5c01\u88c5\u4e00\u4e0bCLLocationManager\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"import CoreLocation\nimport SwiftUI\nclass LocationManager: NSObject {\n    enum LocationError: String, Error {\n        case restricted\n        case denied\n        case unknown\n    }\n\n    private let locationManager = CLLocationManager()\n\n    override init() {\n        super.init()\n        self.locationManager.delegate = self\n        self.locationManager.desiredAccuracy = kCLLocationAccuracyBest\n        self.locationManager.requestWhenInUseAuthorization()\n    }\n\n    func start() {\n        self.locationManager.startUpdatingLocation()\n    }\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u76ee\u524d\u4e3a\u6b62\u548cCombine\u8fd8\u6ca1\u4ec0\u4e48\u5173\u7cfb\uff0c\u6211\u4eec\u7ee7\u7eed\u6dfb\u52a02\u4e2aPublisher")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"class LocationManager: NSObject {\n  ...\n  let statusPublisher = PassthroughSubject<CLAuthorizationStatus, LocationError>()\n    let locationPublisher = PassthroughSubject<CLLocation?, Never>()\n  ...\n}\n\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u7136\u540e\u6211\u4eec\u5b9e\u73b0CLLocationManagerDelegate\uff0c\u628a\u56de\u8c03\u7684value\u8f6c\u53d1\u7ed9publisher")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"extension LocationManager: CLLocationManagerDelegate {\n    func locationManagerDidChangeAuthorization(_ manager: CLLocationManager) {\n        switch manager.authorizationStatus {\n        case .restricted: self.statusPublisher.send(completion: .failure(.restricted))\n        case .denied: self.statusPublisher.send(completion: .failure(.denied))\n        case .notDetermined, .authorizedAlways,.authorizedWhenInUse:\n            self.statusPublisher.send(manager.authorizationStatus)\n        @unknown default:\n            self.statusPublisher.send(completion: .failure(.unknown))\n        }\n    }\n\n    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {\n        guard let location = locations.last else { return }\n        locationPublisher.send(location)\n    }\n}\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"li"},"LocationViewModel"),"\uff0c\u7528\u4e8e\u63d0\u4f9b\u754c\u9762\u663e\u793a\u7684\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'extension Optional where Wrapped == CLLocation {\n    var latitudeDescription: String {\n        guard let self = self else {\n            return "-"\n        }\n        return String(format: "%0.4f", self.coordinate.latitude)\n    }\n\n    var longitudeDescription: String {\n        guard let self = self else {\n            return "-"\n        }\n        return String(format: "%0.4f", self.coordinate.longitude)\n    }\n}\n\nclass LocationViewModel: ObservableObject {\n    @Published\n    private var status: CLAuthorizationStatus = .notDetermined\n    @Published\n    private var currentLocation: CLLocation?\n    @Published\n    var errorMessage = ""\n    private let locationManager = LocationManager()\n\n    private var cancellableSet: Set<AnyCancellable> = []\n    init() {\n        self.locationManager\n            .statusPublisher\n            .debounce(for: 0.5, scheduler: RunLoop.main)\n            .removeDuplicates()\n            .sink { completion in\n                switch completion {\n                case .finished: break\n                case let .failure(error):\n                    self.errorMessage = error.rawValue\n                }\n            } receiveValue: { self.status = $0 }\n            .store(in: &self.cancellableSet)\n\n        self.locationManager.locationPublisher\n            .debounce(for: 0.5, scheduler: RunLoop.main)\n            .removeDuplicates(by: self.lessThanOneMeter)\n            .assign(to: \\.currentLocation, on: self)\n            .store(in: &self.cancellableSet)\n    }\n\n    private func lessThanOneMeter(_ lhs: CLLocation?, _ rhs: CLLocation?) -> Bool {\n        if lhs == nil && rhs == nil {\n            return true\n        }\n        guard let lhr = lhs,\n              let rhr = rhs else {\n            return false\n        }\n        return lhr.distance(from: rhr) < 1\n    }\n\n    func startUpdating() {\n        self.locationManager.start()\n    }\n\n    // \u51c6\u5907UI\u6570\u636e\n    var thereIsAnError: Bool {\n        !self.errorMessage.isEmpty\n    }\n\n    var latitude: String {\n        self.currentLocation.latitudeDescription\n    }\n\n    var longitude: String {\n        self.currentLocation.longitudeDescription\n    }\n\n    var statusDescription: String {\n        switch self.status {\n        case .notDetermined: return "notDetermined"\n        case .authorizedWhenInUse: return "authorizedWhenInUse"\n        case .authorizedAlways: return "authorizedAlways"\n        case .restricted: return "restricted"\n        case .denied: return "denied"\n        @unknown default: return "unknown"\n        }\n    }\n}\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u7136\u540e\u518dContentView\u4e2d\u4f7f\u7528")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'struct ContentView: View {\n    @StateObject var locationViewModel = LocationViewModel()\n    var body: some View {\n        Group {\n            if locationViewModel.thereIsAnError {\n                Text("Location Service terminated with error:\\(locationViewModel.errorMessage)")\n            } else {\n                Text("Status:\\(locationViewModel.statusDescription)")\n                HStack {\n                    Text("Latitude: \\(locationViewModel.latitude)")\n                    Text("Longitude:\\(locationViewModel.longitude)")\n                }\n            }\n        }.padding(.horizontal, 24)\n        .task {\n            locationViewModel.startUpdating()\n        }\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gyc5m0w4i6j30b40b5q3a.jpg",alt:"Figure_10.4_B17962"})),(0,a.kt)("h2",{id:"how-it-works"},"How it works\u2026"),(0,a.kt)("p",null,"\u9996\u5148\u4f60\u53ef\u80fd\u6ce8\u610f\u5230\u6211\u4eec ",(0,a.kt)("strong",{parentName:"p"},"@Published")," \u4fee\u9970\u7684\u662f ",(0,a.kt)("strong",{parentName:"p"},"private"),"\u53d8\u91cf\uff0c\u4f60\u53ef\u80fd\u611f\u5230\u5947\u602a\uff0c\u901a\u5e38\u6211\u4eec\u90fd\u662f\u8bbe\u7f6e\u4e3aPublic\uff0c\u8fd9\u6837\u80fd\u591f\u8ba9\u5916\u90e8\u8bbf\u95ee\uff0c\u4e0d\u8fc7\u6211\u4eec\u8fd9\u91cc\u662fViewModel\uff0c\u6570\u636e\u9700\u8981\u88ab\u52a0\u5de5\u540e\u624d\u80fd\u4f7f\u7528\uff0c\u6240\u4ee5\u6211\u4eec\u9690\u85cf\u539f\u59cb\u6570\u636e\uff0c\u66b4\u9732\u52a0\u5de5\u540e\u7684\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5728LocationManager\u4e2d\u5b9a\u4e49\u4e862\u4e2apublisher\uff0c\u4ed6\u4eec\u662fSubject\u3002subject\u662f\u7ba1\u7406\u8f93\u5165\u7684\uff0c\u6709\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},".send"),"\u65b9\u6cd5\u6765\u53d1\u9001event\u3002\u5e38\u7528\u7684subject\u662f\uff1a",(0,a.kt)("strong",{parentName:"p"},"CurrentValueSubject")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"PassthroughSubject"),"\u3002"),(0,a.kt)("p",null,"CurrentValueSubject\u6709\u521d\u59cb\u503c\uff0c\u81ea\u5df1\u7ef4\u62a4\u6539\u53d8\u7684\u503c\uff0c\u5373\u4f7f\u6ca1\u6709\u4efb\u4f55subscribers\u3002"),(0,a.kt)("p",null,"PassthroughSubject\u6ca1\u6709\u521d\u59cb\u503c\uff0c\u5982\u679c\u6ca1\u6709subscribers\uff0c\u6536\u5230\u7684\u503c\u4f1a\u88ab\u629b\u5f03\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"//\u53ef\u4ee5\u7c7b\u6bd4RxSwift\u7684onEvent, onError, onCompleted\n// \u53d1\u9001event\nstatusPublisher.send(status)\n//\u53d1\u9001finish\nstatusPublisher.send(completion: .finish)\n//\u53d1\u9001\u5931\u8d25\nstatusPublisher.send(completion: .failure(.restricted))\n")),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u518d\u6765\u770b\u770bsubscribe\uff0c\u6211\u4eec\u5728Init\u65b9\u6cd5\u4e2d\u505a\u7684subscribe\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"locationManager.locationPublisher\n    // \u8282\u6d41\n    .debounce(for: 0.5, scheduler: RunLoop.main)\n    // \u79fb\u9664\u91cd\u590d\n    .removeDuplicates(by: lessThanOneMeter)\n    // \u76f8\u5f53\u4e8erxswift\u7684 subscribe\n    .assign(to: \\.currentLocation, on: self)\n    // \u76f8\u5f53\u4e8erxswift\u7684 addToDisposeBag()\n    .store(in: &cancellableSet)// cancellableSet\u76f8\u5f53\u4e8eDisposeBag\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sink"),"\u53ef\u4ee5\u540c\u65f6\u63a5\u53d7completion\u72b6\u6001\u548crecivedValue\uff0c\u53ef\u4ee5\u66f4\u7cbe\u786e\u7684\u5904\u7406\u6570\u636e\u3002"))}f.isMDXComponent=!0}}]);