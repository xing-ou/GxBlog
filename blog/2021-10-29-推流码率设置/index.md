---
title: 推流分辨率码率设置
tags: [杂谈]
---

![Header](./Header.png)

做直播始终离不开分辨率和码率的设置。

这里记录下腾讯音视频sdk中对推流参数的设置建议。

<!--truncate-->

### 分辨率码率对应表

| 分辨率    | 码率范围            |
| --------- | ------------------- |
| 160 * 160 | 100Kbps ~ 150Kbps   |
| 270*270   | 200Kbps ~ 300Kbps   |
| 480*480   | 350Kbps ~ 525Kbps   |
| 320*240   | 250Kbps ~ 375Kbps   |
| 480*360   | 400Kbps ~ 600Kbps   |
| 640*480   | 600Kbps ~ 900Kbps   |
| 320*180   | 250Kbps ~ 400Kbps   |
| 480*270   | 350Kbps ~ 550Kbps   |
| 640*360   | 500Kbps ~ 900Kbps   |
| 960*540   | 800Kbps ~ 1500Kbps  |
| 1280*720  | 1000Kbps ~ 1800Kbps |
| 1920*1080 | 2500Kbps ~ 3000Kbps |

