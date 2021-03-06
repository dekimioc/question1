import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import apiDataReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  apiDataReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;