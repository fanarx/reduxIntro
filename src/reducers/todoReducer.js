const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                    return state;
                }
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state;
    }
}

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todoReducer(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => todoReducer(todo, action));
        default: 
            return state;
    }
};

export default todosReducer;

export const getVisibleTodos = (state, filter) => {
    switch (filter) {
        case 'all':
            return state;
        case 'completed':
            return state.filter(
                t => t.completed
            );
        case 'active':
            return state.filter(
                t => !t.completed
            );
        default:
    }
}







