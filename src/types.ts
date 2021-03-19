import {
  IntrinsicElementsKeys,
  DefaultTheme as StyledDefaultTheme,
  GlobalStyleComponent,
  CSSObject,
  StylisPlugin,
} from 'styled-components';

export interface ThemeModes {
  [key: string]: string | number | ThemeModes;
}

export interface ThemeStyles {
  styles?: {
    [key in IntrinsicElementsKeys]?: CSSObject;
  };
}

export interface DefaultTheme extends StyledDefaultTheme, ThemeStyles {
  prefix?: string;
  modes?: ThemeModes;
}

export interface Theme {
  (theme: DefaultTheme, ...functions: Function[]): {
    properties: DefaultTheme;
    plugin: StylisPlugin;
    GlobalStyle: GlobalStyleComponent<{ mode?: string }, DefaultTheme>;
  };
}

export interface ThemeProviderProps {
  theme: ReturnType<Theme>;
  defaultMode?: string;
}

export interface ThemeModeContext {
  mode: string;
  setMode: (mode: string) => void;
}

export interface ThemeProperties {
  (
    theme: DefaultTheme | string | number,
    parentKey?: string,
    prefix?: string
  ): DefaultTheme;
}

export interface ThemeFlatProperties {
  (properties: DefaultTheme): string;
}
