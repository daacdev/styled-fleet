import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: $theme-space-1;
  width: $theme-sizes-full;
  height: $theme-sizes-screen-height;
`;

Container.displayName = 'Container';