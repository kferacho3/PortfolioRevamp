import { motion } from 'framer-motion';
import styled from 'styled-components';

export const GameGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Start with 4 columns, minimum size of 150px */
  gap: 20px;
  justify-content: center;
  padding: 50px;
  margin-top: 10%;
  z-index: 999999999999999999; /* Adjusted z-index to a practical value */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); /* Switch to 3 columns when the window width is <= 768px */
  }
  @media (max-width: 768px) {
   // grid-template-columns: repeat(3, 1fr); /* Switch to 3 columns when the window width is <= 768px */
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);  /* Switch to 3 columns when the window width is <= 768px */
  }
`;





export const GameSquare = styled(motion.div)`
  //width: calc((100vw - 40px) / 4); /* Adjust 40px based on actual padding/gap */
  max-width: 150px; /* Maximum width */
  height: 150px; /* Adjust height accordingly */
 // border-radius: 30px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px; /* Ensure some space around squares */
  overflow: hidden;
  &:hover {
    transform: scale(1.1); // Scale up on hover
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); // Enhanced box shadow for "light up" effect
    // Optionally, change the background color to light up
    // background-color: #f0f0f0; // Example: Lighter background on hover
  }
/* Media query to adjust for smaller screens */
@media (max-width: 1200px) {
  height: 125px; /* Adjust for 3 columns */
  }
  @media (max-width: 768px) {
    height: 100px; /* Adjust for 3 columns */
  }
@media (max-width: 600px) {

height: 75px; /* Adjust for 3 columns */
}
  `;



export const GameImage = styled.div`
  width: 92.5vw;
  height: 92.5vh;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

export const GameText = styled.span`
  margin-top: 8px;
  color: white;
  font-size: 0.75rem; /* Adjust the font size as needed */
`;



export const GameAppContainer = styled.div`
  position: fixed; /* Change to fixed to cover the entire viewport */
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: all;
  overflow: auto;
  z-index: 99999999;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0, 0, 0, 0.6) 100%), 
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: -1; /* Ensure the background is behind content */
  }
`;

