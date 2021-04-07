import { DefaultTheme } from '../../../.';
import { white, colors } from './colors';
import { commonsTheme } from './commons';

export const redTheme: DefaultTheme = {
  ...commonsTheme,
  modes: {
    light: {
      background: colors.red[4],
      text: colors.gray[2],
      frame: {
        background: colors.red[8],
        border: colors.red[7]
      },
      primary: {
        text: colors.red[9],
        background: colors.gray[2],
        hovered: colors.gray[3]
      },
      secondary: {
        text: white,
        background: colors.red[5],
        hovered: colors.red[6]
      }
    },
    dark: {
      background: colors.gray[9],
      text: colors.gray[0],
      frame: {
        background: colors.gray[8],
        border: colors.red[7],
      },
      primary: {
        text: colors.red[0],
        background: colors.red[9],
        hovered: colors.red[8]
      },
      secondary: {
        text: colors.gray[0],
        background: colors.gray[7],
        hovered: colors.gray[6]
      }
    },
  },
};