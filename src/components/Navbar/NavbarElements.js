import { motion } from 'framer-motion';
import { Link as LinkR } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import "./Navbar.scss";

// Import images
import RachoHelicopterGif from '../../gifs/RachoHelicopterGif.gif';
import GameIconOff from '../../images/GameIcon-Off.png';
import GameIconOn from '../../images/GameIcon-On.png';
import Chest1 from '../../images/chest1.png';
import Chest2 from '../../images/chest2.png';
import Plane1 from '../../images/plane1.png';
import Plane2 from '../../images/plane2.png';
import Plane3 from '../../images/plane3.png';
import Plane4 from '../../images/plane4.png';
import Rainbow from '../../images/rainbow.png';

// Styled components
export const Cloud = styled.div`
  min-width: 350px;
  height: 160px;
  position: fixed;
  top: 2%;
  left: 0%;
  background: linear-gradient(to top, #f2f9fe 5%, #d6f0fd 100%);
  border-radius: 100px;
  transform: scale(0.3);
  overflow: visible;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 15px 5px rgba(128, 0, 128, 0.7); /* Bright purple glow */
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    background: #f2f9fe;
    z-index: -1;

    &:hover {
      box-shadow: 0 0 15px 5px rgba(128, 0, 128, 0.7); /* Bright purple glow */
    }
  }

  &::after {
    width: 100px;
    height: 100px;
    top: -50px;
    left: 50px;
    border-radius: 100px;
  }

  &::before {
    width: 180px;
    height: 180px;
    top: -90px;
    right: 50px;
    border-radius: 200px;
  }

  @media screen and (max-width: 768px) {
    transform: scale(0.3);
    left: -27%;
    top: -2%;
  }
`;

export const HomeText = styled.div`
  position: absolute;
  top: 60%; /* Adjust based on your layout */
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FFF;
  font-size: 1rem; /* Adjust as needed */
  opacity: 0;
  z-index: 99999999999;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none; /* Ensures the text doesn't interfere with clicking */
`;

export const Square = styled(motion.div)`
  width: 10px;
  height: 10px;
  background-color: #000;
`;

export const DuplicateCornerSquare = styled(motion.div)`
  width: 10px;
  height: 10px;
  z-index: 9999;
  background-color: #DA1A35; // Or any color you choose for the duplicate squares
  position: absolute; // Ensure these squares overlay the originals
`;

export const MenuWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  position: fixed;
  top: 4.5%;
  right: 3%;
  width: 60px;
  height: 60px;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  background: #fff;
  border-radius: 5px;
  padding: 5px;
  z-index: 9999999999;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  &:hover ${Square} { // When hovered, expand squares
    width: 12px; // New width
    height: 12px; // New height
    border-radius: 1px;
  }

  @media screen and (max-width: 768px) {
    top: 5%;
  }
`;

export const BentoGrid = styled(motion.div)`
  position: fixed;
  width: 50px;
  height: 50px;
  background-color: red; // Default background color
  border-radius: 50%; // Circle shape
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Line = styled(motion.span)`
  background-color: #000;
  height: 2px;
  width: 30px; // Adjust as needed
  margin: 4px;
`;

export const Circle = styled(motion.div)`
  position: absolute;
  top: 50%; // Center vertically
  left: 50%; // Center horizontally
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%); // Adjust to center based on its size
  width: 90%;
  height: 90%;
  border-radius: 50%;
  color: #000;
  border: 2px solid #000; // Start with a transparent border
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 999999999;
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100vw;
  padding: 0 20px;
`;

const gustAnimation = keyframes`
  0% { opacity: 0; transform: translateX(0); }
  50% { opacity: 1; transform: translateX(50px); }
  100% { opacity: 0; transform: translateX(100px); }
`;

const cloudAnimation = keyframes`
  0% { opacity: 0; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-10px); }
  100% { opacity: 0; transform: translateY(-20px); }
`;

