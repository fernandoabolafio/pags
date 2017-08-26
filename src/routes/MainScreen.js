import { checkSession } from './routeUtils';

const mainScreenRoute = {
  onEnter: checkSession,
  path: 'main',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {
      const MainScreen = require('../containers/MainScreen').default;

      cb(null, MainScreen);
    }, 'MainScreen');
  }
};

export default mainScreenRoute;
