import {
  CHANGE_PAGE,
  ERROR,
  FETCH_CARS_SUCCESS,
  FETCH_CAR_SUCCESS,
} from "../constants";
import { Car, CarsActionTypes, CarsData, FiltersActionTypes } from "../types";

const fetchCarsSuccess = (carsData: CarsData): CarsActionTypes => {
  return {
    type: FETCH_CARS_SUCCESS,
    payload: carsData,
  };
};

const fetchCarSuccess = (car: Car): CarsActionTypes => {
  return {
    type: FETCH_CAR_SUCCESS,
    payload: car,
  };
};

const fetchError = (error: any) => {
  return {
    type: ERROR,
    payload: error,
  };
};

const changePage = (page: unknown): FiltersActionTypes => {
  return {
    type: CHANGE_PAGE,
    payload: page,
  };
};

export const fetchCars = (
  page: number,
  filters: { name: string; value: string }[]
) => {
  return (dispatch: any) => {
    dispatch(changePage(page));
    let url = filters.length
      ? `/api/cars?page=${page}${filters
          .map((filter) => `&${filter.name}=${filter.value}`)
          .join("")}`
      : `/api/cars?page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchCarsSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchError(error));
      });
  };
};

export const fetchCar = (stockNumber: string) => {
  return (dispatch: any) => {
    fetch(`/api/cars/${stockNumber}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchCarSuccess(res.car));
        return res;
      })
      .catch((error) => {
        dispatch(fetchError(error));
      });
  };
};
