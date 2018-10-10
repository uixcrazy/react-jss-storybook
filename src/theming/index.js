import React, { Fragment } from 'react';
import merge from 'lodash.merge';
import { ThemeProvider } from 'react-jss';
import { DefaultTheme } from '../_utils/default-theme';
import Button from './Button';
import ThemeDefaultInspector from './ThemeDefaultInspector';

const theme = merge(
  DefaultTheme,
  {
    palette: {
      primary: {
        light: '#fef35d',
        main: '#fef035',
        dark: '#e5d900',
        contrastText: '#35495a',
      },
      secondary: {
        light: '#5d6d7b',
        main: '#35495A',
        dark: '#373A3C',
        contrastText: '#fff',
      },
    },
  }
);

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Button />
      <ThemeDefaultInspector />
    </Fragment>
  </ThemeProvider>
);

export default App;
