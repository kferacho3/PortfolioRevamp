import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import butt1 from '../glbModels/button1.glb';
import butt2 from '../glbModels/button2.glb';
import butt3 from '../glbModels/button3.glb';
import butt4 from '../glbModels/button4.glb';
export  function Butt1(props) {
  const group = useRef()
  
  const { nodes, materials } = useGLTF(butt1)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Torus015.geometry}
        material={materials['Material.037']}
        position={[0.15, -6.95, -0.59]}
        scale={[0.75, 1, 1.12]}
      />
      <mesh
        geometry={nodes.Torus016.geometry}
        material={materials['Material.038']}
        position={[0.15, -6.95, -0.59]}
        scale={[0.75, 1, 1.12]}
      />
      <mesh
        geometry={nodes.Object_9270.geometry}
        material={materials['UV_switch.009']}
        position={[0.15, -7.07, -0.65]}
        rotation={[-Math.PI, 0.04, -Math.PI]}
        scale={[0.79, 0.75, 1]}
      />
    </group>
  )
}

useGLTF.preload(butt1)


export  function Butt2(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(butt2)
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

useGLTF.preload(butt2)



export  function Butt3(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(butt3)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Torus018.geometry}
        material={materials['Material.040']}
        position={[0.12, -6.95, 9.92]}
        scale={[0.75, 1, 1.12]}
      />
      <mesh
        geometry={nodes.Object_9330.geometry}
        material={materials['UV_switch.011']}
        position={[0.13, -7.06, 9.91]}
        rotation={[-Math.PI, 0.03, -Math.PI]}
        scale={[0.96, 0.84, 1.07]}
      />
    </group>
  )
}

useGLTF.preload(butt3)

//useGLTF.preload('../glbModels/button3.glb')

export  function Butt4(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(butt4)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Torus019.geometry}
        material={materials['Material.041']}
        position={[-5.62, -6.95, 2.09]}
        rotation={[0, -1.23, 0]}
        scale={[0.75, 1, 1.12]}
      />
      <mesh
        geometry={nodes.Object_9359.geometry}
        material={materials['UV_switch.012']}
        position={[-5.59, -7.06, 2.03]}
        rotation={[-Math.PI, 1.2, -Math.PI]}
        scale={[1.03, 0.84, 1.01]}
      />
    </group>
  )
}

useGLTF.preload(butt4)



