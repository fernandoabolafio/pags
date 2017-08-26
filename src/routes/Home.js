import { checkSession } from './routeUtils';

const homeRoute = {
  onEnter: checkSession,
  getComponent: (location, cb) => {
    require.ensure([], (require) => {
      const Home = require('../containers/Home').default;

      cb(null, Home);
    }, 'Home');
  }
};

export default homeRoute;
