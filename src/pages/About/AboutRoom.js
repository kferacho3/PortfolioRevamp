import { BakeShadows, Bounds, OrbitControls, Stars } from '@react-three/drei';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { suspend } from 'suspend-react';
import * as THREE from 'three';
import Preloader from '../../components/LoadingAnimation/Loading';
import RachosRoom from '../../glbFiles/AboutGLB/RachosRoom';
import { AboutContainer } from './AboutElements';

extend({ MeshLineGeometry, MeshLineMaterial })

function useAudioData(url) {
  const [audioData, setAudioData] = useState({ avg: 0, beatIntensity: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const { avg, beatIntensity } = await createAudio(url);
      setAudioData({ avg, beatIntensity });
    };
    fetchData();
  }, [url]);

  return audioData;
}

function Lines({ url, dash, count, colors, radius = 100, rand = THREE.MathUtils.randFloatSpread }) {
  const lines = useMemo(() => {
    return Array.from({ length: count }, () => {
      const pos = new THREE.Vector3(rand(radius), rand(radius), rand(radius))
      const points = Array.from({ length: 10 }, () => pos.add(new THREE.Vector3(rand(radius), rand(radius), rand(radius))).clone())
      const curve = new THREE.CatmullRomCurve3(points).getPoints(300)
      return {
        color: colors[parseInt(colors.length * Math.random())],
        width: Math.max(radius / 12500, (radius / 7500) * Math.random()),
        speed: Math.max(0.1, 1 * Math.random()),
        curve: curve.flatMap((point) => point.toArray())
      }
    })
  }, [colors, count, radius])
  return lines.map((props, index) => <Fatline url={url} key={index} dash={dash} {...props} />)
}

function Fatline({ url, curve, width, color, speed, dash }) {
  const ref = useRef();
  const { gain, context, update, data } = suspend(() => createAudio(url), [url]);

  useEffect(() => {
    gain.connect(context.destination);
    return () => gain.disconnect();
  }, [gain, context]);

  useFrame(() => {
    update();
    const avgAmplitude = data.avg;

    const dynamicWidth = Math.max(0.01, (width / 100) + (avgAmplitude / 8192)); 

    if (ref.current && ref.current.material) {
      ref.current.material.lineWidth = dynamicWidth;
    }

    const intensity = avgAmplitude / 256; 
    const hue = intensity * 360; 
    if (ref.current && ref.current.material) {
      ref.current.material.color.setHSL(hue / 120, 1, Math.max(0.1, 0.5 - (avgAmplitude / 2048)));
    }

    if (ref.current && ref.current.material) {
      ref.current.material.dashOffset -= (speed  / 20480)  * (avgAmplitude ); 
    }
  });

  return (
    <mesh ref={ref}>
      <meshLineGeometry attach="geometry" points={curve} />
      <meshLineMaterial
        attach="material"
        transparent
        lineWidth={width}
        depthWrite={false}
        dashArray={0.25}
        dashRatio={dash}
        toneMapped={false}
      />
    </mesh>
  );
}

function AudioControlButton({ url }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio(url));

  useEffect(() => {
    return () => audioRef.current.pause();
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <button onClick={togglePlay}>
      {playing ? 'Pause' : 'Play'}
    </button>
  );
}

function Diamond(props) {
  const { nodes } = useGLTF("../../glb/diamond.glb");
  const geo = useMemo(() => toConvexProps(nodes.Cylinder.geometry), [nodes]);
  const [ref] = useConvexPolyhedron(() => ({ mass: 100, ...props, args: geo }));
  return (
    <mesh
      castShadow
      receiveShadow
      ref={ref}
      geometry={nodes.Cylinder.geometry}
      {...props}
    >
      <meshStandardMaterial wireframe color="white" />
    </mesh>
  );
}

