import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import sagas from '../sagas';

const middlewares: any = [];
if (!process.env.REACT_APP_WITHOUT_REDUX_LOGS) {
  middlewares.push(createLogger());
}

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

//@ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default function configureStore() {
  return store;
}
