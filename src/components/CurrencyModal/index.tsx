import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { CurrencyResponse } from '@/interfaces/common';
import { getCurrenciesName, getCurrencyRelation } from '@/utils/mainPage';

import {
  Backdrop,
  Wrapper,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Header,
  InfoContainer,
  InputContainer,
} from './styled';

import { CurrenciesList } from '../CurrenciesList';

interface CurrencyModalProps {
  isShown: boolean;
  hide: () => void;
  currencyList: CurrencyResponse | undefined;
  cardCurrency: string;
  givenCurrency: string;
}

export const CurrencyModal = ({
  isShown,
  hide,
  currencyList,
  cardCurrency,
  givenCurrency,
}: CurrencyModalProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>(givenCurrency);
  const [inputAmount, setInputAmount] = useState<number>(0);
  const [outputAmount, setOutputAmount] = useState<number>();

  useEffect(() => {
    setOutputAmount(
      () => +inputAmount * +getCurrencyRelation(cardCurrency, selectedCurrency, currencyList),
    );
  }, [inputAmount, cardCurrency, selectedCurrency, currencyList]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputAmount(+e.target.value);
  };

  const handleClose = () => {
    setInputAmount(0);
    hide();
  };

  const modal = (
    <>
      <Backdrop />
      <Wrapper>
        <StyledModal isShown={isShown}>
          <Header>
            <HeaderText>Exchange rate</HeaderText>
            <CloseButton onClick={handleClose}>X</CloseButton>
          </Header>
          <Content>
            <InfoContainer>
              <CurrenciesList
                setSelectedCurrency={setSelectedCurrency}
                currenciesList={getCurrenciesName(currencyList).filter(
                  (name) => name !== givenCurrency,
                )}
                defaultValue={givenCurrency}
                disable={false}
              />

              <InputContainer>
                <input
                  placeholder='Amount'
                  value={inputAmount}
                  onChange={handleInputChange}
                />
              </InputContainer>
            </InfoContainer>
            <InfoContainer>
              <CurrenciesList
                setSelectedCurrency={setSelectedCurrency}
                currenciesList={getCurrenciesName(currencyList).filter(
                  (name) => name !== givenCurrency,
                )}
                defaultValue={cardCurrency}
                disable
              />
              <InputContainer>
                <input
                  value={outputAmount}
                  readOnly
                />
              </InputContainer>
            </InfoContainer>
          </Content>
        </StyledModal>
      </Wrapper>
    </>
  );

  return isShown ? createPortal(modal, document.body) : null;
};
