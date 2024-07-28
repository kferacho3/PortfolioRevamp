import { Environment } from "@react-three/drei";
import { folder, useControls } from "leva";
import React from "react";
import AnimationCamera from "./AnimationCamera";
import VolumetricClouds from "./VolumetricClouds/VolumetricClouds";

export const Experience = (props) => {
  const fogProps = useControls({
    VolumetricFog: folder(
      {
        threshold: {
          value: 0.7,
          min: 0.01,
          max: 1.0,
        },
        opacity: {
          value: 0.04,
          min: 0.01,
          max: 1.0,
        },
        range: {
          value: 0.21,
          min: 0.01,
          max: 1.0,
        },
        steps: {
          value: 64,
          min: 16,
          max: 256,
          step: 10,
        },
        position: {
          value: [0, -1.7, 0],
          step: 1,
        },
        color: {
          value: "#38426f",
        },
        scale: { value: [30, 4.8, 30] },
        depthTest: {
          value: true,
        },
      },
      { collapsed: true },
    ),
  });

  const cloudsProps = useControls({
    VolumetricClouds: folder(
      {
        threshold: {
          value: 0.55,
          min: 0.01,
          max: 1.0,
        },
        opacity: {
          value: 0.08,
          min: 0.01,
          max: 1.0,
        },
        range: {
          value: 0.2,
          min: 0.01,
          max: 1.0,
        },
        steps: {
          value: 64,
          min: 16,
          max: 256,
          step: 10,
        },
        position: {
          value: [0, 3, 0],
          step: 1,
        },
        color: {
          value: "#d6d8e1",
        },
        scale: { value: [60,30, 60] },
        depthTest: {
          value: false,
        },
      },
      { collapsed: true },
    ),
  });

  return React.createElement(
    React.Fragment,
    null,
    React.createElement('directionalLight', {
      castShadow: true,
      position: [150, 70, 100],
      intensity: 5,
      'shadow-mapSize': 1024,
      'shadow-bias': -0.001,
      'shadow-normalBias': 0.01,
      'shadow-camera-near': 60,
      'shadow-camera-far': 300,
      'shadow-camera-left': -50,
      'shadow-camera-right': 50,
      'shadow-camera-top': 60,
      'shadow-camera-bottom': -60,
    }),
    React.createElement('ambientLight', {
      intensity: 1.5,
      color: "#ccf0ff",
    }),

    React.createElement(VolumetricClouds, fogProps),
    React.createElement(VolumetricClouds, cloudsProps),
    React.createElement(Environment, {
      background: false,
      resolution: 16,
      files: "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/syferfontein_18d_clear_puresky_2k.hdr",
    }),
    React.createElement(AnimationCamera, null)
  );
};
