import { combineReducers } from "redux";
import colors from "./colors";
import manufactures from "./manufactures";
import cars from "./cars";

export default combineReducers({
  colors,
  manufactures,
  cars,
});
