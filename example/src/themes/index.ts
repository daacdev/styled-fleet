import { cssVar, rgba } from 'polished';
import { createTheme } from '../../../.';

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

const functions = [cssVar, rgba];

export const themes = {
  blue: createTheme({ ...blueTheme }, ...functions),
  cyan: createTheme({ ...cyanTheme }, ...functions),
  gray: createTheme({ ...defaultTheme }, ...functions),
  grape: createTheme({ ...grapeTheme }, ...functions),
  green: createTheme({ ...greenTheme }, ...functions),
  indigo: createTheme({ ...indigoTheme }, ...functions),
  lime: createTheme({ ...limeTheme }, ...functions),
  orange: createTheme({ ...orangeTheme }, ...functions),
  pink: createTheme({ ...pinkTheme }, ...functions),
  red:  createTheme({ ...redTheme }, ...functions),
  teal: createTheme({ ...tealTheme }, ...functions),
  violet: createTheme({ ...violetTheme }, ...functions),
  yellow: createTheme({ ...yellowTheme }, ...functions)
}

export { colors } from './colors';