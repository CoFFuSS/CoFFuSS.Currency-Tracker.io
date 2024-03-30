import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: end;
    height: ${theme.spacing(30)};
  `}
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(2rem); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const List = styled.select`
  ${({ theme }) => css`
    cursor: pointer;

    width: ${theme.spacing(100)};

    ${theme.typography.variant.h5}

    text-align: center;
    text-align-last: center;

    appearance: none;
    border-radius: ${theme.spacing(4)};

    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
    animation: ${fadeIn} 0.2s ease-in-out;
		background: ${theme.colors.gray5}

    &:disabled {
      cursor: default;
      color: ${theme.colors.secondary};
      opacity: 0.8;
      background: ${theme.colors.primary};
    }

    &.opened {
      transform: translateY(0);
      opacity: 1;
    }

    &.closed {
      transform: translateY(-2rem);
      opacity: 0;
    }

    &:focus {
      outline: none;
    }
  `}
`;

export const Options = styled.option`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    ${theme.typography.variant.h5}
    text-align: center;
    text-align-last: center;

    &:hover {
      background-color: ${theme.colors.gray5};
    }
  `}
`;
