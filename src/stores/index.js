import {
  applyMiddleware,
  compose,
  createStore,
  combineReducers
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import authReducer from '../reducers';
import rootSaga from '../sagas';

const history = createHistory()

const sagaMiddleware = createSagaMiddleware();
const reduxRouterMiddleware = routerMiddleware(history);

const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  applyMiddleware(reduxRouterMiddleware)
);

const store = createStore(
  combineReducers({ routerReducer, auth:authReducer }),
  enhancers
);

sagaMiddleware.run(rootSaga);

export default store;

export {
  history
};