

import styled from 'styled-components';


export const MessageContainer = styled.div`
    display: flex;
    position: fixed;
    z-index: 9999999999;
   
    left: 0px;
    top: 35%;
    zoom: 0.8;



 
    @media screen and (max-width: 550px) {
       zoom: 0.5;
       //transform: rotate(90deg) translate(775%, -150%);
       transform: rotate(90deg);
       left: 46%;
       top: 86%;
  

    }


`

export const MessageR1 = styled.button`
    position: absolute;
    left: -28.57%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    background: #FFDB51;
    border-radius: 30px;

`

export const MessageR2 = styled.button`
    position: absolute;
    left: -17.14%;
    right: 12.86%;
    top: 2.35%;
    bottom: 2.35%;
    cursor: pointer;
    background: #8B9F2C;
    border-radius: 20px;

    &:hover {
        background: #FF0000;
        text-decoration: underline;
      
    }


`

export const MessageText = styled.p`


    position: absolute;
    left: -110%;
    top: -10%;
    bottom: 0%;
    white-space: nowrap;
    pointer-events: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 17px;
    /* or 53% */

    display: flex;
    align-items: center;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-90deg);

`

export const MessageIcon = styled.div`
    pointer-events: none;
    position: absolute;
    left: 11.43%;
    right: 34.29%;
    top: 95.3%;
    bottom: -8.05%;
    transform: translate(5px, -35px);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
   
    background-repeat: no-repeat;
    background-size: cover;

`