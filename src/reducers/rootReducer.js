import { combineReducers } from "redux";

import navReducer from "./navReducer";
import userReducer from "./userReducer";
import concertsReducer from "./concertsReducer";

export const rootReducer = combineReducers({
  navs: navReducer,
  user: userReducer,
  concerts: concertsReducer
});
