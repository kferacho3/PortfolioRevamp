
import { motion } from 'framer-motion';
import styled from 'styled-components';





///Blurred Background

// GlobalStyles/GlobalStyles.js or wherever BlurredBackground is defined
export const BlurredBackground = styled(motion.div)`

-webkit-filter: blur(4px);
    -moz-filter: blur(4px);
    -o-filter: blur(4px);
    -ms-filter: blur(4px);
    filter: blur(4px);
    position: fixed;
    z-index: 999999;
    top: -10px;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
  position: fixed; /* or 'absolute' */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
  z-index: 10; /* Make sure this is below interactive elements */
`;
