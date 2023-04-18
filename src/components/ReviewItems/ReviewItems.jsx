import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewItems = ({ product }) => {
  const { name, img, price, quantity, shipping } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p>
            <small>Price: {price}</small>
          </p>
          <p>
            <small>Shipping: {shipping}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div className="delete-container">
          <button className="btn-delete">
            <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItems;
