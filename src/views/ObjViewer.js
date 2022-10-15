import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

const ObjViewer = () => {
  return (
    <Canvas>
      <color attach="background" args={[0x000000]} />
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
      <Stars
        radius={100} // Radius of the inner sphere (default=100)
        depth={50} // Depth of area where stars should fit (default=50)
        count={50000} // Amount of stars (default=5000)
        factor={4} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
        fade
        speed={1} // Faded dots (default=false)
      />
    </Canvas>
  );
};

export default ObjViewer;
