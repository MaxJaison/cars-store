import { CarsActionTypes, FILTER_CARS } from "../types";

export default function cars(state = [], action: CarsActionTypes) {
  switch (action.type) {
    case FILTER_CARS:
      return action.payload;
    default:
      return state;
  }
}
