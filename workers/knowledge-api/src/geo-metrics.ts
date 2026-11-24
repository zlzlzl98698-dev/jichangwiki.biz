// GEO Metrics Calculation Engine
export interface GeoObservation {
  observation_id: string;
  platform: string;
  surface: string;
  query_text: string;
  observed_at: string;
  brand_id?: string;
  brand_mentioned: number; // 0 or 1
  site_cited: number;      // 0 or 1
  cited_url?: string;
  fact_accuracy: 'correct' | 'partial' | 'inaccurate' | 'unknown';
}

export interface MetricSummary {
  sampleCount: number;
  brandMentionRate: string; // percentage or N/A
  siteCitationRate: string; // percentage or N/A
  uniqueCitedUrlsCount: number;
  factAccuracyRate: string; // percentage or N/A
  freshnessStatus: string;
  unverifiableCount: number;
}

export function calculateGeoMetrics(observations: GeoObservation[]): MetricSummary {
  const total = observations.length;

  if (total === 0) {
    return {
      sampleCount: 0,
      brandMentionRate: 'N/A',
      siteCitationRate: 'N/A',
      uniqueCitedUrlsCount: 0,
      factAccuracyRate: 'N/A',
      freshnessStatus: 'NO_DATA',
      unverifiableCount: 0,
    };
  }

  const brandMentions = observations.filter((o) => o.brand_mentioned === 1).length;
  const siteCitations = observations.filter((o) => o.site_cited === 1).length;

  const citedUrls = new Set<string>();
  observations.forEach((o) => {
    if (o.cited_url && o.cited_url.trim()) {
      citedUrls.add(o.cited_url.trim());
    }
  });

  const checkableFacts = observations.filter((o) => o.fact_accuracy !== 'unknown');
  const correctFacts = checkableFacts.filter((o) => o.fact_accuracy === 'correct').length;

  return {
    sampleCount: total,
    brandMentionRate: `${((brandMentions / total) * 100).toFixed(1)}%`,
    siteCitationRate: `${((siteCitations / total) * 100).toFixed(1)}%`,
    uniqueCitedUrlsCount: citedUrls.size,
    factAccuracyRate: checkableFacts.length > 0
      ? `${((correctFacts / checkableFacts.length) * 100).toFixed(1)}%`
      : 'N/A',
    freshnessStatus: 'CALCULATED',
    unverifiableCount: observations.filter((o) => o.fact_accuracy === 'unknown').length,
  };
}
