import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

import Header from './components/Header';
import ProjectGallery from './pages/ProjectGallery'; //- NOT USING THIS BUT IT#S STILL IN NAV BAR 
//import Contact from './pages/Contact'; 

import carsData from './assets/car_data.json';
import CarSearch from './components/CarSearch';
import NavBar from './components/NavBar/NavBar.jsx';
import "./components/NavBar/NavBar.css";
import Home from "./pages/home/Home"
import AboutUs from "./pages/about-us/about-us.jsx";
import  BrowseCars from './pages/BrowseCars';
import Favourites from './pages/Favourites';
import Contact from "./pages/contact/Contact";
import ViewAll from "./pages/view-all/view-all";
import MySavedCars from "./pages/my-saved-cars/my-saved-cars";

function App() {
  return (
  <Router>
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path= "/browsecars" element={<BrowseCars/>}/>
        <Route path= "/favourites" element={<Favourites/>}/>
        <Route path="/view-all" element={<ViewAll />} />
        <Route path="/my-saved-cars" element={<MySavedCars />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <CarSearch data={carsData} type="Hatchback" location="London" />
    </div>
 </Router>
);
  }


//function App() {
  // return (
  //   <Router>
  //     <div className="sticky-top">  {/* This div is created and routered/ rendered from the Header components folder to display the Header here */}
  //       <Header />
  //     </div>
  //     <div>
  //     <Routes>
        {/* These placehopders can be swapped out Don't need portfolio / Projec*/}
        // <Route path="/" element={<Home />} />
        {/* <Route path="/index" element={<Home />} /> */}
        // <Route path="/portfolio" element={<ProjectGallery />} />
        // <Route path="/contact" element={<Contact />} />
        // <Route path="/view-all" element={<ViewAll />} />
        // <Route path="/about-us" element={<AboutUs />} />
        // <Route path="/my-saved-cars" element={<MySavedCars />} />
//       </Routes>
//       <Footer />
//       </div>
//     </Router>
//   );
// >>>>>>> a26a0377e1ddaf1cc8987a871de19e987ce3d8f9
// }
    

    // <Router>
    //    <div>
    //      <Header />
    //     <Wrapper>
    //        <Routes>
            {/* These placehopders can be swapped out Don't need portfolio / Projec*/}
            //  <Route path="/" element={<Home/>} />
            //  <Route path="/index" element={<Home/>} />
            //  <Route path="/portfolio" element={<ProjectGallery/>} />
            //  <Route path="/contact" element={<Contact/>} />
           //n</Routes>
          {/* Render CarSearch component here. But should probably be moved to Home page */}
        //   <CarSearch data={carsData} type="Hatchback" location="London" />
        // </Wrapper>

    
//         <Footer />
//       </div>
//     </Router>
//   );
// }

export default App;
