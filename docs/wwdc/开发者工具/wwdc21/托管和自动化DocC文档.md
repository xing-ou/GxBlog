---
title: 托管和自动化DocC文档
tags: [wwdc, DocC]
description: 介绍如何在文档中心导出文档、在命令行导出文档以及托管到web服务器上。
---
## 如何导出文档

![image-20211122160151717](https://tva1.sinaimg.cn/large/008i3skNgy1gwnzkfqo0qj317k0eaabs.jpg)

## 如何 命令行生成文档

```shell
xcodebuild docbuild -scheme SlothCreator -derivedDataPath ~/Desktop/SlothCreatorBuild
```

由于生成的文件非常多，你可以通过一下命令查找：

```shell
find ~/Desktop/SlothCreatorBuild -type d -name '*.doccarchive'
```

在Pod lib中还不知道怎么用xcodebuild生成文档，试了下但是没有生成成功。

## 托管到服务器上

不太感兴趣。大概看了下，就是把导出的docarchive文件放到服务端，然后添加路由规则:

```shell
# Enable custom routing.
RewriteEngine On

# Route documentation and tutorial pages.
RewriteRule ^(documentation|tutorials)\/.*$ SlothCreator.doccarchive/index.html [L]

# Route files and data for the documentation archive.
#
# If the file path doesn't exist in the website's root ...
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# ... route the request to that file path with the documentation archive.
RewriteRule .* SlothCreator.doccarchive/$0 [L]
```

