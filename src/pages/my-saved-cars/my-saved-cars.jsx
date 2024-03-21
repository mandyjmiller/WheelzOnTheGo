import React, { useState, useEffect } from 'react';
import "./my-saved-cars.css";

const MySavedCars = () => {
  const [savedCars, setSavedCars] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setSavedCars(favorites);
  }, []);

  return (
    <div className='Home'>
        <h1 className='fav-text'>Favourites</h1>
    <div className="grid-container">
      {savedCars.map((car, index) => (
        <div key={car.id} className="grid-item">
          <img src={car.image1} alt={car.car_brand} />
          <h2>{car.car_brand}</h2>
          <ul style={{ listStyleType: "none" }}>
            <li>Type: {car.type}</li>
            <li>Location: {car.location}</li>
            <li>Hourly Price: £{car.hourlyPrice}</li>
            <li>Engine Size: {car.engineSize}</li>
            <li>Engine Sound: {car.engineSound}</li>
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MySavedCars;
