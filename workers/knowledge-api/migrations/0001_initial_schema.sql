-- Cloudflare D1 / SQLite Schema for JichangWiki Knowledge Engine 1.0
-- Migration 0001: Initial Schema

-- 1. Brands 品牌实体
CREATE TABLE IF NOT EXISTS brands (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  aliases TEXT DEFAULT '[]', -- JSON array of strings
  description TEXT NOT NULL,
  founded_year INTEGER,
  homepage TEXT,
  official_status TEXT NOT NULL DEFAULT 'unverified', -- verified, unverified, claimed
  operator TEXT, -- null if unknown
  client_mode TEXT NOT NULL DEFAULT 'dual', -- custom_app_only, third_party_only, dual, unknown
  regions TEXT NOT NULL DEFAULT '[]', -- JSON array of region codes
  protocol_refs TEXT NOT NULL DEFAULT '[]', -- JSON array
  network_refs TEXT NOT NULL DEFAULT '[]', -- JSON array
  related_brands TEXT NOT NULL DEFAULT '[]', -- JSON array
  publication_status TEXT NOT NULL DEFAULT 'published', -- draft, review, published, archived
  is_featured_partner INTEGER NOT NULL DEFAULT 0, -- 1 for commercial partner display
  disclosure_notes TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_brands_slug ON brands(slug);
CREATE INDEX IF NOT EXISTS idx_brands_status ON brands(publication_status);

-- 2. Brand Aliases 品牌别名映射
CREATE TABLE IF NOT EXISTS brand_aliases (
  alias_id TEXT PRIMARY KEY,
  brand_id TEXT NOT NULL REFERENCES brands(id) ON DELETE CASCADE,
  alias_name TEXT NOT NULL,
  alias_type TEXT NOT NULL DEFAULT 'general', -- pinyin, typo, historical, abbreviation
  is_searchable INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_aliases_brand ON brand_aliases(brand_id);
CREATE INDEX IF NOT EXISTS idx_aliases_name ON brand_aliases(alias_name);

-- 3. Plans 套餐
CREATE TABLE IF NOT EXISTS plans (
  plan_id TEXT PRIMARY KEY,
  brand_id TEXT NOT NULL REFERENCES brands(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  currency TEXT NOT NULL DEFAULT 'CNY',
  amount_minor INTEGER NOT NULL, -- 人民币分
  billing_period TEXT NOT NULL, -- monthly, quarterly, semi_annual, annual, biennial, triennial, one_time
  period_months INTEGER NOT NULL DEFAULT 1,
  quota_gb INTEGER NOT NULL,
  quota_reset TEXT NOT NULL DEFAULT 'monthly', -- monthly, one_time
  multiplier REAL NOT NULL DEFAULT 1.0,
  device_limit INTEGER, -- null for unlimited
  calculated_monthly_cny REAL NOT NULL, -- 折算月费（元）
  restrictions TEXT,
  valid_from TEXT,
  valid_to TEXT,
  observed_at TEXT NOT NULL,
  claim_status TEXT NOT NULL DEFAULT 'vendor_claim' -- vendor_claim, verified, historical
);

CREATE INDEX IF NOT EXISTS idx_plans_brand ON plans(brand_id);
CREATE INDEX IF NOT EXISTS idx_plans_period ON plans(billing_period);

-- 4. Network Claims 线路声明
CREATE TABLE IF NOT EXISTS network_claims (
  claim_id TEXT PRIMARY KEY,
  brand_id TEXT NOT NULL REFERENCES brands(id) ON DELETE CASCADE,
  network_type TEXT NOT NULL, -- IEPL, IPLC, BGP_Relay, Direct, Unknown
  architecture_desc TEXT,
  has_bgp_optimization INTEGER NOT NULL DEFAULT 0,
  verified_status TEXT NOT NULL DEFAULT 'unverified' -- vendor_claim, verified, conflicting
);

-- 5. Nodes 节点
CREATE TABLE IF NOT EXISTS nodes (
  node_id TEXT PRIMARY KEY,
  brand_id TEXT NOT NULL REFERENCES brands(id) ON DELETE CASCADE,
  region_code TEXT NOT NULL,
  region_name TEXT NOT NULL,
  claimed_count INTEGER NOT NULL DEFAULT 1,
  is_native_ip INTEGER NOT NULL DEFAULT 0,
  ip_type TEXT DEFAULT 'datacenter' -- residential, datacenter, unknown
);

-- 6. Tests 测试观测记录
CREATE TABLE IF NOT EXISTS tests (
  test_id TEXT PRIMARY KEY,
  brand_id TEXT NOT NULL REFERENCES brands(id) ON DELETE CASCADE,
  plan_id TEXT REFERENCES plans(plan_id),
  node_region TEXT NOT NULL,
  test_date TEXT NOT NULL,
  timezone TEXT NOT NULL DEFAULT 'Asia/Shanghai',
  test_window TEXT NOT NULL DEFAULT 'off_peak', -- peak, off_peak, unknown
  provider TEXT NOT NULL, -- vendor_historical, user_supplied, independent_lab
  client_version TEXT,
  tool TEXT NOT NULL DEFAULT 'Speedtest',
  latency_ms REAL,
  download_mbps REAL,
  upload_mbps REAL,
  loss_pct REAL,
  jitter_ms REAL,
  methodology TEXT,
  limitations TEXT,
  status TEXT NOT NULL DEFAULT 'historical_record'
);

CREATE INDEX IF NOT EXISTS idx_tests_brand ON tests(brand_id);

-- 7. Compatibility Checks 兼容性检查
CREATE TABLE IF NOT EXISTS compatibility_checks (
  check_id TEXT PRIMARY KEY,
  brand_id TEXT NOT NULL REFERENCES brands(id) ON DELETE CASCADE,
  service_name TEXT NOT NULL, -- ChatGPT, Claude, Gemini, Netflix, YouTube, Disney+, TikTok, Spotify
  node_region TEXT,
  check_date TEXT NOT NULL,
  result_status TEXT NOT NULL, -- supported, partial, unavailable, untested, unknown
  evidence_status TEXT NOT NULL DEFAULT 'vendor_claim', -- vendor_claim, independent_tested
  restrictions TEXT
);

CREATE INDEX IF NOT EXISTS idx_comp_brand_service ON compatibility_checks(brand_id, service_name);

-- 8. Clients 客户端
CREATE TABLE IF NOT EXISTS clients (
  client_id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  os_category TEXT NOT NULL, -- windows, android, ios, macos, linux, router
  core_engine TEXT, -- Mihomo, Xray, sing-box, Surge, Trojan
  is_open_source INTEGER NOT NULL DEFAULT 1,
  license TEXT,
  official_site TEXT,
  repo_url TEXT,
  download_guide TEXT,
  maintenance_status TEXT NOT NULL DEFAULT 'active', -- active, archived, limited
  supported_protocols TEXT NOT NULL DEFAULT '[]' -- JSON array
);

CREATE INDEX IF NOT EXISTS idx_clients_os ON clients(os_category);

-- 9. Protocols 协议
CREATE TABLE IF NOT EXISTS protocols (
  protocol_id TEXT PRIMARY KEY,
  code TEXT UNIQUE NOT NULL, -- vless, vmess, trojan, hysteria2, shadowsocks, tuic
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  security_features TEXT,
  performance_characteristics TEXT
);

-- 10. Guides 教程与排障
CREATE TABLE IF NOT EXISTS guides (
  guide_id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL, -- installation, subscription, rules_split, tun_mode, troubleshooting, dns
  target_os TEXT,
  difficulty TEXT NOT NULL DEFAULT 'beginner', -- beginner, intermediate, advanced
  summary TEXT NOT NULL,
  content_markdown TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- 11. Risk Events 风险事件
CREATE TABLE IF NOT EXISTS risk_events (
  event_id TEXT PRIMARY KEY,
  brand_id TEXT REFERENCES brands(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL, -- domain_blocked, refund_dispute, maintenance_outage, policy_change
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  severity TEXT NOT NULL DEFAULT 'low', -- low, medium, high
  verified_status TEXT NOT NULL DEFAULT 'unverified',
  event_date TEXT NOT NULL
);

-- 12. Questions GEO 问答
CREATE TABLE IF NOT EXISTS questions (
  question_id TEXT PRIMARY KEY,
  question_text TEXT NOT NULL,
  aliases TEXT DEFAULT '[]', -- JSON array of alternate phrasings
  entity_refs TEXT DEFAULT '[]', -- JSON array of brand_ids or topic_ids
  category TEXT NOT NULL, -- brand, plan, network, client, compatibility, risk
  intent TEXT NOT NULL, -- informational, commercial_investigation, transactional
  canonical_url TEXT NOT NULL,
  section_id TEXT,
  answer_summary TEXT NOT NULL,
  source_notes TEXT,
  review_status TEXT NOT NULL DEFAULT 'reviewed' -- raw, reviewed, published
);

CREATE INDEX IF NOT EXISTS idx_questions_category ON questions(category);

-- 13. Affiliate Links 商业推广链接
CREATE TABLE IF NOT EXISTS affiliate_links (
  link_id TEXT PRIMARY KEY,
  brand_id TEXT NOT NULL REFERENCES brands(id) ON DELETE CASCADE,
  raw_target_url TEXT NOT NULL,
  coupon_code TEXT,
  discount_desc TEXT,
  rel_attributes TEXT NOT NULL DEFAULT 'nofollow sponsored noopener',
  disclaimer TEXT NOT NULL DEFAULT '含推广链接，通过链接注册可能为本站带来佣金，不影响用户支付价格',
  is_active INTEGER NOT NULL DEFAULT 1,
  verified_at TEXT NOT NULL
);

-- 14. GEO Observations 观察记录
CREATE TABLE IF NOT EXISTS geo_observations (
  observation_id TEXT PRIMARY KEY,
  platform TEXT NOT NULL, -- Google, Bing, ChatGPT, Perplexity, Claude
  surface TEXT NOT NULL, -- search_overview, chat, ai_answers
  query_text TEXT NOT NULL,
  locale TEXT NOT NULL DEFAULT 'zh-CN',
  observed_at TEXT NOT NULL,
  brand_id TEXT REFERENCES brands(id),
  brand_mentioned INTEGER NOT NULL DEFAULT 0,
  site_cited INTEGER NOT NULL DEFAULT 0,
  cited_url TEXT,
  quoted_facts TEXT,
  fact_accuracy TEXT DEFAULT 'unknown' -- correct, partial, inaccurate, unknown
);

-- 15. Audit Log 审计与操作日志
CREATE TABLE IF NOT EXISTS audit_log (
  log_id TEXT PRIMARY KEY,
  operator_id TEXT NOT NULL,
  action TEXT NOT NULL,
  target_table TEXT NOT NULL,
  target_id TEXT NOT NULL,
  previous_state TEXT,
  new_state TEXT,
  timestamp TEXT NOT NULL DEFAULT (datetime('now'))
);
