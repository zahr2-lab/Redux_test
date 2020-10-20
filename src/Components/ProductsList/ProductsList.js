import React from "react";
import Card from "../Card/Card";
import "./ProductsList.scss";

const products = [
  {
    id: 1,
    name: "apple",
    price: 3
  },
  {
    id: 2,
    name: "banana",
    price: 5
  }
];

const ProductList = () => {
  return (
    <div className="productsList">
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
