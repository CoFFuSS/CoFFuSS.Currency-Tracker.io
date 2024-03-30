import { Container, ImageContainer, NavBarLogo } from './styled';
import { LinkElement } from './Links';
import { ThemeSwitcher } from './ThemeSwitcher';

export const NavBar = () => (
  <Container>
    <ImageContainer to='/'>
      <NavBarLogo />
    </ImageContainer>
    <LinkElement />
    <ThemeSwitcher />
  </Container>
);
