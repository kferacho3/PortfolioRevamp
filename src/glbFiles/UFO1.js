import * as THREE from "three"
import React, { useEffect, useRef, useState } from "react"
import { useSphere } from "@react-three/cannon"
import { useThree, useFrame } from "@react-three/fiber"
import {useGLTF, useAnimations, PerspectiveCamera, OrbitControls }  from "@react-three/drei"; 
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
    
          <mesh name="Mball001" geometry={nodes.Mball001.geometry} material={materials['Material.001']} position={[-1.7, -0.39, -1.97]} rotation={[Math.PI, -0.02, Math.PI]} scale={[0.63, 0.87, 0.43]} />
          <mesh name="UfoPurpleBod1" geometry={nodes.UfoPurpleBod1.geometry} material={materials['SVGMat.003']} position={[0.31, 0.04, 0.02]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]} />
          <mesh name="UFOPurpMiddle" geometry={nodes.UFOPurpMiddle.geometry} material={materials['SVGMat.068']} position={[0.31, 0.04, 0.02]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]} />
          <mesh name="UFOPurpBetween" geometry={nodes.UFOPurpBetween.geometry} material={materials['SVGMat.070']} position={[0.31, 0.04, 0.02]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]} />
          <mesh name="UFOPurpSides" geometry={nodes.UFOPurpSides.geometry} material={materials['SVGMat.072']} position={[0.31, 0.04, 0.02]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]} />
          <mesh name="UfoPurpleBod2" geometry={nodes.UfoPurpleBod2.geometry} material={materials['SVGMat.073']} position={[0.31, 0.04, 0.02]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]} />
          <mesh name="UfoGrayBod1" geometry={nodes.UfoGrayBod1.geometry} material={materials['SVGMat.074']} position={[0.31, 0.04, 0.02]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]} />
          <mesh name="HeadBottomFront" geometry={nodes.HeadBottomFront.geometry} material={materials['SVGMat.118']} position={[0.31, 0.11, 0.02]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]} />
          <mesh name="HeadTopFront" geometry={nodes.HeadTopFront.geometry} material={materials['SVGMat.119']} position={[0.31, 0.11, 0.02]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]} />
          <group name="AlienPurple" position={[-0.74, 0.01, -1.59]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]}>
            <mesh name="Curve123" geometry={nodes.Curve123.geometry} material={materials['SVGMat.124']} />
            <mesh name="Curve123_1" geometry={nodes.Curve123_1.geometry} material={materials['SVGMat.166']} />
            <mesh name="Curve123_2" geometry={nodes.Curve123_2.geometry} material={materials['SVGMat.218']} />
            <mesh name="Curve123_3" geometry={nodes.Curve123_3.geometry} material={materials['SVGMat.227']} />
            <mesh name="Curve123_4" geometry={nodes.Curve123_4.geometry} material={materials['SVGMat.240']} />
            <mesh name="Curve123_5" geometry={nodes.Curve123_5.geometry} material={materials['SVGMat.269']} />
            <mesh name="Curve123_6" geometry={nodes.Curve123_6.geometry} material={materials['SVGMat.272']} />
            <mesh name="Curve123_7" geometry={nodes.Curve123_7.geometry} material={materials['SVGMat.280']} />
            <mesh name="Curve123_8" geometry={nodes.Curve123_8.geometry} material={materials['SVGMat.294']} />
            <mesh name="Curve123_9" geometry={nodes.Curve123_9.geometry} material={materials['SVGMat.304']} />
            <mesh name="Curve123_10" geometry={nodes.Curve123_10.geometry} material={materials['SVGMat.307']} />
            <mesh name="Curve123_11" geometry={nodes.Curve123_11.geometry} material={materials['SVGMat.308']} />
            <mesh name="Curve123_12" geometry={nodes.Curve123_12.geometry} material={materials['SVGMat.324']} />
            <mesh name="Curve123_13" geometry={nodes.Curve123_13.geometry} material={materials['SVGMat.328']} />
            <mesh name="Curve123_14" geometry={nodes.Curve123_14.geometry} material={materials['SVGMat.371']} />
            <mesh name="Curve123_15" geometry={nodes.Curve123_15.geometry} material={materials['SVGMat.373']} />
            <mesh name="Curve123_16" geometry={nodes.Curve123_16.geometry} material={materials['SVGMat.377']} />
            <mesh name="Curve123_17" geometry={nodes.Curve123_17.geometry} material={materials['SVGMat.380']} />
            <mesh name="Curve123_18" geometry={nodes.Curve123_18.geometry} material={materials['SVGMat.384']} />
            <mesh name="Curve123_19" geometry={nodes.Curve123_19.geometry} material={materials['SVGMat.385']} />
            <mesh name="Curve123_20" geometry={nodes.Curve123_20.geometry} material={materials['SVGMat.386']} />
            <mesh name="Curve123_21" geometry={nodes.Curve123_21.geometry} material={materials['SVGMat.388']} />
            <mesh name="Curve123_22" geometry={nodes.Curve123_22.geometry} material={materials['SVGMat.390']} />
            <mesh name="Curve123_23" geometry={nodes.Curve123_23.geometry} material={materials['SVGMat.428']} />
            <mesh name="Curve123_24" geometry={nodes.Curve123_24.geometry} material={materials['SVGMat.429']} />
            <mesh name="Curve123_25" geometry={nodes.Curve123_25.geometry} material={materials['SVGMat.430']} />
            <mesh name="Curve123_26" geometry={nodes.Curve123_26.geometry} material={materials['SVGMat.453']} />
            <mesh name="Curve123_27" geometry={nodes.Curve123_27.geometry} material={materials['SVGMat.454']} />
            <mesh name="Curve123_28" geometry={nodes.Curve123_28.geometry} material={materials['SVGMat.467']} />
            <mesh name="Curve123_29" geometry={nodes.Curve123_29.geometry} material={materials['SVGMat.468']} />
            <mesh name="Curve123_30" geometry={nodes.Curve123_30.geometry} material={materials['SVGMat.469']} />
            <mesh name="Curve123_31" geometry={nodes.Curve123_31.geometry} material={materials['SVGMat.470']} />
            <mesh name="Curve123_32" geometry={nodes.Curve123_32.geometry} material={materials['SVGMat.474']} />
          </group>
        <mesh name="Freckle1" geometry={nodes.Freckle1.geometry} material={materials['SVGMat.156']} position={[0.31, 0.11, 0.02]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]} />
        <mesh name="Freckle2" geometry={nodes.Freckle2.geometry} material={materials['SVGMat.157']} position={[0.31, 0.11, 0.02]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]} />
        <mesh name="Mouth" geometry={nodes.Mouth.geometry} material={materials['SVGMat.366']} position={[0.31, 0.11, 0.02]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]} />
        <mesh name="Eyes" geometry={nodes.Eyes.geometry} material={materials['SVGMat.368']} position={[0.31, 0.11, 0.02]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]} />
        <mesh name="Freckle3" geometry={nodes.Freckle3.geometry} material={materials['SVGMat.369']} position={[0.31, 0.11, 0.02]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]} />
        <mesh name="Freckle4" geometry={nodes.Freckle4.geometry} material={materials['SVGMat.370']} position={[0.31, 0.11, 0.02]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]} />
        <group name="AlienOrange" position={[-2.65, 0.04, -1.47]} rotation={[0, 0, -Math.PI]} scale={[7.63, 1, 7.63]}>
          <mesh name="Curve391" geometry={nodes.Curve391.geometry} material={materials['SVGMat.392']} />
          <mesh name="Curve391_1" geometry={nodes.Curve391_1.geometry} material={materials['SVGMat.160']} />
          <mesh name="Curve391_2" geometry={nodes.Curve391_2.geometry} material={materials['SVGMat.194']} />
          <mesh name="Curve391_3" geometry={nodes.Curve391_3.geometry} material={materials['SVGMat.481']} />
        </group>
        <mesh name="Pupils" geometry={nodes.Pupils.geometry} material={materials['SVGMat.472']} position={[0.31, 0.11, 0.02]} rotation={[0, 0, -3.14]} scale={[7.63, 1, 7.63]} />
        <mesh name="HairSpikesForward" geometry={nodes.HairSpikesForward.geometry} material={materials['SVGMat.120']} position={[0.31, 0.04, 0.02]} rotation={[0, 0, -3.14]} scale={[36.58, 0.9, 36.58]} />
        <mesh name="HairSpikesLong" geometry={nodes.HairSpikesLong.geometry} material={materials['SVGMat.120']} position={[-1.73, -1.46, -0.84]} rotation={[1.55, 0, -1.57]} scale={[13.57, 1, 33.59]} />
        <mesh name="HairSpikesShort" geometry={nodes.HairSpikesShort.geometry} material={materials['SVGMat.120']} position={[-1.61, -1.48, -0.64]} rotation={[1.55, 0, -1.57]} scale={[17.66, 1, 33.6]} />
        <mesh name="UFOgrayBetween" geometry={nodes.UFOgrayBetween.geometry} material={materials['SVGMat.259']} position={[-0.55, 0.04, 0.26]} rotation={[0, 0, -3.14]} scale={[3.74, 1, 3.74]} />
        <mesh name="UFOgrayMid" geometry={nodes.UFOgrayMid.geometry} material={materials['SVGMat.253']} position={[-0.55, 0.04, 0.26]} rotation={[0, 0, -3.14]} scale={[3.74, 1, 3.74]} />
        <mesh name="UFOgraySides" geometry={nodes.UFOgraySides.geometry} material={materials['SVGMat.299']} position={[-0.55, 0.04, 0.26]} rotation={[0, 0, -3.14]} scale={[3.74, 1, 3.74]} />
        <mesh name="Hair" geometry={nodes.Hair.geometry} material={materials['SVGMat.608']} position={[-0.98, 0.04, -0.97]} rotation={[0, 0, -3.14]} scale={[13.22, 1.04, 13.22]} />
        <mesh name="HeadBack" geometry={nodes.HeadBack.geometry} material={materials['SVGMat.624']} position={[-1.33, -0.13, -0.97]} rotation={[0, 0, -3.14]} scale={[3.96, 0.38, 3.96]} />
        <group name="AlienRLeft" position={[-1.66, -0.18, -2.16]} rotation={[0, 0, -3.14]} scale={[4.7, 0.22, 4.7]}>
          <mesh name="Curve063" geometry={nodes.Curve063.geometry} material={materials['SVGMat.606']} />
          <mesh name="Curve063_1" geometry={nodes.Curve063_1.geometry} material={materials['SVGMat.605']} />
          <mesh name="Curve063_2" geometry={nodes.Curve063_2.geometry} material={materials['SVGMat.604']} />
          <mesh name="Curve063_3" geometry={nodes.Curve063_3.geometry} material={materials['SVGMat.603']} />
        </group>
        <group name="AlienRMiddle" position={[-1.66, -0.18, -2.16]} rotation={[0, 0, Math.PI]} scale={[4.7, 0.22, 4.7]}>
          <mesh name="Curve011" geometry={nodes.Curve011.geometry} material={materials['SVGMat.606']} />
          <mesh name="Curve011_1" geometry={nodes.Curve011_1.geometry} material={materials['SVGMat.605']} />
          <mesh name="Curve011_2" geometry={nodes.Curve011_2.geometry} material={materials['SVGMat.604']} />
          <mesh name="Curve011_3" geometry={nodes.Curve011_3.geometry} material={materials['SVGMat.603']} />
        </group>
        <group name="AlienRRight" position={[-1.66, -0.18, -2.16]} rotation={[0, 0, -Math.PI]} scale={[4.7, 0.22, 4.7]}>
          <mesh name="Curve125" geometry={nodes.Curve125.geometry} material={materials['SVGMat.606']} />
          <mesh name="Curve125_1" geometry={nodes.Curve125_1.geometry} material={materials['SVGMat.605']} />
          <mesh name="Curve125_2" geometry={nodes.Curve125_2.geometry} material={materials['SVGMat.604']} />
          <mesh name="Curve125_3" geometry={nodes.Curve125_3.geometry} material={materials['SVGMat.603']} />
        </group>
        <mesh name="WheelsInner" geometry={nodes.WheelsInner.geometry} material={materials['SVGMat.579']} position={[-0.5, 0.04, 0.2]} rotation={[0, 0, -3.14]} scale={[3.92, 1, 3.92]} />
        <mesh name="BackOfHeadTop" geometry={nodes.BackOfHeadTop.geometry} material={materials['SVGMat.013']} position={[-2.07, -0.25, -1.94]} rotation={[Math.PI, 0, -0.01]} scale={[4.22, 1, 4.22]} />
        <group name="AliensGreenRight" position={[-1.68, 0.2, -2.17]} rotation={[0, -0.26, -3.14]} scale={[7.78, 0.6, 7.78]}>
          <mesh name="Curve009" geometry={nodes.Curve009.geometry} material={materials['SVGMat.129']} />
          <mesh name="Curve009_1" geometry={nodes.Curve009_1.geometry} material={materials['SVGMat.229']} />
          <mesh name="Curve009_2" geometry={nodes.Curve009_2.geometry} material={materials['SVGMat.437']} />
          <mesh name="Curve009_3" geometry={nodes.Curve009_3.geometry} material={materials['SVGMat.485']} />
        </group>
        <group name="AliensGreenLeft" position={[-1.68, 0.2, -2.17]} rotation={[0, -0.26, -3.14]} scale={[7.78, 0.6, 7.78]}>
          <mesh name="Curve127" geometry={nodes.Curve127.geometry} material={materials['SVGMat.129']} />
          <mesh name="Curve127_1" geometry={nodes.Curve127_1.geometry} material={materials['SVGMat.229']} />
          <mesh name="Curve127_2" geometry={nodes.Curve127_2.geometry} material={materials['SVGMat.437']} />
          <mesh name="Curve127_3" geometry={nodes.Curve127_3.geometry} material={materials['SVGMat.485']} />
        </group>
        <group name="AliensGreenMiddle" position={[-1.67, 0.17, -2.24]} rotation={[0, -Math.PI / 4, -3.14]} scale={[7.78, 0.6, 7.78]}>
          <mesh name="Curve294" geometry={nodes.Curve294.geometry} material={materials['SVGMat.129']} />
          <mesh name="Curve294_1" geometry={nodes.Curve294_1.geometry} material={materials['SVGMat.229']} />
          <mesh name="Curve294_2" geometry={nodes.Curve294_2.geometry} material={materials['SVGMat.437']} />
          <mesh name="Curve294_3" geometry={nodes.Curve294_3.geometry} material={materials['SVGMat.485']} />
        </group>
      </group>
      
        <spotLight position={[10, 10, 10]} />
      <ambientLight intensity={1} />
    </group>
    </group>
  )
  
}

useGLTF.preload('./glb/UFO.glb')

