import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import Header from "./components/Header";
import Home from "./pages/home/Home";
import ProjectGallery from "./pages/ProjectGallery"; //- NOT USING THIS BUT IT#S STILL IN NAV BAR
import Contact from "./pages/Contact";

import carsData from "./assets/car_data";
import CarSearch from "./components/CarSearch";
import ViewAll from "./pages/view-all/view-all";

function App() {
  return (
    <Router>
      <Routes>
        {/* These placehopders can be swapped out Don't need portfolio / Projec*/}
        <Route path="/" element={<Home />} />
        {/* <Route path="/index" element={<Home />} /> */}
        <Route path="/portfolio" element={<ProjectGallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/view-all" element={<ViewAll/>} />
      </Routes>
      {/* Render CarSearch component here. But should probably be moved to Home page */}
      
    </Router>
  );
}

export default App;
