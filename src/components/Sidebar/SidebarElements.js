import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
export const SidebarContainer = styled(motion.aside)`
    position: fixed;
    z-index: 99999999999999999999999;
    width: 40vw;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    justify-content: center;
    align-items: center;
    top: 0;
    //left: 0;
    transition: 0.3s ease-in-out;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    background-color: #FFFFFF;
background-image: linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%);

    opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
    right: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    @media screen and (max-width: 768px) {
        position: fixed;
        z-index: 99999999999999999999999;
        width: 100%;
        height: 100%;
        background: #0d0d0d;
        display: grid;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        transition: 0.3s ease-in-out;
        background-color: #4158D0;
        background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
        background-color: #FFFFFF;
background-image: linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%);


        opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
        top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
    }
`;

// Optional: If you want to apply additional styled-components styling
export const Logo = styled(motion.img)`
  /* Add your styles here */
  position: absolute;
  width: 25vw;
  height: auto;
  left: 35%;
top: 10%;


@media screen and (max-width: 768px) {

    position: absolute;
    left: unset;
    top: 13%;
    width: unset;
    height: unset;


    }
  //border-radius: 10px; /* Example style */
`;
export const CloseIcon = styled(FaTimes) `
    color: #fff;
`;

export const Icon = styled.div`
    position: fixed;
    display: flex;
    top: 1.2rem;
    right: 300px;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
    margin: auto;
    display: grid;
    justify-content: center;
  align-items: center;
margin-top: 0%;
margin-left: 50%;
transform: translateX(-50%);
width: 80vw;
height: 100vh;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    //row-gap: 10px;
    margin-top: 0px;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;
export const TextSpan = styled.span`
background-color: #000;
border-radius: 30px;
color: #fff;

`

export const ApplicationGrid = styled.div`

display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 20px;
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);


  @media screen and (max-width: 768px) {
    display: grid;
    top: unset;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 20px;
  position: fixed;
bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
    }
`;

export const FeaturedApplication = styled(motion.div)`
  grid-column: span 3;
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: cover;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 14px 28px, rgba(0, 0, 0, 0.66) 0px 10px 10px;
    transform: scale(1.1);
  }
  
  @media screen and (max-width: 768px) {
    grid-column: span 3;
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: cover;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 14px 28px, rgba(0, 0, 0, 0.66) 0px 10px 10px;
    transform: scale(1.1);
  }
    }
`;

export const ApplicationIcon = styled(motion(LinkR))`
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: contain; /* Ensure the image fits without altering aspect ratio */
  background-repeat: no-repeat; /* Prevent image from repeating */
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 14px 28px, rgba(0, 0, 0, 0.66) 0px 10px 10px;
    transform: scale(1.1);
  }
`;


export const SidebarItem = styled(motion.div)`
    
    height: 100%;
    width: 100%;
    white-space: nowrap;
 
    color: #FFF444;

    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    padding: 15px 0px;
    &:hover {
        transform: scale(1.05);
    }
     
`;
export const SidebarItem1 = styled.div`
    
    height: 100%;
    width: 100%;
    background-image: url('./images/w1.jpg');
    background-position: center;
    background-size: cover;
    white-space: nowrap;
    padding: 10px 40px;
    color: #FFF444;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    transform: scale(2);
    padding: 15px 0px;
    &:hover {
        transform: scale(2.1);
    }
     
`;
export const SidebarItem2 = styled.div`
    
    height: 100%;
    width: 100%;
    background-image: url('./images/w2.jpg');
    background-position: center;
    background-size: cover;
    white-space: nowrap;
    padding: 10px 40px;
    color: #FFF444;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: 23px 0px;
    transform: scale(2.25);
    &:hover {
        transform: scale(2.35);
    }
     
`;

export const SidebarItem3 = styled.div`
    
    height: 100%;
    width: 100%;
    background-image: url('./images/w5.jpg');
    background-position: center;
    background-size: cover;
    white-space: nowrap;
    padding: 10px 40px;
    color: #FFF444;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: 30px 0px;
    transform: scale(2.5);
    &:hover {
        transform: scale(2.6);
    }
     
`;
export const SidebarItem4 = styled.div`
    
    height: 100%;
    width: 100%;
    background-image: url('./images/w4.jpg');
    background-position: center;
    background-size: cover;
    white-space: nowrap;
    padding: 10px 40px;
    color: #FFF444;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: 15px 0px;
    margin-top: 50px;
    transform: scale(2.5);
    &:hover {
        transform: scale(2.6);
    }
     
`;
export const SidebarLink = styled(motion.text)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #FFF444;
    cursor: pointer;
    text-shadow: 1px 1px #FF0000;
margin-top: 75px;
    

    &:hover {
        color: #660099;
        transition: 0.2 ease-in-out;
    }
`;

export const SideBtnWrap = styled(motion.div)`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
`;

export const SidebarRoute = styled(LinkS)`
    
    
    white-space: nowrap;
    padding: 45px 64px;
    
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background-image: url('./images/chest1.png');
    background-position: center;
    background-size: cover;
    transform: scale(1.1);
    &:hover {
       
        background-image: url('./images/chest2.png');
      
    }
`;



//Sidebar Footer
export const SidebarIconContainer = styled.div`
    position: absolute;
    width: 500px;
    height: 120px;
    display: grid;
    align-items: center;
    left: 50%;
    bottom: 10%;
    transform: translateX(-50%) scale(0.9);
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;


    @media screen and (max-width: 768px) {
        transform: translateX(-50%) scale(0.7);
        bottom: 5%;
    }
`;

export const SidebarIconBg = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    top: 50px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.05);
    }
`;

export const SidebarIcon = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    left: 50%;
    transform: translateX(-50%);
    top: -30px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
`;

export const SidebarLogo = styled.p`
    top: 100%;
    position: relative;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.75rem;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    color: #FFF444;
    text-shadow: 1px 1px #FF0000;
`;

export const SidebarIconText = styled.p`
    top: -25%;
    cursor: pointer;
    align-items: center;
    position: relative;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 150%;
    color: #FFFFFF;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: '#FFF444';
    }
`;
