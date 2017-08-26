import lsUtils from '../support/localStorageUtils';
import {push} from 'react-router-redux';

export const actions = {
  LOGIN: 'LOGIN'
};

export function loginSync(user) {
  lsUtils.setActiveUser(user);
  lsUtils.updateUser(user);
  return {
    type: actions.LOGIN,
    user
  }
}

export function login(user) {
  return (dispatch) => {
    dispatch(loginSync(user));
    dispatch(push('/main'));
  }
}
