import { a, useSpring } from '@react-spring/three';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { Html, MeshPortalMaterial, Preload, Scroll, ScrollControls, Text, useCursor, useScroll } from '@react-three/drei';
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import { decompressFrames, parseGIF } from 'gifuct-js';

import { easing, geometry } from 'maath';
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Water } from 'three-stdlib';
import Preloader from '../../../components/LoadingAnimation/Loading';
import BoatMeBit from '../../../glbFiles/ServicesGLB/BoatMeBit';
import { additionalServices, designPackages, homeobjFive, homeobjFour, homeobjOne, homeobjThree, homeobjTwo, webDevelopmentPackages } from './Data';
import { ServicesM, ServicesMT } from './ServicesElements';
import arcadeWoff from "/ARCADE.woff";
extend(geometry);

// Utility to load and parse GIF
// Utility to load and parse GIF
async function loadGIF(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const gif = parseGIF(arrayBuffer);
  const frames = decompressFrames(gif, true);
  console.log(`Loaded GIF from ${url}, frames:`, frames);
  return frames;
}

function useVideoTexture(url) {
  const { gl } = useThree();
  const video = useRef(document.createElement('video'));
  const texture = useRef(new THREE.VideoTexture(video.current));

  useEffect(() => {
    const videoElement = video.current;
    videoElement.src = url;
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.crossOrigin = "anonymous";  // Allow CORS
    videoElement.setAttribute('playsinline', '');

    function onCanPlay() {
      console.log('Video can play.');
      videoElement.play().catch(error => {
        console.error('Error attempting to play video:', error);
      });
    }

    function onPlay() {
      console.log('Video is now playing.');
    }

    function onError(e) {
      console.error('Error during video playback:', e.error);
    }

    videoElement.addEventListener('canplay', onCanPlay);
    videoElement.addEventListener('play', onPlay);
    videoElement.addEventListener('error', onError);

    texture.current = new THREE.VideoTexture(videoElement);
    texture.current.minFilter = THREE.LinearFilter;
    texture.current.magFilter = THREE.LinearFilter;
    texture.current.format = THREE.RGBAFormat; // Use THREE.RGBAFormat instead of THREE.RGBFormat

    return () => {
      videoElement.removeEventListener('canplay', onCanPlay);
      videoElement.removeEventListener('play', onPlay);
      videoElement.removeEventListener('error', onError);
      videoElement.pause();
      videoElement.src = "";
      videoElement.load();
    };
  }, [url]);

  useFrame(() => {
    if (video.current.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      texture.current.needsUpdate = true;
    }
  });

  return texture.current;
}


function AnimatedVideo({ url, ...props }) {
  const texture = useVideoTexture(url);

  const material = useMemo(() => new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    side: THREE.DoubleSide,
  }), [texture]);

  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1.5]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}




function AnimatedGIF({ url, ...props }) {
  const texture = useGIFTexture(url);

  // Create the material here, ensuring transparency is supported
  const material = useMemo(() => new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true, // Enable transparency
    side: THREE.DoubleSide, // Render texture on both sides of the mesh
  }), [texture]);

  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1.5]} />
      {/* Apply the material directly */}
      <primitive object={material} attach="material" />
    </mesh>
  );
}

const FloatingBoat = React.forwardRef((props, ref) => {
  const [boxRef, api] = useBox(() => ({
    mass: 1000, 
    position: [0, 0, 0], 
    ...props,
  }));

  const timeRef = useRef(0);
  const scroll = useScroll();
  const prevScrollOffset = useRef(0);
  const [direction, setDirection] = useState(1);

  const { rotation } = useSpring({
    rotation: direction === 1 ? [0, 2 *Math.PI / 2, 0] : [0, 2 *Math.PI , 0],
    config: { mass: 1, tension: 180, friction: 12 }
  });

  useFrame((state, delta) => {
    timeRef.current += delta;
   // const yPosition = Math.sin(timeRef.current * 2) * 0.5;

    if (scroll) {
      const currentScrollOffset = scroll.offset;
      if (currentScrollOffset > prevScrollOffset.current) {
        setDirection(1);
      } else if (currentScrollOffset < prevScrollOffset.current) {
        setDirection(-1);
      }
      prevScrollOffset.current = currentScrollOffset;
    }

   // api.position.set(0, yPosition, 0);
  });

  return (
    <a.group ref={boxRef}>
      <ambientLight intensity={0.5} />
      <a.group rotation={rotation}>
        <BoatMeBit ref={ref} position={[0, 2, -130]} scale={0.1} />
      </a.group>
    </a.group>
  );
});

