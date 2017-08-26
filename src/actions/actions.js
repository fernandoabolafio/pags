import lsUtils from '../support/localStorageUtils';
import { getFundosRecomendados } from '../communication/calls';
import {push} from 'react-router-redux';

export const actions = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SET_FUNDOS_RECOMENDADOS: 'SET_FUNDOS_RECOMENDADOS'
};

export function loginSync(user) {
  lsUtils.setActiveUser(user);
  lsUtils.updateUser(user);
  return {
    type: actions.LOGIN,
    user
  }
}

export function login(user, redirect=true) {
  return (dispatch) => {
    dispatch(loginSync(user));
    if(redirect) {
      dispatch(push('/main'));
    }
  }
}

export function logoutSync() {
  lsUtils.setActiveUser(false);
  return {
    type: actions.LOGOUT
  }
}

export function logout() {
  return (dispatch) => {
    dispatch(logoutSync());
    dispatch(push('/'));
  }
}

export function setFundosRecomendados(fundos) {
  return {
    type: actions.SET_FUNDOS_RECOMENDADOS,
    fundos
  }
}

export function fetchFundosRecomendados(){
  return (dispatch, getState) => {
    const {activeUser} = getState().app;
    getFundosRecomendados(activeUser.id).then(
      (result) => {
        console.log('result');
        console.log(result.data);
        dispatch(setFundosRecomendados(result.data.data));
      }
    ).catch(
      (error) => {
        console.log('error');
        console.log(error);
      }
    )
  };
}
