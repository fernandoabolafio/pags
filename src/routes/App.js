import { requireAuth, isAuthenticated } from './routeUtils';
import lsUtils from '../support/localStorageUtils';
import Panel from '../containers/Panel';
import { login } from  '../actions/actions';
import store from '../store/store';


const MainScreenRoute = {
  path: 'main',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {
      const MainScreen = require('../containers/MainScreen').default;

      cb(null, MainScreen);
    }, 'MainScreen');
  }
};

const MeuInvestimentoRoute = {
  path: 'meusinvestimentos/:investimentoId', 
  getComponent: (location, cb) => {
    require.ensure([], (require) => {
      const MeuInvestimento = require('../containers/MeuInvestimento').default;

      cb(null, MeuInvestimento);
    }, 'MeuInvestimento');
  },
}


const InvestimentoDetalhesRoute = {
  path: 'investimentos/:investimentoId',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {
      const FundoDetalhes = require('../containers/FundoDetalhes').default;

      cb(null, FundoDetalhes);
    }, 'FundoDetalhes');
  },
}

const InvestimentosRoute = {
  path: 'investimentos',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {
      const Fundos = require('../containers/Fundos').default;

      cb(null, Fundos);
    }, 'Fundos');
  }
};

const InventarioRoute = {
  path: 'inventario',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {
      const Inventario = require('../containers/Inventario').default;

      cb(null, Inventario);
    }, 'Inventario');
  }
};

const AppRoute = {
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
  childRoutes: [
    MainScreenRoute,
    InvestimentosRoute,
    InvestimentoDetalhesRoute,
    InventarioRoute,
    MeuInvestimentoRoute
  ]
};

export default AppRoute;
