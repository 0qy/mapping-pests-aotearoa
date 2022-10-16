import React from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";

const Deer = (props) => {
  const { setCurrentPest, setDrawerOpen } = props;
  const deerObj = useLoader(OBJLoader, "/models/deer.obj");
  const [hover, setHover] = useState(false);
  useFrame(() => {
    if (hover) {
      deerObj.rotation.y += 0.02;
    }
  });

  const handleClick = () => {
    setCurrentPest("himalayanTahr");
    setDrawerOpen(true);
  };
  return (
    <>
      <primitive
        onClick={handleClick}
        onPointerOver={() => {
          setHover(true);
        }}
        onPointerOut={() => {
          setHover(false);
        }}
        object={deerObj}
        scale={0.3}
        position={[0, 2.3, 0]}
        rotation={[0, Math.PI / -2, 0]}
      />
    </>
  );
};

export default Deer;
