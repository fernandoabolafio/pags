import { combineReducers } from 'redux';
import appReducer from './appReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  app: appReducer,
  routing: routerReducer
});
