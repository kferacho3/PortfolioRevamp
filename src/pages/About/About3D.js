import { CameraControls, Edges, Environment, MeshDistortMaterial, MeshPortalMaterial, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';
import Preloader from '../../components/LoadingAnimation/Loading';
import AboutMe from '../../glbFiles/AboutGLB/AboutMe';
import Design from '../../glbFiles/AboutGLB/Design';
import Framework from '../../glbFiles/AboutGLB/Framework';
import Languages from '../../glbFiles/AboutGLB/Languages';
import RoomTease from '../../glbFiles/AboutGLB/RoomTease';
import Service from '../../glbFiles/AboutGLB/Service';

import { AboutContainer } from './AboutElements';
const magicBox = 'https://racho-devs.s3.us-east-2.amazonaws.com/about/glbDivs/aboutMeMagicBox.glb';
const About3D = ({ currentState, setCurrentState }) => (
  <AboutContainer>
    <Canvas shadows camera={{ position: [-3, 0.5, 3] }}>
      <Suspense fallback={<Preloader />}>
        <mesh scale={1} castShadow receiveShadow>
          <boxGeometry args={[2, 2, 2]} />
          <Edges />
          <Side rotation={[0, 0, 0]} bg="violet" index={0}>
            <AboutMe />
          </Side>
          <Side rotation={[0, Math.PI, 0]} bg="indianred" index={1}>
            <Languages />
          </Side>
          <Side rotation={[0, Math.PI / 2, Math.PI / 2]} bg="darkblue" index={2}>
            <Framework />
          </Side>
          <Side rotation={[0, Math.PI / 2, -Math.PI / 2]} bg="orange" index={3}>
            <Design />
          </Side>
          <Side rotation={[0, -Math.PI / 2, 0]} bg="darkgreen" index={4}>
            <Service />
          </Side>
          <Side rotation={[0, Math.PI / 2, 0]} bg="hotpink" index={5} onClick={() => setCurrentState(3)} style={{ cursor: 'pointer' }}>
            <RoomTease />
          </Side>
        </mesh>
        <CameraControls makeDefault />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} castShadow />
        <spotLight position={[-10, 10, -10]} angle={0.15} penumbra={1} intensity={0.5} castShadow />
        <spotLight position={[10, -10, 10]} angle={0.15} penumbra={1} intensity={0.5} castShadow />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} castShadow />
        <Environment preset="sunset" />
        <MovingClouds />
      </Suspense>
    </Canvas>
  </AboutContainer>
);

export default About3D;

function Side({ rotation = [0, 0, 0], bg = '#f0f0f0', children, index, onClick, style }) {
  const mesh = useRef();
  const htmlRef = useRef();
  const { nodes } = useGLTF(magicBox);

  useFrame(({ camera }) => {
    if (mesh.current) {
      mesh.current.lookAt(camera.position);
    }

    const sideDirection = new THREE.Vector3();
    mesh.current.getWorldDirection(sideDirection);
    const cameraDirection = new THREE.Vector3();
    camera.getWorldDirection(cameraDirection);
    const isVisible = sideDirection.dot(cameraDirection) < 0;

    if (htmlRef.current) {
      htmlRef.current.style.display = isVisible ? 'block' : 'none';
    }
  });

  return (
    <MeshPortalMaterial attach={`material-${index}`}>
      <ambientLight intensity={0.15} />
      <Environment preset="city" />
      <mesh castShadow receiveShadow rotation={rotation} geometry={nodes.Cube.geometry}>
        <meshStandardMaterial aoMapIntensity={1} color={bg} />
        <spotLight castShadow color={bg} intensity={0.15} position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-normalBias={0.05} shadow-bias={0.0001} />
      </mesh>
      <mesh castShadow receiveShadow ref={mesh} onClick={onClick} style={style}>
        {children}
        <meshLambertMaterial color={bg} />
      </mesh>
    </MeshPortalMaterial>
  );
}

function MovingClouds() {
  const groupRef = useRef();

  const getGroupSize = () => {
    const rand = Math.random();
    if (rand < 0.3) return 1;
    if (rand < 0.5) return 2;
    if (rand < 0.7) return 3;
    if (rand < 0.85) return 4;
    if (rand < 0.95) return 5;
    return 6 + Math.floor(rand * 5);
  };

  const colors = ["violet", "indianred", "darkblue", "orange", "darkgreen", "hotpink"];
  const numClouds = 25 + Math.floor(Math.random() * 5);
  const positions = Array.from({ length: numClouds }, () => {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = 40;
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    return {
      x,
      y,
      z,
      size: Math.random() * 0.5 + 0.5,
      groupSize: getGroupSize(),
      speed: Math.random() * 0.005 + 0.005,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  });

  const getRandomOffset = (size) => {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    return [
      size * Math.sin(phi) * Math.cos(theta),
      size * Math.sin(phi) * Math.sin(theta),
      size * Math.cos(phi),
    ];
  };

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
    groupRef.current.children.forEach((group, i) => {
      const position = positions[i];
      const speed = position.speed;
      const radius = 20;
      group.position.x = position.x + Math.sin(state.clock.elapsedTime * speed) * radius;
      group.position.y = position.y + Math.cos(state.clock.elapsedTime * speed) * radius;
      group.position.z = position.z + Math.sin(state.clock.elapsedTime * speed) * radius;
    });
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <group key={i} position={[pos.x, pos.y, pos.z]}>
          {Array.from({ length: pos.groupSize }).reduce((acc, _, j) => {
            const lastPosition = acc[acc.length - 1].props.position;
            const [offsetX, offsetY, offsetZ] = getRandomOffset(pos.size);
            acc.push(
              <mesh
                key={`${i}-${j}`}
                position={[lastPosition[0] + offsetX, lastPosition[1] + offsetY, lastPosition[2] + offsetZ]}
              >
                <sphereGeometry args={[pos.size, 16, 16]} />
                <MeshDistortMaterial color={pos.color} distort={0.2} speed={2} />
              </mesh>
            );
            return acc;
          }, [
            <mesh key={`${i}-0`} position={[0, 0, 0]}>
              <sphereGeometry args={[pos.size, 16, 16]} />
              <MeshDistortMaterial color={pos.color} distort={0.2} speed={2} />
            </mesh>,
          ])}
        </group>
      ))}
    </group>
  );
}
