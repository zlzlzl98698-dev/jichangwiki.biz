# 机场 Wiki · GEO Brand Knowledge Engine 1.0 实施进度

- 目标域名：`https://jichangwiki.biz/`
- 当前状态：全部阶段实施完毕，QA 验收通过，构建就绪
- 最近更新：2026-11-24

## 阶段计划与实时状态

- [x] **阶段 A：扫描项目与原始资料审计**
  - [x] 扫描空工作区并完成 git 初始化
  - [x] 保存全部 5 份原始输入文档至 `data/raw/`，确保不丢失原始事实
  - [x] 安装项目核心依赖（Astro 5、Tailwind CSS、Pagefind、TypeScript、Zod）
  - [x] 编写审计分析脚本 `scripts/audit-raw-data.mjs`
  - [x] 生成数据冲突报告 `reports/conflicts.md` 与审计结果 `reports/data-audit.json`
  - [x] 完成 31 家独立品牌去重（含 Firefly 历史别名合并）

- [x] **阶段 B：构建知识库 Schema 与导入原子化快照**
  - [x] 建立 12 个核心知识数据库与支持表结构（SQL D1 Migrations `workers/knowledge-api/migrations/0001_initial_schema.sql`）
  - [x] 建立 TypeScript Zod Schema `src/lib/schema.ts`
  - [x] 编写并执行导入脚本 `scripts/import-brands.mjs`，导入 31 家品牌实体、套餐、测试、兼容性数据
  - [x] 输出原子化公开 JSON 快照 `src/data/published-brands.json` 与 `src/data/published-clients.json`
  - [x] 导出关键词与 GEO 问题矩阵 `data/keywords.json` 与 `data/questions.json`
  - [x] 输出报告 `reports/keyword-map.csv` 与 `reports/content-backlog.csv`

- [x] **阶段 C：Astro 架构、Site DNA 与十导航系统**
  - [x] 统一 BaseLayout、Header、Footer、Breadcrumbs 视觉系统与色彩规范（墨蓝 #18334B、链接蓝 #2563EB、辅助青 #0F766E）
  - [x] 绘制原创抽象网络拓扑 + 书页 Logo (`public/logo.svg` 与 `public/favicon.svg`)
  - [x] 实现 10 个一级可索引导航专题页及统一 URL 规范：
    - `01 品牌百科 /brands/`
    - `02 推荐与比较 /recommend/`
    - `03 套餐价格 /pricing/`
    - `04 网络技术 /network/`
    - `05 客户端 /clients/`
    - `06 AI与流媒体 /compatibility/`
    - `07 VPN与加速器 /vpn/`
    - `08 教程与排障 /guides/`
    - `09 证据与风险 /evidence/`
    - `10 GEO问答 /questions/`
  - [x] 实现 31 个品牌实体主档案页 `/brands/{slug}/`（采用桌面三栏可折叠文档结构）
  - [x] 实现 31 篇独立深度评测报告 `/reviews/{slug}/`
  - [x] 实现核心双雄规范两两对比页 `/compare/{a}-vs-{b}/`
  - [x] 实现 5.6 元极限平价专线测评专题 `/pricing/cheap-airports-comparison/`
  - [x] 实现 IEPL vs IPLC 深度解析专题 `/network/iepl-vs-iplc/`
  - [x] 实现 Windows 专栏 `/clients/windows/` 与 iOS 小火箭专栏 `/clients/ios/`
  - [x] 实现 AI 访问排障专题 `/compatibility/chatgpt-claude-gemini/`
  - [x] 实现免费 VPN 风险警示 `/vpn/free-vpn-risks/`
  - [x] 实现节点超时终极排查手册 `/guides/node-timeout-troubleshooting/`
  - [x] 实现退款政策与跑路防范专题 `/evidence/refunds-and-risks/`
  - [x] 完善政策与辅助页面：`/about/`、`/editorial-policy/`、`/methodology/`、`/disclosure/`、`/sources/`、`/corrections/`、`/privacy/`、`/contact/`、`/sitemap-html/`、`/404/`

