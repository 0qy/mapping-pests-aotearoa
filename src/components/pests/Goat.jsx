import React, { useMemo } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Goat = (props) => {
  const { setCurrentPest, setShowCard } = props;
  const obj = useLoader(OBJLoader, "/models/goat.obj");

  const [colorMap] = useTexture(["/texture/goat_tex.jpg"]);

  const geometry = useMemo(() => {
    let g;
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c;
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);

  const handleClick = () => {
    setCurrentPest("feralGoat");
    setShowCard(true);
  };

  return (
    <>
      <mesh
        geometry={geometry}
        scale={0.06}
        position={[-2, -1.5, 1.5]}
        rotation={[Math.PI / -2, 0, Math.PI / 4]}
        onClick={handleClick}
      >
        <meshPhysicalMaterial map={colorMap} />
      </mesh>
    </>
  );
};

export default Goat;
