import React, { useMemo } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Deer = (props) => {
  const { setCurrentPest, setShowCard } = props;
  const deerObj = useLoader(OBJLoader, "/models/deer.obj");


  const colorMap = useTexture("/texture/deer.jpg");

  const geometry = useMemo(() => {
    let g;
    deerObj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c;
        g = _c.geometry;
      }
    });
    return g;
  }, [deerObj]);

  const handleClick = () => {
    setCurrentPest("redDeer");
    setShowCard(true);
  };

  return (
    <>
      <mesh
        onClick={handleClick}
        geometry={geometry}
        scale={0.04}
        position={[1, -1.35, 0]}
      >
        <meshPhysicalMaterial map={colorMap} />
      </mesh>
    </>
  );
};

export default Deer;
