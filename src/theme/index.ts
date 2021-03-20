import merge from 'lodash.merge';
import { createGlobalStyle } from 'styled-components/macro';

import { Theme } from '../types';
import {
  getProperties,
  getFlatProperties,
  createThemeModeStorage,
} from '../util';

import { plugin } from '../stylis/plugin';
import { THEME_MODE_STORAGE_KEY } from '../constants';

// Object to manage local storage of theme mode
const storage = createThemeModeStorage(THEME_MODE_STORAGE_KEY);

/**
 * @description Function that creates a theme to be used by ThemeProvider.
 * @see URL
 * @param theme Object with the keys and values defined by the user for the construction of the theme
 * @param functions Optional argument to define functions that can be used by components
 * @returns A theme object that is used by ThemeProvider
 */
export const createTheme: Theme = (theme, options) => {
  const { modes = {}, styles = {}, ...restTheme } = theme;
  const { functions, prefix, defaultMode, useLocalStorage = true } = options;
  // Gets all the properties of the theme
  const properties = getProperties(restTheme, undefined, prefix);
  // Stores theme so in case useLocalStorage is true
  if (useLocalStorage && !storage.get()) storage.set(defaultMode || 'default');

  // Object with the modes defined in the theme
  const modesObject = Object.fromEntries(
    Object.entries(modes).map(([key, value]) => [key, getProperties(value)])
  );

  return {
    // Default mode specified in createTheme
    defaultMode: storage.get() || defaultMode,
    // Theme Properties
    properties,
    // Stylis Plugin
    plugin: plugin(functions),
    // Global Style Component
    GlobalStyle: createGlobalStyle<{ mode?: string }>`
      :root {
        ${({ mode }) => {
          // Stores theme so in case useLocalStorage is true
          useLocalStorage && storage.set(mode || 'default');
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
