import { combineReducers } from "redux";

import ajaxReducer from "./ajax";
import ThemeOptions from "./ThemeOptions";

export default combineReducers({
  ajaxReducer,
  ThemeOptions,
});
