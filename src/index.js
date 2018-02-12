import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './pages/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Index />, document.querySelector('#root'));

registerServiceWorker();
