/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Languages.glb for 3D models 
*/

import { useGLTF } from '@react-three/drei'
import React from 'react'

export default function Languages(props) {
  const { nodes, materials } = useGLTF('https://racho-devs.s3.us-east-2.amazonaws.com/about/glbDivs/Languages.glb')
  return (
    <group  position={[-0.5, -0.5, 1.5]}  rotation = {[Math.PI / 2, 0, 0]}  scale={1.85}  {...props} dispose={null}>
      <mesh geometry={nodes.Curve10167.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve088.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve092.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve093.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve095.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve099.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve101.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve103.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve108.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve109.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve114.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve117.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve120.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve131.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve136.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Curve137.geometry} material={materials.PaletteMaterial001} />
    </group>
  )
}

useGLTF.preload('https://racho-devs.s3.us-east-2.amazonaws.com/about/glbDivs/Languages.glb')