function PhysicsOcean() {
  // This plane acts as the physics boundary for the ocean surface.
  // It's invisible and doesn't render anything visually.
  const [ref] = usePlane(() => ({
    position: [0, 0, 0], // Adjust this to control the "height" of the ocean surface
    rotation: [-Math.PI / 2, 0, 0], // Oriented horizontally
  }));

  return null; // This component doesn't need to render anything itself
}

extend({ Water });

function Ocean() {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/services/waternormals.jpeg');
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta));
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
}

function Image(props) {
  const ref = useRef();
  const group = useRef();
  const data = useScroll();
  useFrame((state, delta) => {
    group.current.position.z = THREE.MathUtils.damp(group.current.position.z, Math.max(0, data.delta * 50), 4, delta);
    // Adjust any properties if needed to suit video textures
  });

  return (
    <group ref={group}>
      <AnimatedVideo ref={ref} {...props} />
    </group>
  );
}


function Page({ index, m = 0.4, data, ...props }) {
  const { width } = useThree((state) => state.viewport);
  const w = width < 10 ? 1.5 / 3 : 1 / 3;

  const isOdd = index % 2 !== 0;

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100vw',
    height: '100vh',
    maxWidth: '400px',
    overflow: 'hidden',
    color: isOdd ? 'white' : 'black',
  };

  const textStyle = {
    textShadow: isOdd ? '2px 2px 4px black' : '2px 2px 4px white',
  };

  const headerStyle = {
    fontSize: '2em',
    color: isOdd ? '#FFD700' : 'red',
    textShadow: isOdd ? '2px 2px 4px red' : '2px 2px 4px #FFD700',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#FFD700',
    color: 'white',
  };

  const imgStyle = {
    marginTop: '20px',
    width: '485px',
    height: '520px',
    maxWidth: '400px',
    position: 'absolute',
    zIndex: '-9',
  };

  const infoStyle = {
    marginTop: '72.5%',
    width: '225px',
    height: '750px',
    maxWidth: '350px',
    zIndex: '10',
  };

  return (
    <group {...props}>
      <group scale={0.5}>
        <AnimatedVideo position={[-width * w, 25, -1]} scale={[(width * w - m * 2) + 30, 80, 1]} url={data.img} />
      </group>
      <Html position={[0, 0, 1]} center>
        <div style={pageStyle}>
          <div style={infoStyle}>
            <h2 style={headerStyle}>{data.headline}</h2>
            <p style={textStyle}>{data.description}</p>
            <p style={textStyle}>{data.description2}</p>
            <p style={textStyle}>{data.description3}</p>
            {data.buttonLabel && <button style={buttonStyle}>{data.buttonLabel}</button>}
          </div>
          <img src={data.bg} style={imgStyle} alt="" />
        </div>
      </Html>
    </group>
  );
}

function Pages({ webDevelopmentPackagePositions, additionalServicePositions, designPackagePositions }) {
  const { viewport } = useThree();
  const isMobile = window.innerWidth < 600; // Check if the screen width indicates a mobile device

  // Adjust scale and position based on the viewport size
  const scale = isMobile ? 0.85 : 1;
  const positionOffset = isMobile ? 2 : 1; // Adjusted for mobile

  const pageData = [homeobjOne, homeobjTwo, homeobjThree, homeobjFour, homeobjFive]; // Array of data objects

  // Calculate the starting position for the card components
  const cardStartIndex = pageData.length;

  return (
    <>
      {pageData.map((data, index) => (
        <Page
          index={index}
          key={index}
          position={[viewport.width * positionOffset * (index + 1), 0, 0]}
          scale={scale}
          data={data}
        />
      ))}

      {designPackages.map((packageData, index) => (
        <Card
          key={`design-${index}`}
          data={packageData}
          position={[viewport.width * positionOffset * (cardStartIndex + index), 0, 100]}
        />
      ))}
      {additionalServices.map((serviceData, index) => (
        <Card
          key={`service-${index}`}
          data={serviceData}
          position={[viewport.width * positionOffset * (cardStartIndex + designPackages.length + index), 0, 100]}
        />
      ))}
      {webDevelopmentPackages.map((packageData, index) => (
        <Card
          key={`webdev-${index}`}
          data={packageData}
          position={[viewport.width * positionOffset * (cardStartIndex + designPackages.length + additionalServices.length + index), 0, 100]}
        />
      ))}
    </>
  );
}

// Label component with dynamic font size
const Label = ({ children, fontSize = 1, font = arcadeWoff, ...props }) => (
  <Text font={font} fontSize={fontSize} letterSpacing={-0.025} color="black" {...props}>
    {children}
  </Text>
);

