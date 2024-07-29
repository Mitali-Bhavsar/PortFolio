import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from './Home';
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects"
import Skills from './Skills';
import DashBoard from './DashBoard';
import Experince from './Experince';

const Routing = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<DashBoard />}>
              <Route path="/" element={<Home /> } />
              <Route path="/about" element={<About /> } />
              <Route path="/experience" element={<Experince /> } />
              <Route path="/skills" element={<Skills /> } />
              <Route path="/projects" element={<Projects /> } />
              <Route path="/contact" element={<Contact /> } />
           </Route>
        </Routes>
    </div>
  )
}

export default Routing
