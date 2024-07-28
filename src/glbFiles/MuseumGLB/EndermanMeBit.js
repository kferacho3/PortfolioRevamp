import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

export function EndermanMeBit(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/EndermanMeBit.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions['Armature|Idle'].play();
  
    const handleKeyDown = (event) => {
      if (['w', 'a', 's', 'd'].includes(event.key.toLowerCase())) {
        actions['Armature|Walk'].play();
        actions['Armature|Idle'].stop();
      }
    };
  
    const handleKeyUp = (event) => {
      if (['w', 'a', 's', 'd'].includes(event.key.toLowerCase())) {
        actions['Armature|Walk'].stop();
        actions['Armature|Idle'].play();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
  
    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [actions]);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.018}>
          <group name="3339e04691e7494cb6323f98e276e43afbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode" />
            </group>
          </group>
        </group>
        <group name="Object_6" />
        <group name="Object_8" />
        <group name="Object_12" />
        <group name="Object_14" />
        <group name="Ch28_Body" />
        <group name="Ch28_Sneakers" />
        <group name="Ch28_Pants" />
        <group name="Ch28_Hoody" />
        <group name="Ch28_Eyelashes" />
        <group name="Ch28_Hair" />
        <group
          name="Sketchfab_model001"
          position={[-0.15, 3.02, -0.163]}
          rotation={[-1.314, -0.39, 0.165]}
          scale={[0.028, 0.021, 0.016]}>
          <group name="Capsule_doneobjcleanermaterialmergergles" />
        </group>
        <group
          name="Sketchfab_model002"
          position={[-0.15, 3.02, -0.163]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.017, 0.007, 0.005]}>
          <group name="bfd69e6b9f3849ae84ae60844f34ca32objcleanermaterialmergergle" />
        </group>
        <group name="Sketchfab_model003" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Jonah's_Enderman_Rigfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2001">
              <group name="RootNode001">
                <group
                  name="Armature"
                  position={[0, 17.068, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <group name="Object_11">
                    <group name="Object_13001" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_14001">
                      <skinnedMesh
                        name="Mesh_Skin_0"
                        geometry={nodes.Mesh_Skin_0.geometry}
                        material={materials.Skin}
                        skeleton={nodes.Mesh_Skin_0.skeleton}
                      />
                      <skinnedMesh
                        name="Mesh_Skin_0_1"
                        geometry={nodes.Mesh_Skin_0_1.geometry}
                        material={materials.PaletteMaterial001}
                        skeleton={nodes.Mesh_Skin_0_1.skeleton}
                      />
                    </group>
                    <skinnedMesh
                      name="Object_15001"
                      geometry={nodes.Object_15001.geometry}
                      material={materials.Eyes}
                      skeleton={nodes.Object_15001.skeleton}
                    />
                    <primitive object={nodes._rootJoint} />
                    <primitive object={nodes.neutral_bone} />
                  </group>
                </group>
                <group
                  name="Camera001"
                  position={[794.567, 182.179, 3639.037]}
                  rotation={[-2.988, 1.34, 2.913]}
                  scale={100}>
                  <group name="Object_9" />
                </group>
                <group
                  name="Light"
                  position={[307.625, 190.386, 299.455]}
                  rotation={[1.89, 0.881, -2.045]}
                  scale={100}>
                  <group name="Object_6001" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_7" />
                  </group>
                </group>
                <group name="Mesh" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/EndermanMeBit.glb')