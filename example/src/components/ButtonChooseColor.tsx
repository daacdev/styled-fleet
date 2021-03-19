import styled from 'styled-components';
import { Button } from './Button';

export const ButtonChooseColor = styled(Button)<{ color: string }>`
  padding: $theme-space-2;
  height: $theme-sizes-variant-0;
  width: $theme-sizes-variant-0;
  background-color: ${({ color }) => color};
`;

ButtonChooseColor.displayName = 'ButtonChooseColor';