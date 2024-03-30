import { useCurrencyRequest } from '@/hooks/useCurrencyRequest';
import { useFormattedDate } from '@/hooks/useFormattedDate';

import { Container, LastUpdate, LoadingText, TimeUpdateImage } from './styled';

export const UpdateTime = () => {
  const [currency, loading] = useCurrencyRequest();
  const formattedDate = useFormattedDate(currency?.meta.last_updated_at as string);

  return (
    <Container>
      {loading ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        <>
          <TimeUpdateImage />
          <LastUpdate>Last updated ad {formattedDate}</LastUpdate>
        </>
      )}
    </Container>
  );
};
