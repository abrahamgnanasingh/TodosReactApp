import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row, Form, FormGroup, Col, FormControl, Checkbox, ButtonToolbar, Button } from 'react-bootstrap';
import { map, filter } from 'lodash';
import moment from 'moment';

import Spinner from '../spinner';
import { addTodo, selectTodo, markCompletedTodo, removeSelectedTodo, removeAllTodo } from '../../actions/todos';

class Todos extends Component {

	constructor(props) {
		super(props);

		this.loading = false;
		this.handleAddTodo = this.handleAddTodo.bind(this);
		this.handleTodoSelect = this.handleTodoSelect.bind(this);
		this.handleTodoMarkCompleted = this.handleTodoMarkCompleted.bind(this);
		this.handleRemoveSelectedTodo = this.handleRemoveSelectedTodo.bind(this);
		this.handleRemoveAllTodo = this.handleRemoveAllTodo.bind(this);
	}

	handleAddTodo(ev) {
		ev.preventDefault();
		var todoItem = this.todoItem;
		if (!todoItem.value) return;
		this.props.addTodo({ id: moment().format('x'), name: todoItem.value });
	}

	handleTodoSelect(ev, todo) {
		var selected = ev.target.checked;
		this.props.selectTodo({ ...todo, selected });
	}

	handleTodoMarkCompleted() {
		this.props.markCompletedTodo();
	}

	handleRemoveSelectedTodo() {
		this.props.removeSelectedTodo();
	}

	handleRemoveAllTodo() {
		this.props.removeAllTodo();
	}

	renderTodosList() {
		const { todos } = this.props;
		if (this.loading) {
			return (
				<Spinner />
			);
		} else {
			if(todos.length === 0) {
				return (
					<div className="no-items">
						No items found.
					</div>
				);
			}
			return (
				<ul className="todos-list">
					{
						map(todos, (todo, index) => {
							return (
								<li key={todo.id}>
									<Checkbox inline style={{textDecoration: (todo.completed ? 'line-through' : 'none' )}} defaultChecked={todo.selected} onChange={ev => this.handleTodoSelect(ev, todo)}>{todo.name}</Checkbox>
								</li>
							);
						})
					}
				</ul>
			);
		}
	}

	render() {
		const { todos } = this.props;

		return (
			<Grid className="todos-container">
				<Row>
					<Col smOffset={2} mdOffset={2} lgOffset={2} xs={12} sm={8} md={8} lg={8}>
						<Form horizontal onSubmit={this.handleAddTodo}>
							<FormGroup>
								<Col sm={8}>
									<FormControl inputRef={ref => this.todoItem = ref} type="text" placeholder="Add items here" />
								</Col>
								<Col sm={4}>
									<Button type="submit" bsStyle="primary">
										Add
									</Button>
								</Col>
							</FormGroup>
						</Form>
					</Col>
				</Row>
				<Row>
					<Col smOffset={2} mdOffset={2} lgOffset={2} xs={12} sm={8} md={8} lg={8}>
						{this.renderTodosList()}
					</Col>
				</Row>
				<Row>
					<Col smOffset={2} mdOffset={2} lgOffset={2} xs={12} sm={8} md={8} lg={8}>
						<ButtonToolbar>
							<Button bsStyle="success" onClick={this.handleTodoMarkCompleted} disabled={todos.length === 0 || (filter(todos, todo => todo.selected && !todo.completed).length === 0)}>
								Mark Completed
							</Button>
							<Button bsStyle="danger" onClick={this.handleRemoveSelectedTodo} disabled={todos.length === 0 || (filter(todos, todo => todo.selected).length === 0)}>
								Remove Selected
							</Button>
							<Button bsStyle="danger" onClick={this.handleRemoveAllTodo} disabled={todos.length === 0}>
								Remove All
							</Button>
						</ButtonToolbar>
					</Col>
				</Row>
			</Grid>
		)
	}

}

function mapStateToProps(state) {
	return {
		todos: state.todos
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		addTodo, //this is equal to {addTodo: addTodo}
		selectTodo,
		markCompletedTodo,
		removeSelectedTodo, 
		removeAllTodo 
	}, dispatch);
}

Todos = connect(mapStateToProps, mapDispatchToProps)(Todos);

export default Todos;