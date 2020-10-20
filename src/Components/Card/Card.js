import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-head">{props.product.name}</div>
      <div className="card-content"></div>
    </div>
  );
};

export default Card;
