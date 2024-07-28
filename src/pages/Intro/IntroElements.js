import { motion } from 'framer-motion';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const Wrap = styled.div`
height: 750vh;
width: 100vw;
z-index: -1;
//overflow: hidden; /* Enable vertical scrolling */
-webkit-overflow-scrolling: touch;
//margin-bottom: 200px;
/*
@media screen and (max-width: 1024px) {
    height: 750vh;
    }
    @media screen and (max-width: 768px) {
        height: 750vh;
    }
    @media screen and (max-width: 500px) {
        height: 332.5vh;
    }
        @media screen and (max-width: 1200px) {
        height: 637.5vh;
    }
    @media screen and (max-width: 860px) {
        height: 520vh;
     
    }
    @media screen and (max-width: 728px) {
   
        height: 450vh;
        
    }
    @media screen and (max-width: 650px) {
        height: 400vh;
    }
    @media screen and (max-width: 550px) {
        height: 360.5vh;
    }
    @media screen and (max-width: 450px) {
        height: 332.5vh;
    }
    */

  


`;
export const MainContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 0%;
    overflow: hidden;
    height: 650vh;
    width: 100vw;
@media screen and (max-width: 650px) {
    height: 750vh;
    }
    @media screen and (max-width: 550px) {
        height: 750vh;
    }
    @media screen and (max-width: 450px) {
        height: 250vh;
    }
`

export const IntroContainer = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1%;
    width: 100%;
    height: 100vh; // Example adjustment
    transform-origin: center bottom;
    overflow: auto;
left: 50%;
transform-origin: translateX(-50%);
    overflow-x: hidden;
    overflow-y: hidden;
   // overflow: hidden;
   position: absolute;
  width: 100%;
  height: 100vh; /* Ensuring full viewport height */
  display: flex;
  flex-direction: column;
  align-items: center;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0, 0, 0, 0, 0.6) 100%), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)

    }
    @media screen and (max-width: 1200px) {
        min-width: 160%;
        transform:  translateX(-50%) scale(0.6);
    }
    @media screen and (max-width: 860px) {
        min-width: 200%;
        transform: translateX(-50%) scale(0.5);
    }
    @media screen and (max-width: 728px) {
        min-width: 250%;
        transform: translateX(-50%) scale(0.4);
    }
    @media screen and (max-width: 650px) {
        transform: translateX(-50%) scale(0.3);
        min-width: 300%;
    }
    @media screen and (max-width: 550px) {
        transform: translateX(-50%) scale(0.25);
        min-width: 350%;
    }
    @media screen and (max-width: 450px) {
        min-width: 400%;
        transform: translateX(-50%) scale(0.25);
        top:-25%;
        bottom: 0;
    }
`;

export const IntroImg = styled.img`
    top: 47.5%;
    left: 50%;
    z-index: -999;
    transform: translate(-50%, -50%);
    width: 720px;
    height: 720px;
    z-index: 0; 
    align-items: center;
    display:block;
    position: absolute;
    background-size: cover;
    border-top: 3px solid transparent;
    border-radius: 25px;
`;

export const IntroImg2 = styled.img`
    top: 50%;
    left: 30%;
    height: 100px;
    width: 100px;
    margin-right: -50%;
    transform: translate(-250%, -50%);
    transform: scale(-1, -1);
    z-index: 0; 
    align-items: center;
        display:block;
    position: absolute;
    border-top: 3px solid transparent;
    border-radius: 25px;
`;



export const IntroContainer2 = styled.div`
    background: #0c0c0c;
    padding: 0 30px;
    height: 100%;
    z-index: 1;
`;

export const IntroBG = styled.div`
   position: absolute;
    top: 2%;
    right: 0;

    width: 100%;
    height: 100%;
    //vx      .vc mklq  qw456789 ./overflow: hidden;
    z-index: 999999;
    transform: scale(0.9);
`;

export const VideoBg = styled.img`
    width: 100%;
    height: 100%;
    z-index: -9999px;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const IntroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;



export const IntroHContainer = styled(motion.div)`
position: absolute;
    top: 1%;
    width: 100%;
    height: 100vh; // Example adjustment
    transform-origin: center bottom;
    overflow: auto;
left: 50%;
transform-origin: translateX(-50%);

@media screen and (max-width: 1200px) {
        min-width: 160%;
        transform:  translateX(-50%) scale(0.6);
    }
    @media screen and (max-width: 860px) {
        min-width: 200%;
        transform: translateX(-50%) scale(0.5);
    }
    @media screen and (max-width: 728px) {
        min-width: 250%;
        transform: translateX(-50%) scale(0.4);
    }
    @media screen and (max-width: 650px) {
        transform: translateX(-50%) scale(0.3);
        min-width: 300%;
    }
    @media screen and (max-width: 550px) {
        transform: translateX(-50%) scale(0.25);
        min-width: 350%;
    }
    @media screen and (max-width: 450px) {
        min-width: 400%;
        transform: translateX(-50%) scale(0.25);
        top:-25%;
        bottom: 0;
    }
    
