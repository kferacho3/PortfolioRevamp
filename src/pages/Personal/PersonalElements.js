import { FaWpexplorer } from 'react-icons/fa';
import { VscSmiley } from 'react-icons/vsc';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
export const Wrap = styled.div`
    position: relative;



`;
export const CanvasContainer = styled.div`
    position: absolute;
   // z-index: 1;
    height: auto;
    width: 100vw;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: all;
    overflow: scroll;
    
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0, 0, 0, 0, 0.6) 100%), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)
        

    }
  
`;

export const PersonalContainer = styled.div`
    /*
    display: flex;
    justify-content: center;
    align-items: center
    padding: 0 30px;
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: -10000;
    overflow-x: hidden;
    */
    height: 100vh;
    position: relative;
    padding: 16px;
    box-sizing: border-box;
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
    /*
    @media screen and (max-width: 850px) {
        height: 260vh;
    }*/
`;
export const PersonalImg = styled.img`
    
    height: 300px;
    width: 350px;
    
    border-top: 3px solid transparent;
    border-radius: 250px;
`;
export const PersonalContainer2 = styled.div`
    background: #0c0c0c;
  
    padding: 0 30px;
    height: 100%;
    z-index: 1;

`;

export const PersonalBG = styled.div`
    position: absolute; 
    top: 0;
    right: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
`;

export const VideoBg = styled.img`
    width: 100%;
    height: 100%;
    z-index: -9999px;
    -o-object-fit: cover;
    object-fit: cover;
    
`;

export const PersonalContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const PersonalH1 = styled.h1`
    color: #FFF444;
    font-size: 8rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-60%, -250%);
    text-shadow: 5px 5px #FF0000;
    z-index: 99999;
    text-align: center;
    text-FaAlignCenter: FaCentercode;

@media screen and (max-width: 1250px) {
    font-size: 6rem;
}

@media screen and (max-width: 850px) {
        font-size: 3.5rem;

    transform: translate(-50%, -200%);
    }
`;



export const PersonalH2 = styled.h2`
    color: #FFF444;
    font-size: 7rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-70%, -175%);
    text-shadow: 5px 5px #FF0000;
    z-index: 99999;
    text-align: center;
    text-FaAlignCenter: FaCentercode;

    @media screen and (max-width: 1250px) {
    font-size: 5rem;
}

@media screen and (max-width: 850px) {
        font-size: 3.25rem;

    transform: translate(-50%, -20%);
    }
`;

export const PersonalH3 = styled.h3`
    color: #FFF444;
    font-size: 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -100%);
    text-shadow: 5px 5px #FF0000;
    z-index: 99999;
    text-align: center;
    text-FaAlignCenter: FaCentercode;

@media screen and (max-width: 1250px) {
    font-size: 4rem;
}

@media screen and (max-width: 850px) {
        font-size: 3.25rem;

    transform: translate(-50%, 100%);
    }
`;
export const PersonalP = styled.p`
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

export const PersonalBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 150%);
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

export const ArrowForward = styled(FaWpexplorer)`
    margin-left: 8px;
    font-size: 20px;
`;
export const ArrowRight = styled(VscSmiley)`
    margin-left: 8px;
    font-size: 20px;
`;

export const Button4 = styled(LinkR)`
    margin-top: 125px;
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
    z-index: 99999;
&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    color: ${({dark}) => (dark ? '#660099' : '#fff')};
}
`;