import React, { useState, useEffect } from 'react';
import "./style.css";


const CarCard = ({ car }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const importedImage = await import(`./assets/images/cars/${car.image1}`);
        setImageSrc(importedImage.default);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImage();
  }, [car.image1]);

  return (
    <div className="car-card">
      {imageSrc && <img src={imageSrc} alt={car.car_brand} />}
      <h2>{car.car_brand}</h2>
      <p>Type: {car.type}</p>
      <p>Location: {car.location}</p>
      <p>Hourly Price: ${car.hourlyPrice}</p>
      <p>Engine Size: {car.engineSize}</p>
      <p>Engine Sound: {car.engineSound}</p>
    </div>
  );
};

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

// const CarSearch = ({ data, type, location }) => {
//   const filteredCars = data.filter(car => car.type === type && car.location === location);

//   return (
//     <div>
//       <h1>Available Cars</h1>
//       {filteredCars.length === 0 ? (
//         <p>No cars found matching the criteria.</p>
//       ) : (
//         <CarList cars={filteredCars} />
//       )}
//     </div>
//   );
// };

// export default CarSearch;


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

  return (
    <div>
      <h1>Search for Cars</h1>
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
