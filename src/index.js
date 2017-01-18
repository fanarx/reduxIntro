import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './custom/redux';
import Provider from './custom/redux/react-redux';
import rootReducer from './reducers';
import { store } from './store';
import TodoApp from './components/TodoApp';


// const render = () => {
  ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
      <TodoApp />
    </Provider>,
    document.getElementById('root')
  )
// };


// store.subscribe(render);
// render();
