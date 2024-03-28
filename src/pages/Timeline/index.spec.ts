import { CandlestickData } from '@/types/timelinePage';

import {
  generateRandomCurrencyDataArray,
  isValidNumberInput,
  getChartDataset,
  getChartOptions,
} from './utils';

describe('Utils functions', () => {
  describe('generateRandomCurrencyDataArray', () => {
    it('generates an array of CandlestickData with correct length', () => {
      const data = generateRandomCurrencyDataArray(0, 1000, '2024-03-27');
      expect(data).toHaveLength(30);
    });

    it('generates an array of CandlestickData with correct structure', () => {
      const data = generateRandomCurrencyDataArray(0, 1000, '2024-03-27');

      data.forEach((item) => {
        expect(item).toHaveProperty('x');
        expect(item).toHaveProperty('o');
        expect(item).toHaveProperty('h');
        expect(item).toHaveProperty('l');
        expect(item).toHaveProperty('c');
      });
    });
  });

  describe('isValidNumberInput', () => {
    it('returns true for valid number input', () => {
      expect(isValidNumberInput('123')).toBeTruthy();
      expect(isValidNumberInput('123.45')).toBeTruthy();
    });

    it('returns false for invalid number input', () => {
      expect(isValidNumberInput('abc')).toBeFalsy();
      expect(isValidNumberInput('123abc')).toBeFalsy();
    });
  });

  describe('getChartDataset', () => {
    it('returns correct dataset structure', () => {
      const dataset: CandlestickData[] = [
        { x: 1, o: 2, h: 3, l: 1, c: 2 },
        { x: 2, o: 3, h: 4, l: 2, c: 3 },
      ];

      const chartDataset = getChartDataset(dataset);
      expect(chartDataset).toHaveProperty('labels');
      expect(chartDataset).toHaveProperty('datasets');
      expect(chartDataset.datasets).toHaveLength(1);
      expect(chartDataset.datasets[0].data).toEqual(dataset);
    });
  });

  describe('getChartOptions', () => {
    it('returns correct chart options', () => {
      const options = getChartOptions(0, 1000);
      expect(options).toHaveProperty('responsive', true);
      expect(options).toHaveProperty('scales');
      expect(options.scales).toHaveProperty('y');
      expect(options.scales.y).toEqual({ beginAtZero: false, min: 0, max: 1000 });
      expect(options).toHaveProperty('plugins');
      expect(options.plugins).toHaveProperty('title');
      expect(options.plugins.title).toEqual({ display: true, text: 'Candlestick Chart' });
      expect(options.plugins).toHaveProperty('legend');
      expect(options.plugins.legend).toEqual({ display: false });
    });
  });
});
