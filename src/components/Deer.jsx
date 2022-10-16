import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { useState } from 'react'
import { useFrame } from '@react-three/fiber'

const Deer = () => {
  const deerObj = useLoader(OBJLoader, '/models/deer.obj')
  const [hover, setHover] = useState(false)
  useFrame(() => {
    if (hover) {
      deerObj.rotation.y += 0.02
    }
  })
  return (
    // <mesh
    //   onPointerOver={() => {
    //     setHover(true)
    //   }}
    //   onPointerOut={() => {
    //     setHover(false)
    //   }}
    // >
    <>
      <primitive
        onPointerOver={() => {
          setHover(true)
        }}
        onPointerOut={() => {
          setHover(false)
        }}
        object={deerObj}
        scale={0.3}
        position={[0, 2.3, 0]}
        rotation={[0, Math.PI / -2, 0]}
      />
    </>
    // </mesh>
  )
}

export default Deer
