



import { useSpring } from '@react-spring/core';
import { a } from "@react-spring/three";
import { PresentationControls, useAnimations, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { MeshBasicMaterial } from 'three';
const Emitter = forwardRef((props, ref) => {
  return (
    <mesh ref={ref} position={[0, 0, -16]} {...props}>
      <planeGeometry args={[16, 10]} />
      <meshBasicMaterial>
        <meshStandardMaterial map={props.imageUrls} />
      </meshBasicMaterial>
      <mesh scale={[16.05, 10.05, 1]} position={[0, 0, -0.01]}>
        <planeGeometry />
        <meshBasicMaterial color="black" />
      </mesh>
    </mesh>
  );
});

export default function Monitor({
  perfSucks,
  imageUrls,
  itemIndex,
  setItemIndex,
  length,
  singleImage,
  index,
  imageUrlsMobile,
  handleNextClick,
  handlePrevClick,
  contentArray,
  websiteUrls,
  githubUrls,
  mobile,
  videoUrls,
  videoUrlsMobile,
  ...props
}) {
  const [material, set] = useState();
  const group = useRef();
  const monitor = useRef();
  const [mode, setMode] = useState(false);
  const [down, setDown] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mode2, setMode2] = useState(false);
  const [down2, setDown2] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const width = window.innerWidth;
  const isMobile = width <= 700; // Check if the window width is 600 or less
  const leftButton = useRef();
  const rightButton = useRef();
  const { nodes, materials, animations } = useGLTF('https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/Monitor.glb');
  const { actions } = useAnimations(animations, group, perfSucks);

  const [isPlaying, setIsPlaying] = useState(true);
  const { gl } = useThree();
  const videoElements = useRef(new Array(videoUrls.length));
  const videoTextures = useRef(new Array(videoUrls.length));
  const [videoTexture, setVideoTexture] = useState(null);

  // Initialize video elements and textures
  useEffect(() => {
    videoUrls.forEach((url, index) => {
      if (!videoElements.current[index]) {
        const video = document.createElement('video');
        video.src = url;
        video.crossOrigin = 'anonymous';
        video.loop = true;
        video.muted = true;
        video.load();
        videoElements.current[index] = video;

        const texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.format = THREE.RGBAFormat;
        videoTextures.current[index] = texture;

        video.addEventListener('error', () => {
          console.error(`Error loading video: ${url}`);
        });

        video.addEventListener('loadeddata', () => {
          if (index === itemIndex) {
            video.play().catch(console.error);
          }
        });
      }
    });

    updateVideo(itemIndex);
  }, [videoUrls]);

  // Update video when itemIndex changes
  useEffect(() => {
    updateVideo(itemIndex);
  }, [itemIndex]);

  const updateVideo = (index) => {
    if (videoElements.current[index]) {
      videoElements.current.forEach((video, i) => {
        if (i !== index) video.pause();
      });

      const video = videoElements.current[index];
      if (video.paused) {
        video.play().catch(console.error);
      }
      setVideoTexture(videoTextures.current[index]);
    }
  };

  useEffect(() => {
    document.body.style.cursor = hovered || hovered2
      ? 'none'
      : `url('data:image/svg+xml;base64,${btoa(
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#9c03fc"/></svg>'
        )}'), auto`;
  }, [hovered, hovered2]);

  const [{ wobble }] = useSpring(
    {
      wobble: down ? 1.02 : hovered ? 1.02 : 1,
      config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 100, friction: 5 },
    },
    [mode, hovered, down]
  );

  const [{ wobble2 }] = useSpring(
    {
      wobble2: down2 ? 1.02 : hovered2 ? 1.02 : 1,
      config: (n) => n === 'wobble2' && hovered2 && { mass: 2, tension: 100, friction: 5 },
    },
    [mode2, hovered2, down2]
  );

  const [lightSource] = useState(new MeshBasicMaterial({ color: 0xffffff }));

  const hoverSpeed = 0.00075; // Adjust the speed of the hover effect
  let hoverDirection = 1;

  const hoverAmplitude = 0.02; // Adjust the amplitude of the hover effect
  const hoverFrequency = 1.5; // Adjust the frequency of the hover effect

  const applyHoverEffect = (object, elapsedTime) => {
    if (object && object.current) {
      const hoverValue = Math.sin(elapsedTime * hoverFrequency) * hoverAmplitude;
      object.current.position.y = hoverValue;
    }
  };

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    applyHoverEffect(leftButton, elapsedTime / 3);
    applyHoverEffect(rightButton, elapsedTime / 5);
    applyHoverEffect(monitor, elapsedTime);
  });

  const [{ rotation }, setSpring] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { tension: 40, friction: 2 },
  }));

  const updateRotation = (x, y) => {
    const targetRotationX = y / 12000;
    const targetRotationY = x / 10000;
    const targetRotationZ = 0;

    setSpring({ rotation: [targetRotationX, targetRotationY, targetRotationZ] });
    group.current.rotation.set(targetRotationX, targetRotationY, targetRotationZ);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      updateRotation(x, y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <group position={[2, 0, 0]} ref={group} {...props} dispose={null}>
      <PresentationControls
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, -0.5, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <a.group
          ref={group}
          scale={isMobile ? 3 : 6}
          position={[isMobile ? -0.65 : 0, isMobile ? 5 : 0, 0]}
          {...props}
          dispose={null}
          rotation={rotation}
        >
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            color={0xffffff}
          />
          {index !== 0 && (
            <>
              <a.group
                scale={wobble}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onPointerDown={() => setDown(true)}
                onClick={handlePrevClick}
              >
                <group scale={[1, 1, 1]} className="button-monitor" name="Left Button" ref={leftButton}>
                  <group rotation={[-Math.PI / 2, 0, 0]}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                      <primitive object={nodes._rootJoint} />
                      <primitive object={nodes.neutral_bone} />
                      <skinnedMesh
                        name="portal_button_reduced_2_portal_button_blue_0"
                        geometry={nodes.portal_button_reduced_2_portal_button_blue_0.geometry}
                        material={materials.portal_button_blue}
                        skeleton={nodes.portal_button_reduced_2_portal_button_blue_0.skeleton}
                      />
                      <skinnedMesh
                        name="portal_button_reduced_2_portal_button_blue_0_1"
                        geometry={nodes.portal_button_reduced_2_portal_button_blue_0_1.geometry}
                        material={materials.portal_button_switch}
                        skeleton={nodes.portal_button_reduced_2_portal_button_blue_0_1.skeleton}
                      />
                      <skinnedMesh
                        name="portal_button_reduced_2_portal_button_blue_0_2"
                        geometry={nodes.portal_button_reduced_2_portal_button_blue_0_2.geometry}
                        material={materials.PaletteMaterial002}
                        skeleton={nodes.portal_button_reduced_2_portal_button_blue_0_2.skeleton}
                      />
                    </group>
                  </group>
                </group>
              </a.group>

              <a.group
                scale={wobble2}
                onPointerOver={() => setHovered2(true)}
                onPointerOut={() => setHovered2(false)}
                onPointerDown={() => setDown2(true)}
                onClick={handleNextClick}
              >
                <group scale={[1, 1, 1]} ref={rightButton} className="button-monitor" name="Right Button">
                  <group position={[0.08, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                      <primitive object={nodes._rootJoint_1} />
                      <primitive object={nodes.neutral_bone_1} />
                      <skinnedMesh
                        name="portal_button_reduced_2_portal_button_blue_0001"
                        geometry={nodes.portal_button_reduced_2_portal_button_blue_0001.geometry}
                        material={materials['portal_button_blue.001']}
                        skeleton={nodes.portal_button_reduced_2_portal_button_blue_0001.skeleton}
                      />
                      <skinnedMesh
                        name="portal_button_reduced_2_portal_button_blue_0001_1"
                        geometry={nodes.portal_button_reduced_2_portal_button_blue_0001_1.geometry}
                        material={materials['portal_button_switch.001']}
                        skeleton={nodes.portal_button_reduced_2_portal_button_blue_0001_1.skeleton}
                      />
                      <skinnedMesh
                        name="portal_button_reduced_2_portal_button_blue_0001_2"
                        geometry={nodes.portal_button_reduced_2_portal_button_blue_0001_2.geometry}
                        material={materials.PaletteMaterial002}
                        skeleton={nodes.portal_button_reduced_2_portal_button_blue_0001_2.skeleton}
                      />
                    </group>
                  </group>
                </group>
              </a.group>
            </>
          )}

          <group position={index === 0 ? [0, -0.65, 0] : [0, 0, 0]}>
            <group scale={index === 0 ? [1.25, 1.25, 1.25] : [1, 1, 1]} position={index === 0 ? [0.25, 0, 0] : [0, 0, 0]} ref={monitor} name="Monitor" rotation={[Math.PI / 2, 0, 0]}>
              <mesh geometry={nodes.Monitor_1.geometry} material={materials['Material.005']} />
              <mesh geometry={nodes.Monitor_2.geometry} material={materials['Material.010']} />
              <mesh geometry={nodes.Monitor_3.geometry} material={materials['Material.012']} />
              <mesh geometry={nodes.Monitor_4.geometry} material={materials.None} />
              <mesh geometry={nodes.Monitor_5.geometry} material={materials['Material.011']} />
              <mesh geometry={nodes.Monitor_6.geometry} material={materials['Material.018']} />
              <mesh geometry={nodes.Monitor_7.geometry} material={materials['Material.019']} />
              <mesh geometry={nodes.Monitor_8.geometry} material={materials['Material.014']} />
              <mesh geometry={nodes.Monitor_9.geometry} material={materials['Material.013']} />
              <mesh geometry={nodes.Monitor_10.geometry} material={materials['Material.015']} />
              <mesh geometry={nodes.Monitor_11.geometry} material={materials['Material.016']} />
              <mesh geometry={nodes.Monitor_12.geometry} material={materials['Material.017']} />
              <mesh geometry={nodes.Monitor_13.geometry}>

                {index === 3 && videoTexture && (
                  <meshBasicMaterial attach="material" map={videoTexture} />
                )}

                {(index === 0 || index === 1 || index === 2) && (
                  <>
                    <meshBasicMaterial map={imageUrls[itemIndex]} />
                    <Emitter imageUrls={imageUrls[itemIndex]} />
                  </>
                )}
              </mesh>
            </group>
          </group>
        </a.group>
        <pointLight position={[0, 0, -10]} intensity={1} distance={30} />
      </PresentationControls>
    </group>
  );
}
useGLTF.preload('https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/glbModels/Monitor.glb');
