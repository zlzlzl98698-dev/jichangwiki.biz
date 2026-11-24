import { z } from 'zod';

export const BrandSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  aliases: z.array(z.string()).default([]),
  description: z.string(),
  foundedYear: z.number().nullable().default(null),
  homepage: z.string().nullable().default(null),
  officialStatus: z.enum(['verified', 'unverified', 'claimed']).default('unverified'),
  operator: z.string().nullable().default(null),
  clientMode: z.enum(['custom_app_only', 'third_party_only', 'dual', 'unknown']).default('dual'),
  regions: z.array(z.string()).default([]),
  protocolRefs: z.array(z.string()).default([]),
  networkRefs: z.array(z.string()).default([]),
  relatedBrands: z.array(z.string()).default([]),
  publicationStatus: z.enum(['draft', 'review', 'published', 'archived']).default('published'),
  isFeaturedPartner: z.boolean().default(false),
  disclosureNotes: z.string().nullable().default(null),
  primaryAffiliate: z.string(),
  couponCode: z.string().nullable().default(null),
  discountDesc: z.string().nullable().default(null),
  startingMonthlyCny: z.number(), // 真实起步折算月费
  startingPriceDesc: z.string(),  // 起步价描述（如“年付折算约 8 元/月”）
  speedHighlights: z.array(
    z.object({
      region: z.string(),
      latency: z.string(),
      download: z.string(),
    })
  ).default([]),
  unlocking: z.object({
    chatgpt: z.enum(['supported', 'partial', 'unavailable', 'untested']),
    claude: z.enum(['supported', 'partial', 'unavailable', 'untested']),
    gemini: z.enum(['supported', 'partial', 'unavailable', 'untested']),
    netflix: z.enum(['supported', 'partial', 'unavailable', 'untested']),
    disney: z.enum(['supported', 'partial', 'unavailable', 'untested']),
    youtube: z.enum(['supported', 'partial', 'unavailable', 'untested']),
    tiktok: z.enum(['supported', 'partial', 'unavailable', 'untested']),
  }),
  dataStatus: z.enum(['vendor_claim', 'historical_record', 'independently_verified', 'conflicting', 'unknown']).default('vendor_claim'),
  conflicts: z.array(z.string()).default([]),
  keyFeatures: z.array(z.string()).default([]),
  pros: z.array(z.string()).default([]),
  cons: z.array(z.string()).default([]),
  suitableFor: z.array(z.string()).default([]),
  notSuitableFor: z.array(z.string()).default([]),
});

export type Brand = z.infer<typeof BrandSchema>;

export const PlanSchema = z.object({
  planId: z.string(),
  brandId: z.string(),
  name: z.string(),
  currency: z.string().default('CNY'),
  amountMinor: z.number(), // 分
  billingPeriod: z.enum(['monthly', 'quarterly', 'semi_annual', 'annual', 'biennial', 'triennial', 'one_time']),
  periodMonths: z.number().default(1),
  quotaGB: z.number(),
  quotaReset: z.enum(['monthly', 'one_time']).default('monthly'),
  multiplier: z.number().default(1.0),
  deviceLimit: z.number().nullable().default(null),
  calculatedMonthlyCny: z.number(),
  restrictions: z.string().nullable().default(null),
  claimStatus: z.enum(['vendor_claim', 'verified', 'historical']).default('vendor_claim'),
  observedAt: z.string(),
});

export type Plan = z.infer<typeof PlanSchema>;

export const ClientSchema = z.object({
  clientId: z.string(),
  name: z.string(),
  slug: z.string(),
  osCategory: z.enum(['windows', 'android', 'ios', 'macos', 'linux', 'router']),
  coreEngine: z.string(),
  isOpenSource: z.boolean(),
  license: z.string().nullable(),
  repoUrl: z.string().nullable(),
  downloadGuide: z.string(),
  features: z.array(z.string()),
  suitableFor: z.string(),
  maintenanceStatus: z.enum(['active', 'archived', 'limited']).default('active'),
});

export type Client = z.infer<typeof ClientSchema>;

export const QuestionSchema = z.object({
  questionId: z.string(),
  questionText: z.string(),
  aliases: z.array(z.string()).default([]),
  entityRefs: z.array(z.string()).default([]),
  category: z.enum(['brand', 'plan', 'network', 'client', 'compatibility', 'risk', 'vpn', 'guide']),
  intent: z.enum(['informational', 'commercial_investigation', 'transactional']),
  canonicalUrl: z.string(),
  sectionId: z.string().nullable().default(null),
  answerSummary: z.string(),
  sourceNotes: z.string().nullable().default(null),
});

export type Question = z.infer<typeof QuestionSchema>;
