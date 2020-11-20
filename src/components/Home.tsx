import React from "react";
import "./Home.css";
import Filters from "./Filters";
import CarsList from "./CarsList";

const Home = () => {
  return (
    <div className="container">
      <Filters />
      <CarsList />
    </div>
  );
};

export default Home;
