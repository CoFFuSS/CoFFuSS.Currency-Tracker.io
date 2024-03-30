import BitcoinSVG from '@/assets/images/Bitcoin Icon.svg';
import AuDollarSVG from '@/assets/images/Australian Dollar Icon.svg';
import CaDollarSVG from '@/assets/images/Canadian Dollar Icon.svg';
import DollarSVG from '@/assets/images/Dollar Icon.svg';
import YenSVG from '@/assets/images/Yen Icon.svg';
import EuroSVG from '@/assets/images/Euro Icon.svg';
import WonSVG from '@/assets/images/Won Icon.svg';
import LiraSVG from '@/assets/images/Libra Icon.svg';
import PesoSVG from '@/assets/images/Peso Argentino Icon.svg';

export const CurrencyIcons = {
  STOCKS_SECTION: [],
  QUOTES_SECTION: [
    {
      icon: <BitcoinSVG />,
      name: 'BTC',
    },
    {
      icon: <AuDollarSVG />,
      name: 'AUD',
    },
    {
      icon: <CaDollarSVG />,
      name: 'CAD',
    },
    {
      icon: <DollarSVG />,
      name: 'USD',
    },
    {
      icon: <YenSVG />,
      name: 'JPY',
    },
    {
      icon: <EuroSVG />,
      name: 'EUR',
    },
    {
      icon: <WonSVG />,
      name: 'CNY',
    },
    {
      icon: <LiraSVG />,
      name: 'TRY',
    },
    {
      icon: <PesoSVG />,
      name: 'ARS',
    },
  ],
} as const;
