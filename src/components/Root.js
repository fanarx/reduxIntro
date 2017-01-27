import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';
import { BrowserRouter, Match } from 'react-router';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Match pattern="/:filter?" component={TodoApp} />
    </BrowserRouter>
  </Provider>
);

export default Root;