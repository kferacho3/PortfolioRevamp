import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { animationThree } from '../../components/animations/animations';
import "./about.scss";
import {
  AboutBG,
  AboutBtnWrapper,
  AboutBtnWrapper2,
  AboutCar,
  AboutCloudWrap,
  AboutContainer,
  AboutH1,
  AboutH2,
  AboutImg,
  AboutImg2,
  ArrowForward,
  ArrowRight,
  Button1,
  Button4,
  Column1,
  Column2,
  Column3,
  Subtitle,
  Subtitle2,
  Subtitle3,
  TextWrapper
} from './AboutElements2D';
import SkillBars from './Skills';

import bcloud from './images/aboutImg/bcloud.svg';
import btn2 from './images/aboutImg/button1.svg';
import btn3 from './images/aboutImg/button2.svg';
import btn4 from './images/aboutImg/button3.svg';
import btn5 from './images/aboutImg/button4.svg';
import btn1 from './images/aboutImg/button5.svg';
import car from './images/aboutImg/car.gif';
import wheel from './images/aboutImg/W.jpg';

import rc1 from './images/aboutClouds/rc1.png';
import rc2 from './images/aboutClouds/rc2.png';
import rc3 from './images/aboutClouds/rc3.png';
import rc4 from './images/aboutClouds/rc4.png';
import rc5 from './images/aboutClouds/rc5.png';

import bc1 from './images/aboutClouds/bc1.png';
import bc2 from './images/aboutClouds/bc2.png';
import bc3 from './images/aboutClouds/bc3.png';
import bc4 from './images/aboutClouds/bc4.png';
import bc5 from './images/aboutClouds/bc5.png';

import oc1 from './images/aboutClouds/oc1.png';
import oc2 from './images/aboutClouds/oc2.png';
import oc3 from './images/aboutClouds/oc3.png';
import oc4 from './images/aboutClouds/oc4.png';
import oc5 from './images/aboutClouds/oc5.png';

import gc1 from './images/aboutClouds/gc1.png';
import gc2 from './images/aboutClouds/gc2.png';
import gc3 from './images/aboutClouds/gc3.png';
import gc4 from './images/aboutClouds/gc4.png';
import gc5 from './images/aboutClouds/gc5.png';

import pc1 from './images/aboutClouds/pc1.png';
import pc2 from './images/aboutClouds/pc2.png';
import pc3 from './images/aboutClouds/pc3.png';
import pc4 from './images/aboutClouds/pc4.png';

import bbord from './images/aboutClouds/bbord.png';
import bbord2 from './images/aboutClouds/bbord2.png';
import cbord2 from './images/aboutClouds/cbord2.png';
import dbord3 from './images/aboutClouds/dbord3.png';
import gbord from './images/aboutClouds/gbord.png';
import gbord2 from './images/aboutClouds/gbord2.png';
import obord from './images/aboutClouds/obord.png';
import obord2 from './images/aboutClouds/obord2.png';
import pcord from './images/aboutClouds/pcord.png';
import rbord from './images/aboutClouds/rbord.png';

const ABOUT = [
  { type: "CREATIVE ARTS" },
  { type: "PROBLEM SOLVING" },
  { type: "CULINARY ARTS" },
  { type: "TWISTY PUZZLE" },
];

const LANG = [
  { type: "C", level: 60 },
  { type: "python", level: 95 },
  { type: "Java", level: 90 },
  { type: "p5* (Processing + JS)", level: 100 },
  { type: "R", level: 45 },
];

const FRAME = [
  { type: "Sass", level: 90 },
  { type: "React.js", level: 85 },
  { type: "JavaScript.js", level: 100 },
  { type: "three.js", level: 75 },
  { type: "Webpack", level: 65 }
];

const DESIGN = [
  { type: "Photoshop", level: 70 },
  { type: "figma", level: 85 },
  { type: "blender", level: 40 },
  { type: "Logic Pro X", level: 65 },
  { type: "Adobe Il", level: 35 }
];

const SERV = [
  { type: "Standard Web Development", level: 100 },
  { type: "Website Design", level: 80 },
  { type: "3D Website Experience", level: 90 },
  { type: "3D Modeling", level: 50 },
  { type: "Audio Engineering", level: 60 }
];


