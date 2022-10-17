import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { Sky } from "@react-three/drei";
import { PerspectiveCamera } from "three";

import Fog from "../components/Fog";
import Animals from "../components/Animals";

const PestScene = ({ currentPest, setCurrentPest, setShowCard }) => {
  const CameraHelper = () => {
    const camera = new PerspectiveCamera(60, 1, 1, 15);
    return (
      <group position={[0, 4, 9]}>
        <cameraHelper args={[camera]} />;
      </group>
    );
  };

  return (
    <Canvas
      camera={{
        fov: 32,
        near: 0.1,
        far: 1000,
        position: [0, 4, 0],
      }}
    >
      <OrbitControls target={[0, 0, 0]} />
      <Sky
        distance={450000}
        sunPosition={[5, 1, 8]}
        inclination={0}
        azimuth={0.25}
      />

      <ambientLight intensity={0.2} />
      <directionalLight color="orange" position={[0, 0, 6]} />

      <Stars
        radius={100} // Radius of the inner sphere (default=100)
        depth={50} // Depth of area where stars should fit (default=50)
        count={50000} // Amount of stars (default=5000)
        factor={4} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
        fade
        speed={1} // Faded dots (default=false)
      />
      <Animals
        currentPest={currentPest}
        setCurrentPest={setCurrentPest}
        setShowCard={setShowCard}
      />
      <Fog />
      {/* <CameraHelper /> */}
    </Canvas>
  );
};

export default PestScene;
