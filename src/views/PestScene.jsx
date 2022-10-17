import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sky } from "@react-three/drei";

import Animals from "../components/Animals";
import Fog from "../components/Fog";
import Gizmo from "../components/helpers/Gizmo";

const PestScene = ({ currentPest, setCurrentPest, setShowCard }) => {
  return (
    <Canvas
      camera={{
        fov: 32,
        near: 0.1,
        far: 1000,
        position: [1.12, 1.73, 10.18],
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
      <Animals
        currentPest={currentPest}
        setCurrentPest={setCurrentPest}
        setShowCard={setShowCard}
      />
      <Fog />
      <Gizmo />
    </Canvas>
  );
};

export default PestScene;
