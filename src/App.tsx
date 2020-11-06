import React from "react";
import "./App.css";
// @ts-ignore
import { Route, Switch, Redirect } from "react-router-dom";
import CarsList from "./Components/CarsList";
import NoMatch from "./Components/NoMatch";
import Car from "./Components/Car";

const App = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <p>Purchase</p>
          <p>My Orders</p>
          <p>Sell</p>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <Redirect to="/cars" /> :
        </Route>
        <Route exact path="/cars/:id">
          <Car />
        </Route>
        <Route exact path="/cars">
          <CarsList />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <footer>
        <p>Copyright 2020</p>
      </footer>
    </>
  );
};

export default App;
