import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

import Header from './components/Header';


import NavBar from './components/NavBar/NavBar.jsx';
import Home from "./pages/home/Home"
import AboutUs from "./pages/about-us/about-us.jsx";
import ViewAll from "./pages/view-all/view-all";
import MySavedCars from "./pages/my-saved-cars/my-saved-cars";
import Contact from "./pages/contact/Contact";

function App() {
  return (
  <Router>
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/view-all" element={<ViewAll />} />
        <Route path="/my-saved-cars" element={<MySavedCars />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
 </Router>
);
  }


export default App;
