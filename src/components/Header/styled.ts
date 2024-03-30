import styled, { css } from 'styled-components';

import Logo from '@/assets/images/HeaderLogo.svg';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    cursor: default;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: ${theme.spacing(200)};

    background: ${theme.colors.black};
    background: linear-gradient(${theme.linearGradient.header});
    ${theme.media.lg`
      justify-content: flex-start;
      height: ${theme.spacing(400)};
      `}
  `}
`;

export const MainText = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.h1}
    margin: 0 auto;

    color: transparent;
    text-align: center;
    word-break: normal;

    background-image: linear-gradient(${theme.linearGradient.headerText});
    background-clip: text;
    filter: drop-shadow(${theme.boxShadow.header});
    ${theme.media.lg`
      margin-right: ${theme.spacing(48)};
      text-align: right;
      `}
  `}
`;

export const SubText = styled.p`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-top: 0;

    ${theme.typography.variant.p1}
    color: ${theme.colors.gray1};
    text-align: center;
    text-shadow: ${theme.boxShadow.subheader};
    word-break: normal;
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    display: none;
    width: ${theme.spacing(12)};
    height: ${theme.spacing(12)};

    ${theme.media.lg`
      display: flex;
      width: ${theme.spacing(300)};
      height: ${theme.spacing(300)};
      `}
  `}
`;

export const HeaderLogo = styled(Logo)`
  ${({ theme }) => css`
    display: none;
    width: ${theme.spacing(12)};
    height: ${theme.spacing(12)};

    ${theme.media.lg`
      display: flex;
      width: ${theme.spacing(300)};
      height: ${theme.spacing(300)};
      `}
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${theme.media.lg`
      align-items: end;
      `}
  `}
`;

export const MainTextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${theme.media.lg`
      align-items: end;`}
  `}
`;

export const SubTextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${theme.media.lg`
      align-items: end;
      `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    height: ${theme.spacing(150)};

    ${theme.media.lg`
      display: flex;
      flex-direction: row;
      height: ${theme.spacing(300)};
      margin-left: ${theme.spacing(72)};
      `}
  `}
`;
