# 机场 Wiki · GEO 品牌知识引擎 1.0 高级预防性 SEO 与 GEO 全站深度审计报告

> **执行周期**：2026-11-24  
> **审计对象**：`https://jichangwiki.biz/`（静态构建产物 `dist/` 共 135 个编译页面）  
> **审计视角**：搜索引擎网络爬虫（Googlebot / Bingbot / OAI-SearchBot）、风控质量算法（Helpful Content System / 细雨算法）与生成式引擎（GEO / AEO RAG 抽取机制）  
> **执行准则**：只审计不修改代码、客观中立、证据驱动、严禁主观编造

---

## 1. 核心健康评分表 (0-100分)

| 审计维度 | 权重占比 | 得分 | 核心诊断说明 |
| :--- | :--- | :--- | :--- |
| **索引与抓取机制** | 25% | **21** | `robots.txt`、`sitemap-0.xml`（133 规范页）、Canonical 闭环与 SSG 预渲染表现优秀（均为 PASS）；但全站扫描发现 **34 处内部死链**（主要是评测页自比逻辑缺陷产生的 30 处死链及 4 处未落地三级路由），扣 4 分。 |
| **站群风控与合规** | 25% | **23** | 80+ 处商业推广链接 100% 具备 `rel="nofollow sponsored noopener"`；全站零第三方追踪代码（GA4/百度/AdSense 零指纹）；无内网 IP 或物理宿主路径泄露；存在少量模板指纹特征，扣 2 分。 |
| **内容深度与 GEO** | 20% | **18** | 全站平均中文字符达 **2,897 字**，核心技术长文达 3,500–6,000 字；具备清晰的 Answer-First 导语与 112 处标准数据表；12 篇对比页（约 1,715 字）处于薄内容边缘警戒线，扣 2 分。 |
| **E-E-A-T 与信任** | 15% | **15** | **PASS**。顶部与页脚显式披露商业关系，无编造的虚假评分（如 4.9/5 星）或虚假评论，拥有完整的编辑方针、测试方法论、事实纠错与开源数据快照体系。 |
| **Schema 与 SERP** | 15% | **15** | **PASS**。全站 540 个 JSON-LD 语法 100% 有效，涵盖 Organization、WebSite、BreadcrumbList、TechArticle 与 FAQPage；FAQ 问答对与可见正文 100% 对应；Title 与 Description 135 页 100% 唯一无堆砌。 |
| **综合总分** | **100%** | **92** | **评级：优秀 (A-)**。基础技术底座极度扎实，需重点消除模板逻辑导致的内部死链并提升对比页厚度。 |

---

## 2. 爬虫抓取与索引预算审计 (Crawl & Index)

### 2.1 Robots 与 XML Sitemap 审计
- **robots.txt 规范性**：`PASS`
  - 路径：`dist/robots.txt`
  - 抓取策略：全局默认 `Allow: /`，针对性合规屏蔽 `/admin/`、`/search/` 与 `/draft/`，未错误屏蔽 CSS/JS/字体等渲染资源。
  - 爬虫分流：对 `Googlebot`、`Bingbot`、`OAI-SearchBot`、`PerplexityBot` 均配置放行；对 AI 语料清洗爬虫（`GPTBot`、`CCBot`）限制搜索与后台。
  - 索引地图指向：末尾明确指定 `Sitemap: https://jichangwiki.biz/sitemap-index.xml`，大小写与协议一致。
- **XML Sitemap 准确性**：`PASS`
  - 路径：`dist/sitemap-index.xml` -> `dist/sitemap-0.xml`
  - 规模：收录 133 个 URL。
  - 状态码一致性：133 个网址在静态磁盘中 100% 存在对应的物理 `index.html`，HTTP 状态码均为 200。
  - 坏死与废弃过滤：
    - `404.html`：未进入 Sitemap（`PASS`）。
    - `/search/`（带 `noindex`）：未进入 Sitemap（`PASS`）。
    - 重定向 URL：Sitemap 中 0 重定向链，100% 规范直达。

