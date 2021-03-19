import { DefaultTheme } from '../../../.';
import { white, colors } from './colors';
import { commonsTheme } from './commons';

export const grapeTheme: DefaultTheme = {
  ...commonsTheme,
  modes: {
    light: {
      background: colors.grape[4],
      text: colors.gray[2],
      frame: {
        background: colors.grape[8],
        border: colors.grape[7]
      },
      primary: {
        text: colors.grape[9],
        background: colors.gray[2],
        hovered: colors.gray[3]
      },
      secondary: {
        text: white,
        background: colors.grape[5],
        hovered: colors.grape[6]
      }
    },
    dark: {
      background: colors.gray[9],
      text: colors.gray[0],
      frame: {
        background: colors.gray[8],
        border: colors.grape[7]
      },
      primary: {
        text: colors.grape[0],
        background: colors.grape[9],
        hovered: colors.grape[8]
      },
      secondary: {
        text: colors.gray[0],
        background: colors.gray[7],
        hovered: colors.gray[6]
      }
    },
  },
};