import { combineReducers } from "redux";

import navReducer from "./navReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  navs: navReducer,
  user: userReducer
});
