import kebabcase from 'lodash.kebabcase';
import { ThemeProperties, ThemeFlatProperties } from '../types';
import { DEFAULT_PREFIX } from '../constants';
import atRules from './at-rules';

/**
 * @description An object with regular expressions that allows to extract information from css
 */
export const regex = {
  // Extract all css variables
  extract_css_var: /var\((?<propertie>.*?),(?<value>.*?)\)/g,
  // Extract all css variables or functions with arguments in the css string
  extract_user_var_or_fn_args: new RegExp(
    `(\\$)(?<var>[\\w-]+)|@\\s*(?<fn>(?!\\b${atRules.join(
      '|'
    )}\\b)[\\w\\s-]+)\\((?<args>.*?)\\)(?!.*?\\)[^{]*$)`,
    'g'
  ),
};

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

  return (
    flattenProperties(properties)
      // This is necessary to match the regular expression
      .concat(',')
      .replace(regex.extract_css_var, '$<propertie>: $<value>')
  );
};
