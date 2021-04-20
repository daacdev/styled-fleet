<h1 align="center">Styled Fleet</h1>

<div align="center">

  Building theming for styled components

  [![CI](https://github.com/daacdev/styled-fleet/actions/workflows/main.yml/badge.svg)](https://github.com/daacdev/styled-fleet/actions/workflows/main.yml)
  ![GitHub](https://img.shields.io/github/license/daacdev/styled-fleet)
  ![npm](https://img.shields.io/npm/v/styled-fleet)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

</div>

<img alt="styled-fleet" src="https://github.com/daacdev/styled-fleet/blob/ae4a1047a8b4be2f4280678b135e8ab375059ddb/example/demo/demo.gif" />

English | [Español](./README_es_CO.md)

## 🎴 [Demo](https://daacdev.github.io/styled-fleet/)

## 📦 Install

```bash
npm install styled-fleet
```

```bash
yarn add styled-fleet
```

## 🔨 Usage

Create a `theme`

```jsx
import {createTheme} from 'styled-fleet';

const theme = createTheme({
  colors: {
    white: '#fff',
    black: '#000',
  },
  space: ["0rem", "0.5rem", "1rem", "1.5rem", "2rem", "2.5rem", "3rem"],
  font: {
    sizes: ['0.75rem', '0.875rem', '1rem', '1.25rem', '1.5rem', '1.75rem', '2rem', '2.5rem', '3rem'],
    family: ['sans-serif'],
    weights: {
      body: 400,
      heading: 700,
      bold: 700,
      light: 300,
      medium: 500,
      semibold: 500,
    }
  },
  modes: {
    light: {
      background: '$theme-colors-white',
      text: '$theme-colors-black',
    },
    dark: {
      background: '$theme-colors-black',
      text: '$theme-colors-white',
    },
  },
});
```

Create a `styled component` and access the `theme` with $theme-... , or if you prefer you can use the css notation with var(--theme-...)

```jsx
import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  border: none;
  padding: $theme-space-2 $theme-space-4;
  margin: $theme-space-0;
  text-decoration: none;
  font-family: $theme-font-family-0;
  font-size: $theme-font-sizes-2;
  font-weight: $theme-font-weights-medium;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  color: $theme-text;
  background-color: var(--theme-background);
`;
```

Add the `theme` to `ThemeProvider` and use the component

```jsx
import * as React from 'react';
import {ThemeProvider} from 'styled-fleet';

export const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <Button>
        Example Button
      </Button>
    </ThemeProvider>
  );
};
```

## 🔧 API

### `createTheme`

Function that allows you to create a `theme`.
|Parameters|Type|Description|
|----------|----|-----------|
|theme (required)|[DefaultTheme](#DefaultTheme)|Theming context object|
|options (optional)|[ThemeOptions](#ThemeOptions)|Options object for theme processing|

#### `DefaultTheme`

Object with custom key / value that will define the global css variables, the `styles` and `modes` keys are reserved to define global styles and `theme` modes respectively, for example.

```javascript
{
  colors: ...,
  sizes: ...,
  fonts: ...,
  shadows: ...,
  ...
  styles: {
    body: {
      backgroundColor: '$theme-background',
      color: '$theme-text',
      ...
    },
    a: ...,
    h1: ...,
    h2: ...,
    code: ...,
    pre: ...,
    hr: ...,
    ...
  },
  modes: {
    light: {
      background: '$theme-colors-white',
      text: '$theme-colors-black',
      ...
    },
    dark: {
      background: '$theme-colors-black',
      text: '$theme-colors-white',
      ...
    },
    ...
  },
}
```

#### `ThemeOptions`

Object with the following keys

|Key|Type|Description|Default|Example|
|---|----|-----------|-------|-------|
|prefix (optional)|string|Prefix to use in css variables|'theme'|$theme-colors-red|
|useLocalStorage (optional)|boolean|Enable or disable local storage to store the set theme mode|true|useLocalStorage: true|
|defaultMode (optional)|string|Set the default theme mode|'default'|defaultMode: 'light'|
|scope (optional)|string or styled-component|Allows you to set the scope of global CSS variables|':root'|scope: 'body'<br />scope: Sider|
|functions (optional)|Function[]|An array of custom functions that can be accessed by @\<function name>(...arguments), This allows you to extend and add features to your css styles|[]|functions: [cssVar, ...]

`Note:`

* All custom functions will be processed with string parameters, so the function will have to ensure the data type conversion and error handling in case of any wrong parameter.
* You can use external package functions like polished or others.
* The functions have to return a correct value for the css styles, it can be a string or a number.
* Sometimes you have to set a name to the function so that `styled-fleet` can access it, example

```javascript
const rgba = (red, green, blue, alpha) => { ... };

Object.defineProperty(rgba, 'name', { value: 'rgba' });
```

`Example:`

```javascript
import styled from 'styled-components';
import {createTheme} from 'styled-fleet';
import {rgba, darken, lighten} from 'polished';

const theme = { ... };

const options = {
  prefix: 'my-prefix',
  useLocalStorage: false,
  defaultMode: 'light',
  scope: ':root',
  functions: [rgba, darken, lighten],
};

export default createTheme(theme, options);

//  To use it in a component
const MyComponent = styled.div`
  padding: $my-prefix-space-2;
  background-color: @rgba(#000, 0.5);
  color: @darken(0.2, #fff);
  border: 1px solid @lighten(.2, #000);
`;
```

### `ThemeProvider`

Provider component that provides a theme for all React components under itself.

|Props|Description|value|
|-----|-----------|-----|
|theme (required)|Required prop for global app theming|Object returned by createTheme|

`Example:`

```jsx
import * as React from 'react';
import {createTheme, ThemeProvider} from 'styled-fleet';

const theme = createTheme({...}, {...});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      ...
    </ThemeProvider>
  )
};
```

### `useMode`

Hook that allows accessing or setting the current theme mode in the context of `ThemeProvider`.

* Does not receive input parameters.
* Returns a pair of values that can be destructuring into
  * `mode`, string containing current mode theme.
  * `setMode`, function that allows setting the theme mode, receives as the only parameter a string that represents the theme to be used.

`Example:`

```jsx
import * as React from 'react';
import styled from 'styled-components';
import { useMode } from 'styled-fleet'

import { Button } from './Button';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

const IconButton = styled(Button)`
  background-color: transparent;
  border: $theme-borders-0;
  cursor: pointer;
  padding: $theme-space-0;
  color: $theme-color;
  align-items: center;
  display: flex;
  gap: $theme-space-1;
  outline: none;
`;

export const ButtonThemeMode = () => {
  const {mode, setMode} = useMode();

  return (
    <IconButton onClick = {() => setMode(mode === 'light' ? 'dark' : 'light') } >
      { mode === 'light'
        ? ( <MoonIcon /> )
        : ( <SunIcon /> ) }
      <h4> Switch to { mode === 'light' ? 'dark' : 'light' } mode </h4>
    </IconButton>
  );
};
```

## ⚠️ Limitations

* Currently it is not possible to access the value of css variables in the first rendering of the application, so functions like polished cssVar that allows obtaining global css variables, will fail if a default value is not specified. This behavior also occurs with styled-components when setting css variables in the root and trying to get their value.
* When using functions to calculate a value of a css property, it is possible that if you are using css variables and change the theme mode you will not get the expected result, this is because in the first rendering when processing the css styles, the variable css has been changed to the new value calculated by the function, unless the function returns another css variable as a result depending on the theme mode

## License

Licensed under the MIT License.

See [LICENSE](./LICENSE) for more information.
