import { black, white, restColors, colors } from './colors';

export default {
  prefix: 'theme',
  styles: {
    body: {
      backgroundColor: '$theme-background',
      color: '$theme-text',
      minWidth: '100%',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      transition: 'background-color .5s, color .5s'
    }
  },
  colors: {
    black: black,
    white: white,
    ...restColors
  },
  modes: {
    light: {
      background: colors.violet[4],
      text: colors.gray[2],
      frame: {
        background: colors.violet[8],
        border: colors.violet[7]
      },
      primary: {
        text: colors.violet[9],
        background: colors.gray[2],
        hovered: colors.gray[3]
      },
      secondary: {
        text: white,
        background: colors.violet[5],
        hovered: colors.violet[6]
      }
    },
    dark: {
      background: colors.gray[9],
      text: colors.gray[0],
      frame: {
        background: colors.gray[8],
        border: colors.violet[7]
      },
      primary: {
        text: colors.violet[0],
        background: colors.violet[9],
        hovered: colors.violet[8]
      },
      secondary: {
        text: colors.gray[0],
        background: colors.gray[7],
        hovered: colors.gray[6]
      }
    },
  },
};