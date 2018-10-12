import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lime from '@material-ui/core/colors/lime';
import cyan from '@material-ui/core/colors/cyan';

const theme = createMuiTheme({
  palette: {
    primary: lime,
    secondary: cyan,
  },
});

const withTheme = (WrappedComponent) => {
  const Layout = props => (
    <MuiThemeProvider theme={theme}>
      <WrappedComponent {...props}/>
    </MuiThemeProvider>
  );
  return Layout;
};

export default withTheme;
