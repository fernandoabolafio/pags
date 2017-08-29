
import lsUtils from '../support/localStorageUtils';
import {
  getFundosRecomendados,
  getCarteiraRecomendada,
  getCDBS,
  getCOES,
  getFundos,
  getPoupancas,
  getPrevidencias,
  postFundo,
  postCDB,
  postCOE,
  postPoupanca,
  postPrevidencia,
  getInvestidor
 } from '../communication/calls';
import {push} from 'react-router-redux';

export const actions = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SET_FUNDOS_RECOMENDADOS: 'SET_FUNDOS_RECOMENDADOS',
  SET_CARTEIRA_RECOMENDADA: 'SET_CARTEIRA_RECOMENDADA',
  CLEAR_CARTEIRA_RECOMENDADA: 'CLEAR_CARTEIRA_RECOMENDADA',
  SET_OPCOES_DE_INVESTIMENTO: 'SET_OPCOES_DE_INVESTIMENTO',
  RECEIVE_APPLY_OK: 'RECEIVE_APPLY_OK',
  CLEAR_APPLY_OK: 'CLEAR_APPLY_OK',
  SET_INVESTIDOR_INFO: 'SET_INVESTIDOR_INFO',
  ADD_OBJETIVO: 'ADD_OBJETIVO',
  REMOVE_OBJETIVO: 'REMOVE_OBJETIVO',
  UPDATE_OBJETIVO: 'EDIT_OBJETIVO',
  SET_OBJETIVOS: 'SET_OBJETIVOS',
  EDIT_OBJETIVO: 'EDIT_OBJETIVO',
  CHANGE_ACESSORIO: 'CHANGE_ACESSORIO',
  CONQUER_ACESSORIO: 'CONQUER_ACESSORIO'
};

const generateId = () => {
  const timestamp = new Date().getUTCMilliseconds();
  return timestamp;
}

export function setObjetivos(objetivos) {
  return {
    type: actions.SET_OBJETIVOS,
    objetivos
  }
}


export function addObjetivo(data) {
  const id = generateId();
  data.id = id;
  return {
    type: actions.ADD_OBJETIVO,
    data
  }
}

export function removeObjetivo(id) {
  return {
    type: actions.REMOVE_OBJETIVO,
    id
  }
}

export function editObjetivo(objetivo) {
  return {
    type: actions.EDIT_OBJETIVO,
    objetivo
  }
}

export function goToLogin() {
  return (dispatch) => {
    dispatch(push('/banksync'));
  }
}

export function goToInvestimentos() {
  return (dispatch) => {
    dispatch(push('/app/investimentos'));
  }
}

export function goToMain() {
  return(dispatch) => {
    dispatch(push('/app/main'));
  }
}

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

export function seeMoreInvestimento(id) {
  return (dispatch) => {
    dispatch(push(`/app/investimentos/${id}`));
  }
}

export function fetchFundosRecomendados(){
  return (dispatch, getState) => {
    const {activeUser} = getState().app;
    getFundosRecomendados(activeUser.id).then(
      (result) => {
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

export function setOpcoesDeInvestimento(optionsType, options) {
  return {
    type: actions.SET_OPCOES_DE_INVESTIMENTO,
    optionsType,
    options
  }
}

export function fetchInvestimentos(type) {
  return (dispatch) => {
    const mapTypeTopCall = {
      ['cdbs']: getCDBS,
      ['coes']: getCOES,
      ['fundos']: getFundos,
      ['previdencias']: getPrevidencias,
      ['poupancas']: getPoupancas
    };
    const call = mapTypeTopCall[type];
    call().then(
      (result) => {
        dispatch(setOpcoesDeInvestimento(type, result.data));
      }
    ).catch(
      (error) => {
        console.log('got error');
      }
    )
  }
}

export function receiveApplyOk(info) {
  return {
    type: actions.RECEIVE_APPLY_OK,
    info
  }
}

export function clearApplyOk() {
  return {
    type: actions.CLEAR_APPLY_OK
  }
}

export function applyInvestimento(id_investimento, data, type){
  return (dispatch, getState) => {
    const userId = getState().app.activeUser.id;
    const mapTypeTopCall = {
      ['cdbs']: postCDB,
      ['coes']: postCOE,
      ['fundos']: postFundo,
      ['previdencias']: postPrevidencia,
      ['poupancas']: postPoupanca
    };
    const call = mapTypeTopCall[type];
    call(userId, id_investimento, data).then(
      (result) => {
          console.log('got result');
          console.log(result);
          dispatch(receiveApplyOk(result.data));
      }
    ).catch(
      (error) => {
        console.log('got error');
        console.log(error);
      }
    )
  }
}

export function setInvestidorInfo(info) {
  return {
    type: actions.SET_INVESTIDOR_INFO,
    info
  }
}

export function fetchInvestidorInfo() {
  return (dispatch, getState) => {
    const id = getState().app.activeUser.id;
    getInvestidor(id).then(
      (result) => {
        dispatch(setInvestidorInfo(result.data[0]));
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }
}

export function changeAcessorio(acessorioId) {
  return {
    type: actions.CHANGE_ACESSORIO,
    acessorioId
  }
}

export function conquerAcessorio(acessorioId) {
  return {
    type: actions.CHANGE_ACESSORIO,
    acessorioId
  }
}
