import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: ${theme.spacing(120)};
  `}
`;

export const GeneralText = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.h4}
    margin-bottom: ${theme.spacing(2)};
    color: ${theme.colors.secondary};
  `}
`;

export const SubText = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.h6}
    margin: ${theme.spacing(1)} 0;
    color: ${theme.colors.secondary};
  `}
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const ContactItem = styled.p`
  ${({ theme }) => css`
    cursor: pointer;

    display: flex;
    align-items: center;

    margin-bottom: ${theme.spacing(1)};

    color: ${theme.colors.secondary};

    &:hover {
      text-decoration: underline;
    }

    svg {
      margin-right: ${theme.spacing(1)};
    }
  `}
`;

export const Address = styled.address`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(2)};

    font-size: ${theme.typography.variant.h6};
    font-style: normal;
    color: ${theme.colors.secondary};
    text-align: center;
  `}
`;
