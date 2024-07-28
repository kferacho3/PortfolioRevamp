import { useGLTF } from '@react-three/drei'
import React from 'react'

export function SubMeBit(props) {
  const { nodes, materials } = useGLTF('https://racho-devs.s3.us-east-2.amazonaws.com/services/glb/MeBitSub.glb')
  return (
    <group {...props}  dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MeBitHead.geometry}
        material={materials.PaletteMaterial001}
        position={[152.351, -107.046, 76.21]}
        rotation={[1.281, 0, -3.141]}
        scale={[575.136, 23.364, 575.172]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2001.geometry}
        material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2002.geometry}
        material={materials.Glass}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('https://racho-devs.s3.us-east-2.amazonaws.com/services/glb/MeBitSub.glb')
