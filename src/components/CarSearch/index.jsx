import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import "./style.css";
import engineSound from "../../assets/sounds/V6.mp3";


///THIS IS THE INDIVIDUAL CAR DISPLAY CARD
const CarCard = ({ car }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  // Function to add the car to favourites :
  const [isFavorite, setIsFavorite] = useState(false);
  const [audio] = useState(new Audio(engineSound)); //  audio source is set to the 'engineSound'

  useEffect(() => {
    // Check if the car is already in favorites when the component mounts
    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = existingFavorites.some(favorite => favorite.id === car.id);
    setIsFavorite(isAlreadyFavorite);
  }, [car.id]);

  const playEngineSound = () => {
    audio.play(); // Play the engine sound when the button is clicked
  };
  
 
  const addToFavorites = () => {
    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = existingFavorites.some(favorite => favorite.id === car.id);

    if (!isAlreadyFavorite) {
      const updatedFavorites = [...existingFavorites, car];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(true);
      console.log('Added to favorites:', car);
    } else {
      const updatedFavorites = existingFavorites.filter(favorite => favorite.id !== car.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      console.log('Car is already in favorites:', car);
    }

    

  };
  return (
    <div className="car-card">
      <img src={car.image1} alt={car.car_brand} />
      <h2>{car.car_brand}</h2>
      <ul style={{ listStyleType: "none" }}>
        <li>Type: {car.type}</li>
        <li>Location: {car.location}</li>
        <li>Hourly Price: £{car.hourlyPrice}</li>
        <li>Engine Size: {car.engineSize}</li>
        <li>Engine Sound: {car.engineSound}</li>
      </ul>
      <button onClick={addToFavorites}>
        {isFavorite ? 'Saved \u2665' : 'Add to Favorites \u2764'}
      </button>
      <button onClick={playEngineSound}>&#128362;</button> {/* Button to play engine sound */}
    </div>
  );
};

///THIS IS THE ENTIRE MODULE WHICH DISPLAYS ALL THE CARDS. className="car-list" IS DEFINED IN THE CSS AND IS SET TO FLEX
//WE NEED TO MODIFY THIS TO DISPLAY ONLY 20 CARS AND 'PREV' 'NEXT' BUTTONS
//THIS RETURNS ALL CARS
// const CarList = ({ cars }) => {
//   return (
//     <div className="car-list">
//       <Slider></Slider>
//       {cars.map(car => (
//         <CarCard key={car.id} car={car} />
//       ))}
//     </div>
//   );
// };
//THIS RETURNS 20 per page CARS. ADDED CONSTS TO DISPLAY NUMBER OF RESULTS AND PER PAGE
const CarList = ({ cars }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 20;

  const indexOfLastCar = (currentPage + 1) * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
  const totalCars = cars.length;

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const currentRangeStart = indexOfFirstCar + 1;
  const currentRangeEnd = Math.min(indexOfLastCar, totalCars);

  return (
    <div>
      
      <div className="pagination">
        <span>
          Showing {currentRangeStart}-{currentRangeEnd} of {totalCars} results
        </span>

        <button onClick={prevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={nextPage} disabled={indexOfLastCar >= totalCars}>
          Next
        </button>
      </div>
      <div className="car-list">
        <Slider></Slider>
        {currentCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      
    </div>
  );
};

///THIS DEFINES THE SEARCH. ALSO HANDLERS TO AVOID ANY ERRORS RESULTING FROM CASE SENSITIVITY
const CarSearch = ({ data }) => {
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [filteredCars, setFilteredCars] = useState(data);

  const handleSearch = () => {
    const filtered = data.filter((car) => {
      const typeMatch = car.type.toLowerCase().includes(type.toLowerCase());
      const locationMatch = car.location
        .toLowerCase()
        .includes(location.toLowerCase());
      return typeMatch && locationMatch;
    });
    setFilteredCars(filtered);
  };

  ///THIS IS THE SEARCH FORM. WE SHOULD CHANGE type="text" TO LIST POPULATED BY THE AVAILABLE OPTIONS
  //ALSO SHOULD ADD 'DATE SEARCH'
  return (
    <div>
      <h1 className="heading">Search for Cars</h1>
      <div>
        <input
          type="text"
          placeholder="Enter car type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="car-list">
        {/* {filteredCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))} */}
        <CarList cars={filteredCars} />
      </div>
    </div>
  );
};

export default CarSearch;
