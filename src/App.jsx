import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

import Header from './components/Header';
import Home from './pages/Home';
import ProjectGallery from './pages/ProjectGallery'; //- NOT USING THIS BUT IT#S STILL IN NAV BAR 
import Contact from './pages/Contact';

import carsData from './assets/car_data.json';
import CarSearch from './components/CarSearch';



function App() {
  return (

    

    <Router>
      <div>
        <Header />
        <Wrapper>
          <Routes>
            {/* These placehopders can be swapped out Don't need portfolio / Projec*/}
            <Route path="/" element={<Home/>} />
            <Route path="/index" element={<Home/>} />
            <Route path="/portfolio" element={<ProjectGallery/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          {/* Render CarSearch component here. But should probably be moved to Home page */}
          <CarSearch data={carsData} type="Hatchback" location="London" />
        </Wrapper>

    
        <Footer />
      </div>
    </Router>
  );
}





export default App;
