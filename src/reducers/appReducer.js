import { updateObject } from '../support/objectUtils';
import { actions } from '../actions/actions';


const initialState = {
  activeUser: false,
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
  }
};


const appReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLER[action.type];
  return handler ? handler(state, action) : state;
};

export default appReducer;