### 2.2 规范化 (Canonical) 矩阵审计
- **绝对地址合规性**：`PASS`
  - 全站 135 个 HTML 页面均配置了 `<link rel="canonical" href="...">`。
  - 100% 采用正式域名 `https://jichangwiki.biz/`，无 `http://`、无 `www.` 镜像、无 localhost 残留。
- **自闭环与尾斜杠规范**：`PASS`
  - 全站页面（除根目录与 404 外）统一保持末尾带有尾斜杠 `/`，Canonical URL 与实际目录物理路径 100% 严格一致（如 `https://jichangwiki.biz/guides/tun-mode-setup/`），未发现大小写或尾斜杠引起的重复页面分流。

### 2.3 JS 渲染与 DOM 结构审计
- **预渲染等级**：`PASS (SSG 全静态渲染)`
  - 核心正文、对比表格、FAQ 折叠块、面包屑导航与文章链接全部在构建阶段输出为完整 HTML。
  - 在完全禁用 JavaScript 的环境下，爬虫能够完整提取全部正文文字与实体属性，无 CSR 客户端渲染白屏或延迟水合（Hydration）风险。
- **空超链接与假按钮审计**：`PASS`
  - 全站扫描 0 处 `<a href="">`、0 处 `<a href="#">`、0 处 `javascript:void(0)`。
  - 导航系统与移动端折叠菜单均依托语义化标准标签，不依赖 JS 点击跳转。

### 2.4 状态码异常与内部死链审计
- **Soft 404 检查**：`PASS`
  - 除真正的 `/404.html` 外，全站无任何返回 200 但正文空白的 Soft 404 假页面。
- **内部死链审计**：`FAIL (高危发现)`
  - 全站扫描发现 **34 处内部死链**，详见下文清单。主要由于评测页面底部相关对比模块的逻辑判断缺陷，导致批量输出了不存在的对比 URL。

---

## 3. 站群风控与架构隔离审计 (Risk Control)

### 3.1 代码与模板指纹审计
- **HTML/CSS 指纹分析**：`WARN`
  - 采用 Astro + Tailwind CSS 构建，编译后全局输出 `_astro/_page_.<hash>.css`。
  - 31 个品牌实体页 (`/brands/[slug]/`) 和 31 个评测页 (`/reviews/[slug]/`) 采用了相同的文档型布局骨架与 Tailwind class 组合。
  - 若未来在同 IP 或同集群下复制部署其他姊妹站，极易被搜索引擎的反作弊网络算法识别为“同一模板矩阵”。建议在单站内增加更多品牌专属的差异化组件或动态图表。

### 3.2 统计与追踪代码隔离审计
- **第三方追踪脚本指纹**：`PASS`
  - 源码及构建产物全面审计：0 处 Google Analytics (GA4 / `G-XXXX`)、0 处百度统计 (`hm.baidu.com`)、0 处 Google AdSense (`ca-pub-XXXX`)。
  - 不存在任何可能被搜索引擎算法串联判定为“站群/网络矩阵所有者”的第三方 Client ID 指纹。

### 3.3 外链连坐防范审计
- **商业推广外链属性**：`PASS`
  - 全站共提取 93 条出站外部链接，其中 80 条为指向合作网络服务商的商业转介链接。
  - **这 80 条商业引流链接 100% 严格包裹了 `rel="nofollow sponsored noopener"` 属性**，无一遗漏。
  - 判定结果：彻底杜绝了被 Google 算法判定为“售卖未标记付费链接（Paid Link Scheme）”的手动惩罚风险。
- **非商业外部链接审计**：`NOTICE`
  - 剩余 13 条外部链接主要指向 GitHub 开源仓库（如 `https://github.com/clash-verge-rev/clash-verge-rev`、`2dust/v2rayN` 等），当前属性为 `rel="noopener noreferrer"`。属于合理的自然编辑外链，未传递负面权重。

