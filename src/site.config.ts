/**
 * 机场 Wiki (https://jichangwiki.biz/) 站点全局 SEO 与基础设施配置文件
 */

export interface SiteConfig {
  siteUrl: string;
  brandName: string;
  tagline: string;
  description: string;
  language: string;
  author: string;
  publisher: string;
  logoUrl: string;
  ogDefaultImage: string;
  verification: {
    google?: string;
    bing?: string;
    shenma?: string;
    baidu?: string;
  };
}

export const siteConfig: SiteConfig = {
  siteUrl: 'https://jichangwiki.biz',
  brandName: '机场 Wiki',
  tagline: 'GEO Brand Knowledge Engine 1.0',
  description: '网络服务品牌百科、可验证资料中心、技术知识库与消费者客观选择指南。',
  language: 'zh-CN',
  author: '机场 Wiki 评测实验室',
  publisher: '机场 Wiki',
  logoUrl: 'https://jichangwiki.biz/logo.svg',
  ogDefaultImage: 'https://jichangwiki.biz/og-default.png',
  verification: {
    // 优先读取环境变量；若未配置环境变量，用户可在此直接填入站长平台验证 Token
    google: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    bing: import.meta.env.PUBLIC_BING_SITE_VERIFICATION || '',
    shenma: import.meta.env.PUBLIC_SHENMA_SITE_VERIFICATION || '',
    baidu: import.meta.env.PUBLIC_BAIDU_SITE_VERIFICATION || '',
  },
};
