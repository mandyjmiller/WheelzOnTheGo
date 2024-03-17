import React from "react";
import Hero from "../../components/Logo";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Footer from "../../components/Footer";
import "./home.css";
import carsData from "../../assets/car_data";
import CarSearch from "../../components/CarSearch";


function Home() {
  const fewCards = carsData.slice(0,4);
  return (
    <div>
     
      <div className="HomeCardWrapper">

      <CarSearch data={fewCards} type="Hatchback" location="London" />
  
      </div>
    </div>
  );
}
 
export default Home;

// {carData.map((card, index) => (
//   <CarCard key={index} card={card} />
// ))}

