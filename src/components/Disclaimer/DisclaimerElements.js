import { motion } from 'framer-motion';
import { MdCancel } from 'react-icons/md';
import styled from 'styled-components';

export const DisclaimerButton = styled.button`
  position: fixed;
  bottom: 10%;
  right: 5%;
  width: 100px;
  height: 100px;
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 1000;
`;


export const DisclaimerPopup = styled(motion.div)`
  position: fixed;
  height: 500px;
  width: 800px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  background: radial-gradient(circle, #bcd6c0, #c1e6d0, #beaf9b, #c1b29e);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 9999999999999999;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  overflow: hidden;
  
`;

export const DisclaimerText = styled(motion.p)`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 20px;
  padding: 30px 30px 0px 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  line-height: 0.8;
  font-weight: 500;
`;


export const DisclaimerImage = styled(motion.img)`
position: absolute;
  width: 100%;

  height: auto;
  bottom: -40px;
`;

export const ExitIcon = styled(motion(MdCancel))`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  &:hover {
    cursor: pointer;
  }
`;

export const BlurredBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
`;