// Card component with adjusted font sizes
function Card({ data, font = arcadeWoff, ...props }) {
  const ref = useRef();
  const material = useRef();
  const [hovered, hover] = useState(false);
  const isMobile = window.innerWidth < 600;
  const planeArgs = isMobile ? [4, 8] : [10, 7];
  const innerPlaneArgs = isMobile ? [3, 6] : [8, 6];

  // Define font sizes for mobile and desktop
  const titleFontSize = isMobile ? 1.5 : 1; // Example sizes, adjust as needed
  const detailFontSize = isMobile ? 0.5 : 0.2;

  useCursor(hovered);
  useFrame((state, delta) => {
    easing.damp3(ref.current.position, [0, hovered ? 1.5 : 0, 0], 0.15, delta);
    easing.damp(material.current, 'blur', hovered ? 0.3 : 1.5, 0.25, delta);
  });

  return (
    <group {...props} scale={isMobile ? 5 : 10}>
      <mesh position={[0, 1, -0.1]} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        <roundedPlaneGeometry args={planeArgs} />
        <meshBasicMaterial side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <roundedPlaneGeometry args={innerPlaneArgs} />
        <MeshPortalMaterial ref={material} transparent blur={20}>
          <group ref={ref}>
            <Label position={[0, 1.25, -2]} fontSize={titleFontSize} font={font} color="indianred">
              {data.title}
            </Label>
            <Label position={[0, -1, 0]} fontSize={detailFontSize} maxWidth={2.5} lineHeight={1}>
              Pages: {data.pagesRange} - Price: {data.price}
              {data.features.join(', ')}
              {data.buttonLabel}
            </Label>
          </group>
        </MeshPortalMaterial>
      </mesh>
    </group>
  );
}

function calculatePosition(index, total, offset = 1) {
  // This is a basic calculation for demonstration.
  // index: the current item index
  // total: total number of items in the category
  // offset: distance between items
  // Adjust `offset` and other calculations as needed for your layout
  const w = window.innerWidth;
  const x = index * (offset) - (total - 1) * offset / 2;
  const y = 3; // Keep Y constant if you're laying out items in a single row
  const z = -1; // Keep Z constant for simplicity
  return [x, y, z];
}

function Services({modeSwitch, toggleMode}) {
  // State to determine if the device is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const designPackagePositions = useMemo(() => designPackages.map((_, index) => calculatePosition(index, designPackages.length)), [designPackages.length]);
  const additionalServicePositions = useMemo(() => additionalServices.map((_, index) => calculatePosition(index, additionalServices.length)), [additionalServices.length]);
  const webDevelopmentPackagePositions = useMemo(() => webDevelopmentPackages.map((_, index) => calculatePosition(index, webDevelopmentPackages.length)), [webDevelopmentPackages.length]);

  useEffect(() => {
    const disableScroll = (e) => e.preventDefault();

    window.addEventListener('wheel', disableScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', disableScroll);
    };
  }, []);

  return (
    <div style={{
      overflow: 'hidden',
      height: '100vh',
      width: '100vw',
      margin: '0',
      padding: '0',
      overflowX: 'hidden',
      overflowY: 'hidden',
    }}>
      <Canvas camera={{ position: [0, 3, 150], fov: 55, near: 1, far: 20000 }}>
        <Suspense fallback={<Preloader />}>
          <Physics gravity={[0, -9.81, 0]}>
            <ScrollControls infinite horizontal damping={1} pages={14} distance={0.5}>
              <Scroll>
                <Pages
                  isMobile={isMobile}
                  designPackagePositions={designPackagePositions}
                  additionalServicePositions={additionalServicePositions}
                  webDevelopmentPackagePositions={webDevelopmentPackagePositions}
                />
              </Scroll>
              <Scroll html>
                <div style={{ position: 'absolute', top: '45vh', left: isMobile ? '35vw' : '25vw', transform: isMobile ? 'scale(0.7)' : 'scale(1)' }} >
                  <ServicesM>
                    <ServicesMT style={{ fontSize: isMobile ? '4rem' : '4rem', marginLeft: '-35px', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                      Scroll To Begin
                    </ServicesMT>
                  </ServicesM>
                </div>
              </Scroll>
            </ScrollControls>
            <Ocean />
            <Preload />
            <FloatingBoat />
            <PhysicsOcean />
          </Physics>
        </Suspense>
      </Canvas>
      <div onClick={toggleMode} style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/services/MeBitSubmarine.gif'} alt="Submarine" style={{ width: '100px', height: '100px', cursor: 'pointer' }} />
        <span style={{ color: '#fff', fontSize: '14px', textAlign: 'center', marginTop: '5px' }}>Switch to 2D</span>
      </div>
    </div>
  );
}

export default Services;
