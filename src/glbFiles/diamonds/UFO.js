import { useSphere } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useControls } from "../useControls";


//global constants used for events and movement
const SPEED = 5
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
const rotation = new THREE.Vector3()
const speed = new THREE.Vector3()
let holder;

//sets up camera and display for scene + character model
export const MeBit = (props) => {
  const { nodes, materials, animations } = useGLTF('./glb/UFO.glb')
  const ufo = useRef()
  const body = useRef()
  const [ref, api] = useSphere(() => ({ mass: 1, type: "Dynamic", position: [0, 10, 0], ...props }))
  const { camera } = useThree()
  const velocity = useRef([0, 0, 0])
  const controls = useControls();
  useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), [])




  //start of movement of character anc camera
  useFrame((state) => {
    ref.current.getWorldPosition(camera.position)
    frontVector.set(0, 0, Number(controls.current.backward) - Number(controls.current.forward))
    sideVector.set(Number(controls.current.left) - Number(controls.current.right), 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation)
    speed.fromArray(velocity.current)

  //controls hover for ufo when moving
      ufo.current.children[0].rotation.x = THREE.MathUtils.lerp(
      ufo.current.children[0].rotation.x / 4,
      Math.sin((speed.length() > 1) * state.clock.elapsedTime * 10) / 6,
      0.1,
    )
    
//positions ufo on screen
  ufo.current.children[0].rotation.z = 3*Math.PI / 2;
  ufo.current.children[0].position.x = -0.1;
  ufo.current.children[0].position.y = -0.15;

  holder = ufo.current.children[0].rotation.y;
//controls movement of ufo + scene to provide a zoomed in Third Person View
  ufo.current.rotation.copy(camera.rotation)
  ufo.current.position.copy(camera.position).add(camera.getWorldDirection(rotation).multiplyScalar(1))
  api.velocity.set(direction.x, velocity.current[1], direction.z)
//controls ascension / descension

if (controls.current.rise) {
  
  api.velocity.set(velocity.current[0], 10, velocity.current[2])
}


//controls spin
let temp = 0;
if (controls.current.spin) {

  //ufo.current.children[0].rotation.y += ((state.clock.elapsedTime + 1) / state.clock.elapsedTime) * (2* Math.PI/2) / 100000;
  while (temp <  2* Math.PI/2) {
    temp+= (2* Math.PI/2) / 100;


  ufo.current.children[0].rotation.y = temp;
  ufo.current.children[0].position.z = 1;
  ufo.current.children[0].position.x = -0.22;
  }
   
  ufo.current.quaternion.set(0, 2*Math.PI / 2, 0, -1).normalize();

} else {
  ufo.current.children[0].position.y = -0.15;
  ufo.current.children[0].position.x = -0.1;
  ufo.current.children[0].rotation.y = 0;
  ufo.current.children[0].position.z = 0;
  

}



//controls jump  
    if (controls.current.jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) api.velocity.set(velocity.current[0], 10, velocity.current[2])
  })
  return (
    
    <group  ref={ufo} >
      <group   dispose={null} {...props}>   
        <group  ref={body} position={[0, -0.15, 0.5]} rotation={[0, Math.PI /2, -Math.PI /2]} scale={.05} onPointerMissed={(e) => (ufo.current.children[0].rotation.z = Math.PI /16)}>
    
      <mesh
        geometry={nodes.Mball001.geometry}
        material={materials.PaletteMaterial004}
        position={[-1.7, -0.39, -1.97]}
        rotation={[Math.PI, -0.02, Math.PI]}
        scale={[0.63, 0.87, 0.43]}
      />
      <mesh
        geometry={nodes.UfoPurpleBod1.geometry}
        material={nodes.UfoPurpleBod1.material}
        position={[0.31, 0.04, 0.02]}
        rotation={[0, 0, -3.14]}
        scale={[7.63, 1, 7.63]}
      />
      <mesh
        name="UFOPurpSides"
        geometry={nodes.UFOPurpSides.geometry}
        material={nodes.UFOPurpSides.material}
        position={[0.31, 0.04, 0.02]}
        rotation={[0, 0, -3.14]}
        scale={[7.63, 1, 7.63]}
      />
      <group name="AlienPurple" position={[-0.74, 0.01, -1.59]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]}>
        <mesh geometry={nodes.Curve123.geometry} material={nodes.Curve123.material} />
        <mesh geometry={nodes.Curve123_1.geometry} material={nodes.Curve123_1.material} />
        <mesh geometry={nodes.Curve123_2.geometry} material={materials.PaletteMaterial007} />
        <mesh geometry={nodes.Curve123_3.geometry} material={nodes.Curve123_3.material} />
        <mesh geometry={nodes.Curve123_4.geometry} material={nodes.Curve123_4.material} />
        <mesh geometry={nodes.Curve123_5.geometry} material={nodes.Curve123_5.material} />
        <mesh geometry={nodes.Curve123_6.geometry} material={nodes.Curve123_6.material} />
        <mesh geometry={nodes.Curve123_7.geometry} material={nodes.Curve123_7.material} />
        <mesh geometry={nodes.Curve123_8.geometry} material={nodes.Curve123_8.material} />
        <mesh geometry={nodes.Curve123_9.geometry} material={nodes.Curve123_9.material} />
        <mesh geometry={nodes.Curve123_10.geometry} material={nodes.Curve123_10.material} />
        <mesh geometry={nodes.Curve123_11.geometry} material={nodes.Curve123_11.material} />
        <mesh geometry={nodes.Curve123_12.geometry} material={nodes.Curve123_12.material} />
        <mesh geometry={nodes.Curve123_13.geometry} material={nodes.Curve123_13.material} />
        <mesh geometry={nodes.Curve123_14.geometry} material={nodes.Curve123_14.material} />
        <mesh geometry={nodes.Curve123_15.geometry} material={nodes.Curve123_15.material} />
        <mesh geometry={nodes.Curve123_16.geometry} material={nodes.Curve123_16.material} />
        <mesh geometry={nodes.Curve123_17.geometry} material={nodes.Curve123_17.material} />
        <mesh geometry={nodes.Curve123_18.geometry} material={nodes.Curve123_18.material} />
        <mesh geometry={nodes.Curve123_19.geometry} material={nodes.Curve123_19.material} />
        <mesh geometry={nodes.Curve123_20.geometry} material={nodes.Curve123_20.material} />
        <mesh geometry={nodes.Curve123_21.geometry} material={nodes.Curve123_21.material} />
        <mesh geometry={nodes.Curve123_22.geometry} material={nodes.Curve123_22.material} />
        <mesh geometry={nodes.Curve123_23.geometry} material={nodes.Curve123_23.material} />
        <mesh geometry={nodes.Curve123_24.geometry} material={nodes.Curve123_24.material} />
        <mesh geometry={nodes.Curve123_25.geometry} material={nodes.Curve123_25.material} />
        <mesh geometry={nodes.Curve123_26.geometry} material={nodes.Curve123_26.material} />
        <mesh geometry={nodes.Curve123_27.geometry} material={nodes.Curve123_27.material} />
        <mesh geometry={nodes.Curve123_28.geometry} material={nodes.Curve123_28.material} />
        <mesh geometry={nodes.Curve123_29.geometry} material={nodes.Curve123_29.material} />
        <mesh geometry={nodes.Curve123_30.geometry} material={nodes.Curve123_30.material} />
        <mesh geometry={nodes.Curve123_31.geometry} material={nodes.Curve123_31.material} />
        <mesh geometry={nodes.Curve123_32.geometry} material={nodes.Curve123_32.material} />
      </group>
      <group name="AlienOrange" position={[-2.65, 0.04, -1.47]} rotation={[0, 0, -Math.PI]} scale={[7.63, 1, 7.63]}>
        <mesh geometry={nodes.Curve391.geometry} material={nodes.Curve391.material} />
        <mesh geometry={nodes.Curve391_1.geometry} material={materials.PaletteMaterial008} />
        <mesh geometry={nodes.Curve391_2.geometry} material={nodes.Curve391_2.material} />
        <mesh geometry={nodes.Curve391_3.geometry} material={nodes.Curve391_3.material} />
      </group>
      <group name="AlienRLeft" position={[-1.66, -0.18, -2.16]} rotation={[0, 0, -3.14]} scale={[4.7, 0.22, 4.7]}>
        <mesh geometry={nodes.Curve063.geometry} material={nodes.Curve063.material} />
        <mesh geometry={nodes.Curve063_1.geometry} material={nodes.Curve063_1.material} />
        <mesh geometry={nodes.Curve063_2.geometry} material={nodes.Curve063_2.material} />
        <mesh geometry={nodes.Curve063_3.geometry} material={nodes.Curve063_3.material} />
      </group>
      <group name="AlienRMiddle" position={[-1.66, -0.18, -2.16]} rotation={[0, 0, Math.PI]} scale={[4.7, 0.22, 4.7]}>
        <mesh geometry={nodes.Curve011.geometry} material={nodes.Curve011.material} />
        <mesh geometry={nodes.Curve011_1.geometry} material={nodes.Curve011_1.material} />
        <mesh geometry={nodes.Curve011_2.geometry} material={nodes.Curve011_2.material} />
        <mesh geometry={nodes.Curve011_3.geometry} material={nodes.Curve011_3.material} />
      </group>
      <group name="AlienRRight" position={[-1.66, -0.18, -2.16]} rotation={[0, 0, -Math.PI]} scale={[4.7, 0.22, 4.7]}>
        <mesh geometry={nodes.Curve125.geometry} material={nodes.Curve125.material} />
        <mesh geometry={nodes.Curve125_1.geometry} material={nodes.Curve125_1.material} />
        <mesh geometry={nodes.Curve125_2.geometry} material={nodes.Curve125_2.material} />
        <mesh geometry={nodes.Curve125_3.geometry} material={nodes.Curve125_3.material} />
      </group>
      <group
        name="AliensGreenRight"
        position={[-1.68, 0.2, -2.17]}
        rotation={[0, -0.26, -3.14]}
        scale={[7.78, 0.6, 7.78]}>
        <mesh geometry={nodes.Curve009.geometry} material={nodes.Curve009.material} />
        <mesh geometry={nodes.Curve009_1.geometry} material={nodes.Curve009_1.material} />
        <mesh geometry={nodes.Curve009_2.geometry} material={nodes.Curve009_2.material} />
        <mesh geometry={nodes.Curve009_3.geometry} material={nodes.Curve009_3.material} />
      </group>
      <group
        name="AliensGreenLeft"
        position={[-1.68, 0.2, -2.17]}
        rotation={[0, -0.26, -3.14]}
        scale={[7.78, 0.6, 7.78]}>
        <mesh geometry={nodes.Curve127.geometry} material={nodes.Curve127.material} />
        <mesh geometry={nodes.Curve127_1.geometry} material={nodes.Curve127_1.material} />
        <mesh geometry={nodes.Curve127_2.geometry} material={nodes.Curve127_2.material} />
        <mesh geometry={nodes.Curve127_3.geometry} material={nodes.Curve127_3.material} />
      </group>
      <group
        name="AliensGreenMiddle"
        position={[-1.67, 0.17, -2.24]}
        rotation={[0, -Math.PI / 4, -3.14]}
        scale={[7.78, 0.6, 7.78]}>
        <mesh geometry={nodes.Curve294.geometry} material={nodes.Curve294.material} />
        <mesh geometry={nodes.Curve294_1.geometry} material={nodes.Curve294_1.material} />
        <mesh geometry={nodes.Curve294_2.geometry} material={nodes.Curve294_2.material} />
        <mesh geometry={nodes.Curve294_3.geometry} material={nodes.Curve294_3.material} />
      </group>
      </group>w
      </group>
    </group>
  )
}

useGLTF.preload('./glb/UFO.glb')
