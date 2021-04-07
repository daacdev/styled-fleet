import { DefaultTheme } from '../../../.';
import { white, colors } from './colors';
import { commonsTheme } from './commons';

export const blueTheme: DefaultTheme = {
  ...commonsTheme,
  modes: {
    light: {
      background: colors.blue[4],
      text: colors.gray[2],
      frame: {
        background: colors.blue[8],
        border: colors.blue[7]
      },
      primary: {
        text: colors.blue[9],
        background: colors.gray[2],
        hovered: colors.gray[3]
      },
      secondary: {
        text: white,
        background: colors.blue[5],
        hovered: colors.blue[6]
      }
    },
    dark: {
      background: colors.gray[9],
      text: colors.gray[0],
      frame: {
        background: colors.gray[8],
        border: colors.blue[7]
      },
      primary: {
        text: colors.blue[0],
        background: colors.blue[9],
        hovered: colors.blue[8]
      },
      secondary: {
        text: colors.gray[0],
        background: colors.gray[7],
        hovered: colors.gray[6]
      }
    },
  },
};