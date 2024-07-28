import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Sidebar from './components/Sidebar';
import Home from './pages';
import Aaa from './pages/About/a';
import Ccc from './pages/Connect/c';
import Fff from './pages/Fun/f';
import Day5 from './pages/Personal/Music';
import Personal from './pages/Personal/Personal';
import Personal2D from './pages/Personal/Personal2D/Personal2D';
import Sss from './pages/Services/s';
import "./style.scss";
const Section = styled.section`
  overflow-x: hidden;
`;

export function App() {
  const location = useLocation();
  const [isArcade, setIsArcade] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [is3D, setIs3D] = useState(true); // Set the initial value to true for 3D rendering

  // Function to toggle between 3D and 2D rendering
  const toggle3D = () => {
    setIs3D(!is3D);
  };
  return (
    <Section>
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aaa />} />

            <Route path="/museum" element={ <>     <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
   <Personal setIs3D={setIs3D} is3D={is3D} /></>} />
       
     
        <Route path="/projects" element={<>     <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
   <Personal2D toggle3D={toggle3D} setIs3D={setIs3D} is3D={is3D} /></>} />
        
 





        
          <Route path="/music" element={<Day5 />} />
          <Route path="/services" element={<Sss />} />
          <Route path="/connect" element={<Ccc />} />
          <Route path="/fun" element={<Fff setIsArcade={setIsArcade} isArcade={isArcade} />} />
        </Routes>
      </AnimatePresence>
    </Section>
  );
}

export default App;
