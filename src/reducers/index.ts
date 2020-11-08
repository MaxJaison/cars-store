import { combineReducers } from "redux";
import carsReducer from "./carsReducer";
import {
  changePageReducer,
  colorsReducer,
  manufacturesReducer,
  sortByReducer,
} from "./filtersReducer";

export default combineReducers({
  color: colorsReducer,
  manufacture: manufacturesReducer,
  sortBy: sortByReducer,
  page: changePageReducer,
  cars: carsReducer,
});
