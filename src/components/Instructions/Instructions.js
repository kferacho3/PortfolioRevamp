import React, { useState } from 'react';
import { BlurredBackground, ExitIcon, InstructionsButton, InstructionsImage, InstructionsPopup, InstructionsText } from './InstructionsElements';

import instructionsImage from '../../images/MeBitInstructions.png';

const Instructions = ({ text, image = null }) => {
  const [isInstructionsOpen, setInstructionsOpen] = useState(false);

  const toggleInstructions = () => {
    setInstructionsOpen(!isInstructionsOpen);
  };

  const closeInstructions = () => {
    setInstructionsOpen(false);
  };
  const meBitConfused = 'https://racho-devs.s3.us-east-2.amazonaws.com/fun/Instructions/MeBitConfused.gif';
  const eightBitImage = 'https://racho-devs.s3.us-east-2.amazonaws.com/fun/Instructions/8bit_.png';
  return (
    <>
 
      <InstructionsButton onClick={toggleInstructions}>
        <img src={eightBitImage} alt="8bit Layer" style={{ position: 'absolute', width: '100%', height: '100%' }} />
        <img src={meBitConfused} alt="MeBitConfused Layer" style={{transform: 'scale(0.7) translateY(-25px)', position: 'absolute', width: '100%', height: '100%' }} />
      </InstructionsButton>

      {isInstructionsOpen && (
        <>
          <BlurredBackground onClick={closeInstructions} />
          <InstructionsPopup initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
            <ExitIcon onClick={closeInstructions} initial={{ opacity: 0, rotate: -180 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 0.3 }} />
            <InstructionsText initial={{ opacity: 0, y: 20, filter: 'blur(15px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.5 }}>
            {text}
            </InstructionsText>
            <InstructionsImage src={instructionsImage} alt="Instructions" initial={{ opacity: 0, y: 0, scale: 0.4 }} animate={{ opacity: 1, y: '60px', scale: 0.7 }} transition={{ duration: 0.3 }} />
          </InstructionsPopup>
        </>
      )}

    </>
  );
};

export default Instructions;
