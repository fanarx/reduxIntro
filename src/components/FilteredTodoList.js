import React from 'react';
import { Component } from 'react';
import { store } from '../store';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(
                t => t.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
    }
}

class FilteredTodoList extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const { store } = this.context;
        const state = store.getState();

        return (
            <TodoList
                    todos={getVisibleTodos(state.todos, state.visibilityFilter)}
                    onTodoClick={ id =>
                            store.dispatch({
                                type: 'TOGGLE_TODO',
                                id
                            })
                    }
            />
        );
    }
} 

FilteredTodoList.contextTypes = {
    store: React.PropTypes.object
};

export default FilteredTodoList;