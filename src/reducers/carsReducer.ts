import {
  CarsActionTypes,
  FETCH_CARS_ERROR,
  FETCH_CARS_SUCCESS,
} from "../types";

const initialState = {
  pending: true,
  carsData: {},
  error: null,
};

export default function carsReducer(
  state = initialState,
  action: CarsActionTypes
) {
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
}
