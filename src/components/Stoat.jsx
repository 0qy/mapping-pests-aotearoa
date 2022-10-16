import React, { useMemo } from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { useState } from 'react'

const Stoat = (props) => {
  const { setCurrentPest, setDrawerOpen } = props
  const stoatObj = useLoader(OBJLoader, '/models/stoat.obj')

  const [colorMap, normalMap, roughnessMap] = useTexture([
    '/texture/weasel_n.jpg',
    '/texture/weasel.jpg',
  ])

  const geometry = useMemo(() => {
    let g
    stoatObj.traverse((c) => {
      if (c.type === 'Mesh') {
        const _c = c
        g = _c.geometry
      }
    })
    return g
  }, [stoatObj])

  const handleClick = () => {
    setCurrentPest('stoat')
    setDrawerOpen(true)
  }

  return (
    <>
      <mesh
        onClick={handleClick}
        geometry={geometry}
        scale={0.5}
        position={[-2, 3.7, 0]}
        rotation={[0, 0, 0]}
      >
        <meshPhysicalMaterial map={colorMap} normalMap={normalMap} />
      </mesh>
    </>
  )
}

export default Stoat
