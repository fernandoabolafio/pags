import utils from '../support/localStorageUtils';

export function checkSession(nextState, replace, callback) {
  if (utils.get('activeUser')) {
    console.log('got active user');
    replace('/');
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
  if( !utils.get('activeUser') ) {
    return false;
  }
  return true;
}
