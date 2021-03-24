/**
 * @description All CSS at rules
 */
export const at_rules = [
  'charset',
  'counter-style',
  'document',
  'font-face',
  'font-feature-values',
  'import',
  'keyframes',
  'media',
  'namespace',
  'page',
  'property',
  'supports',
  'viewport',
];

/**
 * @description An object with regular expressions that allows to extract information from css
 */
export const regex = {
  // Extract all css variables
  extract_css_var: /var\((?<propertie>.*?),(?<value>.*?)\)/g,
  // Extract all css variables or functions with arguments in the css string
  extract_user_var_or_fn_args: new RegExp(
    `(\\$)(?<var>[\\w-]+)|@\\s*(?<fn>(?!\\b${at_rules.join(
      '|'
    )}\\b)[\\w\\s-]+)\\((?<args>.*?)\\)(?!.*?\\)[^{]*$)`,
    'g'
  ),
};
