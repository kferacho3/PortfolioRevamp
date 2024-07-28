import { useSphere } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import CarBit from "./AboutGLB/CarBit";
import RoomChandelier from "./AboutGLB/RoomChandelier";
import CthuluMeBit from "./ConnectGLB/CthuluMeBit";
import { FloatingMeBit } from "./MuseumGLB/FloatingMeBit";

import { EndermanMeBit } from "./MuseumGLB/EndermanMeBit";
import { RoboMeBit } from "./MuseumGLB/RoboMeBit";
import { SantaMeBit } from "./MuseumGLB/SantaMeBit";
import { UFOMeBit } from "./MuseumGLB/UFOMain";
import BoatMeBit from "./ServicesGLB/BoatMeBit";
import { SubMeBit } from "./ServicesGLB/MeBitSub";
import UfoShip from "./UFOgames";
import { useControls } from "./useControls";

const SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const rotation = new THREE.Vector3();
const speed = new THREE.Vector3();
let holder;

export const MeBit = ({props, currentCharacter}) => {
   const { nodes, materials, animations } = useGLTF('https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/UFO.glb');
  const ufo = useRef();
  const ufoM = useRef();
  const body = useRef();
  const [ref, api] = useSphere(() => ({ mass: 1, type: "Dynamic", position: [0, 10, 0], ...props }));
  const { camera } = useThree();
  const velocity = useRef([0, 0, 0]);
  const controls = useControls();
  const [scaler, setScaler] = useState(false);


  useEffect(() => {
    if (currentCharacter === 'RoomChandelier') {
      setScaler(false);
    } else {
      setScaler(true);
    }
  }, [currentCharacter]);

  useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), []);

  // Start of movement of character and camera
  useFrame((state) => {
    ref.current.getWorldPosition(camera.position);
    frontVector.set(0, 0, Number(controls.current.backward) - Number(controls.current.forward));
    sideVector.set(Number(controls.current.left) - Number(controls.current.right), 0, 0);
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation);
    speed.fromArray(velocity.current);

    // Controls hover for UFO when moving
    ufo.current.children[0].rotation.x = THREE.MathUtils.lerp(
      ufo.current.children[0].rotation.x / 4,
      Math.sin((speed.length() > 1) * state.clock.elapsedTime * 10) / 6,
      0.1,
    );

    // Positions UFO on screen
    ufo.current.children[0].rotation.z = 3 * Math.PI / 2;
    ufo.current.children[0].position.x = -0.1;
    ufo.current.children[0].position.y = -0.15;

    holder = ufo.current.children[0].rotation.y;

    // Controls movement of UFO + scene to provide a zoomed-in Third Person View
    ufo.current.rotation.copy(camera.rotation);
    ufo.current.position.copy(camera.position).add(camera.getWorldDirection(rotation).multiplyScalar(1));
    api.velocity.set(direction.x, velocity.current[1], direction.z);

    // Controls ascension/descension
    if (controls.current.rise) {
      api.velocity.set(velocity.current[0], 10, velocity.current[2]);
    }

    // Controls spin
    let temp = 0;
    if (controls.current.spin) {
      while (temp < 2 * Math.PI / 2) {
        temp += (2 * Math.PI / 2) / 100;
        ufo.current.children[0].rotation.y = temp;
        ufo.current.children[0].position.z = 1;
        ufo.current.children[0].position.x = -0.22;
      }
      ufo.current.quaternion.set(0, 2 * Math.PI / 2, 0, -1).normalize();
    } else {
      ufo.current.children[0].position.y = -0.15;
      ufo.current.children[0].position.x = -0.1;
      ufo.current.children[0].rotation.y = 0;
      ufo.current.children[0].position.z = 0;
    }

    // Controls jump
    if (controls.current.jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) api.velocity.set(velocity.current[0], 10, velocity.current[2]);
  });

  const renderSwitch = (currentCharacter) => {
    switch (currentCharacter) {
      case 'BoatMeBit':
           return <BoatMeBit   rotation={[5.5 *Math.PI, Math.PI, -Math.PI / 2]} position={[0,-0.25,0]} scale={0.005}  ref={body} />;
      case 'SubMeBit':
            return <SubMeBit scale={0.0008}  position={[-0.05,-0.125,0.5]} rotation={[ Math.PI*2, Math.PI*1.1, Math.PI *3.5]}  ref={body} />;
      case 'CthuluMeBit':
            return <CthuluMeBit position={[0,0,0.5]} rotation={[ Math.PI*2, 3*Math.PI/6, Math.PI *3.5]}  ref={body} />;
      case 'CarBit':
            return <CarBit scale={0.05} position={[0,-0.125,0.5]} rotation={[ Math.PI*2, 6*Math.PI/6, Math.PI *3.5]}  ref={body} />;
      case 'FatMeBit':
            return <FloatingMeBit scale={0.01} position={[-0.1,-0.125,0.5]} rotation={[ Math.PI, 6*Math.PI/6, Math.PI *3.5]}  ref={body} />;
      case 'RoboMeBit':
            return <group rotation={[ Math.PI*2, Math.PI, Math.PI *3.5]}  position={[-0.03,-0.25,0.35]}  scale={0.0015}><RoboMeBit  ref={body} /></group>;
      case 'EndermanMeBit':
            return <EndermanMeBit scale={0.05} position={[0,-0.125,0.5]} rotation={[ Math.PI*2, 6*Math.PI/6, Math.PI *3.5]}  ref={body} />;
      case 'SantaMeBit':
            return <SantaMeBit scale={0.0075} position={[0,-0.125,0.2]} rotation={[ Math.PI*4.5, 6*Math.PI/6, Math.PI *3.5]}  ref={body} />;
        case 'UFOShip':
            return <UfoShip scale={0.05} position={[0,-0.125,0.5]} rotation={[ Math.PI*2, 6*Math.PI/6, Math.PI *3.5]}  ref={body} />;
      case 'RoomChandelier':
        return <group rotation={[ Math.PI*2, Math.PI, Math.PI *3.5]}  position={[-0.05,-0.15,0.35]}  scale={0.0035}><RoomChandelier scaler={scaler} scale={0.0025}  ref={body} /></group>;
      default:
        return (
      <UFOMeBit/>
       
        );
    }
  };

  return         <group ref={ufo}>
  <group dispose={null} {...props}>{renderSwitch(currentCharacter)}</group></group>;;
};

useGLTF.preload('https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/UFO.glb');


