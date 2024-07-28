import { usePlane } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

export const Ground = (props) => {
	const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
	const texture = useLoader(THREE.TextureLoader, 'https://cdn.pixabay.com/photo/2020/05/22/12/26/web-5205244_1280.jpg')
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping

	
	return (
		<mesh ref={ref}>
			<planeBufferGeometry attach='geometry' args={[100, 100]} />
			<meshStandardMaterial map={texture} map-repeat={[32, 32]}  />
		</mesh>
	)
}