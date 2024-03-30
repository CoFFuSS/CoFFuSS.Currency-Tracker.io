import { CandlestickData } from '@/types/timelinePage';

export interface Observer {
  update: (data: CandlestickData[], minPrice: number, maxPrice: number) => void;
}

class Observable {
  private data: CandlestickData[] = [];

  private minPrice: number = 0;

  private maxPrice: number = 0;

  private readonly observers: Observer[] = [];

  public subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);

    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notifySubscribers() {
    this.observers.forEach((observer) => {
      observer.update(this.data, this.minPrice, this.maxPrice);
    });
  }

  public setData(data: CandlestickData[], minPrice: number, maxPrice: number) {
    this.data = data;
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    this.notifySubscribers();
  }
}

export const currencyObservable = new Observable();
