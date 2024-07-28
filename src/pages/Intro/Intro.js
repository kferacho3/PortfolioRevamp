import { Box, Environment, Html, Lightformer, MeshDistortMaterial } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { AnimatePresence, motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { easing } from 'maath';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import Disclaimer from '../../components/Disclaimer/Disclaimer';
import Preloader from '../../components/LoadingAnimation/Loading';
import VerticalCarousel from './Carousel';
import { BottomData } from './Data';
import {
  BotBg,
  BotBg2,
  BotBg3,
  BotContainer,
  BotH1,
  BotH2,
  BotImg,
  BotImg2,
  BotImg3,
  BotimgContainer,
  ClickCount,
  CountWrap,
  Counter,
  DragContainer,
  IntroContainer,
  IntroH1,
  IntroH2,
  IntroH3,
  IntroHWrap,
  IntroHWrapper,
  IntroImg,
  IntroImg2,
  MainContainer,
  MidBg,
  MidContainer,
  MidImg,
  PlaneContainer,
  ProgressBar,
  ProgressBarContainer,
  TopLand,
  TotalClicks,
  Wrap
} from './IntroElements';
import bottomL from './images/bottomImg/bottomLeft.svg';
import tree from './images/bottomImg/bottomTree.svg';


import house from './images/introImg/MiniHouse.svg';
import bg1 from './images/introImg/bg1.svg';
import bg2 from './images/introImg/bg2.svg';
import finme from './images/introImg/finme.png';
import finme2 from './images/introImg/finme2.png';
import fruit from './images/introImg/forbiddenfruit.gif';
import fruits from './images/introImg/fruits.svg';
import './intro.scss';

import botArcade from './images/bottomImg/BotArcade.svg';
import botLeft from './images/bottomImg/BotLeftTree.svg';
import botMain from './images/bottomImg/BotRainTree.svg';
import botRight from './images/bottomImg/BotRightTree.svg';
import botPlane from './images/introImg/MeBitPlane.png';

import Bird1 from '../../images/Bird1.jpg';
import Bird2 from '../../images/Bird2.jpg';
import Bird3 from '../../images/Bird3.jpg';
const main = 'https://racho-devs.s3.us-east-2.amazonaws.com/intro/Main.gif';
const bottomR = 'https://racho-devs.s3.us-east-2.amazonaws.com/intro/bottomRight.svg';

const IntroHContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function adjustHeight() {
  const windowWidth = window.innerWidth;
  const minHeight = 332.5; // Height when width is 500px
  const maxHeight = 750; // Height when width is 2880px

  const newHeight = `calc(${minHeight}vh + (${maxHeight}vh - ${minHeight}vh) * ((100vw - 500px) / (2880 - 500)))`;

  // Apply the new height to the styled component using template literals
  Wrap.defaultProps = { style: { height: newHeight } };
}

window.addEventListener('resize', adjustHeight);
adjustHeight();

function MovingCubes({ animateOut }) {
  const groupRef = useRef();

  const getGroupSize = () => {
    const rand = Math.random();
    if (rand < 0.4) return 1;
    if (rand < 0.65) return 2;
    if (rand < 0.8) return 3;
    if (rand < 0.9) return 4;
    if (rand < 0.95) return 5;
    if (rand < 0.98) return 6;
    if (rand < 0.99) return 7;
    if (rand < 0.995) return 8;
    if (rand < 0.9975) return 9;
    return 10;
  };

  const size = animateOut ? 250 : 50;
  const positions = Array.from({ length: size }, () => {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = 10;
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    return {
      x,
      y,
      z,
      size: Math.random() * 0.1 + 0.05,
      groupSize: getGroupSize(),
      speed: Math.random() * 0.01 + 0.01,
    };
  });

  const getRandomFaceOffset = (size) => {
    const face = Math.floor(Math.random() * 6);
    switch (face) {
      case 0:
        return [size, 0, 0];
      case 1:
        return [-size, 0, 0];
      case 2:
        return [0, size, 0];
      case 3:
        return [0, -size, 0];
      case 4:
        return [0, 0, size];
      case 5:
        return [0, 0, -size];
      default:
        return [0, 0, 0];
    }
  };

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
    groupRef.current.children.forEach((group, i) => {
      group.position.x -= positions[i].speed;
      if (group.position.x < -20) {
        group.position.x = 20;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <group key={i} position={[pos.x, pos.y, pos.z]}>
          {Array.from({ length: pos.groupSize }).reduce((acc, _, j) => {
            const lastPosition = acc[acc.length - 1].props.position;
            const [offsetX, offsetY, offsetZ] = getRandomFaceOffset(pos.size);
            acc.push(
              <Box
                key={`${i}-${j}`}
                position={[lastPosition[0] + offsetX, lastPosition[1] + offsetY, lastPosition[2] + offsetZ]}
                args={[pos.size, pos.size, pos.size]}
              >
                <meshStandardMaterial attach="material" />
                <MeshDistortMaterial
                  color={`hsl(${Math.random() * 360}, 100%, 75%)`}
                  flatShading
                  roughness={1}
                  metalness={0.5}
                  factor={15}
                  speed={5}
                />
              </Box>
            );
            return acc;
          }, [
            <Box key={`${i}-0`} position={[0, 0, 0]} args={[pos.size, pos.size, pos.size]}>
              <meshStandardMaterial attach="material" />
              <MeshDistortMaterial
                color={`hsl(${Math.random() * 360}, 100%, 75%)`}
                flatShading
                roughness={1}
                metalness={0.5}
                factor={15}
                speed={5}
              />
            </Box>,
          ])}
        </group>
      ))}
    </group>
  );
}

