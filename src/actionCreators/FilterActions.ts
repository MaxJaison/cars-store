import {
  CHANGE_COLOR,
  CHANGE_MANUFACTURE,
  CHANGE_SORT_BY,
  ERROR,
  FETCH_COLORS_SUCCESS,
  FETCH_MANUFACTURERS_SUCCESS,
} from "../constants";
import { FiltersActionTypes, Manufacture } from "../types";

export const changeColor = (color: unknown): FiltersActionTypes => {
  return { type: CHANGE_COLOR, payload: color };
};

export const changeManufacture = (manufacture: unknown): FiltersActionTypes => {
  return { type: CHANGE_MANUFACTURE, payload: manufacture };
};

export const changeSortBy = (sortBy: unknown): FiltersActionTypes => {
  return { type: CHANGE_SORT_BY, payload: sortBy };
};

const fetchColorsSuccess = (colors: string[]): FiltersActionTypes => {
  return {
    type: FETCH_COLORS_SUCCESS,
    payload: colors,
  };
};

const fetchManufacturersSuccess = (
  manufacturers: Manufacture[]
): FiltersActionTypes => {
  return {
    type: FETCH_MANUFACTURERS_SUCCESS,
    payload: manufacturers,
  };
};

const fetchError = (error: any) => {
  return {
    type: ERROR,
    payload: error,
  };
};

export const fetchColors = () => {
  return (dispatch: any) => {
    fetch("/api/colors")
      .then((res) => res.json())
      .then((res) => {
        dispatch(fetchColorsSuccess(res.colors));
        return res;
      })
      .catch((error) => {
        dispatch(fetchError(error));
      });
  };
};

export const fetchManufacturers = () => {
  return (dispatch: any) => {
    fetch("/api/manufacturers")
      .then((res) => res.json())
      .then((res) => {
        dispatch(fetchManufacturersSuccess(res.manufacturers));
        return res;
      })
      .catch((error) => {
        dispatch(fetchError(error));
      });
  };
};
