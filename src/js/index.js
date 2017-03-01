import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500, cyan700, pinkA200, grey100, grey300, grey400, grey500, white, darkBlack, fullBlack } from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import injectTapEventPlugin from 'react-tap-event-plugin';

require('../scss/style.scss');

import App from './app';

import allReducers from './reducers';

import { fetchUserEpic } from './epics/fetch-user-epic';

const rootEpic = combineEpics(fetchUserEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(allReducers, applyMiddleware(epicMiddleware));

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: cyan500, //darkBlack
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);