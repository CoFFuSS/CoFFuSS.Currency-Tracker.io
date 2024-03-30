import axios from 'axios';
import { useEffect, useState } from 'react';

import { CurrencyResponse } from '@/types/common';
import { CACHE_LIFETIME } from '@/constants/requestConstants';

export const useCurrencyRequest = () => {
  const [currency, setCurrency] = useState<CurrencyResponse | undefined>();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const cache = localStorage.getItem('CurrencyCaches');
    const cacheTime = localStorage.getItem('CurrencyCachesTime');

    if (cache !== null && Date.now() - Number(cacheTime) < CACHE_LIFETIME) {
      setCurrency(JSON.parse(cache));
      setLoading(false);
    } else
      axios
        .get<CurrencyResponse>('/api/currencies', {})
        .then((response) => {
          setCurrency(response.data);

          localStorage.setItem('CurrencyCaches', JSON.stringify(response.data));

          localStorage.setItem('CurrencyCachesTime', Date.now().toString());

          setLoading(false);
        })
        .catch((ex) => {
          const axiosError =
            ex.response.status === 404 ? 'Resource Not found' : 'An unexpected error has occurred';

          setError(axiosError);
          setLoading(false);
        });
  }, []);

  return [currency, loading, error] as const;
};
