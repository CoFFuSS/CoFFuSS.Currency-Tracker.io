import styled, { css, keyframes } from 'styled-components';

export const ChartContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.spacing(1200)};
    max-height: ${theme.spacing(630)};
    margin: ${theme.spacing(20)} auto;
    margin-bottom: ${theme.spacing(400)};
  `}
`;

export const InputLabel = styled.label`
  ${({ theme }) => css`
    ${theme.typography.variant.h6};
    color: ${theme.colors.secondary};
  `}
`;

export const ControlBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: ${theme.spacing(20)};
  `}
`;

export const ChartInput = styled.input`
  ${({ theme }) => css`
    ${theme.typography.variant.h6}
    width: ${theme.spacing(70)};
    max-width: ${theme.spacing(150)};
    margin-left: ${theme.spacing(8)};
    border-radius: ${theme.spacing(20)};
    ${theme.media.lg`
      min-width: ${theme.spacing(130)};`}
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(12)};
    ${theme.typography.variant.h6};
    color: ${theme.colors.secondary};
  `}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SubmitButton = styled.button`
  ${({ theme }) => css`
    display: flex;

    ${theme.typography.variant.h6};
    max-width: ${theme.spacing(100)};

    color: ${theme.colors.primary};

    background-color: ${theme.colors.secondary};
    border-radius: ${theme.spacing(20)};

    transition:
      background-color 0.3s ease,
      transform 0.3s ease;
    animation: ${fadeIn} 0.5s ease;

    &:hover {
      transform: scale(1.05);
      background-color: ${theme.colors.gray5};
    }
  `}
`;
