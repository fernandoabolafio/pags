import utils from '../support/localStorageUtils';

export function checkSession(nextState, replace, callback) {
  if (utils.get('activeUser')) {
    replace('/main');
  }
  callback();
}

export function requireAuth(nextState, replace, callback) {
  if(!utils.get('activeUser')){
    replace('/');
  }
  callback();
}


export function isAuthenticated() {
  if( !utils.getActiveUser() ) {
    return false;
  }
  return true;
}
