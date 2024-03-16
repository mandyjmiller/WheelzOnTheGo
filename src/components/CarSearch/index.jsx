import React, { useState, useEffect } from 'react';
import "./style.css";


///THIS IS THE INDIVIDUAL CAR DISPLAY CARD
const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image1} alt={car.car_brand} />
      <h2>{car.car_brand}</h2>
      <ul style={{listStyleType: "none"}}>
      <li>Type: {car.type}</li>
      <li>Location: {car.location}</li>
      <li>Hourly Price: £{car.hourlyPrice}</li>
      <li>Engine Size: {car.engineSize}</li>
      <li>Engine Sound: {car.engineSound}</li>
      </ul>
      <button>Add to Favourites</button>
    </div>
  );
};

///THIS IS THE ENTIRE MODULE WHICH DISPLAYS ALL THE CARDS. className="car-list" IS DEFINED IN THE CSS AND IS SET TO FLEX
//WE NEED TO MODIFY THIS TO DISPLAY ONLY 20 CARS AND 'PREV' 'NEXT' BUTTONS
const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};


///THIS DEFINES THE SEARCH. ALSO HANDLERS TO AVOID ANY ERRORS RESULTING FROM CASE SENSITIVITY
const CarSearch = ({ data }) => {
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [filteredCars, setFilteredCars] = useState(data);

  const handleSearch = () => {
    const filtered = data.filter(car => {
      const typeMatch = car.type.toLowerCase().includes(type.toLowerCase());
      const locationMatch = car.location.toLowerCase().includes(location.toLowerCase());
      return typeMatch && locationMatch;
    });
    setFilteredCars(filtered);
  };



  ///THIS IS THE SEARCH FORM. WE SHOULD CHANGE type="text" TO LIST POPULATED BY THE AVAILABLE OPTIONS
  //ALSO SHOULD ADD 'DATE SEARCH'
  return (
    <div>
      <h1 className='heading'>Search for Cars</h1>
      <div>
        <input
          type="text"
          placeholder="Enter car type"
          value={type}
          onChange={e => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="car-list">
        {filteredCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarSearch;
