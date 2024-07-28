import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom';
import { BufferGeometry } from 'three';
import { motion } from 'framer-motion';


export const PricingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 2780px;
    height: 1440px;
    color: #fff;
 
   
  
   
  
  
`

export const PricingRow = styled.div`


    display: grid;
    grid-auto-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (!imgStart ? `'col1 col2 col3 '` : `'col3 col2 col1'`)};
    text-align: center;
    grid-gap: 200px;
   


    `

export const Planes = styled.div`
    position: absolute;
    width: 1450px;
    height: 120px;
    left: 50%;
    transform: translate(-50%, 50%);

`

export const P1 = styled.div`
    top: -100px;
    position: absolute;

    width: 450px;
    height: 120px;
 
    background-repeat: no-repeat;
    background-size: cover;

`
export const P2 = styled.div`
    top: -100px;
    position: absolute;
    width: 450px;
    height: 120px;

    background-repeat: no-repeat;
    background-size: cover;

`
export const P3 = styled.div`
    top: -100px;
    position: absolute;
    width: 450px;
    height: 120px;
    background-repeat: no-repeat;
    background-size: cover;

`

export const ColWrap = styled.div`



`


export const Column1 = styled.div`
  
    width: 400px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
`;
//overflow-y: scroll;
//overflow-x: hidden;
export const C1HeadBg = styled.div`

    width: 380px;
    height: 149px;
    //transform: translateY(-100px);
    position: absolute;
    top: 2%;
    background-repeat: no-repeat;
    background-size: cover;


`
export const C1Head = styled.div`

    height: 20px;
    position: absolute;
    top: 10%;

    font-weight: 600;
    font-size: 72px;
    line-height: 150%;
    /* or 60px */

    display: flex;
    align-items: center;

    color: #FFFFFF;

`

export const C1H1 = styled.div`

    width: auto;
    height: 26px;
    position: absolute;
    top: 25%;


 
    font-weight: 600;
    font-size: 25px;
    line-height: 150%;
    /* or 38px */

    display: flex;
    align-items: center;

    color: #000000;

`
export const C1H2 = styled.div`

    position: absolute;
    top: 30%;
    width: auto;
    height: 72px;
   
    
    font-weight: 600;
    font-size: 64px;
    line-height: 54%;
    /* or 35px */

    display: flex;
    align-items: center;
    justify-content: center;

    color: #000000;


`
export const C1Text = styled.div`
    position: absolute;
    top: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    white-space: nowrap;

    letter-spacing: 0.07em;
    color: #000000;
    font-weight: 800;
    font-size: 24px;
    line-height: 35%;

    width: auto;
    height: 180.37px;


`
export const C1Button = styled.button`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
    font-weight: 900;
    font-size: 24px;
    margin-top: 400px;
    width: 200px;
    height: 50px;
  color: #fff;
    background: #8D1010;
    border-radius: 5px;

`

export const Column2 = styled.div`
  
    
    width: 400px;
    height: 670px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    `

export const C2HeadBg = styled.div`


    width: 368.3px;
    height: 149px;
    position: absolute;
    top: 2%;
    background-repeat: no-repeat;
    background-size: cover;

`
export const C2Head = styled.div`

    width: auto;
    height: 30px;
    position: absolute;
    top: 10%;

    font-weight: 600;
    font-size: 72px;
    line-height: 150%;
    /* or 60px */

    display: flex;
    align-items: center;

    color: #FFFFFF;

`

export const C2H1 = styled.div`

    width: auto;
    height: 26px;
    position: absolute;
    top: 25%;


 
    font-weight: 600;
    font-size: 25px;
    line-height: 150%;
    /* or 38px */

    display: flex;
    align-items: center;

    color: #000000;

`
export const C2H2 = styled.div`

    width: auto;
    height: 58px;
    position: absolute;
    top: 30%;

   
    font-weight: 600;
    font-size: 64px;
    line-height: 54%;
    /* or 35px */

    display: flex;
    align-items: center;

    color: #000000;


`
export const C2Text = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    position: absolute;
    top: 35%;
    white-space: nowrap;

    letter-spacing: 0.07em;
    color: #000000;
    font-weight: 800;
    font-size: 24px;
    line-height: 26%;

    width: auto;
    height: 268px;


    
 
`
export const C2Button = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    font-weight: 900;
    font-size: 24px;
    margin-top: 400px;
   

    width: 200px;
    height: 50px;

    cursor: pointer;
    background: #8D1010;
    border-radius: 5px;

`

export const Column3 = styled.div`
  

  
    width: 400px;
    height: 720px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
`


export const C3HeadBg = styled.div`

    width: 368.3px;
    height: 151.45px;
    position: absolute;
    top: 2%;
    background-repeat: no-repeat;
    background-size: cover;

`
export const C3Head = styled.div`

    width: 207.23px;
    height: 31px;
    position: absolute;
    top: 10%;
    font-weight: 600;
    font-size: 72px;
    line-height: 150%;
    /* or 60px */

    display: flex;
    align-items: center;

    color: #FFFFFF;

`

export const C3H1 = styled.div`

    width: auto;
    height: 26px;
    position: absolute;
    top: 25%;


    font-weight: 600;
    font-size: 25px;
    line-height: 150%;
    /* or 38px */

    display: flex;
    align-items: center;

    color: #000000;

`
export const C3H2 = styled.div`

    width: auto;
    height: 60px;
    position: absolute;
    top: 30%;

    font-weight: 600;
    font-size: 64px;
    line-height: 54%;
    /* or 35px */

    display: flex;
    align-items: center;

    color: #000000;


`
export const C3Text = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    position: absolute;
    top: 35%;
    gap: 15px;
    white-space: nowrap;
    letter-spacing: 0.07em;
    color: #000000;
    font-weight: 800;
    font-size: 24px;
    line-height: 26%;
    width: auto;
    height: 279.37px;
  

`
export const C3Button = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    font-weight: 900;
    font-size: 24px;
    margin-top: 400px;
  
    width: 200px;
    height: 50px;
    cursor: pointer;
    background: #8D1010;
    border-radius: 5px;

`