import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {

	render() {
		return (
			<div>
				<RaisedButton label="Click Me!" />
				<Glyphicon glyph="user" />
			</div>
		)
	}

}

export default Home;