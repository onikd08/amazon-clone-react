import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, price, seller, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h5>{name}</h5>
      <p>{price}$</p>
      <p>Manufacturer: {seller}</p>
      <p>
        <small>Rating: {ratings} stars</small>
      </p>
    </div>
  );
};

export default Product;
