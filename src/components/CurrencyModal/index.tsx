import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { getCurrenciesName, getCurrencyRelation } from '@/utils/mainPage';
import { CurrencyResponse } from '@/types/common';
import { CurrenciesList } from '@/components/CurrenciesList';

import {
  Backdrop,
  Wrapper,
  HeaderText,
  CloseButton,
  Content,
  Header,
  InfoContainer,
  InputContainer,
  ModalWindow,
} from './styled';

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
      Number(inputAmount) *
        Number(getCurrencyRelation(cardCurrency, selectedCurrency, currencyList)),
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
        <ModalWindow
          isShown={isShown}
          data-test-id='currency-modal'
        >
          <Header>
            <HeaderText>Exchange rate</HeaderText>
            <CloseButton
              onClick={handleClose}
              data-test-id='close-button'
            >
              X
            </CloseButton>
          </Header>
          <Content>
            <p>Convert currency from</p>
            <InfoContainer>
              <CurrenciesList
                setSelectedCurrency={setSelectedCurrency}
                currenciesList={getCurrenciesName(currencyList).filter(
                  (name) => name !== givenCurrency,
                )}
                defaultValue={givenCurrency}
                disable={false}
                data-test-id='from-currency-list'
              />

              <InputContainer>
                <input
                  placeholder='Amount'
                  value={inputAmount}
                  onChange={handleInputChange}
                  data-test-id='input-amount'
                />
              </InputContainer>
            </InfoContainer>
            <p>To</p>

            <InfoContainer>
              <CurrenciesList
                setSelectedCurrency={setSelectedCurrency}
                currenciesList={getCurrenciesName(currencyList).filter(
                  (name) => name !== givenCurrency,
                )}
                defaultValue={cardCurrency}
                disable
                data-test-id='to-currency-list'
              />
              <InputContainer>
                <input
                  value={outputAmount}
                  readOnly
                  data-test-id='output-amount'
                />
              </InputContainer>
            </InfoContainer>
          </Content>
        </ModalWindow>
      </Wrapper>
    </>
  );

  return isShown ? createPortal(modal, document.body) : null;
};
