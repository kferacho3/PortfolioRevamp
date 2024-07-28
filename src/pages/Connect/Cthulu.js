import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
// https://github.com/pmndrs/drei
import { Environment, useGLTF } from '@react-three/drei'
// https://github.com/pmndrs/react-postprocessing
// https://github.com/vanruesc/postprocessing
import { MathUtils } from 'three'

import cth from "../../glbModels/CthuluMeBit.glb"

import React from 'react'








function Cthulhu({ index, z, speed, factor, xFactor, yFactor, zFactor  }) {
  const ref = useRef()
  // useThree gives you access to the R3F state model
  const { viewport, camera } = useThree()
  // getCurrentViewport is a helper that calculates the size of the viewport
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z])
  // useGLTF is an abstraction around R3F's useLoader(GLTFLoader, url)
  // It can automatically handle draco and meshopt-compressed assets without you having to
  // worry about binaries and such ...
  //const { nodes, materials } = useGLTF('/banana-v1-transformed.glb')
  // By the time we're here the model is loaded, this is possible through React suspense
  const { nodes, materials } = useGLTF(cth)
  // Local component state, it is safe to mutate because it's fixed data


  // useFrame executes 60 times per second
  useFrame((state) => {
    const t = factor + state.clock.elapsedTime * (speed / 2)
    ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 10))
    ref.current.position.set(
      Math.cos(t) + Math.sin(t * 1) / 10 + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
      Math.sin(t) + Math.cos(t * 2) / 10 + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
      Math.sin(t) + Math.cos(t * 2) / 10 + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 4
    )
  })

  // Using drei's detailed is a nice trick to reduce the vertex count because
  // we don't need high resolution for objects in the distance. The model contains 3 decimated meshes ... distances={[0, 65, 80]}
  return (
    <group
    rotation={[Math.PI / 2, 0, 0]}
    ref={ref}
    scale={2}
    distances={[0, 0, 150]} // Adjusted distances to include negative and positive z index values
  >
       <mesh
        geometry={nodes.HeadBack001.geometry}
        material={nodes.HeadBack001.material}
        position={[0.11, -0.01, -0.05]}
        rotation={[0.03, 0.01, 3.13]}
        scale={[0.26, 0.02, 0.23]}
      />
      <mesh geometry={nodes.Curve044.geometry} material={nodes.Curve044.material} />
      <mesh geometry={nodes.Curve048.geometry} material={nodes.Curve048.material} />
      <mesh geometry={nodes.Curve049.geometry} material={nodes.Curve049.material} />
      <mesh geometry={nodes.Curve014.geometry} material={nodes.Curve014.material} />
      <mesh geometry={nodes.Curve017.geometry} material={nodes.Curve017.material} />
      <mesh geometry={nodes.Curve034.geometry} material={nodes.Curve034.material} />
      <mesh geometry={nodes.Curve037.geometry} material={nodes.Curve037.material} />
    </group>
  )
}

export default function Cthulhus({ speed = 1, count = 25, depth = 5, easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
  return (
    // No need for antialias (faster), dpr clamps the resolution to 1.5 (also faster than full resolution)
    // As of three > r154 if postprocessing is used the canvas can not have tonemapping (which is what "flat" is, no tonemapping)
    <group >
      <color attach="background" args={['#ffbf40']} />
      {/* As of three > r153 lights work differently in threejs, to get similar results as before you have to add decay={0} */}
      <spotLight position={[10, 20, 10]} penumbra={1} decay={0} intensity={3} color="orange" />
      {/* Using cubic easing here to spread out objects a little more interestingly, i wanted a sole big object up front ... */}
      {Array.from({ length: count }, (_, i) => <Cthulhu key={i} index={i}   factor = {MathUtils.randInt(20, 100)}
  speed = {MathUtils.randFloat(0.01, 0.25)}
  xFactor = {MathUtils.randFloatSpread(20)}
  yFactor = {MathUtils.randFloatSpread(5)}
  zFactor = {Math.abs(MathUtils.randFloatSpread(10))} /> /* prettier-ignore */)}
      <Environment preset="sunset" />
      {/* Multisampling (MSAA) is WebGL2 antialeasing, we don't need it (faster)
          The normal-pass is not required either, saves a bit of performance */}

    </group>
  )
}





