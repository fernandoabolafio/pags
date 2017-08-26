import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/grommet-css'
import '../node_modules/grommet/scss/vanilla/index.scss';

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
