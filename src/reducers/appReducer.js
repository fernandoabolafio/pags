import { updateObject, updateItemInArrayById } from '../support/objectUtils';
import lsUtils from '../support/localStorageUtils';
import { actions } from '../actions/actions';
import {arrayMove} from 'react-sortable-hoc';

const initialState = {
  activeUser: {
    objetivos: []
  },
  opcoesDeInvestimento: {}
};

const ACTION_HANDLER = {
  [actions.LOGIN]: (state, action) => updateObject(
    state,
    {
        activeUser: action.user
    }
  ),
  [actions.LOGOUT]: () => initialState,
  [actions.SET_FUNDOS_RECOMENDADOS]: (state, action) => updateObject(
    state,
    {
      fundosRecomendados: action.fundos
    }
  ),
  [actions.SET_CARTEIRA_RECOMENDADA]: (state, action) => updateObject(
    state,
    {
      carteiraRecomendada: action.carteira
    }
  ),
  [actions.CLEAR_CARTEIRA_RECOMENDADA]: (state, actions) => updateObject(
    state,
    {
      carteiraRecomendada: false
    }
  ),
  [actions.SET_OPCOES_DE_INVESTIMENTO]: (state, action) =>{
    const {opcoesDeInvestimento} = state;
    opcoesDeInvestimento[action.optionsType] = action.options;
    return updateObject(
      state,
      {
        opcoesDeInvestimento: updateObject(
          state.opcoesDeInvestimento,
          {
            [action.optionsType]: action.options
          }
        )
      }
    );
  },
  [actions.RECEIVE_APPLY_OK]: (state, action) => {
    return updateObject(
      state,
      {
        lastApplyOk: action.info
      }
    )
  },
  [actions.CLEAR_APPLY_OK]: (state, action) => {
    return updateObject(
      state,
      {
        lastApplyOk: false
      }
    )
  },
  [actions.SET_INVESTIDOR_INFO]: (state, action) => {
    return updateObject(
      state,
      {
        investidorInfo: action.info
      }
    )
  },
  [actions.ADD_OBJETIVO]: (state, action) => {
    const {objetivos} = state.activeUser;
    const newObjetivos = objetivos.concat([action.data]);
    return updateObject(
      state,
      {
        activeUser: updateObject(
          state.activeUser,
          {
            objetivos: newObjetivos
          }
        )
      }
    )
  },
  [actions.REMOVE_OBJETIVO]: (state, action) => {
    const {objetivos} = state.activeUser;
    const filteredObjetivos = objetivos.filter( obj => obj.id !== action.id);
    return updateObject(
      state,
      {
        activeUser: updateObject(
          state.activeUser,
          {
            objetivos: filteredObjetivos
          }
        )
      }
    )
  },
  [actions.EDIT_OBJETIVO]: (state, action) => {
    const {objetivos} = state.activeUser;
    return updateObject(
      state,
      {
        activeUser: updateObject(
          state.activeUser,
          {
            objetivos: updateItemInArrayById(
              state.activeUser.objetivos,
              action.objetivo.id,
              (obj) => updateObject(obj, action.objetivo)
            )
          }
        )
      }
    )
  },
  [actions.RECEIVE_EXTRATO]: (state, action) => {
    return updateObject(
      state,
      {
        extrato: action.extrato
      }
    )
  },
  [actions.CLEAR_EXTRATO]: (state, action) => {
    return updateObject(
      state,
      {
        extrato: false
      }
    )
  },
  [actions.CHANGE_ACESSORIO]: (state, action) => {
    const newPagsAcessorio = state.activeUser.pagsAcessorios.map((acessorio, index) => {
      return {
        ...acessorio,
        selected: acessorio.id === action.acessorioId ? true : false
      };
    })
    return updateObject(
      state,
      {
        activeUser: updateObject(
          state.activeUser,
          {
            pagsAcessorios: newPagsAcessorio
          }
        )
      }
    );
  },
  [actions.CONQUER_ACESSORIO]: (state, action) => {
    const newPagsAcessorio = state.activeUser.pagsAcessorios.map((acessorio, index) => {
      let isConquered = acessorio.isConquered;
      if (acessorio.id === action.acessorioId) {
        isConquered = true;
      }
      return {
        ...acessorio,
        isConquered
      };
    });
    return updateObject(
      state,
      {
        activeUser: updateObject(
          state.activeUser,
          {
            pagsAcessorios: newPagsAcessorio
          }
        )
      }
    );
  },

  [actions.ORDER_OBJETIVO]: (state, action) => {
    return updateObject(
      state,
      {
        activeUser: updateObject(
          state.activeUser,
          {
            objetivos: arrayMove(state.activeUser.objetivos, action.index.oldIndex, action.index.newIndex)
          }
        )
      }
    )
  }
};


const appReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLER[action.type];
  return handler ? handler(state, action) : state;
};

export default appReducer;
