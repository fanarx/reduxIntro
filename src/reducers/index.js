//import { createStore, combineReducers } from 'redux';
import { createStore, combineReducers } from '../custom/redux';

// export const rootReducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

const todoReducer = (state = 5, action) => {
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

const visibilityFilterReducer = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

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

let todos = todosReducer;
let visibilityFilter = visibilityFilterReducer;

/******************Combine Reducers*******************
const rootAppReducer = (state = {}, action) => {
    return {
        todos: todosReducer(state.todos, action),
        visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action)
    };
}
*/

const rootAppReducer = combineReducers({
    todos,
    visibilityFilter
});

export default rootAppReducer;


// let arr = [{ id: 1, completed: false }, { id: 2, completed: true }, { id: 3, completed: false }];

// let addedTodo = rootReducer(arr, { type: 'ADD_TODO', id: 4, text: 'justAdded' });
// console.log('addedTodo', addedTodo);
// let toggledTodo = todosReducer(addedTodo, { type: 'TOGGLE_TODO', id: 4 });
// console.log('toggledTodo', toggledTodo);

// const store = createStore(rootAppReducer);

// console.log('Init state:', store.getState());
// console.log('Dispatching ADD_TODO: id: 0');
// store.dispatch({
//     type: 'ADD_TODO',
//     id: 0,
//     text: 'Learn Redux'
// });
// console.log('Current state:', store.getState());
// console.log('Dispatching ADD_TODO id: 1');
// store.dispatch({
//     type: 'ADD_TODO',
//     id: 1,
//     text: 'Learn Functional Programming'
// });
// console.log('Current state:', store.getState());

// console.log('Dispatching TOGGLE_TODO id: 0');
// store.dispatch({
//     type: 'TOGGLE_TODO',
//     id: 0
// });
// console.log('Current state:', store.getState());

// console.log('Dispatching SET_VISIBILITY_FILTER: SHOW_COMPLETED');
// store.dispatch({
//     type: 'SET_VISIBILITY_FILTER',
//     filter: 'SHOW_COMPLETED'
// });
// console.log('Current state:', store.getState());



