import { DefaultTheme } from '../../../.';
import { white, colors } from './colors';
import { commonsTheme } from './commons';

export const indigoTheme: DefaultTheme = {
  ...commonsTheme,
  modes: {
    light: {
      background: colors.indigo[4],
      text: colors.gray[2],
      frame: {
        background: colors.indigo[8],
        border: colors.indigo[7]
      },
      primary: {
        text: colors.indigo[9],
        background: colors.gray[2],
        hovered: colors.gray[3]
      },
      secondary: {
        text: white,
        background: colors.indigo[5],
        hovered: colors.indigo[6]
      }
    },
    dark: {
      background: colors.gray[9],
      text: colors.gray[0],
      frame: {
        background: colors.gray[8],
        border: colors.indigo[7]
      },
      primary: {
        text: colors.indigo[0],
        background: colors.indigo[9],
        hovered: colors.indigo[8]
      },
      secondary: {
        text: colors.gray[0],
        background: colors.gray[7],
        hovered: colors.gray[6]
      }
    },
  },
};