export  function Screens(props) {
4
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('../glbModels/Screens.glb')
    const { actions } = useAnimations(animations, group)
    return (
      <group ref={group} {...props} dispose={null}>
        <group position={[0.71, -7.07, 0.47]} rotation={[-Math.PI / 2, 0, -2.24]} scale={[0.79, 1, 0.75]}>
          <mesh
            name="Object_2020"
            geometry={nodes.Object_2020.geometry}
            material={materials['object1_auv.007']}
            position={[11.58, 6.4, 0.8]}
            rotation={[0, 0, -0.8]}
            scale={[0.41, 0.47, 0.44]}
          />
        </group>
        <group position={[-0.13, -7.07, -2.19]} rotation={[-Math.PI / 2, 0, -1.48]} scale={[0.79, 1, 0.75]}>
          <mesh
            name="Object_2021"
            geometry={nodes.Object_2021.geometry}
            material={materials['object1_auv.008']}
            position={[6.9, 10.13, 1.03]}
            rotation={[0, 0, -0.43]}
            scale={[0.43, 0.31, 0.43]}
          />
        </group>
        <group position={[0.29, -7.07, -1.77]} rotation={[-Math.PI / 2, 0, 2.35]} scale={[0.79, 1, 0.75]}>
          <mesh
            name="Object_2022"
            geometry={nodes.Object_2022.geometry}
            material={materials['object1_auv.009']}
            position={[5.16, 10.4, 0.7]}
            rotation={[0, 0, -0.34]}
            scale={[0.45, 0.39, 0.41]}
          />
        </group>
      </group>
    )
  }
  
  useGLTF.preload('../glbModels/Screens.glb')

  export function EDome(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('../glbModels/EmptyDome.glb')
    const { actions } = useAnimations(animations, group)
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes.Wireframe001.geometry}
          material={materials.PaletteMaterial001}
          position={[-5.26, 0, -13.2]}
          scale={[14.9, 8.51, 13.9]}
        />
        <mesh
          name="Torus025"
          geometry={nodes.Torus025.geometry}
          material={materials['Material.048']}
          position={[0.52, 11.99, 1.37]}
          scale={[12.47, 21.75, 11.63]}
        />
        <mesh
          name="Torus026"
          geometry={nodes.Torus026.geometry}
          material={materials['Material.049']}
          position={[0.58, -0.76, 1.22]}
          rotation={[0, 0, -0.21]}
          scale={[20.29, 9.74, 18.98]}
        />
        <mesh
          name="Torus027"
          geometry={nodes.Torus027.geometry}
          material={materials['Material.050']}
          position={[0.45, -3.25, 1.36]}
          rotation={[-0.08, 0, 0]}
          scale={[20.35, 8.7, 18.98]}
        />
        <mesh
          name="Torus028"
          geometry={nodes.Torus028.geometry}
          material={materials['Material.051']}
          position={[0.14, -1.58, 1.58]}
          rotation={[0, 0, 0.08]}
          scale={[3, 1.83, 2.78]}
        />
        <mesh
          name="Torus029"
          geometry={nodes.Torus029.geometry}
          material={materials['Material.052']}
          position={[0.32, 19.68, 1.68]}
          scale={[7.89, 21.75, 7.36]}
        />
        <group position={[-5.26, -0.07, -13.2]} rotation={[Math.PI, -1.16, 0]} scale={[16.91, 8.82, 17.74]}>
          <mesh geometry={nodes.Icosphere006.geometry} material={materials.PaletteMaterial003} />
          <mesh geometry={nodes.Icosphere006_1.geometry} material={materials.PaletteMaterial002} />
        </group>
        <mesh
          geometry={nodes.Sphere004.geometry}
          material={materials.PaletteMaterial004}
          position={[-5.26, 0, -13.2]}
          scale={[14.9, 8.51, 13.9]}
        />
        <mesh
          geometry={nodes.SignBackground001.geometry}
          material={materials.PaletteMaterial005}
          position={[-5.26, 0, -13.2]}
          scale={[10.36, 1.52, 1.34]}
        />
        <mesh
          geometry={nodes.path7001.geometry}
          material={nodes.path7001.material}
          position={[-5.26, 0, -10.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[62.6, 15.29, 97.05]}
        />
        <group name="Head" position={[0.54, 1.01, -14.85]} rotation={[0.02, 0, 1.57]} scale={[82.9, 3.56, 104.32]}>
          <mesh geometry={nodes.path1004.geometry} material={nodes.path1004.material} />
          <mesh geometry={nodes.path1004_1.geometry} material={nodes.path1004_1.material} />
          <mesh geometry={nodes.path1004_2.geometry} material={nodes.path1004_2.material} />
          <mesh geometry={nodes.path1004_3.geometry} material={nodes.path1004_3.material} />
          <mesh geometry={nodes.path1004_4.geometry} material={nodes.path1004_4.material} />
          <mesh geometry={nodes.path1004_5.geometry} material={nodes.path1004_5.material} />
          <mesh geometry={nodes.path1004_6.geometry} material={nodes.path1004_6.material} />
          <mesh geometry={nodes.path1004_7.geometry} material={nodes.path1004_7.material} />
          <mesh geometry={nodes.path1004_8.geometry} material={nodes.path1004_8.material} />
          <mesh geometry={nodes.path1004_9.geometry} material={nodes.path1004_9.material} />
          <mesh geometry={nodes.path1004_10.geometry} material={nodes.path1004_10.material} />
          <mesh geometry={nodes.path1004_11.geometry} material={nodes.path1004_11.material} />
        </group>
        <mesh
          geometry={nodes.Cylinder002.geometry}
          material={materials['Material.069']}
          position={[0.5, -7.11, 1.53]}
          rotation={[0, -0.36, 0]}
          scale={[1.03, 2.84, 0.97]}
        />
      </group>
    )
  }
  
  
  useGLTF.preload('../glbModels/EmptyDome.glb')