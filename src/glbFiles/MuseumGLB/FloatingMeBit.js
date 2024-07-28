import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
export function FloatingMeBit(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/FloatingFatMeBit.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {

  

    Object.keys(actions).forEach((key) => {
      actions[key].play();
    });
  
  }, [actions]);


    // State to keep track of the hover animation
    const [hoverY, setHoverY] = useState(0);
    const hoverSpeed = 1.25; // Speed of the hover animation
  
  
  
    useFrame((state, delta) => {
      // Calculate the new hover position
      setHoverY((prev) => prev + hoverSpeed * delta);
      const hoverOffset = Math.sin(hoverY) * 0.05; // Adjust the hover amplitude as needed
  
      // Update the group's position
      if (group.current) {
        group.current.position.y = hoverOffset;
      }
    });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="polySurface60" position={[0.543, 5.991, 0.898]} scale={[0.998, 1, 1]} />
        <group name="GLTF_created_0" position={[0, -8.498, -3.769]} scale={[1.484, 1, 1.484]}>
          <primitive object={nodes.GLTF_created_0_rootJoint} />
        </group>
        <mesh
          name="Body"
          castShadow
          receiveShadow
          geometry={nodes.Body.geometry}
          material={materials.PaletteMaterial001}
          position={[23.536, -1.453, -1.928]}
          rotation={[-1.861, 0.001, -0.004]}
          scale={[-89.88, -4.219, -49.974]}
        />
        <mesh
          name="MeBitHead"
          castShadow
          receiveShadow
          geometry={nodes.MeBitHead.geometry}
          material={materials['PaletteMaterial001.001']}
          position={[-5.877, 1.847, -4.846]}
          rotation={[1.861, -0.003, -0.009]}
          scale={[23.445, 1.73, 17.616]}
        />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.Carpet}
          skeleton={nodes.Object_7.skeleton}
          position={[0, -8.498, -3.769]}
          scale={[1.484, 1, 1.484]}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.Tassels}
          skeleton={nodes.Object_9.skeleton}
          position={[0, -8.498, -3.769]}
          scale={[1.484, 1, 1.484]}
        />
        <mesh
          name="bikini_bottom_strawberry_0"
          castShadow
          receiveShadow
          geometry={nodes.bikini_bottom_strawberry_0.geometry}
          material={materials.Tassels}
          position={[0.253, 0, -3.683]}
          rotation={[Math.PI, 0.024, -Math.PI]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/FloatingFatMeBit.glb')