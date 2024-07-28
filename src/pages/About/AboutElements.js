import { BsDownload } from 'react-icons/bs';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';


import { Link as LinkR } from 'react-router-dom';

export const AboutContainer3 = styled.div`

width: 100%; /* Full width */
  height: 100vh; /* Full height of the viewport */
  position: fixed;
  margin: 0;
  padding: 0;

   
`;

export const StyledCanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden; // Prevent scrolling outside the canvas
  //background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0, 0, 0, 0, 0.6) 100%), 
    //    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
`;
export const AboutContainer = styled.div`
  width: 100vw; // Full viewport width
  height: 100vh; // Full viewport height
  position: relative; // If needed for positioning
  overflow: hidden; // Prevent scrolling within the container
  cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxMCIgZmlsbD0iI0U4QjA1OSIvPjwvc3ZnPg=='),
    auto;
    
    background-color: #FBDA61;
//background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);

    
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
  }
`;
export const AboutImgWrap = styled.div`

display: flex;
transform: translateY(10px);


z-index: 999999999;
`
export const AboutImg = styled.img`

   // top: 80.5%;
    left: 60%;
    height: 200px;
    width: 250px;
    margin-right: -50%;
  //  transform: translate(-250%, 125%);
    z-index: 999999; 
    align-items: center;
    display:block;
    position: absolute;
    border-top: 3px solid transparent;
    border-radius: 25px;
/*
    @media screen and (max-width: 1120px) {
        position: absolute;
    left: 65%;
}*/
    @media screen and (max-width: 850px) {
        zoom: 0.75;
        top: 70%;
        align-items: center;
        display:block;
        position: absolute;
        left: 150%;
    }
    /*animation: linear 60s infinite;*/
`;
export const AboutImg2 = styled.img`
 
    margin-right: 0%;
    height: 400px;
    width: 475px;
    z-index: 0; 
    position: absolute;
    margin-top: 50px;
    left: -20px;
    zoom: 1.2;
    @media screen and (max-width: 1250px) {
        zoom: 1.2;
    }

/*
    @media screen and (max-width: 1120px) {
        position: absolute;
    left: 65%;
}*/
    @media screen and (max-width: 850px) {
        left: 20px;
    }
    /*animation: linear 60s infinite;*/
`;



export const AboutContainer2 = styled.div`

   
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

export const AboutBG = styled.div`

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    overflow: hidden;  
`;

export const VideoBg = styled.img`

    width: 100%;
    height: 100%;
    z-index: -9999px;
    -o-object-fit: cover;
    object-fit: cover;
`;


export const AboutTextWrap2 = styled.div`

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
        display:block;
        margin: auto;
        margin-top: 50px;
        zoom: 0.5;
    }
`;





export const TextWrapper = styled.div`
    max-width: 90%;
    text-align: center;
    
    
`;

export const Subtitle = styled.p`
    margin-top: 10px;
    font-size: 32px;
    color: #f0f0f0;
    font-weight: 900;
    text-align: center;
    text-shadow: 3px 3px #000000;
`;

export const Subtitle2 = styled.p`
    margin-top: 20px;
    font-size: 48px;
    color: '#010606';
    font-weight: 900;
    text-align: left;
`;

export const Subtitle3 = styled.p`
    margin-top: 20px;
    margin-left: 15px;
    font-size: 32px;
    color: '#010606';
    font-weight: 900;
    text-align: center;
`;

export const Column1 = styled.div`

    margin-top: 32px;
    position: fixed;
    top: 50%;
    left: 30%;
    padding: 0 15px;
    transform: translate(-50%, -50%);
    align-items: center;
    z-index: 1;
   // transform: translate(-50%, 275%);
    width: 800px;
    height: 350px;
    color: #fff;
    text-shadow: 2px 2px #000;
    background-image: url('./aboutClouds/dbord3.png');
    background-position:center;;
    background-size: cover;
    background-repeat: no-repeat;
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

export const Column2 = styled.div`
    position:fixed; 
    width: 650px;
    height: 600px;
    /*
    background: linear-gradient(112.1deg,
                rgb(32, 38, 57) 11.4%, 
                rgb(63, 76, 119) 70.2%);

    */
    
    background-image: url(${props => props.img});
    background-size: auto; /* Or specify a fixed size (e.g., 100px 100px) to control the repeat size */
    background-position: center;
    background-repeat: repeat; 
    border: 1px solid #000;
    border-radius: 25px;
    right: 30%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 1350px) {
      zoom: 0.99;
    }
    @media screen and (max-width: 1250px) {
 
        zoom: 0.9;
    }
    @media screen and (max-width: 1050px) {
 
        zoom: 0.85;
        }
    @media screen and (max-width: 850px) {
       // zoom: 0.8;
        display: flex;
        position: absolute;
        transform: translate(-50%, 70%);
        flex-direction: column;
        align-items: center;
            
    }
