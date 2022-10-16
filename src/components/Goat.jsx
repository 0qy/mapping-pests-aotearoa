import React, { useMemo } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Goat = (props) => {
  const { setCurrentPest, setShowCard } = props;
  const obj = useLoader(OBJLoader, "/models/goat.obj");
  const [hover, setHover] = useState(false);
  useFrame(() => {
    if (hover) {
      obj.rotation.y += 0.02;
    }
  });
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
        position={[-3, 0.5, 0]}
        rotation={[Math.PI / -2, 0, 0]}
        onClick={handleClick}
        onPointerOver={() => {
          setHover(true);
        }}
        onPointerOut={() => {
          setHover(false);
        }}
      >
        <meshPhysicalMaterial map={colorMap} />
      </mesh>
    </>
  );
};

export default Goat;
