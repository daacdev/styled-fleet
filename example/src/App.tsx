import * as React from 'react';
import { ThemeProvider } from '../../.';

import { themes } from './themes';
import { colors } from './themes/colors';
import {
  Button,
  Container,
  Frame,
  FlexRow,
  FlexColumn,
  Paragraph,
  ButtonChooseColor,
  ButtonThemeMode
} from './components';

export const App = () => {
  const [theme, setTheme] = React.useState<string>('gray');

  const ButtonsColor = React.useMemo(
    () => Object.entries(colors).map(
      ([color, value], index) => (
        <ButtonChooseColor
          key = { index }
          onClick = { () => setTheme(color) }
          color = { value[8] }
        />
      )
    ), []
  );

  return (
    <ThemeProvider theme = { themes[theme] } >
      <Container>
        <Frame>
          <div>
            <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/daacdev/styled-fleet?style=flat-square"></img>
            <img alt="NPM" src="https://img.shields.io/npm/l/styled-fleet?style=flat-square"></img>
            <img alt="npm" src="https://img.shields.io/npm/v/styled-fleet?style=flat-square"></img>
          </div>
          <h1> styled-fleet </h1>
          <FlexColumn>
            <h4> Choose theme: </h4>
            <FlexRow>
              { ButtonsColor }
            </FlexRow>
          </FlexColumn>
          <ButtonThemeMode />
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
          <FlexRow>
            <Button variant = 'primary' > Primary Button </Button>
            <Button variant = 'secondary' > Secondary Button </Button>
          </FlexRow>
        </Frame>
      </Container>
    </ThemeProvider>
  );
};