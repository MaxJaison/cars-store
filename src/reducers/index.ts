import { combineReducers } from "redux";
import { carsReducer, carReducer } from "./CarsReducer";
import {
  changePageReducer,
  colorReducer,
  colorsReducer,
  manufactureReducer,
  manufacturersReducer,
  sortByReducer,
} from "./FiltersReducer";

export default combineReducers({
  color: colorReducer,
  manufacture: manufactureReducer,
  sortBy: sortByReducer,
  page: changePageReducer,
  cars: carsReducer,
  colors: colorsReducer,
  manufacturers: manufacturersReducer,
  car: carReducer,
});
