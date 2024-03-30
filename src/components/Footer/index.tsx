import { routesOptions } from '@/constants/footerRoutes';
import { ExpandableField } from '@/components/ExpandableField';

import {
  Container,
  Content,
  Copyright,
  CopyrightText,
  FooterLogo,
  InfoBlock,
  InfoText,
  LogoContainer,
  Title,
  TitleBlock,
} from './styled';

export const Footer = () => (
  <Container>
    <Content>
      <InfoBlock>
        <TitleBlock>
          <LogoContainer>
            <FooterLogo />
          </LogoContainer>
          <Title>Modsen Currency Tracker</Title>
        </TitleBlock>
        <InfoText>
          Since then, the company has grown organically to. Starsup is the world`s largest trading
          platform, with $12 billion worth of currency trading and 500,000 tickets sold daily to
          tens of thousands of traders worldwide.
        </InfoText>
      </InfoBlock>
      {routesOptions.map(({ title, content }) => (
        <ExpandableField
          key={title}
          title={title}
          content={content}
        />
      ))}
    </Content>
    <Copyright>
      <CopyrightText>Startsup © 2023-2024, All Rights Reserved</CopyrightText>
    </Copyright>
  </Container>
);
