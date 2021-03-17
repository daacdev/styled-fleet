import styled from 'styled-components';

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  height: 50%;
  background-color: $theme-frame-background;
  border: 1px solid $theme-frame-border;
  padding: 50px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: background-color .5s, border .5s;
`;

Frame.displayName = 'Frame';