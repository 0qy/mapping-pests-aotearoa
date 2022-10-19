import React, { useMemo } from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

const Stoat = (props) => {
  const { setCurrentPest, setShowCard } = props
  const stoatObj = useLoader(OBJLoader, '/models/stoat.obj')

  const [colorMap, normalMap] = useTexture([
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
    setShowCard(true)
  }

  return (
    <>
      <mesh
        onClick={handleClick}
        geometry={geometry}
        scale={0.5}
        position={[2, -1.36, 1.5]}
        rotation={[0, Math.PI / -2, 0]}
      >
        <meshPhysicalMaterial map={colorMap} normalMap={normalMap} />
      </mesh>
    </>
  )
}

export default Stoat
