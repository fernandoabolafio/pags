import { updateObject } from '../support/objectUtils';
import { actions } from '../actions/actions';

const ACTION_HANDLER = {
};

const initialState = {
};

const appReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLER[action.type];
  return handler ? handler(state, action) : state;
};

export default appReducer;