### 3.4 基础设施与敏感信息暴露审计
- **内网 IP 与物理路径检查**：`PASS`
  - 全站无服务器真实内网 IP、SSH 密钥或未授权品牌名泄露。
  - 扫描中命中的 `127.0.0.1` 与 `C:\Users\<用户名>\.ssh\config` 均位于 Windows 终端代理与 TUN 模式教程的正文代码块中，明确用于教学演示，不构成信息泄漏风险。

---

## 4. 内容质量与语义权威审计 (E-E-A-T & GEO)

### 4.1 内容厚度与模板化识别
- **全站字数分布统计**：
  - 全站 135 个页面平均中文字数：**2,897 汉字**。
  - 最长页面 TOP 3：
    - `/questions/`：7,562 汉字（包含 47 个技术问答实体）
    - `/recommend/stable-airports/`：6,307 汉字（深度评测与选型方法）
    - `/brands/review-methodology/`：6,226 汉字（审计评测标准）
  - 薄内容警戒区（< 2,000 汉字）：
    - 纯功能与法律页：`/404.html` (1,125字)、`/search/` (1,107字)、`/contact/` (1,239字)、`/privacy/` (1,287字)、`/editorial-policy/` (1,354字)、`/about/` (1,427字)。属于标准政策页，符合规范。
    - **对比页警戒**：`/compare/dalaoyun-vs-shandianshu/`、`/compare/firefly-vs-weitu/` 等 4 个对比页字数约 **1,715 汉字**，低于 2,000 字门槛，存在一定的模板化填充风险。

### 4.2 GEO / AEO 结构化布局与知识抽取审计
- **首段直答 (Answer-First)**：`PASS`
  - 每一个二级专题与三级技术长文在 H1 后均紧跟 150–200 字的核心摘要或关键结论卡片，便于搜索引擎 AI Overviews 与 Perplexity/ChatGPT 直接提取为精选摘要。
- **结构化数据表格 (Tables)**：`PASS`
  - 112 个页面包含了语义化 `<table>`，表头 `<th>` 与内容单元格 `<td>` 语义完备，无嵌套混乱，方便 RAG 引擎执行数据检索。
- **实体无歧义命名**：`PASS`
  - 全文严格以专有名词（如“光速云”、“WireGuard Wintun 驱动”、“Mihomo 内核”）为主语，极少使用“这家”、“该产品”等代词，大幅降低了 AI 提取实体三元组时的歧义率。

### 4.3 数据溯源与真实度审计
- **基准测试与更新时间戳**：`PASS`
  - 所有网络参数评测均标注了“2026年11月观测数据”与“基准测试环境”，具备可溯源特征。
- **虚假信用元素排查**：`PASS`
  - 页面无任何人工捏造的“4.9/5 星评分卡”或未经验证的用户五星头像好评，符合 Google 真实评测指导原则。

---

## 5. 结构化数据与社交展现审计 (Schema & SERP)

### 5.1 JSON-LD 真伪与完整性校验
- **Schema 统计与语法检查**：`PASS`
  - 全站共挂载 **540 个 JSON-LD 结构化数据节点**，语法解析错误率为 **0%**。
  - 分类明细：
    - `Organization`：135 处
    - `WebSite`：135 处
    - `BreadcrumbList`：134 处
    - `TechArticle`：112 处
    - `FAQPage`：21 处
    - `Dataset`：1 处（公开数据页面）
    - `ItemList`：2 处
- **Schema 欺诈排查 (Hidden Schema)**：`PASS`
  - 深度抽检 21 处 `FAQPage`，Schema 内声明的每一个 Question 和 Answer 均在页面可见的 DOM 文本中 100% 存在，不存在向搜索引擎隐藏标记虚假问答的问题。

### 5.2 Open Graph & Meta 标签审计
- **Title 唯一性**：`PASS (135/135 唯一)`
  - 全站 135 个页面的 `<title>` 互不重复，均遵循 `[核心主题] (2026最新) - [专业修饰] - 机场 Wiki` 的命名法则。
