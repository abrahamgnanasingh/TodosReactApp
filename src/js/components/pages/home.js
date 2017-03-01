import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Rx from 'rxjs/Rx';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { fetchUser, cancelFetchUser } from '../../actions/users';

class Home extends Component {

	constructor(props) {
		super(props);

		this.handleUpdateInput = this.handleUpdateInput.bind(this);
	}

	componentDidMount() {
		var cancelBtn = ReactDOM.findDOMNode(this.refs.cancelBtn).firstChild;
		Rx.Observable.fromEvent(cancelBtn, 'click')
			.subscribe(ev => {
				console.log(ev);
				this.props.cancelFetchUser();
			});
	}

	handleUpdateInput(searchText) {
		this.props.fetchUser('redux-observable');
	}

	handleNewRequest(selected) {
		console.log(selected);
	}

	render() {
		const dataSourceConfig = {
			text: 'name',
			value: 'id'
		};

		return (
			<div>
				<AutoComplete
					floatingLabelText="Type Something"
					dataSource={this.props.users}
					dataSourceConfig={dataSourceConfig}
					onUpdateInput={this.handleUpdateInput}
					onNewRequest={this.handleNewRequest}
				/>
				<RaisedButton ref="cancelBtn" label="Cancel!" />
			</div>
		)
	}

}

function mapStateToProps(state) {
	return {
		users: state.users
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchUser,
		cancelFetchUser
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);