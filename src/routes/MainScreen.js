import { requireAuth, isAuthenticated } from './routeUtils';
import lsUtils from '../support/localStorageUtils';
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
  path: 'main',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {
      const MainScreen = require('../containers/MainScreen').default;

      cb(null, MainScreen);
    }, 'MainScreen');
  }
};

export default mainScreenRoute;
