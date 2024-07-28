import { motion } from 'framer-motion';
import { BsDownload } from 'react-icons/bs';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const AboutContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #FBDA61;
  background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
  }
`;

export const AboutCar = styled(motion.div)`
  position: absolute;
  margin-top: 0%;
  margin-left: 7.5%;
  transform: scale(0.25);
`;

export const AboutImg = styled(motion.img)`
  height: 200px;
  width: 250px;
  z-index: 999999; 
  align-items: center;
  display: block;
  position: absolute;
  border-top: 3px solid transparent;
  border-radius: 25px;
  @media screen and (max-width: 850px) {
  }
`;

export const AboutImg2 = styled(motion.img)`
  margin-top: 2.5px;
  height: 90px;
  width: 140px;
  z-index: 0;
  @media screen and (max-width: 1250px) {
  }
  @media screen and (max-width: 850px) {
    left: 20px;
  }
`;

export const AboutContainer2 = styled(motion.div)`
  white-space: nowrap;
  position: absolute;
  display: flex;
  z-index: 9999999999;
  text-align: center;
  @media screen and (max-width: 1250px) {
    zoom: 0.9;
  }
  @media screen and (max-width: 850px) {
    zoom: 0.85;
    top: 15%;
    left: 50%;
  }
  @media screen and (max-width: 450px) {
    zoom: 0.7;
  }
`;

export const AboutBG = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
`;

export const VideoBg = styled(motion.img)`
  width: 100%;
  height: 100%;
  z-index: -9999px;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const AboutTextWrap2 = styled(motion.div)`
  margin-top: 32px;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    zoom: 0.8;
  }
  @media screen and (max-width: 850px) {
    top: 60%;
  }
  @media screen and (max-width: 640px) {
    align-items: center;
    display: block;
    margin: auto;
    margin-top: 50px;
    zoom: 0.5;
  }
`;

export const TextWrapper = styled(motion.div)`
  text-align: center;
  @media screen and (max-width: 850px) {
    transform: scale(0.8);
  }
`;

export const Subtitle = styled(motion.p)`
  margin-top: -10px;
  font-size: 24px;
  color: '#010606';
  font-weight: 900;
  text-align: center;
  width: 575px;
  align-items: center;
  margin-left: 50%;
  transform: translateX(-50%);
`;

export const Subtitle2 = styled(motion.p)`
  margin-top: 20px;
  font-size: 48px;
  color: '#010606';
  font-weight: 900;
  text-align: center;
  white-space: nowrap;
`;

export const Subtitle3 = styled(motion.p)`
  margin-top: 20px;
  margin-left: 15px;
  font-size: 32px;
  color: '#010606';
  font-weight: 900;
  text-align: center;
`;

export const Column1 = styled(motion.div)`
  margin-top: 32px;
  position: fixed;
  top: 50%;
  left: 50%;
  align-items: center;
  z-index: 1;
  width: 650px;
  height: 350px;
  color: #fff;
  text-shadow: 1px 1px #000;
  background-image: url(${props => props.img});
  background-size: auto;
  background-position: center;
  background-repeat: repeat;
  border: 1px solid #000;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 1050px) {
    zoom: 0.8;
  }
  @media screen and (max-width: 850px) {
    transform: translate(-50%, 400%);
  }
  @media screen and (max-width: 640px) {
    transform: translate(-50%, 525%);
    zoom: 0.6;
  }
  @media screen and (max-width: 450px) {
    transform: translate(-50%, 600%);
    zoom: 0.5;
  }
`;

export const Column2 = styled(motion.div)`
  width: 650px;
  height: 600px;
  background-image: url(${props => props.img});
  background-size: auto;
  background-position: center;
  background-repeat: repeat;
  border: 1px solid #000;
  border-radius: 25px;
  position: absolute;
  left: 10%;
  top: 10%;
  transform: scale(0.85);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-shadow: 0.25px 0.25px #000;
  @media screen and (max-width: 850px) {
    display: flex;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -25%) scale(0.5);
    flex-direction: column;
    align-items: center;
  }
`;

export const Column3 = styled(motion.div)`
  width: 600px;
  height: 350px;
  background-image: url(${props => props.img});
  background-size: auto;
  background-position: center;
  background-repeat: repeat;
  border: 1px solid #000;
  border-radius: 10px;
  position: absolute;
  right: 10%;
  margin-top: 10%;
  transform: scale(0.85);
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-shadow: 1px 1px #000;
  @media screen and (max-width: 850px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 120%) scale(0.6);
    width: 90%;
    height: auto;
  }
