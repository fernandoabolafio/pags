import { updateObject } from '../support/objectUtils';
import { actions } from '../actions/actions';

const ACTION_HANDLER = {
  [actions.LOGIN]: (state, action) => updateObject(
    state,
    {
        activeUser: action.user
    }
  )
};

const initialState = {
  activeUser: false
};

const appReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLER[action.type];
  return handler ? handler(state, action) : state;
};

export default appReducer;
