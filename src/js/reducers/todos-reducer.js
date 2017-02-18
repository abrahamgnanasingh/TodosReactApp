
/* make sure each and everytime you return a new object in reducers */

export default function todoStore(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'SELECT_TODO':
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return Object.assign({}, todo, { selected: action.payload.selected });
                }
                return todo;
            });
        case 'MARK_COMPLETED_TODO':
            return state.map(todo => {
                if (todo.selected) {
                    return Object.assign({}, todo, { completed: true });
                }
                return todo;
            });
        case 'REMOVE_SELECTED_TODO':
            return state.filter(todo => {
                return !todo.selected;
            });
        case 'REMOVE_ALL_TODO':
            return state.filter(todo => {
                return false;
            });
        default:
            return state;
    }
}