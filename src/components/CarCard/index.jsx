import React from "react";
import "./style.css";

const CarCard = ({card}) => {
  return (
    <div className="CardWrapper">
      <img
        className="CardImage"
        src="src/assets/images/cars/acura_0.png"
        alt=""
      />
      <div className="CarData">
        <ul style={{listStyleType: "none"}}>
          <li>Location: {card.location}</li>
          <li>Brand: {card.car_brand}</li>
          <li>Rate: {card.hourlyPrice}</li>
        </ul>

      </div>
    </div>
  );
};

export default CarCard;
