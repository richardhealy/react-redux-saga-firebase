import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import store from './stores';

import ConnectedApp from './components/App/ConnectedApp';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
  	  <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
