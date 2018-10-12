import React from 'react';
import {
  createMuiTheme,
  createGenerateClassName,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import lime from '@material-ui/core/colors/lime';
import cyan from '@material-ui/core/colors/cyan';

import attachRawCss from '../../../../utils/attachRawCss';
import styles from '!!raw-loader!../../../../utils/normalize.css'; // eslint-disable-line

const theme = createMuiTheme({
  palette: {
    primary: lime,
    secondary: cyan,
  },
  // palette: {
  //   primary: {
  //     light: '#fef35d',
  //     main: '#fef035',
  //     dark: '#e5d900',
  //     contrastText: '#35495a',
  //   },
  //   secondary: {
  //     light: '#5d6d7b',
  //     main: '#35495A',
  //     dark: '#373A3C',
  //     contrastText: '#fef035',
  //   },
  // },
});

const withTheme = (WrappedComponent) => {
  const Layout = props => (
    <JssProvider generateClassName={createGenerateClassName()}>
      <MuiThemeProvider
        theme={theme}
        sheetsManager={new Map()}
      >
        <CssBaseline />
        <WrappedComponent {...props}/>
      </MuiThemeProvider>
    </JssProvider>
  );
  return attachRawCss(styles, 'normalize', Layout);
};

export default withTheme;
