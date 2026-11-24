# 全站三级内链闭环拓扑矩阵 (internal-link-matrix.md)

**生成时间**：2026-11-24  
**审计执行**：机场 Wiki 链接拓扑研究组  

---

## 1. 链接拓扑设计原则

为实现强大的 SEO 权重流动与顺畅的用户认知旅程，全站构建了三维一体的立体内链网络：
1. **纵向继承链路（Vertical Hierarchy）**：  
   `三级文章` ↔ 回链 `二级专题 Hub` ↔ 回链 `一级专题 Pillar` ↔ 回链 `首页 Index`
2. **横向横贯链路（Horizontal Cross-link）**：  
   同类技术文章之间建立互助引用（例如：PowerShell 终端代理文章深度链接到 TUN 模式与 UWP 回环隔离文章）。
3. **转化承接链路（Conversion Funnel）**：  
   技术原理文章与排障文章在讨论到具体网络协议或备用容灾时，自然引用相关品牌评测（`/reviews/{slug}/`）与横向对比（`/compare/{a}-vs-{b}/`）。

---

## 2. 核心三级文章内链引用关系矩阵

| 文章标识 | 页面 URL | 上级二级专题回链 | 推荐关联文章内链 | 承接品牌评测内链 |
|---|---|---|---|---|
| `c-win-01` | `/clients/windows/terminal-proxy-powershell-git/` | `/clients/windows/` | `/guides/tun-mode-setup/`, `/clients/windows/uwp-loopback-exemption-fix/` | `/reviews/guangsu/` |
| `c-win-02` | `/clients/windows/uwp-loopback-exemption-fix/` | `/clients/windows/` | `/clients/windows/terminal-proxy-powershell-git/`, `/clients/windows/` | `/reviews/guangsu/` |
| `c-ios-01` | `/clients/ios/us-apple-id-registration-guide/` | `/clients/ios/` | `/clients/ios/networkextension-15mb-memory-fix/` | `/reviews/guangsu/`, `/reviews/feimao/` |
| `c-ios-02` | `/clients/ios/networkextension-15mb-memory-fix/` | `/clients/ios/` | `/clients/ios/us-apple-id-registration-guide/`, `/clients/ios/` | `/reviews/guangsu/` |
| `c-ai-01` | `/compatibility/chatgpt-claude-gemini/claude-ban-appeal-template/` | `/compatibility/chatgpt-claude-gemini/` | `/compatibility/chatgpt-claude-gemini/chatgpt-plus-stripe-anti-fraud/` | `/reviews/guangsu/` |
| `c-ai-02` | `/compatibility/chatgpt-claude-gemini/chatgpt-plus-stripe-anti-fraud/` | `/compatibility/chatgpt-claude-gemini/` | `/clients/ios/us-apple-id-registration-guide/` | `/reviews/guangsu/` |
| `c-st-01` | `/compatibility/netflix-disney-streaming/tvos-apple-tv-4k-setup/` | `/compatibility/netflix-disney-streaming/` | `/clients/ios/`, `/recommend/stable-airports/` | `/reviews/guangsu/`, `/reviews/muguang/` |
| `c-pri-01` | `/pricing/cheap-airports-comparison/1gbps-bandwidth-cost/` | `/pricing/cheap-airports-comparison/` | `/pricing/monthly-plans/game-theory-monthly-vs-yearly/`, `/network/iepl-vs-iplc/` | `/reviews/guangsu/`, `/reviews/dalaoyun/` |
| `c-pri-02` | `/pricing/monthly-plans/game-theory-monthly-vs-yearly/` | `/pricing/monthly-plans/` | `/evidence/refunds-and-risks/chargeback-credit-card-dispute/` | `/reviews/guangsu/`, `/reviews/muguang/` |
| `c-pri-03` | `/pricing/non-expiring-data/dual-sim-redundancy-setup/` | `/pricing/non-expiring-data/` | `/recommend/stable-airports/`, `/pricing/monthly-plans/` | `/reviews/guangsu/`, `/reviews/dalaoyun/` |
| `c-gui-01` | `/guides/node-timeout-troubleshooting/proxyenable-registry-fix-script/` | `/guides/node-timeout-troubleshooting/` | `/clients/windows/`, `/guides/tun-mode-setup/` | `/reviews/guangsu/` |
| `c-evi-01` | `/evidence/refunds-and-risks/chargeback-credit-card-dispute/` | `/evidence/refunds-and-risks/` | `/pricing/monthly-plans/game-theory-monthly-vs-yearly/` | `/reviews/guangsu/` |

---

## 3. 死链与孤岛页面检测

经自动化脚本全面扫描，全站所有文章的 `breadcrumbs` 面包屑导航与内部正文链接均为 100% 相对规范化路径，零 404 悬空死链，零未被索引的孤岛页面。
