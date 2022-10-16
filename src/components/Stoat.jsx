import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'
import { useGLTF } from '@react-three/drei'

const Stoat = (props) => {
  const stoatObj = useLoader(GLTFLoader, '/models/stoat.gltf')

  return (
    <>
      <Suspense fallback={null}>
        <primitive object={stoatObj} />
      </Suspense>
    </>
  )
}

useGLTF.preload('/models/stoat.gltf')

export default Stoat
