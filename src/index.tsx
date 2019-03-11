import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { CssBaseline } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import registerServiceWorker from './registerServiceWorker';
import App from './routes/App';

const theme = createMuiTheme({
  palette: {
    error: {
      main: red[700]
    },
    primary: {
      main: blue[500]
    },
    secondary: {
      main: blue[50]
    }
  },
  typography: {
    useNextVariants: true
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
