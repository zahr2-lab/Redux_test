import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-img" src={`/img/${props.product.name}.png`} />
      <div className="card-head">{props.product.name}</div>
      <div className="card-content">$ {props.product.price}</div>
    </div>
  );
};

export default Card;
