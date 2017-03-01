import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todoStore from './todos-reducer';
import { users } from './users-reducer';

const allReducers = combineReducers({
    todos: todoStore,
    users: users,
    form: formReducer
});

export default allReducers;