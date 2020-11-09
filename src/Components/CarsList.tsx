import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CarsList.css";
import { useDispatch, useSelector } from "react-redux";
import { Car, RootState } from "../types";
import { fetchCars } from "../actionCreators/carsActions";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import EmptyCard from "./EmptyCard";

const CarsList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.cars);
  const color = useSelector((state: RootState) => state.color);
  const manufacture = useSelector((state: RootState) => state.manufacture);
  const sortBy = useSelector((state: RootState) => state.sortBy);
  const page = useSelector((state: RootState) => state.page);

  useEffect(() => {
    dispatch(fetchCars(1, []));
  }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    let filters = [];
    if (color) {
      filters.push({ name: "color", value: color });
    }

    if (manufacture) {
      filters.push({ name: "manufacturer", value: manufacture });
    }

    if (sortBy !== "none") {
      filters.push({ name: "sort", value: sortBy });
    }

    dispatch(fetchCars(value, filters));
  };

  return (
    <div className="cars">
      {data.pending ? (
        <EmptyCard />
      ) : (
        <>
          <h2>Available Cars</h2>
          <p>
            Showing{" "}
            {data.carsData.totalCarsCount < 10
              ? data.carsData.totalCarsCount
              : data.carsData.cars.length === 10
              ? 10
              : data.carsData.totalCarsCount % 10}{" "}
            of {data.carsData.totalCarsCount} results
          </p>
          {data.carsData.cars.map((car: Car) => {
            return (
              <Card className="card" key={car.stockNumber}>
                <CardMedia
                  className="image"
                  image={car.pictureUrl}
                  title={car.modelName}
                />
                <CardContent>
                  <h2>
                    {car.manufacturerName} {car.modelName}
                  </h2>
                  <p>
                    Stock # {car.stockNumber} - {car.mileage.number / 1000}{" "}
                    {car.mileage.unit} - {car.fuelType} - {car.color}
                  </p>
                  <Link className="link" to={`/cars/${car.stockNumber}`}>
                    View Details
                  </Link>
                </CardContent>
              </Card>
            );
          })}
          <div>
            <Pagination
              count={data.carsData.totalPageCount}
              page={page}
              onChange={handleChange}
              defaultPage={1}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CarsList;
