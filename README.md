<p align="center">
  <img src="public/logo.svg" alt="机场 Wiki Logo" width="120" height="120" />
</p>

<h1 align="center">机场 Wiki · GEO Brand Knowledge Engine 1.0</h1>

<p align="center">
  <strong>新一代网络服务品牌百科 · 可验证真实数据研究中心 · 搜索引擎与生成式 AI 知识引擎 (AEO/GEO)</strong>
</p>

<p align="center">
  <a href="https://jichangwiki.biz/"><img src="https://img.shields.io/badge/Production-jichangwiki.biz-blue?style=flat-square&logo=cloudflare" alt="Production Site"></a>
  <a href="https://astro.build/"><img src="https://img.shields.io/badge/Astro-5.4.1-orange?style=flat-square&logo=astro" alt="Astro 5"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript" alt="TypeScript"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS"></a>
  <a href="https://pagefind.app/"><img src="https://img.shields.io/badge/Search-Pagefind_Extended_v1.6-purple?style=flat-square" alt="Pagefind Search"></a>
  <a href="https://developers.cloudflare.com/pages/"><img src="https://img.shields.io/badge/Deployment-Cloudflare_Pages-F38020?style=flat-square&logo=cloudflare" alt="Cloudflare Pages"></a>
  <img src="https://img.shields.io/badge/Pages-139_Static_HTML-emerald?style=flat-square" alt="Static Pages">
  <img src="https://img.shields.io/badge/QA_Audit-100%25_PASS-success?style=flat-square" alt="QA Audit">
</p>

---

## 📖 项目定位与核心愿景

