import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";
import { removeItemFromLocalStorage } from "../../utilities/fakedb";

const Orders = () => {
  const { initialCart } = useLoaderData();
  const [cartItems, setCartItems] = useState(initialCart);

  const handleRemoveItem = (itemID) => {
    const remainingItems = cartItems.filter((item) => item.id !== itemID);
    setCartItems(remainingItems);
    removeItemFromLocalStorage(itemID);
  };

  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cartItems.map((product) => (
          <ReviewItems
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItems>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cartItems}></Cart>
      </div>
    </div>
  );
};

export default Orders;
