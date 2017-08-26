import React, { Component } from 'react';
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
