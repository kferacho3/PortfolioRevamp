import { MutableRefObject, useEffect, useRef } from 'react'

const keyControlMap = {
  ArrowDown: 'backward',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  ArrowUp: 'forward',
  Space: 'jump',
  z: 'rise',
  x: 'fall',
  r: 'spin',

  c: 'change',
  h: 'hide',
  u: 'show',
  f: 'fast',
  g: 'slow',

  a: 'left',
  d: 'right',
  s: 'backward',
  w: 'forward'
}

const keyCodes = Object.keys(keyControlMap)
const isKeyCode = (v) => keyCodes.includes(v)

function useKeyControls({ current }, map) {
  useEffect(() => {
    const handleKeydown = ({ key }) => {
      if (!isKeyCode(key)) return
      current[map[key]] = true
    }
    window.addEventListener('keydown', handleKeydown)
    const handleKeyup = ({ key }) => {
      if (!isKeyCode(key)) return
      current[map[key]] = false
    }
    window.addEventListener('keyup', handleKeyup)
    return () => {
      window.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('keyup', handleKeyup)
    }
  }, [current, map])
}

export function useControls() {
  const controls = useRef({
    backward: false,
    forward: false,
    left: false,
    right: false,

    change: false,
    hide: false,
    show: false,
    fast: false,
    slow: false,

    jump: false,
    rise: false,
    fall: false,
    spin: false

  })

  useKeyControls(controls, keyControlMap)

  return controls
}
