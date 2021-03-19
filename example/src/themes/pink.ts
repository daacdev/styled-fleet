import { DefaultTheme } from '../../../.';
import { white, colors } from './colors';
import { commonsTheme } from './commons';

export const pinkTheme: DefaultTheme = {
  ...commonsTheme,
  modes: {
    light: {
      background: colors.pink[4],
      text: colors.gray[2],
      frame: {
        background: colors.pink[8],
        border: colors.pink[7]
      },
      primary: {
        text: colors.pink[9],
        background: colors.gray[2],
        hovered: colors.gray[3]
      },
      secondary: {
        text: white,
        background: colors.pink[5],
        hovered: colors.pink[6]
      }
    },
    dark: {
      background: colors.gray[9],
      text: colors.gray[0],
      frame: {
        background: colors.gray[8],
        border: colors.pink[7]
      },
      primary: {
        text: colors.pink[2],
        background: colors.pink[9],
        hovered: colors.pink[8]
      },
      secondary: {
        text: colors.gray[0],
        background: colors.gray[7],
        hovered: colors.gray[6]
      }
    },
  },
};