import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from "@react-three/fiber";
import lerp from "lerp";
import React, { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Object3D, WebGLRenderTarget } from "three";
import BackfaceMaterial from "../glbFiles/diamonds/BackfaceMaterial";
import RefractionMaterial from "../glbFiles/diamonds/RefractionMaterial";
import { useBlock } from "../glbFiles/diamonds/blocks";
import state from "../glbFiles/diamonds/store";
import diamond from "../glbModels/diamond.glb";
const dummy = new Object3D();
//const randomInt = Math.floor(Math.random() * 3);
const randomInt = 1;

const crystal2 = "https://racho-devs.s3.us-east-2.amazonaws.com/intro/HeaderW-svg.png";

const crystal1 = "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/Crystals/stylized_crystal.glb";


export default function Diamonds() {
  const nodeArray = [
    'crystal17_2_crystal_17_2_0',
    'pCone1_lambert1_0',
    'CrystalStrange',
  ];

  const glbArray = [
    crystal1, // should be scaled to 0.1
    diamond,          // should be scaled to 0.5
    crystal2,          // should be scaled to 0.5
  ];

  const modelSize = [
    0.5, // for stylized_crystal
    0.5, // for diamond
    0.1, // for crystal
  ];

  const { nodes, materials } = useGLTF(glbArray[randomInt]);

  useLayoutEffect(() => {
    nodes[nodeArray[randomInt]].geometry.center();
  }, [nodes, randomInt, nodeArray]);

  const { size, gl, scene, camera, clock } = useThree();
  const { contentMaxWidth, sectionHeight, mobile } = useBlock();
  const model = useRef();
  const ratio = gl.getPixelRatio();

  const [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial] = useMemo(() => {
    const envFbo = new WebGLRenderTarget(size.width * ratio, size.height * ratio);
    const backfaceFbo = new WebGLRenderTarget(size.width * ratio, size.height * ratio);
    const backfaceMaterial = new BackfaceMaterial();
    const refractionMaterial = new RefractionMaterial({
      envMap: envFbo.texture,
      backfaceMap: backfaceFbo.texture,
      resolution: [size.width * ratio, size.height * ratio],
    });
    return [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial];
  }, [size.width, size.height, ratio]);

  useEffect(() => {
    return () => {
      envFbo.dispose();
      backfaceFbo.dispose();
    };
  }, [envFbo, backfaceFbo]);

  useFrame(() => {
    state.diamonds.forEach((data, i) => {
      const t = clock.getElapsedTime() / 2;
      const { x, offset, scale, factor } = data;
      const s = (contentMaxWidth / 15) * (scale * modelSize[randomInt]);
      data.pos.set(mobile ? 0 : x * 10, lerp(data.pos.y, -sectionHeight * offset * factor + (state.top.current / state.zoom) * factor, 0.1), 0);
      dummy.position.copy(data.pos);
      if (i === state.diamonds.length - 1) dummy.rotation.set(0, t, 0);
      else dummy.rotation.set(t, t, t);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      model.current.setMatrixAt(i, dummy.matrix);
      model.current.instanceMatrix.needsUpdate = true;
    });

    gl.autoClear = false;
    camera.layers.set(0);
    gl.setRenderTarget(envFbo);
    gl.clearColor();
    gl.render(scene, camera);
    gl.clearDepth();
    camera.layers.set(1);
    model.current.material = backfaceMaterial;
    gl.setRenderTarget(backfaceFbo);
    gl.clearDepth();
    gl.render(scene, camera);
    camera.layers.set(0);
    gl.setRenderTarget(null);
    gl.render(scene, camera);
    gl.clearDepth();
    camera.layers.set(1);
    model.current.material = refractionMaterial;
    gl.render(scene, camera);
  }, 1);

  return (
    <group scale={[modelSize[randomInt], modelSize[randomInt], modelSize[randomInt]]}>
      <instancedMesh ref={model} layers={1} args={[nodes[nodeArray[randomInt]].geometry, null, state.diamonds.length]}>
        {/* Mesh material and geometry setup */}
      </instancedMesh>
    </group>
  );
}
