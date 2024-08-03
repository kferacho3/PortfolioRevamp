/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

export default function MuseumMonitor(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/MonitorOg.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[2.04, 2.04, 2.04]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <primitive object={nodes._rootJoint} />
          <primitive object={nodes.neutral_bone} />
          <skinnedMesh
            geometry={nodes.portal_button_reduced_2_portal_button_blue_0.geometry}
            material={materials.portal_button_blue}
            skeleton={nodes.portal_button_reduced_2_portal_button_blue_0.skeleton}
          />
          <skinnedMesh
            geometry={nodes.portal_button_reduced_2_portal_button_blue_0_1.geometry}
            material={materials.portal_button_switch}
            skeleton={nodes.portal_button_reduced_2_portal_button_blue_0_1.skeleton}
          />
          <skinnedMesh
            geometry={nodes.portal_button_reduced_2_portal_button_blue_0_2.geometry}
            material={materials['Scene_-_Root']}
            skeleton={nodes.portal_button_reduced_2_portal_button_blue_0_2.skeleton}
          />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.09, 0.13, 0.08]}>
        <group rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[1.08, 0.01, -0.39]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.04, 2.04, 2.04]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <primitive object={nodes._rootJoint_1} />
          <primitive object={nodes.neutral_bone_1} />
          <skinnedMesh
            geometry={nodes.portal_button_reduced_2_portal_button_blue_0001.geometry}
            material={materials['portal_button_blue.001']}
            skeleton={nodes.portal_button_reduced_2_portal_button_blue_0001.skeleton}
          />
          <skinnedMesh
            geometry={nodes.portal_button_reduced_2_portal_button_blue_0001_1.geometry}
            material={materials['portal_button_switch.001']}
            skeleton={nodes.portal_button_reduced_2_portal_button_blue_0001_1.skeleton}
          />
          <skinnedMesh
            geometry={nodes.portal_button_reduced_2_portal_button_blue_0001_2.geometry}
            material={materials['Scene_-_Root.001']}
            skeleton={nodes.portal_button_reduced_2_portal_button_blue_0001_2.skeleton}
          />
        </group>
      </group>
      <group name="Monitor" rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Monitor_1.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Monitor_2.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Monitor_3.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Monitor_4.geometry} material={materials.None} />
        <mesh geometry={nodes.Monitor_5.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Monitor_6.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Monitor_7.geometry} material={materials['Material.019']} />
        <mesh geometry={nodes.Monitor_8.geometry} material={materials['Material.014']} />
        <mesh geometry={nodes.Monitor_9.geometry} material={materials['Material.013']} />
        <mesh geometry={nodes.Monitor_10.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.Monitor_11.geometry} material={materials['Material.016']} />
        <mesh geometry={nodes.Monitor_12.geometry} material={materials['Material.017']} />
        <mesh geometry={nodes.Monitor_13.geometry} material={materials['Screen Material']} />
      </group>
    </group>
  )
}

useGLTF.preload('https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/MonitorOg.glb')
