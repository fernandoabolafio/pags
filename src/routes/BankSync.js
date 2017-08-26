

const BankSyncRoute = {
  path: 'banksync',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {
      const BankSync = require('../containers/BankSync').default;

      cb(null, BankSync);
    }, 'BancSync');
  }
};

export default BankSyncRoute;
