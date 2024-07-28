import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'




export function Model(props) {
    const { nodes, materials } = useGLTF('./glb/sci_fi_monitor.glb')
    return (
      <group {...props} dispose={null} position={[10, 10.5, 10]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <mesh geometry={nodes.Object_4.geometry} material={materials['Material.005']} />
              <mesh geometry={nodes.Object_5.geometry} material={materials['Material.010']} />
              <mesh geometry={nodes.Object_6.geometry} material={materials['Material.012']} />
              <mesh geometry={nodes.Object_7.geometry} material={materials.None} />
              <mesh geometry={nodes.Object_8.geometry} material={materials['Material.011']} />
              <mesh geometry={nodes.Object_9.geometry} material={materials['Material.018']} />
              <mesh geometry={nodes.Object_10.geometry} material={materials['Material.019']} />
              <mesh geometry={nodes.Object_11.geometry} material={materials['Material.014']} />
              <mesh geometry={nodes.Object_12.geometry} material={materials['Material.013']} />
              <mesh geometry={nodes.Object_13.geometry} material={materials['Material.015']} />
              <mesh geometry={nodes.Object_14.geometry} material={materials['Material.016']} />
              <mesh geometry={nodes.Object_15.geometry} material={materials['Material.017']} />
              <mesh geometry={nodes.Object_16.geometry} material={materials['Material.003']} />
            </group>
          </group>
        </group>
      </group>
    )
  }
  
  
  export function Model3(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('./glb/Monitor.glb')
    const { actions } = useAnimations(animations, group)
    useEffect (() => {
      
    });
    return (
      <group ref={group} {...props} dispose={null} position={[3, 50, 5]}>
        <group name="Scene">
          <group name="Monitor" rotation={[Math.PI / 2, 0, 0]}>
            <mesh name="Monitor_1" geometry={nodes.Monitor_1.geometry} material={materials['Material.005']} />
            <mesh name="Monitor_2" geometry={nodes.Monitor_2.geometry} material={materials['Material.010']} />
            <mesh name="Monitor_3" geometry={nodes.Monitor_3.geometry} material={materials['Material.012']} />
            <mesh name="Monitor_4" geometry={nodes.Monitor_4.geometry} material={materials.None} />
            <mesh name="Monitor_5" geometry={nodes.Monitor_5.geometry} material={materials['Material.011']} />
            <mesh name="Monitor_6" geometry={nodes.Monitor_6.geometry} material={materials['Material.018']} />
            <mesh name="Monitor_7" geometry={nodes.Monitor_7.geometry} material={materials['Material.019']} />
            <mesh name="Monitor_8" geometry={nodes.Monitor_8.geometry} material={materials['Material.014']} />
            <mesh name="Monitor_9" geometry={nodes.Monitor_9.geometry} material={materials['Material.013']} />
            <mesh name="Monitor_10" geometry={nodes.Monitor_10.geometry} material={materials['Material.015']} />
            <mesh name="Monitor_11" geometry={nodes.Monitor_11.geometry} material={materials['Material.016']} />
            <mesh name="Monitor_12" geometry={nodes.Monitor_12.geometry} material={materials['Material.017']} />
            <mesh name="Monitor_13" geometry={nodes.Monitor_13.geometry} material={materials['Material.001']} />
          </group>
        </group>
      </group>
    )
  }
  
  
  export function Model2(props) {
    const { nodes, materials } = useGLTF('./glb/full_screen.glb')
    return (
      <group {...props} dispose={null} position={[1, 31.5, 8]} scale={0.1}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_2.geometry} material={materials.object1_auv} />
        </group>
      </group>
    )
  }


  