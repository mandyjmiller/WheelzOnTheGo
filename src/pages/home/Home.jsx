import React from "react";
import Hero from "../../components/Logo";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Logo from "../../components/Logo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./home.css" 

function Home() {
  return (
    <div>
      <div className="TopBar">
      <Logo />
        <Header />
        
      </div>
      <Container style={{ marginTop: 30 }}>{/* <Footer/> */}</Container>
    </div>
  );
}

export default Home;
