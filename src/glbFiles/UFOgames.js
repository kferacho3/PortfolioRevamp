/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';

export const Rig = ({ children }) => {
  const group = useRef();
  const { camera, mouse } = useThree();

  useFrame(() => {
    // Example logic for adjusting camera based on UFO's movement
    // This is simplified; adjust according to your game's logic
    const offset = mouse.y * 0.1; // Adjust this multiplier as needed
    const position = [0,Math.max((0 + offset), 2), 8]; // Basic example position, adjust as needed

    // Set the group (and thus the camera and lighting) position
    group.current.position.set(...position);

    // Look at the center or another dynamic point
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      {/* Adjust light properties as needed */}
      <pointLight distance={400} position={[0, 100, -420]} intensity={5} color="indianred" />

      {children}
    </group>
  );
};

export default function UfoShip({props, playerRef, bodyRef}) {
  //const playerRef = useRef()
  const cross = useRef()
  const target = useRef()
  const { nodes, materials, animations } = useGLTF('https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/UFOGames.glb')
  const { actions } = useAnimations(animations, playerRef)
  const lightgreen = new THREE.Color('lightgreen')
  const hotpink = new THREE.Color('hotpink')
  const laserMaterial = new THREE.MeshBasicMaterial({ color: lightgreen })
  const crossMaterial = new THREE.MeshBasicMaterial({ color: hotpink, fog: false })
  useFrame(() => {

    // ...
    crossMaterial.color = lightgreen;

  })
  return (
    <group ref={playerRef}>
    <group scale={1} ref={bodyRef} {...props} dispose={null}>
    <group  scale={0.005}  ref={cross} position={[0, 0, 0]} name="cross">
          <mesh renderOrder={1000} material={crossMaterial}>
            <boxGeometry args={[20, 2, 2]} />
          </mesh>
          <mesh renderOrder={1000} material={crossMaterial}>
            <boxGeometry args={[2, 20, 2]} />
          </mesh>
        </group>
        <group ref={target}  scale={0.005} position={[0, 0, 0]} name="target">
          <mesh position={[0, 20, 0]} renderOrder={1000} material={crossMaterial}>
            <boxGeometry args={[40, 2, 2]} />
          </mesh>
          <mesh position={[0, -20, 0]} renderOrder={1000} material={crossMaterial}>
            <boxGeometry args={[40, 2, 2]} />
          </mesh>
          <mesh position={[20, 0, 0]} renderOrder={1000} material={crossMaterial}>
            <boxGeometry args={[2, 40, 2]} />
          </mesh>
          <mesh position={[-20, 0, 0]} renderOrder={1000} material={crossMaterial}>
            <boxGeometry args={[2, 40, 2]} />
          </mesh>
        </group>

    <Rig>
    <group rotation={[0, Math.PI, 0]} >
      <group name="Scene">
        <mesh
          name="UfoPurpleBod1"
          castShadow
          receiveShadow
          geometry={nodes.UfoPurpleBod1.geometry}
          material={materials.PaletteMaterial001}
          position={[1.247, -1.158, 0.088]}
          rotation={[1.57, 0, -3.141]}
          scale={[4.877, 0.516, 4.877]}
        />
        <group
          name="Empty"
          position={[0.944, -1.007, 0.119]}
          rotation={[1.57, 0, 0]}
          scale={[0.571, 0.938, 0.571]}>
          <group
            name="AlienOrange"
            position={[-2.652, 0.039, -1.468]}
            rotation={[0, 0, -Math.PI]}
            scale={[7.63, 1, 7.63]}>
            <mesh
              name="Curve391"
              castShadow
              receiveShadow
              geometry={nodes.Curve391.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve391_1"
              castShadow
              receiveShadow
              geometry={nodes.Curve391_1.geometry}
              material={materials.PaletteMaterial002}
            />
            <mesh
              name="Curve391_2"
              castShadow
              receiveShadow
              geometry={nodes.Curve391_2.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve391_3"
              castShadow
              receiveShadow
              geometry={nodes.Curve391_3.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="AlienPurple"
            position={[-0.744, 0.011, -1.588]}
            rotation={[0, 0, -3.141]}
            scale={[7.63, 1, 7.63]}>
            <mesh
              name="Curve123"
              castShadow
              receiveShadow
              geometry={nodes.Curve123.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_1"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_1.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_2"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_2.geometry}
              material={materials.PaletteMaterial003}
            />
            <mesh
              name="Curve123_3"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_3.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_4"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_4.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_5"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_5.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_6"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_6.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_7"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_7.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_8"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_8.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_9"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_9.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_10"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_10.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_11"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_11.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_12"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_12.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_13"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_13.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_14"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_14.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_15"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_15.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_16"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_16.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_17"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_17.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_18"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_18.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_19"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_19.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_20"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_20.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_21"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_21.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_22"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_22.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_23"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_23.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_24"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_24.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_25"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_25.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_26"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_26.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_27"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_27.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_28"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_28.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_29"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_29.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_30"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_30.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_31"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_31.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve123_32"
              castShadow
              receiveShadow
              geometry={nodes.Curve123_32.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="AlienRLeft"
            position={[-1.656, -0.184, -2.157]}
            rotation={[1.57, 0, -3.141]}
            scale={[3.001, 0.111, 3.001]}>
            <mesh
              name="Curve063"
              castShadow
              receiveShadow
              geometry={nodes.Curve063.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve063_1"
              castShadow
              receiveShadow
              geometry={nodes.Curve063_1.geometry}
              material={materials.PaletteMaterial004}
            />
            <mesh
              name="Curve063_2"
              castShadow
              receiveShadow
              geometry={nodes.Curve063_2.geometry}
              material={materials.PaletteMaterial005}
            />
            <mesh
              name="Curve063_3"
              castShadow
              receiveShadow
              geometry={nodes.Curve063_3.geometry}
              material={materials.PaletteMaterial006}
            />
          </group>
          <group
            name="AlienRMiddle"
            position={[-1.656, -0.184, -2.157]}
            rotation={[0, 0, Math.PI]}
            scale={[3.001, 0.111, 3.001]}>
            <mesh
              name="Curve011"
              castShadow
              receiveShadow
              geometry={nodes.Curve011.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve011_1"
              castShadow
              receiveShadow
              geometry={nodes.Curve011_1.geometry}
              material={materials.PaletteMaterial004}
            />
            <mesh
              name="Curve011_2"
              castShadow
              receiveShadow
              geometry={nodes.Curve011_2.geometry}
              material={materials.PaletteMaterial005}
            />
            <mesh
              name="Curve011_3"
              castShadow
              receiveShadow
              geometry={nodes.Curve011_3.geometry}
              material={materials.PaletteMaterial006}
            />
          </group>
          <group
            name="AlienRRight"
            position={[-1.656, -0.184, -2.157]}
            rotation={[0, 0, -Math.PI]}
            scale={[3.001, 0.111, 3.001]}>
            <mesh
              name="Curve125"
              castShadow
              receiveShadow
              geometry={nodes.Curve125.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve125_1"
              castShadow
              receiveShadow
              geometry={nodes.Curve125_1.geometry}
              material={materials.PaletteMaterial004}
            />
            <mesh
              name="Curve125_2"
              castShadow
              receiveShadow
              geometry={nodes.Curve125_2.geometry}
              material={materials.PaletteMaterial005}
            />
            <mesh
              name="Curve125_3"
              castShadow
              receiveShadow
              geometry={nodes.Curve125_3.geometry}
              material={materials.PaletteMaterial006}
            />
          </group>
        </group>
        <group name="Empty001" position={[1.655, 2.463, 0.022]} rotation={[-1.695, 0, 0]}>
          <group
            name="AliensGreenLeft"
            position={[-1.678, 0.204, -2.166]}
            rotation={[0, -0.262, -3.141]}
            scale={[2.847, 0.29, 2.84]}>
            <mesh
              name="Curve127"
              castShadow
              receiveShadow
              geometry={nodes.Curve127.geometry}
              material={materials.PaletteMaterial007}
            />
            <mesh
              name="Curve127_1"
              castShadow
              receiveShadow
              geometry={nodes.Curve127_1.geometry}
              material={materials.PaletteMaterial008}
            />
            <mesh
              name="Curve127_2"
              castShadow
              receiveShadow
              geometry={nodes.Curve127_2.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve127_3"
              castShadow
              receiveShadow
              geometry={nodes.Curve127_3.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="AliensGreenMiddle"
            position={[-1.665, 0.169, -2.243]}
            rotation={[0, -Math.PI / 4, -3.142]}
            scale={[3.876, 0.24, 2.84]}>
            <mesh
              name="Curve294"
              castShadow
              receiveShadow
              geometry={nodes.Curve294.geometry}
              material={materials.PaletteMaterial007}
            />
            <mesh
              name="Curve294_1"
              castShadow
              receiveShadow
              geometry={nodes.Curve294_1.geometry}
              material={materials.PaletteMaterial008}
            />
            <mesh
              name="Curve294_2"
              castShadow
              receiveShadow
              geometry={nodes.Curve294_2.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve294_3"
              castShadow
              receiveShadow
              geometry={nodes.Curve294_3.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="AliensGreenRight"
            position={[-1.678, 0.204, -2.166]}
            rotation={[3.14, -0.287, -3.141]}
            scale={[2.998, 0.177, 4.567]}>
            <mesh
              name="Curve009"
              castShadow
              receiveShadow
              geometry={nodes.Curve009.geometry}
              material={materials.PaletteMaterial007}
            />
            <mesh
              name="Curve009_1"
              castShadow
              receiveShadow
              geometry={nodes.Curve009_1.geometry}
              material={materials.PaletteMaterial008}
            />
            <mesh
              name="Curve009_2"
              castShadow
              receiveShadow
              geometry={nodes.Curve009_2.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Curve009_3"
              castShadow
              receiveShadow
              geometry={nodes.Curve009_3.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
        </group>
        <mesh
          name="Cylinder015_02_-_Default_0010"
          castShadow
          receiveShadow
          geometry={nodes['Cylinder015_02_-_Default_0010'].geometry}
          material={materials['02_-_Default']}
          position={[-0.011, -0.737, -0.28]}
          rotation={[0, -0.01, Math.PI / 2]}
          scale={0.009}
        />
        <mesh
          name="Cylinder015_04_-_Default_0"
          castShadow
          receiveShadow
          geometry={nodes['Cylinder015_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[-0.011, -0.737, -0.28]}
          rotation={[0, -0.01, Math.PI / 2]}
          scale={0.009}
        />
        <mesh
          name="Cylinder015_05_-_Default_0012"
          castShadow
          receiveShadow
          geometry={nodes['Cylinder015_05_-_Default_0012'].geometry}
          material={materials['05_-_Default']}
          position={[-0.011, -0.737, -0.28]}
          rotation={[0, -0.01, Math.PI / 2]}
          scale={0.009}
        />
        <mesh
          name="Object_2008"
          castShadow
          receiveShadow
          geometry={nodes.Object_2008.geometry}
          material={materials.material_0}
          position={[-0.012, -0.867, 0.103]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[0.031, 0.023, 0.03]}
        />
        <mesh
          name="pCube1_PistolTrigger_0002"
          castShadow
          receiveShadow
          geometry={nodes.pCube1_PistolTrigger_0002.geometry}
          material={materials['PistolTrigger.002']}
          position={[0.208, -0.809, 0.51]}
          rotation={[1.891, 1.54, -1.938]}
          scale={[0.011, 0.041, 0.011]}
        />
        <mesh
          name="pCylinder7_PistolBody_0002"
          castShadow
          receiveShadow
          geometry={nodes.pCylinder7_PistolBody_0002.geometry}
          material={materials['PistolBody.002']}
          position={[0.209, -0.781, 0.533]}
          rotation={[1.891, 1.54, -1.938]}
          scale={0.011}
        />
        <mesh
          name="pHelix1_PistolRings_0002"
          castShadow
          receiveShadow
          geometry={nodes.pHelix1_PistolRings_0002.geometry}
          material={materials['PistolRings.002']}
          position={[0.212, -0.724, 0.657]}
          rotation={[1.891, 1.54, 2.774]}
          scale={[0.006, 0.007, 0.007]}
        />
        <mesh
          name="pTorus6_PistolType_0002"
          castShadow
          receiveShadow
          geometry={nodes.pTorus6_PistolType_0002.geometry}
          material={materials['PistolType.002']}
          position={[0.249, -0.728, 0.475]}
          rotation={[1.523, -0.079, -1.582]}
          scale={0.011}
        />
        <mesh
          name="Spinner004"
          castShadow
          receiveShadow
          geometry={nodes.Spinner004.geometry}
          material={materials['material_0.004']}
          position={[-1.001, -0.757, -0.4]}
          rotation={[1.531, -1.437, 3.124]}
          scale={[0.004, 0.023, 0.005]}
        />
  </group>
  </group>
    </Rig>
    </group>
    </group>
 
    
  )
}

useGLTF.preload('https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/UFOGames.glb')
