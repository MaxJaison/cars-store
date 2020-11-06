import React from "react";
// @ts-ignore
import { Link } from "react-router-dom";
import "./NoMatch.css";

const NoMatch = () => {
  return (
    <div className="center">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist</p>
      <p>
        You can always go back to the{" "}
        <Link to="/" className="link">
          homepage
        </Link>
        .
      </p>
    </div>
  );
};

export default NoMatch;
