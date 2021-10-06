import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import gameReducer from "./game/reducer";
import detailReducer from "./detail/reducer";
import { logger } from "../middlewares/logger";

let composeEnhancers = compose;
if (typeof window !== "undefined") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  combineReducers({
    games: gameReducer,
    detail: detailReducer,
  }),
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
