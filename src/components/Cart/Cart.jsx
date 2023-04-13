import React from "react";
import "./Cart.css";
import calculateTotal from "../../utilities/calculateTotal";

const Cart = ({ cart, handleRemoveCart }) => {
  console.log(cart);
  const { totalQuantity, totalPrice, totalShipping, grandTotal } =
    calculateTotal(cart);
  return (
    <div className="cart-container">
      <h4>Order Summary</h4>
      <p>Total Items in Cart: {totalQuantity}</p>
      <p>Total Price: ${totalPrice.toFixed(2)} </p>
      <p>Total Shipping: ${totalShipping.toFixed(2)}</p>
      <p>Grand Total: ${grandTotal.toFixed(2)}</p>
      <button onClick={handleRemoveCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
