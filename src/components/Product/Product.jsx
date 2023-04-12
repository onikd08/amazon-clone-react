import React from "react";
import "./Product.css";

const Product = (props) => {
  const { handleAddToCart, product } = props;
  const { name, img, price, seller, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h5>{name}</h5>
      <p>{price}$</p>
      <small>Manufacturer: {seller}</small>
      <small>Rating: {ratings} stars</small>
      <button
        onClick={() => handleAddToCart(product)}
        className="add-to-cart-btn"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
