import { Physics } from '@react-three/cannon';
import { PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from "styled-components";
import Disclaimer from '../../components/Disclaimer/Disclaimer';
import { MeBit } from '../../glbFiles//UFO';
import { EmptyDome } from '../../glbFiles/EmptyDome';
import MuseumMonitor from '../../glbFiles/MonitorMuseum';
import { Ground } from './Ground';
import fun0 from './PersonalImg/Fun0.png';
import fun1 from './PersonalImg/Fun1.png';
import fun2 from './PersonalImg/Fun2.png';
import fun3 from './PersonalImg/Fun3.png';
import fun4 from './PersonalImg/Fun4.png';
import fun5 from './PersonalImg/Fun5.png';
import fun6 from './PersonalImg/Fun6.png';
import fun7 from './PersonalImg/Fun7.png';
import fun8 from './PersonalImg/Fun8.png';
import fun9 from './PersonalImg/Fun9.png';
import { Earth } from "./World";
import "./personal.scss";

import {
  PersonalContainer
} from './PersonalElements';

import PopUp from './Message/PopUp';

const CanvasContainer = styled.div`
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const fadeInBlur = keyframes`
  0% {
    filter: blur(15px);
  }
  100% {
    filter: blur(0);
  }
`;

const scaleUp = keyframes`
  0% {
    transform: scale(0) translateY(200px);
  }
  100% {
    transform: scale(1) translateY(0);
  }
`;

const Header = styled.h1`
margin-top: 5%;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: ${fadeInBlur} 1s ease-out;
  margin-bottom: 200px;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const ButtonContainer = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${scaleUp} 0.5s ease-out forwards;
`;

const CharacterNumber = styled.div`
  color: white;
  position: absolute;
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  bottom: -50%;
`;

const CharacterSelectContainer = styled.div`
  position: absolute;
display: flex;
top: 15%;
left: 50%;
  transform: translateX(-50%);
  gap: 10px;
  z-index: 999999;
  flex-direction: column;
  align-items: center;
`

const CharacterSelection = styled.div`
  position: absolute;
  top: 17.5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 9999999999;
  flex-direction: row;
  align-items: center;

  button {
    width: 50px;
    height: 50px;
    background-size: 800%; /* Adjust as needed to fit the number of buttons */
    background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    animation: ${scaleUp} 0.5s ease-out forwards;
  }

  button:nth-child(1) { background-position: 0% 50%; animation-delay: 1s; }
  button:nth-child(2) { background-position: 14.28% 50%; animation-delay: 1.1s; }
  button:nth-child(3) { background-position: 28.56% 50%; animation-delay: 1.2s; }
  button:nth-child(4) { background-position: 42.84% 50%; animation-delay: 1.3s; }
  button:nth-child(5) { background-position: 57.12% 50%; animation-delay: 1.4s; }
  button:nth-child(6) { background-position: 71.4% 50%; animation-delay: 1.5s; }
  button:nth-child(7) { background-position: 85.68% 50%; animation-delay: 1.6s; }
  button:nth-child(8) { background-position: 100% 50%; animation-delay: 1.7s; }
`;


const disclaimerText = "Welcome to Racho's... umm... Almost Museum! This isn't just any code—it’s an experiment in character interactions, movement, and user experience. Step into an interactive 3D realm filled with my personal projects, school assignments, and more! Transform into custom characters crafted by yours truly. Feel free to wander and engage with what's available—this space is a work in progress, and it’ll only get cooler with time!"
function Personal({ isOpen, toggle, is3D, setIs3D }) {
  const textRef = useRef();
  const [hover, setHover] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState('UFO');

  const onHover = () => {
    setHover(!hover);
  };

  const handleKeyPress = (event) => {
    if (event.key >= '0' && event.key <= '9') {
      const characters = ['SantaMeBit', 'UFO', 'CarBit', 'BoatMeBit', 'CthuluMeBit', 'RoomChandelier', 'RoboMeBit', 'SubMeBit', 'FatMeBit', 'EndermanMeBit'];
      setCurrentCharacter(characters[event.key]);
    }
  };
  

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const earthRef = useRef();
  const directionalLightRef = useRef();
  const ambientLightRef = useRef();

  const monitorsCount = 8; // Number of monitors
  const radius = 10; // Radius of the circle

  return (
   
    <PersonalContainer id={'Personal'}>
    <Disclaimer disclaimerImage={'https://racho-devs.s3.us-east-2.amazonaws.com/Images/DisclaimerMuseum.png'} buttonImage={'https://racho-devs.s3.us-east-2.amazonaws.com/Images/Disclaimer2.gif'} text={disclaimerText} />
      <CanvasContainer>

      <CharacterSelectContainer>
      <Header>CHARACTER SELECT</Header>
        <CharacterSelection>
        
          <ButtonContainer>
            <button onClick={() => setCurrentCharacter('UFO')}>
              <CharacterImage src={fun1} alt="UFO" />
              <CharacterNumber>1</CharacterNumber>
            </button>
          </ButtonContainer>
          <ButtonContainer>
            <button onClick={() => setCurrentCharacter('CarBit')}>
              <CharacterImage src={fun2} alt="CarBit" />
              <CharacterNumber>2</CharacterNumber>
            </button>
          </ButtonContainer>
          <ButtonContainer>
            <button onClick={() => setCurrentCharacter('BoatMeBit')}>
              <CharacterImage src={fun3} alt="BoatMeBit" />
              <CharacterNumber>3</CharacterNumber>
            </button>
          </ButtonContainer>
          <ButtonContainer>
            <button onClick={() => setCurrentCharacter('CthuluMeBit')}>
              <CharacterImage src={fun4} alt="CthuluMeBit" />
              <CharacterNumber>4</CharacterNumber>
            </button>
          </ButtonContainer>
          <ButtonContainer>
            <button onClick={() => setCurrentCharacter('RoomChandelier')}>
              <CharacterImage src={fun5} alt="RoomChandelier" />
              <CharacterNumber>5</CharacterNumber>
            </button>
          </ButtonContainer>
          <ButtonContainer>
            <button onClick={() => setCurrentCharacter('UFOShip')}>
              <CharacterImage src={fun6} alt="RoboMeBit" />
              <CharacterNumber>6</CharacterNumber>
            </button>
          </ButtonContainer>
          <ButtonContainer>
            <button onClick={() => setCurrentCharacter('SubMeBit')}>
              <CharacterImage src={fun7} alt="SubMeBit" />
              <CharacterNumber>7</CharacterNumber>
            </button>
          </ButtonContainer>
          <ButtonContainer>
            <button onClick={() => setCurrentCharacter('FatMeBit')}>
              <CharacterImage src={fun8} alt="FatMeBit" />
              <CharacterNumber>8</CharacterNumber>
            </button>
          </ButtonContainer>
          <ButtonContainer>
            <button onClick={() => setCurrentCharacter('FatMeBit')}>
              <CharacterImage src={fun9} alt="EndermanMeBit" />
              <CharacterNumber>9</CharacterNumber>
            </button>
          </ButtonContainer>
          <ButtonContainer>
            <button onClick={() => setCurrentCharacter('FatMeBit')}>
              <CharacterImage src={fun0} alt="SantaMeBit" />
              <CharacterNumber>0</CharacterNumber>
            </button>
          </ButtonContainer>
        </CharacterSelection>
        </CharacterSelectContainer>
        <div className="dot" />
        <PopUp style="position: relative; display: inline-block;" trigger={buttonPopup} setTrigger={setButtonPopup} />
        <Canvas shadows gl={{ alpha: false }} camera={{ fov: 45 }}>
          <ambientLight ref={ambientLightRef} intensity={0.5} />
          <directionalLight ref={directionalLightRef} position={[1, 1, 1]} intensity={1} castShadow />

          <Suspense fallback={null}>
            <Physics gravity={[0, -30, 0]}>
              <Earth />
              <mesh rotation={[0, Math.PI,0]} ref={earthRef} position={[0, 7, 0]}>
                <EmptyDome position={[0,7,0]} scale={[2, 2, 2]}  />
            {/* {    <Butt1 onClick={() => setButtonPopup(!buttonPopup)} />} */}
                <group>
                {Array.from({ length: monitorsCount }).map((_, i) => {
                  const angle = (i / monitorsCount) * Math.PI * 2; // Calculating the angle for positioning around the circle
                  return (
                    <MuseumMonitor
                      key={i}
                      position={[
                        radius * Math.cos(angle), // X position
                        -10, // Y position (assuming you want them all at this height)
                        radius * Math.sin(angle) // Z position
                      ]}
                      scale={3} // Scale of each monitor
                      rotation={[0, 2*angle, 0]} // Adjust rotation to make the monitor face the center
                    />
                  );
                })}


                </group>
  {/* {              <Butt2 />
                <Butt3 />
                <Butt4 />} */}
              </mesh>
              <group >
       
              <MeBit currentCharacter={currentCharacter} />

              </group>
       
              <Ground />
        
            </Physics>
            <PointerLockControls enabled={!buttonPopup} />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </PersonalContainer>
  );
}

export default Personal;
