import { CurrencyResponse } from '@/types/common';

export const getSpecificCurrencyValue = (name: string, currency: CurrencyResponse | undefined) => {
  const filteredCurrencies = Object.values(currency?.data ?? {}).filter(
    (coin) => coin.code === name,
  );

  const specificCurrency = filteredCurrencies.find((coin) => coin.code === name);

  return specificCurrency?.value ?? 0;
};

export const getDefinedPrice = (
  currency: CurrencyResponse | undefined,
  selectedValue: string,
  value: string,
) => (+value / +getSpecificCurrencyValue(selectedValue, currency)).toFixed(3);

export const getCurrenciesName = (currency: CurrencyResponse | undefined) =>
  Object.keys(currency?.data ?? {});

export const getCurrencyRelation = (
  fromValue: string,
  toValue: string,
  currency: CurrencyResponse | undefined,
) =>
  (
    +getSpecificCurrencyValue(fromValue, currency) / +getSpecificCurrencyValue(toValue, currency)
  ).toFixed(6);