- [x] **阶段 D：证据中心、图表观测系统与数据导出**
  - [x] 实现深灰蓝网络实验室风格图表（Dark Network Observatory）：
    - `SpeedTestReport.astro`：延迟与带宽进度条测速报告
    - `ServiceAvailabilityMatrix.astro`：AI 与海外流媒体解锁状态矩阵
    - `NetworkPathObservatory.astro`：专线拓扑跨境传输原理图
  - [x] 实现标准化合规商业推广组件 `ComplianceAffiliateBox.astro`，严格执行 `rel="nofollow sponsored noopener"`、`target="_blank"` 与佣金透明披露
  - [x] 编写并执行公开数据导出脚本 `scripts/export-public-data.mjs`，生成 `/data/brands-v1.0.json`、`/data/brands-v1.0.csv` 及数据字典 `/data/data-dictionary.json`

- [x] **阶段 E：Workers/D1 知识库管理端与 GEO 监控系统**
  - [x] 搭建 `workers/knowledge-api/` 服务，配置 `wrangler.toml` 与 TypeScript 编译环境
  - [x] 实现 Cloudflare Access JWT 验证与 Bearer 令牌鉴权（写入接口全部强制鉴权）
  - [x] 实现 GEO 观测指标算法 `calculateGeoMetrics`（品牌提及率、网站引用率、事实准确率，零分母输出 N/A）
  - [x] 编写并执行测试套件 `workers/knowledge-api/tests/worker.test.mjs`，全部通过

- [x] **阶段 F：全站测试、Pagefind 中文分词、构建与最终交付**
  - [x] 编写并运行数据实体校验脚本 `scripts/validate-data.mjs`（通过）
  - [x] 运行 Astro 严格模板检查 `npm run check`（46 个文件 0 错误 0 警告）
  - [x] 运行 Astro 全量静态构建，成功生成 99 个静态页面与 `sitemap-index.xml`
  - [x] 运行 Pagefind 完成 99 页面 `zh-cn` 中文分词检索索引（索引 9,155 词）
  - [x] 编写并运行 QA 综合审计脚本 `scripts/qa-check.mjs`（全站 99 页 passed，核对 69 个推广外链合规属性）
  - [x] 输出完整 QA 报告 `reports/qa-report.json` 与项目文档 `README.md`

- [x] **阶段 G：预览验收与视觉精调（UI Polish）**
  - [x] 优化桌面端主导航（10 个专题栏目）在 1024px~1440px 视口下的紧凑度与防折行属性
  - [x] 首页 H1 主标题应用 `text-balance` 消除单字排版挂角
  - [x] 优化网络实验室暗色服务可用性矩阵（`ServiceAvailabilityMatrix`）在全尺寸下的网格边距与徽章不换行
  - [x] 全站流水线回归重构成功：99 个页面与 Pagefind 索引完成重新校验
  - [x] 本地预览服务保持运行于 `http://localhost:4321/`（可在浏览器中即时访问）

- [x] **阶段 H：全站二级 SEO 专题深度升级与内容矩阵建设 (Secondary Topic Hub Expansion)**
  - [x] 落地全站 20 个重点二级专题 Hub，正文累计超过 102,000 汉字（每篇 5,000–8,000 字）
  - [x] 规划全站 120 篇三级衍生深度文章 Backlog 清单与 P0/P1/P2 排期
  - [x] 全量二级 Hub 注入 Schema.org TechArticle、FAQPage 与 BreadcrumbList 结构化数据
  - [x] 全站 Header 下拉、Footer 专栏与 HTML 网站地图全面更新对齐
  - [x] 生成 7 份权威二级专题交付与审计报告归档于 `reports/`：
    - `reports/secondary-topic-audit.md`
    - `reports/secondary-keyword-map.md`
    - `reports/secondary-topic-clusters.md`
    - `reports/secondary-article-backlog.md`
    - `reports/secondary-internal-links.md`
    - `reports/secondary-content-quality.md`
    - `reports/secondary-final-report.md`
  - [x] 通过 `astro check` (0 errors, 0 warnings) 与完整静态构建 `npm run build`
  - [x] Pagefind 多语言全文索引完成（111 页面全部收录）
  - [x] 运行并通过 `scripts/qa-check.mjs` 全自动质量验收（111 页面零死链、外链合规）


