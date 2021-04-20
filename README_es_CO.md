<h1 align="center">Styled Fleet</h1>

<div align="center">

  Tematización para aplicaciones con styled-components

  [![CI](https://github.com/daacdev/styled-fleet/actions/workflows/main.yml/badge.svg)](https://github.com/daacdev/styled-fleet/actions/workflows/main.yml)
  ![GitHub](https://img.shields.io/github/license/daacdev/styled-fleet)
  ![npm](https://img.shields.io/npm/v/styled-fleet)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

</div>

<img alt="styled-fleet" src="https://github.com/daacdev/styled-fleet/blob/ae4a1047a8b4be2f4280678b135e8ab375059ddb/example/demo/demo.gif" />

[English](./README.md) | Español

## 🎴 [Demo](https://daacdev.github.io/styled-fleet/)

## 📦 Instalación

```bash
npm install styled-fleet
```

```bash
yarn add styled-fleet
```

## 🔨 Uso

Crea un `tema`

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

Crea un `styled component` y accede al `tema` con $theme-..., o si lo prefieres, puedes usar la notación CSS con var(--theme-...)

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

Agregua el `tema` a `ThemeProvider` y usa el componente

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

Función que te permite crear un `tema`.
|Parametro|Tipo|Descripción|
|----------|----|-----------|
|theme (requerido)|[DefaultTheme](#DefaultTheme)|Objeto de contexto temático|
|options (opcional)|[ThemeOptions](#ThemeOptions)|Objeto de opciones para el procesamiento de temas|

#### `DefaultTheme`

Objeto con clave / valor personalizado que definirá las variables CSS globales, las claves `style` y `modes` están reservadas para definir estilos globales y modos de `tema` respectivamente, por ejemplo.

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

Objeto con las siguientes claves

|Clave|Tipo|Descripción|Valor por defecto|Ejemplo|
|---|----|-----------|-------|-------|
|prefix (opcional)|string|Prefijo para usar en variables css|'theme'|$theme-colors-red|
|useLocalStorage (opcional)|boolean|Habilite o deshabilite el almacenamiento local para almacenar el modo de tema establecido|true|useLocalStorage: true|
|defaultMode (opcional)|string|Establecer el modo de tema predeterminado|'default'|defaultMode: 'light'|
|scope (opcional)|string o styled-component|Le permite establecer el alcance de las variables CSS globales|':root'|scope: 'body'<br />scope: Sider|
|functions (opcional)|Function[]|Una matriz de funciones personalizadas a las que se puede acceder mediante @\<nombre de la función>(... argumentos). Esto le permite extender y agregar características a sus estilos CSS.|[]|functions: [cssVar, ...]

`Nota:`

* Todas las funciones personalizadas se procesarán con parámetros de cadena, por lo que la función deberá garantizar la conversión del tipo de datos y el manejo de errores en caso de que haya algún parámetro incorrecto.
* Puede utilizar funciones de paquetes externos como polished u otros.
* Las funciones deben devolver un valor correcto para los estilos CSS, puede ser una cadena o un número.
* A veces tienes que ponerle un nombre a la función para que `styled-fleet` pueda acceder a ella, ejemplo.

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

//  Para usarlo en un componente
const MyComponent = styled.div`
  padding: $my-prefix-space-2;
  background-color: @rgba(#000, 0.5);
  color: @darken(0.2, #fff);
  border: 1px solid @lighten(.2, #000);
`;
```

### `ThemeProvider`

Componente de proveedor que proporciona un tema para todos los componentes de React en sí mismo.

|Props|Descripción|Valor|
|-----|-----------|-----|
|theme (requerido)|prop necesario para la tematización global de aplicaciones|Objeto retornado por createTheme|

`Example:`

```jsx
import * as React from 'react';
import {createTheme, ThemeProvider} from 'styled-fleet';

const theme = createTheme({...}, {...});

const App = () => {with
  return (
    <ThemeProvider theme={theme}>
      ...
    </ThemeProvider>
  )
};
```

### `useMode`

Hook que permite acceder o configurar el theme mode actual en el contexto de `ThemeProvider`.

* No recibe parámetros de entrada.
* Devuelve un par de valores que se pueden desestructurar en
  * `mode`, cadena que contiene el tema del modo actual.
  * `setMode`, función que permite configurar el modo de tema, recibe como único parámetro una cadena que representa el tema a utilizar.

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

## ⚠️ Limitaciones

* Actualmente no es posible acceder al valor de las variables css en el primer render de la aplicación, por lo que funciones como cssVar de polished que permite obtener variables css globales, fallarán si no se especifica un valor predeterminado. Este comportamiento también ocurre con styled-components cuando se configuran las variables css en la raíz y se intenta obtener su valor.
* Al usar funciones para calcular un valor de una propiedad css, es posible que si está usando variables css y cambia el modo de tema no obtendrá el resultado esperado, esto se debe a que en el primer render al procesar los estilos css, la variable css ha sido cambiado al nuevo valor calculado por la función, a menos que la función devuelva otra variable css como resultado dependiendo del modo de tema

## Licencia

Licenciado bajo la licencia MIT.

Ver [Licencia](./LICENSE) para mayor información.
