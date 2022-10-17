import React, { useMemo } from 'react'

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

const Rabbit = (props) => {
  const { setCurrentPest, setShowCard } = props

  const rabbitObj = useLoader(OBJLoader, '/models/rabbit.obj')

  const colorMap = useTexture('/texture/rabbitTex.jpeg')

  const geometry = useMemo(() => {
    let g
    rabbitObj.traverse((c) => {
      if (c.type === 'Mesh') {
        const _c = c
        g = _c.geometry
      }
    })
    return g
  }, [rabbitObj])

  const handleClick = () => {
    setCurrentPest('rabit')
    setShowCard(true)
  }

  return (
    <>
      <mesh
        onClick={handleClick}
        geometry={geometry}
        scale={0.01}
        position={[0.13, -0.85, 1.6]}
        rotation={[0, Math.PI / -2, 0]}
      >
        <meshPhysicalMaterial map={colorMap} />
      </mesh>
    </>
  )
}

export default Rabbit