- **Description 唯一性**：`PASS (135/135 唯一)`
  - 全站 135 个页面的 `<meta name="description">` 互不重复，长度均在 80–140 字符之间，无关键词堆砌现象。

---

## 6. 漏洞与降权风险清单 (P0 / P1 / P2)

### 🚨 P0 (致命红线 - 立即修复)
> **状态：本次审计未发现外部链接漏加 nofollow、共用追踪 ID、Canonical 劫持等致命级反作弊红线（PASS）。**  
> 但发现 1 项直接危害全站索引质量与爬虫预算的严重技术缺陷：

#### P0-1：评测页模板逻辑缺陷导致 30 处死链集中爆发
- **具体位置**：
  - 源码文件：`src/pages/reviews/[slug].astro:333`
  - 渲染后页面：`/reviews/dalaoyun/`、`/reviews/feimao/`、`/reviews/muguang/` 等全部 30 个非光速云品牌评测页。
- **代码特征**：
  ```astro
  <a href={`/compare/guangsu-vs-${brand.slug === 'guangsu' ? 'feimao' : 'guangsu'}/`}>
  ```
- **实际渲染结果**：
  当 `brand.slug` 不等于 `guangsu` 时，生成的链接为：
  `<a href="/compare/guangsu-vs-guangsu/">`（光速云对比光速云自身）。该页面物理不存在，返回 404。
- **影响算法机制**：
  - 爬虫抓取预算浪费（Crawl Budget Wastage）：爬虫沿着评测页面爬取时，在 30 个核心实体页面上均遭遇 404 死链。
  - 触发 Google 质量评估系统（Quality Rater）的“低质量维护”降权判定。
- **修复动作**：
  在三元表达式中纠正品牌对比 slug 拼接逻辑，确保始终生成有效的对比双方（如 `${brand.slug}-vs-guangsu` 或建立有效映射）。

---

### ⚠️ P1 (高危隐患 - 本周修复)

#### P1-1：二级专题枢纽中引用了 4 个尚未建立的路由导致内链 404
- **具体位置与死链**：
  1. `/clients/clash-verge-rev/` -> 链接至 `/clients/clash-meta/`
  2. `/guides/subscription-import-guide/` -> 链接至 `/clients/sing-box/`
  3. `/evidence/runaway-warning-and-alternatives/` -> 链接至 `/evidence/historical-speed-tests/`
  4. `/evidence/runaway-warning-and-alternatives/` -> 链接至 `/network/network-privacy-and-anonymity/`
- **影响算法机制**：
  内部链接断裂会中断 PageRank 与主题权威度的顺畅流转，且容易被爬虫判定为“未完成的半成品站点”。
- **修复动作**：
  - 方案 A（推荐）：为这 4 个选题新建独立的 `.astro` 页面并补充深度内容。
  - 方案 B：临时将超链接指向所属专题的根页面或具体章节锚点（如 `/clients/#clash-meta`）。

#### P1-2：部分对比页面（/compare/）内容厚度处于边缘警戒线
- **具体位置**：
  - `/compare/dalaoyun-vs-shandianshu/` (1,715 字)
  - `/compare/firefly-vs-weitu/` (1,715 字)
  - `/compare/shandianshu-vs-dalaoyun/` (1,715 字)
  - `/compare/yifan-vs-u1s1/` (1,719 字)
- **影响算法机制**：
  Google Helpful Content System（有用内容系统）与中文搜索引擎算法会重点监控高频的对比模式页。若文字量低于 2,000 字且主体对比项为纯参数重组，易被降权归类为“模板聚合薄内容（Thin Content）”。
- **修复动作**：
  为上述对比页补充具体的实测节点对比数据、晚高峰测速对比、适合人群 vs 避坑人群的差异化分析段落，确保单页文字量提升至 2,500 汉字以上。

---

### 🟡 P2 (优化机会 - 规划修复)

