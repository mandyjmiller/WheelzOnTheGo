import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import wheelzLogo from '../assets/images/logo_1.png'




function Home() {
  return (
    <div>
      <Hero backgroundImage={wheelzLogo}>
        <h1>WheelzOnTheGo</h1>
        <h2>Connecting you with your car</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>WheelzOnTheGo</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>

            </p>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
