# 机场 Wiki 二级专题与三级文章集群规划方案

> **架构标准**：Topic Cluster Model（专题集群架构）  
> **规划执行**：全站 10 大一级专题 ➔ 20 个二级专题 Hub ➔ 120 个三级深度衍生选题  
> **发布日期**：2026 年 11 月 24 日

---

## 一、专题集群（Topic Cluster）架构设计理念

为了打破传统博客散落孤立的“扁平文章列表”缺陷，机场 Wiki 采用国际一流的 **Pillar-Cluster（支柱-集群）** 内容拓扑：
- **Pillar Page（一级核心枢纽）**：全站 10 大核心专题首页（如 `/recommend/`、`/clients/`、`/network/`），承载全域高阶权重与索引导航。
- **Topic Hub（二级深度专题）**：20 个高密度技术 Hub（如 `/clients/windows/`、`/network/iepl-vs-iplc/`），每个专题以 5,000+ 字的体量解决某一垂直领域的完整决策链与核心痛点。
- **Cluster Articles（三级长尾细分文章）**：围绕每个二级 Hub 衍生出的 6 个精细化三级深度选题（全站共 120 篇），单篇深入聚焦某一特定命令、单一报错代码、或特定软件高级配置，形成众星拱月的权威权重回流闭环。

---

## 二、全站三级文章集群规划全景树状图