function EnvIntro({ perfSucks, children }) {
  const ref = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!perfSucks) {
      easing.damp3(ref.current.rotation, [Math.PI / 2, 0, state.clock.elapsedTime / 50 + state.pointer.x], 0.2, delta);
      easing.damp3(state.camera.position, [Math.sin(state.pointer.x / 30) * 9, 1.25 + state.pointer.y / 5, Math.cos(state.pointer.x / 4) * 9], 0.5, delta);
      state.camera.lookAt(0, 0, 0);
    }
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group ref={ref}>
      <Environment frames={perfSucks ? 1 : Infinity} resolution={256} background blur={0}>
        <Lightformer intensity={12} rotation-x={Math.PI / 2} position={[0, 0, -9]} scale={[10, 10, 1]} />
        <Lightformer intensity={12} rotation-x={Math.PI / 2} position={[0, 0, -9]} scale={[10, 10, 1]} />
        <group rotation={[Math.PI / 2, 1, 0]}>
          {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
            <Lightformer key={i} intensity={10} rotation={[Math.PI / 4, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
          ))}
          <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
          <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
          <Lightformer intensity={0.5} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
        </group>
        <group ref={ref}>
          <Lightformer intensity={1} form="ring" color="ADD7F2" rotation-y={Math.PI / 2} position={[-5, 2, -1]} scale={[0, 0, 0]} />
        </group>
      </Environment>
      <group ref={groupRef}>{children}</group>
    </group>
  );
}

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const imageVariants = {
  hidden: (direction) => ({
    x: direction === 'left' ? '-100vw' : '100vw',
    transition: { duration: 1 },
  }),
  visible: { x: 0, transition: { duration: 1 } },
};

const headerVariants = {
  hidden: { y: '-100vh', x: '100vw', transition: { duration: 1 } },
  visible: { y: 0, x: 0, transition: { duration: 1 } },
};

const midContainerVariants = {
  hidden: { x: '-100vw', opacity: 0, transition: { duration: 1 } },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const planeVariants = {
  initial: { x: '100vw' },
  animate: {
    x: '-100vw',
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear'
    }
  }
}

const botContainerVariants = {
  hidden: { scaleY: 0, transition: { duration: 1 } },
  visible: { scaleY: 1, transition: { duration: 1 } },
};

