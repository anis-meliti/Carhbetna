import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import App from './App';
import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';
import './assets/css/paper-kit.min.css';
import './assets/css/paper-kit.css.map';
import store from './js/store/index';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