`;

export const Column3 = styled.div`

    top: 50%;
    left: 30%;
    padding: 0 15px;
    transform: translate(-50%, -50%);
    grid-area: auto;
    width: 600px;
    height: 350px;
    color: #fff;
    position: fixed;
    text-shadow: 3px 3px #000;
    //background-image: url('./images/cbord2.png');
    background-image: url(${props => props.img});
    background-size: auto; /* Or specify a fixed size (e.g., 100px 100px) to control the repeat size */
    background-position: center;
    background-repeat: repeat; 
    border: 1px solid #000;
    border-radius: 10px;
    text-align: center;
    white-space: normal;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    
`;


export const AboutH1 = styled.h1`

    color: #ffffbf;
    font-size: 12rem;
    position: fixed;
    white-space: nowrap;
    top: 15%;
    left: 0;
  
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

export const AboutH2 = styled.h2`
    margin-top: 50px;
    font-size: 5rem;
    font-weight: 900;
    text-align: center;
    color: #ffffff;
    text-shadow: 3px 3px #000000;
    
`;



export const AboutBtnWrapper = styled.div`

 
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
        display:block;
        margin: auto;
        margin-top: 50px;
        zoom: 0.9;
    }
`;
export const AboutBtnWrapper2 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Creates 5 columns of equal size */
  gap: 10px; /* Adjusts the space between grid items */
  justify-content: center; /* Centers grid items horizontally */
  align-items: center; /* Centers grid items vertically */
  position: fixed;
  left: 50%;
  bottom: 5%;
  width: 50%; /* Adjust width as needed */
  transform: translateX(-50%); /* Centers the container itself horizontally */
  z-index: 9999999999;

  @media screen and (max-width: 1050px) {
    transform: scale(0.8) translateX(-50%);
  }

  @media screen and (max-width: 850px) {
    transform: scale(0.6) translateX(-50%);
    top: 150px;
  }

  @media screen and (max-width: 640px) {
    top: auto; /* Reset top value for smaller screens if needed */
    bottom: 20px; /* Adjust for spacing from the bottom */
    width: 90%; /* Adjust width as needed */
    grid-template-columns: repeat(5, 1fr); /* Ensures 5 buttons in a row */
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

    border-radius: 20px;
    background-position:center;
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

export const Download = styled(BsDownload)`
    margin-left: 8px;
    font-size: 20px;
`;

export const Button1 = styled.a`
    
    background-position:center;
    background-size: cover;
    background-repeat: no-repeat;

    height: 75px;
    width: 75px;
    z-index: 9999999999;
    text-shadow: 1.5px 1.5px #000;
    //padding: ${({big}) => (!big ? '14px 48px' : '30px 30px')} ;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    display:inline-block;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: all 0.2s ease-in-out;
   

&:hover {
    transition: all 0.2s ease-in-out; 
    background-position:center;
    background-size: cover;
    background-repeat: no-repeat;
    transform: scale(1.02);
    color: ${({dark}) => (dark ? '#FFF444' : '#fff')};
}
`;


export const AboutCloudWrap = styled.div`
    
    top: 30px;
    right: 0;
    left: -220px;
    bottom: 0;
    position:absolute; 
    display:inline-block; 
    margin:0 auto;
  

   
    
`;




export const SkillP = styled.p`
 
    margin: 0;
    font-weight: 900;

    font-size: 40px;
   
    
`
export const SKillHR = styled.hr`
    display: none;
    border: 5px solid #fff;
    border-radius: 10px;
`

export const SKillSp = styled.span`

    position: absolute;
    right: 10px;
    display: inline-block;
    width: 30px;
    top: 11px;
    text-align: right;
    font-weight: normal;
    color: #fff;
    font-size: 25px;
    
   
`
export const SkillContainerUl = styled.ul`

  margin: 0 0 30px 0;
  padding: 0;
  left: 90px;
  width: calc(90% - 50px);
  position: relative;
  zoom: 0.95;
  

`

export const SkillContainerli = styled.li`
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
    margin: 10px 0;
    transition: width 300ms ease-in-out;
    

`