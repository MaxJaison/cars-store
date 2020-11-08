import {
  FiltersActionTypes,
  CHANGE_COLOR,
  CHANGE_SORT_BY,
  CHANGE_MANUFACTURE,
} from "../types";

export const changeColor = (color: unknown): FiltersActionTypes => {
  return { type: CHANGE_COLOR, payload: color };
};

export const changeManufacture = (manufacture: unknown): FiltersActionTypes => {
  return { type: CHANGE_MANUFACTURE, payload: manufacture };
};

export const changeSortBy = (sortBy: unknown): FiltersActionTypes => {
  return { type: CHANGE_SORT_BY, payload: sortBy };
};