const Intro = ({ isOpen, toggle, animateOut, setAnimateOut, handleMiniGameClick }) => {
  const HeaderW = 'https://racho-devs.s3.us-east-2.amazonaws.com/intro/HeaderW-svg.png';
  const textRef = useRef();
  const [perfSucks, degrade] = useState(false);
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 0.925 * window.innerHeight], [0.9, 0.5]);
  const transformY = useTransform(scrollY, [0, 0.75 * window.innerHeight], [0, 0.75 * window.innerHeight]);
  const translateX = useTransform(scrollY, [0, 0.925 * window.innerHeight], [0, 450]);
  const windowHeight = window.innerHeight;
  const [hover, setHover] = useState(false);
  const changeInterval = windowHeight * 0.3;
  const [isGifPlaying, setIsGifPlaying] = useState(false);

  const [currentWord, setCurrentWord] = useState('Creator');
  const [currentColor, setCurrentColor] = useState('purple');
  const [textShadow, setTextShadow] = useState('0 0 5px yellow');
  const words = ['Creator', 'Problem Solver', 'Developer'];
  const colors = ['purple', 'green', 'orange'];
  const shadows = ['0 0 5px yellow', '0 0 5px blue', '0 0 5px red'];

  const planeScroll = useTransform(scrollY, [0.48 * windowHeight * 6.5, 0.52 * windowHeight * 6.5], ['110vw', '-130vw']);
  const [prevScroll, setPrevScroll] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  
  useEffect(() => {
    return scrollY.onChange((current) => {
      if (current < prevScroll) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }
      setPrevScroll(current);
    });
  }, [prevScroll]);
