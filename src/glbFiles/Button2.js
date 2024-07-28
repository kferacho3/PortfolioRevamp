/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

export default function Butt2(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/button2.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Torus017.geometry}
        material={materials['Material.039']}
        position={[6.02, -6.95, 2.22]}
        rotation={[0, 1.06, 0]}
        scale={[0.75, 1, 1.12]}
      />
      <mesh
        geometry={nodes.Object_9301.geometry}
        material={materials['UV_switch.010']}
        position={[6, -7.06, 2.17]}
        rotation={[Math.PI, -1.12, Math.PI]}
        scale={[1.09, 0.84, 0.93]}
      />
    </group>
  )
}

useGLTF.preload('/button2.glb')