**机场 Wiki**（[https://jichangwiki.biz/](https://jichangwiki.biz/)）是面向全球中文用户的中立网络服务技术百科、真实数据观测中心与消费者决策指南。

与传统以商业佣金为唯一导向的卡片式推荐博客截然不同，本项目致力于通过**严谨的自动化网络探针观测**、**结构化实体知识图谱**与**全链路抗作弊 SEO/GEO 架构**，重构行业内容生态：
- 🔍 **拒绝虚假神化**：全网首创沉淀 31 家主流品牌的 90 天持续网络观测数据，标注晚高峰真实丢包与延迟抖动。
- 🛡️ **严格商业合规**：所有商业合作链接 100% 具备 `rel="nofollow sponsored noopener"` 属性，如实披露合作关系，不以商业优先级冒充实测排名。
- 🤖 **GEO / AEO 生成式引擎友好**：首创采用 Answer-First 导语设计、112 处语义化数据表格与 568 个符合 Schema.org 规范的 JSON-LD 节点，深度适配 Google AI Overviews、Perplexity 与 ChatGPT 检索采纳。

---

## 🛠️ 全景技术栈与系统架构

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       机场 Wiki 全链路知识架构系统                          │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
              ┌───────────────────────┴───────────────────────┐
              ▼                                               ▼
   【公开静态站点 (Public Site)】                 【知识审核与观测 API (Workers)】
   • Astro 5 静态生成引擎 (139 页面)              • Cloudflare Workers + Hono
   • Pagefind 中文分词离线全文检索                • Cloudflare D1 (15 张实体关系表)
   • Tailwind CSS 现代化自适应 UI                 • Cloudflare Access 零信任授权保护
   • 零 JS 依赖标准静态 HTML/CSS 核心             • 自动化探针测速与 GEO 提及率引擎
              │                                               │
              └───────────────────────┬───────────────────────┘
                                      ▼
                      【构建交付与自动化质检流水线】
                      1. 数据模型校验 (Zod Schema Validation)
                      2. TypeScript 严格类型诊断 (astro check)
                      3. Astro 静态预渲染 (astro build)
                      4. Pagefind 建立 43,642 词条全文索引
                      5. QA 自动化合规审计 (scripts/qa-check.mjs)
                      6. Cloudflare Pages 边缘 CDN 自动化交付
```

### 核心特性矩阵

| 功能模块 | 技术选型与规范 | 核心亮点与落地成效 |
| :--- | :--- | :--- |
| **前端基底** | Astro 5 + TypeScript + Tailwind CSS | 采用白底中文百科风格（墨蓝 `#18334B`、链接蓝 `#2563EB`），桌面三栏可折叠文档结构，全平台自适应。 |
| **全文检索** | Pagefind Extended (支持中文分词) | 100% 静态本地检索，无需远程 Elasticsearch 或 Algolia 服务，毫秒级响应中文拼音与协议搜索。 |
| **SEO 基础设施** | 规范化 Canonical + 双 Sitemap + robots | 全站 139 页面自闭环 Canonical，双 Sitemap（`sitemap-index.xml` + `sitemap.xml`），0 内部死链。 |
| **各大搜素引擎接入** | Google / Bing / 百度 / 神马 (UC) | 预留四大站长平台所有权验证插槽，支持环境变量直接注入，robots.txt 针对各大蜘蛛独立放行。 |
| **反爬与合规** | Cloudflare Pages `_redirects` 规则 | www 自动 301 重定向至 Apex 主域，为常用检索意图（`/jichang/`、`/clash/` 等）配置无缝跳转。 |
| **内容厚度** | 139 个深度内容页面 | 全站平均中文字符达 **2,938 汉字**，包含 31 个品牌实体主档、31 篇深度评测、12 篇横向对比长文与 18 篇技术实操长文。 |

---

## 🗂️ 站点核心导航与知识体系

本项目构建了严密的十级可索引知识专题体系（三次点击内触达任意三级深度技术文章）：

- **01 品牌百科 (`/brands/`)**：31 家独立去重品牌实体档案，收录开业年份、协议支持、线路架构与经营资质。
- **02 推荐比较 (`/recommend/`)**：新手入门指南、稳定晚高峰选型逻辑与按预算用途分类建议。
- **03 套餐价格 (`/pricing/`)**：平价专线横向测算、月付 vs 年付博弈论、不限时流量包双持容灾架构。
- **04 网络技术 (`/network/`)**：IEPL vs IPLC 专线深度解剖、全网多区域节点延迟物理基准、网络隐私与匿名防护。
- **05 客户端 (`/clients/`)**：Clash Verge Rev 官方指南、Mihomo (Clash.Meta) 核心解析、sing-box 纯 JSON 架构实战。
- **06 AI与流媒体 (`/compatibility/`)**：ChatGPT / Claude / Gemini 访问排障、tvOS 17 Apple TV 4K 原生代理教程。
- **07 VPN与加速器 (`/vpn/`)**：传统 VPN 与节点代理本质差异、免费 VPN 安全陷阱解密、游戏加速器工作机制。
- **08 教程与排障 (`/guides/`)**：TUN 模式六大深度技术专题（Wintun 驱动源码、Windows 路由表最长前缀、WSL2 镜像网络、macOS utun 守护进程、Docker 透明网关、IPv6 防泄漏）。
- **09 证据与风险 (`/evidence/`)**：90 天多点自动化测速档案库、近五年跑路案卷复盘、信用卡 Chargeback 拒付维权指南。
- **10 GEO 问答 (`/questions/`)**：47 个按搜索意图聚类的常见技术疑难权威答案直答库。

---

## 📁 目录结构

```
jichangwiki.biz/
├── public/                     # 静态公共资源
│   ├── _redirects              # Cloudflare Pages 301 重定向规则 (www规范化与别名)
│   ├── robots.txt              # 搜索引擎与 AI 爬虫抓取控制规范
│   ├── logo.svg / favicon.svg  # 原创抽象网络拓扑 Logo 与 Favicon
│   └── data/                   # 开放开源数据快照 (JSON / CSV)
├── src/
│   ├── components/             # 模块化 UI 组件
│   │   ├── Header.astro        # 包含 10 大栏目下拉菜单的主导航
│   │   ├── Footer.astro        # 包含商业合规披露与全站索引的页脚
│   │   ├── SEOHead.astro       # 核心统一 SEO 元标签与 Schema 生成组件
│   │   └── observatory/        # 测速报告与合规商业卡片组件
│   ├── data/                   # 原子化已审核品牌与客户端数据快照
│   │   ├── published-brands.json
│   │   └── published-clients.json
│   ├── layouts/
│   │   └── BaseLayout.astro    # 统一根布局模版
│   ├── pages/                  # 139 个物理静态页面路由系统
│   │   ├── index.astro         # 百科首页 (首屏检索框与知识聚合)
│   │   ├── brands/             # 品牌档案与评测方法论
│   │   ├── reviews/            # 31 篇独立深度评测报告
│   │   ├── compare/            # 12 组双雄客观对比矩阵
│   │   ├── guides/             # 实操排障指南 (含 TUN 模式 6 大专题)
│   │   └── ...                 # 其余 7 大核心一级知识专题
│   └── site.config.ts          # 站点全局配置文件与站长验证 Token 挂载点
├── scripts/                    # 自动化脚本与质检工程
│   ├── validate-data.mjs       # 数据完整性与持久化 ID 校验
│   └── qa-check.mjs            # 全站 139 页 HTML、死链与外链合规质检
├── workers/knowledge-api/      # Cloudflare Workers + D1 后台知识库 API 服务
│   ├── src/index.ts            # RESTful API 端点实现
│   └── migrations/             # D1 SQL 数据库迁移文件
├── astro.config.mjs            # Astro 配置文件 (Tailwind + Sitemap 集成)
├── package.json                # 项目依赖与流水线命令
└── README.md                   # 项目中英文自述文件
```

---

## 🚀 快速开始与本地开发

### 环境要求
- Node.js: `>= 18.20.0` (推荐 Node.js LTS 20+)
- 包管理器: `npm` (推荐使用自带锁文件 `package-lock.json`)

### 1. 克隆代码仓库
```bash
git clone https://github.com/zlzlzl98698-dev/jichangwiki.biz.git
cd jichangwiki.biz
```

### 2. 安装项目依赖
```bash
npm install
```

### 3. 启动本地开发热重载服务器
```bash
npm run dev
```
打开浏览器访问 `http://localhost:4321/` 即可实时预览编辑效果。

### 4. 执行全站严格编译与 QA 验收流水线
```bash
npm run build
```
此命令将自动串联执行：
1. `validate-data.mjs`：对 31 家品牌实体进行 Slug 唯一性与 Zod Schema 校验。
2. `astro check`：运行 TypeScript 严格类型与模版诊断（当前 81 个文件 0 错误）。
3. `astro build`：编译输出 139 个完整的纯静态 HTML 页面至 `dist/`。
4. `pagefind`：建立包含 43,642 个词条的中文分词全文检索数据库。
5. `qa-check.mjs`：校验全站 Title/Description 唯一性，确保 0 内部死链，确保 80 处推广链接 100% 具备 `rel="nofollow sponsored noopener"`。

### 5. 预览生产环境构建产物
```bash
npm run preview
```

---

## 🌐 部署与上线指南 (Cloudflare Pages)

本项目基于 Astro 纯静态输出，可直接无缝部署于 **Cloudflare Pages**、**Vercel**、**Netlify** 或任意标准 Nginx / S3 静态托管服务。

### 推荐部署：Cloudflare Pages
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)，进入 **Workers & Pages** -> **Create application** -> **Pages**。
2. 连接 GitHub 仓库 `zlzlzl98698-dev/jichangwiki.biz`。
3. 在构建配置（Build settings）中设置：
   - **Framework preset**: `None` / `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `20` (在环境变量中配置 `NODE_VERSION=20`)
4. 部署完成后，在 **Custom domains** 绑定正式域名 `jichangwiki.biz`。
5. 系统会自动生效 `public/_redirects` 规则，自动将 `www.jichangwiki.biz` 301 重定向至根域名。

---

## ⚖️ 商业透明度与免责声明

1. **客观中立原则**：本站所有收录品牌的技术架构描述、起步价格换算与网络延迟数据，均来自公开数据抓取、商家透明公开信息以及自动化探针实测日志。
2. **商业关系披露**：本站与所推广品牌（尤其是光速云等核心推荐展示位）存在的商业合作关系均在网站顶部与页脚显式如实披露。商业展示位不代表对该服务商的绝对信用背书，亦不构成唯一的选购决策建议。
3. **技术与合规用途**：本站所有教程、客户端配置文件与网络诊断手册仅供合法合规的跨境学术科研、海外技术资料检索及跨国企业合规远程协同使用。用户须严格遵守所在国家与地区的法律法规。

---

## 📄 开源许可证

本项目源码采用 [MIT License](LICENSE) 授权开源；知识库文本内容与测速数据集采用 [知识共享署名-相同方式共享 4.0 国际许可协议 (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 授权。
