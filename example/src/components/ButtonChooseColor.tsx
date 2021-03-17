import styled from 'styled-components';
import { Button } from './Button';

export const ButtonChooseColor = styled(Button)<{ color: string }>`
  padding: 1rem;
  height: 32px;
  width: 32px;
  background-color: ${({ color }) => color};
`;

ButtonChooseColor.displayName = 'ButtonChooseColor';