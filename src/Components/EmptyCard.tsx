import { Card, CardContent } from "@material-ui/core";
import React from "react";
import "./CarsList.css";

const EmptyCard = () => {
  return (
    <>
      <Card>
        <CardContent className="content">
          <div className="grey-square"></div>
          <div>
            <div className="grey-line"></div>
            <div className="grey-line"></div>
            <div className="grey-line"></div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default EmptyCard;
