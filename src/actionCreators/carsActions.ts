import {
  Car,
  CarsActionTypes,
  CarsData,
  CHANGE_PAGE,
  FETCH_CARS_ERROR,
  FETCH_CARS_SUCCESS,
  FETCH_CAR_SUCCESS,
  FiltersActionTypes,
} from "../types";

const fetchCarsSuccess = (carsData: CarsData): CarsActionTypes => {
  return {
    type: FETCH_CARS_SUCCESS,
    payload: carsData,
  };
};

const fetchCarsError = (error: any) => {
  return {
    type: FETCH_CARS_ERROR,
    payload: error,
  };
};

const fetchCarSuccess = (car: Car): CarsActionTypes => {
  return {
    type: FETCH_CAR_SUCCESS,
    payload: car,
  };
};

const fetchCarError = (error: any) => {
  return {
    type: FETCH_CARS_ERROR,
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
        dispatch(fetchCarsError(error));
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
        dispatch(fetchCarError(error));
      });
  };
};
