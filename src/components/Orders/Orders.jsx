import React from "react";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const { cart } = useLoaderData();
  return (
    <div>
      This is orders
      {cart.map((item) => (
        <li key={item.id}>
          {" "}
          {item.name}: {item.quantity}
        </li>
      ))}
    </div>
  );
};

export default Orders;
