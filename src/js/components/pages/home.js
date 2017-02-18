import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rxjs/Rx';
import { Glyphicon } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {

	componentDidMount() {
		var clickMeBtn = ReactDOM.findDOMNode(this.refs.clickMe).firstChild;
		Rx.Observable.fromEvent(clickMeBtn, 'click')
			.subscribe(ev => console.log(ev));
	}

	render() {
		return (
			<div>
				<TextField
					hintText="Hey You"
					floatingLabelText="Type Something"
				/>
				<RaisedButton ref="clickMe" label="Click Me!" />
				<Glyphicon glyph="user" />
			</div>
		)
	}

}

export default Home;