import React from "react";
import { PerspectiveCamera } from "@react-three/drei";

const CameraHelper = () => {
  const camera = new PerspectiveCamera(60, 1, 7, 15);
  camera.lookAt([5, -1.5, 1.5]);
  return (
    <group position={[3, 0.5, 7.5]}>
      <cameraHelper args={[camera]} />;
    </group>
  );
};

export default CameraHelper;
