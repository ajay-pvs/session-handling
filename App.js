
// import './App.css';
// import Crud from './form';
// function App() {
//   return (
//     <div className="App">
//        <Crud/>

//     </div>
//   );
// }

// export default App;

import React from 'react';
import {  Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';



function App() {
  return ( 
  
    <div>
        <Navbar />
        <Routes>
     
   

       <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
 
    
        
     
        </Routes>
    </div>
  
  );
};

export default App;

