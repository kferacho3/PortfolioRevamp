import { a, useSpring } from '@react-spring/three';
import { Html, Image, useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { TextureLoader } from 'three';

import ArcadeModel from '../glbModels/rachoArcade.glb';
const RoundedCornerImage = ({ imageUrl, position, rotation, scale }) => {
  const texture = useLoader(TextureLoader, imageUrl);
  
  // Ensuring the texture has transparent background support
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.format = THREE.RGBAFormat;
  texture.encoding = THREE.sRGBEncoding;

  return (
    <mesh position={position} rotation={rotation}>
      <planeBufferGeometry attach="geometry" args={scale} />
      <meshBasicMaterial attach="material" map={texture} transparent={true} alphaTest={0.5} />
    </mesh>
  );
};



const TextCommonStyle = styled.div`
  padding: 0px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent background for better readability
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); // Adding a text shadow for depth
  font-weight: bold; // Make text bold
  text-align: center; // Center align text
  z-index: 1;
  //display: none;
  display: ${({ isOpen2 }) => (isOpen2 ? 'none' : 'initial')};
`;
// Define styled components for each button
const StartGameText = styled(TextCommonStyle)`
  color: #ffffff; /* White, assuming the screen is neutral or white */
`;
const HomeText = styled(TextCommonStyle)`
  color: #0000ff; /* Blue for the Blue Button */
`;
const BackText = styled(TextCommonStyle)`
  color: #008000; /* Green for the Green Button */
`;
const NextText = styled(TextCommonStyle)`
  color: #ffff00; /* Yellow for the Yellow Button */
`;
const MuseumText = styled(TextCommonStyle)`
  color: #800080; /* Purple for the Purple Button */
`;
const MainStartGame = styled(TextCommonStyle)`color: #FF0000;`
 /* Red for the Green`*/
export default function Arcade({textureUrls, isOpen2, props, gamesInfo, currentGameIndex, setGameState, sketchTexture, handleNext, handlePrev }) {
  const group = useRef();

  // Separate spring animations for each interactive group
  const [screenSpring, setScreenSpring] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 170, friction: 14 },
  }));
  const [blueButtonSpring, setBlueButtonSpring] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 170, friction: 14 },
  }));
  const [greenButtonSpring, setGreenButtonSpring] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 170, friction: 14 },
  }));
  const [yellowButtonSpring, setYellowButtonSpring] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 170, friction: 14 },
  }));
  const [mainButtonSpring, setMainButtonSpring] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 170, friction: 14 },
  }));
  const [purpleButtonSpring, setPurpleButtonSpring] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 170, friction: 14 },
  }));

  // Function to trigger jiggling for each group
  const jiggle = (setSpring) => {
    setSpring({
      scale: [1.1, 1.1, 1.1],
      onRest: () => setSpring({ scale: [1, 1, 1] }),
    });
  };

  const startGame = () => {
    const currentGame = gamesInfo[currentGameIndex];
    setGameState(currentGame.gameState);
  };
  const { nodes, materials } = useGLTF(ArcadeModel);


  return (
    <a.group position={[0, -5, 0]} scale={0.05} ref={group} {...props} dispose={null}>
      <group position={[6.84, 0, 0.19]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-6.42, -16.04, 50.04]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.STEEL003.geometry} material={materials['STEEL.003']} />
          <mesh geometry={nodes.STEEL003_1.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.STEEL003_2.geometry} material={materials['STEEL.001']} />
        </group>
      </group>
      <group position={[-117.12, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[116.91, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.08, 36.27, 13.79]}>
            <mesh geometry={nodes.STEEL2002.geometry} material={materials['STEEL2.001']} />
          </group>
        </group>
      </group>
      <mesh
        geometry={nodes.ArcadeTopBanner.geometry}
        material={materials['ARCADE.002']}
        position={[0.62, 146.59, 8.96]}
      />
      <group position={[0.64, 110.48, -13.61]} rotation={[-0.18, 0, 0]}>
        <mesh geometry={nodes.Body_1.geometry} material={materials.PaletteMaterial002} />
    
      </group>
      <mesh
        geometry={nodes.Front_Board_Bottom.geometry}
        material={nodes.Front_Board_Bottom.material}
        position={[-8.84, 7.33, 11.13]}
        rotation={[1.4, 0, 0]}
        scale={[34.94, 1, 48.88]}
      />
      <mesh
        geometry={nodes.Front_Board.geometry}
        material={nodes.Front_Board.material}
        position={[-8.84, 7.33, 11.13]}
        rotation={[1.4, 0, 0]}
        scale={[34.94, 1, 48.88]}
      />
     {/* Main Button group with its own spring animation */}
<a.group
        name="Main Button"
        onPointerOver={() => setMainButtonSpring({ scale: [1.01, 1.01, 1.01] })}
        onPointerOut={() => setMainButtonSpring({ scale: [1, 1, 1] })}
        onClick={() => {  startGame();jiggle(setMainButtonSpring); }}
        scale={mainButtonSpring.scale}
      >
      <group position={[-0.28, 80.78, 13.53]} rotation={[0.4, 0, 0]} scale={[4.59, 3.72, 4.72]}>
        <mesh geometry={nodes.Sphere.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Sphere_1.geometry} material={materials['Material.007']} />
      </group>

      <Html        position={[-2.39, 80.78, 13.53]} scaleFactor={10}>
        <MainStartGame isOpen2={isOpen2}>START</MainStartGame>
        </Html>
      </a.group>


            {/* Purple Button group with its own spring animation */}
            <a.group
        name="PurpleButton"
        onPointerOver={() => setPurpleButtonSpring({ scale: [1.01, 1.01, 1.01] })}
        onPointerOut={() => setPurpleButtonSpring({ scale: [1, 1, 1] })}
        onClick={() => { handleNext(); jiggle(setPurpleButtonSpring); }}
        scale={purpleButtonSpring.scale}
      >
      <mesh
        geometry={nodes.Purple_Button.geometry}
        material={materials['Material.005']}
        position={[-23.18, 77.78, 19.7]}
        rotation={[0.24, 0.01, 0.04]}
        scale={[1.96, 1.73, 1.96]}
      />
             <Html        position={[-23.53, 77.46, 20.85]} scaleFactor={10}>
        <MuseumText isOpen2={isOpen2}>Museum</MuseumText>
        </Html>

</a.group>

       {/* Yellow Button group with its own spring animation */}
       <a.group
        name="Yellow Button"
        onPointerOver={() => setYellowButtonSpring({ scale: [1.01, 1.01, 1.01] })}
        onPointerOut={() => setYellowButtonSpring({ scale: [1, 1, 1] })}
        onClick={() => { handleNext(); jiggle(setYellowButtonSpring); }}
        scale={yellowButtonSpring.scale}
      >
       <mesh
        geometry={nodes.Yellow_Button.geometry}
        material={materials['Material.001']}
        position={[-12.47, 78.5, 17.76]}
        rotation={[0.39, 0.33, 0.01]}
        scale={[1.14, 1.04, 1.13]}
      />
              <Html  position={[-12.81, 77.73, 18.91]} scaleFactor={10}>
        <NextText isOpen2={isOpen2}>Next</NextText>
        </Html>
      </a.group>
  {/* Blue Button group with its own spring animation */}

  <a.group
        name="Blue Button"
        onPointerOver={() => setBlueButtonSpring({ scale: [1.01, 1.01, 1.01] })}
        onPointerOut={() => setBlueButtonSpring({ scale: [1, 1, 1] })}
        onClick={() => { handleNext(); jiggle(setBlueButtonSpring); }}
        scale={blueButtonSpring.scale}
      >
          <mesh
            geometry={nodes.Blue_Button.geometry}
            material={materials['Material.004']}
            position={[-21.32, 80.54, 11.45]}
            rotation={[0.39, 0.33, 0.01]}
            scale={[1.14, 1.04, 1.13]}
          />
          <Html     position={[-21.57, 80.08, 12.6]} scaleFactor={10}>
             <HomeText isOpen2={isOpen2}>Home</HomeText>
          </Html>
      </a.group>

      {/* Green Button group with its own spring animation */}
      <a.group
        name="Green Button"
        onPointerOver={() => setGreenButtonSpring({ scale: [1.01, 1.01, 1.01] })}
        onPointerOut={() => setGreenButtonSpring({ scale: [1, 1, 1] })}
        onClick={() => { handlePrev(); jiggle(setGreenButtonSpring); }}
        scale={greenButtonSpring.scale}
    >
          <mesh
            geometry={nodes.Green_Button.geometry}
            material={materials['Material.003']}
            position={[-17.25, 79.32, 14.79]}
            rotation={[0.39, 0.33, 0.01]}
            scale={[1.14, 1.04, 1.13]}
          />
          <Html       position={[-17.55, 78.84, 15.94]} scaleFactor={10}>
             <BackText isOpen2={isOpen2}>Back</BackText>
          </Html>
      </a.group>
<mesh
        geometry={nodes.Sweep_NURBS_NEON_0003.geometry}
        material={materials['PaletteMaterial002.001']}
        position={[32.79, 0, -0.87]}
      />
      
      <group position={[17.91, 87.59, 12.86]} scale={[1.5, 1.32, 1.5]}>
        <mesh geometry={nodes.Icosphere442.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Icosphere442_1.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Icosphere442_2.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Icosphere442_3.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Icosphere442_4.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Icosphere442_5.geometry} material={materials['STEEL.002']} />
        <mesh geometry={nodes.Icosphere442_6.geometry} material={nodes.Icosphere442_6.material} />
      </group>



      <mesh
        geometry={nodes.Body_2.geometry}
        material={nodes.Body_2.material}
        position={[17.91, 87.59, 12.86]}
        scale={[1.5, 1.32, 1.5]}
      />
      <mesh
        geometry={nodes.Body_2001.geometry}
        material={nodes.Body_2001.material}
        position={[17.91, 87.59, 12.86]}
        scale={[1.5, 1.32, 1.5]}
      />

            {/* Screen group with its own spring animation */}
            <a.group
                 position={[0.7, 110, -4.25]} 
  name="Screen"
  onPointerOver={() => setScreenSpring({ scale: [1.01, 1.01, 1.01] })}
  onPointerOut={() => setScreenSpring({ scale: [1, 1, 1] })}
  rotation={[-0.15, 0, 0]} 
  onClick={() => { startGame(); jiggle(setScreenSpring); }}
  scale={screenSpring.scale}

>
    <Image
      url={textureUrls} // Use the selected image URL here
 // Adjust position as needed
 // Adjust rotation as needed
      scale={[48, 48, 0]} // Adjust scale as needed; consider the image aspect ratio
    />
    <Html scaleFactor={10}>
      {/* Adjust as needed to display HTML content over the image */}
      <div style={{ color: 'white' }}>Start</div>
    </Html>
</a.group>

    </a.group>
  )
}

useGLTF.preload(ArcadeModel)




    