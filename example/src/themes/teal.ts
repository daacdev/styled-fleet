import { DefaultTheme } from '../../../.';
import { white, colors } from './colors';
import { commonsTheme } from './commons';

export const tealTheme: DefaultTheme = {
  ...commonsTheme,
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