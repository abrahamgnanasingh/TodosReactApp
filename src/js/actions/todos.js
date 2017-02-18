export const addTodo = todo => {
    return {
        type: 'ADD_TODO',
        payload: todo
    };
};

export const selectTodo = todo => {
    return {
        type: 'SELECT_TODO',
        payload: todo
    };
};

export const markCompletedTodo = () => {
    return {
        type: 'MARK_COMPLETED_TODO',
        payload: ''
    };
};

export const removeSelectedTodo = () => {
    return {
        type: 'REMOVE_SELECTED_TODO',
        payload: ''
    };
};

export const removeAllTodo = () => {
    return {
        type: 'REMOVE_ALL_TODO',
        payload: ''
    };
};