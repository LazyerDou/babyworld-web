# Bubbloo Web (啵啵世界)

啵啵世界 Bubbloo 营销 + 隐私 + 条款 + 支持 静态站。Vite + Tailwind v4 多页打包。

## 页面
| 路径 | 用途 |
|------|------|
| `/` | 首页（hero / 特色 / 游戏 / 截图 / 价格）|
| `/privacy.html` | 隐私政策（App Store 必需）|
| `/support.html` | 技术支持 + FAQ（App Store 必需）|
| `/terms.html` | 使用条款 |

## 开发 / 构建
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 产物在 dist/
```

## 部署（Cloudflare Pages，免费）
1. 推到 GitHub: https://github.com/LazyerDou/babyworld-web
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → 选本仓库
3. Build: 框架 **Vite** / 命令 `npm run build` / 输出 `dist`
4. Deploy → 拿到 `https://babyworld-web.pages.dev`
5. App Store 隐私政策 URL 填：`https://babyworld-web.pages.dev/privacy.html`
