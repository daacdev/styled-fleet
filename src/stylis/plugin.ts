import { StylisPlugin } from 'styled-components/macro';
import { regex } from '../util';
import { STYLIS_CONTEXT } from '../constants';

/**
 * @description Function that defines a StylisPlugin that allows to process css strings
 * @param functions Functions that can be used by components
 * @returns A StylisPlugin for css string processing
 */
export const plugin = (functions: Function[]): StylisPlugin => {
  // Object containing all functions
  const fnObject = Object.fromEntries(functions.map(fn => [fn.name, fn]));

  // Recursive function that replaces all matches found in the css string according to the given regular expressions
  const replaceMatches = (...match: any[]): string => {
    try {
      // Capturing the groups is always in the final argument
      const groups = match[match.length - 1];
      // In case of being a variable defined by the user, it returns the variable css
      if (groups?.var) return `var(--${groups?.var})`;

      // If it is a function and there are keywords in the arguments, they are processed before the execution of the function.
      if (!!groups?.args?.length && fnObject[groups?.fn])
        groups.args = groups.args.replace(
          regex.extract_user_var_or_fn_args,
          replaceMatches
        );

      const fn = groups?.fn;
      const args = groups?.args && groups?.args.split(',');

      // If the function was defined in createTheme, execute it with the given parameters
      return fnObject[fn] && `${fnObject[fn](...args)}`;
    } catch (error) {
      console.error(error);
      return '';
    }
  };

  // StylisPlugin
  const stylis: StylisPlugin = (context, selector) => {
    return !!selector.length && context === STYLIS_CONTEXT.POST_PROCESS
      ? `${selector}`.replace(regex.extract_user_var_or_fn_args, replaceMatches)
      : undefined;
  };

  // stylis requires a name to be assigned to the plugin to uniquely identify it
  Object.defineProperty(stylis, 'name', { value: 'stylis-fleet' });
  return stylis;
};
