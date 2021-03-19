import styled from 'styled-components';

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: $theme-space-1;
  overflow: hidden;

  @media (min-width: 992px) {
    width: $theme-sizes-middle;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    width: $theme-sizes-large;
  }

  @media (max-width: 576px) {
    width: auto;
    height: inherit;
  }
  
  background-color: $theme-frame-background;
  border: $theme-borders-1 solid $theme-frame-border;
  padding: $theme-space-6;
  box-shadow: $theme-shadows-default;
  transition: background-color .5s, border .5s;
`;

Frame.displayName = 'Frame';