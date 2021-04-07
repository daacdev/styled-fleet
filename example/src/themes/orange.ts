import { DefaultTheme } from '../../../.';
import { colors } from './colors';
import { commonsTheme } from './commons';

export const orangeTheme: DefaultTheme = {
  ...commonsTheme,
  modes: {
    light: {
      background: colors.orange[4],
      text: colors.gray[9],
      frame: {
        background: colors.orange[8],
        border: colors.orange[7]
      },
      primary: {
        text: colors.orange[9],
        background: colors.gray[8],
        hovered: colors.gray[9]
      },
      secondary: {
        text: colors.gray[9],
        background: colors.orange[5],
        hovered: colors.orange[6]
      }
    },
    dark: {
      background: colors.gray[9],
      text: colors.gray[0],
      frame: {
        background: colors.gray[8],
        border: colors.orange[7]
      },
      primary: {
        text: colors.orange[0],
        background: colors.orange[9],
        hovered: colors.orange[8]
      },
      secondary: {
        text: colors.gray[0],
        background: colors.gray[7],
        hovered: colors.gray[6]
      }
    },
  },
};