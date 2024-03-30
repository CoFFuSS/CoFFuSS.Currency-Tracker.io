import styled, { css } from 'styled-components';

export const PageWrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    background-color: ${theme.colors.primary};
  `}
`;

export const PageContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.breakpoints.xl};
    margin: 0 auto;
  `}
`;
