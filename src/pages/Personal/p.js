import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';

const Ppp = () => {
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
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
   
    </>
  );
};

export default Ppp;
