import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PreloaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: none;
`;

export const Circle = styled(motion.div)`
  width: 124px;
  height: 125px;
  left: 50%;
  margin-bottom: 25px;
  border-radius: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export const LoadingText = styled(motion.div)`
  display: flex;
  font-size: 32px;
  font-weight: bold;
  span {
    display: inline-block;
    margin-right: 5px;
  }
`;
