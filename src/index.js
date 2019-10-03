import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';
import './assets/css/paper-kit.min.css';
import './assets/css/paper-kit.css.map';
// import './assets/demo/demo.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
