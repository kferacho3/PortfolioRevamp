import React, { useState } from 'react';
import { BlurredBackground, DisclaimerButton, DisclaimerImage, DisclaimerPopup, DisclaimerText, ExitIcon } from './DisclaimerElements';

const Disclaimer = ({ text, buttonImage, disclaimerImage, intro }) => {
  const [isDisclaimerOpen, setDisclaimerOpen] = useState(false);

  const toggleDisclaimer = () => {
    setDisclaimerOpen(!isDisclaimerOpen);
  };

  const closeDisclaimer = () => {
    setDisclaimerOpen(false);
  };

  const introButtonImage = 'https://racho-devs.s3.us-east-2.amazonaws.com/Images/GameInstructions2.gif';
  const introDisclaimerImage = 'https://racho-devs.s3.us-east-2.amazonaws.com/Images/GameInstructions2.gif';



  const defaultButtonImage = 'https://racho-devs.s3.us-east-2.amazonaws.com/Images/Disclaimer2.gif';
  const defaultDisclaimerImage = 'https://racho-devs.s3.us-east-2.amazonaws.com/Images/Disclaimer2.gif';

  return (
    <>
      <DisclaimerButton onClick={toggleDisclaimer}>
        <img
          src={buttonImage}
          alt="8bit Layer"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
      </DisclaimerButton>

      {isDisclaimerOpen && (
        <>
          <BlurredBackground onClick={closeDisclaimer} />
          <DisclaimerPopup initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
            <ExitIcon onClick={closeDisclaimer} initial={{ opacity: 0, rotate: -180 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 0.3 }} />
            <DisclaimerText initial={{ opacity: 0, y: 20, filter: 'blur(15px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.5 }}>
              {text}
            </DisclaimerText>
            <DisclaimerImage
              src={disclaimerImage}
              alt="Disclaimer"
              initial={{ opacity: 0, y: 0, scale: 0.1 }}
              animate={{ opacity: 1, y: '165px', scale: 0.375 }}
              transition={{ duration: 0.3 }}
            />
          </DisclaimerPopup>
        </>
      )}
    </>
  );
};

export default Disclaimer;
