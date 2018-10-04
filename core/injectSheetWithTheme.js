/**
 * this is different ```withTheme``` by react-jss
 */
import React from 'react';
import injectSheet, { ThemeProvider } from 'react-jss';

const injectSheetWithTheme = (styles, App) => {
  const theme = {
    palette: {
      primary: {
        light: '#fef35d',
        main: '#fef035', // FEF035
        dark: '#e5d900', // E5D900
        contrastText: '#35495a',
      },
      secondary: {
        light: '#5d6d7b',
        main: '#35495A', // #364959
        dark: '#373A3C',
        contrastText: '#fff',
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
