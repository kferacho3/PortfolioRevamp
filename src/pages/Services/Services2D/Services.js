import { Environment, Lightformer } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { easing } from 'maath';
import React, { useRef, useState } from 'react';
import { BirdEgg, animationThree } from '../../../components/animations/animations';
import { SubMeBit } from '../../../glbFiles/ServicesGLB/MeBitSub';
import { homeobjFive, homeobjFour, homeobjOne, homeobjThree, homeobjTwo } from './Data';
import InfoSection from './InfoSection';
import DevPricing from './Pricing/devPricing';
import RegPricing from './Pricing/regPricing';
import SceneThreeD from './Scene/Scene';
import SceneThreeD2 from './Scene/Scene2';
import {
  CWrapper,
  HWrapper,
  InfoContainer1,
  OWrapper,
  SWrapper,
  ServicesH2,
  ServicesImg,
  ServicesM,
  ServicesMT
} from './ServicesElements';
import "./services.scss";

function EnvSubmarine({ perfSucks, children }) {
  const ref = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!perfSucks) {
      easing.damp3(ref.current.rotation, [Math.PI / 2, 0, state.clock.elapsedTime / 50 + state.pointer.x], 0.2, delta);
      easing.damp3(state.camera.position, [Math.sin(state.pointer.x / 30) * 9, 1.25 + state.pointer.y / 5, Math.cos(state.pointer.x / 4) * 9], 0.5, delta);
      state.camera.lookAt(0, 0, 0);
    }

  });

  return (
    <group ref={ref}>
      <Environment frames={perfSucks ? 1 : Infinity} resolution={256} background blur={0}>
        <Lightformer intensity={12} rotation-x={Math.PI / 2} position={[0, 0, -9]} scale={[10, 10, 1]} />
        <Lightformer intensity={12} rotation-x={Math.PI / 2} position={[0, 0, -9]} scale={[10, 10, 1]} />
        <group rotation={[Math.PI / 2, 1, 0]}>
          {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
            <Lightformer key={i} intensity={10} rotation={[Math.PI / 4, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
          ))}
          <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
          <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
          <Lightformer intensity={0.5} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
        </group>
        <group ref={ref}>
          <Lightformer intensity={1} form="ring" color="ADD7F2" rotation-y={Math.PI / 2} position={[-5, 2, -1]} scale={[0, 0, 0]} />
        </group>
      </Environment>
      <group ref={groupRef}>{children}</group>
    </group>
  );
}

function Services2D({ isOpen, toggle, modeSwitch, toggleMode }) {
  const textRef = useRef();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <div className='background'>
      <motion.div id="main" initial='out' animate='end' exit='out' variants={animationThree} className='regular-wrapper'>
        <OWrapper>
          <HWrapper>
            <SWrapper className="one">
              <InfoContainer1>
                <ServicesH2>My Services</ServicesH2>
                <motion.div variants={BirdEgg}>
                  <ServicesM>
                    <ServicesMT>Scroll To Begin</ServicesMT>
                  </ServicesM>
                </motion.div>
              </InfoContainer1>
            </SWrapper>
            <SWrapper className="two">
              <InfoSection {...homeobjOne} />
            </SWrapper>
            <SWrapper className="three">
              <InfoSection {...homeobjTwo} />
            </SWrapper>
            <SWrapper className="four">
              <InfoSection {...homeobjThree} />
            </SWrapper>
            <SWrapper className="five">
              <InfoSection {...homeobjFour} />
            </SWrapper>
            <SWrapper className="six">
              <SceneThreeD {...homeobjFive} />
            </SWrapper>
            <SWrapper className="seven">
              <DevPricing />
            </SWrapper>
            <SWrapper className="eight">
              <RegPricing />
            </SWrapper>
            <SWrapper className="nine">
              <SceneThreeD2 />
            </SWrapper>
          </HWrapper>
        </OWrapper>
        <CWrapper
          whileInView={{ scale: [1.0, 1.3, 1.0] }}
          animate={{ translateX: [-1500, 0, 1200, 800, -1002, 7000, -4012, 300, 5012, 0, -12, 0] }}
          transition={{
            translateX: { duration: 320, repeat: Infinity, repeatDelay: 3 },
            scale: { duration: 10000, delay: 3 }
          }}
          initial={{ translateX: 0 }}
          src={'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/bclouds.png'}
          type='image/png'
        />
        <ServicesImg
          whileInView={{ scale: [1.0, 1.3, 1.0] }}
          animate={{ translateX: [-2, 0, 1.2, 0.8, -1.2, 7, -4.12, 3.00, 5.012, 0, -1.2, 0], translateY: [-2, 0, 1.2, 0.8, -1.2, 7, -4.12, 3.00, 5.012, 0, -1.2, 0] }}
          transition={{
            translateX: { duration: 10, repeat: Infinity, repeatDelay: 3 },
            translateY: { duration: 10, repeat: Infinity, repeatDelay: 3 },
            scale: { duration: 10000, delay: 3 }
          }}
          initial={{ translateX: 0, translateY: 0 }}
          src={'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/boatAll+.gif'}
          type='image/gif'
        />
      </motion.div>
      <div onClick={toggleMode} style={{ position: 'fixed', bottom: '10px', right: '-70px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Canvas style={{width: '100%', height: '100%'}}>
          <EnvSubmarine perfSucks={false}>
            <SubMeBit rotation={[Math.PI/2, 7*Math.PI , 2* Math.PI/2]} scale={0.035} />
          </EnvSubmarine>
        </Canvas>
        <span style={{ color: '#fff', fontSize: '14px', textAlign: 'center', marginTop: '-15px' }}>Switch to 3D</span>
      </div>
    </div>
  );
}

export default Services2D;
