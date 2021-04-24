import {
  IntrinsicElementsKeys,
  DefaultTheme as StyledDefaultTheme,
  GlobalStyleComponent,
  CSSObject,
  StylisPlugin,
  FlattenSimpleInterpolation,
} from 'styled-components';

export interface ThemeModes {
  [key: string]: string | number | ThemeModes;
}

export interface DefaultTheme extends StyledDefaultTheme {
  modes?: ThemeModes;
  styles?:
    | {
        [key in IntrinsicElementsKeys]?: CSSObject;
      }
    | FlattenSimpleInterpolation;
}

export interface ThemeOptions {
  prefix?: string;
  useLocalStorage?: boolean;
  defaultMode?: string;
  scope?: string;
  functions?: Function[];
}

export interface Theme {
  (theme: DefaultTheme, options: ThemeOptions): {
    defaultMode?: string;
    properties: DefaultTheme;
    plugin: StylisPlugin;
    GlobalStyle: GlobalStyleComponent<{ mode?: string }, DefaultTheme>;
  };
}

export interface ThemeProviderProps {
  theme: ReturnType<Theme>;
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
