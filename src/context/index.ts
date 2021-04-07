import * as React from 'react';
import { ThemeModeContext } from '../types';

/**
 * @description Context to manage the state of theme modes
 */
export const ModeContext = React.createContext<ThemeModeContext>(undefined!);
/**
 * @description Hook that allows you to change and get the theme mode
 * @see URL
 * @returns Context for ModeContext
 */
export const useMode = () => React.useContext(ModeContext);

ModeContext.displayName = 'ModeContext';
