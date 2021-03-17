import 'styled-components';

interface Colors {
  [key: string]: string | Colors
}

declare module 'styled-components' {
  // Theme Interface
  export interface DefaultTheme {
    colors?: Colors
  }
}