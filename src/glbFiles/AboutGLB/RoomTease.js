import { useGLTF } from '@react-three/drei'
import React from 'react'

export default function RoomTease(props) {
  const { nodes, materials } = useGLTF('https://racho-devs.s3.us-east-2.amazonaws.com/about/glbDivs/RoomTease.glb')
  return (
    <group position={[-0.5, -0.5, 1.5]} rotation = {[Math.PI / 2, 0, 0]} scale={[1.85, 1.85, 1.85]} {...props} dispose={null}>
      <group position={[0.023, 0, 0]} scale={[0.994, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve480.geometry}
          material={materials['blackInternal.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve480_1.geometry}
          material={materials['equalizer.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve480_2.geometry}
          material={materials['PaletteMaterial001.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve480_3.geometry}
          material={materials['blackFabric.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve480_4.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve480_5.geometry}
          material={materials['PaletteMaterial003.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve480_6.geometry}
          material={materials['PaletteMaterial002.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve480_7.geometry}
          material={materials['PaletteMaterial001.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve480_8.geometry}
          material={materials['ARCADE.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve480_9.geometry}
          material={materials['PaletteMaterial002.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve480_10.geometry}
          material={materials['PaletteMaterial003.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve480_11.geometry}
          material={materials['PaletteMaterial002.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve480_12.geometry}
          material={materials.PaletteMaterial002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve480_13.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve480_14.geometry}
          material={materials['frontColor.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://racho-devs.s3.us-east-2.amazonaws.com/about/glbDivs/RoomTease.glb')