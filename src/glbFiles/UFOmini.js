import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'
import { MeshDistortMaterial, Shadow, useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

import TextCustom from '../pages/Personal/Personal2D/components/Text'

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial)

export default function UFOmini(props) {

  const { toggle3D } = props;

  const w = window.innerWidth;
  const isMobile = w <= 600; // Check if the window width is 600 or less
 // const scroll = useScroll()
  const scaledModel = isMobile ? 0.5 : 1; 
  const group = useRef()
  const shadow = useRef()
  const [mode, setMode] = useState(false)
  const [down, setDown] = useState(false)
  const [hovered, setHovered] = useState(false)
  
  const { nodes, materials, animations } = useGLTF("https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/UFOmini.glb")
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    Object.keys(actions).forEach((key) => {
      actions[key].play();
    });
  }, [actions]);

    // Change cursor on hovered state
    useEffect(() => {
      document.body.style.cursor = hovered
        ? 'none'
        : `url('data:image/svg+xml;base64,${btoa(
            '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#9c03fc"/></svg>'
          )}'), auto`
    }, [hovered])
      // Make the bubble float and follow the mouse
  // This is frame-based animation, useFrame subscribes the component to the render-loop
  useFrame((state) => {
 
    if (group.current) {
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, hovered ? state.mouse.x / 2 : 0, 0.2)
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 + (hovered ? state.mouse.y / 2 : 0),
        0.2
      )
    }
  })



  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [{ wobble}] = useSpring(
    {
      wobble: down ? 1.15 : hovered ? 1.15 : 1,
      config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 100, friction: 5 },
    },
    [mode, hovered, down]
  )
  useFrame(({ clock, }) => {
    const t = (1 + Math.sin(clock.getElapsedTime() * 1.5)) / 2
    group.current.position.y = t / 3
    shadow.current.scale.y = shadow.current.scale.z = 1 + t
    shadow.current.scale.x = (1 + t) * 1.25
    group.current.rotation.x = group.current.rotation.z += 0.005
   // group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.mouse[0] / 2, 0.05)
   // group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, state.mouse[1] / 4, 0.03)
  })
  return (
    <group        ref={group} {...props} dispose={null}>
    <group scale={scaledModel} >
    <Suspense fallback={null}>
          <a.mesh
                scale={wobble}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onPointerDown={() => setDown(true)}
                onClick={() => window.location.href = "/museum"}

             
          >
      <mesh
        geometry={nodes.Mball001.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.04, 0.05, 0.15]}
        rotation={[-1.57, -0.02, -Math.PI]}
        scale={[0.46, 0.51, 0.27]}>
        <MeshDistortMaterial
          color="#ffffff"
          flatShading
          roughness={0}
          metalness={0.1}
          factor={25}
          speed={10}
          transparent // Enable transparency
          opacity={0.2} // Adjust opacity to control transparency
        />
      </mesh>
      <mesh
        geometry={nodes.UfoPurpleBod1.geometry}
        material={nodes.UfoPurpleBod1.material}
        position={[1.25, -1.16, 0.09]}
        rotation={[1.57, 0, -3.14]}
        scale={[4.88, 0.52, 4.88]}
      />
      <group name="AlienPurple" position={[0.45, -0.08, 0.35]} rotation={[1.59, 0, 0]} scale={[4.13, 1, 4.13]}>
        <mesh geometry={nodes.Curve123.geometry} material={nodes.Curve123.material} />
        <mesh geometry={nodes.Curve123_1.geometry} material={nodes.Curve123_1.material} />
        <mesh geometry={nodes.Curve123_2.geometry} material={materials.PaletteMaterial004} />
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
      <group name="AlienOrange" position={[-0.58, -0.15, 0.37]} rotation={[1.59, 0, -Math.PI]} scale={[4.13, 1, 4.13]}>
        <mesh geometry={nodes.Curve391.geometry} material={nodes.Curve391.material} />
        <mesh geometry={nodes.Curve391_1.geometry} material={materials.PaletteMaterial005} />
        <mesh geometry={nodes.Curve391_2.geometry} material={nodes.Curve391_2.material} />
        <mesh geometry={nodes.Curve391_3.geometry} material={nodes.Curve391_3.material} />
      </group>
      <group name="AlienRLeft" position={[-0.04, 0.23, 0.17]} rotation={[-3.12, 0, -3.14]} scale={[1.62, 0.06, 3]}>
        <mesh geometry={nodes.Curve063.geometry} material={nodes.Curve063.material} />
        <mesh geometry={nodes.Curve063_1.geometry} material={nodes.Curve063_1.material} />
        <mesh geometry={nodes.Curve063_2.geometry} material={nodes.Curve063_2.material} />
        <mesh geometry={nodes.Curve063_3.geometry} material={nodes.Curve063_3.material} />
      </group>
      <group name="AlienRMiddle" position={[-0.04, 0.23, 0.17]} rotation={[1.59, 0, Math.PI]} scale={[1.62, 0.11, 1.63]}>
        <mesh geometry={nodes.Curve011.geometry} material={nodes.Curve011.material} />
        <mesh geometry={nodes.Curve011_1.geometry} material={nodes.Curve011_1.material} />
        <mesh geometry={nodes.Curve011_2.geometry} material={nodes.Curve011_2.material} />
        <mesh geometry={nodes.Curve011_3.geometry} material={nodes.Curve011_3.material} />
      </group>
      <group name="AlienRRight" position={[-0.04, 0.23, 0.17]} rotation={[1.59, 0, -Math.PI]} scale={[1.62, 0.11, 1.63]}>
        <mesh geometry={nodes.Curve125.geometry} material={nodes.Curve125.material} />
        <mesh geometry={nodes.Curve125_1.geometry} material={nodes.Curve125_1.material} />
        <mesh geometry={nodes.Curve125_2.geometry} material={nodes.Curve125_2.material} />
        <mesh geometry={nodes.Curve125_3.geometry} material={nodes.Curve125_3.material} />
      </group>

      <group name="AliensGreenRight" position={[-0.05, 0.23, 0.55]} rotation={[-3.12, -0.26, -3.14]} scale={[2.9, 0.17, 4.85]}>
        <mesh geometry={nodes.Curve009.geometry} material={nodes.Curve009.material} />
        <mesh geometry={nodes.Curve009_1.geometry} material={nodes.Curve009_1.material} />
        <mesh geometry={nodes.Curve009_2.geometry} material={nodes.Curve009_2.material} />
        <mesh geometry={nodes.Curve009_3.geometry} material={nodes.Curve009_3.material} />
      </group>
      <group name="AliensGreenLeft" position={[-0.05, 0.23, 0.55]} rotation={[1.59, -0.26, -3.14]} scale={[2.69, 0.31, 2.69]}>
        <mesh geometry={nodes.Curve127.geometry} material={nodes.Curve127.material} />
        <mesh geometry={nodes.Curve127_1.geometry} material={nodes.Curve127_1.material} />
        <mesh geometry={nodes.Curve127_2.geometry} material={nodes.Curve127_2.material} />
        <mesh geometry={nodes.Curve127_3.geometry} material={nodes.Curve127_3.material} />
      </group>
      <group name="AliensGreenMiddle" position={[-0.05, 0.27, 0.52]} rotation={[1.6, -Math.PI / 4, -3.14]} scale={[2.69, 0.31, 2.69]}>
        <mesh geometry={nodes.Curve294.geometry} material={nodes.Curve294.material} />
        <mesh geometry={nodes.Curve294_1.geometry} material={nodes.Curve294_1.material} />
        <mesh geometry={nodes.Curve294_2.geometry} material={nodes.Curve294_2.material} />
        <mesh geometry={nodes.Curve294_3.geometry} material={nodes.Curve294_3.material} />
      </group>
      
      </a.mesh>
      </Suspense>
      <group position={[1.25, -0.5, 0]}>
        <TextCustom position={[0, 0, 0]} fontSize={0.07} lineHeight={1} letterSpacing={-0.05}>
          05
          <meshBasicMaterial color="#cccccc" toneMapped={false} />
        </TextCustom>
        <TextCustom bold position={[-0.01, -0.1, 0]} fontSize={0.1} lineHeight={1} letterSpacing={-0.05} color="black">
        {`Enter,\nThe Racho Museum`}
        </TextCustom>
      </group>
      <Shadow ref={shadow} opacity={0.3} rotation-x={-Math.PI / 2} position={[0, -1.51, 0]} />
      </group>
    </group>
  )
}


useGLTF.preload("https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/UFOmini.glb")