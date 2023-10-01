// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import the Provider component
import store from './Store/store'; // Import your Redux store
import App from './App'; // Your root component

ReactDOM.render(
  <Provider store={store}> {/* Wrap your entire app with <Provider> */}
    <App />
  </Provider>,
  document.getElementById('root')
);
