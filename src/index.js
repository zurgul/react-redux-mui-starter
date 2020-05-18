import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import primary from '@material-ui/core/colors/lightGreen';
import secondary from '@material-ui/core/colors/orange';

import configureStore from './store/configure';
import Root from './components/Root';

const theme = responsiveFontSizes(createMuiTheme(
  {
    palette: {
      primary,
      secondary,
    },
    status: {
      danger: 'orange',
    },
  },
));

const store = configureStore();

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Root store={store} />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
