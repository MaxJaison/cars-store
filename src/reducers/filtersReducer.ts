import {
  CHANGE_COLOR,
  CHANGE_MANUFACTURE,
  CHANGE_PAGE,
  CHANGE_SORT_BY,
  FiltersActionTypes,
} from "../types";

export const colorsReducer = (
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

export const manufacturesReducer = (
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
