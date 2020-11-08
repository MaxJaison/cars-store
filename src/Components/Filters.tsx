import { Button, FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import { Manufacture } from "./IManufacture";
import { connect } from "react-redux";
import changeManufacture from "../actionCreator/changeManufacture";
import changeColor from "../actionCreator/changeColor";

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 250,
    },
  })
);

type FiltersProps = {
  colors: string[];
  manufactures: Manufacture[];
  color: string;
  manufacture: string;
  setColor: Function;
  setManufacture: Function;
};

const Filters = ({
  colors,
  manufactures,
  color,
  manufacture,
  setColor,
  setManufacture,
}: FiltersProps) => {
  const classes = useStyles();

  const handleColor = (event: React.ChangeEvent<{ value: unknown }>) => {
    setColor(event.target.value);
  };

  const handleManufacture = (event: React.ChangeEvent<{ value: unknown }>) => {
    setManufacture(event.target.value);
  };

  const filterCars = () => {};

  return (
    <div className="filters">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={color}
          onChange={handleColor}
          label="Color"
        >
          <MenuItem value="">
            <em>All car colors</em>
          </MenuItem>
          {colors.map((color: string) => {
            return (
              <MenuItem key={color} value={color}>
                {color}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <br />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Manufacture
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={manufacture}
          onChange={handleManufacture}
          label="Manufacture"
        >
          <MenuItem value="">
            <em>All manufactures</em>
          </MenuItem>
          {manufactures.map((manufacture: Manufacture) => {
            return (
              <MenuItem key={manufacture.name} value={manufacture.name}>
                {manufacture.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <StyledButton onClick={filterCars}>Filter</StyledButton>
    </div>
  );
};

const mapStateToProps = ({ color, manufacture }: FiltersProps) => ({
  color,
  manufacture,
});

const mapDispatchToProps = (dispatch: any) => ({
  setColor(color: string) {
    dispatch(changeColor(color));
  },
  setManufacture(manufacture: string) {
    dispatch(changeManufacture(manufacture));
  },
  filterCars(manufacture: string) {
    //dispatch(changeManufacture(manufacture));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
