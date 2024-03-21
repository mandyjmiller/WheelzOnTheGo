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

function Home() {

  return (
    <div className="Home">
      <div>
        <Hero backgroundImage={HeroImage}>
          <h1>Connecting you with your Car</h1>
          <h2>Drive something beautiful today</h2>

          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col size="md-12">
                <p>
                  Connecting you with the owners of amazing cars to drive by the
                  hour
                </p>
              </Col>
            </Row>
          </Container>
        </Hero>
      </div>

      <div className="HomeCardWrapper">
        <CarSearch data={carsData} />
      </div>
    </div>
  );
}

export default Home;
