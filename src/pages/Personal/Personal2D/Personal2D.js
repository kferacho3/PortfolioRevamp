import { Html, Scroll, ScrollControls, Sparkles, Text, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { motion, useAnimation } from 'framer-motion';
import lerp from "lerp";
import { debounce } from 'lodash';
import React, { Suspense, useCallback, useMemo, useRef, useState } from "react";
import * as THREE from 'three';
import { LinearFilter, TextureLoader } from 'three';
import Preloader from "../../../components/LoadingAnimation/Loading";
import Diamonds from "../../../glbFiles/Diamonds";
import Monitor from "../../../glbFiles/Monitor";
import UFOmini from "../../../glbFiles/UFOmini";
import { Block, useBlock } from "../../../glbFiles/diamonds/blocks";
import state from "../../../glbFiles/diamonds/store";
import { CanvasContainer } from "../PersonalElements";
import Plane from "./components/Plane";
import "./styles.scss";
import arcadeWoff from "/8bit.woff";

function Startup() {
  const ref = useRef();
  useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)));
  return <Plane ref={ref} color="#0e0e0f" position={[0, 0, 200]} scale={[100, 100, 1]} />;
}

const mod = (n, m) => ((n % m) + m) % m;

function Paragraph({
  perfSucks,
  image,
  index,
  offset,
  factor,
  header,
  aspect,
  text,
  githubUrls,
  websiteUrls,
  imageUrls,
  imageUrlsMobile,
  videoUrls,
  videoUrlsMobile,
  length,
  font = arcadeWoff,
}) {
  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock();
  const size = aspect < 1 && !mobile ? 0.65 : 1;
  const alignRight = (canvasWidth - w * size - margin) / 2;
  const left = !(index % 2);
  const { viewport } = useThree();
  const headerColors = ["#39FF14", "#FFA500", "#9c03fc"];
  const headerColor = headerColors[index % headerColors.length];

  const [itemIndex, setItemIndex] = useState(0);
  const contentArray = index === 3 ? videoUrls : imageUrls;

  const handleNextClick = useCallback(
    debounce((event) => {
      event.stopPropagation();
      setItemIndex((state) => {
        const nextIndex = mod(state + 1, contentArray.length);
        return nextIndex;
      });
    }, 300),
    [setItemIndex, contentArray]
  ); // Debounce time of 300 ms

  const handlePrevClick = useCallback(
    debounce((event) => {
      event.stopPropagation();
      setItemIndex((state) => {
        const prevIndex = mod(state - 1, contentArray.length);
        return prevIndex;
      });
    }, 300),
    [setItemIndex, contentArray]
  ); // Debounce time of 300 ms

  return (
    <Block factor={factor} offset={offset}>
      <group position={[left ? alignRight : -alignRight, 0, 0]}>
        <Text
          font={font}
          maxWidth={(viewport.width / 10) * 3}
          left={!left}
          right={left}
          fontSize={w * 0.02}
          color={headerColor}
          position={[
            mobile ? 0 : left ? 3 : -3,
            -(w * size) / (2 * aspect) + 18,
            -1,
          ]}
          style={{ textShadow: "2px 2px 4px black" }}
        >
          {header[itemIndex]}
        </Text>

        <Text
          font={font}
          position={[
            mobile ? 0 : left ? 3 : -3,
            -(w * size) / (2 * aspect) + 16,
            -1,
          ]}
          left={!left}
          right={left}
          fontSize={0.20}
          color={"#FFFF00"}
          lineHeight={1}
          letterSpacing={-0.05}
          maxWidth={
            mobile
              ? viewport.width / 10 * 7.5
              : viewport.width / 10 * 3.5
          }
          style={{ textShadow: "2px 2px 4px red" }}
        >
          {text[itemIndex]}
        </Text>

        <Block factor={0.2}></Block>
      </group>

      <group position={index === 0 ? [0, 0, 0] : [left ? -alignRight : alignRight, 0, 0]}>
        <Monitor
          itemIndex={itemIndex}
          setItemIndex={setItemIndex}
          mobile={mobile}
          length={length}
          githubUrls={githubUrls}
          websiteUrls={websiteUrls}
          videoUrls={videoUrls}
          videoUrlsMobile={videoUrlsMobile}
          imageUrls={imageUrls}
          imageUrlsMobile={imageUrlsMobile}
          index={index}
          perfSucks={perfSucks}
          image={image}
          aspect={aspect}
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
          contentArray={contentArray}
        />
      </group>
    </Block>
  );
}

