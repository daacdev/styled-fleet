import * as React from 'react';
import styled from 'styled-components';
import { useMode } from '../../../.'

import { Button } from './Button';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

const IconButton = styled(Button)`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: 0;
  color: $theme-color;
  align-items: center;
  display: flex;
  gap: 10px;
  outline: none;
`;

export const ButtonThemeMode = () => {
  const { mode, setMode } = useMode();

  return (
    <IconButton onClick = {() => setMode(mode === 'light' ? 'dark' : 'light') } >
      { mode === 'light'
        ? ( <MoonIcon /> )
        : ( <SunIcon /> ) }
      <h4> Switch to { mode === 'light' ? 'dark' : 'light' } mode </h4>
    </IconButton>
  );
};