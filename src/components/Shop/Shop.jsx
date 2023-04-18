import React, { useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToLocalStorage, removeShoppingCart } from "../../utilities/fakedb";
import { Link, useLoaderData } from "react-router-dom";

const Shop = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleAddToCart = (product) => {
    let newCart = [];
    const alreadyExist = cart.find((item) => product.id === item.id);
    if (alreadyExist) {
      const restItemsInCart = cart.filter((item) => item.id !== product.id);
      alreadyExist.quantity += 1;
      newCart = [...restItemsInCart, alreadyExist];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToLocalStorage(product.id);
  };

  const handleClearCart = () => {
    removeShoppingCart();
    setCart([]);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div>
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/orders">
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
