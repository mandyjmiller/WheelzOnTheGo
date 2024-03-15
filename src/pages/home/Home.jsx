import React from "react";
import Hero from "../../components/Logo";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Logo from "../../components/Logo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./home.css";
import CarCard from "../../components/CarCard";
import carData from "../../carData";

function Home() {
  return (
    <div>
      <div className="TopBar">
        <Logo />
        <Header />
      </div>
      <div className="HomeCardWrapper">
      
      {carData.map((card, index) => (
        <CarCard key={index} card={card} />
      ))}
      </div>
    </div>
  );
}

export default Home;
