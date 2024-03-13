import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
//Required Components from Challenge README
// App - top Level (this one)
import Header from './components/Header';
// import Project from './components/Project'; - to include in ProjectGallery
import Home from './pages/Home';
import ProjectGallery from './pages/ProjectGallery'; //- will include 6 instances of PROJECT conmponents
import Contact from './pages/Contact';





function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/index" element={<Home/>} />
            <Route path="/portfolio" element={<ProjectGallery/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}


//VERSION OF THE ABOVE WITH MY PORTFOLIO HEADINGS
// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//           <Routes>
//             <Route path="/" element={<Home/>} />
//             <Route path="/about" element={<ProjectGallery/>} />
//             <Route path="/search" element={<Contact/>} />
//           </Routes>
//         </Wrapper>
//         <Footer />
//       </div>
//     </Router>
//   );
// }




export default App;
