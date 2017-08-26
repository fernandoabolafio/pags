import React, { Component } from 'react';
import logo from './logo.svg';
import App from 'grommet/components/App'
import Button from 'grommet/components/Button';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import appHistory from './routes/history';
import createRoutes from './routes';
import Store from './store/store';

const routes = createRoutes(Store);
const history = syncHistoryWithStore(appHistory, Store)

class MyApp extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router routes={routes} history={history} />
      </Provider>
    );
  }
}

export default MyApp;
