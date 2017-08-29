import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.scss';
import MyApp from './App';
import registerServiceWorker from './registerServiceWorker';
// import '../node_modules/grommet-css'



ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
