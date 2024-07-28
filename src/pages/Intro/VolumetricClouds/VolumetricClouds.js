import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import VolumetricCloudMaterial from "./VolumetricCloudsMaterial";

export default function VolumetricClouds(props) {
  const ref = useRef();

  useFrame((scene, delta) => {
    ref.current.rotation.y += delta * 0.04;
  });

  return React.createElement(
    'group',
    { ref: ref },
    React.createElement(
      'mesh',
      { scale: props.scale, position: props.position },
      React.createElement('sphereGeometry', { args: [1.5, 16, 16] }),
      React.createElement(VolumetricCloudMaterial, { ...props })
    )
  );
}
