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
      background: colors.green[4],
      text: colors.gray[2],
      frame: {
        background: colors.green[8],
        border: colors.green[7]
      },
      primary: {
        text: colors.green[9],
        background: colors.gray[2],
        hovered: colors.gray[3]
      },
      secondary: {
        text: white,
        background: colors.green[5],
        hovered: colors.green[6]
      }
    },
    dark: {
      background: colors.gray[9],
      text: colors.gray[0],
      frame: {
        background: colors.gray[8],
        border: colors.green[7]
      },
      primary: {
        text: colors.green[0],
        background: colors.green[9],
        hovered: colors.green[8]
      },
      secondary: {
        text: colors.gray[0],
        background: colors.gray[7],
        hovered: colors.gray[6]
      }
    },
  },
};