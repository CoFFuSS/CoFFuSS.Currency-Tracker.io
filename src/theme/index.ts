import { THEME_BREAKPOINTS, media } from './breakpoints';
import {
  THEME_BOX_SHADOWS,
  THEME_COLORS,
  THEME_FONT_FAMILIES,
  THEME_FONT_WEIGHT,
  THEME_LINEAR_GRADIENT,
  THEME_TYPOGRAPHY_VARIANTS,
} from './constants';
import { pxToRem, spacing } from './utils';

export const basicTheme = {
  colors: THEME_COLORS,
  breakpoints: THEME_BREAKPOINTS,
  boxShadow: THEME_BOX_SHADOWS,
  typography: {
    fontFamilies: THEME_FONT_FAMILIES,
    variant: THEME_TYPOGRAPHY_VARIANTS,
  },
  linearGradient: THEME_LINEAR_GRADIENT,
  fontWeight: THEME_FONT_WEIGHT,
  spacing,
  media,
  utils: {
    pxToRem,
  },
};

export const lightTheme = {
  ...basicTheme,
  colors: {
    ...basicTheme.colors,
    primary: THEME_COLORS.white,
    secondary: THEME_COLORS.black,
    gray5: '#3d3d3d',
  },
} as const;

export const darkTheme = {
  ...basicTheme,
  colors: {
    ...basicTheme.colors,
    primary: THEME_COLORS.black,
    secondary: THEME_COLORS.white,
  },
} as const;
