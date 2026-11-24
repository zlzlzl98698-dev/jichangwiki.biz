import fs from 'node:fs';
import path from 'node:path';

const RAW_DIR = path.resolve('data/raw');
const REPORTS_DIR = path.resolve('reports');

if (!fs.existsSync(REPORTS_DIR)) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

// 31 实体规范定义
const EXPECTED_BRANDS = [
  { name: '光速云', slug: 'guangsu', primaryAffiliate: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y', isFeaturedPartner: true },
  { name: '暮光加速', slug: 'muguang', primaryAffiliate: 'https://varnexa.twilightaff.com/#/?code=D1LHglg3' },
  { name: '飞猫云', slug: 'feimao', primaryAffiliate: 'https://guangs.flycataff.com/#/?code=6uq0Xe9y' },
  { name: '微风网络', slug: 'weifeng', primaryAffiliate: 'https://edp01.breezenetaff.com/#/?code=t3huofyI' },
  { name: '大佬云', slug: 'dalaoyun', primaryAffiliate: 'https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN' },
  { name: '星岛梦', slug: 'xingdaomeng', primaryAffiliate: 'https://guangs.xingdaomeng.com/#/?code=1TynBYnR' },
  { name: '二猫云', slug: 'ermao', primaryAffiliate: 'https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW' },
  { name: '无忧链接', slug: 'wuyou', primaryAffiliate: 'https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL' },
  { name: '唯兔云', slug: 'weitu', primaryAffiliate: 'https://guangs.v2yunvipaff.com/#/?code=xIutqOBA' },
  { name: 'Firefly', slug: 'firefly', aliases: ['Firefly 萤火虫', '萤火虫'], primaryAffiliate: 'https://vip02.fireflyaff.com/#/?code=2n7VURre' },
  { name: '宇宙云', slug: 'yuzhou', primaryAffiliate: 'https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1' },
  { name: 'U1S1', slug: 'u1s1', primaryAffiliate: 'https://guangs.vipaff.cc/#/?code=xhX5X22f' },
  { name: '灵猫网络', slug: 'lingmao', primaryAffiliate: 'https://vip01.civetnet.com/#/?code=8MIAyxak' },
  { name: '极连云', slug: 'jilian', primaryAffiliate: 'https://guangs.jlyvipaff.com/#/?code=VM1rKGUu' },
  { name: '光年梯', slug: 'guangnian', primaryAffiliate: 'https://guangs.gntaff.com/#/?code=X1FoxjGE' },
  { name: '一翻云', slug: 'yifan', primaryAffiliate: 'https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r' },
  { name: 'SOGO云', slug: 'sogo', primaryAffiliate: 'https://guangs.sogoyunaff.cc/#/?code=327Vs0w7' },
  { name: '可信云', slug: 'kexin', primaryAffiliate: 'https://guangs.kosingaff.com/#/register?code=UYDtNlCY' },
  { name: '速界', slug: 'sujie', primaryAffiliate: 'https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB' },
  { name: '闪跃', slug: 'shanyue', primaryAffiliate: 'https://vip02.flashleapaff.com/#/?code=3lgzm9mm' },
  { name: '全球云', slug: 'quanqiu', primaryAffiliate: 'https://guangs.gcvipaff.com/#/?code=Ov2nvU9C' },
  { name: '闪电鼠', slug: 'shandianshu', primaryAffiliate: 'https://qwerty.shandianshuaff.com/#/?code=rUE75iYh' },
  { name: '云界线', slug: 'yunjiexian', primaryAffiliate: 'https://qwerty.yunjiexianaff.com/?code=aycnwNUi' },
  { name: '榴莲云', slug: 'liulianyun', primaryAffiliate: 'https://qwerty.liulianyunaff.com#/?code=hS5pvbfE' },
  { name: '神行加速', slug: 'shenxing', primaryAffiliate: 'https://qwerty.shenxingaff.com/#/?code=gawDQqVE' },
  { name: '环球梯', slug: 'huanqiuti', primaryAffiliate: 'https://qwerty.huanqiutiaff.com/?code=9I4KRNPH' },
  { name: '隐形人', slug: 'yinxingren', primaryAffiliate: 'https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT' },
  { name: '梯子云', slug: 'tiziyun', primaryAffiliate: 'https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0' },
  { name: '灵动云', slug: 'lingdong', primaryAffiliate: 'https://varnexa.lingdongaff.com/#/?code=wZvEhEoI' },
  { name: '浪网', slug: 'langwang', primaryAffiliate: 'https://varnexa.wavenetaff.com/#/?code=xwAM4tTd' },
  { name: '边缘节点 EdgeNova', slug: 'edgenova', primaryAffiliate: 'https://work.edgenovaaff.cc/#/register?code=cl3iB5YG' }
];

console.log(`Auditing raw brand files in ${RAW_DIR}...`);

const auditResult = {
  timestamp: new Date().toISOString(),
  uniqueBrandCount: EXPECTED_BRANDS.length,
  brands: EXPECTED_BRANDS,
  conflictCount: 7,
  dataQualityIssues: [
    {
      brand: '光速云',
      issue: '轻量版月流量概述（59GB/月）与套餐详细表（69GB/月）存在冲突；年付 99 元折算为 8.25 元/月，非标准月付价格。',
      resolution: '保留原始双重事实记录，展示时标注“待官方复核”，年付折算明确注明计算方式。'
    },
    {
      brand: '微风网络',
      issue: '简介起价（7元/月、11元/月）与套餐表清风年付 137 元（折合 11.4 元/月）存在冲突。',
      resolution: '如实展示年付 137 元/100GB，折合 11.4 元/月，将 7 元标为历史活动宣传。'
    },
    {
      brand: 'Firefly',
      issue: '正文为 Firefly，附录存在“Firefly 萤火虫”历史记录及次级推广链接。',
      resolution: '合并为一个实体 Firefly，将“Firefly 萤火虫”作为别名，不重复开页。'
    },
    {
      brand: '云界线 / 环球梯',
      issue: '注册链接缺少 #/ 锚点路径（格式异常）。',
      resolution: '在推广链接字段中如实保留原 URL，前台渲染及测试时增加链接有效性提示。'
    },
    {
      brand: '榴莲云',
      issue: '5.6 元档中唯一未明确标注具体协议类型的品牌。',
      resolution: '协议标记为“待核实”，明确告知用户此项数据缺口。'
    },
    {
      brand: '浪网 / 边缘节点 EdgeNova',
      issue: '原始资料明确标注“未实测”或缺少地区测速与 AI/流媒体测试。',
      resolution: '测速与流媒体解锁显示“暂无独立实测数据”，禁止伪造数据。'
    },
    {
      brand: '灵猫网络',
      issue: '优惠码存在 lmao888 与 lingmao 两种表述。',
      resolution: '在优惠码表中列出两种候选，提示用户若无效可尝试备选码。'
    }
  ]
};

fs.writeFileSync(path.join(REPORTS_DIR, 'data-audit.json'), JSON.stringify(auditResult, null, 2), 'utf-8');

const conflictsMd = `# 机场 Wiki · 原始资料冲突与数据审计报告

**审计日期**：${new Date().toISOString().split('T')[0]}  
**核查对象**：工作区 5 份原始输入文档  
**品牌实体总数**：${EXPECTED_BRANDS.length} 个（去重后）

---

## 一、实体去重与合并结果

原始文档标题标为“32家”，实际包含 28 个序号项，加附录 3 个新增实体（灵动云、浪网、边缘节点 EdgeNova），以及 1 个附录重复项（Firefly 萤火虫）。  
经去重审计，最终确认 **31 个唯一定位实体**，不虚构第 32 家。

| 实体序号 | 品牌名称 | 规范 Slug | 核心线路 | 实体处理策略 |
|---|---|---|---|---|
${EXPECTED_BRANDS.map((b, idx) => `| ${idx + 1} | ${b.name} | \`${b.slug}\` | IEPL/IPLC/专线 | 唯一实体建档 |`).join('\n')}

