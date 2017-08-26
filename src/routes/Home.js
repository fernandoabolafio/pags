import { checkSession } from './routeUtils';

const homeRoute = {
  getComponent: (location, cb) => {
    require.ensure([], (require) => {
      const Home = require('../containers/Home').default;

      cb(null, Home);
    }, 'Home');
  }
};

export default homeRoute;
