import { Address, ContactBlock, ContactItem, Container, GeneralText } from './styled';

export const ContactPage = () => (
  <Container>
    <GeneralText>Our office located at</GeneralText>
    <Address>street Lienina, Vitebsk, Belarus</Address>
    <GeneralText>Contact us</GeneralText>
    <ContactBlock>
      <ContactItem
        as='a'
        href='mailto:business@money.kz'
      >
        business@money.kz
      </ContactItem>
      <ContactItem>+14888841</ContactItem>
    </ContactBlock>
  </Container>
);