export const NavLogo = styled(LinkR)`
  height: 100px;
  width: 100px;
  color: #FFF;
  text-shadow: 2px 2px #000;
  justify-self: flex-start;
  text-align: center;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  position: fixed;
  align-items: center;
  top: -1%;
  left: 1%;
  background-image: url(${RachoHelicopterGif});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  &:hover {
    filter: drop-shadow(0 0 15px rgba(128, 0, 128, 0.7));
  }

  @media screen and (max-width: 768px) {
    top: -1%;
  }
`;

export const Gust = styled.div`
  position: absolute;
  width: 100px;
  height: 5px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  animation: ${gustAnimation} 2s infinite;
`;

export const MiniCloud = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  animation: ${cloudAnimation} 3s infinite;
`;

export const CloudContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  pointer-events: none;
`;

export const NavLogo2 = styled(motion.div)`
  height: 100px;
  width: 100px;
  color: #FFF;
  text-shadow: 2px 2px #000;
  justify-self: flex-start;
  text-align: center;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  position: fixed;
  align-items: center;

  top: -1%;
  background-image: url(${GameIconOff});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: ${({ isOpen2 }) => isOpen2 ? `url(${GameIconOn})` : `url(${GameIconOff})`};

  &:hover {
    background-image: url(${GameIconOn});
  }

  @media screen and (max-width: 768px) {
    top: -1%;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 4%;
    right: 3%;
    background: #fff;
    font-size: 2.8rem;
    cursor: pointer;
    border-radius: 5px;
    color: #000;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  position: fixed;
  left: 50%;
  top: -4%;
  display: ${({ isArcade }) => (isArcade ? 'none' : 'flex')};
  right: 0;
  transform: translate(-50%, 0%) scale(0.6);

  @media screen and (max-width: 1350px) {
    transform: scale(0.6) translate(-50%, 0%);
  }
  @media screen and (max-width: 1150px) {
    transform: scale(0.5) translate(-50%, 0%);
  }
  @media screen and (max-width: 950px) {
    transform: scale(0.45) translate(-50%, 0%);
  }
  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const NavItem1 = styled.div`
  transform: scale(0.7);
  height: 100%;
  width: 100%;
  margin-right: 10px;
  margin-left: 10px;
  background-image: url(${Plane1});
  background-position: center;
  background-size: cover;
  white-space: nowrap;
  padding: 10px 80px;
  color: #FFF444;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    animation: pHover 1s linear infinite;
  }
`;

export const NavItem2 = styled.div`
  transform: scale(0.7);
  height: 100%;
  width: 100%;
  margin-right: 10px;
  margin-left: 10px;
  background-image: url(${Plane2});
  background-position: center;
  background-size: cover;
  white-space: nowrap;
  padding: 10px 40px;
  color: #FFF444;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    animation: pHover 1s linear infinite;
  }
`;

export const NavItem3 = styled.div`
  transform: scale(0.7);
  height: 100%;
  width: 100%;
  margin-right: 10px;
  margin-left: 10px;
  background-image: url(${Plane3});
  background-position: center;
  background-size: cover;
  white-space: nowrap;
  padding: 10px 40px;
  color: #FFF444;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    animation: pHover 1s linear infinite;
  }
`;

export const NavItem4 = styled.div`
  transform: scale(0.7);
  height: 100%;
  width: 100%;
  margin-right: 10px;
  margin-left: 10px;
  background-image: url(${Plane4});
  background-position: center;
  background-size: cover;
  white-space: nowrap;
  padding: 10px 40px;
  color: #FFF444;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    animation: pHover 1s linear infinite;
  }
`;

export const NavLinks = styled(LinkR)`
  background-color: #000;
  display: flex;
  align-items: center;
  border-radius: 30px;
  text-decoration: none;
  min-width: 110%;
  text-align: center;
  justify-content: center;
  padding: 10px 0 0px 10px;
  cursor: pointer;
  transform: translateY(12px) scale(0.75);
  color: #FFF;
  text-shadow: 4px 4px #000;
  font-size: 3em;
  margin-top: 40px;

  &.active {
    text-shadow: 5px 5px #FFF;
  }

  @media screen and (max-width: 1350px) {
    font-size: 2.25rem;
  }

  @media screen and (max-width: 850px) {
    font-size: 1.5rem;
  }