`;

export const AboutH1 = styled(motion.h1)`
  color: #ffffbf;
  font-size: 6rem;
  position: fixed;
  white-space: nowrap;
  top: 15%;
  left: 20%;
  text-shadow: 3px 3px #FF0000;
  z-index: 99999;
  text-align: center;
  display: inline-block;
  @media screen and (max-width: 1050px) {
    font-size: 10rem;
    transform: translate(-5%, -375%);
  }
  @media screen and (max-width: 850px) {
    font-size: 10rem;
    transform: translate(-30%, -350%);
  }
  @media screen and (max-width: 450px) {
    font-size: 8rem;
    transform: translate(-30%, -500%);
  }
`;

export const AboutH2 = styled(motion.h2)`
  margin-top: 0px;
  font-size: 5rem;
  font-weight: 900;
  text-align: center;
  color: #ffffbf;
  text-shadow: 3px 3px #FF0000;
`;

export const AboutBtnWrapper = styled(motion.div)`
  display: flex;
  position: fixed;
  left: 50%;
  bottom: 10%;
  flex-direction: column;
  align-items: center;
  z-index: 99999;
  @media screen and (max-width: 850px) {
    top: 60%;
  }
  @media screen and (max-width: 640px) {
    align-items: center;
    display: block;
    margin: auto;
    margin-top: 50px;
    zoom: 0.9;
  }
`;

export const AboutBtnWrapper2 = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 50%;
  bottom: 5%;
  width: 50%;
  transform: translateX(-50%);
  z-index: 9999999999;
  @media screen and (max-width: 1050px) {
    transform: scale(0.8) translateX(-50%);
  }
  @media screen and (max-width: 850px) {
    transform: scale(0.75) translateX(-50%);
    top: 150px;
  }
  @media screen and (max-width: 640px) {
    top: auto;
    bottom: 50px;
    width: 0;
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const ArrowForward = styled(motion(MdArrowForward))`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(motion(MdKeyboardArrowRight))`
  margin-left: 8px;
  font-size: 20px;
`;

export const Button4 = styled(motion(LinkR))`
  border-radius: 20px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 75px' : '45px 30px')} ;
  color: #fff;
  text-shadow: 1.5px 1.5px #000;
  font-size: ${({fontBig}) => (fontBig ? '30px' : '16px')} ;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  z-index: 99999;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);
    color: ${({dark}) => (dark ? '#FFF444' : '#fff')};
  }
`;

export const Download = styled(motion(BsDownload))`
  margin-left: 8px;
  font-size: 20px;
`;

export const Button1 = styled(motion.a)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 75px;
  width: 75px;
  z-index: 9999999999;
  text-shadow: 1.5px 1.5px #000;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transform: scale(1.02);
    color: ${({dark}) => (dark ? '#FFF444' : '#fff')};
  }
  @media screen and (max-width: 640px) {
    font-size: 12px;
  }
`;

export const AboutCloudWrap = styled(motion.div)`
  top: 15%;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const SkillP = styled(motion.p)`
  margin: 0;
  font-weight: 900;
  width: fit-content;
  block-size: fit-content;
  margin-left: 25px;
  font-size: 32px;
  min-height: 30px;
  max-height: 30px;
  line-height: 24px;
`;

export const SKillHR = styled(motion.hr)`
  display: none;
  border: 5px solid #fff;
  border-radius: 10px;
`;

export const SKillSp = styled(motion.span)`
  position: absolute;
  right: 10px;
  display: inline-block;
  width: 30px;
  top: 11px;
  text-align: right;
  font-weight: normal;
  color: #fff;
  font-size: 25px;
`;

export const SkillContainerUl = styled(motion.ul)`
  margin: 20px 20px 0px 5px;
  padding: 0;
  left: 90px;
  margin-top: -15px;
  width: calc(90% - 50px);
  position: relative;
  transform: scale(0.95);
`;

export const SkillContainerli = styled(motion.li)`
  border: 1px solid #000;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 800px;
  margin: auto;
  padding: 20px;
  display: block;
  position: relative;
  background-color: #888;
  color: #fff;
  margin: 25px 0;
  transition: width 300ms ease-in-out;
  overflow: hidden;
`;
