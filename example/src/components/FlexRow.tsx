import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: calc($theme-space-1 / 7);
  flex-wrap: wrap;
  align-items: center;
`;

FlexRow.displayName = 'FlexRow';