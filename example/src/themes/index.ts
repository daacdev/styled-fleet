import { createTheme, ThemeOptions } from '../../../.';

import { blueTheme } from './blue';
import { cyanTheme } from './cyan';
import { defaultTheme } from './default';
import { grapeTheme } from './grape';
import { greenTheme } from './green';
import { indigoTheme } from './indigo';
import { limeTheme } from './lime';
import { orangeTheme } from './orange';
import { pinkTheme } from './pink';
import { redTheme } from './red';
import { tealTheme } from './teal';
import { violetTheme } from './violet';
import { yellowTheme } from './yellow';

const options: ThemeOptions = {
  defaultMode: 'light',
  prefix: 'theme',
  functions: [],
  useLocalStorage: true
}

export const themes = {
  blue: createTheme({ ...blueTheme }, options),
  cyan: createTheme({ ...cyanTheme }, options),
  gray: createTheme({ ...defaultTheme }, options),
  grape: createTheme({ ...grapeTheme }, options),
  green: createTheme({ ...greenTheme }, options),
  indigo: createTheme({ ...indigoTheme }, options),
  lime: createTheme({ ...limeTheme }, options),
  orange: createTheme({ ...orangeTheme }, options),
  pink: createTheme({ ...pinkTheme }, options),
  red:  createTheme({ ...redTheme }, options),
  teal: createTheme({ ...tealTheme }, options),
  violet: createTheme({ ...violetTheme }, options),
  yellow: createTheme({ ...yellowTheme }, options)
}

export { colors } from './colors';