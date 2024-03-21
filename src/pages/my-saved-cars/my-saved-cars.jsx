import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import { Link } from "react-router-dom";
import "./my-saved-cars.css";

const MySavedCars = () => {
  const [savedCars, setSavedCars] = useState([]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function capitalizeWords(str) {
    return str
      .replace(/_/g, " ")
      .replace(/\b\w/g, (match) => match.toUpperCase());
  }

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setSavedCars(favorites);
  }, []);

  return (
    <div className="Home">
      <Container>
        <Row>
          <Col size="md-12">
            <h1 className="fav-text">My Favourites</h1>
            <p>You have fine taste! Once you've decided which of these bad boys you want to take for a spin, click below to contact the owner and arrange your ride!</p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div className="FavCardWrapper">
              {savedCars.map((car, index) => (
                <div key={car.id} className="car-card">
                  <img src={car.image1} alt={car.car_brand} />
                  <h2>
                    {capitalizeWords(capitalizeFirstLetter(car.car_brand))}
                  </h2>
                  <ul style={{ listStyleType: "none" }}>
                    <li>Type: {car.type}</li>
                    <li>Location: {car.location}</li>
                    <li>Hourly Price: £{car.hourlyPrice}</li>
                    <li>Engine Size: {car.engineSize}</li>
                    <li>Engine Sound: {car.engineSound}</li>
                  </ul>
                  <Link to="/contact">
                    <button className="custom-button">
                      Contact Owner to Book!
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MySavedCars;
