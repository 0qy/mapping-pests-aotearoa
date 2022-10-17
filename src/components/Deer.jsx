import React, { useMemo } from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

const Deer = (props) => {
  const { setCurrentPest, setShowCard } = props
  const deerObj = useLoader(OBJLoader, '/models/deer2.obj')
  // const [hover, setHover] = useState(false)
  // useFrame(() => {
  //   if (hover) {
  //     deerObj.rotation.y += 0.02
  //   }
  // })

  const colorMap = useTexture('/texture/deer.jpg')

  const geometry = useMemo(() => {
    let g
    deerObj.traverse((c) => {
      if (c.type === 'Mesh') {
        const _c = c
        g = _c.geometry
      }
    })
    return g
  }, [deerObj])

  const handleClick = () => {
    setCurrentPest('deer')
    setShowCard(true)
  }

  return (
    <>
      <mesh
        onClick={handleClick}
        geometry={geometry}
        scale={0.04}
        position={[1, -1.35, 0]}
      >
        <meshPhysicalMaterial map={colorMap} />
      </mesh>
    </>
  )
}

export default Deer
