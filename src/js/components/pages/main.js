import React, { Component } from 'react';
// import Rx from 'rxjs/Rx';

import Navigation from '../navigation';

class Main extends Component {

  // constructor(props) {
  //   super(props);

  //   Rx.Observable.of(1, 2, 3)
  //     .map(v => '0' + v)
  //     .subscribe(v => console.log(v));
  // }

  render() {
    return (
      <div className="">
        <Navigation />
        <div className="nav-container">
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default Main;