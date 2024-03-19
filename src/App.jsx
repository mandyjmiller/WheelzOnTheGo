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
import About from './pages/About';
import Contact from './pages/Contact';
import  BrowseCars from './pages/BrowseCars';
import Favourites from './pages/Favourites';
import Home from './pages/Home';

function App() {
  return (
  <Router>
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path= "/about" element={<About/>}/>
        <Route path= "/browsecars" element={<BrowseCars/>}/>
        <Route path= "/contact" element={<Contact/>}/>
        <Route path= "/favourites" element={<Favourites/>}/>
        <Route path= "/home" element={<Home/>}/>
      </Routes>
      <CarSearch data={carsData} type="Hatchback" location="London" />
    </div>
 </Router>
);
}
    

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
           </Routes>
          {/* Render CarSearch component here. But should probably be moved to Home page */}
        //   <CarSearch data={carsData} type="Hatchback" location="London" />
        // </Wrapper>

    
//         <Footer />
//       </div>
//     </Router>
//   );
// }





export default App;
