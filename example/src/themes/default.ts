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
      background: colors.gray[0],
      text: colors.gray[9],
      frame: {
        background: colors.gray[1],
        border: colors.gray[2]
      },
      primary: {
        text: white,
        background: colors.blue[6],
        hovered: colors.blue[7]
      },
      secondary: {
        text: white,
        background: colors.gray[6],
        hovered: colors.gray[7]
      }
    },
    dark: {
      background: colors.gray[9],
      text: colors.gray[0],
      frame: {
        background: colors.gray[8],
        border: colors.gray[7]
      },
      primary: {
        text: colors.blue[2],
        background: colors.blue[9],
        hovered: colors.blue[8]
      },
      secondary: {
        text: colors.gray[2],
        background: colors.gray[7],
        hovered: colors.gray[6]
      }
    }
  },
};