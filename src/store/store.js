import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import history from '../routes/history';

const enhancers = [];

//TODO(Fernando) Add verification to development env
if (1) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const middleware = routerMiddleware(history);

const defaultState = {};
const store = createStore(reducer, defaultState,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(middleware),
    ...enhancers
  )
);

export default store;
