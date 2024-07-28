import { motion } from 'framer-motion';
import styled from 'styled-components';


export const ServicesContainer = styled.div`
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    /* Prevents overflow on the x-axis */
   
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 1;
    overflow-x: hidden;
  
    
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

      @media screen and (max-width: 1125px) {
        zoom: 0.5;
    }
    @media screen and (max-width: 860px) {
        zoom: 0.4;
     
    }
    @media screen and (max-width: 728px) {
   
        zoom: 0.3;
        
    }
    @media screen and (max-width: 650px) {
        zoom: 0.2;
    }
    @media screen and (max-width: 550px) {
        zoom: 0.1;
    }
    @media screen and (max-width: 450px) {
        zoom: 0.05;
    }
 
`;

export const ServicesImg = styled(motion.img)`

    position: absolute;
   top: 70%;
   left:  600px;
    height: 250px;
    width: 350px;
    z-index: 1; 
    
    border-top: 3px solid transparent;
    border-radius: 25px;
    @media screen and (max-width: 860px) {
        zoom: 0.8;
      
     
    }
    @media screen and (max-width: 728px) {
        zoom: 0.75;
     
        
    }
    @media screen and (max-width: 650px) {
        zoom: 0.5;
  
    }
    @media screen and (max-width: 550px) {
        zoom: 0.6;
        top: 80%;
        left:  200px;
    }
`;


export const VideoBg = styled.img`
    width: 100%;
    height: 100%;
    z-index: -9999px;
    -o-object-fit: cover;
    object-fit: cover;
    
`;







export const ServicesContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  transform: translateY(-250px);
  overflow: hidden;


  
 `
export const ServicesWrapper = styled.div`
    max-width: 1500px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 40px;
    transform: scale(0.7);
  
    @media screen and (max-width: 1000px) {
      
    transform: scale(0.6);
    grid-gap: 5px;
  }

    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr;


    transform: scale(0.55);
  }
`
export const ServicesCard = styled.div`
  /*background: #fff;*/
  background-image: url(./images/paper2.jpg);
  background-position:center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 600px;
  padding:  100px;
  width: 450px;

  transform: scale(.92);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const ServicesIcon = styled.img`
  height: 120px;
  width: 120px;
  
  margin-top: 15px;
  margin-bottom: 25px;

`
export const ServicesH1 = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 25px;
`


export const ServicesH2 = styled.h1`
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    margin-left: 50%;
    white-space: nowrap;
    transform: translateX(-75%);
    color: #fff;
    font-size: 15rem;
    position: absolute;
    text-shadow: 3px 3px #000;
    z-index: 99999;
    text-align: center;




  
`;

export const ServicesP = styled.p`
  font-size: 1.5rem;
  text-align: center;
  `

export const ServicesM = styled.div`
    left:  50%;
    top: 50%;
    width: 60px;
    height: 100px;
    z-index:  999999;
    background-position:center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/scrollM.gif');
    position: absolute;
`

export const ServicesMT = styled.p`
    left:  -225%;
    top: -100%;
    align-items: center;
    position: absolute;
    font-size: 3rem;
    text-align: center;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
`

export const InfoContainer = styled.div`

    justify-content: center;
    align-items: center;
    position: relative;
    width: 2780px;
    height: 1440px;
    color: #fff;
    overflow-y: hidden;

`;

export const InfoContainer1 = styled.div`
    position: relative;
    display: flex;
    width: 2780px;
    height: 1440px;
    color: #fff;
    overflow-y: hidden;
  
`;

export const InfoWrapper = styled.div`
    
    display: flex;
    position: relative;
    z-index: 1;
    top: 150px;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    @media screen and (max-width: 1125px) {
       
    }
    @media screen and (max-width: 860px) {
        
     
    }
    @media screen and (max-width: 728px) {
       
       
        
    }
    @media screen and (max-width: 650px) {
        zoom: 0.8;
       
    }
    @media screen and (max-width: 550px) {
      
    }
    @media screen and (max-width: 450px) {
       
    }

`;

export const InfoRow = styled.div`

    display: grid;
    grid-auto-columns: 1fr 1fr;
    align-items: center;
    grid-template-areas:'col1 col2';
    text-align: center;
    grid-gap: 450px;

    
