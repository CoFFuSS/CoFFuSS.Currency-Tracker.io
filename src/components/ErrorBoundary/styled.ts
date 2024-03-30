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

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${theme.spacing(20, 20, 40, 20)};

    ${theme.media.lg`
      margin: ${theme.spacing(40, 40, 100, 40)}
      `}
  `}
`;

export const TextField = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.h1}
    color: ${theme.colors.secondary};
  `}
`;
