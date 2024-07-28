import { a, useSpring } from '@react-spring/three';
import { animated as aWeb, useSpring as useSpringWeb } from '@react-spring/web';
import { Environment, Html, Lightformer } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { decompressFrames, parseGIF } from 'gifuct-js';
import { easing } from 'maath';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { IoArrowUndo } from "react-icons/io5";
import styled from 'styled-components';
import { TextureLoader } from 'three';
import Preloader from '../../components/LoadingAnimation/Loading';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import CarBit from '../../glbFiles/AboutGLB/CarBit';
import RoomChandelier from '../../glbFiles/AboutGLB/RoomChandelier';
import About2D from './About2D';
import About3D from './About3D';
import AboutRoom from './AboutRoom';

// Utility to load and parse GIF
async function loadGIF(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const gif = parseGIF(arrayBuffer);
  const frames = decompressFrames(gif, true);
  return frames;
}

// Custom hook to handle GIF animation
function useGIFTexture(url, onLoad = () => {}) {
  const textureRef = useRef();
  const { gl } = useThree();
  const framesRef = useRef([]);
  const currentFrameIndex = useRef(0);
  const elapsedTime = useRef(0);

  useEffect(() => {
    loadGIF(url).then((frames) => {
      framesRef.current = frames.map((frame) => {
        const canvas = document.createElement('canvas');
        canvas.width = frame.dims.width;
        canvas.height = frame.dims.height;
        const ctx = canvas.getContext('2d');
        const imageData = ctx.createImageData(frame.dims.width, frame.dims.height);
        imageData.data.set(frame.patch);
        ctx.putImageData(imageData, 0, 0);

        return new TextureLoader().load(canvas.toDataURL());
      });

      if (framesRef.current.length > 0) {
        textureRef.current = framesRef.current[0];
        onLoad(textureRef.current);
      }
    });

    return () => {
      // Dispose of textures on unmount
      framesRef.current.forEach((texture) => {
        texture.dispose();
      });
    };
  }, [url, onLoad]);

  useFrame((state, delta) => {
    if (framesRef.current.length > 0) {
      elapsedTime.current += delta;
      const frame = framesRef.current[currentFrameIndex.current];

      if (elapsedTime.current > frame.delay / 1000) {
        elapsedTime.current -= frame.delay / 1000;
        currentFrameIndex.current = (currentFrameIndex.current + 1) % framesRef.current.length;
        textureRef.current = framesRef.current[currentFrameIndex.current];
        textureRef.current.needsUpdate = true;
      }
    }
  });

  return textureRef.current;
}

function AnimatedPlane({ url, ...props }) {
  const animatedTexture = useGIFTexture(url);

  return (
    <mesh {...props}>
      <planeBufferGeometry args={[2, 2]} />
      {animatedTexture && <meshBasicMaterial map={animatedTexture} side={THREE.DoubleSide} />}
    </mesh>
  );
}

const Page = styled.div`
  background-image: radial-gradient(circle, #ce0bdb, #ff00a0, #ff2567, #ff7035, #ffa300);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  position: absolute;
`;

const GoBackButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 2.5%;
  left: 20px;
  z-index: 100;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  color: white; // Default color

  &:hover {
    transform: scale(1.1);
    color: gold; // Change color on hover

    & > span {
      color: gold;
      text-shadow: 1.5px 1.5px #000;
    }

    // Apply text shadow to IoArrowUndo icon as well
    & > svg {
      filter: drop-shadow(1.5px 1.5px 0 #000);
    }
  }
`;

function Env({ perfSucks }) {
  const ref = useRef();
  useFrame((state, delta) => {
    if (!perfSucks) {
      easing.damp3(ref.current.rotation, [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x], 0.2, delta);
      easing.damp3(state.camera.position, [Math.sin(state.pointer.x / 4) * 3, 1.25 + state.pointer.y, Math.cos(state.pointer.x / 4) * 9], 0.5, delta);
      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <Environment frames={perfSucks ? 1 : Infinity} resolution={256} background={false} 
      files="https://racho-devs.s3.us-east-2.amazonaws.com/hdr/basement_boxing_ring_1k.hdr"
      path="" 
      preset={null} 
      blur={0}
    >
      <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <group rotation={[Math.PI / 2, 1, 0]}>
        {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
          <Lightformer key={i} intensity={1} rotation={[Math.PI / 4, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
        ))}
        <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
        <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[50, 2, 1]} />
        <Lightformer intensity={0.5} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
      </group>
      <group ref={ref}>
        <Lightformer intensity={5} form="ring" color="red" rotation-y={Math.PI / 2} position={[-5, 2, -1]} scale={[10, 10, 1]} />
      </group>
    </Environment>
  );
}

const InteractiveHtmlImage = ({ setCurrentState, nextState, compScale, interactiveImagePosition, props }) => {
  const [hovered, setHovered] = useState(false);

  const scale = 1; // Default scale. Adjust based on your needs or pass as a prop.

  const { transform } = useSpringWeb({
    transform: hovered ? `scale(${compScale * 1.1})` : `scale(${compScale})`,
    config: { mass: 1, tension: 170, friction: 14 },
  });

  return (
    <a.group
      position={interactiveImagePosition}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setCurrentState(nextState)}
    >
      <Html center>
        <aWeb.div
          style={{
            width: '400px',
            height: '400px',
            cursor: hovered ? 'pointer' : 'auto',
            transform,
            transition: 'transform 0.3s',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setCurrentState(nextState)}
        >
          <img src="https://racho-devs.s3.us-east-2.amazonaws.com/about/glbDivs/CarBit2D.gif" alt="Interactive Image" style={{ width: '100%', height: 'auto' }} />
          <p style={{ textAlign: 'center', transform: `scale(${1 / compScale})` }}>ABOUT ME 2D</p>
        </aWeb.div>
      </Html>
    </a.group>
  );
};

const InteractiveModel = ({ model: ModelComponent, setCurrentState, nextState, position, scale }) => {
  const [hovered, setHovered] = useState(false);

  const props = useSpring({
    scale: hovered ? [scale * 1.1, scale * 1.1, scale * 1.1] : [scale, scale, scale],
    config: { mass: 1, tension: 170, friction: 14 },
  });

  const handlePointerOver = () => {
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'auto';
  };

  return (
    <a.group
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      position={position}
      scale={props.scale}
      onClick={() => setCurrentState(nextState)}
    >
      <ModelComponent />
    </a.group>
  );
};

const LayoutManager = ({ setCurrentState, currentState }) => {
  const { size } = useThree();
  const isMobile = size.width <= 600;

  const interactiveImagePosition = isMobile ? [0, 0.5, -1] : [-4, -1.5, -1];
  const interactiveModelCarBitPosition = isMobile ? [0, -2, 0] : [0, -1, 0];
  const interactiveModelRoomChandelierPosition = isMobile ? [0, -4, 0] : [3, -1, 0];
  const interactiveModelCarBitPositionHTML = isMobile ? [-0.65, -3, 0] : [0, -1, 0];
  const interactiveModelRoomChandelierPositionHTML = isMobile ? [-0.65, -5, 0] : [3, -1, 0];
  const compScale = isMobile ? 0.5 : 1;

  return (
    <group scale={isMobile ? 0.75 : 1.5}>
      <InteractiveModel model={CarBit} setCurrentState={setCurrentState} nextState={2} position={interactiveModelCarBitPosition} scale={1} />
      <Html position={interactiveModelCarBitPositionHTML}>   <p style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>ABOUT ME 3D</p></Html>
      <InteractiveHtmlImage compScale={compScale} nextState={1} setCurrentState={setCurrentState} interactiveImagePosition={interactiveImagePosition} />
      <InteractiveModel model={RoomChandelier} setCurrentState={setCurrentState} nextState={3} position={interactiveModelRoomChandelierPosition} scale={1 * 0.03} />
      <Html position={interactiveModelRoomChandelierPositionHTML}>   <p style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>RACHO'S ROOM</p></Html>
    </group>
  );
};

const Aaa = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentState, setCurrentState] = useState(1);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleGoBack = () => {
    setCurrentState(0);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {currentState === 0 &&
        <Page>
          <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
            <Suspense fallback={<Preloader />}>
              <ambientLight intensity={0.5} />
              <LayoutManager setCurrentState={setCurrentState} currentState={currentState} />
              <Env perfSucks={false} />
            </Suspense>
          </Canvas>
        </Page>
      }
      {currentState === 1 && <About2D />}
      {currentState === 2 && <About3D currentState={currentState} setCurrentState={setCurrentState} />}
      {currentState === 3 && <AboutRoom />}
      {currentState !== 0 &&
        <GoBackButton onClick={handleGoBack}>
          <IoArrowUndo size="24px" />
          <span>Go Back</span>
        </GoBackButton>}
    </>
  );
}

export default Aaa;
