import { ChangeEvent } from 'react';

import { Container, List, Options } from './styled';

interface CurrenciesListProps {
  currenciesList: string[];
  setSelectedCurrency: (currency: string) => void;
  defaultValue: string;
  disable: boolean;
}

export const CurrenciesList = ({
  currenciesList,
  setSelectedCurrency,
  defaultValue,
  disable = true,
}: CurrenciesListProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const inputValue = event.target.value;
    setSelectedCurrency(currenciesList.find((currency) => currency === inputValue) ?? '');
  };

  return (
    <Container>
      <List
        onChange={handleChange}
        disabled={disable}
      >
        <Options key={defaultValue}>{defaultValue}</Options>
        {currenciesList.map((currency) => (
          <Options key={currency}>{currency}</Options>
        ))}
      </List>
    </Container>
  );
};
