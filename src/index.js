import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 API
import { Provider } from 'react-redux';
import store from './store.js';
import './index.css';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