function Content({ perfSucks, onReflow, setIs3D, is3D, toggle3D }) {
  const { viewport } = useThree();
  const scroll = useScroll();
  const controls = useAnimation(); // framer-motion animation controls

  useFrame(() => {
    const opacity = scroll.offset === 0 ? 1 : 0;
    controls.start({ opacity, transition: { duration: 0.05 } });
  });

  const images = state.paragraphs.map(({ imageUrls }) =>
    (imageUrls || []).map((url) => {
      const texture = useLoader(TextureLoader, url);
      texture.wrapS = THREE.RepeatWrapping;
      texture.repeat.x = -1;
      return texture;
    })
  );

  useMemo(() => {
    images.forEach((urlArray) => {
      urlArray.forEach((url) => (url.minFilter = LinearFilter));
    });
  }, [images]);

  const videosArray = [];

  const singleImage = state.paragraphs.map(({ videoUrls, index }) =>
    (videoUrls || []).map((url, innerIndex) => {
      if (innerIndex === 0 && index === 3) {
        const texture = useLoader(TextureLoader, url);
        texture.wrapS = THREE.RepeatWrapping;
        texture.repeat.x = -1;
        return texture;
      }
    })
  );

  useMemo(() => {
    singleImage.forEach((urlArray) => {
      urlArray.forEach((url, index) => {
        if (index === 0 && url) {
          url.minFilter = LinearFilter;
        }
      });
    });
  }, [singleImage]);

  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock();

  return (
    <>
      <Block factor={1} offset={0}>
        <Block factor={1.75}>
          <Html size={w * 0.15} position={[-w / 1.5, 0.5, -5]}>
            {/*<img style={{zoom: '0.075'}} src="/RachoDevsLogo.png" alt="RachoDevsLogo" />*/}
          </Html>
        </Block>
        <Block factor={1.0}>
          <Html center>
            <motion.div
              initial={{ opacity: 1 }}
              animate={controls}
              style={{
                position: "absolute",
                top: 120,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
                zIndex: 10,
                width: '100%',
                whiteSpace: 'nowrap',
              }}>
              <h1 style={{
                color: "#FFD700",
                textShadow: "2px 2px 4px red",
                fontSize: "4rem",
              }}>
                Scroll to explore the Unknown!
              </h1>
            </motion.div>
          </Html>
        </Block>
      </Block>
      <Block factor={1.2} offset={5.7}>
        <Html top left size={w * 0.15} lineHeight={w / 5} position={[-w / 3.5, 0, -1]} color="#2fe8c3" text={"four\nzero\nzero"} />
      </Block>
      {state.paragraphs.map((props, index) => {
        const currentImage = images[index];
        return (
          <Paragraph
            perfSucks={perfSucks}
            key={index}
            index={index}
            {...props}
            singleImage={singleImage}
            imageUrls={currentImage}
          />
        );
      })}
      {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
        </Block>
      ))}
      <Block factor={1.2} offset={3.6}>
        <UFOmini toggle3D={toggle3D} setIs3D={setIs3D} is3D={is3D} state={state} scale={3} position={[0, (-15), 5]} />
      </Block>
    </>
  );
}

export default function Personal2D({ setIs3D, is3D, toggle3D }) {
  const scrollArea = useRef();
  const canvasRef = useRef();
  const [interact3D, setInteract3D] = useState(false);
  const [perfSucks, degrade] = useState(false);

  return (
    <>
      <CanvasContainer>
        <Canvas linear dpr={[1, 2]} orthographic camera={{ zoom: state.zoom, position: [0, 0, 50] }}>
          <Suspense fallback={<Preloader />}>
            <Sparkles color="#9400D3" scale={50} size={50} count={50} position={[0, 0, -20]} radius={150} />
            <Sparkles color="#FFA500" scale={50} size={50} count={100} position={[0, 0, -20]} radius={150} />
            <Sparkles color="#39FF14" scale={50} size={50} count={200} position={[0, 0, -20]} radius={150} />
            <ScrollControls damping={0.5} pages={state.pages - 0.25}>
              <Scroll style={{ height: '100vh', width: '100vw' }}>
                <Content perfSucks={perfSucks} toggle3D={toggle3D} setIs3D={setIs3D} is3D={is3D} onReflow={6} />
                <Diamonds />
                <Startup />
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
}
