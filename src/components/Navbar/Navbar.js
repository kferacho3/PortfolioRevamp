import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import Chest1 from '../../images/chest1.png';
import Chest2 from '../../images/chest2.png';
import "./Navbar.scss";
import {
  Cloud2,
  MenuWrapper,
  Nav,
  NavBtnLink,
  NavItem1,
  NavItem2,
  NavItem3,
  NavItem4,
  NavLinks,
  NavLogo,
  NavLogo2,
  NavMenu,
  NavbarContainer,
  Square
} from './NavbarElements';

import GameAppMenu from '../GameMenu/GameMenu';

const Navbar = ({ toggle, gameIconState, isOpen2, toggle2, setIsOpen2, setGameState, isArcade }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Local state to control menu open/close
  const navigate = useNavigate();

  // Function to navigate
  const handleNavigate = (path) => {
    navigate(path);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  // Variants for the squares in the grid
  const squareVariants = (index) => {
    const isCornerSquare = [0, 2, 6, 8].includes(index);
    const isCenterSquare = index === 4;
    const isEdgeSquare = [1, 3, 5, 7].includes(index);
    if (isCenterSquare) {
      return {
        open: { scale: 1, backgroundColor: "#DA1A35" },
        closed: { scale: 1, backgroundColor: "#000" },
      };
    } else if (isCornerSquare) {
      const moveX = index % 3 === 0 ? 10 : -10;
      const moveY = index < 3 ? 10 : -10;
      return {
        open: { x: moveX, y: moveY, opacity: 1, backgroundColor: "#DA1A35" },
        closed: { x: 0, y: 0, opacity: 1, backgroundColor: "#000" },
      };
    } else if (isEdgeSquare) {
      // Movement for edge squares
      let targetX = 0;
      let targetY = 0;
      // Assume each square moves to its adjacent corner, e.g., top edge to top-left or top-right corner
      switch (index) {
        case 1: // Top edge to top-right
          targetX = 18; // Move right
          targetY = 0; // Move up
          break;
        case 3: // Left edge to top-left
          targetX = 0; // Move left
          targetY = -18; // Move up
          break;
        case 5: // Right edge to bottom-right
          targetX = 0; // Move right
          targetY = 18; // Move down
          break;
        case 7: // Bottom edge to bottom-left
          targetX = -18; // Move left
          targetY = 0; // Move down
          break;
      }
      return {
        open: { x: targetX, y: targetY, rotate: 90, scale: 1.1, backgroundColor: "#DA1A35" },
        closed: { x: 0, y: 0, rotate: 0, scale: 1, backgroundColor: "#000" },
      };
    }
  };

  const changeNav = () => {
    if (window.scrollY >= 10) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the local isOpen state
    toggle(); // Call the prop function if needed for additional actions
  };

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2); // Toggle the local isOpen state
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            {!gameIconState && (
              <NavLogo
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                to="/"
                onClick={() => console.log("Home clicked")}
                className="airplane1"
              />
            )}

            {gameIconState && (
              <NavLogo2
                isOpen2={isOpen2}
                initial={{ left: '1%' }}
                animate={{ left: isOpen2 ? '50%' : '1%' }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={toggle2}
                className="airplane1"
              />
            )}

            <NavMenu isArcade={isArcade}>
              {/* Wrap NavItem1 in a clickable element and use handleNavigate */}
              <NavItem1 className='airplane2' onClick={() => handleNavigate('/about')}>
                <NavLinks to='/about' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>about()</NavLinks>
              </NavItem1>
              {/* Repeat for other NavItems */}
              <NavItem2 className='airplane3' onClick={() => handleNavigate('/services')}>
                <NavLinks to='/services' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>services()</NavLinks>
              </NavItem2>
              <NavItem3 className='airplane4' onClick={() => handleNavigate('/projects')}>
                <NavLinks to='/projects' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>myProjects()</NavLinks>
              </NavItem3>
              <NavItem4 className='airplane5' onClick={() => handleNavigate('/connect')}>
                <NavLinks to='/connect' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>connect()</NavLinks>
              </NavItem4>
              <Cloud2 onClick={() => handleNavigate('/fun')} onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} className='chest' style={{ zIndex: "-99" }}>
                {/* You might want to handle this differently since it's a special case */}
                <NavLinks to='/fun' style={{ zIndex: "999" }} smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>fun()</NavLinks>
                <NavBtnLink to='/fun' onClick={() => handleNavigate('/fun')} style={{
                  position: "fixed",
                  zIndex: '99',
                  backgroundImage: isHovered2 ? `url(${Chest2})` : `url(${Chest1})`,
                  boxShadow: isHovered2 ? '0 0 15px 5px #FFD700' : 'none'
                }}></NavBtnLink>
              </Cloud2>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
      {isOpen2 && <GameAppMenu setGameState={setGameState} isOpen2={isOpen2} setIsOpen2={setIsOpen2} />}
      <MenuWrapper onClick={handleToggle}>
        {[...Array(9)].map((_, index) => (
          <Square
            key={index}
            custom={index}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={squareVariants(index)}
          />
        ))}
      </MenuWrapper>
    </>
  );
};

export default Navbar;
