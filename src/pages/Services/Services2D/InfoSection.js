import React from 'react';
 

import {
  BtnWrap,
  Column1,
  Column2,
  EggHeader,
  EggInner,
  Heading,
  Img,
  Img2,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  SubtitleWrap,
  TextWrapper,
  TopLine
} from './ServicesElements';
import "./services.scss";

import { motion } from 'framer-motion';
import { TopToBottom } from '../../../components/animations/animations';


const InfoSection = ({lightBg, id, imgStart, lightText, topLine, description2, description3,
                      headline, darkText, description, img, alt, bg, shadow, topLineS}) => {
                        const head = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/services/EggHeader.svg';
                        const inner = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/services/EggInner.svg';
    return (
        
          <InfoContainer lightBg={lightBg} id={id} className='background2'>
          
          <motion.div 
        initial={"onscreen"}
        whileInView={"offscreen"}
        viewport={{once:true, amount:0}}
    >
          <motion.div variants={TopToBottom} >
          
              <InfoWrapper>
                  <InfoRow  imgStart={imgStart}>
       

                      <Column1 className='animation1' >
                      <EggHeader style = {{ backgroundImage: `url(${head})`}}>
                      <Heading lightText={lightText}>{headline}</Heading>
                      </EggHeader>
                        <Img2  style={{backgroundImage: `url(${bg}` }} className='container'>

                          <TextWrapper> 
                          <EggInner  style = {{ backgroundImage: `url(${inner})`}}>
                            <TopLine shadow={shadow} topLineS={topLineS} lightText={lightText}  darkText={darkText}>{topLine}</TopLine>
                          
                            <SubtitleWrap>
                            <Subtitle shadow={shadow} darkText={darkText}   class='font2'>{description}</Subtitle>
                            <Subtitle shadow={shadow} darkText={darkText} class='font2'>{description2}</Subtitle>
                            <Subtitle shadow={shadow} darkText={darkText}   class='font2'>{description3}</Subtitle>
                            </SubtitleWrap>
                            </EggInner>
                            <BtnWrap >
                            </BtnWrap>
                          </TextWrapper>
                        </Img2>
                      </Column1>


                      <Column2 className='animation2'>
                      
                        <Img  src={img} alt={alt} className='container'/>
                      
                      </Column2>
                      
                  </InfoRow>
              </InfoWrapper>
</motion.div>
          </motion.div>
              </InfoContainer>  
              
        
    )
}

export default InfoSection




/*   <Button to={too}
                            
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact={true}
                              offset={-80}
                              primary={primary ? 1 : 0}
                              dark={dark ? 1 : 0}
                              dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>*/