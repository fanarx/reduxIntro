//import { createStore, combineReducers } from 'redux';
import { combineReducers } from '../custom/redux';
import todos, * as fromTodos from './todoReducer';


const visibilityFilterReducer = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

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

export const getVisibleTodos = (state, filter) => fromTodos.getVisibleTodos(state.todos, filter);


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