```text
jichangwiki.biz/
├── 01 推荐比较 /recommend/
│   ├── Hub A: 靠谱稳定机场推荐 (/recommend/stable-airports/)
│   │   ├── Cluster 01: SLA 99.9% 专线机场筛选实测
│   │   ├── Cluster 02: 晚高峰拥塞比与丢包率 Mathis 公式
│   │   ├── Cluster 03: 电信/联通/移动三网 BGP 智能分流
│   │   ├── Cluster 04: 敏感时期多入口冗余与域名防封
│   │   ├── Cluster 05: 高清 4K 实时流媒体抗抖动调优
│   │   └── Cluster 06: 五大稳定品牌横向综合横评
│   └── Hub B: 新手入门实战指引 (/recommend/beginners-guide/)
│       ├── Cluster 01: 代理、节点、机场底层概念图解
│       ├── Cluster 02: 跨平台代理客户端五分钟选型
│       ├── Cluster 03: Clash Verge Rev 订阅导入极速上手
│       ├── Cluster 04: 系统代理与 TUN 模式通俗白话
│       ├── Cluster 05: 常见新手五大陷阱与防坑手册
│       └── Cluster 06: 连上外网后的五分钟安全检查
│
├── 02 套餐价格 /pricing/
│   ├── Hub A: 极限平价便宜机场对比 (/pricing/cheap-airports-comparison/)
│   │   ├── Cluster 01: 1Gbps 跨境专线物理采购成本深度解剖
│   │   ├── Cluster 02: 5.6 元档白标机场超卖比率与风控内幕
│   │   ├── Cluster 03: 免费公共代理池与廉价机场安全性对比
│   │   ├── Cluster 04: 动态倍率刺客与流量缩水计算验证
│   │   ├── Cluster 05: 一元机场真实生存周期与跑路概率模型
│   │   └── Cluster 06: 个人轻度用户超高性价比套餐组合方案
│   ├── Hub B: 月付机场推荐与周期博弈 (/pricing/monthly-plans/)
│   │   ├── Cluster 01: 月付 vs 年付金融博弈论与沉淀资金风险
│   │   ├── Cluster 02: 为什么三年付骨折促销是 100% 跑路前兆
│   │   ├── Cluster 03: 机场结账五大安全检查清单与隐私支付
│   │   ├── Cluster 04: 个人月度流量配额精准测算模型
│   │   ├── Cluster 05: 订阅 Token 定期重置防盗刷最佳实践
│   │   └── Cluster 06: 优质月付专线品牌真实性能对照表
│   └── Hub C: 不限时按量流量包横向评测 (/pricing/non-expiring-data/)
│       ├── Cluster 01: 不限时套餐与包月套餐年化支出精算模型
│       ├── Cluster 02: 主力专线+不限时备用双持容灾方案设计
│       ├── Cluster 03: 不限时套餐的三大隐形陷阱与倍率变动
│       ├── Cluster 04: 跨设备后台流量暗偷与静默防跑电实操
│       ├── Cluster 05: 优质不限时按量服务商横向对照矩阵
│       └── Cluster 06: 不限时流量包长达三年以上的持有体验复盘
│
├── 03 品牌百科 /brands/
│   └── Hub A: 测速审计方法论与跑分真相 (/brands/review-methodology/)
│       ├── Cluster 01: 测速图造假揭秘：单线程 vs 多线程并发陷阱
│       ├── Cluster 02: 72 小时晚高峰端到端压力测试流水线
│       ├── Cluster 03: NextTrace 路由可视化与伪专线鉴别实操
│       ├── Cluster 04: 流媒体原生解锁状态机器化检测方案
│       ├── Cluster 05: 商业推广软文与中立技术审计识别核对表
│       └── Cluster 06: 机场 Wiki 测速实验室开源脚本与使用说明
│
├── 04 客户端 /clients/
│   ├── Hub A: Windows 电脑代理选型与实操 (/clients/windows/)
│   │   ├── Cluster 01: Windows 终端 PowerShell 与 Git 代理配置
│   │   ├── Cluster 02: Wintun 驱动与旧版 TAP 驱动深度性能对比
│   │   ├── Cluster 03: Clash Verge Rev 扩展脚本实战与规则持久化
│   │   ├── Cluster 04: Windows 外服联机游戏全锥型 NAT 优化
│   │   ├── Cluster 05: WSL2 子系统全局代理最佳协同配置
│   │   └── Cluster 06: Windows 代理防漏 IP 与 WebRTC 屏蔽
│   ├── Hub B: iOS 苹果小火箭选型与实操 (/clients/ios/)
│   │   ├── Cluster 01: 美区 Apple ID 免信用卡安全注册 2026 图解
│   │   ├── Cluster 02: iOS 按需连接 On Demand 自动化网络自愈
│   │   ├── Cluster 03: Shadowrocket 节点测速虚高与实际卡顿排查
│   │   ├── Cluster 04: Stash 策略组手把手配置实操与桌面组件
│   │   ├── Cluster 05: iPhone 个人热点共享代理给 Switch 与 PC
│   │   └── Cluster 06: iOS 共享账号防骗与 iCloud 锁机解除自救
│   └── Hub C: Clash Verge Rev 官方全景指南 (/clients/clash-verge-rev/)
│       ├── Cluster 01: Service Mode 系统服务底层提权原理解析
│       ├── Cluster 02: JavaScript 动态扩展脚本编写进阶实战
│       ├── Cluster 03: Mihomo 内核与原版 Clash 核心深度对决
│       ├── Cluster 04: Clash Verge Rev 局域网共享代理全攻略
│       ├── Cluster 05: DNS Fake-IP 缓存刷新与特定域名异常自救
│       └── Cluster 06: macOS 端 Clash Verge Rev 权限放行与优化
│
├── 05 AI与流媒体 /compatibility/
│   ├── Hub A: ChatGPT/Claude/Gemini 报错诊断 (/compatibility/chatgpt-claude-gemini/)
│   │   ├── Cluster 01: Claude 封号自救与官方英文申诉模版
│   │   ├── Cluster 02: ChatGPT Plus 虚拟信用卡风控防封指南
│   │   ├── Cluster 03: Scamalytics 与 IPQS 欺诈评分自测手册
│   │   ├── Cluster 04: Google Gemini 企业版与个人版地域风控对比
│   │   ├── Cluster 05: 指纹浏览器环境隔离与多账号防关联配置
│   │   └── Cluster 06: API 接口调用与网页端访问的风控底层差异
│   └── Hub B: 海外流媒体解锁指南 (/compatibility/netflix-disney-streaming/)
│       ├── Cluster 01: tvOS 17+ 原生客户端配置与 Apple TV 观影手册
│       ├── Cluster 02: Netflix 异地同住限制破局与内网穿透实战
│       ├── Cluster 03: Widevine L1 与 L3 硬件安全级别全景透析
│       ├── Cluster 04: SNI Proxy 自建流媒体分流解锁跳板机实装
│       ├── Cluster 05: Disney+ 与 HBO Max 跨区账号多语种字幕配置
│       └── Cluster 06: 家庭软路由 OpenClash 流媒体精细化分流调优
│
├── 06 网络技术 /network/
│   ├── Hub A: IEPL vs IPLC 专线深度解析 (/network/iepl-vs-iplc/)
│   │   ├── Cluster 01: BGP Anycast 全球多点广播技术原理解密
│   │   ├── Cluster 02: 跨国海底光缆物理拓扑与红海危机专题
│   │   ├── Cluster 03: NextTrace 路由可视化实战与伪中转识别
│   │   ├── Cluster 04: TCP 拥塞控制算法 BBRv3 与 CUBIC 深度测评
│   │   ├── Cluster 05: Hysteria 2 与 TUIC 现代 UDP 协议工程剖析
│   │   └── Cluster 06: 公网中转、隧道中转与专线的本质性能阶梯
│   └── Hub B: 节点地区与延迟特性物理极限 (/network/regional-nodes-and-latency/)
│       ├── Cluster 01: TTFB 首字节时间实测与优化完全指南
│       ├── Cluster 02: 亚太中日中港海底光缆事故周期性规律
│       ├── Cluster 03: Clash Verge Rev 自动测速策略组精细化调优
│       ├── Cluster 04: 全锥型 NAT 与 UDP 游戏加速节点专项实测
│       ├── Cluster 05: 跨国 BGP 路由劫持与路由泄漏防御机制
│       └── Cluster 06: 家庭宽带本地 MTU 优化与分片丢包自愈
│
├── 07 VPN对比 /vpn/
│   ├── Hub A: 免费 VPN 致命安全风险 (/vpn/free-vpn-risks/)
│   │   ├── Cluster 01: 恶意根证书安装抓包与中间人劫持实验复盘
│   │   ├── Cluster 02: 住宅 IP 代理池与普通个人设备肉鸡化黑幕
│   │   ├── Cluster 03: 十款应用商店免费加速器流量抓包与数据回传
│   │   ├── Cluster 04: 免费 VPN 广告注入与恶意代码逆向工程分析
│   │   ├── Cluster 05: 商业 VPN 真实退款政策与用户隐私协议对决
│   │   └── Cluster 06: 企业合规跨国远程办公专用网络搭建指引
│   └── Hub B: 游戏加速器 vs 节点代理横评 (/vpn/gaming-accelerator-vs-proxy/)
│       ├── Cluster 01: Steam 社区加速与外服游戏联机底层路由差异
│       ├── Cluster 02: 主机平台 Switch 与 PS5 网络加速实战全攻略
│       ├── Cluster 03: Full Cone NAT 与对称型 NAT 组队掉线终极修复
│       ├── Cluster 04: 游戏 UDP 流量防 QoS 限制与分流规则编写
│       ├── Cluster 05: 商业游戏加速器专线与自建节点延迟对比
│       └── Cluster 06: 软路由 Koolshare 与 OpenWrt 游戏加速插件实装
│
├── 08 教程排障 /guides/
│   ├── Hub A: 订阅导入与转换防坑指南 (/guides/subscription-import-guide/)
│   │   ├── Cluster 01: Docker 本地私有化搭建 Subconverter 完全教程
│   │   ├── Cluster 02: Clash 订阅 YAML 语法全景拆解与手写定制
│   │   ├── Cluster 03: 订阅链接防封与自建 Cloudflare Worker 反代
│   │   ├── Cluster 04: 多机场订阅智能合并与去重脚本实战
│   │   ├── Cluster 05: Shadowrocket 订阅高级设置与正则节点重命名
│   │   └── Cluster 06: sing-box 订阅转换与兼容性深度调试
│   ├── Hub B: TUN 虚拟网卡配置与全局接管 (/guides/tun-mode-setup/)
│   │   ├── Cluster 01: Wintun 驱动源码级架构解析与性能基准
│   │   ├── Cluster 02: Windows 路由表最长前缀匹配与冲突排查
│   │   ├── Cluster 03: WSL2 镜像网络模式与 TUN 模式深度协同
│   │   ├── Cluster 04: macOS utun 虚拟网卡与特权守护进程配置
│   │   ├── Cluster 05: Docker 容器环境无缝走宿主机 TUN 代理实践
│   │   └── Cluster 06: TUN 模式下防止真实物理 IPv6 泄漏全景指南
│   └── Hub C: 节点全部超时排查手册 (/guides/node-timeout-troubleshooting/)
│       ├── Cluster 01: Windows 注册表 ProxyEnable 残留锁死一键脚本
│       ├── Cluster 02: Wireshark 抓包实战与 TLS 握手失败深度复盘
│       ├── Cluster 03: 家庭光猫改桥接模式与公网 IP 申请实操
│       ├── Cluster 04: Clash Verge Rev 混合端口冲突与自适应绑定
│       ├── Cluster 05: 运营商骨干网 QoS 降速与 UDP 阻断对抗
│       └── Cluster 06: 全平台一键网络重置指令全集
│
└── 09 证据风险 /evidence/
    ├── Hub A: 退款纠纷、TOS 陷阱与资金维权 (/evidence/refunds-and-risks/)
    │   ├── Cluster 01: 信用卡跨境拒付 Chargeback 全套证据模版
    │   ├── Cluster 02: 第四方支付聚合接口灰产黑幕全景拆解
    │   ├── Cluster 03: 从中国裁判文书网看翻墙软件买卖判例
    │   ├── Cluster 04: 服务条款 TOS 关键法律陷阱条款审查清单
    │   ├── Cluster 05: 微信与支付宝被骗投诉与商户号追溯指南
    │   └── Cluster 06: 虚拟网络产品自动扣费订阅关闭全图解
    └── Hub B: 跑路预警识别与紧急备用方案 (/evidence/runaway-warning-and-alternatives/)
        ├── Cluster 01: 近五年十大知名机场跑路历史案卷复盘
        ├── Cluster 02: Clash Verge Rev 多机场订阅自动故障转移配置
        ├── Cluster 03: 低成本不限时流量包横向评测与选型
        ├── Cluster 04: 跑路预警自动化监控机器人的实现逻辑
        ├── Cluster 05: 跑路后的黑产数据库清洗与防撞库加固
        └── Cluster 06: 境外应急免费公共代理节点的安全筛选与使用
```

---

## 三、内容漏斗（Content Funnel）意图转化闭环

1. **Top of Funnel (TOFU 顶层触达)**：
   - 依赖集群三级文章捕获具体命令、单个报错代码的长尾用户（例如：通过搜索“Windows 注册表 ProxyEnable 恢复”或“Wintun 驱动蓝屏”进入）。
2. **Middle of Funnel (MOFU 方案对比与认知升级)**：
   - 三级文章通过标准面包屑与高相关性内链，将用户引流至二级专题 Hub（如 `/clients/windows/` 或 `/network/iepl-vs-iplc/`），系统化学习整套选型模型与网络原理。
3. **Bottom of Funnel (BOFU 决策沉淀与主备配置)**：
   - 二级专题 Hub 引导用户建立“主力专线月付 + 不限时按量备用”的稳健安全防线，如实呈现客观中立的品牌实体档案（如光速云、暮光加速），完成高信任度的合规闭环。
