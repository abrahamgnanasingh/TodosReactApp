import React, { Component } from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import Main from './components/pages/main';
import Login from './components/pages/login';
import Home from './components/pages/home';
import Todos from './components/pages/todos';
import About from './components/pages/about';
import NotFound from './components/pages/404';

class App extends Component {

  // handleRouteChange(previousState, nextState, replace, wrappedNext) {
  //   debugger;
  // }

  requireAuth(nextState, replace) {
    // if (!loggedIn) {
    //   replace({
    //     pathname: '/login',
    //     state: { nextPathname: nextState.location.pathname }
    //   });
    // }
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="login" component={Login} />
        <Route path="/" component={Main} onEnter={this.requireAuth}>
          <IndexRoute component={Home} />
          <Route path="todos" component={Todos} />
          <Route path="about" component={About} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    );
  }

}

export default App;