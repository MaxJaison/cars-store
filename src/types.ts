export const CHANGE_COLOR = "CHANGE_COLOR";
export const CHANGE_MANUFACTURE = "CHANGE_MANUFACTURE";
export const FILTER_CARS = "FILTER_CARS";

interface ChangeColor {
  type: typeof CHANGE_COLOR;
  payload: string;
}

interface ChangeManufacture {
  type: typeof CHANGE_MANUFACTURE;
  payload: string;
}

interface FilterCars {
  type: typeof FILTER_CARS;
  payload: string;
}

export type FiltersActionTypes = ChangeColor | ChangeManufacture;
export type CarsActionTypes = FilterCars;
