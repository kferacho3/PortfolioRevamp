import React from 'react';

import { animateScroll as scroll } from 'react-scroll';
import "./Footer.scss";
import {
    FooterContainer,
    FooterIcon,
    FooterIconBg,
    FooterIconContainer,
    FooterIconText,
    FooterLogo,
    FooterLogoContainer,
    SocialLogo,
    WebsiteRights
} from './FooterElements';

import footerBg from './footerImg/footer.svg';
import github from './footerImg/githubBit.svg';
import iconBg from './footerImg/iconBg.svg';
import linkdin from './footerImg/linkdinBit.svg';
import logo from './footerImg/logo.svg';
import logoBg from './footerImg/logoBg.svg';
import resume from './footerImg/resumeBit.svg';

import { useState } from 'react';
const Footer = ({bg, img1, img2, img3}) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
   
    const [buttonPopup2, setButtonPopup2] = useState(false);
    
    const handleClick1 = () => {
        window.open("https://discord.gg/swwnG3kpz5");
      };
      const handleClick2 = () => {
        window.open("https://github.com/kferacho3");
      };
      const handleClick3 = () => {
        window.open("https://linkedin.com/in/kamal-feracho-075a5a1aa");
      };

      //handles timed popup by eliminating raapid popup (useeffect helps)
      


    return (
        <FooterContainer style = {{ backgroundImage: `url(${footerBg})`}}  >
            <FooterLogoContainer style = {{ backgroundImage: `url(${logoBg})`}}>
                <FooterLogo  to='/' onClick={toggleHome} style = {{ backgroundImage: `url(${logo})`}} >
                <SocialLogo > FERACHO</SocialLogo>

                </FooterLogo>
                
            </FooterLogoContainer>
     

            <FooterIconContainer>

                <FooterIconBg style = {{ backgroundImage: `url(${iconBg})`}}>
                    <FooterIcon style = {{ backgroundImage: `url(${resume})`}} onClick={handleClick1} target='_blank'/>
                    <FooterIconText>Resume</FooterIconText>
                </FooterIconBg>

                <FooterIconBg style = {{ top: `80px`, backgroundImage: `url(${iconBg})`}}>
                    <FooterIcon style = {{ backgroundImage: `url(${github})`}} onClick={handleClick2} target='_blank'/>
                    <FooterIconText>Github</FooterIconText>
                </FooterIconBg>

                <FooterIconBg style = {{ backgroundImage: `url(${iconBg})`}}>
                    <FooterIcon style = {{ backgroundImage: `url(${linkdin})`}} onClick={handleClick3} target='_blank'/>
                    <FooterIconText>LinkdIn</FooterIconText>
                </FooterIconBg>

            </FooterIconContainer>




                    
                    <WebsiteRights>FERACHO © {new Date().getFullYear()}</WebsiteRights>
                    <WebsiteRights style = {{ top: `120px`}}>All rights reserved</WebsiteRights>
                   
        </FooterContainer>
    )
}

export default Footer;