import { combineReducers } from "redux";

import navReducer from "./navReducer";
import userReducer from "./userReducer";
import concertsReducer from "./concertsReducer";
import plansReducer from "./plansReducer";
import herokuReducer from "./herokuReducer";

export const rootReducer = combineReducers({
  navs: navReducer,
  user: userReducer,
  concerts: concertsReducer,
  plans: plansReducer,
  heroku: herokuReducer
});
