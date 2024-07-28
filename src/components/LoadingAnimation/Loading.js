import { Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import React from 'react';
import logo from '../../images/logo.svg';
import { Circle, LoadingText, PreloaderWrapper } from './LoadingElements';

const circleVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 0.25,
      ease: 'easeInOut',
    },
  },
};

const letterContainerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1, // Stagger each letter's animation
      delayChildren: 0.25, // Start the letter animation after the circle pulse
      duration: 0.1
    },
  },
};

const letterVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const Preloader = () => {
  const text = 'Loading...';

  return (
    <Html fullscreen style={{ width: '100vw', height: '100vh' }}>
      <PreloaderWrapper>
        <Circle
          style={{ backgroundImage: `url(${logo})`, width: 100, height: 100 }}
          variants={circleVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          variants={letterContainerVariants}
          initial="initial"
          animate="animate"
        >
          <LoadingText>
            {text.split('').map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </LoadingText>
        </motion.div>
      </PreloaderWrapper>
    </Html>
  );
};

export default Preloader;
