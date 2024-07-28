import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom';
import { BufferGeometry } from 'three';
import { motion } from 'framer-motion';


export const SceneContainer = styled.div`

   
    position: relative;
    width: 2780px;
    height: 1440px;
    overflow-x: hidden;
    
    
`
export const SceneBgContainer = styled.div`


@media screen and (max-width: 640px) {
        //transform: translateY(50px);
    }

`

export const SceneBg = styled.div`

    position: relative;
    width: 1523px;
    height: 1120px;

    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;

`
export const SceneButton = styled(LinkR)`

    position: relative;
    background-position:center;
    background-size: cover;
    background-repeat: no-repeat;

    height: 100%;
    width: 100%;
    cursor: pointer;
    //pointer-events: none;
    display:inline-block;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    background-repeat: no-repeat;
    background-size: cover;
    &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
}

`

export const SceneSign = styled.div`
    height: 1440px;
    width: 2780px;
    z-index: -9999;
 
    position: absolute;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
`
export const SceneButtonWrap = styled(LinkR)`

    position: absolute;
 
    display: inline-block;
    left: 57.35%;
    top: 44.5%;
    width: 250px;
    height: 250px;
    cursor: pointer;
 
    background-repeat: no-repeat;
    background-size: cover;

`
export const SceneText= styled.div`

    height: 75.37166595458984px;
    width: 180px;
  
    left: 44.25%;
    top: 22.65%;


`

export const CanvasContainer = styled.div`
    overflow: hidden;
    overflow:hidden; 
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 44.25%;
    top: 29.5%;
    width: 47.5%;
    height: 35%;
    background-color: #fff;
    border: black;
    border-radius: 20px;
    z-index: 9999;
    :hover{overflow: scroll;} 
    
`;

export const ServicesBtnWrapper = styled(LinkR)`
   
  
   position: absolute;
 
    display: inline-block;
    left: 71%;
    top: 45%;
    width: 275px;
    height: 250px;
    cursor: pointer;

    background-repeat: no-repeat;
    background-size: cover;

`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const Button4 = styled.div`

    border-radius: 20px;
    background: url(deer.gif);
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    white-space: nowrap;
    color: #FF0000;
    position: relative;
    text-decoration: none;
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    font-size: 24px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: all 0.2s ease-in-out;
    z-index: 99999;
    
&:hover {
    transition: all 0.2s ease-in-out;
    color: ${({dark}) => (dark ? '#FFF444' : '#fff')};
    transform: scale(1.05);
}
@media screen and (max-width: 640px) {
        
    }
`;