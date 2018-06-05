import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import store from './stores';

import App from './components/App';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
  	  <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
