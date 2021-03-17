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
      background: colors.yellow[6],
      text: colors.gray[9],
      frame: {
        background: colors.yellow[8],
        border: colors.yellow[7]
      },
      primary: {
        text: white,
        background: colors.blue[9],
        hovered: colors.blue[8]
      },
      secondary: {
        text: colors.gray[9],
        background: colors.gray[4],
        hovered: colors.gray[3]
      }
    },
    dark: {
      background: colors.gray[9],
      text: colors.gray[0],
      frame: {
        background: colors.gray[8],
        border: colors.yellow[7]
      },
      primary: {
        text: colors.gray[9],
        background: colors.yellow[9],
        hovered: colors.yellow[8]
      },
      secondary: {
        text: colors.gray[0],
        background: colors.gray[7],
        hovered: colors.gray[6]
      }
    },
  },
};