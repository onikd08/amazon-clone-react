import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";

const Orders = () => {
  const { initialCart } = useLoaderData();
  const [cartItems, setCartItems] = useState(initialCart);
  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cartItems.map((product) => (
          <ReviewItems key={product.id} product={product}></ReviewItems>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cartItems}></Cart>
      </div>
    </div>
  );
};

export default Orders;
