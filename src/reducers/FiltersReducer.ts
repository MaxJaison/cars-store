import {
  CHANGE_COLOR,
  CHANGE_MANUFACTURE,
  CHANGE_PAGE,
  CHANGE_SORT_BY,
  ERROR,
  FETCH_COLORS_SUCCESS,
  FETCH_MANUFACTURERS_SUCCESS,
} from "../constants";
import { FiltersActionTypes } from "../types";

export const colorReducer = (
  state: string = "",
  action: FiltersActionTypes
) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return action.payload;
    default:
      return state;
  }
};

export const manufactureReducer = (
  state: string = "",
  action: FiltersActionTypes
) => {
  switch (action.type) {
    case CHANGE_MANUFACTURE:
      return action.payload;
    default:
      return state;
  }
};

export const sortByReducer = (
  state: string = "none",
  action: FiltersActionTypes
) => {
  switch (action.type) {
    case CHANGE_SORT_BY:
      return action.payload;
    default:
      return state;
  }
};

export const changePageReducer = (
  state: number = 1,
  action: FiltersActionTypes
) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export const colorsReducer = (state = [], action: FiltersActionTypes) => {
  switch (action.type) {
    case FETCH_COLORS_SUCCESS:
      return [...state, ...action.payload];
    case ERROR:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const manufacturersReducer = (
  state = [],
  action: FiltersActionTypes
) => {
  switch (action.type) {
    case FETCH_MANUFACTURERS_SUCCESS:
      return [...state, ...action.payload];
    case ERROR:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
