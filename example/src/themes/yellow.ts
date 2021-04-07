import { DefaultTheme } from '../../../.';
import { white, colors } from './colors';
import { commonsTheme } from './commons';

export const yellowTheme: DefaultTheme = {
  ...commonsTheme,
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