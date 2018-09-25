import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: cyan,
  },
});

const withTheme = (WrappedComponent) => {
  const Layout = () => (
    <MuiThemeProvider theme={theme}>
      <WrappedComponent />
    </MuiThemeProvider>
  );
  return Layout;
};

export default withTheme;
