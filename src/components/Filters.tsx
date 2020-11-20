import { Button, FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Manufacture, RootState } from "../types";
import "./Filters.css";
import { fetchCars } from "../actionCreators/CarsActions";
import {
  changeColor,
  changeManufacture,
  changeSortBy,
  fetchColors,
  fetchManufacturers,
} from "../actionCreators/FilterActions";

const StyledButton = withStyles({
  root: {
    background: "#ea7f28",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 35,
    padding: "0 40px",
    margin: 8,
    "&:hover": {
      background: "#ea7f28",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 35,
      padding: "0 40px",
      margin: 8,
    },
  },
})(Button);

const Filters = () => {
  const dispatch = useDispatch();
  const color = useSelector((state: RootState) => state.color);
  const manufacture = useSelector((state: RootState) => state.manufacture);
  const colors = useSelector((state: RootState) => state.colors);
  const manufacturers = useSelector((state: RootState) => state.manufacturers);
  const sortBy = useSelector((state: RootState) => state.sortBy);

  useEffect(() => {
    dispatch(changeColor(""));
    dispatch(changeManufacture(""));
    dispatch(changeSortBy("none"));
    dispatch(fetchColors());
    dispatch(fetchManufacturers());
  }, [dispatch]);

  const handleColor = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(changeColor(event.target.value));
  };

  const handleManufacture = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(changeManufacture(event.target.value));
  };

  const handleSortBy = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(changeSortBy(event.target.value));
  };

  const filterCars = () => {
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

    dispatch(fetchCars(1, filters));
  };

  return (
    <div className="filters">
      <FormControl variant="outlined" className="select">
        <InputLabel id="demo-simple-select-outlined-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          value={color}
          onChange={handleColor}
          label="Color"
        >
          <MenuItem value="">
            <em>All car colors</em>
          </MenuItem>
          {colors.map((color: string) => {
            return (
              <MenuItem data-testid="color-select" key={color} value={color}>
                {color}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className="select">
        <InputLabel id="demo-simple-select-outlined-label">
          Manufacture
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          value={manufacture}
          onChange={handleManufacture}
          label="Manufacture"
        >
          <MenuItem value="">
            <em>All manufacturers</em>
          </MenuItem>
          {manufacturers.map((manufacture: Manufacture) => {
            return (
              <MenuItem
                data-testid="manufacture-select"
                key={manufacture.models[0].name}
                value={manufacture.name}
              >
                {manufacture.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className="select">
        <InputLabel id="demo-simple-select-outlined-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={sortBy}
          onChange={handleSortBy}
          label="Sort By"
        >
          <MenuItem value="none">None</MenuItem>
          <MenuItem value="asc">Mileage Ascending</MenuItem>
          <MenuItem value="des">Mileage Descending</MenuItem>
        </Select>
      </FormControl>
      <StyledButton onClick={filterCars}>Filter</StyledButton>
    </div>
  );
};

export default Filters;
