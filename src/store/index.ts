import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";

const rootReducer = combineReducers(reducers);

const initStore = () => {
  const middlewares = [thunk];
  // @ts-ignore
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger as any);
  }
  return createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
};

export const store = initStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
