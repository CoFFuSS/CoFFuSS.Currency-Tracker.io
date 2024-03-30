import { useEffect, useState } from 'react';

export const useCurrencyModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => setIsShown(!isShown);

  useEffect(() => {
    if (isShown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isShown]);

  return [isShown, toggle] as const;
};
