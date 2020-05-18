/* eslint-disable import/order */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './ducks';

const middlewares = [thunkMiddleware];

// Enable devTools Chrome extension
const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composer(applyMiddleware(...middlewares));

export default function (initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
