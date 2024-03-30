import styled, { css } from 'styled-components';

import Icon from '@/assets/images/loadingImage.svg';

export const MapContainer = styled.div`
  ${({ theme }) => css`
    height: ${theme.spacing(230)};
    margin-bottom: ${theme.spacing(400)};

    ${theme.media.lg`
      height: ${theme.spacing(460)};
      `}
  `}
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: ${theme.spacing(80)};
  `}
`;

export const SearchAdvise = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.h2}
    margin: ${theme.spacing(24)};
    color: ${theme.colors.secondary};
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    width: ${theme.spacing(200)};
    height: ${theme.spacing(30)};

    ${theme.media.lg`
      width: ${theme.spacing(400)};
      height: ${theme.spacing(25)};
      `}
    ${theme.typography.variant.h6}
    background-color: ${theme.colors.gray5};
    border: ${theme.spacing(20)} solid ${theme.colors.gray5};
    border-radius: ${theme.spacing(10)};

    &::placeholder {
      color: ${theme.colors.primary};
    }

    &:focus {
      color: ${theme.colors.primary};
    }
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
