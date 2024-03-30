export interface CurrencyResponse {
  meta: {
    last_updated_at: string;
  };

  data: Record<string, { code: string; value: number }>;
}
