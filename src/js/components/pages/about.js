import React, { Component } from 'react';
import moment from 'moment';

import CommonServices from '../../services/common';

class About extends Component {

	constructor(props) {
		super(props);

		this.state = {
			dateTime: 'Waiting for date and time...'
		};
	}

	componentDidMount() {
		if(window.navigator.onLine) {
			CommonServices.getDateTime().then(response => this.setState({ dateTime: this.formatDateTime(response.data) }));
		} else {
			this.setState({ dateTime: 'No internet connection' });
		}
	}

	formatDateTime(input) {
		return `${moment(input.date, 'MM-DD-YYYY').format('DD MMM YYYY')}  ${input.time}`;
	}

	render() {
		const { dateTime } = this.state;

		return (
			<div>
				{dateTime}
			</div>
		);
	}

}

export default About;