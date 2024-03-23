import {
  TextContainer,
  SubText,
  LogoContainer,
  StyledHeaderLogo,
  HeaderContainer,
  MainText,
  Content,
} from './styled';

export const Header = () => (
  <HeaderContainer>
    <Content>
      <TextContainer>
        <TextContainer>
          <MainText>Modsen Currency</MainText>
          <MainText>Tracker</MainText>
        </TextContainer>

        <TextContainer>
          <SubText>Quotes for the dollar and other</SubText>
          <SubText>international currencies.</SubText>
        </TextContainer>
      </TextContainer>

      <LogoContainer>
        <StyledHeaderLogo />
      </LogoContainer>
    </Content>
  </HeaderContainer>
);