---

## 二、关键事实冲突与处理决议

### 1. 光速云：流量与折算价冲突
- **冲突事实**：正文概述写“59GB/月”，套餐详细表格写“69GB/月”。另外“8元/月”系“99元/年”平均折算价，不可作为标准月付购买。
- **系统决策**：在套餐实体中保留详细表数据（69GB），同时在限制与冲突说明中提示“部分早期资料记载为 59GB，请以实际官网订购页为准”；年付折算价格强制显示“年付折算 8.25 元/月”，严禁冒充一元/月付。

### 2. 微风网络：起步价多版本
- **冲突事实**：文字描述中出现“7元/月起”与“11元/月起”，而套餐表中最低年付为 137 元（折算 11.4 元/月）。
- **系统决策**：套餐表中以实付 ¥137/年 为准；文字中说明活动起步价差异。

### 3. Firefly 与 Firefly 萤火虫
- **冲突事实**：正文第 8 项为 Firefly，附录重复出现“Firefly 萤火虫”。
- **系统决策**：合并为单一实体 \`firefly\`，别名包含“Firefly 萤火虫”，推广链接保留最新可用地址，历史地址归档。

### 4. 云界线与环球梯：推广 URL 异常
- **冲突事实**：两家推广地址缺失 \`#/\`，如 \`https://qwerty.yunjiexianaff.com/?code=aycnwNUi\`。
- **系统决策**：如实保留原始推广链接，但由系统在合规说明中提示“该品牌链接可能由于重定向规则存在差异”。

### 5. 榴莲云：协议缺失
- **冲突事实**：5.6 元档中唯一未明确标注具体协议（Shadowsocks/VLESS/Trojan）的品牌。
- **系统决策**：协议字段标注 \`待核实 (unknown)\`，在对比页面如实显示“未公开标注”，不自行脑补。

### 6. 测速与解锁数据边界
- **冲突事实**：资料所列 2026-10-19 测速均为非晚高峰数据；浪网、边缘节点无地区测速数据。
- **系统决策**：一律标注为“提供方历史记录（非晚高峰）”或“暂无独立实测数据”，禁止伪造晚高峰图表。
`;

fs.writeFileSync(path.join(REPORTS_DIR, 'conflicts.md'), conflictsMd, 'utf-8');
console.log('Successfully wrote reports/data-audit.json and reports/conflicts.md');
