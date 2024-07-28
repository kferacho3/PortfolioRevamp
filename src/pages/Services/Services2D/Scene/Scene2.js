import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from 'react';
import "../services.scss";
import {
  ArrowForward, ArrowRight,
  Button4,
  CanvasContainer,
  SceneBg,
  SceneButton,
  SceneButtonWrap,
  SceneContainer,
  SceneSign,
  ServicesBtnWrapper
} from './Scene2Elements';

import { OrbitControls } from "@react-three/drei";
import { motion } from 'framer-motion';
import { PopIn } from '../../../../components/animations/animations';
function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
  }
//import { Fisherman } from './Boat-FIsherman';

import { EmptyDome } from '../../../../glbFiles/EmptyDome';

function SceneThreeD2({isOpen, toggle}) {
  const sceneSign = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/services/sceneSign.png';
  const connect = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/connect.gif';
  const button = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/sceneButton.svg';
  
    const [hover, setHover] = useState(false);
  
    const onHover = () => {
        setHover(!hover);
    }
    return (
        
          <SceneContainer >
      
              
   

            <motion.div initial={"onscreen"} whileInView={"offscreen"} viewport={{once:true, amount:0.5}}>
              <motion.div variants={PopIn} >
              
                <SceneBg >
                <CanvasContainer >
                    <Canvas shadows
                      gl={{ alpha: false }}
                      camera={{ fov: 45 }}
                      raycaster={{
                        computeOffsets: (e) => ({ offsetX: e.target.width / 2, offsetY: e.target.height / 2 }),
                      }}>
                      <color attach="background" args={['#fff']} />
                      
                          <Suspense fallback={null}>
                            
                                <EmptyDome/>
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
              <SceneSign style={{backgroundImage: `url(${sceneSign}` }}/>
              <SceneButtonWrap  to={'/projects'}>
          <SceneButton to={'/projects'} style={{backgroundImage: `url(${button}` }}/>
          </SceneButtonWrap>
              <ServicesBtnWrapper to ='/connect' >
                        <Button4 style={{backgroundImage: `url(${connect}` }}
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        
                        onClick={toggle}
                        primary = 'true'
                        dark = 'true'
                        fontBig = 'true'>
                        
                            connect() {hover ? <ArrowForward /> : <ArrowRight/>}
                        </Button4>
              </ServicesBtnWrapper>
              </motion.div>
            </motion.div>

          </SceneContainer>  
              
        
    )
}

export default SceneThreeD2