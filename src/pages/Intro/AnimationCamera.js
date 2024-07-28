import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import React, { useCallback, useEffect, useRef } from "react";

const AnimationCamera = () => {
  const { camera } = useThree();
  const controlsRef = useRef();

  const animateCamera = useCallback(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      camera.position,
      { x: 45, z: 0, y: 90 },
      {
        x: -5,
        z: 70,
        y: -15,
        duration: 7,
        ease: "power1.inOut",
        onComplete: () => {
          if (controlsRef.current) controlsRef.current.enabled = true;
        },
      }
    ).fromTo(
      controlsRef.current.target,
      { x: 10, y: 90, z: 0 },
      {
        x: 10,
        y: -9,
        z: 0,
        duration: 7,
        ease: "power1.inOut",
      },
      "<"
    );
  }, [camera]);

  useEffect(() => {
    animateCamera();
  }, [animateCamera]);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      React.memo(OrbitControls),
      {
        makeDefault: true,
        maxPolarAngle: Math.PI / 1.85,
        minPolarAngle: Math.PI / 2.25,
        zoomSpeed: 0.5,
        maxDistance: 80,
        minDistance: 40,
        target: [10, -9, 0],
        ref: controlsRef,
      }
    )
  );
};

export default React.memo(AnimationCamera);
