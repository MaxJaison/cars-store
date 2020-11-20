import { ERROR, FETCH_CARS_SUCCESS, FETCH_CAR_SUCCESS } from "../constants";
import { CarsActionTypes } from "../types";

const initialState = {
  pending: true,
  cars: [],
};

export const carsReducer = (state = initialState, action: CarsActionTypes) => {
  switch (action.type) {
    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        pending: false,
        ...action.payload,
      };
    case ERROR:
      return {
        ...state,
        pending: false,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const carReducer = (state = {}, action: CarsActionTypes) => {
  switch (action.type) {
    case FETCH_CAR_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
