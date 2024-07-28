import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from 'framer-motion';

import React, { Suspense } from 'react';
import { PopIn } from '../../../../components/animations/animations';
import {
  BtnWrap,
  Column1,
  EggHeader,
  EggInner,
  Heading,
  Img2,
  InfoRow,
  InfoWrapper,
  Subtitle,
  SubtitleWrap,
  TextWrapper,
  TopLine
} from '../ServicesElements';
import "../services.scss";
import { CanvasContainer, SceneBg, SceneContainer } from './SceneElements';
function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
  }
function SceneThreeD({lightBg, id, imgStart, lightText, topLine, description2, description3,
  headline, darkText, description, transform,  buttonLabel, 
  img, alt, primary, dark, dark2, too, bg, shadow, topLineS}) {
    const head = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/services/EggHeader.svg';
    const inner = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/services/EggInner.svg';
    const scene = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/monitorDroneP.gif';
    return (
        
          <SceneContainer lightBg={lightBg} id={id} >
          
   

            <motion.div initial={"onscreen"} whileInView={"offscreen"} viewport={{once:true, amount:0.5}}>
              <motion.div variants={PopIn} >
              <InfoWrapper style = {{ top: `-50px`}}>
              <InfoRow >
              <Column1  className='animation1' >
                      <EggHeader style = {{ backgroundImage: `url(${head})`}}>
                      <Heading lightText={lightText}>{headline}</Heading>
                      </EggHeader>
                        <Img2  style={{backgroundImage: `url(${bg}` }} className='container'>

                          <TextWrapper> 
                          <EggInner  style = {{ backgroundImage: `url(${inner})`}}>
                            <TopLine shadow={shadow} topLineS={topLineS} lightText={lightText}  darkText={darkText}>{topLine}</TopLine>
                          
                            <SubtitleWrap>
                            <Subtitle shadow={shadow} darkText={darkText} class='font2'>{description}</Subtitle>
                            <Subtitle shadow={shadow} darkText={darkText} class='font2'>{description2}</Subtitle>
                            <Subtitle shadow={shadow} darkText={darkText} class='font2'>{description3}</Subtitle>
                            </SubtitleWrap>
                            </EggInner>
                            <BtnWrap >
                            </BtnWrap>
                          </TextWrapper>
                        </Img2>
                      </Column1>
                <SceneBg  style = {{ backgroundImage: `url(${scene})`}} className='animation6'>
                <CanvasContainer >
                    <Canvas shadows
                      gl={{ alpha: false }}
                      camera={{ fov: 45 }}
                      raycaster={{
                        computeOffsets: (e) => ({ offsetX: e.target.width / 2, offsetY: e.target.height / 2 }),
                      }}>
                      <color attach="background" args={['#fff']} />
                      
                          <Suspense fallback={null}>
                            
                           
                            <pointLight color="#f6f3ea" position={[5, 10, 5]} intensity={5.2} />
                            <pointLight color="#f6f3ea" position={[-5, -10, -5]} intensity={5.2} />
                             
                            
                          </Suspense>
                          { <OrbitControls
                          enableZoom={true}
                          enablePan={true}
                          enableRotate={true}
                          zoomSpeed={0.6}
                          panSpeed={0.5}
                          rotateSpeed={0.4}
                        /> }
                        
                        
                      </Canvas>
                  </CanvasContainer>
              </SceneBg>
              </InfoRow>
              </InfoWrapper>
              </motion.div>
            </motion.div>

          </SceneContainer>  
              
        
    )
}

export default SceneThreeD