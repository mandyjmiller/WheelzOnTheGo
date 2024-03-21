import React from "react";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import "./home.css";
import carsData from "../../assets/car_data";
import CarSearch from "../../components/CarSearch";
import HeroImage from "../../assets/images/hero_car.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS


function Home() {

  return (
    <div className="Home">
      <Container>
        <Row>
          <Col size="md-12">
            <Hero backgroundImage={HeroImage}>
              <h1>Connecting you with your Car</h1>
              <h2>Drive something beautiful today</h2>
              <p>
                Connecting you with the owners of amazing cars to drive by the
                hour
              </p>
            </Hero>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div className="HomeCardWrapper">
              <CarSearch data={carsData} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>


  );
}

export default Home;
