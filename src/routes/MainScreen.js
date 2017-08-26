import { requireAuth } from './routeUtils';

const mainScreenRoute = {
  onEnter: requireAuth,
  path: 'main',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {
      const MainScreen = require('../containers/MainScreen').default;

      cb(null, MainScreen);
    }, 'MainScreen');
  }
};

export default mainScreenRoute;
