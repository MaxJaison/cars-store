import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CarsList.css";
import Filters from "./Filters";
import { Manufacture } from "./IManufacture";

const CarsList = () => {
  const [colors, setColors] = useState([]);
  const [manufactures, setManufactures] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/api/colors")
      .then((res) => res.json())
      .then((data) => {
        setColors(data.colors);
      });
    fetch("/api/manufacturers")
      .then((res) => res.json())
      .then((data) => {
        setManufactures(data.manufacturers);
      });
    fetch("/api/cars?sort=asc&page=1")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);

  return (
    <div className="container">
      <Filters colors={colors} manufactures={manufactures} />
      <div className="cars">
        <h2>Available cars</h2>
        <p>Showing 10 of 100 results</p>
      </div>
    </div>
  );
};

export default CarsList;
