import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import marketReducers from './marketReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    marketData: marketReducers
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;