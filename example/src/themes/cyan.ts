import { DefaultTheme } from '../../../.';
import { white, colors } from './colors';
import { commonsTheme } from './commons';

export const cyanTheme: DefaultTheme = {
  ...commonsTheme,
  modes: {
    light: {
      background: colors.cyan[4],
      text: colors.gray[2],
      frame: {
        background: colors.cyan[8],
        border: colors.cyan[7]
      },
      primary: {
        text: colors.cyan[9],
        background: colors.gray[2],
        hovered: colors.gray[3]
      },
      secondary: {
        text: white,
        background: colors.cyan[5],
        hovered: colors.cyan[6]
      }
    },
    dark: {
      background: colors.gray[9],
      text: colors.gray[0],
      frame: {
        background: colors.gray[8],
        border: colors.cyan[7]
      },
      primary: {
        text: colors.cyan[0],
        background: colors.cyan[9],
        hovered: colors.cyan[8]
      },
      secondary: {
        text: colors.gray[0],
        background: colors.gray[7],
        hovered: colors.gray[6]
      }
    },
  },
};