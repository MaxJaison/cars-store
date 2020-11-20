import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Car, RootState } from "../types";
import { useParams } from "react-router-dom";
import { fetchCar } from "../actionCreators/CarsActions";
import "./CarPage.css";

interface ParamTypes {
  id: string;
}

const CarPage = () => {
  let { id } = useParams<ParamTypes>();
  const car: Car = useSelector((state: RootState) => state.car);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCar(id));
  }, [dispatch, id]);

  return (
    <>
      {!Object.keys(car).length ? (
        <div>Loading car...</div>
      ) : (
        <div className="wrapper">
          <h2>
            {car.manufacturerName} {car.modelName}
          </h2>
          <p>
            Stock # {car.stockNumber} - {car.mileage.number / 1000}{" "}
            {car.mileage.unit} - {car.fuelType} - {car.color}
          </p>
          <p>
            This car is currently available and can be delivered as soon as
            <br />
            tomorrow morning. Please be aware that delivery times shown in
            <br />
            this page are not definitive and may change due to bad weather
            <br />
            conditions.
          </p>
        </div>
      )}
    </>
  );
};

export default CarPage;
