import React, { useEffect, useState } from "react";
import "./Home.css";
import Filters from "./Filters";
import CarsList from "./CarsList";

const Home = () => {
  const [colors, setColors] = useState([]);
  const [manufactures, setManufactures] = useState([]);

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
  }, []);

  return (
    <div className="container">
      <Filters colors={colors} manufactures={manufactures} />
      <CarsList />
    </div>
  );
};

export default Home;
