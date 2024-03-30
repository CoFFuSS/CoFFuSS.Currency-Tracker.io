import { response } from '@/constants/requestConstants';

import {
  getSpecificCurrencyValue,
  getDefinedPrice,
  getCurrenciesName,
  getCurrencyRelation,
} from './mainPage';

describe('getSpecificCurrencyValue', () => {
  test('returns specific currency value if it exists', () => {
    const result = getSpecificCurrencyValue('BTC', response);
    expect(result).not.toBe(0);
  });

  test('returns 0 if specific currency does not exist', () => {
    const result = getSpecificCurrencyValue('LTC', response);
    expect(result).toBe(0);
  });
});

describe('getDefinedPrice', () => {
  test('returns defined price for selected currency', () => {
    const result = getDefinedPrice(response, 'USD', '6000');
    expect(result).toBe('6000.000');
  });
});

describe('getCurrenciesName', () => {
  test('returns an array of currency names', () => {
    const result = getCurrenciesName(response);
    expect(result).toEqual(Object.keys(response?.data));
  });
});

describe('getCurrencyRelation', () => {
  test('returns currency relation between two values', () => {
    const result = getCurrencyRelation('USD', 'USD', response);
    expect(result).toEqual('1.000000');
  });
});

export {};
