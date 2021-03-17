import styled, { css } from 'styled-components';

export const Button = styled.button<{variant?: string}>`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  :focus {
    outline: 1px solid $theme-text;
    outline-offset: -4px;
    outline-style: dashed;
  }
  :disabled {
    opacity: .4;
    pointer-events: none;
  }
  ${({ variant }) => variant && css`
    color: $theme-${variant}-text;
    background-color: $theme-${variant}-background;
    :hover {
      background-color: $theme-${variant}-hovered;
    }
    :active {
      transform: scale(0.99);
    }
  `}
`;

Button.displayName = 'Button';