`;

export const Cloud2 = styled.div`
  min-width: 350px;
  height: 160px;
  display: flex;
  align-items: center;
  position: relative;
  right: 1%;
  margin-top: 4%;
  background: linear-gradient(to top, #f2f9fe 5%, #d6f0fd 100%);
  border-radius: 100px;
  transform: scale(0.25);
  overflow: visible;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 15px 5px #FFD700; /* Glowing effect */
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    background: #f2f9fe;
    z-index: -1;

    &:hover {
      box-shadow: 0 0 15px 5px #FFD700; /* Glowing effect */
    }
  }

  &::after {
    width: 100px;
    height: 100px;
    top: -50px;
    left: 50px;
    border-radius: 100px;
  }

  &::before {
    width: 180px;
    height: 180px;
    top: -90px;
    right: 50px;
    border-radius: 200px;
  }

  @media screen and (max-width: 768px) {
    transform: scale(0.3);
    left: -27%;
    top: -2%;
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  right: 5%;
  top: 5%; // Adjust based on your layout

  @media screen and (max-width: 990px) {
    transform: scale(0.70) translateX(-120px) translateY(20px);
  }
  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  min-height: 150px;
  min-width: 200px;
  color: #FFD700;
  text-shadow: 2px 2px #000;
  white-space: nowrap;
  position: fixed;
  outline: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  background-image: url(${Chest1});
  top: -10px;
  margin-left: 80px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;

  &:hover {
    background-image: url(${Chest2});
  }
`;

export const NavBtnBG = styled.div`
  width: 300px;
  height: 300px;
  position: fixed;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  background-image: url(${Rainbow});
  background-position: center;
  background-size: cover;
`;

//Helicopter Cloud Styles

const color1 = '#0e83cd';
const color2 = 'white';
const animationTime = '4s';

const darken = (color, amount) => {
  let usePound = false;

  if (color[0] === "#") {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);
  let r = (num >> 16) - amount;
  let b = ((num >> 8) & 0x00FF) - amount;
  let g = (num & 0x0000FF) - amount;

  r = Math.max(Math.min(255, r), 0);
  b = Math.max(Math.min(255, 0));
  g = Math.max(Math.min(255, 0));

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
};

const shadow = keyframes`
  0% { transform: scale(1) translateX(-50%); }
  50% { transform: scale(0.5) translateX(-50%); }
  100% { transform: scale(1) translateX(-50%); }
`;

const cloud = keyframes`
  0% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, -20px); }
  100% { transform: translate(-50%, 0); }
`;

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    background: ${color1};
    color: ${color2};
  }
`;

export const CloudHeli = styled.div`
  position: fixed;
  align-items: center;
  right: 1%;
  margin-top: 0%;
  width: 105px;
  height: 30px;
  top: 2%;
  left: 0%;

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 80%;
    height: 10px;
    left: 50%;
    bottom: -80px;
    border-radius: 100%;
    background: ${darken(color1, 1.5)};
    animation: ${shadow} ${animationTime} infinite;
  }
  
  .puffs {
    animation: ${cloud} ${animationTime} infinite;
    top: 0;
    border-radius: 50%;
    left: 0;
    background: ${color2};
    position: absolute;
    width: 30px;
    height: 30px;
    box-shadow: 
      25px 0 0 0 ${color2}, 
      50px 0 0 0 ${color2}, 
      75px 0 0 0 ${color2},
      12.5px -7.5px 0 0 ${darken(color2, 40)}, 
      37.5px -7.5px 0 0 ${darken(color2, 40)}, 
      62.5px -7.5px 0 0 ${darken(color2, 40)},
      12.5px 7.5px 0 0 ${darken(color2, 40)}, 
      37.5px 7.5px 0 0 ${darken(color2, 40)}, 
      62.5px 7.5px 0 0 ${darken(color2, 40)},
      25px -15px 0 0 ${darken(color2, 80)}, 
      50px -15px 0 0 ${darken(color2, 80)},
      25px 15px 0 0 ${darken(color2, 80)}, 
      50px 15px 0 0 ${darken(color2, 80)};
  }
`;
