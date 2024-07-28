import { Stars } from "@react-three/drei";
import React, { useState } from "react";
import "./personal.scss";






export function Earth(props) {

  //const state = false;
  const [buttonPopup, setButtonPopup] = useState(false);







  return (
    <>
    
      {/* <ambientLight intensity={1} /> */}
     
    
  
      <pointLight color="#f6f3ea" position={[5, 5, 5]} intensity={.5} />
      <Stars
        radius={300}
        depth={60}
        count={40000}
        factor={7}
        saturation={40}
        fade={true}
        intensity={12.2}
      />

     
 
      
      

  
    </>
  );
}