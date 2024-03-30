import styled, { css } from 'styled-components';

import Icon from '@/assets/images/circle animation.svg';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(32, 0)};
  `}
`;

export const LastUpdate = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.h3}
    color: ${theme.colors.secondary};
  `}
`;

export const LoadingText = styled.p`
  ${({ theme }) => css`
    margin-left: ${theme.spacing(18)};
    ${theme.typography.variant.h3}
    color: ${theme.colors.secondary};
  `}
`;

export const TimeUpdateImage = styled(Icon)`
  ${({ theme }) => css`
    width: ${theme.spacing(33)};
    height: ${theme.spacing(33)};
  `}
`;
