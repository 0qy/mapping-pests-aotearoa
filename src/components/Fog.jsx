import React from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const Fog = () => {
  const { scene } = useThree();

  scene.fog = new THREE.Fog(0xffffff, 0.015, 100);
  return (
    <>
      <fog attach="fog" color="white" near={0.1} far={100} />
    </>
  );
};

export default Fog;
