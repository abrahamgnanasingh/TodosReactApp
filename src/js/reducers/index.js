import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todoStore from './todos-reducer';
import { users, isFetchingUser } from './users-reducer';

const allReducers = combineReducers({
    todos: todoStore,
    user: users,
    isFetchingUser: isFetchingUser,
    form: formReducer     // <---- Mounted at 'form'
});

export default allReducers;