// Add this inside the Intro component
const planeFlip = useSpring({
  transform: scrollY.get() >= 0.48 * windowHeight * 6.5 && scrollY.get() <= 0.52 * windowHeight * 6.5 ? 'scaleX(1)' : 'scaleX(-1)',
});

  useEffect(() => {
    const handleScroll = () => {
      const index = Math.floor(scrollY.get() / changeInterval);
      if (index >= 0 && index < words.length) {
        setCurrentWord(words[index]);
        setCurrentColor(colors[index]);
        setTextShadow(shadows[index]);
      }
    };

    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollY, changeInterval, words, colors, shadows]);

  const onHover = () => {
    setHover(!hover);
  };

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // State and animation controls for the click effect
  const [clickCount, setClickCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();
  const [resetCounter, setResetCounter] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (clickCount > 0) {
      timer = setTimeout(() => {
        setClickCount(0);
        setProgress(0);
        setResetCounter(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [clickCount]);

  useEffect(() => {
    let resetTimer;
    if (resetCounter) {
      resetTimer = setTimeout(() => {
        setClickCount(0);
        setProgress(0);
        setResetCounter(false);
      }, 3000);
    }

    return () => {
      clearTimeout(resetTimer);
    };
  }, [resetCounter]);

  const handleImageClick = () => {
    setClickCount((prev) => prev + 1);
    setProgress((prev) => Math.min((prev + 4), 100)); // 25 clicks, so each click increments by 4% considering container width
    setResetCounter(true);

    if (clickCount + 1 === 25) {
      controls.start({
        filter: 'blur(15px)',
        opacity: 0,
        transition: { duration: 1 },
      });
      setTimeout(() => {
        setClickCount(0);
        setProgress(0);
        setResetCounter(false);
      }, 1000); // Delay to show the fading effect
    }
  };

  const handleRedirect = () => {
    navigate('/fun');
  };

  return (
    <MainContainer>
    <Disclaimer disclaimerImage={'https://racho-devs.s3.us-east-2.amazonaws.com/Images/DisclaimerIntro.png'} buttonImage={'https://racho-devs.s3.us-east-2.amazonaws.com/Images/IntroDisclaimer.gif'} text={"Hello and welcome to my project portfolio! Dive into a world where frontend frameworks and techniques come together to create a fun and visually appealing experience just for you. Explore the exciting contrast between 2D and 3D web capabilities, and discover how thrilling it is to step into the third dimension! As you navigate through my portfolio, you'll uncover the diverse skill set I've developed over the years, from freelancing to various other achievements. You'll find my resume, projects, school assignments, published websites, and so much more! The more you explore, the more intriguing and exciting mysteries you'll uncover. Keep in mind, this project is ever-evolving and currently incomplete. While the mobile version isn't quite ready yet, you can get a sneak peek at the mobile view by shrinking the window width on some pages. Happy scrolling!"}/>
      <Canvas camera={{ fov: 70, near: 0.1, far: 2000 }} style={{ width: '100vw', height: '650vh' }}>
        <Suspense fallback={<Preloader />}>
          <ambientLight intensity={Math.PI / 1.5} />
          <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={100} />
          <spotLight position={[-20, 0, 10]} color="red" angle={0.15} decay={0} penumbra={-1} intensity={30} />
          <spotLight position={[20, -10, 10]} color="red" angle={0.2} decay={0} penumbra={-1} intensity={20} />

          <EnvIntro perfSucks={perfSucks}>
            <MovingCubes animateOut={animateOut} />
            <Html fullscreen style={{ width: '100vw' }}>
              <group>
                <AnimatePresence>
                  {!animateOut && (
                    <>
                      <IntroHWrap
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{ visible: { y: 0 } }}
                        style={{ y: transformY, scale: scale, x: translateX }}
                      >
                        <IntroHContainer>
                          <IntroImg src={HeaderW} type="image/svg" />
                          <IntroHWrapper>
                            <IntroH1>Hello There, I'm</IntroH1>
                            <IntroH2>RACHO</IntroH2>
                            <IntroH3>
                              a Freelance{' '}
                              <motion.span
                                key={currentWord}
                                style={{ color: currentColor, textShadow: textShadow }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                              >
                                {currentWord}
                              </motion.span>
                            </IntroH3>
                          </IntroHWrapper>
                        </IntroHContainer>
                      </IntroHWrap>
                      <IntroContainer>
                        <motion.div
                          className="intro-images"
                          initial="visible"
                          animate={animateOut ? 'hidden' : 'visible'}
                          exit="hidden"
                          variants={imageVariants}
                          custom="left"
                        >
                          <IntroImg2 src={Bird1} type="image/jpg" className="b1" />
                        </motion.div>
                        <motion.div
                          className="intro-images"
                          initial="visible"
                          animate={animateOut ? 'hidden' : 'visible'}
                          exit="hidden"
                          variants={imageVariants}
                          custom="right"
                        >
                          <IntroImg2 src={Bird2} type="image/jpg" className="b2" />
                        </motion.div>
                        <motion.div
                          className="intro-images"
                          initial="visible"
                          animate={animateOut ? 'hidden' : 'visible'}
                          exit="hidden"
                          variants={imageVariants}
                          custom="left"
                        >
                          <IntroImg2 src={Bird3} type="image/jpg" className="b3" />
                        </motion.div>
                        <motion.div initial="visible" animate={animateOut ? 'hidden' : 'visible'} exit="hidden" variants={headerVariants} />
                      </IntroContainer>
                      <motion.div
                        className="mid-container"
                        initial="visible"
                        animate={animateOut ? 'hidden' : 'visible'}
                        exit="hidden"
                        variants={midContainerVariants}
                      >
                        <MidContainer id={'home'}>
                          <div>
                            <TopLand className="topland1">
                              <MidBg>
                                <MidImg style={{ backgroundImage: `url(${bg2})` }} />
                              </MidBg>
                              <MidBg>
                                <MidImg style={{ backgroundImage: `url(${bg1})` }} />
                              </MidBg>
                              <MidBg>
                                <MidImg style={{ backgroundImage: `url(${fruits})` }} />
                              </MidBg>
                              <MidBg>
                                <MidImg style={{ backgroundImage: `url(${main})` }} />
                              </MidBg>
                              <MidBg>
                                <MidImg style={{ backgroundImage: `url(${fruit})` }} />
                              </MidBg>
                              <MidBg onClick={() => setIsGifPlaying(!isGifPlaying)}>
                                <MidImg style={{ zIndex: 9999, backgroundImage: `url(${isGifPlaying ? null : house})` }} />
                              </MidBg>
                            </TopLand>
                          </div>
                        </MidContainer>
                      </motion.div>
                      <PlaneContainer
                        style={{
                          x: planeScroll,
                          y: transformY,
                          scaleX: `${isScrollingUp ? -1 : 1}`,
                          scale: scale,
                          backgroundImage: `url(${botPlane})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <animated.div style={planeFlip} />
                      </PlaneContainer>

                      <motion.div
                        className="bot-container"
                        initial="visible"
                        animate={animateOut ? 'hidden' : 'visible'}
                        exit="hidden"
                        variants={botContainerVariants}
                      >
                        <BotContainer id="bottom">
                          <BotBg>
                            <BotImg2 style={{ transform: 'translateY(-10px)', backgroundImage: `url(${tree})` }} />
                          </BotBg>
                          <BotBg3 onClick={handleRedirect} style={{ cursor: 'pointer', zIndex: 0, height: '250px', width: '90px' }}>
                            <BotImg2 style={{ transform: 'translateY(-250px)', backgroundImage: `url(${botArcade})` }} />
                          </BotBg3>
                          {clickCount < 25 ? (
                            <DragContainer>
                              <BotBg3
                                onClick={handleImageClick}
                                animate={controls}
                                style={{ height: '600px', width: '600px', position: 'relative' }}
                              >
                                <BotImg3 style={{ transform: 'translate(100px, -150px)', backgroundImage: `url(${botMain})` }} />
                                <CountWrap>
                                  <ProgressBarContainer>
                                    <ProgressBar progress={progress} />
                                  </ProgressBarContainer>
                                  <Counter>
                                    <ClickCount>{clickCount} /</ClickCount> <TotalClicks>25 clicks to chop Mystery Tree!</TotalClicks>
                                  </Counter>
                                </CountWrap>
                              </BotBg3>
                            </DragContainer>
                          ) : null}

                          <DragContainer>
                            <BotBg3
                              drag
                              dragConstraints={{ left: -250, right: 0, top: 0, bottom: 0 }}
                              style={{ height: '500px', width: '435px' }}
                            >
                              <BotImg3 style={{ transform: 'translate(30px, 0px)', backgroundImage: `url(${botLeft})` }} />
                            </BotBg3>
                          </DragContainer>
                          <DragContainer>
                            <BotBg3
                              drag
                              dragConstraints={{ left: 0, right: 350, top: 0, bottom: 0 }}
                              style={{ height: '500px', width: '425px' }}
                            >
                              <BotImg3 style={{ transform: 'translate(350px, -60px)', backgroundImage: `url(${botRight})` }} />
                            </BotBg3>
                          </DragContainer>

                          <BotBg2>
                            <BotImg2 style={{ zIndex: '10', backgroundImage: `url(${bottomL})` }} />
                          </BotBg2>
                          <BotH1> Check It </BotH1>
                          <BotH2> Out! </BotH2>
                          <motion.div
                            drag
                            dragConstraints={{
                              top: -50,
                              left: -50,
                              right: 50,
                              bottom: 50,
                            }}
                          >
                            <BotimgContainer 
                              style={{ 
                                zIndex: '5', 
                                backgroundImage: `url(${hover ? finme2 : finme})`,
                                cursor: 'pointer',
                                transition: 'background-image 0.2s ease-in-out'
                              }}
                              onMouseEnter={() => setHover(true)}
                              onMouseLeave={() => setHover(false)}
                              onClick={() => navigate('/Museum')}
                            >
                              <BotImg to="/about" onClick={toggle} />
                            </BotimgContainer>
                          </motion.div>
                          <VerticalCarousel data={BottomData.slides} leadingText={BottomData.leadingText} />
                          <BotBg>
                            <BotImg2 style={{ backgroundImage: `url(${bottomR})` }} />
                          </BotBg>
                        </BotContainer>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </group>
            </Html>
          </EnvIntro>
        </Suspense>
      </Canvas>
    </MainContainer>
  );
}

export default Intro;
