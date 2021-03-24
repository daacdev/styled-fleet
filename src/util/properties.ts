import kebabcase from 'lodash/kebabCase';
import { ThemeProperties, ThemeFlatProperties } from '../types';
import { DEFAULT_PREFIX } from '../constants';
import { regex } from './useful';

/**
 * @description Function that obtains an object with all the properties of a theme
 * @param theme Object with the keys and values of the theme defined by the user from createTheme
 * @param parentKey Parent key used for the construction of the css variable the default value is undefined
 * @param prefix Prefix for the construction of the css variable, by default it is "theme", for example --theme-background
 * @returns Theme object with all css variables
 */
export const getProperties: ThemeProperties = (
  theme,
  parentKey,
  prefix = DEFAULT_PREFIX
) => {
  return Object.fromEntries(
    Object.entries(theme).map(([key, value]) => {
      // Css variable name
      const cssVarName = parentKey
        ? parentKey.concat(`-${kebabcase(key)}`)
        : `--${prefix}-${kebabcase(key)}`;

      return [
        key,
        typeof value === 'object'
          ? getProperties(value, cssVarName, prefix)
          : `var(${cssVarName}, ${value})`,
      ];
    })
  );
};

/**
 * @description Function that obtains the definition of all the css variables of the theme
 * @param properties Object returned by the getProperties function
 * @returns String with the definition of all the css variables that make up the theme
 */
export const getFlatProperties: ThemeFlatProperties = properties => {
  // Function to flatten all the css properties defined in the theme
  const flattenProperties: ThemeFlatProperties = properties => `
    ${Object.entries(properties)
      .map(([, value]) => {
        const childs = typeof value === 'object' && flattenProperties(value);
        return childs || value;
      })
      .join(';')}
  `;

  return flattenProperties(properties)
    .concat(';')
    .replace(regex.extract_css_var, '$<propertie>: $<value>');
};
