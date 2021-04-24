import { DefaultTheme } from '../../../.';
import { black, white, restColors } from './colors';
import { css } from 'styled-components';

export const commonsTheme: DefaultTheme = {
  styles: css`
    body {
      background-color: $theme-background;
      color: $theme-text;
      min-width: $theme-sizes-full;
      min-height: $theme-sizes-screen-height;
      margin: $theme-space-0;
      padding: $theme-space-0;
      transition: background-color .5s, color .5s;
    }
  `,
  colors: {
    black: black,
    white: white,
    ...restColors
  },
  space: ["0rem", "0.5rem", "1rem", "1.5rem", "2rem", "2.5rem", "3rem"],
  font: {
    sizes: ['0.75rem', '0.875rem', '1rem', '1.25rem', '1.5rem', '1.75rem', '2rem', '2.5rem', '3rem'],
    family: ['sans-serif'],
    weights: {
      body: 400,
      heading: 700,
      bold: 700,
      light: 300,
      medium: 500,
      semibold: 500,
    }
  },
  shadows: {
    default: '0 .5rem 1rem rgba(0, 0, 0, .15)',
    sm: '0 .125rem .25rem rgba(0, 0, 0, .075)',
    lg: '0 1rem 3rem rgba(0, 0, 0, .175)',
  },
  sizes: {
    variant: ['2rem'],
    full: '100%',
    middle: '50%',
    large: '80%',
    screen: {
      height: '100vh',
      width: '100vw',
    }
  },
  borders: ['0rem', '1px'],
  breakpoint: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
  }
};