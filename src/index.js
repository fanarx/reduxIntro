import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './custom/redux';
import { rootReducer } from './reducers';
import { store } from './store';
import TodoApp from './components/TodoApp';


const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos} />,
    document.getElementById('root')
  )
};


store.subscribe(render);
render();
