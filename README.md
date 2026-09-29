# 个人作品集网站（React + Vite）

暗色、克制、带科技感的单页作品集。PC 优先，版心 1700px。

## 运行

```bash
pnpm install     # 或 npm install
pnpm dev         # 打开 http://localhost:5173
pnpm build       # 打包到 dist/
pnpm preview     # 预览打包结果
```

环境要求：Node.js 18 以上。

如果用 pnpm 安装时提示 `Ignored build scripts: esbuild`，执行一次
`pnpm approve-builds` 并允许 esbuild 即可（仓库里的 `pnpm-workspace.yaml`
已经预置了这条白名单）。

## 页面结构

| 区块 | 组件 | 说明 |
| --- | --- | --- |
| 全屏 Hero | `src/components/Hero.jsx` | 视频背景 + 大标题 + 导航 + 联系按钮 |
| 服务跑马灯 | `src/components/Marquee.jsx` | Hero 下方的细条滚动条 |
| 精选项目 | `src/components/Work.jsx` | 大卡片，4 个精选项目 |
| 个人经历 | `src/components/About.jsx` | 人物图 + 介绍 + 联系方式 + 项目数据 |
| 个人优势 | `src/components/Strengths.jsx` | 6 张能力卡片 |
| 联系收尾 | `src/components/Contact.jsx` | 整屏收尾页 |

## 改内容只看一个文件

所有文案、项目、数据、联系方式都集中在 **`src/data/resume.js`**，
把里面的示例内容替换成你的真实简历信息即可，不用动组件代码。

## 换成你自己的图片

- 项目图：把图片放进 `public/media/`，然后在 `src/data/resume.js` 里给对应项目加 `cover: '/media/xxx.jpg'`。
- 人物图：同上，给 `profile.avatar` 填 `/media/your-photo.jpg`。
- Hero 视频：见 `public/media/README.md`。

没有填图片时，卡片会显示一套设计过的占位视觉（带"示例图 · 待替换"标记），
方便你对照着替换。

## 设计规范（改色改版心在这里）

`src/styles/tokens.css` 里集中定义了配色、版心、圆角、字体和动效曲线。

- 版心：`--shell: 1700px`
- 强调色：`--accent: #6E8CFF`

## 动效

- 滚动进入动画：`data-reveal` 属性 + `src/hooks/useReveal.js`
- 数字滚动：`src/hooks/useCountUp.js`
- 均已适配 `prefers-reduced-motion`

## 部署上线

### 1. 推到 GitHub

```bash
cd outputs/portfolio
git add .
git commit -m "feat: portfolio site"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

### 2. 接到托管平台（推荐 Vercel 或 Netlify）

两个平台都能直接识别 Vite，仓库里已经放好 `vercel.json` 和 `netlify.toml`：

- 构建命令：`pnpm build`
- 输出目录：`dist`
- Node 版本：18 以上（配置里指定了 20）

导入仓库后点部署，会拿到一个 `xxx.vercel.app` / `xxx.netlify.app` 的公网地址，
直接发给朋友就能打开。

如果只是想快速看一眼，也可以本地 `pnpm build` 之后，把 `dist/` 目录
拖到 https://app.netlify.com/drop ，几秒就会生成一个临时公网地址。

### 3. 如果用 GitHub Pages

GitHub Pages 是子目录路径，需要用仓库名做 base 重新构建，例如仓库叫
`portfolio`：

```bash
pnpm build --base=/portfolio/
```

仓库里已经带了一份 `.github/workflows/deploy-pages.yml`，会自动用仓库名
当 base 构建并发布。使用前先在仓库 **Settings → Pages** 把 Source 设为
"GitHub Actions"，之后每次 push 到 main 都会自动更新线上版本，
地址是 `https://<用户名>.github.io/<仓库名>/`。

用 Vercel / Netlify 则不需要这一步。