`;

export const Column1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  
    text-align: center;
    height: 1307px;
    width: 845px;
    align-items: center;
    zoom: 0.9;
    grid-area: col1;

`;

export const Column2 = styled.div`
  
    grid-area: col2;
  
`;


export const TextWrapper = styled.div`
   
    max-width: 375px;
`;

export const EggHeader = styled.div`
    position: absolute;
    top: 5%;
    width: 400px;
    height: 125px;
   
    background-repeat: no-repeat;
    background-size: cover;
`

export const EggInner = styled.div`
  
    top: 45%;
    width: 485px;
    height: 520px;
    left: 50%;
    transform: translateX(-10%);
    
    background-repeat: no-repeat;
    background-size: cover;


`
export const ImgWrap = styled.div`
    
    height: 100%;
`;

export const Img = styled.img`
    width: 900px;
    height: 900px;

   
`;
export const Img2 = styled.div`
    height: 1307px;
    width: 845px;
    border-radius: 0px;

    z-index: -1;
    

    background-position:center;
    background-size: cover;
    background-repeat: no-repeat;

   
`;

export const TopLine = styled.p`

    color: ${({lightText}) => (lightText ? '#000' : '#fff')};
    color: ${({darkText}) => (darkText ? '#000' : '#fff')};
    text-shadow: ${({shadow}) => (shadow ? '2px 2px #fff' : '2px 2px #000')};

    text-shadow: ${({topLineS}) => (topLineS ? '2px 2px #000' : '2px 2px #fff')};
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    font-weight: 900;
    width: 300px;
    position: absolute;
    letter-spacing: 2px;
    text-transform: uppercase;
    left: 50%;
    transform: translateX(-50%);
    top: 0%;
`;

export const Heading = styled.h1`
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 88px;
    font-weight: 900;
    color: ${({lightText}) => (lightText ? '#000' : '#FFF444')};
    letter-spacing: 5px;

    text-shadow: ${({shadow}) => (shadow ? '0 2px 3px #747474, 1px 3px 4px #222, 0 8px 3px #474747, 0 11px 4px #747474,0 14px 4px #565656, 0 17px 4px #343434, 0 20px 4px #171717' : '0 2px 3px #747474, 1px 3px 4px #222, 0 8px 3px #474747, 0 11px 4px #747474,0 14px 4px #565656, 0 17px 4px #343434, 0 20px 4px #171717')};
    
    text-align: center;

`;

export const SubtitleWrap = styled.ul`

    top: 15%;
    left: 55%;
    transform: translateX(-50%);
    width: 450px;
    display: flex;
    flex-direction: column;
    grid-gap: 50px;
    position: relative;
    list-style-image: url('./servicesImg/rachoLogo.svg');

`
export const Subtitle = styled.li`
    font-weight: 200;
    font-size: 32px;
    line-height: 5%;

    grid-gap: 30px;
  
    text-align: left;
    position: relative;
    /* or 4px */
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    letter-spacing: 0.05em;
    max-width: 550px;
    line-height: 76%;
    color: ${({darkText}) => (darkText ? '#000' : '#fff')};
    text-shadow: ${({shadow}) => (shadow ? '3px 3px #fff' : '3px 3px #000')};
    
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

 
`;



export const HWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
   height: 100vh;
    position: absolute;

    transform: rotate(90deg) translateY(-100vh);
    transform-origin: top left;




`
export const OOWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
   z-index:  -999999;
    position: absolute;
    background: linear-gradient(to bottom, #20BF55 0%,#01BAEF 100%);
    

`

export const OWrapper = styled.div`
    width: 100vh;
    height: 100vw;
    transform: rotate(-90deg) translateX(-100vh);
    transform-origin: top left;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
  
    position: absolute;
    


`


export const SWrapper = styled.div`
    width: 2780px;
    height: 1440px;
    //or height: 100vh;
    zoom: 0.6;
    bottom: 0;


`
export const CWrapper = styled(motion.img)`


    height: 100vh;
    width: 800vh;
    position: absolute;
    top: 0;
    left: 0;
        z-index: -3;

   

`
