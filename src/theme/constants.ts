import { DefaultTheme, FlattenInterpolation, ThemeProps, css } from 'styled-components';

import { pxToRem } from './utils';
import { media } from './breakpoints';

export const THEME_COLORS = {
  primary: '#000000',
  secondary: '#000000',
  gray1: '#D9D9D9',
  gray2: '#898989',
  gray3: '#202025',
  gray4: '#607D94',
  gray5: '#898989',
  blue: '#A7B2C3',
  black: '#000000',
  white: '#FFFFFF',
  mediumDark: '#474747',
};

export const THEME_BOX_SHADOWS = {
  header: '0px 0px 3px #000000',
  subheader: '0px 3px 3px #00000080',
} as const;

export const THEME_FONT_FAMILIES = {
  primary: 'Poppins, sans-serif',
  secondary: 'Poppins, system-ui',
} as const;

export const THEME_LINEAR_GRADIENT = {
  header: '67deg, rgb(0 0 0 / 100%) 0%, rgb(25 54 34 / 100%) 60%, rgb(18 18 18 / 100%) 100%',
  headerText: '90.18deg, #00ce2c 0.18%, #aedf23 49.3%, #a3dc00 99.88%',
} as const;

export const THEME_FONT_WEIGHT = {
  light: '100',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

interface TypographyVariants {
  [key: string]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const THEME_TYPOGRAPHY_VARIANTS: TypographyVariants = {
  h1: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(39)};
    font-weight: 600;
    line-height: ${58 / 39};

    ${media.lg`
			font-family: ${THEME_FONT_FAMILIES.primary};
      font-size: ${pxToRem(76)};
      font-weight: 600;
      line-height: ${114 / 76};
		`}
  `,

  h2: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(13)};
    font-weight: 400;
    line-height: ${18 / 13};

    ${media.lg`
			font-family: ${THEME_FONT_FAMILIES.primary};
      font-size: ${pxToRem(35)};
      font-weight: 400;
      line-height: ${50 / 35};
		`}
  `,
  h3: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(12)};
    font-weight: 300;
    line-height: ${16 / 12};
    ${media.lg`

			font-family: ${THEME_FONT_FAMILIES.primary};
      font-size: ${pxToRem(32)};
      font-weight: 300;
      line-height: ${41 / 32};
		`}
  `,
  h4: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(16)};
    font-weight: 400;
    line-height: ${24 / 16};
    ${media.lg`
			font-family: ${THEME_FONT_FAMILIES.primary};
      font-size: ${pxToRem(28)};
      font-weight: 400;
      line-height: ${42 / 28};
		`}
  `,
  h5: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(16)};
    font-weight: 400;
    line-height: ${24 / 16};

    ${media.lg`
			font-family: ${THEME_FONT_FAMILIES.primary};
      font-size: ${pxToRem(24)};
      font-weight: 400;
      line-height: ${36 / 24};
		`}
  `,
  h6: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(10)};
    font-weight: 300;
    line-height: ${12 / 10};

    ${media.lg`
		font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(20)};
    font-weight: 300;
    line-height: ${41 / 20};
		`}
  `,
  p1: css`
    ${media.xs`
			font-family: ${THEME_FONT_FAMILIES.primary},
      font-size: ${pxToRem(12)},
      font-weight: 300,
      line-height: ${22 / 12},
		`}
  `,
  p2: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(20)};
    font-weight: 600;
    line-height: ${30 / 20};

    ${media.lg`
			font-family: ${THEME_FONT_FAMILIES.primary};
      font-size: ${pxToRem(26)};
      font-weight: 600;
      line-height: ${39 / 26};

		`}
  `,
} as const;
