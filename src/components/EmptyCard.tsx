import { Card, CardContent } from "@material-ui/core";
import React from "react";
import "./CarsList.css";

const EmptyCard = () => {
  return (
    <>
      <Card>
        <CardContent className="content">
          <div className="grey-square" />
          <div>
            <div className="grey-line" />
            <div className="grey-line" />
            <div className="grey-line" />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default EmptyCard;
