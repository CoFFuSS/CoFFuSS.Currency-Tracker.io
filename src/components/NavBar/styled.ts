import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '@/assets/images/MainPageLogo.svg';

export const Container = styled.nav`
  ${({ theme }) => css`
    position: sticky;
    z-index: 2;
    top: 0;

    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;

    height: ${theme.spacing(32)};
    margin-right: auto;
    margin-left: auto;
    padding-right: ${theme.spacing(30)};
    padding-left: ${theme.spacing(30)};

    background-color: ${theme.colors.primary};
    ${theme.media.lg`
      height: ${theme.spacing(100)}
      `}
  `}
`;

export const ImageContainer = styled(Link)`
  ${({ theme }) => css`
    width: ${theme.spacing(30)};
    height: ${theme.spacing(12)};
    ${theme.media.lg`
      width: ${theme.spacing(40)};
      height: ${theme.spacing(40)};
      `}
  `};
`;

export const NavBarLogo = styled(Logo)`
  ${({ theme }) => css`
    cursor: pointer;
    width: ${theme.spacing(12)};
    height: ${theme.spacing(12)};
    ${theme.media.lg`
      width: ${theme.spacing(40)};
      height: ${theme.spacing(40)};
      `}
  `};
`;
