import { updateObject, updateItemInArrayById } from '../support/objectUtils';
import lsUtils from '../support/localStorageUtils';
import { actions } from '../actions/actions';


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
  }
};


const appReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLER[action.type];
  return handler ? handler(state, action) : state;
};

export default appReducer;
