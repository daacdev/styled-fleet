import { DefaultTheme } from '../../../.';
import { colors } from './colors';
import { commonsTheme } from './commons';

export const limeTheme: DefaultTheme = {
  ...commonsTheme,
  modes: {
    light: {
      background: colors.lime[4],
      text: colors.gray[9],
      frame: {
        background: colors.lime[8],
        border: colors.lime[7],
      },
      primary: {
        text: colors.gray[9],
        background: colors.gray[2],
        hovered: colors.gray[3]
      },
      secondary: {
        text: colors.gray[9],
        background: colors.lime[5],
        hovered: colors.lime[6]
      }
    },
    dark: {
      background: colors.gray[9],
      text: colors.gray[0],
      frame: {
        background: colors.gray[8],
        border: colors.lime[7]
      },
      primary: {
        text: colors.lime[0],
        background: colors.lime[9],
        hovered: colors.lime[8]
      },
      secondary: {
        text: colors.gray[0],
        background: colors.gray[7],
        hovered: colors.gray[6]
      }
    },
  },
};