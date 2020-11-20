import {
  CHANGE_COLOR,
  CHANGE_MANUFACTURE,
  CHANGE_PAGE,
  CHANGE_SORT_BY,
  ERROR,
  FETCH_CARS_PENDING,
  FETCH_CARS_SUCCESS,
  FETCH_CAR_SUCCESS,
  FETCH_COLORS_SUCCESS,
  FETCH_MANUFACTURERS_SUCCESS,
} from "./constants";

export interface RootState {
  cars: any;
  car: any;
  color: any;
  manufacture: any;
  sortBy: any;
  page: any;
  colors: any;
  manufacturers: any;
}

export interface Manufacture {
  name: string;
  models: {
    name: string;
  }[];
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
  manufacturers: Manufacture[];
};

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

interface FetchColors {
  type: typeof FETCH_COLORS_SUCCESS;
  payload: string[];
}

interface FetchManufacturers {
  type: typeof FETCH_MANUFACTURERS_SUCCESS;
  payload: Manufacture[];
}

interface Error {
  type: typeof ERROR;
  payload: any;
}

export type FiltersActionTypes =
  | ChangeColor
  | ChangeManufacture
  | ChangeSortBy
  | ChangePage
  | FetchColors
  | FetchManufacturers
  | Error;

export type CarsActionTypes = FetchCars | FetchCar | Error | Pending;
