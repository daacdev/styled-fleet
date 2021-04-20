import * as React from 'react';
import styled from 'styled-components';
import { useMode } from '../../../.'

import { Button } from './Button';
import { MoonStarsFill } from 'fleet-icons/icon/MoonStarsFill';
import { SunFill } from 'fleet-icons/icon/SunFill';

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
  const { mode, setMode } = useMode();

  return (
    <IconButton onClick = {() => setMode(mode === 'light' ? 'dark' : 'light') } >
      { mode === 'light'
        ? ( <MoonStarsFill size='32px' /> )
        : ( <SunFill size='32px' /> ) }
      <h4> Switch to { mode === 'light' ? 'dark' : 'light' } mode </h4>
    </IconButton>
  );
};