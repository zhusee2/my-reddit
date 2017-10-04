import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const mockedStore = createStore(state => state);

  ReactDOM.render(
    <Provider store={mockedStore}>
      <App />
    </Provider>,
  div);
});
