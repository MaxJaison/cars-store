export interface RootState {
  cars: any;
  car: any;
  color: any;
  manufacture: any;
  sortBy: any;
  page: any;
}

export interface Manufacture {
  name: string;
  models: {
    name: string;
  };
}

export interface Car {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  mileage: {
    number: number;
    unit: string;
  };
  fuelType: string;
  color: string;
  pictureUrl: string;
}

export interface CarsData {
  cars: Car[];
  totalPageCount: number;
  totalCarsCount: number;
}

export type FiltersProps = {
  colors: string[];
  manufactures: Manufacture[];
};

export const CHANGE_COLOR = "CHANGE_COLOR";
export const CHANGE_MANUFACTURE = "CHANGE_MANUFACTURE";
export const CHANGE_SORT_BY = "CHANGE_SORT_BY";
export const CHANGE_PAGE = "CHANGE_PAGE";

export const FETCH_CARS_PENDING = "FETCH_CARS_PENDING";
export const FETCH_CARS_SUCCESS = "FETCH_CARS_SUCCESS";
export const FETCH_CAR_SUCCESS = "FETCH_CAR_SUCCESS";
export const FETCH_CARS_ERROR = "FETCH_CARS_ERROR";

interface ChangeColor {
  type: typeof CHANGE_COLOR;
  payload: unknown;
}

interface ChangeManufacture {
  type: typeof CHANGE_MANUFACTURE;
  payload: unknown;
}

interface ChangeSortBy {
  type: typeof CHANGE_SORT_BY;
  payload: unknown;
}

interface ChangePage {
  type: typeof CHANGE_PAGE;
  payload: unknown;
}

interface Pending {
  type: typeof FETCH_CARS_PENDING;
}

interface FetchCars {
  type: typeof FETCH_CARS_SUCCESS;
  payload: CarsData;
}

interface FetchCar {
  type: typeof FETCH_CAR_SUCCESS;
  payload: Car;
}

interface Error {
  type: typeof FETCH_CARS_ERROR;
  payload: any;
}

export type FiltersActionTypes =
  | ChangeColor
  | ChangeManufacture
  | ChangeSortBy
  | ChangePage;
export type CarsActionTypes = FetchCars | FetchCar | Error | Pending;
