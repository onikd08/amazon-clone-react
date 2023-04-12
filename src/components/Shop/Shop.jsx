import React, { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div>
        <h3>Products Container: {products.length}</h3>
      </div>
      <div>
        <h4>Order Summary</h4>
      </div>
    </div>
  );
};

export default Shop;
