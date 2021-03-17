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
      background: colors.teal[4],
      text: colors.gray[2],
      frame: {
        background: colors.teal[8],
        border: colors.teal[7]
      },
      primary: {
        text: colors.teal[9],
        background: colors.gray[2],
        hovered: colors.gray[3]
      },
      secondary: {
        text: white,
        background: colors.teal[5],
        hovered: colors.teal[6]
      }
    },
    dark: {
      background: colors.gray[9],
      text: colors.gray[0],
      frame: {
        background: colors.gray[8],
        border: colors.teal[7]
      },
      primary: {
        text: colors.teal[0],
        background: colors.teal[9],
        hovered: colors.teal[8]
      },
      secondary: {
        text: colors.gray[0],
        background: colors.gray[7],
        hovered: colors.gray[6]
      }
    },
  },
};