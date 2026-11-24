# 机场 Wiki · GEO Brand Knowledge Engine 1.0

> 域名：`https://jichangwiki.biz/`  
> 品牌：机场 Wiki  
> 定位：中文网络服务品牌百科、可验证资料中心、技术知识库与消费者选择指南。  
> 商业关系披露：本站如实披露合作展示品牌（如光速云），客观呈现技术参数，拒绝伪造实测数据与虚假榜单。

---

## 一、技术架构总览

```
[原始输入资料 (data/raw)] ──> [数据审计与去重 (scripts/audit-raw-data.mjs)]
                                      │
                                      ▼
[Cloudflare D1 模式 / JSON 快照] ──> [Astro 5 静态渲染引擎 (99 页面)]
                                      │
                                      ▼
[Pagefind 中文全文检索 (zh-cn)] ──> [dist/ 静态发布产物] ──> [Cloudflare Pages 部署]
                                      │
                                      ▼
[Workers Knowledge API] <── [Cloudflare Access 鉴权] (管理审核端)
```

1. **公开站点（Static Site）**：
   - Astro 5 + TypeScript + Tailwind CSS
   - Pagefind 静态全文检索（原生支持 `zh-cn` 中文分词）
   - `@astrojs/sitemap` 自动生成全站索引并指向规范 URL
   - 包含 10 大一级专题、31 家去重实体主档案、31 篇独立深度评测报告、规范化对比、价格矩阵与排障手册。
   - 所有页面均包含独立的 Title、Meta Description、H1、Canonical、Breadcrumbs 及 Schema.org JSON-LD 结构化数据。

2. **管理审核服务（Workers / D1）**：
   - 位于 `workers/knowledge-api/`
   - Cloudflare D1 15 个表结构迁移（SQL Migration 0001）
   - 采用 Cloudflare Access JWT 验证与 Bearer Secret 保护写入端点
   - GEO 观测指标引擎：品牌提及率、网站引用率、事实准确率（无分母时显示 N/A，杜绝伪造数据）。

---

## 二、收录品牌覆盖与实体去重 (31 家)

