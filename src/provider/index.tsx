import * as React from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  StyleSheetManager,
} from 'styled-components/macro';

import { ThemeProviderProps } from '../types';
import { ModeContext } from '../context';

/**
 * @description Component to manage application themes
 * @see URL
 * @property theme: Object created by createTheme
 * @property defaultMode: optional prop to set a default theme mode
 * @returns {React.FC}
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}): JSX.Element => {
  const { defaultMode, properties, plugin, GlobalStyle } = theme;
  const [mode, setMode] = React.useState<string>(defaultMode || '');

  return (
    <StyledThemeProvider theme={properties}>
      <StyleSheetManager stylisPlugins={[plugin]}>
        <ModeContext.Provider value={{ mode, setMode }}>
          <GlobalStyle mode={mode} />
          {children}
        </ModeContext.Provider>
      </StyleSheetManager>
    </StyledThemeProvider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';
