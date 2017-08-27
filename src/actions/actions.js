import lsUtils from '../support/localStorageUtils';
import { getFundosRecomendados, getCarteiraRecomendada } from '../communication/calls';
import {push} from 'react-router-redux';

export const actions = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SET_FUNDOS_RECOMENDADOS: 'SET_FUNDOS_RECOMENDADOS',
  SET_CARTEIRA_RECOMENDADA: 'SET_CARTEIRA_RECOMENDADA',
  CLEAR_CARTEIRA_RECOMENDADA: 'CLEAR_CARTEIRA_RECOMENDADA'
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
      dispatch(push('/app/main'));
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

export function setCarteiraRecomendada(carteira) {
  return {
    type: actions.SET_CARTEIRA_RECOMENDADA,
    carteira
  }
}

export function clearCarteiraRecomendada() {
  return {
    type: actions.CLEAR_CARTEIRA_RECOMENDADA
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

export function fetchCarteiraRecomendada(valor, prazo) {
  return (dispatch, getState) => {
    const {activeUser} = getState().app;
      getCarteiraRecomendada(activeUser.id, valor, prazo).then(
        (result) => {
          console.log('result carteira recomendada');
          console.log(result.data);
          dispatch(setCarteiraRecomendada(result.data));
        }
      ).catch(
        (error) => {
          console.log('error');
          console.log(error);
        }
      )
  }
}
