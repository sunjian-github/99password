# 99password

确定性密码生成器（Deterministic Password Generator）—— 记住一个主密码，为每个网站生成唯一的强密码。

🌐 **在线使用：** [https://99password.pages.dev](https://99password.pages.dev)

## 特性

- **Argon2id 派生** — RFC 9106 标准算法，内存硬函数，抗 GPU/ASIC 暴力破解
- **123 bit 熵** — 20 位密码，70 字符集，强度接近 AES-128
- **纯离线** — 单个 HTML 文件，不联网也能用
- **零依赖** — 不需要服务器、数据库、浏览器插件
- **确定性** — 同样输入 → 同样输出，无需备份和同步
- **移动端自适应** — 手机、平板、电脑均可使用

## 在线访问

| 页面 | 地址 |
|------|------|
| v2 Argon2id（推荐） | [99password.pages.dev](https://99password.pages.dev) |
| v1 HMAC-MD5（旧版） | [99password.pages.dev/v1](https://99password.pages.dev/v1) |
| 技术说明 | [99password.pages.dev/about](https://99password.pages.dev/about) |

## 本地使用

双击 `index.html` 即可在浏览器中打开，无需任何服务器。

## 文件结构

```
├── index.html      # v2 Argon2id 版（推荐）
├── v1.html         # v1 HMAC-MD5 旧版
├── about.html      # 加密原理与技术说明
└── README.md
```

## 技术原理

```
主密码 + 站点标识 → Salt 构造 → Argon2id(64MB, 3轮) → 32字节哈希 → 拒绝采样 → 20位强密码
```

详细说明请访问 [技术说明页](https://99password.pages.dev/about)。

## 版本说明

| 版本 | 算法 | 内存 | 输出 | 抗 GPU |
|------|------|------|------|--------|
| v2（当前） | Argon2id | 64 MB | 20 位 / ~123 bit | ✅ |
| v1（旧版） | HMAC-MD5 | 0 | 16 位 / ~80 bit | ❌ |

⚠️ v1 和 v2 生成的密码完全不同，迁移时需要逐个站点更新密码。

## 致敬

本项目受 [花密 FlowerPassword](https://flowerpassword.com) 启发，感谢原作者的开创性工作。

## 许可证

[MIT License](LICENSE)

## 托管

由 [Cloudflare Pages](https://pages.cloudflare.com) 提供托管服务。
