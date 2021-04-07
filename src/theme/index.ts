import merge from 'lodash/merge';
import { createGlobalStyle } from 'styled-components/macro';

import { Theme } from '../types';
import { plugin } from '../stylis/plugin';
import { THEME_MODE_STORAGE_KEY } from '../constants';
import { getProperties, getFlatProperties, createLocalStorage } from '../util';

// Object to manage local storage of theme mode
const storage = createLocalStorage(THEME_MODE_STORAGE_KEY);

/**
 * @description Function that creates a theme to be used by ThemeProvider.
 * @see URL
 * @param theme Object with the keys and values defined by the user for the construction of the theme
 * @param functions Optional argument to define functions that can be used by components
 * @returns A theme object that is used by ThemeProvider
 */
export const createTheme: Theme = (theme, options) => {
  const { modes = {}, styles = {}, ...restTheme } = theme;
  const {
    functions,
    prefix,
    defaultMode,
    useLocalStorage = true,
    scope = ':root',
  } = options;
  // Gets all the properties of the theme
  const properties = getProperties(restTheme, undefined, prefix);

  // Object with the modes defined in the theme
  const modesObject = Object.fromEntries(
    Object.entries(modes).map(([key, value]) => [key, getProperties(value)])
  );

  // Function that allows to get the theme mode
  const getMode = () =>
    !useLocalStorage
      ? defaultMode || 'undefined'
      : storage.get() || defaultMode || 'undefined';

  return {
    // Default mode specified in createTheme
    defaultMode: getMode(),
    // Theme Properties
    properties,
    // Stylis Plugin
    plugin: plugin(functions),
    // Global Style Component
    GlobalStyle: createGlobalStyle<{ mode?: string }>`
      ${scope} {
        ${({ mode }) => {
          // Stores theme so in case useLocalStorage is true
          useLocalStorage && storage.set(mode || getMode());
          // returns flat CSS variables
          return !!mode
            ? getFlatProperties(merge(properties, modesObject[mode]))
            : getFlatProperties(properties);
        }}
      }
      ${styles as {}}
    `,
  };
};
