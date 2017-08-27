import { requireAuth, isAuthenticated } from './routeUtils';
import lsUtils from '../support/localStorageUtils';
import Panel from '../containers/Panel';
import { login } from  '../actions/actions';
import store from '../store/store';

const mainScreenRoute = {
  onEnter: (nextState, replace, callback) => {
    let user = null;
    if (isAuthenticated()) {
      user = lsUtils.getActiveUser();
      // check if the user is in the store already
      // insert it, if is not
      if (!store.getState().app.activeAccount) {
        store.dispatch(login(user, false));
      }
    } else {
      replace('/');
    }
    callback();
  },
  component: Panel,
  path: 'app',
  childRoutes: [{
    path: 'main',
    getComponent: (location, cb) => {
      require.ensure([], (require) => {
        const MainScreen = require('../containers/MainScreen').default;

        cb(null, MainScreen);
      }, 'MainScreen');
    }
  },
  {
    path: 'investimentos',
    getComponent: (location, cb) => {
      require.ensure([], (require) => {
        const Fundos = require('../containers/Fundos').default;

        cb(null, Fundos);
      }, 'Fundos');
    }
  }
]
};

export default mainScreenRoute;
