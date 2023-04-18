import React from "react";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const data = useLoaderData();
  const products = JSON.parse(data);
  return (
    <div>
      This is orders
      {products.map((item) => (
        <li key={item.id}> {item.name}</li>
      ))}
    </div>
  );
};

export default Orders;
