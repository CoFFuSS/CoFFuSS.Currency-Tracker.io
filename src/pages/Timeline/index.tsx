import { Chart as ChartJS } from 'chart.js/auto';
import { ChangeEvent, PureComponent, createRef } from 'react';
import {
  CandlestickController,
  CandlestickElement,
  OhlcController,
  OhlcElement,
} from 'chartjs-chart-financial';

import 'chartjs-adapter-moment';

import { CandlestickData, Props, State } from '@/types/timelinePage';
import { Observer, currencyObservable } from '@/utils/observer';

import {
  generateRandomCurrencyDataArray,
  getChartDataset,
  getChartOptions,
  isValidNumberInput,
  labelProperties,
} from './utils';
import {
  ButtonContainer,
  ChartContainer,
  ChartInput,
  ControlBlock,
  ErrorMessage,
  InputLabel,
  SubmitButton,
} from './styled';

ChartJS.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

export class TimelinePage extends PureComponent<Props, State> implements Observer {
  private readonly chartRef = createRef<HTMLCanvasElement>();

  private chartInstance: ChartJS | null = null;

  constructor(props: Props) {
    super(props);

    this.state = {
      minPrice: 0,

      maxPrice: 1000,

      selectedDate: new Date().toISOString().split('T')[0],
      minPriceError: '',
      maxPriceError: '',
    };
  }

  componentDidMount(): void {
    const ctx = this.chartRef.current?.getContext('2d');

    const { minPrice, maxPrice, selectedDate } = this.state;

    const newDataset = generateRandomCurrencyDataArray(
      Number(minPrice!),
      Number(maxPrice!),
      selectedDate!,
    );

    if (ctx) {
      this.chartInstance = new ChartJS(ctx, {
        type: 'candlestick',

        data: getChartDataset(newDataset),

        options: getChartOptions(minPrice!, maxPrice!),
      });
    }

    currencyObservable.subscribe(this);
  }

  componentWillUnmount(): void {
    currencyObservable.unsubscribe(this);
  }

  handleInputChange = (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({ [field]: value } as Pick<State, keyof State>);
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { minPrice, maxPrice, selectedDate } = this.state;

    if (this.validateInputs()) {
      const { scrollY } = window;

      const newDataset = generateRandomCurrencyDataArray(
        Number(minPrice!),
        Number(maxPrice!),
        selectedDate!,
      );

      currencyObservable.setData(newDataset, Number(minPrice!), Number(maxPrice!));

      window.scrollTo(0, scrollY);
    }
  };

  // eslint-disable-next-line react/no-unused-class-component-methods
  update = (data: CandlestickData[], minPrice: number, maxPrice: number) => {
    const ctx = this.chartRef.current?.getContext('2d');

    if (ctx && this.chartInstance) {
      this.chartInstance.destroy();

      this.chartInstance = new ChartJS(ctx, {
        type: 'candlestick',

        data: getChartDataset(data),

        options: getChartOptions(minPrice, maxPrice),
      });

      this.chartInstance.update();
    }
  };

  validateInputs = () => {
    const { minPrice, maxPrice } = this.state;
    const errors = {
      minPrice: '',
      maxPrice: '',
    };

    if (!isValidNumberInput(String(minPrice))) {
      errors.minPrice = 'Please enter a valid number';
    }

    if (!isValidNumberInput(String(maxPrice))) {
      errors.maxPrice = 'Please enter a valid number';
    }

    if (parseFloat(String(minPrice)) > parseFloat(String(maxPrice))) {
      errors.minPrice = 'Minimum price cannot be greater than maximum price';
    }

    this.setState({ minPriceError: errors.minPrice, maxPriceError: errors.maxPrice });

    return Object.values(errors).every((error) => error === '');
  };

  render() {
    const { minPrice, maxPrice, selectedDate, maxPriceError, minPriceError } = this.state;
    const inputValues: Record<string, string | number> = {
      selectedDate: selectedDate ?? '',
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
    };

    return (
      <form onSubmit={this.handleFormSubmit}>
        <ControlBlock>
          {labelProperties.map(({ text, id, type }) => (
            <InputLabel
              key={id}
              htmlFor={id}
            >
              {text}
              <ChartInput
                id={id}
                type={type}
                value={inputValues[id]}
                onChange={this.handleInputChange(id)}
              />
            </InputLabel>
          ))}

          <ButtonContainer>
            <SubmitButton type='submit'>Submit</SubmitButton>
            {minPriceError && <ErrorMessage>{minPriceError}</ErrorMessage>}
            {maxPriceError && <ErrorMessage>{maxPriceError}</ErrorMessage>}
          </ButtonContainer>
        </ControlBlock>

        <ChartContainer>
          <canvas ref={this.chartRef} />
        </ChartContainer>
      </form>
    );
  }
}
