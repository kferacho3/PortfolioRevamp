import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

export function RoboMeBit(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/RoboMeBit.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {

  

    Object.keys(actions).forEach((key) => {
      actions[key].play();
    });
  
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene003">
        <mesh
          name="Icosphere002"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002.geometry}
          material={nodes.Icosphere002.material}
          position={[-2.118, 17.916, -6.813]}
          rotation={[-Math.PI, 0.015, 3.082]}
        />
        <group name="RootNode026" position={[0, -83.844, 0]} scale={[0.28, 0.28, 0.291]}>
          <group
            name="Robot_Origin002"
            position={[0, 0.615, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}>
            <group name="Ears002" position={[0, 0, 2.967]} />
            <group name="Empty002" position={[0, -0.06, 2.786]}>
              <group name="Eyes002" position={[0, -0.431, 0.076]} scale={[1, 1, 0]} />
            </group>
            <group name="Hand_origin004" position={[0.723, 0, 2.015]}>
              <group name="hANDS004" position={[-0.723, 0, -1.963]}>
                <mesh
                  name="hANDS_White_Glossy_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.hANDS_White_Glossy_0.geometry}
                  material={materials.PaletteMaterial001}
                />
              </group>
            </group>
            <group name="Hand_origin005" position={[-0.723, 0, 2.015]} rotation={[0, 0, -Math.PI]}>
              <group name="hANDS005" position={[-0.723, 0, -1.963]}>
                <mesh
                  name="hANDS002_White_Glossy_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.hANDS002_White_Glossy_0.geometry}
                  material={materials.PaletteMaterial001}
                />
              </group>
            </group>
            <group name="Mouth002" position={[0, -0.504, 2.573]} />
            <group name="Robot002" position={[0, 0, 0.051]}>
              <mesh
                name="Robot_Blue_Light_0002"
                castShadow
                receiveShadow
                geometry={nodes.Robot_Blue_Light_0002.geometry}
                material={materials.PaletteMaterial002}
              />
              <group name="Robot_White_Glossy_0002">
                <mesh
                  name="Robot_White_Glossy_0002_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Robot_White_Glossy_0002_1.geometry}
                  material={materials['PaletteMaterial001.004']}
                />
                <mesh
                  name="Robot_White_Glossy_0002_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Robot_White_Glossy_0002_2.geometry}
                  material={materials['Glass.004']}
                />
                <mesh
                  name="Robot_White_Glossy_0002_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Robot_White_Glossy_0002_3.geometry}
                  material={materials.PaletteMaterial001}
                />
                <mesh
                  name="Robot_White_Glossy_0002_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Robot_White_Glossy_0002_4.geometry}
                  material={materials.PaletteMaterial003}
                />
                <mesh
                  name="Robot_White_Glossy_0002_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Robot_White_Glossy_0002_5.geometry}
                  material={materials.PaletteMaterial004}
                />
                <mesh
                  name="Robot_White_Glossy_0002_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Robot_White_Glossy_0002_6.geometry}
                  material={materials.PaletteMaterial005}
                />
              </group>
            </group>
            <group name="Wave008" position={[0, 0, 1]}>
              <mesh
                name="Wave_Blue_Light_0002"
                castShadow
                receiveShadow
                geometry={nodes.Wave_Blue_Light_0002.geometry}
                material={materials.PaletteMaterial002}
              />
            </group>
            <group name="Wave009" position={[0, 0, 0.427]} scale={[1, 1, 0.474]}>
              <mesh
                name="Wave002_Blue_Light_0002"
                castShadow
                receiveShadow
                geometry={nodes.Wave002_Blue_Light_0002.geometry}
                material={materials.PaletteMaterial002}
              />
            </group>
            <group name="Wave010" position={[0, 0, 0.819]} scale={[1, 1, 0.834]}>
              <mesh
                name="Wave001_Blue_Light_0002"
                castShadow
                receiveShadow
                geometry={nodes.Wave001_Blue_Light_0002.geometry}
                material={materials.PaletteMaterial002}
              />
            </group>
            <group name="Wave011" position={[0, 0, 0.05]} scale={[1, 1, 0.128]}>
              <mesh
                name="Wave003_Blue_Light_0002"
                castShadow
                receiveShadow
                geometry={nodes.Wave003_Blue_Light_0002.geometry}
                material={materials.PaletteMaterial002}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/RoboMeBit.glb')