function Track({ url, space = 1.2, ...props }) {
  const shapesRefs = useRef([]);
  const { gain, context, update, data } = suspend(() => createAudio(url), [url]);

  useEffect(() => {
    gain.connect(context.destination);
    return () => gain.disconnect();
  }, [gain, context]);

  const geometries = [
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.TorusKnotGeometry(0.3, 0.1, 100, 16),
    new THREE.IcosahedronGeometry(0.5),
    new THREE.TorusGeometry(0.5, 0.2, 16, 100),
    new THREE.DodecahedronGeometry(0.5),
    new THREE.ConeGeometry(0.5, 1, 32),
  ];

  const baseColors = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
  ];

  const colors = baseColors.flatMap(color => [
    new THREE.Color(color).multiplyScalar(1.2),
    new THREE.Color(color),
    new THREE.Color(color).multiplyScalar(0.8),
  ]);

  if (shapesRefs.current.length !== geometries.length * 3) {
    shapesRefs.current = Array(geometries.length * 3).fill(null).map((_, i) => React.createRef());
  }

  useFrame((state, delta) => {
    update();

    const totalShapesPerColor = 3;
    const totalSpace = space * (geometries.length * totalShapesPerColor - 1);
    const startPositionX = -totalSpace / 2;

    shapesRefs.current.forEach((ref, index) => {
      const shape = ref.current;
      if (!shape) return;

      const colorIndex = Math.floor(index / totalShapesPerColor) % baseColors.length;
      const geometryIndex = Math.floor(index / totalShapesPerColor);
      const shapeVariation = totalShapesPerColor - 1 - (index % totalShapesPerColor);

      shape.position.x = startPositionX + space * index;

      const segmentLength = Math.floor(data.length / baseColors.length);
      const segmentStart = segmentLength * colorIndex;
      const segmentEnd = segmentStart + segmentLength;
      const segmentData = data.slice(segmentStart, segmentEnd);
      const segmentIntensity = segmentData.reduce((acc, val) => acc + val, 0) / segmentData.length / 256;

      const adjustedIntensity = segmentIntensity * (1 - shapeVariation * 0.1);

      shape.position.y = Math.sin((performance.now() / 1000 + adjustedIntensity * 5) * Math.PI) * adjustedIntensity * 5;

      const rotationSpeed = adjustedIntensity;
      shape.rotation.x += rotationSpeed * 0.02;
      shape.rotation.y += rotationSpeed * 0.02;

      const scale = adjustedIntensity * 2 + 0.5;
      shape.scale.set(scale, scale, scale);

      const targetColor = colors[colorIndex * 3 + shapeVariation];
      shape.material.color.lerp(targetColor, 0.1);

      shape.geometry = geometries[geometryIndex];
    });
  });

  return (
    <>
      {shapesRefs.current.map((ref, index) => (
        <mesh
          key={index}
          ref={ref}
          geometry={geometries[Math.floor(index / 3) % geometries.length]}
          material={new THREE.MeshBasicMaterial({ color: colors[index % colors.length], toneMapped: false })}
          {...props}
        />
      ))}
    </>
  );
}

function Zoom({ url }) {
  const { data } = suspend(() => createAudio(url), [url])
  return useFrame((state) => {
    state.camera.fov = 25 - data.avg / 15
    state.camera.updateProjectionMatrix()
  })
}

async function createAudio(url) {
  const res = await fetch(url)
  const buffer = await res.arrayBuffer()
  const context = new (window.AudioContext || window.webkitAudioContext)()
  const source = context.createBufferSource()
  source.buffer = await new Promise((res) => context.decodeAudioData(buffer, res))
  source.loop = true
  source.start(0)
  const gain = context.createGain()
  const analyser = context.createAnalyser()
  analyser.fftSize = 64
  source.connect(analyser)
  analyser.connect(gain)
  const data = new Uint8Array(analyser.frequencyBinCount)
  return {
    context,
    source,
    gain,
    data,
    update: () => {
      analyser.getByteFrequencyData(data)
      return (data.avg = data.reduce((prev, cur) => prev + cur / data.length, 0))
    },
  }
}

export default function AboutRoom() {
  const url = 'https://racho-devs.s3.us-east-2.amazonaws.com/about/music/RachoBeat.mp3'

  const { dash, count, radius } = {
    dash: { value: 0.9, min: 0, max: 0.99, step: 0.01 },
    count: { value: 200, min: 0, max: 200, step: 1 },
    radius: { value: 200, min: 1, max: 200, step: 1 },
  }

  const FloatingLight = () => {
    const mesh = useRef();
    useFrame(({ clock }) => {
      mesh.current.position.y = Math.sin(clock.getElapsedTime()) * 20;
      mesh.current.position.x = Math.cos(clock.getElapsedTime()) * 20;
    });
    return (
      <pointLight ref={mesh} distance={50} intensity={1.5} color="purple" />
    );
  };

  return (
    <AboutContainer>
      <Canvas orthographic shadows dpr={[1, 2]} camera={{ position: [10, 10, 10], zoom: 20 }}>
        <Suspense fallback={<Preloader />}>
          <color attach="background" args={['#252530']} />
          <ambientLight intensity={0.2} />
          <hemisphereLight intensity={0.15} color="#8040df" groundColor="red" />
          <spotLight castShadow color="orange" intensity={2} position={[-50, 50, 40]} angle={0.25} penumbra={1} shadow-mapSize={[256, 256]} shadow-bias={0.00005} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <FloatingLight />
          <Suspense fallback={null}>
            <Bounds fit clip observe margin={1}>
              <Track position-z={0.25} url={url} />
              <Zoom url={url} />
              <RachosRoom scale={0.1} />
            </Bounds>
            <BakeShadows />
          </Suspense>
          <OrbitControls
            makeDefault
            minAzimuthAngle={-Math.PI / 2}
            maxAzimuthAngle={Math.PI}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={3 * Math.PI / 4}
            enableZoom={true}
            enablePan={true}
            zoomSpeed={0.3}
          />
          <mesh scale={200} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} receiveShadow>
            <planeGeometry />
            <shadowMaterial transparent opacity={0.3} />
          </mesh>
          <Lines
            url={url}
            dash={dash.value}
            count={count.value}
            radius={radius.value}
            colors={[[10, 0.5, 2], [1, 2, 10], '#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff']}
          />
    
        </Suspense>
      </Canvas>
    </AboutContainer>
  )
}
