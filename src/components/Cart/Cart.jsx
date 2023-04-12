import React from "react";
import "./Cart.css";
import { removeCart } from "../../utilities/fakedb";
import calculateTotal from "../../utilities/calculateTotal";

const Cart = ({ cart }) => {
  const { totalPrice, totalShipping, grandTotal } = calculateTotal(cart);
  return (
    <div className="cart-container">
      <h4>Order Summary</h4>
      <p>Total Items in Cart: {cart.length}</p>
      <p>Total Price: ${totalPrice.toFixed(2)} </p>
      <p>Total Shipping: ${totalShipping.toFixed(2)}</p>
      <p>Grand Total: ${grandTotal.toFixed(2)}</p>
      <button onClick={removeCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
