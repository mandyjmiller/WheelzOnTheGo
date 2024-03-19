import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Home from "./pages/home/Home";
import ProjectGallery from "./pages/ProjectGallery"; //- NOT USING THIS BUT IT#S STILL IN NAV BAR
import Contact from "./pages/contact/Contact";

import carsData from "./assets/car_data";
import CarSearch from "./components/CarSearch";
import ViewAll from "./pages/view-all/view-all";
import AboutUs from "./pages/about us/about-us";
import Header from "./components/Header";
import MySavedCars from "./pages/my-saved-cars/my-saved-cars";

function App() {
  return (
    <Router>
      <div className="sticky-top">  {/* This div is created and routered/ rendered from the Header components folder to display the Header here */}
        <Header />
      </div>
      <div>
      <Routes>
        {/* These placehopders can be swapped out Don't need portfolio / Projec*/}
        <Route path="/" element={<Home />} />
        {/* <Route path="/index" element={<Home />} /> */}
        <Route path="/portfolio" element={<ProjectGallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/view-all" element={<ViewAll />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/my-saved-cars" element={<MySavedCars />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
