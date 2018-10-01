/**
 * this is different ```withTheme``` by react-jss
 */
import React from 'react';
import injectSheet, { ThemeProvider } from 'react-jss';

const injectSheetWithTheme = (styles, App) => {
  const theme = {
    palette: { // it's wrong!!!
      primary: {
        light: '#fff352',
        main: '#fef035',
        dark: '#e5d900',
      },
      secondary: {
        light: '#014c8c',
        main: '#014c8c',
        dark: '#014c8c',
      },
    },
  };
  const StyledApp = injectSheet(styles)(App);
  const Layout = props => (
    <ThemeProvider theme={theme}>
      <StyledApp {...props}/>
    </ThemeProvider>
  );
  return Layout;
};
export default injectSheetWithTheme;
