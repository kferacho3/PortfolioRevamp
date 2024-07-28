import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Disclaimer from '../components/Disclaimer/Disclaimer';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar';
import { animationTwo } from '../components/animations/animations';
import Intro from './Intro/Intro';
import "./index.scss";
const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const imageVariants = {
  hidden: (direction) => ({
    x: direction === 'left' ? '-100vw' : '100vw',
    transition: { duration: 1 }
  }),
  visible: { x: 0, transition: { duration: 1 } }
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMiniGameClick = () => {
    setAnimateOut(!animateOut);
    setGameStarted(!gameStarted);
  };

  return (
    <>
        <Disclaimer disclaimerImage={'https://racho-devs.s3.us-east-2.amazonaws.com/Images/DisclaimerIntro.png'} buttonImage={'https://racho-devs.s3.us-east-2.amazonaws.com/Images/IntroDisclaimer.gif'} text={"Hello and welcome to my project portfolio! Dive into a world where frontend frameworks and techniques come together to create a fun and visually appealing experience just for you. Explore the exciting contrast between 2D and 3D web capabilities, and discover how thrilling it is to step into the third dimension! As you navigate through my portfolio, you'll uncover the diverse skill set I've developed over the years, from freelancing to various other achievements. You'll find my resume, projects, school assignments, published websites, and so much more! The more you explore, the more intriguing and exciting mysteries you'll uncover. Keep in mind, this project is ever-evolving and currently incomplete. While the mobile version isn't quite ready yet, you can get a sneak peek at the mobile view by shrinking the window width on some pages. Happy scrolling!"}/>
{/* {          <motion.button
        className="mini-game-button"
        onClick={handleMiniGameClick}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'fixed',
          bottom: '5%',
          right: '5%',
          height: '75px',
          width: '75px',
          borderRadius: '100%',
          zIndex: 999999999,
          padding: '10px 20px',
          fontSize: '16px',
          background: gameStarted ? 'linear-gradient(45deg, #FF0000, #FF4500)' : 'linear-gradient(45deg, #00FF00, #7FFF00)',
          color: '#fff',
          border: gameStarted ? '2px solid #8B0000' : '2px solid #006400',
          cursor: 'pointer',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {gameStarted ? 'End Game' : 'Mini Game'}
      </motion.button>
      <style jsx>{`
        @media (max-width: 768px) {
          .mini-game-button {
            right: 50%;
            transform: translateX(50%);
          }
        }
      `}</style>} */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <motion.div initial='out' animate='in' exit='out' variants={animationTwo} className='introBg'>
        <Intro animateOut={animateOut} setAnimateOut={setAnimateOut} handleMiniGameClick={handleMiniGameClick} />
        <Footer />
      </motion.div>

    </>
  );
}

export default Home;
