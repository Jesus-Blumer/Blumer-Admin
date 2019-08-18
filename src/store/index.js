import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import saga from './saga';

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
  const middleware = [sagaMiddleware]

  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  const store = createStore(reducers, enhancer)
  sagaMiddleware.run(saga);
  return store;
}
