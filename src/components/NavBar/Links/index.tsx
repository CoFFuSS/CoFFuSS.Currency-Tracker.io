import { options } from '@/constants/links';

import { LinkContainer, NamedLink } from './styled';

const { NAV_ROUTES } = options;

export const LinkElement = () => (
  <LinkContainer>
    {NAV_ROUTES.map(({ to, name }) => (
      <NamedLink
        to={to}
        key={name}
        name-link={name}
      >
        {name}
      </NamedLink>
    ))}
  </LinkContainer>
);
