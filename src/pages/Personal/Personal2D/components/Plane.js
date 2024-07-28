import { useFrame } from "@react-three/fiber"
import lerp from "lerp"
import React, { forwardRef, useRef } from "react"
import { useBlock } from "../../../../glbFiles/diamonds/blocks"
import state from "../../../../glbFiles/diamonds/store"
import "./CustomMaterial"

const Plane = forwardRef(({ color = "white", shift = 1, opacity = 1, args, map, ...props }, ref) => {
  const { viewportHeight, offsetFactor } = useBlock()
  const material = useRef()
  let last = state.top.current
  useFrame(() => {
    const { pages, top } = state
    material.current.scale = lerp(material.current.scale, offsetFactor / 4 - top.current / ((pages - 1) * viewportHeight), 0.1)
    material.current.shift = lerp(material.current.shift, ((top.current - last) / shift) * 1.5, 0.1)
    last = top.current
  })
  return (
    <mesh ref={ref} {...props}>
      <planeBufferGeometry args={args} />
      <customMaterial ref={material} color={color} map={map} transparent opacity={opacity} />
    </mesh>
  )
})

export default Plane
