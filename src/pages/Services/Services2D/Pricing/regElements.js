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
export const PricingRows = styled.div`

    display: flex;
    grid-auto-rows: 1fr 1fr;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 50px;

`

export const PricingRow = styled.div`


    
    display: flex;
    grid-auto-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (!imgStart ? `'col1 col2 col3'` : `'col3 col2 col1'`)};
    text-align: center;
    grid-gap: 150px;
   


    `
    export const PricingRow2 = styled.div`

    
    display: flex;
    grid-auto-columns: 1fr 1fr;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (!imgStart ? `'col1 col2'` : `'col2 col1'`)};
    text-align: center;
    grid-gap: 200px;
  

   flex: 0 0 calc(50% - 320px);


    `





export const B1 = styled.div`
    top: -85px;
    position: absolute;

    width: 500px;
    height: 100px;
 
    background-repeat: no-repeat;
    background-size: cover;

`
export const B2 = styled.div`
    top: -85px;
    position: absolute;
    width: 500px;
    height: 100px;

    background-repeat: no-repeat;
    background-size: cover;

`
export const B3 = styled.div`
    top: -85px;
    position: absolute;
    width: 475px;
    height: 100px;
    background-repeat: no-repeat;
    background-size: cover;

`

export const Boat1 = styled.div`
    position: absolute;
    width: 520px;
    height: 280px;
    top: 74%;

    background-repeat: no-repeat;
    background-size: cover;

`
export const Boat2 = styled.div`
     position: absolute;
    width: 520px;
    height: 280px;
    top: 74%;



    transform: matrix(-1, 0, 0, 1, 0, 0);

    background-repeat: no-repeat;
    background-size: cover;

`


export const ColWrap = styled.div`



`


export const Column1 = styled.div`
  
    width: 400px;
    height: 500px;
    filter: drop-shadow(10px 0px 30px rgba(6, 2, 2, 0.35));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
`;
export const C1HeadBg = styled.div`
    position: absolute;
    width: 350px;
    height: 166px;
    top: 2%;

    background: linear-gradient(180deg, #B14726 0%, rgba(179, 166, 51, 0) 100%);
    border-radius: 10px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    background-repeat: no-repeat;
    background-size: cover;
`
export const C1Head = styled.div`
    position: absolute;
    width: auto;
    height: 129px;
    top: 5%;


    font-weight: 600;
    font-size: 40px;
    line-height: 100%;
    /* or 40px */

    display: flex;
    align-items: center;

    color: #FFFFFF;
`

export const C1H1 = styled.div`
    position: absolute;
    width: auto;
    height: 23.52px;
    top: 35%;
    white-space: nowrap;
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
    width: auto;
    height: 54px;
    top: 42.5%;

   
    font-weight: 600;
    font-size: 72px;
    line-height: 54%;
    /* or 35px */

    display: flex;
    align-items: center;

    color: #000000;
`
export const C1Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 30px 0px 0px;
    gap: 10px;
    top: 55%;
    white-space: nowrap;
    letter-spacing: 0.07em;
    font-weight: 800;
    font-size: 24px;
    line-height: 50%;
    white-space: nowrap;
    position: absolute;
    color: #000;
    width: auto;
    height: 75.37px;
 
`
export const C1Button = styled.button`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    gap: 10px;

    position: absolute;
    width: 171px;
    height: 50px;
    top: 80%;
    font-weight: 900;
    font-size: 25px;
    line-height: 150%;
    cursor: pointer;
    color: #fff;
    background: #8D1010;
    border-radius: 5px;
`

export const Column2 = styled.div`
  
    width: 350px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
`;

export const C2HeadBg = styled.div`
    position: absolute;
    width: 326px;
    height: 128.74px;
    top: 2%;
`
export const C2Head = styled.div`
    position: absolute;
    width: 200px;
    height: 60px;
    top: 8%;

    font-weight: 600;
    font-size: 40px;
    line-height: 75%;
    /* or 30px */

    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`
export const C2H1 = styled.div`
   position: absolute;
    width: auto;
    height: 20px;
    top: 35%;
    white-space: nowrap;

 
    font-weight: 600;
    font-size: 25px;
    line-height: 20%;
    /* or 38px */

    display: flex;
    align-items: center;

    color: #000000;
    
`
export const C2H2 = styled.div`
 position: absolute;
    width: auto;
    height: 29px;
    top: 42.5%;
    white-space: nowrap;

    font-weight: 600;
    font-size: 48px;
    line-height: 54%;
    /* or 26px */

    display: flex;
    align-items: center;

    color: #000000;
`

export const C2Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-weight: 800;
    font-size: 24px;
    line-height: 35%;
    gap: 15px;
    color: #000;
    position: absolute;
    width: auto;
    height: 130px;
    top: 50%;


`

export const C2Button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    gap: 10px;
    font-weight: 900;
    font-size: 25px;
    line-height: 150%;
    position: absolute;
    width: 150px;
    height: 40px;
    color: #fff;
    top: 85%;
    cursor: pointer;
    background: #8D1010;
`