import React, { Component } from 'react';
import FilteredTodoList from './FilteredTodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';


const TodoApp = () => 
        <div>
            <AddTodo />
            <FilteredTodoList />
            <Footer />
        </div>;

export default TodoApp;