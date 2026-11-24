# 品牌横向对比规划与落实报告 (brand-comparison-plan.md)

**生成时间**：2026-11-24  
**审计执行**：机场 Wiki 比较分析组  
**路由位置**：`src/pages/compare/[comparison].astro`  

---

## 1. 品牌对比页面建设目标

品牌对比是承接高商业意图搜索（Commercial Investigation）的关键阵地。用户通常在 2 到 3 个知名品牌之间纠结犹豫。本站对比体系的目标是：
- 通过并排核心参数表格（价格折算、网络类型、协议、客户端模式、解锁矩阵）消除信息不对称；
- 从架构、晚高峰抗抖动与预算三个角度给出客观选型建议，不搞“二选一拉踩”；
- 引导用户通向各自的独立评测页（`/reviews/{slug}/`）与百科商业详情页（`/brands/{slug}/`）。

---

## 2. 已落地高价值对比路由表 (12 组核心对决)

| 对比路由 (Target URL) | 品牌 A | 品牌 B | 核心对比维度与读者决策重点 |
|---|---|---|---|
| `/compare/guangsu-vs-muguang/` | 光速云 (Guangsu) | 暮光加速 (Muguang) | 老牌综合低价专线 vs IPLC 高速流媒体旗舰 |
| `/compare/guangsu-vs-feimao/` | 光速云 (Guangsu) | 飞猫云 (Feimao) | 自由通用订阅导入 vs 小白一键专有客户端 |
| `/compare/guangsu-vs-ermao/` | 光速云 (Guangsu) | 二猫云 (Ermao) | 企业级大带宽定制 vs 多设备并发家庭性价比 |
| `/compare/feimao-vs-weifeng/` | 飞猫云 (Feimao) | 微风云 (Weifeng) | 新手开箱体验 vs 极限学生平价入门 |
| `/compare/feimao-vs-xingdaomeng/` | 飞猫云 (Feimao) | 星岛梦 (Xingdaomeng) | 自研专属软件 vs 多区域节点流媒体覆盖 |
| `/compare/shandianshu-vs-dalaoyun/` | 闪电鼠 (Shandianshu) | 大佬云 (Dalaoyun) | 不限时按量流量包双雄横向对决 |
| `/compare/dalaoyun-vs-shandianshu/` | 大佬云 (Dalaoyun) | 闪电鼠 (Shandianshu) | 冷备容灾线路拓扑与单价按量测算 |
| `/compare/firefly-vs-weitu/` | 萤火虫 (Firefly) | 微图 (Weitu) | 中小团队日常办公稳定性对比 |
| `/compare/yifan-vs-u1s1/` | 一番 (Yifan) | U1S1 (U1S1) | 极客极简订阅与规则分流表现 |
| `/compare/sogo-vs-yinxingren/` | SOGO (Sogo) | 隐形人 (Yinxingren) | 经典多协议订阅 vs 专有自研加密隧道 |
| `/compare/yinxingren-vs-lingdong/` | 隐形人 (Yinxingren) | 灵动云 (Lingdong) | 抗封锁专有 App vs 现代化轻量分流 |
| `/compare/edgenova-vs-langwang/` | EdgeNova (Edgenova) | 狼网 (Langwang) | 全球分布式企业网络 vs 传统专线中转 |

---

## 3. 对比页质量验收标准

- 所有对比页面必须在构建期静态生成 HTML；
- 必须具备完整的 `TechArticle` Schema 结构化数据；
- 页面必须提供双品牌的直接合规跳转，并带有清晰明确的披露标识。
