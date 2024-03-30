import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Logo from '@/assets/images/MainPageLogo.svg';

export const Container = styled.footer`
  ${({ theme }) => css`
    justify-content: center;
    ${theme.media.lg`
      display: flex;
      flex-direction: column;
      `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    ${theme.media.lg`
      flex-direction: row;
      justify-content: space-between;
      margin: ${theme.spacing(0, 120)};
      `}
  `}
`;

export const InfoBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    height: ${theme.spacing(30)};
    margin: ${theme.spacing(0, 40)};
    margin-bottom: ${theme.spacing(34)};
    ${theme.media.lg`
      flex-direction: column;
      height: ${theme.spacing(300)};
      width: ${theme.spacing(500)};
      margin: 0 auto;
      `}
  `}
`;

export const TitleBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${theme.spacing(0)} auto;
    ${theme.media.lg`
      display: flex;
      justify-content: flex-start;
      margin: 0;
      width: inherit;
      `}
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: ${theme.spacing(30)};
    height: ${theme.spacing(30)};
  `}
`;

export const FooterLogo = styled(Logo)`
  ${({ theme }) => css`
    display: flex;
    width: ${theme.spacing(30)};
    height: ${theme.spacing(30)};
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacing(0, 16)};

    ${theme.typography.variant.p2}
    color: transparent;
    text-align: center;
    word-break: normal;

    background-image: linear-gradient(${theme.linearGradient.headerText});
    background-clip: text;
  `}
`;

export const InfoText = styled.p`
  ${({ theme }) => css`
    display: none;
    ${theme.typography.variant.h5}
    ${theme.media.lg`
      display: flex;
      color: ${theme.colors.secondary}
      `}
  `}
`;

export const Copyright = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${theme.spacing(36)};
  `}
`;

export const CopyrightText = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.p2};
    color: ${theme.colors.gray5};
    ${theme.typography.variant.h5}
  `}
`;

export const FooterLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.gray5};
    text-decoration: none;
    ${theme.typography.variant.h5}
  `}
`;
