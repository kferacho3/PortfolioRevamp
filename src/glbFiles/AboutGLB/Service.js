/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Service.glb for 3D models 
*/

import { useGLTF } from '@react-three/drei'
import React from 'react'

export default function Service(props) {
  const { nodes, materials } = useGLTF('https://racho-devs.s3.us-east-2.amazonaws.com/about/glbDivs/Service.glb')
  return (
    <group  position={[-0.5, -0.5, 1.5]}  rotation = {[Math.PI / 2, 0, 0]}  scale={1.85}  {...props} dispose={null}>
      <mesh geometry={nodes.Curve10131.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve053.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve054.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve059.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve065.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve073.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve075.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve077.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve078.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve085.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve086.geometry} material={materials.PaletteMaterial001} />
    </group>
  )
}

useGLTF.preload('https://racho-devs.s3.us-east-2.amazonaws.com/about/glbDivs/Service.glb')