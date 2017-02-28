import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

require('../scss/style.scss');

import App from './app';

import allReducers from './reducers';

import fetchUserEpic from './epics/fetch-user-epic';

const rootEpic = combineEpics(fetchUserEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(allReducers, applyMiddleware());

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);