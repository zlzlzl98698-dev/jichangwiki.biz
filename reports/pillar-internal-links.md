# 机场 Wiki · 10 大一级专题首页内部链接矩阵网格报告

**版本**：v1.0 (2026-11)  
**目标**：构建「一级专题首页 ↔ 二级技术/对比专栏 ↔ 三级品牌深度评测/排障指南 ↔ 商业详情」四级无死角内链闭环。

---

## 1. 四级内容流转架构模型

```
[一级专题 Pillar Pages] (10个)
       │
       ├───────────────────────────────┐
       ▼                               ▼
[二级专题 Sub-Pillars]           [横向对比 Cluster]
 • /pricing/cheap-airports-comparison/   • /compare/guangsu-vs-muguang/
 • /network/iepl-vs-iplc/                • /compare/feimao-vs-weifeng/
 • /clients/windows/                     • /compare/shandianshu-vs-dalaoyun/
 • /clients/ios/                         • /compare/firefly-vs-weitu/
 • /compatibility/chatgpt-claude-gemini/ • /compare/yifan-vs-u1s1/
 • /vpn/free-vpn-risks/                  • /compare/sogo-vs-yinxingren/
 • /guides/node-timeout-troubleshooting/
 • /evidence/refunds-and-risks/
       │                               │
       ├───────────────────────────────┘
       ▼
[三级品牌主档案 & 深度评测] (31个品牌 × 2)
 • /brands/{slug}/  (唯一实体档案)
 • /reviews/{slug}/ (独立客观深度评测报告)
       │
       ▼
[商业详情与合规转化]
 • 外部官方入口 (严格 rel="nofollow sponsored noopener" target="_blank")
```

---

## 2. 10 大一级专题内部链接网格明细

### 01. 机场推荐 (`/recommend/`)
- **上级来源**：全站 Header 导航、Footer 页脚、首页 Hero 快捷入口
- **下行二级专题**：
  - [核心双雄横向对照 6 组](/compare/guangsu-vs-muguang/ 等)
- **下行三级评测**：
  - 穿透至光速云、暮光加速、飞猫云等 31 家独立评测页 (`/reviews/{slug}/`)
- **同级一级专题交叉**：
  - 资费换算 → `/pricing/`
  - 物理专线与延迟 → `/network/`
  - 客户端适配 → `/clients/`
  - AI 解锁要求 → `/compatibility/`
  - 跑路防范 → `/evidence/`

### 02. 价格与套餐 (`/pricing/`)
- **上级来源**：全站 Header 导航、`/recommend/` 价格换算入口
- **下行二级专题**：
  - [5.6元档极限平价机场深度评测](/pricing/cheap-airports-comparison/)
- **下行三级评测**：
  - 穿透至闪电鼠、大佬云、微风网络、云界线等 31 家价格档案
- **同级一级专题交叉**：
  - 选型推荐 → `/recommend/`
  - 专线成本与倍率 → `/network/`
  - 跑路与退款政策 → `/evidence/refunds-and-risks/`

### 03. 机场品牌 (`/brands/`)
- **上级来源**：全站 Header 导航、首页品牌索引区
- **下行三级主档案**：
  - 唯一实体档案库 `/brands/{slug}/` (31 家全部可直达)
  - 独立评测报告 `/reviews/{slug}/` (31 家)
- **同级一级专题交叉**：
  - 靠谱推荐 → `/recommend/`
  - 价格排行榜 → `/pricing/`
  - 客户端支持情况 → `/clients/`
  - 数据集下载 → `/data/`

### 04. VPN 与加速器 (`/vpn/`)
- **上级来源**：全站 Header 导航、GEO 问答知识库
- **下行二级专题**：
  - [免费 VPN 商业模式与底层安全漏洞](/vpn/free-vpn-risks/)
- **同级一级专题交叉**：
  - 客户端推荐与下载 → `/clients/`
  - 规则分流实操教程 → `/guides/`
  - 专线传输原理 → `/network/`
  - 靠谱服务推荐 → `/recommend/`

### 05. 客户端软件 (`/clients/`)
- **上级来源**：全站 Header 导航、各品牌实体档案中客户端字段
- **下行二级专题**：
  - [Windows 客户端专栏与配置步骤](/clients/windows/)
  - [iOS 小火箭 Shadowrocket 使用专栏](/clients/ios/)
- **同级一级专题交叉**：
  - 订阅导入实操教程 → `/guides/`
  - 节点超时排查手册 → `/guides/node-timeout-troubleshooting/`
  - VPN 概念辨析 → `/vpn/`

### 06. AI 与流媒体 (`/compatibility/`)
- **上级来源**：全站 Header 导航、`/recommend/` 场景选型
- **下行二级专题**：
  - [ChatGPT / Claude / Gemini 报错诊断专项指南](/compatibility/chatgpt-claude-gemini/)
- **下行三级评测**：
  - 31 家实测评测报告中流媒体章节 (`/reviews/{slug}/#streaming`)
- **同级一级专题交叉**：
  - 专线网络延迟与抖动 → `/network/`
  - 规则分流配置 → `/clients/`
  - 靠谱加速服务选型 → `/recommend/`

### 07. 线路与节点 (`/network/`)
- **上级来源**：全站 Header 导航、各品牌网络类型徽章
- **下行二级专题**：
  - [IEPL 专线与 IPLC 专线深度技术解析](/network/iepl-vs-iplc/)
- **同级一级专题交叉**：
  - 专线套餐价格核算 → `/pricing/`
  - 专线服务推荐 → `/recommend/`
  - 解锁兼容性 → `/compatibility/`
  - 实体品牌库 → `/brands/`

### 08. 使用教程 (`/guides/`)
- **上级来源**：全站 Header 导航、新用户引导
- **下行二级专题**：
  - [节点全部超时（-1ms / 10000ms）排查专栏](/guides/node-timeout-troubleshooting/)
- **同级一级专题交叉**：
  - 全平台客户端下载 → `/clients/`
  - 专线网络延迟 → `/network/`
  - 靠谱加速服务 → `/recommend/`

### 09. 证据中心 / 风险防范 (`/evidence/`)
- **上级来源**：全站 Header 导航、品牌卡片审计状态提示
- **下行二级专题**：
  - [运营风险深度观察与退款纠纷防范](/evidence/refunds-and-risks/)
- **同级一级专题交叉**：
  - 套餐价格陷阱 → `/pricing/`
  - 靠谱品牌筛选 → `/recommend/`
  - 事实更正提交 → `/corrections/`

### 10. GEO 问答 / 决策与排障 (`/questions/`)
- **上级来源**：全站 Header 导航、AI 搜索高频入口
- **核心穿透下行**：
  - 连接超时直达 → `/guides/node-timeout-troubleshooting/`
  - AI 报错直达 → `/compatibility/chatgpt-claude-gemini/`
  - 专线异同直达 → `/network/iepl-vs-iplc/`
  - 价格陷阱直达 → `/pricing/`
  - 跑路防范直达 → `/evidence/`

---

## 3. 死链审计与合规检查结论

1. **零死链（Zero Broken Links）**：10 个一级专题所引用的全部内部链接均为工作区内实际构建生成的 HTML 文件路由，无任何 404 或死循环跳转。
2. **商业外链完全合规**：所有跳往服务商官方站点的推广链接均继承全局安全规范，严格附带 `rel="nofollow sponsored noopener"` 与 `target="_blank"`。