| 序号 | 品牌名称 | 规范 Slug | 核心线路 | 客户端模式 | 起步折算价 |
|---|---|---|---|---|---|
| 1 | **光速云** | `guangsu` | IEPL专线 + 企业内网专线 | 自研 + 第三方通用 | ¥8.25/月 (合作品牌展示位) |
| 2 | 暮光加速 | `muguang` | BGP智能调度 + 专线级出口 | 自研 + 第三方通用 | ¥9.08/月 |
| 3 | 飞猫云 | `feimao` | 专线中转 + BGP优化 | 专属 App 免配置 | ¥7.00/月 |
| 4 | 微风网络 | `weifeng` | IEPL专线 + 原生IP | 自研 + 第三方通用 | ¥11.41/月 |
| 5 | 大佬云 | `dalaoyun` | IEPL专线 + VLESS | 自研 + 第三方通用 | ¥5.60/月 |
| 6 | 星岛梦 | `xingdaomeng` | IEPL专线 + Trojan | 自研 + 第三方通用 | ¥8.00/月 |
| 7 | 二猫云 | `ermao` | 全线 IEPL 专线 | 自研 + 第三方通用 | ¥7.41/月 |
| 8 | 无忧链接 | `wuyou` | 专线中转 | 专属 App 免配置 | ¥6.58/月 |
| 9 | 唯兔云 | `weitu` | IPLC 纯物理专线 | 自研 + 第三方通用 | ¥6.66/月 |
| 10 | Firefly | `firefly` | IPLC 专线 + 原生IP | 专属 App 免配置 | ¥8.00/月 (合并萤火虫别名) |
| 11 | 宇宙云 | `yuzhou` | 60+ 节点（待核实） | 待核实 | ¥8.00/月 |
| 12 | U1S1 | `u1s1` | IPLC 专线 (2Gbps) | 自研 + 第三方通用 | ¥8.00/月 |
| 13 | 灵猫网络 | `lingmao` | 中转优化线路 | 专属 App 免配置 | ¥7.08/月 |
| 14 | 极连云 | `jilian` | IEPL专线 + AI场景 | 自研 + 第三方通用 | ¥18.00/月 |
| 15 | 光年梯 | `guangnian` | IEPL专线 + VLESS | 自研 + 第三方通用 | ¥18.00/月 |
| 16 | 一翻云 | `yifan` | IEPL物理专线 + 住宅IP | 自研 + 第三方通用 | ¥8.17/月 |
| 17 | SOGO云 | `sogo` | IEPL专线 (15国覆盖) | 专属 App 免配置 | ¥8.17/月 |
| 18 | 可信云 | `kexin` | IEPL专线 (高透明度) | 自研 + 第三方通用 | ¥25.00/月 |
| 19 | 速界 | `sujie` | IEPL专线 + AI优化 | 自研 + 第三方通用 | ¥25.00/月 |
| 20 | 闪跃 | `shanyue` | 纯 IPLC 骨干专线 | 专属 App 免配置 | ¥8.00/月 |
| 21 | 全球云 | `quanqiu` | IPLC/IEPL 中转 | 专属 App 免配置 | ¥8.25/月 |
| 22 | 闪电鼠 | `shandianshu` | IEPL专线 + VLESS | 自研 + 第三方通用 | ¥5.60/月 |
| 23 | 云界线 | `yunjiexian` | IEPL专线 + VLESS | 自研 + 第三方通用 | ¥5.60/月 |
| 24 | 榴莲云 | `liulianyun` | IEPL专线 (协议待核实) | 自研 + 第三方通用 | ¥5.60/月 |
| 25 | 神行加速 | `shenxing` | IEPL专线 + VLESS | 自研 + 第三方通用 | ¥14.00/月 |
| 26 | 环球梯 | `huanqiuti` | IEPL专线 + VLESS | 自研 + 第三方通用 | ¥5.60/月 |
| 27 | 隐形人 | `yinxingren` | 企业级 IPLC 专线 | 专属 App 免配置 | ¥9.08/月 |
| 28 | 梯子云 | `tiziyun` | IEPL专线 (60+节点) | 自研 + 第三方通用 | ¥7.40/月 |
| 29 | 灵动云 | `lingdong` | IEPL专线 + VLESS | 自研 + 第三方通用 | ¥8.25/月 (附录实体) |
| 30 | 浪网 | `langwang` | IEPL专线 (多周期) | 自研 + 第三方通用 | ¥9.91/月 (附录实体) |
| 31 | 边缘节点 EdgeNova | `edgenova` | 高速直连 / IPLC | 自研 + 第三方通用 | ¥9.00/月 (附录实体) |

---

## 三、常用执行命令

```bash
# 1. 运行数据校验、Astro 构建、Pagefind 索引与 QA 审计完整流水线
npm run build

# 2. 本地开发服务器预览
npm run dev

# 3. 运行静态产物预览
npm run preview

# 4. 执行 TypeScript 与 Astro 严格模板诊断
npm run check

# 5. 执行 QA 综合审核脚本
npm run qa

# 6. 运行 Knowledge API 与 GEO 观测算法单元测试
npm run worker:test
```

---

## 四、生产部署指引

1. **Cloudflare Pages 静态公开站**：
   - 构建命令：`npm run build`
   - 构建输出目录：`dist`
   - 生产域名绑定：`jichangwiki.biz`
   - 设置环境变量（参考 `.env.example`）

2. **Cloudflare Workers API（可选后台管理）**：
   - 进入 `workers/knowledge-api/`
   - 首次部署执行：`npx wrangler d1 migrations apply jichangwiki-db --remote`
   - 部署 Worker：`npx wrangler deploy`
