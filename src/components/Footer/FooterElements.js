import styled from 'styled-components';


export const FooterContainer = styled.footer`

  height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    overflow: hidden;
    position: relative;

    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    z-index: 999;
  
    @media screen and (max-width: 1125px) {
        zoom: 0.8;
    }
    @media screen and (max-width: 860px) {
        zoom: 0.65;
     
    }
    @media screen and (max-width: 728px) {
   
        zoom: 0.5;
        
    }
    @media screen and (max-width: 550px) {
   
   zoom: 0.4;
   
}
@media screen and (max-width: 450px) {
   
   zoom: 0.25;
   
}
    
`;

export const FooterWrap = styled.div`
    padding: 0px 24px;
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

    
`;


export const FooterLogoContainer = styled.div`
    position: absolute;
    width: 200px;
    height: 190px;
    left: 20px;

    //background: rgba(250, 255, 28, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.035);
}
`

export const FooterLogo = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;

`

export const FooterIconContainer = styled.div`
    position: absolute;
    width: 550px;
    height: 156px;
    display: grid;
    align-items: center;
    left: 50%;
    top: -12.5%;
    transform: translateX(-50%);
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;


 
`;
export const FooterIconBg = styled.div`
    position: relative;
    
    width: 100%;
    height: 100px;
    top: 100px;
  
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
}

`;
export const FooterIcon = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
    left: 50%;
    transform: translateX(-50%);
    top: -30px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;

  

`;
export const SocialLogo = styled.p`
    top: 100%;
    position: relative;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.75rem;

    align-items: center;
    
    margin-bottom: 16px;
    font-weight: bold;
    color: #FFF444;
    text-shadow: 1px 1px #FF0000;

    
`;
export const FooterIconText = styled.p`
    top: -25%;
    cursor: pointer;
  

    align-items: center;

    position: relative;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.75rem;


    font-weight: 600;
    line-height: 150%;
    /* or 38px */

    align-items: center;

    color: #FFFFFF;
    &:hover {
    transition: all 0.2s ease-in-out;
    color: '#FFF444';
}
`
export const WebsiteRights = styled.small`
position: absolute;
    color: #FFF444;
    text-shadow: 1px 1px #FF0000;
    margin-bottom: 16px;
    width: 359px;
    height: 45px;
    
    left: 80%;
    @media screen and (max-width: 520px) {
        transform: scale(0.8) translateX(20px);
        }
`;

