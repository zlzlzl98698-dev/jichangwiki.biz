# 三级长尾关键词发现与映射报告 (longtail-keyword-map.md)

**生成时间**：2026-11-24  
**审计执行**：机场 Wiki 搜索意图研究组  
**关联数据源**：`data/keywords/longtail-master.csv`、`data/keywords/article-keyword-map.json`、`data/keywords/content-priority.csv`  

---

## 1. 关键词工作流与意图分流体系

本站长尾关键词体系严格遵照持续运行的网状发现模型：  
**一级核心词（大词） → 二级场景意图（分类词） → 三级具体长尾问题（精准意图） → 权威长尾解答 → 品牌评测与对比 → 购买决策**

### 意图分类分布与特征

| 意图分类 (Search Intent) | 意图特征描述 | 对应典型长尾词 | 本站应对策略 |
|---|---|---|---|
| **Troubleshooting (排障)** | 遇到明确网络阻断、报错代码或系统崩溃 | 微软商店0x80072EFD、小火箭后台断流、Claude封号申诉、ProxyEnable恢复 | 答案前置（Answer-first），提供一行代码或一键批处理秒级修复 |
| **How-to (操作教程)** | 跨越平台限制、注册特定软件或完成架构搭建 | Windows终端代理、美区Apple ID注册、Apple TV看奈飞4K、双持备用机场 | 步骤编号清晰，提供实操截图说明与防坑要诀 |
| **Commercial Investigation (购买前研究)** | 价格敏感、防被骗心理、对比周期优势 | 机场月付年付对比、买三年送两年套路、沉淀资金博弈论 | 从经济学与运营财务角度算清真实成本，拆穿虚假优惠 |
| **Informational (原理解析)** | 探究底层链路原理、成本构成与技术演进 | 1Gbps跨境专线成本、专线物理带宽价格、专线超卖比例 | 提供真实的运营商批发账单数据与物理吞吐数学计算模型 |

---

## 2. 核心长尾关键词映射总表

```json
[
  {
    "id": "c-win-01",
    "primaryKeyword": "Windows终端代理",
    "targetUrl": "/clients/windows/terminal-proxy-powershell-git/",
    "secondary": ["PowerShell代理", "Git clone加速", "WSL2代理配置", "CMD环境变量代理"],
    "intent": "How-to",
    "conversion": "Low"
  },
  {
    "id": "c-win-02",
    "primaryKeyword": "微软商店代理断网",
    "targetUrl": "/clients/windows/uwp-loopback-exemption-fix/",
    "secondary": ["Windows UWP应用隔离", "CheckNetIsolation命令", "Fiddler Loopback工具"],
    "intent": "Troubleshooting",
    "conversion": "Medium"
  },
  {
    "id": "c-ios-01",
    "primaryKeyword": "美区Apple ID免信用卡注册",
    "targetUrl": "/clients/ios/us-apple-id-registration-guide/",
    "secondary": ["美区苹果账号注册", "美区App Store礼品卡充值", "Shadowrocket正版购买", "免税州账单地址"],
    "intent": "How-to",
    "conversion": "Medium"
  },
  {
    "id": "c-ios-02",
    "primaryKeyword": "小火箭后台断流",
    "targetUrl": "/clients/ios/networkextension-15mb-memory-fix/",
    "secondary": ["iOS NetworkExtension 15MB内存限制", "小火箭闪退", "iPhone锁屏断网"],
    "intent": "Troubleshooting",
    "conversion": "Low"
  },
  {
    "id": "c-ai-01",
    "primaryKeyword": "Claude封号申诉",
    "targetUrl": "/compatibility/chatgpt-claude-gemini/claude-ban-appeal-template/",
    "secondary": ["Anthropic官方申诉信", "Claude账号解封", "Claude IP纯净度要求"],
    "intent": "Troubleshooting",
    "conversion": "Medium"
  },
  {
    "id": "c-ai-02",
    "primaryKeyword": "ChatGPT Plus信用卡拒付",
    "targetUrl": "/compatibility/chatgpt-claude-gemini/chatgpt-plus-stripe-anti-fraud/",
    "secondary": ["Stripe反欺诈风控", "Your card has been declined", "虚拟卡订阅ChatGPT", "美西原生节点绑卡"],
    "intent": "Troubleshooting",
    "conversion": "High"
  },
  {
    "id": "c-st-01",
    "primaryKeyword": "Apple TV看奈飞4K",
    "targetUrl": "/compatibility/netflix-disney-streaming/tvos-apple-tv-4k-setup/",
    "secondary": ["tvOS 17原生代理", "Apple TV Stash配置", "客厅大屏杜比视界直通"],
    "intent": "How-to",
    "conversion": "High"
  },
  {
    "id": "c-pri-01",
    "primaryKeyword": "1Gbps跨境专线成本",
    "targetUrl": "/pricing/cheap-airports-comparison/1gbps-bandwidth-cost/",
    "secondary": ["专线物理带宽价格", "电信CTG专线月租", "为什么一元机场是骗局", "专线超卖比例"],
    "intent": "Informational",
    "conversion": "High"
  },
  {
    "id": "c-pri-02",
    "primaryKeyword": "机场月付年付对比",
    "targetUrl": "/pricing/monthly-plans/game-theory-monthly-vs-yearly/",
    "secondary": ["沉淀资金博弈论", "三年付跑路风险", "买三年送两年套路", "机场按月订阅优势"],
    "intent": "Commercial Investigation",
    "conversion": "High"
  },
  {
    "id": "c-pri-03",
    "primaryKeyword": "双持备用机场",
    "targetUrl": "/pricing/non-expiring-data/dual-sim-redundancy-setup/",
    "secondary": ["不限时按量流量包", "网络容灾双持方案", "备用机场配置", "Clash自动故障转移"],
    "intent": "How-to",
    "conversion": "High"
  },
  {
    "id": "c-gui-01",
    "primaryKeyword": "注册表ProxyEnable恢复",
    "targetUrl": "/guides/node-timeout-troubleshooting/proxyenable-registry-fix-script/",
    "secondary": ["退出代理后电脑断网", "127.0.0.1:7890拒绝连接", "注册表一键修复脚本"],
    "intent": "Troubleshooting",
    "conversion": "Low"
  },
  {
    "id": "c-evi-01",
    "primaryKeyword": "信用卡Chargeback申诉",
    "targetUrl": "/evidence/refunds-and-risks/chargeback-credit-card-dispute/",
    "secondary": ["机场跑路拒付", "Visa卡争议处理", "MasterCard服务未提供申诉", "第四方支付接口追损"],
    "intent": "How-to",
    "conversion": "High"
  }
]
```

---

## 3. 关键词冲突消歧与同义词去重

1. **避免吞食现象（Keyword Cannibalization）**：  
   `Windows 电脑代理选型（二级页）` 负责整体软件横向评测与选型大词，而 `Windows 终端代理配置（三级文章）` 专注于 PowerShell 与 Git 命令行超时，分工明确，零意图重合。
2. **月付大词与深度分析区隔**：  
   `/pricing/monthly-plans/` 负责月付套餐的基础价格梳理，而 `/pricing/monthly-plans/game-theory-monthly-vs-yearly/` 专门探讨预付费博弈论与三年付跑路资金盘，形成完美的漏斗深度承接。