## 阶段九：三级 SEO 长尾文章矩阵 + 品牌深度评测 + 商业转化全链路升级 (Stage I - 2026-11-24)
- [x] **长尾关键词数据资产建设**：
  - [x] 创建 `data/keywords/longtail-master.csv`（24 条核心长尾词库，包含一级/二级/意图/搜索量/转化度/受众）
  - [x] 创建 `data/keywords/article-keyword-map.json`（文章与意图/受众/关联文章与品牌的完整映射）
  - [x] 创建 `data/keywords/cluster-map.json`（Pillars -> Hubs -> Clusters 三级树状拓扑图）
  - [x] 创建 `data/keywords/content-priority.csv`（P0/P1/P2 阶段优先级排期表）
- [x] **核心 P0 三级技术长尾文章编写与落地**（12 篇，累计 43,440 汉字，篇均 3,620 汉字）：
  - [x] `/clients/windows/terminal-proxy-powershell-git/`：PowerShell 与 Git 代理配置完全指南
  - [x] `/clients/windows/uwp-loopback-exemption-fix/`：UWP 微软商店断网与 CheckNetIsolation 修复
  - [x] `/clients/ios/us-apple-id-registration-guide/`：美区 Apple ID 免卡注册与小火箭正版指南
  - [x] `/clients/ios/networkextension-15mb-memory-fix/`：iOS 15MB 内存限制小火箭断流排障
  - [x] `/compatibility/chatgpt-claude-gemini/claude-ban-appeal-template/`：Claude 封号英文申诉与防封
  - [x] `/compatibility/chatgpt-claude-gemini/chatgpt-plus-stripe-anti-fraud/`：ChatGPT Plus Stripe 欺诈评分穿透
  - [x] `/compatibility/netflix-disney-streaming/tvos-apple-tv-4k-setup/`：Apple TV 4K tvOS 17 原生代理指南
  - [x] `/pricing/cheap-airports-comparison/1gbps-bandwidth-cost/`：1Gbps 专线月租采购成本解剖
  - [x] `/pricing/monthly-plans/game-theory-monthly-vs-yearly/`：买月付还是年付博弈论与防跑路
  - [x] `/pricing/non-expiring-data/dual-sim-redundancy-setup/`：主力专线+不限时双持容灾架构
  - [x] `/guides/node-timeout-troubleshooting/proxyenable-registry-fix-script/`：注册表 ProxyEnable 一键恢复批处理
  - [x] `/evidence/refunds-and-risks/chargeback-credit-card-dispute/`：信用卡 Chargeback 争议拒付实战
- [x] **品牌深度独立评测系统升级 (`/reviews/[slug].astro`)**：
  - [x] 升级 31 家品牌专属结构化内容块（光速云旗舰 BGP 入口与 20 组香港节点、飞猫云小白自研 App、二猫云多设备、隐形人无订阅通道、闪电鼠与大佬云不限时容灾包）
  - [x] 注入适合人群 vs 绝不适合人群深度对照卡
  - [x] 显式呈现已知数据冲突备忘（如 59GB vs 69GB、年付折算说明）
- [x] **品牌对比体系升级 (`/compare/[comparison].astro`)**：
  - [x] 新增扩充至 12 组核心对决（guangsu-vs-feimao, guangsu-vs-ermao, feimao-vs-xingdaomeng, dalaoyun-vs-shandianshu 等）
- [x] **十份全套质量审计与交付报告输出**：
  - [x] `reports/third-level-audit.md`
  - [x] `reports/longtail-keyword-map.md`
  - [x] `reports/article-production-report.md`
  - [x] `reports/brand-review-matrix.md`
  - [x] `reports/brand-data-conflicts.md`
  - [x] `reports/brand-comparison-plan.md`
  - [x] `reports/internal-link-matrix.md`
  - [x] `reports/seo-geo-validation.md`
  - [x] `reports/conversion-audit.md`
  - [x] `reports/final-delivery-report.md`
- [x] **全站编译与 QA 验收**：
  - [x] `npm run check`：70 个 Astro 文件 0 错误、0 警告、0 提示
  - [x] `npm run build`：全站 129 个静态页面全部成功编译生成
  - [x] `pagefind`：成功索引 129 个页面、41,175 个词汇
  - [x] `scripts/qa-check.mjs`：129/129 页面全面通过 QA 审计，80 处商业链接 100% 符合 `rel="nofollow sponsored noopener"` 准则
