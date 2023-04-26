import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";
import {
  removeItemFromLocalStorage,
  removeShoppingCart,
} from "../../utilities/fakedb";

const Orders = () => {
  const { initialCart } = useLoaderData();
  const [cartItems, setCartItems] = useState(initialCart);

  const handleRemoveItem = (itemID) => {
    const remainingItems = cartItems.filter((item) => item.id !== itemID);
    setCartItems(remainingItems);
    removeItemFromLocalStorage(itemID);
  };

  const handleClearCart = () => {
    removeShoppingCart();
    setCartItems([]);
  };

  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cartItems.length ? (
          cartItems.map((product) => (
            <ReviewItems
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            ></ReviewItems>
          ))
        ) : (
          <h3>
            No items in cart. Want to go back to <Link to="/shop">Shop?</Link>
          </h3>
        )}
      </div>
      <div className="cart-container">
        <Cart handleClearCart={handleClearCart} cart={cartItems}>
          <Link to="/shipping">
            <button>Proceed to Shipping</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
