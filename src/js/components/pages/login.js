import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Grid, Row, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';

// import Logo from '../../images/logo.svg';

// import ContactForm from '../../containers/contact-form';
// import FormComponent from '../../containers/form-component';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			username: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	getValidationState(field) {
		if(!this.state[field]) {
			return 'error';
		}
		return null;
	}

	handleChange(ev, field) {
		this.setState({
			[field]: ev.target.value
		});
	}

	handleSubmit(ev) {
		ev.preventDefault();
		hashHistory.push('/');
	}

	// handleFormComponentSubmit(values) {
	// 	console.log(values);
	// }

	render() {
		return (
			<div className="signin-page-container">
				<div className="app">
					<div className="app-header">
						<img src={'../../images/logo.svg'} className="app-logo" alt="react-logo" />
						<h2>Welcome to React</h2>
					</div>
				</div>

				<Grid className="signin-form-container">
					<Row>
						<Col smOffset={2} mdOffset={2} lgOffset={2} xs={12} sm={8} md={8} lg={8}>
							<Form horizontal onSubmit={this.handleSubmit}>
								<FormGroup validationState={this.getValidationState('username')}>
									<Col componentClass={ControlLabel} sm={2}>
										Username
									</Col>
									<Col sm={10}>
										<FormControl type="text" placeholder="Username" onChange={ev => this.handleChange(ev, 'username')} />
									</Col>
								</FormGroup>

								<FormGroup validationState={this.getValidationState('password')}>
									<Col componentClass={ControlLabel} sm={2}>
										Password
									</Col>
									<Col sm={10}>
										<FormControl type="password" placeholder="Password" onChange={ev => this.handleChange(ev, 'password')} />
									</Col>
								</FormGroup>

								<FormGroup>
									<Col smOffset={2} sm={10}>
										<Checkbox>Remember me</Checkbox>
									</Col>
								</FormGroup>

								<FormGroup>
									<Col smOffset={2} sm={10}>
										<Button type="submit">
											Sign in
										</Button>
									</Col>
								</FormGroup>
							</Form>
						</Col>
					</Row>
				</Grid>

				{ /* <FormComponent onSubmit={this.handleFormComponentSubmit} /> */}

				{ /* <ContactForm onSubmit={this.handleContactFormSubmit} /> */}

				{ /* <form onSubmit={this.handleSubmit}>
					<input value={this.state.firstName} onChange={this.firstNameChange} name="firstName" placeholder="Type Something..." />
					<br />
					{this.state.firstName}
					<br />
					<button type="submit">Submit</button>
				</form> */ }
			</div>
		)
	}

}

export default Login;