import React from 'react';
import { store } from '../store';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';



let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <input ref={node => input = node} />
            <button onClick={() => {
                dispatch(addTodo(input.value));
                input.value = '';
            }}>Add Todo</button>
        </div>
    );  
};

//AddTodo = connect(state => ({}), dispatch => ({ dispatch }))(AddTodo);
//AddTodo = connect(null, null)(AddTodo);
AddTodo = connect()(AddTodo);

// const AddTodo = (props, {store}) => {
//     let input;
//     return (
//         <div>
//             <input ref={node => input = node} />
//             <button onClick={() => {
//                 store.dispatch({
//                         type: 'ADD_TODO',
//                         id: nextTodoId++,
//                         text: input.value
//                 });
//                 input.value = '';
//             }}>Add Todo</button>
//         </div>
//     );  
// } 

// AddTodo.contextTypes = {
//     store: React.PropTypes.object
// };

export default AddTodo;