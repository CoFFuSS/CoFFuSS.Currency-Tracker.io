import styled, { css } from 'styled-components';

import Icon from '@/assets/images/loadingImage.svg';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: ${theme.spacing(32, 26, 0, 26)};
    padding-bottom: ${theme.spacing(150)};

    ${theme.media.lg`
      margin: ${theme.spacing(32, 120, 0, 120)};
      `}
  `}
`;

export const CardSection = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing(20)};
    justify-content: center;

    margin-bottom: ${theme.spacing(32)};
  `}
`;

export const CardContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing(20)};
    ${theme.media.md`
      flex-direction: row;
      row-gap: 0;
      display: default;
      flex-wrap: wrap;
      gap: ${theme.spacing(20)};
      justify-content: space-between;
      margin-bottom: ${theme.spacing(32)};
      `}
  `}
`;

export const SectionName = styled.span`
  ${({ theme }) => css`
    ${theme.typography.variant.h10};
    height: ${theme.spacing(30)};
    color: ${theme.colors.secondary};
    border-bottom: ${theme.spacing(1)} solid ${theme.colors.mediumDark};
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    cursor: pointer;

    display: flex;
    align-items: center;

    height: ${theme.spacing(62)};

    background-color: ${theme.colors.mediumDark};
    border-radius: ${theme.spacing(3)};

    ${theme.media.md`
      width: calc(50% - ${theme.spacing(120)});
      max-width: ${theme.spacing(520)};
      flex-basis: calc(50% - ${theme.spacing(120)});
      flex-grow: 0;
      `}
  `}
`;

export const SvgIcon = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: ${theme.spacing(30)};
    height: ${theme.spacing(30)};
    margin: ${theme.spacing(0, 12)};

    & svg {
      width: ${theme.spacing(30)};
      height: ${theme.spacing(30)};
    }
  `}
`;

export const CardItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-content: space-between;

    width: ${theme.spacing(105)};
    height: ${theme.spacing(35)};
  `}
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardCurrency = styled.p`
  ${({ theme }) => css`
    margin: 0;
    ${theme.typography.variant.h8};
    color: ${theme.colors.gray1};
  `}
`;

export const CardPrice = styled.p`
  ${({ theme }) => css`
    margin: 0;
    ${theme.typography.variant.h10};
    color: ${theme.colors.blue};
  `}
`;

export const LoadingImage = styled(Icon)`
  ${({ theme }) => css`
    display: flex;
    align-self: center;
    justify-content: center;

    width: ${theme.spacing(216)};
    height: ${theme.spacing(216)};
    ${theme.media.lg`
      width: ${theme.spacing(460)};
      height: ${theme.spacing(460)};
      `}
  `}
`;
