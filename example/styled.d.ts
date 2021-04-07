import 'styled-components';

interface Colors {
  [key: string]: string | Colors
}

interface Shadows {
  [key: string]: string | Shadows
}

interface Space {
  [key: string]: string | number | Space | Array<string | number>
}

declare module 'styled-components' {
  // Theme Interface
  export interface DefaultTheme {
    colors?: Colors,
    space?: Space | Array<string | number>,
    font?: Space | Array<string | number>,
    shadows?: Shadows,
    sizes?: Space | Array<string | number>,
    borders?: Space | Array<string | number>,
    breakpoint?: Space | Array<string | number>,
  }
}