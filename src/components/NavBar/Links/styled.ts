import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const NamedLink = styled(Link)`
  ${({ theme }) => css`
    ${theme.typography.variant.h6}
    color: ${theme.colors.secondary};
    text-decoration: none;
  `}
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;
