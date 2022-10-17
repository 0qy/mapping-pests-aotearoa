import React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CameraAnimation = ({ started, setStarted }) => {
  const vec = new THREE.Vector3();
  useFrame((state) => {
    if (started) {
      state.camera.lookAt(0, 1, 0);
      // state.camera.position.lerp(vec.set(-2, -0.5, 4), 0.008);
    }
    console.log(state.camera);

    // const position = new THREE.Vector3();
    // position.set(6, 6, -4);

    // if (state.camera.position === position) {
    //   setStarted(false);
    // }
  });

  return null;
};

export default CameraAnimation;