#### P2-1：开源软件外部下载链接缺少 `nofollow` 声明
- **具体位置**：
  - 页面：`/clients/` 与 `/clients/clash-verge-rev/`
  - 外链：指向 GitHub Releases 的 6 条链接（如 `https://github.com/clash-verge-rev/clash-verge-rev/releases`、`2dust/v2rayN` 等），目前为 `rel="noopener noreferrer"`。
- **影响算法机制**：
  虽然是开源技术链接，但向外部权威域无条件输出 PageRank。在高度敏感的代理工具领域，建议全站对所有非自有主域名的出站链接统一执行严格的 nofollow 控制。
- **修复动作**：
  在客户端列表组件中将外链属性统一替换为 `rel="nofollow noopener noreferrer"`。

#### P2-2：12 组对比页面缺失专属 FAQPage 结构化数据
- **具体位置**：全站 `/compare/*` 路由。
- **影响机制**：
  对比页面是承接搜索用户“A 与 B 哪个更好/哪个更稳”长尾意图的最强抓手。缺少 FAQPage Schema 将错失 Google SERP 折叠问答浮层与 AI 对话引擎的直接抓取机会。
- **修复动作**：
  在 `src/pages/compare/[comparison].astro` 中追加 2–3 组专属对比 FAQ（如“A 和 B 的流媒体解锁哪个更强？”、“谁更适合晚高峰玩游戏？”），并同步挂载 `FAQPage` JSON-LD。

#### P2-3：部分技术教程代码说明中存在弱指代代词
- **具体位置**：
  `wintun-driver-architecture.astro`、`docker-tun-transparent-proxy.astro` 等技术指南的部分段落中存在“它会在后台创建...”、“该驱动在收到包后...”等句式。
- **影响机制**：
  GEO 生成式引擎在进行局部 Chunk 向量切片时，若上下文被截断，“它”会导致实体属性绑定失败，降低 RAG 召回精度。
- **修复动作**：
  在后续内容审校中，将泛指代词规范化为具体的实体名词（如“Wintun 驱动”、“Docker 透明网关守护进程”）。

---

## 7. 终极改造行动 SOP (Top 5 - 按 ROI 排序)

| 优先级 | 行动代号 | 执行内容 | 预期 ROI 效果 |
| :---: | :--- | :--- | :--- |
| **01** | **FIX-REVIEW-DEADLINKS** | 修改 `src/pages/reviews/[slug].astro` 第 333 行，修复自比逻辑错误，消除 30 个 `/compare/guangsu-vs-guangsu/` 404 死链。 | **最高**。立竿见影消除 88% 的全站死链，杜绝爬虫抓取预算浪费与低质降权。 |
| **02** | **RESOLVE-ORPHAN-HUBS** | 为 4 个未落地路由（`/clients/clash-meta/`、`/clients/sing-box/`、`/evidence/historical-speed-tests/`、`/network/network-privacy-and-anonymity/`）补全页面或修正内链指向。 | **高**。实现全站 100% 内部链接闭环，消除全站最后 4 个 404 死链。 |
| **03** | **EXPAND-COMPARE-DEPTH** | 针对低于 2,000 字的 4 个对比页面，注入实测吞吐数据表、晚高峰对比与差异化避坑说明，并挂载 `FAQPage` Schema。 | **高**。彻底摆脱 Thin Content 模板农场算法监控，获取 SERP FAQ 富媒体展示。 |
| **04** | **STANDARDIZE-OUTBOUND-REL** | 审查全站所有指向 GitHub 及外部网站的链接，统一步骤补全 `rel="nofollow noopener noreferrer"`。 | **中**。彻底锁死权重流失通道，防御外部域名风险连坐。 |
| **05** | **GEO-ENTITY-DISAMBIGUATION** | 全面执行技术排障长文的代词消歧，强化“实体 + 属性 + 观测值”结构化排版，提升 AI Overviews 引用权重。 | **持续**。大幅提升在 ChatGPT、Perplexity、Google Gemini 等生成式引擎中的推荐采纳率。 |

