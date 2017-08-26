import { updateObject } from '../support/objectUtils';
import { actions } from '../actions/actions';


const initialState = {
  activeUser: false
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
  )
};


const appReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLER[action.type];
  return handler ? handler(state, action) : state;
};

export default appReducer;
