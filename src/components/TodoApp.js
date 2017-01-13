import React, { Component } from 'react';
import FilteredTodoList from './FilteredTodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';


const TodoApp = ({store}) => 
        <div>
            <AddTodo {...{store}} />
            <FilteredTodoList {...{store}} />
            <Footer {...{store}} />
        </div>;

export default TodoApp;