function About2D({ isOpen, toggle }) {
  const carRef = useRef();
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState(0);
  const [carDirection, setCarDirection] = useState(1);
  const [buttonPositions, setButtonPositions] = useState([]);
  const columnVariants = {
    hidden: { opacity: 0,filter: "blur(15px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5 } }
  };
  
  const textVariants = {
    hidden: { opacity: 0, filter: "blur(15px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5 } }
  };
  
  const aboutImgVariants = {
    hidden: { opacity: 0,   filter: "blur(15px)" },
    visible: { opacity: 1,  filter: "blur(0px)", transition: { duration: 0.5, staggerChildren: 0.1 } }
  };
  
  const skillBarVariants = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 0.5 } }
  };
  
 
  const onHover = () => {
    setHover(!hover);
  };
  useEffect(() => {
    const updateButtonPositions = () => {
      const buttons = document.querySelectorAll('.about-btn');
      const positions = Array.from(buttons).map(button => button.offsetLeft + button.offsetWidth / 2);
      setButtonPositions(positions);
    };
  
    updateButtonPositions(); // Initial call to set button positions
    window.addEventListener('resize', updateButtonPositions); // Update positions on window resize
  
    return () => {
      window.removeEventListener('resize', updateButtonPositions); // Clean up the event listener
    };
  }, []);
  
  useEffect(() => {
    if (active !== prevActive) {
      setCarDirection(active > prevActive ? 1 : -1);
      setPrevActive(active);
  
      const isMobile = window.innerWidth <= 640; // Check if it's mobile
      const offset = active < prevActive ? (isMobile ?  -100 : -150) : 0; // Apply a small offset when moving backwards
      const offset2 = active > prevActive ? (isMobile ?  100 : 0) : 0; // Apply a small offset when moving backwards
  
      // Update car position with smooth transition
      carRef.current.style.left = `${buttonPositions[active] + offset2 - carRef.current.offsetWidth / 2 + offset}px`;
      carRef.current.style.transform = `scale(0.25) scaleX(${carDirection})`;
      carRef.current.style.transition = 'left 1s ease, transform 0.5s ease';
    }
  }, [active, prevActive, buttonPositions, carDirection]);
  
  


  

  const SetView = (view) => {
    setCarDirection(view > active ? 1 : -1); // Set the car direction based on the view
    setActive(view);
  };
  

  const ActiveView = () => {
    switch (active) {
      case 0:
        return (
          <div>
            <Column2  key={active} variants={columnVariants} initial="hidden" animate="visible" className='abouts' img={pcord}>
              <TextWrapper>
                <AboutH2>aboutMe()</AboutH2>
                <SkillBars key={active} variants={skillBarVariants} initial="hidden" animate="visible" hue="270" saturation="100" skills={ABOUT} />
                <AboutCloudWrap>
                  <AboutImg2  key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={pc1} type='image/png' className='hov2' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={pc2} type='image/png' className='hov3' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={pc3} type='image/png' className='hov' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={pc4} type='image/png' className='hov5' />
                </AboutCloudWrap>
              </TextWrapper>
            </Column2>
          </div>
        );
      case 1:
        return (
          <div>
            <Column2  key={active} variants={columnVariants} initial="hidden" animate="visible" className='abouts' img={rbord}>
              <TextWrapper>
                <AboutH2>languages()</AboutH2>
                <SkillBars key={active} variants={skillBarVariants} initial="hidden" animate="visible" hue="0" saturation="100" skills={LANG} />
                <AboutCloudWrap>
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={rc1} type='image/png' className='hov' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={rc2} type='image/png' className='hov2' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={rc3} type='image/png' className='hov3' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={rc4} type='image/png' className='hov4' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={rc5} type='image/png' className='hov5' />
                </AboutCloudWrap>
              </TextWrapper>
            </Column2>
          </div>
        );
      case 2:
        return (
          <div>
            <Column2 key={active} variants={columnVariants} initial="hidden" animate="visible" className='abouts' img={bbord2}>
              <TextWrapper>
                <AboutH2 key={active} variants={textVariants} initial="hidden" animate="visible">frameworks()</AboutH2>
                <SkillBars  key={active} variants={skillBarVariants} initial="hidden" animate="visible" hue="229.62" saturation="100" skills={FRAME} />
                <AboutCloudWrap>
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={bc1} type='image/svg' className='hov4' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={bc2} type='image/png' className='hov' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={bc3} type='image/png' className='hov4' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={bc4} type='image/png' className='hov3' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={bc5} type='image/png' className='hov2' />
                </AboutCloudWrap>
              </TextWrapper>
            </Column2>
          </div>
        );
      case 3:
        return (
          <div>
            <Column2 key={active} variants={columnVariants} initial="hidden" animate="visible" className='abouts' img={obord2}>
              <TextWrapper>
                <AboutH2 key={active} variants={textVariants} initial="hidden" animate="visible">designStudios()</AboutH2>
                <SkillBars  key={active} variants={skillBarVariants} initial="hidden" animate="visible" hue="24" saturation="100" skills={DESIGN} />
                <AboutCloudWrap>
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={oc1} type='image/png' className='hov2' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={oc2} type='image/png' className='hov3' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible"  src={oc3} type='image/png' className='hov' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={oc4} type='image/png' className='hov5' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={oc5} type='image/png' className='hov4' />
                </AboutCloudWrap>
              </TextWrapper>
            </Column2>
          </div>
        );
      case 4:
        return (
          <div>
            <Column2 key={active} variants={columnVariants} initial="hidden" animate="visible" className='abouts' img={gbord}>
              <TextWrapper>
                <AboutH2 key={active} variants={textVariants} initial="hidden" animate="visible">services()</AboutH2>
                <SkillBars  key={active} variants={skillBarVariants} initial="hidden" animate="visible" hue="120" saturation="100" skills={SERV} />
                <AboutCloudWrap>
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={gc1} type='image/png' className='hov2' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={gc2} type='image/png' className='hov3' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={gc3} type='image/png' className='hov' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={gc4} type='image/png' className='hov5' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={gc5} type='image/png' className='hov4' />
                </AboutCloudWrap>
              </TextWrapper>
            </Column2>
          </div>
        );
      default:
        return (
          <div>
            <Column2 key={active} variants={columnVariants} initial="hidden" animate="visible" className='abouts' img={rbord}>
              <TextWrapper>
                <AboutH2 key={active} variants={textVariants} initial="hidden" animate="visible">discover()</AboutH2>
                <AboutCloudWrap>
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={rc1} type='image/png' className='hov' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={rc2} type='image/png' className='hov2' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={rc3} type='image/png' className='hov3' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={rc4} type='image/png' className='hov4' />
                  <AboutImg2 key={active} variants={aboutImgVariants} initial="hidden" animate="visible" src={rc5} type='image/png' className='hov5' />
                </AboutCloudWrap>
                <SkillBars hue="300" saturation="40" skills={LANG} />
              </TextWrapper>
            </Column2>
          </div>
        );
    }
  };

  const ActiveView2 = () => {
    switch (active) {
      case 0: return (
        <div>
        <Column1 key={active} variants={columnVariants} initial="hidden" animate="visible" className='abouts' img={dbord3}>
          <TextWrapper>
            <AboutH2 key={active} variants={textVariants} initial="hidden" animate="visible">aboutMe()</AboutH2>
            <Subtitle  key={active} variants={textVariants} initial="hidden" animate="visible">I am a recent graduate from Georgia Tech eager to begin my freelancing journey! This portfolio plans to showcase my projects done for clients and my personal works ranging from creative coding to applicable models and architectures usable for you! I love creating websites and applications to express my creativity and bring to life what you envision :)</Subtitle>
          </TextWrapper>
        </Column1>
      </div>
      );
      case 1:
        return (
          <div>
            <Column3 key={active} variants={columnVariants} initial="hidden" animate="visible" className='abouts' img={cbord2}>
              <TextWrapper>
                <Subtitle2 key={active} variants={textVariants} initial="hidden" animate="visible">LANGUAGES:</Subtitle2>
                <Subtitle3 key={active} variants={textVariants} initial="hidden" animate="visible">Most familiar languages used for writing code.</Subtitle3>
                <Subtitle3 key={active} variants={textVariants} initial="hidden" animate="visible" className='sr'>Percentages indicates PROFICIENCY of language.</Subtitle3>
              </TextWrapper>
            </Column3>
          </div>
        );
      case 2:
        return (
          <div>
            <Column3 key={active} variants={columnVariants} initial="hidden" animate="visible" className='abouts' img={bbord}>
              <TextWrapper>
                <Subtitle2 key={active} variants={textVariants} initial="hidden" animate="visible">FRAMEWORKS:</Subtitle2>
                <Subtitle3 key={active} variants={textVariants} initial="hidden" animate="visible">Reliable tools used to enhance coding systems.</Subtitle3>
                <Subtitle3 key={active} variants={textVariants} initial="hidden" animate="visible" className='sr'>Percentages indicates PROFICIENCY of tools.</Subtitle3>
              </TextWrapper>
            </Column3>
          </div>
        );
      case 3:
        return (
          <div>
            <Column3 key={active} variants={columnVariants} initial="hidden" animate="visible" className='abouts' img={obord}>
              <TextWrapper>
                <Subtitle2 key={active} variants={textVariants} initial="hidden" animate="visible">DESIGN STUDIOS:</Subtitle2>
                <Subtitle3 key={active} variants={textVariants} initial="hidden" animate="visible">Backbone for the design and predevelopment process.</Subtitle3>
                <Subtitle3 key={active} variants={textVariants} initial="hidden" animate="visible" className='sr'>Percentages indicates EFFICIENCY of production.</Subtitle3>
              </TextWrapper>
            </Column3>
          </div>
        );
      case 4:
        return (
          <div>
            <Column3 key={active} variants={columnVariants} initial="hidden" animate="visible" className='abouts' img={gbord2}>
            
              <TextWrapper>
                <Subtitle2 key={active} variants={textVariants} initial="hidden" animate="visible">SERVICES PREVIEW</Subtitle2>
                <Subtitle3 key={active} variants={textVariants} initial="hidden" animate="visible">Sneak peak list of services I have to offer.</Subtitle3>
                <Subtitle3 key={active} variants={textVariants} initial="hidden" animate="visible" className='sr'>The percentages represent the SPEED of delivery and TIME required for your product, varying according to its SPECIFICATIONS.</Subtitle3>
             
                <AboutBtnWrapper>
                <Button4
                  style={{ backgroundImage: `url(${bcloud})` }}
                  to='/services'
                  onClick={toggle}
                  primary='true'
                  dark='true'
                  fontBig='true'>
                  myServices() {hover ? <ArrowRight /> : <ArrowForward />}
                </Button4>
              </AboutBtnWrapper>
              </TextWrapper>

            </Column3>
          </div>
        );
      case 5:
        return (
          <div>
            <Column1 key={active} variants={columnVariants} initial="hidden" animate="visible" className='abouts' img={dbord3}>
              <TextWrapper>
                <AboutH2>aboutMe()</AboutH2>
                <Subtitle>I am a recent graduate from Georgia Tech eager to begin my freelancing journey! This portfolio plans to showcase my projects done for clients and my personal works ranging from creative coding to applicable models and architectures usable for you! I love creating websites and applications to express my creativity and bring to life what you envision :)</Subtitle>
              </TextWrapper>
            </Column1>
          </div>
        );
      default:
        return (
          <div>
          <Column1 key={active} variants={columnVariants} initial="hidden" animate="visible" className='abouts' img={dbord3}>
            <TextWrapper>
              <AboutH2>aboutMe()</AboutH2>
              <Subtitle>I am a recent graduate from Georgia Tech eager to begin my freelancing journey! This portfolio plans to showcase my projects done for clients and my personal works ranging from creative coding to applicable models and architectures usable for you! I love creating websites and applications to express my creativity and bring to life what you envision :)</Subtitle>
            </TextWrapper>
          </Column1>
        </div>
        );
    }
  };

  return (
    <motion.div initial='out' animate='end' exit='out' variants={animationThree}>
      <AboutContainer id={'about'}>
        {ActiveView2()}
        {ActiveView()}
        <div className='bit' />
        <AboutBG>
          <AboutH1>discover more</AboutH1>
          <AboutBtnWrapper2>
            <Button1
              className="about-btn"
              style={{ backgroundImage: `url(${btn1})` }}
              to='/services'
              onClick={() => SetView(0)}
              primary='true'
              dark='true'
              fontBig='true'>
              aboutMe()
            </Button1>
            <Button1
              className="about-btn"
              style={{ backgroundImage: `url(${btn2})` }}
              to='/services'
              onClick={() => SetView(1)}
              primary='true'
              dark='true'
              fontBig='true'>
              languages()
            </Button1>
            <Button1
              className="about-btn"
              style={{ backgroundImage: `url(${btn3})` }}
              to='/services'
              onClick={() => SetView(2)}
              primary='true'
              dark='true'
              fontBig='true'>
              frameworks()
            </Button1>
            <Button1
              className="about-btn"
              style={{ backgroundImage: `url(${btn4})` }}
              to='/services'
              onClick={() => SetView(3)}
              primary='true'
              dark='true'
              fontBig='true'>
              designStudios()
            </Button1>
            <Button1
              className="about-btn"
              style={{ backgroundImage: `url(${btn5})` }}
              to='/services'
              onClick={() => SetView(4)}
              primary='true'
              dark='true'
              fontBig='true'>
              services()
            </Button1>

            <AboutCar ref={carRef} style={{ left: `${buttonPositions[active] - 25 || 0}px`, transform: `scale(0.25) scaleX(${carDirection})`, transition: 'left 1s ease, transform 0.5s ease' }}>
  <AboutImg src={car} type='image/gif' className='me' />
  <div className='wheels'>
    <img src={wheel} type='image/jpg' className='lW' />
    <img src={wheel} type='image/jpg' className='rW' />
  </div>
</AboutCar>


          </AboutBtnWrapper2>
        </AboutBG>
      </AboutContainer>
    </motion.div>
  );
}

export default About2D;
