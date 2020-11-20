import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import CarPage from "./components/CarPage";

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
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/cars" /> :
          </Route>
          <Route exact path="/cars/:id">
            <CarPage />
          </Route>
          <Route exact path="/cars">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </main>
      <footer>
        <p>Copyright 2020</p>
      </footer>
    </>
  );
};

export default App;
