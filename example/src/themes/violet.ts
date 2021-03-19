import { DefaultTheme } from '../../../.';
import { white, colors } from './colors';
import { commonsTheme } from './commons';

export const violetTheme: DefaultTheme = {
  ...commonsTheme,
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