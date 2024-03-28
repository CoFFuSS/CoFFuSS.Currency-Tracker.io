export interface CandlestickData {
  x: number;
  o: number;
  h: number;
  l: number;
  c: number;
}

export interface Dataset {
  data: CandlestickData[];
  label: string;
  backgroundColor: string;
  color: { up: string; down: string; unchanged: string };
  pointRadius: number;
  pointHoverRadius: number;
}

export interface CandlestickChartData {
  labels: Date[];
  datasets: Dataset[];
}

export interface Options {
  responsive: boolean;
  scales: {
    y: { beginAtZero: boolean; min: number; max: number };
  };
  plugins: {
    title: {
      display: boolean;
      text: string;
    };
    legend: {
      display: boolean;
    };
  };
}

export interface Props {}

export interface State {
  minPrice?: number;
  maxPrice?: number;
  selectedDate?: string;
  minPriceError?: string;
  maxPriceError?: string;
}
