export const CACHE_LIFETIME = 60 * 60 * 1000;

export const response = {
  meta: {
    last_updated_at: '2024-03-07T23:59:59Z',
  },
  data: {
    ARS: {
      code: 'ARS',
      value: 845.4018523708,
    },
    AUD: {
      code: 'AUD',
      value: 1.510130184,
    },
    BTC: {
      code: 'BTC',
      value: 0.0000149445,
    },
    CAD: {
      code: 'CAD',
      value: 1.3450502096,
    },
    CNY: {
      code: 'CNY',
      value: 7.1859909489,
    },
    EUR: {
      code: 'EUR',
      value: 0.9130801185,
    },
    JPY: {
      code: 'JPY',
      value: 147.8505027229,
    },
    TRY: {
      code: 'TRY',
      value: 31.9246245969,
    },
    USD: {
      code: 'USD',
      value: 1,
    },
  },
} as const;

export const STORAGE_KEYS = {
  theme: 'theme',
} as const;
