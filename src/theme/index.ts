import merge from 'lodash.merge';
import { createGlobalStyle } from 'styled-components/macro';

import { Theme } from '../types';
import { getProperties, getFlatProperties } from '../util';
import { plugin } from '../stylis/plugin';

/**
 * @description Function that creates a theme to be used by ThemeProvider.
 * @see URL
 * @param theme Object with the keys and values defined by the user for the construction of the theme
 * @param functions Optional argument to define functions that can be used by components
 * @returns A theme object that is used by ThemeProvider
 */
export const createTheme: Theme = (theme, ...functions) => {
  const { prefix, modes = {}, styles = {}, ...restTheme } = theme;
  // Gets all the properties of the theme
  const properties = getProperties(restTheme, undefined, prefix);

  // Object with the modes defined in the theme
  const modesObject = Object.fromEntries(
    Object.entries(modes).map(([key, value]) => [key, getProperties(value)])
  );

  return {
    // Theme Properties
    properties,
    // Stylis Plugin
    plugin: plugin(functions),
    // Global Style Component
    GlobalStyle: createGlobalStyle<{ mode?: string }>`
      :root {
        ${({ mode }) =>
          !!mode
            ? getFlatProperties(merge(properties, modesObject[mode]))
            : getFlatProperties(properties)}  
        }
      ${styles as {}}
    `,
  };
};