`;

export const IntroHWrap = styled(motion.div)`
margin-top: 30%;
   position: relative;


    
`;
export const IntroHWrapper = styled.div`
margin-top: -15%;
   position: relative;
z-index: 9999;

  
@media screen and (max-width: 1024px) {
    margin-top: -10%;
}


`;


export const IntroH1 = styled.h1`
  color: #FFF444;
  font-size: 3.25rem;
  margin-top: 0vh;
  text-shadow: 0 0 5px #FF0000;
  z-index: 99999;
  text-align: center;
  white-space: nowrap;
`;

export const IntroH2 = styled.h2`
  color: #FFF444;
  font-size: 8rem;
  margin-top: 0vh;
  text-shadow: 0 0 5px #FF0000;
  z-index: 99999;
  text-align: center;
`;

export const IntroH3 = styled.h3`
  color: #FFF444;
  font-size: 1.75rem;
  margin-top: 0vh;
  text-shadow: 0 0 5px #FF0000;
  z-index: 99999;
  text-align: center;
  white-space: nowrap;
`;
export const IntroP = styled.p`
    color: #FFF444;
    font-size: 6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 270%);
    text-shadow: 5px 5px #FF0000;
    z-index: 99999;
    text-align: center;
    

@media screen and (max-width: 900px) {
    font-size: 35px;
}

@media screen and (max-width: 480px) {
        font-size: 30px;

		transform: translate(-50%, -100%);
    }
`;

export const IntroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -150%);
    flex-direction: column;
    align-items: center;
    z-index: 99999;
    @media screen and (max-width: 640px) {
        align-items: center;
		display:block;
		
		margin: auto;
        margin-top: 125px;
    }
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;



export const Button4 = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#FFF444' : '#010606')} ;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '30px 30px')} ;
    color: #FF0000;
    font-size: ${({fontBig}) => (fontBig ? '30px' : '16px')} ;
    color: #FFF444;
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
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    color: ${({dark}) => (dark ? '#660099' : '#fff')};
}
`;

export const ButtonS = styled(LinkS)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#FFF444' : '#010606')} ;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '30px 30px')} ;
    color: #FF0000;
    font-size: ${({fontBig}) => (fontBig ? '30px' : '16px')} ;
    text-color: #FFF444;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    color: ${({dark}) => (dark ? '#660099' : '#fff')};
}
`;

export const Container = styled.div`
    width: 100%;

    padding-top: 40px;
    z-index: -1;
    position: relative;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    
`

export const TopLand = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

`
export const MidContainer = styled.div`
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //top: 200px;
    height: 2300px;
    min-width: 100%;
    left: 50%;
    
    position: absolute;
   // bottom: 5%;
    z-index: 1;
    overflow-x: hidden;
    overflow-y: hidden;
    overflow: hidden;
    transform: translateX(-50%) scale(0.8); /* Replaced zoom with transform */
    top:15%;


    :before {
        content: '';
        position: absolute;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0, 0, 0, 0.6) 100%), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    }
    @media screen and (max-width: 1200px) {
        min-width: 160%;
        transform:  translateX(-50%) scale(0.6);
    }
    @media screen and (max-width: 860px) {
        min-width: 200%;
        transform: translateX(-50%) scale(0.5);
    }
    @media screen and (max-width: 728px) {
        min-width: 250%;
        transform: translateX(-50%) scale(0.4);
    }
    @media screen and (max-width: 650px) {
        transform: translateX(-50%) scale(0.3);
        min-width: 300%;
    }
    @media screen and (max-width: 550px) {
        transform: translateX(-50%) scale(0.25);
        min-width: 350%;
    }
    @media screen and (max-width: 450px) {
        min-width: 400%;
        transform: translateX(-50%) scale(0.25);
        top:-25%;
        bottom: 0;
    }
`;




export const MidBg = styled.div`
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    z-index: 999;
  
    width: 100%;
    height: 4358px;

`;

export const MidImg = styled.div`
 display: inline-block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    bottom: 0px;
    right: 0px;
    background-repeat: no-repeat;
    background-size: cover;
   
    @media screen and (max-width: 420px) {
      width: 100%;
      height: 100%;
      }
    
`;


export const PlaneContainer= styled(motion.div)`
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //top: 200px;
    height: 700px;
    min-width: 100%;
    left: 50%;
    
    position: absolute;
   // bottom: 5%;
    z-index: 1;

    transform: translateX(-50%) scale(1); /* Replaced zoom with transform */

    top: 38.5%;

    :before {
        content: '';
        position: absolute;
        z-index: 2;
 
    }
    @media screen and (max-width: 1200px) {
        min-width: 160%;
        transform:  translateX(-50%) scale(0.6);
    }
    @media screen and (max-width: 860px) {
        min-width: 200%;
        transform: translateX(-50%) scale(0.5);
    }
    @media screen and (max-width: 728px) {
        min-width: 250%;
        transform: translateX(-50%) scale(0.4);
    }
    @media screen and (max-width: 650px) {
        transform: translateX(-50%) scale(0.3);
        min-width: 300%;
    }
    @media screen and (max-width: 550px) {
        transform: translateX(-50%) scale(0.25);
        min-width: 350%;
    }
    @media screen and (max-width: 450px) {
        min-width: 400%;
        transform: translateX(-50%) scale(0.25);
        top:-25%;
        bottom: 0;
    }
`;



