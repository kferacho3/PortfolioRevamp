import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
export const CarouselContainer = styled.div`
    zoom: 0.8;
    height: 600px;
    width: 675px;
    position: absolute;
    top: 60%;
    left: 50%;
    border-radius: 0px;
    z-index: 999999;



`
export const CarouselBg = styled.div`
    height: 600px;
    width: 675px;
    position: relative;
    top: -63.5%;
    left: 7.5%;
    background-repeat: no-repeat;
    background-size: cover;
    pointer-events: none;


`

export const CarouselBgDiv = styled.div`
    position: relative;
    height: 400px;
    width: 575px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0px;

    top: 20%;
    

    background: rgba(250, 252, 172, 0.8);
    z-index: -999;

`
export const CarouselSVG = styled.div`
    position: relative;
    width: 294px;
    height: 72px;
    left: 10px;
    top: 30px;
    background-repeat: no-repeat;
    background-size: cover;


`
export const CarouselSvgText = styled.div`
    position: relative;
    width: 220px;
    height: 41px;
    left: -6px;
    top: 10px;

    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    align-items: center;
    text-align: center;
    letter-spacing: 12px;

    color: #FFFFFF;


`
export const CarouselImgBg = styled.div`
    box-sizing: border-box;
    height: 265px;
    width: 350px;
    zoom: 0.9;
    border-radius: 2.5px;

    position: relative;

    top: 0%;
    left: 50%;
    transform: translateX(-50%);
  

    //background: #0D2606;
    background: #ffffff;
    border: 1px solid #091A04;
    border-radius: 2.5px;
`


export const CarouselImgWrap = styled.a`
    height: 100%;
    width: 100%;
    cursor: pointer;

`
export const CarouselImg = styled.div`
   box-sizing: border-box;
    height: 100%;
    width: 100%;
 
    border-radius: 2.5px;
    pointer-events: none;
    position: relative;

    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-size: cover;

  


`
export const CarouselLeftA = styled(LinkS)`
    position: relative;
    height: 64px;
    width: 64px;
    background-repeat: no-repeat;
    background-size: cover;

    border-radius: 0px;
    transform: rotate(180deg);

    z-index: 300;
    cursor: pointer;





`
export const CarouselRightA = styled(LinkS)`
    position: relative;
    height: 64px;
    width: 64px;
    background-repeat: no-repeat;
    background-size: cover;
   
    border-radius: 0px;
    

    z-index: 300;
    cursor: pointer;

`
export const CarouselTextBg = styled.div`
    box-sizing: border-box;
    height: 81px;
    width: 600px;
    border-radius: 2.5px;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 180px;

    /* Auto layout */

    flex-direction: row;
    isolation: isolate;

    position: relative;
    z-index: -1;
    top: -1%;
    bottom: 15%;

    background: linear-gradient(180deg, rgba(250, 255, 28, 0.8) 0%, rgba(250, 148, 44, 0.965957) 24.48%, #FA8F2D 56.25%, #FA2D2D 90.1%);
    border: 1px solid #1F590E;
    border-radius: 2.5px;
`
export const CarouselText = styled.div`
    position: relative;
    width: 200px;
    height: 21px;
    
    left: 50%;
    transform: translateX(-50%);
    
    font-weight: 900;
    font-size: 48px;
    line-height: 21px;
    /* or 45% */

    
    align-items: center;
    text-align: center;
    font-weight: 900;
    font-size: 48px;
    line-height: 21px;
    letter-spacing: 1.6px;
    z-index: 9999999;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);



`
export const CarouselTextWrap = styled.a`
    height: 200px;
    width: 21px;
    cursor: pointer;

`
