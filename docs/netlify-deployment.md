# 使用 Netlify 部署「汉字练练看」详细说明

## 简介

Netlify 是一个免费的静态网站托管平台，支持拖拽上传、自动 HTTPS、全球 CDN 加速。本文档介绍两种部署方式：**拖拽上传（快速）** 和 **连接 GitHub 自动部署（推荐）**。

---

## 方式一：拖拽上传（最简单，5 分钟上线）

### 适用场景
- 快速体验，无需 GitHub 账号
- 临时分享给朋友

### 步骤

**1. 打开 Netlify Drop 页面**

在浏览器中打开：https://app.netlify.com/drop

**2. 拖拽上传文件夹**

将本地的 `V3.0.0` 文件夹直接拖拽到网页中央的上传区域（显示"Drag and drop your site folder here"的区域）。

> ⚠️ 注意：需要将整个 `V3.0.0` **文件夹**拖入，而不是单独的文件。文件夹内需包含：
> - `index.html`
> - `style.css`
> - `script.js`

**3. 等待部署完成**

上传后 Netlify 会自动处理，约 10-30 秒后显示部署成功，并生成一个随机域名，格式如：

```
https://amazing-curie-123456.netlify.app
```

**4. 分享链接**

复制该链接发给朋友，手机浏览器或微信内置浏览器打开即可游玩。

### 更新网站内容

若需更新游戏，重新进入 Netlify 控制台，找到对应站点，将新的文件夹拖拽到「Deploys」页面的上传区域即可覆盖更新。

---

## 方式二：连接 GitHub 自动部署（推荐，长期维护）

### 适用场景
- 长期维护项目
- 每次推送代码后自动更新网站

### 前提条件
- 已有 GitHub 账号
- 本地已用 git 管理项目（参考项目根目录的 Git 使用说明）

### 步骤

**1. 将项目推送到 GitHub**

在 [GitHub](https://github.com) 创建一个新的公开仓库（如 `WordGame`），然后在本地执行：

```bash
git remote add origin https://github.com/你的用户名/WordGame.git
git branch -M main
git push -u origin main
```

**2. 注册并登录 Netlify**

访问 https://app.netlify.com，使用 GitHub 账号登录（推荐，方便后续授权）。

**3. 创建新站点**

- 点击 **「Add new site」→「Import an existing project」**
- 选择 **「Deploy with GitHub」**
- 授权 Netlify 访问你的 GitHub 仓库
- 在仓库列表中选择 `WordGame`

**4. 配置部署设置**

| 配置项 | 填写值 |
|--------|--------|
| Branch to deploy | `main` |
| Base directory | `V3.0.0` |
| Build command | （留空） |
| Publish directory | `V3.0.0` |

**5. 点击「Deploy site」**

等待约 1 分钟，部署完成后获得站点地址。

**6. 自动部署生效**

之后每次执行以下命令推送代码，网站会在 1-2 分钟内自动更新：

```bash
git add .
git commit -m "更新游戏内容"
git push
```

---

## 自定义域名（可选）

Netlify 默认分配的域名较长，可以修改为更易记的地址：

**修改随机子域名：**
1. 进入站点 **「Site settings」→「Domain management」**
2. 点击 **「Options」→「Edit site name」**
3. 修改为你想要的名称，如 `hanzi-game`
4. 最终域名变为：`https://hanzi-game.netlify.app`

**绑定自己的域名（需已购买域名）：**
1. 在 **「Domain management」** 中点击 **「Add custom domain」**
2. 输入你的域名（如 `game.example.com`）
3. 按提示在域名服务商处添加 CNAME 记录，指向 Netlify 提供的地址
4. 等待 DNS 生效（通常 5-30 分钟），Netlify 会自动配置 HTTPS

---

## 常见问题

### Q: 网站打开是空白页？
**A:** 检查上传的文件夹根目录下是否有 `index.html`，且文件名拼写正确（区分大小写）。

### Q: 样式/脚本没有加载？
**A:** 确认 `style.css` 和 `script.js` 与 `index.html` 在同一目录下，没有放在子文件夹中。

### Q: 手机上音效无法播放？
**A:** 这是浏览器的限制（自动播放策略），需要用户主动点击页面后才能触发音效，属于正常现象。

### Q: 免费版有什么限制？
**A:** 免费版限制如下，对本项目完全够用：
- 带宽：100 GB / 月
- 构建时长：300 分钟 / 月
- 并发构建：1 个

---

## 当前部署信息

| 项目 | 内容 |
|------|------|
| 平台 | Netlify |
| 在线地址 | https://gorgeous-strudel-08f0d6.netlify.app/ |
| 部署方式 | 拖拽上传 |
| 最后部署时间 | 2026-03-15 |
