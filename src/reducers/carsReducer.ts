import {
  CarsActionTypes,
  FETCH_CARS_ERROR,
  FETCH_CARS_SUCCESS,
  FETCH_CAR_SUCCESS,
} from "../types";

const initialState = {
  pending: true,
  carsData: {},
  error: null,
};

export const carsReducer = (state = initialState, action: CarsActionTypes) => {
  switch (action.type) {
    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        pending: false,
        carsData: action.payload,
      };
    case FETCH_CARS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
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
        car: action.payload,
      };
    case FETCH_CARS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
