import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom';
import { BufferGeometry } from 'three';
import { motion } from 'framer-motion';


export const SceneContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 2780px;
    height: 1440px;
    color: #fff;
    
`

export const SceneBg = styled.div`

    position: relative;
    width: 1523px;
    height: 1120px;

    z-index: 9999999999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;

`

export const CanvasContainer = styled.div`
    overflow: hidden;
    overflow:hidden; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 50%;
    margin-top: 125px;
    background-color: #fff;
    border: black;
    border-radius: 20px;
    :hover{overflow: scroll;} 
    
`;