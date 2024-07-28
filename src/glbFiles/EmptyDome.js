import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

export function EmptyDome(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/Museum/RachosWorld.glb')
  const { actions } = useAnimations(animations, group)
  
  // Use effect to set the actions when the component mounts
  useEffect(() => {
    Object.keys(actions).forEach((key) => {
      actions[key].play();
    });
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene001">
        <mesh
          name="Torus001"
          castShadow
          receiveShadow
          geometry={nodes.Torus001.geometry}
          material={materials['Material.001']}
          position={[0.516, 11.986, 1.374]}
          rotation={[-Math.PI, 0.74, -Math.PI]}
          scale={[12.47, 21.746, 11.629]}
        />
        <mesh
          name="Torus002"
          castShadow
          receiveShadow
          geometry={nodes.Torus002.geometry}
          material={materials['Material.002']}
          position={[0.58, -0.762, 1.216]}
          rotation={[3.141, 0.007, -Math.PI]}
          scale={[20.289, 9.743, 18.982]}
        />
        <mesh
          name="Torus003"
          castShadow
          receiveShadow
          geometry={nodes.Torus003.geometry}
          material={materials['Material.003']}
          position={[0.455, -3.25, 1.359]}
          rotation={[-Math.PI, -0.015, -3.141]}
          scale={[20.354, 8.696, 18.984]}
        />
        <mesh
          name="Torus004"
          castShadow
          receiveShadow
          geometry={nodes.Torus004.geometry}
          material={materials['Material.004']}
          position={[0.142, -1.583, 1.583]}
          rotation={[-3.141, 0.015, Math.PI]}
          scale={[2.996, 1.825, 2.779]}
        />
        <mesh
          name="Torus005"
          castShadow
          receiveShadow
          geometry={nodes.Torus005.geometry}
          material={materials['Material.005']}
          position={[0.325, 19.678, 1.685]}
          rotation={[2.816, -0.035, -2.871]}
          scale={[7.892, 21.746, 7.36]}
        />
        <group
          name="Sphere003"
          position={[-5.255, -0.071, -13.203]}
          rotation={[Math.PI, -1.162, -0.004]}
          scale={[16.911, 8.823, 17.738]}>
          <mesh
            name="Icosphere1236"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere1236.geometry}
            material={materials['PaletteMaterial003.002']}
          />
          <mesh
            name="Icosphere1236_1"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere1236_1.geometry}
            material={materials['PaletteMaterial002.002']}
          />
        </group>
        <mesh
          name="Sphere004"
          castShadow
          receiveShadow
          geometry={nodes.Sphere004.geometry}
          material={materials['PaletteMaterial004.002']}
          position={[-5.255, 0, -13.203]}
          scale={[14.901, 8.513, 13.897]}
        />
        <mesh
          name="SignBackground002"
          castShadow
          receiveShadow
          geometry={nodes.SignBackground002.geometry}
          material={materials['PaletteMaterial005.002']}
          position={[-5.255, 0, -13.203]}
          scale={[10.358, 1.519, 1.338]}
        />
        <mesh
          name="path7002"
          castShadow
          receiveShadow
          geometry={nodes.path7002.geometry}
          material={materials['PaletteMaterial006.002']}
          position={[-5.255, 0, -10.613]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[62.604, 15.292, 97.05]}
        />
        <mesh
          name="Cylinder002"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials['Material.006']}
          position={[0.505, -7.11, 1.529]}
          rotation={[0, -0.355, 0]}
          scale={[1.028, 2.842, 0.968]}
        />
        <group
          name="Sketchfab_model001"
          position={[0.626, -3.944, 1.901]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[7.505, 7.166, 4.425]}>
          <group name="root001">
            <group name="GLTF_SceneRootNode001" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Icosphere001_2001" scale={1.907}>
                <mesh
                  name="Object_6001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6001.geometry}
                  material={materials['Poles.001']}
                  position={[-0.016, 0, -0.052]}
                  scale={[1.036, 1.159, 1.013]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="AlienRLeft"
          position={[0.357, 1.552, -14.766]}
          rotation={[Math.PI / 2, 0, -2.129]}
          scale={[5.8, 0.295, 5.8]}>
          <mesh
            name="Curve990"
            castShadow
            receiveShadow
            geometry={nodes.Curve990.geometry}
            material={materials['PaletteMaterial005.003']}
          />
          <mesh
            name="Curve990_1"
            castShadow
            receiveShadow
            geometry={nodes.Curve990_1.geometry}
            material={materials['PaletteMaterial009.001']}
          />
          <mesh
            name="Curve990_2"
            castShadow
            receiveShadow
            geometry={nodes.Curve990_2.geometry}
            material={materials['PaletteMaterial010.001']}
          />
          <mesh
            name="Curve990_3"
            castShadow
            receiveShadow
            geometry={nodes.Curve990_3.geometry}
            material={materials['PaletteMaterial002.003']}
          />
          <mesh
            name="Curve990_4"
            castShadow
            receiveShadow
            geometry={nodes.Curve990_4.geometry}
            material={materials['PaletteMaterial006.003']}
          />
          <mesh
            name="Curve990_5"
            castShadow
            receiveShadow
            geometry={nodes.Curve990_5.geometry}
            material={materials['PaletteMaterial007.001']}
          />
          <mesh
            name="Curve990_6"
            castShadow
            receiveShadow
            geometry={nodes.Curve990_6.geometry}
            material={materials['PaletteMaterial008.001']}
          />
          <mesh
            name="Curve990_7"
            castShadow
            receiveShadow
            geometry={nodes.Curve990_7.geometry}
            material={materials.PaletteMaterial011}
          />
          <mesh
            name="Curve990_8"
            castShadow
            receiveShadow
            geometry={nodes.Curve990_8.geometry}
            material={materials.PaletteMaterial012}
          />
        </group>
        <group name="Sketchfab_model002" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root002">
            <group name="GLTF_SceneRootNode002" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Icosphere001_2002" scale={1.907}>
                <mesh
                  name="Object_6002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6002.geometry}
                  material={materials['Poles.002']}
                  position={[0.202, -1.854, 0.869]}
                  scale={[7.792, 4.376, 7.543]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/Museum/RachosWorld.glb')