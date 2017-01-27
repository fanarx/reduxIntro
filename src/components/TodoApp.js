import React from 'react';
import FilteredTodoList from './FilteredTodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';


const TodoApp = ({ params }) => 
        <div>
            <AddTodo />
            <FilteredTodoList filter={ params.filter || 'all' } />
            <Footer />
        </div>;

export default TodoApp;