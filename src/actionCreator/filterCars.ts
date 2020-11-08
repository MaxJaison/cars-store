import { FILTER_CARS, CarsActionTypes } from "../types";

export default function filterCars(manufacture: string): CarsActionTypes {
  return { type: FILTER_CARS, payload: manufacture };
}