export const BotContainer = styled.div`
    height: 1800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    transform-origin: center bottom; // Ensures scaling is relative to the bottom

    :before {
        content: '';
        position: absolute;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0, 0, 0, 0.6) 100%), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    }

    @media screen and (max-width: 1200px) {
        transform: scale(0.7);
    }

    @media screen and (max-width: 860px) {
        transform: scale(0.6);
    }

    @media screen and (max-width: 728px) {
        transform: scale(0.5);
    }

    @media screen and (max-width: 650px) {
        transform: scale(0.3);
    }

    @media screen and (max-width: 550px) {
        transform: scale(0.25);
    }
`;


export const BotH1 = styled.h1`
    color: #fff;
    font-size: 9rem;
    position: absolute;
    left: 7.5%;
    top: 57.5%;


    text-shadow: 0 0 5px #000;
    z-index: 99999;
    text-align: center;
    text-FaAlignCenter: FaCentercode;

    @media screen and (max-width: 1250px) {
   
}

@media screen and (max-width: 1000px) {
    left: 20%;
    top: 62.5%;
    margin-top: 0px;
    margin-left: 0px;
    font-size: 4.5rem;
    top: 50%;
   left: 50%;
   transform: translate(-50%,-430px);

};`


export const BotH2 = styled.h2`
    color: #fff;
    font-size: 10rem;
    position: absolute;
    left: 22.5%;
    top: 62.5%;
    text-shadow: 0 0 5px #000;
    z-index: 99999;
    text-align: center;
    text-FaAlignCenter: FaCentercode;

@media screen and (max-width: 1250px) {
    font-size: 6rem;
    
}
@media screen and (max-width: 1000px) {
    margin-top: 0px;
    margin-left: 0px;
    font-size: 4.5rem;
    top: 50%;
   left: 50%;
   transform: translate(-50%,-380px);

};`

export const ProgressBarContainer = styled.div`
  width: 250px;
  height: 25px;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  z-index: 999999;
`;

export const ProgressBar = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: #39ff14;
  transition: width 0.3s ease-in-out;
  z-index: 999999;
`;

export const Counter = styled.div`
  font-size: 12px;
  margin-top: 7.5px;
  color: #fff; /* Default color */
  text-shadow: 0 0 3px #000; /* Default text shadow */
  z-index: 999999;
`;

export const ClickCount = styled.span`
  color: #fff; /* White color */
  text-shadow: 0 0 3px #000; /* Black text shadow */
`;

export const TotalClicks = styled.span`
  color: #ffff00; /* Yellow color */
  text-shadow: 0 0 3px #ff0000; /* Red text shadow */
`;


export const CountWrap = styled.div`
  position: absolute;
  top: -40%;
  //left: 50%;
  transform: translate(-40%, -250px);
  width: 100%;
  text-align: center;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const DragContainer = styled(motion.div)`
  position: absolute;
  width: 100px; /* Define a smaller width for the draggable area */
  height: 100px; /* Define a smaller height for the draggable area */
  //top: 100px; /* Adjust the position as needed */
  //left: 100px; /* Adjust the position as needed */
  z-index: 99; /* Ensure it's on top */
  cursor: pointer; /* Ensure the cursor changes to pointer */
`;

export const BotBg3 = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: -1;
  cursor: pointer; /* Ensure the cursor changes to pointer */
`;
export const BotBg = styled(motion.div)`
  position: absolute;
  width: 1512px;
  height: 1900px;
  z-index: -1;
`;


export const BotBg2 = styled(motion.div)`
    position: absolute;
    width: 1512px;
    height: 1900px;
    z-index: 999;
    pointer-events: none;
`;


export const BotimgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;
    left: -40%;
    top: 55%;
    height: 900px;
    width: 900px;
    zoom: 0.75;
`

export const BotImg = styled(motion.div)`


    z-index: 5; 

    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
    background: url('./introImg/finme.png');
   
    &:hover {
    transition: all 0.2s ease-in-out;

    //background-image: url('./images/finme2.png');
}

`;

export const BotImg2 = styled(motion.div)`
   /*
    position: absolute;
    background-size: contain;
    background-position: bottom;
    */
    background-size: cover;
    background-repeat: no-repeat;
    bottom: 0px;
    right: 0px;
    width: 100%;
    height: 100%;

   
    
`;



export const BotImg3 = styled(motion.div)`
   /*
    position: absolute;
    background-size: contain;
    background-position: bottom;
    */
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    bottom: 500px;
    right: 350px;
    width: 100%;
    height: 100%;

   
    
`;