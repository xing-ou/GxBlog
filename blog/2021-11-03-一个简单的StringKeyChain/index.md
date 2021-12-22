---
title: 一个简单的StringKeyChain
tags: [keychain]
---

![headerimg](./B6086038-32F7-48AE-AC07-DBAE5C0F21D7.png)

一个简单的`StringKeyChain`封装，存储/获取字符串到keychain中。通常用于生成设备的唯一id。

<!--truncate-->

```swift
class StringKeyChain {
    static func save(value: String, key: String) {
        let data = value.data(using: .utf8)!
        let query: [String: Any] = [kSecClass as String: kSecClassGenericPassword,
                                    kSecAttrAccount as String: key,
                                    kSecValueData as String: data]
        SecItemDelete(query as CFDictionary)
        let status = SecItemAdd(query as CFDictionary, nil)
        if status != errSecSuccess {
            print("keychain save error")
        }
    }

    static func getValue(key: String) -> String? {
        let query: [String: Any] = [kSecClass as String: kSecClassGenericPassword,
                                    kSecAttrAccount as String: key,
//                                    kSecAttrService as String: key,
//                                    kSecAttrAccessible as String: kSecAttrAccessibleAfterFirstUnlock,
                                    kSecMatchLimit as String: kSecMatchLimitOne,
                                    kSecReturnData as String: kCFBooleanTrue!]

        var retrivedData: AnyObject?

        _ = SecItemCopyMatching(query as CFDictionary, &retrivedData)

        guard let data = retrivedData as? Data else { return nil }
        return String(data: data, encoding: .utf8)
    }
}


```

