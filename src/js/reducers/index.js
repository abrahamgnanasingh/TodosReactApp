import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todoStore from './todos-reducer';

const allReducers = combineReducers({
    todos: todoStore,
    form: formReducer     // <---- Mounted at 'form'
});

export default allReducers;