import { FooterLink } from '@/components/Footer/styled';

export const routesOptions = [
  {
    title: 'General',
    content: (
      <>
        {['Market', 'Service'].map((link, index) => (
          <FooterLink
            key={index}
            to={link}
            name-link={link}
          >
            {link}
          </FooterLink>
        ))}
      </>
    ),
  },
  {
    title: 'Product',
    content: (
      <>
        {['Sparks', 'Snaps'].map((link, index) => (
          <FooterLink
            key={index}
            to={link}
            name-link={link}
          >
            {link}
          </FooterLink>
        ))}
      </>
    ),
  },
  {
    title: 'Community',
    content: (
      <>
        {['Ideas', 'Streams'].map((link, index) => (
          <FooterLink
            key={index}
            to={link}
            name-link={link}
          >
            {link}
          </FooterLink>
        ))}
      </>
    ),
  },
] as const;
